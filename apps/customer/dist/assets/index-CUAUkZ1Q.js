function b1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function k1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bx={exports:{}},vd={},kx={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cl=Symbol.for("react.element"),R1=Symbol.for("react.portal"),A1=Symbol.for("react.fragment"),P1=Symbol.for("react.strict_mode"),D1=Symbol.for("react.profiler"),j1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),L1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),H_=Symbol.iterator;function U1(t){return t===null||typeof t!="object"?null:(t=H_&&t[H_]||t["@@iterator"],typeof t=="function"?t:null)}var Rx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ax=Object.assign,Px={};function Eo(t,e,n){this.props=t,this.context=e,this.refs=Px,this.updater=n||Rx}Eo.prototype.isReactComponent={};Eo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Eo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dx(){}Dx.prototype=Eo.prototype;function Im(t,e,n){this.props=t,this.context=e,this.refs=Px,this.updater=n||Rx}var Cm=Im.prototype=new Dx;Cm.constructor=Im;Ax(Cm,Eo.prototype);Cm.isPureReactComponent=!0;var G_=Array.isArray,jx=Object.prototype.hasOwnProperty,Nm={current:null},Ox={key:!0,ref:!0,__self:!0,__source:!0};function Lx(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)jx.call(e,r)&&!Ox.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Cl,type:t,key:i,ref:o,props:s,_owner:Nm.current}}function B1(t,e){return{$$typeof:Cl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cl}function z1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var K_=/\/+/g;function $h(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z1(""+t.key):e.toString(36)}function Mc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cl:case R1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+$h(o,0):r,G_(s)?(n="",t!=null&&(n=t.replace(K_,"$&/")+"/"),Mc(s,e,n,"",function(d){return d})):s!=null&&(Sm(s)&&(s=B1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(K_,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",G_(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+$h(i,a);o+=Mc(i,e,n,l,s)}else if(l=U1(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+$h(i,a++),o+=Mc(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function uc(t,e,n){if(t==null)return t;var r=[],s=0;return Mc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function $1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},Vc={transition:null},W1={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:Vc,ReactCurrentOwner:Nm};function Mx(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:uc,forEach:function(t,e,n){uc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return uc(t,function(){e++}),e},toArray:function(t){return uc(t,function(e){return e})||[]},only:function(t){if(!Sm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Eo;ae.Fragment=A1;ae.Profiler=D1;ae.PureComponent=Im;ae.StrictMode=P1;ae.Suspense=M1;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;ae.act=Mx;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ax({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Nm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jx.call(e,l)&&!Ox.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Cl,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:O1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:j1,_context:t},t.Consumer=t};ae.createElement=Lx;ae.createFactory=function(t){var e=Lx.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:L1,render:t}};ae.isValidElement=Sm;ae.lazy=function(t){return{$$typeof:F1,_payload:{_status:-1,_result:t},_init:$1}};ae.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Vc.transition;Vc.transition={};try{t()}finally{Vc.transition=e}};ae.unstable_act=Mx;ae.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ae.useContext=function(t){return Nt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ae.useId=function(){return Nt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ae.useRef=function(t){return Nt.current.useRef(t)};ae.useState=function(t){return Nt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Nt.current.useTransition()};ae.version="18.3.1";kx.exports=ae;var A=kx.exports;const Vx=k1(A),q1=b1({__proto__:null,default:Vx},[A]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=A,G1=Symbol.for("react.element"),K1=Symbol.for("react.fragment"),Q1=Object.prototype.hasOwnProperty,Y1=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X1={key:!0,ref:!0,__self:!0,__source:!0};function Fx(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Q1.call(e,r)&&!X1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:G1,type:t,key:i,ref:o,props:s,_owner:Y1.current}}vd.Fragment=K1;vd.jsx=Fx;vd.jsxs=Fx;bx.exports=vd;var u=bx.exports,Ff={},Ux={exports:{}},Kt={},Bx={exports:{}},zx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ee=$.length;$.push(X);e:for(;0<ee;){var be=ee-1>>>1,Ve=$[be];if(0<s(Ve,X))$[be]=X,$[ee]=Ve,ee=be;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ee=$.pop();if(ee!==X){$[0]=ee;e:for(var be=0,Ve=$.length,ks=Ve>>>1;be<ks;){var Yt=2*(be+1)-1,Rs=$[Yt],cn=Yt+1,Tr=$[cn];if(0>s(Rs,ee))cn<Ve&&0>s(Tr,Rs)?($[be]=Tr,$[cn]=ee,be=cn):($[be]=Rs,$[Yt]=ee,be=Yt);else if(cn<Ve&&0>s(Tr,ee))$[be]=Tr,$[cn]=ee,be=cn;else break e}}return X}function s($,X){var ee=$.sortIndex-X.sortIndex;return ee!==0?ee:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],d=[],h=1,f=null,m=3,_=!1,T=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N($){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=$)r(d),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(d)}}function j($){if(b=!1,N($),!T)if(n(l)!==null)T=!0,it(M);else{var X=n(d);X!==null&&ln(j,X.startTime-$)}}function M($,X){T=!1,b&&(b=!1,x(y),y=-1),_=!0;var ee=m;try{for(N(X),f=n(l);f!==null&&(!(f.expirationTime>X)||$&&!k());){var be=f.callback;if(typeof be=="function"){f.callback=null,m=f.priorityLevel;var Ve=be(f.expirationTime<=X);X=t.unstable_now(),typeof Ve=="function"?f.callback=Ve:f===n(l)&&r(l),N(X)}else r(l);f=n(l)}if(f!==null)var ks=!0;else{var Yt=n(d);Yt!==null&&ln(j,Yt.startTime-X),ks=!1}return ks}finally{f=null,m=ee,_=!1}}var L=!1,E=null,y=-1,I=5,S=-1;function k(){return!(t.unstable_now()-S<I)}function P(){if(E!==null){var $=t.unstable_now();S=$;var X=!0;try{X=E(!0,$)}finally{X?C():(L=!1,E=null)}}else L=!1}var C;if(typeof w=="function")C=function(){w(P)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ee=fe.port2;fe.port1.onmessage=P,C=function(){Ee.postMessage(null)}}else C=function(){R(P,0)};function it($){E=$,L||(L=!0,C())}function ln($,X){y=R(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,it(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return $()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=m;m=$;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function($,X,ee){var be=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?be+ee:be):ee=be,$){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=ee+Ve,$={id:h++,callback:X,priorityLevel:$,startTime:ee,expirationTime:Ve,sortIndex:-1},ee>be?($.sortIndex=ee,e(d,$),n(l)===null&&$===n(d)&&(b?(x(y),y=-1):b=!0,ln(j,ee-be))):($.sortIndex=Ve,e(l,$),T||_||(T=!0,it(M))),$},t.unstable_shouldYield=k,t.unstable_wrapCallback=function($){var X=m;return function(){var ee=m;m=X;try{return $.apply(this,arguments)}finally{m=ee}}}})(zx);Bx.exports=zx;var J1=Bx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=A,Gt=J1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $x=new Set,za={};function ci(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(za[t]=e,t=0;t<e.length;t++)$x.add(e[t])}var sr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,eb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Q_={},Y_={};function tb(t){return Uf.call(Y_,t)?!0:Uf.call(Q_,t)?!1:eb.test(t)?Y_[t]=!0:(Q_[t]=!0,!1)}function nb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rb(t,e,n,r){if(e===null||typeof e>"u"||nb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var bm=/[\-:]([a-z])/g;function km(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bm,km);ct[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bm,km);ct[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bm,km);ct[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Rm(t,e,n,r){var s=ct.hasOwnProperty(e)?ct[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rb(e,n,s,r)&&(n=null),r||s===null?tb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mr=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,dc=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Bf=Symbol.for("react.profiler"),Wx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Pm=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),$f=Symbol.for("react.suspense_list"),Dm=Symbol.for("react.memo"),Pr=Symbol.for("react.lazy"),Hx=Symbol.for("react.offscreen"),X_=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=X_&&t[X_]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Wh;function ha(t){if(Wh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wh=e&&e[1]||""}return`
`+Wh+t}var qh=!1;function Hh(t,e){if(!t||qh)return"";qh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{qh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ha(t):""}function sb(t){switch(t.tag){case 5:return ha(t.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return t=Hh(t.type,!1),t;case 11:return t=Hh(t.type.render,!1),t;case 1:return t=Hh(t.type,!0),t;default:return""}}function Wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Ni:return"Portal";case Bf:return"Profiler";case Am:return"StrictMode";case zf:return"Suspense";case $f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qx:return(t.displayName||"Context")+".Consumer";case Wx:return(t._context.displayName||"Context")+".Provider";case Pm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dm:return e=t.displayName||null,e!==null?e:Wf(t.type)||"Memo";case Pr:e=t._payload,t=t._init;try{return Wf(t(e))}catch{}}return null}function ib(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wf(e);case 8:return e===Am?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Gx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ob(t){var e=Gx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function hc(t){t._valueTracker||(t._valueTracker=ob(t))}function Kx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function J_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qx(t,e){e=e.checked,e!=null&&Rm(t,"checked",e,!1)}function Hf(t,e){Qx(t,e);var n=os(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gf(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Z_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gf(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fa=Array.isArray;function Bi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Kf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ev(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(fa(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function Yx(t,e){var n=os(e.value),r=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function tv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fc,Jx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fc=fc||document.createElement("div"),fc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ab=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){ab.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function Zx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function eE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Zx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var lb=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yf(t,e){if(e){if(lb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Xf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function jm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zf=null,zi=null,$i=null;function nv(t){if(t=bl(t)){if(typeof Zf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Id(e),Zf(t.stateNode,t.type,e))}}function tE(t){zi?$i?$i.push(t):$i=[t]:zi=t}function nE(){if(zi){var t=zi,e=$i;if($i=zi=null,nv(t),e)for(t=0;t<e.length;t++)nv(e[t])}}function rE(t,e){return t(e)}function sE(){}var Gh=!1;function iE(t,e,n){if(Gh)return t(e,n);Gh=!0;try{return rE(t,e,n)}finally{Gh=!1,(zi!==null||$i!==null)&&(sE(),nE())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var r=Id(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var ep=!1;if(sr)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){ep=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{ep=!1}function cb(t,e,n,r,s,i,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Ta=!1,lu=null,cu=!1,tp=null,ub={onError:function(t){Ta=!0,lu=t}};function db(t,e,n,r,s,i,o,a,l){Ta=!1,lu=null,cb.apply(ub,arguments)}function hb(t,e,n,r,s,i,o,a,l){if(db.apply(this,arguments),Ta){if(Ta){var d=lu;Ta=!1,lu=null}else throw Error(U(198));cu||(cu=!0,tp=d)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function oE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rv(t){if(ui(t)!==t)throw Error(U(188))}function fb(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return rv(s),t;if(i===r)return rv(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function aE(t){return t=fb(t),t!==null?lE(t):null}function lE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lE(t);if(e!==null)return e;t=t.sibling}return null}var cE=Gt.unstable_scheduleCallback,sv=Gt.unstable_cancelCallback,pb=Gt.unstable_shouldYield,mb=Gt.unstable_requestPaint,Ue=Gt.unstable_now,gb=Gt.unstable_getCurrentPriorityLevel,Om=Gt.unstable_ImmediatePriority,uE=Gt.unstable_UserBlockingPriority,uu=Gt.unstable_NormalPriority,yb=Gt.unstable_LowPriority,dE=Gt.unstable_IdlePriority,wd=null,jn=null;function _b(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(wd,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:xb,vb=Math.log,wb=Math.LN2;function xb(t){return t>>>=0,t===0?32:31-(vb(t)/wb|0)|0}var pc=64,mc=4194304;function pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function du(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=pa(a):(i&=o,i!==0&&(r=pa(i)))}else o=n&~s,o!==0?r=pa(o):i!==0&&(r=pa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vn(e),s=1<<n,r|=t[n],e&=~s;return r}function Eb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-vn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=Eb(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function np(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hE(){var t=pc;return pc<<=1,!(pc&4194240)&&(pc=64),t}function Kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vn(e),t[e]=n}function Ib(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-vn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Lm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-vn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function fE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pE,Mm,mE,gE,yE,rp=!1,gc=[],qr=null,Hr=null,Gr=null,qa=new Map,Ha=new Map,jr=[],Cb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iv(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Hr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function ta(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=bl(e),e!==null&&Mm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Nb(t,e,n,r,s){switch(e){case"focusin":return qr=ta(qr,t,e,n,r,s),!0;case"dragenter":return Hr=ta(Hr,t,e,n,r,s),!0;case"mouseover":return Gr=ta(Gr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return qa.set(i,ta(qa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ha.set(i,ta(Ha.get(i)||null,t,e,n,r,s)),!0}return!1}function _E(t){var e=Us(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=oE(n),e!==null){t.blockedOn=e,yE(t.priority,function(){mE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jf=r,n.target.dispatchEvent(r),Jf=null}else return e=bl(n),e!==null&&Mm(e),t.blockedOn=n,!1;e.shift()}return!0}function ov(t,e,n){Fc(t)&&n.delete(e)}function Sb(){rp=!1,qr!==null&&Fc(qr)&&(qr=null),Hr!==null&&Fc(Hr)&&(Hr=null),Gr!==null&&Fc(Gr)&&(Gr=null),qa.forEach(ov),Ha.forEach(ov)}function na(t,e){t.blockedOn===e&&(t.blockedOn=null,rp||(rp=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,Sb)))}function Ga(t){function e(s){return na(s,t)}if(0<gc.length){na(gc[0],t);for(var n=1;n<gc.length;n++){var r=gc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&na(qr,t),Hr!==null&&na(Hr,t),Gr!==null&&na(Gr,t),qa.forEach(e),Ha.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)_E(n),n.blockedOn===null&&jr.shift()}var Wi=mr.ReactCurrentBatchConfig,hu=!0;function bb(t,e,n,r){var s=ge,i=Wi.transition;Wi.transition=null;try{ge=1,Vm(t,e,n,r)}finally{ge=s,Wi.transition=i}}function kb(t,e,n,r){var s=ge,i=Wi.transition;Wi.transition=null;try{ge=4,Vm(t,e,n,r)}finally{ge=s,Wi.transition=i}}function Vm(t,e,n,r){if(hu){var s=sp(t,e,n,r);if(s===null)sf(t,e,r,fu,n),iv(t,r);else if(Nb(s,t,e,n,r))r.stopPropagation();else if(iv(t,r),e&4&&-1<Cb.indexOf(t)){for(;s!==null;){var i=bl(s);if(i!==null&&pE(i),i=sp(t,e,n,r),i===null&&sf(t,e,r,fu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else sf(t,e,r,null,n)}}var fu=null;function sp(t,e,n,r){if(fu=null,t=jm(r),t=Us(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=oE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function vE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gb()){case Om:return 1;case uE:return 4;case uu:case yb:return 16;case dE:return 536870912;default:return 16}default:return 16}}var Br=null,Fm=null,Uc=null;function wE(){if(Uc)return Uc;var t,e=Fm,n=e.length,r,s="value"in Br?Br.value:Br.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Uc=s.slice(t,1<r?1-r:void 0)}function Bc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yc(){return!0}function av(){return!1}function Qt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yc:av,this.isPropagationStopped=av,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yc)},persist:function(){},isPersistent:yc}),e}var To={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Um=Qt(To),Sl=De({},To,{view:0,detail:0}),Rb=Qt(Sl),Qh,Yh,ra,xd=De({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ra&&(ra&&t.type==="mousemove"?(Qh=t.screenX-ra.screenX,Yh=t.screenY-ra.screenY):Yh=Qh=0,ra=t),Qh)},movementY:function(t){return"movementY"in t?t.movementY:Yh}}),lv=Qt(xd),Ab=De({},xd,{dataTransfer:0}),Pb=Qt(Ab),Db=De({},Sl,{relatedTarget:0}),Xh=Qt(Db),jb=De({},To,{animationName:0,elapsedTime:0,pseudoElement:0}),Ob=Qt(jb),Lb=De({},To,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mb=Qt(Lb),Vb=De({},To,{data:0}),cv=Qt(Vb),Fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bb[t])?!!e[t]:!1}function Bm(){return zb}var $b=De({},Sl,{key:function(t){if(t.key){var e=Fb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ub[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bm,charCode:function(t){return t.type==="keypress"?Bc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Wb=Qt($b),qb=De({},xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uv=Qt(qb),Hb=De({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bm}),Gb=Qt(Hb),Kb=De({},To,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qb=Qt(Kb),Yb=De({},xd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=Qt(Yb),Jb=[9,13,27,32],zm=sr&&"CompositionEvent"in window,Ia=null;sr&&"documentMode"in document&&(Ia=document.documentMode);var Zb=sr&&"TextEvent"in window&&!Ia,xE=sr&&(!zm||Ia&&8<Ia&&11>=Ia),dv=" ",hv=!1;function EE(t,e){switch(t){case"keyup":return Jb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function TE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function ek(t,e){switch(t){case"compositionend":return TE(e);case"keypress":return e.which!==32?null:(hv=!0,dv);case"textInput":return t=e.data,t===dv&&hv?null:t;default:return null}}function tk(t,e){if(bi)return t==="compositionend"||!zm&&EE(t,e)?(t=wE(),Uc=Fm=Br=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xE&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function IE(t,e,n,r){tE(r),e=pu(e,"onChange"),0<e.length&&(n=new Um("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ca=null,Ka=null;function rk(t){OE(t,0)}function Ed(t){var e=Ai(t);if(Kx(e))return t}function sk(t,e){if(t==="change")return e}var CE=!1;if(sr){var Jh;if(sr){var Zh="oninput"in document;if(!Zh){var pv=document.createElement("div");pv.setAttribute("oninput","return;"),Zh=typeof pv.oninput=="function"}Jh=Zh}else Jh=!1;CE=Jh&&(!document.documentMode||9<document.documentMode)}function mv(){Ca&&(Ca.detachEvent("onpropertychange",NE),Ka=Ca=null)}function NE(t){if(t.propertyName==="value"&&Ed(Ka)){var e=[];IE(e,Ka,t,jm(t)),iE(rk,e)}}function ik(t,e,n){t==="focusin"?(mv(),Ca=e,Ka=n,Ca.attachEvent("onpropertychange",NE)):t==="focusout"&&mv()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ed(Ka)}function ak(t,e){if(t==="click")return Ed(e)}function lk(t,e){if(t==="input"||t==="change")return Ed(e)}function ck(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:ck;function Qa(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Uf.call(e,s)||!In(t[s],e[s]))return!1}return!0}function gv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yv(t,e){var n=gv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gv(n)}}function SE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?SE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bE(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function $m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=bE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&SE(n.ownerDocument.documentElement,n)){if(r!==null&&$m(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=yv(n,i);var o=yv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dk=sr&&"documentMode"in document&&11>=document.documentMode,ki=null,ip=null,Na=null,op=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;op||ki==null||ki!==au(r)||(r=ki,"selectionStart"in r&&$m(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Na&&Qa(Na,r)||(Na=r,r=pu(ip,"onSelect"),0<r.length&&(e=new Um("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function _c(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:_c("Animation","AnimationEnd"),animationiteration:_c("Animation","AnimationIteration"),animationstart:_c("Animation","AnimationStart"),transitionend:_c("Transition","TransitionEnd")},ef={},kE={};sr&&(kE=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function Td(t){if(ef[t])return ef[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kE)return ef[t]=e[n];return t}var RE=Td("animationend"),AE=Td("animationiteration"),PE=Td("animationstart"),DE=Td("transitionend"),jE=new Map,vv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vs(t,e){jE.set(t,e),ci(e,[t])}for(var tf=0;tf<vv.length;tf++){var nf=vv[tf],hk=nf.toLowerCase(),fk=nf[0].toUpperCase()+nf.slice(1);vs(hk,"on"+fk)}vs(RE,"onAnimationEnd");vs(AE,"onAnimationIteration");vs(PE,"onAnimationStart");vs("dblclick","onDoubleClick");vs("focusin","onFocus");vs("focusout","onBlur");vs(DE,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function wv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hb(r,e,void 0,t),t.currentTarget=null}function OE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;wv(s,a,d),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;wv(s,a,d),i=l}}}if(cu)throw t=tp,cu=!1,tp=null,t}function Ie(t,e){var n=e[dp];n===void 0&&(n=e[dp]=new Set);var r=t+"__bubble";n.has(r)||(LE(e,t,2,!1),n.add(r))}function rf(t,e,n){var r=0;e&&(r|=4),LE(n,t,r,e)}var vc="_reactListening"+Math.random().toString(36).slice(2);function Ya(t){if(!t[vc]){t[vc]=!0,$x.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||rf(n,!1,t),rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vc]||(e[vc]=!0,rf("selectionchange",!1,e))}}function LE(t,e,n,r){switch(vE(e)){case 1:var s=bb;break;case 4:s=kb;break;default:s=Vm}n=s.bind(null,e,n,t),s=void 0,!ep||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function sf(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Us(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}iE(function(){var d=i,h=jm(n),f=[];e:{var m=jE.get(t);if(m!==void 0){var _=Um,T=t;switch(t){case"keypress":if(Bc(n)===0)break e;case"keydown":case"keyup":_=Wb;break;case"focusin":T="focus",_=Xh;break;case"focusout":T="blur",_=Xh;break;case"beforeblur":case"afterblur":_=Xh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=lv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=Gb;break;case RE:case AE:case PE:_=Ob;break;case DE:_=Qb;break;case"scroll":_=Rb;break;case"wheel":_=Xb;break;case"copy":case"cut":case"paste":_=Mb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=uv}var b=(e&4)!==0,R=!b&&t==="scroll",x=b?m!==null?m+"Capture":null:m;b=[];for(var w=d,N;w!==null;){N=w;var j=N.stateNode;if(N.tag===5&&j!==null&&(N=j,x!==null&&(j=Wa(w,x),j!=null&&b.push(Xa(w,j,N)))),R)break;w=w.return}0<b.length&&(m=new _(m,T,null,n,h),f.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Jf&&(T=n.relatedTarget||n.fromElement)&&(Us(T)||T[ir]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=d,T=T?Us(T):null,T!==null&&(R=ui(T),T!==R||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=d),_!==T)){if(b=lv,j="onMouseLeave",x="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=uv,j="onPointerLeave",x="onPointerEnter",w="pointer"),R=_==null?m:Ai(_),N=T==null?m:Ai(T),m=new b(j,w+"leave",_,n,h),m.target=R,m.relatedTarget=N,j=null,Us(h)===d&&(b=new b(x,w+"enter",T,n,h),b.target=N,b.relatedTarget=R,j=b),R=j,_&&T)t:{for(b=_,x=T,w=0,N=b;N;N=wi(N))w++;for(N=0,j=x;j;j=wi(j))N++;for(;0<w-N;)b=wi(b),w--;for(;0<N-w;)x=wi(x),N--;for(;w--;){if(b===x||x!==null&&b===x.alternate)break t;b=wi(b),x=wi(x)}b=null}else b=null;_!==null&&xv(f,m,_,b,!1),T!==null&&R!==null&&xv(f,R,T,b,!0)}}e:{if(m=d?Ai(d):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=sk;else if(fv(m))if(CE)M=lk;else{M=ok;var L=ik}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=ak);if(M&&(M=M(t,d))){IE(f,M,n,h);break e}L&&L(t,m,d),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Gf(m,"number",m.value)}switch(L=d?Ai(d):window,t){case"focusin":(fv(L)||L.contentEditable==="true")&&(ki=L,ip=d,Na=null);break;case"focusout":Na=ip=ki=null;break;case"mousedown":op=!0;break;case"contextmenu":case"mouseup":case"dragend":op=!1,_v(f,n,h);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":_v(f,n,h)}var E;if(zm)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else bi?EE(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(xE&&n.locale!=="ko"&&(bi||y!=="onCompositionStart"?y==="onCompositionEnd"&&bi&&(E=wE()):(Br=h,Fm="value"in Br?Br.value:Br.textContent,bi=!0)),L=pu(d,y),0<L.length&&(y=new cv(y,t,null,n,h),f.push({event:y,listeners:L}),E?y.data=E:(E=TE(n),E!==null&&(y.data=E)))),(E=Zb?ek(t,n):tk(t,n))&&(d=pu(d,"onBeforeInput"),0<d.length&&(h=new cv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=E))}OE(f,e)})}function Xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Wa(t,n),i!=null&&r.unshift(Xa(t,i,s)),i=Wa(t,e),i!=null&&r.push(Xa(t,i,s))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,s?(l=Wa(n,i),l!=null&&o.unshift(Xa(n,l,a))):s||(l=Wa(n,i),l!=null&&o.push(Xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function wc(t,e,n){if(e=Ev(e),Ev(t)!==e&&n)throw Error(U(425))}function mu(){}var ap=null,lp=null;function cp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var up=typeof setTimeout=="function"?setTimeout:void 0,yk=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,_k=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(vk)}:up;function vk(t){setTimeout(function(){throw t})}function of(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ga(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ga(e)}function Kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Pn="__reactFiber$"+Io,Ja="__reactProps$"+Io,ir="__reactContainer$"+Io,dp="__reactEvents$"+Io,wk="__reactListeners$"+Io,xk="__reactHandles$"+Io;function Us(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ir]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iv(t);t!==null;){if(n=t[Pn])return n;t=Iv(t)}return e}t=n,n=t.parentNode}return null}function bl(t){return t=t[Pn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Id(t){return t[Ja]||null}var hp=[],Pi=-1;function ws(t){return{current:t}}function Ne(t){0>Pi||(t.current=hp[Pi],hp[Pi]=null,Pi--)}function xe(t,e){Pi++,hp[Pi]=t.current,t.current=e}var as={},wt=ws(as),Lt=ws(!1),Qs=as;function no(t,e){var n=t.type.contextTypes;if(!n)return as;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Mt(t){return t=t.childContextTypes,t!=null}function gu(){Ne(Lt),Ne(wt)}function Cv(t,e,n){if(wt.current!==as)throw Error(U(168));xe(wt,e),xe(Lt,n)}function ME(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,ib(t)||"Unknown",s));return De({},n,r)}function yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,Qs=wt.current,xe(wt,t),xe(Lt,Lt.current),!0}function Nv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=ME(t,e,Qs),r.__reactInternalMemoizedMergedChildContext=t,Ne(Lt),Ne(wt),xe(wt,t)):Ne(Lt),xe(Lt,n)}var Kn=null,Cd=!1,af=!1;function VE(t){Kn===null?Kn=[t]:Kn.push(t)}function Ek(t){Cd=!0,VE(t)}function xs(){if(!af&&Kn!==null){af=!0;var t=0,e=ge;try{var n=Kn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Kn=null,Cd=!1}catch(s){throw Kn!==null&&(Kn=Kn.slice(t+1)),cE(Om,xs),s}finally{ge=e,af=!1}}return null}var Di=[],ji=0,_u=null,vu=0,Xt=[],Jt=0,Ys=null,Qn=1,Yn="";function Ls(t,e){Di[ji++]=vu,Di[ji++]=_u,_u=t,vu=e}function FE(t,e,n){Xt[Jt++]=Qn,Xt[Jt++]=Yn,Xt[Jt++]=Ys,Ys=t;var r=Qn;t=Yn;var s=32-vn(r)-1;r&=~(1<<s),n+=1;var i=32-vn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Qn=1<<32-vn(e)+s|n<<s|r,Yn=i+t}else Qn=1<<i|n<<s|r,Yn=t}function Wm(t){t.return!==null&&(Ls(t,1),FE(t,1,0))}function qm(t){for(;t===_u;)_u=Di[--ji],Di[ji]=null,vu=Di[--ji],Di[ji]=null;for(;t===Ys;)Ys=Xt[--Jt],Xt[Jt]=null,Yn=Xt[--Jt],Xt[Jt]=null,Qn=Xt[--Jt],Xt[Jt]=null}var Wt=null,zt=null,ke=!1,fn=null;function UE(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Wt=t,zt=Kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Wt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ys!==null?{id:Qn,overflow:Yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Wt=t,zt=null,!0):!1;default:return!1}}function fp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pp(t){if(ke){var e=zt;if(e){var n=e;if(!Sv(t,e)){if(fp(t))throw Error(U(418));e=Kr(n.nextSibling);var r=Wt;e&&Sv(t,e)?UE(r,n):(t.flags=t.flags&-4097|2,ke=!1,Wt=t)}}else{if(fp(t))throw Error(U(418));t.flags=t.flags&-4097|2,ke=!1,Wt=t}}}function bv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wt=t}function xc(t){if(t!==Wt)return!1;if(!ke)return bv(t),ke=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cp(t.type,t.memoizedProps)),e&&(e=zt)){if(fp(t))throw BE(),Error(U(418));for(;e;)UE(t,e),e=Kr(e.nextSibling)}if(bv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=Kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Wt?Kr(t.stateNode.nextSibling):null;return!0}function BE(){for(var t=zt;t;)t=Kr(t.nextSibling)}function ro(){zt=Wt=null,ke=!1}function Hm(t){fn===null?fn=[t]:fn.push(t)}var Tk=mr.ReactCurrentBatchConfig;function sa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ec(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function kv(t){var e=t._init;return e(t._payload)}function zE(t){function e(x,w){if(t){var N=x.deletions;N===null?(x.deletions=[w],x.flags|=16):N.push(w)}}function n(x,w){if(!t)return null;for(;w!==null;)e(x,w),w=w.sibling;return null}function r(x,w){for(x=new Map;w!==null;)w.key!==null?x.set(w.key,w):x.set(w.index,w),w=w.sibling;return x}function s(x,w){return x=Jr(x,w),x.index=0,x.sibling=null,x}function i(x,w,N){return x.index=N,t?(N=x.alternate,N!==null?(N=N.index,N<w?(x.flags|=2,w):N):(x.flags|=2,w)):(x.flags|=1048576,w)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,w,N,j){return w===null||w.tag!==6?(w=pf(N,x.mode,j),w.return=x,w):(w=s(w,N),w.return=x,w)}function l(x,w,N,j){var M=N.type;return M===Si?h(x,w,N.props.children,j,N.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Pr&&kv(M)===w.type)?(j=s(w,N.props),j.ref=sa(x,w,N),j.return=x,j):(j=Kc(N.type,N.key,N.props,null,x.mode,j),j.ref=sa(x,w,N),j.return=x,j)}function d(x,w,N,j){return w===null||w.tag!==4||w.stateNode.containerInfo!==N.containerInfo||w.stateNode.implementation!==N.implementation?(w=mf(N,x.mode,j),w.return=x,w):(w=s(w,N.children||[]),w.return=x,w)}function h(x,w,N,j,M){return w===null||w.tag!==7?(w=Hs(N,x.mode,j,M),w.return=x,w):(w=s(w,N),w.return=x,w)}function f(x,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return w=pf(""+w,x.mode,N),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case dc:return N=Kc(w.type,w.key,w.props,null,x.mode,N),N.ref=sa(x,null,w),N.return=x,N;case Ni:return w=mf(w,x.mode,N),w.return=x,w;case Pr:var j=w._init;return f(x,j(w._payload),N)}if(fa(w)||Zo(w))return w=Hs(w,x.mode,N,null),w.return=x,w;Ec(x,w)}return null}function m(x,w,N,j){var M=w!==null?w.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return M!==null?null:a(x,w,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case dc:return N.key===M?l(x,w,N,j):null;case Ni:return N.key===M?d(x,w,N,j):null;case Pr:return M=N._init,m(x,w,M(N._payload),j)}if(fa(N)||Zo(N))return M!==null?null:h(x,w,N,j,null);Ec(x,N)}return null}function _(x,w,N,j,M){if(typeof j=="string"&&j!==""||typeof j=="number")return x=x.get(N)||null,a(w,x,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case dc:return x=x.get(j.key===null?N:j.key)||null,l(w,x,j,M);case Ni:return x=x.get(j.key===null?N:j.key)||null,d(w,x,j,M);case Pr:var L=j._init;return _(x,w,N,L(j._payload),M)}if(fa(j)||Zo(j))return x=x.get(N)||null,h(w,x,j,M,null);Ec(w,j)}return null}function T(x,w,N,j){for(var M=null,L=null,E=w,y=w=0,I=null;E!==null&&y<N.length;y++){E.index>y?(I=E,E=null):I=E.sibling;var S=m(x,E,N[y],j);if(S===null){E===null&&(E=I);break}t&&E&&S.alternate===null&&e(x,E),w=i(S,w,y),L===null?M=S:L.sibling=S,L=S,E=I}if(y===N.length)return n(x,E),ke&&Ls(x,y),M;if(E===null){for(;y<N.length;y++)E=f(x,N[y],j),E!==null&&(w=i(E,w,y),L===null?M=E:L.sibling=E,L=E);return ke&&Ls(x,y),M}for(E=r(x,E);y<N.length;y++)I=_(E,x,y,N[y],j),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?y:I.key),w=i(I,w,y),L===null?M=I:L.sibling=I,L=I);return t&&E.forEach(function(k){return e(x,k)}),ke&&Ls(x,y),M}function b(x,w,N,j){var M=Zo(N);if(typeof M!="function")throw Error(U(150));if(N=M.call(N),N==null)throw Error(U(151));for(var L=M=null,E=w,y=w=0,I=null,S=N.next();E!==null&&!S.done;y++,S=N.next()){E.index>y?(I=E,E=null):I=E.sibling;var k=m(x,E,S.value,j);if(k===null){E===null&&(E=I);break}t&&E&&k.alternate===null&&e(x,E),w=i(k,w,y),L===null?M=k:L.sibling=k,L=k,E=I}if(S.done)return n(x,E),ke&&Ls(x,y),M;if(E===null){for(;!S.done;y++,S=N.next())S=f(x,S.value,j),S!==null&&(w=i(S,w,y),L===null?M=S:L.sibling=S,L=S);return ke&&Ls(x,y),M}for(E=r(x,E);!S.done;y++,S=N.next())S=_(E,x,y,S.value,j),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),w=i(S,w,y),L===null?M=S:L.sibling=S,L=S);return t&&E.forEach(function(P){return e(x,P)}),ke&&Ls(x,y),M}function R(x,w,N,j){if(typeof N=="object"&&N!==null&&N.type===Si&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case dc:e:{for(var M=N.key,L=w;L!==null;){if(L.key===M){if(M=N.type,M===Si){if(L.tag===7){n(x,L.sibling),w=s(L,N.props.children),w.return=x,x=w;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Pr&&kv(M)===L.type){n(x,L.sibling),w=s(L,N.props),w.ref=sa(x,L,N),w.return=x,x=w;break e}n(x,L);break}else e(x,L);L=L.sibling}N.type===Si?(w=Hs(N.props.children,x.mode,j,N.key),w.return=x,x=w):(j=Kc(N.type,N.key,N.props,null,x.mode,j),j.ref=sa(x,w,N),j.return=x,x=j)}return o(x);case Ni:e:{for(L=N.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===N.containerInfo&&w.stateNode.implementation===N.implementation){n(x,w.sibling),w=s(w,N.children||[]),w.return=x,x=w;break e}else{n(x,w);break}else e(x,w);w=w.sibling}w=mf(N,x.mode,j),w.return=x,x=w}return o(x);case Pr:return L=N._init,R(x,w,L(N._payload),j)}if(fa(N))return T(x,w,N,j);if(Zo(N))return b(x,w,N,j);Ec(x,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,w!==null&&w.tag===6?(n(x,w.sibling),w=s(w,N),w.return=x,x=w):(n(x,w),w=pf(N,x.mode,j),w.return=x,x=w),o(x)):n(x,w)}return R}var so=zE(!0),$E=zE(!1),wu=ws(null),xu=null,Oi=null,Gm=null;function Km(){Gm=Oi=xu=null}function Qm(t){var e=wu.current;Ne(wu),t._currentValue=e}function mp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qi(t,e){xu=t,Gm=Oi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(Gm!==t)if(t={context:t,memoizedValue:e,next:null},Oi===null){if(xu===null)throw Error(U(308));Oi=t,xu.dependencies={lanes:0,firstContext:t}}else Oi=Oi.next=t;return e}var Bs=null;function Ym(t){Bs===null?Bs=[t]:Bs.push(t)}function WE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ym(e)):(n.next=s.next,s.next=n),e.interleaved=n,or(t,r)}function or(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Xm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function er(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,or(t,n)}return s=r.interleaved,s===null?(e.next=e,Ym(r)):(e.next=s.next,s.next=e),r.interleaved=e,or(t,n)}function zc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}function Rv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,r){var s=t.updateQueue;Dr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,h=d=l=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,b=a;switch(m=e,_=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){f=T.call(_,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,m=typeof T=="function"?T.call(_,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=_,l=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Js|=o,t.lanes=o,t.memoizedState=f}}function Av(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var kl={},On=ws(kl),Za=ws(kl),el=ws(kl);function zs(t){if(t===kl)throw Error(U(174));return t}function Jm(t,e){switch(xe(el,e),xe(Za,t),xe(On,kl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qf(e,t)}Ne(On),xe(On,e)}function io(){Ne(On),Ne(Za),Ne(el)}function HE(t){zs(el.current);var e=zs(On.current),n=Qf(e,t.type);e!==n&&(xe(Za,t),xe(On,n))}function Zm(t){Za.current===t&&(Ne(On),Ne(Za))}var Re=ws(0);function Tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var lf=[];function eg(){for(var t=0;t<lf.length;t++)lf[t]._workInProgressVersionPrimary=null;lf.length=0}var $c=mr.ReactCurrentDispatcher,cf=mr.ReactCurrentBatchConfig,Xs=0,Ae=null,Ge=null,et=null,Iu=!1,Sa=!1,tl=0,Ik=0;function ht(){throw Error(U(321))}function tg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function ng(t,e,n,r,s,i){if(Xs=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$c.current=t===null||t.memoizedState===null?bk:kk,t=n(r,s),Sa){i=0;do{if(Sa=!1,tl=0,25<=i)throw Error(U(301));i+=1,et=Ge=null,e.updateQueue=null,$c.current=Rk,t=n(r,s)}while(Sa)}if($c.current=Cu,e=Ge!==null&&Ge.next!==null,Xs=0,et=Ge=Ae=null,Iu=!1,e)throw Error(U(300));return t}function rg(){var t=tl!==0;return tl=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ae.memoizedState=et=t:et=et.next=t,et}function an(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?Ae.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?Ae.memoizedState=et=t:et=et.next=t}return et}function nl(t,e){return typeof e=="function"?e(t):e}function uf(t){var e=an(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,d=i;do{var h=d.lane;if((Xs&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ae.lanes|=h,Js|=h}d=d.next}while(d!==null&&d!==i);l===null?o=r:l.next=a,In(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,Js|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function df(t){var e=an(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);In(i,e.memoizedState)||(Dt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function GE(){}function KE(t,e){var n=Ae,r=an(),s=e(),i=!In(r.memoizedState,s);if(i&&(r.memoizedState=s,Dt=!0),r=r.queue,sg(XE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,rl(9,YE.bind(null,n,r,s,e),void 0,null),rt===null)throw Error(U(349));Xs&30||QE(n,e,s)}return s}function QE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function YE(t,e,n,r){e.value=n,e.getSnapshot=r,JE(e)&&ZE(t)}function XE(t,e,n){return n(function(){JE(e)&&ZE(t)})}function JE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function ZE(t){var e=or(t,1);e!==null&&wn(e,t,1,-1)}function Pv(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e.queue=t,t=t.dispatch=Sk.bind(null,Ae,t),[e.memoizedState,t]}function rl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function eT(){return an().memoizedState}function Wc(t,e,n,r){var s=Rn();Ae.flags|=t,s.memoizedState=rl(1|e,n,void 0,r===void 0?null:r)}function Nd(t,e,n,r){var s=an();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&tg(r,o.deps)){s.memoizedState=rl(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=rl(1|e,n,i,r)}function Dv(t,e){return Wc(8390656,8,t,e)}function sg(t,e){return Nd(2048,8,t,e)}function tT(t,e){return Nd(4,2,t,e)}function nT(t,e){return Nd(4,4,t,e)}function rT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sT(t,e,n){return n=n!=null?n.concat([t]):null,Nd(4,4,rT.bind(null,e,t),n)}function ig(){}function iT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function oT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&tg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function aT(t,e,n){return Xs&21?(In(n,e)||(n=hE(),Ae.lanes|=n,Js|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function Ck(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=cf.transition;cf.transition={};try{t(!1),e()}finally{ge=n,cf.transition=r}}function lT(){return an().memoizedState}function Nk(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cT(t))uT(e,n);else if(n=WE(t,e,n,r),n!==null){var s=Ct();wn(n,t,r,s),dT(n,e,r)}}function Sk(t,e,n){var r=Xr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cT(t))uT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(s.next=s,Ym(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=WE(t,e,s,r),n!==null&&(s=Ct(),wn(n,t,r,s),dT(n,e,r))}}function cT(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function uT(t,e){Sa=Iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lm(t,n)}}var Cu={readContext:on,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},bk={readContext:on,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:Dv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wc(4194308,4,rT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wc(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nk.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Pv,useDebugValue:ig,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Pv(!1),e=t[0];return t=Ck.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=Rn();if(ke){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),rt===null)throw Error(U(349));Xs&30||QE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Dv(XE.bind(null,r,i,t),[t]),r.flags|=2048,rl(9,YE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Rn(),e=rt.identifierPrefix;if(ke){var n=Yn,r=Qn;n=(r&~(1<<32-vn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kk={readContext:on,useCallback:iT,useContext:on,useEffect:sg,useImperativeHandle:sT,useInsertionEffect:tT,useLayoutEffect:nT,useMemo:oT,useReducer:uf,useRef:eT,useState:function(){return uf(nl)},useDebugValue:ig,useDeferredValue:function(t){var e=an();return aT(e,Ge.memoizedState,t)},useTransition:function(){var t=uf(nl)[0],e=an().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:KE,useId:lT,unstable_isNewReconciler:!1},Rk={readContext:on,useCallback:iT,useContext:on,useEffect:sg,useImperativeHandle:sT,useInsertionEffect:tT,useLayoutEffect:nT,useMemo:oT,useReducer:df,useRef:eT,useState:function(){return df(nl)},useDebugValue:ig,useDeferredValue:function(t){var e=an();return Ge===null?e.memoizedState=t:aT(e,Ge.memoizedState,t)},useTransition:function(){var t=df(nl)[0],e=an().memoizedState;return[t,e]},useMutableSource:GE,useSyncExternalStore:KE,useId:lT,unstable_isNewReconciler:!1};function dn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sd={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Xr(t),i=er(r,s);i.payload=e,n!=null&&(i.callback=n),e=Qr(t,i,s),e!==null&&(wn(e,t,s,r),zc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ct(),s=Xr(t),i=er(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Qr(t,i,s),e!==null&&(wn(e,t,s,r),zc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ct(),r=Xr(t),s=er(n,r);s.tag=2,e!=null&&(s.callback=e),e=Qr(t,s,r),e!==null&&(wn(e,t,r,n),zc(e,t,r))}};function jv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(n,r)||!Qa(s,i):!0}function hT(t,e,n){var r=!1,s=as,i=e.contextType;return typeof i=="object"&&i!==null?i=on(i):(s=Mt(e)?Qs:wt.current,r=e.contextTypes,i=(r=r!=null)?no(t,s):as),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Ov(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sd.enqueueReplaceState(e,e.state,null)}function yp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Xm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=on(i):(i=Mt(e)?Qs:wt.current,s.context=no(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(gp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Sd.enqueueReplaceState(s,s.state,null),Eu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function oo(t,e){try{var n="",r=e;do n+=sb(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function hf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ak=typeof WeakMap=="function"?WeakMap:Map;function fT(t,e,n){n=er(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,bp=r),_p(t,e)},n}function pT(t,e,n){n=er(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){_p(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_p(t,e),typeof r!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Lv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ak;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=qk.bind(null,t,e,n),e.then(t,t))}function Mv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=er(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t)}var Pk=mr.ReactCurrentOwner,Dt=!1;function It(t,e,n,r){e.child=t===null?$E(e,null,n,r):so(e,t.child,n,r)}function Fv(t,e,n,r,s){n=n.render;var i=e.ref;return qi(e,s),r=ng(t,e,n,r,i,s),n=rg(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(ke&&n&&Wm(e),e.flags|=1,It(t,e,r,s),e.child)}function Uv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!fg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,mT(t,e,i,r,s)):(t=Kc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qa,n(o,r)&&t.ref===e.ref)return ar(t,e,s)}return e.flags|=1,t=Jr(i,r),t.ref=e.ref,t.return=e,e.child=t}function mT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Qa(i,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,ar(t,e,s)}return vp(t,e,n,r,s)}function gT(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Mi,Bt),Bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Mi,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(Mi,Bt),Bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(Mi,Bt),Bt|=r;return It(t,e,s,n),e.child}function yT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vp(t,e,n,r,s){var i=Mt(n)?Qs:wt.current;return i=no(e,i),qi(e,s),n=ng(t,e,n,r,i,s),r=rg(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,ar(t,e,s)):(ke&&r&&Wm(e),e.flags|=1,It(t,e,n,s),e.child)}function Bv(t,e,n,r,s){if(Mt(n)){var i=!0;yu(e)}else i=!1;if(qi(e,s),e.stateNode===null)qc(t,e),hT(e,n,r),yp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=on(d):(d=Mt(n)?Qs:wt.current,d=no(e,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Ov(e,o,r,d),Dr=!1;var m=e.memoizedState;o.state=m,Eu(e,r,o,s),l=e.memoizedState,a!==r||m!==l||Lt.current||Dr?(typeof h=="function"&&(gp(e,n,h,r),l=e.memoizedState),(a=Dr||jv(e,n,a,r,m,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,qE(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:dn(e.type,a),o.props=d,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Mt(n)?Qs:wt.current,l=no(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Ov(e,o,r,l),Dr=!1,m=e.memoizedState,o.state=m,Eu(e,r,o,s);var T=e.memoizedState;a!==f||m!==T||Lt.current||Dr?(typeof _=="function"&&(gp(e,n,_,r),T=e.memoizedState),(d=Dr||jv(e,n,d,r,m,T,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return wp(t,e,n,r,i,s)}function wp(t,e,n,r,s,i){yT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Nv(e,n,!1),ar(t,e,i);r=e.stateNode,Pk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=so(e,t.child,null,i),e.child=so(e,null,a,i)):It(t,e,a,i),e.memoizedState=r.state,s&&Nv(e,n,!0),e.child}function _T(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),Jm(t,e.containerInfo)}function zv(t,e,n,r,s){return ro(),Hm(s),e.flags|=256,It(t,e,n,r),e.child}var xp={dehydrated:null,treeContext:null,retryLane:0};function Ep(t){return{baseLanes:t,cachePool:null,transitions:null}}function vT(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(Re,s&1),t===null)return pp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Rd(o,r,0,null),t=Hs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ep(n),e.memoizedState=xp,t):og(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Dk(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Jr(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Jr(a,i):(i=Hs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ep(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xp,r}return i=t.child,t=i.sibling,r=Jr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function og(t,e){return e=Rd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tc(t,e,n,r){return r!==null&&Hm(r),so(e,t.child,null,n),t=og(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=hf(Error(U(422))),Tc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Rd({mode:"visible",children:r.children},s,0,null),i=Hs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&so(e,t.child,null,o),e.child.memoizedState=Ep(o),e.memoizedState=xp,i);if(!(e.mode&1))return Tc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=hf(i,r,void 0),Tc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Dt||a){if(r=rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,or(t,s),wn(r,t,s,-1))}return hg(),r=hf(Error(U(421))),Tc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Hk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,zt=Kr(s.nextSibling),Wt=e,ke=!0,fn=null,t!==null&&(Xt[Jt++]=Qn,Xt[Jt++]=Yn,Xt[Jt++]=Ys,Qn=t.id,Yn=t.overflow,Ys=e),e=og(e,r.children),e.flags|=4096,e)}function $v(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mp(t.return,e,n)}function ff(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function wT(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(It(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$v(t,n,e);else if(t.tag===19)$v(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Tu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),ff(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Tu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}ff(e,!0,n,null,i);break;case"together":ff(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function qc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Js|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jk(t,e,n){switch(e.tag){case 3:_T(e),ro();break;case 5:HE(e);break;case 1:Mt(e.type)&&yu(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(wu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?vT(t,e,n):(xe(Re,Re.current&1),t=ar(t,e,n),t!==null?t.sibling:null);xe(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return wT(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,gT(t,e,n)}return ar(t,e,n)}var xT,Tp,ET,TT;xT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Tp=function(){};ET=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zs(On.current);var i=null;switch(n){case"input":s=qf(t,s),r=qf(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Kf(t,s),r=Kf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=mu)}Yf(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(za.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(za.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&Ie("scroll",t),i||a===l||(i=[])):(i=i||[]).push(d,l))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};TT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ia(t,e){if(!ke)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ok(t,e,n){var r=e.pendingProps;switch(qm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Mt(e.type)&&gu(),ft(e),null;case 3:return r=e.stateNode,io(),Ne(Lt),Ne(wt),eg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(xc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(Ap(fn),fn=null))),Tp(t,e),ft(e),null;case 5:Zm(e);var s=zs(el.current);if(n=e.type,t!==null&&e.stateNode!=null)ET(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return ft(e),null}if(t=zs(On.current),xc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Pn]=e,r[Ja]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<ma.length;s++)Ie(ma[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":J_(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":ev(r,i),Ie("invalid",r)}Yf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&wc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&wc(r.textContent,a,t),s=["children",""+a]):za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":hc(r),Z_(r,i,!0);break;case"textarea":hc(r),tv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=mu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Ja]=r,xT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<ma.length;s++)Ie(ma[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":J_(t,r),s=qf(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":ev(t,r),s=Kf(t,r),Ie("invalid",t);break;default:s=r}Yf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?eE(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jx(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$a(t,l):typeof l=="number"&&$a(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(za.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ie("scroll",t):l!=null&&Rm(t,i,l,o))}switch(n){case"input":hc(t),Z_(t,r,!1);break;case"textarea":hc(t),tv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+os(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)TT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=zs(el.current),zs(On.current),xc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(i=r.nodeValue!==n)&&(t=Wt,t!==null))switch(t.tag){case 3:wc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return ft(e),null;case 13:if(Ne(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ke&&zt!==null&&e.mode&1&&!(e.flags&128))BE(),ro(),e.flags|=98560,i=!1;else if(i=xc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Pn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),i=!1}else fn!==null&&(Ap(fn),fn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Qe===0&&(Qe=3):hg())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return io(),Tp(t,e),t===null&&Ya(e.stateNode.containerInfo),ft(e),null;case 10:return Qm(e.type._context),ft(e),null;case 17:return Mt(e.type)&&gu(),ft(e),null;case 19:if(Ne(Re),i=e.memoizedState,i===null)return ft(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ia(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tu(t),o!==null){for(e.flags|=128,ia(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ue()>ao&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304)}else{if(!r)if(t=Tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ke)return ft(e),null}else 2*Ue()-i.renderingStartTime>ao&&n!==1073741824&&(e.flags|=128,r=!0,ia(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ue(),e.sibling=null,n=Re.current,xe(Re,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return dg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function Lk(t,e){switch(qm(e),e.tag){case 1:return Mt(e.type)&&gu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Ne(Lt),Ne(wt),eg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Zm(e),null;case 13:if(Ne(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ne(Re),null;case 4:return io(),null;case 10:return Qm(e.type._context),null;case 22:case 23:return dg(),null;case 24:return null;default:return null}}var Ic=!1,gt=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,H=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function Ip(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var Wv=!1;function Vk(t,e){if(ap=hu,t=bE(),$m(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++d===s&&(a=o),m===i&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lp={focusedElem:t,selectionRange:n},hu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,R=T.memoizedState,x=e.stateNode,w=x.getSnapshotBeforeUpdate(e.elementType===e.type?b:dn(e.type,b),R);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var N=e.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(j){Oe(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return T=Wv,Wv=!1,T}function ba(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ip(e,n,i)}s=s.next}while(s!==r)}}function bd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Cp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function IT(t){var e=t.alternate;e!==null&&(t.alternate=null,IT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Ja],delete e[dp],delete e[wk],delete e[xk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function CT(t){return t.tag===5||t.tag===3||t.tag===4}function qv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||CT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mu));else if(r!==4&&(t=t.child,t!==null))for(Np(t,e,n),t=t.sibling;t!==null;)Np(t,e,n),t=t.sibling}function Sp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Sp(t,e,n),t=t.sibling;t!==null;)Sp(t,e,n),t=t.sibling}var ot=null,hn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)NT(t,e,n),n=n.sibling}function NT(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(wd,n)}catch{}switch(n.tag){case 5:gt||Li(n,e);case 6:var r=ot,s=hn;ot=null,Rr(t,e,n),ot=r,hn=s,ot!==null&&(hn?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(hn?(t=ot,n=n.stateNode,t.nodeType===8?of(t.parentNode,n):t.nodeType===1&&of(t,n),Ga(t)):of(ot,n.stateNode));break;case 4:r=ot,s=hn,ot=n.stateNode.containerInfo,hn=!0,Rr(t,e,n),ot=r,hn=s;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ip(n,e,o),s=s.next}while(s!==r)}Rr(t,e,n);break;case 1:if(!gt&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Oe(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Rr(t,e,n),gt=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function Hv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var s=Gk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ot=a.stateNode,hn=!1;break e;case 3:ot=a.stateNode.containerInfo,hn=!0;break e;case 4:ot=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(ot===null)throw Error(U(160));NT(i,o,s),ot=null,hn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){Oe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ST(e,t),e=e.sibling}function ST(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),kn(t),r&4){try{ba(3,t,t.return),bd(3,t)}catch(b){Oe(t,t.return,b)}try{ba(5,t,t.return)}catch(b){Oe(t,t.return,b)}}break;case 1:un(e,t),kn(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(un(e,t),kn(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var s=t.stateNode;try{$a(s,"")}catch(b){Oe(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qx(s,i),Xf(a,o);var d=Xf(a,i);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?eE(s,f):h==="dangerouslySetInnerHTML"?Jx(s,f):h==="children"?$a(s,f):Rm(s,h,f,d)}switch(a){case"input":Hf(s,i);break;case"textarea":Yx(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Bi(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?Bi(s,!!i.multiple,i.defaultValue,!0):Bi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ja]=i}catch(b){Oe(t,t.return,b)}}break;case 6:if(un(e,t),kn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Oe(t,t.return,b)}}break;case 3:if(un(e,t),kn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(e.containerInfo)}catch(b){Oe(t,t.return,b)}break;case 4:un(e,t),kn(t);break;case 13:un(e,t),kn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(cg=Ue())),r&4&&Hv(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(d=gt)||h,un(e,t),gt=d):un(e,t),kn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:ba(4,m,m.return);break;case 1:Li(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){Oe(r,n,b)}}break;case 5:Li(m,m.return);break;case 22:if(m.memoizedState!==null){Kv(f);continue}}_!==null?(_.return=m,H=_):Kv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zx("display",o))}catch(b){Oe(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){Oe(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:un(e,t),kn(t),r&4&&Hv(t);break;case 21:break;default:un(e,t),kn(t)}}function kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(CT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&($a(s,""),r.flags&=-33);var i=qv(t);Sp(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=qv(t);Np(t,a,o);break;default:throw Error(U(161))}}catch(l){Oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){H=t,bT(t)}function bT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ic;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||gt;a=Ic;var d=gt;if(Ic=o,(gt=l)&&!d)for(H=s;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Qv(s):l!==null?(l.return=o,H=l):Qv(s);for(;i!==null;)H=i,bT(i),i=i.sibling;H=s,Ic=a,gt=d}Gv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Gv(t)}}function Gv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||bd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:dn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Av(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Av(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}gt||e.flags&512&&Cp(e)}catch(m){Oe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Kv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Qv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bd(4,e)}catch(l){Oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Oe(e,s,l)}}var i=e.return;try{Cp(e)}catch(l){Oe(e,i,l)}break;case 5:var o=e.return;try{Cp(e)}catch(l){Oe(e,o,l)}}}catch(l){Oe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Uk=Math.ceil,Nu=mr.ReactCurrentDispatcher,ag=mr.ReactCurrentOwner,tn=mr.ReactCurrentBatchConfig,he=0,rt=null,ze=null,lt=0,Bt=0,Mi=ws(0),Qe=0,sl=null,Js=0,kd=0,lg=0,ka=null,Rt=null,cg=0,ao=1/0,Gn=null,Su=!1,bp=null,Yr=null,Cc=!1,zr=null,bu=0,Ra=0,kp=null,Hc=-1,Gc=0;function Ct(){return he&6?Ue():Hc!==-1?Hc:Hc=Ue()}function Xr(t){return t.mode&1?he&2&&lt!==0?lt&-lt:Tk.transition!==null?(Gc===0&&(Gc=hE()),Gc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:vE(t.type)),t):1}function wn(t,e,n,r){if(50<Ra)throw Ra=0,kp=null,Error(U(185));Nl(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(kd|=n),Qe===4&&Or(t,lt)),Vt(t,r),n===1&&he===0&&!(e.mode&1)&&(ao=Ue()+500,Cd&&xs()))}function Vt(t,e){var n=t.callbackNode;Tb(t,e);var r=du(t,t===rt?lt:0);if(r===0)n!==null&&sv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&sv(n),e===1)t.tag===0?Ek(Yv.bind(null,t)):VE(Yv.bind(null,t)),_k(function(){!(he&6)&&xs()}),n=null;else{switch(fE(r)){case 1:n=Om;break;case 4:n=uE;break;case 16:n=uu;break;case 536870912:n=dE;break;default:n=uu}n=LT(n,kT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kT(t,e){if(Hc=-1,Gc=0,he&6)throw Error(U(327));var n=t.callbackNode;if(Hi()&&t.callbackNode!==n)return null;var r=du(t,t===rt?lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var s=he;he|=2;var i=AT();(rt!==t||lt!==e)&&(Gn=null,ao=Ue()+500,qs(t,e));do try{$k();break}catch(a){RT(t,a)}while(!0);Km(),Nu.current=i,he=s,ze!==null?e=0:(rt=null,lt=0,e=Qe)}if(e!==0){if(e===2&&(s=np(t),s!==0&&(r=s,e=Rp(t,s))),e===1)throw n=sl,qs(t,0),Or(t,r),Vt(t,Ue()),n;if(e===6)Or(t,r);else{if(s=t.current.alternate,!(r&30)&&!Bk(s)&&(e=ku(t,r),e===2&&(i=np(t),i!==0&&(r=i,e=Rp(t,i))),e===1))throw n=sl,qs(t,0),Or(t,r),Vt(t,Ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ms(t,Rt,Gn);break;case 3:if(Or(t,r),(r&130023424)===r&&(e=cg+500-Ue(),10<e)){if(du(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Ct(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=up(Ms.bind(null,t,Rt,Gn),e);break}Ms(t,Rt,Gn);break;case 4:if(Or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-vn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=up(Ms.bind(null,t,Rt,Gn),r);break}Ms(t,Rt,Gn);break;case 5:Ms(t,Rt,Gn);break;default:throw Error(U(329))}}}return Vt(t,Ue()),t.callbackNode===n?kT.bind(null,t):null}function Rp(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(qs(t,e).flags|=256),t=ku(t,e),t!==2&&(e=Rt,Rt=n,e!==null&&Ap(e)),t}function Ap(t){Rt===null?Rt=t:Rt.push.apply(Rt,t)}function Bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!In(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Or(t,e){for(e&=~lg,e&=~kd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vn(e),r=1<<n;t[n]=-1,e&=~r}}function Yv(t){if(he&6)throw Error(U(327));Hi();var e=du(t,0);if(!(e&1))return Vt(t,Ue()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=np(t);r!==0&&(e=r,n=Rp(t,r))}if(n===1)throw n=sl,qs(t,0),Or(t,e),Vt(t,Ue()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ms(t,Rt,Gn),Vt(t,Ue()),null}function ug(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ao=Ue()+500,Cd&&xs())}}function Zs(t){zr!==null&&zr.tag===0&&!(he&6)&&Hi();var e=he;he|=1;var n=tn.transition,r=ge;try{if(tn.transition=null,ge=1,t)return t()}finally{ge=r,tn.transition=n,he=e,!(he&6)&&xs()}}function dg(){Bt=Mi.current,Ne(Mi)}function qs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yk(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(qm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gu();break;case 3:io(),Ne(Lt),Ne(wt),eg();break;case 5:Zm(r);break;case 4:io();break;case 13:Ne(Re);break;case 19:Ne(Re);break;case 10:Qm(r.type._context);break;case 22:case 23:dg()}n=n.return}if(rt=t,ze=t=Jr(t.current,null),lt=Bt=e,Qe=0,sl=null,lg=kd=Js=0,Rt=ka=null,Bs!==null){for(e=0;e<Bs.length;e++)if(n=Bs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Bs=null}return t}function RT(t,e){do{var n=ze;try{if(Km(),$c.current=Cu,Iu){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Iu=!1}if(Xs=0,et=Ge=Ae=null,Sa=!1,tl=0,ag.current=null,n===null||n.return===null){Qe=1,sl=e,ze=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=Mv(o);if(_!==null){_.flags&=-257,Vv(_,o,a,i,e),_.mode&1&&Lv(i,d,e),e=_,l=d;var T=e.updateQueue;if(T===null){var b=new Set;b.add(l),e.updateQueue=b}else T.add(l);break e}else{if(!(e&1)){Lv(i,d,e),hg();break e}l=Error(U(426))}}else if(ke&&a.mode&1){var R=Mv(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Vv(R,o,a,i,e),Hm(oo(l,a));break e}}i=l=oo(l,a),Qe!==4&&(Qe=2),ka===null?ka=[i]:ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=fT(i,l,e);Rv(i,x);break e;case 1:a=l;var w=i.type,N=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Yr===null||!Yr.has(N)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=pT(i,a,e);Rv(i,j);break e}}i=i.return}while(i!==null)}DT(n)}catch(M){e=M,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function AT(){var t=Nu.current;return Nu.current=Cu,t===null?Cu:t}function hg(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Js&268435455)&&!(kd&268435455)||Or(rt,lt)}function ku(t,e){var n=he;he|=2;var r=AT();(rt!==t||lt!==e)&&(Gn=null,qs(t,e));do try{zk();break}catch(s){RT(t,s)}while(!0);if(Km(),he=n,Nu.current=r,ze!==null)throw Error(U(261));return rt=null,lt=0,Qe}function zk(){for(;ze!==null;)PT(ze)}function $k(){for(;ze!==null&&!pb();)PT(ze)}function PT(t){var e=OT(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?DT(t):ze=e,ag.current=null}function DT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Lk(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,ze=null;return}}else if(n=Ok(n,e,Bt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Qe===0&&(Qe=5)}function Ms(t,e,n){var r=ge,s=tn.transition;try{tn.transition=null,ge=1,Wk(t,e,n,r)}finally{tn.transition=s,ge=r}return null}function Wk(t,e,n,r){do Hi();while(zr!==null);if(he&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ib(t,i),t===rt&&(ze=rt=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cc||(Cc=!0,LT(uu,function(){return Hi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=ge;ge=1;var a=he;he|=4,ag.current=null,Vk(t,n),ST(n,t),uk(lp),hu=!!ap,lp=ap=null,t.current=n,Fk(n),mb(),he=a,ge=o,tn.transition=i}else t.current=n;if(Cc&&(Cc=!1,zr=t,bu=s),i=t.pendingLanes,i===0&&(Yr=null),_b(n.stateNode),Vt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Su)throw Su=!1,t=bp,bp=null,t;return bu&1&&t.tag!==0&&Hi(),i=t.pendingLanes,i&1?t===kp?Ra++:(Ra=0,kp=t):Ra=0,xs(),null}function Hi(){if(zr!==null){var t=fE(bu),e=tn.transition,n=ge;try{if(tn.transition=null,ge=16>t?16:t,zr===null)var r=!1;else{if(t=zr,zr=null,bu=0,he&6)throw Error(U(331));var s=he;for(he|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(H=d;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:ba(8,h,i)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,_=h.return;if(IT(h),h===d){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var T=i.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ba(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,H=x;break e}H=i.return}}var w=t.current;for(H=w;H!==null;){o=H;var N=o.child;if(o.subtreeFlags&2064&&N!==null)N.return=o,H=N;else e:for(o=w;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bd(9,a)}}catch(M){Oe(a,a.return,M)}if(a===o){H=null;break e}var j=a.sibling;if(j!==null){j.return=a.return,H=j;break e}H=a.return}}if(he=s,xs(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(wd,t)}catch{}r=!0}return r}finally{ge=n,tn.transition=e}}return!1}function Xv(t,e,n){e=oo(n,e),e=fT(t,e,1),t=Qr(t,e,1),e=Ct(),t!==null&&(Nl(t,1,e),Vt(t,e))}function Oe(t,e,n){if(t.tag===3)Xv(t,t,n);else for(;e!==null;){if(e.tag===3){Xv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yr===null||!Yr.has(r))){t=oo(n,t),t=pT(e,t,1),e=Qr(e,t,1),t=Ct(),e!==null&&(Nl(e,1,t),Vt(e,t));break}}e=e.return}}function qk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ct(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(lt&n)===n&&(Qe===4||Qe===3&&(lt&130023424)===lt&&500>Ue()-cg?qs(t,0):lg|=n),Vt(t,e)}function jT(t,e){e===0&&(t.mode&1?(e=mc,mc<<=1,!(mc&130023424)&&(mc=4194304)):e=1);var n=Ct();t=or(t,e),t!==null&&(Nl(t,e,n),Vt(t,n))}function Hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),jT(t,n)}function Gk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),jT(t,n)}var OT;OT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,jk(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,ke&&e.flags&1048576&&FE(e,vu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;qc(t,e),t=e.pendingProps;var s=no(e,wt.current);qi(e,n),s=ng(null,e,r,t,s,n);var i=rg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(i=!0,yu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Xm(e),s.updater=Sd,e.stateNode=s,s._reactInternals=e,yp(e,r,t,n),e=wp(null,e,r,!0,i,n)):(e.tag=0,ke&&i&&Wm(e),It(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(qc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Qk(r),t=dn(r,t),s){case 0:e=vp(null,e,r,t,n);break e;case 1:e=Bv(null,e,r,t,n);break e;case 11:e=Fv(null,e,r,t,n);break e;case 14:e=Uv(null,e,r,dn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:dn(r,s),vp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:dn(r,s),Bv(t,e,r,s,n);case 3:e:{if(_T(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,qE(t,e),Eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=oo(Error(U(423)),e),e=zv(t,e,r,n,s);break e}else if(r!==s){s=oo(Error(U(424)),e),e=zv(t,e,r,n,s);break e}else for(zt=Kr(e.stateNode.containerInfo.firstChild),Wt=e,ke=!0,fn=null,n=$E(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ro(),r===s){e=ar(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return HE(e),t===null&&pp(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,cp(r,s)?o=null:i!==null&&cp(r,i)&&(e.flags|=32),yT(t,e),It(t,e,o,n),e.child;case 6:return t===null&&pp(e),null;case 13:return vT(t,e,n);case 4:return Jm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:dn(r,s),Fv(t,e,r,s,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(wu,r._currentValue),r._currentValue=o,i!==null)if(In(i.value,o)){if(i.children===s.children&&!Lt.current){e=ar(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=er(-1,n&-n),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),mp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}It(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,qi(e,n),s=on(s),r=r(s),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,s=dn(r,e.pendingProps),s=dn(r.type,s),Uv(t,e,r,s,n);case 15:return mT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:dn(r,s),qc(t,e),e.tag=1,Mt(r)?(t=!0,yu(e)):t=!1,qi(e,n),hT(e,r,s),yp(e,r,s,n),wp(null,e,r,!0,t,n);case 19:return wT(t,e,n);case 22:return gT(t,e,n)}throw Error(U(156,e.tag))};function LT(t,e){return cE(t,e)}function Kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new Kk(t,e,n,r)}function fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pm)return 11;if(t===Dm)return 14}return 2}function Jr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Kc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return Hs(n.children,s,i,e);case Am:o=8,s|=8;break;case Bf:return t=en(12,n,e,s|2),t.elementType=Bf,t.lanes=i,t;case zf:return t=en(13,n,e,s),t.elementType=zf,t.lanes=i,t;case $f:return t=en(19,n,e,s),t.elementType=$f,t.lanes=i,t;case Hx:return Rd(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wx:o=10;break e;case qx:o=9;break e;case Pm:o=11;break e;case Dm:o=14;break e;case Pr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Hs(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Rd(t,e,n,r){return t=en(22,t,r,e),t.elementType=Hx,t.lanes=n,t.stateNode={isHidden:!1},t}function pf(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function mf(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kh(0),this.expirationTimes=Kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function pg(t,e,n,r,s,i,o,a,l){return t=new Yk(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xm(i),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function MT(t){if(!t)return as;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Mt(n))return ME(t,n,e)}return e}function VT(t,e,n,r,s,i,o,a,l){return t=pg(n,r,!0,t,s,i,o,a,l),t.context=MT(null),n=t.current,r=Ct(),s=Xr(n),i=er(r,s),i.callback=e??null,Qr(n,i,s),t.current.lanes=s,Nl(t,s,r),Vt(t,r),t}function Ad(t,e,n,r){var s=e.current,i=Ct(),o=Xr(s);return n=MT(n),e.context===null?e.context=n:e.pendingContext=n,e=er(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(s,e,o),t!==null&&(wn(t,s,o,i),zc(t,s,o)),o}function Ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mg(t,e){Jv(t,e),(t=t.alternate)&&Jv(t,e)}function Jk(){return null}var FT=typeof reportError=="function"?reportError:function(t){console.error(t)};function gg(t){this._internalRoot=t}Pd.prototype.render=gg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ad(t,e,null,null)};Pd.prototype.unmount=gg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zs(function(){Ad(null,t,null,null)}),e[ir]=null}};function Pd(t){this._internalRoot=t}Pd.prototype.unstable_scheduleHydration=function(t){if(t){var e=gE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&_E(t)}};function yg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function Zk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Ru(o);i.call(d)}}var o=VT(e,r,t,0,null,!1,!1,"",Zv);return t._reactRootContainer=o,t[ir]=o.current,Ya(t.nodeType===8?t.parentNode:t),Zs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=Ru(l);a.call(d)}}var l=pg(t,0,!1,null,null,!1,!1,"",Zv);return t._reactRootContainer=l,t[ir]=l.current,Ya(t.nodeType===8?t.parentNode:t),Zs(function(){Ad(e,l,n,r)}),l}function jd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Ru(o);a.call(l)}}Ad(e,o,t,s)}else o=Zk(n,e,t,s,r);return Ru(o)}pE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=pa(e.pendingLanes);n!==0&&(Lm(e,n|1),Vt(e,Ue()),!(he&6)&&(ao=Ue()+500,xs()))}break;case 13:Zs(function(){var r=or(t,1);if(r!==null){var s=Ct();wn(r,t,1,s)}}),mg(t,1)}};Mm=function(t){if(t.tag===13){var e=or(t,134217728);if(e!==null){var n=Ct();wn(e,t,134217728,n)}mg(t,134217728)}};mE=function(t){if(t.tag===13){var e=Xr(t),n=or(t,e);if(n!==null){var r=Ct();wn(n,t,e,r)}mg(t,e)}};gE=function(){return ge};yE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Zf=function(t,e,n){switch(e){case"input":if(Hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Id(r);if(!s)throw Error(U(90));Kx(r),Hf(r,s)}}}break;case"textarea":Yx(t,n);break;case"select":e=n.value,e!=null&&Bi(t,!!n.multiple,e,!1)}};rE=ug;sE=Zs;var eR={usingClientEntryPoint:!1,Events:[bl,Ai,Id,tE,nE,ug]},oa={findFiberByHostInstance:Us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tR={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=aE(t),t===null?null:t.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||Jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{wd=Nc.inject(tR),jn=Nc}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yg(e))throw Error(U(200));return Xk(t,e,null,n)};Kt.createRoot=function(t,e){if(!yg(t))throw Error(U(299));var n=!1,r="",s=FT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=pg(t,1,!1,null,null,n,!1,r,s),t[ir]=e.current,Ya(t.nodeType===8?t.parentNode:t),new gg(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=aE(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Zs(t)};Kt.hydrate=function(t,e,n){if(!Dd(e))throw Error(U(200));return jd(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!yg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=FT;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=VT(e,null,t,1,n??null,s,!1,i,o),t[ir]=e.current,Ya(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Pd(e)};Kt.render=function(t,e,n){if(!Dd(e))throw Error(U(200));return jd(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Dd(t))throw Error(U(40));return t._reactRootContainer?(Zs(function(){jd(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1};Kt.unstable_batchedUpdates=ug;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Dd(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return jd(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function UT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(UT)}catch(t){console.error(t)}}UT(),Ux.exports=Kt;var nR=Ux.exports,e0=nR;Ff.createRoot=e0.createRoot,Ff.hydrateRoot=e0.hydrateRoot;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=()=>{};var t0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Co(e)},Co=function(t){return new Error("Firebase Database ("+BT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},sR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,d=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|d>>6,_=d&63;l||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||f==null)throw new iR;const m=i<<2|a>>4;if(r.push(m),d!==64){const _=a<<4&240|d>>2;if(r.push(_),f!==64){const T=d<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=zT(t);return _g.encodeByteArray(e,!0)},Au=function(t){return $T(t).replace(/\./g,"")},Pu=function(t){try{return _g.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t){return WT(void 0,t)}function WT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!aR(n)||(t[n]=WT(t[n],e[n]));return t}function aR(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=()=>lR().__FIREBASE_DEFAULTS__,uR=()=>{if(typeof process>"u"||typeof t0>"u")return;const t=t0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},Od=()=>{try{return rR()||cR()||uR()||dR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qT=t=>{var e,n;return(n=(e=Od())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vg=t=>{const e=qT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HT=()=>{var t;return(t=Od())==null?void 0:t.config},GT=t=>{var e;return(e=Od())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ld(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Au(JSON.stringify(n)),Au(JSON.stringify(o)),""].join(".")}const Aa={};function hR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Aa))Aa[e]?t.emulator.push(e):t.prod.push(e);return t}function fR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let n0=!1;function Md(t,e){if(typeof window>"u"||typeof document>"u"||!gr(window.location.host)||Aa[t]===e||Aa[t]||n0)return;Aa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=hR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{n0=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=fR(r),_=n("text"),T=document.getElementById(_)||document.createElement("span"),b=n("learnmore"),R=document.getElementById(b)||document.createElement("a"),x=n("preprendIcon"),w=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const N=m.element;a(N),h(R,b);const j=d();l(w,x),N.append(w,T,R,j),document.body.appendChild(N)}i?(T.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function pR(){var e;const t=(e=Od())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yR(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _R(){return BT.NODE_ADMIN===!0}function vR(){return!pR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wR(){try{return typeof indexedDB=="object"}catch{return!1}}function xR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ER,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rl.prototype.create)}}class Rl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new $n(s,a,r)}}function TR(t,e){return t.replace(IR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const IR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=il(Pu(i[0])||""),n=il(Pu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},CR=function(t){const e=QT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NR=function(t){const e=QT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function lo(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Du(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function ls(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(r0(i)&&r0(o)){if(!ls(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function r0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ga(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],d,h;for(let f=0;f<80;f++){f<40?f<20?(d=a^i&(o^a),h=1518500249):(d=i^o^a,h=1859775393):f<60?(d=i&o|a&(i|o),h=2400959708):(d=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+d+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function bR(t,e){const n=new kR(t,e);return n.subscribe.bind(n)}class kR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gf),s.error===void 0&&(s.error=gf),s.complete===void 0&&(s.complete=gf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gf(){}function YT(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:Vs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vs){return this.instances.has(e)}getOptions(e=Vs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vs){return this.component?this.component.multipleInstances?e:Vs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DR(t){return t===Vs?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new PR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const LR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},MR=se.INFO,VR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},FR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=VR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fd{constructor(e){this.name=e,this._logLevel=MR,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const UR=(t,e)=>e.some(n=>t instanceof n);let s0,i0;function BR(){return s0||(s0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zR(){return i0||(i0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XT=new WeakMap,Dp=new WeakMap,JT=new WeakMap,yf=new WeakMap,Tg=new WeakMap;function $R(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XT.set(n,t)}).catch(()=>{}),Tg.set(e,t),e}function WR(t){if(Dp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Dp.set(t,e)}let jp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||JT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qR(t){jp=t(jp)}function HR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_f(this),e,...n);return JT.set(r,e.sort?e.sort():[e]),Zr(r)}:zR().includes(t)?function(...e){return t.apply(_f(this),e),Zr(XT.get(this))}:function(...e){return Zr(t.apply(_f(this),e))}}function GR(t){return typeof t=="function"?HR(t):(t instanceof IDBTransaction&&WR(t),UR(t,BR())?new Proxy(t,jp):t)}function Zr(t){if(t instanceof IDBRequest)return $R(t);if(yf.has(t))return yf.get(t);const e=GR(t);return e!==t&&(yf.set(t,e),Tg.set(e,t)),e}const _f=t=>Tg.get(t);function KR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Zr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zr(o.result),l.oldVersion,l.newVersion,Zr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const QR=["get","getKey","getAll","getAllKeys","count"],YR=["put","add","delete","clear"],vf=new Map;function o0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vf.get(e))return vf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=YR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||QR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&l.done]))[0]};return vf.set(e,i),i}qR(t=>({...t,get:(e,n,r)=>o0(e,n)||t.get(e,n,r),has:(e,n)=>!!o0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Op="@firebase/app",a0="0.14.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new Fd("@firebase/app"),ZR="@firebase/app-compat",eA="@firebase/analytics-compat",tA="@firebase/analytics",nA="@firebase/app-check-compat",rA="@firebase/app-check",sA="@firebase/auth",iA="@firebase/auth-compat",oA="@firebase/database",aA="@firebase/data-connect",lA="@firebase/database-compat",cA="@firebase/functions",uA="@firebase/functions-compat",dA="@firebase/installations",hA="@firebase/installations-compat",fA="@firebase/messaging",pA="@firebase/messaging-compat",mA="@firebase/performance",gA="@firebase/performance-compat",yA="@firebase/remote-config",_A="@firebase/remote-config-compat",vA="@firebase/storage",wA="@firebase/storage-compat",xA="@firebase/firestore",EA="@firebase/ai",TA="@firebase/firestore-compat",IA="firebase",CA="12.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="[DEFAULT]",NA={[Op]:"fire-core",[ZR]:"fire-core-compat",[tA]:"fire-analytics",[eA]:"fire-analytics-compat",[rA]:"fire-app-check",[nA]:"fire-app-check-compat",[sA]:"fire-auth",[iA]:"fire-auth-compat",[oA]:"fire-rtdb",[aA]:"fire-data-connect",[lA]:"fire-rtdb-compat",[cA]:"fire-fn",[uA]:"fire-fn-compat",[dA]:"fire-iid",[hA]:"fire-iid-compat",[fA]:"fire-fcm",[pA]:"fire-fcm-compat",[mA]:"fire-perf",[gA]:"fire-perf-compat",[yA]:"fire-rc",[_A]:"fire-rc-compat",[vA]:"fire-gcs",[wA]:"fire-gcs-compat",[xA]:"fire-fst",[TA]:"fire-fst-compat",[EA]:"fire-vertex","fire-js":"fire-js",[IA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,SA=new Map,Mp=new Map;function l0(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Mp.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Mp.set(e,t);for(const n of ju.values())l0(n,t);for(const n of SA.values())l0(n,t);return!0}function Al(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new Rl("app","Firebase",bA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=CA;function ZT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Lp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw es.create("bad-app-name",{appName:String(s)});if(n||(n=HT()),!n)throw es.create("no-options");const i=ju.get(s);if(i){if(ls(n,i.options)&&ls(r,i.config))return i;throw es.create("duplicate-app",{appName:s})}const o=new OR(s);for(const l of Mp.values())o.addComponent(l);const a=new kA(n,r,o);return ju.set(s,a),a}function Ud(t=Lp){const e=ju.get(t);if(!e&&t===Lp&&HT())return ZT();if(!e)throw es.create("no-app",{appName:t});return e}function nn(t,e,n){let r=NA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(o.join(" "));return}cs(new lr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firebase-heartbeat-database",AA=1,ol="firebase-heartbeat-store";let wf=null;function eI(){return wf||(wf=KR(RA,AA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ol)}catch(n){console.warn(n)}}}}).catch(t=>{throw es.create("idb-open",{originalErrorMessage:t.message})})),wf}async function PA(t){try{const n=(await eI()).transaction(ol),r=await n.objectStore(ol).get(tI(t));return await n.done,r}catch(e){if(e instanceof $n)cr.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function c0(t,e){try{const r=(await eI()).transaction(ol,"readwrite");await r.objectStore(ol).put(e,tI(t)),await r.done}catch(n){if(n instanceof $n)cr.warn(n.message);else{const r=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function tI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=1024,jA=30;class OA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=u0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jA){const o=VA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=u0(),{heartbeatsToSend:r,unsentEntries:s}=LA(this._heartbeatsCache.heartbeats),i=Au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cr.warn(n),""}}}function u0(){return new Date().toISOString().substring(0,10)}function LA(t,e=DA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),d0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),d0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wR()?xR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await PA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return c0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return c0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function d0(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}function VA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){cs(new lr("platform-logger",e=>new XR(e),"PRIVATE")),cs(new lr("heartbeat",e=>new OA(e),"PRIVATE")),nn(Op,a0,t),nn(Op,a0,"esm2020"),nn("fire-js","")}FA("");var UA="firebase",BA="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn(UA,BA,"app");function nI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zA=nI,rI=new Rl("auth","Firebase",nI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=new Fd("@firebase/auth");function $A(t,...e){Ou.logLevel<=se.WARN&&Ou.warn(`Auth (${Es}): ${t}`,...e)}function Qc(t,...e){Ou.logLevel<=se.ERROR&&Ou.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw Ig(t,...e)}function Ln(t,...e){return Ig(t,...e)}function sI(t,e,n){const r={...zA(),[e]:n};return new Rl("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return sI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rI.create(t,...e)}function K(t,e,...n){if(!t)throw Ig(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qc(e),new Error(e)}function ur(t,e){t||Xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function WA(){return h0()==="http:"||h0()==="https:"}function h0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WA()||gR()||"connection"in navigator)?navigator.onLine:!0}function HA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=Eg()||KT()}get(){return qA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QA=new Pl(3e4,6e4);function _r(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vr(t,e,n,r,s={}){return oI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=No({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...i};return mR()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&gr(t.emulatorConfig.host)&&(d.credentials="include"),iI.fetch()(await aI(t,t.config.apiHost,n,a),d)})}async function oI(t,e,n){t._canInitEmulator=!1;const r={...GA,...e};try{const s=new XA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Sc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw sI(t,h,d);Cn(t,h)}}catch(s){if(s instanceof $n)throw s;Cn(t,"network-request-failed",{message:String(s)})}}async function Dl(t,e,n,r,s={}){const i=await vr(t,e,n,r,s);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function aI(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Cg(t.config,s):`${t.config.apiScheme}://${s}`;return KA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function YA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ln(this.auth,"network-request-failed")),QA.get())})}}function Sc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ln(t,e,r);return s.customData._tokenResponse=n,s}function f0(t){return t!==void 0&&t.enterprise!==void 0}class JA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZA(t,e){return vr(t,"GET","/v2/recaptchaConfig",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return vr(t,"POST","/v1/accounts:delete",e)}async function Lu(t,e){return vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tP(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Ng(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Pa(xf(s.auth_time)),issuedAtTime:Pa(xf(s.iat)),expirationTime:Pa(xf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xf(t){return Number(t)*1e3}function Ng(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pu(n);return s?JSON.parse(s):(Qc("Failed to decode base64 JWT payload"),null)}catch(s){return Qc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function p0(t){const e=Ng(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&nP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t){var f;const e=t.auth,n=await t.getIdToken(),r=await al(t,Lu(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?lI(s.providerUserInfo):[],o=iP(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Fp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function sP(t){const e=Se(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function lI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e){const n=await oI(t,{},async()=>{const r=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await aI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&gr(t.emulatorConfig.host)&&(l.credentials="include"),iI.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aP(t,e){return vr(t,"POST","/v2/accounts:revokeToken",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=p0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gi,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await al(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tP(this,e)}reload(){return sP(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await al(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:_,providerData:T,stsTokenManager:b}=n;K(f&&b,e,"internal-error");const R=Gi.fromJSON(this.name,b);K(typeof f=="string",e,"internal-error"),Ar(r,e.name),Ar(s,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof _=="boolean",e,"internal-error"),Ar(i,e.name),Ar(o,e.name),Ar(a,e.name),Ar(l,e.name),Ar(d,e.name),Ar(h,e.name);const x=new mn({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:d,lastLoginAt:h});return T&&Array.isArray(T)&&(x.providerData=T.map(w=>({...w}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gi;s.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?lI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Gi;a.updateFromIdToken(r);const l=new mn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Map;function Jn(t){ur(t instanceof Function,"Expected a class definition");let e=m0.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,m0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cI.type="NONE";const g0=cI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t,e,n){return`firebase:${t}:${e}:${n}`}class Ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Lu(this.auth,{idToken:e}).catch(()=>{});return n?mn._fromGetAccountInfoResponse(this.auth,n,e):null}return mn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ki(Jn(g0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Jn(g0);const o=Yc(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let f;if(typeof h=="string"){const m=await Lu(e,{idToken:h}).catch(()=>{});if(!m)break;f=await mn._fromGetAccountInfoResponse(e,m,h)}else f=mn._fromJSON(e,h);d!==i&&(a=f),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ki(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Ki(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mI(e))return"Blackberry";if(gI(e))return"Webos";if(dI(e))return"Safari";if((e.includes("chrome/")||hI(e))&&!e.includes("edge/"))return"Chrome";if(pI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uI(t=xt()){return/firefox\//i.test(t)}function dI(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hI(t=xt()){return/crios\//i.test(t)}function fI(t=xt()){return/iemobile/i.test(t)}function pI(t=xt()){return/android/i.test(t)}function mI(t=xt()){return/blackberry/i.test(t)}function gI(t=xt()){return/webos/i.test(t)}function Sg(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lP(t=xt()){var e;return Sg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function cP(){return yR()&&document.documentMode===10}function yI(t=xt()){return Sg(t)||pI(t)||gI(t)||mI(t)||/windows phone/i.test(t)||fI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(t,e=[]){let n;switch(t){case"Browser":n=y0(xt());break;case"Worker":n=`${y0(xt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dP(t,e={}){return vr(t,"GET","/v2/passwordPolicy",_r(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=6;class fP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _0(this),this.idTokenSubscription=new _0(this),this.beforeStateQueue=new uP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ki.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lu(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(tr(this));const n=e?Se(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dP(this),n=new fP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Rl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Ki.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_I(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$A(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ts(t){return Se(t)}class _0{constructor(e){this.auth=e,this.observer=null,this.addObserver=bR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mP(t){Bd=t}function vI(t){return Bd.loadJS(t)}function gP(){return Bd.recaptchaEnterpriseScript}function yP(){return Bd.gapiScript}function _P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vP{constructor(){this.enterprise=new wP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const xP="recaptcha-enterprise",wI="NO_RECAPTCHA";class EP{constructor(e){this.type=xP,this.auth=Ts(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ZA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new JA(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;f0(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(wI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&f0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=gP();l.length!==0&&(l+=a),vI(l).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function v0(t,e,n,r=!1,s=!1){const i=new EP(t);let o;if(s)o=wI;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Vu(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await v0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await v0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t,e){const n=Al(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ls(i,e??{}))return s;Cn(s,"already-initialized")}return n.initialize({options:e})}function IP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=Ts(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xI(e),{host:o,port:a}=NP(e),l=a===null?"":`:${a}`,d={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(ls(d,r.config.emulator)&&ls(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,gr(o)?(Ld(`${i}//${o}${l}`),Md("Auth",!0)):SP()}function xI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NP(t){const e=xI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:w0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:w0(o)}}}function w0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function SP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}async function bP(t,e){return vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kP(t,e){return Dl(t,"POST","/v1/accounts:signInWithPassword",_r(t,e))}async function RP(t,e){return vr(t,"POST","/v1/accounts:sendOobCode",_r(t,e))}async function AP(t,e){return RP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}async function DP(t,e){return Dl(t,"POST","/v1/accounts:signInWithEmailLink",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends bg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ll(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ll(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vu(e,n,"signInWithPassword",kP);case"emailLink":return PP(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Vu(e,r,"signUpPassword",bP);case"emailLink":return DP(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t,e){return Dl(t,"POST","/v1/accounts:signInWithIdp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="http://localhost";class ei extends bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ei(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qi(e,n)}buildRequest(){const e={requestUri:jP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function LP(t){const e=ga(ya(t)).link,n=e?ga(ya(e)).deep_link_id:null,r=ga(ya(t)).deep_link_id;return(r?ga(ya(r)).link:null)||r||n||e||t}class kg{constructor(e){const n=ga(ya(e)),r=n.apiKey??null,s=n.oobCode??null,i=OP(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=LP(e);try{return new kg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.providerId=So.PROVIDER_ID}static credential(e,n){return ll._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kg.parseLink(n);return K(r,"argument-error"),ll._fromEmailAndCode(e,r.code,r.tenantId)}}So.PROVIDER_ID="password";So.EMAIL_PASSWORD_SIGN_IN_METHOD="password";So.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends EI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends jl{constructor(){super("facebook.com")}static credential(e){return ei._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ei._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends jl{constructor(){super("github.com")}static credential(e){return ei._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.GITHUB_SIGN_IN_METHOD="github.com";Vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends jl{constructor(){super("twitter.com")}static credential(e,n){return ei._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){return Dl(t,"POST","/v1/accounts:signUp",_r(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mn._fromIdTokenResponse(e,r,s),o=x0(r);return new ti({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=x0(r);return new ti({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function x0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu extends $n{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Fu(e,n,r,s)}}function TI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(t,i,e,r):i})}async function VP(t,e,n=!1){const r=await al(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await al(t,TI(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Ng(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),ti._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e,n=!1){if(At(t.app))return Promise.reject(tr(t));const r="signIn",s=await TI(t,r,e),i=await ti._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function UP(t,e){return II(Ts(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(t){const e=Ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BP(t,e,n){const r=Ts(t);await Vu(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",AP)}async function zP(t,e,n){if(At(t.app))return Promise.reject(tr(t));const r=Ts(t),o=await Vu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",MP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CI(t),l}),a=await ti._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $P(t,e,n){return At(t.app)?Promise.reject(tr(t)):UP(Se(t),So.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&CI(t),r})}function WP(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function HP(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function NI(t){return Se(t).signOut()}async function GP(t){return Se(t).delete()}const Uu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=1e3,QP=10;class bI extends SI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bI.type="LOCAL";const YP=bI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI extends SI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kI.type="SESSION";const RI=kI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new zd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),l=await XP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const d=Rg("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function ZP(t){Mn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function e2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function t2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function n2(){return AI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="firebaseLocalStorageDb",r2=1,Bu="firebaseLocalStorage",DI="fbase_key";class Ol{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $d(t,e){return t.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function s2(){const t=indexedDB.deleteDatabase(PI);return new Ol(t).toPromise()}function Up(){const t=indexedDB.open(PI,r2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bu,{keyPath:DI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await s2(),e(await Up()))})})}async function E0(t,e,n){const r=$d(t,!0).put({[DI]:e,value:n});return new Ol(r).toPromise()}async function i2(t,e){const n=$d(t,!1).get(e),r=await new Ol(n).toPromise();return r===void 0?null:r.value}function T0(t,e){const n=$d(t,!0).delete(e);return new Ol(n).toPromise()}const o2=800,a2=3;class jI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Up(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>a2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zd._getInstance(n2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await e2(),!this.activeServiceWorker)return;this.sender=new JP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||t2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Up();return await E0(e,Uu,"1"),await T0(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>i2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=$d(s,!1).getAll();return new Ol(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),o2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jI.type="LOCAL";const l2=jI;new Pl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t,e){return e?Jn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag extends bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function u2(t){return II(t.auth,new Ag(t),t.bypassAuthState)}function d2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),FP(n,new Ag(t),t.bypassAuthState)}async function h2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),VP(n,new Ag(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return u2;case"linkViaPopup":case"linkViaRedirect":return h2;case"reauthViaPopup":case"reauthViaRedirect":return d2;default:Cn(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f2=new Pl(2e3,1e4);class Vi extends OI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vi.currentPopupAction&&Vi.currentPopupAction.cancel(),Vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Rg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ln(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ln(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ln(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,f2.get())};e()}}Vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2="pendingRedirect",Xc=new Map;class m2 extends OI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xc.get(this.auth._key());if(!e){try{const r=await g2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xc.set(this.auth._key(),e)}return this.bypassAuthState||Xc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function g2(t,e){const n=v2(e),r=_2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function y2(t,e){Xc.set(t._key(),e)}function _2(t){return Jn(t._redirectPersistence)}function v2(t){return Yc(p2,t.config.apiKey,t.name)}async function w2(t,e,n=!1){if(At(t.app))return Promise.reject(tr(t));const r=Ts(t),s=c2(r,e),o=await new m2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=10*60*1e3;class E2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!T2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!LI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ln(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x2&&this.cachedEventUids.clear(),this.cachedEventUids.has(I0(e))}saveEventToCache(e){this.cachedEventUids.add(I0(e)),this.lastProcessedEventTime=Date.now()}}function I0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function LI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function T2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return LI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I2(t,e={}){return vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N2=/^https?/;async function S2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await I2(t);for(const n of e)try{if(b2(n))return}catch{}Cn(t,"unauthorized-domain")}function b2(t){const e=Vp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!N2.test(n))return!1;if(C2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=new Pl(3e4,6e4);function C0(){const t=Mn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function R2(t){return new Promise((e,n)=>{var s,i,o;function r(){C0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{C0(),n(Ln(t,"network-request-failed"))},timeout:k2.get()})}if((i=(s=Mn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mn().gapi)!=null&&o.load)r();else{const a=_P("iframefcb");return Mn()[a]=()=>{gapi.load?r():n(Ln(t,"network-request-failed"))},vI(`${yP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jc=null,e})}let Jc=null;function A2(t){return Jc=Jc||R2(t),Jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2=new Pl(5e3,15e3),D2="__/auth/iframe",j2="emulator/auth/iframe",O2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},L2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function M2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cg(e,j2):`https://${t.config.authDomain}/${D2}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=L2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${No(r).slice(1)}`}async function V2(t){const e=await A2(t),n=Mn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:M2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ln(t,"network-request-failed"),a=Mn().setTimeout(()=>{i(o)},P2.get());function l(){Mn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},U2=500,B2=600,z2="_blank",$2="http://localhost";class N0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W2(t,e,n,r=U2,s=B2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...F2,width:r.toString(),height:s.toString(),top:i,left:o},d=xt().toLowerCase();n&&(a=hI(d)?z2:n),uI(d)&&(e=e||$2,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,T])=>`${m}${_}=${T},`,"");if(lP(d)&&a!=="_self")return q2(e||"",a),new N0(null);const f=window.open(e||"",a,h);K(f,t,"popup-blocked");try{f.focus()}catch{}return new N0(f)}function q2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2="__/auth/handler",G2="emulator/auth/handler",K2=encodeURIComponent("fac");async function S0(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof EI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof jl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),d=l?`#${K2}=${encodeURIComponent(l)}`:"";return`${Q2(t)}?${No(a).slice(1)}${d}`}function Q2({config:t}){return t.emulator?Cg(t,G2):`https://${t.authDomain}/${H2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="webStorageSupport";class Y2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RI,this._completeRedirectFn=w2,this._overrideRedirectResult=y2}async _openPopup(e,n,r,s){var o;ur((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await S0(e,n,r,Vp(),s);return W2(e,i,Rg())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await S0(e,n,r,Vp(),s);return ZP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ur(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await V2(e),r=new E2(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ef,{type:Ef},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ef];i!==void 0&&n(!!i),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=S2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yI()||dI()||Sg()}}const X2=Y2;var b0="@firebase/auth",k0="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eD(t){cs(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_I(t)},d=new pP(r,s,i,l);return IP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new lr("auth-internal",e=>{const n=Ts(e.getProvider("auth").getImmediate());return(r=>new J2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nn(b0,k0,Z2(t)),nn(b0,k0,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=5*60,nD=GT("authIdTokenMaxAge")||tD;let R0=null;const rD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nD)return;const s=n==null?void 0:n.token;R0!==s&&(R0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sD(t=Ud()){const e=Al(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TP(t,{popupRedirectResolver:X2,persistence:[l2,YP,RI]}),r=GT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rD(i.toString());qP(n,o,()=>o(n.currentUser)),WP(n,a=>o(a))}}const s=qT("auth");return s&&CP(n,`http://${s}`),n}function iD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ln("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eD("Browser");var A0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,MI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function I(){}I.prototype=y.prototype,E.F=y.prototype,E.prototype=new I,E.prototype.constructor=E,E.D=function(S,k,P){for(var C=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)C[fe-2]=arguments[fe];return y.prototype[k].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,I){I||(I=0);const S=Array(16);if(typeof y=="string")for(var k=0;k<16;++k)S[k]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(k=0;k<16;++k)S[k]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=E.g[0],I=E.g[1],k=E.g[2];let P=E.g[3],C;C=y+(P^I&(k^P))+S[0]+3614090360&4294967295,y=I+(C<<7&4294967295|C>>>25),C=P+(k^y&(I^k))+S[1]+3905402710&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(I^P&(y^I))+S[2]+606105819&4294967295,k=P+(C<<17&4294967295|C>>>15),C=I+(y^k&(P^y))+S[3]+3250441966&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(P^I&(k^P))+S[4]+4118548399&4294967295,y=I+(C<<7&4294967295|C>>>25),C=P+(k^y&(I^k))+S[5]+1200080426&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(I^P&(y^I))+S[6]+2821735955&4294967295,k=P+(C<<17&4294967295|C>>>15),C=I+(y^k&(P^y))+S[7]+4249261313&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(P^I&(k^P))+S[8]+1770035416&4294967295,y=I+(C<<7&4294967295|C>>>25),C=P+(k^y&(I^k))+S[9]+2336552879&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(I^P&(y^I))+S[10]+4294925233&4294967295,k=P+(C<<17&4294967295|C>>>15),C=I+(y^k&(P^y))+S[11]+2304563134&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(P^I&(k^P))+S[12]+1804603682&4294967295,y=I+(C<<7&4294967295|C>>>25),C=P+(k^y&(I^k))+S[13]+4254626195&4294967295,P=y+(C<<12&4294967295|C>>>20),C=k+(I^P&(y^I))+S[14]+2792965006&4294967295,k=P+(C<<17&4294967295|C>>>15),C=I+(y^k&(P^y))+S[15]+1236535329&4294967295,I=k+(C<<22&4294967295|C>>>10),C=y+(k^P&(I^k))+S[1]+4129170786&4294967295,y=I+(C<<5&4294967295|C>>>27),C=P+(I^k&(y^I))+S[6]+3225465664&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(P^y))+S[11]+643717713&4294967295,k=P+(C<<14&4294967295|C>>>18),C=I+(P^y&(k^P))+S[0]+3921069994&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(I^k))+S[5]+3593408605&4294967295,y=I+(C<<5&4294967295|C>>>27),C=P+(I^k&(y^I))+S[10]+38016083&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(P^y))+S[15]+3634488961&4294967295,k=P+(C<<14&4294967295|C>>>18),C=I+(P^y&(k^P))+S[4]+3889429448&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(I^k))+S[9]+568446438&4294967295,y=I+(C<<5&4294967295|C>>>27),C=P+(I^k&(y^I))+S[14]+3275163606&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(P^y))+S[3]+4107603335&4294967295,k=P+(C<<14&4294967295|C>>>18),C=I+(P^y&(k^P))+S[8]+1163531501&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(k^P&(I^k))+S[13]+2850285829&4294967295,y=I+(C<<5&4294967295|C>>>27),C=P+(I^k&(y^I))+S[2]+4243563512&4294967295,P=y+(C<<9&4294967295|C>>>23),C=k+(y^I&(P^y))+S[7]+1735328473&4294967295,k=P+(C<<14&4294967295|C>>>18),C=I+(P^y&(k^P))+S[12]+2368359562&4294967295,I=k+(C<<20&4294967295|C>>>12),C=y+(I^k^P)+S[5]+4294588738&4294967295,y=I+(C<<4&4294967295|C>>>28),C=P+(y^I^k)+S[8]+2272392833&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^I)+S[11]+1839030562&4294967295,k=P+(C<<16&4294967295|C>>>16),C=I+(k^P^y)+S[14]+4259657740&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^P)+S[1]+2763975236&4294967295,y=I+(C<<4&4294967295|C>>>28),C=P+(y^I^k)+S[4]+1272893353&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^I)+S[7]+4139469664&4294967295,k=P+(C<<16&4294967295|C>>>16),C=I+(k^P^y)+S[10]+3200236656&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^P)+S[13]+681279174&4294967295,y=I+(C<<4&4294967295|C>>>28),C=P+(y^I^k)+S[0]+3936430074&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^I)+S[3]+3572445317&4294967295,k=P+(C<<16&4294967295|C>>>16),C=I+(k^P^y)+S[6]+76029189&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(I^k^P)+S[9]+3654602809&4294967295,y=I+(C<<4&4294967295|C>>>28),C=P+(y^I^k)+S[12]+3873151461&4294967295,P=y+(C<<11&4294967295|C>>>21),C=k+(P^y^I)+S[15]+530742520&4294967295,k=P+(C<<16&4294967295|C>>>16),C=I+(k^P^y)+S[2]+3299628645&4294967295,I=k+(C<<23&4294967295|C>>>9),C=y+(k^(I|~P))+S[0]+4096336452&4294967295,y=I+(C<<6&4294967295|C>>>26),C=P+(I^(y|~k))+S[7]+1126891415&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~I))+S[14]+2878612391&4294967295,k=P+(C<<15&4294967295|C>>>17),C=I+(P^(k|~y))+S[5]+4237533241&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~P))+S[12]+1700485571&4294967295,y=I+(C<<6&4294967295|C>>>26),C=P+(I^(y|~k))+S[3]+2399980690&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~I))+S[10]+4293915773&4294967295,k=P+(C<<15&4294967295|C>>>17),C=I+(P^(k|~y))+S[1]+2240044497&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~P))+S[8]+1873313359&4294967295,y=I+(C<<6&4294967295|C>>>26),C=P+(I^(y|~k))+S[15]+4264355552&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~I))+S[6]+2734768916&4294967295,k=P+(C<<15&4294967295|C>>>17),C=I+(P^(k|~y))+S[13]+1309151649&4294967295,I=k+(C<<21&4294967295|C>>>11),C=y+(k^(I|~P))+S[4]+4149444226&4294967295,y=I+(C<<6&4294967295|C>>>26),C=P+(I^(y|~k))+S[11]+3174756917&4294967295,P=y+(C<<10&4294967295|C>>>22),C=k+(y^(P|~I))+S[2]+718787259&4294967295,k=P+(C<<15&4294967295|C>>>17),C=I+(P^(k|~y))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+k&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.v=function(E,y){y===void 0&&(y=E.length);const I=y-this.blockSize,S=this.C;let k=this.h,P=0;for(;P<y;){if(k==0)for(;P<=I;)s(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(S[k++]=E.charCodeAt(P++),k==this.blockSize){s(this,S),k=0;break}}else for(;P<y;)if(S[k++]=E[P++],k==this.blockSize){s(this,S),k=0;break}}this.h=k,this.o+=y},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;y=this.o*8;for(var I=E.length-8;I<E.length;++I)E[I]=y&255,y/=256;for(this.v(E),E=Array(16),y=0,I=0;I<4;++I)for(let S=0;S<32;S+=8)E[y++]=this.g[I]>>>S&255;return E};function i(E,y){var I=a;return Object.prototype.hasOwnProperty.call(I,E)?I[E]:I[E]=y(E)}function o(E,y){this.h=y;const I=[];let S=!0;for(let k=E.length-1;k>=0;k--){const P=E[k]|0;S&&P==y||(I[k]=P,S=!1)}this.g=I}var a={};function l(E){return-128<=E&&E<128?i(E,function(y){return new o([y|0],y<0?-1:0)}):new o([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return f;if(E<0)return R(d(-E));const y=[];let I=1;for(let S=0;E>=I;S++)y[S]=E/I|0,I*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return R(h(E.substring(1),y));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=d(Math.pow(y,8));let S=f;for(let P=0;P<E.length;P+=8){var k=Math.min(8,E.length-P);const C=parseInt(E.substring(P,P+k),y);k<8?(k=d(Math.pow(y,k)),S=S.j(k).add(d(C))):(S=S.j(I),S=S.add(d(C)))}return S}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-R(this).m();let E=0,y=1;for(let I=0;I<this.g.length;I++){const S=this.i(I);E+=(S>=0?S:4294967296+S)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(b(this))return"-"+R(this).toString(E);const y=d(Math.pow(E,6));var I=this;let S="";for(;;){const k=j(I,y).g;I=x(I,k.j(y));let P=((I.g.length>0?I.g[0]:I.h)>>>0).toString(E);if(I=k,T(I))return P+S;for(;P.length<6;)P="0"+P;S=P+S}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(let y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function b(E){return E.h==-1}t.l=function(E){return E=x(this,E),b(E)?-1:T(E)?0:1};function R(E){const y=E.g.length,I=[];for(let S=0;S<y;S++)I[S]=~E.g[S];return new o(I,~E.h).add(m)}t.abs=function(){return b(this)?R(this):this},t.add=function(E){const y=Math.max(this.g.length,E.g.length),I=[];let S=0;for(let k=0;k<=y;k++){let P=S+(this.i(k)&65535)+(E.i(k)&65535),C=(P>>>16)+(this.i(k)>>>16)+(E.i(k)>>>16);S=C>>>16,P&=65535,C&=65535,I[k]=C<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(E,y){return E.add(R(y))}t.j=function(E){if(T(this)||T(E))return f;if(b(this))return b(E)?R(this).j(R(E)):R(R(this).j(E));if(b(E))return R(this.j(R(E)));if(this.l(_)<0&&E.l(_)<0)return d(this.m()*E.m());const y=this.g.length+E.g.length,I=[];for(var S=0;S<2*y;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(let k=0;k<E.g.length;k++){const P=this.i(S)>>>16,C=this.i(S)&65535,fe=E.i(k)>>>16,Ee=E.i(k)&65535;I[2*S+2*k]+=C*Ee,w(I,2*S+2*k),I[2*S+2*k+1]+=P*Ee,w(I,2*S+2*k+1),I[2*S+2*k+1]+=C*fe,w(I,2*S+2*k+1),I[2*S+2*k+2]+=P*fe,w(I,2*S+2*k+2)}for(E=0;E<y;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=y;E<2*y;E++)I[E]=0;return new o(I,0)};function w(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function N(E,y){this.g=E,this.h=y}function j(E,y){if(T(y))throw Error("division by zero");if(T(E))return new N(f,f);if(b(E))return y=j(R(E),y),new N(R(y.g),R(y.h));if(b(y))return y=j(E,R(y)),new N(R(y.g),y.h);if(E.g.length>30){if(b(E)||b(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,S=y;S.l(E)<=0;)I=M(I),S=M(S);var k=L(I,1),P=L(S,1);for(S=L(S,2),I=L(I,2);!T(S);){var C=P.add(S);C.l(E)<=0&&(k=k.add(I),P=C),S=L(S,1),I=L(I,1)}return y=x(E,k.j(y)),new N(k,y)}for(k=f;E.l(y)>=0;){for(I=Math.max(1,Math.floor(E.m()/y.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),P=d(I),C=P.j(y);b(C)||C.l(E)>0;)I-=S,P=d(I),C=P.j(y);T(P)&&(P=m),k=k.add(P),E=x(E,C)}return new N(k,E)}t.B=function(E){return j(this,E).h},t.and=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let S=0;S<y;S++)I[S]=this.i(S)&E.i(S);return new o(I,this.h&E.h)},t.or=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let S=0;S<y;S++)I[S]=this.i(S)|E.i(S);return new o(I,this.h|E.h)},t.xor=function(E){const y=Math.max(this.g.length,E.g.length),I=[];for(let S=0;S<y;S++)I[S]=this.i(S)^E.i(S);return new o(I,this.h^E.h)};function M(E){const y=E.g.length+1,I=[];for(let S=0;S<y;S++)I[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(I,E.h)}function L(E,y){const I=y>>5;y%=32;const S=E.g.length-I,k=[];for(let P=0;P<S;P++)k[P]=y>0?E.i(P+I)>>>y|E.i(P+I+1)<<32-y:E.i(P+I);return new o(k,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,MI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,ts=o}).apply(typeof A0<"u"?A0:typeof self<"u"?self:typeof window<"u"?window:{});var bc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VI,_a,FI,Zc,Bp,UI,BI,zI;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof bc=="object"&&bc];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function d(c,p,g){return d=l,d.apply(null,arguments)}function h(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,D,O){for(var z=Array(arguments.length-2),te=2;te<arguments.length;te++)z[te-2]=arguments[te];return p.prototype[D].apply(v,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function T(c,p){for(let v=1;v<arguments.length;v++){const D=arguments[v];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const O=D.length||0;c.length=g+O;for(let z=0;z<O;z++)c[g+z]=D[z]}else c.push(D)}}class b{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function R(c){o.setTimeout(()=>{throw c},0)}function x(){var c=E;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class w{constructor(){this.h=this.g=null}add(p,g){const v=N.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var N=new b(()=>new j,c=>c.reset());class j{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let M,L=!1,E=new w,y=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(I)}};function I(){for(var c;c=x();){try{c.h.call(c.g)}catch(g){R(g)}var p=N;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}L=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function C(c){return/^[\s\xa0]*$/.test(c)}function fe(c,p){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(fe,k),fe.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&fe.Z.h.call(this)},fe.prototype.h=function(){fe.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ee="closure_listenable_"+(Math.random()*1e6|0),it=0;function ln(c,p,g,v,D){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=D,this.key=++it,this.da=this.fa=!1}function $(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function X(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function ee(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function be(c){const p={};for(const g in c)p[g]=c[g];return p}const Ve="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ks(c,p){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let O=0;O<Ve.length;O++)g=Ve[O],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Yt(c){this.src=c,this.g={},this.h=0}Yt.prototype.add=function(c,p,g,v,D){const O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);const z=cn(c,p,v,D);return z>-1?(p=c[z],g||(p.fa=!1)):(p=new ln(p,this.src,O,!!v,D),p.fa=g,c.push(p)),p};function Rs(c,p){const g=p.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,p,void 0),O;(O=D>=0)&&Array.prototype.splice.call(v,D,1),O&&($(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function cn(c,p,g,v){for(let D=0;D<c.length;++D){const O=c[D];if(!O.da&&O.listener==p&&O.capture==!!g&&O.ha==v)return D}return-1}var Tr="closure_lm_"+(Math.random()*1e6|0),Eh={};function Ky(c,p,g,v,D){if(Array.isArray(p)){for(let O=0;O<p.length;O++)Ky(c,p[O],g,v,D);return null}return g=Xy(g),c&&c[Ee]?c.J(p,g,a(v)?!!v.capture:!1,D):ZS(c,p,g,!1,v,D)}function ZS(c,p,g,v,D,O){if(!p)throw Error("Invalid event type");const z=a(D)?!!D.capture:!!D;let te=Ih(c);if(te||(c[Tr]=te=new Yt(c)),g=te.add(p,g,v,z,O),g.proxy)return g;if(v=e1(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)P||(D=z),D===void 0&&(D=!1),c.addEventListener(p.toString(),v,D);else if(c.attachEvent)c.attachEvent(Yy(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function e1(){function c(g){return p.call(c.src,c.listener,g)}const p=t1;return c}function Qy(c,p,g,v,D){if(Array.isArray(p))for(var O=0;O<p.length;O++)Qy(c,p[O],g,v,D);else v=a(v)?!!v.capture:!!v,g=Xy(g),c&&c[Ee]?(c=c.i,O=String(p).toString(),O in c.g&&(p=c.g[O],g=cn(p,g,v,D),g>-1&&($(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[O],c.h--)))):c&&(c=Ih(c))&&(p=c.g[p.toString()],c=-1,p&&(c=cn(p,g,v,D)),(g=c>-1?p[c]:null)&&Th(g))}function Th(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ee])Rs(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(Yy(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=Ih(p))?(Rs(g,c),g.h==0&&(g.src=null,p[Tr]=null)):$(c)}}}function Yy(c){return c in Eh?Eh[c]:Eh[c]="on"+c}function t1(c,p){if(c.da)c=!0;else{p=new fe(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&Th(c),c=g.call(v,p)}return c}function Ih(c){return c=c[Tr],c instanceof Yt?c:null}var Ch="__closure_events_fn_"+(Math.random()*1e9>>>0);function Xy(c){return typeof c=="function"?c:(c[Ch]||(c[Ch]=function(p){return c.handleEvent(p)}),c[Ch])}function dt(){S.call(this),this.i=new Yt(this),this.M=this,this.G=null}f(dt,S),dt.prototype[Ee]=!0,dt.prototype.removeEventListener=function(c,p,g,v){Qy(this,c,p,g,v)};function Et(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new k(p,c);else if(p instanceof k)p.target=p.target||c;else{var D=p;p=new k(v,c),ks(p,D)}D=!0;let O,z;if(g)for(z=g.length-1;z>=0;z--)O=p.g=g[z],D=Jl(O,v,!0,p)&&D;if(O=p.g=c,D=Jl(O,v,!0,p)&&D,D=Jl(O,v,!1,p)&&D,g)for(z=0;z<g.length;z++)O=p.g=g[z],D=Jl(O,v,!1,p)&&D}dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)$(g[v]);delete c.g[p],c.h--}}this.G=null},dt.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},dt.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function Jl(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let D=!0;for(let O=0;O<p.length;++O){const z=p[O];if(z&&!z.da&&z.capture==g){const te=z.listener,He=z.ha||z.src;z.fa&&Rs(c.i,z),D=te.call(He,v)!==!1&&D}}return D&&!v.defaultPrevented}function n1(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function Jy(c){c.g=n1(()=>{c.g=null,c.i&&(c.i=!1,Jy(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class r1 extends S{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Jy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mo(c){S.call(this),this.h=c,this.g={}}f(Mo,S);var Zy=[];function e_(c){X(c.g,function(p,g){this.g.hasOwnProperty(g)&&Th(p)},c),c.g={}}Mo.prototype.N=function(){Mo.Z.N.call(this),e_(this)},Mo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nh=o.JSON.stringify,s1=o.JSON.parse,i1=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function t_(){}function n_(){}var Vo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Sh(){k.call(this,"d")}f(Sh,k);function bh(){k.call(this,"c")}f(bh,k);var As={},r_=null;function Zl(){return r_=r_||new dt}As.Ia="serverreachability";function s_(c){k.call(this,As.Ia,c)}f(s_,k);function Fo(c){const p=Zl();Et(p,new s_(p))}As.STAT_EVENT="statevent";function i_(c,p){k.call(this,As.STAT_EVENT,c),this.stat=p}f(i_,k);function Tt(c){const p=Zl();Et(p,new i_(p,c))}As.Ja="timingevent";function o_(c,p){k.call(this,As.Ja,c),this.size=p}f(o_,k);function Uo(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function Bo(){this.g=!0}Bo.prototype.ua=function(){this.g=!1};function o1(c,p,g,v,D,O){c.info(function(){if(c.g)if(O){var z="",te=O.split("&");for(let ye=0;ye<te.length;ye++){var He=te[ye].split("=");if(He.length>1){const Xe=He[0];He=He[1];const bn=Xe.split("_");z=bn.length>=2&&bn[1]=="type"?z+(Xe+"="+He+"&"):z+(Xe+"=redacted&")}}}else z=null;else z=O;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+p+`
`+g+`
`+z})}function a1(c,p,g,v,D,O,z){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+p+`
`+g+`
`+O+" "+z})}function yi(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+c1(c,g)+(v?" "+v:"")})}function l1(c,p){c.info(function(){return"TIMEOUT: "+p})}Bo.prototype.info=function(){};function c1(c,p){if(!c.g)return p;if(!p)return null;try{const O=JSON.parse(p);if(O){for(c=0;c<O.length;c++)if(Array.isArray(O[c])){var g=O[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<v.length;z++)v[z]=""}}}}return Nh(O)}catch{return p}}var ec={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},a_={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},l_;function kh(){}f(kh,t_),kh.prototype.g=function(){return new XMLHttpRequest},l_=new kh;function zo(c){return encodeURIComponent(String(c))}function u1(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function Ir(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new Mo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new c_}function c_(){this.i=null,this.g="",this.h=!1}var u_={},Rh={};function Ah(c,p,g){c.M=1,c.A=nc(Sn(p)),c.u=g,c.R=!0,d_(c,null)}function d_(c,p){c.F=Date.now(),tc(c),c.B=Sn(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),I_(g.i,"t",v),c.C=0,g=c.j.L,c.h=new c_,c.g=z_(c.j,g?p:null,!c.u),c.P>0&&(c.O=new r1(d(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Zy[0]=D.toString()),D=Zy);for(let O=0;O<D.length;O++){const z=Ky(g,D[O],v||p.handleEvent,!1,p.h||p);if(!z)break;p.g[z.key]=z}p=c.J?be(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Fo(),o1(c.i,c.v,c.B,c.l,c.S,c.u)}Ir.prototype.ba=function(c){c=c.target;const p=this.O;p&&Sr(c)==3?p.j():this.Y(c)},Ir.prototype.Y=function(c){try{if(c==this.g)e:{const te=Sr(this.g),He=this.g.ya(),ye=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||A_(this.g)))){this.K||te!=4||He==7||(He==8||ye<=0?Fo(3):Fo(2)),Ph(this);var p=this.g.ca();this.X=p;var g=d1(this);if(this.o=p==200,a1(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(v)){var O=v;break t}}O=null}if(c=O)yi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Dh(this,c);else{this.o=!1,this.m=3,Tt(12),Ps(this),$o(this);break e}}if(this.R){c=!0;let Xe;for(;!this.K&&this.C<g.length;)if(Xe=h1(this,g),Xe==Rh){te==4&&(this.m=4,Tt(14),c=!1),yi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==u_){this.m=4,Tt(15),yi(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else yi(this.i,this.l,Xe,null),Dh(this,Xe);if(h_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||g.length!=0||this.h.h||(this.m=1,Tt(16),c=!1),this.o=this.o&&c,!c)yi(this.i,this.l,g,"[Invalid Chunked Response]"),Ps(this),$o(this);else if(g.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Bh(z),z.P=!0,Tt(11))}}else yi(this.i,this.l,g,null),Dh(this,g);te==4&&Ps(this),this.o&&!this.K&&(te==4?V_(this.j,this):(this.o=!1,tc(this)))}else N1(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),Ps(this),$o(this)}}}catch{}finally{}};function d1(c){if(!h_(c))return c.g.la();const p=A_(c.g);if(p==="")return"";let g="";const v=p.length,D=Sr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Ps(c),$o(c),"";c.h.i=new o.TextDecoder}for(let O=0;O<v;O++)c.h.h=!0,g+=c.h.i.decode(p[O],{stream:!(D&&O==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function h_(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function h1(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?Rh:(g=Number(p.substring(g,v)),isNaN(g)?u_:(v+=1,v+g>p.length?Rh:(p=p.slice(v,v+g),c.C=v+g,p)))}Ir.prototype.cancel=function(){this.K=!0,Ps(this)};function tc(c){c.T=Date.now()+c.H,f_(c,c.H)}function f_(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Uo(d(c.aa,c),p)}function Ph(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Ir.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(l1(this.i,this.B),this.M!=2&&(Fo(),Tt(17)),Ps(this),this.m=2,$o(this)):f_(this,this.T-c)};function $o(c){c.j.I==0||c.K||V_(c.j,c)}function Ps(c){Ph(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,e_(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Dh(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||jh(g.h,c))){if(!c.L&&jh(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)ac(g),ic(g);else break e;Uh(g),Tt(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Uo(d(g.Va,g),6e3));g_(g.h)<=1&&g.ta&&(g.ta=void 0)}else js(g,11)}else if((c.L||g.g==c)&&ac(g),!C(p))for(D=g.Ba.g.parse(p),p=0;p<D.length;p++){let ye=D[p];const Xe=ye[0];if(!(Xe<=g.K))if(g.K=Xe,ye=ye[1],g.I==2)if(ye[0]=="c"){g.M=ye[1],g.ba=ye[2];const bn=ye[3];bn!=null&&(g.ka=bn,g.j.info("VER="+g.ka));const Os=ye[4];Os!=null&&(g.za=Os,g.j.info("SVER="+g.za));const br=ye[5];br!=null&&typeof br=="number"&&br>0&&(v=1.5*br,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const kr=c.g;if(kr){const cc=kr.g?kr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cc){var O=v.h;O.g||cc.indexOf("spdy")==-1&&cc.indexOf("quic")==-1&&cc.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Oh(O,O.h),O.h=null))}if(v.G){const zh=kr.g?kr.g.getResponseHeader("X-HTTP-Session-Id"):null;zh&&(v.wa=zh,Te(v.J,v.G,zh))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var z=c;if(v.na=B_(v,v.L?v.ba:null,v.W),z.L){y_(v.h,z);var te=z,He=v.O;He&&(te.H=He),te.D&&(Ph(te),tc(te)),v.g=z}else L_(v);g.i.length>0&&oc(g)}else ye[0]!="stop"&&ye[0]!="close"||js(g,7);else g.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?js(g,7):Fh(g):ye[0]!="noop"&&g.l&&g.l.qa(ye),g.A=0)}}Fo(4)}catch{}}var f1=class{constructor(c,p){this.g=c,this.map=p}};function p_(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function m_(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function g_(c){return c.h?1:c.g?c.g.size:0}function jh(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Oh(c,p){c.g?c.g.add(p):c.h=p}function y_(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}p_.prototype.cancel=function(){if(this.i=__(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function __(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return _(c.i)}var v_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function p1(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let D,O=null;v>=0?(D=c[g].substring(0,v),O=c[g].substring(v+1)):D=c[g],p(D,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Cr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Cr?(this.l=c.l,Wo(this,c.j),this.o=c.o,this.g=c.g,qo(this,c.u),this.h=c.h,Lh(this,C_(c.i)),this.m=c.m):c&&(p=String(c).match(v_))?(this.l=!1,Wo(this,p[1]||"",!0),this.o=Ho(p[2]||""),this.g=Ho(p[3]||"",!0),qo(this,p[4]),this.h=Ho(p[5]||"",!0),Lh(this,p[6]||"",!0),this.m=Ho(p[7]||"")):(this.l=!1,this.i=new Ko(null,this.l))}Cr.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(Go(p,w_,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Go(p,w_,!0),"@"),c.push(zo(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(Go(g,g.charAt(0)=="/"?y1:g1,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",Go(g,v1)),c.join("")},Cr.prototype.resolve=function(c){const p=Sn(this);let g=!!c.j;g?Wo(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)qo(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=p.h.lastIndexOf("/");D!=-1&&(v=p.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const O=[];for(let z=0;z<D.length;){const te=D[z++];te=="."?v&&z==D.length&&O.push(""):te==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),v&&z==D.length&&O.push("")):(O.push(te),v=!0)}v=O.join("/")}else v=D}return g?p.h=v:g=c.i.toString()!=="",g?Lh(p,C_(c.i)):g=!!c.m,g&&(p.m=c.m),p};function Sn(c){return new Cr(c)}function Wo(c,p,g){c.j=g?Ho(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function qo(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Lh(c,p,g){p instanceof Ko?(c.i=p,w1(c.i,c.l)):(g||(p=Go(p,_1)),c.i=new Ko(p,c.l))}function Te(c,p,g){c.i.set(p,g)}function nc(c){return Te(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Ho(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Go(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,m1),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function m1(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var w_=/[#\/\?@]/g,g1=/[#\?:]/g,y1=/[#\?]/g,_1=/[#\?@]/g,v1=/#/g;function Ko(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Ds(c){c.g||(c.g=new Map,c.h=0,c.i&&p1(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=Ko.prototype,t.add=function(c,p){Ds(this),this.i=null,c=_i(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function x_(c,p){Ds(c),p=_i(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function E_(c,p){return Ds(c),p=_i(c,p),c.g.has(p)}t.forEach=function(c,p){Ds(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(p,D,v,this)},this)},this)};function T_(c,p){Ds(c);let g=[];if(typeof p=="string")E_(c,p)&&(g=g.concat(c.g.get(_i(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return Ds(this),this.i=null,c=_i(this,c),E_(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=T_(this,c),c.length>0?String(c[0]):p):p};function I_(c,p,g){x_(c,p),g.length>0&&(c.i=null,c.g.set(_i(c,p),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const D=zo(g);g=T_(this,g);for(let O=0;O<g.length;O++){let z=D;g[O]!==""&&(z+="="+zo(g[O])),c.push(z)}}return this.i=c.join("&")};function C_(c){const p=new Ko;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function _i(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function w1(c,p){p&&!c.j&&(Ds(c),c.i=null,c.g.forEach(function(g,v){const D=v.toLowerCase();v!=D&&(x_(this,v),I_(this,D,g))},c)),c.j=p}function x1(c,p){const g=new Bo;if(o.Image){const v=new Image;v.onload=h(Nr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=h(Nr,g,"TestLoadImage: error",!1,p,v),v.onabort=h(Nr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=h(Nr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function E1(c,p){const g=new Bo,v=new AbortController,D=setTimeout(()=>{v.abort(),Nr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(O=>{clearTimeout(D),O.ok?Nr(g,"TestPingServer: ok",!0,p):Nr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(D),Nr(g,"TestPingServer: error",!1,p)})}function Nr(c,p,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function T1(){this.g=new i1}function Mh(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Mh,t_),Mh.prototype.g=function(){return new rc(this.i,this.h)};function rc(c,p){dt.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(rc,dt),t=rc.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Yo(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qo(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;N_(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function N_(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Qo(this):Yo(this),this.readyState==3&&N_(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Qo(this))},t.Na=function(c){this.g&&(this.response=c,Qo(this))},t.ga=function(){this.g&&Qo(this)};function Qo(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Yo(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function Yo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(rc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function S_(c){let p="";return X(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function Vh(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=S_(g),typeof c=="string"?g!=null&&zo(g):Te(c,p,g))}function je(c){dt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(je,dt);var I1=/^https?$/i,C1=["POST","PUT"];t=je.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():l_.g(),this.g.onreadystatechange=m(d(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(O){b_(this,O);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const O of v.keys())g.set(O,v.get(O));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(C1,p,void 0)>=0)||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of g)this.g.setRequestHeader(O,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(O){b_(this,O)}};function b_(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,k_(c),sc(c)}function k_(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Et(this,"complete"),Et(this,"abort"),sc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sc(this,!0)),je.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?R_(this):this.Xa())},t.Xa=function(){R_(this)};function R_(c){if(c.h&&typeof i<"u"){if(c.v&&Sr(c)==4)setTimeout(c.Ca.bind(c),0);else if(Et(c,"readystatechange"),Sr(c)==4){c.h=!1;try{const O=c.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=O===0){let z=String(c.D).match(v_)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),v=!I1.test(z?z.toLowerCase():"")}g=v}if(g)Et(c,"complete"),Et(c,"success");else{c.o=6;try{var D=Sr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",k_(c)}}finally{sc(c)}}}}function sc(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||Et(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Sr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Sr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),s1(p)}};function A_(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function N1(c){const p={};c=(c.g&&Sr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(C(c[v]))continue;var g=u1(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=p[D]||[];p[D]=O,O.push(g)}ee(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xo(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function P_(c){this.za=0,this.i=[],this.j=new Bo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xo("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xo("baseRetryDelayMs",5e3,c),this.Za=Xo("retryDelaySeedMs",1e4,c),this.Ta=Xo("forwardChannelMaxRetries",2,c),this.va=Xo("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new p_(c&&c.concurrentRequestLimit),this.Ba=new T1,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=P_.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){Tt(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=B_(this,null,this.W),oc(this)};function Fh(c){if(D_(c),c.I==3){var p=c.V++,g=Sn(c.J);if(Te(g,"SID",c.M),Te(g,"RID",p),Te(g,"TYPE","terminate"),Jo(c,g),p=new Ir(c,c.j,p),p.M=2,p.A=nc(Sn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=z_(p.j,null),p.g.ea(p.A)),p.F=Date.now(),tc(p)}U_(c)}function ic(c){c.g&&(Bh(c),c.g.cancel(),c.g=null)}function D_(c){ic(c),c.v&&(o.clearTimeout(c.v),c.v=null),ac(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function oc(c){if(!m_(c.h)&&!c.m){c.m=!0;var p=c.Ea;M||y(),L||(M(),L=!0),E.add(p,c),c.D=0}}function S1(c,p){return g_(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Uo(d(c.Ea,c,p),F_(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Ir(this,this.j,c);let O=this.o;if(this.U&&(O?(O=be(O),ks(O,this.U)):O=this.U),this.u!==null||this.R||(D.J=O,O=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=O_(this,D,p),g=Sn(this.J),Te(g,"RID",c),Te(g,"CVER",22),this.G&&Te(g,"X-HTTP-Session-Id",this.G),Jo(this,g),O&&(this.R?p="headers="+zo(S_(O))+"&"+p:this.u&&Vh(g,this.u,O)),Oh(this.h,D),this.Ra&&Te(g,"TYPE","init"),this.S?(Te(g,"$req",p),Te(g,"SID","null"),D.U=!0,Ah(D,g,null)):Ah(D,g,p),this.I=2}}else this.I==3&&(c?j_(this,c):this.i.length==0||m_(this.h)||j_(this))};function j_(c,p){var g;p?g=p.l:g=c.V++;const v=Sn(c.J);Te(v,"SID",c.M),Te(v,"RID",g),Te(v,"AID",c.K),Jo(c,v),c.u&&c.o&&Vh(v,c.u,c.o),g=new Ir(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=O_(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Oh(c.h,g),Ah(g,v,p)}function Jo(c,p){c.H&&X(c.H,function(g,v){Te(p,v,g)}),c.l&&X({},function(g,v){Te(p,v,g)})}function O_(c,p,g){g=Math.min(c.i.length,g);const v=c.l?d(c.l.Ka,c.l,c):null;e:{var D=c.i;let te=-1;for(;;){const He=["count="+g];te==-1?g>0?(te=D[0].g,He.push("ofs="+te)):te=0:He.push("ofs="+te);let ye=!0;for(let Xe=0;Xe<g;Xe++){var O=D[Xe].g;const bn=D[Xe].map;if(O-=te,O<0)te=Math.max(0,D[Xe].g-100),ye=!1;else try{O="req"+O+"_"||"";try{var z=bn instanceof Map?bn:Object.entries(bn);for(const[Os,br]of z){let kr=br;a(br)&&(kr=Nh(br)),He.push(O+Os+"="+encodeURIComponent(kr))}}catch(Os){throw He.push(O+"type="+encodeURIComponent("_badmap")),Os}}catch{v&&v(bn)}}if(ye){z=He.join("&");break e}}z=void 0}return c=c.i.splice(0,g),p.G=c,z}function L_(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;M||y(),L||(M(),L=!0),E.add(p,c),c.A=0}}function Uh(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Uo(d(c.Da,c),F_(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,M_(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Uo(d(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),ic(this),M_(this))};function Bh(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function M_(c){c.g=new Ir(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=Sn(c.na);Te(p,"RID","rpc"),Te(p,"SID",c.M),Te(p,"AID",c.K),Te(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&Te(p,"TO",c.ia),Te(p,"TYPE","xmlhttp"),Jo(c,p),c.u&&c.o&&Vh(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=nc(Sn(p)),g.u=null,g.R=!0,d_(g,c)}t.Va=function(){this.C!=null&&(this.C=null,ic(this),Uh(this),Tt(19))};function ac(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function V_(c,p){var g=null;if(c.g==p){ac(c),Bh(c),c.g=null;var v=2}else if(jh(c.h,p))g=p.G,y_(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var D=c.D;v=Zl(),Et(v,new o_(v,g)),oc(c)}else L_(c);else if(D=p.m,D==3||D==0&&p.X>0||!(v==1&&S1(c,p)||v==2&&Uh(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),D){case 1:js(c,5);break;case 4:js(c,10);break;case 3:js(c,6);break;default:js(c,2)}}}function F_(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function js(c,p){if(c.j.info("Error code "+p),p==2){var g=d(c.bb,c),v=c.Ua;const D=!v;v=new Cr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Wo(v,"https"),nc(v),D?x1(v.toString(),g):E1(v.toString(),g)}else Tt(2);c.I=0,c.l&&c.l.pa(p),U_(c),D_(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function U_(c){if(c.I=0,c.ja=[],c.l){const p=__(c.h);(p.length!=0||c.i.length!=0)&&(T(c.ja,p),T(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function B_(c,p,g){var v=g instanceof Cr?Sn(g):new Cr(g);if(v.g!="")p&&(v.g=p+"."+v.g),qo(v,v.u);else{var D=o.location;v=D.protocol,p=p?p+"."+D.hostname:D.hostname,D=+D.port;const O=new Cr(null);v&&Wo(O,v),p&&(O.g=p),D&&qo(O,D),g&&(O.h=g),v=O}return g=c.G,p=c.wa,g&&p&&Te(v,g,p),Te(v,"VER",c.ka),Jo(c,v),v}function z_(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new je(new Mh({ab:g})):new je(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $_(){}t=$_.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function lc(){}lc.prototype.g=function(c,p){return new Ut(c,p)};function Ut(c,p){dt.call(this),this.g=new P_(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!C(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!C(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new vi(this)}f(Ut,dt),Ut.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Fh(this.g)},Ut.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Nh(c),c=g);p.i.push(new f1(p.Ya++,c)),p.I==3&&oc(p)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Fh(this.g),delete this.g,Ut.Z.N.call(this)};function W_(c){Sh.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(W_,Sh);function q_(){bh.call(this),this.status=1}f(q_,bh);function vi(c){this.g=c}f(vi,$_),vi.prototype.ra=function(){Et(this.g,"a")},vi.prototype.qa=function(c){Et(this.g,new W_(c))},vi.prototype.pa=function(c){Et(this.g,new q_)},vi.prototype.oa=function(){Et(this.g,"b")},lc.prototype.createWebChannel=lc.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,zI=function(){return new lc},BI=function(){return Zl()},UI=As,Bp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ec.NO_ERROR=0,ec.TIMEOUT=8,ec.HTTP_ERROR=6,Zc=ec,a_.COMPLETE="complete",FI=a_,n_.EventType=Vo,Vo.OPEN="a",Vo.CLOSE="b",Vo.ERROR="c",Vo.MESSAGE="d",dt.prototype.listen=dt.prototype.J,_a=n_,je.prototype.listenOnce=je.prototype.K,je.prototype.getLastError=je.prototype.Ha,je.prototype.getLastErrorCode=je.prototype.ya,je.prototype.getStatus=je.prototype.ca,je.prototype.getResponseJson=je.prototype.La,je.prototype.getResponseText=je.prototype.la,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Fa,VI=je}).apply(typeof bc<"u"?bc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo="12.8.0";function oD(t){bo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Fd("@firebase/firestore");function Ei(){return ni.logLevel}function q(t,...e){if(ni.logLevel<=se.DEBUG){const n=e.map(Pg);ni.debug(`Firestore (${bo}): ${t}`,...n)}}function dr(t,...e){if(ni.logLevel<=se.ERROR){const n=e.map(Pg);ni.error(`Firestore (${bo}): ${t}`,...n)}}function co(t,...e){if(ni.logLevel<=se.WARN){const n=e.map(Pg);ni.warn(`Firestore (${bo}): ${t}`,...n)}}function Pg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,$I(t,r,n)}function $I(t,e,n){let r=`FIRESTORE (${bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw dr(r),new Error(r)}function me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||$I(e,s,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class lD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cD{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new WI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class uD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class dD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new uD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new P0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new P0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=fD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function zp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Tf(s)===Tf(i)?le(s,i):Tf(s)?1:-1}return le(t.length,e.length)}const pD=55296,mD=57343;function Tf(t){const e=t.charCodeAt(0);return e>=pD&&e<=mD}function uo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="__name__";class An{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return An.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof An?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=An.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=An.isNumericId(e),s=An.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?An.extractNumericId(e).compare(An.extractNumericId(n)):zp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class we extends An{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const gD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends An{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return gD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===D0}static keyField(){return new at([D0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(we.fromString(e))}static fromName(e){return new G(we.fromString(e).popFirst(5))}static empty(){return new G(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yD(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j0(t){if(!G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function O0(t){if(G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function HI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wd(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ll(t,e){if(!HI(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=-62135596800,M0=1e6;class de{static now(){return de.fromMillis(Date.now())}static fromDate(e){return de.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*M0);return new de(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<L0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/M0}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:de._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ll(e,de._jsonSchema))return new de(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-L0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}de._jsonSchemaVersion="firestore/timestamp/1.0",de._jsonSchema={type:We("string",de._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new de(0,0))}static max(){return new J(new de(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=-1;function _D(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new de(n+1,0):new de(n,r));return new us(s,G.empty(),e)}function vD(t){return new us(t.readTime,t.key,cl)}class us{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new us(J.min(),G.empty(),cl)}static max(){return new us(J.max(),G.empty(),cl)}}function wD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ED{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==xD)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const d=l;n(e[d]).next(h=>{o[d]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function TD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=-1;function Hd(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function ID(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="";function CD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=V0(e)),e=ND(t.get(n),e);return V0(e)}function ND(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case GI:n+="";break;default:n+=i}}return n}function V0(t){return t+GI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class $p{constructor(e,n){this.comparator=e,this.root=n||ns.EMPTY}insert(e,n){return new $p(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ns.BLACK,null,null))}remove(e){return new $p(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ns.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kc(this.root,e,this.comparator,!0)}},kc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ns=class Hn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Hn.RED,this.left=s??Hn.EMPTY,this.right=i??Hn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Hn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Hn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Hn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Hn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Hn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}};ns.EMPTY=null,ns.RED=!0,ns.BLACK=!1;ns.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ns(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ye(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new QI("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const SD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ds(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=SD.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hs(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="server_timestamp",XI="__type__",JI="__previous_value__",ZI="__local_write_time__";function Og(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[XI])==null?void 0:r.stringValue)===YI}function Gd(t){const e=t.mapValue.fields[JI];return Og(e)?Gd(e):e}function ul(t){const e=ds(t.mapValue.fields[ZI].timestampValue);return new de(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,s,i,o,a,l,d,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=h,this.apiKey=f}}const $u="(default)";class dl{constructor(e,n){this.projectId=e,this.database=n||$u}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database===$u}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}function kD(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="__type__",RD="__max__",Rc={mapValue:{}},tC="__vector__",Wu="value";function fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Og(t)?4:PD(t)?9007199254740991:AD(t)?10:11:Q(28295,{value:t})}function Bn(t,e){if(t===e)return!0;const n=fs(t);if(n!==fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ul(t).isEqual(ul(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ds(s.timestampValue),a=ds(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return hs(s.bytesValue).isEqual(hs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?zu(o)===zu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return uo(t.arrayValue.values||[],e.arrayValue.values||[],Bn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(F0(o)!==F0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Bn(o[l],a[l])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function hl(t,e){return(t.values||[]).find(n=>Bn(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=fs(t),r=fs(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),l=Fe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return B0(t.timestampValue,e.timestampValue);case 4:return B0(ul(t),ul(e));case 5:return zp(t.stringValue,e.stringValue);case 6:return function(i,o){const a=hs(i),l=hs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let d=0;d<a.length&&d<l.length;d++){const h=le(a[d],l[d]);if(h!==0)return h}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(Fe(i.latitude),Fe(o.latitude));return a!==0?a:le(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return z0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,T,b;const a=i.fields||{},l=o.fields||{},d=(m=a[Wu])==null?void 0:m.arrayValue,h=(_=l[Wu])==null?void 0:_.arrayValue,f=le(((T=d==null?void 0:d.values)==null?void 0:T.length)||0,((b=h==null?void 0:h.values)==null?void 0:b.length)||0);return f!==0?f:z0(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Rc.mapValue&&o===Rc.mapValue)return 0;if(i===Rc.mapValue)return 1;if(o===Rc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),d=o.fields||{},h=Object.keys(d);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=zp(l[f],h[f]);if(m!==0)return m;const _=ho(a[l[f]],d[h[f]]);if(_!==0)return _}return le(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function B0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ds(t),r=ds(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function z0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ho(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function fo(t){return Wp(t)}function Wp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ds(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Wp(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Wp(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function eu(t){switch(fs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gd(t);return e?16+eu(e):16;case 5:return 2*t.stringValue.length;case 6:return hs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+eu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Is(r.fields,(i,o)=>{s+=i.length+eu(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function $0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qp(t){return!!t&&"integerValue"in t}function Lg(t){return!!t&&"arrayValue"in t}function W0(t){return!!t&&"nullValue"in t}function q0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tu(t){return!!t&&"mapValue"in t}function AD(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[eC])==null?void 0:r.stringValue)===tC}function Da(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Da(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Da(t.arrayValue.values[n]);return e}return{...t}}function PD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Da(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Da(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];tu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Is(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(Da(this.value))}}function nC(t){const e=[];return Is(t.fields,(n,r)=>{const s=new at([n]);if(tu(r)){const i=nC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,J.min(),J.min(),J.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,J.min(),J.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,J.min(),J.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.position=e,this.inclusive=n}}function H0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function G0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Bn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function DD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{}class $e extends rC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OD(e,n,r):n==="array-contains"?new VD(e,r):n==="in"?new FD(e,r):n==="not-in"?new UD(e,r):n==="array-contains-any"?new BD(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new LD(e,r):new MD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ho(n,this.value)):n!==null&&fs(this.value)===fs(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends rC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Nn(e,n)}matches(e){return sC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sC(t){return t.op==="and"}function iC(t){return jD(t)&&sC(t)}function jD(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Hp(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+fo(t.value);if(iC(t))return t.filters.map(e=>Hp(e)).join(",");{const e=t.filters.map(n=>Hp(n)).join(",");return`${t.op}(${e})`}}function oC(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&Bn(r.value,s.value)}(t,e):t instanceof Nn?function(r,s){return s instanceof Nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&oC(o,s.filters[a]),!0):!1}(t,e):void Q(19439)}function aC(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${fo(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(aC).join(" ,")+"}"}(t):"Filter"}class OD extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class LD extends $e{constructor(e,n){super(e,"in",n),this.keys=lC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MD extends $e{constructor(e,n){super(e,"not-in",n),this.keys=lC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class VD extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Lg(n)&&hl(n.arrayValue,this.value)}}class FD extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class UD extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hl(this.value.arrayValue,n)}}class BD extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Lg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function K0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new zD(t,e,n,r,s,i,o)}function Mg(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fo(r)).join(",")),e.Te=n}return e.Te}function Vg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!DD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!G0(t.startAt,e.startAt)&&G0(t.endAt,e.endAt)}function Gp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $D(t,e,n,r,s,i,o,a){return new Ml(t,e,n,r,s,i,o,a)}function Kd(t){return new Ml(t)}function Q0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WD(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cC(t){return t.collectionGroup!==null}function ja(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Hu(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new Hu(at.keyField(),r))}return e.Ie}function Vn(t){const e=Z(t);return e.Ee||(e.Ee=qD(e,ja(t))),e.Ee}function qD(t,e){if(t.limitType==="F")return K0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Hu(s.field,i)});const n=t.endAt?new qu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new qu(t.startAt.position,t.startAt.inclusive):null;return K0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kp(t,e){const n=t.filters.concat([e]);return new Ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qp(t,e,n){return new Ml(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qd(t,e){return Vg(Vn(t),Vn(e))&&t.limitType===e.limitType}function uC(t){return`${Mg(Vn(t))}|lt:${t.limitType}`}function Ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>aC(s)).join(", ")}]`),Hd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fo(s)).join(",")),`Target(${r})`}(Vn(t))}; limitType=${t.limitType})`}function Yd(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ja(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const d=H0(o,a,l);return o.inclusive?d<=0:d<0}(r.startAt,ja(r),s)||r.endAt&&!function(o,a,l){const d=H0(o,a,l);return o.inclusive?d>=0:d>0}(r.endAt,ja(r),s))}(t,e)}function HD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dC(t){return(e,n)=>{let r=!1;for(const s of ja(t)){const i=GD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function GD(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),d=a.data.field(i);return l!==null&&d!==null?ho(l,d):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Is(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return KI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=new qe(G.comparator);function hr(){return KD}const hC=new qe(G.comparator);function va(...t){let e=hC;for(const n of t)e=e.insert(n.key,n);return e}function fC(t){let e=hC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function $s(){return Oa()}function pC(){return Oa()}function Oa(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const QD=new qe(G.comparator),YD=new Ye(G.comparator);function ce(...t){let e=YD;for(const n of t)e=e.add(n);return e}const XD=new Ye(le);function JD(){return XD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function mC(t){return{integerValue:""+t}}function ZD(t,e){return ID(e)?mC(e):Fg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(){this._=void 0}}function ej(t,e,n){return t instanceof fl?function(s,i){const o={fields:{[XI]:{stringValue:YI},[ZI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Og(i)&&(i=Gd(i)),i&&(o.fields[JI]=i),{mapValue:o}}(n,e):t instanceof pl?yC(t,e):t instanceof ml?_C(t,e):function(s,i){const o=gC(s,i),a=Y0(o)+Y0(s.Ae);return qp(o)&&qp(s.Ae)?mC(a):Fg(s.serializer,a)}(t,e)}function tj(t,e,n){return t instanceof pl?yC(t,e):t instanceof ml?_C(t,e):n}function gC(t,e){return t instanceof Gu?function(r){return qp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fl extends Xd{}class pl extends Xd{constructor(e){super(),this.elements=e}}function yC(t,e){const n=vC(e);for(const r of t.elements)n.some(s=>Bn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ml extends Xd{constructor(e){super(),this.elements=e}}function _C(t,e){let n=vC(e);for(const r of t.elements)n=n.filter(s=>!Bn(s,r));return{arrayValue:{values:n}}}class Gu extends Xd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Y0(t){return Fe(t.integerValue||t.doubleValue)}function vC(t){return Lg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{constructor(e,n){this.field=e,this.transform=n}}function rj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pl&&s instanceof pl||r instanceof ml&&s instanceof ml?uo(r.elements,s.elements,Bn):r instanceof Gu&&s instanceof Gu?Bn(r.Ae,s.Ae):r instanceof fl&&s instanceof fl}(t.transform,e.transform)}class sj{constructor(e,n){this.version=e,this.transformResults=n}}class xn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xn}static exists(e){return new xn(void 0,e)}static updateTime(e){return new xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jd{}function wC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new EC(t.key,xn.none()):new Vl(t.key,t.data,xn.none());{const n=t.data,r=Pt.empty();let s=new Ye(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cs(t.key,r,new $t(s.toArray()),xn.none())}}function ij(t,e,n){t instanceof Vl?function(s,i,o){const a=s.value.clone(),l=J0(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Cs?function(s,i,o){if(!nu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=J0(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(xC(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function La(t,e,n,r){return t instanceof Vl?function(i,o,a,l){if(!nu(i.precondition,o))return a;const d=i.value.clone(),h=Z0(i.fieldTransforms,l,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cs?function(i,o,a,l){if(!nu(i.precondition,o))return a;const d=Z0(i.fieldTransforms,l,o),h=o.data;return h.setAll(xC(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return nu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oj(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gC(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function X0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&uo(r,s,(i,o)=>rj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vl extends Jd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cs extends Jd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function J0(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,tj(o,a,n[s]))}return r}function Z0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ej(i,o,e))}return r}class EC extends Jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aj extends Jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ij(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=La(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=wC(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,(n,r)=>X0(n,r))&&uo(this.baseMutations,e.baseMutations,(n,r)=>X0(n,r))}}class Ug{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return QD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ug(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function dj(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function TC(t){if(t===void 0)return dr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fj=new ts([4294967295,4294967295],0);function ew(t){const e=hj().encode(t),n=new MI;return n.update(e),new Uint8Array(n.digest())}function tw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ts([n,r],0),new ts([s,i],0)]}class Bg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wa(`Invalid padding: ${n}`);if(r<0)throw new wa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ts.fromNumber(r)));return s.compare(fj)===1&&(s=new ts([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ew(e),[r,s]=tw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Bg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=ew(e),[r,s]=tw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zd(J.min(),s,new qe(le),hr(),ce())}}class Fl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fl(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class IC{constructor(e,n){this.targetId=e,this.Ce=n}}class CC{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class nw{constructor(){this.ve=0,this.Fe=rw(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new Fl(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=rw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pj{constructor(e){this.Ge=e,this.ze=new Map,this.je=hr(),this.He=Ac(),this.Je=Ac(),this.Ze=new qe(le)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Gp(i))if(r===0){const o=new G(i.path);this.et(n,o,yt.newNoDocument(o,J.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=hs(r).toUint8Array()}catch(l){if(l instanceof QI)return co("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Bg(o,s,i)}catch(l){return co(l instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Gp(a.target)){const l=new G(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,yt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ce();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Zd(e,n,this.Ze,this.je,r);return this.je=hr(),this.He=Ac(),this.Je=Ac(),this.Ze=new qe(le),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new nw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ye(le),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ye(le),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new nw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ac(){return new qe(G.comparator)}function rw(){return new qe(G.comparator)}const mj={asc:"ASCENDING",desc:"DESCENDING"},gj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yj={and:"AND",or:"OR"};class _j{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yp(t,e){return t.useProto3Json||Hd(e)?e:{value:e}}function Ku(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vj(t,e){return Ku(t,e.toTimestamp())}function Fn(t){return me(!!t,49232),J.fromTimestamp(function(n){const r=ds(n);return new de(r.seconds,r.nanos)}(t))}function zg(t,e){return Xp(t,e).canonicalString()}function Xp(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function SC(t){const e=we.fromString(t);return me(PC(e),10190,{key:e.toString()}),e}function Jp(t,e){return zg(t.databaseId,e.path)}function If(t,e){const n=SC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(kC(n))}function bC(t,e){return zg(t.databaseId,e)}function wj(t){const e=SC(t);return e.length===4?we.emptyPath():kC(e)}function Zp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kC(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function sw(t,e,n){return{name:Jp(t,e),fields:n.value.mapValue.fields}}function xj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(me(h===void 0||typeof h=="string",58123),ut.fromBase64String(h||"")):(me(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?V.UNKNOWN:TC(d.code);return new W(h,d.message||"")}(o);n=new CC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=If(t,r.document.name),i=Fn(r.document.updateTime),o=r.document.createTime?Fn(r.document.createTime):J.min(),a=new Pt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new ru(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=If(t,r.document),i=r.readTime?Fn(r.readTime):J.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=If(t,r.document),i=r.removedTargetIds||[];n=new ru([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new uj(s,i),a=r.targetId;n=new IC(a,o)}}return n}function Ej(t,e){let n;if(e instanceof Vl)n={update:sw(t,e.key,e.value)};else if(e instanceof EC)n={delete:Jp(t,e.key)};else if(e instanceof Cs)n={update:sw(t,e.key,e.data),updateMask:Aj(e.fieldMask)};else{if(!(e instanceof aj))return Q(16599,{dt:e.type});n={verify:Jp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ml)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Gu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:vj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function Tj(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Fn(s.updateTime):Fn(i);return o.isEqual(J.min())&&(o=Fn(i)),new sj(o,s.transformResults||[])}(n,e))):[]}function Ij(t,e){return{documents:[bC(t,e.path)]}}function Cj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bC(t,s);const i=function(d){if(d.length!==0)return AC(Nn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:Ii(m.field),direction:bj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function Nj(t){let e=wj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=RC(f);return m instanceof Nn&&iC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Hu(Ci(T.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Hd(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new qu(_,m)}(n.startAt));let d=null;return n.endAt&&(d=function(f){const m=!f.before,_=f.values||[];return new qu(_,m)}(n.endAt)),$D(e,s,o,i,a,"F",l,d)}function Sj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function RC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ci(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ci(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ci(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ci(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Ci(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>RC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function bj(t){return mj[t]}function kj(t){return gj[t]}function Rj(t){return yj[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Ci(t){return at.fromServerFormat(t.fieldPath)}function AC(t){return t instanceof $e?function(n){if(n.op==="=="){if(q0(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NAN"}};if(W0(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(q0(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NAN"}};if(W0(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(n.field),op:kj(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(s=>AC(s));return r.length===1?r[0]:{compositeFilter:{op:Rj(n.op),filters:r}}}(t):Q(54877,{filter:t})}function Aj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function PC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function DC(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new $r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e){this.yt=e}}function Dj(t){const e=Nj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jj{constructor(){this.Sn=new Oj}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(us.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(us.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Oj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jC=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(jC,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new po(0)}static ar(){return new po(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="LruGarbageCollector",Lj=1048576;function aw([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class Mj{constructor(e){this.Pr=e,this.buffer=new Ye(aw),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();aw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Vj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(ow,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ro(n)?q(ow,"Ignoring IndexedDB error during garbage collection: ",n):await ko(n)}await this.Ar(3e5)})}}class Fj{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(qd.ce);const r=new Mj(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(iw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),Ei()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(d-l)+`ms
Total Duration: ${d-h}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Uj(t,e){return new Fj(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bj{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $j{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&La(r.mutation,s,$t.empty(),de.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=$s();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=va();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=$s();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hr();const o=Oa(),a=function(){return Oa()}();return n.forEach((l,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof Cs)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),La(h.mutation,d,h.mutation.getFieldMask(),de.now())):o.set(d.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new zj(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Oa();let s=new qe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let h=r.get(l)||$t.empty();h=a.applyToLocalView(d,h),r.set(l,h);const f=(s.get(a.batchId)||ce()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,h=l.value,f=pC();h.forEach(m=>{if(!i.has(m)){const _=wC(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return WD(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve($s());let a=cl,l=i;return o.next(d=>F.forEach(d,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?F.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,ce())).next(h=>({batchId:a,changes:fC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=va();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=va();return this.indexManager.getCollectionParents(e,i).next(a=>F.forEach(a,l=>{const d=function(f,m){return new Ml(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,yt.newInvalidDocument(h)))});let a=va();return o.forEach((l,d)=>{const h=i.get(l);h!==void 0&&La(h.mutation,d,$t.empty(),de.now()),Yd(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wj{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Fn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Dj(s.bundledQuery),readTime:Fn(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qj{constructor(){this.overlays=new qe(G.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=$s();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=$s(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=$s(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=$s(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=s)););return F.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cj(n,r));let i=this.Lr.get(n);i===void 0&&(i=ce(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hj{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.kr=new Ye(Ze.Kr),this.qr=new Ye(Ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new we([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new we([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ce();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||le(e.Hr,n.Hr)}static Ur(e,n){return le(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ye(Ze.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?jg:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(le);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new G(i),0);let a=new Ye(le);return this.Jr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(a=a.add(l.Hr)),!0)},o),F.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kj{constructor(e){this.ti=e,this.docs=function(){return new qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hr();const o=n.path,a=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||wD(vD(h),r)<=0||(s.has(h.key)||Yd(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Qj(this)}getSize(e){return F.resolve(this.size)}}class Qj extends Bj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(e){this.persistence=e,this.ri=new di(n=>Mg(n),Vg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new $g,this.targetCount=0,this.oi=po._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new po(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this._i={},this.overlays={},this.ai=new qd(0),this.ui=!1,this.ui=!0,this.ci=new Hj,this.referenceDelegate=e(this),this.li=new Yj(this),this.indexManager=new jj,this.remoteDocumentCache=function(s){return new Kj(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pj(n),this.Pi=new Wj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Gj(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new Xj(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Xj extends ED{constructor(e){super(),this.currentSequenceNumber=e}}class Wg{constructor(e){this.persistence=e,this.Ri=new $g,this.Ai=null}static Vi(e){return new Wg(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Qu{constructor(e,n){this.persistence=e,this.fi=new di(r=>CD(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Uj(this,n)}static Vi(e,n){return new Qu(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=eu(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return vR()?8:TD(xt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Jj;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Ei()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Ei()<=se.DEBUG&&q("QueryEngine","Query:",Ti(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Ei()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vn(n))):F.resolve())}gs(e,n){if(Q0(n))return F.resolve(null);let r=Vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Qp(n,null,"F"),r=Vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(n,a);return this.Ss(n,d,o,l.readTime)?this.gs(e,Qp(n,null,"F")):this.Ds(e,d,n,l)}))})))}ps(e,n,r,s){return Q0(n)||s.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(Ei()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ti(n)),this.Ds(e,o,n,_D(s,cl)).next(a=>a))})}bs(e,n){let r=new Ye(dC(e));return n.forEach((s,i)=>{Yd(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Ei()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ti(n)),this.fs.getDocumentsMatchingQuery(e,n,us.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="LocalStore",eO=3e8;class tO{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new qe(le),this.Fs=new di(i=>Mg(i),Vg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $j(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function nO(t,e,n,r){return new tO(t,e,n,r)}async function LC(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ce();for(const d of s){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of i){a.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:a}))})})}function rO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,h){const f=d.batch,m=f.keys();let _=F.resolve();return m.forEach(T=>{_=_.next(()=>h.getEntry(l,T)).next(b=>{const R=d.docVersions.get(T);me(R!==null,48541),b.version.compareTo(R)<0&&(f.applyToRemoteDocument(b,d),b.isValidDocument()&&(b.setReadTime(d.commitVersion),h.addEntry(b)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ce();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function MC(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function sO(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(ut.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(f,_),function(b,R,x){return b.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=eO?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,_,h)&&a.push(n.li.updateTargetData(i,_))});let l=hr(),d=ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(iO(i,o,e.documentUpdates).next(h=>{l=h.Bs,d=h.Ls})),!r.isEqual(J.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return F.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(n.vs=s,i))}function iO(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hr();return n.forEach((a,l)=>{const d=i.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(Hg,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function oO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new $r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function em(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ro(o))throw o;q(Hg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function lw(t,e,n){const r=Z(t);let s=J.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,h){const f=Z(l),m=f.Fs.get(h);return m!==void 0?F.resolve(f.vs.get(m)):f.li.getTargetData(d,h)}(r,o,Vn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ce())).next(a=>(lO(r,HD(e),a),{documents:a,ks:i})))}function lO(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class cw{constructor(){this.activeTargetIds=JD()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cO{constructor(){this.vo=new cw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="ConnectivityMonitor";class dw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(uw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(uw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc=null;function tm(){return Pc===null?Pc=function(){return 268435456+Math.round(2147483648*Math.random())}():Pc++,"0x"+Pc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="RestConnection",dO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class hO{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===$u?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=tm(),a=this.Qo(e,n.toUriEncodedString());q(Cf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(a),h=gr(d);return this.zo(e,a,l,r,h).then(f=>(q(Cf,`Received RPC '${e}' ${o}: `,f),f),f=>{throw co(Cf,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=dO[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection",aa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Yi extends hO{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yi.c_){const e=BI();aa(e,UI.STAT_EVENT,n=>{n.stat===Bp.PROXY?q(pt,"STAT_EVENT: detected buffering proxy"):n.stat===Bp.NOPROXY&&q(pt,"STAT_EVENT: detected no buffering proxy")}),Yi.c_=!0}}zo(e,n,r,s,i){const o=tm();return new Promise((a,l)=>{const d=new VI;d.setWithCredentials(!0),d.listenOnce(FI.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Zc.NO_ERROR:const f=d.getResponseJson();q(pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Zc.TIMEOUT:q(pt,`RPC '${e}' ${o} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Zc.HTTP_ERROR:const m=d.getStatus();if(q(pt,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let _=d.getResponseJson();Array.isArray(_)&&(_=_[0]);const T=_==null?void 0:_.error;if(T&&T.status&&T.message){const b=function(x){const w=x.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(T.status);l(new W(b,T.message))}else l(new W(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{q(pt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(pt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=tm(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const d=i.join("");q(pt,`Creating RPC '${e}' stream ${s}: ${d}`,a);const h=o.createWebChannel(d,a);this.I_(h);let f=!1,m=!1;const _=new fO({Ho:T=>{m?q(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(q(pt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),q(pt,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Jo:()=>h.close()});return aa(h,_a.EventType.OPEN,()=>{m||(q(pt,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),aa(h,_a.EventType.CLOSE,()=>{m||(m=!0,q(pt,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(h))}),aa(h,_a.EventType.ERROR,T=>{m||(m=!0,co(pt,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),_.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),aa(h,_a.EventType.MESSAGE,T=>{var b;if(!m){const R=T.data[0];me(!!R,16349);const x=R,w=(x==null?void 0:x.error)||((b=x[0])==null?void 0:b.error);if(w){q(pt,`RPC '${e}' stream ${s} received error:`,w);const N=w.status;let j=function(E){const y=Be[E];if(y!==void 0)return TC(y)}(N),M=w.message;j===void 0&&(j=V.INTERNAL,M="Unknown error status: "+N+" with message "+w.message),m=!0,_.o_(new W(j,M)),h.close()}else q(pt,`RPC '${e}' stream ${s} received:`,R),_.__(R)}}),Yi.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(t){return new Yi(t)}function Nf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return new _j(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yi.c_=!1;class VC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="PersistentStream";class FC{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new VC(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(dr(n.toString()),dr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mO extends FC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=xj(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Fn(o.readTime):J.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Zp(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Gp(l)?{documents:Ij(i,l)}:{query:Cj(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=NC(i,o.resumeToken);const d=Yp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=Ku(i,o.snapshotVersion.toTimestamp());const d=Yp(i,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=Sj(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Zp(this.serializer),n.removeTarget=e,this.K_(n)}}class gO extends FC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Tj(e.writeResults,e.commitTime),r=Fn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Zp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ej(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{}class _O extends yO{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Xp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Xp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function vO(t,e,n,r){return new _O(t,e,n,r)}class wO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="RemoteStore";class xO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{hi(this)&&(q(ri,"Restarting streams for network reachability change."),await async function(l){const d=Z(l);d.Ea.add(4),await Ul(d),d.Va.set("Unknown"),d.Ea.delete(4),await th(d)}(this))})}),this.Va=new wO(r,s)}}async function th(t){if(hi(t))for(const e of t.Ra)await e(!0)}async function Ul(t){for(const e of t.Ra)await e(!1)}function UC(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Yg(n)?Qg(n):Ao(n).O_()&&Kg(n,e))}function Gg(t,e){const n=Z(t),r=Ao(n);n.Ia.delete(e),r.O_()&&BC(n,e),n.Ia.size===0&&(r.O_()?r.L_():hi(n)&&n.Va.set("Unknown"))}function Kg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ao(t).Z_(e)}function BC(t,e){t.da.$e(e),Ao(t).X_(e)}function Qg(t){t.da=new pj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ao(t).start(),t.Va.ua()}function Yg(t){return hi(t)&&!Ao(t).x_()&&t.Ia.size>0}function hi(t){return Z(t).Ea.size===0}function zC(t){t.da=void 0}async function EO(t){t.Va.set("Online")}async function TO(t){t.Ia.forEach((e,n)=>{Kg(t,e)})}async function IO(t,e){zC(t),Yg(t)?(t.Va.ha(e),Qg(t)):t.Va.set("Unknown")}async function CO(t,e,n){if(t.Va.set("Online"),e instanceof CC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){q(ri,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yu(t,r)}else if(e instanceof ru?t.da.Xe(e):e instanceof IC?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await MC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,d)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(ut.EMPTY_BYTE_STRING,h.snapshotVersion)),BC(i,l);const f=new $r(h.target,l,d,h.sequenceNumber);Kg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q(ri,"Failed to raise snapshot:",r),await Yu(t,r)}}async function Yu(t,e,n){if(!Ro(e))throw e;t.Ea.add(1),await Ul(t),t.Va.set("Offline"),n||(n=()=>MC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(ri,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await th(t)})}function $C(t,e){return e().catch(n=>Yu(t,n,e))}async function nh(t){const e=Z(t),n=ps(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jg;for(;NO(e);)try{const s=await oO(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,SO(e,s)}catch(s){await Yu(e,s)}WC(e)&&qC(e)}function NO(t){return hi(t)&&t.Ta.length<10}function SO(t,e){t.Ta.push(e);const n=ps(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function WC(t){return hi(t)&&!ps(t).x_()&&t.Ta.length>0}function qC(t){ps(t).start()}async function bO(t){ps(t).ra()}async function kO(t){const e=ps(t);for(const n of t.Ta)e.ea(n.mutations)}async function RO(t,e,n){const r=t.Ta.shift(),s=Ug.from(r,e,n);await $C(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await nh(t)}async function AO(t,e){e&&ps(t).Y_&&await async function(r,s){if(function(o){return dj(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();ps(r).B_(),await $C(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await nh(r)}}(t,e),WC(t)&&qC(t)}async function fw(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(ri,"RemoteStore received new credentials");const r=hi(n);n.Ea.add(3),await Ul(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await th(n)}async function PO(t,e){const n=Z(t);e?(n.Ea.delete(2),await th(n)):e||(n.Ea.add(2),await Ul(n),n.Va.set("Unknown"))}function Ao(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new mO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:EO.bind(null,t),Yo:TO.bind(null,t),t_:IO.bind(null,t),J_:CO.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Yg(t)?Qg(t):t.Va.set("Unknown")):(await t.ma.stop(),zC(t))})),t.ma}function ps(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new gO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bO.bind(null,t),t_:AO.bind(null,t),ta:kO.bind(null,t),na:RO.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await nh(t)):(await t.fa.stop(),t.Ta.length>0&&(q(ri,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Xg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jg(t,e){if(dr("AsyncQueue",`${e}: ${t}`),Ro(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{static emptySet(e){return new Xi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=va(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.ga=new qe(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class mo{constructor(e,n,r,s,i,o,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mo(e,n,Xi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class jO{constructor(){this.queries=mw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=mw(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function mw(){return new di(t=>uC(t),Qd)}async function Zg(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new DO,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Jg(o,`Initialization of query '${Ti(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&ty(n)}async function ey(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function OO(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&ty(n)}function LO(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function ty(t){t.Ca.forEach(e=>{e.next()})}var nm,gw;(gw=nm||(nm={})).Ma="default",gw.Cache="cache";class ny{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==nm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.key=e}}class GC{constructor(e){this.key=e}}class MO{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ce(),this.mutatedKeys=ce(),this.eu=dC(e),this.tu=new Xi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new pw,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),_=Yd(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),b=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?T!==b&&(r.track({type:3,doc:_}),R=!0):this.su(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||d&&this.eu(_,d)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||d)&&(a=!0)),R&&(_?(o=o.add(_),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(_,T){const b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:R})}};return b(_)-b(T)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new mo(this.query,e.tu,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pw,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new GC(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new HC(r))}),n}cu(e){this.Za=e.ks,this.Ya=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ry="SyncEngine";class VO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FO{constructor(e){this.key=e,this.hu=!1}}class UO{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new di(a=>uC(a),Qd),this.Iu=new Map,this.Eu=new Set,this.Ru=new qe(G.comparator),this.Au=new Map,this.Vu=new $g,this.du={},this.mu=new Map,this.fu=po.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function BO(t,e,n=!0){const r=ZC(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await KC(r,e,n,!0),s}async function zO(t,e){const n=ZC(t);await KC(n,e,!0,!1)}async function KC(t,e,n,r){const s=await aO(t.localStore,Vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await $O(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&UC(t.remoteStore,s),a}async function $O(t,e,n,r,s){t.pu=(f,m,_)=>async function(b,R,x,w){let N=R.view.ru(x);N.Ss&&(N=await lw(b.localStore,R.query,!1).then(({documents:E})=>R.view.ru(E,N)));const j=w&&w.targetChanges.get(R.targetId),M=w&&w.targetMismatches.get(R.targetId)!=null,L=R.view.applyChanges(N,b.isPrimaryClient,j,M);return _w(b,R.targetId,L.au),L.snapshot}(t,f,m,_);const i=await lw(t.localStore,e,!0),o=new MO(e,i.ks),a=o.ru(i.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(a,t.isPrimaryClient,l);_w(t,n,d.au);const h=new VO(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function WO(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Qd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await em(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Gg(r.remoteStore,s.targetId),rm(r,s.targetId)}).catch(ko)):(rm(r,s.targetId),await em(r.localStore,s.targetId,!0))}async function qO(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gg(n.remoteStore,r.targetId))}async function HO(t,e,n){const r=ZO(t);try{const s=await function(o,a){const l=Z(o),d=de.now(),h=a.reduce((_,T)=>_.add(T.key),ce());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=hr(),b=ce();return l.xs.getEntries(_,h).next(R=>{T=R,T.forEach((x,w)=>{w.isValidDocument()||(b=b.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,T)).next(R=>{f=R;const x=[];for(const w of a){const N=oj(w,f.get(w.key).overlayedDocument);N!=null&&x.push(new Cs(w.key,N,nC(N.value.mapValue),xn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,d,x,a)}).next(R=>{m=R;const x=R.applyToLocalDocumentSet(f,b);return l.documentOverlayCache.saveOverlays(_,R.batchId,x)})}).then(()=>({batchId:m.batchId,changes:fC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let d=o.du[o.currentUser.toKey()];d||(d=new qe(le)),d=d.insert(a,l),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await Bl(r,s.changes),await nh(r.remoteStore)}catch(s){const i=Jg(s,"Failed to persist write");n.reject(i)}}async function QC(t,e){const n=Z(t);try{const r=await sO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await Bl(n,r,e)}catch(r){await ko(r)}}function yw(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let d=!1;l.queries.forEach((h,f)=>{for(const m of f.ba)m.va(a)&&(d=!0)}),d&&ty(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GO(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(G.comparator);o=o.insert(i,yt.newNoDocument(i,J.min()));const a=ce().add(i),l=new Zd(J.min(),new Map,new qe(le),o,a);await QC(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),sy(r)}else await em(r.localStore,e,!1).then(()=>rm(r,e,n)).catch(ko)}async function KO(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await rO(n.localStore,e);XC(n,r,null),YC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Bl(n,s)}catch(s){await ko(s)}}async function QO(t,e,n){const r=Z(t);try{const s=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return l.mutationQueue.lookupMutationBatch(d,a).next(f=>(me(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(d,f))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>l.localDocuments.getDocuments(d,h))})}(r.localStore,e);XC(r,e,n),YC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Bl(r,s)}catch(s){await ko(s)}}function YC(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function XC(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function rm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||JC(t,r)})}function JC(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Gg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),sy(t))}function _w(t,e,n){for(const r of n)r instanceof HC?(t.Vu.addReference(r.key,e),YO(t,r)):r instanceof GC?(q(ry,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||JC(t,r.key)):Q(19791,{wu:r})}function YO(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(ry,"New document in limbo: "+n),t.Eu.add(r),sy(t))}function sy(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(we.fromString(e)),r=t.fu.next();t.Au.set(r,new FO(n)),t.Ru=t.Ru.insert(n,r),UC(t.remoteStore,new $r(Vn(Kd(n.path)),r,"TargetPurposeLimboResolution",qd.ce))}}async function Bl(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const f=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(d){s.push(d);const f=qg.Es(l.targetId,d);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,d){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(d,m=>F.forEach(m.Ts,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>F.forEach(m.Is,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Ro(f))throw f;q(Hg,"Failed to update sequence numbers: "+f)}for(const f of d){const m=f.targetId;if(!f.fromCache){const _=h.vs.get(m),T=_.snapshotVersion,b=_.withLastLimboFreeSnapshotVersion(T);h.vs=h.vs.insert(m,b)}}}(r.localStore,i))}async function XO(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(ry,"User change. New user:",e.toKey());const r=await LC(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Bl(n,r.Ns)}}function JO(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function ZC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=QC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GO.bind(null,e),e.Pu.J_=OO.bind(null,e.eventManager),e.Pu.yu=LO.bind(null,e.eventManager),e}function ZO(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=QO.bind(null,e),e}class Xu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=eh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return nO(this.persistence,new Zj,e.initialUser,this.serializer)}Cu(e){return new OC(Wg.Vi,this.serializer)}Du(e){return new cO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xu.provider={build:()=>new Xu};class eL extends Xu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof Qu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Vj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new OC(r=>Qu.Vi(r,n),this.serializer)}}class sm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=XO.bind(null,this.syncEngine),await PO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jO}()}createDatastore(e){const n=eh(e.databaseInfo.databaseId),r=pO(e.databaseInfo);return vO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new xO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>yw(this.syncEngine,n,0),function(){return dw.v()?new dw:new uO}())}createSyncEngine(e,n){return function(s,i,o,a,l,d,h){const f=new UO(s,i,o,a,l,d);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(ri,"RemoteStore shutting down."),i.Ea.add(5),await Ul(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}sm.provider={build:()=>new sm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms="FirestoreClient";class tL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Dg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(ms,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ms,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sf(t,e){t.asyncQueue.verifyOperationInProgress(),q(ms,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await LC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nL(t);q(ms,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>fw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>fw(e.remoteStore,s)),t._onlineComponents=e}async function nL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(ms,"Using user provided OfflineComponentProvider");try{await Sf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await Sf(t,new Xu)}}else q(ms,"Using default OfflineComponentProvider"),await Sf(t,new eL(void 0));return t._offlineComponents}async function eN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(ms,"Using user provided OnlineComponentProvider"),await vw(t,t._uninitializedComponentsProvider._online)):(q(ms,"Using default OnlineComponentProvider"),await vw(t,new sm))),t._onlineComponents}function rL(t){return eN(t).then(e=>e.syncEngine)}async function Ju(t){const e=await eN(t),n=e.eventManager;return n.onListen=BO.bind(null,e.syncEngine),n.onUnlisten=WO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qO.bind(null,e.syncEngine),n}function sL(t,e,n,r){const s=new iy(r),i=new ny(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Zg(await Ju(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>ey(await Ju(t),i))}}function iL(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new iy({next:m=>{h.Nu(),o.enqueueAndForget(()=>ey(i,f));const _=m.docs.has(a);!_&&m.fromCache?d.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new ny(Kd(a.path),h,{includeMetadataChanges:!0,Ka:!0});return Zg(i,f)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}function oL(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new iy({next:m=>{h.Nu(),o.enqueueAndForget(()=>ey(i,f)),m.fromCache&&l.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new ny(a,h,{includeMetadataChanges:!0,Ka:!0});return Zg(i,f)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}function aL(t,e){const n=new nr;return t.asyncQueue.enqueueAndForget(async()=>HO(await rL(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL="ComponentProvider",ww=new Map;function cL(t,e,n,r,s){return new bD(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,tN(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="firestore.googleapis.com",xw=!0;class Ew{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nN,this.ssl=xw}else this.host=e.host,this.ssl=e.ssl??xw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Lj)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tN(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ew({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ew(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aD;switch(r.type){case"firstParty":return new dD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ww.get(n);r&&(q(lL,"Removing Datastore"),ww.delete(n),r.terminate())}(this),Promise.resolve()}}function uL(t,e,n,r={}){var d;t=qt(t,rh);const s=gr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Ld(`https://${a}`),Md("Firestore",!0)),i.host!==nN&&i.host!==a&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!ls(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=mt.MOCK_USER;else{h=xg(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new mt(m)}t._authCredentials=new lD(new WI(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fi(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ll(n,Le._jsonSchema))return new Le(e,r||null,new G(we.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:We("string",Le._jsonSchemaVersion),referencePath:We("string")};class rs extends fi{constructor(e,n,r){super(e,n,Kd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new G(e))}withConverter(e){return new rs(this.firestore,e,this._path)}}function pi(t,e,...n){if(t=Se(t),qI("collection","path",e),t instanceof rh){const r=we.fromString(e,...n);return O0(r),new rs(t,null,r)}{if(!(t instanceof Le||t instanceof rs))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return O0(r),new rs(t.firestore,null,r)}}function rn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Dg.newId()),qI("doc","path",e),t instanceof rh){const r=we.fromString(e,...n);return j0(r),new Le(t,null,new G(r))}{if(!(t instanceof Le||t instanceof rs))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return j0(r),new Le(t.firestore,t instanceof rs?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="AsyncQueue";class Iw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new VC(this,"async_queue_retry"),this._c=()=>{const r=Nf();r&&q(Tw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Nf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Nf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new nr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ro(e))throw e;q(Tw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,dr("INTERNAL UNHANDLED ERROR: ",Cw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Xg.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Cw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Cw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gs extends rh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Iw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iw(e),this._firestoreClient=void 0,await e}}}function dL(t,e){const n=typeof t=="object"?t:Ud(),r=typeof t=="string"?t:$u,s=Al(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=vg("firestore");i&&uL(s,...i)}return s}function sh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||hL(t),t._firestoreClient}function hL(t){var r,s,i,o;const e=t._freezeSettings(),n=cL(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new tL(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zt(ut.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ll(e,Zt._jsonSchema))return Zt.fromBase64String(e.bytes)}}Zt._jsonSchemaVersion="firestore/bytes/1.0",Zt._jsonSchema={type:We("string",Zt._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Un._jsonSchemaVersion}}static fromJSON(e){if(Ll(e,Un._jsonSchema))return new Un(e.latitude,e.longitude)}}Un._jsonSchemaVersion="firestore/geoPoint/1.0",Un._jsonSchema={type:We("string",Un._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ll(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new En(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:We("string",En._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=/^__.*__$/;class pL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vl(e,this.data,n,this.fieldTransforms)}}class rN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class ay{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ay({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Zu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(sN(this.dataSource)&&fL.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class mL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||eh(e)}createContext(e,n,r,s=!1){return new ay({dataSource:e,methodName:n,targetDoc:r,path:at.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oh(t){const e=t._freezeSettings(),n=eh(t._databaseId);return new mL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iN(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);cy("Data must be an object, but it was:",o,r);const a=oN(r,o);let l,d;if(i.merge)l=new $t(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=go(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cN(h,m)||h.push(m)}l=new $t(h),d=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,d=o.fieldTransforms;return new pL(new Pt(a),l,d)}class ah extends ih{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ah}}class ly extends ih{_toFieldTransform(e){return new nj(e.path,new fl)}isEqual(e){return e instanceof ly}}function gL(t,e,n,r){const s=t.createContext(1,e,n);cy("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Is(r,(l,d)=>{const h=lN(e,l,n);d=Se(d);const f=s.childContextForFieldPath(h);if(d instanceof ah)i.push(h);else{const m=zl(d,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new $t(i);return new rN(o,a,s.fieldTransforms)}function yL(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[go(e,r,n)],l=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(go(e,i[m])),l.push(i[m+1]);const d=[],h=Pt.empty();for(let m=a.length-1;m>=0;--m)if(!cN(d,a[m])){const _=a[m];let T=l[m];T=Se(T);const b=o.childContextForFieldPath(_);if(T instanceof ah)d.push(_);else{const R=zl(T,b);R!=null&&(d.push(_),h.set(_,R))}}const f=new $t(d);return new rN(h,f,o.fieldTransforms)}function _L(t,e,n,r=!1){return zl(n,t.createContext(r?4:3,e))}function zl(t,e){if(aN(t=Se(t)))return cy("Unsupported field value:",e,t),oN(t,e);if(t instanceof ih)return function(r,s){if(!sN(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=zl(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ZD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=de.fromDate(r);return{timestampValue:Ku(s.serializer,i)}}if(r instanceof de){const i=new de(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ku(s.serializer,i)}}if(r instanceof Un)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zt)return{bytesValue:NC(s.serializer,r._byteString)};if(r instanceof Le){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof En)return function(o,a){const l=o instanceof En?o.toArray():o;return{mapValue:{fields:{[eC]:{stringValue:tC},[Wu]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Fg(a.serializer,h)})}}}}}}(r,s);if(DC(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Wd(r)}`)}(t,e)}function oN(t,e){const n={};return KI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Is(t,(r,s)=>{const i=zl(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function aN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof de||t instanceof Un||t instanceof Zt||t instanceof Le||t instanceof ih||t instanceof En||DC(t))}function cy(t,e,n){if(!aN(n)||!HI(n)){const r=Wd(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function go(t,e,n){if((e=Se(e))instanceof oy)return e._internalPath;if(typeof e=="string")return lN(t,e);throw Zu("Field path arguments must be of type string or ",t,!1,void 0,n)}const vL=new RegExp("[~\\*/\\[\\]]");function lN(t,e,n){if(e.search(vL)>=0)throw Zu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new oy(...e.split("."))._internalPath}catch{throw Zu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(V.INVALID_ARGUMENT,a+t+l)}function cN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wL{convertValue(e,n="none"){switch(fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Is(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Wu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Fe(o.doubleValue));return new En(n)}convertGeoPoint(e){return new Un(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ul(e));default:return null}}convertTimestamp(e){const n=ds(e);return new de(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);me(PC(r),9688,{name:e});const s=new dl(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||dr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy extends wL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function bf(){return new ly("serverTimestamp")}const Nw="@firebase/firestore",Sw="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(go("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class xL extends uN{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dy{}class EL extends dy{}function $l(t,e,...n){let r=[];e instanceof dy&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof hy).length,a=i.filter(l=>l instanceof lh).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class lh extends EL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lh(e,n,r)}_apply(e){const n=this._parse(e);return hN(e._query,n),new fi(e.firestore,e.converter,Kp(e._query,n))}_parse(e){const n=oh(e.firestore);return function(i,o,a,l,d,h,f){let m;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Rw(f,h);const T=[];for(const b of f)T.push(kw(l,i,b));m={arrayValue:{values:T}}}else m=kw(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Rw(f,h),m=_L(a,o,f,h==="in"||h==="not-in");return $e.create(d,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function yo(t,e,n){const r=e,s=go("where",t);return lh._create(s,r,n)}class hy extends dy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)hN(o,l),o=Kp(o,l)}(e._query,n),new fi(e.firestore,e.converter,Kp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function kw(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cC(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!G.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $0(t,new G(r))}if(n instanceof Le)return $0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wd(n)}.`)}function Rw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hN(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function fN(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gs extends uN{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new su(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(go("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gs._jsonSchema={type:We("string",Gs._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class su extends Gs{data(e={}){return super.data(e)}}class Ks{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new su(this._firestore,this._userDataWriter,r.key,r,new xa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new su(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new su(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:TL(a.type),doc:l,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ks._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ks._jsonSchemaVersion="firestore/querySnapshot/1.0",Ks._jsonSchema={type:We("string",Ks._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t){t=qt(t,Le);const e=qt(t.firestore,gs),n=sh(e);return iL(n,t._key).then(r=>gN(e,t,r))}function fy(t){t=qt(t,fi);const e=qt(t.firestore,gs),n=sh(e),r=new uy(e);return dN(t._query),oL(n,t._query).then(s=>new Ks(e,r,t,s))}function IL(t,e,n){t=qt(t,Le);const r=qt(t.firestore,gs),s=fN(t.converter,e),i=oh(r);return py(r,[iN(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,xn.none())])}function gl(t,e,n,...r){t=qt(t,Le);const s=qt(t.firestore,gs),i=oh(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof oy?yL(i,"updateDoc",t._key,e,n,r):gL(i,"updateDoc",t._key,e),py(s,[o.toMutation(t._key,xn.exists(!0))])}function pN(t,e){const n=qt(t.firestore,gs),r=rn(t),s=fN(t.converter,e),i=oh(t.firestore);return py(n,[iN(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,xn.exists(!1))]).then(()=>r)}function mN(t,...e){var d,h,f;t=Se(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||bw(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(bw(e[r])){const m=e[r];e[r]=(d=m.next)==null?void 0:d.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof Le)o=qt(t.firestore,gs),a=Kd(t._key.path),i={next:m=>{e[r]&&e[r](gN(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=qt(t,fi);o=qt(m.firestore,gs),a=m._query;const _=new uy(o);i={next:T=>{e[r]&&e[r](new Ks(o,_,m,T))},error:e[r+1],complete:e[r+2]},dN(t._query)}const l=sh(o);return sL(l,a,s,i)}function py(t,e){const n=sh(t);return aL(n,e)}function gN(t,e,n){const r=n.docs.get(e._key),s=new uy(t);return new Gs(t,s,e._key,r,new xa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){oD(Es),cs(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new gs(new cD(r.getProvider("auth-internal")),new hD(o,r.getProvider("app-check-internal")),kD(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),nn(Nw,Sw,e),nn(Nw,Sw,"esm2020")})();var Aw={};const Pw="@firebase/database",Dw="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yN="";function CL(t){yN=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:il(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return yr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NL(e)}}catch{}return new SL},Ws=_N("localStorage"),bL=_N("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Fd("@firebase/database"),kL=function(){let t=1;return function(){return t++}}(),vN=function(t){const e=AR(t),n=new SR;n.update(e);const r=n.digest();return _g.encodeByteArray(r)},ql=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ql.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Ma=null,jw=!0;const RL=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ji.logLevel=se.VERBOSE,Ma=Ji.log.bind(Ji)},_t=function(...t){if(jw===!0&&(jw=!1,Ma===null&&bL.get("logging_enabled")===!0&&RL()),Ma){const e=ql.apply(null,t);Ma(e)}},Hl=function(t){return function(...e){_t(t,...e)}},im=function(...t){const e="FIREBASE INTERNAL ERROR: "+ql(...t);Ji.error(e)},fr=function(...t){const e=`FIREBASE FATAL ERROR: ${ql(...t)}`;throw Ji.error(e),new Error(e)},Ht=function(...t){const e="FIREBASE WARNING: "+ql(...t);Ji.warn(e)},AL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},wN=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},PL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_o="[MIN_NAME]",si="[MAX_NAME]",Po=function(t,e){if(t===e)return 0;if(t===_o||e===si)return-1;if(e===_o||t===si)return 1;{const n=Ow(t),r=Ow(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DL=function(t,e){return t===e?0:t<e?-1:1},la=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},my=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=my(t[e[r]]);return n+="}",n},xN=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ft(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const EN=function(t){B(!wN(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(l=n;l;l-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)d.push(i%2?1:0),i=Math.floor(i/2);d.push(s?1:0),d.reverse();const h=d.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},jL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function LL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ML=new RegExp("^-?(0*)\\d{1,10}$"),VL=-2147483648,FL=2147483647,Ow=function(t){if(ML.test(t)){const e=Number(t);if(e>=VL&&e<=FL)return e}return null},Gl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},UL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Va=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,At(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ht(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ht(e)}}class iu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}iu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="5",TN="v",IN="s",CN="r",NN="f",SN=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bN="ls",kN="p",om="ac",RN="websocket",AN="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,d=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ws.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ws.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $L(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function DN(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===RN)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===AN)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$L(t)&&(n.ns=t.namespace);const s=[];return Ft(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(){this.counters_={}}incrementCounter(e,n=1){yr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return oR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={},Rf={};function yy(t){const e=t.toString();return kf[e]||(kf[e]=new WL),kf[e]}function qL(t,e){const n=t.toString();return Rf[n]||(Rf[n]=e()),Rf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Gl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="start",GL="close",KL="pLPCommand",QL="pRTLPCB",jN="id",ON="pw",LN="ser",YL="cb",XL="seg",JL="ts",ZL="d",e4="dframe",MN=1870,VN=30,t4=MN-VN,n4=25e3,r4=3e4;class Fi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Hl(e),this.stats_=yy(n),this.urlFn=l=>(this.appCheckToken&&(l[om]=this.appCheckToken),DN(n,AN,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new HL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(r4)),PL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _y((...i)=>{const[o,a,l,d,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lw)this.id=a,this.password=l;else if(o===GL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Lw]="t",r[LN]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[YL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[TN]=gy,this.transportSessionId&&(r[IN]=this.transportSessionId),this.lastSessionId&&(r[bN]=this.lastSessionId),this.applicationId&&(r[kN]=this.applicationId),this.appCheckToken&&(r[om]=this.appCheckToken),typeof location<"u"&&location.hostname&&SN.test(location.hostname)&&(r[CN]=NN);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fi.forceAllow_=!0}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){return Fi.forceAllow_?!0:!Fi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jL()&&!OL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=$T(n),s=xN(r,t4);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[e4]="t",r[jN]=e,r[ON]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _y{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kL(),window[KL+this.uniqueCallbackIdentifier]=e,window[QL+this.uniqueCallbackIdentifier]=n,this.myIFrame=_y.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jN]=this.myID,e[ON]=this.myPW,e[LN]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+VN+r.length<=MN;){const o=this.pendingSegs.shift();r=r+"&"+XL+s+"="+o.seg+"&"+JL+s+"="+o.ts+"&"+ZL+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(n4)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s4=16384,i4=45e3;let ed=null;typeof MozWebSocket<"u"?ed=MozWebSocket:typeof WebSocket<"u"&&(ed=WebSocket);class pn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Hl(this.connId),this.stats_=yy(n),this.connURL=pn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[TN]=gy,typeof location<"u"&&location.hostname&&SN.test(location.hostname)&&(o[CN]=NN),n&&(o[IN]=n),r&&(o[bN]=r),s&&(o[om]=s),i&&(o[kN]=i),DN(e,RN,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ws.set("previous_websocket_failure",!0);try{let r;_R(),this.mySock=new ed(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ed!==null&&!pn.forceDisallow_}static previouslyFailed(){return Ws.isInMemoryStorage||Ws.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ws.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=il(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xN(n,s4);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(i4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pn.responsesRequiredToBeHealthy=2;pn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{static get ALL_TRANSPORTS(){return[Fi,pn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=pn&&pn.isAvailable();let r=n&&!pn.previouslyFailed();if(e.webSocketOnly&&(n||Ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[pn];else{const s=this.transports_=[];for(const i of yl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);yl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o4=6e4,a4=5e3,l4=10*1024,c4=100*1024,Af="t",Mw="d",u4="s",Vw="r",d4="e",Fw="o",Uw="a",Bw="n",zw="p",h4="h";class f4{constructor(e,n,r,s,i,o,a,l,d,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=d,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Hl("c:"+this.id+":"),this.transportManager_=new yl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Va(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>c4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>l4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Af in e){const n=e[Af];n===Uw?this.upgradeIfSecondaryHealthy_():n===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=la("t",e),r=la("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=la("t",e),r=la("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=la(Af,e);if(Mw in e){const r=e[Mw];if(n===h4){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Bw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===u4?this.onConnectionShutdown_(r):n===Vw?this.onReset_(r):n===d4?im("Server Error: "+r):n===Fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):im("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gy!==r&&Ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Va(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(o4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Va(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(a4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ws.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td extends UN{static getInstance(){return new td}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=32,Ww=768;class _e{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new _e("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ys(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _e(t.pieces_,e)}function BN(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function p4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zN(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function $N(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _e(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof _e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new _e(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return jt(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function vy(t,e){if(ys(t)!==ys(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function gn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ys(t)>ys(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class m4{constructor(e,n){this.errorPrefix_=n,this.parts_=zN(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Vd(this.parts_[r]);WN(this)}}function g4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vd(e),WN(t)}function y4(t){const e=t.parts_.pop();t.byteLength_-=Vd(e),t.parts_.length>0&&(t.byteLength_-=1)}function WN(t){if(t.byteLength_>Ww)throw new Error(t.errorPrefix_+"has a key path longer than "+Ww+" bytes ("+t.byteLength_+").");if(t.parts_.length>$w)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$w+") or object contains a cycle "+Fs(t))}function Fs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy extends UN{static getInstance(){return new wy}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca=1e3,_4=60*5*1e3,qw=30*1e3,v4=1.3,w4=3e4,x4="server_kill",Hw=3;class rr extends FN{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rr.nextPersistentConnectionId_++,this.log_=Hl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ca,this.maxReconnectDelay_=_4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&td.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(nt(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new wg,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,d=a.s;rr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(d,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&yr(e,"w")){const r=lo(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):im("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>w4&&(this.reconnectDelay_=ca),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*v4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+rr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},d=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:d};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new f4(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Ht(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(x4)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ht(f),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pp(this.interruptReasons_)&&(this.reconnectDelay_=ca,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>my(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new _e(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hw&&(this.reconnectDelay_=qw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yN.replace(/\./g,"-")]=1,Eg()?e["framework.cordova"]=1:KT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=td.getInstance().currentlyOnline();return Pp(this.interruptReasons_)&&e}}rr.nextPersistentConnectionId_=0;rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new re(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new re(_o,e),s=new re(_o,n);return this.compare(r,s)!==0}minPost(){return re.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc;class qN extends ch{static get __EMPTY_NODE(){return Dc}static set __EMPTY_NODE(e){Dc=e}compare(e,n){return Po(e.name,n.name)}isDefinedOn(e){throw Co("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return re.MIN}maxPost(){return new re(si,Dc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new re(e,Dc)}toString(){return".key"}}const Zi=new qN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??Ot.EMPTY_NODE,this.right=i??Ot.EMPTY_NODE}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ot.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ot.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class E4{copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ot{constructor(e,n=Ot.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ot(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Ot(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new jc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new jc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new jc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new jc(this.root_,null,this.comparator_,!0,e)}}Ot.EMPTY_NODE=new E4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T4(t,e){return Po(t.name,e.name)}function xy(t,e){return Po(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am;function I4(t){am=t}const HN=function(t){return typeof t=="number"?"number:"+EN(t):"string:"+t},GN=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&yr(e,".sv"),"Priority must be a string or number.")}else B(t===am||t.isEmpty(),"priority of unexpected type.");B(t===am||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gw;class Je{static set __childrenNodeConstructor(e){Gw=e}static get __childrenNodeConstructor(){return Gw}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),GN(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ie(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||ys(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+HN(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=EN(this.value_):e+=this.value_,this.lazyHash_=vN(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KN,QN;function C4(t){KN=t}function N4(t){QN=t}class S4 extends ch{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Po(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return re.MIN}maxPost(){return new re(si,new Je("[PRIORITY-POST]",QN))}makePost(e,n){const r=KN(e);return new re(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new S4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4=Math.log(2);class k4{constructor(e){const n=i=>parseInt(Math.log(i)/b4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nd=function(t,e,n,r){t.sort(e);const s=function(l,d){const h=d-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new tt(m,f.node,tt.BLACK,null,null);{const _=parseInt(h/2,10)+l,T=s(l,_),b=s(_+1,d);return f=t[_],m=n?n(f):f,new tt(m,f.node,tt.BLACK,T,b)}},i=function(l){let d=null,h=null,f=t.length;const m=function(T,b){const R=f-T,x=f;f-=T;const w=s(R+1,x),N=t[R],j=n?n(N):N;_(new tt(j,N.node,b,null,w))},_=function(T){d?(d.left=T,d=T):(h=T,d=T)};for(let T=0;T<l.count;++T){const b=l.nextBitIsOne(),R=Math.pow(2,l.count-(T+1));b?m(R,tt.BLACK):(m(R,tt.BLACK),m(R,tt.RED))}return h},o=new k4(t.length),a=i(o);return new Ot(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pf;const xi={};class Zn{static get Default(){return B(xi&&Me,"ChildrenNode.ts has not been loaded"),Pf=Pf||new Zn({".priority":xi},{".priority":Me}),Pf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=lo(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ot?n:null}hasIndex(e){return yr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(re.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=nd(r,e.getCompare()):a=xi;const l=e.toString(),d={...this.indexSet_};d[l]=e;const h={...this.indexes_};return h[l]=a,new Zn(h,d)}addToIndexes(e,n){const r=Du(this.indexes_,(s,i)=>{const o=lo(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===xi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(re.Wrap);let d=l.getNext();for(;d;)d.name!==e.name&&a.push(d),d=l.getNext();return a.push(e),nd(a,o.getCompare())}else return xi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new re(e.name,a))),l.insert(e,e.node)}});return new Zn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Du(this.indexes_,s=>{if(s===xi)return s;{const i=n.get(e.name);return i?s.remove(new re(e.name,i)):s}});return new Zn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua;class Y{static get EMPTY_NODE(){return ua||(ua=new Y(new Ot(xy),null,Zn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&GN(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ua}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ua:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new re(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ua:this.priorityNode_;return new Y(s,o,i)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{B(ie(e)!==".priority"||ys(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,i&&Y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+HN(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vN(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new re(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new re(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new re(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,re.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Kl?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),s=n.getIterator(Me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class R4 extends Y{constructor(){super(new Ot(xy),Y.EMPTY_NODE,Zn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Kl=new R4;Object.defineProperties(re,{MIN:{value:new re(_o,Y.EMPTY_NODE)},MAX:{value:new re(si,Kl)}});qN.__EMPTY_NODE=Y.EMPTY_NODE;Je.__childrenNodeConstructor=Y;I4(Kl);N4(Kl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A4=!0;function vt(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,vt(e))}if(!(t instanceof Array)&&A4){const n=[];let r=!1;if(Ft(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=vt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new re(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const i=nd(n,T4,o=>o.name,xy);if(r){const o=nd(n,Me.getCompare());return new Y(i,vt(e),new Zn({".priority":o},{".priority":Me}))}else return new Y(i,vt(e),Zn.Default)}else{let n=Y.EMPTY_NODE;return Ft(t,(r,s)=>{if(yr(t,r)&&r.substring(0,1)!=="."){const i=vt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(vt(e))}}C4(vt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P4 extends ch{constructor(e){super(),this.indexPath_=e,B(!oe(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Po(e.name,n.name):i}makePost(e,n){const r=vt(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new re(n,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Kl);return new re(si,e)}toString(){return zN(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4 extends ch{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Po(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return re.MIN}maxPost(){return re.MAX}makePost(e,n){const r=vt(e);return new re(n,r)}toString(){return".value"}}const j4=new D4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(t){return{type:"value",snapshotNode:t}}function vo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _l(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function vl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function O4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(_l(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(vo(n,r)):o.trackChildChange(vl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(s,i)=>{n.hasChild(s)||r.trackChildChange(_l(s,i))}),n.isLeafNode()||n.forEachChild(Me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(vl(s,i,o))}else r.trackChildChange(vo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this.indexedFilter_=new Ey(e.getIndex()),this.index_=e.getIndex(),this.startPost_=wl.getStartPost_(e),this.endPost_=wl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new re(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const i=this;return n.forEachChild(Me,(o,a)=>{i.matches(new re(o,a))||(s=s.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new wl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new re(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new re(n,r),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,d,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(h&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(vl(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(_l(n,f));const b=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(vo(m.name,m.node)),b.updateImmediateChild(m.name,m.node)):b}}else return r.isEmpty()?e:h&&o(d,l)>=0?(i!=null&&(i.trackChildChange(_l(d.name,d.node)),i.trackChildChange(vo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(d.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_o}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:si}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new Ty;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function M4(t){return t.loadsAllData()?new Ey(t.getIndex()):t.hasLimit()?new L4(t):new wl(t)}function Kw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===j4?n="$value":t.index_===Zi?n="$key":(B(t.index_ instanceof P4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd extends FN{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Hl("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=rd.getListenId_(e,r),a={};this.listens_[o]=a;const l=Kw(e._queryParams);this.restRequest_(i+".json",l,(d,h)=>{let f=h;if(d===404&&(f=null,d=null),d===null&&this.onDataUpdate_(i,f,!1,r),lo(this.listens_,o)===a){let m;d?d===401?m="permission_denied":m="rest_error:"+d:m="ok",s(m,null)}})}unlisten(e,n){const r=rd.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Kw(e._queryParams),r=e._path.toString(),s=new wg;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+No(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=il(a.responseText)}catch{Ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(){return{value:null,children:new Map}}function XN(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,sd());const s=t.children.get(r);e=ve(e),XN(s,e,n)}}function lm(t,e,n){t.value!==null?n(e,t.value):F4(t,(r,s)=>{const i=new _e(e.toString()+"/"+r);lm(s,i,n)})}function F4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ft(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=10*1e3,B4=30*1e3,z4=5*60*1e3;class $4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new U4(e);const r=Yw+(B4-Yw)*Math.random();Va(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ft(e,(s,i)=>{i>0&&yr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Va(this.reportStats_.bind(this),Math.floor(Math.random()*2*z4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yn||(yn={}));function JN(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Iy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Cy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yn.ACK_USER_WRITE,this.source=JN()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new _e(e));return new id(pe(),n,this.revert)}}else return B(ie(this.path)===e,"operationForChild called for unrelated child."),new id(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.source=e,this.path=n,this.type=yn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new xl(this.source,pe()):new xl(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yn.OVERWRITE}operationForChild(e){return oe(this.path)?new ii(this.source,pe(),this.snap.getImmediateChild(e)):new ii(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new _e(e));return n.isEmpty()?null:n.value?new ii(this.source,pe(),n.value):new El(this.source,pe(),n)}else return B(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new El(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function q4(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(O4(o.childName,o.snapshotNode))}),da(t,s,"child_removed",e,r,n),da(t,s,"child_added",e,r,n),da(t,s,"child_moved",i,r,n),da(t,s,"child_changed",e,r,n),da(t,s,"value",e,r,n),s}function da(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>G4(t,a,l)),o.forEach(a=>{const l=H4(t,a,i);s.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(l,t.query_))})})}function H4(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function G4(t,e,n){if(e.childName==null||n.childName==null)throw Co("Should only compare child_ events.");const r=new re(e.childName,e.snapshotNode),s=new re(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e){return{eventCache:t,serverCache:e}}function Fa(t,e,n,r){return uh(new oi(e,n,r),t.serverCache)}function ZN(t,e,n,r){return uh(t.eventCache,new oi(e,n,r))}function cm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ai(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df;const K4=()=>(Df||(Df=new Ot(DL)),Df);class Ce{static fromObject(e){let n=new Ce(null);return Ft(e,(r,s)=>{n=n.set(new _e(r),s)}),n}constructor(e,n=K4()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const r=ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ke(new _e(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new Ce(null)}}set(e,n){if(oe(e))return new Ce(n,this.children);{const r=ie(e),i=(this.children.get(r)||new Ce(null)).set(ve(e),n),o=this.children.insert(r,i);return new Ce(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const s=r.remove(ve(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ie(e),i=(this.children.get(r)||new Ce(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ce(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ke(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ke(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=ie(e),i=this.children.get(s);return i?i.foreachOnPath_(ve(e),Ke(n,s),r):new Ce(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.writeTree_=e}static empty(){return new Tn(new Ce(null))}}function Ua(t,e,n){if(oe(e))return new Tn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=jt(s,e);return i=i.updateChild(o,n),new Tn(t.writeTree_.set(s,i))}else{const s=new Ce(n),i=t.writeTree_.setTree(e,s);return new Tn(i)}}}function Xw(t,e,n){let r=t;return Ft(n,(s,i)=>{r=Ua(r,Ke(e,s),i)}),r}function Jw(t,e){if(oe(e))return Tn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new Tn(n)}}function um(t,e){return mi(t,e)!=null}function mi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function Zw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,s)=>{e.push(new re(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new re(r,s.value))}),e}function ss(t,e){if(oe(e))return t;{const n=mi(t,e);return n!=null?new Tn(new Ce(n)):new Tn(t.writeTree_.subtree(e))}}function dm(t){return t.writeTree_.isEmpty()}function wo(t,e){return eS(pe(),t.writeTree_,e)}function eS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=eS(Ke(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(t,e){return sS(e,t)}function Q4(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ua(t.visibleWrites,e,n)),t.lastWriteId=r}function Y4(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function X4(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&J4(a,r.path)?s=!1:gn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Z4(t),!0;if(r.snap)t.visibleWrites=Jw(t.visibleWrites,r.path);else{const a=r.children;Ft(a,l=>{t.visibleWrites=Jw(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function J4(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(Ke(t.path,n),e))return!0;return!1}function Z4(t){t.visibleWrites=tS(t.allWrites,eM,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eM(t){return t.visible}function tS(t,e,n){let r=Tn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)gn(n,o)?(a=jt(n,o),r=Ua(r,a,i.snap)):gn(o,n)&&(a=jt(o,n),r=Ua(r,pe(),i.snap.getChild(a)));else if(i.children){if(gn(n,o))a=jt(n,o),r=Xw(r,a,i.children);else if(gn(o,n))if(a=jt(o,n),oe(a))r=Xw(r,pe(),i.children);else{const l=lo(i.children,ie(a));if(l){const d=l.getChild(ve(a));r=Ua(r,pe(),d)}}}else throw Co("WriteRecord should have .snap or .children")}}return r}function nS(t,e,n,r,s){if(!r&&!s){const i=mi(t.visibleWrites,e);if(i!=null)return i;{const o=ss(t.visibleWrites,e);if(dm(o))return n;if(n==null&&!um(o,pe()))return null;{const a=n||Y.EMPTY_NODE;return wo(o,a)}}}else{const i=ss(t.visibleWrites,e);if(!s&&dm(i))return n;if(!s&&n==null&&!um(i,pe()))return null;{const o=function(d){return(d.visible||s)&&(!r||!~r.indexOf(d.writeId))&&(gn(d.path,e)||gn(e,d.path))},a=tS(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return wo(a,l)}}}function tM(t,e,n){let r=Y.EMPTY_NODE;const s=mi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=ss(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=wo(ss(i,new _e(o)),a);r=r.updateImmediateChild(o,l)}),Zw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ss(t.visibleWrites,e);return Zw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function nM(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,n);if(um(t.visibleWrites,i))return null;{const o=ss(t.visibleWrites,i);return dm(o)?s.getChild(n):wo(o,s.getChild(n))}}function rM(t,e,n,r){const s=Ke(e,n),i=mi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=ss(t.visibleWrites,s);return wo(o,r.getNode().getImmediateChild(n))}else return null}function sM(t,e){return mi(t.visibleWrites,e)}function iM(t,e,n,r,s,i,o){let a;const l=ss(t.visibleWrites,e),d=mi(l,pe());if(d!=null)a=d;else if(n!=null)a=wo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<s;)f(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function oM(){return{visibleWrites:Tn.empty(),allWrites:[],lastWriteId:-1}}function od(t,e,n,r){return nS(t.writeTree,t.treePath,e,n,r)}function Sy(t,e){return tM(t.writeTree,t.treePath,e)}function ex(t,e,n,r){return nM(t.writeTree,t.treePath,e,n,r)}function ad(t,e){return sM(t.writeTree,Ke(t.treePath,e))}function aM(t,e,n,r,s,i){return iM(t.writeTree,t.treePath,e,n,r,s,i)}function by(t,e,n){return rM(t.writeTree,t.treePath,e,n)}function rS(t,e){return sS(Ke(t.treePath,e),t.writeTree)}function sS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,vl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,_l(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,vo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,vl(r,e.snapshotNode,s.oldSnap));else throw Co("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const iS=new cM;class ky{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new oi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return by(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ai(this.viewCache_),i=aM(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uM(t){return{filter:t}}function dM(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hM(t,e,n,r,s){const i=new lM;let o,a;if(n.type===yn.OVERWRITE){const d=n;d.source.fromUser?o=hm(t,e,d.path,d.snap,r,s,i):(B(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!oe(d.path),o=ld(t,e,d.path,d.snap,r,s,a,i))}else if(n.type===yn.MERGE){const d=n;d.source.fromUser?o=pM(t,e,d.path,d.children,r,s,i):(B(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=fm(t,e,d.path,d.children,r,s,a,i))}else if(n.type===yn.ACK_USER_WRITE){const d=n;d.revert?o=yM(t,e,d.path,r,s,i):o=mM(t,e,d.path,d.affectedTree,r,s,i)}else if(n.type===yn.LISTEN_COMPLETE)o=gM(t,e,n.path,r,i);else throw Co("Unknown operation type: "+n.type);const l=i.getChanges();return fM(e,o,l),{viewCache:o,changes:l}}function fM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=cm(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(YN(cm(e)))}}function oS(t,e,n,r,s,i){const o=e.eventCache;if(ad(r,n)!=null)return e;{let a,l;if(oe(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=ai(e),h=d instanceof Y?d:Y.EMPTY_NODE,f=Sy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const d=od(r,ai(e));a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const d=ie(n);if(d===".priority"){B(ys(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=ex(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=ve(n);let f;if(o.isCompleteForChild(d)){l=e.serverCache.getNode();const m=ex(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(d).updateChild(h,m):f=o.getNode().getImmediateChild(d)}else f=by(r,d,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),d,f,h,s,i):a=o.getNode()}}return Fa(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function ld(t,e,n,r,s,i,o,a){const l=e.serverCache;let d;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))d=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);d=h.updateFullNode(l.getNode(),_,null)}else{const _=ie(n);if(!l.isCompleteForPath(n)&&ys(n)>1)return e;const T=ve(n),R=l.getNode().getImmediateChild(_).updateChild(T,r);_===".priority"?d=h.updatePriority(l.getNode(),R):d=h.updateChild(l.getNode(),_,R,T,iS,null)}const f=ZN(e,d,l.isFullyInitialized()||oe(n),h.filtersNodes()),m=new ky(s,f,i);return oS(t,f,n,s,m,a)}function hm(t,e,n,r,s,i,o){const a=e.eventCache;let l,d;const h=new ky(s,e,i);if(oe(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Fa(e,d,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),l=Fa(e,d,a.isFullyInitialized(),a.isFiltered());else{const m=ve(n),_=a.getNode().getImmediateChild(f);let T;if(oe(m))T=r;else{const b=h.getCompleteChild(f);b!=null?BN(m)===".priority"&&b.getChild($N(m)).isEmpty()?T=b:T=b.updateChild(m,r):T=Y.EMPTY_NODE}if(_.equals(T))l=e;else{const b=t.filter.updateChild(a.getNode(),f,T,m,h,o);l=Fa(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function tx(t,e){return t.eventCache.isCompleteForChild(e)}function pM(t,e,n,r,s,i,o){let a=e;return r.foreach((l,d)=>{const h=Ke(n,l);tx(e,ie(h))&&(a=hm(t,a,h,d,s,i,o))}),r.foreach((l,d)=>{const h=Ke(n,l);tx(e,ie(h))||(a=hm(t,a,h,d,s,i,o))}),a}function nx(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function fm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,d;oe(n)?d=r:d=new Ce(null).setTree(n,r);const h=e.serverCache.getNode();return d.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),T=nx(t,_,m);l=ld(t,l,new _e(f),T,s,i,o,a)}}),d.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const T=e.serverCache.getNode().getImmediateChild(f),b=nx(t,T,m);l=ld(t,l,new _e(f),b,s,i,o,a)}}),l}function mM(t,e,n,r,s,i,o){if(ad(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ld(t,e,n,l.getNode().getChild(n),s,i,a,o);if(oe(n)){let d=new Ce(null);return l.getNode().forEachChild(Zi,(h,f)=>{d=d.set(new _e(h),f)}),fm(t,e,n,d,s,i,a,o)}else return e}else{let d=new Ce(null);return r.foreach((h,f)=>{const m=Ke(n,h);l.isCompleteForPath(m)&&(d=d.set(h,l.getNode().getChild(m)))}),fm(t,e,n,d,s,i,a,o)}}function gM(t,e,n,r,s){const i=e.serverCache,o=ZN(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return oS(t,o,n,r,iS,s)}function yM(t,e,n,r,s,i){let o;if(ad(r,n)!=null)return e;{const a=new ky(r,e,s),l=e.eventCache.getNode();let d;if(oe(n)||ie(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=od(r,ai(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),h=Sy(r,f)}h=h,d=t.filter.updateFullNode(l,h,i)}else{const h=ie(n);let f=by(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?d=t.filter.updateChild(l,h,f,ve(n),a,i):e.eventCache.getNode().hasChild(h)?d=t.filter.updateChild(l,h,Y.EMPTY_NODE,ve(n),a,i):d=l,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=od(r,ai(e)),o.isLeafNode()&&(d=t.filter.updateFullNode(d,o,i)))}return o=e.serverCache.isFullyInitialized()||ad(r,pe())!=null,Fa(e,d,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Ey(r.getIndex()),i=M4(r);this.processor_=uM(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),d=i.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),h=new oi(l,o.isFullyInitialized(),s.filtersNodes()),f=new oi(d,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=uh(f,h),this.eventGenerator_=new W4(this.query_)}get query(){return this.query_}}function vM(t){return t.viewCache_.serverCache.getNode()}function wM(t,e){const n=ai(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function rx(t){return t.eventRegistrations_.length===0}function xM(t,e){t.eventRegistrations_.push(e)}function sx(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function ix(t,e,n,r){e.type===yn.MERGE&&e.source.queryId!==null&&(B(ai(t.viewCache_),"We should always have a full cache before handling merges"),B(cm(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=hM(t.processor_,s,e,n,r);return dM(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,aS(t,i.changes,i.viewCache.eventCache.getNode(),null)}function EM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(i,o)=>{r.push(vo(i,o))}),n.isFullyInitialized()&&r.push(YN(n.getNode())),aS(t,r,n.getNode(),e)}function aS(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return q4(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cd;class TM{constructor(){this.views=new Map}}function IM(t){B(!cd,"__referenceConstructor has already been defined"),cd=t}function CM(){return B(cd,"Reference.ts has not been loaded"),cd}function NM(t){return t.views.size===0}function Ry(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),ix(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(ix(o,e,n,r));return i}}function SM(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=od(n,s?r:null),l=!1;a?l=!0:r instanceof Y?(a=Sy(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const d=uh(new oi(a,l,!1),new oi(r,s,!1));return new _M(e,d)}return o}function bM(t,e,n,r,s,i){const o=SM(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),xM(o,n),EM(o,n)}function kM(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=_s(t);if(s==="default")for(const[l,d]of t.views.entries())o=o.concat(sx(d,n,r)),rx(d)&&(t.views.delete(l),d.query._queryParams.loadsAllData()||i.push(d.query));else{const l=t.views.get(s);l&&(o=o.concat(sx(l,n,r)),rx(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!_s(t)&&i.push(new(CM())(e._repo,e._path)),{removed:i,events:o}}function lS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function eo(t,e){let n=null;for(const r of t.views.values())n=n||wM(r,e);return n}function cS(t,e){if(e._queryParams.loadsAllData())return dh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function uS(t,e){return cS(t,e)!=null}function _s(t){return dh(t)!=null}function dh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud;function RM(t){B(!ud,"__referenceConstructor has already been defined"),ud=t}function AM(){return B(ud,"Reference.ts has not been loaded"),ud}let PM=1;class ox{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=oM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DM(t,e,n,r,s){return Q4(t.pendingWriteTree_,e,n,r,s),s?Ql(t,new ii(JN(),e,n)):[]}function Ui(t,e,n=!1){const r=Y4(t.pendingWriteTree_,e);if(X4(t.pendingWriteTree_,e)){let i=new Ce(null);return r.snap!=null?i=i.set(pe(),!0):Ft(r.children,o=>{i=i.set(new _e(o),!0)}),Ql(t,new id(r.path,i,n))}else return[]}function hh(t,e,n){return Ql(t,new ii(Iy(),e,n))}function jM(t,e,n){const r=Ce.fromObject(n);return Ql(t,new El(Iy(),e,r))}function OM(t,e){return Ql(t,new xl(Iy(),e))}function LM(t,e,n){const r=Ay(t,n);if(r){const s=Py(r),i=s.path,o=s.queryId,a=jt(i,e),l=new xl(Cy(o),a);return Dy(t,i,l)}else return[]}function pm(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||uS(o,e))){const l=kM(o,e,n,r);NM(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const d=l.removed;if(a=l.events,!s){const h=d.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>_s(_));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=FM(m);for(let T=0;T<_.length;++T){const b=_[T],R=b.query,x=pS(t,b);t.listenProvider_.startListening(Ba(R),dd(t,R),x.hashFn,x.onComplete)}}}!f&&d.length>0&&!r&&(h?t.listenProvider_.stopListening(Ba(e),null):d.forEach(m=>{const _=t.queryToTagMap.get(fh(m));t.listenProvider_.stopListening(Ba(m),_)}))}UM(t,d)}return a}function MM(t,e,n,r){const s=Ay(t,r);if(s!=null){const i=Py(s),o=i.path,a=i.queryId,l=jt(o,e),d=new ii(Cy(a),l,n);return Dy(t,o,d)}else return[]}function VM(t,e,n,r){const s=Ay(t,r);if(s){const i=Py(s),o=i.path,a=i.queryId,l=jt(o,e),d=Ce.fromObject(n),h=new El(Cy(a),l,d);return Dy(t,o,h)}else return[]}function ax(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const T=jt(m,s);i=i||eo(_,T),o=o||_s(_)});let a=t.syncPointTree_.get(s);a?(o=o||_s(a),i=i||eo(a,pe())):(a=new TM,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,T)=>{const b=eo(T,pe());b&&(i=i.updateImmediateChild(_,b))}));const d=uS(a,e);if(!d&&!e._queryParams.loadsAllData()){const m=fh(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=BM();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=Ny(t.pendingWriteTree_,s);let f=bM(a,e,n,h,i,l);if(!d&&!o&&!r){const m=cS(a,e);f=f.concat(zM(t,e,m))}return f}function dS(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=jt(o,e),d=eo(a,l);if(d)return d});return nS(s,e,i,n,!0)}function Ql(t,e){return hS(e,t.syncPointTree_,null,Ny(t.pendingWriteTree_,pe()))}function hS(t,e,n,r){if(oe(t.path))return fS(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=eo(s,pe()));let i=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const d=n?n.getImmediateChild(o):null,h=rS(r,o);i=i.concat(hS(a,l,d,h))}return s&&(i=i.concat(Ry(s,t,r,n))),i}}function fS(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=eo(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,d=rS(r,o),h=t.operationForChild(o);h&&(i=i.concat(fS(h,a,l,d)))}),s&&(i=i.concat(Ry(s,t,r,n))),i}function pS(t,e){const n=e.query,r=dd(t,n);return{hashFn:()=>(vM(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?LM(t,n._path,r):OM(t,n._path);{const i=LL(s,n);return pm(t,n,null,i)}}}}function dd(t,e){const n=fh(e);return t.queryToTagMap.get(n)}function fh(t){return t._path.toString()+"$"+t._queryIdentifier}function Ay(t,e){return t.tagToQueryMap.get(e)}function Py(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _e(t.substr(0,e))}}function Dy(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Ny(t.pendingWriteTree_,e);return Ry(r,n,s,null)}function FM(t){return t.fold((e,n,r)=>{if(n&&_s(n))return[dh(n)];{let s=[];return n&&(s=lS(n)),Ft(r,(i,o)=>{s=s.concat(o)}),s}})}function Ba(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(AM())(t._repo,t._path):t}function UM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=fh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function BM(){return PM++}function zM(t,e,n){const r=e._path,s=dd(t,e),i=pS(t,n),o=t.listenProvider_.startListening(Ba(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!_s(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((d,h,f)=>{if(!oe(d)&&h&&_s(h))return[dh(h).query];{let m=[];return h&&(m=m.concat(lS(h).map(_=>_.query))),Ft(f,(_,T)=>{m=m.concat(T)}),m}});for(let d=0;d<l.length;++d){const h=l[d];t.listenProvider_.stopListening(Ba(h),dd(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jy(n)}node(){return this.node_}}class Oy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new Oy(this.syncTree_,n)}node(){return dS(this.syncTree_,this.path_)}}const $M=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},lx=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qM(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},qM=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},HM=function(t,e,n,r){return Ly(e,new Oy(n,t),r)},GM=function(t,e,n){return Ly(t,new jy(e),n)};function Ly(t,e,n){const r=t.getPriority().val(),s=lx(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=lx(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Je(a,vt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(Me,(a,l)=>{const d=Ly(l,e.getImmediateChild(a),n);d!==l&&(i=i.updateImmediateChild(a,d))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Vy(t,e){let n=e instanceof _e?e:new _e(e),r=t,s=ie(n);for(;s!==null;){const i=lo(r.node.children,s)||{children:{},childCount:0};r=new My(s,r,i),n=ve(n),s=ie(n)}return r}function Do(t){return t.node.value}function mS(t,e){t.node.value=e,mm(t)}function gS(t){return t.node.childCount>0}function KM(t){return Do(t)===void 0&&!gS(t)}function ph(t,e){Ft(t.node.children,(n,r)=>{e(new My(n,t,r))})}function yS(t,e,n,r){n&&e(t),ph(t,s=>{yS(s,e,!0)})}function QM(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Yl(t){return new _e(t.parent===null?t.name:Yl(t.parent)+"/"+t.name)}function mm(t){t.parent!==null&&YM(t.parent,t.name,t)}function YM(t,e,n){const r=KM(n),s=yr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,mm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,mm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=/[\[\].#$\/\u0000-\u001F\u007F]/,JM=/[\[\].#$\u0000-\u001F\u007F]/,jf=10*1024*1024,_S=function(t){return typeof t=="string"&&t.length!==0&&!XM.test(t)},vS=function(t){return typeof t=="string"&&t.length!==0&&!JM.test(t)},ZM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vS(t)},wS=function(t,e,n){const r=n instanceof _e?new m4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Fs(r));if(typeof e=="function")throw new Error(t+"contains a function "+Fs(r)+" with contents = "+e.toString());if(wN(e))throw new Error(t+"contains "+e.toString()+" "+Fs(r));if(typeof e=="string"&&e.length>jf/3&&Vd(e)>jf)throw new Error(t+"contains a string greater than "+jf+" utf8 bytes "+Fs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ft(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!_S(o)))throw new Error(t+" contains an invalid key ("+o+") "+Fs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);g4(r,o),wS(t,a,r),y4(r)}),s&&i)throw new Error(t+' contains ".value" child '+Fs(r)+" in addition to actual children.")}},xS=function(t,e,n,r){if(!vS(n))throw new Error(YT(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xS(t,e,n)},tV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_S(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ZM(n))throw new Error(YT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ES(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!vy(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function TS(t,e,n){ES(t,n),IS(t,r=>vy(r,e))}function gi(t,e,n){ES(t,n),IS(t,r=>gn(r,e)||gn(e,r))}function IS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(rV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ma&&_t("event: "+n.toString()),Gl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sV="repo_interrupt",iV=25;class oV{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sd(),this.transactionQueueTree_=new My,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aV(t,e,n){if(t.stats_=yy(t.repoInfo_),t.forceRestClient_||UL())t.server_=new rd(t.repoInfo_,(r,s,i,o)=>{cx(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ux(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rr(t.repoInfo_,e,(r,s,i,o)=>{cx(t,r,s,i,o)},r=>{ux(t,r)},r=>{cV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=qL(t.repoInfo_,()=>new $4(t.stats_,t.server_)),t.infoData_=new V4,t.infoSyncTree_=new ox({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=hh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fy(t,"connected",!1),t.serverSyncTree_=new ox({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const d=o(a,l);gi(t.eventQueue_,r._path,d)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function lV(t){const n=t.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function CS(t){return $M({timestamp:lV(t)})}function cx(t,e,n,r,s){t.dataUpdateCount++;const i=new _e(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Du(n,d=>vt(d));o=VM(t.serverSyncTree_,i,l,s)}else{const l=vt(n);o=MM(t.serverSyncTree_,i,l,s)}else if(r){const l=Du(n,d=>vt(d));o=jM(t.serverSyncTree_,i,l)}else{const l=vt(n);o=hh(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=By(t,i)),gi(t.eventQueue_,a,o)}function ux(t,e){Fy(t,"connected",e),e===!1&&dV(t)}function cV(t,e){Ft(e,(n,r)=>{Fy(t,n,r)})}function Fy(t,e,n){const r=new _e("/.info/"+e),s=vt(n);t.infoData_.updateSnapshot(r,s);const i=hh(t.infoSyncTree_,r,s);gi(t.eventQueue_,r,i)}function uV(t){return t.nextWriteId_++}function dV(t){NS(t,"onDisconnectEvents");const e=CS(t),n=sd();lm(t.onDisconnect_,pe(),(s,i)=>{const o=HM(s,i,t.serverSyncTree_,e);XN(n,s,o)});let r=[];lm(n,pe(),(s,i)=>{r=r.concat(hh(t.serverSyncTree_,s,i));const o=yV(t,s);By(t,o)}),t.onDisconnect_=sd(),gi(t.eventQueue_,pe(),r)}function hV(t,e,n){let r;ie(e._path)===".info"?r=ax(t.infoSyncTree_,e,n):r=ax(t.serverSyncTree_,e,n),TS(t.eventQueue_,e._path,r)}function fV(t,e,n){let r;ie(e._path)===".info"?r=pm(t.infoSyncTree_,e,n):r=pm(t.serverSyncTree_,e,n),TS(t.eventQueue_,e._path,r)}function pV(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sV)}function NS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function SS(t,e,n){return dS(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function Uy(t,e=t.transactionQueueTree_){if(e||mh(t,e),Do(e)){const n=kS(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&mV(t,Yl(e),n)}else gS(e)&&ph(e,n=>{Uy(t,n)})}function mV(t,e,n){const r=n.map(d=>d.currentWriteId),s=SS(t,e,r);let i=s;const o=s.hash();for(let d=0;d<n.length;d++){const h=n[d];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=jt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,d=>{NS(t,"transaction put response",{path:l.toString(),status:d});let h=[];if(d==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(Ui(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();mh(t,Vy(t.transactionQueueTree_,e)),Uy(t,t.transactionQueueTree_),gi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Gl(f[m])}else{if(d==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ht("transaction at "+l.toString()+" failed: "+d);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=d}By(t,e)}},o)}function By(t,e){const n=bS(t,e),r=Yl(n),s=kS(t,n);return gV(t,s,r),r}function gV(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],d=jt(n,l.path);let h=!1,f;if(B(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=iV)h=!0,f="maxretry",s=s.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0));else{const m=SS(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){wS("transaction failed: Data returned ",_,l.path);let T=vt(_);typeof _=="object"&&_!=null&&yr(_,".priority")||(T=T.updatePriority(m.getPriority()));const R=l.currentWriteId,x=CS(t),w=GM(T,m,x);l.currentOutputSnapshotRaw=T,l.currentOutputSnapshotResolved=w,l.currentWriteId=uV(t),o.splice(o.indexOf(R),1),s=s.concat(DM(t.serverSyncTree_,l.path,w,l.currentWriteId,l.applyLocally)),s=s.concat(Ui(t.serverSyncTree_,R,!0))}else h=!0,f="nodata",s=s.concat(Ui(t.serverSyncTree_,l.currentWriteId,!0))}gi(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}mh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Gl(r[a]);Uy(t,t.transactionQueueTree_)}function bS(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Do(r)===void 0;)r=Vy(r,n),e=ve(e),n=ie(e);return r}function kS(t,e){const n=[];return RS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function RS(t,e,n){const r=Do(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ph(e,s=>{RS(t,s,n)})}function mh(t,e){const n=Do(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,mS(e,n.length>0?n:void 0)}ph(e,r=>{mh(t,r)})}function yV(t,e){const n=Yl(bS(t,e)),r=Vy(t.transactionQueueTree_,e);return QM(r,s=>{Of(t,s)}),Of(t,r),yS(r,s=>{Of(t,s)}),n}function Of(t,e){const n=Do(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ui(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?mS(e,void 0):n.length=i+1,gi(t.eventQueue_,Yl(e),s);for(let o=0;o<r.length;o++)Gl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function vV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const dx=function(t,e){const n=wV(t),r=n.namespace;n.domain==="firebase.com"&&fr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&fr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AL();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new PN(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new _e(n.pathString)}},wV=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(a=t.substring(0,d-1),t=t.substring(d+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=_V(t.substring(h,f)));const m=vV(t.substring(Math.min(t.length,f)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(d+1),10)):d=e.length;const _=e.slice(0,d);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xV{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class EV{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TV{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:BN(this._path)}get ref(){return new Ns(this._repo,this._path)}get _queryIdentifier(){const e=Qw(this._queryParams),n=my(e);return n==="{}"?"default":n}get _queryObject(){return Qw(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof zy))return!1;const n=this._repo===e._repo,r=vy(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+p4(this._path)}}class Ns extends zy{constructor(e,n){super(e,n,new Ty,!1)}get parent(){const e=$N(this._path);return e===null?null:new Ns(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hd{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new _e(e),r=gm(this.ref,e);return new hd(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new hd(s,gm(this.ref,r),Me)))}hasChild(e){const n=new _e(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function IV(t,e){return t=Se(t),t._checkNotDeleted("ref"),gm(t._root,e)}function gm(t,e){return t=Se(t),ie(t._path)===null?eV("child","path",e):xS("child","path",e),new Ns(t._repo,Ke(t._path,e))}class $y{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new xV("value",this,new hd(e.snapshotNode,new Ns(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new EV(this,e,n):null}matches(e){return e instanceof $y?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function CV(t,e,n,r,s){const i=new TV(n,void 0),o=new $y(i);return hV(t._repo,t,o),()=>fV(t._repo,t,o)}function NV(t,e,n,r){return CV(t,"value",e)}IM(Ns);RM(Ns);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="FIREBASE_DATABASE_EMULATOR_HOST",ym={};let bV=!1;function kV(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=gr(i);t.repoInfo_=new PN(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function RV(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||fr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dx(i,s),a=o.repoInfo,l;typeof process<"u"&&Aw&&(l=Aw[SV]),l?(i=`http://${l}?ns=${a.namespace}`,o=dx(i,s),a=o.repoInfo):o.repoInfo.secure;const d=new zL(t.name,t.options,e);tV("Invalid Firebase Database URL",o),oe(o.path)||fr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=PV(a,t,d,new BL(t,n));return new DV(h,t)}function AV(t,e){const n=ym[e];(!n||n[t.key]!==t)&&fr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pV(t),delete n[t.key]}function PV(t,e,n,r){let s=ym[e.name];s||(s={},ym[e.name]=s);let i=s[t.toURLString()];return i&&fr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new oV(t,bV,n,r),s[t.toURLString()]=i,i}class DV{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ns(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AV(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fr("Cannot call "+e+" on a deleted database.")}}function jV(t=Ud(),e){const n=Al(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vg("database");r&&OV(n,...r)}return n}function OV(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&ls(r,i.repoInfo_.emulatorOptions))return;fr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&fr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new iu(iu.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:xg(r.mockUserToken,t.app.options.projectId);o=new iu(a)}gr(e)&&(Ld(e),Md("Database",!0)),kV(i,s,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LV(t){CL(Es),cs(new lr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return RV(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),nn(Pw,Dw,t),nn(Pw,Dw,"esm2020")}rr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};LV();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebasestorage.googleapis.com",MV="storageBucket",VV=2*60*1e3,FV=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends $n{constructor(e,n,r=0){super(Lf(e),`Firebase Storage: ${n} (${Lf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Wn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function Lf(t){return"storage/"+t}function UV(){const t="An unknown error occurred, please check the error payload for server response.";return new Wn(zn.UNKNOWN,t)}function BV(){return new Wn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function zV(){return new Wn(zn.CANCELED,"User canceled the upload/download.")}function $V(t){return new Wn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function WV(t){return new Wn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hx(t){return new Wn(zn.INVALID_ARGUMENT,t)}function PS(){return new Wn(zn.APP_DELETED,"The Firebase app was deleted.")}function qV(t){return new Wn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=_n.makeFromUrl(e,n)}catch{return new _n(e,"")}if(r.path==="")return r;throw WV(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},b=n===AS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",x=new RegExp(`^https?://${b}/${s}/${R}`,"i"),N=[{regex:a,indices:l,postModify:i},{regex:_,indices:T,postModify:d},{regex:x,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<N.length;j++){const M=N[j],L=M.regex.exec(e);if(L){const E=L[M.indices.bucket];let y=L[M.indices.path];y||(y=""),r=new _n(E,y),M.postModify(r);break}}if(r==null)throw $V(e);return r}}class HV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GV(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let d=!1;function h(...R){d||(d=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(_,l())},R)}function m(){i&&clearTimeout(i)}function _(R,...x){if(d){m();return}if(R){m(),h.call(null,R,...x);return}if(l()||o){m(),h.call(null,R,...x);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,f(N)}let T=!1;function b(R){T||(T=!0,m(),!d&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function KV(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QV(t){return t!==void 0}function fx(t,e,n,r){if(r<e)throw hx(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw hx(`Invalid value for '${t}'. Expected ${n} or less.`)}function YV(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var fd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fd||(fd={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XV(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JV{constructor(e,n,r,s,i,o,a,l,d,h,f,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,b)=>{this.resolve_=T,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Oc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===fd.NO_ERROR,l=i.getStatus();if(!a||XV(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===fd.ABORT;r(!1,new Oc(!1,null,h));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new Oc(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QV(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=UV();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?PS():zV();o(l)}else{const l=BV();o(l)}};this.canceled_?n(!1,new Oc(!1,null,!0)):this.backoffId_=GV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function e3(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function t3(t,e){e&&(t["X-Firebase-GMPID"]=e)}function n3(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function r3(t,e,n,r,s,i,o=!0,a=!1){const l=YV(t.urlParams),d=t.url+l,h=Object.assign({},t.headers);return t3(h,e),ZV(h,n),e3(h,i),n3(h,r),new JV(d,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s3(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function i3(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n){this._service=e,n instanceof _n?this._location=n:this._location=_n.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pd(e,n)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i3(this._location.path)}get storage(){return this._service}get parent(){const e=s3(this._location.path);if(e===null)return null;const n=new _n(this._location.bucket,e);return new pd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qV(e)}}function px(t,e){const n=e==null?void 0:e[MV];return n==null?null:_n.makeFromBucketSpec(n,t)}function o3(t,e,n,r={}){t.host=`${e}:${n}`;const s=gr(e);s&&(Ld(`https://${t.host}/b`),Md("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:xg(i,t.app.options.projectId))}class a3{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=AS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VV,this._maxUploadRetryTime=FV,this._requests=new Set,s!=null?this._bucket=_n.makeFromBucketSpec(s,this._host):this._bucket=px(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=px(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pd(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new HV(PS());{const o=r3(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const mx="@firebase/storage",gx="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS="storage";function l3(t=Ud(),e){t=Se(t);const r=Al(t,DS).getImmediate({identifier:e}),s=vg("storage");return s&&c3(r,...s),r}function c3(t,e,n,r={}){o3(t,e,n,r)}function u3(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new a3(n,r,s,e,Es)}function d3(){cs(new lr(DS,u3,"PUBLIC").setMultipleInstances(!0)),nn(mx,gx,""),nn(mx,gx,"esm2020")}d3();const h3={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},gh=ZT(h3),sn=sD(gh),st=dL(gh);l3(gh);const f3=jV(gh);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Tl.apply(this,arguments)}var Wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wr||(Wr={}));const yx="popstate";function p3(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return _m("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:md(s)}return g3(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wy(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m3(){return Math.random().toString(36).substr(2,8)}function _x(t,e){return{usr:t.state,key:t.key,idx:e}}function _m(t,e,n,r){return n===void 0&&(n=null),Tl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:n,key:e&&e.key||r||m3()})}function md(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function jo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function g3(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Wr.Pop,l=null,d=h();d==null&&(d=0,o.replaceState(Tl({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Wr.Pop;let R=h(),x=R==null?null:R-d;d=R,l&&l({action:a,location:b.location,delta:x})}function m(R,x){a=Wr.Push;let w=_m(b.location,R,x);d=h()+1;let N=_x(w,d),j=b.createHref(w);try{o.pushState(N,"",j)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(j)}i&&l&&l({action:a,location:b.location,delta:1})}function _(R,x){a=Wr.Replace;let w=_m(b.location,R,x);d=h();let N=_x(w,d),j=b.createHref(w);o.replaceState(N,"",j),i&&l&&l({action:a,location:b.location,delta:0})}function T(R){let x=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof R=="string"?R:md(R);return w=w.replace(/ $/,"%20"),Pe(x,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,x)}let b={get action(){return a},get location(){return t(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(yx,f),l=R,()=>{s.removeEventListener(yx,f),l=null}},createHref(R){return e(s,R)},createURL:T,encodeLocation(R){let x=T(R);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:_,go(R){return o.go(R)}};return b}var vx;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(vx||(vx={}));function y3(t,e,n){return n===void 0&&(n="/"),_3(t,e,n)}function _3(t,e,n,r){let s=typeof e=="string"?jo(e):e,i=xo(s.pathname||"/",n);if(i==null)return null;let o=jS(t);v3(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let d=R3(i);a=b3(o[l],d)}return a}function jS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=is([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),jS(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:N3(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of OS(i.path))s(i,o,l)}),e}function OS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=OS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function v3(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:S3(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w3=/^:[\w-]+$/,x3=3,E3=2,T3=1,I3=10,C3=-2,wx=t=>t==="*";function N3(t,e){let n=t.split("/"),r=n.length;return n.some(wx)&&(r+=C3),e&&(r+=E3),n.filter(s=>!wx(s)).reduce((s,i)=>s+(w3.test(i)?x3:i===""?T3:I3),r)}function S3(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function b3(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=vm({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:is([i,f.pathname]),pathnameBase:O3(is([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=is([i,f.pathnameBase]))}return o}function vm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=k3(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let b=a[f]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const T=a[f];return _&&!T?d[m]=void 0:d[m]=(T||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function k3(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wy(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function R3(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Wy(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const A3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,P3=t=>A3.test(t);function D3(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?jo(t):t,i;if(n)if(P3(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Wy(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=xx(n.substring(1),"/"):i=xx(n,e)}else i=e;return{pathname:i,search:L3(r),hash:M3(s)}}function xx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Mf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j3(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function qy(t,e){let n=j3(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hy(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=jo(t):(s=Tl({},t),Pe(!s.pathname||!s.pathname.includes("?"),Mf("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),Mf("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),Mf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=D3(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const is=t=>t.join("/").replace(/\/\/+/g,"/"),O3=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),L3=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,M3=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function V3(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LS=["post","put","patch","delete"];new Set(LS);const F3=["get",...LS];new Set(F3);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Il.apply(this,arguments)}const yh=A.createContext(null),MS=A.createContext(null),wr=A.createContext(null),_h=A.createContext(null),xr=A.createContext({outlet:null,matches:[],isDataRoute:!1}),VS=A.createContext(null);function U3(t,e){let{relative:n}=e===void 0?{}:e;Oo()||Pe(!1);let{basename:r,navigator:s}=A.useContext(wr),{hash:i,pathname:o,search:a}=vh(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:is([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Oo(){return A.useContext(_h)!=null}function Lo(){return Oo()||Pe(!1),A.useContext(_h).location}function FS(t){A.useContext(wr).static||A.useLayoutEffect(t)}function Er(){let{isDataRoute:t}=A.useContext(xr);return t?e6():B3()}function B3(){Oo()||Pe(!1);let t=A.useContext(yh),{basename:e,future:n,navigator:r}=A.useContext(wr),{matches:s}=A.useContext(xr),{pathname:i}=Lo(),o=JSON.stringify(qy(s,n.v7_relativeSplatPath)),a=A.useRef(!1);return FS(()=>{a.current=!0}),A.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=Hy(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:is([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,i,t])}function z3(){let{matches:t}=A.useContext(xr),e=t[t.length-1];return e?e.params:{}}function vh(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=A.useContext(wr),{matches:s}=A.useContext(xr),{pathname:i}=Lo(),o=JSON.stringify(qy(s,r.v7_relativeSplatPath));return A.useMemo(()=>Hy(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function $3(t,e){return W3(t,e)}function W3(t,e,n,r){Oo()||Pe(!1);let{navigator:s}=A.useContext(wr),{matches:i}=A.useContext(xr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=Lo(),h;if(e){var f;let R=typeof e=="string"?jo(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||Pe(!1),h=R}else h=d;let m=h.pathname||"/",_=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let T=y3(t,{pathname:_}),b=Q3(T&&T.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:is([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:is([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&b?A.createElement(_h.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Wr.Pop}},b):b}function q3(){let t=Z3(),e=V3(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:s},n):null,null)}const H3=A.createElement(q3,null);class G3 extends A.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?A.createElement(xr.Provider,{value:this.props.routeContext},A.createElement(VS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K3(t){let{routeContext:e,match:n,children:r}=t,s=A.useContext(yh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),A.createElement(xr.Provider,{value:e},r)}function Q3(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Pe(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:m,errors:_}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||T){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,T=!1,b=null,R=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,b=f.route.errorElement||H3,l&&(d<0&&m===0?(t6("route-fallback"),T=!0,R=null):d===m&&(T=!0,R=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,m+1)),w=()=>{let N;return _?N=b:T?N=R:f.route.Component?N=A.createElement(f.route.Component,null):f.route.element?N=f.route.element:N=h,A.createElement(K3,{match:f,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:N})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?A.createElement(G3,{location:n.location,revalidation:n.revalidation,component:b,error:_,children:w(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):w()},null)}var US=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(US||{}),BS=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(BS||{});function Y3(t){let e=A.useContext(yh);return e||Pe(!1),e}function X3(t){let e=A.useContext(MS);return e||Pe(!1),e}function J3(t){let e=A.useContext(xr);return e||Pe(!1),e}function zS(t){let e=J3(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function Z3(){var t;let e=A.useContext(VS),n=X3(),r=zS();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function e6(){let{router:t}=Y3(US.UseNavigateStable),e=zS(BS.UseNavigateStable),n=A.useRef(!1);return FS(()=>{n.current=!0}),A.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Il({fromRouteId:e},i)))},[t,e])}const Ex={};function t6(t,e,n){Ex[t]||(Ex[t]=!0)}function n6(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function $S(t){let{to:e,replace:n,state:r,relative:s}=t;Oo()||Pe(!1);let{future:i,static:o}=A.useContext(wr),{matches:a}=A.useContext(xr),{pathname:l}=Lo(),d=Er(),h=Hy(e,qy(a,i.v7_relativeSplatPath),l,s==="path"),f=JSON.stringify(h);return A.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:s}),[d,f,s,n,r]),null}function bt(t){Pe(!1)}function r6(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Wr.Pop,navigator:i,static:o=!1,future:a}=t;Oo()&&Pe(!1);let l=e.replace(/^\/*/,"/"),d=A.useMemo(()=>({basename:l,navigator:i,static:o,future:Il({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=jo(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:T="default"}=r,b=A.useMemo(()=>{let R=xo(h,l);return R==null?null:{location:{pathname:R,search:f,hash:m,state:_,key:T},navigationType:s}},[l,h,f,m,_,T,s]);return b==null?null:A.createElement(wr.Provider,{value:d},A.createElement(_h.Provider,{children:n,value:b}))}function WS(t){let{children:e,location:n}=t;return $3(wm(e),n)}new Promise(()=>{});function wm(t,e){e===void 0&&(e=[]);let n=[];return A.Children.forEach(t,(r,s)=>{if(!A.isValidElement(r))return;let i=[...e,s];if(r.type===A.Fragment){n.push.apply(n,wm(r.props.children,i));return}r.type!==bt&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wm(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},gd.apply(this,arguments)}function qS(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function s6(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function i6(t,e){return t.button===0&&(!e||e==="_self")&&!s6(t)}const o6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],a6=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],l6="6";try{window.__reactRouterVersion=l6}catch{}const c6=A.createContext({isTransitioning:!1}),u6="startTransition",Tx=q1[u6];function d6(t){let{basename:e,children:n,future:r,window:s}=t,i=A.useRef();i.current==null&&(i.current=p3({window:s,v5Compat:!0}));let o=i.current,[a,l]=A.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=A.useCallback(f=>{d&&Tx?Tx(()=>l(f)):l(f)},[l,d]);return A.useLayoutEffect(()=>o.listen(h),[o,h]),A.useEffect(()=>n6(r),[r]),A.createElement(r6,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const h6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,li=A.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:d,preventScrollReset:h,viewTransition:f}=e,m=qS(e,o6),{basename:_}=A.useContext(wr),T,b=!1;if(typeof d=="string"&&f6.test(d)&&(T=d,h6))try{let N=new URL(window.location.href),j=d.startsWith("//")?new URL(N.protocol+d):new URL(d),M=xo(j.pathname,_);j.origin===N.origin&&M!=null?d=M+j.search+j.hash:b=!0}catch{}let R=U3(d,{relative:s}),x=g6(d,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:f});function w(N){r&&r(N),N.defaultPrevented||x(N)}return A.createElement("a",gd({},m,{href:T||R,onClick:b||i?r:w,ref:n,target:l}))}),p6=A.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:l,viewTransition:d,children:h}=e,f=qS(e,a6),m=vh(l,{relative:f.relative}),_=Lo(),T=A.useContext(MS),{navigator:b,basename:R}=A.useContext(wr),x=T!=null&&y6(m)&&d===!0,w=b.encodeLocation?b.encodeLocation(m).pathname:m.pathname,N=_.pathname,j=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(N=N.toLowerCase(),j=j?j.toLowerCase():null,w=w.toLowerCase()),j&&R&&(j=xo(j,R)||j);const M=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let L=N===w||!o&&N.startsWith(w)&&N.charAt(M)==="/",E=j!=null&&(j===w||!o&&j.startsWith(w)&&j.charAt(w.length)==="/"),y={isActive:L,isPending:E,isTransitioning:x},I=L?r:void 0,S;typeof i=="function"?S=i(y):S=[i,L?"active":null,E?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(y):a;return A.createElement(li,gd({},f,{"aria-current":I,className:S,ref:n,style:k,to:l,viewTransition:d}),typeof h=="function"?h(y):h)});var xm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(xm||(xm={}));var Ix;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ix||(Ix={}));function m6(t){let e=A.useContext(yh);return e||Pe(!1),e}function g6(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=Er(),d=Lo(),h=vh(t,{relative:o});return A.useCallback(f=>{if(i6(f,n)){f.preventDefault();let m=r!==void 0?r:md(d)===md(h);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[d,l,h,r,s,n,t,i,o,a])}function y6(t,e){e===void 0&&(e={});let n=A.useContext(c6);n==null&&Pe(!1);let{basename:r}=m6(xm.useViewTransitionState),s=vh(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=xo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=xo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vm(s.pathname,o)!=null||vm(s.pathname,i)!=null}function _6({children:t}){const[e,n]=A.useState(!1),[r,s]=A.useState(null),i="AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";return A.useEffect(()=>{if(window.google&&window.google.maps){n(!0),window.mapsReady=!0,window.dispatchEvent(new CustomEvent("mapsReady"));return}console.log("Loading Google Maps with API key...");const o=()=>{console.log("✅ Google Maps loaded successfully"),window.mapsReady=!0,n(!0),s(null),window.dispatchEvent(new CustomEvent("mapsReady"))};window.initMap=o;const a=document.createElement("script");return a.src=`https://maps.googleapis.com/maps/api/js?key=${i}&libraries=places,geometry&callback=initMap`,a.async=!0,a.defer=!0,a.onerror=()=>{const l="Failed to load Google Maps";console.error(l),s(l)},document.head.appendChild(a),()=>{const l=document.querySelector('script[src*="maps.googleapis.com"]');if(l&&document.head.contains(l))try{document.head.removeChild(l)}catch(d){console.warn("Failed to remove script:",d)}window.initMap&&delete window.initMap,window.mapsReady=!1}},[]),r?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-center",children:[u.jsxs("p",{className:"text-red-600 font-medium",children:["⚠️ ",r]}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Please check your Google Maps API key configuration."})]})}):e?u.jsx(u.Fragment,{children:t}):u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing maps..."})]})})}function v6(){const[t,e]=A.useState(!1),n=[{path:"/dashboard",icon:"home",label:"Home"},{path:"/orders",icon:"box",label:"My Orders"},{path:"/track",icon:"map-pin",label:"Track Order"},{path:"/track-map",icon:"map",label:"Live Tracking"},{path:"/profile",icon:"user",label:"My Profile"},{path:"/settings",icon:"settings",label:"Settings"}],r=s=>{const i="w-5 h-5";switch(s){case"home":return u.jsx("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9M9 21h6a2 2 0 002-2V9l-7-4-7 4v10a2 2 0 002 2z"})});case"box":return u.jsx("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 015.646 5.646 9.003 9.003 0 0012 2c4.97 0 9.185 3.364 9.88 7.848.005.033.01.066.015.099a5.003 5.003 0 01-.9 9.407"})});case"map-pin":return u.jsxs("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]});case"map":return u.jsx("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6.553 3.276A1 1 0 0121 20.382V9.618a1 1 0 00-1.447-.894L15 11m0 0V5m0 13V5m0 0L9 7m6 4v8m0-13v.382a1 1 0 00-.553.894L15 11"})});case"user":return u.jsx("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})});case"settings":return u.jsxs("svg",{className:i,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]});default:return null}};return u.jsxs("aside",{className:`bg-blue-900 text-white ${t?"w-20":"w-64"} transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`,children:[u.jsx("div",{className:"p-6 border-b border-blue-800",children:u.jsxs("div",{className:"flex items-center justify-between",children:[!t&&u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold",children:"PTROS"}),u.jsx("p",{className:"text-xs text-blue-300",children:"Customer"})]})]}),t&&u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsx("button",{onClick:()=>e(!t),className:"text-blue-300 hover:text-white",children:t?"→":"←"})]})}),u.jsx("nav",{className:"flex-1 p-4 overflow-y-auto",children:u.jsx("ul",{className:"space-y-2",children:n.map(s=>u.jsx("li",{children:u.jsxs(p6,{to:s.path,className:({isActive:i})=>`flex items-center px-4 py-3 rounded-lg transition-colors whitespace-nowrap ${i?"bg-blue-800 text-white":"text-blue-200 hover:bg-blue-800 hover:text-white"}`,children:[u.jsx("span",{className:"mr-3 flex-shrink-0",children:r(s.icon)}),!t&&u.jsx("span",{children:s.label})]})},s.path))})}),!t&&u.jsx("div",{className:"p-4 border-t border-blue-800",children:u.jsxs("div",{className:"bg-blue-800 rounded-lg p-4",children:[u.jsx("p",{className:"text-xs text-blue-300 mb-2",children:"Active Orders"}),u.jsx("p",{className:"text-2xl font-bold",children:"3"})]})})]})}const w6=()=>{const[t,e]=A.useState([]),[n,r]=A.useState(0),[s,i]=A.useState(!0);A.useEffect(()=>{const d=sn.currentUser;if(!d){i(!1);return}i(!0);const h=$l(pi(st,"notifications"),yo("userId","==",d.uid)),f=mN(h,m=>{const _=[];let T=0;m.forEach(b=>{var w,N;const R=b.data(),x={id:b.id,userId:R.userId,title:R.title,message:R.message,type:R.type||"system",relatedOrderId:R.relatedOrderId,relatedDeliveryId:R.relatedDeliveryId,isRead:R.isRead||!1,createdAt:((w=R.createdAt)==null?void 0:w.toDate())||new Date,updatedAt:((N=R.updatedAt)==null?void 0:N.toDate())||new Date};_.push(x),x.isRead||T++}),_.sort((b,R)=>R.createdAt.getTime()-b.createdAt.getTime()),e(_),r(T),i(!1)},m=>{console.error("Error loading notifications:",m),i(!1)});return()=>f()},[]);const o=async d=>{try{const h=rn(st,"notifications",d);await gl(h,{isRead:!0,updatedAt:de.now()})}catch(h){console.error("Error marking notification as read:",h)}};return{notifications:t,unreadCount:n,loading:s,markAsRead:o,markAllAsRead:async()=>{try{for(const d of t)d.isRead||await o(d.id)}catch(d){console.error("Error marking all as read:",d)}},clearNotification:async d=>{try{const h=rn(st,"notifications",d);await gl(h,{isRead:!0}),e(f=>f.filter(m=>m.id!==d))}catch(h){console.error("Error clearing notification:",h)}}}};function x6({user:t,userProfile:e}){var b,R;const[n,r]=A.useState(!1),[s,i]=A.useState(!1),o=Er(),{notifications:a,unreadCount:l,markAsRead:d,markAllAsRead:h,clearNotification:f}=w6(),m=async()=>{try{await NI(sn),o("/login")}catch(x){console.error("Error logging out:",x)}},_=x=>{switch(x){case"delivery":return"bg-blue-50 border-l-4 border-blue-500";case"order":return"bg-green-50 border-l-4 border-green-500";case"alert":return"bg-red-50 border-l-4 border-red-500";default:return"bg-gray-50 border-l-4 border-gray-500"}},T=x=>{switch(x){case"delivery":return"📦";case"order":return"✅";case"alert":return"⚠️";default:return"ℹ️"}};return u.jsx("header",{className:"bg-white border-b shadow-sm py-4 px-6 ml-64",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"text",placeholder:"Search your orders...",className:"pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"}),u.jsx("svg",{className:"absolute left-3 top-2.5 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>i(!s),className:"relative p-2 hover:bg-gray-100 rounded-lg transition-colors",children:[u.jsx("svg",{className:"w-6 h-6 text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),l>0&&u.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-semibold",children:l>9?"9+":l})]}),s&&u.jsxs("div",{className:"absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto",children:[u.jsx("div",{className:"p-4 border-b bg-gradient-to-r from-blue-50 to-blue-100 sticky top-0",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h3",{className:"font-bold text-gray-800",children:"Notifications"}),l>0&&u.jsx("button",{onClick:()=>h(),className:"text-xs text-blue-600 hover:text-blue-800 font-medium",children:"Mark all as read"})]})}),a.length===0?u.jsxs("div",{className:"p-8 text-center text-gray-500",children:[u.jsx("div",{className:"text-3xl mb-2",children:"🔔"}),u.jsx("p",{children:"No notifications yet"})]}):u.jsx("div",{className:"divide-y",children:a.map(x=>u.jsx("div",{className:`p-4 hover:bg-gray-50 transition-colors ${_(x.type)} cursor-pointer ${x.isRead?"":"bg-blue-50"}`,onClick:()=>!x.isRead&&d(x.id),children:u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"text-lg",children:T(x.type)}),u.jsx("p",{className:"font-semibold text-gray-800 text-sm",children:x.title}),!x.isRead&&u.jsx("span",{className:"w-2 h-2 bg-blue-600 rounded-full"})]}),u.jsx("p",{className:"text-sm text-gray-600 mt-1",children:x.message}),u.jsxs("p",{className:"text-xs text-gray-400 mt-2",children:[new Date(x.createdAt).toLocaleDateString()," ",new Date(x.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}),u.jsx("button",{onClick:w=>{w.stopPropagation(),f(x.id)},className:"text-gray-400 hover:text-gray-600 ml-2",children:"✕"})]})},x.id))}),a.length>0&&u.jsx("div",{className:"p-3 border-t bg-gray-50 text-center",children:u.jsx("a",{href:"#",className:"text-sm text-blue-600 hover:text-blue-800 font-medium",children:"View all notifications"})})]})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"text-right hidden md:block",children:[u.jsx("p",{className:"font-medium text-gray-800",children:(e==null?void 0:e.fullName)||t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),u.jsxs("button",{onClick:m,className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm flex items-center gap-2",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),"Logout"]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-blue-600 font-semibold",children:((b=e==null?void 0:e.fullName)==null?void 0:b[0])||((R=t.email)==null?void 0:R[0])||"C"})}),u.jsx("span",{children:"▼"})]}),n&&u.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50",children:[u.jsxs("div",{className:"p-4 border-b",children:[u.jsx("p",{className:"font-medium",children:t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),u.jsxs("div",{className:"py-2",children:[u.jsxs("a",{href:"/profile",className:"block px-4 py-2 hover:bg-gray-100 flex items-center gap-2",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})}),"My Profile"]}),u.jsxs("a",{href:"/settings",className:"block px-4 py-2 hover:bg-gray-100 flex items-center gap-2",children:[u.jsxs("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Settings"]}),u.jsxs("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100 flex items-center gap-2",children:[u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Help & Support"]})]})]})]})]})]})})}const E6=async t=>{try{const e=pi(st,"notifications");return(await pN(e,{userId:t.userId,title:t.title,message:t.message,type:t.type,relatedOrderId:t.relatedOrderId||null,relatedDeliveryId:t.relatedDeliveryId||null,isRead:!1,createdAt:de.now(),updatedAt:de.now()})).id}catch(e){throw console.error("Error creating notification:",e),e}},T6=async t=>{const e=[{title:"Order Confirmed",message:"Your order #ORD-001 has been confirmed and will be picked up soon.",type:"order"},{title:"In Transit",message:"Your package is on the way! Expected delivery in 2 hours.",type:"delivery"},{title:"Out for Delivery",message:"Your delivery is out for delivery and will arrive within the hour.",type:"delivery"},{title:"Delivery Update",message:"Slight delay due to traffic. Your package will arrive in about 30 minutes.",type:"alert"}];try{for(const n of e)await E6({userId:t,title:n.title,message:n.message,type:n.type});console.log("Sample notifications created successfully")}catch(n){console.error("Error creating sample notifications:",n)}};let I6={data:""},C6=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||I6},N6=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,S6=/\/\*[^]*?\*\/|  +/g,Cx=/\n+/g,Ur=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Ur(o,i):i+"{"+Ur(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ur(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Ur.p?Ur.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},qn={},HS=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+HS(t[n]);return e}return t},b6=(t,e,n,r,s)=>{let i=HS(t),o=qn[i]||(qn[i]=(l=>{let d=0,h=11;for(;d<l.length;)h=101*h+l.charCodeAt(d++)>>>0;return"go"+h})(i));if(!qn[o]){let l=i!==t?t:(d=>{let h,f,m=[{}];for(;h=N6.exec(d.replace(S6,""));)h[4]?m.shift():h[3]?(f=h[3].replace(Cx," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(Cx," ").trim();return m[0]})(t);qn[o]=Ur(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&qn.g?qn.g:null;return n&&(qn.g=qn[o]),((l,d,h,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=h?l+d.data:d.data+l)})(qn[o],e,r,a),o},k6=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Ur(a,""):a===!1?"":a}return r+s+(o??"")},"");function wh(t){let e=this||{},n=t.call?t(e.p):t;return b6(n.unshift?n.raw?k6(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,C6(e.target),e.g,e.o,e.k)}let GS,Em,Tm;wh.bind({g:1});let pr=wh.bind({k:1});function R6(t,e,n,r){Ur.p=e,GS=t,Em=n,Tm=r}function Ss(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Em&&Em()},a),n.o=/ *go\d+/.test(l),a.className=wh.apply(n,r)+(l?" "+l:"");let d=t;return t[0]&&(d=a.as||t,delete a.as),Tm&&d[0]&&Tm(a),GS(d,a)}return s}}var A6=t=>typeof t=="function",yd=(t,e)=>A6(t)?t(e):t,P6=(()=>{let t=0;return()=>(++t).toString()})(),KS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),D6=20,Gy="default",QS=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return QS(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ou=[],YS={toasts:[],pausedAt:void 0,settings:{toastLimit:D6}},Dn={},XS=(t,e=Gy)=>{Dn[e]=QS(Dn[e]||YS,t),ou.forEach(([n,r])=>{n===e&&r(Dn[e])})},JS=t=>Object.keys(Dn).forEach(e=>XS(t,e)),j6=t=>Object.keys(Dn).find(e=>Dn[e].toasts.some(n=>n.id===t)),xh=(t=Gy)=>e=>{XS(e,t)},O6={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},L6=(t={},e=Gy)=>{let[n,r]=A.useState(Dn[e]||YS),s=A.useRef(Dn[e]);A.useEffect(()=>(s.current!==Dn[e]&&r(Dn[e]),ou.push([e,r]),()=>{let o=ou.findIndex(([a])=>a===e);o>-1&&ou.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||O6[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},M6=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||P6()}),Xl=t=>(e,n)=>{let r=M6(e,t,n);return xh(r.toasterId||j6(r.id))({type:2,toast:r}),r.id},ne=(t,e)=>Xl("blank")(t,e);ne.error=Xl("error");ne.success=Xl("success");ne.loading=Xl("loading");ne.custom=Xl("custom");ne.dismiss=(t,e)=>{let n={type:3,toastId:t};e?xh(e)(n):JS(n)};ne.dismissAll=t=>ne.dismiss(void 0,t);ne.remove=(t,e)=>{let n={type:4,toastId:t};e?xh(e)(n):JS(n)};ne.removeAll=t=>ne.remove(void 0,t);ne.promise=(t,e,n)=>{let r=ne.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?yd(e.success,s):void 0;return i?ne.success(i,{id:r,...n,...n==null?void 0:n.success}):ne.dismiss(r),s}).catch(s=>{let i=e.error?yd(e.error,s):void 0;i?ne.error(i,{id:r,...n,...n==null?void 0:n.error}):ne.dismiss(r)}),t};var V6=1e3,F6=(t,e="default")=>{let{toasts:n,pausedAt:r}=L6(t,e),s=A.useRef(new Map).current,i=A.useCallback((f,m=V6)=>{if(s.has(f))return;let _=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,_)},[]);A.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let T=(_.duration||0)+_.pauseDuration-(f-_.createdAt);if(T<0){_.visible&&ne.dismiss(_.id);return}return setTimeout(()=>ne.dismiss(_.id,e),T)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=A.useCallback(xh(e),[e]),a=A.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=A.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),d=A.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=A.useCallback((f,m)=>{let{reverseOrder:_=!1,gutter:T=8,defaultPosition:b}=m||{},R=n.filter(N=>(N.position||b)===(f.position||b)&&N.height),x=R.findIndex(N=>N.id===f.id),w=R.filter((N,j)=>j<x&&N.visible).length;return R.filter(N=>N.visible).slice(..._?[w+1]:[0,w]).reduce((N,j)=>N+(j.height||0)+T,0)},[n]);return A.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:d,calculateOffset:h}}},U6=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B6=pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z6=pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$6=Ss("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U6} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B6} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z6} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,W6=pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,q6=Ss("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${W6} 1s linear infinite;
`,H6=pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G6=pr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,K6=Ss("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H6} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G6} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q6=Ss("div")`
  position: absolute;
`,Y6=Ss("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X6=pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J6=Ss("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X6} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Z6=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?A.createElement(J6,null,e):e:n==="blank"?null:A.createElement(Y6,null,A.createElement(q6,{...r}),n!=="loading"&&A.createElement(Q6,null,n==="error"?A.createElement($6,{...r}):A.createElement(K6,{...r})))},eF=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,tF=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,nF="0%{opacity:0;} 100%{opacity:1;}",rF="0%{opacity:1;} 100%{opacity:0;}",sF=Ss("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,iF=Ss("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,oF=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=KS()?[nF,rF]:[eF(n),tF(n)];return{animation:e?`${pr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},aF=A.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?oF(t.position||e||"top-center",t.visible):{opacity:0},i=A.createElement(Z6,{toast:t}),o=A.createElement(iF,{...t.ariaProps},yd(t.message,t));return A.createElement(sF,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):A.createElement(A.Fragment,null,i,o))});R6(A.createElement);var lF=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=A.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return A.createElement("div",{ref:i,className:e,style:n},s)},cF=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:KS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},uF=wh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Lc=16,bs=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:d}=F6(n,i);return A.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Lc,left:Lc,right:Lc,bottom:Lc,pointerEvents:"none",...o},className:a,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(h=>{let f=h.position||e,m=d.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),_=cF(f,m);return A.createElement(lF,{id:h.id,key:h.id,onHeightUpdate:d.updateHeight,className:h.visible?uF:"",style:_},h.type==="custom"?yd(h.message,h):s?s(h):A.createElement(aF,{toast:h,position:f}))}))},_d=ne;function dF({user:t,userProfile:e}){const[n,r]=A.useState([]),[s,i]=A.useState({totalOrders:0,activeOrders:0,completedOrders:0,totalSpent:0});A.useEffect(()=>{(async()=>{try{const d=$l(pi(st,"deliveries"),yo("customerId","==",t.uid)),h=await fy(d),f=[];h.forEach(m=>{var T,b;const _=m.data();f.push({id:m.id,trackingCode:_.trackingCode,status:_.status,pickupAddress:_.pickupAddress,deliveryAddress:_.deliveryAddress,createdAt:((T=_.createdAt)==null?void 0:T.toDate())||new Date,estimatedDelivery:(b=_.estimatedDelivery)==null?void 0:b.toDate()})}),r(f.slice(0,5)),i({totalOrders:f.length,activeOrders:f.filter(m=>m.status!=="delivered").length,completedOrders:f.filter(m=>m.status==="delivered").length,totalSpent:0})}catch(d){console.error("Error fetching deliveries:",d)}})()},[t.uid]);const o=[{label:"Create Order",icon:"📝",path:"/orders/new",color:"bg-blue-600 hover:bg-blue-700"},{label:"Track Order",icon:"📍",path:"/track",color:"bg-green-600 hover:bg-green-700"},{label:"Live Tracking",icon:"🗺️",path:"/track-map",color:"bg-cyan-600 hover:bg-cyan-700"},{label:"My Orders",icon:"📦",path:"/orders",color:"bg-purple-600 hover:bg-purple-700"}],a=async()=>{try{await T6(t.uid),_d.success("Sample notifications created! Check the bell icon.")}catch(l){_d.error("Failed to create sample notifications"),console.error(l)}};return u.jsxs("div",{children:[u.jsxs("div",{className:"mb-8",children:[u.jsxs("h1",{className:"text-3xl font-bold text-gray-800",children:["Welcome Back, ",(e==null?void 0:e.fullName)||"Customer","!"]}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Here's an overview of your deliveries and account."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-blue-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"📦"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Total Orders"}),u.jsx("p",{className:"text-3xl font-bold",children:s.totalOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"⏳"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Active Orders"}),u.jsx("p",{className:"text-3xl font-bold",children:s.activeOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-green-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"✅"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Completed"}),u.jsx("p",{className:"text-3xl font-bold",children:s.completedOrders})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-purple-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl",children:"💰"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Total Spent"}),u.jsxs("p",{className:"text-3xl font-bold",children:["M",s.totalSpent]})]})]})})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[u.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Quick Actions"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:o.map((l,d)=>u.jsxs("a",{href:l.path,className:`${l.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`,children:[u.jsx("span",{className:"text-3xl mb-2",children:l.icon}),u.jsx("span",{className:"font-medium",children:l.label})]},d))})]}),u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8",children:[u.jsxs("p",{className:"text-sm text-blue-700 mb-3",children:[u.jsx("strong",{children:"Test Mode:"})," Create sample notifications to test the notification system"]}),u.jsx("button",{onClick:a,className:"bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition",children:"Create Sample Notifications"})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Recent Orders"}),n.length===0?u.jsx("p",{className:"text-gray-500 text-center py-8",children:"No orders yet"}):u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"w-full",children:[u.jsx("thead",{children:u.jsxs("tr",{className:"border-b",children:[u.jsx("th",{className:"text-left py-3 px-4",children:"Tracking Code"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Delivery To"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Status"}),u.jsx("th",{className:"text-left py-3 px-4",children:"Date"})]})}),u.jsx("tbody",{children:n.map(l=>u.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[u.jsx("td",{className:"py-3 px-4 font-medium",children:l.trackingCode}),u.jsx("td",{className:"py-3 px-4",children:l.deliveryAddress}),u.jsx("td",{className:"py-3 px-4",children:u.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${l.status==="delivered"?"bg-green-100 text-green-800":l.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:l.status})}),u.jsx("td",{className:"py-3 px-4",children:l.createdAt.toLocaleDateString()})]},l.id))})]})})]})]})}function hF(){const[t,e]=A.useState([]),[n,r]=A.useState(!0),[s,i]=A.useState("all");A.useEffect(()=>{o()},[]);const o=async()=>{try{const l=sn.currentUser;if(!l)return;const d=$l(pi(st,"deliveries"),yo("customerId","==",l.uid)),h=await fy(d),f=[];h.forEach(m=>{var T,b;const _=m.data();f.push({id:m.id,trackingCode:_.trackingCode,status:_.status,pickupAddress:_.pickupAddress,deliveryAddress:_.deliveryAddress,createdAt:((T=_.createdAt)==null?void 0:T.toDate())||new Date,estimatedDelivery:(b=_.estimatedDelivery)==null?void 0:b.toDate()})}),f.sort((m,_)=>_.createdAt.getTime()-m.createdAt.getTime()),e(f),r(!1)}catch(l){console.error("Error fetching orders:",l),ne.error("Failed to load orders"),r(!1)}},a=t.filter(l=>s==="all"?!0:s==="pending"?l.status==="pending":s==="active"?l.status==="assigned"||l.status==="in_transit":s==="completed"?l.status==="delivered":!0);return u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Orders"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"View and track all your deliveries"})]}),u.jsx("div",{className:"bg-white rounded-xl shadow p-6 mb-6",children:u.jsxs("div",{className:"flex flex-wrap gap-3",children:[u.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["All Orders (",t.length,")"]}),u.jsx("button",{onClick:()=>i("pending"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="pending"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Pending"}),u.jsx("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="active"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"In Transit"}),u.jsx("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="completed"?"bg-green-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]})}),n?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading your orders..."})]}):a.length===0?u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-500 text-lg",children:"No orders found"})}):u.jsx("div",{className:"space-y-4",children:a.map(l=>u.jsx(li,{to:`/orders/${l.id}`,className:"bg-white rounded-xl shadow p-6 hover:shadow-lg transition",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-4 mb-2",children:[u.jsx("h3",{className:"text-lg font-bold",children:l.trackingCode}),u.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${l.status==="delivered"?"bg-green-100 text-green-800":l.status==="in_transit"?"bg-blue-100 text-blue-800":l.status==="pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:l.status})]}),u.jsxs("p",{className:"text-gray-600",children:["To: ",l.deliveryAddress]}),u.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Ordered on ",l.createdAt.toLocaleDateString()]})]}),u.jsx("div",{className:"text-right",children:u.jsx("span",{className:"text-2xl",children:"→"})})]})},l.id))})]})}function fF(){const{id:t}=z3(),e=Er(),[n,r]=A.useState(null),[s,i]=A.useState(!0);if(A.useEffect(()=>{(async()=>{var l,d,h;try{if(!t)return;const f=rn(st,"deliveries",t),m=await Wl(f);if(m.exists()){const _=m.data();r({id:m.id,trackingCode:_.trackingCode,status:_.status,pickupAddress:_.pickupAddress,deliveryAddress:_.deliveryAddress,packageDetails:_.packageDetails,carrierName:_.carrierName,createdAt:((l=_.createdAt)==null?void 0:l.toDate())||new Date,estimatedDelivery:(d=_.estimatedDelivery)==null?void 0:d.toDate(),actualDelivery:(h=_.actualDelivery)==null?void 0:h.toDate(),currentLocation:_.currentLocation})}else ne.error("Order not found"),e("/orders")}catch(f){console.error("Error fetching order:",f),ne.error("Failed to load order details")}finally{i(!1)}})()},[t,e]),s)return u.jsx("div",{className:"flex items-center justify-center min-h-screen",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading order details..."})]})});if(!n)return u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-500 text-lg",children:"Order not found"})});const o=()=>{const a=["pending","assigned","picked_up","in_transit","delivered"];return a.map((l,d)=>({step:l,completed:a.indexOf(n.status)>=d}))};return u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsx("button",{onClick:()=>e("/orders"),className:"mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium",children:"← Back to Orders"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[u.jsx("div",{className:"bg-white rounded-xl shadow p-6",children:u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold",children:n.trackingCode}),u.jsxs("p",{className:"text-gray-600 mt-2",children:["Ordered on ",n.createdAt.toLocaleDateString()]})]}),u.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]})}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-6",children:"Delivery Progress"}),u.jsx("div",{className:"flex items-center justify-between",children:o().map((a,l)=>u.jsxs("div",{className:"flex flex-col items-center flex-1",children:[u.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 ${a.completed?"bg-blue-600 text-white":"bg-gray-200 text-gray-600"}`,children:a.completed?"✓":l+1}),u.jsx("p",{className:`text-sm text-center ${a.completed?"text-blue-600":"text-gray-500"}`,children:a.step}),l<o().length-1&&u.jsx("div",{className:`h-1 w-full mx-2 mt-4 ${a.completed?"bg-blue-600":"bg-gray-200"}`})]},l))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Delivery Details"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Pickup Address"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.pickupAddress})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Delivery Address"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.deliveryAddress})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Package Details"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.packageDetails})]}),n.carrierName&&u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Carrier"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.carrierName})]}),n.estimatedDelivery&&u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Estimated Delivery"}),u.jsx("p",{className:"text-gray-800 font-medium",children:n.estimatedDelivery.toLocaleDateString()})]})]})]})]}),u.jsxs("div",{className:"space-y-6",children:[n.status!=="delivered"&&u.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),u.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Carrier"}),u.jsx("button",{className:"w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 font-medium",children:"💬 Chat Support"})]}),n.status==="delivered"&&n.actualDelivery&&u.jsxs("div",{className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[u.jsx("h3",{className:"font-bold mb-2",children:"✓ Delivered"}),u.jsxs("p",{className:"text-sm text-green-800",children:["Your package was delivered on"," ",n.actualDelivery.toLocaleDateString()]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Actions"}),u.jsx("button",{className:"w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium mb-2",children:"📱 Share Tracking"}),u.jsx("button",{className:"w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",children:"🖨️ Print Receipt"})]})]})]})]})}function Nx({value:t,onChange:e,onSelect:n,placeholder:r="Enter address..."}){const[s,i]=A.useState([]),o=A.useRef(null),a=A.useRef(null),l=A.useRef(null);A.useEffect(()=>{window.google&&window.google.maps&&(a.current=new window.google.maps.places.AutocompleteService,l.current=new window.google.maps.places.PlacesService(document.createElement("div")))},[]);const d=f=>{const m=f.target.value;e(m),m.length>2&&a.current?a.current.getPlacePredictions({input:m,componentRestrictions:{country:"ls"}},_=>{i(_||[])}):i([])},h=(f,m)=>{e(m),i([]),n&&l.current&&l.current.getDetails({placeId:f},_=>{n(_)})};return u.jsxs("div",{className:"relative",children:[u.jsx("input",{ref:o,type:"text",value:t,onChange:d,placeholder:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),s.length>0&&u.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50",children:s.map((f,m)=>u.jsxs("button",{onClick:()=>h(f.place_id,f.description),className:"w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0",children:[u.jsx("p",{className:"font-medium text-sm",children:f.main_text}),u.jsx("p",{className:"text-xs text-gray-500",children:f.secondary_text})]},m))})]})}const Vf=30*60*1e3,pF=()=>{const t=A.useRef(null),e=A.useRef(new Map),n=A.useCallback(()=>{var a;return!t.current&&((a=window.google)!=null&&a.maps)&&(t.current=new window.google.maps.Geocoder),t.current},[]),r=A.useCallback(()=>{const a=Date.now();for(const[l,d]of e.current.entries())a-d.timestamp>Vf&&e.current.delete(l)},[]),s=A.useCallback(async(a,l="ls")=>{if(!a.trim())return null;const d=`${a}-${l}`,h=e.current.get(d);return h&&Date.now()-h.timestamp<Vf?h:new Promise(f=>{try{const m=n();if(!m){console.warn("Geocoder not available"),f(null);return}m.geocode({address:a.trim(),componentRestrictions:{country:l}},(_,T)=>{if(T==="OK"&&(_!=null&&_[0])){const b={lat:_[0].geometry.location.lat(),lng:_[0].geometry.location.lng(),address:_[0].formatted_address};e.current.set(d,{...b,timestamp:Date.now()}),f(b)}else console.warn("Geocoding failed:",T),f(null)})}catch(m){console.error("Geocoder error:",m),f(null)}})},[n]),i=A.useCallback(async(a,l)=>{const d=`${a}-${l}-reverse`,h=e.current.get(d);return h&&Date.now()-h.timestamp<Vf?h.address:new Promise(f=>{try{const m=n();if(!m){f(null);return}m.geocode({location:{lat:a,lng:l}},(_,T)=>{if(T==="OK"&&(_!=null&&_[0])){const b=_[0].formatted_address;e.current.set(d,{lat:a,lng:l,address:b,timestamp:Date.now()}),f(b)}else console.warn("Reverse geocoding failed:",T),f(null)})}catch(m){console.error("Reverse geocoder error:",m),f(null)}})},[n]),o=A.useCallback(()=>{e.current.clear()},[]);return{geocodeAddress:s,reverseGeocode:i,clearCache:o,clearExpiredCache:r}};function mF({user:t}){const e=Er(),{geocodeAddress:n}=pF(),[r,s]=A.useState({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),[i,o]=A.useState(!0),[a,l]=A.useState(!1),[d,h]=A.useState(!1);A.useEffect(()=>{(async()=>{try{if(!t)return;const L=await Wl(rn(st,"users",t.uid));if(L.exists()){const E=L.data();s(y=>({...y,pickupContactName:E.fullName||y.pickupContactName,pickupContactPhone:E.phone||y.pickupContactPhone,pickupAddress:E.address||y.pickupAddress}))}}catch(L){console.error("Error fetching user profile:",L)}finally{o(!1)}})()},[t]);const f=async M=>{const L=await n(M,"ls");return L?{lat:L.lat,lng:L.lng,address:L.address}:null},m=M=>{const{name:L,value:E,type:y}=M.target;if(y==="checkbox"){const I=M.target.checked;s(S=>({...S,[L]:I}))}else s(y==="number"?I=>({...I,[L]:E===""?"":Number(E)}):I=>({...I,[L]:E}))},_=async M=>{if(s(L=>({...L,pickupAddress:M,pickupCoordinates:null})),M.length>10){const L=await f(M);L&&s(E=>({...E,pickupCoordinates:L}))}},T=async M=>{if(s(L=>({...L,deliveryAddress:M,deliveryCoordinates:null})),M.length>10){const L=await f(M);L&&s(E=>({...E,deliveryCoordinates:L}))}},b=()=>{const M="PTR",L=Math.floor(1e5+Math.random()*9e5);return`${M}-${L}`},R=()=>r.packageDescription?!r.pickupAddress||!r.deliveryAddress?(ne.error("Pickup and delivery addresses are required"),!1):!r.deliveryContactName||!r.deliveryContactPhone?(ne.error("Delivery contact information is required"),!1):!0:(ne.error("Package description is required"),!1),x=(M,L,E,y)=>{const S=(E-M)*Math.PI/180,k=(y-L)*Math.PI/180,P=Math.sin(S/2)*Math.sin(S/2)+Math.cos(M*Math.PI/180)*Math.cos(E*Math.PI/180)*Math.sin(k/2)*Math.sin(k/2);return 6371*(2*Math.atan2(Math.sqrt(P),Math.sqrt(1-P)))},w=M=>M<10?"Same day":M<50?"1 day":"1-2 days",N=(M,L)=>{const E=M||100,y=L*10,I=Math.round(E*.15);return Math.max(50,I+y)},j=async M=>{if(M.preventDefault(),!!R()){l(!0),h(!0);try{let L=r.pickupCoordinates,E=r.deliveryCoordinates;L||(L=await f(r.pickupAddress)),E||(E=await f(r.deliveryAddress)),h(!1),(!L||!E)&&ne.error("Unable to get coordinates for addresses. Order will be created without location data.",{duration:5e3});const y=b();let I=0,S="1-2 days",k=0;L&&E&&(I=x(L.lat,L.lng,E.lat,E.lng),S=w(I),k=N(r.packageValue?Number(r.packageValue):0,I));const P={trackingCode:y,status:"pending",priority:r.priority,customerId:t.uid,customerEmail:t.email||"",customerName:r.pickupContactName||"",customerPhone:r.pickupContactPhone||"",packageDescription:r.packageDescription,packageWeight:r.packageWeight?Number(r.packageWeight):null,packageValue:r.packageValue?Number(r.packageValue):null,packageDimensions:r.packageDimensions,pickupAddress:r.pickupAddress,pickupLocation:L?{lat:L.lat,lng:L.lng,address:L.address,timestamp:de.now()}:null,pickupContactName:r.pickupContactName,pickupContactPhone:r.pickupContactPhone,pickupInstructions:r.pickupInstructions,pickupDateTime:de.fromDate(new Date(`${r.pickupDate}T${r.pickupTime}`)),deliveryAddress:r.deliveryAddress,deliveryLocation:E?{lat:E.lat,lng:E.lng,address:E.address,timestamp:de.now()}:null,deliveryContactName:r.deliveryContactName,deliveryContactPhone:r.deliveryContactPhone,deliveryInstructions:r.deliveryInstructions,deliveryDate:de.fromDate(new Date(r.deliveryDate)),deliveryTimeWindow:r.deliveryTimeWindow,distance:I>0?Math.round(I*100)/100:null,estimatedDeliveryTime:S,estimatedEarnings:k,carrierId:null,carrierEmail:null,carrierName:null,assignedAt:null,paymentMethod:r.paymentMethod,paymentAmount:r.paymentAmount?Number(r.paymentAmount):k,paymentStatus:"pending",isFragile:r.isFragile,requiresSignature:r.requiresSignature,insuranceRequired:r.insuranceRequired,notes:r.notes,createdAt:bf(),updatedAt:bf(),createdBy:t.uid,proofOfDelivery:{otp:null,verified:!1,verifiedAt:null,photoUrl:null,signatureUrl:null},currentLocation:L?{lat:L.lat,lng:L.lng,timestamp:de.now(),address:r.pickupAddress,locationType:"pickup_point",status:"waiting_for_pickup"}:null,locationHistory:L?[{lat:L.lat,lng:L.lng,timestamp:de.now(),status:"created_at_pickup",address:r.pickupAddress}]:[],milestones:{created:bf(),assigned:null,pickedUp:null,inTransit:null,outForDelivery:null,delivered:null}},C=await pN(pi(st,"deliveries"),P),fe=u.jsxs("div",{children:[u.jsx("p",{className:"font-bold",children:"✅ Order Created Successfully!"}),u.jsxs("div",{className:"mt-2 space-y-1",children:[u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Tracking Code:"})," ",y]}),I>0&&u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Distance:"})," ",I.toFixed(1)," km"]}),L&&E&&u.jsx("p",{className:"text-sm text-green-600",children:"✓ Location tracking initialized at pickup point"}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Package location is set to pickup address until carrier picks it up."})]})]});ne.success(fe,{duration:6e3}),s({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),setTimeout(()=>{e(`/orders/${C.id}`)},2e3)}catch(L){console.error("Error creating order:",L),ne.error(`Failed to create order: ${L.message}`)}finally{l(!1),h(!1)}}};return i?u.jsxs("div",{className:"flex justify-center items-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),u.jsx("p",{className:"ml-4 text-gray-600",children:"Loading profile..."})]}):u.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[u.jsx(bs,{position:"top-right"}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Create New Order"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Fill in delivery details. Package location will start at pickup address."})]}),u.jsx("button",{onClick:()=>e("/orders"),className:"px-4 py-2 text-sm text-gray-600 hover:text-gray-800",children:"← Back to Orders"})]})}),u.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3",children:u.jsx("span",{className:"text-white text-sm",children:"📍"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-blue-800",children:"Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location will be initialized at the pickup address and updated as the carrier moves."})]})]})}),u.jsxs("form",{onSubmit:j,className:"space-y-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"1"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Package Information"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Package Description *"}),u.jsx("textarea",{name:"packageDescription",value:r.packageDescription,onChange:m,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Describe what's being delivered (e.g., Documents, Electronics, Food, etc.)",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageWeight",value:r.packageWeight,onChange:m,step:"0.1",min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 2.5"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"kg"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Dimensions (L×W×H cm)"}),u.jsx("input",{type:"text",name:"packageDimensions",value:r.packageDimensions,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 30×20×15"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Declared Value (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageValue",value:r.packageValue,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 500"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Priority Level"}),u.jsxs("select",{name:"priority",value:r.priority,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"standard",children:"Standard (1-2 days)"}),u.jsx("option",{value:"express",children:"Express (Same day)"}),u.jsx("option",{value:"urgent",children:"Urgent (Within hours)"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"2"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Pickup Details (Start Location)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Address *"}),u.jsx(Nx,{value:r.pickupAddress,onChange:_,placeholder:"Start typing address..."}),r.pickupCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Name *"}),u.jsx("input",{type:"text",name:"pickupContactName",value:r.pickupContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Phone *"}),u.jsx("input",{type:"tel",name:"pickupContactPhone",value:r.pickupContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Date"}),u.jsx("input",{type:"date",name:"pickupDate",value:r.pickupDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Time"}),u.jsx("input",{type:"time",name:"pickupTime",value:r.pickupTime,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Instructions"}),u.jsx("textarea",{name:"pickupInstructions",value:r.pickupInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for pickup (e.g., call before arrival, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Delivery Details (Destination)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Address *"}),u.jsx(Nx,{value:r.deliveryAddress,onChange:T,placeholder:"Start typing address..."}),r.deliveryCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Name *"}),u.jsx("input",{type:"text",name:"deliveryContactName",value:r.deliveryContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Phone *"}),u.jsx("input",{type:"tel",name:"deliveryContactPhone",value:r.deliveryContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Date"}),u.jsx("input",{type:"date",name:"deliveryDate",value:r.deliveryDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Window"}),u.jsxs("select",{name:"deliveryTimeWindow",value:r.deliveryTimeWindow,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"09:00-17:00",children:"9:00 AM - 5:00 PM"}),u.jsx("option",{value:"08:00-16:00",children:"8:00 AM - 4:00 PM"}),u.jsx("option",{value:"10:00-18:00",children:"10:00 AM - 6:00 PM"}),u.jsx("option",{value:"anytime",children:"Anytime"})]})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Instructions"}),u.jsx("textarea",{name:"deliveryInstructions",value:r.deliveryInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for delivery (e.g., leave at reception, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"4"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Special Requirements & Payment"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Payment Information"}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Method"}),u.jsxs("select",{name:"paymentMethod",value:r.paymentMethod,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"card_prepaid",children:"Card Prepaid"}),u.jsx("option",{value:"cash_on_delivery",children:"Cash on Delivery"}),u.jsx("option",{value:"mobile_money",children:"Mobile Money"}),u.jsx("option",{value:"bank_transfer",children:"Bank Transfer"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Amount (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"paymentAmount",value:r.paymentAmount,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Leave blank for auto-calculation"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave blank to auto-calculate based on distance and package value"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Special Requirements"}),u.jsxs("div",{className:"space-y-4 mb-6",children:[u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"isFragile",name:"isFragile",checked:r.isFragile,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"isFragile",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Fragile items"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Handle with care"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"requiresSignature",name:"requiresSignature",checked:r.requiresSignature,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"requiresSignature",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Signature required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Upon delivery"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"insuranceRequired",name:"insuranceRequired",checked:r.insuranceRequired,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"insuranceRequired",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Insurance required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"For high-value items"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes"}),u.jsx("textarea",{name:"notes",value:r.notes,onChange:m,rows:4,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Any additional information or special requests..."})]})]})]})]}),(r.pickupCoordinates||r.deliveryCoordinates)&&u.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6",children:[u.jsxs("h3",{className:"text-lg font-semibold text-green-800 mb-4 flex items-center",children:[u.jsx("span",{className:"mr-2",children:"✅"}),"Location Tracking Ready"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.pickupCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"📍 Pickup Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:r.pickupAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),r.deliveryCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"🎯 Delivery Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:r.deliveryAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]})]}),u.jsx("p",{className:"text-sm text-green-700 mt-4",children:"Package location will start at pickup coordinates and update as the carrier moves."})]}),u.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6",children:u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[u.jsx("div",{children:r.pickupCoordinates&&r.deliveryCoordinates&&u.jsx("p",{className:"text-sm text-green-600",children:"✓ Ready for location-based tracking"})}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"button",onClick:()=>e("/orders"),className:"px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition",children:"Cancel"}),u.jsx("button",{type:"submit",disabled:a,className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md",children:a?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),d?"Getting coordinates...":"Creating Order..."]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"mr-2",children:"📦"}),"Create Order"]})})]})]})})]}),u.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-blue-600 font-medium mb-2",children:"📍 Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location starts at pickup address and updates automatically as the carrier moves."})]}),u.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-green-600 font-medium mb-2",children:"💰 Pricing"}),u.jsx("p",{className:"text-sm text-green-700",children:"Distance-based calculation: M10 per km + 15% of package value (minimum M50)."})]}),u.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-purple-600 font-medium mb-2",children:"🚚 Carrier Assignment"}),u.jsx("p",{className:"text-sm text-purple-700",children:"Auto-assigns nearest available carrier. OTP verification included."})]})]})]})}function gF(){const[t,e]=A.useState(""),[n,r]=A.useState(null),[s,i]=A.useState(!1),o=async a=>{var l;if(a.preventDefault(),!t.trim()){ne.error("Please enter a tracking code");return}i(!0);try{const d=$l(pi(st,"deliveries"),yo("trackingCode","==",t.toUpperCase())),h=await fy(d);if(h.empty)ne.error("Tracking code not found"),r(null);else{const f=h.docs[0],m=f.data();r({id:f.id,trackingCode:m.trackingCode,status:m.status,deliveryAddress:m.deliveryAddress,carrierName:m.carrierName,estimatedDelivery:(l=m.estimatedDelivery)==null?void 0:l.toDate()}),ne.success("Order found!")}}catch(d){console.error("Error tracking order:",d),ne.error("Failed to track order")}finally{i(!1)}};return u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Order"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Enter your tracking code to get real-time updates"})]}),u.jsx(li,{to:"/track-map",className:"px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium flex items-center gap-2 h-fit",children:"🗺️ View Live Map"})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[u.jsx("form",{onSubmit:o,children:u.jsxs("div",{className:"flex gap-4",children:[u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:t,onChange:a=>e(a.target.value),placeholder:"e.g., PTR-001234",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-lg",disabled:s})}),u.jsx("button",{type:"submit",disabled:s,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Tracking...":"Track"})]})}),u.jsxs("div",{className:"mt-6 pt-6 border-t",children:[u.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Recent Searches"}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-001"}),u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-045"}),u.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-089"})]})]})]}),n&&u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold",children:n.trackingCode}),u.jsxs("p",{className:"text-gray-600 mt-1",children:["Destination: ",n.deliveryAddress]})]}),u.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0",children:u.jsx("span",{className:"text-blue-600 text-lg",children:"✓"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"Order Received"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Your order has been received"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status!=="pending"?"bg-blue-100":"bg-gray-200"}`,children:u.jsx("span",{className:`text-lg ${n.status!=="pending"?"text-blue-600":"text-gray-400"}`,children:n.status!=="pending"?"✓":"2"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:n.carrierName?`Assigned to ${n.carrierName}`:"Waiting for Carrier"}),u.jsx("p",{className:"text-sm text-gray-500",children:n.carrierName?"Your carrier has been assigned":"Waiting for a carrier to pick up"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="in_transit"||n.status==="delivered"?"bg-blue-100":"bg-gray-200"}`,children:u.jsx("span",{className:n.status==="in_transit"||n.status==="delivered"?"text-blue-600 text-lg":"text-gray-400",children:n.status==="in_transit"||n.status==="delivered"?"✓":"3"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"In Transit"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Your package is on its way"})]})]}),u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="delivered"?"bg-green-100":"bg-gray-200"}`,children:u.jsx("span",{className:n.status==="delivered"?"text-green-600 text-lg":"text-gray-400",children:n.status==="delivered"?"✓":"4"})}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium",children:"Delivered"}),u.jsx("p",{className:"text-sm text-gray-500",children:n.estimatedDelivery?`Estimated: ${n.estimatedDelivery.toLocaleDateString()}`:"Delivery in progress"})]})]})]})]}),u.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),u.jsx("p",{className:"text-gray-700 mb-4",children:"If you have any questions about your delivery, our support team is here to help."}),u.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Support"})]})]}),!n&&t&&!s&&u.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:u.jsx("p",{className:"text-gray-600",children:"Enter a tracking code and click Track to see order details"})})]})}function yF({user:t}){const[e,n]=A.useState([]),[r,s]=A.useState({}),[i,o]=A.useState(!1),[a,l]=A.useState(null),[d,h]=A.useState(null),[f,m]=A.useState(!0),_=A.useRef(null),T=A.useRef(null),b=A.useRef(new Map),R=A.useRef(null),x=A.useRef(null),w=A.useRef(null),N={lat:-29.31,lng:27.48};A.useEffect(()=>{const y=()=>{var k;return(k=window.google)!=null&&k.maps?(console.log("✅ Google Maps API is loaded"),o(!0),!0):!1};if(y())return;const I=()=>{y()&&window.removeEventListener("mapsReady",I)};window.addEventListener("mapsReady",I);const S=setTimeout(()=>{var k;(k=window.google)!=null&&k.maps||(window.removeEventListener("mapsReady",I),l("Google Maps failed to load. Please refresh the page."))},15e3);return()=>{window.removeEventListener("mapsReady",I),clearTimeout(S)}},[]),A.useEffect(()=>{if(!(t!=null&&t.uid))return;m(!0);const y=$l(pi(st,"deliveries"),yo("customerId","==",t.uid),yo("status","in",["assigned","picked_up","in_transit","out_for_delivery","delivered"])),I=mN(y,P=>{const C=[];P.forEach(fe=>{const Ee=fe.data(),it=r[fe.id],ln=it?{lat:it.lat,lng:it.lng,timestamp:new Date(it.timestamp)}:Ee.currentLocation;C.push({id:fe.id,trackingCode:Ee.trackingCode,status:Ee.status,pickupAddress:Ee.pickupAddress,deliveryAddress:Ee.deliveryAddress,estimatedDeliveryTime:Ee.estimatedDeliveryTime,distance:Ee.distance,currentLocation:ln,pickupLocation:Ee.pickupLocation,deliveryLocation:Ee.deliveryLocation,carrierName:Ee.carrierName,deliveryContactName:Ee.deliveryContactName,deliveryDate:Ee.deliveryDate})}),n(C),m(!1),C.length>0&&!d&&h(C[0].id)},P=>{console.error("Error loading deliveries:",P),m(!1)}),S=IV(f3,"deliveryTracks"),k=NV(S,P=>{const C=P.val()||{};s(C)});return()=>{I();try{k&&k()}catch{}}},[t==null?void 0:t.uid,r]),A.useEffect(()=>{if(!(!i||!window.google||!_.current)){console.log("🔄 Initializing Tracking Map...");try{const y={center:N,zoom:12,mapTypeId:window.google.maps.MapTypeId.ROADMAP,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!0,rotateControl:!1,fullscreenControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},I=new window.google.maps.Map(_.current,y);T.current=I,console.log("✅ Tracking Map initialized successfully"),b.current=new Map,l(null)}catch(y){console.error("❌ Error initializing map:",y),l("Failed to initialize map. Please check console for details.")}}},[i]);const j=A.useCallback(()=>{if(!T.current||!window.google||!i||!d)return;const y=e.find(C=>C.id===d);if(!y)return;const I=[];y.pickupLocation&&I.push({id:`pickup-${y.id}`,type:"pickup",lat:y.pickupLocation.lat,lng:y.pickupLocation.lng,title:"Pickup Location",content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #059669; font-size: 14px; font-weight: 600;">📍 Pickup Point</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${y.pickupAddress}</p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${y.pickupLocation.lat.toFixed(4)}, ${y.pickupLocation.lng.toFixed(4)}
            </p>
          </div>
        `,deliveryId:y.id}),y.currentLocation&&I.push({id:`current-${y.id}`,type:"current",lat:y.currentLocation.lat,lng:y.currentLocation.lng,title:`Order: ${y.trackingCode}`,content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${y.trackingCode}</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
              Status: <strong>${y.status.replace(/_/g," ")}</strong>
            </p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              📍 ${y.currentLocation.address||"Current location"}
            </p>
            ${y.carrierName?`<p style="margin: 0 0 5px 0; font-size: 11px; color: #6B7280;">
                Carrier: ${y.carrierName}
              </p>`:""}
            ${y.estimatedDeliveryTime?`<p style="margin: 0; font-size: 11px; color: #059669; font-weight: 600;">
                Delivery: ${y.estimatedDeliveryTime}
              </p>`:""}
          </div>
        `,deliveryId:y.id}),y.deliveryLocation&&I.push({id:`delivery-${y.id}`,type:"delivery",lat:y.deliveryLocation.lat,lng:y.deliveryLocation.lng,title:"Delivery Location",content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #DC2626; font-size: 14px; font-weight: 600;">🎯 Delivery Destination</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${y.deliveryAddress}</p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              Recipient: <strong>${y.deliveryContactName}</strong>
            </p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${y.deliveryLocation.lat.toFixed(4)}, ${y.deliveryLocation.lng.toFixed(4)}
            </p>
          </div>
        `,deliveryId:y.id});const S=new Set(b.current.keys()),k=new Set(I.map(C=>C.id));for(const C of S)if(!k.has(C)){const fe=b.current.get(C);fe&&(fe.setMap(null),b.current.delete(C))}const P=[];if(I.forEach(C=>{const fe=b.current.get(C.id),Ee={lat:C.lat,lng:C.lng};let it;if(fe)fe.setPosition(Ee),it=fe;else try{const ln=C.type==="pickup"?"#059669":C.type==="delivery"?"#DC2626":"#3B82F6",$={path:window.google.maps.SymbolPath.CIRCLE,fillColor:ln,fillOpacity:1,strokeColor:"#FFFFFF",strokeWeight:2,scale:C.type==="current"?12:9};it=new window.google.maps.Marker({position:Ee,map:T.current,icon:$,title:C.title}),it.addListener("click",()=>{x.current||(x.current=new window.google.maps.InfoWindow),x.current.setContent(C.content),x.current.open(T.current,it)}),b.current.set(C.id,it)}catch(ln){console.error("Error creating marker:",ln);return}P.push(it)}),w.current&&w.current.setMap(null),y.pickupLocation&&y.currentLocation&&y.deliveryLocation){const C=[{lat:y.pickupLocation.lat,lng:y.pickupLocation.lng}];y.currentLocation&&C.push({lat:y.currentLocation.lat,lng:y.currentLocation.lng}),C.push({lat:y.deliveryLocation.lat,lng:y.deliveryLocation.lng}),w.current=new window.google.maps.Polyline({path:C,geodesic:!0,strokeColor:"#3B82F6",strokeOpacity:.7,strokeWeight:3,map:T.current})}if(P.length>0){const C=new window.google.maps.LatLngBounds;P.forEach(fe=>{C.extend(fe.getPosition())}),C.isEmpty()||T.current.fitBounds(C,50)}},[e,d,i]);A.useEffect(()=>(R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{j()},300),()=>{R.current&&clearTimeout(R.current)}),[e,d,i,j]);const M=y=>{const I=e.find(S=>S.id===y);I!=null&&I.currentLocation&&T.current&&(T.current.setCenter({lat:I.currentLocation.lat,lng:I.currentLocation.lng}),T.current.setZoom(16))},L=y=>{switch(y){case"assigned":return"bg-blue-50 border-blue-200 text-blue-700";case"picked_up":return"bg-purple-50 border-purple-200 text-purple-700";case"in_transit":return"bg-amber-50 border-amber-200 text-amber-700";case"out_for_delivery":return"bg-blue-50 border-blue-200 text-blue-700";case"delivered":return"bg-green-50 border-green-200 text-green-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},E=y=>{switch(y){case"assigned":return"📋";case"picked_up":return"📦";case"in_transit":return"🚚";case"out_for_delivery":return"🚗";case"delivered":return"✅";default:return"📍"}};return i?a?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🗺️"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Map Error"}),u.jsx("p",{className:"text-red-600 mb-4",children:a}),u.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Refresh Page"})]}):f?u.jsxs("div",{className:"flex justify-center items-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),u.jsx("p",{className:"ml-4 text-gray-600",children:"Loading your deliveries..."})]}):u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Orders"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Real-time tracking of your deliveries"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Active Orders"}),u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:e.length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"In Transit"}),u.jsx("div",{className:"text-2xl font-bold text-amber-600",children:e.filter(y=>y.status==="in_transit").length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Delivered"}),u.jsx("div",{className:"text-2xl font-bold text-green-600",children:e.filter(y=>y.status==="delivered").length})]})]}),e.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"📦"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No active orders"}),u.jsx("p",{className:"text-gray-500",children:"Your orders will appear here once they are assigned to a carrier"})]}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden mb-8",children:[u.jsx("div",{className:"border-b px-6 py-4 bg-gray-50",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h3",{className:"font-medium text-gray-700",children:"Real-time Order Tracking"}),u.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-green-600 mr-2"}),u.jsx("span",{children:"Pickup"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600 mr-2"}),u.jsx("span",{children:"Current"})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600 mr-2"}),u.jsx("span",{children:"Destination"})]})]})]})}),u.jsx("div",{ref:_,className:"w-full h-[500px] bg-gray-100",style:{minHeight:"500px"}}),u.jsx("div",{className:"border-t px-6 py-4 bg-gray-50",children:u.jsx("div",{className:"text-sm text-gray-500",children:"Click on markers for details. Your package location updates in real-time."})})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"lg:col-span-1",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Your Orders"}),u.jsx("div",{className:"space-y-3",children:e.map(y=>u.jsxs("div",{onClick:()=>{h(y.id),M(y.id)},className:`p-4 rounded-lg border-2 cursor-pointer transition ${d===y.id?"border-blue-600 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"}`,children:[u.jsx("div",{className:"flex items-start justify-between",children:u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-gray-800",children:y.trackingCode}),u.jsxs("div",{className:`text-xs mt-1 inline-block px-2 py-1 rounded ${L(y.status)}`,children:[E(y.status)," ",y.status.replace(/_/g," ")]})]})}),y.distance&&u.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Distance: ",y.distance," km"]})]},y.id))})]}),u.jsx("div",{className:"lg:col-span-2",children:d&&e.find(y=>y.id===d)?(()=>{var I;const y=e.find(S=>S.id===d);return u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Order Summary"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Tracking Code"}),u.jsx("div",{className:"font-bold text-gray-800",children:y.trackingCode})]}),u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Status"}),u.jsxs("div",{className:`inline-block px-3 py-1 rounded-lg text-sm font-medium ${L(y.status)}`,children:[E(y.status)," ",y.status.replace(/_/g," ")]})]}),y.carrierName&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Carrier"}),u.jsx("div",{className:"font-medium text-gray-800",children:y.carrierName})]}),y.distance&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Distance"}),u.jsxs("div",{className:"font-medium text-gray-800",children:[y.distance," km"]})]}),y.estimatedDeliveryTime&&u.jsxs("div",{children:[u.jsx("div",{className:"text-sm text-gray-600",children:"Estimated Delivery"}),u.jsx("div",{className:"font-medium text-green-600",children:y.estimatedDeliveryTime})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Route Information"}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"pb-4 border-b",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold",children:"1"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Pickup Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:y.pickupAddress})]})]})}),u.jsx("div",{className:"pb-4 border-b",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold",children:"2"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Current Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:((I=y.currentLocation)==null?void 0:I.address)||"In transit"})]})]})}),u.jsx("div",{children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",children:"3"}),u.jsxs("div",{className:"ml-3 flex-1",children:[u.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Delivery Location"}),u.jsx("div",{className:"text-sm text-gray-600 mt-1",children:y.deliveryAddress}),u.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Recipient: ",y.deliveryContactName]})]})]})})]})]})]})})():null})]})]})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center h-96",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Loading map..."}),u.jsx("p",{className:"text-gray-500",children:"This may take a few moments"})]})}function _F({user:t,userProfile:e}){var h,f;const[n,r]=A.useState({fullName:(e==null?void 0:e.fullName)||"",email:(t==null?void 0:t.email)||"",phone:(e==null?void 0:e.phone)||"",address:(e==null?void 0:e.address)||"",whatsapp:(e==null?void 0:e.whatsapp)||""}),[s,i]=A.useState(!1),[o,a]=A.useState(!1),l=m=>{const{name:_,value:T}=m.target;r(b=>({...b,[_]:T}))},d=async()=>{i(!0);try{t&&(await gl(rn(st,"users",t.uid),{fullName:n.fullName,phone:n.phone,address:n.address,whatsapp:n.whatsapp,updatedAt:new Date}),ne.success("Profile updated successfully!"),a(!1))}catch(m){console.error("Error updating profile:",m),ne.error("Failed to update profile")}finally{i(!1)}};return u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Profile"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your personal information"})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[u.jsx("div",{className:"lg:col-span-2",children:u.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsx("h2",{className:"text-2xl font-bold",children:"Personal Information"}),u.jsx("button",{onClick:()=>a(!o),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:o?"Cancel":"Edit"})]}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),u.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),u.jsx("input",{type:"email",value:n.email,disabled:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),u.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),u.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Default Address"}),u.jsx("input",{type:"text",name:"address",value:n.address,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),o&&u.jsx("button",{onClick:d,disabled:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Saving...":"Save Changes"})]})]})}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Account Information"}),u.jsxs("div",{className:"space-y-3 text-sm",children:[u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Member Since"}),u.jsx("p",{className:"font-medium",children:e!=null&&e.createdAt?new Date(((f=(h=e.createdAt).toDate)==null?void 0:f.call(h))||e.createdAt).toLocaleDateString():"N/A"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Account Status"}),u.jsx("p",{className:"font-medium text-green-600",children:"Active"})]}),u.jsxs("div",{children:[u.jsx("p",{className:"text-gray-500",children:"Verified Email"}),u.jsx("p",{className:"font-medium",children:"✓ Yes"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-bold mb-4",children:"Activity"}),u.jsxs("div",{className:"space-y-3 text-sm",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"Total Orders"}),u.jsx("p",{className:"font-bold",children:"12"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"Completed"}),u.jsx("p",{className:"font-bold text-green-600",children:"10"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("p",{className:"text-gray-600",children:"In Progress"}),u.jsx("p",{className:"font-bold text-blue-600",children:"2"})]})]})]})]})]})]})}function vF(){const t=Er(),[e,n]=A.useState({emailNotifications:!0,smsNotifications:!0,pushNotifications:!0,showProfile:!0}),[r,s]=A.useState(!1),[i,o]=A.useState(!1),a=h=>{n(f=>({...f,[h]:!f[h]})),ne.success("Preference updated")},l=async()=>{try{await NI(sn),ne.success("Logged out successfully"),t("/login")}catch(h){console.error("Error logging out:",h),ne.error("Failed to logout")}},d=async()=>{o(!0);try{const h=sn.currentUser;h&&(await GP(h),ne.success("Account deleted successfully"),t("/login"))}catch(h){console.error("Error deleting account:",h),ne.error("Failed to delete account. Please try again later.")}finally{o(!1),s(!1)}};return u.jsxs("div",{children:[u.jsx(bs,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Settings"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your preferences and account"})]}),u.jsxs("div",{className:"max-w-2xl space-y-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Notifications"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Email Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive updates about your deliveries via email"})]}),u.jsx("button",{onClick:()=>a("emailNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.emailNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.emailNotifications?"translate-x-7":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"SMS Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive text message updates about your deliveries"})]}),u.jsx("button",{onClick:()=>a("smsNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.smsNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.smsNotifications?"translate-x-7":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Push Notifications"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Receive push notifications from the app"})]}),u.jsx("button",{onClick:()=>a("pushNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.pushNotifications?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.pushNotifications?"translate-x-7":"translate-x-1"}`})})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Privacy"}),u.jsx("div",{className:"space-y-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-800",children:"Public Profile"}),u.jsx("p",{className:"text-sm text-gray-500",children:"Let other users see your profile information"})]}),u.jsx("button",{onClick:()=>a("showProfile"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.showProfile?"bg-blue-600":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.showProfile?"translate-x-7":"translate-x-1"}`})})]})})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Security"}),u.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🔐 Change Password"}),u.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50",children:"🔑 Two-Factor Authentication"})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-6",children:"Account"}),u.jsx("button",{onClick:l,className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🚪 Logout"}),u.jsx("button",{onClick:()=>s(!0),className:"w-full px-4 py-3 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50",children:"🗑️ Delete Account"})]}),r&&u.jsxs("div",{className:"bg-red-50 rounded-xl shadow p-6 border border-red-200",children:[u.jsx("h3",{className:"text-lg font-bold text-red-800 mb-3",children:"⚠️ Delete Account"}),u.jsx("p",{className:"text-red-700 mb-6",children:"Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."}),u.jsxs("div",{className:"flex gap-3",children:[u.jsx("button",{onClick:()=>s(!1),className:"flex-1 px-4 py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-100",children:"Cancel"}),u.jsx("button",{onClick:d,disabled:i,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed",children:i?"Deleting...":"Delete Permanently"})]})]})]})]})}function wF({user:t}){const[e,n]=A.useState(null),[r,s]=A.useState(!0);return A.useEffect(()=>{(async()=>{if(t){const o=await Wl(rn(st,"users",t.uid));o.exists()&&n(o.data())}s(!1)})()},[t]),r?u.jsx("div",{className:"flex items-center justify-center min-h-screen",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):u.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[u.jsx(v6,{}),u.jsxs("div",{className:"flex-1 flex flex-col",children:[u.jsx(x6,{user:t,userProfile:e}),u.jsx("main",{className:"flex-1 p-6",children:u.jsxs(WS,{children:[u.jsx(bt,{path:"/",element:u.jsx($S,{to:"/dashboard",replace:!0})}),u.jsx(bt,{path:"/dashboard",element:u.jsx(dF,{user:t,userProfile:e})}),u.jsx(bt,{path:"/orders",element:u.jsx(hF,{})}),u.jsx(bt,{path:"/orders/new",element:u.jsx(mF,{user:t})}),u.jsx(bt,{path:"/orders/:id",element:u.jsx(fF,{})}),u.jsx(bt,{path:"/track",element:u.jsx(gF,{})}),u.jsx(bt,{path:"/track-map",element:u.jsx(yF,{user:t})}),u.jsx(bt,{path:"/profile",element:u.jsx(_F,{user:t,userProfile:e})}),u.jsx(bt,{path:"/settings",element:u.jsx(vF,{})})]})})]})]})}function xF(){const t=Er(),[e,n]=A.useState(""),[r,s]=A.useState(""),[i,o]=A.useState(!1),[a,l]=A.useState(""),[d,h]=A.useState(!1),f=async m=>{m.preventDefault(),o(!0),l(""),h(!1);try{const T=(await $P(sn,e,r)).user,b=await Wl(rn(st,"users",T.uid));if(!b.exists()){l("Account not found. Please contact support."),await sn.signOut(),o(!1);return}const R=b.data();if(R.role!=="customer"){l("This account is not a customer account. Please use the correct portal."),await sn.signOut(),o(!1);return}T.emailVerified||R.emailVerified===!0?T.emailVerified&&!R.emailVerified&&await gl(rn(st,"users",T.uid),{emailVerified:!0,updatedAt:new Date}):(h(!0),T.emailVerified&&!R.emailVerified&&await gl(rn(st,"users",T.uid),{emailVerified:!0,updatedAt:new Date})),console.log("Customer login successful for:",T.email)}catch(_){console.error("Login error:",_),_.code==="auth/invalid-credential"||_.code==="auth/user-not-found"||_.code==="auth/wrong-password"?l("Invalid email or password. Please try again."):_.code==="auth/too-many-requests"?l("Too many failed attempts. Please try again later."):_.code==="auth/user-disabled"?l("This account has been disabled. Please contact support."):_.code==="auth/network-request-failed"?l("Network error. Please check your internet connection."):l(_.message||"Login failed. Please try again.")}finally{o(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4",children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 bg-green-600 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),u.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]}),u.jsx("p",{className:"text-gray-600",children:"Sign in to track deliveries and manage orders"})]}),d&&u.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:u.jsxs("div",{className:"flex",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-yellow-600",children:"⚠️"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Verify Your Email"}),u.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Please verify your email for full account security. Check your inbox for the verification email."})]})]})}),a&&u.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 mb-6",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-red-500",children:"⚠️"})}),u.jsx("div",{className:"ml-3",children:u.jsx("p",{className:"text-red-700 text-sm",children:a})})]})}),u.jsxs("form",{onSubmit:f,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),u.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:m=>n(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,disabled:i})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),u.jsx("input",{type:"password",placeholder:"Enter your password",value:r,onChange:m=>s(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,minLength:6,disabled:i}),u.jsx("div",{className:"text-right mt-2",children:u.jsx("button",{type:"button",onClick:()=>t("/forgot-password"),className:"text-sm text-green-600 hover:text-green-800",children:"Forgot password?"})})]}),u.jsx("button",{type:"submit",disabled:i,className:"w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:i?u.jsxs(u.Fragment,{children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),u.jsxs("div",{className:"flex items-center my-8",children:[u.jsx("div",{className:"flex-grow border-t border-gray-300"}),u.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),u.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),u.jsxs("div",{className:"text-center",children:[u.jsx("p",{className:"text-gray-600 mb-4",children:"New to PTROS?"}),u.jsx(li,{to:"/register",className:"inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition",children:"Create Customer Account"})]}),u.jsxs("div",{className:"mt-8 p-4 bg-green-50 border border-green-200 rounded-lg",children:[u.jsx("h4",{className:"text-sm font-medium text-green-800 mb-2",children:"Customer Benefits"}),u.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[u.jsx("li",{children:"• Track deliveries in real-time"}),u.jsx("li",{children:"• View delivery history"}),u.jsx("li",{children:"• Get SMS/email notifications"}),u.jsx("li",{children:"• Manage your delivery addresses"})]})]}),u.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",u.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-green-600 hover:text-green-800",children:"Contact Support"})]})})]})})}function EF(){const t=Er(),[e,n]=A.useState(!1),[r,s]=A.useState(""),[i,o]=A.useState(1),[a,l]=A.useState({fullName:"",email:"",password:"",confirmPassword:"",phone:"",address:"",city:"Maseru",acceptTerms:!1}),d=["Maseru","Teyateyaneng","Mafeteng","Hlotse","Mohale's Hoek","Maputsoe","Qacha's Nek","Quthing","Butha-Buthe","Mokhotlong","Thaba-Tseka","Semonkong","Roma"],h=R=>{const{name:x,value:w,type:N}=R.target;if(N==="checkbox"){const j=R.target.checked;l(M=>({...M,[x]:j}))}else l(j=>({...j,[x]:w}))},f=()=>a.fullName.trim()?a.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?a.password.length<8?(s("Password must be at least 8 characters"),!1):a.password!==a.confirmPassword?(s("Passwords do not match"),!1):!0:(s("Valid email is required"),!1):(s("Full name is required"),!1),m=()=>a.phone.match(/^\+?[0-9\s\-()]{10,}$/)?a.address.trim()?!0:(s("Physical address is required"),!1):(s("Valid phone number is required"),!1),_=()=>{s(""),!(i===1&&!f())&&(i===2&&!m()||o(i+1))},T=()=>{s(""),o(i-1)},b=async R=>{if(R.preventDefault(),n(!0),s(""),!a.acceptTerms){s("You must accept the terms and conditions"),n(!1);return}try{const w=(await zP(sn,a.email,a.password)).user.uid;await IL(rn(st,"users",w),{email:a.email,role:"customer",fullName:a.fullName,phone:a.phone,address:a.address,city:a.city,country:"Lesotho",createdAt:new Date,updatedAt:new Date,emailVerified:!1}),_d.success("Account created successfully!"),t("/login")}catch(x){x.code==="auth/email-already-in-use"?s("This email is already registered. Please login or use a different email."):x.code==="auth/weak-password"?s("Password is too weak. Use at least 8 characters with letters and numbers."):x.code==="auth/invalid-email"?s("Invalid email address. Please enter a valid email."):s(x.message||"Registration failed. Please try again.")}finally{n(!1)}};return u.jsx("div",{className:"min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8 px-4",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx(li,{to:"/",className:"inline-block mb-4",children:u.jsxs("div",{className:"flex items-center justify-center gap-2",children:[u.jsx("div",{className:"w-10 h-10 bg-green-600 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),u.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]})}),u.jsx("h2",{className:"text-2xl font-semibold text-gray-700",children:"Create Your Account"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Join PTROS and start tracking your deliveries"})]}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("div",{className:`text-sm font-medium ${i>=1?"text-green-600":"text-gray-400"}`,children:"1. Account"}),u.jsx("div",{className:`text-sm font-medium ${i>=2?"text-green-600":"text-gray-400"}`,children:"2. Details"}),u.jsx("div",{className:`text-sm font-medium ${i>=3?"text-green-600":"text-gray-400"}`,children:"3. Review"})]}),u.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:u.jsx("div",{className:"h-full bg-green-600 rounded-full transition-all duration-300",style:{width:`${(i-1)*50}%`}})})]}),u.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[r&&u.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 m-6",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-red-500",children:"⚠️"})}),u.jsx("div",{className:"ml-3",children:u.jsx("p",{className:"text-red-700",children:r})})]})}),u.jsxs("form",{onSubmit:b,children:[i===1&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Account Information"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),u.jsx("input",{type:"text",name:"fullName",value:a.fullName,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"John Doe",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),u.jsx("input",{type:"email",name:"email",value:a.email,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"john@example.com",required:!0})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password *"}),u.jsx("input",{type:"password",name:"password",value:a.password,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"At least 8 characters",minLength:8,required:!0}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Minimum 8 characters"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password *"}),u.jsx("input",{type:"password",name:"confirmPassword",value:a.confirmPassword,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"Confirm your password",required:!0})]})]})]}),u.jsx("div",{className:"mt-8 flex justify-end",children:u.jsx("button",{type:"button",onClick:_,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition",children:"Next: Contact Details →"})})]}),i===2&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Contact Details"}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),u.jsx("input",{type:"tel",name:"phone",value:a.phone,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"+266 5000 0000",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),u.jsx("select",{name:"city",value:a.city,onChange:h,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",required:!0,children:d.map(R=>u.jsx("option",{value:R,children:R},R))})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Physical Address *"}),u.jsx("textarea",{name:"address",value:a.address,onChange:h,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500",placeholder:"House number, street, area",required:!0})]})]}),u.jsxs("div",{className:"mt-8 flex justify-between",children:[u.jsx("button",{type:"button",onClick:T,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),u.jsx("button",{type:"button",onClick:_,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium",children:"Next: Review →"})]})]}),i===3&&u.jsxs("div",{className:"p-8",children:[u.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Review & Submit"}),u.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[u.jsx("h4",{className:"font-semibold text-lg mb-4",children:"Your Information"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{className:"flex justify-between items-center pb-3 border-b",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),u.jsx("p",{className:"font-medium",children:a.fullName})]}),u.jsxs("div",{className:"flex justify-between items-center pb-3 border-b",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),u.jsx("p",{className:"font-medium",children:a.email})]}),u.jsxs("div",{className:"flex justify-between items-center pb-3 border-b",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Phone"}),u.jsx("p",{className:"font-medium",children:a.phone})]}),u.jsxs("div",{className:"flex justify-between items-center pb-3 border-b",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"City"}),u.jsx("p",{className:"font-medium",children:a.city})]}),u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Address"}),u.jsx("p",{className:"font-medium text-right max-w-xs",children:a.address})]})]})]}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:a.acceptTerms,onChange:h,className:"mt-1 mr-3",required:!0}),u.jsx("label",{htmlFor:"acceptTerms",className:"text-sm text-gray-700",children:"I agree to the PTROS Customer Terms and Conditions and Privacy Policy. I understand how my delivery data will be used and managed."})]})}),u.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4 mb-6",children:u.jsxs("div",{className:"flex",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-green-600",children:"✓"})}),u.jsxs("div",{className:"ml-3",children:[u.jsx("h4",{className:"text-sm font-medium text-green-800",children:"Welcome Benefits"}),u.jsx("div",{className:"text-sm text-green-700 mt-1",children:u.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[u.jsx("li",{children:"Track your deliveries in real-time"}),u.jsx("li",{children:"Receive SMS/email notifications"}),u.jsx("li",{children:"View complete delivery history"}),u.jsx("li",{children:"Access customer support 24/7"})]})})]})]})}),u.jsxs("div",{className:"mt-8 flex justify-between",children:[u.jsx("button",{type:"button",onClick:T,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),u.jsx("button",{type:"submit",disabled:e||!a.acceptTerms,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:e?"Creating Account...":"Create Account"})]})]})]})]}),u.jsx("div",{className:"text-center mt-8",children:u.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",u.jsx(li,{to:"/login",className:"text-green-600 hover:text-green-800 font-medium",children:"Login here"})]})})]})})}function TF(){const t=Er(),[e,n]=A.useState(""),[r,s]=A.useState(!1),[i,o]=A.useState(""),[a,l]=A.useState(!1),d=async h=>{if(h.preventDefault(),s(!0),o(""),!e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){o("Please enter a valid email address"),s(!1);return}try{await BP(sn,e),l(!0),_d.success("Password reset email sent!"),setTimeout(()=>{t("/login")},3e3)}catch(f){console.error("Password reset error:",f),f.code==="auth/user-not-found"?o("No account found with this email address. Please check and try again."):f.code==="auth/invalid-email"?o("Invalid email address. Please try again."):f.code==="auth/too-many-requests"?o("Too many reset requests. Please try again later or contact support."):f.code==="auth/network-request-failed"?o("Network error. Please check your internet connection."):o(f.message||"Failed to send reset email. Please try again.")}finally{s(!1)}};return a?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4",children:u.jsx("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"mb-6 flex justify-center",children:u.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-3xl",children:"✓"})})}),u.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Check Your Email"}),u.jsx("p",{className:"text-gray-600 mb-6",children:"We've sent a password reset link to:"}),u.jsx("div",{className:"bg-gray-50 rounded-lg p-4 mb-6 break-all",children:u.jsx("p",{className:"font-medium text-gray-800",children:e})}),u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:[u.jsx("h4",{className:"text-sm font-medium text-blue-800 mb-2",children:"What to do next:"}),u.jsxs("ol",{className:"text-sm text-blue-700 space-y-2 list-decimal list-inside",children:[u.jsx("li",{children:"Check your email (including spam folder)"}),u.jsx("li",{children:"Click the reset link in the email"}),u.jsx("li",{children:"Create a new password"}),u.jsx("li",{children:"Return here to sign in"})]})]}),u.jsx("p",{className:"text-sm text-gray-500 mb-6",children:"The reset link expires in 1 hour for security."}),u.jsx("button",{onClick:()=>t("/login"),className:"w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition",children:"Back to Login"}),u.jsxs("p",{className:"text-sm text-gray-500 mt-4",children:["Didn't receive the email?"," ",u.jsx("button",{onClick:()=>{l(!1),n("")},className:"text-green-600 hover:text-green-800 font-medium",children:"Try again"})]})]})})}):u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4",children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 bg-green-600 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),u.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]}),u.jsx("h2",{className:"text-2xl font-semibold text-gray-700 mt-4",children:"Reset Your Password"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Enter your email address and we'll send you a reset link"})]}),i&&u.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 mb-6",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("span",{className:"text-red-500",children:"⚠️"})}),u.jsx("div",{className:"ml-3",children:u.jsx("p",{className:"text-red-700 text-sm",children:i})})]})}),u.jsxs("form",{onSubmit:d,className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),u.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:h=>{n(h.target.value),o("")},className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,disabled:r}),u.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Enter the email address associated with your account"})]}),u.jsx("button",{type:"submit",disabled:r,className:"w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:r?u.jsxs(u.Fragment,{children:[u.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[u.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),u.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):"Send Reset Email"})]}),u.jsxs("div",{className:"mt-8 p-4 bg-green-50 border border-green-200 rounded-lg",children:[u.jsx("h4",{className:"text-sm font-medium text-green-800 mb-2",children:"💡 Password Reset Process"}),u.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[u.jsx("li",{children:"• We'll send a reset link to your email"}),u.jsx("li",{children:"• The link is valid for 1 hour"}),u.jsx("li",{children:"• Click the link to create a new password"}),u.jsx("li",{children:"• You can then log in with your new password"})]})]}),u.jsxs("div",{className:"mt-8 text-center pt-6 border-t border-gray-200",children:[u.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Remember your password?"}),u.jsx(li,{to:"/login",className:"inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition",children:"Back to Login"})]}),u.jsx("div",{className:"text-center mt-6",children:u.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",u.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-green-600 hover:text-green-800 font-medium",children:"Contact Support"})]})})]})})}const Sx="customer";function IF(){const[t,e]=A.useState(!0),[n,r]=A.useState(null),[s,i]=A.useState(null);return A.useEffect(()=>{const o=HP(sn,async a=>{var l;if(a){const d=await Wl(rn(st,"users",a.uid)),h=d.exists()?(l=d.data())==null?void 0:l.role:null;r(a),i(h)}else r(null),i(null);e(!1)});return()=>o()},[]),u.jsxs(d6,{children:[u.jsxs(_6,{children:[t&&u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-700",children:"Loading PTROS Customer..."})]})}),!t&&!n&&u.jsxs(WS,{children:[u.jsx(bt,{path:"/login",element:u.jsx(xF,{})}),u.jsx(bt,{path:"/register",element:u.jsx(EF,{})}),u.jsx(bt,{path:"/forgot-password",element:u.jsx(TF,{})}),u.jsx(bt,{path:"*",element:u.jsx($S,{to:"/login",replace:!0})})]}),!t&&n&&s!==Sx&&u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-center p-10",children:[u.jsx("h1",{className:"text-4xl font-bold text-red-600 mb-4",children:"Access Denied"}),u.jsx("p",{className:"text-xl mb-4",children:"This portal is for customers only."}),u.jsxs("p",{className:"text-lg",children:["You are logged in as: ",u.jsx("strong",{children:s})]}),u.jsx("button",{onClick:()=>sn.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===Sx&&u.jsx(wF,{user:n})]}),u.jsx(bs,{})]})}Ff.createRoot(document.getElementById("root")).render(u.jsx(Vx.StrictMode,{children:u.jsx(IF,{})}));
