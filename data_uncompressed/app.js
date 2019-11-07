/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,b){'use strict';function z(b,h){var d=[],c=b.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[?*])?/g,function(b,c,h,k){b="?"===k||"*?"===k;k="*"===k||"*?"===k;d.push({name:h,optional:b});c=c||"";return(b?"(?:"+c:c+"(?:")+(k?"(.+?)":"([^/]+)")+(b?"?)?":")")}).replace(/([/$*])/g,"\\$1");h.ignoreTrailingSlashes&&(c=c.replace(/\/+$/,"")+"/*");return{keys:d,regexp:new RegExp("^"+c+"(?:[?#]|$)",h.caseInsensitiveMatch?"i":"")}}function A(b){p&&b.get("$route")}function v(u,h,d){return{restrict:"ECA",
terminal:!0,priority:400,transclude:"element",link:function(c,f,g,l,k){function q(){r&&(d.cancel(r),r=null);m&&(m.$destroy(),m=null);s&&(r=d.leave(s),r.done(function(b){!1!==b&&(r=null)}),s=null)}function C(){var g=u.current&&u.current.locals;if(b.isDefined(g&&g.$template)){var g=c.$new(),l=u.current;s=k(g,function(g){d.enter(g,null,s||f).done(function(d){!1===d||!b.isDefined(w)||w&&!c.$eval(w)||h()});q()});m=l.scope=g;m.$emit("$viewContentLoaded");m.$eval(p)}else q()}var m,s,r,w=g.autoscroll,p=g.onload||
"";c.$on("$routeChangeSuccess",C);C()}}}function x(b,h,d){return{restrict:"ECA",priority:-400,link:function(c,f){var g=d.current,l=g.locals;f.html(l.$template);var k=b(f.contents());if(g.controller){l.$scope=c;var q=h(g.controller,l);g.controllerAs&&(c[g.controllerAs]=q);f.data("$ngControllerController",q);f.children().data("$ngControllerController",q)}c[g.resolveAs||"$resolve"]=l;k(c)}}}var D,E,F,G,y=b.module("ngRoute",[]).info({angularVersion:"1.7.8"}).provider("$route",function(){function u(d,
c){return b.extend(Object.create(d),c)}D=b.isArray;E=b.isObject;F=b.isDefined;G=b.noop;var h={};this.when=function(d,c){var f;f=void 0;if(D(c)){f=f||[];for(var g=0,l=c.length;g<l;g++)f[g]=c[g]}else if(E(c))for(g in f=f||{},c)if("$"!==g.charAt(0)||"$"!==g.charAt(1))f[g]=c[g];f=f||c;b.isUndefined(f.reloadOnUrl)&&(f.reloadOnUrl=!0);b.isUndefined(f.reloadOnSearch)&&(f.reloadOnSearch=!0);b.isUndefined(f.caseInsensitiveMatch)&&(f.caseInsensitiveMatch=this.caseInsensitiveMatch);h[d]=b.extend(f,{originalPath:d},
d&&z(d,f));d&&(g="/"===d[d.length-1]?d.substr(0,d.length-1):d+"/",h[g]=b.extend({originalPath:d,redirectTo:d},z(g,f)));return this};this.caseInsensitiveMatch=!1;this.otherwise=function(b){"string"===typeof b&&(b={redirectTo:b});this.when(null,b);return this};p=!0;this.eagerInstantiationEnabled=function(b){return F(b)?(p=b,this):p};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce","$browser",function(d,c,f,g,l,k,q,p){function m(a){var e=t.current;n=A();(x=
!B&&n&&e&&n.$$route===e.$$route&&(!n.reloadOnUrl||!n.reloadOnSearch&&b.equals(n.pathParams,e.pathParams)))||!e&&!n||d.$broadcast("$routeChangeStart",n,e).defaultPrevented&&a&&a.preventDefault()}function s(){var a=t.current,e=n;if(x)a.params=e.params,b.copy(a.params,f),d.$broadcast("$routeUpdate",a);else if(e||a){B=!1;t.current=e;var c=g.resolve(e);p.$$incOutstandingRequestCount("$route");c.then(r).then(w).then(function(g){return g&&c.then(y).then(function(c){e===t.current&&(e&&(e.locals=c,b.copy(e.params,
f)),d.$broadcast("$routeChangeSuccess",e,a))})}).catch(function(b){e===t.current&&d.$broadcast("$routeChangeError",e,a,b)}).finally(function(){p.$$completeOutstandingRequest(G,"$route")})}}function r(a){var e={route:a,hasRedirection:!1};if(a)if(a.redirectTo)if(b.isString(a.redirectTo))e.path=v(a.redirectTo,a.params),e.search=a.params,e.hasRedirection=!0;else{var d=c.path(),f=c.search();a=a.redirectTo(a.pathParams,d,f);b.isDefined(a)&&(e.url=a,e.hasRedirection=!0)}else if(a.resolveRedirectTo)return g.resolve(l.invoke(a.resolveRedirectTo)).then(function(a){b.isDefined(a)&&
(e.url=a,e.hasRedirection=!0);return e});return e}function w(a){var b=!0;if(a.route!==t.current)b=!1;else if(a.hasRedirection){var g=c.url(),d=a.url;d?c.url(d).replace():d=c.path(a.path).search(a.search).replace().url();d!==g&&(b=!1)}return b}function y(a){if(a){var e=b.extend({},a.resolve);b.forEach(e,function(a,c){e[c]=b.isString(a)?l.get(a):l.invoke(a,null,null,c)});a=z(a);b.isDefined(a)&&(e.$template=a);return g.all(e)}}function z(a){var e,c;b.isDefined(e=a.template)?b.isFunction(e)&&(e=e(a.params)):
b.isDefined(c=a.templateUrl)&&(b.isFunction(c)&&(c=c(a.params)),b.isDefined(c)&&(a.loadedTemplateUrl=q.valueOf(c),e=k(c)));return e}function A(){var a,e;b.forEach(h,function(d,g){var f;if(f=!e){var h=c.path();f=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,p=h.length;k<p;++k){var m=f[k-1],n=h[k];m&&n&&(l[m.name]=n)}f=l}else f=null;else f=null;f=a=f}f&&(e=u(d,{params:b.extend({},c.search(),a),pathParams:a}),e.$$route=d)});return e||h[null]&&u(h[null],{params:{},pathParams:{}})}function v(a,
c){var d=[];b.forEach((a||"").split(":"),function(a,b){if(0===b)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),g=f[1];d.push(c[g]);d.push(f[2]||"");delete c[g]}});return d.join("")}var B=!1,n,x,t={routes:h,reload:function(){B=!0;var a={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0;B=!1}};d.$evalAsync(function(){m(a);a.defaultPrevented||s()})},updateParams:function(a){if(this.current&&this.current.$$route)a=b.extend({},this.current.params,a),c.path(v(this.current.$$route.originalPath,
a)),c.search(a);else throw H("norout");}};d.$on("$locationChangeStart",m);d.$on("$locationChangeSuccess",s);return t}]}).run(A),H=b.$$minErr("ngRoute"),p;A.$inject=["$injector"];y.provider("$routeParams",function(){this.$get=function(){return{}}});y.directive("ngView",v);y.directive("ngView",x);v.$inject=["$route","$anchorScroll","$animate"];x.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 Highstock JS v7.2.0 (2019-09-03)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(Q,K){"object"===typeof module&&module.exports?(K["default"]=K,module.exports=Q.document?K(Q):K):"function"===typeof define&&define.amd?define("highcharts/highstock",function(){return K(Q)}):(Q.Highcharts&&Q.Highcharts.error(16,!0),Q.Highcharts=K(Q))})("undefined"!==typeof window?window:this,function(Q){function K(d,k,w,D){d.hasOwnProperty(k)||(d[k]=D.apply(null,w))}var I={};K(I,"parts/Globals.js",[],function(){var d="undefined"!==typeof Q?Q:"undefined"!==typeof window?window:{},k=d.document,
w=d.navigator&&d.navigator.userAgent||"",D=k&&k.createElementNS&&!!k.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,H=/(edge|msie|trident)/i.test(w)&&!d.opera,E=-1!==w.indexOf("Firefox"),y=-1!==w.indexOf("Chrome"),C=E&&4>parseInt(w.split("Firefox/")[1],10);return{product:"Highcharts",version:"7.2.0",deg2rad:2*Math.PI/360,doc:k,hasBidiBug:C,hasTouch:!!d.TouchEvent,isMS:H,isWebKit:-1!==w.indexOf("AppleWebKit"),isFirefox:E,isChrome:y,isSafari:!y&&-1!==w.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(w),
SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:D,win:d,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},charts:[],dateFormats:{}}});K(I,"parts/Utilities.js",[I["parts/Globals.js"]],function(d){function k(c,a){return parseInt(c,a||10)}function w(c){return"string"===typeof c}function D(c){c=Object.prototype.toString.call(c);return"[object Array]"===c||"[object Array Iterator]"===c}function H(c,a){return!!c&&"object"===typeof c&&(!a||
!D(c))}function E(c){return H(c)&&"number"===typeof c.nodeType}function y(c){var a=c&&c.constructor;return!(!H(c,!0)||E(c)||!a||!a.name||"Object"===a.name)}function C(c){return"number"===typeof c&&!isNaN(c)&&Infinity>c&&-Infinity<c}function t(c){return"undefined"!==typeof c&&null!==c}function G(c,a,b){var f;w(a)?t(b)?c.setAttribute(a,b):c&&c.getAttribute&&((f=c.getAttribute(a))||"class"!==a||(f=c.getAttribute(a+"Name"))):u(a,function(a,b){c.setAttribute(b,a)});return f}function u(c,a,b){for(var f in c)Object.hasOwnProperty.call(c,
f)&&a.call(b||c[f],c[f],f,c)}d.timers=[];var l=d.charts,p=d.doc,q=d.win;d.error=function(c,a,b){var f=C(c)?"Highcharts error #"+c+": www.highcharts.com/errors/"+c:c,m=function(){if(a)throw Error(f);q.console&&console.log(f)};b?d.fireEvent(b,"displayError",{code:c,message:f},m):m()};d.Fx=function(c,a,b){this.options=a;this.elem=c;this.prop=b};d.Fx.prototype={dSetter:function(){var c=this.paths[0],a=this.paths[1],b=[],f=this.now,m=c.length;if(1===f)b=this.toD;else if(m===a.length&&1>f)for(;m--;){var h=
parseFloat(c[m]);b[m]=isNaN(h)?a[m]:f*parseFloat(""+(a[m]-h))+h}else b=a;this.elem.attr("d",b,null,!0)},update:function(){var c=this.elem,a=this.prop,b=this.now,f=this.options.step;if(this[a+"Setter"])this[a+"Setter"]();else c.attr?c.element&&c.attr(a,b,null,!0):c.style[a]=b+this.unit;f&&f.call(c,b,this)},run:function(c,a,b){var f=this,m=f.options,h=function(a){return h.stopped?!1:f.step(a)},r=q.requestAnimationFrame||function(a){setTimeout(a,13)},x=function(){for(var a=0;a<d.timers.length;a++)d.timers[a]()||
d.timers.splice(a--,1);d.timers.length&&r(x)};c!==a||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=c,this.end=a,this.unit=b,this.now=this.start,this.pos=0,h.elem=this.elem,h.prop=this.prop,h()&&1===d.timers.push(h)&&r(x)):(delete m.curAnim[this.prop],m.complete&&0===Object.keys(m.curAnim).length&&m.complete.call(this.elem))},step:function(c){var a=+new Date,b=this.options,f=this.elem,m=b.complete,h=b.duration,d=b.curAnim;if(f.attr&&!f.element)c=!1;else if(c||a>=h+this.startTime){this.now=
this.end;this.pos=1;this.update();var x=d[this.prop]=!0;u(d,function(a){!0!==a&&(x=!1)});x&&m&&m.call(f);c=!1}else this.pos=b.easing((a-this.startTime)/h),this.now=this.start+(this.end-this.start)*this.pos,this.update(),c=!0;return c},initPath:function(c,a,b){function f(a){for(g=a.length;g--;){var e="M"===a[g]||"L"===a[g];var b=/[a-zA-Z]/.test(a[g+3]);e&&b&&a.splice(g+1,0,a[g+1],a[g+2],a[g+1],a[g+2])}}function m(a,e){for(;a.length<J;){a[0]=e[J-a.length];var b=a.slice(0,n);[].splice.apply(a,[0,0].concat(b));
F&&(b=a.slice(a.length-n),[].splice.apply(a,[a.length,0].concat(b)),g--)}a[0]="M"}function h(a,b){for(var g=(J-a.length)/n;0<g&&g--;)e=a.slice().splice(a.length/A-n,n*A),e[0]=b[J-n-g*n],v&&(e[n-6]=e[n-2],e[n-5]=e[n-1]),[].splice.apply(a,[a.length/A,0].concat(e)),F&&g--}a=a||"";var d=c.startX,x=c.endX,v=-1<a.indexOf("C"),n=v?7:3,e,g;a=a.split(" ");b=b.slice();var F=c.isArea,A=F?2:1;v&&(f(a),f(b));if(d&&x){for(g=0;g<d.length;g++)if(d[g]===x[0]){var z=g;break}else if(d[0]===x[x.length-d.length+g]){z=
g;var B=!0;break}else if(d[d.length-1]===x[x.length-d.length+g]){z=d.length-g;break}"undefined"===typeof z&&(a=[])}if(a.length&&C(z)){var J=b.length+z*A*n;B?(m(a,b),h(b,a)):(m(b,a),h(a,b))}return[a,b]},fillSetter:function(){d.Fx.prototype.strokeSetter.apply(this,arguments)},strokeSetter:function(){this.elem.attr(this.prop,d.color(this.start).tweenTo(d.color(this.end),this.pos),null,!0)}};d.merge=function(){var c,a=arguments,b={},f=function(a,b){"object"!==typeof a&&(a={});u(b,function(c,h){!H(c,!0)||
y(c)||E(c)?a[h]=b[h]:a[h]=f(a[h]||{},c)});return a};!0===a[0]&&(b=a[1],a=Array.prototype.slice.call(a,2));var m=a.length;for(c=0;c<m;c++)b=f(b,a[c]);return b};d.syncTimeout=function(c,a,b){if(a)return setTimeout(c,a,b);c.call(0,b)};d.clearTimeout=function(c){t(c)&&clearTimeout(c)};d.extend=function(c,a){var b;c||(c={});for(b in a)c[b]=a[b];return c};d.pick=function(){var c=arguments,a,b=c.length;for(a=0;a<b;a++){var f=c[a];if("undefined"!==typeof f&&null!==f)return f}};d.css=function(c,a){d.isMS&&
!d.svg&&a&&"undefined"!==typeof a.opacity&&(a.filter="alpha(opacity="+100*a.opacity+")");d.extend(c.style,a)};d.createElement=function(c,a,b,f,m){c=p.createElement(c);var h=d.css;a&&d.extend(c,a);m&&h(c,{padding:"0",border:"none",margin:"0"});b&&h(c,b);f&&f.appendChild(c);return c};d.extendClass=function(c,a){var b=function(){};b.prototype=new c;d.extend(b.prototype,a);return b};d.pad=function(c,a,b){return Array((a||2)+1-String(c).replace("-","").length).join(b||"0")+c};d.relativeLength=function(c,
a,b){return/%$/.test(c)?a*parseFloat(c)/100+(b||0):parseFloat(c)};d.wrap=function(c,a,b){var f=c[a];c[a]=function(){var a=Array.prototype.slice.call(arguments),c=arguments,d=this;d.proceed=function(){f.apply(d,arguments.length?arguments:c)};a.unshift(f);a=b.apply(this,a);d.proceed=null;return a}};d.datePropsToTimestamps=function(c){u(c,function(a,b){H(a)&&"function"===typeof a.getTime?c[b]=a.getTime():(H(a)||D(a))&&d.datePropsToTimestamps(a)})};d.formatSingle=function(c,a,b){var f=/\.([0-9])/,m=d.defaultOptions.lang;
/f$/.test(c)?(b=(b=c.match(f))?b[1]:-1,null!==a&&(a=d.numberFormat(a,b,m.decimalPoint,-1<c.indexOf(",")?m.thousandsSep:""))):a=(b||d.time).dateFormat(c,a);return a};d.format=function(c,a,b){for(var f="{",m=!1,h,r,x,v,n=[],e;c;){f=c.indexOf(f);if(-1===f)break;h=c.slice(0,f);if(m){h=h.split(":");r=h.shift().split(".");v=r.length;e=a;for(x=0;x<v;x++)e&&(e=e[r[x]]);h.length&&(e=d.formatSingle(h.join(":"),e,b));n.push(e)}else n.push(h);c=c.slice(f+1);f=(m=!m)?"}":"{"}n.push(c);return n.join("")};d.getMagnitude=
function(c){return Math.pow(10,Math.floor(Math.log(c)/Math.LN10))};d.normalizeTickInterval=function(c,a,b,f,m){var h=c;b=d.pick(b,1);var r=c/b;a||(a=m?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===f&&(1===b?a=a.filter(function(a){return 0===a%1}):.1>=b&&(a=[1/b])));for(f=0;f<a.length&&!(h=a[f],m&&h*b>=c||!m&&r<=(a[f]+(a[f+1]||a[f]))/2);f++);return h=d.correctFloat(h*b,-Math.round(Math.log(.001)/Math.LN10))};d.stableSort=function(c,a){var b=c.length,f,m;for(m=0;m<b;m++)c[m].safeI=m;c.sort(function(b,
c){f=a(b,c);return 0===f?b.safeI-c.safeI:f});for(m=0;m<b;m++)delete c[m].safeI};d.arrayMin=function(c){for(var a=c.length,b=c[0];a--;)c[a]<b&&(b=c[a]);return b};d.arrayMax=function(c){for(var a=c.length,b=c[0];a--;)c[a]>b&&(b=c[a]);return b};d.destroyObjectProperties=function(c,a){u(c,function(b,f){b&&b!==a&&b.destroy&&b.destroy();delete c[f]})};d.discardElement=function(c){var a=d.garbageBin;a||(a=d.createElement("div"));c&&a.appendChild(c);a.innerHTML=""};d.correctFloat=function(c,a){return parseFloat(c.toPrecision(a||
14))};d.setAnimation=function(c,a){a.renderer.globalAnimation=d.pick(c,a.options.chart.animation,!0)};d.animObject=function(c){return H(c)?d.merge(c):{duration:c?500:0}};d.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};d.numberFormat=function(c,a,b,f){c=+c||0;a=+a;var m=d.defaultOptions.lang,h=(c.toString().split(".")[1]||"").split("e")[0].length,r=c.toString().split("e");if(-1===a)a=Math.min(h,20);else if(!C(a))a=2;else if(a&&r[1]&&0>r[1]){var x=
a+ +r[1];0<=x?(r[0]=(+r[0]).toExponential(x).split("e")[0],a=x):(r[0]=r[0].split(".")[0]||0,c=20>a?(r[0]*Math.pow(10,r[1])).toFixed(a):0,r[1]=0)}var v=(Math.abs(r[1]?r[0]:c)+Math.pow(10,-Math.max(a,h)-1)).toFixed(a);h=String(k(v));x=3<h.length?h.length%3:0;b=d.pick(b,m.decimalPoint);f=d.pick(f,m.thousandsSep);c=(0>c?"-":"")+(x?h.substr(0,x)+f:"");c+=h.substr(x).replace(/(\d{3})(?=\d)/g,"$1"+f);a&&(c+=b+v.slice(-a));r[1]&&0!==+c&&(c+="e"+r[1]);return c};Math.easeInOutSine=function(c){return-.5*(Math.cos(Math.PI*
c)-1)};d.getStyle=function(c,a,b){if("width"===a)return a=Math.min(c.offsetWidth,c.scrollWidth),b=c.getBoundingClientRect&&c.getBoundingClientRect().width,b<a&&b>=a-1&&(a=Math.floor(b)),Math.max(0,a-d.getStyle(c,"padding-left")-d.getStyle(c,"padding-right"));if("height"===a)return Math.max(0,Math.min(c.offsetHeight,c.scrollHeight)-d.getStyle(c,"padding-top")-d.getStyle(c,"padding-bottom"));q.getComputedStyle||d.error(27,!0);if(c=q.getComputedStyle(c,void 0))c=c.getPropertyValue(a),d.pick(b,"opacity"!==
a)&&(c=k(c));return c};d.inArray=function(c,a,b){return a.indexOf(c,b)};d.find=Array.prototype.find?function(c,a){return c.find(a)}:function(c,a){var b,f=c.length;for(b=0;b<f;b++)if(a(c[b],b))return c[b]};d.keys=Object.keys;d.offset=function(c){var a=p.documentElement;c=c.parentElement||c.parentNode?c.getBoundingClientRect():{top:0,left:0};return{top:c.top+(q.pageYOffset||a.scrollTop)-(a.clientTop||0),left:c.left+(q.pageXOffset||a.scrollLeft)-(a.clientLeft||0)}};d.stop=function(c,a){for(var b=d.timers.length;b--;)d.timers[b].elem!==
c||a&&a!==d.timers[b].prop||(d.timers[b].stopped=!0)};u({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(c,a){d[a]=function(a){return Array.prototype[c].apply(a,[].slice.call(arguments,1))}});d.addEvent=function(c,a,b,f){void 0===f&&(f={});var m=c.addEventListener||d.addEventListenerPolyfill;var h="function"===typeof c&&c.prototype?c.prototype.protoEvents=c.prototype.protoEvents||{}:c.hcEvents=c.hcEvents||{};d.Point&&c instanceof d.Point&&c.series&&c.series.chart&&(c.series.chart.runTrackerClick=
!0);m&&m.call(c,a,b,!1);h[a]||(h[a]=[]);h[a].push({fn:b,order:"number"===typeof f.order?f.order:Infinity});h[a].sort(function(a,b){return a.order-b.order});return function(){d.removeEvent(c,a,b)}};d.removeEvent=function(c,a,b){function f(a,b){var f=c.removeEventListener||d.removeEventListenerPolyfill;f&&f.call(c,a,b,!1)}function m(b){var h;if(c.nodeName){if(a){var m={};m[a]=!0}else m=b;u(m,function(a,e){if(b[e])for(h=b[e].length;h--;)f(e,b[e][h].fn)})}}var h;["protoEvents","hcEvents"].forEach(function(d){var r=
c[d];r&&(a?(h=r[a]||[],b?(r[a]=h.filter(function(a){return b!==a.fn}),f(a,b)):(m(r),r[a]=[])):(m(r),c[d]={}))})};d.fireEvent=function(c,a,b,f){var m;b=b||{};if(p.createEvent&&(c.dispatchEvent||c.fireEvent)){var h=p.createEvent("Events");h.initEvent(a,!0,!0);d.extend(h,b);c.dispatchEvent?c.dispatchEvent(h):c.fireEvent(a,h)}else b.target||d.extend(b,{preventDefault:function(){b.defaultPrevented=!0},target:c,type:a}),function(a,f){void 0===a&&(a=[]);void 0===f&&(f=[]);var h=0,n=0,e=a.length+f.length;
for(m=0;m<e;m++)!1===(a[h]?f[n]?a[h].order<=f[n].order?a[h++]:f[n++]:a[h++]:f[n++]).fn.call(c,b)&&b.preventDefault()}(c.protoEvents&&c.protoEvents[a],c.hcEvents&&c.hcEvents[a]);f&&!b.defaultPrevented&&f.call(c,b)};d.animate=function(c,a,b){var f,m="",h,r;if(!H(b)){var x=arguments;b={duration:x[2],easing:x[3],complete:x[4]}}C(b.duration)||(b.duration=400);b.easing="function"===typeof b.easing?b.easing:Math[b.easing]||Math.easeInOutSine;b.curAnim=d.merge(a);u(a,function(v,n){d.stop(c,n);r=new d.Fx(c,
b,n);h=null;"d"===n?(r.paths=r.initPath(c,c.d,a.d),r.toD=a.d,f=0,h=1):c.attr?f=c.attr(n):(f=parseFloat(d.getStyle(c,n))||0,"opacity"!==n&&(m="px"));h||(h=v);h&&h.match&&h.match("px")&&(h=h.replace(/px/g,""));r.run(f,h,m)})};d.seriesType=function(c,a,b,f,m){var h=d.getOptions(),r=d.seriesTypes;h.plotOptions[c]=d.merge(h.plotOptions[a],b);r[c]=d.extendClass(r[a]||function(){},f);r[c].prototype.type=c;m&&(r[c].prototype.pointClass=d.extendClass(d.Point,m));return r[c]};d.uniqueKey=function(){var c=Math.random().toString(36).substring(2,
9),a=0;return function(){return"highcharts-"+c+"-"+a++}}();d.isFunction=function(c){return"function"===typeof c};q.jQuery&&(q.jQuery.fn.highcharts=function(){var c=[].slice.call(arguments);if(this[0])return c[0]?(new (d[w(c[0])?c.shift():"Chart"])(this[0],c[0],c[1]),this):l[G(this[0],"data-highcharts-chart")]});return{attr:G,defined:t,erase:function(c,a){for(var b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}},isArray:D,isClass:y,isDOMElement:E,isNumber:C,isObject:H,isString:w,objectEach:u,pInt:k,
splat:function(c){return D(c)?c:[c]}}});K(I,"parts/Color.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.isNumber,D=k.pInt,H=d.merge;d.Color=function(E){if(!(this instanceof d.Color))return new d.Color(E);this.init(E)};d.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(d){return[D(d[1]),D(d[2]),D(d[3]),parseFloat(d[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
parse:function(d){return[D(d[1]),D(d[2]),D(d[3]),1]}}],names:{white:"#ffffff",black:"#000000"},init:function(k){var y,C;if((this.input=k=this.names[k&&k.toLowerCase?k.toLowerCase():""]||k)&&k.stops)this.stops=k.stops.map(function(u){return new d.Color(u[1])});else{if(k&&k.charAt&&"#"===k.charAt()){var t=k.length;k=parseInt(k.substr(1),16);7===t?y=[(k&16711680)>>16,(k&65280)>>8,k&255,1]:4===t&&(y=[(k&3840)>>4|(k&3840)>>8,(k&240)>>4|k&240,(k&15)<<4|k&15,1])}if(!y)for(C=this.parsers.length;C--&&!y;){var E=
this.parsers[C];(t=E.regex.exec(k))&&(y=E.parse(t))}}this.rgba=y||[]},get:function(d){var y=this.input,k=this.rgba;if(this.stops){var t=H(y);t.stops=[].concat(t.stops);this.stops.forEach(function(k,u){t.stops[u]=[t.stops[u][0],k.get(d)]})}else t=k&&w(k[0])?"rgb"===d||!d&&1===k[3]?"rgb("+k[0]+","+k[1]+","+k[2]+")":"a"===d?k[3]:"rgba("+k.join(",")+")":y;return t},brighten:function(d){var k,C=this.rgba;if(this.stops)this.stops.forEach(function(k){k.brighten(d)});else if(w(d)&&0!==d)for(k=0;3>k;k++)C[k]+=
D(255*d),0>C[k]&&(C[k]=0),255<C[k]&&(C[k]=255);return this},setOpacity:function(d){this.rgba[3]=d;return this},tweenTo:function(d,k){var y=this.rgba,t=d.rgba;t.length&&y&&y.length?(d=1!==t[3]||1!==y[3],k=(d?"rgba(":"rgb(")+Math.round(t[0]+(y[0]-t[0])*(1-k))+","+Math.round(t[1]+(y[1]-t[1])*(1-k))+","+Math.round(t[2]+(y[2]-t[2])*(1-k))+(d?","+(t[3]+(y[3]-t[3])*(1-k)):"")+")"):k=d.input||"none";return k}};d.color=function(k){return new d.Color(k)}});K(I,"parts/SvgRenderer.js",[I["parts/Globals.js"],
I["parts/Utilities.js"]],function(d,k){var w=k.attr,D=k.defined,H=k.erase,E=k.isArray,y=k.isNumber,C=k.isObject,t=k.isString,G=k.objectEach,u=k.pInt,l=k.splat,p=d.addEvent,q=d.animate,c=d.charts,a=d.color,b=d.css,f=d.createElement,m=d.deg2rad,h=d.destroyObjectProperties,r=d.doc,x=d.extend,v=d.hasTouch,n=d.isFirefox,e=d.isMS,g=d.isWebKit,F=d.merge,A=d.noop,z=d.pick,B=d.removeEvent,J=d.stop,M=d.svg,T=d.SVG_NS,N=d.symbolSizes,R=d.win;var L=d.SVGElement=function(){return this};x(L.prototype,{opacity:1,
SVG_NS:T,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),init:function(a,b){this.element="span"===b?f(b):r.createElementNS(this.SVG_NS,b);this.renderer=a;d.fireEvent(this,"afterInit")},animate:function(a,b,e){var g=d.animObject(z(b,this.renderer.globalAnimation,!0));z(r.hidden,r.msHidden,r.webkitHidden,!1)&&(g.duration=0);0!==g.duration?(e&&(g.complete=e),q(this,a,g)):(this.attr(a,void 0,e),G(a,
function(a,b){g.step&&g.step.call(this,a,{prop:b,pos:1})},this));return this},complexColor:function(a,b,e){var g=this.renderer,c,z,B,f,h,P,n,m,A,O,J,r=[],v;d.fireEvent(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?z="radialGradient":a.linearGradient&&(z="linearGradient");z&&(B=a[z],h=g.gradients,n=a.stops,O=e.radialReference,E(B)&&(a[z]=B={x1:B[0],y1:B[1],x2:B[2],y2:B[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===z&&O&&!D(B.gradientUnits)&&(f=B,B=F(B,g.getRadialAttr(O,
f),{gradientUnits:"userSpaceOnUse"})),G(B,function(a,b){"id"!==b&&r.push(b,a)}),G(n,function(a){r.push(a)}),r=r.join(","),h[r]?J=h[r].attr("id"):(B.id=J=d.uniqueKey(),h[r]=P=g.createElement(z).attr(B).add(g.defs),P.radAttr=f,P.stops=[],n.forEach(function(a){0===a[1].indexOf("rgba")?(c=d.color(a[1]),m=c.get("rgb"),A=c.get("a")):(m=a[1],A=1);a=g.createElement("stop").attr({offset:a[0],"stop-color":m,"stop-opacity":A}).add(P);P.stops.push(a)})),v="url("+g.url+"#"+J+")",e.setAttribute(b,v),e.gradient=
r,a.toString=function(){return v})})},applyTextOutline:function(a){var b=this.element,e;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(b.style.fill)));a=a.split(" ");var g=a[a.length-1];if((e=a[0])&&"none"!==e&&d.svg){this.fakeTS=!0;a=[].slice.call(b.getElementsByTagName("tspan"));this.ySetter=this.xSetter;e=e.replace(/(^[\d\.]+)(.*?)$/g,function(a,b,e){return 2*b+e});this.removeTextOutline(a);var z=b.firstChild;a.forEach(function(a,c){0===c&&(a.setAttribute("x",b.getAttribute("x")),
c=b.getAttribute("y"),a.setAttribute("y",c||0),null===c&&b.setAttribute("y",0));a=a.cloneNode(1);w(a,{"class":"highcharts-text-outline",fill:g,stroke:g,"stroke-width":e,"stroke-linejoin":"round"});b.insertBefore(a,z)})}},removeTextOutline:function(a){for(var b=a.length,e;b--;)e=a[b],"highcharts-text-outline"===e.getAttribute("class")&&H(a,this.element.removeChild(e))},symbolCustomAttribs:"x y width height r start end innerR anchorX anchorY rounded".split(" "),attr:function(a,b,e,g){var c=this.element,
z,B=this,f,h,n=this.symbolCustomAttribs;if("string"===typeof a&&void 0!==b){var m=a;a={};a[m]=b}"string"===typeof a?B=(this[a+"Getter"]||this._defaultGetter).call(this,a,c):(G(a,function(b,e){f=!1;g||J(this,e);this.symbolName&&-1!==d.inArray(e,n)&&(z||(this.symbolAttr(a),z=!0),f=!0);!this.rotation||"x"!==e&&"y"!==e||(this.doTransform=!0);f||(h=this[e+"Setter"]||this._defaultSetter,h.call(this,b,e,c),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(e)&&this.updateShadows(e,
b,h))},this),this.afterSetters());e&&e.call(this);return B},afterSetters:function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},updateShadows:function(a,b,e){for(var g=this.shadows,c=g.length;c--;)e.call(g[c],"height"===a?Math.max(b-(g[c].cutHeight||0),0):"d"===a?this.d:b,a,g[c])},addClass:function(a,b){var e=this.attr("class")||"";b||(a=(a||"").split(/ /g).reduce(function(a,b){-1===e.indexOf(b)&&a.push(b);return a},e?[e]:[]).join(" "));a!==e&&this.attr("class",a);return this},
hasClass:function(a){return-1!==(this.attr("class")||"").split(" ").indexOf(a)},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var b=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(e){b[e]=z(a[e],b[e])});b.attr({d:b.renderer.symbols[b.symbolName](b.x,b.y,b.width,b.height,b)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,
b){b=b||a.strokeWidth||0;var e=Math.round(b)%2/2;a.x=Math.floor(a.x||this.x||0)+e;a.y=Math.floor(a.y||this.y||0)+e;a.width=Math.floor((a.width||this.width||0)-2*e);a.height=Math.floor((a.height||this.height||0)-2*e);D(a.strokeWidth)&&(a.strokeWidth=b);return a},css:function(a){var e=this.styles,g={},c=this.element,z="",B=!e,f=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);e&&G(a,function(a,b){a!==e[b]&&(g[b]=a,B=!0)});if(B){e&&(a=x(e,g));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;
else if("text"===c.nodeName.toLowerCase()&&a.width)var h=this.textWidth=u(a.width);this.styles=a;h&&!M&&this.renderer.forExport&&delete a.width;if(c.namespaceURI===this.SVG_NS){var n=function(a,b){return"-"+b.toLowerCase()};G(a,function(a,b){-1===f.indexOf(b)&&(z+=b.replace(/([A-Z])/g,n)+":"+a+";")});z&&w(c,"style",z)}else b(c,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this},getStyle:function(a){return R.getComputedStyle(this.element||
this,"").getPropertyValue(a)},strokeWidth:function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width");if(a.indexOf("px")===a.length-2)a=u(a);else{var b=r.createElementNS(T,"rect");w(b,{width:a,"stroke-width":0});this.element.parentNode.appendChild(b);a=b.getBBox().width;b.parentNode.removeChild(b)}return a},on:function(a,b){var e=this,g=e.element;v&&"click"===a?(g.ontouchstart=function(a){e.touchEventFired=Date.now();a.preventDefault();b.call(g,a)},g.onclick=
function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-(e.touchEventFired||0))&&b.call(g,a)}):g["on"+a]=b;return this},setRadialReference:function(a){var b=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;b&&b.radAttr&&b.animate(this.renderer.getRadialAttr(a,b.radAttr));return this},translate:function(a,b){return this.attr({translateX:a,translateY:b})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=
this.translateX||0,b=this.translateY||0,e=this.scaleX,g=this.scaleY,c=this.inverted,B=this.rotation,f=this.matrix,h=this.element;c&&(a+=this.width,b+=this.height);a=["translate("+a+","+b+")"];D(f)&&a.push("matrix("+f.join(",")+")");c?a.push("rotate(90) scale(-1,1)"):B&&a.push("rotate("+B+" "+z(this.rotationOriginX,h.getAttribute("x"),0)+" "+z(this.rotationOriginY,h.getAttribute("y")||0)+")");(D(e)||D(g))&&a.push("scale("+z(e,1)+" "+z(g,1)+")");a.length&&h.setAttribute("transform",a.join(" "))},toFront:function(){var a=
this.element;a.parentNode.appendChild(a);return this},align:function(a,b,e){var g,c={};var B=this.renderer;var f=B.alignedObjects;var h,n;if(a){if(this.alignOptions=a,this.alignByTranslate=b,!e||t(e))this.alignTo=g=e||"renderer",H(f,this),f.push(this),e=null}else a=this.alignOptions,b=this.alignByTranslate,g=this.alignTo;e=z(e,B[g],B);g=a.align;B=a.verticalAlign;f=(e.x||0)+(a.x||0);var m=(e.y||0)+(a.y||0);"right"===g?h=1:"center"===g&&(h=2);h&&(f+=(e.width-(a.width||0))/h);c[b?"translateX":"x"]=Math.round(f);
"bottom"===B?n=1:"middle"===B&&(n=2);n&&(m+=(e.height-(a.height||0))/n);c[b?"translateY":"y"]=Math.round(m);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this},getBBox:function(a,b){var e,g=this.renderer,c=this.element,B=this.styles,f=this.textStr,h,n=g.cache,d=g.cacheKeys,F=c.namespaceURI===this.SVG_NS;b=z(b,this.rotation);var P=b*m;var A=g.styledMode?c&&L.prototype.getStyle.call(c,"font-size"):B&&B.fontSize;if(D(f)){var r=f.toString();-1===r.indexOf("<")&&(r=r.replace(/[0-9]/g,
"0"));r+=["",b||0,A,this.textWidth,B&&B.textOverflow].join()}r&&!a&&(e=n[r]);if(!e){if(F||g.forExport){try{(h=this.fakeTS&&function(a){[].forEach.call(c.querySelectorAll(".highcharts-text-outline"),function(b){b.style.display=a})})&&h("none"),e=c.getBBox?x({},c.getBBox()):{width:c.offsetWidth,height:c.offsetHeight},h&&h("")}catch(ea){""}if(!e||0>e.width)e={width:0,height:0}}else e=this.htmlGetBBox();g.isSVG&&(a=e.width,g=e.height,F&&(e.height=g={"11px,17":14,"13px,20":16}[B&&B.fontSize+","+Math.round(g)]||
g),b&&(e.width=Math.abs(g*Math.sin(P))+Math.abs(a*Math.cos(P)),e.height=Math.abs(g*Math.cos(P))+Math.abs(a*Math.sin(P))));if(r&&0<e.height){for(;250<d.length;)delete n[d.shift()];n[r]||d.push(r);n[r]=e}}return e},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this},fadeOut:function(a){var b=this;b.animate({opacity:0},{duration:a||150,complete:function(){b.attr({y:-9999})}})},add:function(a){var b=
this.renderer,e=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&b.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var g=this.zIndexSetter();g||(a?a.element:b.box).appendChild(e);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var b=a.parentNode;b&&b.removeChild(a)},destroy:function(){var a=this,b=a.element||{},e=a.renderer,g=e.isSVG&&"SPAN"===b.nodeName&&a.parentGroup,c=b.ownerSVGElement,z=a.clipPath;b.onclick=b.onmouseout=
b.onmouseover=b.onmousemove=b.point=null;J(a);z&&c&&([].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){-1<a.getAttribute("clip-path").indexOf(z.element.id)&&a.removeAttribute("clip-path")}),a.clipPath=z.destroy());if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c]=a.stops[c].destroy();a.stops=null}a.safeRemoveChild(b);for(e.styledMode||a.destroyShadows();g&&g.div&&0===g.div.childNodes.length;)b=g.parentGroup,a.safeRemoveChild(g.div),delete g.div,g=b;a.alignTo&&H(e.alignedObjects,
a);G(a,function(b,e){a[e]&&a[e].parentGroup===a&&a[e].destroy&&a[e].destroy();delete a[e]})},shadow:function(a,b,e){var g=[],c,B=this.element;if(!a)this.destroyShadows();else if(!this.shadows){var f=z(a.width,3);var h=(a.opacity||.15)/f;var n=this.parentInverted?"(-1,-1)":"("+z(a.offsetX,1)+", "+z(a.offsetY,1)+")";for(c=1;c<=f;c++){var m=B.cloneNode(0);var d=2*f+1-2*c;w(m,{stroke:a.color||"#000000","stroke-opacity":h*c,"stroke-width":d,transform:"translate"+n,fill:"none"});m.setAttribute("class",
(m.getAttribute("class")||"")+" highcharts-shadow");e&&(w(m,"height",Math.max(w(m,"height")-d,0)),m.cutHeight=d);b?b.element.appendChild(m):B.parentNode&&B.parentNode.insertBefore(m,B);g.push(m)}this.shadows=g}return this},destroyShadows:function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=z(this[a+"Value"],
this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,b,e){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[b]!==a&&(e.setAttribute(b,a),this[b]=a)},dashstyleSetter:function(a){var b,e=this["stroke-width"];"inherit"===e&&(e=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash",
"8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(b=a.length;b--;)a[b]=u(a[b])*e;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){var b={left:"start",center:"middle",right:"end"};b[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",b[a]))},opacitySetter:function(a,b,e){this[b]=a;e.setAttribute(b,a)},titleSetter:function(a){var b=this.element.getElementsByTagName("title")[0];b||(b=r.createElementNS(this.SVG_NS,
"title"),this.element.appendChild(b));b.firstChild&&b.removeChild(b.firstChild);b.appendChild(r.createTextNode(String(z(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))},setTextPath:function(a,b){var e=this.element,g={textAnchor:"text-anchor"},c=!1,z=this.textPathWrapper,B=!z;b=F(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},
b);var f=b.attributes;if(a&&b&&b.enabled){this.options&&this.options.padding&&(f.dx=-this.options.padding);z||(this.textPathWrapper=z=this.renderer.createElement("textPath"),c=!0);var h=z.element;(b=a.element.getAttribute("id"))||a.element.setAttribute("id",b=d.uniqueKey());if(B)for(a=e.getElementsByTagName("tspan");a.length;)a[0].setAttribute("y",0),h.appendChild(a[0]);c&&z.add({element:this.text?this.text.element:e});h.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+b);
D(f.dy)&&(h.parentNode.setAttribute("dy",f.dy),delete f.dy);D(f.dx)&&(h.parentNode.setAttribute("dx",f.dx),delete f.dx);G(f,function(a,b){h.setAttribute(g[b]||b,a)});e.removeAttribute("transform");this.removeTextOutline.call(z,[].slice.call(e.getElementsByTagName("tspan")));this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=A}else z&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(e,a));return this},
destroyTextPath:function(a,b){var e;b.element.setAttribute("id","");for(e=this.textPathWrapper.element.childNodes;e.length;)a.firstChild.appendChild(e[0]);a.firstChild.removeChild(this.textPathWrapper.element);delete b.textPathWrapper},fillSetter:function(a,b,e){"string"===typeof a?e.setAttribute(b,a):a&&this.complexColor(a,b,e)},visibilitySetter:function(a,b,e){"inherit"===a?e.removeAttribute(b):this[b]!==a&&e.setAttribute(b,a);this[b]=a},zIndexSetter:function(a,b){var e=this.renderer,g=this.parentGroup,
c=(g||e).element||e.box,z=this.element,B=!1;e=c===e.box;var f=this.added;var h;D(a)?(z.setAttribute("data-z-index",a),a=+a,this[b]===a&&(f=!1)):D(this[b])&&z.removeAttribute("data-z-index");this[b]=a;if(f){(a=this.zIndex)&&g&&(g.handleZ=!0);b=c.childNodes;for(h=b.length-1;0<=h&&!B;h--){g=b[h];f=g.getAttribute("data-z-index");var n=!D(f);if(g!==z)if(0>a&&n&&!e&&!h)c.insertBefore(z,b[h]),B=!0;else if(u(f)<=a||n&&(!D(a)||0<=a))c.insertBefore(z,b[h+1]||null),B=!0}B||(c.insertBefore(z,b[e?3:0]||null),
B=!0)}return B},_defaultSetter:function(a,b,e){e.setAttribute(b,a)}});L.prototype.yGetter=L.prototype.xGetter;L.prototype.translateXSetter=L.prototype.translateYSetter=L.prototype.rotationSetter=L.prototype.verticalAlignSetter=L.prototype.rotationOriginXSetter=L.prototype.rotationOriginYSetter=L.prototype.scaleXSetter=L.prototype.scaleYSetter=L.prototype.matrixSetter=function(a,b){this[b]=a;this.doTransform=!0};L.prototype["stroke-widthSetter"]=L.prototype.strokeSetter=function(a,b,e){this[b]=a;this.stroke&&
this["stroke-width"]?(L.prototype.fillSetter.call(this,this.stroke,"stroke",e),e.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===b&&0===a&&this.hasStroke?(e.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(e.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)};k=d.SVGRenderer=function(){this.init.apply(this,arguments)};x(k.prototype,{Element:L,SVG_NS:T,init:function(a,e,c,z,B,f,h){var m=this.createElement("svg").attr({version:"1.1",
"class":"highcharts-root"});h||m.css(this.getStyle(z));z=m.element;a.appendChild(z);w(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&w(z,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=z;this.boxWrapper=m;this.alignedObjects=[];this.url=(n||g)&&r.getElementsByTagName("base").length?R.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(r.createTextNode("Created with Highcharts 7.2.0"));this.defs=
this.createElement("defs").add();this.allowHTML=f;this.forExport=B;this.styledMode=h;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(e,c,!1);var d;n&&a.getBoundingClientRect&&(e=function(){b(a,{left:0,top:0});d=a.getBoundingClientRect();b(a,{left:Math.ceil(d.left)-d.left+"px",top:Math.ceil(d.top)-d.top+"px"})},e(),this.unSubPixelFix=p(R,"resize",e))},definition:function(a){function b(a,g){var c;l(a).forEach(function(a){var z=e.createElement(a.tagName),B={};G(a,function(a,
b){"tagName"!==b&&"children"!==b&&"textContent"!==b&&(B[b]=a)});z.attr(B);z.add(g||e.defs);a.textContent&&z.element.appendChild(r.createTextNode(a.textContent));b(a.children||[],z);c=z});return c}var e=this;return b(a)},getStyle:function(a){return this.style=x({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=
this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();h(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var b=new this.Element;b.init(this,a);return b},draw:A,getRadialAttr:function(a,b){return{cx:a[0]-a[2]/2+b.cx*a[2],cy:a[1]-a[2]/2+b.cy*a[2],r:b.r*a[2]}},truncate:function(a,b,e,g,c,z,B){var f=this,h=a.rotation,n,m=g?1:0,d=(e||g).length,F=d,A=[],J=function(a){b.firstChild&&
b.removeChild(b.firstChild);a&&b.appendChild(r.createTextNode(a))},v=function(z,h){h=h||z;if(void 0===A[h])if(b.getSubStringLength)try{A[h]=c+b.getSubStringLength(0,g?h+1:h)}catch(fa){""}else f.getSpanWidth&&(J(B(e||g,z)),A[h]=c+f.getSpanWidth(a,b));return A[h]},M;a.rotation=0;var x=v(b.textContent.length);if(M=c+x>z){for(;m<=d;)F=Math.ceil((m+d)/2),g&&(n=B(g,F)),x=v(F,n&&n.length-1),m===d?m=d+1:x>z?d=F-1:m=F;0===d?J(""):e&&d===e.length-1||J(n||B(e||g,F))}g&&g.splice(0,F);a.actualWidth=x;a.rotation=
h;return M},escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},buildText:function(a){var e=a.element,g=this,c=g.forExport,B=z(a.textStr,"").toString(),f=-1!==B.indexOf("<"),h=e.childNodes,n,m=w(e,"x"),d=a.styles,F=a.textWidth,A=d&&d.lineHeight,J=d&&d.textOutline,v=d&&"ellipsis"===d.textOverflow,x=d&&"nowrap"===d.whiteSpace,P=d&&d.fontSize,l,L=h.length;d=F&&!a.added&&this.box;var q=function(a){var b;g.styledMode||(b=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:P||g.style.fontSize||
12);return A?u(A):g.fontMetrics(b,a.getAttribute("style")?a:e).h},p=function(a,b){G(g.escapes,function(e,g){b&&-1!==b.indexOf(e)||(a=a.toString().replace(new RegExp(e,"g"),g))});return a},N=function(a,b){var e=a.indexOf("<");a=a.substring(e,a.indexOf(">")-e);e=a.indexOf(b+"=");if(-1!==e&&(e=e+b.length+1,b=a.charAt(e),'"'===b||"'"===b))return a=a.substring(e+1),a.substring(0,a.indexOf(b))},R=/<br.*?>/g;var k=[B,v,x,A,J,P,F].join();if(k!==a.textCache){for(a.textCache=k;L--;)e.removeChild(h[L]);f||J||
v||F||-1!==B.indexOf(" ")&&(!x||R.test(B))?(d&&d.appendChild(e),f?(B=g.styledMode?B.replace(/<(b|strong)>/g,'<span class="highcharts-strong">').replace(/<(i|em)>/g,'<span class="highcharts-emphasized">'):B.replace(/<(b|strong)>/g,'<span style="font-weight:bold">').replace(/<(i|em)>/g,'<span style="font-style:italic">'),B=B.replace(/<a/g,"<span").replace(/<\/(b|strong|i|em|a)>/g,"</span>").split(R)):B=[B],B=B.filter(function(a){return""!==a}),B.forEach(function(z,B){var f=0,h=0;z=z.replace(/^\s+|\s+$/g,
"").replace(/<span/g,"|||<span").replace(/<\/span>/g,"</span>|||");var d=z.split("|||");d.forEach(function(z){if(""!==z||1===d.length){var A={},J=r.createElementNS(g.SVG_NS,"tspan"),L,O;(L=N(z,"class"))&&w(J,"class",L);if(L=N(z,"style"))L=L.replace(/(;| |^)color([ :])/,"$1fill$2"),w(J,"style",L);(O=N(z,"href"))&&!c&&(w(J,"onclick",'location.href="'+O+'"'),w(J,"class","highcharts-anchor"),g.styledMode||b(J,{cursor:"pointer"}));z=p(z.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==z){J.appendChild(r.createTextNode(z));
f?A.dx=0:B&&null!==m&&(A.x=m);w(J,A);e.appendChild(J);!f&&l&&(!M&&c&&b(J,{display:"block"}),w(J,"dy",q(J)));if(F){var u=z.replace(/([^\^])-/g,"$1- ").split(" ");A=!x&&(1<d.length||B||1<u.length);O=0;var ca=q(J);if(v)n=g.truncate(a,J,z,void 0,0,Math.max(0,F-parseInt(P||12,10)),function(a,b){return a.substring(0,b)+"\u2026"});else if(A)for(;u.length;)u.length&&!x&&0<O&&(J=r.createElementNS(T,"tspan"),w(J,{dy:ca,x:m}),L&&w(J,"style",L),J.appendChild(r.createTextNode(u.join(" ").replace(/- /g,"-"))),
e.appendChild(J)),g.truncate(a,J,null,u,0===O?h:0,F,function(a,b){return u.slice(0,b).join(" ").replace(/- /g,"-")}),h=a.actualWidth,O++}f++}}});l=l||e.childNodes.length}),v&&n&&a.attr("title",p(a.textStr,["&lt;","&gt;"])),d&&d.removeChild(e),J&&a.applyTextOutline&&a.applyTextOutline(J)):e.appendChild(r.createTextNode(p(B)))}},getContrast:function(b){b=a(b).rgba;b[0]*=1;b[1]*=1.2;b[2]*=.5;return 459<b[0]+b[1]+b[2]?"#000000":"#FFFFFF"},button:function(a,b,g,c,z,B,f,h,n,m){var d=this.label(a,b,g,n,
null,null,m,null,"button"),A=0,J=this.styledMode;d.attr(F({padding:8,r:2},z));if(!J){z=F({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},z);var r=z.style;delete z.style;B=F(z,{fill:"#e6e6e6"},B);var v=B.style;delete B.style;f=F(z,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},f);var M=f.style;delete f.style;h=F(z,{style:{color:"#cccccc"}},h);var L=h.style;delete h.style}p(d.element,e?"mouseover":"mouseenter",function(){3!==
A&&d.setState(1)});p(d.element,e?"mouseout":"mouseleave",function(){3!==A&&d.setState(A)});d.setState=function(a){1!==a&&(d.state=A=a);d.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);J||d.attr([z,B,f,h][a||0]).css([r,v,M,L][a||0])};J||d.attr(z).css(x({cursor:"default"},r));return d.on("click",function(a){3!==A&&c.call(d,a)})},crispLine:function(a,b){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-b%2/2);a[2]===
a[5]&&(a[2]=a[5]=Math.round(a[2])+b%2/2);return a},path:function(a){var b=this.styledMode?{}:{fill:"none"};E(a)?b.d=a:C(a)&&x(b,a);return this.createElement("path").attr(b)},circle:function(a,b,e){a=C(a)?a:void 0===a?{}:{x:a,y:b,r:e};b=this.createElement("circle");b.xSetter=b.ySetter=function(a,b,e){e.setAttribute("c"+b,a)};return b.attr(a)},arc:function(a,b,e,g,z,c){C(a)?(g=a,b=g.y,e=g.r,a=g.x):g={innerR:g,start:z,end:c};a=this.symbol("arc",a,b,e,e,g);a.r=e;return a},rect:function(a,b,e,g,z,c){z=
C(a)?a.r:z;var B=this.createElement("rect");a=C(a)?a:void 0===a?{}:{x:a,y:b,width:Math.max(e,0),height:Math.max(g,0)};this.styledMode||(void 0!==c&&(a.strokeWidth=c,a=B.crisp(a)),a.fill="none");z&&(a.r=z);B.rSetter=function(a,b,e){B.r=a;w(e,{rx:a,ry:a})};B.rGetter=function(){return B.r};return B.attr(a)},setSize:function(a,b,e){var g=this.alignedObjects,c=g.length;this.width=a;this.height=b;for(this.boxWrapper.animate({width:a,height:b},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+
" "+this.attr("height")})},duration:z(e,!0)?void 0:0});c--;)g[c].align()},g:function(a){var b=this.createElement("g");return a?b.attr({"class":"highcharts-"+a}):b},image:function(a,b,e,g,c,z){var B={preserveAspectRatio:"none"},f=function(a,b){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink","href",b):a.setAttribute("hc-svg-href",b)},h=function(b){f(n.element,a);z.call(n,b)};1<arguments.length&&x(B,{x:b,y:e,width:g,height:c});var n=this.createElement("image").attr(B);z?(f(n.element,
"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),B=new R.Image,p(B,"load",h),B.src=a,B.complete&&h({})):f(n.element,a);return n},symbol:function(a,e,g,B,h,n){var m=this,d=/^url\((.*?)\)$/,F=d.test(a),A=!F&&(this.symbols[a]?a:"circle"),J=A&&this.symbols[A],v=D(e)&&J&&J.call(this.symbols,Math.round(e),Math.round(g),B,h,n);if(J){var M=this.path(v);m.styledMode||M.attr("fill","none");x(M,{symbolName:A,x:e,y:g,width:B,height:h});n&&x(M,n)}else if(F){var L=a.match(d)[1];M=this.image(L);
M.imgwidth=z(N[L]&&N[L].width,n&&n.width);M.imgheight=z(N[L]&&N[L].height,n&&n.height);var l=function(){M.attr({width:M.width,height:M.height})};["width","height"].forEach(function(a){M[a+"Setter"]=function(a,b){var e={},g=this["img"+b],z="width"===b?"translateX":"translateY";this[b]=a;D(g)&&(n&&"within"===n.backgroundSize&&this.width&&this.height&&(g=Math.round(g*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(b,g),this.alignByTranslate||(e[z]=
((this[b]||0)-g)/2,this.attr(e)))}});D(e)&&M.attr({x:e,y:g});M.isImg=!0;D(M.imgwidth)&&D(M.imgheight)?l():(M.attr({width:0,height:0}),f("img",{onload:function(){var a=c[m.chartIndex];0===this.width&&(b(this,{position:"absolute",top:"-999em"}),r.body.appendChild(this));N[L]={width:this.width,height:this.height};M.imgwidth=this.width;M.imgheight=this.height;M.element&&l();this.parentNode&&this.parentNode.removeChild(this);m.imgCount--;if(!m.imgCount&&a&&a.onload)a.onload()},src:L}),this.imgCount++)}return M},
symbols:{circle:function(a,b,e,g){return this.arc(a+e/2,b+g/2,e/2,g/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},square:function(a,b,e,g){return["M",a,b,"L",a+e,b,a+e,b+g,a,b+g,"Z"]},triangle:function(a,b,e,g){return["M",a+e/2,b,"L",a+e,b+g,a,b+g,"Z"]},"triangle-down":function(a,b,e,g){return["M",a,b,"L",a+e,b,a+e/2,b+g,"Z"]},diamond:function(a,b,e,g){return["M",a+e/2,b,"L",a+e,b+g/2,a+e/2,b+g,a,b+g/2,"Z"]},arc:function(a,b,e,g,c){var B=c.start,f=c.r||e,h=c.r||g||e,n=c.end-.001;e=c.innerR;g=z(c.open,
.001>Math.abs(c.end-c.start-2*Math.PI));var m=Math.cos(B),d=Math.sin(B),F=Math.cos(n);n=Math.sin(n);B=.001>c.end-B-Math.PI?0:1;c=["M",a+f*m,b+h*d,"A",f,h,0,B,z(c.clockwise,1),a+f*F,b+h*n];D(e)&&c.push(g?"M":"L",a+e*F,b+e*n,"A",e,e,0,B,0,a+e*m,b+e*d);c.push(g?"":"Z");return c},callout:function(a,b,e,g,c){var z=Math.min(c&&c.r||0,e,g),B=z+6,f=c&&c.anchorX;c=c&&c.anchorY;var h=["M",a+z,b,"L",a+e-z,b,"C",a+e,b,a+e,b,a+e,b+z,"L",a+e,b+g-z,"C",a+e,b+g,a+e,b+g,a+e-z,b+g,"L",a+z,b+g,"C",a,b+g,a,b+g,a,b+g-
z,"L",a,b+z,"C",a,b,a,b,a+z,b];f&&f>e?c>b+B&&c<b+g-B?h.splice(13,3,"L",a+e,c-6,a+e+6,c,a+e,c+6,a+e,b+g-z):h.splice(13,3,"L",a+e,g/2,f,c,a+e,g/2,a+e,b+g-z):f&&0>f?c>b+B&&c<b+g-B?h.splice(33,3,"L",a,c+6,a-6,c,a,c-6,a,b+z):h.splice(33,3,"L",a,g/2,f,c,a,g/2,a,b+z):c&&c>g&&f>a+B&&f<a+e-B?h.splice(23,3,"L",f+6,b+g,f,b+g+6,f-6,b+g,a+z,b+g):c&&0>c&&f>a+B&&f<a+e-B&&h.splice(3,3,"L",f-6,b,f,b-6,f+6,b,e-z,b);return h}},clipRect:function(a,b,e,g){var c=d.uniqueKey()+"-",z=this.createElement("clipPath").attr({id:c}).add(this.defs);
a=this.rect(a,b,e,g,0).add(z);a.id=c;a.clipPath=z;a.count=0;return a},text:function(a,b,e,g){var c={};if(g&&(this.allowHTML||!this.forExport))return this.html(a,b,e);c.x=Math.round(b||0);e&&(c.y=Math.round(e));D(a)&&(c.text=a);a=this.createElement("text").attr(c);g||(a.xSetter=function(a,b,e){var g=e.getElementsByTagName("tspan"),c=e.getAttribute(b),z;for(z=0;z<g.length;z++){var B=g[z];B.getAttribute(b)===c&&B.setAttribute(b,a)}e.setAttribute(b,a)});return a},fontMetrics:function(a,b){a=!this.styledMode&&
/px/.test(a)||!R.getComputedStyle?a||b&&b.style&&b.style.fontSize||this.style&&this.style.fontSize:b&&L.prototype.getStyle.call(b,"font-size");a=/px/.test(a)?u(a):12;b=24>a?a+3:Math.round(1.2*a);return{h:b,b:Math.round(.8*b),f:a}},rotCorr:function(a,b,e){var g=a;b&&e&&(g=Math.max(g*Math.cos(b*m),4));return{x:-a/3*Math.sin(b*m),y:g}},label:function(a,b,e,g,c,z,f,h,n){var m=this,d=m.styledMode,A=m.g("button"!==n&&"label"),J=A.text=m.text("",0,0,f).attr({zIndex:1}),r,v,M=0,l=3,q=0,p,u,T,P,N,O={},R,k,
t=/^url\((.*?)\)$/.test(g),ca=d||t,C=function(){return d?r.strokeWidth()%2/2:(R?parseInt(R,10):0)%2/2};n&&A.addClass("highcharts-"+n);var E=function(){var a=J.element.style,b={};v=(void 0===p||void 0===u||N)&&D(J.textStr)&&J.getBBox();A.width=(p||v.width||0)+2*l+q;A.height=(u||v.height||0)+2*l;k=l+Math.min(m.fontMetrics(a&&a.fontSize,J).b,v?v.height:Infinity);ca&&(r||(A.box=r=m.symbols[g]||t?m.symbol(g):m.rect(),r.addClass(("button"===n?"":"highcharts-label-box")+(n?" highcharts-"+n+"-box":"")),r.add(A),
a=C(),b.x=a,b.y=(h?-k:0)+a),b.width=Math.round(A.width),b.height=Math.round(A.height),r.attr(x(b,O)),O={})};var G=function(){var a=q+l;var b=h?0:k;D(p)&&v&&("center"===N||"right"===N)&&(a+={center:.5,right:1}[N]*(p-v.width));if(a!==J.x||b!==J.y)J.attr("x",a),J.hasBoxWidthChanged&&(v=J.getBBox(!0),E()),void 0!==b&&J.attr("y",b);J.x=a;J.y=b};var w=function(a,b){r?r.attr(a,b):O[a]=b};A.onAdd=function(){J.add(A);A.attr({text:a||0===a?a:"",x:b,y:e});r&&D(c)&&A.attr({anchorX:c,anchorY:z})};A.widthSetter=
function(a){p=y(a)?a:null};A.heightSetter=function(a){u=a};A["text-alignSetter"]=function(a){N=a};A.paddingSetter=function(a){D(a)&&a!==l&&(l=A.padding=a,G())};A.paddingLeftSetter=function(a){D(a)&&a!==q&&(q=a,G())};A.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==M&&(M=a,v&&A.attr({x:T}))};A.textSetter=function(a){void 0!==a&&J.attr({text:a});E();G()};A["stroke-widthSetter"]=function(a,b){a&&(ca=!0);R=this["stroke-width"]=a;w(b,a)};d?A.rSetter=function(a,b){w(b,a)}:A.strokeSetter=A.fillSetter=
A.rSetter=function(a,b){"r"!==b&&("fill"===b&&a&&(ca=!0),A[b]=a);w(b,a)};A.anchorXSetter=function(a,b){c=A.anchorX=a;w(b,Math.round(a)-C()-T)};A.anchorYSetter=function(a,b){z=A.anchorY=a;w(b,a-P)};A.xSetter=function(a){A.x=a;M&&(a-=M*((p||v.width)+2*l),A["forceAnimate:x"]=!0);T=Math.round(a);A.attr("translateX",T)};A.ySetter=function(a){P=A.y=Math.round(a);A.attr("translateY",P)};var H=A.css;f={css:function(a){if(a){var b={};a=F(a);A.textProps.forEach(function(e){void 0!==a[e]&&(b[e]=a[e],delete a[e])});
J.css(b);"width"in b&&E();"fontSize"in b&&(E(),G())}return H.call(A,a)},getBBox:function(){return{width:v.width+2*l,height:v.height+2*l,x:v.x-l,y:v.y-l}},destroy:function(){B(A.element,"mouseenter");B(A.element,"mouseleave");J&&(J=J.destroy());r&&(r=r.destroy());L.prototype.destroy.call(A);A=m=E=G=w=null}};d||(f.shadow=function(a){a&&(E(),r&&r.shadow(a));return A});return x(A,f)}});d.Renderer=k});K(I,"parts/Html.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.attr,D=k.defined,
H=k.pInt,E=d.createElement,y=d.css,C=d.extend,t=d.isFirefox,G=d.isMS,u=d.isWebKit,l=d.pick,p=d.SVGElement;k=d.SVGRenderer;var q=d.win;C(p.prototype,{htmlCss:function(c){var a="SPAN"===this.element.tagName&&c&&"width"in c,b=l(a&&c.width,void 0);if(a){delete c.width;this.textWidth=b;var f=!0}c&&"ellipsis"===c.textOverflow&&(c.whiteSpace="nowrap",c.overflow="hidden");this.styles=C(this.styles,c);y(this.element,c);f&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var c=this.element;return{x:c.offsetLeft,
y:c.offsetTop,width:c.offsetWidth,height:c.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var c=this.renderer,a=this.element,b=this.translateX||0,f=this.translateY||0,m=this.x||0,h=this.y||0,d=this.textAlign||"left",x={left:0,center:.5,right:1}[d],v=this.styles,n=v&&v.whiteSpace;y(a,{marginLeft:b,marginTop:f});!c.styledMode&&this.shadows&&this.shadows.forEach(function(a){y(a,{marginLeft:b+1,marginTop:f+1})});this.inverted&&[].forEach.call(a.childNodes,function(b){c.invertChild(b,a)});
if("SPAN"===a.tagName){v=this.rotation;var e=this.textWidth&&H(this.textWidth),g=[v,d,a.innerHTML,this.textWidth,this.textAlign].join(),F;(F=e!==this.oldTextWidth)&&!(F=e>this.oldTextWidth)&&((F=this.textPxLength)||(y(a,{width:"",whiteSpace:n||"nowrap"}),F=a.offsetWidth),F=F>e);F&&(/[ \-]/.test(a.textContent||a.innerText)||"ellipsis"===a.style.textOverflow)?(y(a,{width:e+"px",display:"block",whiteSpace:n||"normal"}),this.oldTextWidth=e,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;g!==this.cTT&&
(n=c.fontMetrics(a.style.fontSize,a).b,!D(v)||v===(this.oldRotation||0)&&d===this.oldAlign||this.setSpanRotation(v,x,n),this.getSpanCorrection(!D(v)&&this.textPxLength||a.offsetWidth,n,x,v,d));y(a,{left:m+(this.xCorr||0)+"px",top:h+(this.yCorr||0)+"px"});this.cTT=g;this.oldRotation=v;this.oldAlign=d}}else this.alignOnAdd=!0},setSpanRotation:function(c,a,b){var f={},m=this.renderer.getTransformKey();f[m]=f.transform="rotate("+c+"deg)";f[m+(t?"Origin":"-origin")]=f.transformOrigin=100*a+"% "+b+"px";
y(this.element,f)},getSpanCorrection:function(c,a,b){this.xCorr=-c*b;this.yCorr=-a}});C(k.prototype,{getTransformKey:function(){return G&&!/Edge/.test(q.navigator.userAgent)?"-ms-transform":u?"-webkit-transform":t?"MozTransform":q.opera?"-o-transform":""},html:function(c,a,b){var f=this.createElement("span"),m=f.element,h=f.renderer,d=h.isSVG,x=function(a,b){["opacity","visibility"].forEach(function(e){a[e+"Setter"]=function(g,c,f){var z=a.div?a.div.style:b;p.prototype[e+"Setter"].call(this,g,c,f);
z&&(z[c]=g)}});a.addedSetters=!0};f.textSetter=function(a){a!==m.innerHTML&&(delete this.bBox,delete this.oldTextWidth);this.textStr=a;m.innerHTML=l(a,"");f.doTransform=!0};d&&x(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(a,b){"align"===b&&(b="textAlign");f[b]=a;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:c,x:Math.round(a),y:Math.round(b)}).css({position:"absolute"});h.styledMode||f.css({fontFamily:this.style.fontFamily,
fontSize:this.style.fontSize});m.style.whiteSpace="nowrap";f.css=f.htmlCss;d&&(f.add=function(a){var b=h.box.parentNode,e=[];if(this.parentGroup=a){var g=a.div;if(!g){for(;a;)e.push(a),a=a.parentGroup;e.reverse().forEach(function(a){function c(b,e){a[e]=b;"translateX"===e?B.left=b+"px":B.top=b+"px";a.doTransform=!0}var z=w(a.element,"class");g=a.div=a.div||E("div",z?{className:z}:void 0,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,
pointerEvents:a.styles&&a.styles.pointerEvents},g||b);var B=g.style;C(a,{classSetter:function(a){return function(b){this.element.setAttribute("class",b);a.className=b}}(g),on:function(){e[0].div&&f.on.apply({element:e[0].div},arguments);return a},translateXSetter:c,translateYSetter:c});a.addedSetters||x(a)})}}else g=b;g.appendChild(m);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}})});K(I,"parts/Time.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,
D=k.isObject,H=k.objectEach,E=k.splat,y=d.extend,C=d.merge,t=d.pick,G=d.timeUnits,u=d.win;d.Time=function(d){this.update(d,!1)};d.Time.prototype={defaultOptions:{},update:function(d){var l=t(d&&d.useUTC,!0),q=this;this.options=d=C(!0,this.options||{},d);this.Date=d.Date||u.Date||Date;this.timezoneOffset=(this.useUTC=l)&&d.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(l&&!d.getTimezoneOffset&&!d.timezone))||this.timezoneOffset?(this.get=function(c,a){var b=
a.getTime(),f=b-q.getTimezoneOffset(a);a.setTime(f);c=a["getUTC"+c]();a.setTime(b);return c},this.set=function(c,a,b){if("Milliseconds"===c||"Seconds"===c||"Minutes"===c&&0===a.getTimezoneOffset()%60)a["set"+c](b);else{var f=q.getTimezoneOffset(a);f=a.getTime()-f;a.setTime(f);a["setUTC"+c](b);c=q.getTimezoneOffset(a);f=a.getTime()+c;a.setTime(f)}}):l?(this.get=function(c,a){return a["getUTC"+c]()},this.set=function(c,a,b){return a["setUTC"+c](b)}):(this.get=function(c,a){return a["get"+c]()},this.set=
function(c,a,b){return a["set"+c](b)})},makeTime:function(l,p,q,c,a,b){if(this.useUTC){var f=this.Date.UTC.apply(0,arguments);var m=this.getTimezoneOffset(f);f+=m;var h=this.getTimezoneOffset(f);m!==h?f+=h-m:m-36E5!==this.getTimezoneOffset(f-36E5)||d.isSafari||(f-=36E5)}else f=(new this.Date(l,p,t(q,1),t(c,0),t(a,0),t(b,0))).getTime();return f},timezoneOffsetFunction:function(){var l=this,p=this.options,q=u.moment;if(!this.useUTC)return function(c){return 6E4*(new Date(c)).getTimezoneOffset()};if(p.timezone){if(q)return function(c){return 6E4*
-q.tz(c,p.timezone).utcOffset()};d.error(25)}return this.useUTC&&p.getTimezoneOffset?function(c){return 6E4*p.getTimezoneOffset(c)}:function(){return 6E4*(l.timezoneOffset||0)}},dateFormat:function(l,p,q){if(!w(p)||isNaN(p))return d.defaultOptions.lang.invalidDate||"";l=d.pick(l,"%Y-%m-%d %H:%M:%S");var c=this,a=new this.Date(p),b=this.get("Hours",a),f=this.get("Day",a),m=this.get("Date",a),h=this.get("Month",a),r=this.get("FullYear",a),x=d.defaultOptions.lang,v=x.weekdays,n=x.shortWeekdays,e=d.pad;
a=d.extend({a:n?n[f]:v[f].substr(0,3),A:v[f],d:e(m),e:e(m,2," "),w:f,b:x.shortMonths[h],B:x.months[h],m:e(h+1),o:h+1,y:r.toString().substr(2,2),Y:r,H:e(b),k:b,I:e(b%12||12),l:b%12||12,M:e(c.get("Minutes",a)),p:12>b?"AM":"PM",P:12>b?"am":"pm",S:e(a.getSeconds()),L:e(Math.floor(p%1E3),3)},d.dateFormats);H(a,function(a,b){for(;-1!==l.indexOf("%"+b);)l=l.replace("%"+b,"function"===typeof a?a.call(c,p):a)});return q?l.substr(0,1).toUpperCase()+l.substr(1):l},resolveDTLFormat:function(d){return D(d,!0)?
d:(d=E(d),{main:d[0],from:d[1],to:d[2]})},getTimeTicks:function(d,p,q,c){var a=this,b=[],f={};var m=new a.Date(p);var h=d.unitRange,r=d.count||1,x;c=t(c,1);if(w(p)){a.set("Milliseconds",m,h>=G.second?0:r*Math.floor(a.get("Milliseconds",m)/r));h>=G.second&&a.set("Seconds",m,h>=G.minute?0:r*Math.floor(a.get("Seconds",m)/r));h>=G.minute&&a.set("Minutes",m,h>=G.hour?0:r*Math.floor(a.get("Minutes",m)/r));h>=G.hour&&a.set("Hours",m,h>=G.day?0:r*Math.floor(a.get("Hours",m)/r));h>=G.day&&a.set("Date",m,h>=
G.month?1:Math.max(1,r*Math.floor(a.get("Date",m)/r)));if(h>=G.month){a.set("Month",m,h>=G.year?0:r*Math.floor(a.get("Month",m)/r));var v=a.get("FullYear",m)}h>=G.year&&a.set("FullYear",m,v-v%r);h===G.week&&(v=a.get("Day",m),a.set("Date",m,a.get("Date",m)-v+c+(v<c?-7:0)));v=a.get("FullYear",m);c=a.get("Month",m);var n=a.get("Date",m),e=a.get("Hours",m);p=m.getTime();a.variableTimezone&&(x=q-p>4*G.month||a.getTimezoneOffset(p)!==a.getTimezoneOffset(q));p=m.getTime();for(m=1;p<q;)b.push(p),p=h===G.year?
a.makeTime(v+m*r,0):h===G.month?a.makeTime(v,c+m*r):!x||h!==G.day&&h!==G.week?x&&h===G.hour&&1<r?a.makeTime(v,c,n,e+m*r):p+h*r:a.makeTime(v,c,n+m*r*(h===G.day?1:7)),m++;b.push(p);h<=G.hour&&1E4>b.length&&b.forEach(function(b){0===b%18E5&&"000000000"===a.dateFormat("%H%M%S%L",b)&&(f[b]="day")})}b.info=y(d,{higherRanks:f,totalRange:h*r});return b}}});K(I,"parts/Options.js",[I["parts/Globals.js"]],function(d){var k=d.color,w=d.merge;d.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:d.Time.prototype.defaultOptions,
chart:{styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",
color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,
verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:d.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",
padding:8,snap:d.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:k("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",
color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};d.setOptions=function(k){d.defaultOptions=w(!0,d.defaultOptions,k);d.time.update(w(d.defaultOptions.global,d.defaultOptions.time),!1);return d.defaultOptions};d.getOptions=function(){return d.defaultOptions};d.defaultPlotOptions=d.defaultOptions.plotOptions;d.time=new d.Time(w(d.defaultOptions.global,d.defaultOptions.time));d.dateFormat=function(k,w,E){return d.time.dateFormat(k,w,E)};""});K(I,"parts/Tick.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],
function(d,k){var w=k.defined,D=k.isNumber,H=d.correctFloat,E=d.destroyObjectProperties,y=d.fireEvent,C=d.merge,t=d.pick,G=d.deg2rad;d.Tick=function(d,l,p,q,c){this.axis=d;this.pos=l;this.type=p||"";this.isNewLabel=this.isNew=!0;this.parameters=c||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;p||q||this.addLabel()};d.Tick.prototype={addLabel:function(){var u=this,l=u.axis,p=l.options,q=l.chart,c=l.categories,a=l.names,b=u.pos,f=t(u.options&&u.options.labels,
p.labels),m=l.tickPositions,h=b===m[0],r=b===m[m.length-1];c=this.parameters.category||(c?t(c[b],a[b],b):b);var x=u.label;m=m.info;var v,n;if(l.isDatetimeAxis&&m){var e=q.time.resolveDTLFormat(p.dateTimeLabelFormats[!p.grid&&m.higherRanks[b]||m.unitName]);var g=e.main}u.isFirst=h;u.isLast=r;u.formatCtx={axis:l,chart:q,isFirst:h,isLast:r,dateTimeLabelFormat:g,tickPositionInfo:m,value:l.isLog?H(l.lin2log(c)):c,pos:b};p=l.labelFormatter.call(u.formatCtx,this.formatCtx);if(n=e&&e.list)u.shortenLabel=
function(){for(v=0;v<n.length;v++)if(x.attr({text:l.labelFormatter.call(d.extend(u.formatCtx,{dateTimeLabelFormat:n[v]}))}),x.getBBox().width<l.getSlotWidth(u)-2*t(f.padding,5))return;x.attr({text:""})};if(w(x))x&&x.textStr!==p&&(!x.textWidth||f.style&&f.style.width||x.styles.width||x.css({width:null}),x.attr({text:p}),x.textPxLength=x.getBBox().width);else{if(u.label=x=w(p)&&f.enabled?q.renderer.text(p,0,0,f.useHTML).add(l.labelGroup):null)q.styledMode||x.css(C(f.style)),x.textPxLength=x.getBBox().width;
u.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},handleOverflow:function(d){var l=this.axis,p=l.options.labels,q=d.x,c=l.chart.chartWidth,a=l.chart.spacing,b=t(l.labelLeft,Math.min(l.pos,a[3]));a=t(l.labelRight,Math.max(l.isRadial?0:l.pos+l.len,c-a[1]));var f=this.label,m=this.rotation,h={left:0,center:.5,right:1}[l.labelAlign||f.attr("align")],r=f.getBBox().width,x=l.getSlotWidth(this),v=x,n=1,e,g={};if(m||"justify"!==t(p.overflow,
"justify"))0>m&&q-h*r<b?e=Math.round(q/Math.cos(m*G)-b):0<m&&q+h*r>a&&(e=Math.round((c-q)/Math.cos(m*G)));else if(c=q+(1-h)*r,q-h*r<b?v=d.x+v*(1-h)-b:c>a&&(v=a-d.x+v*h,n=-1),v=Math.min(x,v),v<x&&"center"===l.labelAlign&&(d.x+=n*(x-v-h*(x-Math.min(r,v)))),r>v||l.autoRotation&&(f.styles||{}).width)e=v;e&&(this.shortenLabel?this.shortenLabel():(g.width=Math.floor(e),(p.style||{}).textOverflow||(g.textOverflow="ellipsis"),f.css(g)))},getPosition:function(u,l,p,q){var c=this.axis,a=c.chart,b=q&&a.oldChartHeight||
a.chartHeight;u={x:u?d.correctFloat(c.translate(l+p,null,null,q)+c.transB):c.left+c.offset+(c.opposite?(q&&a.oldChartWidth||a.chartWidth)-c.right-c.left:0),y:u?b-c.bottom+c.offset-(c.opposite?c.height:0):d.correctFloat(b-c.translate(l+p,null,null,q)-c.transB)};u.y=Math.max(Math.min(u.y,1E5),-1E5);y(this,"afterGetPosition",{pos:u});return u},getLabelPosition:function(d,l,p,q,c,a,b,f){var m=this.axis,h=m.transA,r=m.isLinked&&m.linkedParent?m.linkedParent.reversed:m.reversed,x=m.staggerLines,v=m.tickRotCorr||
{x:0,y:0},n=c.y,e=q||m.reserveSpaceDefault?0:-m.labelOffset*("center"===m.labelAlign?.5:1),g={};w(n)||(n=0===m.side?p.rotation?-8:-p.getBBox().height:2===m.side?v.y+8:Math.cos(p.rotation*G)*(v.y-p.getBBox(!1,0).height/2));d=d+c.x+e+v.x-(a&&q?a*h*(r?-1:1):0);l=l+n-(a&&!q?a*h*(r?1:-1):0);x&&(p=b/(f||1)%x,m.opposite&&(p=x-p-1),l+=m.labelOffset/x*p);g.x=d;g.y=Math.round(l);y(this,"afterGetLabelPosition",{pos:g,tickmarkOffset:a,index:b});return g},getMarkPath:function(d,l,p,q,c,a){return a.crispLine(["M",
d,l,"L",d+(c?0:-p),l+(c?p:0)],q)},renderGridLine:function(d,l,p){var q=this.axis,c=q.options,a=this.gridLine,b={},f=this.pos,m=this.type,h=t(this.tickmarkOffset,q.tickmarkOffset),r=q.chart.renderer,x=m?m+"Grid":"grid",v=c[x+"LineWidth"],n=c[x+"LineColor"];c=c[x+"LineDashStyle"];a||(q.chart.styledMode||(b.stroke=n,b["stroke-width"]=v,c&&(b.dashstyle=c)),m||(b.zIndex=1),d&&(l=0),this.gridLine=a=r.path().attr(b).addClass("highcharts-"+(m?m+"-":"")+"grid-line").add(q.gridGroup));if(a&&(p=q.getPlotLinePath({value:f+
h,lineWidth:a.strokeWidth()*p,force:"pass",old:d})))a[d||this.isNew?"attr":"animate"]({d:p,opacity:l})},renderMark:function(d,l,p){var q=this.axis,c=q.options,a=q.chart.renderer,b=this.type,f=b?b+"Tick":"tick",m=q.tickSize(f),h=this.mark,r=!h,x=d.x;d=d.y;var v=t(c[f+"Width"],!b&&q.isXAxis?1:0);c=c[f+"Color"];m&&(q.opposite&&(m[0]=-m[0]),r&&(this.mark=h=a.path().addClass("highcharts-"+(b?b+"-":"")+"tick").add(q.axisGroup),q.chart.styledMode||h.attr({stroke:c,"stroke-width":v})),h[r?"attr":"animate"]({d:this.getMarkPath(x,
d,m[0],h.strokeWidth()*p,q.horiz,a),opacity:l}))},renderLabel:function(d,l,p,q){var c=this.axis,a=c.horiz,b=c.options,f=this.label,m=b.labels,h=m.step;c=t(this.tickmarkOffset,c.tickmarkOffset);var r=!0,x=d.x;d=d.y;f&&D(x)&&(f.xy=d=this.getLabelPosition(x,d,f,a,m,c,q,h),this.isFirst&&!this.isLast&&!t(b.showFirstLabel,1)||this.isLast&&!this.isFirst&&!t(b.showLastLabel,1)?r=!1:!a||m.step||m.rotation||l||0===p||this.handleOverflow(d),h&&q%h&&(r=!1),r&&D(d.y)?(d.opacity=p,f[this.isNewLabel?"attr":"animate"](d),
this.isNewLabel=!1):(f.attr("y",-9999),this.isNewLabel=!0))},render:function(u,l,p){var q=this.axis,c=q.horiz,a=this.pos,b=t(this.tickmarkOffset,q.tickmarkOffset);a=this.getPosition(c,a,b,l);b=a.x;var f=a.y;q=c&&b===q.pos+q.len||!c&&f===q.pos?-1:1;p=t(p,1);this.isActive=!0;this.renderGridLine(l,p,q);this.renderMark(a,p,q);this.renderLabel(a,l,p,u);this.isNew=!1;d.fireEvent(this,"afterRender")},destroy:function(){E(this,this.axis)}}});K(I,"parts/Axis.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],
function(d,k){var w=k.defined,D=k.isArray,H=k.isNumber,E=k.isString,y=k.objectEach,C=k.splat,t=d.addEvent,G=d.animObject,u=d.arrayMax,l=d.arrayMin,p=d.color,q=d.correctFloat,c=d.defaultOptions,a=d.deg2rad,b=d.destroyObjectProperties,f=d.extend,m=d.fireEvent,h=d.format,r=d.getMagnitude,x=d.merge,v=d.normalizeTickInterval,n=d.pick,e=d.removeEvent,g=d.seriesTypes,F=d.syncTimeout,A=d.Tick;k=function(){this.init.apply(this,arguments)};d.extend(k.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,labels:{enabled:!0,indentation:10,x:0,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,showEmpty:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",
style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){return d.numberFormat(this.total,-1)},style:{color:"#000000",
fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},init:function(a,b){var e=b.isX,g=this;g.chart=a;g.horiz=a.inverted&&!g.isZAxis?!e:e;g.isXAxis=e;g.coll=g.coll||(e?"xAxis":
"yAxis");m(this,"init",{userOptions:b});g.opposite=b.opposite;g.side=b.side||(g.horiz?g.opposite?0:2:g.opposite?1:3);g.setOptions(b);var c=this.options,z=c.type;g.labelFormatter=c.labels.formatter||g.defaultLabelFormatter;g.userOptions=b;g.minPixelPadding=0;g.reversed=c.reversed;g.visible=!1!==c.visible;g.zoomEnabled=!1!==c.zoomEnabled;g.hasNames="category"===z||!0===c.categories;g.categories=c.categories||g.hasNames;g.names||(g.names=[],g.names.keys={});g.plotLinesAndBandsGroups={};g.isLog="logarithmic"===
z;g.isDatetimeAxis="datetime"===z;g.positiveValuesOnly=g.isLog&&!g.allowNegativeLog;g.isLinked=w(c.linkedTo);g.ticks={};g.labelEdge=[];g.minorTicks={};g.plotLinesAndBands=[];g.alternateBands={};g.len=0;g.minRange=g.userMinRange=c.minRange||c.maxZoom;g.range=c.range;g.offset=c.offset||0;g.stacks={};g.oldStacks={};g.stacksTouched=0;g.max=null;g.min=null;g.crosshair=n(c.crosshair,C(a.options.tooltip.crosshairs)[e?0:1],!1);b=g.options.events;-1===a.axes.indexOf(g)&&(e?a.axes.splice(a.xAxis.length,0,g):
a.axes.push(g),a[g.coll].push(g));g.series=g.series||[];a.inverted&&!g.isZAxis&&e&&void 0===g.reversed&&(g.reversed=!0);y(b,function(a,b){d.isFunction(a)&&t(g,b,a)});g.lin2log=c.linearToLogConverter||g.lin2log;g.isLog&&(g.val2lin=g.log2lin,g.lin2val=g.lin2log);m(this,"afterInit")},setOptions:function(a){this.options=x(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],
x(c[this.coll],a));m(this,"afterSetOptions",{userOptions:a})},defaultLabelFormatter:function(){var a=this.axis,b=this.value,e=a.chart.time,g=a.categories,f=this.dateTimeLabelFormat,n=c.lang,m=n.numericSymbols;n=n.numericSymbolMagnitude||1E3;var A=m&&m.length,F=a.options.labels.format;a=a.isLog?Math.abs(b):a.tickInterval;if(F)var r=h(F,this,e);else if(g)r=b;else if(f)r=e.dateFormat(f,b);else if(A&&1E3<=a)for(;A--&&void 0===r;)e=Math.pow(n,A+1),a>=e&&0===10*b%e&&null!==m[A]&&0!==b&&(r=d.numberFormat(b/
e,-1)+m[A]);void 0===r&&(r=1E4<=Math.abs(b)?d.numberFormat(b,-1):d.numberFormat(b,-1,void 0,""));return r},getSeriesExtremes:function(){var a=this,b=a.chart,e;m(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();a.series.forEach(function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var c=g.options,z=c.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=z&&(z=null);if(a.isXAxis){if(c=
g.xData,c.length){e=g.getXExtremes(c);var B=e.min;var f=e.max;H(B)||B instanceof Date||(c=c.filter(H),e=g.getXExtremes(c),B=e.min,f=e.max);c.length&&(a.dataMin=Math.min(n(a.dataMin,B),B),a.dataMax=Math.max(n(a.dataMax,f),f))}}else if(g.getExtremes(),f=g.dataMax,B=g.dataMin,w(B)&&w(f)&&(a.dataMin=Math.min(n(a.dataMin,B),B),a.dataMax=Math.max(n(a.dataMax,f),f)),w(z)&&(a.threshold=z),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});m(this,"afterGetSeriesExtremes")},translate:function(a,
b,e,g,c,f){var B=this.linkedParent||this,z=1,h=0,d=g?B.oldTransA:B.transA;g=g?B.oldMin:B.min;var n=B.minPixelPadding;c=(B.isOrdinal||B.isBroken||B.isLog&&c)&&B.lin2val;d||(d=B.transA);e&&(z*=-1,h=B.len);B.reversed&&(z*=-1,h-=z*(B.sector||B.len));b?(a=(a*z+h-n)/d+g,c&&(a=B.lin2val(a))):(c&&(a=B.val2lin(a)),a=H(g)?z*(a-g)*d+h+z*n+(H(f)?d*f:0):void 0);return a},toPixels:function(a,b){return this.translate(a,!1,!this.horiz,null,!0)+(b?0:this.pos)},toValue:function(a,b){return this.translate(a-(b?0:this.pos),
!0,!this.horiz,null,!0)},getPlotLinePath:function(a){var b=this,e=b.chart,g=b.left,c=b.top,z=a.old,f=a.value,h=a.translatedValue,d=a.lineWidth,A=a.force,F,r,v,x,l=z&&e.oldChartHeight||e.chartHeight,q=z&&e.oldChartWidth||e.chartWidth,p,u=b.transB,k=function(a,b,e){if("pass"!==A&&a<b||a>e)A?a=Math.min(Math.max(b,a),e):p=!0;return a};a={value:f,lineWidth:d,old:z,force:A,acrossPanes:a.acrossPanes,translatedValue:h};m(this,"getPlotLinePath",a,function(a){h=n(h,b.translate(f,null,null,z));h=Math.min(Math.max(-1E5,
h),1E5);F=v=Math.round(h+u);r=x=Math.round(l-h-u);H(h)?b.horiz?(r=c,x=l-b.bottom,F=v=k(F,g,g+b.width)):(F=g,v=q-b.right,r=x=k(r,c,c+b.height)):(p=!0,A=!1);a.path=p&&!A?null:e.renderer.crispLine(["M",F,r,"L",v,x],d||1)});return a.path},getLinearTickPositions:function(a,b,e){var g=q(Math.floor(b/a)*a);e=q(Math.ceil(e/a)*a);var c=[],B;q(g+a)===g&&(B=20);if(this.single)return[b];for(b=g;b<=e;){c.push(b);b=q(b+a,B);if(b===z)break;var z=b}return c},getMinorTickInterval:function(){var a=this.options;return!0===
a.minorTicks?n(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},getMinorTickPositions:function(){var a=this,b=a.options,e=a.tickPositions,g=a.minorTickInterval,c=[],f=a.pointRangePadding||0,h=a.min-f;f=a.max+f;var d=f-h;if(d&&d/g<a.len/3)if(a.isLog)this.paddedTicks.forEach(function(b,e,B){e&&c.push.apply(c,a.getLogTickPositions(g,B[e-1],B[e],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())c=c.concat(a.getTimeTicks(a.normalizeTimeTickInterval(g),h,f,b.startOfWeek));
else for(b=h+(e[0]-h)%g;b<=f&&b!==c[0];b+=g)c.push(b);0!==c.length&&a.trimTicks(c);return c},adjustForMinRange:function(){var a=this.options,b=this.min,e=this.max,g,c,f,h,d;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(w(a.min)||w(a.max)?this.minRange=null:(this.series.forEach(function(a){h=a.xData;for(c=d=a.xIncrement?1:h.length-1;0<c;c--)if(f=h[c]-h[c-1],void 0===g||f<g)g=f}),this.minRange=Math.min(5*g,this.dataMax-this.dataMin)));if(e-b<this.minRange){var m=this.dataMax-this.dataMin>=this.minRange;
var A=this.minRange;var F=(A-e+b)/2;F=[b-F,n(a.min,b-F)];m&&(F[2]=this.isLog?this.log2lin(this.dataMin):this.dataMin);b=u(F);e=[b+A,n(a.max,b+A)];m&&(e[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax);e=l(e);e-b<A&&(F[0]=e-A,F[1]=n(a.min,e-A),b=u(F))}this.min=b;this.max=e},getClosest:function(){var a;this.categories?a=1:this.series.forEach(function(b){var e=b.closestPointRange,g=b.visible||!b.chart.options.chart.ignoreHiddenSeries;!b.noSharedTooltip&&w(e)&&g&&(a=w(a)?Math.min(a,e):e)});return a},
nameToX:function(a){var b=D(this.categories),e=b?this.categories:this.names,g=a.options.x;a.series.requireSorting=!1;w(g)||(g=!1===this.options.uniqueNames?a.series.autoIncrement():b?e.indexOf(a.name):n(e.keys[a.name],-1));if(-1===g){if(!b)var c=e.length}else c=g;void 0!==c&&(this.names[c]=a.name,this.names.keys[a.name]=c);return c},updateNames:function(){var a=this,b=this.names;0<b.length&&(Object.keys(b.keys).forEach(function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,(this.series||
[]).forEach(function(b){b.xIncrement=null;if(!b.points||b.isDirtyData)a.max=Math.max(a.max,b.xData.length-1),b.processData(),b.generatePoints();b.data.forEach(function(e,g){if(e&&e.options&&void 0!==e.name){var c=a.nameToX(e);void 0!==c&&c!==e.x&&(e.x=c,b.xData[g]=c)}})}))},setAxisTranslation:function(a){var b=this,e=b.max-b.min,c=b.axisPointRange||0,f=0,h=0,z=b.linkedParent,d=!!b.categories,A=b.transA,F=b.isXAxis;if(F||d||c){var r=b.getClosest();z?(f=z.minPointOffset,h=z.pointRangePadding):b.series.forEach(function(a){var e=
d?1:F?n(a.options.pointRange,r,0):b.axisPointRange||0,z=a.options.pointPlacement;c=Math.max(c,e);if(!b.single||d)a=g.xrange&&a instanceof g.xrange?!F:F,f=Math.max(f,a&&E(z)?0:e/2),h=Math.max(h,a&&"on"===z?0:e)});z=b.ordinalSlope&&r?b.ordinalSlope/r:1;b.minPointOffset=f*=z;b.pointRangePadding=h*=z;b.pointRange=Math.min(c,e);F&&(b.closestPointRange=r)}a&&(b.oldTransA=A);b.translationSlope=b.transA=A=b.staticScale||b.len/(e+h||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=A*f;m(this,"afterSetAxisTranslation")},
minFromRange:function(){return this.max-this.range},setTickInterval:function(a){var b=this,e=b.chart,g=b.options,c=b.isLog,f=b.isDatetimeAxis,h=b.isXAxis,z=b.isLinked,A=g.maxPadding,F=g.minPadding,x=g.tickInterval,l=g.tickPixelInterval,p=b.categories,u=H(b.threshold)?b.threshold:null,k=b.softThreshold;f||p||z||this.getTickAmount();var t=n(b.userMin,g.min);var y=n(b.userMax,g.max);if(z){b.linkedParent=e[b.coll][g.linkedTo];var E=b.linkedParent.getExtremes();b.min=n(E.min,E.dataMin);b.max=n(E.max,E.dataMax);
g.type!==b.linkedParent.options.type&&d.error(11,1,e)}else{if(!k&&w(u))if(b.dataMin>=u)E=u,F=0;else if(b.dataMax<=u){var C=u;A=0}b.min=n(t,E,b.dataMin);b.max=n(y,C,b.dataMax)}c&&(b.positiveValuesOnly&&!a&&0>=Math.min(b.min,n(b.dataMin,b.min))&&d.error(10,1,e),b.min=q(b.log2lin(b.min),15),b.max=q(b.log2lin(b.max),15));b.range&&w(b.max)&&(b.userMin=b.min=t=Math.max(b.dataMin,b.minFromRange()),b.userMax=y=b.max,b.range=null);m(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();
!(p||b.axisPointRange||b.usePercentage||z)&&w(b.min)&&w(b.max)&&(e=b.max-b.min)&&(!w(t)&&F&&(b.min-=e*F),!w(y)&&A&&(b.max+=e*A));H(g.softMin)&&!H(b.userMin)&&g.softMin<b.min&&(b.min=t=g.softMin);H(g.softMax)&&!H(b.userMax)&&g.softMax>b.max&&(b.max=y=g.softMax);H(g.floor)&&(b.min=Math.min(Math.max(b.min,g.floor),Number.MAX_VALUE));H(g.ceiling)&&(b.max=Math.max(Math.min(b.max,g.ceiling),n(b.userMax,-Number.MAX_VALUE)));k&&w(b.dataMin)&&(u=u||0,!w(t)&&b.min<u&&b.dataMin>=u?b.min=b.options.minRange?Math.min(u,
b.max-b.minRange):u:!w(y)&&b.max>u&&b.dataMax<=u&&(b.max=b.options.minRange?Math.max(u,b.min+b.minRange):u));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:z&&!x&&l===b.linkedParent.options.tickPixelInterval?x=b.linkedParent.tickInterval:n(x,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,p?1:(b.max-b.min)*l/Math.max(b.len,l));h&&!a&&b.series.forEach(function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&
b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!x&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));a=n(g.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!x&&b.tickInterval<a&&(b.tickInterval=a);f||c||x||(b.tickInterval=v(b.tickInterval,null,r(b.tickInterval),n(g.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());
this.setTickPositions()},setTickPositions:function(){var a=this.options,b=a.tickPositions;var e=this.getMinorTickInterval();var g=a.tickPositioner,c=a.startOnTick,f=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===e&&this.tickInterval?this.tickInterval/5:e;this.single=this.min===this.max&&w(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=e=b&&b.slice();
!e&&(!this.ordinalPositions&&(this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)?(e=[this.min,this.max],d.error(19,!1,this.chart)):e=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),e.length>this.len&&(e=[e[0],e.pop()],e[0]===
e[1]&&(e.length=1)),this.tickPositions=e,g&&(g=g.apply(this,[this.min,this.max])))&&(this.tickPositions=e=g);this.paddedTicks=e.slice(0);this.trimTicks(e,c,f);this.isLinked||(this.single&&2>e.length&&!this.categories&&(this.min-=.5,this.max+=.5),b||g||this.adjustTickAmount());m(this,"afterSetTickPositions")},trimTicks:function(a,b,e){var g=a[0],c=a[a.length-1],f=this.minPointOffset||0;m(this,"trimTicks");if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-f>a[0];)a.shift();if(e)this.max=
c;else for(;this.max+f<a[a.length-1];)a.pop();0===a.length&&w(g)&&!this.options.tickPositions&&a.push((c+g)/2)}},alignToOthers:function(){var a={},b,e=this.options;!1===this.chart.options.chart.alignTicks||!1===e.alignTicks||!1===e.startOnTick||!1===e.endOnTick||this.isLog||this.chart[this.coll].forEach(function(e){var g=e.options;g=[e.horiz?g.left:g.top,g.width,g.height,g.pane].join();e.series.length&&(a[g]?b=!0:a[g]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,e=a.tickPixelInterval;
!w(a.tickInterval)&&this.len<e&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/e)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=this.options,b=this.tickInterval,e=this.tickPositions,g=this.tickAmount,c=this.finalTickAmt,f=e&&e.length,h=n(this.threshold,this.softThreshold?0:null),d;if(this.hasData()){if(f<g){for(d=this.min;e.length<g;)e.length%2||d===h?e.push(q(e[e.length-1]+b)):e.unshift(q(e[0]-
b));this.transA*=(f-1)/(g-1);this.min=a.startOnTick?e[0]:Math.min(this.min,e[0]);this.max=a.endOnTick?e[e.length-1]:Math.max(this.max,e[e.length-1])}else f>g&&(this.tickInterval*=2,this.setTickPositions());if(w(c)){for(b=a=e.length;b--;)(3===c&&1===b%2||2>=c&&0<b&&b<a-1)&&e.splice(b,1);this.finalTickAmt=void 0}}},setScale:function(){var a=this.series.some(function(a){return a.isDirtyData||a.isDirty||a.xAxis&&a.xAxis.isDirty}),b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;
this.setAxisSize();(b=this.len!==this.oldAxisLength)||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();m(this,"afterSetScale")},setExtremes:function(a,
b,e,g,c){var h=this,d=h.chart;e=n(e,!0);h.series.forEach(function(a){delete a.kdTree});c=f(c,{min:a,max:b});m(h,"setExtremes",c,function(){h.userMin=a;h.userMax=b;h.eventArgs=c;e&&d.redraw(g)})},zoom:function(a,b){var e=this.dataMin,g=this.dataMax,c=this.options,f=Math.min(e,n(c.min,e)),h=Math.max(g,n(c.max,g));a={newMin:a,newMax:b};m(this,"zoom",a,function(a){var b=a.newMin,c=a.newMax;if(b!==this.min||c!==this.max)this.allowZoomOutside||(w(e)&&(b<f&&(b=f),b>h&&(b=h)),w(g)&&(c<f&&(c=f),c>h&&(c=h))),
this.displayBtn=void 0!==b||void 0!==c,this.setExtremes(b,c,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed},setAxisSize:function(){var a=this.chart,b=this.options,e=b.offsets||[0,0,0,0],g=this.horiz,c=this.width=Math.round(d.relativeLength(n(b.width,a.plotWidth-e[3]+e[1]),a.plotWidth)),f=this.height=Math.round(d.relativeLength(n(b.height,a.plotHeight-e[0]+e[2]),a.plotHeight)),h=this.top=Math.round(d.relativeLength(n(b.top,a.plotTop+e[0]),a.plotHeight,a.plotTop));b=this.left=Math.round(d.relativeLength(n(b.left,
a.plotLeft+e[3]),a.plotWidth,a.plotLeft));this.bottom=a.chartHeight-f-h;this.right=a.chartWidth-c-b;this.len=Math.max(g?c:f,0);this.pos=g?b:h},getExtremes:function(){var a=this.isLog;return{min:a?q(this.lin2log(this.min)):this.min,max:a?q(this.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,e=b?this.lin2log(this.min):this.min;b=b?this.lin2log(this.max):this.max;null===a||-Infinity===a?a=e:Infinity===
a?a=b:e>a?a=e:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){var b=(n(a,0)-90*this.side+720)%360;a={align:"center"};m(this,"autoLabelAlign",a,function(a){15<b&&165>b?a.align="right":195<b&&345>b&&(a.align="left")});return a.align},tickSize:function(a){var b=this.options,e=b[a+"Length"],g=n(b[a+"Width"],"tick"===a&&this.isXAxis&&!this.categories?1:0);if(g&&e){"inside"===b[a+"Position"]&&(e=-e);var c=[e,g]}a={tickSize:c};m(this,"afterTickSize",a);return a.tickSize},labelMetrics:function(){var a=
this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var b=this.options.labels,e=this.horiz,g=this.tickInterval,c=g,f=this.len/(((this.categories?1:0)+this.max-this.min)/g),h,d=b.rotation,m=this.labelMetrics(),A,F=Number.MAX_VALUE,r,v=this.max-this.min,x=function(a){var b=a/(f||1);b=1<b?Math.ceil(b):1;b*g>v&&Infinity!==a&&Infinity!==f&&v&&(b=Math.ceil(v/
g));return q(b*g)};e?(r=!b.staggerLines&&!b.step&&(w(d)?[d]:f<n(b.autoRotationLimit,80)&&b.autoRotation))&&r.forEach(function(b){if(b===d||b&&-90<=b&&90>=b){A=x(Math.abs(m.h/Math.sin(a*b)));var e=A+Math.abs(b/360);e<F&&(F=e,h=b,c=A)}}):b.step||(c=x(m.h));this.autoRotation=r;this.labelRotation=n(h,d);return c},getSlotWidth:function(a){var b=this.chart,e=this.horiz,g=this.options.labels,c=Math.max(this.tickPositions.length-(this.categories?0:1),1),f=b.margin[3];return a&&a.slotWidth||e&&2>(g.step||
0)&&!g.rotation&&(this.staggerLines||1)*this.len/c||!e&&(g.style&&parseInt(g.style.width,10)||f&&f-b.spacing[3]||.33*b.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,e=this.tickPositions,g=this.ticks,c=this.options.labels,f=c&&c.style||{},h=this.horiz,d=this.getSlotWidth(),n=Math.max(1,Math.round(d-2*(c.padding||5))),m={},A=this.labelMetrics(),F=c.style&&c.style.textOverflow,r=0;E(c.rotation)||(m.rotation=c.rotation||0);e.forEach(function(a){(a=g[a])&&a.label&&a.label.textPxLength>
r&&(r=a.label.textPxLength)});this.maxLabelLength=r;if(this.autoRotation)r>n&&r>A.h?m.rotation=this.labelRotation:this.labelRotation=0;else if(d){var v=n;if(!F){var x="clip";for(n=e.length;!h&&n--;){var l=e[n];if(l=g[l].label)l.styles&&"ellipsis"===l.styles.textOverflow?l.css({textOverflow:"clip"}):l.textPxLength>d&&l.css({width:d+"px"}),l.getBBox().height>this.len/e.length-(A.h-A.f)&&(l.specificTextOverflow="ellipsis")}}}m.rotation&&(v=r>.5*a.chartHeight?.33*a.chartHeight:r,F||(x="ellipsis"));if(this.labelAlign=
c.align||this.autoLabelAlign(this.labelRotation))m.align=this.labelAlign;e.forEach(function(a){var b=(a=g[a])&&a.label,e=f.width,c={};b&&(b.attr(m),a.shortenLabel?a.shortenLabel():v&&!e&&"nowrap"!==f.whiteSpace&&(v<b.textPxLength||"SPAN"===b.element.tagName)?(c.width=v,F||(c.textOverflow=b.specificTextOverflow||x),b.css(c)):b.styles&&b.styles.width&&!c.width&&!e&&b.css({width:null}),delete b.specificTextOverflow,a.rotation=m.rotation)},this);this.tickRotCorr=b.rotCorr(A.b,this.labelRotation||0,0!==
this.side)},hasData:function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&w(this.min)&&w(this.max)},addTitle:function(a){var b=this.chart.renderer,e=this.horiz,g=this.opposite,c=this.options.title,f,h=this.chart.styledMode;this.axisTitle||((f=c.textAlign)||(f=(e?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[c.align]),this.axisTitle=b.text(c.text,0,0,c.useHTML).attr({zIndex:7,rotation:c.rotation||0,align:f}).addClass("highcharts-axis-title"),
h||this.axisTitle.css(x(c.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);h||c.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](a)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new A(this,a)},getOffset:function(){var a=this,b=a.chart,e=b.renderer,g=a.options,c=a.tickPositions,f=a.ticks,h=a.horiz,d=a.side,A=b.inverted&&!a.isZAxis?[1,0,3,2][d]:d,F,r=0,v=0,x=g.title,l=g.labels,q=0,p=b.axisOffset;b=b.clipOffset;
var u=[-1,1,1,-1][d],k=g.className,t=a.axisParent;var E=a.hasData();a.showAxis=F=E||n(g.showEmpty,!0);a.staggerLines=a.horiz&&l.staggerLines;a.axisGroup||(a.gridGroup=e.g("grid").attr({zIndex:g.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(k||"")).add(t),a.axisGroup=e.g("axis").attr({zIndex:g.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(k||"")).add(t),a.labelGroup=e.g("axis-labels").attr({zIndex:l.zIndex||7}).addClass("highcharts-"+a.coll.toLowerCase()+
"-labels "+(k||"")).add(t));E||a.isLinked?(c.forEach(function(b,e){a.generateTick(b,e)}),a.renderUnsquish(),a.reserveSpaceDefault=0===d||2===d||{1:"left",3:"right"}[d]===a.labelAlign,n(l.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c.forEach(function(a){q=Math.max(f[a].getLabelSize(),q)}),a.staggerLines&&(q*=a.staggerLines),a.labelOffset=q*(a.opposite?-1:1)):y(f,function(a,b){a.destroy();delete f[b]});if(x&&x.text&&!1!==x.enabled&&(a.addTitle(F),F&&!1!==x.reserveSpace)){a.titleOffset=
r=a.axisTitle.getBBox()[h?"height":"width"];var C=x.offset;v=w(C)?0:n(x.margin,h?5:10)}a.renderLine();a.offset=u*n(g.offset,p[d]?p[d]+(g.margin||0):0);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};e=0===d?-a.labelMetrics().h:2===d?a.tickRotCorr.y:0;v=Math.abs(q)+v;q&&(v=v-e+u*(h?n(l.y,a.tickRotCorr.y+8*u):l.x));a.axisTitleMargin=n(C,v);a.getMaxLabelDimensions&&(a.maxLabelDimensions=a.getMaxLabelDimensions(f,c));h=this.tickSize("tick");p[d]=Math.max(p[d],a.axisTitleMargin+r+u*a.offset,v,c&&c.length&&h?h[0]+
u*a.offset:0);g=g.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[A]=Math.max(b[A],g);m(this,"afterGetOffset")},getLinePath:function(a){var b=this.chart,e=this.opposite,g=this.offset,c=this.horiz,f=this.left+(e?this.width:0)+g;g=b.chartHeight-this.bottom-(e?this.height:0)+g;e&&(a*=-1);return b.renderer.crispLine(["M",c?this.left:f,c?g:this.top,"L",c?b.chartWidth-this.right:f,c?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,e=this.top,g=this.len,c=this.options.title,f=a?b:e,h=this.opposite,d=this.offset,n=c.x||0,A=c.y||0,F=this.axisTitle,r=this.chart.renderer.fontMetrics(c.style&&c.style.fontSize,F);F=Math.max(F.getBBox(null,0).height-r.h-1,0);g={low:f+(a?0:g),middle:f+g/2,high:f+(a?g:0)}[c.align];b=(a?e+this.height:b)+(a?1:-1)*(h?-1:1)*this.axisTitleMargin+
[-F,F,r.f,-F][this.side];a={x:a?g+n:b+(h?this.width:0)+d+n,y:a?b+A-(h?this.height:0)+d:g+A};m(this,"afterGetTitlePosition",{titlePosition:a});return a},renderMinorTick:function(a){var b=this.chart.hasRendered&&H(this.oldMin),e=this.minorTicks;e[a]||(e[a]=new A(this,a,"minor"));b&&e[a].isNew&&e[a].render(null,!0);e[a].render(null,!1,1)},renderTick:function(a,b){var e=this.isLinked,g=this.ticks,c=this.chart.hasRendered&&H(this.oldMin);if(!e||a>=this.min&&a<=this.max)g[a]||(g[a]=new A(this,a)),c&&g[a].isNew&&
g[a].render(b,!0,-1),g[a].render(b)},render:function(){var a=this,b=a.chart,e=a.options,g=a.isLog,c=a.isLinked,f=a.tickPositions,h=a.axisTitle,n=a.ticks,r=a.minorTicks,v=a.alternateBands,x=e.stackLabels,l=e.alternateGridColor,q=a.tickmarkOffset,p=a.axisLine,u=a.showAxis,k=G(b.renderer.globalAnimation),t,E;a.labelEdge.length=0;a.overlap=!1;[n,r,v].forEach(function(a){y(a,function(a){a.isActive=!1})});if(a.hasData()||c)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(b){a.renderMinorTick(b)}),
f.length&&(f.forEach(function(b,e){a.renderTick(b,e)}),q&&(0===a.min||a.single)&&(n[-1]||(n[-1]=new A(a,-1,null,!0)),n[-1].render(-1))),l&&f.forEach(function(e,c){E=void 0!==f[c+1]?f[c+1]+q:a.max-q;0===c%2&&e<a.max&&E<=a.max+(b.polar?-q:q)&&(v[e]||(v[e]=new d.PlotLineOrBand(a)),t=e+q,v[e].options={from:g?a.lin2log(t):t,to:g?a.lin2log(E):E,color:l},v[e].render(),v[e].isActive=!0)}),a._addedPlotLB||((e.plotLines||[]).concat(e.plotBands||[]).forEach(function(b){a.addPlotBandOrLine(b)}),a._addedPlotLB=
!0);[n,r,v].forEach(function(a){var e,g=[],c=k.duration;y(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,g.push(b))});F(function(){for(e=g.length;e--;)a[g[e]]&&!a[g[e]].isActive&&(a[g[e]].destroy(),delete a[g[e]])},a!==v&&b.hasRendered&&c?c:0)});p&&(p[p.isPlaced?"animate":"attr"]({d:this.getLinePath(p.strokeWidth())}),p.isPlaced=!0,p[u?"show":"hide"](u));h&&u&&(e=a.getTitlePosition(),H(e.y)?(h[h.isNew?"attr":"animate"](e),h.isNew=!1):(h.attr("y",-9999),h.isNew=!0));x&&x.enabled&&a.renderStackTotals();
a.isDirty=!1;m(this,"afterRender")},redraw:function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})},keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var g=this,c=g.stacks,f=g.plotLinesAndBands,h;m(this,"destroy",{keepEvents:a});a||e(g);y(c,function(a,e){b(a);c[e]=null});[g.ticks,g.minorTicks,g.alternateBands].forEach(function(a){b(a)});if(f)for(a=f.length;a--;)f[a].destroy();
"stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){g[a]&&(g[a]=g[a].destroy())});for(h in g.plotLinesAndBandsGroups)g.plotLinesAndBandsGroups[h]=g.plotLinesAndBandsGroups[h].destroy();y(g,function(a,b){-1===g.keepProps.indexOf(b)&&delete g[b]})},drawCrosshair:function(a,b){var e,g=this.crosshair,c=n(g.snap,!0),f,h=this.cross;m(this,"drawCrosshair",{e:a,point:b});a||(a=this.cross&&this.cross.e);if(this.crosshair&&!1!==(w(b)||!c)){c?w(b)&&
(f=n("colorAxis"!==this.coll?b.crosshairPos:null,this.isXAxis?b.plotX:this.len-b.plotY)):f=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);w(f)&&(e=this.getPlotLinePath({value:b&&(this.isXAxis?b.x:n(b.stackY,b.y)),translatedValue:f})||null);if(!w(e)){this.hideCrosshair();return}c=this.categories&&!this.isRadial;h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(c?"category ":"thin ")+g.className).attr({zIndex:n(g.zIndex,2)}).add(),this.chart.styledMode||
(h.attr({stroke:g.color||(c?p("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":n(g.width,1)}).css({"pointer-events":"none"}),g.dashStyle&&h.attr({dashstyle:g.dashStyle})));h.show().attr({d:e});c&&!g.width&&h.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();m(this,"afterDrawCrosshair",{e:a,point:b})},hideCrosshair:function(){this.cross&&this.cross.hide();m(this,"afterHideCrosshair")}});return d.Axis=k});K(I,"parts/DateTimeAxis.js",[I["parts/Globals.js"]],function(d){var k=
d.Axis,w=d.getMagnitude,D=d.normalizeTickInterval,H=d.timeUnits;k.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};k.prototype.normalizeTimeTickInterval=function(d,k){var y=k||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];k=y[y.length-1];var t=H[k[0]],E=k[1],u;for(u=0;u<y.length&&!(k=y[u],t=H[k[0]],
E=k[1],y[u+1]&&d<=(t*E[E.length-1]+H[y[u+1][0]])/2);u++);t===H.year&&d<5*t&&(E=[1,2,5]);d=D(d/t,E,"year"===k[0]?Math.max(w(d/t),1):1);return{unitRange:t,count:d,unitName:k[0]}}});K(I,"parts/LogarithmicAxis.js",[I["parts/Globals.js"]],function(d){var k=d.Axis,w=d.getMagnitude,D=d.normalizeTickInterval,H=d.pick;k.prototype.getLogTickPositions=function(d,k,C,t){var y=this.options,u=this.len,l=[];t||(this._minorAutoInterval=null);if(.5<=d)d=Math.round(d),l=this.getLinearTickPositions(d,k,C);else if(.08<=
d){u=Math.floor(k);var p,q;for(y=.3<d?[1,2,4]:.15<d?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];u<C+1&&!q;u++){var c=y.length;for(p=0;p<c&&!q;p++){var a=this.log2lin(this.lin2log(u)*y[p]);a>k&&(!t||b<=C)&&void 0!==b&&l.push(b);b>C&&(q=!0);var b=a}}}else k=this.lin2log(k),C=this.lin2log(C),d=t?this.getMinorTickInterval():y.tickInterval,d=H("auto"===d?null:d,this._minorAutoInterval,y.tickPixelInterval/(t?5:1)*(C-k)/((t?u/this.tickPositions.length:u)||1)),d=D(d,null,w(d)),l=this.getLinearTickPositions(d,k,C).map(this.log2lin),
t||(this._minorAutoInterval=d/5);t||(this.tickInterval=d);return l};k.prototype.log2lin=function(d){return Math.log(d)/Math.LN10};k.prototype.lin2log=function(d){return Math.pow(10,d)}});K(I,"parts/PlotLineOrBand.js",[I["parts/Globals.js"],I["parts/Axis.js"],I["parts/Utilities.js"]],function(d,k,w){var D=w.defined,H=w.erase,E=w.objectEach,y=d.arrayMax,C=d.arrayMin,t=d.destroyObjectProperties,G=d.merge,u=d.pick;d.PlotLineOrBand=function(d,p){this.axis=d;p&&(this.options=p,this.id=p.id)};d.PlotLineOrBand.prototype=
{render:function(){d.fireEvent(this,"render");var l=this,p=l.axis,q=p.horiz,c=l.options,a=c.label,b=l.label,f=c.to,m=c.from,h=c.value,r=D(m)&&D(f),x=D(h),v=l.svgElem,n=!v,e=[],g=c.color,F=u(c.zIndex,0),A=c.events;e={"class":"highcharts-plot-"+(r?"band ":"line ")+(c.className||"")};var z={},B=p.chart.renderer,J=r?"bands":"lines";p.isLog&&(m=p.log2lin(m),f=p.log2lin(f),h=p.log2lin(h));p.chart.styledMode||(x?(e.stroke=g||"#999999",e["stroke-width"]=u(c.width,1),c.dashStyle&&(e.dashstyle=c.dashStyle)):
r&&(e.fill=g||"#e6ebf5",c.borderWidth&&(e.stroke=c.borderColor,e["stroke-width"]=c.borderWidth)));z.zIndex=F;J+="-"+F;(g=p.plotLinesAndBandsGroups[J])||(p.plotLinesAndBandsGroups[J]=g=B.g("plot-"+J).attr(z).add());n&&(l.svgElem=v=B.path().attr(e).add(g));if(x)e=p.getPlotLinePath({value:h,lineWidth:v.strokeWidth(),acrossPanes:c.acrossPanes});else if(r)e=p.getPlotBandPath(m,f,c);else return;(n||!v.d)&&e&&e.length?(v.attr({d:e}),A&&E(A,function(a,b){v.on(b,function(a){A[b].apply(l,[a])})})):v&&(e?(v.show(!0),
v.animate({d:e})):v.d&&(v.hide(),b&&(l.label=b=b.destroy())));a&&(D(a.text)||D(a.formatter))&&e&&e.length&&0<p.width&&0<p.height&&!e.isFlat?(a=G({align:q&&r&&"center",x:q?!r&&4:10,verticalAlign:!q&&r&&"middle",y:q?r?16:10:r?6:-4,rotation:q&&!r&&90},a),this.renderLabel(a,e,r,F)):b&&b.hide();return l},renderLabel:function(d,p,q,c){var a=this.label,b=this.axis.chart.renderer;a||(a={align:d.textAlign||d.align,rotation:d.rotation,"class":"highcharts-plot-"+(q?"band":"line")+"-label "+(d.className||"")},
a.zIndex=c,c=this.getLabelText(d),this.label=a=b.text(c,0,0,d.useHTML).attr(a).add(),this.axis.chart.styledMode||a.css(d.style));b=p.xBounds||[p[1],p[4],q?p[6]:p[1]];p=p.yBounds||[p[2],p[5],q?p[7]:p[2]];q=C(b);c=C(p);a.align(d,!1,{x:q,y:c,width:y(b)-q,height:y(p)-c});a.show(!0)},getLabelText:function(d){return D(d.formatter)?d.formatter.call(this):d.text},destroy:function(){H(this.axis.plotLinesAndBands,this);delete this.axis;t(this)}};d.extend(k.prototype,{getPlotBandPath:function(d,p){var q=this.getPlotLinePath({value:p,
force:!0,acrossPanes:this.options.acrossPanes}),c=this.getPlotLinePath({value:d,force:!0,acrossPanes:this.options.acrossPanes}),a=[],b=this.horiz,f=1;d=d<this.min&&p<this.min||d>this.max&&p>this.max;if(c&&q){if(d){var m=c.toString()===q.toString();f=0}for(d=0;d<c.length;d+=6)b&&q[d+1]===c[d+1]?(q[d+1]+=f,q[d+4]+=f):b||q[d+2]!==c[d+2]||(q[d+2]+=f,q[d+5]+=f),a.push("M",c[d+1],c[d+2],"L",c[d+4],c[d+5],q[d+4],q[d+5],q[d+1],q[d+2],"z"),a.isFlat=m}return a},addPlotBand:function(d){return this.addPlotBandOrLine(d,
"plotBands")},addPlotLine:function(d){return this.addPlotBandOrLine(d,"plotLines")},addPlotBandOrLine:function(l,p){var q=(new d.PlotLineOrBand(this,l)).render(),c=this.userOptions;if(q){if(p){var a=c[p]||[];a.push(l);c[p]=a}this.plotLinesAndBands.push(q)}return q},removePlotBandOrLine:function(d){for(var l=this.plotLinesAndBands,q=this.options,c=this.userOptions,a=l.length;a--;)l[a].id===d&&l[a].destroy();[q.plotLines||[],c.plotLines||[],q.plotBands||[],c.plotBands||[]].forEach(function(b){for(a=
b.length;a--;)b[a].id===d&&H(b,b[a])})},removePlotBand:function(d){this.removePlotBandOrLine(d)},removePlotLine:function(d){this.removePlotBandOrLine(d)}})});K(I,"parts/Tooltip.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isNumber,H=k.isString,E=k.splat;"";var y=d.doc,C=d.extend,t=d.format,G=d.merge,u=d.pick,l=d.syncTimeout,p=d.timeUnits;d.Tooltip=function(){this.init.apply(this,arguments)};d.Tooltip.prototype={init:function(d,c){this.chart=d;this.options=
c;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=c.split&&!d.inverted;this.shared=c.shared||this.split;this.outside=u(c.outside,!(!d.scrollablePixelsX&&!d.scrollablePixelsY))&&!this.split},cleanSplit:function(d){this.chart.series.forEach(function(c){var a=c&&c.tt;a&&(!a.isActive||d?c.tt=a.destroy():a.isActive=!1)})},applyFilter:function(){var d=this.chart;d.renderer.definition({tagName:"filter",id:"drop-shadow-"+d.index,opacity:.5,children:[{tagName:"feGaussianBlur","in":"SourceAlpha",
stdDeviation:1},{tagName:"feOffset",dx:1,dy:1},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",type:"linear",slope:.3}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode","in":"SourceGraphic"}]}]});d.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+d.index+"{filter:url(#drop-shadow-"+d.index+")}"})},getLabel:function(){var q=this,c=this.chart.renderer,a=this.chart.styledMode,b=this.options,f="tooltip"+(w(b.className)?" "+b.className:""),
m;if(!this.label){this.outside&&(this.container=m=d.doc.createElement("div"),m.className="highcharts-tooltip-container",d.css(m,{position:"absolute",top:"1px",pointerEvents:b.style&&b.style.pointerEvents,zIndex:3}),d.doc.body.appendChild(m),this.renderer=c=new d.Renderer(m,0,0,{},void 0,void 0,c.styledMode));this.split?this.label=c.g(f):(this.label=c.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,f).attr({padding:b.padding,r:b.borderRadius}),a||this.label.attr({fill:b.backgroundColor,"stroke-width":b.borderWidth}).css(b.style).shadow(b.shadow));
a&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(this.outside){var h={x:this.label.xSetter,y:this.label.ySetter};this.label.xSetter=function(a,b){h[b].call(this.label,q.distance);m.style.left=a+"px"};this.label.ySetter=function(a,b){h[b].call(this.label,q.distance);m.style.top=a+"px"}}this.label.attr({zIndex:8}).add()}return this.label},update:function(d){this.destroy();G(!0,this.chart.options.tooltip.userOptions,d);this.init(this.chart,G(!0,this.options,d))},
destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),d.discardElement(this.container));d.clearTimeout(this.hideTimer);d.clearTimeout(this.tooltipTimeout)},move:function(l,c,a,b){var f=this,m=f.now,h=!1!==f.options.animation&&!f.isHidden&&(1<Math.abs(l-m.x)||1<Math.abs(c-m.y)),r=f.followPointer||1<f.len;C(m,{x:h?(2*m.x+l)/3:l,y:h?(m.y+c)/2:c,anchorX:r?void 0:
h?(2*m.anchorX+a)/3:a,anchorY:r?void 0:h?(m.anchorY+b)/2:b});f.getLabel().attr(m);h&&(d.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){f&&f.move(l,c,a,b)},32))},hide:function(p){var c=this;d.clearTimeout(this.hideTimer);p=u(p,this.options.hideDelay,500);this.isHidden||(this.hideTimer=l(function(){c.getLabel()[p?"fadeOut":"hide"]();c.isHidden=!0},p))},getAnchor:function(d,c){var a=this.chart,b=a.pointer,f=a.inverted,m=a.plotTop,h=a.plotLeft,r=0,x=0,v,n;d=E(d);this.followPointer&&
c?(void 0===c.chartX&&(c=b.normalize(c)),d=[c.chartX-a.plotLeft,c.chartY-m]):d[0].tooltipPos?d=d[0].tooltipPos:(d.forEach(function(a){v=a.series.yAxis;n=a.series.xAxis;r+=a.plotX+(!f&&n?n.left-h:0);x+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!f&&v?v.top-m:0)}),r/=d.length,x/=d.length,d=[f?a.plotWidth-x:r,this.shared&&!f&&1<d.length&&c?c.chartY-m:f?a.plotHeight-r:x]);return d.map(Math.round)},getPosition:function(d,c,a){var b=this.chart,f=this.distance,m={},h=b.inverted&&a.h||0,r,x=this.outside,
v=x?y.documentElement.clientWidth-2*f:b.chartWidth,n=x?Math.max(y.body.scrollHeight,y.documentElement.scrollHeight,y.body.offsetHeight,y.documentElement.offsetHeight,y.documentElement.clientHeight):b.chartHeight,e=b.pointer.chartPosition,g=b.containerScaling,F=function(a){return g?a*g.scaleX:a},A=function(a){return g?a*g.scaleY:a},z=function(g){var h="x"===g;return[g,h?v:n,h?d:c].concat(x?[h?F(d):A(c),h?e.left-f+F(a.plotX+b.plotLeft):e.top-f+A(a.plotY+b.plotTop),0,h?v:n]:[h?d:c,h?a.plotX+b.plotLeft:
a.plotY+b.plotTop,h?b.plotLeft:b.plotTop,h?b.plotLeft+b.plotWidth:b.plotTop+b.plotHeight])},B=z("y"),l=z("x"),p=!this.followPointer&&u(a.ttBelow,!b.inverted===!!a.negative),q=function(a,b,e,g,c,d,n){var z="y"===a?A(f):F(f),r=(e-g)/2,B=g<c-f,v=c+f+g<b,x=c-z-e+r;c=c+z-r;if(p&&v)m[a]=c;else if(!p&&B)m[a]=x;else if(B)m[a]=Math.min(n-g,0>x-h?x:x-h);else if(v)m[a]=Math.max(d,c+h+e>b?c:c+h);else return!1},k=function(a,b,e,g,c){var d;c<f||c>b-f?d=!1:m[a]=c<e/2?1:c>b-g/2?b-g-2:c-e/2;return d},t=function(a){var b=
B;B=l;l=b;r=a},L=function(){!1!==q.apply(0,B)?!1!==k.apply(0,l)||r||(t(!0),L()):r?m.x=m.y=0:(t(!0),L())};(b.inverted||1<this.len)&&t();L();return m},defaultFormatter:function(d){var c=this.points||E(this);var a=[d.tooltipFooterHeaderFormatter(c[0])];a=a.concat(d.bodyFormatter(c));a.push(d.tooltipFooterHeaderFormatter(c[0],!0));return a},refresh:function(l,c){var a=this.chart,b=this.options,f=l,m={},h=[];var r=b.formatter||this.defaultFormatter;m=this.shared;var x=a.styledMode;if(b.enabled){d.clearTimeout(this.hideTimer);
this.followPointer=E(f)[0].series.tooltipOptions.followPointer;var v=this.getAnchor(f,c);c=v[0];var n=v[1];!m||f.series&&f.series.noSharedTooltip?m=f.getLabelConfig():(a.pointer.applyInactiveState(f),f.forEach(function(a){a.setState("hover");h.push(a.getLabelConfig())}),m={x:f[0].category,y:f[0].y},m.points=h,f=f[0]);this.len=h.length;r=r.call(m,this);m=f.series;this.distance=u(m.tooltipOptions.distance,16);!1===r?this.hide():(a=this.getLabel(),this.isHidden&&a.attr({opacity:1}).show(),this.split?
this.renderSplit(r,E(l)):(b.style.width&&!x||a.css({width:this.chart.spacingBox.width}),a.attr({text:r&&r.join?r.join(""):r}),a.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+u(f.colorIndex,m.colorIndex)),x||a.attr({stroke:b.borderColor||f.color||m.color||"#666666"}),this.updatePosition({plotX:c,plotY:n,negative:f.negative,ttBelow:f.ttBelow,h:v[2]||0})),this.isHidden=!1);d.fireEvent(this,"refresh")}},renderSplit:function(l,c){var a=this,b=[],f=this.chart,m=f.renderer,h=!0,r=this.options,
x=0,v,n=this.getLabel(),e=f.plotTop;H(l)&&(l=[!1,l]);l.slice(0,c.length+1).forEach(function(g,d){if(!1!==g&&""!==g){d=c[d-1]||{isHeader:!0,plotX:c[0].plotX,plotY:f.plotHeight};var A=d.series||a,F=A.tt,B=d.series||{},l="highcharts-color-"+u(d.colorIndex,B.colorIndex,"none");F||(F={padding:r.padding,r:r.borderRadius},f.styledMode||(F.fill=r.backgroundColor,F["stroke-width"]=r.borderWidth),A.tt=F=m.label(null,null,null,(d.isHeader?r.headerShape:r.shape)||"callout",null,null,r.useHTML).addClass("highcharts-tooltip-box "+
l).attr(F).add(n));F.isActive=!0;F.attr({text:g});f.styledMode||F.css(r.style).shadow(r.shadow).attr({stroke:r.borderColor||d.color||B.color||"#333333"});g=F.getBBox();l=g.width+F.strokeWidth();d.isHeader?(x=g.height,f.xAxis[0].opposite&&(v=!0,e-=x),g=Math.max(0,Math.min(d.plotX+f.plotLeft-l/2,f.chartWidth+(f.scrollablePixelsX?f.scrollablePixelsX-f.marginRight:0)-l))):g=d.plotX+f.plotLeft-u(r.distance,16)-l;0>g&&(h=!1);d.isHeader?B=v?-x:f.plotHeight+x:(B=B.yAxis,B=B.pos-e+Math.max(0,Math.min(d.plotY||
0,B.len)));b.push({target:B,rank:d.isHeader?1:0,size:A.tt.getBBox().height+1,point:d,x:g,tt:F})}});this.cleanSplit();r.positioner&&b.forEach(function(b){var e=r.positioner.call(a,b.tt.getBBox().width,b.size,b.point);b.x=e.x;b.align=0;b.target=e.y;b.rank=u(e.rank,b.rank)});d.distribute(b,f.plotHeight+x);b.forEach(function(b){var g=b.point,c=g.series,d=c&&c.yAxis;b.tt.attr({visibility:void 0===b.pos?"hidden":"inherit",x:h||g.isHeader||r.positioner?b.x:g.plotX+f.plotLeft+a.distance,y:b.pos+e,anchorX:g.isHeader?
g.plotX+f.plotLeft:g.plotX+c.xAxis.pos,anchorY:g.isHeader?f.plotTop+f.plotHeight/2:d.pos+Math.max(0,Math.min(g.plotY,d.len))})})},updatePosition:function(l){var c=this.chart,a=c.pointer,b=this.getLabel(),f=l.plotX+c.plotLeft,m=l.plotY+c.plotTop;a.chartPosition||(a.chartPosition=d.offset(c.container));l=(this.options.positioner||this.getPosition).call(this,b.width,b.height,l);if(this.outside){var h=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(b.width+h,b.height+h,!1);if(c=c.containerScaling)d.css(this.container,
{transform:"scale("+c.scaleX+", "+c.scaleY+")"}),f*=c.scaleX,m*=c.scaleY;f+=a.chartPosition.left-l.x;m+=a.chartPosition.top-l.y}this.move(Math.round(l.x),Math.round(l.y||0),f,m)},getDateFormat:function(d,c,a,b){var f=this.chart.time,m=f.dateFormat("%m-%d %H:%M:%S.%L",c),h={millisecond:15,second:12,minute:9,hour:6,day:3},r="millisecond";for(x in p){if(d===p.week&&+f.dateFormat("%w",c)===a&&"00:00:00.000"===m.substr(6)){var x="week";break}if(p[x]>d){x=r;break}if(h[x]&&m.substr(h[x])!=="01-01 00:00:00.000".substr(h[x]))break;
"week"!==x&&(r=x)}if(x)var v=f.resolveDTLFormat(b[x]).main;return v},getXDateFormat:function(d,c,a){c=c.dateTimeLabelFormats;var b=a&&a.closestPointRange;return(b?this.getDateFormat(b,d.x,a.options.startOfWeek,c):c.day)||c.year},tooltipFooterHeaderFormatter:function(l,c){var a=c?"footer":"header",b=l.series,f=b.tooltipOptions,m=f.xDateFormat,h=b.xAxis,r=h&&"datetime"===h.options.type&&D(l.key),x=f[a+"Format"];c={isFooter:c,labelConfig:l};d.fireEvent(this,"headerFormatter",c,function(a){r&&!m&&(m=
this.getXDateFormat(l,f,h));r&&m&&(l.point&&l.point.tooltipDateKeys||["key"]).forEach(function(a){x=x.replace("{point."+a+"}","{point."+a+":"+m+"}")});b.chart.styledMode&&(x=this.styledModeFormat(x));a.text=t(x,{point:l,series:b},this.chart.time)});return c.text},bodyFormatter:function(d){return d.map(function(c){var a=c.series.tooltipOptions;return(a[(c.point.formatPrefix||"point")+"Formatter"]||c.point.tooltipFormatter).call(c.point,a[(c.point.formatPrefix||"point")+"Format"]||"")})},styledModeFormat:function(d){return d.replace('style="font-size: 10px"',
'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')}}});K(I,"parts/Pointer.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.attr,D=k.defined,H=k.isNumber,E=k.isObject,y=k.objectEach,C=k.splat,t=d.addEvent,G=d.charts,u=d.color,l=d.css,p=d.extend,q=d.find,c=d.fireEvent,a=d.offset,b=d.pick,f=d.Tooltip;d.Pointer=function(a,b){this.init(a,b)};d.Pointer.prototype={init:function(a,c){this.options=c;this.chart=
a;this.runChartClick=c.chart.events&&!!c.chart.events.click;this.pinchDown=[];this.lastValidTouch={};f&&(a.tooltip=new f(a,c.tooltip),this.followTouchMove=b(c.tooltip.followTouchMove,!0));this.setDOMEvents()},zoomOption:function(a){var c=this.chart,d=c.options.chart,f=d.zoomType||"";c=c.inverted;/touch/.test(a.type)&&(f=b(d.pinchType,f));this.zoomX=a=/x/.test(f);this.zoomY=f=/y/.test(f);this.zoomHor=a&&!c||f&&c;this.zoomVert=f&&!c||a&&c;this.hasZoom=a||f},normalize:function(b,c){var d=b.touches?b.touches.length?
b.touches.item(0):b.changedTouches[0]:b;c||(this.chartPosition=c=a(this.chart.container));var f=d.pageX-c.left;c=d.pageY-c.top;if(d=this.chart.containerScaling)f/=d.scaleX,c/=d.scaleY;return p(b,{chartX:Math.round(f),chartY:Math.round(c)})},getCoordinates:function(a){var b={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,b,c){var d;a.forEach(function(a){var f=
!(a.noSharedTooltip&&b)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(c,f);if((f=E(a,!0))&&!(f=!E(d,!0))){f=d.distX-a.distX;var e=d.dist-a.dist,g=(a.series.group&&a.series.group.zIndex)-(d.series.group&&d.series.group.zIndex);f=0<(0!==f&&b?f:0!==e?e:0!==g?g:d.series.index>a.series.index?-1:1)}f&&(d=a)});return d},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,c){var d=a.series,f=d.xAxis;d=d.yAxis;
var h=b(a.clientX,a.plotX),n=a.shapeArgs;if(f&&d)return c?{chartX:f.len+f.pos-h,chartY:d.len+d.pos-a.plotY}:{chartX:h+f.pos,chartY:a.plotY+d.pos};if(n&&n.x&&n.y)return{chartX:n.x,chartY:n.y}},getHoverData:function(a,c,d,f,v,n){var e,g=[];f=!(!f||!a);var h=c&&!c.stickyTracking?[c]:d.filter(function(a){return a.visible&&!(!v&&a.directTouch)&&b(a.options.enableMouseTracking,!0)&&a.stickyTracking});c=(e=f||!n?a:this.findNearestKDPoint(h,v,n))&&e.series;e&&(v&&!c.noSharedTooltip?(h=d.filter(function(a){return a.visible&&
!(!v&&a.directTouch)&&b(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),h.forEach(function(a){var b=q(a.points,function(a){return a.x===e.x&&!a.isNull});E(b)&&(a.chart.isBoosting&&(b=a.getPoint(b)),g.push(b))})):g.push(e));return{hoverPoint:e,hoverSeries:c,hoverPoints:g}},runPointActions:function(a,c){var f=this.chart,h=f.tooltip&&f.tooltip.options.enabled?f.tooltip:void 0,m=h?h.shared:!1,n=c||f.hoverPoint,e=n&&n.series||f.hoverSeries;e=this.getHoverData(n,e,f.series,(!a||"touchmove"!==a.type)&&
(!!c||e&&e.directTouch&&this.isDirectTouch),m,a);n=e.hoverPoint;var g=e.hoverPoints;c=(e=e.hoverSeries)&&e.tooltipOptions.followPointer;m=m&&e&&!e.noSharedTooltip;if(n&&(n!==f.hoverPoint||h&&h.isHidden)){(f.hoverPoints||[]).forEach(function(a){-1===g.indexOf(a)&&a.setState()});if(f.hoverSeries!==e)e.onMouseOver();this.applyInactiveState(g);(g||[]).forEach(function(a){a.setState("hover")});f.hoverPoint&&f.hoverPoint.firePointEvent("mouseOut");if(!n.series)return;n.firePointEvent("mouseOver");f.hoverPoints=
g;f.hoverPoint=n;h&&h.refresh(m?g:n,a)}else c&&h&&!h.isHidden&&(n=h.getAnchor([{}],a),h.updatePosition({plotX:n[0],plotY:n[1]}));this.unDocMouseMove||(this.unDocMouseMove=t(f.container.ownerDocument,"mousemove",function(a){var b=G[d.hoverChartIndex];if(b)b.pointer.onDocumentMouseMove(a)}));f.axes.forEach(function(e){var c=b(e.crosshair.snap,!0),f=c?d.find(g,function(a){return a.series[e.coll]===e}):void 0;f||!c?e.drawCrosshair(a,f):e.hideCrosshair()})},applyInactiveState:function(a){var b=[],c;(a||
[]).forEach(function(a){c=a.series;b.push(c);c.linkedParent&&b.push(c.linkedParent);c.linkedSeries&&(b=b.concat(c.linkedSeries));c.navigatorSeries&&b.push(c.navigatorSeries)});this.chart.series.forEach(function(a){-1===b.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})},reset:function(a,b){var c=this.chart,d=c.hoverSeries,f=c.hoverPoint,h=c.hoverPoints,e=c.tooltip,g=e&&e.shared?h:f;a&&g&&C(g).forEach(function(b){b.series.isCartesian&&void 0===
b.plotX&&(a=!1)});if(a)e&&g&&C(g).length&&(e.refresh(g),e.shared&&h?h.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):f&&(f.setState(f.state,!0),c.axes.forEach(function(a){a.crosshair&&a.drawCrosshair(null,f)})));else{if(f)f.onMouseOut();h&&h.forEach(function(a){a.setState()});if(d)d.onMouseOut();e&&e.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());
c.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;c.series.forEach(function(f){d=a||f.getPlotBox();f.xAxis&&f.xAxis.zoomEnabled&&f.group&&(f.group.attr(d),f.markerGroup&&(f.markerGroup.attr(d),f.markerGroup.clip(b?c.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=
a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=this.chart,c=b.options.chart,d=a.chartX,f=a.chartY,n=this.zoomHor,e=this.zoomVert,g=b.plotLeft,m=b.plotTop,A=b.plotWidth,z=b.plotHeight,B=this.selectionMarker,l=this.mouseDownX,p=this.mouseDownY,q=c.panKey&&a[c.panKey+"Key"];if(!B||!B.touch)if(d<g?d=g:d>g+A&&(d=g+A),f<m?f=m:f>m+z&&(f=m+z),this.hasDragged=Math.sqrt(Math.pow(l-d,2)+Math.pow(p-f,2)),10<this.hasDragged){var k=b.isInsidePlot(l-g,p-m);b.hasCartesianSeries&&(this.zoomX||
this.zoomY)&&k&&!q&&!B&&(this.selectionMarker=B=b.renderer.rect(g,m,n?1:A,e?1:z,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),b.styledMode||B.attr({fill:c.selectionMarkerFill||u("#335cad").setOpacity(.25).get()}));B&&n&&(d-=l,B.attr({width:Math.abs(d),x:(0<d?0:d)+l}));B&&e&&(d=f-p,B.attr({height:Math.abs(d),y:(0<d?0:d)+p}));k&&!B&&c.panning&&b.pan(a,c.panning)}},drop:function(a){var b=this,d=this.chart,f=this.hasPinched;if(this.selectionMarker){var m={originalEvent:a,xAxis:[],yAxis:[]},
n=this.selectionMarker,e=n.attr?n.attr("x"):n.x,g=n.attr?n.attr("y"):n.y,F=n.attr?n.attr("width"):n.width,A=n.attr?n.attr("height"):n.height,z;if(this.hasDragged||f)d.axes.forEach(function(c){if(c.zoomEnabled&&D(c.min)&&(f||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var d=c.horiz,h="touchend"===a.type?c.minPixelPadding:0,n=c.toValue((d?e:g)+h);d=c.toValue((d?e+F:g+A)-h);m[c.coll].push({axis:c,min:Math.min(n,d),max:Math.max(n,d)});z=!0}}),z&&c(d,"selection",m,function(a){d.zoom(p(a,f?{animation:!1}:
null))});H(d.index)&&(this.selectionMarker=this.selectionMarker.destroy());f&&this.scaleGroups()}d&&H(d.index)&&(l(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(a){G[d.hoverChartIndex]&&G[d.hoverChartIndex].pointer.drop(a)},onDocumentMouseMove:function(a){var b=
this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(a){var b=G[d.hoverChartIndex];b&&(a.relatedTarget||a.toElement)&&(b.pointer.reset(),b.pointer.chartPosition=null)},onContainerMouseMove:function(a){var b=this.chart;D(d.hoverChartIndex)&&G[d.hoverChartIndex]&&G[d.hoverChartIndex].mouseIsDown||(d.hoverChartIndex=b.index);a=this.normalize(a);a.preventDefault||
(a.returnValue=!1);"mousedown"===b.mouseIsDown&&this.drag(a);!this.inClass(a.target,"highcharts-tracker")&&!b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||b.openMenu||this.runPointActions(a)},inClass:function(a,b){for(var c;a;){if(c=w(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,
"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},onContainerClick:function(a){var b=this.chart,d=b.hoverPoint,f=b.plotLeft,m=b.plotTop;a=this.normalize(a);b.cancelClick||(d&&this.inClass(a.target,"highcharts-tracker")?(c(d.series,"click",p(a,{point:d})),b.hoverPoint&&d.firePointEvent("click",a)):(p(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-f,a.chartY-m)&&c(b,"click",a)))},setDOMEvents:function(){var a=this,b=a.chart.container,
c=b.ownerDocument;b.onmousedown=function(b){a.onContainerMouseDown(b)};b.onmousemove=function(b){a.onContainerMouseMove(b)};b.onclick=function(b){a.onContainerClick(b)};this.unbindContainerMouseLeave=t(b,"mouseleave",a.onContainerMouseLeave);d.unbindDocumentMouseUp||(d.unbindDocumentMouseUp=t(c,"mouseup",a.onDocumentMouseUp));d.hasTouch&&(t(b,"touchstart",function(b){a.onContainerTouchStart(b)}),t(b,"touchmove",function(b){a.onContainerTouchMove(b)}),d.unbindDocumentTouchEnd||(d.unbindDocumentTouchEnd=
t(c,"touchend",a.onDocumentTouchEnd)))},destroy:function(){var a=this;a.unDocMouseMove&&a.unDocMouseMove();this.unbindContainerMouseLeave();d.chartCount||(d.unbindDocumentMouseUp&&(d.unbindDocumentMouseUp=d.unbindDocumentMouseUp()),d.unbindDocumentTouchEnd&&(d.unbindDocumentTouchEnd=d.unbindDocumentTouchEnd()));clearInterval(a.tooltipTimeout);y(a,function(b,c){a[c]=null})}}});K(I,"parts/TouchPointer.js",[I["parts/Globals.js"]],function(d){var k=d.charts,w=d.extend,D=d.noop,H=d.pick;w(d.Pointer.prototype,
{pinchTranslate:function(d,k,C,t,w,u){this.zoomHor&&this.pinchTranslateDirection(!0,d,k,C,t,w,u);this.zoomVert&&this.pinchTranslateDirection(!1,d,k,C,t,w,u)},pinchTranslateDirection:function(d,k,C,t,w,u,l,p){var q=this.chart,c=d?"x":"y",a=d?"X":"Y",b="chart"+a,f=d?"width":"height",m=q["plot"+(d?"Left":"Top")],h,r,x=p||1,v=q.inverted,n=q.bounds[d?"h":"v"],e=1===k.length,g=k[0][b],F=C[0][b],A=!e&&k[1][b],z=!e&&C[1][b];C=function(){!e&&20<Math.abs(g-A)&&(x=p||Math.abs(F-z)/Math.abs(g-A));r=(m-F)/x+g;
h=q["plot"+(d?"Width":"Height")]/x};C();k=r;if(k<n.min){k=n.min;var B=!0}else k+h>n.max&&(k=n.max-h,B=!0);B?(F-=.8*(F-l[c][0]),e||(z-=.8*(z-l[c][1])),C()):l[c]=[F,z];v||(u[c]=r-m,u[f]=h);u=v?1/x:x;w[f]=h;w[c]=k;t[v?d?"scaleY":"scaleX":"scale"+a]=x;t["translate"+a]=u*m+(F-u*g)},pinch:function(d){var k=this,C=k.chart,t=k.pinchDown,E=d.touches,u=E.length,l=k.lastValidTouch,p=k.hasZoom,q=k.selectionMarker,c={},a=1===u&&(k.inClass(d.target,"highcharts-tracker")&&C.runTrackerClick||k.runChartClick),b={};
1<u&&(k.initiated=!0);p&&k.initiated&&!a&&d.preventDefault();[].map.call(E,function(a){return k.normalize(a)});"touchstart"===d.type?([].forEach.call(E,function(a,b){t[b]={chartX:a.chartX,chartY:a.chartY}}),l.x=[t[0].chartX,t[1]&&t[1].chartX],l.y=[t[0].chartY,t[1]&&t[1].chartY],C.axes.forEach(function(a){if(a.zoomEnabled){var b=C.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(Math.min(H(a.options.min,a.dataMin),a.dataMin)),f=a.toPixels(Math.max(H(a.options.max,a.dataMax),a.dataMax)),v=Math.max(d,
f);b.min=Math.min(a.pos,Math.min(d,f)-c);b.max=Math.max(a.pos+a.len,v+c)}}),k.res=!0):k.followTouchMove&&1===u?this.runPointActions(k.normalize(d)):t.length&&(q||(k.selectionMarker=q=w({destroy:D,touch:!0},C.plotBox)),k.pinchTranslate(t,E,c,q,b,l),k.hasPinched=p,k.scaleGroups(c,b),k.res&&(k.res=!1,this.reset(!1,0)))},touch:function(k,y){var C=this.chart,t;if(C.index!==d.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});d.hoverChartIndex=C.index;if(1===k.touches.length)if(k=this.normalize(k),
(t=C.isInsidePlot(k.chartX-C.plotLeft,k.chartY-C.plotTop))&&!C.openMenu){y&&this.runPointActions(k);if("touchmove"===k.type){y=this.pinchDown;var w=y[0]?4<=Math.sqrt(Math.pow(y[0].chartX-k.chartX,2)+Math.pow(y[0].chartY-k.chartY,2)):!1}H(w,!0)&&this.pinch(k)}else y&&this.reset();else 2===k.touches.length&&this.pinch(k)},onContainerTouchStart:function(d){this.zoomOption(d);this.touch(d,!0)},onContainerTouchMove:function(d){this.touch(d)},onDocumentTouchEnd:function(w){k[d.hoverChartIndex]&&k[d.hoverChartIndex].pointer.drop(w)}})});
K(I,"parts/MSPointer.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.objectEach,D=d.addEvent,H=d.charts,E=d.css,y=d.doc;k=d.extend;var C=d.noop,t=d.Pointer,G=d.removeEvent,u=d.win,l=d.wrap;if(!d.hasTouch&&(u.PointerEvent||u.MSPointerEvent)){var p={},q=!!u.PointerEvent,c=function(){var a=[];a.item=function(a){return this[a]};w(p,function(b){a.push({pageX:b.pageX,pageY:b.pageY,target:b.target})});return a},a=function(a,f,m,h){"touch"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH||
!H[d.hoverChartIndex]||(h(a),h=H[d.hoverChartIndex].pointer,h[f]({type:m,target:a.currentTarget,preventDefault:C,touches:c()}))};k(t.prototype,{onContainerPointerDown:function(b){a(b,"onContainerTouchStart","touchstart",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},onContainerPointerMove:function(b){a(b,"onContainerTouchMove","touchmove",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY};p[a.pointerId].target||(p[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(b){a(b,
"onDocumentTouchEnd","touchend",function(a){delete p[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,q?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,q?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(y,q?"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});l(t.prototype,"init",function(a,c,d){a.call(this,c,d);this.hasZoom&&E(c.container,{"-ms-touch-action":"none","touch-action":"none"})});l(t.prototype,"setDOMEvents",function(a){a.apply(this);
(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(D)});l(t.prototype,"destroy",function(a){this.batchMSEvents(G);a.call(this)})}});K(I,"parts/Legend.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isNumber,H=d.addEvent,E=d.css,y=d.discardElement,C=d.fireEvent;k=d.isFirefox;var t=d.marginNames,G=d.merge,u=d.pick,l=d.setAnimation,p=d.stableSort,q=d.win,c=d.wrap;d.Legend=function(a,b){this.init(a,b)};d.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);
b.enabled&&(this.render(),H(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=H(this.chart,"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},setOptions:function(a){var b=u(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=G(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=
b-5;this.symbolWidth=u(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===a.layout&&!this.chart.inverted},update:function(a,b){var c=this.chart;this.setOptions(G(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;u(b,!0)&&c.redraw();C(this,"afterUpdate")},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var c=this.options,d=a.legendItem,h=a.legendLine,r=a.legendSymbol,l=this.itemHiddenStyle.color;
c=b?c.itemStyle.color:l;var v=b?a.color||l:l,n=a.options&&a.options.marker,e={fill:v};d&&d.css({fill:c,color:c});h&&h.attr({stroke:v});r&&(n&&r.isMarker&&(e=a.pointAttribs(),b||(e.stroke=e.fill=l)),r.attr(e))}C(this,"afterColorizeItem",{item:a,visible:b})},positionItems:function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()},positionItem:function(a){var b=this.options,c=b.symbolPadding;b=!b.rtl;var d=a._legendItemPos,h=d[0];d=d[1];var r=a.checkbox;
if((a=a.legendGroup)&&a.element)a[w(a.translateY)?"animate":"attr"]({translateX:b?h:this.legendWidth-h-2*c-4,translateY:d});r&&(r.x=h,r.y=d)},destroyItem:function(a){var b=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(b){a[b]&&(a[b]=a[b].destroy())});b&&y(a.checkbox)},destroy:function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(b){["legendItem","legendGroup"].forEach(a,b)});"clipRect up down pager nav box title group".split(" ").forEach(a,
this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b=this.clipHeight||this.legendHeight,c=this.titleHeight;if(a){var d=a.translateY;this.allItems.forEach(function(f){var h=f.checkbox;if(h){var m=d+c+h.y+(this.scrollOffset||0)+3;E(h,{left:a.translateX+f.checkboxOffset+h.x-20+"px",top:m+"px",display:this.proximate||m>d-6&&m<d+b-6?"":"none"})}},this)}},renderTitle:function(){var a=this.options,b=this.padding,c=a.title,d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,
b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),d=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d},setText:function(a){var b=this.options;a.legendItem.attr({text:b.labelFormat?d.format(b.labelFormat,a,this.chart.time):b.labelFormatter.call(a)})},renderItem:function(a){var b=this.chart,
c=b.renderer,d=this.options,h=this.symbolWidth,r=d.symbolPadding,l=this.itemStyle,v=this.itemHiddenStyle,n="horizontal"===d.layout?u(d.itemDistance,20):0,e=!d.rtl,g=a.legendItem,F=!a.series,A=!F&&a.series.drawLegendSymbol?a.series:a,z=A.options;z=this.createCheckboxForItem&&z&&z.showCheckbox;n=h+r+n+(z?20:0);var B=d.useHTML,p=a.options.className;g||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+A.type+"-series highcharts-color-"+a.colorIndex+(p?" "+p:"")+(F?" highcharts-series-"+a.index:
"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=g=c.text("",e?h+r:-r,this.baseline||0,B),b.styledMode||g.css(G(a.visible?l:v)),g.attr({align:e?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=c.fontMetrics(b.styledMode?12:l.fontSize,g),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,g.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,A.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,g,B));z&&!a.checkbox&&this.createCheckboxForItem(a);
this.colorizeItem(a,a.visible);!b.styledMode&&l.width||g.css({width:(d.itemWidth||this.widthOption||b.spacingBox.width)-n});this.setText(a);b=g.getBBox();a.itemWidth=a.checkboxOffset=d.itemWidth||a.legendItemWidth||b.width+n;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||b.height||this.symbolHeight)},layoutItem:function(a){var b=this.options,c=this.padding,d="horizontal"===b.layout,h=a.itemHeight,
r=b.itemMarginBottom||0,l=this.itemMarginTop,v=d?u(b.itemDistance,20):0,n=this.maxLegendWidth;b=b.alignColumns&&this.totalItemWidth>n?this.maxItemWidth:a.itemWidth;d&&this.itemX-c+b>n&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=l+this.lastLineHeight+r),this.lastLineHeight=0);this.lastItemY=l+this.itemY+r;this.lastLineHeight=Math.max(h,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];d?this.itemX+=b:(this.itemY+=l+h+r,this.lastLineHeight=h);this.offsetWidth=this.widthOption||Math.max((d?
this.itemX-c-(a.checkbox?0:v):b)+c,this.offsetWidth)},getAllItems:function(){var a=[];this.chart.series.forEach(function(b){var c=b&&b.options;b&&u(c.showInLegend,w(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});C(this,"afterGetAllItems",{allItems:a});return a},getAlignment:function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=
this.chart,d=this.options,h=this.getAlignment();h&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(f,m){f.test(h)&&!w(a[m])&&(c[t[m]]=Math.max(c[t[m]],c.legend[(m+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][m]*d[m%2?"x":"y"]+u(d.margin,12)+b[m]+(c.titleOffset[m]||0)))})},proximatePositions:function(){var a=this.chart,b=[],c="left"===this.options.align;this.allItems.forEach(function(f){var h=c;if(f.yAxis&&f.points){f.xAxis.options.reversed&&(h=!h);var m=d.find(h?f.points:
f.points.slice(0).reverse(),function(a){return D(a.plotY)});h=f.legendGroup.getBBox().height;var l=f.yAxis.top-a.plotTop;f.visible?(m=m?m.plotY:f.yAxis.height,m+=l-.3*h):m=l+f.yAxis.height;b.push({target:m,size:h,item:f})}},this);d.distribute(b,a.plotHeight);b.forEach(function(b){b.item._legendItemPos[1]=a.plotTop-a.spacing[0]+b.pos})},render:function(){var a=this.chart,b=a.renderer,c=this.group,m,h=this.box,r=this.options,l=this.padding;this.itemX=l;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=
0;this.widthOption=d.relativeLength(r.width,a.spacingBox.width-l);var v=a.spacingBox.width-2*l-r.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(v/=2);this.maxLegendWidth=this.widthOption||v;c||(this.group=c=b.g("legend").attr({zIndex:7}).add(),this.contentGroup=b.g().attr({zIndex:1}).add(c),this.scrollGroup=b.g().add(this.contentGroup));this.renderTitle();v=this.getAllItems();p(v,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});r.reversed&&
v.reverse();this.allItems=v;this.display=m=!!v.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;v.forEach(this.renderItem,this);v.forEach(this.layoutItem,this);v=(this.widthOption||this.offsetWidth)+l;var n=this.lastItemY+this.lastLineHeight+this.titleHeight;n=this.handleOverflow(n);n+=l;h||(this.box=h=b.rect().addClass("highcharts-legend-box").attr({r:r.borderRadius}).add(c),h.isNew=!0);a.styledMode||h.attr({stroke:r.borderColor,"stroke-width":r.borderWidth||0,fill:r.backgroundColor||
"none"}).shadow(r.shadow);0<v&&0<n&&(h[h.isNew?"attr":"animate"](h.crisp.call({},{x:0,y:0,width:v,height:n},h.strokeWidth())),h.isNew=!1);h[m?"show":"hide"]();a.styledMode&&"none"===c.getStyle("display")&&(v=n=0);this.legendWidth=v;this.legendHeight=n;m&&(b=a.spacingBox,h=b.y,/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?h+=a.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(h-=a.titleOffset[2]),h!==b.y&&(b=G(b,{y:h})),c.align(G(r,{width:v,height:n,verticalAlign:this.proximate?
"top":r.verticalAlign}),!0,b));this.proximate||this.positionItems();C(this,"afterRender")},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,h=this.options,r=h.y,l=this.padding;r=c.spacingBox.height+("top"===h.verticalAlign?-r:r)-l;var v=h.maxHeight,n,e=this.clipRect,g=h.navigation,F=u(g.animation,!0),A=g.arrowSize||12,z=this.nav,B=this.pages,p,q=this.allItems,k=function(a){"number"===typeof a?e.attr({height:a}):e&&(b.clipRect=e.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=
a?"rect("+l+"px,9999px,"+(l+a)+"px,0)":"auto")},t=function(a){b[a]=d.circle(0,0,1.3*A).translate(A/2,A/2).add(z);c.styledMode||b[a].attr("fill","rgba(0,0,0,0.0001)");return b[a]};"horizontal"!==h.layout||"middle"===h.verticalAlign||h.floating||(r/=2);v&&(r=Math.min(r,v));B.length=0;a>r&&!1!==g.enabled?(this.clipHeight=n=Math.max(r-20-this.titleHeight-l,0),this.currentPage=u(this.currentPage,1),this.fullHeight=a,q.forEach(function(a,b){var e=a._legendItemPos[1],c=Math.round(a.legendItem.getBBox().height),
g=B.length;if(!g||e-B[g-1]>n&&(p||e)!==B[g-1])B.push(p||e),g++;a.pageIx=g-1;p&&(q[b-1].pageIx=g-1);b===q.length-1&&e+c-B[g-1]>n&&e!==p&&(B.push(e),a.pageIx=g);e!==p&&(p=e)}),e||(e=b.clipRect=d.clipRect(0,l,9999,0),b.contentGroup.clip(e)),k(n),z||(this.nav=z=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,A,A).add(z),t("upTracker").on("click",function(){b.scroll(-1,F)}),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation"),c.styledMode||this.pager.css(g.style),
this.pager.add(z),this.down=d.symbol("triangle-down",0,0,A,A).add(z),t("downTracker").on("click",function(){b.scroll(1,F)})),b.scroll(0),a=r):z&&(k(),this.nav=z.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,d=c.length,h=this.currentPage+a;a=this.clipHeight;var r=this.options.navigation,p=this.pager,v=this.padding;h>d&&(h=d);0<h&&(void 0!==b&&l(b,this.chart),this.nav.attr({translateX:v,translateY:a+this.padding+7+this.titleHeight,
visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),p.attr({text:h+"/"+d}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":h===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),this.chart.styledMode||(this.up.attr({fill:1===h?r.inactiveColor:r.activeColor}),this.upTracker.css({cursor:1===h?"default":"pointer"}),this.down.attr({fill:h===
d?r.inactiveColor:r.activeColor}),this.downTracker.css({cursor:h===d?"default":"pointer"})),this.scrollOffset=-c[h-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=h,this.positionCheckboxes())}};d.LegendSymbolMixin={drawRectangle:function(a,b){var c=a.symbolHeight,d=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-c)/2:0,a.baseline-c+1,d?c:a.symbolWidth,c,u(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},
drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,h=a.symbolHeight,r=h/2,l=this.chart.renderer,v=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var n={};this.chart.styledMode||(n={"stroke-width":b.lineWidth||0},b.dashStyle&&(n.dashstyle=b.dashStyle));this.legendLine=l.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(n).add(v);c&&!1!==c.enabled&&d&&(b=Math.min(u(c.radius,r),r),0===this.symbol.indexOf("url")&&(c=G(c,{width:h,height:h}),b=0),this.legendSymbol=
c=l.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(v),c.isMarker=!0)}};(/Trident\/7\.0/.test(q.navigator&&q.navigator.userAgent)||k)&&c(d.Legend.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();c.bubbleLegend||setTimeout(d)})});K(I,"parts/Chart.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.attr,D=k.defined,H=k.erase,E=k.isArray,y=k.isNumber,C=k.isObject,t=k.isString,G=k.objectEach,u=k.pInt,l=k.splat,
p=d.addEvent,q=d.animate,c=d.animObject,a=d.doc,b=d.Axis,f=d.createElement,m=d.defaultOptions,h=d.discardElement,r=d.charts,x=d.css,v=d.extend,n=d.find,e=d.fireEvent,g=d.Legend,F=d.marginNames,A=d.merge,z=d.Pointer,B=d.pick,J=d.removeEvent,M=d.seriesTypes,T=d.syncTimeout,N=d.win,R=d.Chart=function(){this.getArgs.apply(this,arguments)};d.chart=function(a,b,e){return new R(a,b,e)};v(R.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(t(a[0])||a[0].nodeName)this.renderTo=a.shift();
this.init(a[0],a[1])},init:function(a,b){var c,g=a.series,f=a.plotOptions||{};e(this,"init",{args:arguments},function(){a.series=null;c=A(m,a);G(c.plotOptions,function(a,b){C(a)&&(a.tooltip=f[b]&&A(f[b].tooltip)||void 0)});c.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;c.series=a.series=g;this.userOptions=a;var h=c.chart,n=h.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=b;this.isResizing=0;this.options=c;this.axes=
[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new d.Time(a.time):d.time;this.styledMode=h.styledMode;this.hasCartesianSeries=h.showAxes;var F=this;F.index=r.length;r.push(F);d.chartCount++;n&&G(n,function(a,b){d.isFunction(a)&&p(F,b,a)});F.xAxis=[];F.yAxis=[];F.pointCount=F.colorCounter=F.symbolCounter=0;e(F,"afterInit");F.firstRender()})},initSeries:function(a){var b=this.options.chart;(b=M[a.type||b.type||b.defaultSeriesType])||d.error(17,!0,this);b=new b;b.init(this,a);return b},
orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,e){var c=e?b:a;a=e?a:b;return 0<=c&&c<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(a){e(this,"beforeRedraw");var b=this.axes,c=this.series,g=this.pointer,f=this.legend,h=this.userOptions.legend,n=this.isDirtyLegend,A=this.hasCartesianSeries,F=this.isDirtyBox,m=this.renderer,z=m.isHidden(),B=[];this.setResponsive&&this.setResponsive(!1);d.setAnimation(a,
this);z&&this.temporaryDisplay();this.layOutTitles();for(a=c.length;a--;){var r=c[a];if(r.options.stacking){var l=!0;if(r.isDirty){var p=!0;break}}}if(p)for(a=c.length;a--;)r=c[a],r.options.stacking&&(r.isDirty=!0);c.forEach(function(a){a.isDirty&&("point"===a.options.legendType?(a.updateTotals&&a.updateTotals(),n=!0):h&&(h.labelFormatter||h.labelFormat)&&(n=!0));a.isDirtyData&&e(a,"updatedData")});n&&f&&f.options.enabled&&(f.render(),this.isDirtyLegend=!1);l&&this.getStacks();A&&b.forEach(function(a){a.updateNames();
a.setScale()});this.getMargins();A&&(b.forEach(function(a){a.isDirty&&(F=!0)}),b.forEach(function(a){var b=a.min+","+a.max;a.extKey!==b&&(a.extKey=b,B.push(function(){e(a,"afterSetExtremes",v(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(F||l)&&a.redraw()}));F&&this.drawChartBox();e(this,"predraw");c.forEach(function(a){(F||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});g&&g.reset(!0);m.draw();e(this,"redraw");e(this,"render");z&&this.temporaryDisplay(!0);B.forEach(function(a){a.call()})},
get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var e=this.series,c;var g=n(this.axes,b)||n(this.series,b);for(c=0;!g&&c<e.length;c++)g=n(e[c].points||[],b);return g},getAxes:function(){var a=this,c=this.options,g=c.xAxis=l(c.xAxis||{});c=c.yAxis=l(c.yAxis||{});e(this,"getAxes");g.forEach(function(a,b){a.index=b;a.isX=!0});c.forEach(function(a,b){a.index=b});g.concat(c).forEach(function(e){new b(a,e)});e(this,"afterGetAxes")},getSelectedPoints:function(){var a=[];this.series.forEach(function(b){a=
a.concat((b[b.hasGroupedData?"points":"data"]||[]).filter(function(a){return B(a.selectedStaging,a.selected)}))});return a},getSelectedSeries:function(){return this.series.filter(function(a){return a.selected})},setTitle:function(a,b,e){this.applyDescription("title",a);this.applyDescription("subtitle",b);this.applyDescription("caption",void 0);this.layOutTitles(e)},applyDescription:function(a,b){var e=this,c="title"===a?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};
c=this.options[a]=A(!this.styledMode&&{style:c},this.options[a],b);var g=this[a];g&&b&&(this[a]=g=g.destroy());c&&!g&&(g=this.renderer.text(c.text,0,0,c.useHTML).attr({align:c.align,"class":"highcharts-"+a,zIndex:c.zIndex||4}).add(),g.update=function(b){e[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[a]](b)},this.styledMode||g.css(c.style),this[a]=g)},layOutTitles:function(a){var b=[0,0,0],e=this.renderer,c=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var g=
this[a],d=this.options[a],f=d.verticalAlign||"top";a="title"===a?-3:"top"===f?b[0]+2:0;if(g){if(!this.styledMode)var h=d.style.fontSize;h=e.fontMetrics(h,g).b;g.css({width:(d.width||c.width+(d.widthAdjust||0))+"px"});var n=g.getBBox(d.useHTML).height;g.align(v({y:"bottom"===f?h:a+h,height:n},d),!1,"spacingBox");d.floating||("top"===f?b[0]=Math.ceil(b[0]+n):"bottom"===f&&(b[2]=Math.ceil(b[2]+n)))}},this);b[0]&&"top"===(this.options.title.verticalAlign||"top")&&(b[0]+=this.options.title.margin);b[2]&&
"bottom"===this.options.caption.verticalAlign&&(b[2]+=this.options.caption.margin);var g=!this.titleOffset||this.titleOffset.join(",")!==b.join(",");this.titleOffset=b;!this.isDirtyBox&&g&&(this.isDirtyBox=this.isDirtyLegend=g,this.hasRendered&&B(a,!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var a=this.options.chart,b=a.width;a=a.height;var e=this.renderTo;D(b)||(this.containerWidth=d.getStyle(e,"width"));D(a)||(this.containerHeight=d.getStyle(e,"height"));this.chartWidth=Math.max(0,
b||this.containerWidth||600);this.chartHeight=Math.max(0,d.relativeLength(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var e=this.renderTo;if(b)for(;e&&e.style;)e.hcOrigStyle&&(d.css(e,e.hcOrigStyle),delete e.hcOrigStyle),e.hcOrigDetached&&(a.body.removeChild(e),e.hcOrigDetached=!1),e=e.parentNode;else for(;e&&e.style;){a.body.contains(e)||e.parentNode||(e.hcOrigDetached=!0,a.body.appendChild(e));if("none"===d.getStyle(e,"display",!1)||e.hcOricDetached)e.hcOrigStyle=
{display:e.style.display,height:e.style.height,overflow:e.style.overflow},b={display:"block",overflow:"hidden"},e!==this.renderTo&&(b.height=0),d.css(e,b),e.offsetWidth||e.style.setProperty("display","block","important");e=e.parentNode;if(e===a.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b=this.options,c=b.chart;var g=this.renderTo;var h=d.uniqueKey(),n,A;g||(this.renderTo=g=c.renderTo);t(g)&&(this.renderTo=g=a.getElementById(g));
g||d.error(13,!0,this);var F=u(w(g,"data-highcharts-chart"));y(F)&&r[F]&&r[F].hasRendered&&r[F].destroy();w(g,"data-highcharts-chart",this.index);g.innerHTML="";c.skipClone||g.offsetWidth||this.temporaryDisplay();this.getChartSize();F=this.chartWidth;var m=this.chartHeight;x(g,{overflow:"hidden"});this.styledMode||(n=v({position:"relative",overflow:"hidden",width:F+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},c.style));this.container=
g=f("div",{id:h},n,g);this._cursor=g.style.cursor;this.renderer=new (d[c.renderer]||d.Renderer)(g,F,m,null,c.forExport,b.exporting&&b.exporting.allowHTML,this.styledMode);this.setClassName(c.className);if(this.styledMode)for(A in b.defs)this.renderer.definition(b.defs[A]);else this.renderer.setStyle(c.style);this.renderer.chartIndex=this.index;e(this,"afterGetContainer")},getMargins:function(a){var b=this.spacing,c=this.margin,g=this.titleOffset;this.resetMargins();g[0]&&!D(c[0])&&(this.plotTop=Math.max(this.plotTop,
g[0]+b[0]));g[2]&&!D(c[2])&&(this.marginBottom=Math.max(this.marginBottom,g[2]+b[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,b);e(this,"getMargins");a||this.getAxisMargins()},getAxisMargins:function(){var a=this,b=a.axisOffset=[0,0,0,0],e=a.colorAxis,c=a.margin,g=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?g(a.axes):e&&e.length&&g(e);F.forEach(function(e,g){D(c[g])||(a[e]+=b[g])});a.setChartSize()},reflow:function(b){var e=this,c=e.options.chart,
g=e.renderTo,f=D(c.width)&&D(c.height),h=c.width||d.getStyle(g,"width");c=c.height||d.getStyle(g,"height");g=b?b.target:N;if(!f&&!e.isPrinting&&h&&c&&(g===N||g===a)){if(h!==e.containerWidth||c!==e.containerHeight)d.clearTimeout(e.reflowTimeout),e.reflowTimeout=T(function(){e.container&&e.setSize(void 0,void 0,!1)},b?100:0);e.containerWidth=h;e.containerHeight=c}},setReflow:function(a){var b=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=
p(N,"resize",function(a){b.options&&b.reflow(a)}),p(this,"destroy",this.unbindReflow))},setSize:function(a,b,g){var f=this,h=f.renderer;f.isResizing+=1;d.setAnimation(g,f);f.oldChartHeight=f.chartHeight;f.oldChartWidth=f.chartWidth;void 0!==a&&(f.options.chart.width=a);void 0!==b&&(f.options.chart.height=b);f.getChartSize();if(!f.styledMode){var n=h.globalAnimation;(n?q:x)(f.container,{width:f.chartWidth+"px",height:f.chartHeight+"px"},n)}f.setChartSize(!0);h.setSize(f.chartWidth,f.chartHeight,g);
f.axes.forEach(function(a){a.isDirty=!0;a.setScale()});f.isDirtyLegend=!0;f.isDirtyBox=!0;f.layOutTitles();f.getMargins();f.redraw(g);f.oldChartHeight=null;e(f,"resize");T(function(){f&&e(f,"endResize",null,function(){--f.isResizing})},c(n).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,g=this.chartWidth,d=this.chartHeight,f=this.options.chart,h=this.spacing,n=this.clipOffset,A,F,m,z;this.plotLeft=A=Math.round(this.plotLeft);this.plotTop=F=Math.round(this.plotTop);this.plotWidth=
m=Math.max(0,Math.round(g-A-this.marginRight));this.plotHeight=z=Math.max(0,Math.round(d-F-this.marginBottom));this.plotSizeX=b?z:m;this.plotSizeY=b?m:z;this.plotBorderWidth=f.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:h[3],y:h[0],width:g-h[3]-h[1],height:d-h[0]-h[2]};this.plotBox=c.plotBox={x:A,y:F,width:m,height:z};g=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(g,n[3])/2);c=Math.ceil(Math.max(g,n[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(g,n[1])/
2-b),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(g,n[2])/2-c))};a||this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()});e(this,"afterSetChartSize",{skipAxes:a})},resetMargins:function(){e(this,"resetMargins");var a=this,b=a.options.chart;["margin","spacing"].forEach(function(e){var c=b[e],g=C(c)?c:[c,c,c,c];["Top","Right","Bottom","Left"].forEach(function(c,d){a[e][d]=B(b[e+c],g[d])})});F.forEach(function(b,e){a[b]=B(a.margin[e],a.spacing[e])});a.axisOffset=[0,0,0,0];a.clipOffset=
[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,g=this.chartHeight,d=this.chartBackground,f=this.plotBackground,h=this.plotBorder,n=this.styledMode,A=this.plotBGImage,F=a.backgroundColor,m=a.plotBackgroundColor,z=a.plotBackgroundImage,B,r=this.plotLeft,l=this.plotTop,v=this.plotWidth,p=this.plotHeight,x=this.plotBox,J=this.clipRect,q=this.clipBox,u="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),u="attr");if(n)var k=
B=d.strokeWidth();else{k=a.borderWidth||0;B=k+(a.shadow?8:0);F={fill:F||"none"};if(k||d["stroke-width"])F.stroke=a.borderColor,F["stroke-width"]=k;d.attr(F).shadow(a.shadow)}d[u]({x:B/2,y:B/2,width:c-B-k%2,height:g-B-k%2,r:a.borderRadius});u="animate";f||(u="attr",this.plotBackground=f=b.rect().addClass("highcharts-plot-background").add());f[u](x);n||(f.attr({fill:m||"none"}).shadow(a.plotShadow),z&&(A?A.animate(x):this.plotBGImage=b.image(z,r,l,v,p).add()));J?J.animate({width:q.width,height:q.height}):
this.clipRect=b.clipRect(q);u="animate";h||(u="attr",this.plotBorder=h=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());n||h.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});h[u](h.crisp({x:r,y:l,width:v,height:p},-h.strokeWidth()));this.isDirtyBox=!1;e(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,e,c=a.options.series,g,d;["inverted","angular","polar"].forEach(function(f){e=M[b.type||b.defaultSeriesType];d=b[f]||
e&&e.prototype[f];for(g=c&&c.length;!d&&g--;)(e=M[c[g].type])&&e.prototype[f]&&(d=!0);a[f]=d})},linkSeries:function(){var a=this,b=a.series;b.forEach(function(a){a.linkedSeries.length=0});b.forEach(function(b){var e=b.options.linkedTo;t(e)&&(e=":previous"===e?a.series[b.index-1]:a.get(e))&&e.linkedParent!==b&&(e.linkedSeries.push(b),b.linkedParent=e,b.visible=B(b.options.visible,e.options.visible,b.visible))});e(this,"afterLinkSeries")},renderSeries:function(){this.series.forEach(function(a){a.translate();
a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&b.items.forEach(function(e){var c=v(b.style,e.style),g=u(c.left)+a.plotLeft,d=u(c.top)+a.plotTop+12;delete c.left;delete c.top;a.renderer.text(e.html,g,d).attr({zIndex:2}).css(c).add()})},render:function(){var a=this.axes,b=this.colorAxis,e=this.renderer,c=this.options,d=0,f=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new g(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);
this.setChartSize();c=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return d=21,!0});var h=this.plotHeight=Math.max(this.plotHeight-d,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var n=1.1<c/this.plotWidth;var A=1.05<h/this.plotHeight;if(n||A)a.forEach(function(a){(a.horiz&&n||!a.horiz&&A)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?f(a):b&&b.length&&f(b);this.seriesGroup||(this.seriesGroup=
e.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.updateContainerScaling();this.hasRendered=!0},addCredits:function(a){var b=this;a=A(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(N.location.href=a.href)}).attr({align:a.position.align,zIndex:8}),b.styledMode||this.credits.css(a.style),
this.credits.add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},updateContainerScaling:function(){var a=this.container;if(a.offsetWidth&&a.offsetHeight&&a.getBoundingClientRect){var b=a.getBoundingClientRect(),e=b.width/a.offsetWidth;a=b.height/a.offsetHeight;1!==e||1!==a?this.containerScaling={scaleX:e,scaleY:a}:delete this.containerScaling}},destroy:function(){var a=this,b=a.axes,c=a.series,g=a.container,f,n=g&&g.parentNode;e(a,"destroy");a.renderer.forExport?
H(r,a):r[a.index]=void 0;d.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");J(a);for(f=b.length;f--;)b[f]=b[f].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(f=c.length;f--;)c[f]=c[f].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b){var e=a[b];e&&e.destroy&&(a[b]=e.destroy())});g&&(g.innerHTML="",J(g),
n&&h(g));G(a,function(b,e){delete a[e]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(E(b.series)?b.series:[]).forEach(function(b){a.initSeries(b)});a.linkSeries();e(a,"beforeRender");z&&(a.pointer=new z(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&void 0!==
this.index&&a.apply(this,[this])},this);e(this,"load");e(this,"render");D(this.index)&&this.setReflow(this.options.chart.reflow);this.onload=null}})});K(I,"parts/ScrollablePlotArea.js",[I["parts/Globals.js"]],function(d){var k=d.addEvent,w=d.Chart;"";k(w,"afterSetChartSize",function(k){var w=this.options.chart.scrollablePlotArea,E=w&&w.minWidth;w=w&&w.minHeight;if(!this.renderer.forExport){if(E){if(this.scrollablePixelsX=E=Math.max(0,E-this.chartWidth)){this.plotWidth+=E;this.inverted?(this.clipBox.height+=
E,this.plotBox.height+=E):(this.clipBox.width+=E,this.plotBox.width+=E);var y={1:{name:"right",value:E}}}}else w&&(this.scrollablePixelsY=E=Math.max(0,w-this.chartHeight))&&(this.plotHeight+=E,this.inverted?(this.clipBox.width+=E,this.plotBox.width+=E):(this.clipBox.height+=E,this.plotBox.height+=E),y={2:{name:"bottom",value:E}});y&&!k.skipAxes&&this.axes.forEach(function(k){y[k.side]?k.getPlotLinePath=function(){var t=y[k.side].name,C=this[t];this[t]=C-y[k.side].value;var u=d.Axis.prototype.getPlotLinePath.apply(this,
arguments);this[t]=C;return u}:(k.setAxisSize(),k.setAxisTranslation())})}});k(w,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});w.prototype.setUpScrolling=function(){var k={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(k.overflowX="auto");this.scrollablePixelsY&&(k.overflowY="auto");this.scrollingContainer=d.createElement("div",{className:"highcharts-scrolling"},
k,this.renderTo);this.innerContainer=d.createElement("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);this.setUpScrolling=null};w.prototype.moveFixedElements=function(){var d=this.container,k=this.fixedRenderer,w=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-reset-zoom .highcharts-subtitle .highcharts-title .highcharts-legend-checkbox".split(" "),y;this.scrollablePixelsX&&!this.inverted?y=".highcharts-yaxis":
this.scrollablePixelsX&&this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?y=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(y=".highcharts-yaxis");w.push(y,y+"-labels");w.forEach(function(y){[].forEach.call(d.querySelectorAll(y),function(d){(d.namespaceURI===k.SVG_NS?k.box:k.box.parentNode).appendChild(d);d.style.pointerEvents="auto"})})};w.prototype.applyFixed=function(){var w,H=!this.fixedDiv,E=this.options.chart.scrollablePlotArea;H?(this.fixedDiv=d.createElement("div",
{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:2},null,!0),this.renderTo.insertBefore(this.fixedDiv,this.renderTo.firstChild),this.renderTo.style.overflow="visible",this.fixedRenderer=w=new d.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight),this.scrollableMask=w.path().attr({fill:d.color(this.options.chart.backgroundColor||"#fff").setOpacity(d.pick(E.opacity,.85)).get(),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),this.moveFixedElements(),
k(this,"afterShowResetZoom",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);w=this.chartWidth+(this.scrollablePixelsX||0);var y=this.chartHeight+(this.scrollablePixelsY||0);d.stop(this.container);this.container.style.width=w+"px";this.container.style.height=y+"px";this.renderer.boxWrapper.attr({width:w,height:y,viewBox:[0,0,w,y].join(" ")});this.chartBackground.attr({width:w,height:y});this.scrollablePixelsY&&(this.scrollingContainer.style.height=this.chartHeight+
"px");H&&(E.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*E.scrollPositionX),E.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*E.scrollPositionY));y=this.axisOffset;H=this.plotTop-y[0]-1;E=this.plotLeft-y[3]-1;w=this.plotTop+this.plotHeight+y[2]+1;y=this.plotLeft+this.plotWidth+y[1]+1;var C=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),t=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);H=this.scrollablePixelsX?["M",0,H,"L",
this.plotLeft-1,H,"L",this.plotLeft-1,w,"L",0,w,"Z","M",C,H,"L",this.chartWidth,H,"L",this.chartWidth,w,"L",C,w,"Z"]:this.scrollablePixelsY?["M",E,0,"L",E,this.plotTop-1,"L",y,this.plotTop-1,"L",y,0,"Z","M",E,t,"L",E,this.chartHeight,"L",y,this.chartHeight,"L",y,t,"Z"]:["M",0,0];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:H})}});K(I,"parts/Point.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.erase,H=k.isArray,E=k.isNumber,y=k.isObject,C,
t=d.extend,G=d.fireEvent,u=d.format,l=d.pick,p=d.uniqueKey,q=d.removeEvent;d.Point=C=function(){};d.Point.prototype={init:function(c,a,b){this.series=c;this.applyOptions(a,b);this.id=w(this.id)?this.id:p();this.resolveColor();c.chart.pointCount++;G(this,"afterInit");return this},resolveColor:function(){var c=this.series;var a=c.chart.options.chart.colorCount;var b=c.chart.styledMode;b||this.options.color||(this.color=c.color);c.options.colorByPoint?(b||(a=c.options.colors||c.chart.options.colors,
this.color=this.color||a[c.colorCounter],a=a.length),b=c.colorCounter,c.colorCounter++,c.colorCounter===a&&(c.colorCounter=0)):b=c.colorIndex;this.colorIndex=l(this.colorIndex,b)},applyOptions:function(c,a){var b=this.series,d=b.options.pointValKey||b.pointValKey;c=C.prototype.optionsToObject.call(this,c);t(this,c);this.options=this.options?t(this.options,c):c;c.group&&delete this.group;c.dataLabels&&delete this.dataLabels;d&&(this.y=this[d]);this.formatPrefix=(this.isNull=l(this.isValid&&!this.isValid(),
null===this.x||!E(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&void 0===a&&b.xAxis&&b.xAxis.hasNames&&(this.x=b.xAxis.nameToX(this));void 0===this.x&&b&&(this.x=void 0===a?b.autoIncrement(this):a);return this},setNestedProperty:function(c,a,b){b.split(".").reduce(function(b,c,d,r){b[c]=r.length-1===d?a:y(b[c],!0)?b[c]:{};return b[c]},c);return c},optionsToObject:function(c){var a={},b=this.series,f=b.options.keys,m=f||b.pointArrayMap||["y"],h=m.length,r=0,l=0;if(E(c)||
null===c)a[m[0]]=c;else if(H(c))for(!f&&c.length>h&&(b=typeof c[0],"string"===b?a.name=c[0]:"number"===b&&(a.x=c[0]),r++);l<h;)f&&void 0===c[r]||(0<m[l].indexOf(".")?d.Point.prototype.setNestedProperty(a,c[r],m[l]):a[m[l]]=c[r]),r++,l++;else"object"===typeof c&&(a=c,c.dataLabels&&(b._hasPointLabels=!0),c.marker&&(b._hasPointMarkers=!0));return a},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":
"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},getZone:function(){var c=this.series,a=c.zones;c=c.zoneAxis||"y";var b=0,d;for(d=a[b];this[c]>=d.value;)d=a[++b];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=d&&d.color&&!this.options.color?d.color:this.nonZonedColor;return d},destroy:function(){var c=this.series.chart,
a=c.hoverPoints,b;c.pointCount--;a&&(this.setState(),D(a,this),a.length||(c.hoverPoints=null));if(this===c.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel||this.dataLabels)q(this),this.destroyElements();this.legendItem&&c.legend.destroyItem(this);for(b in this)this[b]=null},destroyElements:function(c){var a=this,b=[],d;c=c||{graphic:1,dataLabel:1};c.graphic&&b.push("graphic","shadowGroup");c.dataLabel&&b.push("dataLabel","dataLabelUpper","connector");for(d=b.length;d--;){var m=b[d];a[m]&&
(a[m]=a[m].destroy())}["dataLabel","connector"].forEach(function(b){var d=b+"s";c[b]&&a[d]&&(a[d].forEach(function(a){a.element&&a.destroy()}),delete a[d])})},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(c){var a=this.series,b=a.tooltipOptions,d=l(b.valueDecimals,""),m=b.valuePrefix||"",h=b.valueSuffix||
"";a.chart.styledMode&&(c=a.chart.tooltip.styledModeFormat(c));(a.pointArrayMap||["y"]).forEach(function(a){a="{point."+a;if(m||h)c=c.replace(RegExp(a+"}","g"),m+a+"}"+h);c=c.replace(RegExp(a+"}","g"),a+":,."+d+"f}")});return u(c,{point:this,series:this.series},a.chart.time)},firePointEvent:function(c,a,b){var d=this,m=this.series.options;(m.point.events[c]||d.options&&d.options.events&&d.options.events[c])&&this.importEvents();"click"===c&&m.allowPointSelect&&(b=function(a){d.select&&d.select(null,
a.ctrlKey||a.metaKey||a.shiftKey)});G(this,c,a,b)},visible:!0}});K(I,"parts/Series.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.erase,H=k.isArray,E=k.isNumber,y=k.isString,C=k.objectEach,t=k.splat,G=d.addEvent,u=d.animObject,l=d.arrayMax,p=d.arrayMin,q=d.correctFloat,c=d.defaultOptions,a=d.defaultPlotOptions,b=d.extend,f=d.fireEvent,m=d.merge,h=d.pick,r=d.removeEvent,x=d.SVGElement,v=d.syncTimeout,n=d.win;d.Series=d.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,
showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":d.numberFormat(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",
x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,isCartesian:!0,parallelArrays:["x","y"],pointClass:d.Point,requireSorting:!0,sorted:!0,init:function(a,
c){f(this,"init",{options:c});var e=this,g=a.series,n;this.eventOptions=this.eventOptions||{};e.chart=a;e.options=c=e.setOptions(c);e.linkedSeries=[];e.bindAxes();b(e,{name:c.name,state:"",visible:!1!==c.visible,selected:!0===c.selected});var m=c.events;C(m,function(a,b){d.isFunction(a)&&e.eventOptions[b]!==a&&(d.isFunction(e.eventOptions[b])&&r(e,b,e.eventOptions[b]),e.eventOptions[b]=a,G(e,b,a))});if(m&&m.click||c.point&&c.point.events&&c.point.events.click||c.allowPointSelect)a.runTrackerClick=
!0;e.getColor();e.getSymbol();e.parallelArrays.forEach(function(a){e[a+"Data"]||(e[a+"Data"]=[])});e.points||e.data||e.setData(c.data,!1);e.isCartesian&&(a.hasCartesianSeries=!0);g.length&&(n=g[g.length-1]);e._i=h(n&&n._i,-1)+1;a.orderSeries(this.insert(g));f(this,"afterInit")},insert:function(a){var b=this.options.index,e;if(E(b)){for(e=a.length;e--;)if(b>=h(a[e].options.index,a[e]._i)){a.splice(e+1,0,this);break}-1===e&&a.unshift(this);e+=1}else a.push(this);return h(e,a.length-1)},bindAxes:function(){var a=
this,b=a.options,c=a.chart,h;f(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){c[e].forEach(function(c){h=c.options;if(b[e]===h.index||void 0!==b[e]&&b[e]===h.id||void 0===b[e]&&0===h.index)a.insert(c.series),a[e]=c,c.isDirty=!0});a[e]||a.optionalAxis===e||d.error(18,!0,c)})})},updateParallelArrays:function(a,b){var e=a.series,c=arguments,g=E(b)?function(c){var g="y"===c&&e.toYData?e.toYData(a):a[c];e[c+"Data"][b]=g}:function(a){Array.prototype[b].apply(e[a+"Data"],Array.prototype.slice.call(c,
2))};e.parallelArrays.forEach(g)},hasData:function(){return this.visible&&void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},autoIncrement:function(){var a=this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,f=this.chart.time;b=h(b,a.pointStart,0);this.pointInterval=c=h(this.pointInterval,a.pointInterval,1);d&&(a=new f.Date(b),"day"===d?f.set("Date",a,f.get("Date",a)+c):"month"===d?f.set("Month",a,f.get("Month",a)+c):"year"===d&&f.set("FullYear",a,f.get("FullYear",
a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,e=b.options,d=e.plotOptions,n=b.userOptions||{};a=m(a);b=b.styledMode;var B={plotOptions:d,userOptions:a};f(this,"setOptions",B);var l=B.plotOptions[this.type],r=n.plotOptions||{};this.userOptions=B.userOptions;n=m(l,d.series,n.plotOptions&&n.plotOptions[this.type],a);this.tooltipOptions=m(c.tooltip,c.plotOptions.series&&c.plotOptions.series.tooltip,c.plotOptions[this.type].tooltip,e.tooltip.userOptions,d.series&&
d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=h(a.stickyTracking,r[this.type]&&r[this.type].stickyTracking,r.series&&r.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:n.stickyTracking);null===l.marker&&delete n.marker;this.zoneAxis=n.zoneAxis;e=this.zones=(n.zones||[]).slice();!n.negativeColor&&!n.negativeFillColor||n.zones||(d={value:n[this.zoneAxis+"Threshold"]||n.threshold||0,className:"highcharts-negative"},b||(d.color=n.negativeColor,d.fillColor=
n.negativeFillColor),e.push(d));e.length&&w(e[e.length-1].value)&&e.push(b?{}:{color:this.color,fillColor:this.fillColor});f(this,"afterSetOptions",{options:n});return n},getName:function(){return h(this.options.name,"Series "+(this.index+1))},getCyclic:function(a,b,c){var e=this.chart,g=this.userOptions,d=a+"Index",f=a+"Counter",n=c?c.length:h(e.options.chart[a+"Count"],e[a+"Count"]);if(!b){var m=h(g[d],g["_"+d]);w(m)||(e.series.length||(e[f]=0),g["_"+d]=m=e[f]%n,e[f]+=1);c&&(b=c[m])}void 0!==m&&
(this[d]=m);this[a]=b},getColor:function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||a[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},findPointIndex:function(a,b){var e=a.id;a=a.x;var c=this.points,g;if(e){var d=(e=this.chart.get(e))&&e.index;void 0!==d&&(g=!0)}void 0===d&&E(a)&&(d=this.xData.indexOf(a,b));
-1!==d&&void 0!==d&&this.cropped&&(d=d>=this.cropStart?d-this.cropStart:d);!g&&c[d]&&c[d].touched&&(d=void 0);return d},drawLegendSymbol:d.LegendSymbolMixin.drawLineMarker,updateData:function(a){var b=this.options,e=this.points,c=[],d,f,h,n=this.requireSorting,m=a.length===e.length,l=!0;this.xIncrement=null;a.forEach(function(a,g){var f=w(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};var A=f.x;if(f.id||E(A))if(A=this.findPointIndex(f,h),-1===A||void 0===A?c.push(a):e[A]&&
a!==b.data[A]?(e[A].update(a,!1,null,!1),e[A].touched=!0,n&&(h=A+1)):e[A]&&(e[A].touched=!0),!m||g!==A||this.hasDerivedData)d=!0},this);if(d)for(a=e.length;a--;)(f=e[a])&&!f.touched&&f.remove(!1);else m?a.forEach(function(a,b){e[b].update&&a!==e[b].y&&e[b].update(a,!1,null,!1)}):l=!1;e.forEach(function(a){a&&(a.touched=!1)});if(!l)return!1;c.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);return!0},setData:function(a,b,c,f){var e=this,g=e.points,n=g&&g.length||0,A,m=e.options,F=e.chart,
l=null,r=e.xAxis,v=m.turboThreshold,p=this.xData,x=this.yData,u=(A=e.pointArrayMap)&&A.length,q=m.keys,k=0,t=1,w;a=a||[];A=a.length;b=h(b,!0);!1!==f&&A&&n&&!e.cropped&&!e.hasGroupedData&&e.visible&&!e.isSeriesBoosting&&(w=this.updateData(a));if(!w){e.xIncrement=null;e.colorCounter=0;this.parallelArrays.forEach(function(a){e[a+"Data"].length=0});if(v&&A>v){for(c=0;null===l&&c<A;)l=a[c],c++;if(E(l))for(c=0;c<A;c++)p[c]=this.autoIncrement(),x[c]=a[c];else if(H(l))if(u)for(c=0;c<A;c++)l=a[c],p[c]=l[0],
x[c]=l.slice(1,u+1);else for(q&&(k=q.indexOf("x"),t=q.indexOf("y"),k=0<=k?k:0,t=0<=t?t:1),c=0;c<A;c++)l=a[c],p[c]=l[k],x[c]=l[t];else d.error(12,!1,F)}else for(c=0;c<A;c++)void 0!==a[c]&&(l={series:e},e.pointClass.prototype.applyOptions.apply(l,[a[c]]),e.updateParallelArrays(l,c));x&&y(x[0])&&d.error(14,!0,F);e.data=[];e.options.data=e.userOptions.data=a;for(c=n;c--;)g[c]&&g[c].destroy&&g[c].destroy();r&&(r.minRange=r.userMinRange);e.isDirty=F.isDirtyBox=!0;e.isDirtyData=!!g;c=!1}"point"===m.legendType&&
(this.processData(),this.generatePoints());b&&F.redraw(c)},processData:function(a){var b=this.xData,e=this.yData,c=b.length;var f=0;var h=this.xAxis,n=this.options;var m=n.cropThreshold;var l=this.getExtremesFromAll||n.getExtremesFromAll,r=this.isCartesian;n=h&&h.val2lin;var v=h&&h.isLog,p=this.requireSorting;if(r&&!this.isDirty&&!h.isDirty&&!this.yAxis.isDirty&&!a)return!1;if(h){a=h.getExtremes();var x=a.min;var q=a.max}if(r&&this.sorted&&!l&&(!m||c>m||this.forceCrop))if(b[c-1]<x||b[0]>q)b=[],e=
[];else if(this.yData&&(b[0]<x||b[c-1]>q)){f=this.cropData(this.xData,this.yData,x,q);b=f.xData;e=f.yData;f=f.start;var u=!0}for(m=b.length||1;--m;)if(c=v?n(b[m])-n(b[m-1]):b[m]-b[m-1],0<c&&(void 0===k||c<k))var k=c;else 0>c&&p&&(d.error(15,!1,this.chart),p=!1);this.cropped=u;this.cropStart=f;this.processedXData=b;this.processedYData=e;this.closestPointRange=this.basePointRange=k},cropData:function(a,b,c,d,f){var e=a.length,g=0,n=e,A;f=h(f,this.cropShoulder);for(A=0;A<e;A++)if(a[A]>=c){g=Math.max(0,
A-f);break}for(c=A;c<e;c++)if(a[c]>d){n=c+f;break}return{xData:a.slice(g,n),yData:b.slice(g,n),start:g,end:n}},generatePoints:function(){var a=this.options,c=a.data,d=this.data,h,n=this.processedXData,m=this.processedYData,l=this.pointClass,r=n.length,v=this.cropStart||0,p=this.hasGroupedData;a=a.keys;var x=[],q;d||p||(d=[],d.length=c.length,d=this.data=d);a&&p&&(this.options.keys=!1);for(q=0;q<r;q++){var u=v+q;if(p){var k=(new l).init(this,[n[q]].concat(t(m[q])));k.dataGroup=this.groupMap[q];k.dataGroup.options&&
(k.options=k.dataGroup.options,b(k,k.dataGroup.options),delete k.dataLabels)}else(k=d[u])||void 0===c[u]||(d[u]=k=(new l).init(this,c[u],n[q]));k&&(k.index=u,x[q]=k)}this.options.keys=a;if(d&&(r!==(h=d.length)||p))for(q=0;q<h;q++)q!==v||p||(q+=r),d[q]&&(d[q].destroyElements(),d[q].plotX=void 0);this.data=d;this.points=x;f(this,"afterGeneratePoints")},getXExtremes:function(a){return{min:p(a),max:l(a)}},getExtremes:function(a){var b=this.xAxis,c=this.yAxis,e=this.processedXData||this.xData,d=[],h=0,
n=0;var m=0;var r=this.requireSorting?this.cropShoulder:0,v=c?c.positiveValuesOnly:!1,q;a=a||this.stackedYData||this.processedYData||[];c=a.length;b&&(m=b.getExtremes(),n=m.min,m=m.max);for(q=0;q<c;q++){var x=e[q];var k=a[q];var u=(E(k)||H(k))&&(k.length||0<k||!v);x=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!b||(e[q+r]||x)>=n&&(e[q-r]||x)<=m;if(u&&x)if(u=k.length)for(;u--;)E(k[u])&&(d[h++]=k[u]);else d[h++]=k}this.dataMin=p(d);this.dataMax=l(d);f(this,"afterGetExtremes")},
translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,b=a.stacking,c=this.xAxis,d=c.categories,n=this.yAxis,m=this.points,l=m.length,r=!!this.modifyValue,v,p=this.pointPlacementToXValue(),x=E(p),k=a.threshold,u=a.startFromThreshold?k:0,t,y=this.zoneAxis||"y",C=Number.MAX_VALUE;for(v=0;v<l;v++){var G=m[v],D=G.x;var I=G.y;var S=G.low,K=b&&n.stacks[(this.negStacks&&I<(u?0:k)?"-":"")+this.stackKey];n.positiveValuesOnly&&null!==I&&0>=I&&(G.isNull=!0);G.plotX=
t=q(Math.min(Math.max(-1E5,c.translate(D,0,0,0,1,p,"flags"===this.type)),1E5));if(b&&this.visible&&K&&K[D]){var Y=this.getStackIndicator(Y,D,this.index);if(!G.isNull){var Z=K[D];var U=Z.points[Y.key]}}H(U)&&(S=U[0],I=U[1],S===u&&Y.key===K[D].base&&(S=h(E(k)&&k,n.min)),n.positiveValuesOnly&&0>=S&&(S=null),G.total=G.stackTotal=Z.total,G.percentage=Z.total&&G.y/Z.total*100,G.stackY=I,this.irregularWidths||Z.setOffset(this.pointXOffset||0,this.barW||0));G.yBottom=w(S)?Math.min(Math.max(-1E5,n.translate(S,
0,1,0,1)),1E5):null;r&&(I=this.modifyValue(I,G));G.plotY=I="number"===typeof I&&Infinity!==I?Math.min(Math.max(-1E5,n.translate(I,0,1,0,1)),1E5):void 0;G.isInside=void 0!==I&&0<=I&&I<=n.len&&0<=t&&t<=c.len;G.clientX=x?q(c.translate(D,0,0,0,1,p)):t;G.negative=G[y]<(a[y+"Threshold"]||k||0);G.category=d&&void 0!==d[G.x]?d[G.x]:G.x;if(!G.isNull){void 0!==V&&(C=Math.min(C,Math.abs(t-V)));var V=t}G.zone=this.zones.length&&G.getZone()}this.closestPointRangePx=C;f(this,"afterTranslate")},getValidPoints:function(a,
b,c){var e=this.chart;return(a||this.points||[]).filter(function(a){return b&&!e.isInsidePlot(a.plotX,a.plotY,e.inverted)?!1:c||!a.isNull})},getClipBox:function(a,b){var c=this.options,e=this.chart,g=e.inverted,d=this.xAxis,f=d&&this.yAxis;a&&!1===c.clip&&f?a=g?{y:-e.chartWidth+f.len+f.pos,height:e.chartWidth,width:e.chartHeight,x:-e.chartHeight+d.len+d.pos}:{y:-f.pos,height:e.chartHeight,width:e.chartWidth,x:-d.pos}:(a=this.clipBox||e.clipBox,b&&(a.width=e.plotSizeX,a.x=0));return b?{width:a.width,
x:a.x}:a},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,f=this.clipBox,h=this.getClipBox(a),n=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),m=b[n],l=b[n+"m"];m||(a&&(h.width=0,d&&(h.x=b.plotSizeX+(!1!==c.clip?0:b.plotTop)),b[n+"m"]=l=e.clipRect(d?b.plotSizeX+99:-99,d?-b.plotLeft:-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[n]=m=e.clipRect(h),m.count={length:0});a&&!m.count[this.index]&&(m.count[this.index]=!0,m.count.length+=
1);if(!1!==c.clip||a)this.group.clip(a||f?m:b.clipRect),this.markerGroup.clip(l),this.sharedClipKey=n;a||(m.count[this.index]&&(delete m.count[this.index],--m.count.length),0===m.count.length&&n&&b[n]&&(f||(b[n]=b[n].destroy()),b[n+"m"]&&(b[n+"m"]=b[n+"m"].destroy())))},animate:function(a){var b=this.chart,c=u(this.options.animation);if(a)this.setClip(c);else{var e=this.sharedClipKey;a=b[e];var d=this.getClipBox(c,!0);a&&a.animate(d,c);b[e+"m"]&&b[e+"m"].animate({width:d.width+99,x:d.x-(b.inverted?
0:99)},c);this.animate=null}},afterAnimate:function(){this.setClip();f(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,d=this.options.marker,f=this[this.specialGroup]||this.markerGroup;var n=this.xAxis;var m=h(d.enabled,!n||n.isRadial?!0:null,this.closestPointRangePx>=d.enabledThreshold*d.radius);if(!1!==d.enabled||this._hasPointMarkers)for(n=0;n<a.length;n++){var l=a[n];var r=(c=l.graphic)?"animate":"attr";var v=l.marker||{};var p=!!l.marker;
var q=m&&void 0===v.enabled||v.enabled;var k=!1!==l.isInside;if(q&&!l.isNull){q=h(v.symbol,this.symbol);var x=this.markerAttribs(l,l.selected&&"select");c?c[k?"show":"hide"](k).animate(x):k&&(0<x.width||l.hasImage)&&(l.graphic=c=b.renderer.symbol(q,x.x,x.y,x.width,x.height,p?v:d).add(f));if(c&&!b.styledMode)c[r](this.pointAttribs(l,l.selected&&"select"));c&&c.addClass(l.getClassName(),!0)}else c&&(l.graphic=c.destroy())}},markerAttribs:function(a,b){var c=this.options.marker,e=a.marker||{},d=e.symbol||
c.symbol,g=h(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],g=h(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=d&&0===d.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},g=this.color,f=e&&e.color,n=a&&a.color;e=h(d.lineWidth,c.lineWidth);var m=a&&a.zone&&a.zone.color;a=1;g=f||m||n||g;f=d.fillColor||c.fillColor||g;g=d.lineColor||
c.lineColor||g;b=b||"normal";c=c.states[b];b=d.states&&d.states[b]||{};e=h(b.lineWidth,c.lineWidth,e+h(b.lineWidthPlus,c.lineWidthPlus,0));f=b.fillColor||c.fillColor||f;g=b.lineColor||c.lineColor||g;a=h(b.opacity,c.opacity,a);return{stroke:g,"stroke-width":e,fill:f,opacity:a}},destroy:function(a){var b=this,c=b.chart,e=/AppleWebKit\/533/.test(n.navigator.userAgent),h,m,l=b.data||[],v,p;f(b,"destroy");a||r(b);(b.axisTypes||[]).forEach(function(a){(p=b[a])&&p.series&&(D(p.series,b),p.isDirty=p.forceRedraw=
!0)});b.legendItem&&b.chart.legend.destroyItem(b);for(m=l.length;m--;)(v=l[m])&&v.destroy&&v.destroy();b.points=null;d.clearTimeout(b.animationTimeout);C(b,function(a,b){a instanceof x&&!a.survive&&(h=e&&"group"===b?"hide":"destroy",a[h]())});c.hoverSeries===b&&(c.hoverSeries=null);D(c.series,b);c.orderSeries();C(b,function(c,e){a&&"hcEvents"===e||delete b[e]})},getGraphPath:function(a,b,c){var e=this,d=e.options,g=d.step,f,n=[],h=[],m;a=a||e.points;(f=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||
g&&3)&&f&&(g=4-g);!d.connectNulls||b||c||(a=this.getValidPoints(a));a.forEach(function(f,A){var l=f.plotX,r=f.plotY,v=a[A-1];(f.leftCliff||v&&v.rightCliff)&&!c&&(m=!0);f.isNull&&!w(b)&&0<A?m=!d.connectNulls:f.isNull&&!b?m=!0:(0===A||m?A=["M",f.plotX,f.plotY]:e.getPointSpline?A=e.getPointSpline(a,f,A):g?(A=1===g?["L",v.plotX,r]:2===g?["L",(v.plotX+l)/2,v.plotY,"L",(v.plotX+l)/2,r]:["L",l,v.plotY],A.push("L",l,r)):A=["L",l,r],h.push(f.x),g&&(h.push(f.x),2===g&&h.push(f.x)),n.push.apply(n,A),m=!1)});
n.xMap=h;return e.graphPath=n},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,f=[["graph","highcharts-graph"]];d||f[0].push(b.lineColor||this.color||"#cccccc",b.dashStyle);f=a.getZonesGraphs(f);f.forEach(function(e,g){var f=e[0],n=a[f],h=n?"animate":"attr";n?(n.endX=a.preventGraphAnimation?null:c.xMap,n.animate({d:c})):c.length&&(a[f]=n=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group));n&&!d&&(f={stroke:e[2],
"stroke-width":b.lineWidth,fill:a.fillGraph&&a.color||"none"},e[3]?f.dashstyle=e[3]:"square"!==b.linecap&&(f["stroke-linecap"]=f["stroke-linejoin"]="round"),n[h](f).shadow(2>g&&b.shadow));n&&(n.startX=c.xMap,n.isArea=c.isArea)})},getZonesGraphs:function(a){this.zones.forEach(function(b,c){c=["zone-graph-"+c,"highcharts-graph highcharts-zone-graph-"+c+" "+(b.className||"")];this.chart.styledMode||c.push(b.color||this.color,b.dashStyle||this.options.dashStyle);a.push(c)},this);return a},applyZones:function(){var a=
this,b=this.chart,c=b.renderer,d=this.zones,f,n,m=this.clips||[],l,v=this.graph,r=this.area,p=Math.max(b.chartWidth,b.chartHeight),q=this[(this.zoneAxis||"y")+"Axis"],x=b.inverted,k,u,t,y=!1;if(d.length&&(v||r)&&q&&void 0!==q.min){var w=q.reversed;var C=q.horiz;v&&!this.showLine&&v.hide();r&&r.hide();var G=q.getExtremes();d.forEach(function(e,d){f=w?C?b.plotWidth:0:C?0:q.toPixels(G.min)||0;f=Math.min(Math.max(h(n,f),0),p);n=Math.min(Math.max(Math.round(q.toPixels(h(e.value,G.max),!0)||0),0),p);y&&
(f=n=q.toPixels(G.max));k=Math.abs(f-n);u=Math.min(f,n);t=Math.max(f,n);q.isXAxis?(l={x:x?t:u,y:0,width:k,height:p},C||(l.x=b.plotHeight-l.x)):(l={x:0,y:x?t:u,width:p,height:k},C&&(l.y=b.plotWidth-l.y));x&&c.isVML&&(l=q.isXAxis?{x:0,y:w?u:t,height:l.width,width:b.chartWidth}:{x:l.y-b.plotLeft-b.spacingBox.x,y:0,width:l.height,height:b.chartHeight});m[d]?m[d].animate(l):m[d]=c.clipRect(l);v&&a["zone-graph-"+d].clip(m[d]);r&&a["zone-area-"+d].clip(m[d]);y=e.value>G.max;a.resetZones&&0===n&&(n=void 0)});
this.clips=m}else a.visible&&(v&&v.show(!0),r&&r.show(!0))},invertGroups:function(a){function b(){["group","markerGroup"].forEach(function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,e=c.chart;if(c.xAxis){var d=G(e,"resize",b);G(c,"destroy",d);b(a);c.invertGroups=b}},plotGroup:function(a,b,c,d,f){var e=this[a],g=!e;g&&(this[a]=e=this.chart.renderer.g().attr({zIndex:d||.1}).add(f));e.addClass("highcharts-"+
b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(e.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);e.attr({visibility:c})[g?"attr":"animate"](this.getPlotBox());return e},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=
this,b=a.chart,c=a.options,d=!!a.animate&&b.renderer.isSVG&&u(c.animation).duration,n=a.visible?"inherit":"hidden",h=c.zIndex,m=a.hasRendered,l=b.seriesGroup,r=b.inverted;f(this,"render");var p=a.plotGroup("group","series",n,h,l);a.markerGroup=a.plotGroup("markerGroup","markers",n,h,l);d&&a.animate(!0);p.inverted=a.isCartesian||a.invertable?r:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&
!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(r);!1===c.clip||a.sharedClipKey||m||p.clip(b.clipRect);d&&a.animate();m||(a.animationTimeout=v(function(){a.afterAnimate()},d));a.isDirty=!1;a.hasRendered=!0;f(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,d=this.xAxis,f=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:h(d&&d.left,a.plotLeft),translateY:h(f&&f.top,a.plotTop)}));this.translate();
this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b,a)},buildKDTree:function(a){function b(a,e,d){var g;if(g=a&&a.length){var f=c.kdAxisArray[e%d];a.sort(function(a,b){return a[f]-b[f]});g=Math.floor(g/2);return{point:a[g],left:b(a.slice(0,g),e+1,d),right:b(a.slice(g+1),e+1,d)}}}this.buildingKdTree=
!0;var c=this,e=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;v(function(){c.kdTree=b(c.getValidPoints(null,!c.directTouch),e,e);c.buildingKdTree=!1},c.options.kdNow||a&&"touchstart"===a.type?0:1)},searchKDTree:function(a,b,c){function e(a,b,c,h){var m=b.point,A=d.kdAxisArray[c%h],l=m;var r=w(a[g])&&w(m[g])?Math.pow(a[g]-m[g],2):null;var v=w(a[f])&&w(m[f])?Math.pow(a[f]-m[f],2):null;v=(r||0)+(v||0);m.dist=w(v)?Math.sqrt(v):Number.MAX_VALUE;m.distX=w(r)?Math.sqrt(r):Number.MAX_VALUE;
A=a[A]-m[A];v=0>A?"left":"right";r=0>A?"right":"left";b[v]&&(v=e(a,b[v],c+1,h),l=v[n]<l[n]?v:m);b[r]&&Math.sqrt(A*A)<l[n]&&(a=e(a,b[r],c+1,h),l=a[n]<l[n]?a:l);return l}var d=this,g=this.kdAxisArray[0],f=this.kdAxisArray[1],n=b?"distX":"dist";b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return e(a,this.kdTree,b,b)},pointPlacementToXValue:function(){var a=this.options.pointPlacement;"between"===a&&(a=.5);E(a)&&(a*=h(this.options.pointRange||
this.xAxis.pointRange));return a}});""});K(I,"parts/Stacking.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.objectEach;k=d.Axis;var H=d.Chart,E=d.correctFloat,y=d.destroyObjectProperties,C=d.format,t=d.pick,G=d.Series;d.StackItem=function(d,l,p,q,c){var a=d.chart.inverted;this.axis=d;this.isNegative=p;this.options=l=l||{};this.x=q;this.total=null;this.points={};this.stack=c;this.rightCliff=this.leftCliff=0;this.alignOptions={align:l.align||(a?p?"left":"right":
"center"),verticalAlign:l.verticalAlign||(a?"middle":p?"bottom":"top"),y:l.y,x:l.x};this.textAlign=l.textAlign||(a?p?"right":"left":"center")};d.StackItem.prototype={destroy:function(){y(this,this.axis)},render:function(d){var l=this.axis.chart,p=this.options,q=p.format;q=q?C(q,this,l.time):p.formatter.call(this);this.label?this.label.attr({text:q,visibility:"hidden"}):(this.label=l.renderer.label(q,null,null,p.shape,null,null,p.useHTML,!1,"stack-labels"),q={text:q,align:this.textAlign,rotation:p.rotation,
padding:t(p.padding,0),visibility:"hidden"},this.label.attr(q),l.styledMode||this.label.css(p.style),this.label.added||this.label.add(d));this.label.labelrank=l.plotHeight},setOffset:function(d,l,p,q,c){var a=this.axis,b=a.chart;q=a.translate(a.usePercentage?100:q?q:this.total,0,0,0,1);p=a.translate(p?p:0);p=w(q)&&Math.abs(q-p);d=t(c,b.xAxis[0].translate(this.x))+d;a=w(q)&&this.getStackBox(b,this,d,q,l,p,a);l=this.label;d=this.isNegative;c="justify"===t(this.options.overflow,"justify");if(l&&a){p=
l.getBBox();var f=b.inverted?d?p.width:0:p.width/2,m=b.inverted?p.height/2:d?-4:p.height+4;this.alignOptions.x=t(this.options.x,0);l.align(this.alignOptions,null,a);q=l.alignAttr;l.show();q.y-=m;c&&(q.x-=f,G.prototype.justifyDataLabel.call(this.axis,l,this.alignOptions,q,p,a),q.x+=f);q.x=l.alignAttr.x;l.attr({x:q.x,y:q.y});t(!c&&this.options.crop,!0)&&((b=b.isInsidePlot(l.x+(b.inverted?0:-p.width/2),l.y)&&b.isInsidePlot(l.x+(b.inverted?d?-p.width:p.width:p.width/2),l.y+p.height))||l.hide())}},getStackBox:function(d,
l,p,q,c,a,b){var f=l.axis.reversed,m=d.inverted;d=b.height+b.pos-(m?d.plotLeft:d.plotTop);l=l.isNegative&&!f||!l.isNegative&&f;return{x:m?l?q:q-a:p,y:m?d-p-c:l?d-q-a:d-q,width:m?a:c,height:m?c:a}}};H.prototype.getStacks=function(){var d=this,l=d.inverted;d.yAxis.forEach(function(d){d.stacks&&d.hasVisibleSeries&&(d.oldStacks=d.stacks)});d.series.forEach(function(p){var q=p.xAxis&&p.xAxis.options||{};!p.options.stacking||!0!==p.visible&&!1!==d.options.chart.ignoreHiddenSeries||(p.stackKey=[p.type,t(p.options.stack,
""),l?q.top:q.left,l?q.height:q.width].join())})};k.prototype.buildStacks=function(){var d=this.series,l=t(this.options.reversedStacks,!0),p=d.length,q;if(!this.isXAxis){this.usePercentage=!1;for(q=p;q--;)d[l?q:p-q-1].setStackedPoints();for(q=0;q<p;q++)d[q].modifyStacks()}};k.prototype.renderStackTotals=function(){var d=this.chart,l=d.renderer,p=this.stacks,q=this.stackTotalGroup;q||(this.stackTotalGroup=q=l.g("stack-labels").attr({visibility:"visible",zIndex:6}).add());q.translate(d.plotLeft,d.plotTop);
D(p,function(c){D(c,function(a){a.render(q)})})};k.prototype.resetStacks=function(){var d=this,l=d.stacks;d.isXAxis||D(l,function(l){D(l,function(p,c){p.touched<d.stacksTouched?(p.destroy(),delete l[c]):(p.total=null,p.cumulative=null)})})};k.prototype.cleanStacks=function(){if(!this.isXAxis){if(this.oldStacks)var d=this.stacks=this.oldStacks;D(d,function(d){D(d,function(d){d.cumulative=d.total})})}};G.prototype.setStackedPoints=function(){if(this.options.stacking&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var k=
this.processedXData,l=this.processedYData,p=[],q=l.length,c=this.options,a=c.threshold,b=t(c.startFromThreshold&&a,0),f=c.stack;c=c.stacking;var m=this.stackKey,h="-"+m,r=this.negStacks,x=this.yAxis,v=x.stacks,n=x.oldStacks,e,g;x.stacksTouched+=1;for(g=0;g<q;g++){var F=k[g];var A=l[g];var z=this.getStackIndicator(z,F,this.index);var B=z.key;var J=(e=r&&A<(b?0:a))?h:m;v[J]||(v[J]={});v[J][F]||(n[J]&&n[J][F]?(v[J][F]=n[J][F],v[J][F].total=null):v[J][F]=new d.StackItem(x,x.options.stackLabels,e,F,f));
J=v[J][F];null!==A?(J.points[B]=J.points[this.index]=[t(J.cumulative,b)],w(J.cumulative)||(J.base=B),J.touched=x.stacksTouched,0<z.index&&!1===this.singleStacks&&(J.points[B][0]=J.points[this.index+","+F+",0"][0])):J.points[B]=J.points[this.index]=null;"percent"===c?(e=e?m:h,r&&v[e]&&v[e][F]?(e=v[e][F],J.total=e.total=Math.max(e.total,J.total)+Math.abs(A)||0):J.total=E(J.total+(Math.abs(A)||0))):J.total=E(J.total+(A||0));J.cumulative=t(J.cumulative,b)+(A||0);null!==A&&(J.points[B].push(J.cumulative),
p[g]=J.cumulative)}"percent"===c&&(x.usePercentage=!0);this.stackedYData=p;x.oldStacks={}}};G.prototype.modifyStacks=function(){var d=this,l=d.stackKey,p=d.yAxis.stacks,q=d.processedXData,c,a=d.options.stacking;d[a+"Stacker"]&&[l,"-"+l].forEach(function(b){for(var f=q.length,m,h;f--;)if(m=q[f],c=d.getStackIndicator(c,m,d.index,b),h=(m=p[b]&&p[b][m])&&m.points[c.key])d[a+"Stacker"](h,m,f)})};G.prototype.percentStacker=function(d,l,p){l=l.total?100/l.total:0;d[0]=E(d[0]*l);d[1]=E(d[1]*l);this.stackedYData[p]=
d[1]};G.prototype.getStackIndicator=function(d,l,p,q){!w(d)||d.x!==l||q&&d.key!==q?d={x:l,index:0,key:q}:d.index++;d.key=[p,l,d.index].join();return d}});K(I,"parts/Dynamics.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.erase,H=k.isArray,E=k.isNumber,y=k.isObject,C=k.isString,t=k.objectEach,G=k.splat,u=d.addEvent,l=d.animate,p=d.Axis;k=d.Chart;var q=d.createElement,c=d.css,a=d.extend,b=d.fireEvent,f=d.merge,m=d.pick,h=d.Point,r=d.Series,x=d.seriesTypes,v=d.setAnimation;
d.cleanRecursively=function(a,b){var c={};t(a,function(e,g){if(y(a[g],!0)&&!a.nodeType&&b[g])e=d.cleanRecursively(a[g],b[g]),Object.keys(e).length&&(c[g]=e);else if(y(a[g])||a[g]!==b[g])c[g]=a[g]});return c};a(k.prototype,{addSeries:function(a,c,d){var e,g=this;a&&(c=m(c,!0),b(g,"addSeries",{options:a},function(){e=g.initSeries(a);g.isDirtyLegend=!0;g.linkSeries();b(g,"afterAddSeries",{series:e});c&&g.redraw(d)}));return e},addAxis:function(a,b,c,d){return this.createAxis(b?"xAxis":"yAxis",{axis:a,
redraw:c,animation:d})},addColorAxis:function(a,b,c){return this.createAxis("colorAxis",{axis:a,redraw:b,animation:c})},createAxis:function(a,b){var c=this.options,e="colorAxis"===a,n=b.redraw,h=b.animation;b=f(b.axis,{index:this[a].length,isX:"xAxis"===a});var l=e?new d.ColorAxis(this,b):new p(this,b);c[a]=G(c[a]||{});c[a].push(b);e&&(this.isDirtyLegend=!0);m(n,!0)&&this.redraw(h);return l},showLoading:function(b){var d=this,g=d.options,f=d.loadingDiv,h=g.loading,n=function(){f&&c(f,{left:d.plotLeft+
"px",top:d.plotTop+"px",width:d.plotWidth+"px",height:d.plotHeight+"px"})};f||(d.loadingDiv=f=q("div",{className:"highcharts-loading highcharts-loading-hidden"},null,d.container),d.loadingSpan=q("span",{className:"highcharts-loading-inner"},null,f),u(d,"redraw",n));f.className="highcharts-loading";d.loadingSpan.innerHTML=m(b,g.lang.loading,"");d.styledMode||(c(f,a(h.style,{zIndex:10})),c(d.loadingSpan,h.labelStyle),d.loadingShown||(c(f,{opacity:0,display:""}),l(f,{opacity:h.style.opacity||.5},{duration:h.showDuration||
0})));d.loadingShown=!0;n()},hideLoading:function(){var a=this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",this.styledMode||l(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){c(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),collectionsWithUpdate:"xAxis yAxis zAxis series colorAxis pane".split(" "),update:function(a,c,g,h){var e=this,n={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},l,v,r,p=a.isResponsiveOptions,F=[];b(e,"update",{options:a});p||e.setResponsive(!1,!0);a=d.cleanRecursively(a,e.options);f(!0,e.userOptions,a);if(l=a.chart){f(!0,e.options.chart,
l);"className"in l&&e.setClassName(l.className);"reflow"in l&&e.setReflow(l.reflow);if("inverted"in l||"polar"in l||"type"in l){e.propFromSeries();var q=!0}"alignTicks"in l&&(q=!0);t(l,function(a,b){-1!==e.propsRequireUpdateSeries.indexOf("chart."+b)&&(v=!0);-1!==e.propsRequireDirtyBox.indexOf(b)&&(e.isDirtyBox=!0);p||-1===e.propsRequireReflow.indexOf(b)||(r=!0)});!e.styledMode&&"style"in l&&e.renderer.setStyle(l.style)}!e.styledMode&&a.colors&&(this.options.colors=a.colors);a.plotOptions&&f(!0,this.options.plotOptions,
a.plotOptions);a.time&&this.time===d.time&&(this.time=new d.Time(a.time));t(a,function(a,b){if(e[b]&&"function"===typeof e[b].update)e[b].update(a,!1);else if("function"===typeof e[n[b]])e[n[b]](a);"chart"!==b&&-1!==e.propsRequireUpdateSeries.indexOf(b)&&(v=!0)});this.collectionsWithUpdate.forEach(function(b){if(a[b]){if("series"===b){var c=[];e[b].forEach(function(a,b){a.options.isInternal||c.push(m(a.options.index,b))})}G(a[b]).forEach(function(a,d){(d=w(a.id)&&e.get(a.id)||e[b][c?c[d]:d])&&d.coll===
b&&(d.update(a,!1),g&&(d.touched=!0));!d&&g&&e.collectionsWithInit[b]&&(e.collectionsWithInit[b][0].apply(e,[a].concat(e.collectionsWithInit[b][1]||[]).concat([!1])).touched=!0)});g&&e[b].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:F.push(a)})}});F.forEach(function(a){a.remove&&a.remove(!1)});q&&e.axes.forEach(function(a){a.update({},!1)});v&&e.series.forEach(function(a){a.update({},!1)});a.loading&&f(!0,e.options.loading,a.loading);q=l&&l.width;l=l&&l.height;C(l)&&(l=d.relativeLength(l,
q||e.chartWidth));r||E(q)&&q!==e.chartWidth||E(l)&&l!==e.chartHeight?e.setSize(q,l,h):m(c,!0)&&e.redraw(h);b(e,"afterUpdate",{options:a,redraw:c,animation:h})},setSubtitle:function(a,b){this.applyDescription("subtitle",a);this.layOutTitles(b)},setCaption:function(a,b){this.applyDescription("caption",a);this.layOutTitles(b)}});k.prototype.collectionsWithInit={xAxis:[k.prototype.addAxis,[!0]],yAxis:[k.prototype.addAxis,[!1]],colorAxis:[k.prototype.addColorAxis,[!1]],series:[k.prototype.addSeries]};
a(h.prototype,{update:function(a,b,c,d){function e(){g.applyOptions(a);null===g.y&&h&&(g.graphic=h.destroy());y(a,!0)&&(h&&h.element&&a&&a.marker&&void 0!==a.marker.symbol&&(g.graphic=h.destroy()),a&&a.dataLabels&&g.dataLabel&&(g.dataLabel=g.dataLabel.destroy()),g.connector&&(g.connector=g.connector.destroy()));n=g.index;f.updateParallelArrays(g,n);v.data[n]=y(v.data[n],!0)||y(a,!0)?g.options:m(a,v.data[n]);f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(l.isDirtyBox=!0);"point"===
v.legendType&&(l.isDirtyLegend=!0);b&&l.redraw(c)}var g=this,f=g.series,h=g.graphic,n,l=f.chart,v=f.options;b=m(b,!0);!1===d?e():g.firePointEvent("update",{options:a},e)},remove:function(a,b){this.series.removePoint(this.series.data.indexOf(this),a,b)}});a(r.prototype,{addPoint:function(a,c,d,f,h){var e=this.options,g=this.data,n=this.chart,l=this.xAxis;l=l&&l.hasNames&&l.names;var A=e.data,v=this.xData,r;c=m(c,!0);var p={series:this};this.pointClass.prototype.applyOptions.apply(p,[a]);var q=p.x;
var F=v.length;if(this.requireSorting&&q<v[F-1])for(r=!0;F&&v[F-1]>q;)F--;this.updateParallelArrays(p,"splice",F,0,0);this.updateParallelArrays(p,F);l&&p.name&&(l[q]=p.name);A.splice(F,0,a);r&&(this.data.splice(F,0,null),this.processData());"point"===e.legendType&&this.generatePoints();d&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),this.updateParallelArrays(p,"shift"),A.shift()));!1!==h&&b(this,"addPoint",{point:p});this.isDirtyData=this.isDirty=!0;c&&n.redraw(f)},removePoint:function(a,b,c){var d=
this,e=d.data,g=e[a],f=d.points,h=d.chart,n=function(){f&&f.length===e.length&&f.splice(a,1);e.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(g||{series:d},"splice",a,1);g&&g.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&h.redraw()};v(c,h);b=m(b,!0);g?g.firePointEvent("remove",null,n):n()},remove:function(a,c,d,f){function e(){g.destroy(f);g.remove=null;h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();m(a,!0)&&h.redraw(c)}var g=this,h=g.chart;!1!==d?b(g,"remove",null,e):e()},update:function(c,
e){c=d.cleanRecursively(c,this.userOptions);b(this,"update",{options:c});var g=this,h=g.chart,n=g.userOptions,l=g.initialType||g.type,v=c.type||n.type||h.options.chart.type,r=!(this.hasDerivedData||c.dataGrouping||v&&v!==this.type||void 0!==c.pointStart||c.pointInterval||c.pointIntervalUnit||c.keys),p=x[l].prototype,q,k=["group","markerGroup","dataLabelsGroup","transformGroup"],u=["eventOptions","navigatorSeries","baseSeries"],t=g.finishedAnimating&&{animation:!1},y={};r&&(u.push("data","isDirtyData",
"points","processedXData","processedYData","xIncrement","_hasPointMarkers","_hasPointLabels","mapMap","mapData","minY","maxY","minX","maxX"),!1!==c.visible&&u.push("area","graph"),g.parallelArrays.forEach(function(a){u.push(a+"Data")}),c.data&&this.setData(c.data,!1));c=f(n,t,{index:void 0===n.index?g.index:n.index,pointStart:m(n.pointStart,g.xData[0])},!r&&{data:g.options.data},c);r&&c.data&&(c.data=g.options.data);u=k.concat(u);u.forEach(function(a){u[a]=g[a];delete g[a]});g.remove(!1,null,!1,!0);
for(q in p)g[q]=void 0;x[v||l]?a(g,x[v||l].prototype):d.error(17,!0,h);u.forEach(function(a){g[a]=u[a]});g.init(h,c);if(r&&this.points){var w=g.options;!1===w.visible?(y.graphic=1,y.dataLabel=1):g._hasPointLabels||(v=w.marker,p=w.dataLabels,v&&(!1===v.enabled||"symbol"in v)&&(y.graphic=1),p&&!1===p.enabled&&(y.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(y).length&&a.destroyElements(y),!1===w.showInLegend&&a.legendItem&&h.legend.destroyItem(a))},this)}c.zIndex!==
n.zIndex&&k.forEach(function(a){g[a]&&g[a].attr({zIndex:c.zIndex})});g.initialType=l;h.linkSeries();b(this,"afterUpdate");m(e,!0)&&h.redraw(r?void 0:!1)},setName:function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0}});a(p.prototype,{update:function(b,c){var d=this.chart,e=b&&b.events||{};b=f(this.userOptions,b);d.options[this.coll].indexOf&&(d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)]=b);t(d.options[this.coll].events,function(a,b){"undefined"===
typeof e[b]&&(e[b]=void 0)});this.destroy(!0);this.init(d,a(b,{events:e}));d.isDirtyBox=!0;m(c,!0)&&d.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,d=this.series,f=d.length;f--;)d[f]&&d[f].remove(!1);D(b.axes,this);D(b[c],this);H(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];b[c].forEach(function(a,b){a.options.index=a.userOptions.index=b});this.destroy();b.isDirtyBox=!0;m(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,
b){this.update({categories:a},b)}})});K(I,"parts/AreaSeries.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.objectEach,D=d.color,H=d.pick,E=d.Series;k=d.seriesType;k("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(d){var k=[],t=[],y=this.xAxis,u=this.yAxis,l=u.stacks[this.stackKey],p={},q=this.index,c=u.series,a=c.length,b=H(u.options.reversedStacks,!0)?1:-1,f;d=d||this.points;if(this.options.stacking){for(f=0;f<d.length;f++)d[f].leftNull=
d[f].rightNull=null,p[d[f].x]=d[f];w(l,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});var m=c.map(function(a){return a.visible});t.forEach(function(c,d){var h=0,v,n;if(p[c]&&!p[c].isNull)k.push(p[c]),[-1,1].forEach(function(e){var g=1===e?"rightNull":"leftNull",h=0,r=l[t[d+e]];if(r)for(f=q;0<=f&&f<a;)v=r.points[f],v||(f===q?p[c][g]=!0:m[f]&&(n=l[c].points[f])&&(h-=n[1]-n[0])),f+=b;p[c][1===e?"rightCliff":"leftCliff"]=h});else{for(f=q;0<=f&&f<a;){if(v=l[c].points[f]){h=
v[1];break}f+=b}h=u.translate(h,0,1,0,1);k.push({isNull:!0,plotX:y.translate(c,0,0,0,1),x:c,plotY:h,yBottom:h})}})}return k},getGraphPath:function(k){var y=E.prototype.getGraphPath,t=this.options,w=t.stacking,u=this.yAxis,l,p=[],q=[],c=this.index,a=u.stacks[this.stackKey],b=t.threshold,f=Math.round(u.getThreshold(t.threshold));t=d.pick(t.connectNulls,"percent"===w);var m=function(d,h,e){var g=k[d];d=w&&a[g.x].points[c];var n=g[e+"Null"]||0;e=g[e+"Cliff"]||0;g=!0;if(e||n){var m=(n?d[0]:d[1])+e;var l=
d[0]+e;g=!!n}else!w&&k[h]&&k[h].isNull&&(m=l=b);void 0!==m&&(q.push({plotX:r,plotY:null===m?f:u.getThreshold(m),isNull:g,isCliff:!0}),p.push({plotX:r,plotY:null===l?f:u.getThreshold(l),doCurve:!1}))};k=k||this.points;w&&(k=this.getStackPoints(k));for(l=0;l<k.length;l++){var h=k[l].isNull;var r=H(k[l].rectPlotX,k[l].plotX);var x=H(k[l].yBottom,f);if(!h||t)t||m(l,l-1,"left"),h&&!w&&t||(q.push(k[l]),p.push({x:l,plotX:r,plotY:x})),t||m(l,l+1,"right")}l=y.call(this,q,!0,!0);p.reversed=!0;h=y.call(this,
p,!0,!0);h.length&&(h[0]="L");h=l.concat(h);y=y.call(this,q,!1,t);h.xMap=l.xMap;this.areaPath=h;return y},drawGraph:function(){this.areaPath=[];E.prototype.drawGraph.apply(this);var d=this,k=this.areaPath,t=this.options,w=[["area","highcharts-area",this.color,t.fillColor]];this.zones.forEach(function(k,l){w.push(["zone-area-"+l,"highcharts-area highcharts-zone-area-"+l+" "+k.className,k.color||d.color,k.fillColor||t.fillColor])});w.forEach(function(u){var l=u[0],p=d[l],q=p?"animate":"attr",c={};p?
(p.endX=d.preventGraphAnimation?null:k.xMap,p.animate({d:k})):(c.zIndex=0,p=d[l]=d.chart.renderer.path(k).addClass(u[1]).add(d.group),p.isArea=!0);d.chart.styledMode||(c.fill=H(u[3],D(u[2]).setOpacity(H(t.fillOpacity,.75)).get()));p[q](c);p.startX=k.xMap;p.shiftUnit=t.step?2:1})},drawLegendSymbol:d.LegendSymbolMixin.drawRectangle});""});K(I,"parts/SplineSeries.js",[I["parts/Globals.js"]],function(d){var k=d.pick;d=d.seriesType;d("spline","line",{},{getPointSpline:function(d,D,H){var w=D.plotX,y=D.plotY,
C=d[H-1];H=d[H+1];if(C&&!C.isNull&&!1!==C.doCurve&&!D.isCliff&&H&&!H.isNull&&!1!==H.doCurve&&!D.isCliff){d=C.plotY;var t=H.plotX;H=H.plotY;var G=0;var u=(1.5*w+C.plotX)/2.5;var l=(1.5*y+d)/2.5;t=(1.5*w+t)/2.5;var p=(1.5*y+H)/2.5;t!==u&&(G=(p-l)*(t-w)/(t-u)+y-p);l+=G;p+=G;l>d&&l>y?(l=Math.max(d,y),p=2*y-l):l<d&&l<y&&(l=Math.min(d,y),p=2*y-l);p>H&&p>y?(p=Math.max(H,y),l=2*y-p):p<H&&p<y&&(p=Math.min(H,y),l=2*y-p);D.rightContX=t;D.rightContY=p}D=["C",k(C.rightContX,C.plotX),k(C.rightContY,C.plotY),k(u,
w),k(l,y),w,y];C.rightContX=C.rightContY=null;return D}});""});K(I,"parts/AreaSplineSeries.js",[I["parts/Globals.js"]],function(d){var k=d.seriesTypes.area.prototype,w=d.seriesType;w("areaspline","spline",d.defaultPlotOptions.area,{getStackPoints:k.getStackPoints,getGraphPath:k.getGraphPath,drawGraph:k.drawGraph,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle});""});K(I,"parts/ColumnSeries.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isNumber,H=d.animObject,
E=d.color,y=d.extend,C=d.merge,t=d.pick,G=d.Series;k=d.seriesType;var u=d.svg;k("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group",
"dataLabelsGroup"],negStacks:!0,init:function(){G.prototype.init.apply(this,arguments);var d=this,p=d.chart;p.hasRendered&&p.series.forEach(function(l){l.type===d.type&&(l.isDirty=!0)})},getColumnMetrics:function(){var d=this,p=d.options,k=d.xAxis,c=d.yAxis,a=k.options.reversedStacks;a=k.reversed&&!a||!k.reversed&&a;var b,f={},m=0;!1===p.grouping?m=1:d.chart.series.forEach(function(a){var h=a.yAxis,e=a.options;if(a.type===d.type&&(a.visible||!d.chart.options.chart.ignoreHiddenSeries)&&c.len===h.len&&
c.pos===h.pos){if(e.stacking){b=a.stackKey;void 0===f[b]&&(f[b]=m++);var g=f[b]}else!1!==e.grouping&&(g=m++);a.columnIndex=g}});var h=Math.min(Math.abs(k.transA)*(k.ordinalSlope||p.pointRange||k.closestPointRange||k.tickInterval||1),k.len),r=h*p.groupPadding,x=(h-2*r)/(m||1);p=Math.min(p.maxPointWidth||k.len,t(p.pointWidth,x*(1-2*p.pointPadding)));d.columnMetrics={width:p,offset:(x-p)/2+(r+((d.columnIndex||0)+(a?1:0))*x-h/2)*(a?-1:1)};return d.columnMetrics},crispCol:function(d,p,k,c){var a=this.chart,
b=this.borderWidth,f=-(b%2?.5:0);b=b%2?.5:1;a.inverted&&a.renderer.isVML&&(b+=1);this.options.crisp&&(k=Math.round(d+k)+f,d=Math.round(d)+f,k-=d);c=Math.round(p+c)+b;f=.5>=Math.abs(p)&&.5<c;p=Math.round(p)+b;c-=p;f&&c&&(--p,c+=1);return{x:d,y:p,width:k,height:c}},translate:function(){var d=this,p=d.chart,k=d.options,c=d.dense=2>d.closestPointRange*d.xAxis.transA;c=d.borderWidth=t(k.borderWidth,c?0:1);var a=d.yAxis,b=k.threshold,f=d.translatedThreshold=a.getThreshold(b),m=t(k.minPointLength,5),h=d.getColumnMetrics(),
r=h.width,x=d.barW=Math.max(r,1+2*c),v=d.pointXOffset=h.offset,n=d.dataMin,e=d.dataMax;p.inverted&&(f-=.5);k.pointPadding&&(x=Math.ceil(x));G.prototype.translate.apply(d);d.points.forEach(function(c){var g=t(c.yBottom,f),h=999+Math.abs(g),l=r;h=Math.min(Math.max(-h,c.plotY),a.len+h);var k=c.plotX+v,q=x,u=Math.min(h,g),y=Math.max(h,g)-u;if(m&&Math.abs(y)<m){y=m;var C=!a.reversed&&!c.negative||a.reversed&&c.negative;c.y===b&&d.dataMax<=b&&a.min<b&&n!==e&&(C=!C);u=Math.abs(u-f)>m?g-m:f-(C?m:0)}w(c.options.pointWidth)&&
(l=q=Math.ceil(c.options.pointWidth),k-=Math.round((l-r)/2));c.barX=k;c.pointWidth=l;c.tooltipPos=p.inverted?[a.len+a.pos-p.plotLeft-h,d.xAxis.len-k-q/2,y]:[k+q/2,h+a.pos-p.plotTop,y];c.shapeType=d.pointClass.prototype.shapeType||"rect";c.shapeArgs=d.crispCol.apply(d,c.isNull?[k,f,q,0]:[k,u,q,y])})},getSymbol:d.noop,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},pointAttribs:function(d,p){var l=this.options,
c=this.pointAttrToOptions||{};var a=c.stroke||"borderColor";var b=c["stroke-width"]||"borderWidth",f=d&&d.color||this.color,m=d&&d[a]||l[a]||this.color||f,h=d&&d[b]||l[b]||this[b]||0;c=d&&d.options.dashStyle||l.dashStyle;var r=t(l.opacity,1);if(d&&this.zones.length){var k=d.getZone();f=d.options.color||k&&(k.color||d.nonZonedColor)||this.color;k&&(m=k.borderColor||m,c=k.dashStyle||c,h=k.borderWidth||h)}p&&(d=C(l.states[p],d.options.states&&d.options.states[p]||{}),p=d.brightness,f=d.color||void 0!==
p&&E(f).brighten(d.brightness).get()||f,m=d[a]||m,h=d[b]||h,c=d.dashStyle||c,r=t(d.opacity,r));a={fill:f,stroke:m,"stroke-width":h,opacity:r};c&&(a.dashstyle=c);return a},drawPoints:function(){var d=this,p=this.chart,k=d.options,c=p.renderer,a=k.animationLimit||250,b;d.points.forEach(function(f){var m=f.graphic,h=m&&p.pointCount<a?"animate":"attr";if(D(f.plotY)&&null!==f.y){b=f.shapeArgs;m&&m.element.nodeName!==f.shapeType&&(m=m.destroy());if(m)m[h](C(b));else f.graphic=m=c[f.shapeType](b).add(f.group||
d.group);if(k.borderRadius)m[h]({r:k.borderRadius});p.styledMode||m[h](d.pointAttribs(f,f.selected&&"select")).shadow(!1!==f.allowShadow&&k.shadow,null,k.stacking&&!k.borderRadius);m.addClass(f.getClassName(),!0)}else m&&(f.graphic=m.destroy())})},animate:function(d){var l=this,k=this.yAxis,c=l.options,a=this.chart.inverted,b={},f=a?"translateX":"translateY";if(u)if(d)b.scaleY=.001,d=Math.min(k.pos+k.len,Math.max(k.pos,k.toPixels(c.threshold))),a?b.translateX=d-k.len:b.translateY=d,l.clipBox&&l.setClip(),
l.group.attr(b);else{var m=l.group.attr(f);l.group.animate({scaleY:1},y(H(l.options.animation),{step:function(a,c){b[f]=m+c.pos*(k.pos-m);l.group.attr(b)}}));l.animate=null}},remove:function(){var d=this,k=d.chart;k.hasRendered&&k.series.forEach(function(l){l.type===d.type&&(l.isDirty=!0)});G.prototype.remove.apply(d,arguments)}});""});K(I,"parts/BarSeries.js",[I["parts/Globals.js"]],function(d){d=d.seriesType;d("bar","column",null,{inverted:!0});""});K(I,"parts/ScatterSeries.js",[I["parts/Globals.js"]],
function(d){var k=d.Series,w=d.seriesType;w("scatter","line",{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}},{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&
k.prototype.drawGraph.call(this)},applyJitter:function(){var d=this,k=this.options.jitter,w=this.points.length;k&&this.points.forEach(function(y,C){["x","y"].forEach(function(t,G){var u="plot"+t.toUpperCase();if(k[t]&&!y.isNull){var l=d[t+"Axis"];var p=k[t]*l.transA;if(l&&!l.isLog){var q=Math.max(0,y[u]-p);l=Math.min(l.len,y[u]+p);G=1E4*Math.sin(C+G*w);y[u]=q+(l-q)*(G-Math.floor(G));"x"===t&&(y.clientX=y.plotX)}}})})}});d.addEvent(k,"afterTranslate",function(){this.applyJitter&&this.applyJitter()});
""});K(I,"mixins/centered-series.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.isNumber,D=d.deg2rad,H=d.pick,E=d.relativeLength;d.CenteredSeriesMixin={getCenter:function(){var d=this.options,k=this.chart,t=2*(d.slicedOffset||0),w=k.plotWidth-2*t;k=k.plotHeight-2*t;var u=d.center;u=[H(u[0],"50%"),H(u[1],"50%"),d.size||"100%",d.innerSize||0];var l=Math.min(w,k),p;for(p=0;4>p;++p){var q=u[p];d=2>p||2===p&&/%$/.test(q);u[p]=E(q,[w,k,l,u[2]][p])+(d?t:0)}u[3]>u[2]&&(u[3]=u[2]);
return u},getStartAndEndRadians:function(d,k){d=w(d)?d:0;k=w(k)&&k>d&&360>k-d?k:d+360;return{start:D*(d+-90),end:D*(k+-90)}}}});K(I,"parts/PieSeries.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isNumber,H=d.addEvent;k=d.CenteredSeriesMixin;var E=k.getStartAndEndRadians,y=d.merge,C=d.noop,t=d.pick,G=d.Point,u=d.Series,l=d.seriesType,p=d.fireEvent,q=d.setAnimation;l("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,
distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0,connectorShape:"fixedOffset",crookDistance:"70%"},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group",
"dataLabelsGroup"],axisTypes:[],pointAttribs:d.seriesTypes.column.prototype.pointAttribs,animate:function(c){var a=this,b=a.points,d=a.startAngleRad;c||(b.forEach(function(b){var c=b.graphic,f=b.shapeArgs;c&&(c.attr({r:b.startR||a.center[3]/2,start:d,end:d}),c.animate({r:f.r,start:f.start,end:f.end},a.options.animation))}),a.animate=null)},hasData:function(){return!!this.processedXData.length},updateTotals:function(){var c,a=0,b=this.points,d=b.length,m=this.options.ignoreHiddenPoint;for(c=0;c<d;c++){var h=
b[c];a+=m&&!h.visible?0:h.isNull?0:h.y}this.total=a;for(c=0;c<d;c++)h=b[c],h.percentage=0<a&&(h.visible||!m)?h.y/a*100:0,h.total=a},generatePoints:function(){u.prototype.generatePoints.call(this);this.updateTotals()},getX:function(c,a,b){var d=this.center,m=this.radii?this.radii[b.index]:d[2]/2;return d[0]+(a?-1:1)*Math.cos(Math.asin(Math.max(Math.min((c-d[1])/(m+b.labelDistance),1),-1)))*(m+b.labelDistance)+(0<b.labelDistance?(a?-1:1)*this.options.dataLabels.padding:0)},translate:function(c){this.generatePoints();
var a=0,b=this.options,f=b.slicedOffset,m=f+(b.borderWidth||0),h=E(b.startAngle,b.endAngle),l=this.startAngleRad=h.start;h=(this.endAngleRad=h.end)-l;var k=this.points,v=b.dataLabels.distance;b=b.ignoreHiddenPoint;var n,e=k.length;c||(this.center=c=this.getCenter());for(n=0;n<e;n++){var g=k[n];var F=l+a*h;if(!b||g.visible)a+=g.percentage/100;var A=l+a*h;g.shapeType="arc";g.shapeArgs={x:c[0],y:c[1],r:c[2]/2,innerR:c[3]/2,start:Math.round(1E3*F)/1E3,end:Math.round(1E3*A)/1E3};g.labelDistance=t(g.options.dataLabels&&
g.options.dataLabels.distance,v);g.labelDistance=d.relativeLength(g.labelDistance,g.shapeArgs.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,g.labelDistance);A=(A+F)/2;A>1.5*Math.PI?A-=2*Math.PI:A<-Math.PI/2&&(A+=2*Math.PI);g.slicedTranslation={translateX:Math.round(Math.cos(A)*f),translateY:Math.round(Math.sin(A)*f)};var z=Math.cos(A)*c[2]/2;var q=Math.sin(A)*c[2]/2;g.tooltipPos=[c[0]+.7*z,c[1]+.7*q];g.half=A<-Math.PI/2||A>Math.PI/2?1:0;g.angle=A;F=Math.min(m,g.labelDistance/5);g.labelPosition=
{natural:{x:c[0]+z+Math.cos(A)*g.labelDistance,y:c[1]+q+Math.sin(A)*g.labelDistance},"final":{},alignment:0>g.labelDistance?"center":g.half?"right":"left",connectorPosition:{breakAt:{x:c[0]+z+Math.cos(A)*F,y:c[1]+q+Math.sin(A)*F},touchingSliceAt:{x:c[0]+z,y:c[1]+q}}}}p(this,"afterTranslate")},drawEmpty:function(){var c=this.options;if(0===this.total){var a=this.center[0];var b=this.center[1];this.graph||(this.graph=this.chart.renderer.circle(a,b,0).addClass("highcharts-graph").add(this.group));this.graph.animate({"stroke-width":c.borderWidth,
cx:a,cy:b,r:this.center[2]/2,fill:c.fillColor||"none",stroke:c.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())},redrawPoints:function(){var c=this,a=c.chart,b=a.renderer,d,m,h,l,k=c.options.shadow;this.drawEmpty();!k||c.shadowGroup||a.styledMode||(c.shadowGroup=b.g("shadow").attr({zIndex:-1}).add(c.group));c.points.forEach(function(f){var n={};m=f.graphic;if(!f.isNull&&m){l=f.shapeArgs;d=f.getTranslate();if(!a.styledMode){var e=f.shadowGroup;k&&!e&&(e=f.shadowGroup=b.g("shadow").add(c.shadowGroup));
e&&e.attr(d);h=c.pointAttribs(f,f.selected&&"select")}f.delayedRendering?(m.setRadialReference(c.center).attr(l).attr(d),a.styledMode||m.attr(h).attr({"stroke-linejoin":"round"}).shadow(k,e),f.delayedRendering=!1):(m.setRadialReference(c.center),a.styledMode||y(!0,n,h),y(!0,n,l,d),m.animate(n));m.attr({visibility:f.visible?"inherit":"hidden"});m.addClass(f.getClassName())}else m&&(f.graphic=m.destroy())})},drawPoints:function(){var c=this.chart.renderer;this.points.forEach(function(a){a.graphic||
(a.graphic=c[a.shapeType](a.shapeArgs).add(a.series.group),a.delayedRendering=!0)})},searchPoint:C,sortByAngle:function(c,a){c.sort(function(b,c){return void 0!==b.angle&&(c.angle-b.angle)*a})},drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,getCenter:k.getCenter,getSymbol:C,drawGraph:null},{init:function(){G.prototype.init.apply(this,arguments);var c=this;c.name=t(c.name,"Slice");var a=function(a){c.slice("select"===a.type)};H(c,"select",a);H(c,"unselect",a);return c},isValid:function(){return D(this.y)&&
0<=this.y},setVisible:function(c,a){var b=this,d=b.series,m=d.chart,h=d.options.ignoreHiddenPoint;a=t(a,h);c!==b.visible&&(b.visible=b.options.visible=c=void 0===c?!b.visible:c,d.options.data[d.data.indexOf(b)]=b.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(a){if(b[a])b[a][c?"show":"hide"](!0)}),b.legendItem&&m.legend.colorizeItem(b,c),c||"hover"!==b.state||b.setState(""),h&&(d.isDirty=!0),a&&m.redraw())},slice:function(c,a,b){var d=this.series;q(b,d.chart);t(a,!0);this.sliced=
this.options.sliced=w(c)?c:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(c){var a=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(a.x,a.y,a.r+c,a.r+c,{innerR:a.r-1,start:a.start,end:a.end})},connectorShapes:{fixedOffset:function(c,
a,b){var d=a.breakAt;a=a.touchingSliceAt;return["M",c.x,c.y].concat(b.softConnector?["C",c.x+("left"===c.alignment?-5:5),c.y,2*d.x-a.x,2*d.y-a.y,d.x,d.y]:["L",d.x,d.y]).concat(["L",a.x,a.y])},straight:function(c,a){a=a.touchingSliceAt;return["M",c.x,c.y,"L",a.x,a.y]},crookedLine:function(c,a,b){a=a.touchingSliceAt;var f=this.series,m=f.center[0],h=f.chart.plotWidth,l=f.chart.plotLeft;f=c.alignment;var k=this.shapeArgs.r;b=d.relativeLength(b.crookDistance,1);b="left"===f?m+k+(h+l-m-k)*(1-b):l+(m-k)*
b;m=["L",b,c.y];if("left"===f?b>c.x||b<a.x:b<c.x||b>a.x)m=[];return["M",c.x,c.y].concat(m).concat(["L",a.x,a.y])}},getConnectorPath:function(){var c=this.labelPosition,a=this.series.options.dataLabels,b=a.connectorShape,d=this.connectorShapes;d[b]&&(b=d[b]);return b.call(this,{x:c.final.x,y:c.final.y,alignment:c.alignment},c.connectorPosition,a)}});""});K(I,"parts/DataLabels.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isArray,H=k.objectEach,E=k.splat,y=d.arrayMax,
C=d.extend,t=d.format,G=d.merge;k=d.noop;var u=d.pick,l=d.relativeLength,p=d.Series,q=d.seriesTypes,c=d.stableSort;d.distribute=function(a,b,f){function m(a,b){return a.target-b.target}var h,l=!0,k=a,v=[];var n=0;var e=k.reducedLen||b;for(h=a.length;h--;)n+=a[h].size;if(n>e){c(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(n=h=0;n<=e;)n+=a[h].size,h++;v=a.splice(h-1,a.length)}c(a,m);for(a=a.map(function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});l;){for(h=a.length;h--;)l=
a[h],n=(Math.min.apply(0,l.targets)+Math.max.apply(0,l.targets))/2,l.pos=Math.min(Math.max(0,n-l.size*l.align),b-l.size);h=a.length;for(l=!1;h--;)0<h&&a[h-1].pos+a[h-1].size>a[h].pos&&(a[h-1].size+=a[h].size,a[h-1].targets=a[h-1].targets.concat(a[h].targets),a[h-1].align=.5,a[h-1].pos+a[h-1].size>b&&(a[h-1].pos=b-a[h-1].size),a.splice(h,1),l=!0)}k.push.apply(k,v);h=0;a.some(function(a){var c=0;if(a.targets.some(function(){k[h].pos=a.pos+c;if(Math.abs(k[h].pos-k[h].target)>f)return k.slice(0,h+1).forEach(function(a){delete a.pos}),
k.reducedLen=(k.reducedLen||b)-.1*b,k.reducedLen>.1*b&&d.distribute(k,b,f),!0;c+=k[h].size;h++}))return!0});c(k,m)};p.prototype.drawDataLabels=function(){function a(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,">"===b&&a>c||"<"===b&&a<c||">="===b&&a>=c||"<="===b&&a<=c||"=="===b&&a==c||"==="===b&&a===c?!0:!1):!0}function b(a,b){var c=[],d;if(D(a)&&!D(b))c=a.map(function(a){return G(a,b)});else if(D(b)&&!D(a))c=b.map(function(b){return G(a,b)});else if(D(a)||D(b))for(d=Math.max(a.length,
b.length);d--;)c[d]=G(a[d],b[d]);else c=G(a,b);return c}var c=this,m=c.chart,h=c.options,l=h.dataLabels,k=c.points,v,n=c.hasRendered||0,e=d.animObject(h.animation).duration,g=Math.min(e,200),p=!m.renderer.forExport&&u(l.defer,0<g),A=m.renderer;l=b(b(m.options.plotOptions&&m.options.plotOptions.series&&m.options.plotOptions.series.dataLabels,m.options.plotOptions&&m.options.plotOptions[c.type]&&m.options.plotOptions[c.type].dataLabels),l);d.fireEvent(this,"drawDataLabels");if(D(l)||l.enabled||c._hasPointLabels){var q=
c.plotGroup("dataLabelsGroup","data-labels",p&&!n?"hidden":"inherit",l.zIndex||6);p&&(q.attr({opacity:+n}),n||setTimeout(function(){var a=c.dataLabelsGroup;a&&(c.visible&&q.show(!0),a[h.animation?"animate":"attr"]({opacity:1},{duration:g}))},e-g));k.forEach(function(d){v=E(b(l,d.dlOptions||d.options&&d.options.dataLabels));v.forEach(function(b,e){var g=b.enabled&&(!d.isNull||d.dataLabelOnNull)&&a(d,b),f=d.dataLabels?d.dataLabels[e]:d.dataLabel,n=d.connectors?d.connectors[e]:d.connector,l=u(b.distance,
d.labelDistance),v=!f;if(g){var k=d.getLabelConfig();var r=u(b[d.formatPrefix+"Format"],b.format);k=w(r)?t(r,k,m.time):(b[d.formatPrefix+"Formatter"]||b.formatter).call(k,b);r=b.style;var p=b.rotation;m.styledMode||(r.color=u(b.color,r.color,c.color,"#000000"),"contrast"===r.color&&(d.contrastColor=A.getContrast(d.color||c.color),r.color=!w(l)&&b.inside||0>l||h.stacking?d.contrastColor:"#000000"),h.cursor&&(r.cursor=h.cursor));var z={r:b.borderRadius||0,rotation:p,padding:b.padding,zIndex:1};m.styledMode||
(z.fill=b.backgroundColor,z.stroke=b.borderColor,z["stroke-width"]=b.borderWidth);H(z,function(a,b){void 0===a&&delete z[b]})}!f||g&&w(k)?g&&w(k)&&(f?z.text=k:(d.dataLabels=d.dataLabels||[],f=d.dataLabels[e]=p?A.text(k,0,-9999).addClass("highcharts-data-label"):A.label(k,0,-9999,b.shape,null,null,b.useHTML,null,"data-label"),e||(d.dataLabel=f),f.addClass(" highcharts-data-label-color-"+d.colorIndex+" "+(b.className||"")+(b.useHTML?" highcharts-tracker":""))),f.options=b,f.attr(z),m.styledMode||f.css(r).shadow(b.shadow),
f.added||f.add(q),b.textPath&&!b.useHTML&&f.setTextPath(d.getDataLabelPath&&d.getDataLabelPath(f)||d.graphic,b.textPath),c.alignDataLabel(d,f,b,null,v)):(d.dataLabel=d.dataLabel&&d.dataLabel.destroy(),d.dataLabels&&(1===d.dataLabels.length?delete d.dataLabels:delete d.dataLabels[e]),e||delete d.dataLabel,n&&(d.connector=d.connector.destroy(),d.connectors&&(1===d.connectors.length?delete d.connectors:delete d.connectors[e])))})})}d.fireEvent(this,"afterDrawDataLabels")};p.prototype.alignDataLabel=
function(a,b,c,d,h){var f=this.chart,m=this.isCartesian&&f.inverted,l=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),n=u(a.plotY,-9999),e=b.getBBox(),g=c.rotation,k=c.align,A=this.visible&&(a.series.forceDL||f.isInsidePlot(l,Math.round(n),m)||d&&f.isInsidePlot(l,m?d.x+1:d.y+d.height-1,m)),p="justify"===u(c.overflow,"justify");if(A){var q=f.renderer.fontMetrics(f.styledMode?void 0:c.style.fontSize,b).b;d=C({x:m?this.yAxis.len-n:l,y:Math.round(m?this.xAxis.len-l:n),width:0,height:0},d);C(c,{width:e.width,
height:e.height});g?(p=!1,l=f.renderer.rotCorr(q,g),l={x:d.x+c.x+d.width/2+l.x,y:d.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},b[h?"attr":"animate"](l).attr({align:k}),n=(g+720)%360,n=180<n&&360>n,"left"===k?l.y-=n?e.height:0:"center"===k?(l.x-=e.width/2,l.y-=e.height/2):"right"===k&&(l.x-=e.width,l.y-=n?0:e.height),b.placed=!0,b.alignAttr=l):(b.align(c,null,d),l=b.alignAttr);p&&0<=d.height?this.justifyDataLabel(b,c,l,e,d,h):u(c.crop,!0)&&(A=f.isInsidePlot(l.x,l.y)&&f.isInsidePlot(l.x+
e.width,l.y+e.height));if(c.shape&&!g)b[h?"attr":"animate"]({anchorX:m?f.plotWidth-a.plotY:a.plotX,anchorY:m?f.plotHeight-a.plotX:a.plotY})}A||(b.hide(!0),b.placed=!1)};p.prototype.justifyDataLabel=function(a,b,c,d,h,l){var f=this.chart,m=b.align,n=b.verticalAlign,e=a.box?0:a.padding||0;var g=c.x+e;if(0>g){"right"===m?(b.align="left",b.inside=!0):b.x=-g;var k=!0}g=c.x+d.width-e;g>f.plotWidth&&("left"===m?(b.align="right",b.inside=!0):b.x=f.plotWidth-g,k=!0);g=c.y+e;0>g&&("bottom"===n?(b.verticalAlign=
"top",b.inside=!0):b.y=-g,k=!0);g=c.y+d.height-e;g>f.plotHeight&&("top"===n?(b.verticalAlign="bottom",b.inside=!0):b.y=f.plotHeight-g,k=!0);k&&(a.placed=!l,a.align(b,null,h));return k};q.pie&&(q.pie.prototype.dataLabelPositioners={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,b,c,d){return a.getX(c<b.top+2||c>b.bottom-2?d:c,b.half,b)},justify:function(a,b,c){return c[0]+(a.half?-1:1)*(b+a.labelDistance)},alignToPlotEdges:function(a,b,c,d){a=a.getBBox().width;
return b?a+d:c-a-d},alignToConnectors:function(a,b,c,d){var f=0,m;a.forEach(function(a){m=a.dataLabel.getBBox().width;m>f&&(f=m)});return b?f+d:c-f-d}},q.pie.prototype.drawDataLabels=function(){var a=this,b=a.data,c,m=a.chart,h=a.options.dataLabels,l=h.connectorPadding,k,v=m.plotWidth,n=m.plotHeight,e=m.plotLeft,g=Math.round(m.chartWidth/3),q,A=a.center,z=A[2]/2,B=A[1],t,C,E,D,H=[[],[]],L,I,O,K,W=[0,0,0,0],da=a.dataLabelPositioners,X;a.visible&&(h.enabled||a._hasPointLabels)&&(b.forEach(function(a){a.dataLabel&&
a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),p.prototype.drawDataLabels.apply(a),b.forEach(function(a){a.dataLabel&&(a.visible?(H[a.half].push(a),a.dataLabel._pos=null,!w(h.style.width)&&!w(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>g&&(a.dataLabel.css({width:.7*g}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&
1===a.dataLabels.length&&delete a.dataLabels))}),H.forEach(function(b,g){var f=b.length,k=[],r;if(f){a.sortByAngle(b,g-.5);if(0<a.maxLabelDistance){var p=Math.max(0,B-z-a.maxLabelDistance);var q=Math.min(B+z+a.maxLabelDistance,m.plotHeight);b.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,B-z-a.labelDistance),a.bottom=Math.min(B+z+a.labelDistance,m.plotHeight),r=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+r/2,size:r,rank:a.y},k.push(a.distributeBox))});
p=q+r-p;d.distribute(k,p,p/5)}for(K=0;K<f;K++){c=b[K];E=c.labelPosition;t=c.dataLabel;O=!1===c.visible?"hidden":"inherit";I=p=E.natural.y;k&&w(c.distributeBox)&&(void 0===c.distributeBox.pos?O="hidden":(D=c.distributeBox.size,I=da.radialDistributionY(c)));delete c.positionIndex;if(h.justify)L=da.justify(c,z,A);else switch(h.alignTo){case "connectors":L=da.alignToConnectors(b,g,v,e);break;case "plotEdges":L=da.alignToPlotEdges(t,g,v,e);break;default:L=da.radialDistributionX(a,c,I,p)}t._attr={visibility:O,
align:E.alignment};t._pos={x:L+h.x+({left:l,right:-l}[E.alignment]||0),y:I+h.y-10};E.final.x=L;E.final.y=I;u(h.crop,!0)&&(C=t.getBBox().width,p=null,L-C<l&&1===g?(p=Math.round(C-L+l),W[3]=Math.max(p,W[3])):L+C>v-l&&0===g&&(p=Math.round(L+C-v+l),W[1]=Math.max(p,W[1])),0>I-D/2?W[0]=Math.max(Math.round(-I+D/2),W[0]):I+D/2>n&&(W[2]=Math.max(Math.round(I+D/2-n),W[2])),t.sideOverflow=p)}}}),0===y(W)||this.verifyDataLabelOverflow(W))&&(this.placeDataLabels(),this.points.forEach(function(b){X=G(h,b.options.dataLabels);
if(k=u(X.connectorWidth,1)){var c;q=b.connector;if((t=b.dataLabel)&&t._pos&&b.visible&&0<b.labelDistance){O=t._attr.visibility;if(c=!q)b.connector=q=m.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(a.dataLabelsGroup),m.styledMode||q.attr({"stroke-width":k,stroke:X.connectorColor||b.color||"#666666"});q[c?"attr":"animate"]({d:b.getConnectorPath()});q.attr("visibility",O)}else q&&(b.connector=q.destroy())}}))},q.pie.prototype.placeDataLabels=
function(){this.points.forEach(function(a){var b=a.dataLabel,c;b&&a.visible&&((c=b._pos)?(b.sideOverflow&&(b._attr.width=Math.max(b.getBBox().width-b.sideOverflow,0),b.css({width:b._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](c),b.moved=!0):b&&b.attr({y:-9999}));delete a.distributeBox},this)},q.pie.prototype.alignDataLabel=k,q.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,
c=this.options,d=c.center,h=c.minSize||80,k=null!==c.size;if(!k){if(null!==d[0])var p=Math.max(b[2]-Math.max(a[1],a[3]),h);else p=Math.max(b[2]-a[1]-a[3],h),b[0]+=(a[3]-a[1])/2;null!==d[1]?p=Math.max(Math.min(p,b[2]-Math.max(a[0],a[2])),h):(p=Math.max(Math.min(p,b[2]-a[0]-a[2]),h),b[1]+=(a[0]-a[2])/2);p<b[2]?(b[2]=p,b[3]=Math.min(l(c.innerSize||0,p),p),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):k=!0}return k});q.column&&(q.column.prototype.alignDataLabel=function(a,b,c,d,h){var f=
this.chart.inverted,m=a.series,l=a.dlBox||a.shapeArgs,n=u(a.below,a.plotY>u(this.translatedThreshold,m.yAxis.len)),e=u(c.inside,!!this.options.stacking);l&&(d=G(l),0>d.y&&(d.height+=d.y,d.y=0),l=d.y+d.height-m.yAxis.len,0<l&&(d.height-=l),f&&(d={x:m.yAxis.len-d.y-d.height,y:m.xAxis.len-d.x-d.width,width:d.height,height:d.width}),e||(f?(d.x+=n?0:d.width,d.width=0):(d.y+=n?d.height:0,d.height=0)));c.align=u(c.align,!f||e?"center":n?"right":"left");c.verticalAlign=u(c.verticalAlign,f||e?"middle":n?"top":
"bottom");p.prototype.alignDataLabel.call(this,a,b,c,d,h);c.inside&&a.contrastColor&&b.css({color:a.contrastColor})})});K(I,"modules/overlapping-datalabels.src.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.isArray,D=k.objectEach;k=d.Chart;var H=d.pick,E=d.addEvent,y=d.fireEvent;E(k,"render",function(){var d=[];(this.labelCollectors||[]).forEach(function(k){d=d.concat(k())});(this.yAxis||[]).forEach(function(k){k.options.stackLabels&&!k.options.stackLabels.allowOverlap&&
D(k.stacks,function(k){D(k,function(k){d.push(k.label)})})});(this.series||[]).forEach(function(k){var t=k.options.dataLabels;k.visible&&(!1!==t.enabled||k._hasPointLabels)&&k.points.forEach(function(k){k.visible&&(w(k.dataLabels)?k.dataLabels:k.dataLabel?[k.dataLabel]:[]).forEach(function(l){var p=l.options;l.labelrank=H(p.labelrank,k.labelrank,k.shapeArgs&&k.shapeArgs.height);p.allowOverlap||d.push(l)})})});this.hideOverlappingLabels(d)});k.prototype.hideOverlappingLabels=function(d){var k=this,
w=d.length,u=k.renderer,l,p,q;var c=function(a){var b=a.box?0:a.padding||0;var c=0;if(a&&(!a.alignAttr||a.placed)){var d=a.alignAttr||{x:a.attr("x"),y:a.attr("y")};var f=a.parentGroup;a.width||(c=a.getBBox(),a.width=c.width,a.height=c.height,c=u.fontMetrics(null,a.element).h);return{x:d.x+(f.translateX||0)+b,y:d.y+(f.translateY||0)+b-c,width:a.width-2*b,height:a.height-2*b}}};for(p=0;p<w;p++)if(l=d[p])l.oldOpacity=l.opacity,l.newOpacity=1,l.absoluteBox=c(l);d.sort(function(a,b){return(b.labelrank||
0)-(a.labelrank||0)});for(p=0;p<w;p++){var a=(c=d[p])&&c.absoluteBox;for(l=p+1;l<w;++l){var b=(q=d[l])&&q.absoluteBox;!a||!b||c===q||0===c.newOpacity||0===q.newOpacity||b.x>a.x+a.width||b.x+b.width<a.x||b.y>a.y+a.height||b.y+b.height<a.y||((c.labelrank<q.labelrank?c:q).newOpacity=0)}}d.forEach(function(a){var b;if(a){var c=a.newOpacity;a.oldOpacity!==c&&(a.alignAttr&&a.placed?(c?a.show(!0):b=function(){a.hide(!0);a.placed=!1},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b),y(k,
"afterHideOverlappingLabels")):a.attr({opacity:c}));a.isOld=!0}})}});K(I,"parts/Interaction.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isArray,H=k.isObject,E=k.objectEach,y=d.addEvent;k=d.Chart;var C=d.createElement,t=d.css,G=d.defaultOptions,u=d.defaultPlotOptions,l=d.extend,p=d.fireEvent,q=d.hasTouch,c=d.Legend,a=d.merge,b=d.pick,f=d.Point,m=d.Series,h=d.seriesTypes,r=d.svg;var x=d.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart,c=b.pointer,
d=function(a){var b=c.getPointFromEvent(a);void 0!==b&&(c.isDirectTouch=!0,b.onMouseOver(a))},f;a.points.forEach(function(a){f=D(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);f.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){c.onTrackerMouseOut(a)});if(q)a[e].on("touchstart",d);!b.styledMode&&a.options.cursor&&
a[e].css(t).css({cursor:a.options.cursor})}}),a._hasTracking=!0);p(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),f=d.length,h=a.chart,m=h.pointer,l=h.renderer,k=h.options.tooltip.snap,x=a.tracker,u,t=function(){if(h.hoverSeries!==a)a.onMouseOver()},w="rgba(192,192,192,"+(r?.0001:.002)+")";if(f&&!c)for(u=f+1;u--;)"M"===d[u]&&d.splice(u+1,0,d[u+1]-k,d[u+2],"L"),(u&&"M"===d[u]||u===f)&&d.splice(u,0,"L",d[u-2]+k,d[u-
1]);x?x.attr({d:d}):a.graph&&(a.tracker=l.path(d).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),h.styledMode||a.tracker.attr({"stroke-linejoin":"round",stroke:w,fill:c?w:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*k)}),[a.tracker,a.markerGroup].forEach(function(a){a.addClass("highcharts-tracker").on("mouseover",t).on("mouseout",function(a){m.onTrackerMouseOut(a)});b.cursor&&!h.styledMode&&a.css({cursor:b.cursor});
if(q)a.on("touchstart",t)}));p(this,"afterDrawTracker")}};h.column&&(h.column.prototype.drawTracker=x.drawTrackerPoint);h.pie&&(h.pie.prototype.drawTracker=x.drawTrackerPoint);h.scatter&&(h.scatter.prototype.drawTracker=x.drawTrackerPoint);l(c.prototype,{setItemEvents:function(b,c,d){var e=this,h=e.chart.renderer.boxWrapper,n=b instanceof f,m="highcharts-legend-"+(n?"point":"series")+"-active",l=e.chart.styledMode;(d?c:b.legendGroup).on("mouseover",function(){b.visible&&e.allItems.forEach(function(a){b!==
a&&a.setState("inactive",!n)});b.setState("hover");b.visible&&h.addClass(m);l||c.css(e.options.itemHoverStyle)}).on("mouseout",function(){e.chart.styledMode||c.css(a(b.visible?e.itemStyle:e.itemHiddenStyle));e.allItems.forEach(function(a){b!==a&&a.setState("",!n)});h.removeClass(m);b.setState()}).on("click",function(a){var c=function(){b.setVisible&&b.setVisible();e.allItems.forEach(function(a){b!==a&&a.setState(b.visible?"inactive":"",!n)})};h.removeClass(m);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",
a,c):p(b,"legendItemClick",a,c)})},createCheckboxForItem:function(a){a.checkbox=C("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);y(a.checkbox,"click",function(b){p(a.series||a,"checkboxClick",{checked:b.target.checked,item:a},function(){a.select()})})}});l(k.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=G.lang,d=b.options.chart.resetZoomButton,f=d.theme,h=
f.states,m="chart"===d.relativeTo||"spaceBox"===d.relativeTo?null:"plotBox";p(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,f,h&&h.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,m)});p(this,"afterShowResetZoom")},zoomOut:function(){p(this,"selection",{resetSelection:!0},this.zoom)},zoom:function(a){var c=this,d,g=c.pointer,f=!1,h=c.inverted?g.mouseDownX:g.mouseDownY;!a||
a.resetSelection?(c.axes.forEach(function(a){d=a.zoom()}),g.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var b=a.axis,e=c.inverted?b.left:b.top,n=c.inverted?e+b.width:e+b.height,m=b.isXAxis,l=!1;if(!m&&h>=e&&h<=n||m||!w(h))l=!0;g[m?"zoomX":"zoomY"]&&l&&(d=b.zoom(a.min,a.max),b.displayBtn&&(f=!0))});var m=c.resetZoomButton;f&&!m?c.showResetZoom():!f&&H(m)&&(c.resetZoomButton=m.destroy());d&&c.redraw(b(c.options.chart.animation,a&&a.animation,100>c.pointCount))},pan:function(a,b){var c=
this,d=c.hoverPoints,f;p(this,"pan",{originalEvent:a},function(){d&&d.forEach(function(a){a.setState()});("xy"===b?[1,0]:[1]).forEach(function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,e=a[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var g=c[d],h=(b.pointRange||0)/2,n=b.reversed&&!c.inverted||!b.reversed&&c.inverted?-1:1,m=b.getExtremes(),l=b.toValue(g-e,!0)+h*n;n=b.toValue(g+b.len-e,!0)-h*n;var k=n<l;g=k?n:l;l=k?l:n;n=Math.min(m.dataMin,h?m.min:b.toValue(b.toPixels(m.min)-b.minPixelPadding));
h=Math.max(m.dataMax,h?m.max:b.toValue(b.toPixels(m.max)+b.minPixelPadding));k=n-g;0<k&&(l+=k,g=n);k=l-h;0<k&&(l=h,g-=k);b.series.length&&g!==m.min&&l!==m.max&&(b.setExtremes(g,l,!1,!1,{trigger:"pan"}),f=!0);c[d]=e});f&&c.redraw(!1);t(c.container,{cursor:"move"})})}});l(f.prototype,{select:function(a,c){var d=this,g=d.series,f=g.chart;this.selectedStaging=a=b(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;g.options.data[g.data.indexOf(d)]=
d.options;d.setState(a&&"select");c||f.getSelectedPoints().forEach(function(a){var b=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,b.options.data[b.data.indexOf(a)]=a.options,a.setState(f.hoverPoints&&b.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=
this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=a(b.series.options.point,b.options).events;b.events=c;E(c,function(a,c){d.isFunction(a)&&y(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,c){var d=this.series,g=this.state,f=d.options.states[a||"normal"]||{},h=u[d.type].marker&&d.options.marker,n=
h&&!1===h.enabled,m=h&&h.states&&h.states[a||"normal"]||{},k=!1===m.enabled,r=d.stateMarkerGraphic,q=this.marker||{},v=d.chart,x=d.halo,t,w=h&&d.markerAttribs;a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===f.enabled||a&&(k||n&&!1===m.enabled)||a&&q.states&&q.states[a]&&!1===q.states[a].enabled)){this.state=a;w&&(t=d.markerAttribs(this,a));if(this.graphic){g&&this.graphic.removeClass("highcharts-point-"+g);a&&this.graphic.addClass("highcharts-point-"+a);if(!v.styledMode){var y=
d.pointAttribs(this,a);var C=b(v.options.chart.animation,f.animation);d.options.inactiveOtherPoints&&((this.dataLabels||[]).forEach(function(a){a&&a.animate({opacity:y.opacity},C)}),this.connector&&this.connector.animate({opacity:y.opacity},C));this.graphic.animate(y,C)}t&&this.graphic.animate(t,b(v.options.chart.animation,m.animation,h.animation));r&&r.hide()}else{if(a&&m){g=q.symbol||d.symbol;r&&r.currentSymbol!==g&&(r=r.destroy());if(t)if(r)r[c?"animate":"attr"]({x:t.x,y:t.y});else g&&(d.stateMarkerGraphic=
r=v.renderer.symbol(g,t.x,t.y,t.width,t.height).add(d.markerGroup),r.currentSymbol=g);!v.styledMode&&r&&r.attr(d.pointAttribs(this,a))}r&&(r[a&&this.isInside?"show":"hide"](),r.element.point=this)}a=f.halo;f=(r=this.graphic||r)&&r.visibility||"inherit";a&&a.size&&r&&"hidden"!==f?(x||(d.halo=x=v.renderer.path().add(r.parentGroup)),x.show()[c?"animate":"attr"]({d:this.haloPath(a.size)}),x.attr({"class":"highcharts-halo highcharts-color-"+b(this.colorIndex,d.colorIndex)+(this.className?" "+this.className:
""),visibility:f,zIndex:-1}),x.point=this,v.styledMode||x.attr(l({fill:this.color||d.color,"fill-opacity":a.opacity},a.attributes))):x&&x.point&&x.point.haloPath&&x.animate({d:x.point.haloPath(0)},null,x.hide);p(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});l(m.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&p(this,"mouseOver");
this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&p(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();b.series.forEach(function(a){a.setState("",!0)})},setState:function(a,c){var d=this,g=d.options,f=d.graph,h=g.inactiveOtherPoints,n=g.states,m=g.lineWidth,l=g.opacity,k=b(n[a||"normal"]&&n[a||"normal"].animation,d.chart.options.chart.animation);
g=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(b){b&&(d.state&&b.removeClass("highcharts-series-"+d.state),a&&b.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(n[a]&&!1===n[a].enabled)return;a&&(m=n[a].lineWidth||m+(n[a].lineWidthPlus||0),l=b(n[a].opacity,l));if(f&&!f.dashstyle)for(n={"stroke-width":m},f.animate(n,k);d["zone-graph-"+g];)d["zone-graph-"+g].attr(n),g+=1;h||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&
a.animate({opacity:l},k)})}c&&h&&d.points&&d.setAllPointsToState(a)},setAllPointsToState:function(a){this.points.forEach(function(b){b.setState&&b.setState(a)})},setVisible:function(a,b){var c=this,d=c.chart,f=c.legendItem,h=d.options.chart.ignoreHiddenSeries,n=c.visible;var m=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!n:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(c[a])c[a][m]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===
c)c.onMouseOut();f&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});c.linkedSeries.forEach(function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);p(c,m);!1!==b&&d.redraw()},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=this.options.selected=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);p(this,a?"select":"unselect")},drawTracker:x.drawTrackerGraph})});
K(I,"parts/Responsive.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.isArray,D=k.isObject,H=k.objectEach,E=k.splat;k=d.Chart;var y=d.pick;k.prototype.setResponsive=function(k,t){var w=this.options.responsive,u=[],l=this.currentResponsive;!t&&w&&w.rules&&w.rules.forEach(function(l){void 0===l._id&&(l._id=d.uniqueKey());this.matchResponsiveRule(l,u)},this);t=d.merge.apply(0,u.map(function(l){return d.find(w.rules,function(d){return d._id===l}).chartOptions}));t.isResponsiveOptions=
!0;u=u.toString()||void 0;u!==(l&&l.ruleIds)&&(l&&this.update(l.undoOptions,k,!0),u?(l=this.currentOptions(t),l.isResponsiveOptions=!0,this.currentResponsive={ruleIds:u,mergedOptions:t,undoOptions:l},this.update(t,k,!0)):this.currentResponsive=void 0)};k.prototype.matchResponsiveRule=function(d,k){var t=d.condition;(t.callback||function(){return this.chartWidth<=y(t.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=y(t.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=y(t.minWidth,0)&&this.chartHeight>=y(t.minHeight,
0)}).call(this)&&k.push(d._id)};k.prototype.currentOptions=function(d){function k(d,p,q,c){var a;H(d,function(b,d){if(!c&&-1<y.collectionsWithUpdate.indexOf(d))for(b=E(b),q[d]=[],a=0;a<b.length;a++)p[d][a]&&(q[d][a]={},k(b[a],p[d][a],q[d][a],c+1));else D(b)?(q[d]=w(b)?[]:{},k(b,p[d]||{},q[d],c+1)):q[d]=void 0===p[d]?null:p[d]})}var y=this,u={};k(d,this.options,u,0);return u}});K(I,"masters/highcharts.src.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=d.extend;w(d,{attr:k.attr,
defined:k.defined,erase:k.erase,isArray:k.isArray,isClass:k.isClass,isDOMElement:k.isDOMElement,isNumber:k.isNumber,isObject:k.isObject,isString:k.isString,objectEach:k.objectEach,pInt:k.pInt,splat:k.splat});return d});K(I,"parts/Scrollbar.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){function w(a,b,c){this.init(a,b,c)}var D=k.defined,H=d.addEvent;k=d.Axis;var E=d.correctFloat,y=d.defaultOptions,C=d.destroyObjectProperties,t=d.fireEvent,G=d.hasTouch,u=d.merge,l=d.pick,p=d.removeEvent,
q,c={height:d.isTouchDevice?20:14,barBorderRadius:0,buttonBorderRadius:0,liveRedraw:void 0,margin:10,minWidth:6,step:.2,zIndex:3,barBackgroundColor:"#cccccc",barBorderWidth:1,barBorderColor:"#cccccc",buttonArrowColor:"#333333",buttonBackgroundColor:"#e6e6e6",buttonBorderColor:"#cccccc",buttonBorderWidth:1,rifleColor:"#333333",trackBackgroundColor:"#f2f2f2",trackBorderColor:"#f2f2f2",trackBorderWidth:1};y.scrollbar=u(!0,c,y.scrollbar);d.swapXY=q=function(a,b){var c=a.length;if(b)for(b=0;b<c;b+=3){var d=
a[b+1];a[b+1]=a[b+2];a[b+2]=d}return a};w.prototype={init:function(a,b,d){this.scrollbarButtons=[];this.renderer=a;this.userOptions=b;this.options=u(c,b);this.chart=d;this.size=l(this.options.size,this.options.height);b.enabled&&(this.render(),this.initEvents(),this.addEvents())},render:function(){var a=this.renderer,b=this.options,c=this.size,d=this.chart.styledMode,h;this.group=h=a.g("scrollbar").attr({zIndex:b.zIndex,translateY:-99999}).add();this.track=a.rect().addClass("highcharts-scrollbar-track").attr({x:0,
r:b.trackBorderRadius||0,height:c,width:c}).add(h);d||this.track.attr({fill:b.trackBackgroundColor,stroke:b.trackBorderColor,"stroke-width":b.trackBorderWidth});this.trackBorderWidth=this.track.strokeWidth();this.track.attr({y:-this.trackBorderWidth%2/2});this.scrollbarGroup=a.g().add(h);this.scrollbar=a.rect().addClass("highcharts-scrollbar-thumb").attr({height:c,width:c,r:b.barBorderRadius||0}).add(this.scrollbarGroup);this.scrollbarRifles=a.path(q(["M",-3,c/4,"L",-3,2*c/3,"M",0,c/4,"L",0,2*c/3,
"M",3,c/4,"L",3,2*c/3],b.vertical)).addClass("highcharts-scrollbar-rifles").add(this.scrollbarGroup);d||(this.scrollbar.attr({fill:b.barBackgroundColor,stroke:b.barBorderColor,"stroke-width":b.barBorderWidth}),this.scrollbarRifles.attr({stroke:b.rifleColor,"stroke-width":1}));this.scrollbarStrokeWidth=this.scrollbar.strokeWidth();this.scrollbarGroup.translate(-this.scrollbarStrokeWidth%2/2,-this.scrollbarStrokeWidth%2/2);this.drawScrollbarButton(0);this.drawScrollbarButton(1)},position:function(a,
b,c,d){var f=this.options.vertical,m=0,l=this.rendered?"animate":"attr";this.x=a;this.y=b+this.trackBorderWidth;this.width=c;this.xOffset=this.height=d;this.yOffset=m;f?(this.width=this.yOffset=c=m=this.size,this.xOffset=b=0,this.barWidth=d-2*c,this.x=a+=this.options.margin):(this.height=this.xOffset=d=b=this.size,this.barWidth=c-2*d,this.y+=this.options.margin);this.group[l]({translateX:a,translateY:this.y});this.track[l]({width:c,height:d});this.scrollbarButtons[1][l]({translateX:f?0:c-b,translateY:f?
d-m:0})},drawScrollbarButton:function(a){var b=this.renderer,c=this.scrollbarButtons,d=this.options,h=this.size;var l=b.g().add(this.group);c.push(l);l=b.rect().addClass("highcharts-scrollbar-button").add(l);this.chart.styledMode||l.attr({stroke:d.buttonBorderColor,"stroke-width":d.buttonBorderWidth,fill:d.buttonBackgroundColor});l.attr(l.crisp({x:-.5,y:-.5,width:h+1,height:h+1,r:d.buttonBorderRadius},l.strokeWidth()));l=b.path(q(["M",h/2+(a?-1:1),h/2-3,"L",h/2+(a?-1:1),h/2+3,"L",h/2+(a?2:-2),h/2],
d.vertical)).addClass("highcharts-scrollbar-arrow").add(c[a]);this.chart.styledMode||l.attr({fill:d.buttonArrowColor})},setRange:function(a,b){var c=this.options,d=c.vertical,h=c.minWidth,l=this.barWidth,k,p=!this.rendered||this.hasDragged||this.chart.navigator&&this.chart.navigator.hasDragged?"attr":"animate";if(D(l)){a=Math.max(a,0);var n=Math.ceil(l*a);this.calculatedWidth=k=E(l*Math.min(b,1)-n);k<h&&(n=(l-h+k)*a,k=h);h=Math.floor(n+this.xOffset+this.yOffset);l=k/2-.5;this.from=a;this.to=b;d?(this.scrollbarGroup[p]({translateY:h}),
this.scrollbar[p]({height:k}),this.scrollbarRifles[p]({translateY:l}),this.scrollbarTop=h,this.scrollbarLeft=0):(this.scrollbarGroup[p]({translateX:h}),this.scrollbar[p]({width:k}),this.scrollbarRifles[p]({translateX:l}),this.scrollbarLeft=h,this.scrollbarTop=0);12>=k?this.scrollbarRifles.hide():this.scrollbarRifles.show(!0);!1===c.showFull&&(0>=a&&1<=b?this.group.hide():this.group.show());this.rendered=!0}},initEvents:function(){var a=this;a.mouseMoveHandler=function(b){var c=a.chart.pointer.normalize(b),
d=a.options.vertical?"chartY":"chartX",h=a.initPositions;!a.grabbedCenter||b.touches&&0===b.touches[0][d]||(c=a.cursorToScrollbarPosition(c)[d],d=a[d],d=c-d,a.hasDragged=!0,a.updatePosition(h[0]+d,h[1]+d),a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b}))};a.mouseUpHandler=function(b){a.hasDragged&&t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMType:b.type,DOMEvent:b});a.grabbedCenter=a.hasDragged=a.chartX=a.chartY=null};a.mouseDownHandler=
function(b){b=a.chart.pointer.normalize(b);b=a.cursorToScrollbarPosition(b);a.chartX=b.chartX;a.chartY=b.chartY;a.initPositions=[a.from,a.to];a.grabbedCenter=!0};a.buttonToMinClick=function(b){var c=E(a.to-a.from)*a.options.step;a.updatePosition(E(a.from-c),E(a.to-c));t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};a.buttonToMaxClick=function(b){var c=(a.to-a.from)*a.options.step;a.updatePosition(a.from+c,a.to+c);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})};
a.trackClick=function(b){var c=a.chart.pointer.normalize(b),d=a.to-a.from,h=a.y+a.scrollbarTop,l=a.x+a.scrollbarLeft;a.options.vertical&&c.chartY>h||!a.options.vertical&&c.chartX>l?a.updatePosition(a.from+d,a.to+d):a.updatePosition(a.from-d,a.to-d);t(a,"changed",{from:a.from,to:a.to,trigger:"scrollbar",DOMEvent:b})}},cursorToScrollbarPosition:function(a){var b=this.options;b=b.minWidth>this.calculatedWidth?b.minWidth:0;return{chartX:(a.chartX-this.x-this.xOffset)/(this.barWidth-b),chartY:(a.chartY-
this.y-this.yOffset)/(this.barWidth-b)}},updatePosition:function(a,b){1<b&&(a=E(1-E(b-a)),b=1);0>a&&(b=E(b-a),a=0);this.from=a;this.to=b},update:function(a){this.destroy();this.init(this.chart.renderer,u(!0,this.options,a),this.chart)},addEvents:function(){var a=this.options.inverted?[1,0]:[0,1],b=this.scrollbarButtons,c=this.scrollbarGroup.element,d=this.mouseDownHandler,h=this.mouseMoveHandler,l=this.mouseUpHandler;a=[[b[a[0]].element,"click",this.buttonToMinClick],[b[a[1]].element,"click",this.buttonToMaxClick],
[this.track.element,"click",this.trackClick],[c,"mousedown",d],[c.ownerDocument,"mousemove",h],[c.ownerDocument,"mouseup",l]];G&&a.push([c,"touchstart",d],[c.ownerDocument,"touchmove",h],[c.ownerDocument,"touchend",l]);a.forEach(function(a){H.apply(null,a)});this._events=a},removeEvents:function(){this._events.forEach(function(a){p.apply(null,a)});this._events.length=0},destroy:function(){var a=this.chart.scroller;this.removeEvents();["track","scrollbarRifles","scrollbar","scrollbarGroup","group"].forEach(function(a){this[a]&&
this[a].destroy&&(this[a]=this[a].destroy())},this);a&&this===a.scrollbar&&(a.scrollbar=null,C(a.scrollbarButtons))}};d.Scrollbar||(H(k,"afterInit",function(){var a=this;a.options&&a.options.scrollbar&&a.options.scrollbar.enabled&&(a.options.scrollbar.vertical=!a.horiz,a.options.startOnTick=a.options.endOnTick=!1,a.scrollbar=new w(a.chart.renderer,a.options.scrollbar,a.chart),H(a.scrollbar,"changed",function(b){var c=Math.min(l(a.options.min,a.min),a.min,a.dataMin),m=Math.max(l(a.options.max,a.max),
a.max,a.dataMax)-c;if(a.horiz&&!a.reversed||!a.horiz&&a.reversed){var h=c+m*this.to;c+=m*this.from}else h=c+m*(1-this.from),c+=m*(1-this.to);l(this.options.liveRedraw,d.svg&&!d.isTouchDevice&&!this.chart.isBoosting)||"mouseup"===b.DOMType||!D(b.DOMType)?a.setExtremes(c,h,!0,"mousemove"!==b.DOMType,b):this.setRange(this.from,this.to)}))}),H(k,"afterRender",function(){var a=Math.min(l(this.options.min,this.min),this.min,l(this.dataMin,this.min)),b=Math.max(l(this.options.max,this.max),this.max,l(this.dataMax,
this.max)),c=this.scrollbar,d=this.axisTitleMargin+(this.titleOffset||0),h=this.chart.scrollbarsOffsets,k=this.options.margin||0;c&&(this.horiz?(this.opposite||(h[1]+=d),c.position(this.left,this.top+this.height+2+h[1]-(this.opposite?k:0),this.width,this.height),this.opposite||(h[1]+=k),d=1):(this.opposite&&(h[0]+=d),c.position(this.left+this.width+2+h[0]-(this.opposite?0:k),this.top,this.width,this.height),this.opposite&&(h[0]+=k),d=0),h[d]+=c.size+c.options.margin,isNaN(a)||isNaN(b)||!D(this.min)||
!D(this.max)||this.min===this.max?c.setRange(0,1):(h=(this.min-a)/(b-a),a=(this.max-a)/(b-a),this.horiz&&!this.reversed||!this.horiz&&this.reversed?c.setRange(h,a):c.setRange(1-a,1-h)))}),H(k,"afterGetOffset",function(){var a=this.horiz?2:1,b=this.scrollbar;b&&(this.chart.scrollbarsOffsets=[0,0],this.chart.axisOffset[a]+=b.size+b.options.margin)}),d.Scrollbar=w)});K(I,"parts/Navigator.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){function w(a){this.init(a)}var D=k.defined,H=k.erase,
E=k.isArray,y=k.isNumber,C=k.splat,t=d.addEvent,G=d.Axis;k=d.Chart;var u=d.color,l=d.defaultOptions,p=d.destroyObjectProperties,q=d.extend,c=d.hasTouch,a=d.isTouchDevice,b=d.merge,f=d.pick,m=d.removeEvent,h=d.Scrollbar,r=d.Series,x=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];b=[].filter.call(b,y);if(b.length)return Math[a].apply(0,b)};var v=void 0===d.seriesTypes.areaspline?"line":"areaspline";q(l,{navigator:{height:40,margin:25,maskInside:!0,handles:{width:7,height:15,
symbols:["navigator-handle","navigator-handle"],enabled:!0,lineWidth:1,backgroundColor:"#f2f2f2",borderColor:"#999999"},maskFill:u("#6685c2").setOpacity(.3).get(),outlineColor:"#cccccc",outlineWidth:1,series:{type:v,fillOpacity:.05,lineWidth:1,compare:null,dataGrouping:{approximation:"average",enabled:!0,groupPixelWidth:2,smoothed:!0,units:[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2,3,4]],["week",[1,
2,3]],["month",[1,3,6]],["year",null]]},dataLabels:{enabled:!1,zIndex:2},id:"highcharts-navigator-series",className:"highcharts-navigator-series",lineColor:null,marker:{enabled:!1},pointRange:0,threshold:null},xAxis:{overscroll:0,className:"highcharts-navigator-xaxis",tickLength:0,lineWidth:0,gridLineColor:"#e6e6e6",gridLineWidth:1,tickPixelInterval:200,labels:{align:"left",style:{color:"#999999"},x:3,y:-4},crosshair:!1},yAxis:{className:"highcharts-navigator-yaxis",gridLineWidth:0,startOnTick:!1,
endOnTick:!1,minPadding:.1,maxPadding:.1,labels:{enabled:!1},crosshair:!1,title:{text:null},tickLength:0,tickWidth:0}}});d.Renderer.prototype.symbols["navigator-handle"]=function(a,b,c,d,f){a=f.width/2;b=Math.round(a/3)+.5;f=f.height;return["M",-a-1,.5,"L",a,.5,"L",a,f+.5,"L",-a-1,f+.5,"L",-a-1,.5,"M",-b,4,"L",-b,f-3,"M",b-1,4,"L",b-1,f-3]};G.prototype.toFixedRange=function(a,b,c,d){var e=this.chart&&this.chart.fixedRange;a=f(c,this.translate(a,!0,!this.horiz));b=f(d,this.translate(b,!0,!this.horiz));
c=e&&(b-a)/e;.7<c&&1.3>c&&(d?a=b-e:b=a+e);y(a)&&y(b)||(a=b=void 0);return{min:a,max:b}};w.prototype={drawHandle:function(a,b,c,d){var e=this.navigatorOptions.handles.height;this.handles[b][d](c?{translateX:Math.round(this.left+this.height/2),translateY:Math.round(this.top+parseInt(a,10)+.5-e)}:{translateX:Math.round(this.left+parseInt(a,10)),translateY:Math.round(this.top+this.height/2-e/2-1)})},drawOutline:function(a,b,c,d){var e=this.navigatorOptions.maskInside,g=this.outline.strokeWidth(),f=g/
2;g=g%2/2;var h=this.outlineHeight,n=this.scrollbarHeight,l=this.size,m=this.left-n,k=this.top;c?(m-=f,c=k+b+g,b=k+a+g,a=["M",m+h,k-n-g,"L",m+h,c,"L",m,c,"L",m,b,"L",m+h,b,"L",m+h,k+l+n].concat(e?["M",m+h,c-f,"L",m+h,b+f]:[])):(a+=m+n-g,b+=m+n-g,k+=f,a=["M",m,k,"L",a,k,"L",a,k+h,"L",b,k+h,"L",b,k,"L",m+l+2*n,k].concat(e?["M",a-f,k,"L",b+f,k]:[]));this.outline[d]({d:a})},drawMasks:function(a,b,c,d){var e=this.left,g=this.top,f=this.height;if(c){var h=[e,e,e];var n=[g,g+a,g+b];var l=[f,f,f];var m=[a,
b-a,this.size-b]}else h=[e,e+a,e+b],n=[g,g,g],l=[a,b-a,this.size-b],m=[f,f,f];this.shades.forEach(function(a,b){a[d]({x:h[b],y:n[b],width:l[b],height:m[b]})})},renderElements:function(){var a=this,b=a.navigatorOptions,c=b.maskInside,d=a.chart,f=d.renderer,h,l={cursor:d.inverted?"ns-resize":"ew-resize"};a.navigatorGroup=h=f.g("navigator").attr({zIndex:8,visibility:"hidden"}).add();[!c,c,!c].forEach(function(c,e){a.shades[e]=f.rect().addClass("highcharts-navigator-mask"+(1===e?"-inside":"-outside")).add(h);
d.styledMode||a.shades[e].attr({fill:c?b.maskFill:"rgba(0,0,0,0)"}).css(1===e&&l)});a.outline=f.path().addClass("highcharts-navigator-outline").add(h);d.styledMode||a.outline.attr({"stroke-width":b.outlineWidth,stroke:b.outlineColor});b.handles.enabled&&[0,1].forEach(function(c){b.handles.inverted=d.inverted;a.handles[c]=f.symbol(b.handles.symbols[c],-b.handles.width/2-1,0,b.handles.width,b.handles.height,b.handles);a.handles[c].attr({zIndex:7-c}).addClass("highcharts-navigator-handle highcharts-navigator-handle-"+
["left","right"][c]).add(h);if(!d.styledMode){var e=b.handles;a.handles[c].attr({fill:e.backgroundColor,stroke:e.borderColor,"stroke-width":e.lineWidth}).css(l)}})},update:function(a){(this.series||[]).forEach(function(a){a.baseSeries&&delete a.baseSeries.navigatorSeries});this.destroy();b(!0,this.chart.options.navigator,this.options,a);this.init(this.chart)},render:function(a,b,c,h){var e=this.chart,g=this.scrollbarHeight,n,l=this.xAxis;var m=l.fake?e.xAxis[0]:l;var k=this.navigatorEnabled,p,r=this.rendered;
var q=e.inverted;var v=e.xAxis[0].minRange,u=e.xAxis[0].options.maxRange;if(!this.hasDragged||D(c)){if(!y(a)||!y(b))if(r)c=0,h=f(l.width,m.width);else return;this.left=f(l.left,e.plotLeft+g+(q?e.plotWidth:0));this.size=p=n=f(l.len,(q?e.plotHeight:e.plotWidth)-2*g);e=q?g:n+2*g;c=f(c,l.toPixels(a,!0));h=f(h,l.toPixels(b,!0));y(c)&&Infinity!==Math.abs(c)||(c=0,h=e);a=l.toValue(c,!0);b=l.toValue(h,!0);var x=Math.abs(d.correctFloat(b-a));x<v?this.grabbedLeft?c=l.toPixels(b-v,!0):this.grabbedRight&&(h=
l.toPixels(a+v,!0)):D(u)&&x>u&&(this.grabbedLeft?c=l.toPixels(b-u,!0):this.grabbedRight&&(h=l.toPixels(a+u,!0)));this.zoomedMax=Math.min(Math.max(c,h,0),p);this.zoomedMin=Math.min(Math.max(this.fixedWidth?this.zoomedMax-this.fixedWidth:Math.min(c,h),0),p);this.range=this.zoomedMax-this.zoomedMin;p=Math.round(this.zoomedMax);c=Math.round(this.zoomedMin);k&&(this.navigatorGroup.attr({visibility:"visible"}),r=r&&!this.hasDragged?"animate":"attr",this.drawMasks(c,p,q,r),this.drawOutline(c,p,q,r),this.navigatorOptions.handles.enabled&&
(this.drawHandle(c,0,q,r),this.drawHandle(p,1,q,r)));this.scrollbar&&(q?(q=this.top-g,m=this.left-g+(k||!m.opposite?0:(m.titleOffset||0)+m.axisTitleMargin),g=n+2*g):(q=this.top+(k?this.height:-g),m=this.left-g),this.scrollbar.position(m,q,e,g),this.scrollbar.setRange(this.zoomedMin/(n||1),this.zoomedMax/(n||1)));this.rendered=!0}},addMouseEvents:function(){var a=this,b=a.chart,d=b.container,f=[],h,l;a.mouseMoveHandler=h=function(b){a.onMouseMove(b)};a.mouseUpHandler=l=function(b){a.onMouseUp(b)};
f=a.getPartsEvents("mousedown");f.push(t(d,"mousemove",h),t(d.ownerDocument,"mouseup",l));c&&(f.push(t(d,"touchmove",h),t(d.ownerDocument,"touchend",l)),f.concat(a.getPartsEvents("touchstart")));a.eventsToUnbind=f;a.series&&a.series[0]&&f.push(t(a.series[0].xAxis,"foundExtremes",function(){b.navigator.modifyNavigatorAxisExtremes()}))},getPartsEvents:function(a){var b=this,c=[];["shades","handles"].forEach(function(d){b[d].forEach(function(e,g){c.push(t(e.element,a,function(a){b[d+"Mousedown"](a,g)}))})});
return c},shadesMousedown:function(a,b){a=this.chart.pointer.normalize(a);var c=this.chart,d=this.xAxis,e=this.zoomedMin,f=this.left,h=this.size,n=this.range,l=a.chartX;c.inverted&&(l=a.chartY,f=this.top);if(1===b)this.grabbedCenter=l,this.fixedWidth=n,this.dragOffset=l-e;else{a=l-f-n/2;if(0===b)a=Math.max(0,a);else if(2===b&&a+n>=h)if(a=h-n,this.reversedExtremes){a-=n;var m=this.getUnionExtremes().dataMin}else var k=this.getUnionExtremes().dataMax;a!==e&&(this.fixedWidth=n,b=d.toFixedRange(a,a+n,
m,k),D(b.min)&&c.xAxis[0].setExtremes(Math.min(b.min,b.max),Math.max(b.min,b.max),!0,null,{trigger:"navigator"}))}},handlesMousedown:function(a,b){this.chart.pointer.normalize(a);a=this.chart;var c=a.xAxis[0],d=this.reversedExtremes;0===b?(this.grabbedLeft=!0,this.otherHandlePos=this.zoomedMax,this.fixedExtreme=d?c.min:c.max):(this.grabbedRight=!0,this.otherHandlePos=this.zoomedMin,this.fixedExtreme=d?c.max:c.min);a.fixedRange=null},onMouseMove:function(b){var c=this,g=c.chart,h=c.left,n=c.navigatorSize,
l=c.range,m=c.dragOffset,k=g.inverted;b.touches&&0===b.touches[0].pageX||(b=g.pointer.normalize(b),g=b.chartX,k&&(h=c.top,g=b.chartY),c.grabbedLeft?(c.hasDragged=!0,c.render(0,0,g-h,c.otherHandlePos)):c.grabbedRight?(c.hasDragged=!0,c.render(0,0,c.otherHandlePos,g-h)):c.grabbedCenter&&(c.hasDragged=!0,g<m?g=m:g>n+m-l&&(g=n+m-l),c.render(0,0,g-m,g-m+l)),c.hasDragged&&c.scrollbar&&f(c.scrollbar.options.liveRedraw,d.svg&&!a&&!this.chart.isBoosting)&&(b.DOMType=b.type,setTimeout(function(){c.onMouseUp(b)},
0)))},onMouseUp:function(a){var b=this.chart,c=this.xAxis,d=this.scrollbar,f=a.DOMEvent||a;if(this.hasDragged&&(!d||!d.hasDragged)||"scrollbar"===a.trigger){d=this.getUnionExtremes();if(this.zoomedMin===this.otherHandlePos)var h=this.fixedExtreme;else if(this.zoomedMax===this.otherHandlePos)var n=this.fixedExtreme;this.zoomedMax===this.size&&(n=this.reversedExtremes?d.dataMin:d.dataMax);0===this.zoomedMin&&(h=this.reversedExtremes?d.dataMax:d.dataMin);c=c.toFixedRange(this.zoomedMin,this.zoomedMax,
h,n);D(c.min)&&b.xAxis[0].setExtremes(Math.min(c.min,c.max),Math.max(c.min,c.max),!0,this.hasDragged?!1:null,{trigger:"navigator",triggerOp:"navigator-drag",DOMEvent:f})}"mousemove"!==a.DOMType&&(this.grabbedLeft=this.grabbedRight=this.grabbedCenter=this.fixedWidth=this.fixedExtreme=this.otherHandlePos=this.hasDragged=this.dragOffset=null)},removeEvents:function(){this.eventsToUnbind&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind=void 0);this.removeBaseSeriesEvents()},removeBaseSeriesEvents:function(){var a=
this.baseSeries||[];this.navigatorEnabled&&a[0]&&(!1!==this.navigatorOptions.adaptToUpdatedData&&a.forEach(function(a){m(a,"updatedData",this.updatedDataHandler)},this),a[0].xAxis&&m(a[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes))},init:function(a){var c=a.options,d=c.navigator,l=d.enabled,n=c.scrollbar,m=n.enabled;c=l?d.height:0;var k=m?n.height:0;this.handles=[];this.shades=[];this.chart=a;this.setBaseSeries();this.height=c;this.scrollbarHeight=k;this.scrollbarEnabled=m;this.navigatorEnabled=
l;this.navigatorOptions=d;this.scrollbarOptions=n;this.outlineHeight=c+k;this.opposite=f(d.opposite,!l&&a.inverted);var p=this;l=p.baseSeries;n=a.xAxis.length;m=a.yAxis.length;var r=l&&l[0]&&l[0].xAxis||a.xAxis[0]||{options:{}};a.isDirtyBox=!0;p.navigatorEnabled?(p.xAxis=new G(a,b({breaks:r.options.breaks,ordinal:r.options.ordinal},d.xAxis,{id:"navigator-x-axis",yAxis:"navigator-y-axis",isX:!0,type:"datetime",index:n,isInternal:!0,offset:0,keepOrdinalPadding:!0,startOnTick:!1,endOnTick:!1,minPadding:0,
maxPadding:0,zoomEnabled:!1},a.inverted?{offsets:[k,0,-k,0],width:c}:{offsets:[0,-k,0,k],height:c})),p.yAxis=new G(a,b(d.yAxis,{id:"navigator-y-axis",alignTicks:!1,offset:0,index:m,isInternal:!0,zoomEnabled:!1},a.inverted?{width:c}:{height:c})),l||d.series.data?p.updateNavigatorSeries(!1):0===a.series.length&&(p.unbindRedraw=t(a,"beforeRedraw",function(){0<a.series.length&&!p.series&&(p.setBaseSeries(),p.unbindRedraw())})),p.reversedExtremes=a.inverted&&!p.xAxis.reversed||!a.inverted&&p.xAxis.reversed,
p.renderElements(),p.addMouseEvents()):p.xAxis={translate:function(b,c){var d=a.xAxis[0],e=d.getExtremes(),g=d.len-2*k,f=x("min",d.options.min,e.dataMin);d=x("max",d.options.max,e.dataMax)-f;return c?b*d/g+f:g*(b-f)/d},toPixels:function(a){return this.translate(a)},toValue:function(a){return this.translate(a,!0)},toFixedRange:G.prototype.toFixedRange,fake:!0};a.options.scrollbar.enabled&&(a.scrollbar=p.scrollbar=new h(a.renderer,b(a.options.scrollbar,{margin:p.navigatorEnabled?0:10,vertical:a.inverted}),
a),t(p.scrollbar,"changed",function(b){var c=p.size,d=c*this.to;c*=this.from;p.hasDragged=p.scrollbar.hasDragged;p.render(0,0,c,d);(a.options.scrollbar.liveRedraw||"mousemove"!==b.DOMType&&"touchmove"!==b.DOMType)&&setTimeout(function(){p.onMouseUp(b)})}));p.addBaseSeriesEvents();p.addChartEvents()},getUnionExtremes:function(a){var b=this.chart.xAxis[0],c=this.xAxis,d=c.options,h=b.options,l;a&&null===b.dataMin||(l={dataMin:f(d&&d.min,x("min",h.min,b.dataMin,c.dataMin,c.min)),dataMax:f(d&&d.max,x("max",
h.max,b.dataMax,c.dataMax,c.max))});return l},setBaseSeries:function(a,b){var c=this.chart,e=this.baseSeries=[];a=a||c.options&&c.options.navigator.baseSeries||(c.series.length?d.find(c.series,function(a){return!a.options.isInternal}).index:0);(c.series||[]).forEach(function(b,c){b.options.isInternal||!b.options.showInNavigator&&(c!==a&&b.options.id!==a||!1===b.options.showInNavigator)||e.push(b)});this.xAxis&&!this.xAxis.fake&&this.updateNavigatorSeries(!0,b)},updateNavigatorSeries:function(a,c){var d=
this,e=d.chart,f=d.baseSeries,h,n,k=d.navigatorOptions.series,p,r={enableMouseTracking:!1,index:null,linkedTo:null,group:"nav",padXAxis:!1,xAxis:"navigator-x-axis",yAxis:"navigator-y-axis",showInLegend:!1,stacking:!1,isInternal:!0,states:{inactive:{opacity:1}}},v=d.series=(d.series||[]).filter(function(a){var b=a.baseSeries;return 0>f.indexOf(b)?(b&&(m(b,"updatedData",d.updatedDataHandler),delete b.navigatorSeries),a.chart&&a.destroy(),!1):!0});f&&f.length&&f.forEach(function(a){var g=a.navigatorSeries,
m=q({color:a.color,visible:a.visible},E(k)?l.navigator.series:k);g&&!1===d.navigatorOptions.adaptToUpdatedData||(r.name="Navigator "+f.length,h=a.options||{},p=h.navigatorOptions||{},n=b(h,r,m,p),m=p.data||m.data,d.hasNavigatorData=d.hasNavigatorData||!!m,n.data=m||h.data&&h.data.slice(0),g&&g.options?g.update(n,c):(a.navigatorSeries=e.initSeries(n),a.navigatorSeries.baseSeries=a,v.push(a.navigatorSeries)))});if(k.data&&(!f||!f.length)||E(k))d.hasNavigatorData=!1,k=C(k),k.forEach(function(a,c){r.name=
"Navigator "+(v.length+1);n=b(l.navigator.series,{color:e.series[c]&&!e.series[c].options.isInternal&&e.series[c].color||e.options.colors[c]||e.options.colors[0]},r,a);n.data=a.data;n.data&&(d.hasNavigatorData=!0,v.push(e.initSeries(n)))});a&&this.addBaseSeriesEvents()},addBaseSeriesEvents:function(){var a=this,b=a.baseSeries||[];b[0]&&b[0].xAxis&&t(b[0].xAxis,"foundExtremes",this.modifyBaseAxisExtremes);b.forEach(function(b){t(b,"show",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!0,
!1)});t(b,"hide",function(){this.navigatorSeries&&this.navigatorSeries.setVisible(!1,!1)});!1!==this.navigatorOptions.adaptToUpdatedData&&b.xAxis&&t(b,"updatedData",this.updatedDataHandler);t(b,"remove",function(){this.navigatorSeries&&(H(a.series,this.navigatorSeries),D(this.navigatorSeries.options)&&this.navigatorSeries.remove(!1),delete this.navigatorSeries)})},this)},getBaseSeriesMin:function(a){return this.baseSeries.reduce(function(a,b){return Math.min(a,b.xData?b.xData[0]:a)},a)},modifyNavigatorAxisExtremes:function(){var a=
this.xAxis,b;a.getExtremes&&(!(b=this.getUnionExtremes(!0))||b.dataMin===a.min&&b.dataMax===a.max||(a.min=b.dataMin,a.max=b.dataMax))},modifyBaseAxisExtremes:function(){var a=this.chart.navigator,b=this.getExtremes(),c=b.dataMin,d=b.dataMax;b=b.max-b.min;var h=a.stickToMin,l=a.stickToMax,m=f(this.options.overscroll,0),k=a.series&&a.series[0],p=!!this.setExtremes;if(!this.eventArgs||"rangeSelectorButton"!==this.eventArgs.trigger){if(h){var r=c;var q=r+b}l&&(q=d+m,h||(r=Math.max(q-b,a.getBaseSeriesMin(k&&
k.xData?k.xData[0]:-Number.MAX_VALUE))));p&&(h||l)&&y(r)&&(this.min=this.userMin=r,this.max=this.userMax=q)}a.stickToMin=a.stickToMax=null},updatedDataHandler:function(){var a=this.chart.navigator,b=this.navigatorSeries,c=a.getBaseSeriesMin(this.xData[0]);a.stickToMax=a.reversedExtremes?0===Math.round(a.zoomedMin):Math.round(a.zoomedMax)>=Math.round(a.size);a.stickToMin=y(this.xAxis.min)&&this.xAxis.min<=c&&(!this.chart.fixedRange||!a.stickToMax);b&&!a.hasNavigatorData&&(b.options.pointStart=this.xData[0],
b.setData(this.options.data,!1,null,!1))},addChartEvents:function(){this.eventsToUnbind||(this.eventsToUnbind=[]);this.eventsToUnbind.push(t(this.chart,"redraw",function(){var a=this.navigator,b=a&&(a.baseSeries&&a.baseSeries[0]&&a.baseSeries[0].xAxis||a.scrollbar&&this.xAxis[0]);b&&a.render(b.min,b.max)}),t(this.chart,"getMargins",function(){var a=this.navigator,b=a.opposite?"plotTop":"marginBottom";this.inverted&&(b=a.opposite?"marginRight":"plotLeft");this[b]=(this[b]||0)+(a.navigatorEnabled||
!this.inverted?a.outlineHeight:0)+a.navigatorOptions.margin}))},destroy:function(){this.removeEvents();this.xAxis&&(H(this.chart.xAxis,this.xAxis),H(this.chart.axes,this.xAxis));this.yAxis&&(H(this.chart.yAxis,this.yAxis),H(this.chart.axes,this.yAxis));(this.series||[]).forEach(function(a){a.destroy&&a.destroy()});"series xAxis yAxis shades outline scrollbarTrack scrollbarRifles scrollbarGroup scrollbar navigatorGroup rendered".split(" ").forEach(function(a){this[a]&&this[a].destroy&&this[a].destroy();
this[a]=null},this);[this.handles].forEach(function(a){p(a)},this)}};d.Navigator||(d.Navigator=w,t(G,"zoom",function(b){var c=this.chart.options,d=c.chart.zoomType,f=c.chart.pinchType,h=c.navigator;c=c.rangeSelector;this.isXAxis&&(h&&h.enabled||c&&c.enabled)&&("y"===d?b.zoomed=!1:(!a&&"xy"===d||a&&"xy"===f)&&this.options.range&&(d=this.previousZoom,D(b.newMin)?this.previousZoom=[this.min,this.max]:d&&(b.newMin=d[0],b.newMax=d[1],delete this.previousZoom)));void 0!==b.zoomed&&b.preventDefault()}),
t(k,"beforeShowResetZoom",function(){var b=this.options,c=b.navigator,d=b.rangeSelector;if((c&&c.enabled||d&&d.enabled)&&(!a&&"x"===b.chart.zoomType||a&&"x"===b.chart.pinchType))return!1}),t(k,"beforeRender",function(){var a=this.options;if(a.navigator.enabled||a.scrollbar.enabled)this.scroller=this.navigator=new w(this)}),t(k,"afterSetChartSize",function(){var a=this.legend,b=this.navigator;if(b){var c=a&&a.options;var d=b.xAxis;var h=b.yAxis;var l=b.scrollbarHeight;this.inverted?(b.left=b.opposite?
this.chartWidth-l-b.height:this.spacing[3]+l,b.top=this.plotTop+l):(b.left=this.plotLeft+l,b.top=b.navigatorOptions.top||this.chartHeight-b.height-l-this.spacing[2]-(this.rangeSelector&&this.extraBottomMargin?this.rangeSelector.getHeight():0)-(c&&"bottom"===c.verticalAlign&&c.enabled&&!c.floating?a.legendHeight+f(c.margin,10):0)-(this.titleOffset?this.titleOffset[2]:0));d&&h&&(this.inverted?d.options.left=h.options.left=b.left:d.options.top=h.options.top=b.top,d.setAxisSize(),h.setAxisSize())}}),
t(k,"update",function(a){var c=a.options.navigator||{},d=a.options.scrollbar||{};this.navigator||this.scroller||!c.enabled&&!d.enabled||(b(!0,this.options.navigator,c),b(!0,this.options.scrollbar,d),delete a.options.navigator,delete a.options.scrollbar)}),t(k,"afterUpdate",function(a){this.navigator||this.scroller||!this.options.navigator.enabled&&!this.options.scrollbar.enabled||(this.scroller=this.navigator=new w(this),f(a.redraw,!0)&&this.redraw(a.animation))}),t(k,"afterAddSeries",function(){this.navigator&&
this.navigator.setBaseSeries(null,!1)}),t(r,"afterUpdate",function(){this.chart.navigator&&!this.options.isInternal&&this.chart.navigator.setBaseSeries(null,!1)}),k.prototype.callbacks.push(function(a){var b=a.navigator;b&&a.xAxis[0]&&(a=a.xAxis[0].getExtremes(),b.render(a.min,a.max))}))});K(I,"parts/OrdinalAxis.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined;k=d.addEvent;var D=d.Axis,H=d.Chart,E=d.css,y=d.extend,C=d.noop,t=d.pick,G=d.timeUnits;k(d.Series,"updatedData",
function(){var d=this.xAxis;d&&d.options.ordinal&&delete d.ordinalIndex});D.prototype.getTimeTicks=function(d,l,k,q,c,a,b){var f=0,m,h,p={},u=[],v=-Number.MAX_VALUE,n=this.options.tickPixelInterval,e=this.chart.time,g=[];if(!this.options.ordinal&&!this.options.breaks||!c||3>c.length||void 0===l)return e.getTimeTicks.apply(e,arguments);var t=c.length;for(m=0;m<t;m++){var A=m&&c[m-1]>k;c[m]<l&&(f=m);if(m===t-1||c[m+1]-c[m]>5*a||A){if(c[m]>v){for(h=e.getTimeTicks(d,c[f],c[m],q);h.length&&h[0]<=v;)h.shift();
h.length&&(v=h[h.length-1]);g.push(u.length);u=u.concat(h)}f=m+1}if(A)break}h=h.info;if(b&&h.unitRange<=G.hour){m=u.length-1;for(f=1;f<m;f++)if(e.dateFormat("%d",u[f])!==e.dateFormat("%d",u[f-1])){p[u[f]]="day";var z=!0}z&&(p[u[0]]="day");h.higherRanks=p}h.segmentStarts=g;u.info=h;if(b&&w(n)){f=g=u.length;z=[];var B;for(e=[];f--;)m=this.translate(u[f]),B&&(e[f]=B-m),z[f]=B=m;e.sort();e=e[Math.floor(e.length/2)];e<.6*n&&(e=null);f=u[g-1]>k?g-1:g;for(B=void 0;f--;)m=z[f],g=Math.abs(B-m),B&&g<.8*n&&
(null===e||g<.8*e)?(p[u[f]]&&!p[u[f+1]]?(g=f+1,B=m):g=f,u.splice(g,1)):B=m}return u};y(D.prototype,{beforeSetTickPositions:function(){var d=[],l,k=!1,q=this.getExtremes(),c=q.min,a=q.max,b,f=this.isXAxis&&!!this.options.breaks;q=this.options.ordinal;var m=Number.MAX_VALUE,h=this.chart.options.chart.ignoreHiddenSeries,r;if(q||f){this.series.forEach(function(a,b){l=[];if(!(h&&!1===a.visible||!1===a.takeOrdinalPosition&&!f)&&(d=d.concat(a.processedXData),x=d.length,d.sort(function(a,b){return a-b}),
m=Math.min(m,t(a.closestPointRange,m)),x)){for(b=0;b<x-1;)d[b]!==d[b+1]&&l.push(d[b+1]),b++;l[0]!==d[0]&&l.unshift(d[0]);d=l}a.isSeriesBoosting&&(r=!0)});r&&(d.length=0);var x=d.length;if(2<x){var v=d[1]-d[0];for(b=x-1;b--&&!k;)d[b+1]-d[b]!==v&&(k=!0);!this.options.keepOrdinalPadding&&(d[0]-c>v||a-d[d.length-1]>v)&&(k=!0)}else this.options.overscroll&&(2===x?m=d[1]-d[0]:1===x?(m=this.options.overscroll,d=[d[0],d[0]+m]):m=this.overscrollPointsRange);k?(this.options.overscroll&&(this.overscrollPointsRange=
m,d=d.concat(this.getOverscrollPositions())),this.ordinalPositions=d,v=this.ordinal2lin(Math.max(c,d[0]),!0),b=Math.max(this.ordinal2lin(Math.min(a,d[d.length-1]),!0),1),this.ordinalSlope=a=(a-c)/(b-v),this.ordinalOffset=c-v*a):(this.overscrollPointsRange=t(this.closestPointRange,this.overscrollPointsRange),this.ordinalPositions=this.ordinalSlope=this.ordinalOffset=void 0)}this.isOrdinal=q&&k;this.groupIntervalFactor=null},val2lin:function(d,l){var k=this.ordinalPositions;if(k){var q=k.length,c;for(c=
q;c--;)if(k[c]===d){var a=c;break}for(c=q-1;c--;)if(d>k[c]||0===c){d=(d-k[c])/(k[c+1]-k[c]);a=c+d;break}l=l?a:this.ordinalSlope*(a||0)+this.ordinalOffset}else l=d;return l},lin2val:function(d,l){var k=this.ordinalPositions;if(k){var q=this.ordinalSlope,c=this.ordinalOffset,a=k.length-1;if(l)if(0>d)d=k[0];else if(d>a)d=k[a];else{a=Math.floor(d);var b=d-a}else for(;a--;)if(l=q*a+c,d>=l){q=q*(a+1)+c;b=(d-l)/(q-l);break}return void 0!==b&&void 0!==k[a]?k[a]+(b?b*(k[a+1]-k[a]):0):d}return d},getExtendedPositions:function(){var d=
this,l=d.chart,k=d.series[0].currentDataGrouping,q=d.ordinalIndex,c=k?k.count+k.unitName:"raw",a=d.options.overscroll,b=d.getExtremes(),f;q||(q=d.ordinalIndex={});if(!q[c]){var m={series:[],chart:l,getExtremes:function(){return{min:b.dataMin,max:b.dataMax+a}},options:{ordinal:!0},val2lin:D.prototype.val2lin,ordinal2lin:D.prototype.ordinal2lin};d.series.forEach(function(a){f={xAxis:m,xData:a.xData.slice(),chart:l,destroyGroupedData:C};f.xData=f.xData.concat(d.getOverscrollPositions());f.options={dataGrouping:k?
{enabled:!0,forced:!0,approximation:"open",units:[[k.unitName,[k.count]]]}:{enabled:!1}};a.processData.apply(f);m.series.push(f)});d.beforeSetTickPositions.apply(m);q[c]=m.ordinalPositions}return q[c]},getOverscrollPositions:function(){var d=this.options.overscroll,l=this.overscrollPointsRange,k=[],q=this.dataMax;if(w(l))for(k.push(q);q<=this.dataMax+d;)q+=l,k.push(q);return k},getGroupIntervalFactor:function(d,l,k){k=k.processedXData;var p=k.length,c=[];var a=this.groupIntervalFactor;if(!a){for(a=
0;a<p-1;a++)c[a]=k[a+1]-k[a];c.sort(function(a,c){return a-c});c=c[Math.floor(p/2)];d=Math.max(d,k[0]);l=Math.min(l,k[p-1]);this.groupIntervalFactor=a=p*c/(l-d)}return a},postProcessTickInterval:function(d){var l=this.ordinalSlope;return l?this.options.breaks?this.closestPointRange||d:d/(l/this.closestPointRange):d}});D.prototype.ordinal2lin=D.prototype.val2lin;k(H,"pan",function(d){var l=this.xAxis[0],k=l.options.overscroll,q=d.originalEvent.chartX,c=!1;if(l.options.ordinal&&l.series.length){var a=
this.mouseDownX,b=l.getExtremes(),f=b.dataMax,m=b.min,h=b.max,r=this.hoverPoints,x=l.closestPointRange||l.overscrollPointsRange;a=(a-q)/(l.translationSlope*(l.ordinalSlope||x));var v={ordinalPositions:l.getExtendedPositions()};x=l.lin2val;var n=l.val2lin;if(!v.ordinalPositions)c=!0;else if(1<Math.abs(a)){r&&r.forEach(function(a){a.setState()});if(0>a){r=v;var e=l.ordinalPositions?l:v}else r=l.ordinalPositions?l:v,e=v;v=e.ordinalPositions;f>v[v.length-1]&&v.push(f);this.fixedRange=h-m;a=l.toFixedRange(null,
null,x.apply(r,[n.apply(r,[m,!0])+a,!0]),x.apply(e,[n.apply(e,[h,!0])+a,!0]));a.min>=Math.min(b.dataMin,m)&&a.max<=Math.max(f,h)+k&&l.setExtremes(a.min,a.max,!0,!1,{trigger:"pan"});this.mouseDownX=q;E(this.container,{cursor:"move"})}}else c=!0;c?k&&(l.max=l.dataMax+k):d.preventDefault()});k(D,"foundExtremes",function(){this.isXAxis&&w(this.options.overscroll)&&this.max===this.dataMax&&(!this.chart.mouseIsDown||this.isInternal)&&(!this.eventArgs||this.eventArgs&&"navigator"!==this.eventArgs.trigger)&&
(this.max+=this.options.overscroll,!this.isInternal&&w(this.userMin)&&(this.min+=this.options.overscroll))});k(D,"afterSetScale",function(){this.horiz&&!this.isDirty&&(this.isDirty=this.isOrdinal&&this.chart.navigator&&!this.chart.navigator.adaptToUpdatedData)})});K(I,"modules/broken-axis.src.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.isArray;k=d.addEvent;var D=d.pick,H=d.extend,E=d.find,y=d.fireEvent,C=d.Axis,t=d.Series,G=function(d,l){return E(l,function(l){return l.from<
d&&d<l.to})};H(C.prototype,{isInBreak:function(d,l){var k=d.repeat||Infinity,q=d.from,c=d.to-d.from;l=l>=q?(l-q)%k:k-(q-l)%k;return d.inclusive?l<=c:l<c&&0!==l},isInAnyBreak:function(d,l){var k=this.options.breaks,q=k&&k.length,c;if(q){for(;q--;)if(this.isInBreak(k[q],d)){var a=!0;c||(c=D(k[q].showPoints,!this.isXAxis))}var b=a&&l?a&&!c:a}return b}});k(C,"afterInit",function(){"function"===typeof this.setBreaks&&this.setBreaks(this.options.breaks,!1)});k(C,"afterSetTickPositions",function(){if(this.isBroken){var d=
this.tickPositions,l=this.tickPositions.info,k=[],q;for(q=0;q<d.length;q++)this.isInAnyBreak(d[q])||k.push(d[q]);this.tickPositions=k;this.tickPositions.info=l}});k(C,"afterSetOptions",function(){this.isBroken&&(this.options.ordinal=!1)});C.prototype.setBreaks=function(d,l){function k(a){var b=a,d;for(d=0;d<c.breakArray.length;d++){var h=c.breakArray[d];if(h.to<=a)b-=h.len;else if(h.from>=a)break;else if(c.isInBreak(h,a)){b-=a-h.from;break}}return b}function q(a){var b;for(b=0;b<c.breakArray.length;b++){var d=
c.breakArray[b];if(d.from>=a)break;else d.to<a?a+=d.len:c.isInBreak(d,a)&&(a+=d.len)}return a}var c=this,a=w(d)&&!!d.length;c.isDirty=c.isBroken!==a;c.isBroken=a;c.options.breaks=c.userOptions.breaks=d;c.forceRedraw=!0;a||c.val2lin!==k||(delete c.val2lin,delete c.lin2val);a&&(c.userOptions.ordinal=!1,c.val2lin=k,c.lin2val=q,c.setExtremes=function(a,c,d,h,l){if(this.isBroken){for(var b,f=this.options.breaks;b=G(a,f);)a=b.to;for(;b=G(c,f);)c=b.from;c<a&&(c=a)}C.prototype.setExtremes.call(this,a,c,d,
h,l)},c.setAxisTranslation=function(a){C.prototype.setAxisTranslation.call(this,a);this.unitLength=null;if(this.isBroken){a=c.options.breaks;var b=[],d=[],h=0,l,k=c.userMin||c.min,p=c.userMax||c.max,n=D(c.pointRangePadding,0),e;a.forEach(function(a){l=a.repeat||Infinity;c.isInBreak(a,k)&&(k+=a.to%l-k%l);c.isInBreak(a,p)&&(p-=p%l-a.from%l)});a.forEach(function(a){q=a.from;for(l=a.repeat||Infinity;q-l>k;)q-=l;for(;q<k;)q+=l;for(e=q;e<p;e+=l)b.push({value:e,move:"in"}),b.push({value:e+(a.to-a.from),
move:"out",size:a.breakSize})});b.sort(function(a,b){return a.value===b.value?("in"===a.move?0:1)-("in"===b.move?0:1):a.value-b.value});var g=0;var q=k;b.forEach(function(a){g+="in"===a.move?1:-1;1===g&&"in"===a.move&&(q=a.value);0===g&&(d.push({from:q,to:a.value,len:a.value-q-(a.size||0)}),h+=a.value-q-(a.size||0))});c.breakArray=d;c.unitLength=p-k-h+n;y(c,"afterBreaks");c.staticScale?c.transA=c.staticScale:c.unitLength&&(c.transA*=(p-c.min+n)/c.unitLength);n&&(c.minPixelPadding=c.transA*c.minPointOffset);
c.min=k;c.max=p}});D(l,!0)&&this.chart.redraw()};k(t,"afterGeneratePoints",function(){var d=this.xAxis,l=this.yAxis,k=this.points,q=k.length,c=this.options.connectNulls;if(d&&l&&(d.options.breaks||l.options.breaks))for(;q--;){var a=k[q];var b=null===a.y&&!1===c;b||!d.isInAnyBreak(a.x,!0)&&!l.isInAnyBreak(a.y,!0)||(k.splice(q,1),this.data[q]&&this.data[q].destroyElements())}});k(t,"afterRender",function(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,D(this.pointArrayMap,["y"]))});d.Series.prototype.drawBreaks=
function(d,l){var k=this,q=k.points,c,a,b,f;d&&l.forEach(function(l){c=d.breakArray||[];a=d.isXAxis?d.min:D(k.options.threshold,d.min);q.forEach(function(h){f=D(h["stack"+l.toUpperCase()],h[l]);c.forEach(function(c){b=!1;if(a<c.from&&f>c.to||a>c.from&&f<c.from)b="pointBreak";else if(a<c.from&&f>c.from&&f<c.to||a>c.from&&f>c.to&&f<c.from)b="pointInBreak";b&&y(d,b,{point:h,brk:c})})})})};d.Series.prototype.gappedPath=function(){var k=this.currentDataGrouping,l=k&&k.gapSize;k=this.options.gapSize;var p=
this.points.slice(),q=p.length-1,c=this.yAxis;if(k&&0<q)for("value"!==this.options.gapUnit&&(k*=this.basePointRange),l&&l>k&&l>=this.basePointRange&&(k=l);q--;)p[q+1].x-p[q].x>k&&(l=(p[q].x+p[q+1].x)/2,p.splice(q+1,0,{isNull:!0,x:l}),this.options.stacking&&(l=c.stacks[this.stackKey][l]=new d.StackItem(c,c.options.stackLabels,!1,l,this.stack),l.total=0));return this.getGraphPath(p)}});K(I,"masters/modules/broken-axis.src.js",[],function(){});K(I,"parts/DataGrouping.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],
function(d,k){var w=k.defined,D=k.isNumber;k=d.addEvent;var H=d.arrayMax,E=d.arrayMin,y=d.Axis,C=d.correctFloat,t=d.defaultPlotOptions,G=d.extend,u=d.format,l=d.merge,p=d.pick,q=d.Point,c=d.Series,a=d.Tooltip,b=d.approximations={sum:function(a){var b=a.length;if(!b&&a.hasNulls)var c=null;else if(b)for(c=0;b--;)c+=a[b];return c},average:function(a){var c=a.length;a=b.sum(a);D(a)&&c&&(a=C(a/c));return a},averages:function(){var a=[];[].forEach.call(arguments,function(c){a.push(b.average(c))});return void 0===
a[0]?void 0:a},open:function(a){return a.length?a[0]:a.hasNulls?null:void 0},high:function(a){return a.length?H(a):a.hasNulls?null:void 0},low:function(a){return a.length?E(a):a.hasNulls?null:void 0},close:function(a){return a.length?a[a.length-1]:a.hasNulls?null:void 0},ohlc:function(a,c,d,e){a=b.open(a);c=b.high(c);d=b.low(d);e=b.close(e);if(D(a)||D(c)||D(d)||D(e))return[a,c,d,e]},range:function(a,c){a=b.low(a);c=b.high(c);if(D(a)||D(c))return[a,c];if(null===a&&null===c)return null}},f=function(a,
c,d,e){var g=this,h=g.data,f=g.options&&g.options.data,k=[],m=[],n=[],p=a.length,r=!!c,q=[],v=g.pointArrayMap,A=v&&v.length,x=["x"].concat(v||["y"]),t=0,z=0,u;e="function"===typeof e?e:b[e]?b[e]:b[g.getDGApproximation&&g.getDGApproximation()||"average"];A?v.forEach(function(){q.push([])}):q.push([]);var F=A||1;for(u=0;u<=p&&!(a[u]>=d[0]);u++);for(u;u<=p;u++){for(;void 0!==d[t+1]&&a[u]>=d[t+1]||u===p;){var y=d[t];g.dataGroupInfo={start:g.cropStart+z,length:q[0].length};var C=e.apply(g,q);g.pointClass&&
!w(g.dataGroupInfo.options)&&(g.dataGroupInfo.options=l(g.pointClass.prototype.optionsToObject.call({series:g},g.options.data[g.cropStart+z])),x.forEach(function(a){delete g.dataGroupInfo.options[a]}));void 0!==C&&(k.push(y),m.push(C),n.push(g.dataGroupInfo));z=u;for(y=0;y<F;y++)q[y].length=0,q[y].hasNulls=!1;t+=1;if(u===p)break}if(u===p)break;if(v)for(y=g.cropStart+u,C=h&&h[y]||g.pointClass.prototype.applyOptions.apply({series:g},[f[y]]),y=0;y<A;y++){var E=C[v[y]];D(E)?q[y].push(E):null===E&&(q[y].hasNulls=
!0)}else y=r?c[u]:null,D(y)?q[0].push(y):null===y&&(q[0].hasNulls=!0)}return{groupedXData:k,groupedYData:m,groupMap:n}},m={approximations:b,groupData:f},h=c.prototype,r=h.processData,x=h.generatePoints,v={groupPixelWidth:2,dateTimeLabelFormats:{millisecond:["%A, %b %e, %H:%M:%S.%L","%A, %b %e, %H:%M:%S.%L","-%H:%M:%S.%L"],second:["%A, %b %e, %H:%M:%S","%A, %b %e, %H:%M:%S","-%H:%M:%S"],minute:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],hour:["%A, %b %e, %H:%M","%A, %b %e, %H:%M","-%H:%M"],day:["%A, %b %e, %Y",
"%A, %b %e","-%A, %b %e, %Y"],week:["Week from %A, %b %e, %Y","%A, %b %e","-%A, %b %e, %Y"],month:["%B %Y","%B","-%B %Y"],year:["%Y","%Y","-%Y"]}},n={line:{},spline:{},area:{},areaspline:{},column:{groupPixelWidth:10},columnrange:{groupPixelWidth:10},candlestick:{groupPixelWidth:10},ohlc:{groupPixelWidth:5}},e=d.defaultDataGroupingUnits=[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1]],["week",[1]],["month",
[1,3,6]],["year",null]];h.getDGApproximation=function(){return d.seriesTypes.arearange&&this instanceof d.seriesTypes.arearange?"range":d.seriesTypes.ohlc&&this instanceof d.seriesTypes.ohlc?"ohlc":d.seriesTypes.column&&this instanceof d.seriesTypes.column?"sum":"average"};h.groupData=f;h.processData=function(){var a=this.chart,b=this.options.dataGrouping,c=!1!==this.allowDG&&b&&p(b.enabled,a.options.isStock),d=this.visible||!a.options.chart.ignoreHiddenSeries,f,l=this.currentDataGrouping,k=!1;this.forceCrop=
c;this.groupPixelWidth=null;this.hasProcessed=!0;c&&!this.requireSorting&&(this.requireSorting=k=!0);c=!1===r.apply(this,arguments)||!c;k&&(this.requireSorting=!1);if(!c){this.destroyGroupedData();c=b.groupAll?this.xData:this.processedXData;var m=b.groupAll?this.yData:this.processedYData,n=a.plotSizeX;a=this.xAxis;var q=a.options.ordinal,v=this.groupPixelWidth=a.getGroupPixelWidth&&a.getGroupPixelWidth();if(v){this.isDirty=f=!0;this.points=null;k=a.getExtremes();var x=k.min;k=k.max;q=q&&a.getGroupIntervalFactor(x,
k,this)||1;v=v*(k-x)/n*q;n=a.getTimeTicks(a.normalizeTimeTickInterval(v,b.units||e),Math.min(x,c[0]),Math.max(k,c[c.length-1]),a.options.startOfWeek,c,this.closestPointRange);m=h.groupData.apply(this,[c,m,n,b.approximation]);c=m.groupedXData;q=m.groupedYData;var t=0;if(b.smoothed&&c.length){var u=c.length-1;for(c[u]=Math.min(c[u],k);u--&&0<u;)c[u]+=v/2;c[0]=Math.max(c[0],x)}for(u=1;u<n.length;u++)n.info.segmentStarts&&-1!==n.info.segmentStarts.indexOf(u)||(t=Math.max(n[u]-n[u-1],t));x=n.info;x.gapSize=
t;this.closestPointRange=n.info.totalRange;this.groupMap=m.groupMap;if(w(c[0])&&c[0]<a.min&&d){if(!w(a.options.min)&&a.min<=a.dataMin||a.min===a.dataMin)a.min=c[0];a.dataMin=c[0]}b.groupAll&&(b=this.cropData(c,q,a.min,a.max,1),c=b.xData,q=b.yData);this.processedXData=c;this.processedYData=q}else this.groupMap=null;this.hasGroupedData=f;this.currentDataGrouping=x;this.preventGraphAnimation=(l&&l.totalRange)!==(x&&x.totalRange)}};h.destroyGroupedData=function(){var a=this.groupedData;(a||[]).forEach(function(b,
c){b&&(a[c]=b.destroy?b.destroy():null)});this.groupedData=null};h.generatePoints=function(){x.apply(this);this.destroyGroupedData();this.groupedData=this.hasGroupedData?this.points:null};k(q,"update",function(){if(this.dataGroup)return d.error(24,!1,this.series.chart),!1});k(a,"headerFormatter",function(a){var b=this.chart.time,c=a.labelConfig,d=c.series,e=d.tooltipOptions,g=d.options.dataGrouping,h=e.xDateFormat,f=d.xAxis,l=e[(a.isFooter?"footer":"header")+"Format"];if(f&&"datetime"===f.options.type&&
g&&D(c.key)){var k=d.currentDataGrouping;g=g.dateTimeLabelFormats||v.dateTimeLabelFormats;if(k)if(e=g[k.unitName],1===k.count)h=e[0];else{h=e[1];var m=e[2]}else!h&&g&&(h=this.getXDateFormat(c,e,f));h=b.dateFormat(h,c.key);m&&(h+=b.dateFormat(m,c.key+k.totalRange-1));d.chart.styledMode&&(l=this.styledModeFormat(l));a.text=u(l,{point:G(c.point,{key:h}),series:d},b);a.preventDefault()}});k(c,"destroy",h.destroyGroupedData);k(c,"afterSetOptions",function(a){a=a.options;var b=this.type,c=this.chart.options.plotOptions,
d=t[b].dataGrouping,e=this.useCommonDataGrouping&&v;if(n[b]||e)d||(d=l(v,n[b])),a.dataGrouping=l(e,d,c.series&&c.series.dataGrouping,c[b].dataGrouping,this.userOptions.dataGrouping)});k(y,"afterSetScale",function(){this.series.forEach(function(a){a.hasProcessed=!1})});y.prototype.getGroupPixelWidth=function(){var a=this.series,b=a.length,c,d=0,e=!1,h;for(c=b;c--;)(h=a[c].options.dataGrouping)&&(d=Math.max(d,p(h.groupPixelWidth,v.groupPixelWidth)));for(c=b;c--;)(h=a[c].options.dataGrouping)&&a[c].hasProcessed&&
(b=(a[c].processedXData||a[c].data).length,a[c].groupPixelWidth||b>this.chart.plotSizeX/d||b&&h.forced)&&(e=!0);return e?d:0};y.prototype.setDataGrouping=function(a,b){var c;b=p(b,!0);a||(a={forced:!1,units:null});if(this instanceof y)for(c=this.series.length;c--;)this.series[c].update({dataGrouping:a},!1);else this.chart.options.series.forEach(function(b){b.dataGrouping=a},!1);this.ordinalSlope=null;b&&this.chart.redraw()};d.dataGrouping=m;"";return m});K(I,"parts/OHLCSeries.js",[I["parts/Globals.js"]],
function(d){var k=d.Point,w=d.seriesType,D=d.seriesTypes;w("ohlc","column",{lineWidth:1,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'},threshold:null,states:{hover:{lineWidth:3}},stickyTracking:!0},{directTouch:!1,pointArrayMap:["open","high","low","close"],toYData:function(d){return[d.open,d.high,d.low,d.close]},pointValKey:"close",pointAttrToOptions:{stroke:"color",
"stroke-width":"lineWidth"},init:function(){D.column.prototype.init.apply(this,arguments);this.options.stacking=!1},pointAttribs:function(d,k){k=D.column.prototype.pointAttribs.call(this,d,k);var y=this.options;delete k.fill;!d.options.color&&y.upColor&&d.open<d.close&&(k.stroke=y.upColor);return k},translate:function(){var d=this,k=d.yAxis,y=!!d.modifyValue,w=["plotOpen","plotHigh","plotLow","plotClose","yBottom"];D.column.prototype.translate.apply(d);d.points.forEach(function(t){[t.open,t.high,
t.low,t.close,t.low].forEach(function(C,u){null!==C&&(y&&(C=d.modifyValue(C)),t[w[u]]=k.toPixels(C,!0))});t.tooltipPos[1]=t.plotHigh+k.pos-d.chart.plotTop})},drawPoints:function(){var d=this,k=d.chart;d.points.forEach(function(y){var w=y.graphic,t=!w;if(void 0!==y.plotY){w||(y.graphic=w=k.renderer.path().add(d.group));k.styledMode||w.attr(d.pointAttribs(y,y.selected&&"select"));var E=w.strokeWidth()%2/2;var u=Math.round(y.plotX)-E;var l=Math.round(y.shapeArgs.width/2);var p=["M",u,Math.round(y.yBottom),
"L",u,Math.round(y.plotHigh)];if(null!==y.open){var q=Math.round(y.plotOpen)+E;p.push("M",u,q,"L",u-l,q)}null!==y.close&&(q=Math.round(y.plotClose)+E,p.push("M",u,q,"L",u+l,q));w[t?"attr":"animate"]({d:p}).addClass(y.getClassName(),!0)}})},animate:null},{getClassName:function(){return k.prototype.getClassName.call(this)+(this.open<this.close?" highcharts-point-up":" highcharts-point-down")}});""});K(I,"parts/CandlestickSeries.js",[I["parts/Globals.js"]],function(d){var k=d.defaultPlotOptions,w=d.merge,
D=d.seriesType,H=d.seriesTypes;D("candlestick","ohlc",w(k.column,{states:{hover:{lineWidth:2}},tooltip:k.ohlc.tooltip,threshold:null,lineColor:"#000000",lineWidth:1,upColor:"#ffffff",stickyTracking:!0}),{pointAttribs:function(d,k){var w=H.column.prototype.pointAttribs.call(this,d,k),t=this.options,y=d.open<d.close,u=t.lineColor||this.color;w["stroke-width"]=t.lineWidth;w.fill=d.options.color||(y?t.upColor||this.color:this.color);w.stroke=d.options.lineColor||(y?t.upLineColor||u:u);k&&(d=t.states[k],
w.fill=d.color||w.fill,w.stroke=d.lineColor||w.stroke,w["stroke-width"]=d.lineWidth||w["stroke-width"]);return w},drawPoints:function(){var d=this,k=d.chart,w=d.yAxis.reversed;d.points.forEach(function(t){var y=t.graphic,u=!y;if(void 0!==t.plotY){y||(t.graphic=y=k.renderer.path().add(d.group));d.chart.styledMode||y.attr(d.pointAttribs(t,t.selected&&"select")).shadow(d.options.shadow);var l=y.strokeWidth()%2/2;var p=Math.round(t.plotX)-l;var q=t.plotOpen;var c=t.plotClose;var a=Math.min(q,c);q=Math.max(q,
c);var b=Math.round(t.shapeArgs.width/2);c=w?q!==t.yBottom:Math.round(a)!==Math.round(t.plotHigh);var f=w?Math.round(a)!==Math.round(t.plotHigh):q!==t.yBottom;a=Math.round(a)+l;q=Math.round(q)+l;l=[];l.push("M",p-b,q,"L",p-b,a,"L",p+b,a,"L",p+b,q,"Z","M",p,a,"L",p,c?Math.round(w?t.yBottom:t.plotHigh):a,"M",p,q,"L",p,f?Math.round(w?t.plotHigh:t.yBottom):q);y[u?"attr":"animate"]({d:l}).addClass(t.getClassName(),!0)}})}});""});K(I,"mixins/on-series.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],
function(d,k){var w=k.defined,D=d.seriesTypes,H=d.stableSort;return{getPlotBox:function(){return d.Series.prototype.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)},translate:function(){D.column.prototype.translate.apply(this);var d=this,k=d.options,C=d.chart,t=d.points,G=t.length-1,u,l=k.onSeries;l=l&&C.get(l);k=k.onKey||"y";var p=l&&l.options.step,q=l&&l.points,c=q&&q.length,a=C.inverted,b=d.xAxis,f=d.yAxis,m=0,h;if(l&&l.visible&&c){m=(l.pointXOffset||0)+(l.barW||
0)/2;C=l.currentDataGrouping;var r=q[c-1].x+(C?C.totalRange:0);H(t,function(a,b){return a.x-b.x});for(k="plot"+k[0].toUpperCase()+k.substr(1);c--&&t[G];){var x=q[c];C=t[G];C.y=x.y;if(x.x<=C.x&&void 0!==x[k]){if(C.x<=r&&(C.plotY=x[k],x.x<C.x&&!p&&(h=q[c+1])&&void 0!==h[k])){var v=(C.x-x.x)/(h.x-x.x);C.plotY+=v*(h[k]-x[k]);C.y+=v*(h.y-x.y)}G--;c++;if(0>G)break}}}t.forEach(function(c,e){c.plotX+=m;if(void 0===c.plotY||a)0<=c.plotX&&c.plotX<=b.len?a?(c.plotY=b.translate(c.x,0,1,0,1),c.plotX=w(c.y)?f.translate(c.y,
0,0,0,1):0):c.plotY=(b.opposite?0:d.yAxis.len)+b.offset:c.shapeArgs={};if((u=t[e-1])&&u.plotX===c.plotX){void 0===u.stackIndex&&(u.stackIndex=0);var g=u.stackIndex+1}c.stackIndex=g});this.onSeries=l}}});K(I,"parts/FlagsSeries.js",[I["parts/Globals.js"],I["parts/Utilities.js"],I["mixins/on-series.js"]],function(d,k,w){function D(a){c[a+"pin"]=function(b,d,k,h,l){var f=l&&l.anchorX;l=l&&l.anchorY;"circle"===a&&h>k&&(b-=Math.round((h-k)/2),k=h);var m=c[a](b,d,k,h);f&&l&&(m.push("M","circle"===a?b+k/
2:m[1]+m[4]/2,d>l?d:d+h,"L",f,l),m=m.concat(c.circle(f-1,l-1,2,2)));return m}}var H=k.defined,E=k.isNumber,y=k.objectEach,C=d.addEvent,t=d.merge;k=d.noop;var G=d.Renderer,u=d.Series,l=d.seriesType,p=d.TrackerMixin,q=d.VMLRenderer,c=d.SVGRenderer.prototype.symbols;l("flags","column",{pointRange:0,allowOverlapX:!1,shape:"flag",stackDistance:12,textAlign:"center",tooltip:{pointFormat:"{point.text}<br/>"},threshold:null,y:-30,fillColor:"#ffffff",lineWidth:1,states:{hover:{lineColor:"#000000",fillColor:"#ccd6eb"}},
style:{fontSize:"11px",fontWeight:"bold"}},{sorted:!1,noSharedTooltip:!0,allowDG:!1,takeOrdinalPosition:!1,trackerGroups:["markerGroup"],forceCrop:!0,init:u.prototype.init,pointAttribs:function(a,b){var c=this.options,d=a&&a.color||this.color,h=c.lineColor,k=a&&a.lineWidth;a=a&&a.fillColor||c.fillColor;b&&(a=c.states[b].fillColor,h=c.states[b].lineColor,k=c.states[b].lineWidth);return{fill:a||d,stroke:h||d,"stroke-width":k||c.lineWidth||0}},translate:w.translate,getPlotBox:w.getPlotBox,drawPoints:function(){var a=
this.points,b=this.chart,c=b.renderer,k=b.inverted,h=this.options,l=h.y,p,q=this.yAxis,n={},e=[];for(p=a.length;p--;){var g=a[p];var u=(k?g.plotY:g.plotX)>this.xAxis.len;var A=g.plotX;var z=g.stackIndex;var w=g.options.shape||h.shape;var C=g.plotY;void 0!==C&&(C=g.plotY+l-(void 0!==z&&z*h.stackDistance));g.anchorX=z?void 0:g.plotX;var D=z?void 0:g.plotY;var E="flag"!==w;z=g.graphic;void 0!==C&&0<=A&&!u?(z||(z=g.graphic=c.label("",null,null,w,null,null,h.useHTML),b.styledMode||z.attr(this.pointAttribs(g)).css(t(h.style,
g.style)),z.attr({align:E?"center":"left",width:h.width,height:h.height,"text-align":h.textAlign}).addClass("highcharts-point").add(this.markerGroup),g.graphic.div&&(g.graphic.div.point=g),b.styledMode||z.shadow(h.shadow),z.isNew=!0),0<A&&(A-=z.strokeWidth()%2),w={y:C,anchorY:D},h.allowOverlapX&&(w.x=A,w.anchorX=g.anchorX),z.attr({text:g.options.title||h.title||"A"})[z.isNew?"attr":"animate"](w),h.allowOverlapX||(n[g.plotX]?n[g.plotX].size=Math.max(n[g.plotX].size,z.width):n[g.plotX]={align:E?.5:
0,size:z.width,target:A,anchorX:A}),g.tooltipPos=[A,C+q.pos-b.plotTop]):z&&(g.graphic=z.destroy())}h.allowOverlapX||(y(n,function(a){a.plotX=a.anchorX;e.push(a)}),d.distribute(e,k?q.len:this.xAxis.len,100),a.forEach(function(a){var b=a.graphic&&n[a.plotX];b&&(a.graphic[a.graphic.isNew?"attr":"animate"]({x:b.pos+b.align*b.size,anchorX:a.anchorX}),H(b.pos)?a.graphic.isNew=!1:(a.graphic.attr({x:-9999,anchorX:-9999}),a.graphic.isNew=!0))}));h.useHTML&&d.wrap(this.markerGroup,"on",function(a){return d.SVGElement.prototype.on.apply(a.apply(this,
[].slice.call(arguments,1)),[].slice.call(arguments,1))})},drawTracker:function(){var a=this.points;p.drawTrackerPoint.apply(this);a.forEach(function(b){var c=b.graphic;c&&C(c.element,"mouseover",function(){0<b.stackIndex&&!b.raised&&(b._y=c.y,c.attr({y:b._y-8}),b.raised=!0);a.forEach(function(a){a!==b&&a.raised&&a.graphic&&(a.graphic.attr({y:a._y}),a.raised=!1)})})})},animate:function(a){a?this.setClip():this.animate=null},setClip:function(){u.prototype.setClip.apply(this,arguments);!1!==this.options.clip&&
this.sharedClipKey&&this.markerGroup.clip(this.chart[this.sharedClipKey])},buildKDTree:k,invertGroups:k},{isValid:function(){return E(this.y)||void 0===this.y}});c.flag=function(a,b,d,k,h){var f=h&&h.anchorX||a;h=h&&h.anchorY||b;return c.circle(f-1,h-1,2,2).concat(["M",f,h,"L",a,b+k,a,b,a+d,b,a+d,b+k,a,b+k,"Z"])};D("circle");D("square");G===q&&["circlepin","flag","squarepin"].forEach(function(a){q.prototype.symbols[a]=c[a]});""});K(I,"parts/RangeSelector.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],
function(d,k){function w(a){this.init(a)}var D=k.defined,H=k.isNumber,E=k.objectEach,y=k.pInt,C=k.splat,t=d.addEvent,G=d.Axis;k=d.Chart;var u=d.css,l=d.createElement,p=d.defaultOptions,q=d.destroyObjectProperties,c=d.discardElement,a=d.extend,b=d.fireEvent,f=d.merge,m=d.pick;a(p,{rangeSelector:{verticalAlign:"top",buttonTheme:{width:28,height:18,padding:2,zIndex:7},floating:!1,x:0,y:0,height:void 0,inputPosition:{align:"right",x:0,y:0},buttonPosition:{align:"left",x:0,y:0},labelStyle:{color:"#666666"}}});
p.lang=f(p.lang,{rangeSelectorZoom:"Zoom",rangeSelectorFrom:"From",rangeSelectorTo:"To"});w.prototype={clickButton:function(a,b){var c=this.chart,d=this.buttonOptions[a],h=c.xAxis[0],e=c.scroller&&c.scroller.getUnionExtremes()||h||{},g=e.dataMin,f=e.dataMax,k=h&&Math.round(Math.min(h.max,m(f,h.max))),l=d.type;e=d._range;var p,q=d.dataGrouping;if(null!==g&&null!==f){c.fixedRange=e;q&&(this.forcedDataGrouping=!0,G.prototype.setDataGrouping.call(h||{chart:this.chart},q,!1),this.frozenStates=d.preserveDataGrouping);
if("month"===l||"year"===l)if(h){l={range:d,max:k,chart:c,dataMin:g,dataMax:f};var r=h.minFromRange.call(l);H(l.newMax)&&(k=l.newMax)}else e=d;else if(e)r=Math.max(k-e,g),k=Math.min(r+e,f);else if("ytd"===l)if(h)void 0===f&&(g=Number.MAX_VALUE,f=Number.MIN_VALUE,c.series.forEach(function(a){a=a.xData;g=Math.min(a[0],g);f=Math.max(a[a.length-1],f)}),b=!1),k=this.getYTDExtremes(f,g,c.time.useUTC),r=p=k.min,k=k.max;else{this.deferredYTDClick=a;return}else"all"===l&&h&&(r=g,k=f);r+=d._offsetMin;k+=d._offsetMax;
this.setSelected(a);if(h)h.setExtremes(r,k,m(b,1),null,{trigger:"rangeSelectorButton",rangeSelectorButton:d});else{var u=C(c.options.xAxis)[0];var w=u.range;u.range=e;var y=u.min;u.min=p;t(c,"load",function(){u.range=w;u.min=y})}}},setSelected:function(a){this.selected=this.options.selected=a},defaultButtons:[{type:"month",count:1,text:"1m"},{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"ytd",text:"YTD"},{type:"year",count:1,text:"1y"},{type:"all",text:"All"}],init:function(a){var c=
this,d=a.options.rangeSelector,h=d.buttons||[].concat(c.defaultButtons),f=d.selected,e=function(){var a=c.minInput,d=c.maxInput;a&&a.blur&&b(a,"blur");d&&d.blur&&b(d,"blur")};c.chart=a;c.options=d;c.buttons=[];c.buttonOptions=h;this.unMouseDown=t(a.container,"mousedown",e);this.unResize=t(a,"resize",e);h.forEach(c.computeButtonRange);void 0!==f&&h[f]&&this.clickButton(f,!1);t(a,"load",function(){a.xAxis&&a.xAxis[0]&&t(a.xAxis[0],"setExtremes",function(b){this.max-this.min!==a.fixedRange&&"rangeSelectorButton"!==
b.trigger&&"updatedData"!==b.trigger&&c.forcedDataGrouping&&!c.frozenStates&&this.setDataGrouping(!1,!1)})})},updateButtonStates:function(){var a=this,b=this.chart,c=b.xAxis[0],d=Math.round(c.max-c.min),f=!c.hasVisibleSeries,e=b.scroller&&b.scroller.getUnionExtremes()||c,g=e.dataMin,k=e.dataMax;b=a.getYTDExtremes(k,g,b.time.useUTC);var l=b.min,m=b.max,p=a.selected,q=H(p),t=a.options.allButtonsEnabled,u=a.buttons;a.buttonOptions.forEach(function(b,e){var h=b._range,n=b.type,r=b.count||1,v=u[e],x=0,
A=b._offsetMax-b._offsetMin;b=e===p;var z=h>k-g,w=h<c.minRange,y=!1,B=!1;h=h===d;("month"===n||"year"===n)&&d+36E5>=864E5*{month:28,year:365}[n]*r-A&&d-36E5<=864E5*{month:31,year:366}[n]*r+A?h=!0:"ytd"===n?(h=m-l+A===d,y=!b):"all"===n&&(h=c.max-c.min>=k-g,B=!b&&q&&h);n=!t&&(z||w||B||f);r=b&&h||h&&!q&&!y||b&&a.frozenStates;n?x=3:r&&(q=!0,x=2);v.state!==x&&(v.setState(x),0===x&&p===e&&a.setSelected(null))})},computeButtonRange:function(a){var b=a.type,c=a.count||1,d={millisecond:1,second:1E3,minute:6E4,
hour:36E5,day:864E5,week:6048E5};if(d[b])a._range=d[b]*c;else if("month"===b||"year"===b)a._range=864E5*{month:30,year:365}[b]*c;a._offsetMin=m(a.offsetMin,0);a._offsetMax=m(a.offsetMax,0);a._range+=a._offsetMax-a._offsetMin},setInputValue:function(a,b){var c=this.chart.options.rangeSelector,d=this.chart.time,h=this[a+"Input"];D(b)&&(h.previousValue=h.HCTime,h.HCTime=b);h.value=d.dateFormat(c.inputEditDateFormat||"%Y-%m-%d",h.HCTime);this[a+"DateBox"].attr({text:d.dateFormat(c.inputDateFormat||"%b %e, %Y",
h.HCTime)})},showInput:function(a){var b=this.inputGroup,c=this[a+"DateBox"];u(this[a+"Input"],{left:b.translateX+c.x+"px",top:b.translateY+"px",width:c.width-2+"px",height:c.height-2+"px",border:"2px solid silver"})},hideInput:function(a){u(this[a+"Input"],{border:0,width:"1px",height:"1px"});this.setInputValue(a)},drawInput:function(b){function c(){var a=z.value,b=(g.inputDateParser||Date.parse)(a),c=k.xAxis[0],d=k.scroller&&k.scroller.xAxis?k.scroller.xAxis:c,e=d.dataMin;d=d.dataMax;b!==z.previousValue&&
(z.previousValue=b,H(b)||(b=a.split("-"),b=Date.UTC(y(b[0]),y(b[1])-1,y(b[2]))),H(b)&&(k.time.useUTC||(b+=6E4*(new Date).getTimezoneOffset()),t?b>h.maxInput.HCTime?b=void 0:b<e&&(b=e):b<h.minInput.HCTime?b=void 0:b>d&&(b=d),void 0!==b&&c.setExtremes(t?b:c.min,t?c.max:b,void 0,void 0,{trigger:"rangeSelectorInput"})))}var h=this,k=h.chart,m=k.renderer.style||{},e=k.renderer,g=k.options.rangeSelector,q=h.div,t="min"===b,z,w,C=this.inputGroup;this[b+"Label"]=w=e.label(p.lang[t?"rangeSelectorFrom":"rangeSelectorTo"],
this.inputGroup.offset).addClass("highcharts-range-label").attr({padding:2}).add(C);C.offset+=w.width+5;this[b+"DateBox"]=e=e.label("",C.offset).addClass("highcharts-range-input").attr({padding:2,width:g.inputBoxWidth||90,height:g.inputBoxHeight||17,"text-align":"center"}).on("click",function(){h.showInput(b);h[b+"Input"].focus()});k.styledMode||e.attr({stroke:g.inputBoxBorderColor||"#cccccc","stroke-width":1});e.add(C);C.offset+=e.width+(t?10:0);this[b+"Input"]=z=l("input",{name:b,className:"highcharts-range-selector",
type:"text"},{top:k.plotTop+"px"},q);k.styledMode||(w.css(f(m,g.labelStyle)),e.css(f({color:"#333333"},m,g.inputStyle)),u(z,a({position:"absolute",border:0,width:"1px",height:"1px",padding:0,textAlign:"center",fontSize:m.fontSize,fontFamily:m.fontFamily,top:"-9999em"},g.inputStyle)));z.onfocus=function(){h.showInput(b)};z.onblur=function(){z===d.doc.activeElement&&c();h.hideInput(b);z.blur()};z.onchange=c;z.onkeypress=function(a){13===a.keyCode&&c()}},getPosition:function(){var a=this.chart,b=a.options.rangeSelector;
a="top"===b.verticalAlign?a.plotTop-a.axisOffset[0]:0;return{buttonTop:a+b.buttonPosition.y,inputTop:a+b.inputPosition.y-10}},getYTDExtremes:function(a,b,c){var d=this.chart.time,f=new d.Date(a),e=d.get("FullYear",f);c=c?d.Date.UTC(e,0,1):+new d.Date(e,0,1);b=Math.max(b||0,c);f=f.getTime();return{max:Math.min(a||f,f),min:b}},render:function(a,b){var c=this,d=c.chart,f=d.renderer,e=d.container,g=d.options,h=g.exporting&&!1!==g.exporting.enabled&&g.navigation&&g.navigation.buttonOptions,k=p.lang,q=
c.div,r=g.rangeSelector,t=m(g.chart.style&&g.chart.style.zIndex,0)+1;g=r.floating;var u=c.buttons;q=c.inputGroup;var w=r.buttonTheme,y=r.buttonPosition,C=r.inputPosition,D=r.inputEnabled,E=w&&w.states,G=d.plotLeft,H=c.buttonGroup;var I=c.rendered;var K=c.options.verticalAlign,X=d.legend,Q=X&&X.options,S=y.y,ba=C.y,Y=I||!1,Z=Y?"animate":"attr",U=0,V=0,aa;if(!1!==r.enabled){I||(c.group=I=f.g("range-selector-group").attr({zIndex:7}).add(),c.buttonGroup=H=f.g("range-selector-buttons").add(I),c.zoomText=
f.text(k.rangeSelectorZoom,0,15).add(H),d.styledMode||(c.zoomText.css(r.labelStyle),w["stroke-width"]=m(w["stroke-width"],0)),c.buttonOptions.forEach(function(a,b){u[b]=f.button(a.text,0,0,function(d){var e=a.events&&a.events.click,g;e&&(g=e.call(a,d));!1!==g&&c.clickButton(b);c.isActive=!0},w,E&&E.hover,E&&E.select,E&&E.disabled).attr({"text-align":"center"}).add(H)}),!1!==D&&(c.div=q=l("div",null,{position:"relative",height:0,zIndex:t}),e.parentNode.insertBefore(q,e),c.inputGroup=q=f.g("input-group").add(I),
q.offset=0,c.drawInput("min"),c.drawInput("max")));c.zoomText[Z]({x:m(G+y.x,G)});var ea=m(G+y.x,G)+c.zoomText.getBBox().width+5;c.buttonOptions.forEach(function(a,b){u[b][Z]({x:ea});ea+=u[b].width+m(r.buttonSpacing,5)});G=d.plotLeft-d.spacing[3];c.updateButtonStates();h&&this.titleCollision(d)&&"top"===K&&"right"===y.align&&y.y+H.getBBox().height-12<(h.y||0)+h.height&&(U=-40);"left"===y.align?aa=y.x-d.spacing[3]:"right"===y.align&&(aa=y.x+U-d.spacing[1]);H.align({y:y.y,width:H.getBBox().width,align:y.align,
x:aa},!0,d.spacingBox);c.group.placed=Y;c.buttonGroup.placed=Y;!1!==D&&(U=h&&this.titleCollision(d)&&"top"===K&&"right"===C.align&&C.y-q.getBBox().height-12<(h.y||0)+h.height+d.spacing[0]?-40:0,"left"===C.align?aa=G:"right"===C.align&&(aa=-Math.max(d.axisOffset[1],-U)),q.align({y:C.y,width:q.getBBox().width,align:C.align,x:C.x+aa-2},!0,d.spacingBox),e=q.alignAttr.translateX+q.alignOptions.x-U+q.getBBox().x+2,h=q.alignOptions.width,k=H.alignAttr.translateX+H.getBBox().x,aa=H.getBBox().width+20,(C.align===
y.align||k+aa>e&&e+h>k&&S<ba+q.getBBox().height)&&q.attr({translateX:q.alignAttr.translateX+(d.axisOffset[1]>=-U?0:-U),translateY:q.alignAttr.translateY+H.getBBox().height+10}),c.setInputValue("min",a),c.setInputValue("max",b),c.inputGroup.placed=Y);c.group.align({verticalAlign:K},!0,d.spacingBox);a=c.group.getBBox().height+20;b=c.group.alignAttr.translateY;"bottom"===K&&(X=Q&&"bottom"===Q.verticalAlign&&Q.enabled&&!Q.floating?X.legendHeight+m(Q.margin,10):0,a=a+X-20,V=b-a-(g?0:r.y)-(d.titleOffset?
d.titleOffset[2]:0)-10);if("top"===K)g&&(V=0),d.titleOffset&&d.titleOffset[0]&&(V=d.titleOffset[0]),V+=d.margin[0]-d.spacing[0]||0;else if("middle"===K)if(ba===S)V=0>ba?b+void 0:b;else if(ba||S)V=0>ba||0>S?V-Math.min(ba,S):b-a+NaN;c.group.translate(r.x,r.y+Math.floor(V));!1!==D&&(c.minInput.style.marginTop=c.group.translateY+"px",c.maxInput.style.marginTop=c.group.translateY+"px");c.rendered=!0}},getHeight:function(){var a=this.options,b=this.group,c=a.y,d=a.buttonPosition.y,f=a.inputPosition.y;if(a.height)return a.height;
a=b?b.getBBox(!0).height+13+c:0;b=Math.min(f,d);if(0>f&&0>d||0<f&&0<d)a+=Math.abs(b);return a},titleCollision:function(a){return!(a.options.title.text||a.options.subtitle.text)},update:function(a){var b=this.chart;f(!0,b.options.rangeSelector,a);this.destroy();this.init(b);b.rangeSelector.render()},destroy:function(){var a=this,b=a.minInput,d=a.maxInput;a.unMouseDown();a.unResize();q(a.buttons);b&&(b.onfocus=b.onblur=b.onchange=null);d&&(d.onfocus=d.onblur=d.onchange=null);E(a,function(b,d){b&&"chart"!==
d&&(b.destroy?b.destroy():b.nodeType&&c(this[d]));b!==w.prototype[d]&&(a[d]=null)},this)}};G.prototype.minFromRange=function(){var a=this.range,b={month:"Month",year:"FullYear"}[a.type],c=this.max,d=this.chart.time,f=function(a,c){var e=new d.Date(a),g=d.get(b,e);d.set(b,e,g+c);g===d.get(b,e)&&d.set("Date",e,0);return e.getTime()-a};if(H(a)){var e=c-a;var g=a}else e=c+f(c,-a.count),this.chart&&(this.chart.fixedRange=c-e);var k=m(this.dataMin,Number.MIN_VALUE);H(e)||(e=k);e<=k&&(e=k,void 0===g&&(g=
f(e,a.count)),this.newMax=Math.min(e+g,this.dataMax));H(c)||(e=void 0);return e};d.RangeSelector||(t(k,"afterGetContainer",function(){this.options.rangeSelector.enabled&&(this.rangeSelector=new w(this))}),t(k,"beforeRender",function(){var a=this.axes,b=this.rangeSelector;b&&(H(b.deferredYTDClick)&&(b.clickButton(b.deferredYTDClick),delete b.deferredYTDClick),a.forEach(function(a){a.updateNames();a.setScale()}),this.getAxisMargins(),b.render(),a=b.options.verticalAlign,b.options.floating||("bottom"===
a?this.extraBottomMargin=!0:"middle"!==a&&(this.extraTopMargin=!0)))}),t(k,"update",function(a){var b=a.options.rangeSelector;a=this.rangeSelector;var c=this.extraBottomMargin,d=this.extraTopMargin;b&&b.enabled&&!D(a)&&(this.options.rangeSelector.enabled=!0,this.rangeSelector=new w(this));this.extraTopMargin=this.extraBottomMargin=!1;a&&(a.render(),b=b&&b.verticalAlign||a.options&&a.options.verticalAlign,a.options.floating||("bottom"===b?this.extraBottomMargin=!0:"middle"!==b&&(this.extraTopMargin=
!0)),this.extraBottomMargin!==c||this.extraTopMargin!==d)&&(this.isDirtyBox=!0)}),t(k,"render",function(){var a=this.rangeSelector;a&&!a.options.floating&&(a.render(),a=a.options.verticalAlign,"bottom"===a?this.extraBottomMargin=!0:"middle"!==a&&(this.extraTopMargin=!0))}),t(k,"getMargins",function(){var a=this.rangeSelector;a&&(a=a.getHeight(),this.extraTopMargin&&(this.plotTop+=a),this.extraBottomMargin&&(this.marginBottom+=a))}),k.prototype.callbacks.push(function(a){function b(){c=a.xAxis[0].getExtremes();
H(c.min)&&d.render(c.min,c.max)}var c,d=a.rangeSelector;if(d){var f=t(a.xAxis[0],"afterSetExtremes",function(a){d.render(a.min,a.max)});var e=t(a,"redraw",b);b()}t(a,"destroy",function(){d&&(e(),f())})}),d.RangeSelector=w)});K(I,"parts/StockChart.js",[I["parts/Globals.js"],I["parts/Utilities.js"]],function(d,k){var w=k.defined,D=k.isNumber,H=k.isString,E=k.splat;k=d.addEvent;var y=d.arrayMax,C=d.arrayMin,t=d.Axis,G=d.Chart,u=d.extend,l=d.format,p=d.merge,q=d.pick,c=d.Point,a=d.Renderer,b=d.Series,
f=d.SVGRenderer,m=d.VMLRenderer,h=b.prototype,r=h.init,x=h.processData,v=c.prototype.tooltipFormatter;d.StockChart=d.stockChart=function(a,b,c){var e=H(a)||a.nodeName,g=arguments[e?1:0],f=g,h=g.series,k=d.getOptions(),l,m=q(g.navigator&&g.navigator.enabled,k.navigator.enabled,!0),n=m?{startOnTick:!1,endOnTick:!1}:null;g.xAxis=E(g.xAxis||{}).map(function(a,b){return p({minPadding:0,maxPadding:0,overscroll:0,ordinal:!0,title:{text:null},labels:{overflow:"justify"},showLastLabel:!0},k.xAxis,k.xAxis&&
k.xAxis[b],a,{type:"datetime",categories:null},n)});g.yAxis=E(g.yAxis||{}).map(function(a,b){l=q(a.opposite,!0);return p({labels:{y:-2},opposite:l,showLastLabel:!(!a.categories&&"category"!==a.type),title:{text:null}},k.yAxis,k.yAxis&&k.yAxis[b],a)});g.series=null;g=p({chart:{panning:!0,pinchType:"x"},navigator:{enabled:m},scrollbar:{enabled:q(k.scrollbar.enabled,!0)},rangeSelector:{enabled:q(k.rangeSelector.enabled,!0)},title:{text:null},tooltip:{split:q(k.tooltip.split,!0),crosshairs:!0},legend:{enabled:!1}},
g,{isStock:!0});g.series=f.series=h;return e?new G(a,g,c):new G(g,b)};k(b,"setOptions",function(a){function b(a){return d.seriesTypes[a]&&c instanceof d.seriesTypes[a]}var c=this,f;this.chart.options.isStock&&(b("column")||b("columnrange")?f={borderWidth:0,shadow:!1}:!b("line")||b("scatter")||b("sma")||(f={marker:{enabled:!1,radius:2}}),f&&(a.plotOptions[this.type]=p(a.plotOptions[this.type],f)))});k(t,"autoLabelAlign",function(a){var b=this.chart,c=this.options;b=b._labelPanes=b._labelPanes||{};
var d=this.options.labels;this.chart.options.isStock&&"yAxis"===this.coll&&(c=c.top+","+c.height,!b[c]&&d.enabled&&(15===d.x&&(d.x=0),void 0===d.align&&(d.align="right"),b[c]=this,a.align="right",a.preventDefault()))});k(t,"destroy",function(){var a=this.chart,b=this.options&&this.options.top+","+this.options.height;b&&a._labelPanes&&a._labelPanes[b]===this&&delete a._labelPanes[b]});k(t,"getPlotLinePath",function(a){function b(a){var b="xAxis"===a?"yAxis":"xAxis";a=c.options[b];return D(a)?[h[b][a]]:
H(a)?[h.get(a)]:f.map(function(a){return a[b]})}var c=this,f=this.isLinked&&!this.series?this.linkedParent.series:this.series,h=c.chart,k=h.renderer,l=c.left,m=c.top,n,p,r,t,u=[],v=[],x=a.translatedValue,y=a.value,C=a.force;if(h.options.isStock&&!1!==a.acrossPanes&&"xAxis"===c.coll||"yAxis"===c.coll){a.preventDefault();v=b(c.coll);var E=c.isXAxis?h.yAxis:h.xAxis;E.forEach(function(a){if(w(a.options.id)?-1===a.options.id.indexOf("navigator"):1){var b=a.isXAxis?"yAxis":"xAxis";b=w(a.options[b])?h[b][a.options[b]]:
h[b][0];c===b&&v.push(a)}});var G=v.length?[]:[c.isXAxis?h.yAxis[0]:h.xAxis[0]];v.forEach(function(a){-1!==G.indexOf(a)||d.find(G,function(b){return b.pos===a.pos&&b.len===a.len})||G.push(a)});var I=q(x,c.translate(y,null,null,a.old));D(I)&&(c.horiz?G.forEach(function(a){var b;p=a.pos;t=p+a.len;n=r=Math.round(I+c.transB);"pass"!==C&&(n<l||n>l+c.width)&&(C?n=r=Math.min(Math.max(l,n),l+c.width):b=!0);b||u.push("M",n,p,"L",r,t)}):G.forEach(function(a){var b;n=a.pos;r=n+a.len;p=t=Math.round(m+c.height-
I);"pass"!==C&&(p<m||p>m+c.height)&&(C?p=t=Math.min(Math.max(m,p),c.top+c.height):b=!0);b||u.push("M",n,p,"L",r,t)}));a.path=0<u.length?k.crispPolyLine(u,a.lineWidth||1):null}});f.prototype.crispPolyLine=function(a,b){var c;for(c=0;c<a.length;c+=6)a[c+1]===a[c+4]&&(a[c+1]=a[c+4]=Math.round(a[c+1])-b%2/2),a[c+2]===a[c+5]&&(a[c+2]=a[c+5]=Math.round(a[c+2])+b%2/2);return a};a===m&&(m.prototype.crispPolyLine=f.prototype.crispPolyLine);k(t,"afterHideCrosshair",function(){this.crossLabel&&(this.crossLabel=
this.crossLabel.hide())});k(t,"afterDrawCrosshair",function(a){var b,c;if(w(this.crosshair.label)&&this.crosshair.label.enabled&&this.cross){var d=this.chart,f=this.options.crosshair.label,h=this.horiz,k=this.opposite,m=this.left,n=this.top,p=this.crossLabel,r=f.format,t="",v="inside"===this.options.tickPosition,x=!1!==this.crosshair.snap,y=0,C=a.e||this.cross&&this.cross.e,D=a.point;var E=this.lin2log;if(this.isLog){a=E(this.min);var G=E(this.max)}else a=this.min,G=this.max;E=h?"center":k?"right"===
this.labelAlign?"right":"left":"left"===this.labelAlign?"left":"center";p||(p=this.crossLabel=d.renderer.label(null,null,null,f.shape||"callout").addClass("highcharts-crosshair-label"+(this.series[0]&&" highcharts-color-"+this.series[0].colorIndex)).attr({align:f.align||E,padding:q(f.padding,8),r:q(f.borderRadius,3),zIndex:2}).add(this.labelGroup),d.styledMode||p.attr({fill:f.backgroundColor||this.series[0]&&this.series[0].color||"#666666",stroke:f.borderColor||"","stroke-width":f.borderWidth||0}).css(u({color:"#ffffff",
fontWeight:"normal",fontSize:"11px",textAlign:"center"},f.style)));h?(E=x?D.plotX+m:C.chartX,n+=k?0:this.height):(E=k?this.width+m:0,n=x?D.plotY+n:C.chartY);r||f.formatter||(this.isDatetimeAxis&&(t="%b %d, %Y"),r="{value"+(t?":"+t:"")+"}");t=x?D[this.isXAxis?"x":"y"]:this.toValue(h?C.chartX:C.chartY);p.attr({text:r?l(r,{value:t},d.time):f.formatter.call(this,t),x:E,y:n,visibility:t<a||t>G?"hidden":"visible"});f=p.getBBox();if(h){if(v&&!k||!v&&k)n=p.y-f.height}else n=p.y-f.height/2;h?(b=m-f.x,c=m+
this.width-f.x):(b="left"===this.labelAlign?m:0,c="right"===this.labelAlign?m+this.width:d.chartWidth);p.translateX<b&&(y=b-p.translateX);p.translateX+f.width>=c&&(y=-(p.translateX+f.width-c));p.attr({x:E+y,y:n,anchorX:h?E:this.opposite?0:d.chartWidth,anchorY:h?this.opposite?d.chartHeight:0:n+f.height/2})}});h.init=function(){r.apply(this,arguments);this.setCompare(this.options.compare)};h.setCompare=function(a){this.modifyValue="value"===a||"percent"===a?function(b,c){var d=this.compareValue;if(void 0!==
b&&void 0!==d)return b="value"===a?b-d:b/d*100-(100===this.options.compareBase?0:100),c&&(c.change=b),b}:null;this.userOptions.compare=a;this.chart.hasRendered&&(this.isDirty=!0)};h.processData=function(a){var b,c=-1,d=!0===this.options.compareStart?0:1;x.apply(this,arguments);if(this.xAxis&&this.processedYData){var f=this.processedXData;var h=this.processedYData;var k=h.length;this.pointArrayMap&&(c=this.pointArrayMap.indexOf(this.options.pointValKey||this.pointValKey||"y"));for(b=0;b<k-d;b++){var l=
h[b]&&-1<c?h[b][c]:h[b];if(D(l)&&f[b+d]>=this.xAxis.min&&0!==l){this.compareValue=l;break}}}};k(b,"afterGetExtremes",function(){if(this.modifyValue){var a=[this.modifyValue(this.dataMin),this.modifyValue(this.dataMax)];this.dataMin=C(a);this.dataMax=y(a)}});t.prototype.setCompare=function(a,b){this.isXAxis||(this.series.forEach(function(b){b.setCompare(a)}),q(b,!0)&&this.chart.redraw())};c.prototype.tooltipFormatter=function(a){a=a.replace("{point.change}",(0<this.change?"+":"")+d.numberFormat(this.change,
q(this.series.tooltipOptions.changeDecimals,2)));return v.apply(this,[a])};k(b,"render",function(){var a=this.chart;if(!(a.is3d&&a.is3d()||a.polar)&&this.xAxis&&!this.xAxis.isRadial){var b=this.yAxis.len;if(this.xAxis.axisLine){var c=a.plotTop+a.plotHeight-this.yAxis.pos-this.yAxis.len,d=Math.floor(this.xAxis.axisLine.strokeWidth()/2);0<=c&&(b-=Math.max(d-c,0))}!this.clipBox&&this.animate?(this.clipBox=p(a.clipBox),this.clipBox.width=this.xAxis.len,this.clipBox.height=b):a[this.sharedClipKey]&&(a[this.sharedClipKey].animate({width:this.xAxis.len,
height:b}),a[this.sharedClipKey+"m"]&&a[this.sharedClipKey+"m"].animate({width:this.xAxis.len}))}});k(G,"update",function(a){a=a.options;"scrollbar"in a&&this.navigator&&(p(!0,this.options.scrollbar,a.scrollbar),this.navigator.update({},!1),delete a.scrollbar)})});K(I,"masters/modules/stock.src.js",[],function(){});K(I,"masters/highstock.src.js",[I["masters/highcharts.src.js"]],function(d){d.product="Highstock";return d});I["masters/highstock.src.js"]._modules=I;return I["masters/highstock.src.js"]});
//# sourceMappingURL=highstock.js.map
/******************************************************************************
Name:    Highslide JS
Version: 4.1.8 (October 27 2009)
Config:  default +events +unobtrusive +imagemap +slideshow +positioning +transitions +viewport +thumbstrip +inline +ajax +iframe +flash
Author:  Torstein HÃ¸nsi
Support: http://highslide.com/support

Licence:
Highslide JS is licensed under a Creative Commons Attribution-NonCommercial 2.5
License (http://creativecommons.org/licenses/by-nc/2.5/).

You are free:
	* to copy, distribute, display, and perform the work
	* to make derivative works

Under the following conditions:
	* Attribution. You must attribute the work in the manner  specified by  the
	  author or licensor.
	* Noncommercial. You may not use this work for commercial purposes.

* For  any  reuse  or  distribution, you  must make clear to others the license
  terms of this work.
* Any  of  these  conditions  can  be  waived  if  you  get permission from the 
  copyright holder.

Your fair use and other rights are in no way affected by the above.
******************************************************************************/
if (!hs) { var hs = {
// Language strings
lang : {
	cssDirection: 'ltr',
	loadingText : 'Loading...',
	loadingTitle : 'Click to cancel',
	focusTitle : 'Click to bring to front',
	fullExpandTitle : 'Expand to actual size (f)',
	creditsText : 'Powered by <i>Highslide JS</i>',
	creditsTitle : 'Go to the Highslide JS homepage',
	previousText : 'Previous',
	nextText : 'Next', 
	moveText : 'Move',
	closeText : 'Close', 
	closeTitle : 'Close (esc)', 
	resizeTitle : 'Resize',
	playText : 'Play',
	playTitle : 'Play slideshow (spacebar)',
	pauseText : 'Pause',
	pauseTitle : 'Pause slideshow (spacebar)',
	previousTitle : 'Previous (arrow left)',
	nextTitle : 'Next (arrow right)',
	moveTitle : 'Move',
	fullExpandText : '1:1',
	number: 'Image %1 of %2',
	restoreTitle : 'Click to close image, click and drag to move. Use arrow keys for next and previous.'
},
// See http://highslide.com/ref for examples of settings  
graphicsDir : 'highslide/graphics/',
expandCursor : 'zoomin.cur', // null disables
restoreCursor : 'zoomout.cur', // null disables
expandDuration : 250, // milliseconds
restoreDuration : 250,
marginLeft : 15,
marginRight : 15,
marginTop : 15,
marginBottom : 15,
zIndexCounter : 1001, // adjust to other absolutely positioned elements
loadingOpacity : 0.75,
allowMultipleInstances: true,
numberOfImagesToPreload : 5,
outlineWhileAnimating : 2, // 0 = never, 1 = always, 2 = HTML only 
outlineStartOffset : 3, // ends at 10
padToMinWidth : false, // pad the popup width to make room for wide caption
fullExpandPosition : 'bottom right',
fullExpandOpacity : 1,
showCredits : true, // you can set this to false if you want
creditsHref : 'http://highslide.com/',
creditsTarget : '_self',
enableKeyListener : true,
openerTagNames : ['a', 'area'], // Add more to allow slideshow indexing
transitions : [],
transitionDuration: 250,
dimmingOpacity: 0, // Lightbox style dimming background
dimmingDuration: 50, // 0 for instant dimming

allowWidthReduction : false,
allowHeightReduction : true,
preserveContent : true, // Preserve changes made to the content and position of HTML popups.
objectLoadTime : 'before', // Load iframes 'before' or 'after' expansion.
cacheAjax : true, // Cache ajax popups for instant display. Can be overridden for each popup.
anchor : 'auto', // where the image expands from
align : 'auto', // position in the client (overrides anchor)
targetX: null, // the id of a target element
targetY: null,
dragByHeading: true,
minWidth: 200,
minHeight: 200,
allowSizeReduction: true, // allow the image to reduce to fit client size. If false, this overrides minWidth and minHeight
outlineType : 'drop-shadow', // set null to disable outlines
skin : {
	controls:
		'<div class="highslide-controls"><ul>'+
			'<li class="highslide-previous">'+
				'<a href="#" title="{hs.lang.previousTitle}">'+
				'<span>{hs.lang.previousText}</span></a>'+
			'</li>'+
			'<li class="highslide-play">'+
				'<a href="#" title="{hs.lang.playTitle}">'+
				'<span>{hs.lang.playText}</span></a>'+
			'</li>'+
			'<li class="highslide-pause">'+
				'<a href="#" title="{hs.lang.pauseTitle}">'+
				'<span>{hs.lang.pauseText}</span></a>'+
			'</li>'+
			'<li class="highslide-next">'+
				'<a href="#" title="{hs.lang.nextTitle}">'+
				'<span>{hs.lang.nextText}</span></a>'+
			'</li>'+
			'<li class="highslide-move">'+
				'<a href="#" title="{hs.lang.moveTitle}">'+
				'<span>{hs.lang.moveText}</span></a>'+
			'</li>'+
			'<li class="highslide-full-expand">'+
				'<a href="#" title="{hs.lang.fullExpandTitle}">'+
				'<span>{hs.lang.fullExpandText}</span></a>'+
			'</li>'+
			'<li class="highslide-close">'+
				'<a href="#" title="{hs.lang.closeTitle}" >'+
				'<span>{hs.lang.closeText}</span></a>'+
			'</li>'+
		'</ul></div>'
	,
	contentWrapper:
		'<div class="highslide-header"><ul>'+
			'<li class="highslide-previous">'+
				'<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">'+
				'<span>{hs.lang.previousText}</span></a>'+
			'</li>'+
			'<li class="highslide-next">'+
				'<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">'+
				'<span>{hs.lang.nextText}</span></a>'+
			'</li>'+
			'<li class="highslide-move">'+
				'<a href="#" title="{hs.lang.moveTitle}" onclick="return false">'+
				'<span>{hs.lang.moveText}</span></a>'+
			'</li>'+
			'<li class="highslide-close">'+
				'<a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)">'+
				'<span>{hs.lang.closeText}</span></a>'+
			'</li>'+
		'</ul></div>'+
		'<div class="highslide-body"></div>'+
		'<div class="highslide-footer"><div>'+
			'<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>'+
		'</div></div>'
},
// END OF YOUR SETTINGS


// declare internal properties
preloadTheseImages : [],
continuePreloading: true,
expanders : [],
overrides : [
	'allowSizeReduction',
	'useBox',
	'anchor',
	'align',
	'targetX',
	'targetY',
	'outlineType',
	'outlineWhileAnimating',
	'captionId',
	'captionText',
	'captionEval',
	'captionOverlay',
	'headingId',
	'headingText',
	'headingEval',
	'headingOverlay',
	'creditsPosition',
	'dragByHeading',
	'autoplay',
	'numberPosition',
	'transitions',
	'dimmingOpacity',
	
	'width',
	'height',
	
	'contentId',
	'allowWidthReduction',
	'allowHeightReduction',
	'preserveContent',
	'maincontentId',
	'maincontentText',
	'maincontentEval',
	'objectType',	
	'cacheAjax',	
	'objectWidth',
	'objectHeight',
	'objectLoadTime',	
	'swfOptions',
	'wrapperClassName',
	'minWidth',
	'minHeight',
	'maxWidth',
	'maxHeight',
	'pageOrigin',
	'slideshowGroup',
	'easing',
	'easingClose',
	'fadeInOut',
	'src'
],
overlays : [],
idCounter : 0,
oPos : {
	x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],
	y: ['above', 'top', 'middle', 'bottom', 'below']
},
mouse: {},
headingOverlay: {},
captionOverlay: {},
swfOptions: { flashvars: {}, params: {}, attributes: {} },
timers : [],

slideshows : [],

pendingOutlines : {},
sleeping : [],
preloadTheseAjax : [],
cacheBindings : [],
cachedGets : {},
clones : {},
onReady: [],
uaVersion: /Trident\/4\.0/.test(navigator.userAgent) ? 8 :
	parseFloat((navigator.userAgent.toLowerCase().match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1]),
ie : (document.all && !window.opera),
safari : /Safari/.test(navigator.userAgent),
geckoMac : /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),

$ : function (id) {
	if (id) return document.getElementById(id);
},

push : function (arr, val) {
	arr[arr.length] = val;
},

createElement : function (tag, attribs, styles, parent, nopad) {
	var el = document.createElement(tag);
	if (attribs) hs.extend(el, attribs);
	if (nopad) hs.setStyles(el, {padding: 0, border: 'none', margin: 0});
	if (styles) hs.setStyles(el, styles);
	if (parent) parent.appendChild(el);	
	return el;
},

extend : function (el, attribs) {
	for (var x in attribs) el[x] = attribs[x];
	return el;
},

setStyles : function (el, styles) {
	for (var x in styles) {
		if (hs.ie && x == 'opacity') {
			if (styles[x] > 0.99) el.style.removeAttribute('filter');
			else el.style.filter = 'alpha(opacity='+ (styles[x] * 100) +')';
		}
		else el.style[x] = styles[x];
	}
},
animate: function(el, prop, opt) {
	var start,
		end,
		unit;
	if (typeof opt != 'object' || opt === null) {
		var args = arguments;
		opt = {
			duration: args[2],
			easing: args[3],
			complete: args[4]
		};
	}
	if (typeof opt.duration != 'number') opt.duration = 250;
	opt.easing = Math[opt.easing] || Math.easeInQuad;
	opt.curAnim = hs.extend({}, prop);
	for (var name in prop) {
		var e = new hs.fx(el, opt , name );
		
		start = parseFloat(hs.css(el, name)) || 0;
		end = parseFloat(prop[name]);
		unit = name != 'opacity' ? 'px' : '';
		
		e.custom( start, end, unit );
	}	
},
css: function(el, prop) {
	if (el.style[prop]) {
		return el.style[prop];
	} else if (document.defaultView) {
		return document.defaultView.getComputedStyle(el, null).getPropertyValue(prop);

	} else {
		if (prop == 'opacity') prop = 'filter';
		var val = el.currentStyle[prop.replace(/\-(\w)/g, function (a, b){ return b.toUpperCase(); })];
		if (prop == 'filter') 
			val = val.replace(/alpha\(opacity=([0-9]+)\)/, 
				function (a, b) { return b / 100 });
		return val === '' ? 1 : val;
	} 
},

getPageSize : function () {
	var d = document, w = window, iebody = d.compatMode && d.compatMode != 'BackCompat' 
		? d.documentElement : d.body;
	
	var width = hs.ie ? iebody.clientWidth : 
			(d.documentElement.clientWidth || self.innerWidth),
		height = hs.ie ? iebody.clientHeight : self.innerHeight;
	
	hs.page = {
		width: width,
		height: height,		
		scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,
		scrollTop: hs.ie ? iebody.scrollTop : pageYOffset
	};
	return hs.page;
},

getPosition : function(el)	{
	if (/area/i.test(el.tagName)) {
		var imgs = document.getElementsByTagName('img');
		for (var i = 0; i < imgs.length; i++) {
			var u = imgs[i].useMap;
			if (u && u.replace(/^.*?#/, '') == el.parentNode.name) {
				el = imgs[i];
				break;
			}
		}
	}
	var p = { x: el.offsetLeft, y: el.offsetTop };
	while (el.offsetParent)	{
		el = el.offsetParent;
		p.x += el.offsetLeft;
		p.y += el.offsetTop;
		if (el != document.body && el != document.documentElement) {
			p.x -= el.scrollLeft;
			p.y -= el.scrollTop;
		}
	}
	return p;
},

expand : function(a, params, custom, type) {
	if (!a) a = hs.createElement('a', null, { display: 'none' }, hs.container);
	if (typeof a.getParams == 'function') return params;
	if (type == 'html') {
		for (var i = 0; i < hs.sleeping.length; i++) {
			if (hs.sleeping[i] && hs.sleeping[i].a == a) {
				hs.sleeping[i].awake();
				hs.sleeping[i] = null;
				return false;
			}
		}
		hs.hasHtmlExpanders = true;
	}	
	try {	
		new hs.Expander(a, params, custom, type);
		return false;
	} catch (e) { return true; }
},

htmlExpand : function(a, params, custom) {
	return hs.expand(a, params, custom, 'html');
},

getSelfRendered : function() {
	return hs.createElement('div', { 
		className: 'highslide-html-content', 
		innerHTML: hs.replaceLang(hs.skin.contentWrapper) 
	});
},
getElementByClass : function (el, tagName, className) {
	var els = el.getElementsByTagName(tagName);
	for (var i = 0; i < els.length; i++) {
    	if ((new RegExp(className)).test(els[i].className)) {
			return els[i];
		}
	}
	return null;
},
replaceLang : function(s) {
	s = s.replace(/\s/g, ' ');
	var re = /{hs\.lang\.([^}]+)\}/g,
		matches = s.match(re),
		lang;
	if (matches) for (var i = 0; i < matches.length; i++) {
		lang = matches[i].replace(re, "$1");
		if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang]);
	}
	return s;
},


setClickEvents : function () {
	var els = document.getElementsByTagName('a');
	for (var i = 0; i < els.length; i++) {
		var type = hs.isUnobtrusiveAnchor(els[i]);
		if (type && !els[i].hsHasSetClick) {
			(function(){
				var t = type;
				if (hs.fireEvent(hs, 'onSetClickEvent', { element: els[i], type: t })) {
					els[i].onclick =(type == 'image') ?function() { return hs.expand(this) }:
						function() { return hs.htmlExpand(this, { objectType: t } );};
				}
			})();
			els[i].hsHasSetClick = true;	
		}
	}
	hs.getAnchors();
},
isUnobtrusiveAnchor: function(el) {
	if (el.rel == 'highslide') return 'image';
	else if (el.rel == 'highslide-ajax') return 'ajax';
	else if (el.rel == 'highslide-iframe') return 'iframe';
	else if (el.rel == 'highslide-swf') return 'swf';
},

getCacheBinding : function (a) {
	for (var i = 0; i < hs.cacheBindings.length; i++) {
		if (hs.cacheBindings[i][0] == a) {
			var c = hs.cacheBindings[i][1];
			hs.cacheBindings[i][1] = c.cloneNode(1);
			return c;
		}
	}
	return null;
},

preloadAjax : function (e) {
	var arr = hs.getAnchors();
	for (var i = 0; i < arr.htmls.length; i++) {
		var a = arr.htmls[i];
		if (hs.getParam(a, 'objectType') == 'ajax' && hs.getParam(a, 'cacheAjax'))
			hs.push(hs.preloadTheseAjax, a);
	}
	
	hs.preloadAjaxElement(0);
},

preloadAjaxElement : function (i) {
	if (!hs.preloadTheseAjax[i]) return;
	var a = hs.preloadTheseAjax[i];
	var cache = hs.getNode(hs.getParam(a, 'contentId'));
	if (!cache) cache = hs.getSelfRendered();
	var ajax = new hs.Ajax(a, cache, 1);	
   	ajax.onError = function () { };
   	ajax.onLoad = function () {
   		hs.push(hs.cacheBindings, [a, cache]);
   		hs.preloadAjaxElement(i + 1);
   	};
   	ajax.run();
},

focusTopmost : function() {
	var topZ = 0, 
		topmostKey = -1,
		expanders = hs.expanders,
		exp,
		zIndex;
	for (var i = 0; i < expanders.length; i++) {
		exp = expanders[i];
		if (exp) {
			zIndex = exp.wrapper.style.zIndex;
			if (zIndex && zIndex > topZ) {
				topZ = zIndex;				
				topmostKey = i;
			}
		}
	}
	if (topmostKey == -1) hs.focusKey = -1;
	else expanders[topmostKey].focus();
},

getParam : function (a, param) {
	a.getParams = a.onclick;
	var p = a.getParams ? a.getParams() : null;
	a.getParams = null;
	
	return (p && typeof p[param] != 'undefined') ? p[param] : 
		(typeof hs[param] != 'undefined' ? hs[param] : null);
},

getSrc : function (a) {
	var src = hs.getParam(a, 'src');
	if (src) return src;
	return a.href;
},

getNode : function (id) {
	var node = hs.$(id), clone = hs.clones[id], a = {};
	if (!node && !clone) return null;
	if (!clone) {
		clone = node.cloneNode(true);
		clone.id = '';
		hs.clones[id] = clone;
		return node;
	} else {
		return clone.cloneNode(true);
	}
},

discardElement : function(d) {
	if (d) hs.garbageBin.appendChild(d);
	hs.garbageBin.innerHTML = '';
},
dim : function(exp) {
	if (!hs.dimmer) {
		hs.dimmer = hs.createElement ('div', {
				className: 'highslide-dimming highslide-viewport-size',
				owner: '',
				onclick: function() {
					if (hs.fireEvent(hs, 'onDimmerClick'))
					
						hs.close();
				}
			}, {
                visibility: 'visible',
				opacity: 0
			}, hs.container, true);
	}

	hs.dimmer.style.display = '';

	hs.dimmer.owner += '|'+ exp.key;
	if (hs.geckoMac && hs.dimmingGeckoFix)
		hs.setStyles(hs.dimmer, {
			background: 'url('+ hs.graphicsDir + 'geckodimmer.png)',
			opacity: 1
		});
	else
		hs.animate(hs.dimmer, { opacity: exp.dimmingOpacity }, hs.dimmingDuration);
},
undim : function(key) {
	if (!hs.dimmer) return;
	if (typeof key != 'undefined') hs.dimmer.owner = hs.dimmer.owner.replace('|'+ key, '');

	if (
		(typeof key != 'undefined' && hs.dimmer.owner != '')
		|| (hs.upcoming && hs.getParam(hs.upcoming, 'dimmingOpacity'))
	) return;

	if (hs.geckoMac && hs.dimmingGeckoFix) hs.dimmer.style.display = 'none';
	else hs.animate(hs.dimmer, { opacity: 0 }, hs.dimmingDuration, null, function() {
		hs.dimmer.style.display = 'none';
	});
},
transit : function (adj, exp) {
	var last = exp || hs.getExpander();
	exp = last;
	if (hs.upcoming) return false;
	else hs.last = last;
	hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
	try {
		hs.upcoming = adj;
		adj.onclick(); 		
	} catch (e){
		hs.last = hs.upcoming = null;
	}
	try {
		if (!adj || exp.transitions[1] != 'crossfade')
		exp.close();
	} catch (e) {}
	return false;
},

previousOrNext : function (el, op) {
	var exp = hs.getExpander(el);
	if (exp) return hs.transit(exp.getAdjacentAnchor(op), exp);
	else return false;
},

previous : function (el) {
	return hs.previousOrNext(el, -1);
},

next : function (el) {
	return hs.previousOrNext(el, 1);	
},

keyHandler : function(e) {
	if (!e) e = window.event;
	if (!e.target) e.target = e.srcElement; // ie
	if (typeof e.target.form != 'undefined') return true; // form element has focus
	if (!hs.fireEvent(hs, 'onKeyDown', e)) return true;
	var exp = hs.getExpander();
	
	var op = null;
	switch (e.keyCode) {
		case 70: // f
			if (exp) exp.doFullExpand();
			return true;
		case 32: // Space
			op = 2;
			break;
		case 34: // Page Down
		case 39: // Arrow right
		case 40: // Arrow down
			op = 1;
			break;
		case 8:  // Backspace
		case 33: // Page Up
		case 37: // Arrow left
		case 38: // Arrow up
			op = -1;
			break;
		case 27: // Escape
		case 13: // Enter
			op = 0;
	}
	if (op !== null) {
		hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
		if (!hs.enableKeyListener) return true;
		
		if (e.preventDefault) e.preventDefault();
    	else e.returnValue = false;
    	if (exp) {
			if (op == 0) {
				exp.close();
			} else if (op == 2) {
				if (exp.slideshow) exp.slideshow.hitSpace();
			} else {
				if (exp.slideshow) exp.slideshow.pause();
				hs.previousOrNext(exp.key, op);
			}
			return false;
		}
	}
	return true;
},


registerOverlay : function (overlay) {
	hs.push(hs.overlays, hs.extend(overlay, { hsId: 'hsId'+ hs.idCounter++ } ));
},


addSlideshow : function (options) {
	var sg = options.slideshowGroup;
	if (typeof sg == 'object') {
		for (var i = 0; i < sg.length; i++) {
			var o = {};
			for (var x in options) o[x] = options[x];
			o.slideshowGroup = sg[i];
			hs.push(hs.slideshows, o);
		}
	} else {
		hs.push(hs.slideshows, options);
	}
},

getWrapperKey : function (element, expOnly) {
	var el, re = /^highslide-wrapper-([0-9]+)$/;
	// 1. look in open expanders
	el = element;
	while (el.parentNode)	{
		if (el.hsKey !== undefined) return el.hsKey;
		if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
		el = el.parentNode;
	}
	// 2. look in thumbnail
	if (!expOnly) {
		el = element;
		while (el.parentNode)	{
			if (el.tagName && hs.isHsAnchor(el)) {
				for (var key = 0; key < hs.expanders.length; key++) {
					var exp = hs.expanders[key];
					if (exp && exp.a == el) return key;
				}
			}
			el = el.parentNode;
		}
	}
	return null; 
},

getExpander : function (el, expOnly) {
	if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
	if (typeof el == 'number') return hs.expanders[el] || null;
	if (typeof el == 'string') el = hs.$(el);
	return hs.expanders[hs.getWrapperKey(el, expOnly)] || null;
},

isHsAnchor : function (a) {
	return (a.onclick && a.onclick.toString().replace(/\s/g, ' ').match(/hs.(htmlE|e)xpand/));
},

reOrder : function () {
	for (var i = 0; i < hs.expanders.length; i++)
		if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost();
},
fireEvent : function (obj, evt, args) {
	return obj && obj[evt] ? (obj[evt](obj, args) !== false) : true;
},

mouseClickHandler : function(e) 
{	
	if (!e) e = window.event;
	if (e.button > 1) return true;
	if (!e.target) e.target = e.srcElement;
	
	var el = e.target;
	while (el.parentNode
		&& !(/highslide-(image|move|html|resize)/.test(el.className)))
	{
		el = el.parentNode;
	}
	var exp = hs.getExpander(el);
	if (exp && (exp.isClosing || !exp.isExpanded)) return true;
		
	if (exp && e.type == 'mousedown') {
		if (e.target.form) return true;
		var match = el.className.match(/highslide-(image|move|resize)/);
		if (match) {
			hs.dragArgs = { 
				exp: exp , 
				type: match[1], 
				left: exp.x.pos, 
				width: exp.x.size, 
				top: exp.y.pos, 
				height: exp.y.size, 
				clickX: e.clientX, 
				clickY: e.clientY
			};
			
			
			hs.addEventListener(document, 'mousemove', hs.dragHandler);
			if (e.preventDefault) e.preventDefault(); // FF
			
			if (/highslide-(image|html)-blur/.test(exp.content.className)) {
				exp.focus();
				hs.hasFocused = true;
			}
			return false;
		}
		else if (/highslide-html/.test(el.className) && hs.focusKey != exp.key) {
			exp.focus();
			exp.doShowHide('hidden');
		}
	} else if (e.type == 'mouseup') {
		
		hs.removeEventListener(document, 'mousemove', hs.dragHandler);
		
		if (hs.dragArgs) {
			if (hs.styleRestoreCursor && hs.dragArgs.type == 'image') 
				hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
			var hasDragged = hs.dragArgs.hasDragged;
			
			if (!hasDragged &&!hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
				if (hs.fireEvent(exp, 'onImageClick'))
				exp.close();
			} 
			else if (hasDragged || (!hasDragged && hs.hasHtmlExpanders)) {
				hs.dragArgs.exp.doShowHide('hidden');
			}
			
			if (hs.dragArgs.exp.releaseMask) 
				hs.dragArgs.exp.releaseMask.style.display = 'none';
			
			if (hasDragged) hs.fireEvent(hs.dragArgs.exp, 'onDrop', hs.dragArgs);
			hs.hasFocused = false;
			hs.dragArgs = null;
		
		} else if (/highslide-image-blur/.test(el.className)) {
			el.style.cursor = hs.styleRestoreCursor;		
		}
	}
	return false;
},

dragHandler : function(e)
{
	if (!hs.dragArgs) return true;
	if (!e) e = window.event;
	var a = hs.dragArgs, exp = a.exp;
	if (exp.iframe) {		
		if (!exp.releaseMask) exp.releaseMask = hs.createElement('div', null, 
			{ position: 'absolute', width: exp.x.size+'px', height: exp.y.size+'px', 
				left: exp.x.cb+'px', top: exp.y.cb+'px', zIndex: 4,	background: (hs.ie ? 'white' : 'none'), 
				opacity: 0.01 }, 
			exp.wrapper, true);
		if (exp.releaseMask.style.display == 'none')
			exp.releaseMask.style.display = '';
	}
	
	a.dX = e.clientX - a.clickX;
	a.dY = e.clientY - a.clickY;	
	
	var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
	if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0)
		|| (distance > (hs.dragSensitivity || 5));
	
	if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
		if (!hs.fireEvent(exp, 'onDrag', a)) return false;
		
		if (a.type == 'resize') exp.resize(a);
		else {
			exp.moveTo(a.left + a.dX, a.top + a.dY);
			if (a.type == 'image') exp.content.style.cursor = 'move';
		}
	}
	return false;
},

wrapperMouseHandler : function (e) {
	try {
		if (!e) e = window.event;
		var over = /mouseover/i.test(e.type); 
		if (!e.target) e.target = e.srcElement; // ie
		if (hs.ie) e.relatedTarget = 
			over ? e.fromElement : e.toElement; // ie
		var exp = hs.getExpander(e.target);
		if (!exp.isExpanded) return;
		if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget, true) == exp 
			|| hs.dragArgs) return;
		hs.fireEvent(exp, over ? 'onMouseOver' : 'onMouseOut', e);
		for (var i = 0; i < exp.overlays.length; i++) (function() {
			var o = hs.$('hsId'+ exp.overlays[i]);
			if (o && o.hideOnMouseOut) {
				if (over) hs.setStyles(o, { visibility: 'visible', display: '' });
				hs.animate(o, { opacity: over ? o.opacity : 0 }, o.dur);
			}
		})();	
	} catch (e) {}
},
addEventListener : function (el, event, func) {
	if (el == document && event == 'ready') {
		hs.push(hs.onReady, func);
	}
	try {
		el.addEventListener(event, func, false);
	} catch (e) {
		try {
			el.detachEvent('on'+ event, func);
			el.attachEvent('on'+ event, func);
		} catch (e) {
			el['on'+ event] = func;
		}
	} 
},

removeEventListener : function (el, event, func) {
	try {
		el.removeEventListener(event, func, false);
	} catch (e) {
		try {
			el.detachEvent('on'+ event, func);
		} catch (e) {
			el['on'+ event] = null;
		}
	}
},

preloadFullImage : function (i) {
	if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') {
		var img = document.createElement('img');
		img.onload = function() { 
			img = null;
			hs.preloadFullImage(i + 1);
		};
		img.src = hs.preloadTheseImages[i];
	}
},
preloadImages : function (number) {
	if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;
	
	var arr = hs.getAnchors();
	for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) {
		hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]));
	}
	
	// preload outlines
	if (hs.outlineType)	new hs.Outline(hs.outlineType, function () { hs.preloadFullImage(0)} );
	else
	
	hs.preloadFullImage(0);
	
	// preload cursor
	if (hs.restoreCursor) var cur = hs.createElement('img', { src: hs.graphicsDir + hs.restoreCursor });
},


init : function () {
	if (!hs.container) {
	
		hs.getPageSize();
		hs.ieLt7 = hs.ie && hs.uaVersion < 7;
		hs.ie6SSL = hs.ieLt7 && location.protocol == 'https:';
		for (var x in hs.langDefaults) {
			if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];
			else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') 
				hs.lang[x] = hs.langDefaults[x];
		}
		
		hs.container = hs.createElement('div', {
				className: 'highslide-container'
			}, {
				position: 'absolute',
				left: 0, 
				top: 0, 
				width: '100%', 
				zIndex: hs.zIndexCounter,
				direction: 'ltr'
			}, 
			document.body,
			true
		);
		hs.loading = hs.createElement('a', {
				className: 'highslide-loading',
				title: hs.lang.loadingTitle,
				innerHTML: hs.lang.loadingText,
				href: 'javascript:;'
			}, {
				position: 'absolute',
				top: '-9999px',
				opacity: hs.loadingOpacity,
				zIndex: 1
			}, hs.container
		);
		hs.garbageBin = hs.createElement('div', null, { display: 'none' }, hs.container);
		hs.viewport = hs.createElement('div', {
				className: 'highslide-viewport highslide-viewport-size'
			}, {
				visibility: (hs.safari && hs.uaVersion < 525) ? 'visible' : 'hidden'
			}, hs.container, 1
		);
		hs.clearing = hs.createElement('div', null, 
			{ clear: 'both', paddingTop: '1px' }, null, true);
		
		// http://www.robertpenner.com/easing/ 
		Math.linearTween = function (t, b, c, d) {
			return c*t/d + b;
		};
		Math.easeInQuad = function (t, b, c, d) {
			return c*(t/=d)*t + b;
		};
		Math.easeOutQuad = function (t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		};
		
		hs.hideSelects = hs.ieLt7;
		hs.hideIframes = ((window.opera && hs.uaVersion < 9) || navigator.vendor == 'KDE' 
			|| (hs.ie && hs.uaVersion < 5.5));
		hs.fireEvent(this, 'onActivate');
	}
},
ready : function() {
	if (hs.isReady) return;
	hs.isReady = true;
	for (var i = 0; i < hs.onReady.length; i++) hs.onReady[i]();
},

updateAnchors : function() {
	var el, els, all = [], images = [], htmls = [],groups = {}, re;
		
	for (var i = 0; i < hs.openerTagNames.length; i++) {
		els = document.getElementsByTagName(hs.openerTagNames[i]);
		for (var j = 0; j < els.length; j++) {
			el = els[j];
			re = hs.isHsAnchor(el);
			if (re) {
				hs.push(all, el);
				if (re[0] == 'hs.expand') hs.push(images, el);
				else if (re[0] == 'hs.htmlExpand') hs.push(htmls, el);
				var g = hs.getParam(el, 'slideshowGroup') || 'none';
				if (!groups[g]) groups[g] = [];
				hs.push(groups[g], el);
			}
		}
	}
	hs.anchors = { all: all, groups: groups, images: images, htmls: htmls };
	return hs.anchors;
	
},

getAnchors : function() {
	return hs.anchors || hs.updateAnchors();
},


close : function(el) {
	var exp = hs.getExpander(el);
	if (exp) exp.close();
	return false;
}
}; // end hs object
hs.fx = function( elem, options, prop ){
	this.options = options;
	this.elem = elem;
	this.prop = prop;

	if (!options.orig) options.orig = {};
};
hs.fx.prototype = {
	update: function(){
		(hs.fx.step[this.prop] || hs.fx.step._default)(this);
		
		if (this.options.step)
			this.options.step.call(this.elem, this.now, this);

	},
	custom: function(from, to, unit){
		this.startTime = (new Date()).getTime();
		this.start = from;
		this.end = to;
		this.unit = unit;// || this.unit || "px";
		this.now = this.start;
		this.pos = this.state = 0;

		var self = this;
		function t(gotoEnd){
			return self.step(gotoEnd);
		}

		t.elem = this.elem;

		if ( t() && hs.timers.push(t) == 1 ) {
			hs.timerId = setInterval(function(){
				var timers = hs.timers;

				for ( var i = 0; i < timers.length; i++ )
					if ( !timers[i]() )
						timers.splice(i--, 1);

				if ( !timers.length ) {
					clearInterval(hs.timerId);
				}
			}, 13);
		}
	},
	step: function(gotoEnd){
		var t = (new Date()).getTime();
		if ( gotoEnd || t >= this.options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			this.options.curAnim[ this.prop ] = true;

			var done = true;
			for ( var i in this.options.curAnim )
				if ( this.options.curAnim[i] !== true )
					done = false;

			if ( done ) {
				if (this.options.complete) this.options.complete.call(this.elem);
			}
			return false;
		} else {
			var n = t - this.startTime;
			this.state = n / this.options.duration;
			this.pos = this.options.easing(n, 0, 1, this.options.duration);
			this.now = this.start + ((this.end - this.start) * this.pos);
			this.update();
		}
		return true;
	}

};

hs.extend( hs.fx, {
	step: {

		opacity: function(fx){
			hs.setStyles(fx.elem, { opacity: fx.now });
		},

		_default: function(fx){
			try {
				if ( fx.elem.style && fx.elem.style[ fx.prop ] != null )
					fx.elem.style[ fx.prop ] = fx.now + fx.unit;
				else
					fx.elem[ fx.prop ] = fx.now;
			} catch (e) {}
		}
	}
});

hs.Outline =  function (outlineType, onLoad) {
	this.onLoad = onLoad;
	this.outlineType = outlineType;
	var v = hs.uaVersion, tr;
	
	this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;
	if (!outlineType) {
		if (onLoad) onLoad();
		return;
	}
	
	hs.init();
	this.table = hs.createElement(
		'table', { 
			cellSpacing: 0 
		}, {
			visibility: 'hidden',
			position: 'absolute',
			borderCollapse: 'collapse',
			width: 0
		},
		hs.container,
		true
	);
	var tbody = hs.createElement('tbody', null, null, this.table, 1);
	
	this.td = [];
	for (var i = 0; i <= 8; i++) {
		if (i % 3 == 0) tr = hs.createElement('tr', null, { height: 'auto' }, tbody, true);
		this.td[i] = hs.createElement('td', null, null, tr, true);
		var style = i != 4 ? { lineHeight: 0, fontSize: 0} : { position : 'relative' };
		hs.setStyles(this.td[i], style);
	}
	this.td[4].className = outlineType +' highslide-outline';
	
	this.preloadGraphic(); 
};

hs.Outline.prototype = {
preloadGraphic : function () {
	var src = hs.graphicsDir + (hs.outlinesDir || "outlines/")+ this.outlineType +".png";
				
	var appendTo = hs.safari ? hs.container : null;
	this.graphic = hs.createElement('img', null, { position: 'absolute', 
		top: '-9999px' }, appendTo, true); // for onload trigger
	
	var pThis = this;
	this.graphic.onload = function() { pThis.onGraphicLoad(); };
	
	this.graphic.src = src;
},

onGraphicLoad : function () {
	var o = this.offset = this.graphic.width / 4,
		pos = [[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],
		dim = { height: (2*o) +'px', width: (2*o) +'px' };
	for (var i = 0; i <= 8; i++) {
		if (pos[i]) {
			if (this.hasAlphaImageLoader) {
				var w = (i == 1 || i == 7) ? '100%' : this.graphic.width +'px';
				var div = hs.createElement('div', null, { width: '100%', height: '100%', position: 'relative', overflow: 'hidden'}, this.td[i], true);
				hs.createElement ('div', null, { 
						filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+ this.graphic.src + "')", 
						position: 'absolute',
						width: w, 
						height: this.graphic.height +'px',
						left: (pos[i][0]*o)+'px',
						top: (pos[i][1]*o)+'px'
					}, 
				div,
				true);
			} else {
				hs.setStyles(this.td[i], { background: 'url('+ this.graphic.src +') '+ (pos[i][0]*o)+'px '+(pos[i][1]*o)+'px'});
			}
			
			if (window.opera && (i == 3 || i ==5)) 
				hs.createElement('div', null, dim, this.td[i], true);
			
			hs.setStyles (this.td[i], dim);
		}
	}
	this.graphic = null;
	if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
	hs.pendingOutlines[this.outlineType] = this;
	if (this.onLoad) this.onLoad();
},
	
setPosition : function (pos, offset, vis, dur, easing) {
	var exp = this.exp,
		stl = exp.wrapper.style,
		offset = offset || 0,
		pos = pos || {
			x: exp.x.pos + offset,
			y: exp.y.pos + offset,
			w: exp.x.get('wsize') - 2 * offset,
			h: exp.y.get('wsize') - 2 * offset
		};
	if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) 
		? 'visible' : 'hidden';
	hs.setStyles(this.table, {
		left: (pos.x - this.offset) +'px',
		top: (pos.y - this.offset) +'px',
		width: (pos.w + 2 * this.offset) +'px'
	});
	
	pos.w -= 2 * this.offset;
	pos.h -= 2 * this.offset;
	hs.setStyles (this.td[4], {
		width: pos.w >= 0 ? pos.w +'px' : 0,
		height: pos.h >= 0 ? pos.h +'px' : 0
	});
	if (this.hasAlphaImageLoader) this.td[3].style.height 
		= this.td[5].style.height = this.td[4].style.height;	
	
},
	
destroy : function(hide) {
	if (hide) this.table.style.visibility = 'hidden';
	else hs.discardElement(this.table);
}
};

hs.Dimension = function(exp, dim) {
	this.exp = exp;
	this.dim = dim;
	this.ucwh = dim == 'x' ? 'Width' : 'Height';
	this.wh = this.ucwh.toLowerCase();
	this.uclt = dim == 'x' ? 'Left' : 'Top';
	this.lt = this.uclt.toLowerCase();
	this.ucrb = dim == 'x' ? 'Right' : 'Bottom';
	this.rb = this.ucrb.toLowerCase();
	this.p1 = this.p2 = 0;
};
hs.Dimension.prototype = {
get : function(key) {
	switch (key) {
		case 'loadingPos':
			return this.tpos + this.tb + (this.t - hs.loading['offset'+ this.ucwh]) / 2;
		case 'loadingPosXfade':
			return this.pos + this.cb+ this.p1 + (this.size - hs.loading['offset'+ this.ucwh]) / 2;
		case 'wsize':
			return this.size + 2 * this.cb + this.p1 + this.p2;
		case 'fitsize':
			return this.clientSize - this.marginMin - this.marginMax;
		case 'maxsize':
			return this.get('fitsize') - 2 * this.cb - this.p1 - this.p2 ;
		case 'opos':
			return this.pos - (this.exp.outline ? this.exp.outline.offset : 0);
		case 'osize':
			return this.get('wsize') + (this.exp.outline ? 2*this.exp.outline.offset : 0);
		case 'imgPad':
			return this.imgSize ? Math.round((this.size - this.imgSize) / 2) : 0;
		
	}
},
calcBorders: function() {
	// correct for borders
	this.cb = (this.exp.content['offset'+ this.ucwh] - this.t) / 2;
	
	this.marginMax = hs['margin'+ this.ucrb];
},
calcThumb: function() {
	this.t = this.exp.el[this.wh] ? parseInt(this.exp.el[this.wh]) : 
		this.exp.el['offset'+ this.ucwh];
	this.tpos = this.exp.tpos[this.dim];
	this.tb = (this.exp.el['offset'+ this.ucwh] - this.t) / 2;
	if (this.tpos == 0 || this.tpos == -1) {
		this.tpos = (hs.page[this.wh] / 2) + hs.page['scroll'+ this.uclt];		
	};
},
calcExpanded: function() {
	var exp = this.exp;
	this.justify = 'auto';
	
	// get alignment
	if (exp.align == 'center') this.justify = 'center';
	else if (new RegExp(this.lt).test(exp.anchor)) this.justify = null;
	else if (new RegExp(this.rb).test(exp.anchor)) this.justify = 'max';
	
	
	// size and position
	this.pos = this.tpos - this.cb + this.tb;
	
	if (this.maxHeight && this.dim == 'x')
		exp.maxWidth = Math.min(exp.maxWidth || this.full, exp.maxHeight * this.full / exp.y.full); 
		
	this.size = Math.min(this.full, exp['max'+ this.ucwh] || this.full);
	this.minSize = exp.allowSizeReduction ? 
		Math.min(exp['min'+ this.ucwh], this.full) :this.full;
	if (exp.isImage && exp.useBox)	{
		this.size = exp[this.wh];
		this.imgSize = this.full;
	}
	if (this.dim == 'x' && hs.padToMinWidth) this.minSize = exp.minWidth;
	this.target = exp['target'+ this.dim.toUpperCase()];
	this.marginMin = hs['margin'+ this.uclt];
	this.scroll = hs.page['scroll'+ this.uclt];
	this.clientSize = hs.page[this.wh];
},
setSize: function(i) {
	var exp = this.exp;
	if (exp.isImage && (exp.useBox || hs.padToMinWidth)) {
		this.imgSize = i;
		this.size = Math.max(this.size, this.imgSize);
		exp.content.style[this.lt] = this.get('imgPad')+'px';
	} else
	this.size = i;
	
	exp.content.style[this.wh] = i +'px';
	exp.wrapper.style[this.wh] = this.get('wsize') +'px';
	if (exp.outline) exp.outline.setPosition();
	if (exp.releaseMask) exp.releaseMask.style[this.wh] = i +'px';
	if (this.dim == 'y' && exp.iDoc && exp.body.style.height != 'auto') try {
		exp.iDoc.body.style.overflow = 'auto';
	} catch (e) {}
	if (exp.isHtml) {
		var d = exp.scrollerDiv;
		if (this.sizeDiff === undefined)
			this.sizeDiff = exp.innerContent['offset'+ this.ucwh] - d['offset'+ this.ucwh];
		d.style[this.wh] = (this.size - this.sizeDiff) +'px';
			
		if (this.dim == 'x') exp.mediumContent.style.width = 'auto';
		if (exp.body) exp.body.style[this.wh] = 'auto';
	}
	if (this.dim == 'x' && exp.overlayBox) exp.sizeOverlayBox(true);
	if (this.dim == 'x' && exp.slideshow && exp.isImage) {
		if (i == this.full) exp.slideshow.disable('full-expand');
		else exp.slideshow.enable('full-expand');
	}
},
setPos: function(i) {
	this.pos = i;
	this.exp.wrapper.style[this.lt] = i +'px';	
	
	if (this.exp.outline) this.exp.outline.setPosition();
	
}
};

hs.Expander = function(a, params, custom, contentType) {
	if (document.readyState && hs.ie && !hs.isReady) {
		hs.addEventListener(document, 'ready', function() {
			new hs.Expander(a, params, custom, contentType);
		});
		return;
	} 
	this.a = a;
	this.custom = custom;
	this.contentType = contentType || 'image';
	this.isHtml = (contentType == 'html');
	this.isImage = !this.isHtml;
	
	hs.continuePreloading = false;
	this.overlays = [];
	this.last = hs.last;
	hs.last = null;
	hs.init();
	var key = this.key = hs.expanders.length;
	// override inline parameters
	for (var i = 0; i < hs.overrides.length; i++) {
		var name = hs.overrides[i];
		this[name] = params && typeof params[name] != 'undefined' ?
			params[name] : hs[name];
	}
	if (!this.src) this.src = a.href;
	
	// get thumb
	var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;
	el = this.thumb = el.getElementsByTagName('img')[0] || el;
	this.thumbsUserSetId = el.id || a.id;
	if (!hs.fireEvent(this, 'onInit')) return true;
	
	// check if already open
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].a == a 
			&& !(this.last && this.transitions[1] == 'crossfade')) {
			hs.expanders[i].focus();
			return false;
		}
	}	

	// cancel other
	if (!hs.allowSimultaneousLoading) for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) {
			hs.expanders[i].cancelLoading();
		}
	}
	hs.expanders[key] = this;
	if (!hs.allowMultipleInstances && !hs.upcoming) {
		if (hs.expanders[key-1]) hs.expanders[key-1].close();
		if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey])
			hs.expanders[hs.focusKey].close();
	}
	
	// initiate metrics
	this.el = el;
	this.tpos = this.pageOrigin || hs.getPosition(el);
	hs.getPageSize();
	var x = this.x = new hs.Dimension(this, 'x');
	x.calcThumb();
	var y = this.y = new hs.Dimension(this, 'y');
	y.calcThumb();
	if (/area/i.test(el.tagName)) this.getImageMapAreaCorrection(el);
	this.wrapper = hs.createElement(
		'div', {
			id: 'highslide-wrapper-'+ this.key,
			className: 'highslide-wrapper '+ this.wrapperClassName
		}, {
			visibility: 'hidden',
			position: 'absolute',
			zIndex: hs.zIndexCounter += 2
		}, null, true );
	
	this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
	if (this.contentType == 'image' && this.outlineWhileAnimating == 2)
		this.outlineWhileAnimating = 0;
	
	// get the outline
	if (!this.outlineType 
		|| (this.last && this.isImage && this.transitions[1] == 'crossfade')) {
		this[this.contentType +'Create']();
	
	} else if (hs.pendingOutlines[this.outlineType]) {
		this.connectOutline();
		this[this.contentType +'Create']();
	
	} else {
		this.showLoading();
		var exp = this;
		new hs.Outline(this.outlineType, 
			function () {
				exp.connectOutline();
				exp[exp.contentType +'Create']();
			} 
		);
	}
	return true;
};

hs.Expander.prototype = {
error : function(e) {
	if (hs.debug) alert ('Line '+ e.lineNumber +': '+ e.message);
	else window.location.href = this.src;
},

connectOutline : function() {
	var outline = this.outline = hs.pendingOutlines[this.outlineType];
	outline.exp = this;
	outline.table.style.zIndex = this.wrapper.style.zIndex - 1;
	hs.pendingOutlines[this.outlineType] = null;
},

showLoading : function() {
	if (this.onLoadStarted || this.loading) return;
	
	this.loading = hs.loading;
	var exp = this;
	this.loading.onclick = function() {
		exp.cancelLoading();
	};
	
	
	if (!hs.fireEvent(this, 'onShowLoading')) return;
	var exp = this, 
		l = this.x.get('loadingPos') +'px',
		t = this.y.get('loadingPos') +'px';
	if (!tgt && this.last && this.transitions[1] == 'crossfade') 
		var tgt = this.last; 
	if (tgt) {
		l = tgt.x.get('loadingPosXfade') +'px';
		t = tgt.y.get('loadingPosXfade') +'px';
		this.loading.style.zIndex = hs.zIndexCounter++;
	}
	setTimeout(function () { 
		if (exp.loading) hs.setStyles(exp.loading, { left: l, top: t, zIndex: hs.zIndexCounter++ })}
	, 100);
},

imageCreate : function() {
	var exp = this;
	
	var img = document.createElement('img');
    this.content = img;
    img.onload = function () {
    	if (hs.expanders[exp.key]) exp.contentLoaded(); 
	};
    if (hs.blockRightClick) img.oncontextmenu = function() { return false; };
    img.className = 'highslide-image';
    hs.setStyles(img, {
    	visibility: 'hidden',
    	display: 'block',
    	position: 'absolute',
		maxWidth: '9999px',
		zIndex: 3
	});
    img.title = hs.lang.restoreTitle;
    if (hs.safari) hs.container.appendChild(img);
    if (hs.ie && hs.flushImgSize) img.src = null;
	img.src = this.src;
	
	this.showLoading();
},

htmlCreate : function () {
	if (!hs.fireEvent(this, 'onBeforeGetContent')) return;
	
	this.content = hs.getCacheBinding(this.a);
	if (!this.content) 
		this.content = hs.getNode(this.contentId);
	if (!this.content) 
		this.content = hs.getSelfRendered();
	this.getInline(['maincontent']);
	if (this.maincontent) {
		var body = hs.getElementByClass(this.content, 'div', 'highslide-body');
		if (body) body.appendChild(this.maincontent);
		this.maincontent.style.display = 'block';
	}
	hs.fireEvent(this, 'onAfterGetContent');
	
	var innerContent = this.innerContent = this.content;
	
	if (/(swf|iframe)/.test(this.objectType)) this.setObjContainerSize(innerContent);
	
	// the content tree
	hs.container.appendChild(this.wrapper);
	hs.setStyles( this.wrapper, { 
		position: 'static',
		padding: '0 '+ hs.marginRight +'px 0 '+ hs.marginLeft +'px'
	});
	this.content = hs.createElement(
    	'div', {
    		className: 'highslide-html' 
    	}, {
			position: 'relative',
			zIndex: 3,
			height: 0,
			overflow: 'hidden'
		},
		this.wrapper
	);
	this.mediumContent = hs.createElement('div', null, null, this.content, 1);
	this.mediumContent.appendChild(innerContent);
	
	hs.setStyles (innerContent, { 
		position: 'relative',
		display: 'block',
		direction: hs.lang.cssDirection || ''
	});
	if (this.width) innerContent.style.width = this.width +'px';
	if (this.height) hs.setStyles(innerContent, {
		height: this.height +'px',
		overflow: 'hidden'
	});
	if (innerContent.offsetWidth < this.minWidth)
		innerContent.style.width = this.minWidth +'px';
		
	
    
	if (this.objectType == 'ajax' && !hs.getCacheBinding(this.a)) {
		this.showLoading();
    	var exp = this;
    	var ajax = new hs.Ajax(this.a, innerContent);
		ajax.src = this.src;
    	ajax.onLoad = function () {	if (hs.expanders[exp.key]) exp.contentLoaded(); };
    	ajax.onError = function () { location.href = exp.src; };
    	ajax.run();
	}
    else
    
    if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
		this.writeExtendedContent();
	}
    else
    	this.contentLoaded();
},

contentLoaded : function() {
	try {	
		if (!this.content) return;
		this.content.onload = null;
		if (this.onLoadStarted) return;
		else this.onLoadStarted = true;
		
		var x = this.x, y = this.y;
		
		if (this.loading) {
			hs.setStyles(this.loading, { top: '-9999px' });
			this.loading = null;
			hs.fireEvent(this, 'onHideLoading');
		}
		if (this.isImage) {	
			x.full = this.content.width;
			y.full = this.content.height;
			
			hs.setStyles(this.content, {
				width: x.t +'px',
				height: y.t +'px'
			});
			this.wrapper.appendChild(this.content);
			hs.container.appendChild(this.wrapper);
		} else if (this.htmlGetSize) this.htmlGetSize();
		
		x.calcBorders();
		y.calcBorders();
		
		hs.setStyles (this.wrapper, {
			left: (x.tpos + x.tb - x.cb) +'px',
			top: (y.tpos + x.tb - y.cb) +'px'
		});
		
		
		this.initSlideshow();
		this.getOverlays();
		
		var ratio = x.full / y.full;
		x.calcExpanded();
		this.justify(x);
		
		y.calcExpanded();
		this.justify(y);
		if (this.isHtml) this.htmlSizeOperations();
		if (this.overlayBox) this.sizeOverlayBox(0, 1);

		
		if (this.allowSizeReduction) {
			if (this.isImage)
				this.correctRatio(ratio);
			else this.fitOverlayBox();
			var ss = this.slideshow;			
			if (ss && this.last && ss.controls && ss.fixedControls) {
				var pos = ss.overlayOptions.position || '', p;
				for (var dim in hs.oPos) for (var i = 0; i < 5; i++) {
					p = this[dim];
					if (pos.match(hs.oPos[dim][i])) {
						p.pos = this.last[dim].pos 
							+ (this.last[dim].p1 - p.p1)
							+ (this.last[dim].size - p.size) * [0, 0, .5, 1, 1][i];
						if (ss.fixedControls == 'fit') {
							if (p.pos + p.size + p.p1 + p.p2 > p.scroll + p.clientSize - p.marginMax)
								p.pos = p.scroll + p.clientSize - p.size - p.marginMin - p.marginMax - p.p1 - p.p2;
							if (p.pos < p.scroll + p.marginMin) p.pos = p.scroll + p.marginMin; 
						} 
					}
				}
			}
			if (this.isImage && this.x.full > (this.x.imgSize || this.x.size)) {
				this.createFullExpand();
				if (this.overlays.length == 1) this.sizeOverlayBox();
			}
		}
		this.show();
		
	} catch (e) {
		this.error(e);
	}
},


setObjContainerSize : function(parent, auto) {
	var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
	if (/(iframe|swf)/.test(this.objectType)) {
		if (this.objectWidth) c.style.width = this.objectWidth +'px';
		if (this.objectHeight) c.style.height = this.objectHeight +'px';
	}
},

writeExtendedContent : function () {
	if (this.hasExtendedContent) return;
	var exp = this;
	this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
	if (this.objectType == 'iframe') {
		this.showLoading();
		var ruler = hs.clearing.cloneNode(1);
		this.body.appendChild(ruler);
		this.newWidth = this.innerContent.offsetWidth;
		if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
		var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
			h = this.objectHeight || hs.page.height - hDiff - hs.marginTop - hs.marginBottom,
			onload = this.objectLoadTime == 'before' ? 
				' onload="if (hs.expanders['+ this.key +']) hs.expanders['+ this.key +'].contentLoaded()" ' : '';
		this.body.innerHTML += '<iframe name="hs'+ (new Date()).getTime() +'" frameborder="0" key="'+ this.key +'" '
			+' style="width:'+ this.objectWidth +'px; height:'+ h +'px" '
			+ onload +' src="'+ this.src +'" ></iframe>';
		this.ruler = this.body.getElementsByTagName('div')[0];
		this.iframe = this.body.getElementsByTagName('iframe')[0];
		
		if (this.objectLoadTime == 'after') this.correctIframeSize();
		
	}
	if (this.objectType == 'swf') {
		this.body.id = this.body.id || 'hs-flash-id-' + this.key;
		var a = this.swfOptions;
		if (!a.params) a.params = {};
		if (typeof a.params.wmode == 'undefined') a.params.wmode = 'transparent';
		if (swfobject) swfobject.embedSWF(this.src, this.body.id, this.objectWidth, this.objectHeight, 
			a.version || '7', a.expressInstallSwfurl, a.flashvars, a.params, a.attributes);
	}
	this.hasExtendedContent = true;
},
htmlGetSize : function() {
	if (this.iframe && !this.objectHeight) { // loadtime before
		this.iframe.style.height = this.body.style.height = this.getIframePageHeight() +'px';
	}
	this.innerContent.appendChild(hs.clearing);
	if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
    this.y.full = this.innerContent.offsetHeight;
    this.innerContent.removeChild(hs.clearing);
    if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) { // ie css bug
		this.newHeight = parseInt(this.innerContent.currentStyle.height);
	}
	hs.setStyles( this.wrapper, { position: 'absolute',	padding: '0'});
	hs.setStyles( this.content, { width: this.x.t +'px', height: this.y.t +'px'});
	
},

getIframePageHeight : function() {
	var h;
	try {
		var doc = this.iDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
		var clearing = doc.createElement('div');
		clearing.style.clear = 'both';
		doc.body.appendChild(clearing);
		h = clearing.offsetTop;
		if (hs.ie) h += parseInt(doc.body.currentStyle.marginTop) 
			+ parseInt(doc.body.currentStyle.marginBottom) - 1;
	} catch (e) { // other domain
		h = 300;
	}
	return h;
},
correctIframeSize : function () {
	var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
	hs.discardElement(this.ruler);
	if (wDiff < 0) wDiff = 0;
	
	var hDiff = this.innerContent.offsetHeight - this.iframe.offsetHeight;
	if (this.iDoc && !this.objectHeight && !this.height && this.y.size == this.y.full) try {
		this.iDoc.body.style.overflow = 'hidden';
	} catch (e) {}
	hs.setStyles(this.iframe, { 
		width: Math.abs(this.x.size - wDiff) +'px', 
		height: Math.abs(this.y.size - hDiff) +'px'
	});
    hs.setStyles(this.body, { 
		width: this.iframe.style.width, 
    	height: this.iframe.style.height
	});
    	
    this.scrollingContent = this.iframe;
    this.scrollerDiv = this.scrollingContent;
	
},
htmlSizeOperations : function () {
	
	this.setObjContainerSize(this.innerContent);
	
	
	if (this.objectType == 'swf' && this.objectLoadTime == 'before') this.writeExtendedContent();	
	
    // handle minimum size
    if (this.x.size < this.x.full && !this.allowWidthReduction) this.x.size = this.x.full;
    if (this.y.size < this.y.full && !this.allowHeightReduction) this.y.size = this.y.full;
	this.scrollerDiv = this.innerContent;
    hs.setStyles(this.mediumContent, { 
		position: 'relative',
		width: this.x.size +'px'
	});
    hs.setStyles(this.innerContent, { 
    	border: 'none',
    	width: 'auto',
    	height: 'auto'
    });
	var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
    if (node && !/(iframe|swf)/.test(this.objectType)) {
    	var cNode = node; // wrap to get true size
    	node = hs.createElement(cNode.nodeName, null, {overflow: 'hidden'}, null, true);
    	cNode.parentNode.insertBefore(node, cNode);
    	node.appendChild(hs.clearing); // IE6
    	node.appendChild(cNode);
    	
    	var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
    	var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
		node.removeChild(hs.clearing);
    	
    	var kdeBugCorr = hs.safari || navigator.vendor == 'KDE' ? 1 : 0; // KDE repainting bug
    	hs.setStyles(node, { 
    			width: (this.x.size - wDiff - kdeBugCorr) +'px', 
    			height: (this.y.size - hDiff) +'px',
    			overflow: 'auto', 
    			position: 'relative' 
    		} 
    	);
		if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight)	{
    		node.style.width = (parseInt(node.style.width) + kdeBugCorr) + 'px';
		}
    	this.scrollingContent = node;
    	this.scrollerDiv = this.scrollingContent;
	}
    if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
    if (!this.scrollingContent && this.y.size < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;
	
	if (this.scrollerDiv == this.content && !this.allowWidthReduction && !/(iframe|swf)/.test(this.objectType)) {
		this.x.size += 17; // room for scrollbars
	}
	if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
		setTimeout("try { hs.expanders["+ this.key +"].scrollerDiv.style.overflow = 'auto'; } catch(e) {}",
			 hs.expandDuration);
	}
},

getImageMapAreaCorrection : function(area) {
	var c = area.coords.split(',');
	for (var i = 0; i < c.length; i++) c[i] = parseInt(c[i]);
	
	if (area.shape.toLowerCase() == 'circle') {
		this.x.tpos += c[0] - c[2];
		this.y.tpos += c[1] - c[2];
		this.x.t = this.y.t = 2 * c[2];
	} else {
		var maxX, maxY, minX = maxX = c[0], minY = maxY = c[1];
		for (var i = 0; i < c.length; i++) {
			if (i % 2 == 0) {
				minX = Math.min(minX, c[i]);
				maxX = Math.max(maxX, c[i]);
			} else {
				minY = Math.min(minY, c[i]);
				maxY = Math.max(maxY, c[i]);
			}
		}
		this.x.tpos += minX;
		this.x.t = maxX - minX;
		this.y.tpos += minY;
		this.y.t = maxY - minY;
	}
},
justify : function (p, moveOnly) {
	var tgtArr, tgt = p.target, dim = p == this.x ? 'x' : 'y';
	
	if (tgt && tgt.match(/ /)) {
		tgtArr = tgt.split(' ');
		tgt = tgtArr[0];
	}
	if (tgt && hs.$(tgt)) {
		p.pos = hs.getPosition(hs.$(tgt))[dim];
		if (tgtArr && tgtArr[1] && tgtArr[1].match(/^[-]?[0-9]+px$/)) 
			p.pos += parseInt(tgtArr[1]);
		if (p.size < p.minSize) p.size = p.minSize;
		
	} else if (p.justify == 'auto' || p.justify == 'center') {
	
		var hasMovedMin = false;
		
		var allowReduce = p.exp.allowSizeReduction;
		if (p.justify == 'center')
			p.pos = Math.round(p.scroll + (p.clientSize + p.marginMin - p.marginMax - p.get('wsize')) / 2);
		else
			p.pos = Math.round(p.pos - ((p.get('wsize') - p.t) / 2));
		if (p.pos < p.scroll + p.marginMin) {
			p.pos = p.scroll + p.marginMin;
			hasMovedMin = true;		
		}
		if (!moveOnly && p.size < p.minSize) {
			p.size = p.minSize;
			allowReduce = false;
		}
		if (p.pos + p.get('wsize') > p.scroll + p.clientSize - p.marginMax) {
			if (!moveOnly && hasMovedMin && allowReduce) {
				p.size = Math.min(p.size, p.get(dim == 'y' ? 'fitsize' : 'maxsize'));
			} else if (p.get('wsize') < p.get('fitsize')) {
				p.pos = p.scroll + p.clientSize - p.marginMax - p.get('wsize');
			} else { // image larger than viewport
				p.pos = p.scroll + p.marginMin;
				if (!moveOnly && allowReduce) p.size = p.get(dim == 'y' ? 'fitsize' : 'maxsize');
			}			
		}
		
		if (!moveOnly && p.size < p.minSize) {
			p.size = p.minSize;
			allowReduce = false;
		}
		
	
	} else if (p.justify == 'max') {
		p.pos = Math.floor(p.pos - p.size + p.t);
	}
	
		
	if (p.pos < p.marginMin) {
		var tmpMin = p.pos;
		p.pos = p.marginMin; 
		
		if (allowReduce && !moveOnly) p.size = p.size - (p.pos - tmpMin);
		
	}
},

correctRatio : function(ratio) {
	var x = this.x, 
		y = this.y,
		changed = false,
		xSize = Math.min(x.full, x.size),
		ySize = Math.min(y.full, y.size),
		useBox = (this.useBox || hs.padToMinWidth);
	
	if (xSize / ySize > ratio) { // width greater
		xSize = ySize * ratio;
		if (xSize < x.minSize) { // below minWidth
			xSize = x.minSize;
			ySize = xSize / ratio;
		}
		changed = true;
	
	} else if (xSize / ySize < ratio) { // height greater
		ySize = xSize / ratio;
		changed = true;
	}
	
	if (hs.padToMinWidth && x.full < x.minSize) {
		x.imgSize = x.full;
		y.size = y.imgSize = y.full;
	} else if (this.useBox) {
		x.imgSize = xSize;
		y.imgSize = ySize;
	} else {
		x.size = xSize;
		y.size = ySize;
	}
	changed = this.fitOverlayBox(useBox ? null : ratio, changed);
	if (useBox && y.size < y.imgSize) {
		y.imgSize = y.size;
		x.imgSize = y.size * ratio;
	}
	if (changed || useBox) {
		x.pos = x.tpos - x.cb + x.tb;
		x.minSize = x.size;
		this.justify(x, true);
	
		y.pos = y.tpos - y.cb + y.tb;
		y.minSize = y.size;
		this.justify(y, true);
		if (this.overlayBox) this.sizeOverlayBox();
	}
},
fitOverlayBox : function(ratio, changed) {
	var x = this.x, y = this.y;
	if (this.overlayBox && (this.isImage || this.allowHeightReduction)) {
		while (y.size > this.minHeight && x.size > this.minWidth 
				&&  y.get('wsize') > y.get('fitsize')) {
			y.size -= 10;
			if (ratio) x.size = y.size * ratio;
			this.sizeOverlayBox(0, 1);
			changed = true;
		}
	}
	return changed;
},

reflow : function () {
	if (this.scrollerDiv) {
		var h = /iframe/i.test(this.scrollerDiv.tagName) ? (this.getIframePageHeight() + 1) +'px' : 'auto';
		if (this.body) this.body.style.height = h;
		this.scrollerDiv.style.height = h;
		this.y.setSize(this.innerContent.offsetHeight);
	}
},

show : function () {
	var x = this.x, y = this.y;
	this.doShowHide('hidden');
	hs.fireEvent(this, 'onBeforeExpand');
	if (this.slideshow && this.slideshow.thumbstrip) this.slideshow.thumbstrip.selectThumb();
	
	// Apply size change
	this.changeSize(
		1, {
			wrapper: {
				width : x.get('wsize'),
				height : y.get('wsize'),
				left: x.pos,
				top: y.pos
			},
			content: {
				left: x.p1 + x.get('imgPad'),
				top: y.p1 + y.get('imgPad'),
				width:x.imgSize ||x.size,
				height:y.imgSize ||y.size
			}
		},
		hs.expandDuration
	);
},

changeSize : function(up, to, dur) {
	// transition
	var trans = this.transitions,
	other = up ? (this.last ? this.last.a : null) : hs.upcoming,
	t = (trans[1] && other 
			&& hs.getParam(other, 'transitions')[1] == trans[1]) ?
		trans[1] : trans[0];
		
	if (this[t] && t != 'expand') {
		this[t](up, to);
		return;
	}
	
	if (this.outline && !this.outlineWhileAnimating) {
		if (up) this.outline.setPosition();
		else this.outline.destroy(
				(this.isHtml && this.preserveContent));
	}
	
	
	if (!up) this.destroyOverlays();
	
	var exp = this,
		x = exp.x,
		y = exp.y,
		easing = this.easing;
	if (!up) easing = this.easingClose || easing;
	var after = up ?
		function() {
				
			if (exp.outline) exp.outline.table.style.visibility = "visible";
			setTimeout(function() {
				exp.afterExpand();
			}, 50);
		} :
		function() {
			exp.afterClose();
		};
	if (up) hs.setStyles( this.wrapper, {
		width: x.t +'px',
		height: y.t +'px'
	});
	if (up && this.isHtml) {
		hs.setStyles(this.wrapper, {
			left: (x.tpos - x.cb + x.tb) +'px',
			top: (y.tpos - y.cb + y.tb) +'px'
		});
	}
	if (this.fadeInOut) {
		hs.setStyles(this.wrapper, { opacity: up ? 0 : 1 });
		hs.extend(to.wrapper, { opacity: up });
	}
	hs.animate( this.wrapper, to.wrapper, {
		duration: dur,
		easing: easing,
		step: function(val, args) {
			if (exp.outline && exp.outlineWhileAnimating && args.prop == 'top') {
				var fac = up ? args.pos : 1 - args.pos;
				var pos = {
					w: x.t + (x.get('wsize') - x.t) * fac,
					h: y.t + (y.get('wsize') - y.t) * fac,
					x: x.tpos + (x.pos - x.tpos) * fac,
					y: y.tpos + (y.pos - y.tpos) * fac
				};
				exp.outline.setPosition(pos, 0, 1);				
			}
			if (exp.isHtml) {	
				if (args.prop == 'left') 
					exp.mediumContent.style.left = (x.pos - val) +'px';
				if (args.prop == 'top') 
					exp.mediumContent.style.top = (y.pos - val) +'px';
			}
		}
	});
	hs.animate( this.content, to.content, dur, easing, after);
	if (up) {
		this.wrapper.style.visibility = 'visible';
		this.content.style.visibility = 'visible';
		if (this.isHtml) this.innerContent.style.visibility = 'visible';
	}
},



fade : function(up, to) {
	this.outlineWhileAnimating = false;
	var exp = this,	t = up ? hs.expandDuration : 0;
	
	if (up) {
		hs.animate(this.wrapper, to.wrapper, 0);
		hs.setStyles(this.wrapper, { opacity: 0, visibility: 'visible' });
		hs.animate(this.content, to.content, 0);
		this.content.style.visibility = 'visible';

		hs.animate(this.wrapper, { opacity: 1 }, t, null, 
			function() { exp.afterExpand(); });
	}
	
	if (this.outline) {
		this.outline.table.style.zIndex = this.wrapper.style.zIndex;
		var dir = up || -1, 
			offset = this.outline.offset,
			startOff = up ? 3 : offset,
			endOff = up? offset : 3;
		for (var i = startOff; dir * i <= dir * endOff; i += dir, t += 25) {
			(function() {
				var o = up ? endOff - i : startOff - i;
				setTimeout(function() {
					exp.outline.setPosition(0, o, 1);
				}, t);
			})();
		}
	}
	
	
	if (up) {}//setTimeout(function() { exp.afterExpand(); }, t+50);
	else {
		setTimeout( function() {
			if (exp.outline) exp.outline.destroy(exp.preserveContent);
			
			exp.destroyOverlays();
	
			hs.animate( exp.wrapper, { opacity: 0 }, hs.restoreDuration, null, function(){
				exp.afterClose();
			});
		}, t);		
	}
},
crossfade : function (up, to, from) {
	if (!up) return;
	var exp = this, 
		last = this.last,
		x = this.x,
		y = this.y,
		lastX = last.x,
		lastY = last.y,
		wrapper = this.wrapper,
		content = this.content,
		overlayBox = this.overlayBox;
	hs.removeEventListener(document, 'mousemove', hs.dragHandler);
	
	hs.setStyles(content, { 
		width: (x.imgSize || x.size) +'px', 
		height: (y.imgSize || y.size) +'px'		
	});
	if (overlayBox) overlayBox.style.overflow = 'visible';
	this.outline = last.outline;
	if (this.outline) this.outline.exp = exp;
	last.outline = null;
	var fadeBox = hs.createElement('div', {
			className: 'highslide-'+ this.contentType
		}, { 
			position: 'absolute', 
			zIndex: 4,
			overflow: 'hidden',
			display: 'none'
		}
	);
	var names = { oldImg: last, newImg: this };
	for (var n in names) { 	
		this[n] = names[n].content.cloneNode(1);
		hs.setStyles(this[n], {
			position: 'absolute',
			border: 0,
			visibility: 'visible'
		});
		fadeBox.appendChild(this[n]);
	}
	wrapper.appendChild(fadeBox);
	if (this.isHtml) hs.setStyles(this.mediumContent, { 
		left: 0,
		top: 0
	});
	if (overlayBox) {
		overlayBox.className = '';
		wrapper.appendChild(overlayBox);
	}
	fadeBox.style.display = '';
	last.content.style.display = 'none';
	
	
	if (hs.safari) {
		var match = navigator.userAgent.match(/Safari\/([0-9]{3})/);
		if (match && parseInt(match[1]) < 525) this.wrapper.style.visibility = 'visible';
	}
	hs.animate(wrapper, {
		width: x.size
	}, {
		duration: hs.transitionDuration, 
		step: function(val, args) {
			var pos = args.pos,
				invPos = 1 - pos;
			var prop,
				size = {}, 
				props = ['pos', 'size', 'p1', 'p2'];
			for (var n in props) {
				prop = props[n];
				size['x'+ prop] = Math.round(invPos * lastX[prop] + pos * x[prop]);
				size['y'+ prop] = Math.round(invPos * lastY[prop] + pos * y[prop]);
				size.ximgSize = Math.round(
					invPos * (lastX.imgSize || lastX.size) + pos * (x.imgSize || x.size));
				size.ximgPad = Math.round(invPos * lastX.get('imgPad') + pos * x.get('imgPad'));
				size.yimgSize = Math.round(
					invPos * (lastY.imgSize || lastY.size) + pos * (y.imgSize || y.size));
				size.yimgPad = Math.round(invPos * lastY.get('imgPad') + pos * y.get('imgPad'));
			}
			if (exp.outline) exp.outline.setPosition({ 
				x: size.xpos, 
				y: size.ypos, 
				w: size.xsize + size.xp1 + size.xp2 + 2 * x.cb, 
				h: size.ysize + size.yp1 + size.yp2 + 2 * y.cb
			});
			last.wrapper.style.clip = 'rect('
				+ (size.ypos - lastY.pos)+'px, '
				+ (size.xsize + size.xp1 + size.xp2 + size.xpos + 2 * lastX.cb - lastX.pos) +'px, '
				+ (size.ysize + size.yp1 + size.yp2 + size.ypos + 2 * lastY.cb - lastY.pos) +'px, '
				+ (size.xpos - lastX.pos)+'px)';
				
			hs.setStyles(content, {
				top: (size.yp1 + y.get('imgPad')) +'px',
				left: (size.xp1 + x.get('imgPad')) +'px',
				marginTop: (y.pos - size.ypos) +'px',
				marginLeft: (x.pos - size.xpos) +'px'
			});
			hs.setStyles(wrapper, {
				top: size.ypos +'px',
				left: size.xpos +'px',
				width: (size.xp1 + size.xp2 + size.xsize + 2 * x.cb)+ 'px',
				height: (size.yp1 + size.yp2 + size.ysize + 2 * y.cb) + 'px'
			});
			hs.setStyles(fadeBox, {
				width: (size.ximgSize || size.xsize) + 'px',
				height: (size.yimgSize || size.ysize) +'px',
				left: (size.xp1 + size.ximgPad)  +'px',
				top: (size.yp1 + size.yimgPad) +'px',
				visibility: 'visible'
			});
			
			hs.setStyles(exp.oldImg, {
				top: (lastY.pos - size.ypos + lastY.p1 - size.yp1 + lastY.get('imgPad') - size.yimgPad)+'px',
				left: (lastX.pos - size.xpos + lastX.p1 - size.xp1 + lastX.get('imgPad') - size.ximgPad)+'px'
			});		
			
			hs.setStyles(exp.newImg, {
				opacity: pos,
				top: (y.pos - size.ypos + y.p1 - size.yp1 + y.get('imgPad') - size.yimgPad) +'px',
				left: (x.pos - size.xpos + x.p1 - size.xp1 + x.get('imgPad') - size.ximgPad) +'px'
			});
			if (overlayBox) hs.setStyles(overlayBox, {
				width: size.xsize + 'px',
				height: size.ysize +'px',
				left: (size.xp1 + x.cb)  +'px',
				top: (size.yp1 + y.cb) +'px'
			});
		},
		complete: function () {
			wrapper.style.visibility = content.style.visibility = 'visible';
			content.style.display = 'block';
			hs.discardElement(fadeBox);
			exp.afterExpand();
			last.afterClose();
			exp.last = null;
		}
		
	});
},
reuseOverlay : function(o, el) {
	if (!this.last) return false;
	for (var i = 0; i < this.last.overlays.length; i++) {
		var oDiv = hs.$('hsId'+ this.last.overlays[i]);
		if (oDiv && oDiv.hsId == o.hsId) {
			this.genOverlayBox();
			oDiv.reuse = this.key;
			hs.push(this.overlays, this.last.overlays[i]);
			return true;
		}
	}
	return false;
},


afterExpand : function() {
	this.isExpanded = true;
	
	this.a.className += ' highslide-active-anchor';	
	this.focus();
	
	if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
	if (this.iframe) {
		try {
			var exp = this,
				doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
			hs.addEventListener(doc, 'mousedown', function () {
				if (hs.focusKey != exp.key) exp.focus();
			});
		} catch(e) {}
		if (hs.ie && typeof this.isClosing != 'boolean') // first open 
			this.iframe.style.width = (this.objectWidth - 1) +'px'; // hasLayout
	}
	if (this.dimmingOpacity) hs.dim(this);
	if (hs.upcoming && hs.upcoming == this.a) hs.upcoming = null;
	this.prepareNextOutline();
	var p = hs.page, mX = hs.mouse.x + p.scrollLeft, mY = hs.mouse.y + p.scrollTop;
	this.mouseIsOver = this.x.pos < mX && mX < this.x.pos + this.x.get('wsize')
		&& this.y.pos < mY && mY < this.y.pos + this.y.get('wsize');	
	if (this.overlayBox) this.showOverlays();
	hs.fireEvent(this, 'onAfterExpand');
	
},


prepareNextOutline : function() {
	var key = this.key;
	var outlineType = this.outlineType;
	new hs.Outline(outlineType, 
		function () { try { hs.expanders[key].preloadNext(); } catch (e) {} });
},


preloadNext : function() {
	var next = this.getAdjacentAnchor(1);
	if (next && next.onclick.toString().match(/hs\.expand/)) 
		var img = hs.createElement('img', { src: hs.getSrc(next) });
},


getAdjacentAnchor : function(op) {
	var current = this.getAnchorIndex(), as = hs.anchors.groups[this.slideshowGroup || 'none'];
	
	/*< ? if ($cfg->slideshow) : ?>s*/
	if (!as[current + op] && this.slideshow && this.slideshow.repeat) {
		if (op == 1) return as[0];
		else if (op == -1) return as[as.length-1];
	}
	/*< ? endif ?>s*/
	return as[current + op] || null;
},

getAnchorIndex : function() {
	var arr = hs.getAnchors().groups[this.slideshowGroup || 'none'];
	if (arr) for (var i = 0; i < arr.length; i++) {
		if (arr[i] == this.a) return i; 
	}
	return null;
},


getNumber : function() {
	if (this[this.numberPosition]) {
		var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
		if (arr) {
			var s = hs.lang.number.replace('%1', this.getAnchorIndex() + 1).replace('%2', arr.length);
			this[this.numberPosition].innerHTML = 
				'<div class="highslide-number">'+ s +'</div>'+ this[this.numberPosition].innerHTML;
		}
	}
},
initSlideshow : function() {
	if (!this.last) {
		for (var i = 0; i < hs.slideshows.length; i++) {
			var ss = hs.slideshows[i], sg = ss.slideshowGroup;
			if (typeof sg == 'undefined' || sg === null || sg === this.slideshowGroup) 
				this.slideshow = new hs.Slideshow(this.key, ss);
		} 
	} else {
		this.slideshow = this.last.slideshow;
	}
	var ss = this.slideshow;
	if (!ss) return;
	var key = ss.expKey = this.key;
	
	ss.checkFirstAndLast();
	ss.disable('full-expand');
	if (ss.controls) {
		this.createOverlay(hs.extend(ss.overlayOptions || {}, {
			overlayId: ss.controls,
			hsId: 'controls',
			zIndex: 5
		}));
	}
	if (ss.thumbstrip) ss.thumbstrip.add(this);
	if (!this.last && this.autoplay) ss.play(true);
	if (ss.autoplay) {
		ss.autoplay = setTimeout(function() {
			hs.next(key);
		}, (ss.interval || 500));
	}
},

cancelLoading : function() {
	hs.discardElement (this.wrapper);
	hs.expanders[this.key] = null;
	if (hs.upcoming == this.a) hs.upcoming = null;
	hs.undim(this.key);
	if (this.loading) hs.loading.style.left = '-9999px';
	hs.fireEvent(this, 'onHideLoading');
},

writeCredits : function () {
	if (this.credits) return;
	this.credits = hs.createElement('a', {
		href: hs.creditsHref,
		target: hs.creditsTarget,
		className: 'highslide-credits',
		innerHTML: hs.lang.creditsText,
		title: hs.lang.creditsTitle
	});
	this.createOverlay({ 
		overlayId: this.credits, 
		position: this.creditsPosition || 'top left', 
		hsId: 'credits' 
	});
},

getInline : function(types, addOverlay) {
	for (var i = 0; i < types.length; i++) {
		var type = types[i], s = null;
		if (type == 'caption' && !hs.fireEvent(this, 'onBeforeGetCaption')) return;
		else if (type == 'heading' && !hs.fireEvent(this, 'onBeforeGetHeading')) return;
		if (!this[type +'Id'] && this.thumbsUserSetId)  
			this[type +'Id'] = type +'-for-'+ this.thumbsUserSetId;
		if (this[type +'Id']) this[type] = hs.getNode(this[type +'Id']);
		if (!this[type] && !this[type +'Text'] && this[type +'Eval']) try {
			s = eval(this[type +'Eval']);
		} catch (e) {}
		if (!this[type] && this[type +'Text']) {
			s = this[type +'Text'];
		}
		if (!this[type] && !s) {
			this[type] = hs.getNode(this.a['_'+ type + 'Id']);
			if (!this[type]) {
				var next = this.a.nextSibling;
				while (next && !hs.isHsAnchor(next)) {
					if ((new RegExp('highslide-'+ type)).test(next.className || null)) {
						if (!next.id) this.a['_'+ type + 'Id'] = next.id = 'hsId'+ hs.idCounter++;
						this[type] = hs.getNode(next.id);
						break;
					}
					next = next.nextSibling;
				}
			}
		}
		if (!this[type] && !s && this.numberPosition == type) s = '\n';
		
		if (!this[type] && s) this[type] = hs.createElement('div', 
				{ className: 'highslide-'+ type, innerHTML: s } );
		
		if (addOverlay && this[type]) {
			var o = { position: (type == 'heading') ? 'above' : 'below' };
			for (var x in this[type+'Overlay']) o[x] = this[type+'Overlay'][x];
			o.overlayId = this[type];
			this.createOverlay(o);
		}
	}
},


// on end move and resize
doShowHide : function(visibility) {
	if (hs.hideSelects) this.showHideElements('SELECT', visibility);
	if (hs.hideIframes) this.showHideElements('IFRAME', visibility);
	if (hs.geckoMac) this.showHideElements('*', visibility);
},
showHideElements : function (tagName, visibility) {
	var els = document.getElementsByTagName(tagName);
	var prop = tagName == '*' ? 'overflow' : 'visibility';
	for (var i = 0; i < els.length; i++) {
		if (prop == 'visibility' || (document.defaultView.getComputedStyle(
				els[i], "").getPropertyValue('overflow') == 'auto'
				|| els[i].getAttribute('hidden-by') != null)) {
			var hiddenBy = els[i].getAttribute('hidden-by');
			if (visibility == 'visible' && hiddenBy) {
				hiddenBy = hiddenBy.replace('['+ this.key +']', '');
				els[i].setAttribute('hidden-by', hiddenBy);
				if (!hiddenBy) els[i].style[prop] = els[i].origProp;
			} else if (visibility == 'hidden') { // hide if behind
				var elPos = hs.getPosition(els[i]);
				elPos.w = els[i].offsetWidth;
				elPos.h = els[i].offsetHeight;
				if (!this.dimmingOpacity) { // hide all if dimming
				
					var clearsX = (elPos.x + elPos.w < this.x.get('opos') 
						|| elPos.x > this.x.get('opos') + this.x.get('osize'));
					var clearsY = (elPos.y + elPos.h < this.y.get('opos') 
						|| elPos.y > this.y.get('opos') + this.y.get('osize'));
				}
				var wrapperKey = hs.getWrapperKey(els[i]);
				if (!clearsX && !clearsY && wrapperKey != this.key) { // element falls behind image
					if (!hiddenBy) {
						els[i].setAttribute('hidden-by', '['+ this.key +']');
						els[i].origProp = els[i].style[prop];
						els[i].style[prop] = 'hidden';
						
					} else if (hiddenBy.indexOf('['+ this.key +']') == -1) {
						els[i].setAttribute('hidden-by', hiddenBy + '['+ this.key +']');
					}
				} else if ((hiddenBy == '['+ this.key +']' || hs.focusKey == wrapperKey)
						&& wrapperKey != this.key) { // on move
					els[i].setAttribute('hidden-by', '');
					els[i].style[prop] = els[i].origProp || '';
				} else if (hiddenBy && hiddenBy.indexOf('['+ this.key +']') > -1) {
					els[i].setAttribute('hidden-by', hiddenBy.replace('['+ this.key +']', ''));
				}
						
			}
		}
	}
},

focus : function() {
	this.wrapper.style.zIndex = hs.zIndexCounter += 2;
	// blur others
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && i == hs.focusKey) {
			var blurExp = hs.expanders[i];
			blurExp.content.className += ' highslide-'+ blurExp.contentType +'-blur';
			if (blurExp.isImage) {
				blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';
				blurExp.content.title = hs.lang.focusTitle;	
			}	
			hs.fireEvent(blurExp, 'onBlur');
		}
	}
	
	// focus this
	if (this.outline) this.outline.table.style.zIndex 
		= this.wrapper.style.zIndex - 1;
	this.content.className = 'highslide-'+ this.contentType;
	if (this.isImage) {
		this.content.title = hs.lang.restoreTitle;
		
		if (hs.restoreCursor) {
			hs.styleRestoreCursor = window.opera ? 'pointer' : 'url('+ hs.graphicsDir + hs.restoreCursor +'), pointer';
			if (hs.ie && hs.uaVersion < 6) hs.styleRestoreCursor = 'hand';
			this.content.style.cursor = hs.styleRestoreCursor;
		}
	}
	hs.focusKey = this.key;	
	hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);	
	hs.fireEvent(this, 'onFocus');	
},
moveTo: function(x, y) {
	this.x.setPos(x);
	this.y.setPos(y);
},
resize : function (e) {
	var w, h, r = e.width / e.height;
	w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
	if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;
	h = this.isHtml ? e.height + e.dY : w / r;
	if (h < Math.min(this.minHeight, this.y.full)) {
		h = Math.min(this.minHeight, this.y.full);
		if (this.isImage) w = h * r;
	}
	this.resizeTo(w, h);
},
resizeTo: function(w, h) {
	this.y.setSize(h);
	this.x.setSize(w);
	this.wrapper.style.height = this.y.get('wsize') +'px';
},

close : function() {
	if (this.isClosing || !this.isExpanded) return;
	if (this.transitions[1] == 'crossfade' && hs.upcoming) {
		hs.getExpander(hs.upcoming).cancelLoading();
		hs.upcoming = null;
	}
	if (!hs.fireEvent(this, 'onBeforeClose')) return;
	this.isClosing = true;
	if (this.slideshow && !hs.upcoming) this.slideshow.pause();
	
	hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
	
	try {
		if (this.isHtml) this.htmlPrepareClose();
		this.content.style.cursor = 'default';
		this.changeSize(
			0, {
				wrapper: {
					width : this.x.t,
					height : this.y.t,
					left: this.x.tpos - this.x.cb + this.x.tb,
					top: this.y.tpos - this.y.cb + this.y.tb
				},
				content: {
					left: 0,
					top: 0,
					width: this.x.t,
					height: this.y.t
				}
			}, hs.restoreDuration
		);
	} catch (e) { this.afterClose(); }
},

htmlPrepareClose : function() {
	if (hs.geckoMac) { // bad redraws
		if (!hs.mask) hs.mask = hs.createElement('div', null, 
			{ position: 'absolute' }, hs.container);
		hs.setStyles(hs.mask, { width: this.x.size +'px', height: this.y.size +'px', 
			left: this.x.pos +'px', top: this.y.pos +'px', display: 'block' });			
	}
	if (this.objectType == 'swf') try { hs.$(this.body.id).StopPlay(); } catch (e) {}
	
	if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();		
	if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent) 
		this.scrollerDiv.style.overflow = 'hidden';
},

destroyObject : function () {
	if (hs.ie && this.iframe)
		try { this.iframe.contentWindow.document.body.innerHTML = ''; } catch (e) {}
	if (this.objectType == 'swf') swfobject.removeSWF(this.body.id);
	this.body.innerHTML = '';
},

sleep : function() {
	if (this.outline) this.outline.table.style.display = 'none';
	this.releaseMask = null;
	this.wrapper.style.display = 'none';
	hs.push(hs.sleeping, this);
},

awake : function() {try {
	
	hs.expanders[this.key] = this;
	
	if (!hs.allowMultipleInstances &&hs.focusKey != this.key) {	
		try { hs.expanders[hs.focusKey].close(); } catch (e){}
	}
	
	var z = hs.zIndexCounter++, stl = { display: '', zIndex: z };
	hs.setStyles (this.wrapper, stl);
	this.isClosing = false;
	
	var o = this.outline || 0;
	if (o) {
		if (!this.outlineWhileAnimating) stl.visibility = 'hidden';
		hs.setStyles (o.table, stl);		
	}
	if (this.slideshow) {
		this.initSlideshow();
	}
		
	this.show();
} catch (e) {}


},

createOverlay : function (o) {
	var el = o.overlayId, 
		relToVP = (o.relativeTo == 'viewport' && !/panel$/.test(o.position));
	if (typeof el == 'string') el = hs.getNode(el);
	if (o.html) el = hs.createElement('div', { innerHTML: o.html });
	if (!el || typeof el == 'string') return;
	if (!hs.fireEvent(this, 'onCreateOverlay', { overlay: el })) return;
	el.style.display = 'block';
	o.hsId = o.hsId || o.overlayId; 
	if (this.transitions[1] == 'crossfade' && this.reuseOverlay(o, el)) return;
	this.genOverlayBox();
	var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';
	if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';
	var overlay = hs.createElement(
		'div', {
			id: 'hsId'+ hs.idCounter++,
			hsId: o.hsId
		}, {
			position: 'absolute',
			visibility: 'hidden',
			width: width,
			direction: hs.lang.cssDirection || '',
			opacity: 0
		},
		relToVP ? hs.viewport :this.overlayBox,
		true
	);
	if (relToVP) overlay.hsKey = this.key;
	
	overlay.appendChild(el);
	hs.extend(overlay, {
		opacity: 1,
		offsetX: 0,
		offsetY: 0,
		dur: (o.fade === 0 || o.fade === false || (o.fade == 2 && hs.ie)) ? 0 : 250
	});
	hs.extend(overlay, o);
	
		
	if (this.gotOverlays) {
		this.positionOverlay(overlay);
		if (!overlay.hideOnMouseOut || this.mouseIsOver) 
			hs.animate(overlay, { opacity: overlay.opacity }, overlay.dur);
	}
	hs.push(this.overlays, hs.idCounter - 1);
},
positionOverlay : function(overlay) {
	var p = overlay.position || 'middle center',
		relToVP = (overlay.relativeTo == 'viewport'),
		offX = overlay.offsetX,
		offY = overlay.offsetY;
	if (relToVP) {
		hs.viewport.style.display = 'block';
		overlay.hsKey = this.key;
		if (overlay.offsetWidth > overlay.parentNode.offsetWidth)
			overlay.style.width = '100%';
	} else
	if (overlay.parentNode != this.overlayBox) this.overlayBox.appendChild(overlay);
	if (/left$/.test(p)) overlay.style.left = offX +'px'; 
	
	if (/center$/.test(p))	hs.setStyles (overlay, { 
		left: '50%',
		marginLeft: (offX - Math.round(overlay.offsetWidth / 2)) +'px'
	});	
	
	if (/right$/.test(p)) overlay.style.right = - offX +'px';
		
	if (/^leftpanel$/.test(p)) { 
		hs.setStyles(overlay, {
			right: '100%',
			marginRight: this.x.cb +'px',
			top: - this.y.cb +'px',
			bottom: - this.y.cb +'px',
			overflow: 'auto'
		});		 
		this.x.p1 = overlay.offsetWidth;
	
	} else if (/^rightpanel$/.test(p)) {
		hs.setStyles(overlay, {
			left: '100%',
			marginLeft: this.x.cb +'px',
			top: - this.y.cb +'px',
			bottom: - this.y.cb +'px',
			overflow: 'auto'
		});
		this.x.p2 = overlay.offsetWidth;
	}
	var parOff = overlay.parentNode.offsetHeight;
	overlay.style.height = 'auto';
	if (relToVP && overlay.offsetHeight > parOff)
		overlay.style.height = hs.ieLt7 ? parOff +'px' : '100%';

	if (/^top/.test(p)) overlay.style.top = offY +'px'; 
	if (/^middle/.test(p))	hs.setStyles (overlay, { 
		top: '50%', 
		marginTop: (offY - Math.round(overlay.offsetHeight / 2)) +'px'
	});	
	if (/^bottom/.test(p)) overlay.style.bottom = - offY +'px';
	if (/^above$/.test(p)) {
		hs.setStyles(overlay, {
			left: (- this.x.p1 - this.x.cb) +'px',
			right: (- this.x.p2 - this.x.cb) +'px',
			bottom: '100%',
			marginBottom: this.y.cb +'px',
			width: 'auto'
		});
		this.y.p1 = overlay.offsetHeight;
	
	} else if (/^below$/.test(p)) {
		hs.setStyles(overlay, {
			position: 'relative',
			left: (- this.x.p1 - this.x.cb) +'px',
			right: (- this.x.p2 - this.x.cb) +'px',
			top: '100%',
			marginTop: this.y.cb +'px',
			width: 'auto'
		});
		this.y.p2 = overlay.offsetHeight;
		overlay.style.position = 'absolute';
	}
},

getOverlays : function() {	
	this.getInline(['heading', 'caption'], true);
	this.getNumber();
	if (this.caption) hs.fireEvent(this, 'onAfterGetCaption');
	if (this.heading) hs.fireEvent(this, 'onAfterGetHeading');
	if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';
	if (hs.showCredits) this.writeCredits();
	for (var i = 0; i < hs.overlays.length; i++) {
		var o = hs.overlays[i], tId = o.thumbnailId, sg = o.slideshowGroup;
		if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId)
				|| (sg && sg === this.slideshowGroup)) {
			if (this.isImage || (this.isHtml && o.useOnHtml))
			this.createOverlay(o);
		}
	}
	var os = [];
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		if (/panel$/.test(o.position)) this.positionOverlay(o);
		else hs.push(os, o);
	}
	for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
	this.gotOverlays = true;
},
genOverlayBox : function() {
	if (!this.overlayBox) this.overlayBox = hs.createElement (
		'div', {
			className: this.wrapperClassName
		}, {
			position : 'absolute',
			width: (this.x.size || (this.useBox ? this.width : null) 
				|| this.x.full) +'px',
			height: (this.y.size || this.y.full) +'px',
			visibility : 'hidden',
			overflow : 'hidden',
			zIndex : hs.ie ? 4 : 'auto'
		},
		hs.container,
		true
	);
},
sizeOverlayBox : function(doWrapper, doPanels) {
	var overlayBox = this.overlayBox, 
		x = this.x,
		y = this.y;
	hs.setStyles( overlayBox, {
		width: x.size +'px', 
		height: y.size +'px'
	});
	if (doWrapper || doPanels) {
		for (var i = 0; i < this.overlays.length; i++) {
			var o = hs.$('hsId'+ this.overlays[i]);
			var ie6 = (hs.ieLt7 || document.compatMode == 'BackCompat');
			if (o && /^(above|below)$/.test(o.position)) {
				if (ie6) {
					o.style.width = (overlayBox.offsetWidth + 2 * x.cb
						+ x.p1 + x.p2) +'px';
				}
				y[o.position == 'above' ? 'p1' : 'p2'] = o.offsetHeight;
			}
			if (o && ie6 && /^(left|right)panel$/.test(o.position)) {
				o.style.height = (overlayBox.offsetHeight + 2* y.cb) +'px';
			}
		}
	}
	if (doWrapper) {
		hs.setStyles(this.content, {
			top: y.p1 +'px'
		});
		hs.setStyles(overlayBox, {
			top: (y.p1 + y.cb) +'px'
		});
	}
},

showOverlays : function() {
	var b = this.overlayBox;
	b.className = '';
	hs.setStyles(b, {
		top: (this.y.p1 + this.y.cb) +'px',
		left: (this.x.p1 + this.x.cb) +'px',
		overflow : 'visible'
	});
	if (hs.safari) b.style.visibility = 'visible';
	this.wrapper.appendChild (b);
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		o.style.zIndex = o.zIndex || 4;
		if (!o.hideOnMouseOut || this.mouseIsOver) {
			o.style.visibility = 'visible';
			hs.setStyles(o, { visibility: 'visible', display: '' });
			hs.animate(o, { opacity: o.opacity }, o.dur);
		}
	}
},

destroyOverlays : function() {
	if (!this.overlays.length) return;
	if (this.slideshow) {
		var c = this.slideshow.controls;
		if (c && hs.getExpander(c) == this) c.parentNode.removeChild(c);
	}
	for (var i = 0; i < this.overlays.length; i++) {
		var o = hs.$('hsId'+ this.overlays[i]);
		if (o && o.parentNode == hs.viewport && hs.getExpander(o) == this) hs.discardElement(o);
	}
	if (this.isHtml && this.preserveContent) {
		this.overlayBox.style.top = '-9999px';
		hs.container.appendChild(this.overlayBox);
	} else
	hs.discardElement(this.overlayBox);
},



createFullExpand : function () {
	if (this.slideshow && this.slideshow.controls) {
		this.slideshow.enable('full-expand');
		return;
	}
	this.fullExpandLabel = hs.createElement(
		'a', {
			href: 'javascript:hs.expanders['+ this.key +'].doFullExpand();',
			title: hs.lang.fullExpandTitle,
			className: 'highslide-full-expand'
		}
	);
	if (!hs.fireEvent(this, 'onCreateFullExpand')) return;
	
	this.createOverlay({ 
		overlayId: this.fullExpandLabel, 
		position: hs.fullExpandPosition, 
		hideOnMouseOut: true, 
		opacity: hs.fullExpandOpacity
	});
},

doFullExpand : function () {
	try {
		if (!hs.fireEvent(this, 'onDoFullExpand')) return;
		if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);
		
		this.focus();
		var xSize = this.x.size;
		this.resizeTo(this.x.full, this.y.full);
		
		var xpos = this.x.pos - (this.x.size - xSize) / 2;
		if (xpos < hs.marginLeft) xpos = hs.marginLeft;
		
		this.moveTo(xpos, this.y.pos);
		this.doShowHide('hidden');
	
	} catch (e) {
		this.error(e);
	}
},


afterClose : function () {
	this.a.className = this.a.className.replace('highslide-active-anchor', '');
	
	this.doShowHide('visible');	
	
	if (this.isHtml && this.preserveContent
			 && this.transitions[1] != 'crossfade') {
		this.sleep();
	} else {
		if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
	
		hs.discardElement(this.wrapper);
	}
	if (hs.mask) hs.mask.style.display = 'none';
	this.destroyOverlays();
	if (!hs.viewport.childNodes.length) hs.viewport.style.display = 'none';
	
	if (this.dimmingOpacity) hs.undim(this.key);
	hs.fireEvent(this, 'onAfterClose');
	hs.expanders[this.key] = null;		
	hs.reOrder();
}

};


// hs.Ajax object prototype
hs.Ajax = function (a, content, pre) {
	this.a = a;
	this.content = content;
	this.pre = pre;
};

hs.Ajax.prototype = {
run : function () {
	var xhr;
	if (!this.src) this.src = hs.getSrc(this.a);
	if (this.src.match('#')) {
		var arr = this.src.split('#');
		this.src = arr[0];
		this.id = arr[1];
	}
	if (hs.cachedGets[this.src]) {
		this.cachedGet = hs.cachedGets[this.src];
		if (this.id) this.getElementContent();
		else this.loadHTML();
		return;
	}
	try { xhr = new XMLHttpRequest(); }
	catch (e) {
		try { xhr = new ActiveXObject("Msxml2.XMLHTTP"); }
		catch (e) {
			try { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
			catch (e) { this.onError(); }
		}
	}
	var pThis = this; 
	xhr.onreadystatechange = function() {
		if(pThis.xhr.readyState == 4) {
			if (pThis.id) pThis.getElementContent();
			else pThis.loadHTML();
		}
	};
	var src = this.src;
	this.xhr = xhr;
	if (hs.forceAjaxReload) 
		src = src.replace(/$/, (/\?/.test(src) ? '&' : '?') +'dummy='+ (new Date()).getTime());
	xhr.open('GET', src, true);
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.send(null);
},

getElementContent : function() {
	hs.init();
	var attribs = window.opera || hs.ie6SSL ? { src: 'about:blank' } : null;
	
	this.iframe = hs.createElement('iframe', attribs, 
		{ position: 'absolute', top: '-9999px' }, hs.container);
		
	this.loadHTML();
},

loadHTML : function() {
	var s = this.cachedGet || this.xhr.responseText,
		regBody;
	if (this.pre) hs.cachedGets[this.src] = s;
	if (!hs.ie || hs.uaVersion >= 5.5) {
		s = s.replace(new RegExp('<link[^>]*>', 'gi'), '')
			.replace(new RegExp('<script[^>]*>.*?</script>', 'gi'), '');
		if (this.iframe) {
			var doc = this.iframe.contentDocument;
			if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;
			if (!doc) { // Opera
				var pThis = this;
				setTimeout(function() {	pThis.loadHTML(); }, 25);
				return;
			}
			doc.open();
			doc.write(s);
			doc.close();
			try { s = doc.getElementById(this.id).innerHTML; } catch (e) {
				try { s = this.iframe.document.getElementById(this.id).innerHTML; } catch (e) {} // opera
			}
			hs.discardElement(this.iframe);
		} else {
			regBody = /(<body[^>]*>|<\/body>)/ig;
			if (regBody.test(s)) s = s.split(regBody)[hs.ie ? 1 : 2];
			
		}
	}
	hs.getElementByClass(this.content, 'DIV', 'highslide-body').innerHTML = s;
	this.onLoad();
	for (var x in this) this[x] = null;
}
};


hs.Slideshow = function (expKey, options) {
	if (hs.dynamicallyUpdateAnchors !== false) hs.updateAnchors();
	this.expKey = expKey;
	for (var x in options) this[x] = options[x];
	if (this.useControls) this.getControls();
	if (this.thumbstrip) this.thumbstrip = hs.Thumbstrip(this);
};
hs.Slideshow.prototype = {
getControls: function() {
	this.controls = hs.createElement('div', { innerHTML: hs.replaceLang(hs.skin.controls) }, 
		null, hs.container);
	
	var buttons = ['play', 'pause', 'previous', 'next', 'move', 'full-expand', 'close'];
	this.btn = {};
	var pThis = this;
	for (var i = 0; i < buttons.length; i++) {
		this.btn[buttons[i]] = hs.getElementByClass(this.controls, 'li', 'highslide-'+ buttons[i]);
		this.enable(buttons[i]);
	}
	this.btn.pause.style.display = 'none';
	//this.disable('full-expand');
},
checkFirstAndLast: function() {
	if (this.repeat || !this.controls) return;
	var exp = hs.expanders[this.expKey],
		cur = exp.getAnchorIndex(), 
		re = /disabled$/;
	if (cur == 0) 
		this.disable('previous');
	else if (re.test(this.btn.previous.getElementsByTagName('a')[0].className))
		this.enable('previous');
	if (cur + 1 == hs.anchors.groups[exp.slideshowGroup || 'none'].length) {
		this.disable('next');
		this.disable('play');
	} else if (re.test(this.btn.next.getElementsByTagName('a')[0].className)) {
		this.enable('next');
		this.enable('play');
	}
},
enable: function(btn) {
	if (!this.btn) return;
	var sls = this, a = this.btn[btn].getElementsByTagName('a')[0], re = /disabled$/;
	a.onclick = function() {
		sls[btn]();
		return false;
	};
	if (re.test(a.className)) a.className = a.className.replace(re, '');
},
disable: function(btn) {
	if (!this.btn) return;
	var a = this.btn[btn].getElementsByTagName('a')[0];
	a.onclick = function() { return false; };
	if (!/disabled$/.test(a.className)) a.className += ' disabled';
},
hitSpace: function() {
	if (this.autoplay) this.pause();
	else this.play();
},
play: function(wait) {
	if (this.btn) {
		this.btn.play.style.display = 'none';
		this.btn.pause.style.display = '';
	}
	
	this.autoplay = true;	
	if (!wait) hs.next(this.expKey);
},
pause: function() {
	if (this.btn) {
		this.btn.pause.style.display = 'none';
		this.btn.play.style.display = '';
	}
	
	clearTimeout(this.autoplay);
	this.autoplay = null;
},
previous: function() {
	this.pause();
	hs.previous(this.btn.previous);
},
next: function() {
	this.pause();
	hs.next(this.btn.next);
},
move: function() {},
'full-expand': function() {
	hs.getExpander().doFullExpand();
},
close: function() {
	hs.close(this.btn.close);
}
};
hs.Thumbstrip = function(slideshow) {
	function add (exp) {
		hs.extend(options || {}, {
			overlayId: dom,
			hsId: 'thumbstrip',
			className: 'highslide-thumbstrip-'+ mode +'-overlay ' + (options.className || '')
		});
		if (hs.ieLt7) options.fade = 0;
		exp.createOverlay(options);
		hs.setStyles(dom.parentNode, { overflow: 'hidden' });
	};
	
	function scroll (delta) {	
		selectThumb(undefined, Math.round(delta * dom[isX ? 'offsetWidth' : 'offsetHeight'] * 0.7));
	};
	
	function selectThumb (i, scrollBy) {
		if (i === undefined) for (var j = 0; j < group.length; j++) {
			if (group[j] == hs.expanders[slideshow.expKey].a) {
				i = j;
				break;
			}
		}
		if (i === undefined) return;
		var as = dom.getElementsByTagName('a'),
			active = as[i],
			cell = active.parentNode,
			left = isX ? 'Left' : 'Top',
			right = isX ? 'Right' : 'Bottom',
			width = isX ? 'Width' : 'Height',
			offsetLeft = 'offset' + left,
			offsetWidth = 'offset' + width,
			overlayWidth = div.parentNode.parentNode[offsetWidth],
			minTblPos = overlayWidth - table[offsetWidth],
			curTblPos = parseInt(table.style[isX ? 'left' : 'top']) || 0,
			tblPos = curTblPos,
			mgnRight = 20;
		if (scrollBy !== undefined) {
			tblPos = curTblPos - scrollBy;
			
			if (minTblPos > 0) minTblPos = 0;
			if (tblPos > 0) tblPos = 0;
			if (tblPos < minTblPos) tblPos = minTblPos;
			
	
		} else {
			for (var j = 0; j < as.length; j++) as[j].className = '';
			active.className = 'highslide-active-anchor';
			var activeLeft = i > 0 ? as[i - 1].parentNode[offsetLeft] : cell[offsetLeft],
				activeRight = cell[offsetLeft] + cell[offsetWidth] + 
					(as[i + 1] ? as[i + 1].parentNode[offsetWidth] : 0);
			if (activeRight > overlayWidth - curTblPos) tblPos = overlayWidth - activeRight;
			else if (activeLeft < -curTblPos) tblPos = -activeLeft;
		}
		var markerPos = cell[offsetLeft] + (cell[offsetWidth] - marker[offsetWidth]) / 2 + tblPos;
		hs.animate(table, isX ? { left: tblPos } : { top: tblPos }, null, 'easeOutQuad');
		hs.animate(marker, isX ? { left: markerPos } : { top: markerPos }, null, 'easeOutQuad');
		scrollUp.style.display = tblPos < 0 ? 'block' : 'none';
		scrollDown.style.display = (tblPos > minTblPos)  ? 'block' : 'none';
		
	};
	

	// initialize
	var group = hs.anchors.groups[hs.expanders[slideshow.expKey].slideshowGroup || 'none'],
		options = slideshow.thumbstrip,
		mode = options.mode || 'horizontal',
		floatMode = (mode == 'float'),
		tree = floatMode ? ['div', 'ul', 'li', 'span'] : ['table', 'tbody', 'tr', 'td'],
		isX = (mode == 'horizontal'),
		dom = hs.createElement('div', {
				className: 'highslide-thumbstrip highslide-thumbstrip-'+ mode,
				innerHTML:
					'<div class="highslide-thumbstrip-inner">'+
					'<'+ tree[0] +'><'+ tree[1] +'></'+ tree[1] +'></'+ tree[0] +'></div>'+
					'<div class="highslide-scroll-up"><div></div></div>'+
					'<div class="highslide-scroll-down"><div></div></div>'+
					'<div class="highslide-marker"><div></div></div>'
			}, {
				display: 'none'
			}, hs.container),
		domCh = dom.childNodes,
		div = domCh[0],
		scrollUp = domCh[1],
		scrollDown = domCh[2],
		marker = domCh[3],
		table = div.firstChild,
		tbody = dom.getElementsByTagName(tree[1])[0],
		tr;
	for (var i = 0; i < group.length; i++) {
		if (i == 0 || !isX) tr = hs.createElement(tree[2], null, null, tbody);
		(function(){
			var a = group[i],
				cell = hs.createElement(tree[3], null, null, tr),
				pI = i;
			hs.createElement('a', {
				href: a.href,
				onclick: function() {
					hs.getExpander(this).focus();
					return hs.transit(a);
				},
				innerHTML: hs.stripItemFormatter ? hs.stripItemFormatter(a) : a.innerHTML
			}, null, cell);
		})();
	}
	if (!floatMode) {
		scrollUp.onclick = function () { scroll(-1); };
		scrollDown.onclick = function() { scroll(1); };
		hs.addEventListener(tbody, document.onmousewheel !== undefined ? 
				'mousewheel' : 'DOMMouseScroll', function(e) {        
			var delta = 0;
	        e = e || window.event;
	        if (e.wheelDelta) {
				delta = e.wheelDelta/120;
				if (hs.opera) delta = -delta;
	        } else if (e.detail) {
				delta = -e.detail/3;
	        }
	        if (delta) scroll(-delta * 0.2);
			if (e.preventDefault) e.preventDefault();
			e.returnValue = false;
		});
	}
	
	return {
		add: add,
		selectThumb: selectThumb
	}
};
hs.langDefaults = hs.lang;
// history
var HsExpander = hs.Expander;
if (hs.ie && window == window.top) {
	(function () {
		try {
			document.documentElement.doScroll('left');
		} catch (e) {
			setTimeout(arguments.callee, 50);
			return;
		}
		hs.ready();
	})();
}
hs.addEventListener(document, 'DOMContentLoaded', hs.ready);
hs.addEventListener(window, 'load', hs.ready);

// set handlers
hs.addEventListener(document, 'ready', function() {
	if (hs.expandCursor || hs.dimmingOpacity) {
		var style = hs.createElement('style', { type: 'text/css' }, null, 
			document.getElementsByTagName('HEAD')[0]);
			
		function addRule(sel, dec) {		
			if (!hs.ie) {
				style.appendChild(document.createTextNode(sel + " {" + dec + "}"));
			} else {
				var last = document.styleSheets[document.styleSheets.length - 1];
				if (typeof(last.addRule) == "object") last.addRule(sel, dec);
			}
		}
		function fix(prop) {
			return 'expression( ( ( ignoreMe = document.documentElement.'+ prop +
				' ? document.documentElement.'+ prop +' : document.body.'+ prop +' ) ) + \'px\' );';
		}
		if (hs.expandCursor) addRule ('.highslide img', 
			'cursor: url('+ hs.graphicsDir + hs.expandCursor +'), pointer !important;');
		addRule ('.highslide-viewport-size',
			hs.ie && (hs.uaVersion < 7 || document.compatMode == 'BackCompat') ?
				'position: absolute; '+
				'left:'+ fix('scrollLeft') +
				'top:'+ fix('scrollTop') +
				'width:'+ fix('clientWidth') +
				'height:'+ fix('clientHeight') :
				'position: fixed; width: 100%; height: 100%; left: 0; top: 0');
	}
});
hs.addEventListener(window, 'resize', function() {
	hs.getPageSize();
	if (hs.viewport) for (var i = 0; i < hs.viewport.childNodes.length; i++) {
		var node = hs.viewport.childNodes[i],
			exp = hs.getExpander(node);
		exp.positionOverlay(node);
		if (node.hsId == 'thumbstrip') exp.slideshow.thumbstrip.selectThumb();
	}
});
hs.addEventListener(document, 'mousemove', function(e) {
	hs.mouse = { x: e.clientX, y: e.clientY	};
});
hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);
hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);
hs.addEventListener(document, 'ready', hs.setClickEvents);
hs.addEventListener(window, 'load', hs.preloadImages);
hs.addEventListener(window, 'load', hs.preloadAjax);
}
/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = 'http://www.highcharts.com/highslide/graphics/';
hs.outlineType = 'rounded-white';
hs.wrapperClassName = 'draggable-header';
hs.captionEval = 'this.a.title';
hs.showCredits = false;
hs.marginTop = 20;
hs.marginRight = 20;
hs.marginBottom = 20;
hs.marginLeft = 20;
