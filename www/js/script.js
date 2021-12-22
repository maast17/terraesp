function Actuator(name, type, gpio, value, min, max) {
    var self = this;
    self.name = ko.observable(name);
    self.type = ko.observable(type);
    self.gpio = ko.observable(gpio);
    self.value = ko.observable(value);
    self.min = ko.observable(min);
    self.max = ko.observable(max);

    self.enabled = ko.computed(function () {
        return self.value() ? "btn btn-success" : "btn btn-secondary";
    });

    self.isButton = ko.computed(function () {
        return self.type() == 0;
    });

    self.value.subscribe(function (value) {
        var name = self.name();
        var val = value;
        if (typeof value === "boolean") {
            val = value ? 1 : 0;
        }

        console.log("New value: ", value, JSON.stringify({ "name": self.name(), "value": val }));
        $.post("/api/actuator/change",
            { "name": self.name(), "value": val },
            function () {
                console.log("sent");
            });

    });

    self.toggle = function () {
        self.value(!self.value());
    }
}

function updateSunCell(cellID, value) {
    var sunCell = document.getElementById(cellID);
    sunCell.innerHTML = value;
  }

function Settings(general, network, timers, sensors, actuators, thresholds) {
    var self = this;
    self.general = ko.observable(general === undefined ? new SettingsGeneral() : general);
    self.network = ko.observable(network);
    self.timers = ko.observableArray(timers);
    self.sensors = ko.observableArray(sensors);
    self.actuators = ko.observableArray(actuators);
    self.thresholds = ko.observableArray(thresholds);

    self.flatten = function () {
        var data = {};
        data["general"] = self.general();
        data["network"] = self.network();

        console.log(data);
        console.log(self.general);

        data["timers"] = new Array();
        self.timers().forEach(e => {
            var t = Object.assign({}, e);
            t.actuator = e.actuator().name();
            data["timers"].push(t);
        });

        data["sensors"] = self.sensors();
        data["actuators"] = self.actuators();

        data["thresholds"] = new Array();
        self.thresholds().forEach(e => {
            var t = Object.assign({}, e);
            console.log(e);
            t.actuator = e.actuator().name();
            t.sensor = e.sensor().name();
            data["thresholds"].push(t);
        });


        return data;
    }
}

function SettingsGeneral(gmt_offset, originatingGmt_offset, country, originatingCountry, dst, originatingDst, countryName, originatingCountryName) {
    var self = this;
    self.gmt_offset = ko.observable(gmt_offset);
    self.originatingGmt_offset = ko.observable(originatingGmt_offset);
    self.country = ko.observable(country);
    self.countryName = ko.observable(countryName);
    self.originatingCountry = ko.observable(originatingCountry);
    self.originatingCountryName = ko.observable(originatingCountryName);
    self.dst = ko.observable(dst);
    self.originatingDst = ko.observable(originatingDst);
    
}


function SettingsNetwork(hostname) {
    var self = this;
    self.hostname = ko.observable(hostname);
}

function SettingsTimer(name, actuator, on, off, inverted) {
    var self = this;
    self.name = ko.observable(name);
    self.actuator = ko.observable(actuator);
    self.on = ko.observable(on);
    self.off = ko.observable(off);
    self.inverted = ko.observable(inverted);
}

function SettingsSensor(name, type, gpio, address, enabled) {
    var self = this;
    self.name = ko.observable(name);
    self.type = ko.observable(type);
    self.gpio = ko.observable(gpio);
    self.address = ko.observable(address);
    self.enabled = ko.observable(enabled);
}

function SettingsActuator(name, gpio, type, min, max) {
    var self = this;
    self.name = ko.observable(name);
    self.type = ko.observable(type);
    self.gpio = ko.observable(gpio);
    self.min = ko.observable(min);
    self.max = ko.observable(max);
}

function SettingsThreshold(name, duration, threshold, comparator, actuator, inverted, gap, sensor, sensor_type) {
    var self = this;
    self.name = ko.observable(name);
    self.duration = ko.observable(duration);
    self.threshold = ko.observable(threshold);
    self.comparator = ko.observable(comparator);
    self.actuator = ko.observable(actuator);
    self.inverted = ko.observable(inverted);
    self.gap = ko.observable(gap);
    self.sensor = ko.observable(sensor);
    self.sensor_type = ko.observable(sensor_type);
}



// Overall viewmodel for this screen, along with initial state
function TerraESPViewModel() {
    var self = this;

    // Actuators
    self.actuators = ko.observableArray([]);
    $.getJSON("/api/actuators", function (data) {
        console.log("Actuator", data);
        self.actuators($.map(data, function (a) {
            return new Actuator(a.name, a.type, a.gpio, a.value, a.min, a.max);
        }));
    });

    self.suckAss = function () {
        $.getJSON("/api/config", function (data) {
            const d = new Date();
            d.setDate(d.getDate() + 1);
            var dateformat = d.getFullYear() + "-" + (d.getMonth() +1) + "-" + d.getDate();

            //var tempHolder = ko.observable(originatingCountry)
            var lat = data.general.originatingCountry.lat;
            var lon = data.general.originatingCountry.lon;
            var utc_offset = data.general.originatingCountry.utc_offset;
            var originatingCountry = data.general.originatingCountry.name;
            updateSunCell("sunNoonCell", originatingCountry);
            //updateSunCell("sunNoonCell", "https://api.met.no/weatherapi/sunrise/2.0/.json?lat="+ lat +"&lon=" + lon + "&date=" + dateformat + "&offset="+utc_offset);
            
            $.getJSON("https://api.met.no/weatherapi/sunrise/2.0/.json?lat="+ lat +"&lon=" + lon + "&date=" + dateformat + "&offset="+utc_offset, function (data2) {
                var sunrise = data2.location.time[0].sunrise.time.split(/t/gi)[1].split(/-/)[0];
                var sunset= data2.location.time[0].sunset.time.split(/t/gi)[1].split(/-/)[0];

                updateSunCell("sunUpCell", sunrise);
                updateSunCell("sunDownCell", sunset);
            });
        });

    }

    self.updateChart = function () {
        $.getJSON("/api/sensors/all", function (data) {
            console.log("Sensors", data);

            // add time labels
            var labels = data.time.map(function (x) { return new Date(x * 1000); });
            var datasets = [];
            var datasets2 = [];

            // add sensor data
            data.sensors.forEach(e => {
                if ('temperature' in e && e.temperature.length > 0) {
                    var d = new Array();
                    e.temperature.forEach((element, index) => {
                        d.push([data.time[index], element]);
                    });
                    datasets.push({
                        label: "Temperature: " + e.name,
                        color: "rgba(220,120,120,1)",
                        highlightColor: "rgba(220,0,0,1)",
                        data: d
                    });
                }
                if ('humidity' in e && e.humidity.length > 0) {
                    var d = new Array();
                    e.humidity.forEach((element, index) => {
                        d.push([data.time[index], element]);
                    });
                    datasets.push({
                        label: "Humidity: " + e.name,
                        color: "rgba(120,120,220,1)",
                        highlightColor: "rgba(0,0,220,1)",
                        data: d
                    });
                }
            });

            // add weatherprediction
            data.weatherpredicts.forEach(e => {
                if ('temperature' in e && e.temperature.length > 0) {
                    var d = new Array();
                    e.temperature.forEach((element, index) => {
                        d.push([data.weatherTime[index], element]);
                    });
                    datasets2.push({
                        label: "Temperature: " + e.name,
                        color: "rgba(82, 245, 39, 0.8)",
                        highlightColor: "rgba(220,0,0,1)",
                        data: d
                    });
                }
                if ('humidity' in e && e.humidity.length > 0) {
                    var d = new Array();
                    e.humidity.forEach((element, index) => {
                        d.push([data.weatherTime[index], element]);
                    });
                    datasets2.push({
                        label: "Humidity: " + e.name,
                        color: "rgba(219, 39, 245, 0.8)",
                        highlightColor: "rgba(0,0,220,1)",
                        data: d
                    });
                }
            });

            // add events
            var events = [];
            var events_info = [];
            data.events.forEach(e => {
                if (e.time >= data.time[0]) {
                    events_info.push({
                        title: e.name,
                        description: e.description
                    });
                    events.push([e.time, 0]);
                }
            });
            datasets.push({
                label: "events",
                color: "rgba(0,220,0,1)",
                points: {
                    show: true
                },
                lines: {
                    show: false
                }, info: events_info,
                data: events,
                // type: "bubble"
            });

            // add thresholds
            data.thresholds.forEach(e => {
                datasets.push({
                    label: "Threshold: " + e.name,
                    color: "rgba(150,150,150, 1)",
                    highlightColor: "rgba(50,50,50,1)",
                    data: [
                        [data.time[0], e.threshold],
                        [data.time[data.time.length - 1], e.threshold],
                    ]
                });
            });

            console.log(datasets);
            
                        // maast17 chart2
                        var plot = $.plot("#chart2", datasets2, {
                            series: {
                                lines: {
                                    show: true
                                },
                                points: {
                                    show: false
                                }
                            },
                            grid: {
                                hoverable: true,
                                clickable: false
                            },
                            xaxis: {
                                mode: "time",
                                timeformat: "%H:%M"
                            },
                            yaxis: {
                                position: "left",
                                min: 0,
                                max: 100,
                                autoscaleMargin: 10
                            },
                            zoom: {
                                interactive: false
                            },
                            pan: {
                                interactive: true,
                                enableTouch: true
                            },
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s | X: %x | Y: %y.2",
                                //%s -> series label, %x -> X value, %y -> Y value, %x.2 -> precision of X value
                                dateFormat: "%y-%0m-%0d",
                                shifts: {
                                    x: 10,
                                    y: 20
                                },
                                // defaultTheme: true
                            },
            
                        });
            
                        $("<div id='tooltip'></div>").css({
                            position: "absolute",
                            display: "none",
                            border: "1px solid #fdd",
                            padding: "2px",
                            "background-color": "#fee",
                            opacity: 0.80,
                            color: "#000"
                        }).appendTo("body");
            
                        $("#chart2").bind("plothover", function (event, pos, item) {
            
                            if (!pos.x || !pos.y) {
                                return;
                            }
            
                            if (item) {
                                console.log("item", item);
            
                                var str = "";
            
                                if (item.series.info !== undefined) {
                                    str = "<h5>" + item.series.info[item.dataIndex].title + "</h5>" + item.series.info[item.dataIndex].description
            
                                } else {
            
                                    var x = new Date(item.datapoint[0] * 1000).toLocaleTimeString();
                                    var y = item.datapoint[1].toFixed(2);
                                    str = "<h5>" + item.series.label + "</h5>" + x + " = " + y;
                                }
            
                                $("#tooltip").html(str)
                                .css({
                                    top: item.pageY + 5,
                                    left: item.pageX + 5,
                                    "background-color": item.series.color
                                })
                                .fadeIn(200);
                            } else {
                                $("#tooltip").hide();
                                // self.chart_legend(null);
                            }
                        });
            
                        $("#chart2").bind("plothovercleanup", function (event, pos, item) {
                            $("#tooltip").hide();
                            // self.chart_legend(null);
                        });
            
                        // maast17 chart2-end

            var plot = $.plot("#chart", datasets,
                {
                    series: {
                        lines: {
                            show: true
                        },
                        points: {
                            show: false
                        }
                    },
                    grid: {
                        hoverable: true,
                        clickable: false
                    },
                    xaxis: {
                        mode: "time",
                        timeformat: "%H:%M"
                    },
                    yaxis: {
                        position: "left",
                        min: 0,
                        max: 100,
                        autoscaleMargin: 10
                    },
                    zoom: {
                        interactive: false
                    },
                    pan: {
                        interactive: true,
                        enableTouch: true
                    },
                    tooltip: true,
                    tooltipOpts: {
                        content: "%s | X: %x | Y: %y.2",
                        //%s -> series label, %x -> X value, %y -> Y value, %x.2 -> precision of X value
                        dateFormat: "%y-%0m-%0d",
                        shifts: {
                            x: 10,
                            y: 20
                        },
                        // defaultTheme: true
                    },
                });

            $("<div id='tooltip'></div>").css({
                position: "absolute",
                display: "none",
                border: "1px solid #fdd",
                padding: "2px",
                "background-color": "#fee",
                opacity: 0.80,
                color: "#000"
            }).appendTo("body");

            $("#chart").bind("plothover", function (event, pos, item) {

                if (!pos.x || !pos.y) {
                    return;
                }


                if (item) {
                    console.log("item", item);

                    var str = "";

                    if (item.series.info !== undefined) {
                        str = "<h5>" + item.series.info[item.dataIndex].title + "</h5>" + item.series.info[item.dataIndex].description

                    } else {

                        var x = new Date(item.datapoint[0] * 1000).toLocaleTimeString();
                        var y = item.datapoint[1].toFixed(2);
                        str = "<h5>" + item.series.label + "</h5>" + x + " = " + y;
                    }

                    $("#tooltip").html(str)
                        .css({ top: item.pageY + 5, left: item.pageX + 5, "background-color": item.series.color })
                        .fadeIn(200);
                } else {
                    $("#tooltip").hide();
                    // self.chart_legend(null);
                }
            });

            $("#chart").bind("plothovercleanup", function (event, pos, item) {
                $("#tooltip").hide();
                // self.chart_legend(null);
            });
        });
    };


    // Settings
    self.sensor_types = ko.observableArray([
        "ds18b20",
        "SHT31",
        "analog_t",
        "analog_h",
        "DHT11",
        "DHT21",
        "DHT22",
        "AM2301",
        "AM2302",
    ]);

    self.actuator_types = ko.observableArray([
        "toggle",
        "range"
    ]);

    self.comparator_types = ko.observableArray([
        "<",
        ">"
    ]);

    self.sensor_types_th = ko.observableArray([
        "temperature",
        "humidity"
    ]);
    self.countrycompact = ko.observableArray([]); 
    self.tz = ko.observableArray([]);
    $.getJSON("/options.json", function (data) {
        //datArray = [{"name": "neger", "value": "greger"}, {"name": "neger2", "value": "preger"}];
        //datArray.push({"name": "balle", "value": data.general.country})
        self.countrycompact(data.dataList);
        self.tz(data.timeZones);
    });
    


    self.settings = ko.observable(new Settings());
    $.getJSON("/api/config", function (data) {
        console.log("config", data);
        //var general = new SettingsGeneral(data.general.gmt_offset, data.general.dst);
        var convertOffset = data.general.country.utc_offset.split(/:/)[0].replace("+0", "+").replace("-0", "-");
        if (convertOffset == "+") convertOffset = "+0";
        var general = new SettingsGeneral(convertOffset, data.general.originatingCountry.utc_offset, data.general.country, data.general.originatingCountry, data.general.dst, data.general.originatingDst, data.general.country.name, data.general.originatingCountry.name);
        var network = new SettingsNetwork(data.network.hostname);
        var timers = Array();
        var sensors = Array();
        var actuators = Array();
        var thresholds = Array();

        // add Actuators
        data.actuators.forEach(e => {
            actuators.push(new SettingsActuator(e.name, e.gpio, e.type, e.min, e.max));
        });

        // add timers
        data.timers.forEach(e => {
            timers.push(new SettingsTimer(e.name, actuators.find(a => a.name() == e.actuator), e.on, e.off, e.inverted));
        });

        // add sensors
        data.sensors.forEach(e => {
            sensors.push(new SettingsSensor(e.name, e.type,
                e.gpio, e.address, e.enabled));
        });


        // add thresholds
        data.thresholds.forEach(e => {
            thresholds.push(new SettingsThreshold(e.name, e.duration, e.threshold, e.comparator,
                actuators.find(a => a.name() == e.actuator), e.inverted, e.gap,
                sensors.find(a => a.name() == e.sensor), e.sensor_type));
        });

        var settings = new Settings(general, network, timers, sensors, actuators, thresholds);
        console.log("Settings: ", ko.toJSON(settings));
        self.settings(settings);
    });

    self.setCountryValue = function () {
        self.countrycompact().forEach(e => {
            if (e.value.name == self.settings().general().countryName()){
                self.settings().general().country(e.value);
                document.getElementById("demo").innerHTML = "You selected: " + JSON.stringify(self.settings().general().country());
            }
        });
    }

    self.setOriginatingCountryValue = function () {
        self.countrycompact().forEach(e => {
            if (e.value.name == self.settings().general().originatingCountryName()){
                self.settings().general().originatingCountry(e.value);
                document.getElementById("demo").innerHTML = "You selected: " + JSON.stringify(self.settings().general().originatingCountry());
            }
        });

    }

    self.save_settings = function () {
        var data = self.settings().flatten();

        console.log(ko.toJSON(data, null, "\t"));

        var jqxhr = $.post("/api/config",
            ko.toJSON(data),
            function () {
                console.log("sent!");
            })
            .done(function (resp) {
                console.log(resp);
                alert("Saved config! Will reboot now.");
                location.reload(); 
            })
            .fail(function (e) {
                console.log(e);
                if(e.responseText !== undefined){
                    alert("Error: " + e.responseText);
                } else {
                    location.reload();
                }
            });
    };

    self.addSensor = function () {
        self.settings().sensors.push(new SettingsSensor("new sensor",
            self.sensor_types[0],
            15,
            68,
            false));
    };

    self.addActuator = function () {
        self.settings().actuators.push(new SettingsActuator("new actuator",
            12,
            self.actuator_types[0],
            0,
            1023));
    };

    self.addTimer = function () {
        self.settings().timers.push(new SettingsTimer("new timer",
            self.settings().actuators[0],
            "00:00",
            "01:00",
            false));
    };

    self.addThreshold = function () {
        self.settings().thresholds.push(new SettingsThreshold("new threshold",
            0,
            0,
            self.comparator_types[0],
            self.settings().actuators[0],
            false,
            60,
            self.settings().sensors[0],
            self.sensor_types_th[0])
        );
    };

    self.removeSensor = function (sensor) {
        self.settings().sensors.remove(sensor);
    };

    self.removeActuator = function (actuator) {
        self.settings().actuators.remove(actuator);
    };

    self.removeTimer = function (timer) {
        self.settings().timers.remove(timer);
    };

    self.removeThreshold = function (threshold) {
        self.settings().thresholds.remove(threshold);
    };
}

var model = new TerraESPViewModel();
window.setInterval(model.updateChart, 60000);
model.updateChart();
window.setInterval(model.suckAss, 60000);
model.suckAss();
ko.applyBindings(model);