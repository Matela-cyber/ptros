var b1=Object.defineProperty;var C1=(t,e,n)=>e in t?b1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var jn=(t,e,n)=>C1(t,typeof e!="symbol"?e+"":e,n);function N1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function A1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var pE={exports:{}},zd={},mE={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ql=Symbol.for("react.element"),k1=Symbol.for("react.portal"),R1=Symbol.for("react.fragment"),P1=Symbol.for("react.strict_mode"),D1=Symbol.for("react.profiler"),O1=Symbol.for("react.provider"),L1=Symbol.for("react.context"),j1=Symbol.for("react.forward_ref"),M1=Symbol.for("react.suspense"),V1=Symbol.for("react.memo"),F1=Symbol.for("react.lazy"),Nv=Symbol.iterator;function U1(t){return t===null||typeof t!="object"?null:(t=Nv&&t[Nv]||t["@@iterator"],typeof t=="function"?t:null)}var gE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_E=Object.assign,yE={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||gE}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vE(){}vE.prototype=Mo.prototype;function Xm(t,e,n){this.props=t,this.context=e,this.refs=yE,this.updater=n||gE}var Zm=Xm.prototype=new vE;Zm.constructor=Xm;_E(Zm,Mo.prototype);Zm.isPureReactComponent=!0;var Av=Array.isArray,wE=Object.prototype.hasOwnProperty,eg={current:null},xE={key:!0,ref:!0,__self:!0,__source:!0};function EE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)wE.call(e,r)&&!xE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Ql,type:t,key:i,ref:o,props:s,_owner:eg.current}}function B1(t,e){return{$$typeof:Ql,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ql}function $1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kv=/\/+/g;function _f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$1(""+t.key):e.toString(36)}function lu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ql:case k1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+_f(o,0):r,Av(s)?(n="",t!=null&&(n=t.replace(kv,"$&/")+"/"),lu(s,e,n,"",function(u){return u})):s!=null&&(tg(s)&&(s=B1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(kv,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Av(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+_f(i,a);o+=lu(i,e,n,l,s)}else if(l=U1(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+_f(i,a++),o+=lu(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Pc(t,e,n){if(t==null)return t;var r=[],s=0;return lu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var jt={current:null},cu={transition:null},W1={ReactCurrentDispatcher:jt,ReactCurrentBatchConfig:cu,ReactCurrentOwner:eg};function TE(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Pc,forEach:function(t,e,n){Pc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Pc(t,function(){e++}),e},toArray:function(t){return Pc(t,function(e){return e})||[]},only:function(t){if(!tg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Mo;ue.Fragment=R1;ue.Profiler=D1;ue.PureComponent=Xm;ue.StrictMode=P1;ue.Suspense=M1;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;ue.act=TE;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_E({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=eg.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wE.call(e,l)&&!xE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ql,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:L1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:O1,_context:t},t.Consumer=t};ue.createElement=EE;ue.createFactory=function(t){var e=EE.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:j1,render:t}};ue.isValidElement=tg;ue.lazy=function(t){return{$$typeof:F1,_payload:{_status:-1,_result:t},_init:z1}};ue.memo=function(t,e){return{$$typeof:V1,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=cu.transition;cu.transition={};try{t()}finally{cu.transition=e}};ue.unstable_act=TE;ue.useCallback=function(t,e){return jt.current.useCallback(t,e)};ue.useContext=function(t){return jt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return jt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return jt.current.useEffect(t,e)};ue.useId=function(){return jt.current.useId()};ue.useImperativeHandle=function(t,e,n){return jt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return jt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return jt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return jt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return jt.current.useReducer(t,e,n)};ue.useRef=function(t){return jt.current.useRef(t)};ue.useState=function(t){return jt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return jt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return jt.current.useTransition()};ue.version="18.3.1";mE.exports=ue;var O=mE.exports;const IE=A1(O),q1=N1({__proto__:null,default:IE},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H1=O,G1=Symbol.for("react.element"),K1=Symbol.for("react.fragment"),Q1=Object.prototype.hasOwnProperty,Y1=H1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J1={key:!0,ref:!0,__self:!0,__source:!0};function SE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Q1.call(e,r)&&!J1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:G1,type:t,key:i,ref:o,props:s,_owner:Y1.current}}zd.Fragment=K1;zd.jsx=SE;zd.jsxs=SE;pE.exports=zd;var d=pE.exports,mp={},bE={exports:{}},rn={},CE={exports:{}},NE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var Q=z.length;z.push(W);e:for(;0<Q;){var ae=Q-1>>>1,Ne=z[ae];if(0<s(Ne,W))z[ae]=W,z[Q]=Ne,Q=ae;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],Q=z.pop();if(Q!==W){z[0]=Q;e:for(var ae=0,Ne=z.length,on=Ne>>>1;ae<on;){var Kt=2*(ae+1)-1,sr=z[Kt],Qt=Kt+1,Or=z[Qt];if(0>s(sr,Q))Qt<Ne&&0>s(Or,sr)?(z[ae]=Or,z[Qt]=Q,ae=Qt):(z[ae]=sr,z[Kt]=Q,ae=Kt);else if(Qt<Ne&&0>s(Or,Q))z[ae]=Or,z[Qt]=Q,ae=Qt;else break e}}return W}function s(z,W){var Q=z.sortIndex-W.sortIndex;return Q!==0?Q:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,m=3,_=!1,C=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(z){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=z)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function D(z){if(A=!1,x(z),!C)if(n(l)!==null)C=!0,ft(V);else{var W=n(u);W!==null&&it(D,W.startTime-z)}}function V(z,W){C=!1,A&&(A=!1,S(y),y=-1),_=!0;var Q=m;try{for(x(W),p=n(l);p!==null&&(!(p.expirationTime>W)||z&&!N());){var ae=p.callback;if(typeof ae=="function"){p.callback=null,m=p.priorityLevel;var Ne=ae(p.expirationTime<=W);W=t.unstable_now(),typeof Ne=="function"?p.callback=Ne:p===n(l)&&r(l),x(W)}else r(l);p=n(l)}if(p!==null)var on=!0;else{var Kt=n(u);Kt!==null&&it(D,Kt.startTime-W),on=!1}return on}finally{p=null,m=Q,_=!1}}var F=!1,I=null,y=-1,w=5,b=-1;function N(){return!(t.unstable_now()-b<w)}function k(){if(I!==null){var z=t.unstable_now();b=z;var W=!0;try{W=I(!0,z)}finally{W?T():(F=!1,I=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(k)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,te=ge.port2;ge.port1.onmessage=k,T=function(){te.postMessage(null)}}else T=function(){R(k,0)};function ft(z){I=z,F||(F=!0,T())}function it(z,W){y=R(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){C||_||(C=!0,ft(V))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var Q=m;m=W;try{return z()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=m;m=z;try{return W()}finally{m=Q}},t.unstable_scheduleCallback=function(z,W,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,z){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Q+Ne,z={id:h++,callback:W,priorityLevel:z,startTime:Q,expirationTime:Ne,sortIndex:-1},Q>ae?(z.sortIndex=Q,e(u,z),n(l)===null&&z===n(u)&&(A?(S(y),y=-1):A=!0,it(D,Q-ae))):(z.sortIndex=Ne,e(l,z),C||_||(C=!0,ft(V))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var W=m;return function(){var Q=m;m=W;try{return z.apply(this,arguments)}finally{m=Q}}}})(NE);CE.exports=NE;var X1=CE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=O,nn=X1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var AE=new Set,ul={};function Ti(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(ul[t]=e,t=0;t<e.length;t++)AE.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gp=Object.prototype.hasOwnProperty,eA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rv={},Pv={};function tA(t){return gp.call(Pv,t)?!0:gp.call(Rv,t)?!1:eA.test(t)?Pv[t]=!0:(Rv[t]=!0,!1)}function nA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rA(t,e,n,r){if(e===null||typeof e>"u"||nA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ng=/[\-:]([a-z])/g;function rg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ng,rg);yt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ng,rg);yt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ng,rg);yt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sg(t,e,n,r){var s=yt.hasOwnProperty(e)?yt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rA(e,n,s,r)&&(n=null),r||s===null?tA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Rr=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dc=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),ig=Symbol.for("react.strict_mode"),_p=Symbol.for("react.profiler"),kE=Symbol.for("react.provider"),RE=Symbol.for("react.context"),og=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),vp=Symbol.for("react.suspense_list"),ag=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),PE=Symbol.for("react.offscreen"),Dv=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=Dv&&t[Dv]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,yf;function ka(t){if(yf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yf=e&&e[1]||""}return`
`+yf+t}var vf=!1;function wf(t,e){if(!t||vf)return"";vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ka(t):""}function sA(t){switch(t.tag){case 5:return ka(t.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return t=wf(t.type,!1),t;case 11:return t=wf(t.type.render,!1),t;case 1:return t=wf(t.type,!0),t;default:return""}}function wp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case Ui:return"Portal";case _p:return"Profiler";case ig:return"StrictMode";case yp:return"Suspense";case vp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case RE:return(t.displayName||"Context")+".Consumer";case kE:return(t._context.displayName||"Context")+".Provider";case og:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ag:return e=t.displayName||null,e!==null?e:wp(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return wp(t(e))}catch{}}return null}function iA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wp(e);case 8:return e===ig?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ws(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function DE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oA(t){var e=DE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oc(t){t._valueTracker||(t._valueTracker=oA(t))}function OE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=DE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ws(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function LE(t,e){e=e.checked,e!=null&&sg(t,"checked",e,!1)}function Ep(t,e){LE(t,e);var n=ws(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tp(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tp(t,e.type,ws(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tp(t,e,n){(e!=="number"||Du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ra=Array.isArray;function no(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ws(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ip(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ra(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ws(n)}}function jE(t,e){var n=ws(e.value),r=ws(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ME(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ME(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lc,VE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lc=Lc||document.createElement("div"),Lc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function dl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aA=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(t){aA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ba[e]=Ba[t]})});function FE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ba.hasOwnProperty(t)&&Ba[t]?(""+e).trim():e+"px"}function UE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=FE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var lA=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bp(t,e){if(e){if(lA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Cp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=null;function lg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ap=null,ro=null,so=null;function Vv(t){if(t=Xl(t)){if(typeof Ap!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Kd(e),Ap(t.stateNode,t.type,e))}}function BE(t){ro?so?so.push(t):so=[t]:ro=t}function $E(){if(ro){var t=ro,e=so;if(so=ro=null,Vv(t),e)for(t=0;t<e.length;t++)Vv(e[t])}}function zE(t,e){return t(e)}function WE(){}var xf=!1;function qE(t,e,n){if(xf)return t(e,n);xf=!0;try{return zE(t,e,n)}finally{xf=!1,(ro!==null||so!==null)&&(WE(),$E())}}function hl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var kp=!1;if(vr)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){kp=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{kp=!1}function cA(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var $a=!1,Ou=null,Lu=!1,Rp=null,uA={onError:function(t){$a=!0,Ou=t}};function dA(t,e,n,r,s,i,o,a,l){$a=!1,Ou=null,cA.apply(uA,arguments)}function hA(t,e,n,r,s,i,o,a,l){if(dA.apply(this,arguments),$a){if($a){var u=Ou;$a=!1,Ou=null}else throw Error(U(198));Lu||(Lu=!0,Rp=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fv(t){if(Ii(t)!==t)throw Error(U(188))}function fA(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Fv(s),t;if(i===r)return Fv(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function GE(t){return t=fA(t),t!==null?KE(t):null}function KE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=KE(t);if(e!==null)return e;t=t.sibling}return null}var QE=nn.unstable_scheduleCallback,Uv=nn.unstable_cancelCallback,pA=nn.unstable_shouldYield,mA=nn.unstable_requestPaint,We=nn.unstable_now,gA=nn.unstable_getCurrentPriorityLevel,cg=nn.unstable_ImmediatePriority,YE=nn.unstable_UserBlockingPriority,ju=nn.unstable_NormalPriority,_A=nn.unstable_LowPriority,JE=nn.unstable_IdlePriority,Wd=null,zn=null;function yA(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Wd,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:xA,vA=Math.log,wA=Math.LN2;function xA(t){return t>>>=0,t===0?32:31-(vA(t)/wA|0)|0}var jc=64,Mc=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Pa(a):(i&=o,i!==0&&(r=Pa(i)))}else o=n&~s,o!==0?r=Pa(o):i!==0&&(r=Pa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),s=1<<n,r|=t[n],e&=~s;return r}function EA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Cn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=EA(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Pp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function XE(){var t=jc;return jc<<=1,!(jc&4194240)&&(jc=64),t}function Ef(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Yl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function IA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Cn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ug(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var xe=0;function ZE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var eT,dg,tT,nT,rT,Dp=!1,Vc=[],ss=null,is=null,os=null,fl=new Map,pl=new Map,qr=[],SA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bv(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":fl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function _a(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Xl(e),e!==null&&dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function bA(t,e,n,r,s){switch(e){case"focusin":return ss=_a(ss,t,e,n,r,s),!0;case"dragenter":return is=_a(is,t,e,n,r,s),!0;case"mouseover":return os=_a(os,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return fl.set(i,_a(fl.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,pl.set(i,_a(pl.get(i)||null,t,e,n,r,s)),!0}return!1}function sT(t){var e=Js(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=HE(n),e!==null){t.blockedOn=e,rT(t.priority,function(){tT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Op(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Np=r,n.target.dispatchEvent(r),Np=null}else return e=Xl(n),e!==null&&dg(e),t.blockedOn=n,!1;e.shift()}return!0}function $v(t,e,n){uu(t)&&n.delete(e)}function CA(){Dp=!1,ss!==null&&uu(ss)&&(ss=null),is!==null&&uu(is)&&(is=null),os!==null&&uu(os)&&(os=null),fl.forEach($v),pl.forEach($v)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Dp||(Dp=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,CA)))}function ml(t){function e(s){return ya(s,t)}if(0<Vc.length){ya(Vc[0],t);for(var n=1;n<Vc.length;n++){var r=Vc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ss!==null&&ya(ss,t),is!==null&&ya(is,t),os!==null&&ya(os,t),fl.forEach(e),pl.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)sT(n),n.blockedOn===null&&qr.shift()}var io=Rr.ReactCurrentBatchConfig,Vu=!0;function NA(t,e,n,r){var s=xe,i=io.transition;io.transition=null;try{xe=1,hg(t,e,n,r)}finally{xe=s,io.transition=i}}function AA(t,e,n,r){var s=xe,i=io.transition;io.transition=null;try{xe=4,hg(t,e,n,r)}finally{xe=s,io.transition=i}}function hg(t,e,n,r){if(Vu){var s=Op(t,e,n,r);if(s===null)Pf(t,e,r,Fu,n),Bv(t,r);else if(bA(s,t,e,n,r))r.stopPropagation();else if(Bv(t,r),e&4&&-1<SA.indexOf(t)){for(;s!==null;){var i=Xl(s);if(i!==null&&eT(i),i=Op(t,e,n,r),i===null&&Pf(t,e,r,Fu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Pf(t,e,r,null,n)}}var Fu=null;function Op(t,e,n,r){if(Fu=null,t=lg(r),t=Js(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fu=t,null}function iT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gA()){case cg:return 1;case YE:return 4;case ju:case _A:return 16;case JE:return 536870912;default:return 16}default:return 16}}var es=null,fg=null,du=null;function oT(){if(du)return du;var t,e=fg,n=e.length,r,s="value"in es?es.value:es.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return du=s.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fc(){return!0}function zv(){return!1}function sn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fc:zv,this.isPropagationStopped=zv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fc)},persist:function(){},isPersistent:Fc}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pg=sn(Vo),Jl=Me({},Vo,{view:0,detail:0}),kA=sn(Jl),Tf,If,va,qd=Me({},Jl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(Tf=t.screenX-va.screenX,If=t.screenY-va.screenY):If=Tf=0,va=t),Tf)},movementY:function(t){return"movementY"in t?t.movementY:If}}),Wv=sn(qd),RA=Me({},qd,{dataTransfer:0}),PA=sn(RA),DA=Me({},Jl,{relatedTarget:0}),Sf=sn(DA),OA=Me({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),LA=sn(OA),jA=Me({},Vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MA=sn(jA),VA=Me({},Vo,{data:0}),qv=sn(VA),FA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $A(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BA[t])?!!e[t]:!1}function mg(){return $A}var zA=Me({},Jl,{key:function(t){if(t.key){var e=FA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mg,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),WA=sn(zA),qA=Me({},qd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hv=sn(qA),HA=Me({},Jl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mg}),GA=sn(HA),KA=Me({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QA=sn(KA),YA=Me({},qd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),JA=sn(YA),XA=[9,13,27,32],gg=vr&&"CompositionEvent"in window,za=null;vr&&"documentMode"in document&&(za=document.documentMode);var ZA=vr&&"TextEvent"in window&&!za,aT=vr&&(!gg||za&&8<za&&11>=za),Gv=" ",Kv=!1;function lT(t,e){switch(t){case"keyup":return XA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function ek(t,e){switch(t){case"compositionend":return cT(e);case"keypress":return e.which!==32?null:(Kv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Kv?null:t;default:return null}}function tk(t,e){if($i)return t==="compositionend"||!gg&&lT(t,e)?(t=oT(),du=fg=es=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return aT&&e.locale!=="ko"?null:e.data;default:return null}}var nk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nk[t.type]:e==="textarea"}function uT(t,e,n,r){BE(r),e=Uu(e,"onChange"),0<e.length&&(n=new pg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Wa=null,gl=null;function rk(t){xT(t,0)}function Hd(t){var e=qi(t);if(OE(e))return t}function sk(t,e){if(t==="change")return e}var dT=!1;if(vr){var bf;if(vr){var Cf="oninput"in document;if(!Cf){var Yv=document.createElement("div");Yv.setAttribute("oninput","return;"),Cf=typeof Yv.oninput=="function"}bf=Cf}else bf=!1;dT=bf&&(!document.documentMode||9<document.documentMode)}function Jv(){Wa&&(Wa.detachEvent("onpropertychange",hT),gl=Wa=null)}function hT(t){if(t.propertyName==="value"&&Hd(gl)){var e=[];uT(e,gl,t,lg(t)),qE(rk,e)}}function ik(t,e,n){t==="focusin"?(Jv(),Wa=e,gl=n,Wa.attachEvent("onpropertychange",hT)):t==="focusout"&&Jv()}function ok(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hd(gl)}function ak(t,e){if(t==="click")return Hd(e)}function lk(t,e){if(t==="input"||t==="change")return Hd(e)}function ck(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:ck;function _l(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gp.call(e,s)||!Rn(t[s],e[s]))return!1}return!0}function Xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var n=Xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xv(n)}}function fT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pT(){for(var t=window,e=Du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function _g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=pT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fT(n.ownerDocument.documentElement,n)){if(r!==null&&_g(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Zv(n,i);var o=Zv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dk=vr&&"documentMode"in document&&11>=document.documentMode,zi=null,Lp=null,qa=null,jp=!1;function e0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jp||zi==null||zi!==Du(r)||(r=zi,"selectionStart"in r&&_g(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qa&&_l(qa,r)||(qa=r,r=Uu(Lp,"onSelect"),0<r.length&&(e=new pg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=zi)))}function Uc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Wi={animationend:Uc("Animation","AnimationEnd"),animationiteration:Uc("Animation","AnimationIteration"),animationstart:Uc("Animation","AnimationStart"),transitionend:Uc("Transition","TransitionEnd")},Nf={},mT={};vr&&(mT=document.createElement("div").style,"AnimationEvent"in window||(delete Wi.animationend.animation,delete Wi.animationiteration.animation,delete Wi.animationstart.animation),"TransitionEvent"in window||delete Wi.transitionend.transition);function Gd(t){if(Nf[t])return Nf[t];if(!Wi[t])return t;var e=Wi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mT)return Nf[t]=e[n];return t}var gT=Gd("animationend"),_T=Gd("animationiteration"),yT=Gd("animationstart"),vT=Gd("transitionend"),wT=new Map,t0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ps(t,e){wT.set(t,e),Ti(e,[t])}for(var Af=0;Af<t0.length;Af++){var kf=t0[Af],hk=kf.toLowerCase(),fk=kf[0].toUpperCase()+kf.slice(1);Ps(hk,"on"+fk)}Ps(gT,"onAnimationEnd");Ps(_T,"onAnimationIteration");Ps(yT,"onAnimationStart");Ps("dblclick","onDoubleClick");Ps("focusin","onFocus");Ps("focusout","onBlur");Ps(vT,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function n0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hA(r,e,void 0,t),t.currentTarget=null}function xT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;n0(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;n0(s,a,u),i=l}}}if(Lu)throw t=Rp,Lu=!1,Rp=null,t}function ke(t,e){var n=e[Bp];n===void 0&&(n=e[Bp]=new Set);var r=t+"__bubble";n.has(r)||(ET(e,t,2,!1),n.add(r))}function Rf(t,e,n){var r=0;e&&(r|=4),ET(n,t,r,e)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function yl(t){if(!t[Bc]){t[Bc]=!0,AE.forEach(function(n){n!=="selectionchange"&&(pk.has(n)||Rf(n,!1,t),Rf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bc]||(e[Bc]=!0,Rf("selectionchange",!1,e))}}function ET(t,e,n,r){switch(iT(e)){case 1:var s=NA;break;case 4:s=AA;break;default:s=hg}n=s.bind(null,e,n,t),s=void 0,!kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Pf(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Js(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}qE(function(){var u=i,h=lg(n),p=[];e:{var m=wT.get(t);if(m!==void 0){var _=pg,C=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":_=WA;break;case"focusin":C="focus",_=Sf;break;case"focusout":C="blur",_=Sf;break;case"beforeblur":case"afterblur":_=Sf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=PA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=GA;break;case gT:case _T:case yT:_=LA;break;case vT:_=QA;break;case"scroll":_=kA;break;case"wheel":_=JA;break;case"copy":case"cut":case"paste":_=MA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Hv}var A=(e&4)!==0,R=!A&&t==="scroll",S=A?m!==null?m+"Capture":null:m;A=[];for(var E=u,x;E!==null;){x=E;var D=x.stateNode;if(x.tag===5&&D!==null&&(x=D,S!==null&&(D=hl(E,S),D!=null&&A.push(vl(E,D,x)))),R)break;E=E.return}0<A.length&&(m=new _(m,C,null,n,h),p.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Np&&(C=n.relatedTarget||n.fromElement)&&(Js(C)||C[wr]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=u,C=C?Js(C):null,C!==null&&(R=Ii(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=u),_!==C)){if(A=Wv,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=Hv,D="onPointerLeave",S="onPointerEnter",E="pointer"),R=_==null?m:qi(_),x=C==null?m:qi(C),m=new A(D,E+"leave",_,n,h),m.target=R,m.relatedTarget=x,D=null,Js(h)===u&&(A=new A(S,E+"enter",C,n,h),A.target=x,A.relatedTarget=R,D=A),R=D,_&&C)t:{for(A=_,S=C,E=0,x=A;x;x=Oi(x))E++;for(x=0,D=S;D;D=Oi(D))x++;for(;0<E-x;)A=Oi(A),E--;for(;0<x-E;)S=Oi(S),x--;for(;E--;){if(A===S||S!==null&&A===S.alternate)break t;A=Oi(A),S=Oi(S)}A=null}else A=null;_!==null&&r0(p,m,_,A,!1),C!==null&&R!==null&&r0(p,R,C,A,!0)}}e:{if(m=u?qi(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var V=sk;else if(Qv(m))if(dT)V=lk;else{V=ok;var F=ik}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=ak);if(V&&(V=V(t,u))){uT(p,V,n,h);break e}F&&F(t,m,u),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Tp(m,"number",m.value)}switch(F=u?qi(u):window,t){case"focusin":(Qv(F)||F.contentEditable==="true")&&(zi=F,Lp=u,qa=null);break;case"focusout":qa=Lp=zi=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,e0(p,n,h);break;case"selectionchange":if(dk)break;case"keydown":case"keyup":e0(p,n,h)}var I;if(gg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $i?lT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(aT&&n.locale!=="ko"&&($i||y!=="onCompositionStart"?y==="onCompositionEnd"&&$i&&(I=oT()):(es=h,fg="value"in es?es.value:es.textContent,$i=!0)),F=Uu(u,y),0<F.length&&(y=new qv(y,t,null,n,h),p.push({event:y,listeners:F}),I?y.data=I:(I=cT(n),I!==null&&(y.data=I)))),(I=ZA?ek(t,n):tk(t,n))&&(u=Uu(u,"onBeforeInput"),0<u.length&&(h=new qv("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=I))}xT(p,e)})}function vl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=hl(t,n),i!=null&&r.unshift(vl(t,i,s)),i=hl(t,e),i!=null&&r.push(vl(t,i,s))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=hl(n,i),l!=null&&o.unshift(vl(n,l,a))):s||(l=hl(n,i),l!=null&&o.push(vl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mk=/\r\n?/g,gk=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(mk,`
`).replace(gk,"")}function $c(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(U(425))}function Bu(){}var Mp=null,Vp=null;function Fp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Up=typeof setTimeout=="function"?setTimeout:void 0,_k=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(vk)}:Up;function vk(t){setTimeout(function(){throw t})}function Df(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ml(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ml(e)}function as(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Un="__reactFiber$"+Fo,wl="__reactProps$"+Fo,wr="__reactContainer$"+Fo,Bp="__reactEvents$"+Fo,wk="__reactListeners$"+Fo,xk="__reactHandles$"+Fo;function Js(t){var e=t[Un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o0(t);t!==null;){if(n=t[Un])return n;t=o0(t)}return e}t=n,n=t.parentNode}return null}function Xl(t){return t=t[Un]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Kd(t){return t[wl]||null}var $p=[],Hi=-1;function Ds(t){return{current:t}}function Pe(t){0>Hi||(t.current=$p[Hi],$p[Hi]=null,Hi--)}function Ce(t,e){Hi++,$p[Hi]=t.current,t.current=e}var xs={},Ct=Ds(xs),Wt=Ds(!1),li=xs;function yo(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function qt(t){return t=t.childContextTypes,t!=null}function $u(){Pe(Wt),Pe(Ct)}function a0(t,e,n){if(Ct.current!==xs)throw Error(U(168));Ce(Ct,e),Ce(Wt,n)}function TT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,iA(t)||"Unknown",s));return Me({},n,r)}function zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,li=Ct.current,Ce(Ct,t),Ce(Wt,Wt.current),!0}function l0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=TT(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,Pe(Wt),Pe(Ct),Ce(Ct,t)):Pe(Wt),Ce(Wt,n)}var lr=null,Qd=!1,Of=!1;function IT(t){lr===null?lr=[t]:lr.push(t)}function Ek(t){Qd=!0,IT(t)}function Os(){if(!Of&&lr!==null){Of=!0;var t=0,e=xe;try{var n=lr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Qd=!1}catch(s){throw lr!==null&&(lr=lr.slice(t+1)),QE(cg,Os),s}finally{xe=e,Of=!1}}return null}var Gi=[],Ki=0,Wu=null,qu=0,ln=[],cn=0,ci=null,ur=1,dr="";function Hs(t,e){Gi[Ki++]=qu,Gi[Ki++]=Wu,Wu=t,qu=e}function ST(t,e,n){ln[cn++]=ur,ln[cn++]=dr,ln[cn++]=ci,ci=t;var r=ur;t=dr;var s=32-Cn(r)-1;r&=~(1<<s),n+=1;var i=32-Cn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,ur=1<<32-Cn(e)+s|n<<s|r,dr=i+t}else ur=1<<i|n<<s|r,dr=t}function yg(t){t.return!==null&&(Hs(t,1),ST(t,1,0))}function vg(t){for(;t===Wu;)Wu=Gi[--Ki],Gi[Ki]=null,qu=Gi[--Ki],Gi[Ki]=null;for(;t===ci;)ci=ln[--cn],ln[cn]=null,dr=ln[--cn],ln[cn]=null,ur=ln[--cn],ln[cn]=null}var tn=null,Xt=null,De=!1,Tn=null;function bT(t,e){var n=dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Xt=as(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ci!==null?{id:ur,overflow:dr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Xt=null,!0):!1;default:return!1}}function zp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wp(t){if(De){var e=Xt;if(e){var n=e;if(!c0(t,e)){if(zp(t))throw Error(U(418));e=as(n.nextSibling);var r=tn;e&&c0(t,e)?bT(r,n):(t.flags=t.flags&-4097|2,De=!1,tn=t)}}else{if(zp(t))throw Error(U(418));t.flags=t.flags&-4097|2,De=!1,tn=t}}}function u0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function zc(t){if(t!==tn)return!1;if(!De)return u0(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fp(t.type,t.memoizedProps)),e&&(e=Xt)){if(zp(t))throw CT(),Error(U(418));for(;e;)bT(t,e),e=as(e.nextSibling)}if(u0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=as(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=tn?as(t.stateNode.nextSibling):null;return!0}function CT(){for(var t=Xt;t;)t=as(t.nextSibling)}function vo(){Xt=tn=null,De=!1}function wg(t){Tn===null?Tn=[t]:Tn.push(t)}var Tk=Rr.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Wc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function d0(t){var e=t._init;return e(t._payload)}function NT(t){function e(S,E){if(t){var x=S.deletions;x===null?(S.deletions=[E],S.flags|=16):x.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=ds(S,E),S.index=0,S.sibling=null,S}function i(S,E,x){return S.index=x,t?(x=S.alternate,x!==null?(x=x.index,x<E?(S.flags|=2,E):x):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function a(S,E,x,D){return E===null||E.tag!==6?(E=Bf(x,S.mode,D),E.return=S,E):(E=s(E,x),E.return=S,E)}function l(S,E,x,D){var V=x.type;return V===Bi?h(S,E,x.props.children,D,x.key):E!==null&&(E.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zr&&d0(V)===E.type)?(D=s(E,x.props),D.ref=wa(S,E,x),D.return=S,D):(D=vu(x.type,x.key,x.props,null,S.mode,D),D.ref=wa(S,E,x),D.return=S,D)}function u(S,E,x,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==x.containerInfo||E.stateNode.implementation!==x.implementation?(E=$f(x,S.mode,D),E.return=S,E):(E=s(E,x.children||[]),E.return=S,E)}function h(S,E,x,D,V){return E===null||E.tag!==7?(E=si(x,S.mode,D,V),E.return=S,E):(E=s(E,x),E.return=S,E)}function p(S,E,x){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Bf(""+E,S.mode,x),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Dc:return x=vu(E.type,E.key,E.props,null,S.mode,x),x.ref=wa(S,null,E),x.return=S,x;case Ui:return E=$f(E,S.mode,x),E.return=S,E;case zr:var D=E._init;return p(S,D(E._payload),x)}if(Ra(E)||ma(E))return E=si(E,S.mode,x,null),E.return=S,E;Wc(S,E)}return null}function m(S,E,x,D){var V=E!==null?E.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return V!==null?null:a(S,E,""+x,D);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Dc:return x.key===V?l(S,E,x,D):null;case Ui:return x.key===V?u(S,E,x,D):null;case zr:return V=x._init,m(S,E,V(x._payload),D)}if(Ra(x)||ma(x))return V!==null?null:h(S,E,x,D,null);Wc(S,x)}return null}function _(S,E,x,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(x)||null,a(E,S,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Dc:return S=S.get(D.key===null?x:D.key)||null,l(E,S,D,V);case Ui:return S=S.get(D.key===null?x:D.key)||null,u(E,S,D,V);case zr:var F=D._init;return _(S,E,x,F(D._payload),V)}if(Ra(D)||ma(D))return S=S.get(x)||null,h(E,S,D,V,null);Wc(E,D)}return null}function C(S,E,x,D){for(var V=null,F=null,I=E,y=E=0,w=null;I!==null&&y<x.length;y++){I.index>y?(w=I,I=null):w=I.sibling;var b=m(S,I,x[y],D);if(b===null){I===null&&(I=w);break}t&&I&&b.alternate===null&&e(S,I),E=i(b,E,y),F===null?V=b:F.sibling=b,F=b,I=w}if(y===x.length)return n(S,I),De&&Hs(S,y),V;if(I===null){for(;y<x.length;y++)I=p(S,x[y],D),I!==null&&(E=i(I,E,y),F===null?V=I:F.sibling=I,F=I);return De&&Hs(S,y),V}for(I=r(S,I);y<x.length;y++)w=_(I,S,y,x[y],D),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?y:w.key),E=i(w,E,y),F===null?V=w:F.sibling=w,F=w);return t&&I.forEach(function(N){return e(S,N)}),De&&Hs(S,y),V}function A(S,E,x,D){var V=ma(x);if(typeof V!="function")throw Error(U(150));if(x=V.call(x),x==null)throw Error(U(151));for(var F=V=null,I=E,y=E=0,w=null,b=x.next();I!==null&&!b.done;y++,b=x.next()){I.index>y?(w=I,I=null):w=I.sibling;var N=m(S,I,b.value,D);if(N===null){I===null&&(I=w);break}t&&I&&N.alternate===null&&e(S,I),E=i(N,E,y),F===null?V=N:F.sibling=N,F=N,I=w}if(b.done)return n(S,I),De&&Hs(S,y),V;if(I===null){for(;!b.done;y++,b=x.next())b=p(S,b.value,D),b!==null&&(E=i(b,E,y),F===null?V=b:F.sibling=b,F=b);return De&&Hs(S,y),V}for(I=r(S,I);!b.done;y++,b=x.next())b=_(I,S,y,b.value,D),b!==null&&(t&&b.alternate!==null&&I.delete(b.key===null?y:b.key),E=i(b,E,y),F===null?V=b:F.sibling=b,F=b);return t&&I.forEach(function(k){return e(S,k)}),De&&Hs(S,y),V}function R(S,E,x,D){if(typeof x=="object"&&x!==null&&x.type===Bi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Dc:e:{for(var V=x.key,F=E;F!==null;){if(F.key===V){if(V=x.type,V===Bi){if(F.tag===7){n(S,F.sibling),E=s(F,x.props.children),E.return=S,S=E;break e}}else if(F.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===zr&&d0(V)===F.type){n(S,F.sibling),E=s(F,x.props),E.ref=wa(S,F,x),E.return=S,S=E;break e}n(S,F);break}else e(S,F);F=F.sibling}x.type===Bi?(E=si(x.props.children,S.mode,D,x.key),E.return=S,S=E):(D=vu(x.type,x.key,x.props,null,S.mode,D),D.ref=wa(S,E,x),D.return=S,S=D)}return o(S);case Ui:e:{for(F=x.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===x.containerInfo&&E.stateNode.implementation===x.implementation){n(S,E.sibling),E=s(E,x.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=$f(x,S.mode,D),E.return=S,S=E}return o(S);case zr:return F=x._init,R(S,E,F(x._payload),D)}if(Ra(x))return C(S,E,x,D);if(ma(x))return A(S,E,x,D);Wc(S,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,x),E.return=S,S=E):(n(S,E),E=Bf(x,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return R}var wo=NT(!0),AT=NT(!1),Hu=Ds(null),Gu=null,Qi=null,xg=null;function Eg(){xg=Qi=Gu=null}function Tg(t){var e=Hu.current;Pe(Hu),t._currentValue=e}function qp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Gu=t,xg=Qi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function gn(t){var e=t._currentValue;if(xg!==t)if(t={context:t,memoizedValue:e,next:null},Qi===null){if(Gu===null)throw Error(U(308));Qi=t,Gu.dependencies={lanes:0,firstContext:t}}else Qi=Qi.next=t;return e}var Xs=null;function Ig(t){Xs===null?Xs=[t]:Xs.push(t)}function kT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Ig(e)):(n.next=s.next,s.next=n),e.interleaved=n,xr(t,r)}function xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Sg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,xr(t,n)}return s=r.interleaved,s===null?(e.next=e,Ig(r)):(e.next=s.next,s.next=e),r.interleaved=e,xr(t,n)}function fu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ug(t,n)}}function h0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ku(t,e,n,r){var s=t.updateQueue;Wr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(i!==null){var p=s.baseState;o=0,h=u=l=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,A=a;switch(m=e,_=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){p=C.call(_,p,m);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,m=typeof C=="function"?C.call(_,p,m):C,m==null)break e;p=Me({},p,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=_,l=p):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(l=p),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=p}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Zl={},Wn=Ds(Zl),xl=Ds(Zl),El=Ds(Zl);function Zs(t){if(t===Zl)throw Error(U(174));return t}function bg(t,e){switch(Ce(El,e),Ce(xl,t),Ce(Wn,Zl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sp(e,t)}Pe(Wn),Ce(Wn,e)}function xo(){Pe(Wn),Pe(xl),Pe(El)}function PT(t){Zs(El.current);var e=Zs(Wn.current),n=Sp(e,t.type);e!==n&&(Ce(xl,t),Ce(Wn,n))}function Cg(t){xl.current===t&&(Pe(Wn),Pe(xl))}var Oe=Ds(0);function Qu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lf=[];function Ng(){for(var t=0;t<Lf.length;t++)Lf[t]._workInProgressVersionPrimary=null;Lf.length=0}var pu=Rr.ReactCurrentDispatcher,jf=Rr.ReactCurrentBatchConfig,ui=0,je=null,tt=null,ut=null,Yu=!1,Ha=!1,Tl=0,Ik=0;function xt(){throw Error(U(321))}function Ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function kg(t,e,n,r,s,i){if(ui=i,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pu.current=t===null||t.memoizedState===null?Nk:Ak,t=n(r,s),Ha){i=0;do{if(Ha=!1,Tl=0,25<=i)throw Error(U(301));i+=1,ut=tt=null,e.updateQueue=null,pu.current=kk,t=n(r,s)}while(Ha)}if(pu.current=Ju,e=tt!==null&&tt.next!==null,ui=0,ut=tt=je=null,Yu=!1,e)throw Error(U(300));return t}function Rg(){var t=Tl!==0;return Tl=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ut===null?je.memoizedState=ut=t:ut=ut.next=t,ut}function _n(){if(tt===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ut===null?je.memoizedState:ut.next;if(e!==null)ut=e,tt=t;else{if(t===null)throw Error(U(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ut===null?je.memoizedState=ut=t:ut=ut.next=t}return ut}function Il(t,e){return typeof e=="function"?e(t):e}function Mf(t){var e=_n(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=tt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var h=u.lane;if((ui&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,je.lanes|=h,di|=h}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||($t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,je.lanes|=i,di|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vf(t){var e=_n(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Rn(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function DT(){}function OT(t,e){var n=je,r=_n(),s=e(),i=!Rn(r.memoizedState,s);if(i&&(r.memoizedState=s,$t=!0),r=r.queue,Pg(MT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ut!==null&&ut.memoizedState.tag&1){if(n.flags|=2048,Sl(9,jT.bind(null,n,r,s,e),void 0,null),ht===null)throw Error(U(349));ui&30||LT(n,e,s)}return s}function LT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function jT(t,e,n,r){e.value=n,e.getSnapshot=r,VT(e)&&FT(t)}function MT(t,e,n){return n(function(){VT(e)&&FT(t)})}function VT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function FT(t){var e=xr(t,1);e!==null&&Nn(e,t,1,-1)}function p0(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:t},e.queue=t,t=t.dispatch=Ck.bind(null,je,t),[e.memoizedState,t]}function Sl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function UT(){return _n().memoizedState}function mu(t,e,n,r){var s=Vn();je.flags|=t,s.memoizedState=Sl(1|e,n,void 0,r===void 0?null:r)}function Yd(t,e,n,r){var s=_n();r=r===void 0?null:r;var i=void 0;if(tt!==null){var o=tt.memoizedState;if(i=o.destroy,r!==null&&Ag(r,o.deps)){s.memoizedState=Sl(e,n,i,r);return}}je.flags|=t,s.memoizedState=Sl(1|e,n,i,r)}function m0(t,e){return mu(8390656,8,t,e)}function Pg(t,e){return Yd(2048,8,t,e)}function BT(t,e){return Yd(4,2,t,e)}function $T(t,e){return Yd(4,4,t,e)}function zT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function WT(t,e,n){return n=n!=null?n.concat([t]):null,Yd(4,4,zT.bind(null,e,t),n)}function Dg(){}function qT(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function HT(t,e){var n=_n();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function GT(t,e,n){return ui&21?(Rn(n,e)||(n=XE(),je.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=n)}function Sk(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=jf.transition;jf.transition={};try{t(!1),e()}finally{xe=n,jf.transition=r}}function KT(){return _n().memoizedState}function bk(t,e,n){var r=us(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},QT(t))YT(e,n);else if(n=kT(t,e,n,r),n!==null){var s=Lt();Nn(n,t,r,s),JT(n,e,r)}}function Ck(t,e,n){var r=us(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(QT(t))YT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(s.next=s,Ig(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=kT(t,e,s,r),n!==null&&(s=Lt(),Nn(n,t,r,s),JT(n,e,r))}}function QT(t){var e=t.alternate;return t===je||e!==null&&e===je}function YT(t,e){Ha=Yu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ug(t,n)}}var Ju={readContext:gn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Nk={readContext:gn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:gn,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mu(4194308,4,zT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return mu(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=bk.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:Dg,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=Sk.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,s=Vn();if(De){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ht===null)throw Error(U(349));ui&30||LT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,m0(MT.bind(null,r,i,t),[t]),r.flags|=2048,Sl(9,jT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Vn(),e=ht.identifierPrefix;if(De){var n=dr,r=ur;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:gn,useCallback:qT,useContext:gn,useEffect:Pg,useImperativeHandle:WT,useInsertionEffect:BT,useLayoutEffect:$T,useMemo:HT,useReducer:Mf,useRef:UT,useState:function(){return Mf(Il)},useDebugValue:Dg,useDeferredValue:function(t){var e=_n();return GT(e,tt.memoizedState,t)},useTransition:function(){var t=Mf(Il)[0],e=_n().memoizedState;return[t,e]},useMutableSource:DT,useSyncExternalStore:OT,useId:KT,unstable_isNewReconciler:!1},kk={readContext:gn,useCallback:qT,useContext:gn,useEffect:Pg,useImperativeHandle:WT,useInsertionEffect:BT,useLayoutEffect:$T,useMemo:HT,useReducer:Vf,useRef:UT,useState:function(){return Vf(Il)},useDebugValue:Dg,useDeferredValue:function(t){var e=_n();return tt===null?e.memoizedState=t:GT(e,tt.memoizedState,t)},useTransition:function(){var t=Vf(Il)[0],e=_n().memoizedState;return[t,e]},useMutableSource:DT,useSyncExternalStore:OT,useId:KT,unstable_isNewReconciler:!1};function xn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jd={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=us(t),i=mr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(Nn(e,t,s,r),fu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Lt(),s=us(t),i=mr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(Nn(e,t,s,r),fu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Lt(),r=us(t),s=mr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ls(t,s,r),e!==null&&(Nn(e,t,r,n),fu(e,t,r))}};function g0(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!_l(n,r)||!_l(s,i):!0}function XT(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=gn(i):(s=qt(e)?li:Ct.current,r=e.contextTypes,i=(r=r!=null)?yo(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function _0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jd.enqueueReplaceState(e,e.state,null)}function Gp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Sg(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=gn(i):(i=qt(e)?li:Ct.current,s.context=yo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Hp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Jd.enqueueReplaceState(s,s.state,null),Ku(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e){try{var n="",r=e;do n+=sA(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ff(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Rk=typeof WeakMap=="function"?WeakMap:Map;function ZT(t,e,n){n=mr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zu||(Zu=!0,sm=r),Kp(t,e)},n}function eI(t,e,n){n=mr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Kp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Kp(t,e),typeof r!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function y0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Rk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=qk.bind(null,t,e,n),e.then(t,t))}function v0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w0(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mr(-1,1),e.tag=2,ls(n,e,1))),n.lanes|=1),t)}var Pk=Rr.ReactCurrentOwner,$t=!1;function Dt(t,e,n,r){e.child=t===null?AT(e,null,n,r):wo(e,t.child,n,r)}function x0(t,e,n,r,s){n=n.render;var i=e.ref;return oo(e,s),r=kg(t,e,n,r,i,s),n=Rg(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Er(t,e,s)):(De&&n&&yg(e),e.flags|=1,Dt(t,e,r,s),e.child)}function E0(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Bg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,tI(t,e,i,r,s)):(t=vu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(o,r)&&t.ref===e.ref)return Er(t,e,s)}return e.flags|=1,t=ds(i,r),t.ref=e.ref,t.return=e,e.child=t}function tI(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(_l(i,r)&&t.ref===e.ref)if($t=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,Er(t,e,s)}return Qp(t,e,n,r,s)}function nI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(Ji,Jt),Jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(Ji,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(Ji,Jt),Jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(Ji,Jt),Jt|=r;return Dt(t,e,s,n),e.child}function rI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qp(t,e,n,r,s){var i=qt(n)?li:Ct.current;return i=yo(e,i),oo(e,s),n=kg(t,e,n,r,i,s),r=Rg(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Er(t,e,s)):(De&&r&&yg(e),e.flags|=1,Dt(t,e,n,s),e.child)}function T0(t,e,n,r,s){if(qt(n)){var i=!0;zu(e)}else i=!1;if(oo(e,s),e.stateNode===null)gu(t,e),XT(e,n,r),Gp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=qt(n)?li:Ct.current,u=yo(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_0(e,o,r,u),Wr=!1;var m=e.memoizedState;o.state=m,Ku(e,r,o,s),l=e.memoizedState,a!==r||m!==l||Wt.current||Wr?(typeof h=="function"&&(Hp(e,n,h,r),l=e.memoizedState),(a=Wr||g0(e,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,RT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:xn(e.type,a),o.props=u,p=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=gn(l):(l=qt(n)?li:Ct.current,l=yo(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&_0(e,o,r,l),Wr=!1,m=e.memoizedState,o.state=m,Ku(e,r,o,s);var C=e.memoizedState;a!==p||m!==C||Wt.current||Wr?(typeof _=="function"&&(Hp(e,n,_,r),C=e.memoizedState),(u=Wr||g0(e,n,u,r,m,C,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Yp(t,e,n,r,i,s)}function Yp(t,e,n,r,s,i){rI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&l0(e,n,!1),Er(t,e,i);r=e.stateNode,Pk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,i),e.child=wo(e,null,a,i)):Dt(t,e,a,i),e.memoizedState=r.state,s&&l0(e,n,!0),e.child}function sI(t){var e=t.stateNode;e.pendingContext?a0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&a0(t,e.context,!1),bg(t,e.containerInfo)}function I0(t,e,n,r,s){return vo(),wg(s),e.flags|=256,Dt(t,e,n,r),e.child}var Jp={dehydrated:null,treeContext:null,retryLane:0};function Xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function iI(t,e,n){var r=e.pendingProps,s=Oe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(Oe,s&1),t===null)return Wp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=eh(o,r,0,null),t=si(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Xp(n),e.memoizedState=Jp,t):Og(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Dk(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ds(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ds(a,i):(i=si(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Jp,r}return i=t.child,t=i.sibling,r=ds(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Og(t,e){return e=eh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function qc(t,e,n,r){return r!==null&&wg(r),wo(e,t.child,null,n),t=Og(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Dk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ff(Error(U(422))),qc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=eh({mode:"visible",children:r.children},s,0,null),i=si(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=Xp(o),e.memoizedState=Jp,i);if(!(e.mode&1))return qc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=Ff(i,r,void 0),qc(t,e,o,r)}if(a=(o&t.childLanes)!==0,$t||a){if(r=ht,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,xr(t,s),Nn(r,t,s,-1))}return Ug(),r=Ff(Error(U(421))),qc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Hk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Xt=as(s.nextSibling),tn=e,De=!0,Tn=null,t!==null&&(ln[cn++]=ur,ln[cn++]=dr,ln[cn++]=ci,ur=t.id,dr=t.overflow,ci=e),e=Og(e,r.children),e.flags|=4096,e)}function S0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qp(t.return,e,n)}function Uf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function oI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Dt(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,n,e);else if(t.tag===19)S0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Qu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Uf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Qu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Uf(e,!0,n,null,i);break;case"together":Uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ds(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ds(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ok(t,e,n){switch(e.tag){case 3:sI(e),vo();break;case 5:PT(e);break;case 1:qt(e.type)&&zu(e);break;case 4:bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(Hu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?iI(t,e,n):(Ce(Oe,Oe.current&1),t=Er(t,e,n),t!==null?t.sibling:null);Ce(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,nI(t,e,n)}return Er(t,e,n)}var aI,Zp,lI,cI;aI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zp=function(){};lI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Zs(Wn.current);var i=null;switch(n){case"input":s=xp(t,s),r=xp(t,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=Ip(t,s),r=Ip(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}bp(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ul.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ul.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ke("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};cI=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Lk(t,e,n){var r=e.pendingProps;switch(vg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Et(e),null;case 1:return qt(e.type)&&$u(),Et(e),null;case 3:return r=e.stateNode,xo(),Pe(Wt),Pe(Ct),Ng(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(zc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(am(Tn),Tn=null))),Zp(t,e),Et(e),null;case 5:Cg(e);var s=Zs(El.current);if(n=e.type,t!==null&&e.stateNode!=null)lI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Et(e),null}if(t=Zs(Wn.current),zc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Un]=e,r[wl]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Da.length;s++)ke(Da[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Ov(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":jv(r,i),ke("invalid",r)}bp(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&$c(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&$c(r.textContent,a,t),s=["children",""+a]):ul.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Oc(r),Lv(r,i,!0);break;case"textarea":Oc(r),Mv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ME(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Un]=e,t[wl]=r,aI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Cp(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<Da.length;s++)ke(Da[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":Ov(t,r),s=xp(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),ke("invalid",t);break;case"textarea":jv(t,r),s=Ip(t,r),ke("invalid",t);break;default:s=r}bp(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?UE(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&VE(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&dl(t,l):typeof l=="number"&&dl(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ul.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ke("scroll",t):l!=null&&sg(t,i,l,o))}switch(n){case"input":Oc(t),Lv(t,r,!1);break;case"textarea":Oc(t),Mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ws(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?no(t,!!r.multiple,i,!1):r.defaultValue!=null&&no(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Et(e),null;case 6:if(t&&e.stateNode!=null)cI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Zs(El.current),Zs(Wn.current),zc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Un]=e,(i=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:$c(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$c(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=e,e.stateNode=r}return Et(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Xt!==null&&e.mode&1&&!(e.flags&128))CT(),vo(),e.flags|=98560,i=!1;else if(i=zc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Un]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Et(e),i=!1}else Tn!==null&&(am(Tn),Tn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?rt===0&&(rt=3):Ug())),e.updateQueue!==null&&(e.flags|=4),Et(e),null);case 4:return xo(),Zp(t,e),t===null&&yl(e.stateNode.containerInfo),Et(e),null;case 10:return Tg(e.type._context),Et(e),null;case 17:return qt(e.type)&&$u(),Et(e),null;case 19:if(Pe(Oe),i=e.memoizedState,i===null)return Et(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)xa(i,!1);else{if(rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qu(t),o!==null){for(e.flags|=128,xa(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Oe,Oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>To&&(e.flags|=128,r=!0,xa(i,!1),e.lanes=4194304)}else{if(!r)if(t=Qu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return Et(e),null}else 2*We()-i.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,xa(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Oe.current,Ce(Oe,r?n&1|2:n&1),e):(Et(e),null);case 22:case 23:return Fg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(Et(e),e.subtreeFlags&6&&(e.flags|=8192)):Et(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function jk(t,e){switch(vg(e),e.tag){case 1:return qt(e.type)&&$u(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),Pe(Wt),Pe(Ct),Ng(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cg(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return xo(),null;case 10:return Tg(e.type._context),null;case 22:case 23:return Fg(),null;case 24:return null;default:return null}}var Hc=!1,St=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,G=null;function Yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function em(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var b0=!1;function Vk(t,e){if(Mp=Vu,t=pT(),_g(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=t,m=null;t:for(;;){for(var _;p!==n||s!==0&&p.nodeType!==3||(a=o+s),p!==i||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++h===r&&(l=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vp={focusedElem:t,selectionRange:n},Vu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,R=C.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?A:xn(e.type,A),R);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Fe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return C=b0,b0=!1,C}function Ga(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&em(e,n,i)}s=s.next}while(s!==r)}}function Xd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function tm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uI(t){var e=t.alternate;e!==null&&(t.alternate=null,uI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Un],delete e[wl],delete e[Bp],delete e[wk],delete e[xk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dI(t){return t.tag===5||t.tag===3||t.tag===4}function C0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(nm(t,e,n),t=t.sibling;t!==null;)nm(t,e,n),t=t.sibling}function rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rm(t,e,n),t=t.sibling;t!==null;)rm(t,e,n),t=t.sibling}var pt=null,En=!1;function Br(t,e,n){for(n=n.child;n!==null;)hI(t,e,n),n=n.sibling}function hI(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Wd,n)}catch{}switch(n.tag){case 5:St||Yi(n,e);case 6:var r=pt,s=En;pt=null,Br(t,e,n),pt=r,En=s,pt!==null&&(En?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(En?(t=pt,n=n.stateNode,t.nodeType===8?Df(t.parentNode,n):t.nodeType===1&&Df(t,n),ml(t)):Df(pt,n.stateNode));break;case 4:r=pt,s=En,pt=n.stateNode.containerInfo,En=!0,Br(t,e,n),pt=r,En=s;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&em(n,e,o),s=s.next}while(s!==r)}Br(t,e,n);break;case 1:if(!St&&(Yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Br(t,e,n),St=r):Br(t,e,n);break;default:Br(t,e,n)}}function N0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var s=Gk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function yn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,En=!1;break e;case 3:pt=a.stateNode.containerInfo,En=!0;break e;case 4:pt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(pt===null)throw Error(U(160));hI(i,o,s),pt=null,En=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Fe(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fI(e,t),e=e.sibling}function fI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yn(e,t),Mn(t),r&4){try{Ga(3,t,t.return),Xd(3,t)}catch(A){Fe(t,t.return,A)}try{Ga(5,t,t.return)}catch(A){Fe(t,t.return,A)}}break;case 1:yn(e,t),Mn(t),r&512&&n!==null&&Yi(n,n.return);break;case 5:if(yn(e,t),Mn(t),r&512&&n!==null&&Yi(n,n.return),t.flags&32){var s=t.stateNode;try{dl(s,"")}catch(A){Fe(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&LE(s,i),Cp(a,o);var u=Cp(a,i);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?UE(s,p):h==="dangerouslySetInnerHTML"?VE(s,p):h==="children"?dl(s,p):sg(s,h,p,u)}switch(a){case"input":Ep(s,i);break;case"textarea":jE(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?no(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?no(s,!!i.multiple,i.defaultValue,!0):no(s,!!i.multiple,i.multiple?[]:"",!1))}s[wl]=i}catch(A){Fe(t,t.return,A)}}break;case 6:if(yn(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){Fe(t,t.return,A)}}break;case 3:if(yn(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ml(e.containerInfo)}catch(A){Fe(t,t.return,A)}break;case 4:yn(e,t),Mn(t);break;case 13:yn(e,t),Mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Mg=We())),r&4&&N0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||h,yn(e,t),St=u):yn(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(p=G=h;G!==null;){switch(m=G,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ga(4,m,m.return);break;case 1:Yi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(A){Fe(r,n,A)}}break;case 5:Yi(m,m.return);break;case 22:if(m.memoizedState!==null){k0(p);continue}}_!==null?(_.return=m,G=_):k0(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=FE("display",o))}catch(A){Fe(t,t.return,A)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(A){Fe(t,t.return,A)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:yn(e,t),Mn(t),r&4&&N0(t);break;case 21:break;default:yn(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(dl(s,""),r.flags&=-33);var i=C0(t);rm(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=C0(t);nm(t,a,o);break;default:throw Error(U(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Fk(t,e,n){G=t,pI(t)}function pI(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Hc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||St;a=Hc;var u=St;if(Hc=o,(St=l)&&!u)for(G=s;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?R0(s):l!==null?(l.return=o,G=l):R0(s);for(;i!==null;)G=i,pI(i),i=i.sibling;G=s,Hc=a,St=u}A0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):A0(t)}}function A0(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Xd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&f0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&ml(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}St||e.flags&512&&tm(e)}catch(m){Fe(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function k0(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function R0(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xd(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Fe(e,s,l)}}var i=e.return;try{tm(e)}catch(l){Fe(e,i,l)}break;case 5:var o=e.return;try{tm(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var Uk=Math.ceil,Xu=Rr.ReactCurrentDispatcher,Lg=Rr.ReactCurrentOwner,fn=Rr.ReactCurrentBatchConfig,pe=0,ht=null,Ke=null,_t=0,Jt=0,Ji=Ds(0),rt=0,bl=null,di=0,Zd=0,jg=0,Ka=null,Ft=null,Mg=0,To=1/0,ar=null,Zu=!1,sm=null,cs=null,Gc=!1,ts=null,ed=0,Qa=0,im=null,_u=-1,yu=0;function Lt(){return pe&6?We():_u!==-1?_u:_u=We()}function us(t){return t.mode&1?pe&2&&_t!==0?_t&-_t:Tk.transition!==null?(yu===0&&(yu=XE()),yu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:iT(t.type)),t):1}function Nn(t,e,n,r){if(50<Qa)throw Qa=0,im=null,Error(U(185));Yl(t,n,r),(!(pe&2)||t!==ht)&&(t===ht&&(!(pe&2)&&(Zd|=n),rt===4&&Hr(t,_t)),Ht(t,r),n===1&&pe===0&&!(e.mode&1)&&(To=We()+500,Qd&&Os()))}function Ht(t,e){var n=t.callbackNode;TA(t,e);var r=Mu(t,t===ht?_t:0);if(r===0)n!==null&&Uv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uv(n),e===1)t.tag===0?Ek(P0.bind(null,t)):IT(P0.bind(null,t)),yk(function(){!(pe&6)&&Os()}),n=null;else{switch(ZE(r)){case 1:n=cg;break;case 4:n=YE;break;case 16:n=ju;break;case 536870912:n=JE;break;default:n=ju}n=EI(n,mI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mI(t,e){if(_u=-1,yu=0,pe&6)throw Error(U(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var r=Mu(t,t===ht?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=td(t,r);else{e=r;var s=pe;pe|=2;var i=_I();(ht!==t||_t!==e)&&(ar=null,To=We()+500,ri(t,e));do try{zk();break}catch(a){gI(t,a)}while(!0);Eg(),Xu.current=i,pe=s,Ke!==null?e=0:(ht=null,_t=0,e=rt)}if(e!==0){if(e===2&&(s=Pp(t),s!==0&&(r=s,e=om(t,s))),e===1)throw n=bl,ri(t,0),Hr(t,r),Ht(t,We()),n;if(e===6)Hr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Bk(s)&&(e=td(t,r),e===2&&(i=Pp(t),i!==0&&(r=i,e=om(t,i))),e===1))throw n=bl,ri(t,0),Hr(t,r),Ht(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Gs(t,Ft,ar);break;case 3:if(Hr(t,r),(r&130023424)===r&&(e=Mg+500-We(),10<e)){if(Mu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Lt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Up(Gs.bind(null,t,Ft,ar),e);break}Gs(t,Ft,ar);break;case 4:if(Hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Cn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Uk(r/1960))-r,10<r){t.timeoutHandle=Up(Gs.bind(null,t,Ft,ar),r);break}Gs(t,Ft,ar);break;case 5:Gs(t,Ft,ar);break;default:throw Error(U(329))}}}return Ht(t,We()),t.callbackNode===n?mI.bind(null,t):null}function om(t,e){var n=Ka;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=td(t,e),t!==2&&(e=Ft,Ft=n,e!==null&&am(e)),t}function am(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function Bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Rn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~jg,e&=~Zd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function P0(t){if(pe&6)throw Error(U(327));ao();var e=Mu(t,0);if(!(e&1))return Ht(t,We()),null;var n=td(t,e);if(t.tag!==0&&n===2){var r=Pp(t);r!==0&&(e=r,n=om(t,r))}if(n===1)throw n=bl,ri(t,0),Hr(t,e),Ht(t,We()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gs(t,Ft,ar),Ht(t,We()),null}function Vg(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(To=We()+500,Qd&&Os())}}function hi(t){ts!==null&&ts.tag===0&&!(pe&6)&&ao();var e=pe;pe|=1;var n=fn.transition,r=xe;try{if(fn.transition=null,xe=1,t)return t()}finally{xe=r,fn.transition=n,pe=e,!(pe&6)&&Os()}}function Fg(){Jt=Ji.current,Pe(Ji)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_k(n)),Ke!==null)for(n=Ke.return;n!==null;){var r=n;switch(vg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$u();break;case 3:xo(),Pe(Wt),Pe(Ct),Ng();break;case 5:Cg(r);break;case 4:xo();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Tg(r.type._context);break;case 22:case 23:Fg()}n=n.return}if(ht=t,Ke=t=ds(t.current,null),_t=Jt=e,rt=0,bl=null,jg=Zd=di=0,Ft=Ka=null,Xs!==null){for(e=0;e<Xs.length;e++)if(n=Xs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Xs=null}return t}function gI(t,e){do{var n=Ke;try{if(Eg(),pu.current=Ju,Yu){for(var r=je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Yu=!1}if(ui=0,ut=tt=je=null,Ha=!1,Tl=0,Lg.current=null,n===null||n.return===null){rt=1,bl=e,Ke=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=v0(o);if(_!==null){_.flags&=-257,w0(_,o,a,i,e),_.mode&1&&y0(i,u,e),e=_,l=u;var C=e.updateQueue;if(C===null){var A=new Set;A.add(l),e.updateQueue=A}else C.add(l);break e}else{if(!(e&1)){y0(i,u,e),Ug();break e}l=Error(U(426))}}else if(De&&a.mode&1){var R=v0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),w0(R,o,a,i,e),wg(Eo(l,a));break e}}i=l=Eo(l,a),rt!==4&&(rt=2),Ka===null?Ka=[i]:Ka.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=ZT(i,l,e);h0(i,S);break e;case 1:a=l;var E=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(cs===null||!cs.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=eI(i,a,e);h0(i,D);break e}}i=i.return}while(i!==null)}vI(n)}catch(V){e=V,Ke===n&&n!==null&&(Ke=n=n.return);continue}break}while(!0)}function _I(){var t=Xu.current;return Xu.current=Ju,t===null?Ju:t}function Ug(){(rt===0||rt===3||rt===2)&&(rt=4),ht===null||!(di&268435455)&&!(Zd&268435455)||Hr(ht,_t)}function td(t,e){var n=pe;pe|=2;var r=_I();(ht!==t||_t!==e)&&(ar=null,ri(t,e));do try{$k();break}catch(s){gI(t,s)}while(!0);if(Eg(),pe=n,Xu.current=r,Ke!==null)throw Error(U(261));return ht=null,_t=0,rt}function $k(){for(;Ke!==null;)yI(Ke)}function zk(){for(;Ke!==null&&!pA();)yI(Ke)}function yI(t){var e=xI(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?vI(t):Ke=e,Lg.current=null}function vI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jk(n,e),n!==null){n.flags&=32767,Ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rt=6,Ke=null;return}}else if(n=Lk(n,e,Jt),n!==null){Ke=n;return}if(e=e.sibling,e!==null){Ke=e;return}Ke=e=t}while(e!==null);rt===0&&(rt=5)}function Gs(t,e,n){var r=xe,s=fn.transition;try{fn.transition=null,xe=1,Wk(t,e,n,r)}finally{fn.transition=s,xe=r}return null}function Wk(t,e,n,r){do ao();while(ts!==null);if(pe&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(IA(t,i),t===ht&&(Ke=ht=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Gc||(Gc=!0,EI(ju,function(){return ao(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=fn.transition,fn.transition=null;var o=xe;xe=1;var a=pe;pe|=4,Lg.current=null,Vk(t,n),fI(n,t),uk(Vp),Vu=!!Mp,Vp=Mp=null,t.current=n,Fk(n),mA(),pe=a,xe=o,fn.transition=i}else t.current=n;if(Gc&&(Gc=!1,ts=t,ed=s),i=t.pendingLanes,i===0&&(cs=null),yA(n.stateNode),Ht(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Zu)throw Zu=!1,t=sm,sm=null,t;return ed&1&&t.tag!==0&&ao(),i=t.pendingLanes,i&1?t===im?Qa++:(Qa=0,im=t):Qa=0,Os(),null}function ao(){if(ts!==null){var t=ZE(ed),e=fn.transition,n=xe;try{if(fn.transition=null,xe=16>t?16:t,ts===null)var r=!1;else{if(t=ts,ts=null,ed=0,pe&6)throw Error(U(331));var s=pe;for(pe|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Ga(8,h,i)}var p=h.child;if(p!==null)p.return=h,G=p;else for(;G!==null;){h=G;var m=h.sibling,_=h.return;if(uI(h),h===u){G=null;break}if(m!==null){m.return=_,G=m;break}G=_}}}var C=i.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var R=A.sibling;A.sibling=null,A=R}while(A!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ga(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,G=S;break e}G=i.return}}var E=t.current;for(G=E;G!==null;){o=G;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,G=x;else e:for(o=E;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xd(9,a)}}catch(V){Fe(a,a.return,V)}if(a===o){G=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,G=D;break e}G=a.return}}if(pe=s,Os(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Wd,t)}catch{}r=!0}return r}finally{xe=n,fn.transition=e}}return!1}function D0(t,e,n){e=Eo(n,e),e=ZT(t,e,1),t=ls(t,e,1),e=Lt(),t!==null&&(Yl(t,1,e),Ht(t,e))}function Fe(t,e,n){if(t.tag===3)D0(t,t,n);else for(;e!==null;){if(e.tag===3){D0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cs===null||!cs.has(r))){t=Eo(n,t),t=eI(e,t,1),e=ls(e,t,1),t=Lt(),e!==null&&(Yl(e,1,t),Ht(e,t));break}}e=e.return}}function qk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Lt(),t.pingedLanes|=t.suspendedLanes&n,ht===t&&(_t&n)===n&&(rt===4||rt===3&&(_t&130023424)===_t&&500>We()-Mg?ri(t,0):jg|=n),Ht(t,e)}function wI(t,e){e===0&&(t.mode&1?(e=Mc,Mc<<=1,!(Mc&130023424)&&(Mc=4194304)):e=1);var n=Lt();t=xr(t,e),t!==null&&(Yl(t,e,n),Ht(t,n))}function Hk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wI(t,n)}function Gk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),wI(t,n)}var xI;xI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Wt.current)$t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $t=!1,Ok(t,e,n);$t=!!(t.flags&131072)}else $t=!1,De&&e.flags&1048576&&ST(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gu(t,e),t=e.pendingProps;var s=yo(e,Ct.current);oo(e,n),s=kg(null,e,r,t,s,n);var i=Rg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(i=!0,zu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Sg(e),s.updater=Jd,e.stateNode=s,s._reactInternals=e,Gp(e,r,t,n),e=Yp(null,e,r,!0,i,n)):(e.tag=0,De&&i&&yg(e),Dt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Qk(r),t=xn(r,t),s){case 0:e=Qp(null,e,r,t,n);break e;case 1:e=T0(null,e,r,t,n);break e;case 11:e=x0(null,e,r,t,n);break e;case 14:e=E0(null,e,r,xn(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xn(r,s),Qp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xn(r,s),T0(t,e,r,s,n);case 3:e:{if(sI(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,RT(t,e),Ku(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Eo(Error(U(423)),e),e=I0(t,e,r,n,s);break e}else if(r!==s){s=Eo(Error(U(424)),e),e=I0(t,e,r,n,s);break e}else for(Xt=as(e.stateNode.containerInfo.firstChild),tn=e,De=!0,Tn=null,n=AT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===s){e=Er(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return PT(e),t===null&&Wp(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Fp(r,s)?o=null:i!==null&&Fp(r,i)&&(e.flags|=32),rI(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Wp(e),null;case 13:return iI(t,e,n);case 4:return bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xn(r,s),x0(t,e,r,s,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(Hu,r._currentValue),r._currentValue=o,i!==null)if(Rn(i.value,o)){if(i.children===s.children&&!Wt.current){e=Er(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=mr(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),qp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),qp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Dt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,oo(e,n),s=gn(s),r=r(s),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,s=xn(r,e.pendingProps),s=xn(r.type,s),E0(t,e,r,s,n);case 15:return tI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xn(r,s),gu(t,e),e.tag=1,qt(r)?(t=!0,zu(e)):t=!1,oo(e,n),XT(e,r,s),Gp(e,r,s,n),Yp(null,e,r,!0,t,n);case 19:return oI(t,e,n);case 22:return nI(t,e,n)}throw Error(U(156,e.tag))};function EI(t,e){return QE(t,e)}function Kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(t,e,n,r){return new Kk(t,e,n,r)}function Bg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qk(t){if(typeof t=="function")return Bg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===og)return 11;if(t===ag)return 14}return 2}function ds(t,e){var n=t.alternate;return n===null?(n=dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Bg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return si(n.children,s,i,e);case ig:o=8,s|=8;break;case _p:return t=dn(12,n,e,s|2),t.elementType=_p,t.lanes=i,t;case yp:return t=dn(13,n,e,s),t.elementType=yp,t.lanes=i,t;case vp:return t=dn(19,n,e,s),t.elementType=vp,t.lanes=i,t;case PE:return eh(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kE:o=10;break e;case RE:o=9;break e;case og:o=11;break e;case ag:o=14;break e;case zr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=dn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function si(t,e,n,r){return t=dn(7,t,r,e),t.lanes=n,t}function eh(t,e,n,r){return t=dn(22,t,r,e),t.elementType=PE,t.lanes=n,t.stateNode={isHidden:!1},t}function Bf(t,e,n){return t=dn(6,t,null,e),t.lanes=n,t}function $f(t,e,n){return e=dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ef(0),this.expirationTimes=Ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ef(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function $g(t,e,n,r,s,i,o,a,l){return t=new Yk(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=dn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sg(i),t}function Jk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function TI(t){if(!t)return xs;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(qt(n))return TT(t,n,e)}return e}function II(t,e,n,r,s,i,o,a,l){return t=$g(n,r,!0,t,s,i,o,a,l),t.context=TI(null),n=t.current,r=Lt(),s=us(n),i=mr(r,s),i.callback=e??null,ls(n,i,s),t.current.lanes=s,Yl(t,s,r),Ht(t,r),t}function th(t,e,n,r){var s=e.current,i=Lt(),o=us(s);return n=TI(n),e.context===null?e.context=n:e.pendingContext=n,e=mr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ls(s,e,o),t!==null&&(Nn(t,s,o,i),fu(t,s,o)),o}function nd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function O0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zg(t,e){O0(t,e),(t=t.alternate)&&O0(t,e)}function Xk(){return null}var SI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wg(t){this._internalRoot=t}nh.prototype.render=Wg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));th(t,e,null,null)};nh.prototype.unmount=Wg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hi(function(){th(null,t,null,null)}),e[wr]=null}};function nh(t){this._internalRoot=t}nh.prototype.unstable_scheduleHydration=function(t){if(t){var e=nT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&sT(t)}};function qg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function Zk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=nd(o);i.call(u)}}var o=II(e,r,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[wr]=o.current,yl(t.nodeType===8?t.parentNode:t),hi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=nd(l);a.call(u)}}var l=$g(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[wr]=l.current,yl(t.nodeType===8?t.parentNode:t),hi(function(){th(e,l,n,r)}),l}function sh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=nd(o);a.call(l)}}th(e,o,t,s)}else o=Zk(n,e,t,s,r);return nd(o)}eT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(ug(e,n|1),Ht(e,We()),!(pe&6)&&(To=We()+500,Os()))}break;case 13:hi(function(){var r=xr(t,1);if(r!==null){var s=Lt();Nn(r,t,1,s)}}),zg(t,1)}};dg=function(t){if(t.tag===13){var e=xr(t,134217728);if(e!==null){var n=Lt();Nn(e,t,134217728,n)}zg(t,134217728)}};tT=function(t){if(t.tag===13){var e=us(t),n=xr(t,e);if(n!==null){var r=Lt();Nn(n,t,e,r)}zg(t,e)}};nT=function(){return xe};rT=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};Ap=function(t,e,n){switch(e){case"input":if(Ep(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Kd(r);if(!s)throw Error(U(90));OE(r),Ep(r,s)}}}break;case"textarea":jE(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};zE=Vg;WE=hi;var eR={usingClientEntryPoint:!1,Events:[Xl,qi,Kd,BE,$E,Vg]},Ea={findFiberByHostInstance:Js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tR={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=GE(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||Xk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{Wd=Kc.inject(tR),zn=Kc}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qg(e))throw Error(U(200));return Jk(t,e,null,n)};rn.createRoot=function(t,e){if(!qg(t))throw Error(U(299));var n=!1,r="",s=SI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=$g(t,1,!1,null,null,n,!1,r,s),t[wr]=e.current,yl(t.nodeType===8?t.parentNode:t),new Wg(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=GE(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return hi(t)};rn.hydrate=function(t,e,n){if(!rh(e))throw Error(U(200));return sh(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!qg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=SI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=II(e,null,t,1,n??null,s,!1,i,o),t[wr]=e.current,yl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nh(e)};rn.render=function(t,e,n){if(!rh(e))throw Error(U(200));return sh(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!rh(t))throw Error(U(40));return t._reactRootContainer?(hi(function(){sh(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};rn.unstable_batchedUpdates=Vg;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return sh(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function bI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bI)}catch(t){console.error(t)}}bI(),bE.exports=rn;var nR=bE.exports,j0=nR;mp.createRoot=j0.createRoot,mp.hydrateRoot=j0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}var ns;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ns||(ns={}));const M0="popstate";function rR(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return lm("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:rd(s)}return iR(e,n,null,t)}function Je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sR(){return Math.random().toString(36).substr(2,8)}function V0(t,e){return{usr:t.state,key:t.key,idx:e}}function lm(t,e,n,r){return n===void 0&&(n=null),Cl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Uo(e):e,{state:n,key:e&&e.key||r||sR()})}function rd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Uo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function iR(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=ns.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Cl({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function p(){a=ns.Pop;let R=h(),S=R==null?null:R-u;u=R,l&&l({action:a,location:A.location,delta:S})}function m(R,S){a=ns.Push;let E=lm(A.location,R,S);u=h()+1;let x=V0(E,u),D=A.createHref(E);try{o.pushState(x,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;s.location.assign(D)}i&&l&&l({action:a,location:A.location,delta:1})}function _(R,S){a=ns.Replace;let E=lm(A.location,R,S);u=h();let x=V0(E,u),D=A.createHref(E);o.replaceState(x,"",D),i&&l&&l({action:a,location:A.location,delta:0})}function C(R){let S=s.location.origin!=="null"?s.location.origin:s.location.href,E=typeof R=="string"?R:rd(R);return E=E.replace(/ $/,"%20"),Je(S,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,S)}let A={get action(){return a},get location(){return t(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(M0,p),l=R,()=>{s.removeEventListener(M0,p),l=null}},createHref(R){return e(s,R)},createURL:C,encodeLocation(R){let S=C(R);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:m,replace:_,go(R){return o.go(R)}};return A}var F0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(F0||(F0={}));function oR(t,e,n){return n===void 0&&(n="/"),aR(t,e,n)}function aR(t,e,n,r){let s=typeof e=="string"?Uo(e):e,i=Gg(s.pathname||"/",n);if(i==null)return null;let o=CI(t);lR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=wR(i);a=_R(o[l],u)}return a}function CI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hs([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(Je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),CI(i.children,e,h,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:mR(u,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of NI(i.path))s(i,o,l)}),e}function NI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=NI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function lR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cR=/^:[\w-]+$/,uR=3,dR=2,hR=1,fR=10,pR=-2,U0=t=>t==="*";function mR(t,e){let n=t.split("/"),r=n.length;return n.some(U0)&&(r+=pR),e&&(r+=dR),n.filter(s=>!U0(s)).reduce((s,i)=>s+(cR.test(i)?uR:i===""?hR:fR),r)}function gR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function _R(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",p=yR({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),m=l.route;if(!p)return null;Object.assign(s,p.params),o.push({params:s,pathname:hs([i,p.pathname]),pathnameBase:SR(hs([i,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(i=hs([i,p.pathnameBase]))}return o}function yR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vR(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,h,p)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let A=a[p]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const C=a[p];return _&&!C?u[m]=void 0:u[m]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function vR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function wR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const xR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ER=t=>xR.test(t);function TR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Uo(t):t,i;if(n)if(ER(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Hg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=B0(n.substring(1),"/"):i=B0(n,e)}else i=e;return{pathname:i,search:bR(r),hash:CR(s)}}function B0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function zf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function AI(t,e){let n=IR(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function kI(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Uo(t):(s=Cl({},t),Je(!s.pathname||!s.pathname.includes("?"),zf("?","pathname","search",s)),Je(!s.pathname||!s.pathname.includes("#"),zf("#","pathname","hash",s)),Je(!s.search||!s.search.includes("#"),zf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}a=p>=0?e[p]:"/"}let l=TR(s,a),u=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const hs=t=>t.join("/").replace(/\/\/+/g,"/"),SR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,CR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RI=["post","put","patch","delete"];new Set(RI);const AR=["get",...RI];new Set(AR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nl.apply(this,arguments)}const Kg=O.createContext(null),kR=O.createContext(null),Si=O.createContext(null),ih=O.createContext(null),bi=O.createContext({outlet:null,matches:[],isDataRoute:!1}),PI=O.createContext(null);function RR(t,e){let{relative:n}=e===void 0?{}:e;ec()||Je(!1);let{basename:r,navigator:s}=O.useContext(Si),{hash:i,pathname:o,search:a}=OI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hs([r,o])),s.createHref({pathname:l,search:a,hash:i})}function ec(){return O.useContext(ih)!=null}function oh(){return ec()||Je(!1),O.useContext(ih).location}function DI(t){O.useContext(Si).static||O.useLayoutEffect(t)}function Qg(){let{isDataRoute:t}=O.useContext(bi);return t?WR():PR()}function PR(){ec()||Je(!1);let t=O.useContext(Kg),{basename:e,future:n,navigator:r}=O.useContext(Si),{matches:s}=O.useContext(bi),{pathname:i}=oh(),o=JSON.stringify(AI(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return DI(()=>{a.current=!0}),O.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let p=kI(u,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hs([e,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[e,r,o,i,t])}function OI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Si),{matches:s}=O.useContext(bi),{pathname:i}=oh(),o=JSON.stringify(AI(s,r.v7_relativeSplatPath));return O.useMemo(()=>kI(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function DR(t,e){return OR(t,e)}function OR(t,e,n,r){ec()||Je(!1);let{navigator:s}=O.useContext(Si),{matches:i}=O.useContext(bi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=oh(),h;if(e){var p;let R=typeof e=="string"?Uo(e):e;l==="/"||(p=R.pathname)!=null&&p.startsWith(l)||Je(!1),h=R}else h=u;let m=h.pathname||"/",_=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=oR(t,{pathname:_}),A=FR(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:hs([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:hs([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&A?O.createElement(ih.Provider,{value:{location:Nl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ns.Pop}},A):A}function LR(){let t=zR(),e=NR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const jR=O.createElement(LR,null);class MR extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(bi.Provider,{value:this.props.routeContext},O.createElement(PI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VR(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(Kg);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(bi.Provider,{value:e},r)}function FR(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);h>=0||Je(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let p=o[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:m,errors:_}=n,C=p.route.loader&&m[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||C){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,p,m)=>{let _,C=!1,A=null,R=null;n&&(_=a&&p.route.id?a[p.route.id]:void 0,A=p.route.errorElement||jR,l&&(u<0&&m===0?(qR("route-fallback"),C=!0,R=null):u===m&&(C=!0,R=p.route.hydrateFallbackElement||null)));let S=e.concat(o.slice(0,m+1)),E=()=>{let x;return _?x=A:C?x=R:p.route.Component?x=O.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=h,O.createElement(VR,{match:p,routeContext:{outlet:h,matches:S,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?O.createElement(MR,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:E(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):E()},null)}var LI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(LI||{}),jI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(jI||{});function UR(t){let e=O.useContext(Kg);return e||Je(!1),e}function BR(t){let e=O.useContext(kR);return e||Je(!1),e}function $R(t){let e=O.useContext(bi);return e||Je(!1),e}function MI(t){let e=$R(),n=e.matches[e.matches.length-1];return n.route.id||Je(!1),n.route.id}function zR(){var t;let e=O.useContext(PI),n=BR(),r=MI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function WR(){let{router:t}=UR(LI.UseNavigateStable),e=MI(jI.UseNavigateStable),n=O.useRef(!1);return DI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Nl({fromRouteId:e},i)))},[t,e])}const $0={};function qR(t,e,n){$0[t]||($0[t]=!0)}function HR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Oa(t){Je(!1)}function GR(t){let{basename:e="/",children:n=null,location:r,navigationType:s=ns.Pop,navigator:i,static:o=!1,future:a}=t;ec()&&Je(!1);let l=e.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:l,navigator:i,static:o,future:Nl({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Uo(r));let{pathname:h="/",search:p="",hash:m="",state:_=null,key:C="default"}=r,A=O.useMemo(()=>{let R=Gg(h,l);return R==null?null:{location:{pathname:R,search:p,hash:m,state:_,key:C},navigationType:s}},[l,h,p,m,_,C,s]);return A==null?null:O.createElement(Si.Provider,{value:u},O.createElement(ih.Provider,{children:n,value:A}))}function KR(t){let{children:e,location:n}=t;return DR(cm(e),n)}new Promise(()=>{});function cm(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,cm(r.props.children,i));return}r.type!==Oa&&Je(!1),!r.props.index||!r.props.children||Je(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cm(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function um(){return um=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},um.apply(this,arguments)}function QR(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function YR(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JR(t,e){return t.button===0&&(!e||e==="_self")&&!YR(t)}const XR=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ZR="6";try{window.__reactRouterVersion=ZR}catch{}const eP="startTransition",z0=q1[eP];function tP(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=rR({window:s,v5Compat:!0}));let o=i.current,[a,l]=O.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=O.useCallback(p=>{u&&z0?z0(()=>l(p)):l(p)},[l,u]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>HR(r),[r]),O.createElement(GR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lo=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:p}=e,m=QR(e,XR),{basename:_}=O.useContext(Si),C,A=!1;if(typeof u=="string"&&rP.test(u)&&(C=u,nP))try{let x=new URL(window.location.href),D=u.startsWith("//")?new URL(x.protocol+u):new URL(u),V=Gg(D.pathname,_);D.origin===x.origin&&V!=null?u=V+D.search+D.hash:A=!0}catch{}let R=RR(u,{relative:s}),S=sP(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:p});function E(x){r&&r(x),x.defaultPrevented||S(x)}return O.createElement("a",um({},m,{href:C||R,onClick:A||i?r:E,ref:n,target:l}))});var W0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(W0||(W0={}));var q0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(q0||(q0={}));function sP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=Qg(),u=oh(),h=OI(t,{relative:o});return O.useCallback(p=>{if(JR(p,n)){p.preventDefault();let m=r!==void 0?r:rd(u)===rd(h);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,h,r,s,n,t,i,o,a])}/**
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
 */const iP=()=>{};var H0={};/**
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
 */const VI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw Bo(e)},Bo=function(t){return new Error("Firebase Database ("+VI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const FI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},oP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,p=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[h],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(FI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):oP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||p==null)throw new aP;const m=i<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UI=function(t){const e=FI(t);return Yg.encodeByteArray(e,!0)},sd=function(t){return UI(t).replace(/\./g,"")},id=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function lP(t){return BI(void 0,t)}function BI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cP(n)||(t[n]=BI(t[n],e[n]));return t}function cP(t){return t!=="__proto__"}/**
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
 */function uP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dP=()=>uP().__FIREBASE_DEFAULTS__,hP=()=>{if(typeof process>"u"||typeof H0>"u")return;const t=H0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&id(t[1]);return e&&JSON.parse(e)},ah=()=>{try{return iP()||dP()||hP()||fP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$I=t=>{var e,n;return(n=(e=ah())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Jg=t=>{const e=$I(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zI=()=>{var t;return(t=ah())==null?void 0:t.config},WI=t=>{var e;return(e=ah())==null?void 0:e[`_${t}`]};/**
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
 */class cr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Xg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[sd(JSON.stringify(n)),sd(JSON.stringify(o)),""].join(".")}const Ya={};function pP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ya))Ya[e]?t.emulator.push(e):t.prod.push(e);return t}function mP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let G0=!1;function ch(t,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Ya[t]===e||Ya[t]||G0)return;Ya[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=pP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{G0=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=mP(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),A=n("learnmore"),R=document.getElementById(A)||document.createElement("a"),S=n("preprendIcon"),E=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const x=m.element;a(x),h(R,A);const D=u();l(E,S),x.append(E,C,R,D),document.body.appendChild(x)}i?(C.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(E.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function gP(){var e;const t=(e=ah())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _P(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vP(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wP(){return VI.NODE_ADMIN===!0}function xP(){return!gP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function EP(){try{return typeof indexedDB=="object"}catch{return!1}}function TP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const IP="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=IP,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tc.prototype.create)}}class tc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?SP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new er(s,a,r)}}function SP(t,e){return t.replace(bP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const bP=/\{\$([^}]+)}/g;/**
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
 */function Al(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
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
 */const HI=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Al(id(i[0])||""),n=Al(id(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},CP=function(t){const e=HI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NP=function(t){const e=HI(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ad(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(K0(i)&&K0(o)){if(!Tr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function K0(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function La(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ja(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class AP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)r[p]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let p=0;p<16;p++)r[p]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let p=16;p<80;p++){const m=r[p-3]^r[p-8]^r[p-14]^r[p-16];r[p]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let p=0;p<80;p++){p<40?p<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):p<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+u+l+h+r[p]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function kP(t,e){const n=new RP(t,e);return n.subscribe.bind(n)}class RP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");PP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wf),s.error===void 0&&(s.error=Wf),s.complete===void 0&&(s.complete=Wf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function PP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wf(){}function So(t,e){return`${t} failed: ${e} argument `}/**
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
 */const DP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},uh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ks="[DEFAULT]";/**
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
 */class OP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jP(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LP(t){return t===Ks?void 0:t}function jP(t){return t.instantiationMode==="EAGER"}/**
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
 */class MP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const VP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},FP=le.INFO,UP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},BP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=FP,this._logHandler=BP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const $P=(t,e)=>e.some(n=>t instanceof n);let Q0,Y0;function zP(){return Q0||(Q0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WP(){return Y0||(Y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GI=new WeakMap,dm=new WeakMap,KI=new WeakMap,qf=new WeakMap,e_=new WeakMap;function qP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&GI.set(n,t)}).catch(()=>{}),e_.set(e,t),e}function HP(t){if(dm.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dm.set(t,e)}let hm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GP(t){hm=t(hm)}function KP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hf(this),e,...n);return KI.set(r,e.sort?e.sort():[e]),fs(r)}:WP().includes(t)?function(...e){return t.apply(Hf(this),e),fs(GI.get(this))}:function(...e){return fs(t.apply(Hf(this),e))}}function QP(t){return typeof t=="function"?KP(t):(t instanceof IDBTransaction&&HP(t),$P(t,zP())?new Proxy(t,hm):t)}function fs(t){if(t instanceof IDBRequest)return qP(t);if(qf.has(t))return qf.get(t);const e=QP(t);return e!==t&&(qf.set(t,e),e_.set(e,t)),e}const Hf=t=>e_.get(t);function YP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=fs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fs(o.result),l.oldVersion,l.newVersion,fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const JP=["get","getKey","getAll","getAllKeys","count"],XP=["put","add","delete","clear"],Gf=new Map;function J0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gf.get(e))return Gf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=XP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JP.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Gf.set(e,i),i}GP(t=>({...t,get:(e,n,r)=>J0(e,n)||t.get(e,n,r),has:(e,n)=>!!J0(e,n)||t.has(e,n)}));/**
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
 */class ZP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function eD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fm="@firebase/app",X0="0.14.7";/**
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
 */const Sr=new dh("@firebase/app"),tD="@firebase/app-compat",nD="@firebase/analytics-compat",rD="@firebase/analytics",sD="@firebase/app-check-compat",iD="@firebase/app-check",oD="@firebase/auth",aD="@firebase/auth-compat",lD="@firebase/database",cD="@firebase/data-connect",uD="@firebase/database-compat",dD="@firebase/functions",hD="@firebase/functions-compat",fD="@firebase/installations",pD="@firebase/installations-compat",mD="@firebase/messaging",gD="@firebase/messaging-compat",_D="@firebase/performance",yD="@firebase/performance-compat",vD="@firebase/remote-config",wD="@firebase/remote-config-compat",xD="@firebase/storage",ED="@firebase/storage-compat",TD="@firebase/firestore",ID="@firebase/ai",SD="@firebase/firestore-compat",bD="firebase",CD="12.8.0";/**
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
 */const pm="[DEFAULT]",ND={[fm]:"fire-core",[tD]:"fire-core-compat",[rD]:"fire-analytics",[nD]:"fire-analytics-compat",[iD]:"fire-app-check",[sD]:"fire-app-check-compat",[oD]:"fire-auth",[aD]:"fire-auth-compat",[lD]:"fire-rtdb",[cD]:"fire-data-connect",[uD]:"fire-rtdb-compat",[dD]:"fire-fn",[hD]:"fire-fn-compat",[fD]:"fire-iid",[pD]:"fire-iid-compat",[mD]:"fire-fcm",[gD]:"fire-fcm-compat",[_D]:"fire-perf",[yD]:"fire-perf-compat",[vD]:"fire-rc",[wD]:"fire-rc-compat",[xD]:"fire-gcs",[ED]:"fire-gcs-compat",[TD]:"fire-fst",[SD]:"fire-fst-compat",[ID]:"fire-vertex","fire-js":"fire-js",[bD]:"fire-js-all"};/**
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
 */const ld=new Map,AD=new Map,mm=new Map;function Z0(t,e){try{t.container.addComponent(e)}catch(n){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(mm.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;mm.set(e,t);for(const n of ld.values())Z0(n,t);for(const n of AD.values())Z0(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
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
 */const kD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new tc("app","Firebase",kD);/**
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
 */class RD{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=CD;function QI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:pm,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ps.create("bad-app-name",{appName:String(s)});if(n||(n=zI()),!n)throw ps.create("no-options");const i=ld.get(s);if(i){if(Tr(n,i.options)&&Tr(r,i.config))return i;throw ps.create("duplicate-app",{appName:s})}const o=new MP(s);for(const l of mm.values())o.addComponent(l);const a=new RD(n,r,o);return ld.set(s,a),a}function hh(t=pm){const e=ld.get(t);if(!e&&t===pm&&zI())return QI();if(!e)throw ps.create("no-app",{appName:t});return e}function pn(t,e,n){let r=ND[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(o.join(" "));return}Es(new Ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const PD="firebase-heartbeat-database",DD=1,kl="firebase-heartbeat-store";let Kf=null;function YI(){return Kf||(Kf=YP(PD,DD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),Kf}async function OD(t){try{const n=(await YI()).transaction(kl),r=await n.objectStore(kl).get(JI(t));return await n.done,r}catch(e){if(e instanceof er)Sr.warn(e.message);else{const n=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(n.message)}}}async function ew(t,e){try{const r=(await YI()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,JI(t)),await r.done}catch(n){if(n instanceof er)Sr.warn(n.message);else{const r=ps.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Sr.warn(r.message)}}}function JI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const LD=1024,jD=30;class MD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jD){const o=UD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tw(),{heartbeatsToSend:r,unsentEntries:s}=VD(this._heartbeatsCache.heartbeats),i=sd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Sr.warn(n),""}}}function tw(){return new Date().toISOString().substring(0,10)}function VD(t,e=LD){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EP()?TP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ew(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ew(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function nw(t){return sd(JSON.stringify({version:2,heartbeats:t})).length}function UD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function BD(t){Es(new Ir("platform-logger",e=>new ZP(e),"PRIVATE")),Es(new Ir("heartbeat",e=>new MD(e),"PRIVATE")),pn(fm,X0,t),pn(fm,X0,"esm2020"),pn("fire-js","")}BD("");var $D="firebase",zD="12.8.0";/**
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
 */pn($D,zD,"app");function XI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WD=XI,ZI=new tc("auth","Firebase",XI());/**
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
 */const cd=new dh("@firebase/auth");function qD(t,...e){cd.logLevel<=le.WARN&&cd.warn(`Auth (${Ls}): ${t}`,...e)}function wu(t,...e){cd.logLevel<=le.ERROR&&cd.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function Pn(t,...e){throw t_(t,...e)}function qn(t,...e){return t_(t,...e)}function eS(t,e,n){const r={...WD(),[e]:n};return new tc("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return eS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function t_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ZI.create(t,...e)}function J(t,e,...n){if(!t)throw t_(e,...n)}function hr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wu(e),new Error(e)}function br(t,e){t||hr(e)}/**
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
 */function ud(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function tS(){return rw()==="http:"||rw()==="https:"}function rw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function HD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tS()||yP()||"connection"in navigator)?navigator.onLine:!0}function GD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rc{constructor(e,n){this.shortDelay=e,this.longDelay=n,br(n>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||qI()}get(){return HD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function n_(t,e){br(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],YD=new rc(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function rr(t,e,n,r,s={}){return rS(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$o({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return _P()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(u.credentials="include"),nS.fetch()(await sS(t,t.config.apiHost,n,a),u)})}async function rS(t,e,n){t._canInitEmulator=!1;const r={...KD,...e};try{const s=new XD(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Qc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Qc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Qc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eS(t,h,u);Pn(t,h)}}catch(s){if(s instanceof er)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function sc(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function sS(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?n_(t.config,s):`${t.config.apiScheme}://${s}`;return QD.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function JD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),YD.get())})}}function Qc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qn(t,e,r);return s.customData._tokenResponse=n,s}function sw(t){return t!==void 0&&t.enterprise!==void 0}class ZD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function e2(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function t2(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function dd(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ja(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function n2(t,e=!1){const n=_e(t),r=await n.getIdToken(e),s=r_(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ja(Qf(s.auth_time)),issuedAtTime:Ja(Qf(s.iat)),expirationTime:Ja(Qf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qf(t){return Number(t)*1e3}function r_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wu("JWT malformed, contained fewer than 3 sections"),null;try{const s=id(n);return s?JSON.parse(s):(wu("Failed to decode base64 JWT payload"),null)}catch(s){return wu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iw(t){const e=r_(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&r2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function r2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class s2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ja(this.lastLoginAt),this.creationTime=Ja(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function hd(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Rl(t,dd(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?iS(s.providerUserInfo):[],o=o2(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function i2(t){const e=_e(t);await hd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function iS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function a2(t,e){const n=await rS(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await sS(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(l.credentials="include"),nS.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l2(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=iw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await a2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new co;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return hr("not implemented")}}/**
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
 */function $r(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new s2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return n2(this,e)}reload(){return i2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Rl(this,t2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:C,stsTokenManager:A}=n;J(p&&A,e,"internal-error");const R=co.fromJSON(this.name,A);J(typeof p=="string",e,"internal-error"),$r(r,e.name),$r(s,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof _=="boolean",e,"internal-error"),$r(i,e.name),$r(o,e.name),$r(a,e.name),$r(l,e.name),$r(u,e.name),$r(h,e.name);const S=new Sn({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:h});return C&&Array.isArray(C)&&(S.providerData=C.map(E=>({...E}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new co;s.updateFromServerResponse(n);const i=new Sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await hd(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?iS(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new co;a.updateFromIdToken(r);const l=new Sn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new gm(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const ow=new Map;function fr(t){br(t instanceof Function,"Expected a class definition");let e=ow.get(t);return e?(br(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ow.set(t,e),e)}/**
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
 */class oS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oS.type="NONE";const aw=oS;/**
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
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xu(this.userKey,s.apiKey,i),this.fullPersistenceKey=xu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dd(this.auth,{idToken:e}).catch(()=>{});return n?Sn._fromGetAccountInfoResponse(this.auth,n,e):null}return Sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(fr(aw),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||fr(aw);const o=xu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const m=await dd(e,{idToken:h}).catch(()=>{});if(!m)break;p=await Sn._fromGetAccountInfoResponse(e,m,h)}else p=Sn._fromJSON(e,h);u!==i&&(a=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new uo(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new uo(i,e,r))}}/**
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
 */function lw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(aS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hS(e))return"Blackberry";if(fS(e))return"Webos";if(lS(e))return"Safari";if((e.includes("chrome/")||cS(e))&&!e.includes("edge/"))return"Chrome";if(dS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function aS(t=Nt()){return/firefox\//i.test(t)}function lS(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cS(t=Nt()){return/crios\//i.test(t)}function uS(t=Nt()){return/iemobile/i.test(t)}function dS(t=Nt()){return/android/i.test(t)}function hS(t=Nt()){return/blackberry/i.test(t)}function fS(t=Nt()){return/webos/i.test(t)}function s_(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function c2(t=Nt()){var e;return s_(t)&&!!((e=window.navigator)!=null&&e.standalone)}function u2(){return vP()&&document.documentMode===10}function pS(t=Nt()){return s_(t)||dS(t)||fS(t)||hS(t)||/windows phone/i.test(t)||uS(t)}/**
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
 */function mS(t,e=[]){let n;switch(t){case"Browser":n=lw(Nt());break;case"Worker":n=`${lw(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class d2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function h2(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const f2=6;class p2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??f2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class m2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cw(this),this.idTokenSubscription=new cw(this),this.beforeStateQueue=new d2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dd(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(gr(this));const n=e?_e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h2(this),n=new p2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[fr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&qD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function js(t){return _e(t)}class cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=kP(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function g2(t){fh=t}function gS(t){return fh.loadJS(t)}function _2(){return fh.recaptchaEnterpriseScript}function y2(){return fh.gapiScript}function v2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class w2{constructor(){this.enterprise=new x2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class x2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const E2="recaptcha-enterprise",_S="NO_RECAPTCHA";class T2{constructor(e){this.type=E2,this.auth=js(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{e2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new ZD(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;sw(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(_S)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new w2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sw(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=_2();l.length!==0&&(l+=a),gS(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function uw(t,e,n,r=!1,s=!1){const i=new T2(t);let o;if(s)o=_S;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function fd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await uw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uw(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function I2(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Tr(i,e??{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function S2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function b2(t,e,n){const r=js(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=yS(e),{host:o,port:a}=C2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Tr(u,r.config.emulator)&&Tr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Zn(o)?(lh(`${i}//${o}${l}`),ch("Auth",!0)):N2()}function yS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C2(t){const e=yS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:dw(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:dw(o)}}}function dw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class i_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hr("not implemented")}_getIdTokenResponse(e){return hr("not implemented")}_linkToIdToken(e,n){return hr("not implemented")}_getReauthenticationResolver(e){return hr("not implemented")}}async function A2(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function k2(t,e){return sc(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function R2(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function P2(t,e){return R2(t,e)}/**
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
 */async function D2(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function O2(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Pl extends i_{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Pl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Pl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,n,"signInWithPassword",k2);case"emailLink":return D2(e,{email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fd(e,r,"signUpPassword",A2);case"emailLink":return O2(e,{idToken:n,email:this._email,oobCode:this._password});default:Pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ho(t,e){return sc(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const L2="http://localhost";class fi extends i_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new fi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ho(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ho(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ho(e,n)}buildRequest(){const e={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */function j2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M2(t){const e=La(ja(t)).link,n=e?La(ja(e)).deep_link_id:null,r=La(ja(t)).deep_link_id;return(r?La(ja(r)).link:null)||r||n||e||t}class o_{constructor(e){const n=La(ja(e)),r=n.apiKey??null,s=n.oobCode??null,i=j2(n.mode??null);J(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=M2(e);try{return new o_(n)}catch{return null}}}/**
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
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,n){return Pl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=o_.parseLink(n);return J(r,"argument-error"),Pl._fromEmailAndCode(e,r.code,r.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ic extends vS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends ic{constructor(){super("facebook.com")}static credential(e){return fi._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends ic{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Qr extends ic{constructor(){super("github.com")}static credential(e){return fi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends ic{constructor(){super("twitter.com")}static credential(e,n){return fi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function V2(t,e){return sc(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Sn._fromIdTokenResponse(e,r,s),o=hw(r);return new pi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=hw(r);return new pi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function hw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pd extends er{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,pd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new pd(e,n,r,s)}}function wS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?pd._fromErrorAndOperation(t,i,e,r):i})}async function F2(t,e,n=!1){const r=await Rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
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
 */async function U2(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(gr(r));const s="reauthenticate";try{const i=await Rl(t,wS(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=r_(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),pi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
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
 */async function xS(t,e,n=!1){if(Ut(t.app))return Promise.reject(gr(t));const r="signIn",s=await wS(t,r,e),i=await pi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function B2(t,e){return xS(js(t),e)}/**
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
 */async function ES(t){const e=js(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $2(t,e,n){const r=js(t);await fd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",P2)}async function z2(t,e,n){if(Ut(t.app))return Promise.reject(gr(t));const r=js(t),o=await fd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",V2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ES(t),l}),a=await pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function W2(t,e,n){return Ut(t.app)?Promise.reject(gr(t)):B2(_e(t),zo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ES(t),r})}/**
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
 */async function q2(t,e){return rr(t,"POST","/v1/accounts:createAuthUri",nr(t,e))}/**
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
 */async function H2(t,e){const n=tS()?ud():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await q2(_e(t),r);return s||[]}function G2(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function K2(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function Q2(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function Y2(t){return _e(t).signOut()}const md="__sak";/**
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
 */class TS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(md,"1"),this.storage.removeItem(md),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const J2=1e3,X2=10;class IS extends TS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);u2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IS.type="LOCAL";const Z2=IS;/**
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
 */class SS extends TS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SS.type="SESSION";const bS=SS;/**
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
 */function eO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ph{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ph(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await eO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ph.receivers=[];/**
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
 */function a_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=a_("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function nO(t){Hn().location.href=t}/**
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
 */function CS(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function rO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iO(){return CS()?self:null}/**
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
 */const NS="firebaseLocalStorageDb",oO=1,gd="firebaseLocalStorage",AS="fbase_key";class oc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(t,e){return t.transaction([gd],e?"readwrite":"readonly").objectStore(gd)}function aO(){const t=indexedDB.deleteDatabase(NS);return new oc(t).toPromise()}function _m(){const t=indexedDB.open(NS,oO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gd,{keyPath:AS})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gd)?e(r):(r.close(),await aO(),e(await _m()))})})}async function fw(t,e,n){const r=mh(t,!0).put({[AS]:e,value:n});return new oc(r).toPromise()}async function lO(t,e){const n=mh(t,!1).get(e),r=await new oc(n).toPromise();return r===void 0?null:r.value}function pw(t,e){const n=mh(t,!0).delete(e);return new oc(n).toPromise()}const cO=800,uO=3;class kS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _m(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ph._getInstance(iO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rO(),!this.activeServiceWorker)return;this.sender=new tO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _m();return await fw(e,md,"1"),await pw(e,md),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mh(s,!1).getAll();return new oc(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kS.type="LOCAL";const dO=kS;new rc(3e4,6e4);/**
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
 */function hO(t,e){return e?fr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class l_ extends i_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ho(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fO(t){return xS(t.auth,new l_(t),t.bypassAuthState)}function pO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),U2(n,new l_(t),t.bypassAuthState)}async function mO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),F2(n,new l_(t),t.bypassAuthState)}/**
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
 */class RS{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fO;case"linkViaPopup":case"linkViaRedirect":return mO;case"reauthViaPopup":case"reauthViaRedirect":return pO;default:Pn(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const gO=new rc(2e3,1e4);class Xi extends RS{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xi.currentPopupAction&&Xi.currentPopupAction.cancel(),Xi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=a_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gO.get())};e()}}Xi.currentPopupAction=null;/**
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
 */const _O="pendingRedirect",Eu=new Map;class yO extends RS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eu.get(this.auth._key());if(!e){try{const r=await vO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eu.set(this.auth._key(),e)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vO(t,e){const n=EO(e),r=xO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wO(t,e){Eu.set(t._key(),e)}function xO(t){return fr(t._redirectPersistence)}function EO(t){return xu(_O,t.config.apiKey,t.name)}async function TO(t,e,n=!1){if(Ut(t.app))return Promise.reject(gr(t));const r=js(t),s=hO(r,e),o=await new yO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IO=10*60*1e3;class SO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!PS(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IO&&this.cachedEventUids.clear(),this.cachedEventUids.has(mw(e))}saveEventToCache(e){this.cachedEventUids.add(mw(e)),this.lastProcessedEventTime=Date.now()}}function mw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function PS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return PS(t);default:return!1}}/**
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
 */async function CO(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
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
 */const NO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AO=/^https?/;async function kO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CO(t);for(const n of e)try{if(RO(n))return}catch{}Pn(t,"unauthorized-domain")}function RO(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AO.test(n))return!1;if(NO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PO=new rc(3e4,6e4);function gw(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DO(t){return new Promise((e,n)=>{var s,i,o;function r(){gw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gw(),n(qn(t,"network-request-failed"))},timeout:PO.get()})}if((i=(s=Hn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Hn().gapi)!=null&&o.load)r();else{const a=v2("iframefcb");return Hn()[a]=()=>{gapi.load?r():n(qn(t,"network-request-failed"))},gS(`${y2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Tu=null,e})}let Tu=null;function OO(t){return Tu=Tu||DO(t),Tu}/**
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
 */const LO=new rc(5e3,15e3),jO="__/auth/iframe",MO="emulator/auth/iframe",VO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UO(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?n_(e,MO):`https://${t.config.authDomain}/${jO}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},s=FO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$o(r).slice(1)}`}async function BO(t){const e=await OO(t),n=Hn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:UO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),a=Hn().setTimeout(()=>{i(o)},LO.get());function l(){Hn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const $O={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zO=500,WO=600,qO="_blank",HO="http://localhost";class _w{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GO(t,e,n,r=zO,s=WO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...$O,width:r.toString(),height:s.toString(),top:i,left:o},u=Nt().toLowerCase();n&&(a=cS(u)?qO:n),aS(u)&&(e=e||HO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(c2(u)&&a!=="_self")return KO(e||"",a),new _w(null);const p=window.open(e||"",a,h);J(p,t,"popup-blocked");try{p.focus()}catch{}return new _w(p)}function KO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QO="__/auth/handler",YO="emulator/auth/handler",JO=encodeURIComponent("fac");async function yw(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:s};if(e instanceof vS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof ic){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${JO}=${encodeURIComponent(l)}`:"";return`${XO(t)}?${$o(a).slice(1)}${u}`}function XO({config:t}){return t.emulator?n_(t,YO):`https://${t.authDomain}/${QO}`}/**
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
 */const Yf="webStorageSupport";class ZO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bS,this._completeRedirectFn=TO,this._overrideRedirectResult=wO}async _openPopup(e,n,r,s){var o;br((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await yw(e,n,r,ud(),s);return GO(e,i,a_())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await yw(e,n,r,ud(),s);return nO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(br(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BO(e),r=new SO(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yf,{type:Yf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Yf];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pS()||lS()||s_()}}const eL=ZO;var vw="@firebase/auth",ww="1.12.0";/**
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
 */class tL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rL(t){Es(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mS(t)},u=new m2(r,s,i,l);return S2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Ir("auth-internal",e=>{const n=js(e.getProvider("auth").getImmediate());return(r=>new tL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(vw,ww,nL(t)),pn(vw,ww,"esm2020")}/**
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
 */const sL=5*60,iL=WI("authIdTokenMaxAge")||sL;let xw=null;const oL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iL)return;const s=n==null?void 0:n.token;xw!==s&&(xw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aL(t=hh()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I2(t,{popupRedirectResolver:eL,persistence:[dO,Z2,bS]}),r=WI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oL(i.toString());K2(n,o,()=>o(n.currentUser)),G2(n,a=>o(a))}}const s=$I("auth");return s&&b2(n,`http://${s}`),n}function lL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}g2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",lL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rL("Browser");var Ew=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,DS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.F=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.D=function(b,N,k){for(var T=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)T[ge-2]=arguments[ge];return y.prototype[N].apply(b,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,y,w){w||(w=0);const b=Array(16);if(typeof y=="string")for(var N=0;N<16;++N)b[N]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(N=0;N<16;++N)b[N]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],N=I.g[2];let k=I.g[3],T;T=y+(k^w&(N^k))+b[0]+3614090360&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(N^y&(w^N))+b[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=N+(w^k&(y^w))+b[2]+606105819&4294967295,N=k+(T<<17&4294967295|T>>>15),T=w+(y^N&(k^y))+b[3]+3250441966&4294967295,w=N+(T<<22&4294967295|T>>>10),T=y+(k^w&(N^k))+b[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(N^y&(w^N))+b[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=N+(w^k&(y^w))+b[6]+2821735955&4294967295,N=k+(T<<17&4294967295|T>>>15),T=w+(y^N&(k^y))+b[7]+4249261313&4294967295,w=N+(T<<22&4294967295|T>>>10),T=y+(k^w&(N^k))+b[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(N^y&(w^N))+b[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=N+(w^k&(y^w))+b[10]+4294925233&4294967295,N=k+(T<<17&4294967295|T>>>15),T=w+(y^N&(k^y))+b[11]+2304563134&4294967295,w=N+(T<<22&4294967295|T>>>10),T=y+(k^w&(N^k))+b[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=k+(N^y&(w^N))+b[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=N+(w^k&(y^w))+b[14]+2792965006&4294967295,N=k+(T<<17&4294967295|T>>>15),T=w+(y^N&(k^y))+b[15]+1236535329&4294967295,w=N+(T<<22&4294967295|T>>>10),T=y+(N^k&(w^N))+b[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^N&(y^w))+b[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=N+(y^w&(k^y))+b[11]+643717713&4294967295,N=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(N^k))+b[0]+3921069994&4294967295,w=N+(T<<20&4294967295|T>>>12),T=y+(N^k&(w^N))+b[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^N&(y^w))+b[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=N+(y^w&(k^y))+b[15]+3634488961&4294967295,N=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(N^k))+b[4]+3889429448&4294967295,w=N+(T<<20&4294967295|T>>>12),T=y+(N^k&(w^N))+b[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^N&(y^w))+b[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=N+(y^w&(k^y))+b[3]+4107603335&4294967295,N=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(N^k))+b[8]+1163531501&4294967295,w=N+(T<<20&4294967295|T>>>12),T=y+(N^k&(w^N))+b[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=k+(w^N&(y^w))+b[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=N+(y^w&(k^y))+b[7]+1735328473&4294967295,N=k+(T<<14&4294967295|T>>>18),T=w+(k^y&(N^k))+b[12]+2368359562&4294967295,w=N+(T<<20&4294967295|T>>>12),T=y+(w^N^k)+b[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^N)+b[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=N+(k^y^w)+b[11]+1839030562&4294967295,N=k+(T<<16&4294967295|T>>>16),T=w+(N^k^y)+b[14]+4259657740&4294967295,w=N+(T<<23&4294967295|T>>>9),T=y+(w^N^k)+b[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^N)+b[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=N+(k^y^w)+b[7]+4139469664&4294967295,N=k+(T<<16&4294967295|T>>>16),T=w+(N^k^y)+b[10]+3200236656&4294967295,w=N+(T<<23&4294967295|T>>>9),T=y+(w^N^k)+b[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^N)+b[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=N+(k^y^w)+b[3]+3572445317&4294967295,N=k+(T<<16&4294967295|T>>>16),T=w+(N^k^y)+b[6]+76029189&4294967295,w=N+(T<<23&4294967295|T>>>9),T=y+(w^N^k)+b[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=k+(y^w^N)+b[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=N+(k^y^w)+b[15]+530742520&4294967295,N=k+(T<<16&4294967295|T>>>16),T=w+(N^k^y)+b[2]+3299628645&4294967295,w=N+(T<<23&4294967295|T>>>9),T=y+(N^(w|~k))+b[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~N))+b[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=N+(y^(k|~w))+b[14]+2878612391&4294967295,N=k+(T<<15&4294967295|T>>>17),T=w+(k^(N|~y))+b[5]+4237533241&4294967295,w=N+(T<<21&4294967295|T>>>11),T=y+(N^(w|~k))+b[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~N))+b[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=N+(y^(k|~w))+b[10]+4293915773&4294967295,N=k+(T<<15&4294967295|T>>>17),T=w+(k^(N|~y))+b[1]+2240044497&4294967295,w=N+(T<<21&4294967295|T>>>11),T=y+(N^(w|~k))+b[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~N))+b[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=N+(y^(k|~w))+b[6]+2734768916&4294967295,N=k+(T<<15&4294967295|T>>>17),T=w+(k^(N|~y))+b[13]+1309151649&4294967295,w=N+(T<<21&4294967295|T>>>11),T=y+(N^(w|~k))+b[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=k+(w^(y|~N))+b[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=N+(y^(k|~w))+b[2]+718787259&4294967295,N=k+(T<<15&4294967295|T>>>17),T=w+(k^(N|~y))+b[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(N+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+N&4294967295,I.g[3]=I.g[3]+k&4294967295}r.prototype.v=function(I,y){y===void 0&&(y=I.length);const w=y-this.blockSize,b=this.C;let N=this.h,k=0;for(;k<y;){if(N==0)for(;k<=w;)s(this,I,k),k+=this.blockSize;if(typeof I=="string"){for(;k<y;)if(b[N++]=I.charCodeAt(k++),N==this.blockSize){s(this,b),N=0;break}}else for(;k<y;)if(b[N++]=I[k++],N==this.blockSize){s(this,b),N=0;break}}this.h=N,this.o+=y},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;y=this.o*8;for(var w=I.length-8;w<I.length;++w)I[w]=y&255,y/=256;for(this.v(I),I=Array(16),y=0,w=0;w<4;++w)for(let b=0;b<32;b+=8)I[y++]=this.g[w]>>>b&255;return I};function i(I,y){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;const w=[];let b=!0;for(let N=I.length-1;N>=0;N--){const k=I[N]|0;b&&k==y||(w[N]=k,b=!1)}this.g=w}var a={};function l(I){return-128<=I&&I<128?i(I,function(y){return new o([y|0],y<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return R(u(-I));const y=[];let w=1;for(let b=0;I>=w;b++)y[b]=I/w|0,w*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return R(h(I.substring(1),y));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=u(Math.pow(y,8));let b=p;for(let k=0;k<I.length;k+=8){var N=Math.min(8,I.length-k);const T=parseInt(I.substring(k,k+N),y);N<8?(N=u(Math.pow(y,N)),b=b.j(N).add(u(T))):(b=b.j(w),b=b.add(u(T)))}return b}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-R(this).m();let I=0,y=1;for(let w=0;w<this.g.length;w++){const b=this.i(w);I+=(b>=0?b:4294967296+b)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(A(this))return"-"+R(this).toString(I);const y=u(Math.pow(I,6));var w=this;let b="";for(;;){const N=D(w,y).g;w=S(w,N.j(y));let k=((w.g.length>0?w.g[0]:w.h)>>>0).toString(I);if(w=N,C(w))return k+b;for(;k.length<6;)k="0"+k;b=k+b}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=S(this,I),A(I)?-1:C(I)?0:1};function R(I){const y=I.g.length,w=[];for(let b=0;b<y;b++)w[b]=~I.g[b];return new o(w,~I.h).add(m)}t.abs=function(){return A(this)?R(this):this},t.add=function(I){const y=Math.max(this.g.length,I.g.length),w=[];let b=0;for(let N=0;N<=y;N++){let k=b+(this.i(N)&65535)+(I.i(N)&65535),T=(k>>>16)+(this.i(N)>>>16)+(I.i(N)>>>16);b=T>>>16,k&=65535,T&=65535,w[N]=T<<16|k}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(I,y){return I.add(R(y))}t.j=function(I){if(C(this)||C(I))return p;if(A(this))return A(I)?R(this).j(R(I)):R(R(this).j(I));if(A(I))return R(this.j(R(I)));if(this.l(_)<0&&I.l(_)<0)return u(this.m()*I.m());const y=this.g.length+I.g.length,w=[];for(var b=0;b<2*y;b++)w[b]=0;for(b=0;b<this.g.length;b++)for(let N=0;N<I.g.length;N++){const k=this.i(b)>>>16,T=this.i(b)&65535,ge=I.i(N)>>>16,te=I.i(N)&65535;w[2*b+2*N]+=T*te,E(w,2*b+2*N),w[2*b+2*N+1]+=k*te,E(w,2*b+2*N+1),w[2*b+2*N+1]+=T*ge,E(w,2*b+2*N+1),w[2*b+2*N+2]+=k*ge,E(w,2*b+2*N+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function E(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function x(I,y){this.g=I,this.h=y}function D(I,y){if(C(y))throw Error("division by zero");if(C(I))return new x(p,p);if(A(I))return y=D(R(I),y),new x(R(y.g),R(y.h));if(A(y))return y=D(I,R(y)),new x(R(y.g),y.h);if(I.g.length>30){if(A(I)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,b=y;b.l(I)<=0;)w=V(w),b=V(b);var N=F(w,1),k=F(b,1);for(b=F(b,2),w=F(w,2);!C(b);){var T=k.add(b);T.l(I)<=0&&(N=N.add(w),k=T),b=F(b,1),w=F(w,1)}return y=S(I,N.j(y)),new x(N,y)}for(N=p;I.l(y)>=0;){for(w=Math.max(1,Math.floor(I.m()/y.m())),b=Math.ceil(Math.log(w)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),k=u(w),T=k.j(y);A(T)||T.l(I)>0;)w-=b,k=u(w),T=k.j(y);C(k)&&(k=m),N=N.add(k),I=S(I,T)}return new x(N,I)}t.B=function(I){return D(this,I).h},t.and=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)&I.i(b);return new o(w,this.h&I.h)},t.or=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)|I.i(b);return new o(w,this.h|I.h)},t.xor=function(I){const y=Math.max(this.g.length,I.g.length),w=[];for(let b=0;b<y;b++)w[b]=this.i(b)^I.i(b);return new o(w,this.h^I.h)};function V(I){const y=I.g.length+1,w=[];for(let b=0;b<y;b++)w[b]=I.i(b)<<1|I.i(b-1)>>>31;return new o(w,I.h)}function F(I,y){const w=y>>5;y%=32;const b=I.g.length-w,N=[];for(let k=0;k<b;k++)N[k]=y>0?I.i(k+w)>>>y|I.i(k+w+1)<<32-y:I.i(k+w);return new o(N,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,DS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ms=o}).apply(typeof Ew<"u"?Ew:typeof self<"u"?self:typeof window<"u"?window:{});var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var OS,Ma,LS,Iu,ym,jS,MS,VS;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yc=="object"&&Yc];for(var f=0;f<c.length;++f){var g=c[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var P=c[v];if(!(P in g))break e;g=g[P]}c=c[c.length-1],v=g[c],f=f(v),f!=v&&f!=null&&e(g,c,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(f){var g=[],v;for(v in f)Object.prototype.hasOwnProperty.call(f,v)&&g.push([v,f[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function l(c,f,g){return c.call.apply(c.bind,arguments)}function u(c,f,g){return u=l,u.apply(null,arguments)}function h(c,f){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function p(c,f){function g(){}g.prototype=f.prototype,c.Z=f.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,P,L){for(var $=Array(arguments.length-2),se=2;se<arguments.length;se++)$[se-2]=arguments[se];return f.prototype[P].apply(v,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const f=c.length;if(f>0){const g=Array(f);for(let v=0;v<f;v++)g[v]=c[v];return g}return[]}function C(c,f){for(let v=1;v<arguments.length;v++){const P=arguments[v];var g=typeof P;if(g=g!="object"?g:P?Array.isArray(P)?"array":g:"null",g=="array"||g=="object"&&typeof P.length=="number"){g=c.length||0;const L=P.length||0;c.length=g+L;for(let $=0;$<L;$++)c[g+$]=P[$]}else c.push(P)}}class A{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function R(c){o.setTimeout(()=>{throw c},0)}function S(){var c=I;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class E{constructor(){this.h=this.g=null}add(f,g){const v=x.get();v.set(f,g),this.h?this.h.next=v:this.g=v,this.h=v}}var x=new A(()=>new D,c=>c.reset());class D{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let V,F=!1,I=new E,y=()=>{const c=Promise.resolve(void 0);V=()=>{c.then(w)}};function w(){for(var c;c=S();){try{c.h.call(c.g)}catch(g){R(g)}var f=x;f.j(c),f.h<100&&(f.h++,c.next=f.g,f.g=c)}F=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,f),o.removeEventListener("test",g,f)}catch{}return c}();function T(c){return/^[\s\xa0]*$/.test(c)}function ge(c,f){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,f)}p(ge,N),ge.prototype.init=function(c,f){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget,f||(g=="mouseover"?f=c.fromElement:g=="mouseout"&&(f=c.toElement)),this.relatedTarget=f,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ge.Z.h.call(this)},ge.prototype.h=function(){ge.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var te="closure_listenable_"+(Math.random()*1e6|0),ft=0;function it(c,f,g,v,P){this.listener=c,this.proxy=null,this.src=f,this.type=g,this.capture=!!v,this.ha=P,this.key=++ft,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function W(c,f,g){for(const v in c)f.call(g,c[v],v,c)}function Q(c,f){for(const g in c)f.call(void 0,c[g],g,c)}function ae(c){const f={};for(const g in c)f[g]=c[g];return f}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function on(c,f){let g,v;for(let P=1;P<arguments.length;P++){v=arguments[P];for(g in v)c[g]=v[g];for(let L=0;L<Ne.length;L++)g=Ne[L],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Kt(c){this.src=c,this.g={},this.h=0}Kt.prototype.add=function(c,f,g,v,P){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const $=Qt(c,f,v,P);return $>-1?(f=c[$],g||(f.fa=!1)):(f=new it(f,this.src,L,!!v,P),f.fa=g,c.push(f)),f};function sr(c,f){const g=f.type;if(g in c.g){var v=c.g[g],P=Array.prototype.indexOf.call(v,f,void 0),L;(L=P>=0)&&Array.prototype.splice.call(v,P,1),L&&(z(f),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Qt(c,f,g,v){for(let P=0;P<c.length;++P){const L=c[P];if(!L.da&&L.listener==f&&L.capture==!!g&&L.ha==v)return P}return-1}var Or="closure_lm_"+(Math.random()*1e6|0),Qh={};function ky(c,f,g,v,P){if(Array.isArray(f)){for(let L=0;L<f.length;L++)ky(c,f[L],g,v,P);return null}return g=Dy(g),c&&c[te]?c.J(f,g,a(v)?!!v.capture:!1,P):JN(c,f,g,!1,v,P)}function JN(c,f,g,v,P,L){if(!f)throw Error("Invalid event type");const $=a(P)?!!P.capture:!!P;let se=Jh(c);if(se||(c[Or]=se=new Kt(c)),g=se.add(f,g,v,$,L),g.proxy)return g;if(v=XN(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)k||(P=$),P===void 0&&(P=!1),c.addEventListener(f.toString(),v,P);else if(c.attachEvent)c.attachEvent(Py(f.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function XN(){function c(g){return f.call(c.src,c.listener,g)}const f=ZN;return c}function Ry(c,f,g,v,P){if(Array.isArray(f))for(var L=0;L<f.length;L++)Ry(c,f[L],g,v,P);else v=a(v)?!!v.capture:!!v,g=Dy(g),c&&c[te]?(c=c.i,L=String(f).toString(),L in c.g&&(f=c.g[L],g=Qt(f,g,v,P),g>-1&&(z(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete c.g[L],c.h--)))):c&&(c=Jh(c))&&(f=c.g[f.toString()],c=-1,f&&(c=Qt(f,g,v,P)),(g=c>-1?f[c]:null)&&Yh(g))}function Yh(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[te])sr(f.i,c);else{var g=c.type,v=c.proxy;f.removeEventListener?f.removeEventListener(g,v,c.capture):f.detachEvent?f.detachEvent(Py(g),v):f.addListener&&f.removeListener&&f.removeListener(v),(g=Jh(f))?(sr(g,c),g.h==0&&(g.src=null,f[Or]=null)):z(c)}}}function Py(c){return c in Qh?Qh[c]:Qh[c]="on"+c}function ZN(c,f){if(c.da)c=!0;else{f=new ge(f,this);const g=c.listener,v=c.ha||c.src;c.fa&&Yh(c),c=g.call(v,f)}return c}function Jh(c){return c=c[Or],c instanceof Kt?c:null}var Xh="__closure_events_fn_"+(Math.random()*1e9>>>0);function Dy(c){return typeof c=="function"?c:(c[Xh]||(c[Xh]=function(f){return c.handleEvent(f)}),c[Xh])}function wt(){b.call(this),this.i=new Kt(this),this.M=this,this.G=null}p(wt,b),wt.prototype[te]=!0,wt.prototype.removeEventListener=function(c,f,g,v){Ry(this,c,f,g,v)};function kt(c,f){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=f.type||f,typeof f=="string")f=new N(f,c);else if(f instanceof N)f.target=f.target||c;else{var P=f;f=new N(v,c),on(f,P)}P=!0;let L,$;if(g)for($=g.length-1;$>=0;$--)L=f.g=g[$],P=wc(L,v,!0,f)&&P;if(L=f.g=c,P=wc(L,v,!0,f)&&P,P=wc(L,v,!1,f)&&P,g)for($=0;$<g.length;$++)L=f.g=g[$],P=wc(L,v,!1,f)&&P}wt.prototype.N=function(){if(wt.Z.N.call(this),this.i){var c=this.i;for(const f in c.g){const g=c.g[f];for(let v=0;v<g.length;v++)z(g[v]);delete c.g[f],c.h--}}this.G=null},wt.prototype.J=function(c,f,g,v){return this.i.add(String(c),f,!1,g,v)},wt.prototype.K=function(c,f,g,v){return this.i.add(String(c),f,!0,g,v)};function wc(c,f,g,v){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();let P=!0;for(let L=0;L<f.length;++L){const $=f[L];if($&&!$.da&&$.capture==g){const se=$.listener,Ze=$.ha||$.src;$.fa&&sr(c.i,$),P=se.call(Ze,v)!==!1&&P}}return P&&!v.defaultPrevented}function e1(c,f){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(c,f||0)}function Oy(c){c.g=e1(()=>{c.g=null,c.i&&(c.i=!1,Oy(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class t1 extends b{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Oy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(c){b.call(this),this.h=c,this.g={}}p(Zo,b);var Ly=[];function jy(c){W(c.g,function(f,g){this.g.hasOwnProperty(g)&&Yh(f)},c),c.g={}}Zo.prototype.N=function(){Zo.Z.N.call(this),jy(this)},Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zh=o.JSON.stringify,n1=o.JSON.parse,r1=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function My(){}function Vy(){}var ea={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ef(){N.call(this,"d")}p(ef,N);function tf(){N.call(this,"c")}p(tf,N);var Us={},Fy=null;function xc(){return Fy=Fy||new wt}Us.Ia="serverreachability";function Uy(c){N.call(this,Us.Ia,c)}p(Uy,N);function ta(c){const f=xc();kt(f,new Uy(f))}Us.STAT_EVENT="statevent";function By(c,f){N.call(this,Us.STAT_EVENT,c),this.stat=f}p(By,N);function Rt(c){const f=xc();kt(f,new By(f,c))}Us.Ja="timingevent";function $y(c,f){N.call(this,Us.Ja,c),this.size=f}p($y,N);function na(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},f)}function ra(){this.g=!0}ra.prototype.ua=function(){this.g=!1};function s1(c,f,g,v,P,L){c.info(function(){if(c.g)if(L){var $="",se=L.split("&");for(let Ie=0;Ie<se.length;Ie++){var Ze=se[Ie].split("=");if(Ze.length>1){const ot=Ze[0];Ze=Ze[1];const Ln=ot.split("_");$=Ln.length>=2&&Ln[1]=="type"?$+(ot+"="+Ze+"&"):$+(ot+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+P+"]: "+f+`
`+g+`
`+$})}function i1(c,f,g,v,P,L,$){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+P+"]: "+f+`
`+g+`
`+L+" "+$})}function Ri(c,f,g,v){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+a1(c,g)+(v?" "+v:"")})}function o1(c,f){c.info(function(){return"TIMEOUT: "+f})}ra.prototype.info=function(){};function a1(c,f){if(!c.g)return f;if(!f)return null;try{const L=JSON.parse(f);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var P=v[0];if(P!="noop"&&P!="stop"&&P!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return Zh(L)}catch{return f}}var Ec={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wy;function nf(){}p(nf,My),nf.prototype.g=function(){return new XMLHttpRequest},Wy=new nf;function sa(c){return encodeURIComponent(String(c))}function l1(c){var f=1;c=c.split(":");const g=[];for(;f>0&&c.length;)g.push(c.shift()),f--;return c.length&&g.push(c.join(":")),g}function Lr(c,f,g,v){this.j=c,this.i=f,this.l=g,this.S=v||1,this.V=new Zo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qy}function qy(){this.i=null,this.g="",this.h=!1}var Hy={},rf={};function sf(c,f,g){c.M=1,c.A=Ic(On(f)),c.u=g,c.R=!0,Gy(c,null)}function Gy(c,f){c.F=Date.now(),Tc(c),c.B=On(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),ov(g.i,"t",v),c.C=0,g=c.j.L,c.h=new qy,c.g=Iv(c.j,g?f:null,!c.u),c.P>0&&(c.O=new t1(u(c.Y,c,c.g),c.P)),f=c.V,g=c.g,v=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(Ly[0]=P.toString()),P=Ly);for(let L=0;L<P.length;L++){const $=ky(g,P[L],v||f.handleEvent,!1,f.h||f);if(!$)break;f.g[$.key]=$}f=c.J?ae(c.J):{},c.u?(c.v||(c.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,f)):(c.v="GET",c.g.ea(c.B,c.v,null,f)),ta(),s1(c.i,c.v,c.B,c.l,c.S,c.u)}Lr.prototype.ba=function(c){c=c.target;const f=this.O;f&&Vr(c)==3?f.j():this.Y(c)},Lr.prototype.Y=function(c){try{if(c==this.g)e:{const se=Vr(this.g),Ze=this.g.ya(),Ie=this.g.ca();if(!(se<3)&&(se!=3||this.g&&(this.h.h||this.g.la()||fv(this.g)))){this.K||se!=4||Ze==7||(Ze==8||Ie<=0?ta(3):ta(2)),of(this);var f=this.g.ca();this.X=f;var g=c1(this);if(this.o=f==200,i1(this.i,this.v,this.B,this.l,this.S,se,f),this.o){if(this.U&&!this.L){t:{if(this.g){var v,P=this.g;if((v=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var L=v;break t}}L=null}if(c=L)Ri(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,af(this,c);else{this.o=!1,this.m=3,Rt(12),Bs(this),ia(this);break e}}if(this.R){c=!0;let ot;for(;!this.K&&this.C<g.length;)if(ot=u1(this,g),ot==rf){se==4&&(this.m=4,Rt(14),c=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==Hy){this.m=4,Rt(15),Ri(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Ri(this.i,this.l,ot,null),af(this,ot);if(Ky(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),se!=4||g.length!=0||this.h.h||(this.m=1,Rt(16),c=!1),this.o=this.o&&c,!c)Ri(this.i,this.l,g,"[Invalid Chunked Response]"),Bs(this),ia(this);else if(g.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),mf($),$.P=!0,Rt(11))}}else Ri(this.i,this.l,g,null),af(this,g);se==4&&Bs(this),this.o&&!this.K&&(se==4?wv(this.j,this):(this.o=!1,Tc(this)))}else I1(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Rt(12)):(this.m=0,Rt(13)),Bs(this),ia(this)}}}catch{}finally{}};function c1(c){if(!Ky(c))return c.g.la();const f=fv(c.g);if(f==="")return"";let g="";const v=f.length,P=Vr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Bs(c),ia(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<v;L++)c.h.h=!0,g+=c.h.i.decode(f[L],{stream:!(P&&L==v-1)});return f.length=0,c.h.g+=g,c.C=0,c.h.g}function Ky(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function u1(c,f){var g=c.C,v=f.indexOf(`
`,g);return v==-1?rf:(g=Number(f.substring(g,v)),isNaN(g)?Hy:(v+=1,v+g>f.length?rf:(f=f.slice(v,v+g),c.C=v+g,f)))}Lr.prototype.cancel=function(){this.K=!0,Bs(this)};function Tc(c){c.T=Date.now()+c.H,Qy(c,c.H)}function Qy(c,f){if(c.D!=null)throw Error("WatchDog timer not null");c.D=na(u(c.aa,c),f)}function of(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Lr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(o1(this.i,this.B),this.M!=2&&(ta(),Rt(17)),Bs(this),this.m=2,ia(this)):Qy(this,this.T-c)};function ia(c){c.j.I==0||c.K||wv(c.j,c)}function Bs(c){of(c);var f=c.O;f&&typeof f.dispose=="function"&&f.dispose(),c.O=null,jy(c.V),c.g&&(f=c.g,c.g=null,f.abort(),f.dispose())}function af(c,f){try{var g=c.j;if(g.I!=0&&(g.g==c||lf(g.h,c))){if(!c.L&&lf(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(f)}catch{v=null}if(Array.isArray(v)&&v.length==3){var P=v;if(P[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)Ac(g),Cc(g);else break e;pf(g),Rt(18)}}else g.xa=P[1],0<g.xa-g.K&&P[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=na(u(g.Va,g),6e3));Xy(g.h)<=1&&g.ta&&(g.ta=void 0)}else zs(g,11)}else if((c.L||g.g==c)&&Ac(g),!T(f))for(P=g.Ba.g.parse(f),f=0;f<P.length;f++){let Ie=P[f];const ot=Ie[0];if(!(ot<=g.K))if(g.K=ot,Ie=Ie[1],g.I==2)if(Ie[0]=="c"){g.M=Ie[1],g.ba=Ie[2];const Ln=Ie[3];Ln!=null&&(g.ka=Ln,g.j.info("VER="+g.ka));const Ws=Ie[4];Ws!=null&&(g.za=Ws,g.j.info("SVER="+g.za));const Fr=Ie[5];Fr!=null&&typeof Fr=="number"&&Fr>0&&(v=1.5*Fr,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ur=c.g;if(Ur){const Rc=Ur.g?Ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rc){var L=v.h;L.g||Rc.indexOf("spdy")==-1&&Rc.indexOf("quic")==-1&&Rc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(cf(L,L.h),L.h=null))}if(v.G){const gf=Ur.g?Ur.g.getResponseHeader("X-HTTP-Session-Id"):null;gf&&(v.wa=gf,Ae(v.J,v.G,gf))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var $=c;if(v.na=Tv(v,v.L?v.ba:null,v.W),$.L){Zy(v.h,$);var se=$,Ze=v.O;Ze&&(se.H=Ze),se.D&&(of(se),Tc(se)),v.g=$}else yv(v);g.i.length>0&&Nc(g)}else Ie[0]!="stop"&&Ie[0]!="close"||zs(g,7);else g.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?zs(g,7):ff(g):Ie[0]!="noop"&&g.l&&g.l.qa(Ie),g.A=0)}}ta(4)}catch{}}var d1=class{constructor(c,f){this.g=c,this.map=f}};function Yy(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jy(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Xy(c){return c.h?1:c.g?c.g.size:0}function lf(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function cf(c,f){c.g?c.g.add(f):c.h=f}function Zy(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Yy.prototype.cancel=function(){if(this.i=ev(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ev(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const g of c.g.values())f=f.concat(g.G);return f}return _(c.i)}var tv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h1(c,f){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let P,L=null;v>=0?(P=c[g].substring(0,v),L=c[g].substring(v+1)):P=c[g],f(P,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function jr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;c instanceof jr?(this.l=c.l,oa(this,c.j),this.o=c.o,this.g=c.g,aa(this,c.u),this.h=c.h,uf(this,av(c.i)),this.m=c.m):c&&(f=String(c).match(tv))?(this.l=!1,oa(this,f[1]||"",!0),this.o=la(f[2]||""),this.g=la(f[3]||"",!0),aa(this,f[4]),this.h=la(f[5]||"",!0),uf(this,f[6]||"",!0),this.m=la(f[7]||"")):(this.l=!1,this.i=new ua(null,this.l))}jr.prototype.toString=function(){const c=[];var f=this.j;f&&c.push(ca(f,nv,!0),":");var g=this.g;return(g||f=="file")&&(c.push("//"),(f=this.o)&&c.push(ca(f,nv,!0),"@"),c.push(sa(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ca(g,g.charAt(0)=="/"?m1:p1,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ca(g,_1)),c.join("")},jr.prototype.resolve=function(c){const f=On(this);let g=!!c.j;g?oa(f,c.j):g=!!c.o,g?f.o=c.o:g=!!c.g,g?f.g=c.g:g=c.u!=null;var v=c.h;if(g)aa(f,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var P=f.h.lastIndexOf("/");P!=-1&&(v=f.h.slice(0,P+1)+v)}if(P=v,P==".."||P==".")v="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){v=P.lastIndexOf("/",0)==0,P=P.split("/");const L=[];for(let $=0;$<P.length;){const se=P[$++];se=="."?v&&$==P.length&&L.push(""):se==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&$==P.length&&L.push("")):(L.push(se),v=!0)}v=L.join("/")}else v=P}return g?f.h=v:g=c.i.toString()!=="",g?uf(f,av(c.i)):g=!!c.m,g&&(f.m=c.m),f};function On(c){return new jr(c)}function oa(c,f,g){c.j=g?la(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function aa(c,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);c.u=f}else c.u=null}function uf(c,f,g){f instanceof ua?(c.i=f,y1(c.i,c.l)):(g||(f=ca(f,g1)),c.i=new ua(f,c.l))}function Ae(c,f,g){c.i.set(f,g)}function Ic(c){return Ae(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function la(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ca(c,f,g){return typeof c=="string"?(c=encodeURI(c).replace(f,f1),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function f1(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var nv=/[#\/\?@]/g,p1=/[#\?:]/g,m1=/[#\?]/g,g1=/[#\?@]/g,_1=/#/g;function ua(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function $s(c){c.g||(c.g=new Map,c.h=0,c.i&&h1(c.i,function(f,g){c.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}t=ua.prototype,t.add=function(c,f){$s(this),this.i=null,c=Pi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(f),this.h+=1,this};function rv(c,f){$s(c),f=Pi(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function sv(c,f){return $s(c),f=Pi(c,f),c.g.has(f)}t.forEach=function(c,f){$s(this),this.g.forEach(function(g,v){g.forEach(function(P){c.call(f,P,v,this)},this)},this)};function iv(c,f){$s(c);let g=[];if(typeof f=="string")sv(c,f)&&(g=g.concat(c.g.get(Pi(c,f))));else for(c=Array.from(c.g.values()),f=0;f<c.length;f++)g=g.concat(c[f]);return g}t.set=function(c,f){return $s(this),this.i=null,c=Pi(this,c),sv(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=iv(this,c),c.length>0?String(c[0]):f):f};function ov(c,f,g){rv(c,f),g.length>0&&(c.i=null,c.g.set(Pi(c,f),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(let v=0;v<f.length;v++){var g=f[v];const P=sa(g);g=iv(this,g);for(let L=0;L<g.length;L++){let $=P;g[L]!==""&&($+="="+sa(g[L])),c.push($)}}return this.i=c.join("&")};function av(c){const f=new ua;return f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),f}function Pi(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function y1(c,f){f&&!c.j&&($s(c),c.i=null,c.g.forEach(function(g,v){const P=v.toLowerCase();v!=P&&(rv(this,v),ov(this,P,g))},c)),c.j=f}function v1(c,f){const g=new ra;if(o.Image){const v=new Image;v.onload=h(Mr,g,"TestLoadImage: loaded",!0,f,v),v.onerror=h(Mr,g,"TestLoadImage: error",!1,f,v),v.onabort=h(Mr,g,"TestLoadImage: abort",!1,f,v),v.ontimeout=h(Mr,g,"TestLoadImage: timeout",!1,f,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else f(!1)}function w1(c,f){const g=new ra,v=new AbortController,P=setTimeout(()=>{v.abort(),Mr(g,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:v.signal}).then(L=>{clearTimeout(P),L.ok?Mr(g,"TestPingServer: ok",!0,f):Mr(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(P),Mr(g,"TestPingServer: error",!1,f)})}function Mr(c,f,g,v,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),v(g)}catch{}}function x1(){this.g=new r1}function df(c){this.i=c.Sb||null,this.h=c.ab||!1}p(df,My),df.prototype.g=function(){return new Sc(this.i,this.h)};function Sc(c,f){wt.call(this),this.H=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Sc,wt),t=Sc.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=f,this.readyState=1,ha(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(f.body=c),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,da(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lv(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function lv(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?da(this):ha(this),this.readyState==3&&lv(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,da(this))},t.Na=function(c){this.g&&(this.response=c,da(this))},t.ga=function(){this.g&&da(this)};function da(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ha(c)}t.setRequestHeader=function(c,f){this.A.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=f.next();return c.join(`\r
`)};function ha(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function cv(c){let f="";return W(c,function(g,v){f+=v,f+=":",f+=g,f+=`\r
`}),f}function hf(c,f,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=cv(g),typeof c=="string"?g!=null&&sa(g):Ae(c,f,g))}function Ve(c){wt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,wt);var E1=/^https?$/i,T1=["POST","PUT"];t=Ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,f,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wy.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(L){uv(this,L);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var P in v)g.set(P,v[P]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),P=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(T1,f,void 0)>=0)||v||P||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){uv(this,L)}};function uv(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.o=5,dv(c),bc(c)}function dv(c){c.A||(c.A=!0,kt(c,"complete"),kt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,kt(this,"complete"),kt(this,"abort"),bc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bc(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?hv(this):this.Xa())},t.Xa=function(){hv(this)};function hv(c){if(c.h&&typeof i<"u"){if(c.v&&Vr(c)==4)setTimeout(c.Ca.bind(c),0);else if(kt(c,"readystatechange"),Vr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var v;if(v=L===0){let $=String(c.D).match(tv)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!E1.test($?$.toLowerCase():"")}g=v}if(g)kt(c,"complete"),kt(c,"success");else{c.o=6;try{var P=Vr(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",dv(c)}}finally{bc(c)}}}}function bc(c,f){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,f||kt(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),n1(f)}};function fv(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function I1(c){const f={};c=(c.g&&Vr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(T(c[v]))continue;var g=l1(c[v]);const P=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=f[P]||[];f[P]=L,L.push(g)}Q(f,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fa(c,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||f}function pv(c){this.za=0,this.i=[],this.j=new ra,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fa("baseRetryDelayMs",5e3,c),this.Za=fa("retryDelaySeedMs",1e4,c),this.Ta=fa("forwardChannelMaxRetries",2,c),this.va=fa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Yy(c&&c.concurrentRequestLimit),this.Ba=new x1,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pv.prototype,t.ka=8,t.I=1,t.connect=function(c,f,g,v){Rt(0),this.W=c,this.H=f||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=Tv(this,null,this.W),Nc(this)};function ff(c){if(mv(c),c.I==3){var f=c.V++,g=On(c.J);if(Ae(g,"SID",c.M),Ae(g,"RID",f),Ae(g,"TYPE","terminate"),pa(c,g),f=new Lr(c,c.j,f),f.M=2,f.A=Ic(On(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=f.A,g=!0),g||(f.g=Iv(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Tc(f)}Ev(c)}function Cc(c){c.g&&(mf(c),c.g.cancel(),c.g=null)}function mv(c){Cc(c),c.v&&(o.clearTimeout(c.v),c.v=null),Ac(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Nc(c){if(!Jy(c.h)&&!c.m){c.m=!0;var f=c.Ea;V||y(),F||(V(),F=!0),I.add(f,c),c.D=0}}function S1(c,f){return Xy(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=f.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=na(u(c.Ea,c,f),xv(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new Lr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=ae(L),on(L,this.U)):L=this.U),this.u!==null||this.R||(P.J=L,L=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(f+=v,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=_v(this,P,f),g=On(this.J),Ae(g,"RID",c),Ae(g,"CVER",22),this.G&&Ae(g,"X-HTTP-Session-Id",this.G),pa(this,g),L&&(this.R?f="headers="+sa(cv(L))+"&"+f:this.u&&hf(g,this.u,L)),cf(this.h,P),this.Ra&&Ae(g,"TYPE","init"),this.S?(Ae(g,"$req",f),Ae(g,"SID","null"),P.U=!0,sf(P,g,null)):sf(P,g,f),this.I=2}}else this.I==3&&(c?gv(this,c):this.i.length==0||Jy(this.h)||gv(this))};function gv(c,f){var g;f?g=f.l:g=c.V++;const v=On(c.J);Ae(v,"SID",c.M),Ae(v,"RID",g),Ae(v,"AID",c.K),pa(c,v),c.u&&c.o&&hf(v,c.u,c.o),g=new Lr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),f&&(c.i=f.G.concat(c.i)),f=_v(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),cf(c.h,g),sf(g,v,f)}function pa(c,f){c.H&&W(c.H,function(g,v){Ae(f,v,g)}),c.l&&W({},function(g,v){Ae(f,v,g)})}function _v(c,f,g){g=Math.min(c.i.length,g);const v=c.l?u(c.l.Ka,c.l,c):null;e:{var P=c.i;let se=-1;for(;;){const Ze=["count="+g];se==-1?g>0?(se=P[0].g,Ze.push("ofs="+se)):se=0:Ze.push("ofs="+se);let Ie=!0;for(let ot=0;ot<g;ot++){var L=P[ot].g;const Ln=P[ot].map;if(L-=se,L<0)se=Math.max(0,P[ot].g-100),Ie=!1;else try{L="req"+L+"_"||"";try{var $=Ln instanceof Map?Ln:Object.entries(Ln);for(const[Ws,Fr]of $){let Ur=Fr;a(Fr)&&(Ur=Zh(Fr)),Ze.push(L+Ws+"="+encodeURIComponent(Ur))}}catch(Ws){throw Ze.push(L+"type="+encodeURIComponent("_badmap")),Ws}}catch{v&&v(Ln)}}if(Ie){$=Ze.join("&");break e}}$=void 0}return c=c.i.splice(0,g),f.G=c,$}function yv(c){if(!c.g&&!c.v){c.Y=1;var f=c.Da;V||y(),F||(V(),F=!0),I.add(f,c),c.A=0}}function pf(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=na(u(c.Da,c),xv(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,vv(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=na(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Rt(10),Cc(this),vv(this))};function mf(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function vv(c){c.g=new Lr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var f=On(c.na);Ae(f,"RID","rpc"),Ae(f,"SID",c.M),Ae(f,"AID",c.K),Ae(f,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ae(f,"TO",c.ia),Ae(f,"TYPE","xmlhttp"),pa(c,f),c.u&&c.o&&hf(f,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Ic(On(f)),g.u=null,g.R=!0,Gy(g,c)}t.Va=function(){this.C!=null&&(this.C=null,Cc(this),pf(this),Rt(19))};function Ac(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function wv(c,f){var g=null;if(c.g==f){Ac(c),mf(c),c.g=null;var v=2}else if(lf(c.h,f))g=f.G,Zy(c.h,f),v=1;else return;if(c.I!=0){if(f.o)if(v==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var P=c.D;v=xc(),kt(v,new $y(v,g)),Nc(c)}else yv(c);else if(P=f.m,P==3||P==0&&f.X>0||!(v==1&&S1(c,f)||v==2&&pf(c)))switch(g&&g.length>0&&(f=c.h,f.i=f.i.concat(g)),P){case 1:zs(c,5);break;case 4:zs(c,10);break;case 3:zs(c,6);break;default:zs(c,2)}}}function xv(c,f){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*f}function zs(c,f){if(c.j.info("Error code "+f),f==2){var g=u(c.bb,c),v=c.Ua;const P=!v;v=new jr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oa(v,"https"),Ic(v),P?v1(v.toString(),g):w1(v.toString(),g)}else Rt(2);c.I=0,c.l&&c.l.pa(f),Ev(c),mv(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Ev(c){if(c.I=0,c.ja=[],c.l){const f=ev(c.h);(f.length!=0||c.i.length!=0)&&(C(c.ja,f),C(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function Tv(c,f,g){var v=g instanceof jr?On(g):new jr(g);if(v.g!="")f&&(v.g=f+"."+v.g),aa(v,v.u);else{var P=o.location;v=P.protocol,f=f?f+"."+P.hostname:P.hostname,P=+P.port;const L=new jr(null);v&&oa(L,v),f&&(L.g=f),P&&aa(L,P),g&&(L.h=g),v=L}return g=c.G,f=c.wa,g&&f&&Ae(v,g,f),Ae(v,"VER",c.ka),pa(c,v),v}function Iv(c,f,g){if(f&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Aa&&!c.ma?new Ve(new df({ab:g})):new Ve(c.ma),f.Fa(c.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sv(){}t=Sv.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function kc(){}kc.prototype.g=function(c,f){return new Yt(c,f)};function Yt(c,f){wt.call(this),this.g=new pv(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(c?c["X-WebChannel-Client-Profile"]=f.sa:c={"X-WebChannel-Client-Profile":f.sa}),this.g.U=c,(c=f&&f.Qb)&&!T(c)&&(this.g.u=c),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!T(f)&&(this.g.G=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new Di(this)}p(Yt,wt),Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){ff(this.g)},Yt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Zh(c),c=g);f.i.push(new d1(f.Ya++,c)),f.I==3&&Nc(f)},Yt.prototype.N=function(){this.g.l=null,delete this.j,ff(this.g),delete this.g,Yt.Z.N.call(this)};function bv(c){ef.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const g in f){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}p(bv,ef);function Cv(){tf.call(this),this.status=1}p(Cv,tf);function Di(c){this.g=c}p(Di,Sv),Di.prototype.ra=function(){kt(this.g,"a")},Di.prototype.qa=function(c){kt(this.g,new bv(c))},Di.prototype.pa=function(c){kt(this.g,new Cv)},Di.prototype.oa=function(){kt(this.g,"b")},kc.prototype.createWebChannel=kc.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,VS=function(){return new kc},MS=function(){return xc()},jS=Us,ym={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ec.NO_ERROR=0,Ec.TIMEOUT=8,Ec.HTTP_ERROR=6,Iu=Ec,zy.COMPLETE="complete",LS=zy,Vy.EventType=ea,ea.OPEN="a",ea.CLOSE="b",ea.ERROR="c",ea.MESSAGE="d",wt.prototype.listen=wt.prototype.J,Ma=Vy,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,OS=Ve}).apply(typeof Yc<"u"?Yc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class It{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
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
 */let Wo="12.8.0";function cL(t){Wo=t}/**
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
 */const mi=new dh("@firebase/firestore");function ji(){return mi.logLevel}function H(t,...e){if(mi.logLevel<=le.DEBUG){const n=e.map(c_);mi.debug(`Firestore (${Wo}): ${t}`,...n)}}function Cr(t,...e){if(mi.logLevel<=le.ERROR){const n=e.map(c_);mi.error(`Firestore (${Wo}): ${t}`,...n)}}function bo(t,...e){if(mi.logLevel<=le.WARN){const n=e.map(c_);mi.warn(`Firestore (${Wo}): ${t}`,...n)}}function c_(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,FS(t,r,n)}function FS(t,e,n){let r=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Cr(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||FS(e,s,r)}function re(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class US{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class dL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hL{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new US(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class fL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class pL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class u_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function vm(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Jf(s)===Jf(i)?de(s,i):Jf(s)?1:-1}return de(t.length,e.length)}const _L=55296,yL=57343;function Jf(t){const e=t.charCodeAt(0);return e>=_L&&e<=yL}function Co(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Iw="__name__";class Fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=Fn.isNumericId(e),s=Fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Fn.extractNumericId(e).compare(Fn.extractNumericId(n)):vm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class be extends Fn{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const vL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Fn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return vL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iw}static keyField(){return new gt([Iw])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(be.fromString(e))}static fromName(e){return new K(be.fromString(e).popFirst(5))}static empty(){return new K(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new be(e.slice()))}}/**
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
 */function BS(t,e,n){if(!n)throw new q(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wL(t,e,n,r){if(e===!0&&r===!0)throw new q(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sw(t){if(!K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bw(t){if(K.isDocumentKey(t))throw new q(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $S(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gh(t);throw new q(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function xL(t,e){if(e<=0)throw new q(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function ac(t,e){if(!$S(t))throw new q(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new q(j.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cw=-62135596800,Nw=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nw);return new ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cw)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nw}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ac(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Ye("string",ee._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new ee(0,0))}static max(){return new ne(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Dl=-1;function EL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new ee(n+1,0):new ee(n,r));return new Ts(s,K.empty(),e)}function TL(t){return new Ts(t.readTime,t.key,Dl)}class Ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ts(ne.min(),K.empty(),Dl)}static max(){return new Ts(ne.max(),K.empty(),Dl)}}function IL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const SL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function qo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==SL)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function CL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class _h{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}_h.ce=-1;/**
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
 */const d_=-1;function yh(t){return t==null}function _d(t){return t===0&&1/t==-1/0}function NL(t){return typeof t=="number"&&Number.isInteger(t)&&!_d(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const zS="";function AL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Aw(e)),e=kL(t.get(n),e);return Aw(e)}function kL(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case zS:n+="";break;default:n+=i}}return n}function Aw(t){return t+zS+""}/**
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
 */function kw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function WS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let Xe=class wm{constructor(e,n){this.comparator=e,this.root=n||gs.EMPTY}insert(e,n){return new wm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gs.BLACK,null,null))}remove(e){return new wm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jc(this.root,e,this.comparator,!0)}},Jc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gs=class or{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??or.RED,this.left=s??or.EMPTY,this.right=i??or.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new or(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return or.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return or.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}};gs.EMPTY=null,gs.RED=!0,gs.BLACK=!1;gs.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new gs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rw(this.data.getIterator())}getIteratorFrom(e){return new Rw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Rw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new st(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Co(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qS("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const RL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=RL.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */const HS="server_timestamp",GS="__type__",KS="__previous_value__",QS="__local_write_time__";function h_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[GS])==null?void 0:r.stringValue)===HS}function vh(t){const e=t.mapValue.fields[KS];return h_(e)?vh(e):e}function Ol(t){const e=Is(t.mapValue.fields[QS].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class PL{constructor(e,n,r,s,i,o,a,l,u,h,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=p}}const yd="(default)";class Ll{constructor(e,n){this.projectId=e,this.database=n||yd}static empty(){return new Ll("","")}get isDefaultDatabase(){return this.database===yd}isEqual(e){return e instanceof Ll&&e.projectId===this.projectId&&e.database===this.database}}function DL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ll(t.options.projectId,e)}/**
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
 */const YS="__type__",OL="__max__",Xc={mapValue:{}},JS="__vector__",vd="value";function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?h_(t)?4:jL(t)?9007199254740991:LL(t)?10:11:Z(28295,{value:t})}function Jn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ol(t).isEqual(Ol(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Is(s.timestampValue),a=Is(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ss(s.bytesValue).isEqual(Ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?_d(o)===_d(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Co(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(kw(o)!==kw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function jl(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Pw(t.timestampValue,e.timestampValue);case 4:return Pw(Ol(t),Ol(e));case 5:return vm(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ss(i),l=Ss(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=de(a[u],l[u]);if(h!==0)return h}return de(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(ze(i.latitude),ze(o.latitude));return a!==0?a:de(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,C,A;const a=i.fields||{},l=o.fields||{},u=(m=a[vd])==null?void 0:m.arrayValue,h=(_=l[vd])==null?void 0:_.arrayValue,p=de(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((A=h==null?void 0:h.values)==null?void 0:A.length)||0);return p!==0?p:Dw(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Xc.mapValue&&o===Xc.mapValue)return 0;if(i===Xc.mapValue)return 1;if(o===Xc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let p=0;p<l.length&&p<h.length;++p){const m=vm(l[p],h[p]);if(m!==0)return m;const _=No(a[l[p]],u[h[p]]);if(_!==0)return _}return de(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Pw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Is(t),r=Is(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function Dw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=No(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function Ao(t){return xm(t)}function xm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Is(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xm(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xm(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Su(t){switch(bs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=vh(t);return e?16+Su(e):16;case 5:return 2*t.stringValue.length;case 6:return Ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Su(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ms(r.fields,(i,o)=>{s+=i.length+Su(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Ow(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Em(t){return!!t&&"integerValue"in t}function f_(t){return!!t&&"arrayValue"in t}function Lw(t){return!!t&&"nullValue"in t}function jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bu(t){return!!t&&"mapValue"in t}function LL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[YS])==null?void 0:r.stringValue)===JS}function Xa(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xa(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xa(t.arrayValue.values[n]);return e}return{...t}}function jL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OL}/**
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
 */class Bt{constructor(e){this.value=e}static empty(){return new Bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xa(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Xa(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Bt(Xa(this.value))}}function XS(t){const e=[];return Ms(t.fields,(n,r)=>{const s=new gt([n]);if(bu(r)){const i=XS(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
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
 */class bt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new bt(e,0,ne.min(),ne.min(),ne.min(),Bt.empty(),0)}static newFoundDocument(e,n,r,s){return new bt(e,1,n,ne.min(),r,s,0)}static newNoDocument(e,n){return new bt(e,2,n,ne.min(),ne.min(),Bt.empty(),0)}static newUnknownDocument(e,n){return new bt(e,3,n,ne.min(),ne.min(),Bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wd{constructor(e,n){this.position=e,this.inclusive=n}}function Mw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=No(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function ML(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ZS{}class Qe extends ZS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FL(e,n,r):n==="array-contains"?new $L(e,r):n==="in"?new zL(e,r):n==="not-in"?new WL(e,r):n==="array-contains-any"?new qL(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UL(e,r):new BL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(No(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends ZS{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Dn(e,n)}matches(e){return eb(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function eb(t){return t.op==="and"}function tb(t){return VL(t)&&eb(t)}function VL(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function Tm(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(tb(t))return t.filters.map(e=>Tm(e)).join(",");{const e=t.filters.map(n=>Tm(n)).join(",");return`${t.op}(${e})`}}function nb(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Jn(r.value,s.value)}(t,e):t instanceof Dn?function(r,s){return s instanceof Dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nb(o,s.filters[a]),!0):!1}(t,e):void Z(19439)}function rb(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(rb).join(" ,")+"}"}(t):"Filter"}class FL extends Qe{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class UL extends Qe{constructor(e,n){super(e,"in",n),this.keys=sb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class BL extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=sb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class $L extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return f_(n)&&jl(n.arrayValue,this.value)}}class zL extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jl(this.value.arrayValue,n)}}class WL extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(jl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jl(this.value.arrayValue,n)}}class qL extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!f_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jl(this.value.arrayValue,r))}}/**
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
 */class HL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Fw(t,e=null,n=[],r=[],s=null,i=null,o=null){return new HL(t,e,n,r,s,i,o)}function p_(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.Te=n}return e.Te}function m_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ML(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nb(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vw(t.startAt,e.startAt)&&Vw(t.endAt,e.endAt)}function Im(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Go{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function GL(t,e,n,r,s,i,o,a){return new Go(t,e,n,r,s,i,o,a)}function wh(t){return new Go(t)}function Uw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KL(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ib(t){return t.collectionGroup!==null}function Za(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(gt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ml(i,r))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new Ml(gt.keyField(),r))}return e.Ie}function Gn(t){const e=re(t);return e.Ee||(e.Ee=QL(e,Za(t))),e.Ee}function QL(t,e){if(t.limitType==="F")return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ml(s.field,i)});const n=t.endAt?new wd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wd(t.startAt.position,t.startAt.inclusive):null;return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sm(t,e){const n=t.filters.concat([e]);return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function YL(t,e){const n=t.explicitOrderBy.concat([e]);return new Go(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function xd(t,e,n){return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xh(t,e){return m_(Gn(t),Gn(e))&&t.limitType===e.limitType}function ob(t){return`${p_(Gn(t))}|lt:${t.limitType}`}function Mi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rb(s)).join(", ")}]`),yh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ao(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ao(s)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function Eh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Za(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Mw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Za(r),s)||r.endAt&&!function(o,a,l){const u=Mw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Za(r),s))}(t,e)}function JL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ab(t){return(e,n)=>{let r=!1;for(const s of Za(t)){const i=XL(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XL(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?No(l,u):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
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
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return WS(this.inner)}size(){return this.innerSize}}/**
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
 */const ZL=new Xe(K.comparator);function Nr(){return ZL}const lb=new Xe(K.comparator);function Va(...t){let e=lb;for(const n of t)e=e.insert(n.key,n);return e}function cb(t){let e=lb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return el()}function ub(){return el()}function el(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const ej=new Xe(K.comparator),tj=new st(K.comparator);function he(...t){let e=tj;for(const n of t)e=e.add(n);return e}const nj=new st(de);function rj(){return nj}/**
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
 */function g_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_d(e)?"-0":e}}function db(t){return{integerValue:""+t}}function sj(t,e){return NL(e)?db(e):g_(t,e)}/**
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
 */class Th{constructor(){this._=void 0}}function ij(t,e,n){return t instanceof Vl?function(s,i){const o={fields:{[GS]:{stringValue:HS},[QS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&h_(i)&&(i=vh(i)),i&&(o.fields[KS]=i),{mapValue:o}}(n,e):t instanceof ko?fb(t,e):t instanceof Fl?pb(t,e):function(s,i){const o=hb(s,i),a=Bw(o)+Bw(s.Ae);return Em(o)&&Em(s.Ae)?db(a):g_(s.serializer,a)}(t,e)}function oj(t,e,n){return t instanceof ko?fb(t,e):t instanceof Fl?pb(t,e):n}function hb(t,e){return t instanceof Ed?function(r){return Em(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Vl extends Th{}class ko extends Th{constructor(e){super(),this.elements=e}}function fb(t,e){const n=mb(e);for(const r of t.elements)n.some(s=>Jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fl extends Th{constructor(e){super(),this.elements=e}}function pb(t,e){let n=mb(e);for(const r of t.elements)n=n.filter(s=>!Jn(s,r));return{arrayValue:{values:n}}}class Ed extends Th{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Bw(t){return ze(t.integerValue||t.doubleValue)}function mb(t){return f_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class gb{constructor(e,n){this.field=e,this.transform=n}}function aj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ko&&s instanceof ko||r instanceof Fl&&s instanceof Fl?Co(r.elements,s.elements,Jn):r instanceof Ed&&s instanceof Ed?Jn(r.Ae,s.Ae):r instanceof Vl&&s instanceof Vl}(t.transform,e.transform)}class lj{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ih{}function _b(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vb(t.key,Kn.none()):new lc(t.key,t.data,Kn.none());{const n=t.data,r=Bt.empty();let s=new st(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vs(t.key,r,new Zt(s.toArray()),Kn.none())}}function cj(t,e,n){t instanceof lc?function(s,i,o){const a=s.value.clone(),l=zw(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Vs?function(s,i,o){if(!Cu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zw(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function tl(t,e,n,r){return t instanceof lc?function(i,o,a,l){if(!Cu(i.precondition,o))return a;const u=i.value.clone(),h=Ww(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vs?function(i,o,a,l){if(!Cu(i.precondition,o))return a;const u=Ww(i.fieldTransforms,l,o),h=o.data;return h.setAll(yb(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,a){return Cu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uj(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=hb(r.transform,s||null);i!=null&&(n===null&&(n=Bt.empty()),n.set(r.field,i))}return n||null}function $w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Co(r,s,(i,o)=>aj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class lc extends Ih{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vs extends Ih{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zw(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,oj(o,a,n[s]))}return r}function Ww(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ij(i,o,e))}return r}class vb extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dj extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=tl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=tl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ub();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=_b(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Co(this.mutations,e.mutations,(n,r)=>$w(n,r))&&Co(this.baseMutations,e.baseMutations,(n,r)=>$w(n,r))}}class __{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return ej}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new __(e,n,r,s)}}/**
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
 */class fj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ge,fe;function mj(t){switch(t){case j.OK:return Z(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function wb(t){if(t===void 0)return Cr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ge.OK:return j.OK;case Ge.CANCELLED:return j.CANCELLED;case Ge.UNKNOWN:return j.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return j.INTERNAL;case Ge.UNAVAILABLE:return j.UNAVAILABLE;case Ge.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ge.NOT_FOUND:return j.NOT_FOUND;case Ge.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ge.ABORTED:return j.ABORTED;case Ge.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ge.DATA_LOSS:return j.DATA_LOSS;default:return Z(39323,{code:t})}}(fe=Ge||(Ge={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gj(){return new TextEncoder}/**
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
 */const _j=new ms([4294967295,4294967295],0);function qw(t){const e=gj().encode(t),n=new DS;return n.update(e),new Uint8Array(n.digest())}function Hw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class y_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fa(`Invalid padding: ${n}`);if(r<0)throw new Fa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ms.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(_j)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qw(e),[r,s]=Hw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new y_(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=qw(e),[r,s]=Hw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,cc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sh(ne.min(),s,new Xe(de),Nr(),he())}}class cc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new cc(r,n,he(),he(),he())}}/**
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
 */class Nu{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class xb{constructor(e,n){this.targetId=e,this.Ce=n}}class Eb{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gw{constructor(){this.ve=0,this.Fe=Kw(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new cc(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Kw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class yj{constructor(e){this.Ge=e,this.ze=new Map,this.je=Nr(),this.He=Zc(),this.Je=Zc(),this.Ze=new Xe(de)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Im(i))if(r===0){const o=new K(i.path);this.et(n,o,bt.newNoDocument(o,ne.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ss(r).toUint8Array()}catch(l){if(l instanceof qS)return bo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new y_(o,s,i)}catch(l){return bo(l instanceof Fa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Im(a.target)){const l=new K(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,bt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=he();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Sh(e,n,this.Ze,this.je,r);return this.je=Nr(),this.He=Zc(),this.Je=Zc(),this.Ze=new Xe(de),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Gw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new st(de),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new st(de),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Zc(){return new Xe(K.comparator)}function Kw(){return new Xe(K.comparator)}const vj={asc:"ASCENDING",desc:"DESCENDING"},wj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xj={and:"AND",or:"OR"};class Ej{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bm(t,e){return t.useProto3Json||yh(e)?e:{value:e}}function Td(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tj(t,e){return Td(t,e.toTimestamp())}function Qn(t){return ve(!!t,49232),ne.fromTimestamp(function(n){const r=Is(n);return new ee(r.seconds,r.nanos)}(t))}function v_(t,e){return Cm(t,e).canonicalString()}function Cm(t,e){const n=function(s){return new be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ib(t){const e=be.fromString(t);return ve(Ab(e),10190,{key:e.toString()}),e}function Nm(t,e){return v_(t.databaseId,e.path)}function Xf(t,e){const n=Ib(e);if(n.get(1)!==t.databaseId.projectId)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(bb(n))}function Sb(t,e){return v_(t.databaseId,e)}function Ij(t){const e=Ib(t);return e.length===4?be.emptyPath():bb(e)}function Am(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bb(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qw(t,e,n){return{name:Nm(t,e),fields:n.value.mapValue.fields}}function Sj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ve(h===void 0||typeof h=="string",58123),vt.fromBase64String(h||"")):(ve(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),vt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:wb(u.code);return new q(h,u.message||"")}(o);n=new Eb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xf(t,r.document.name),i=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):ne.min(),a=new Bt({mapValue:{fields:r.document.fields}}),l=bt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Nu(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xf(t,r.document),i=r.readTime?Qn(r.readTime):ne.min(),o=bt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Nu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xf(t,r.document),i=r.removedTargetIds||[];n=new Nu([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new pj(s,i),a=r.targetId;n=new xb(a,o)}}return n}function bj(t,e){let n;if(e instanceof lc)n={update:Qw(t,e.key,e.value)};else if(e instanceof vb)n={delete:Nm(t,e.key)};else if(e instanceof Vs)n={update:Qw(t,e.key,e.data),updateMask:Lj(e.fieldMask)};else{if(!(e instanceof dj))return Z(16599,{dt:e.type});n={verify:Nm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ed)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Tj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function Cj(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Qn(s.updateTime):Qn(i);return o.isEqual(ne.min())&&(o=Qn(i)),new lj(o,s.transformResults||[])}(n,e))):[]}function Nj(t,e){return{documents:[Sb(t,e.path)]}}function Aj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sb(t,s);const i=function(u){if(u.length!==0)return Nb(Dn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Vi(m.field),direction:Pj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function kj(t){let e=Ij(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(p){const m=Cb(p);return m instanceof Dn&&tb(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new Ml(Fi(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(p){let m;return m=typeof p=="object"?p.value:p,yh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,_=p.values||[];return new wd(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new wd(_,m)}(n.endAt)),GL(e,s,o,i,a,"F",l,u)}function Rj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fi(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fi(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fi(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fi(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Fi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>Cb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function Pj(t){return vj[t]}function Dj(t){return wj[t]}function Oj(t){return xj[t]}function Vi(t){return{fieldPath:t.canonicalString()}}function Fi(t){return gt.fromServerFormat(t.fieldPath)}function Nb(t){return t instanceof Qe?function(n){if(n.op==="=="){if(jw(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NAN"}};if(Lw(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jw(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NAN"}};if(Lw(n.value))return{unaryFilter:{field:Vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vi(n.field),op:Dj(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(s=>Nb(s));return r.length===1?r[0]:{compositeFilter:{op:Oj(n.op),filters:r}}}(t):Z(54877,{filter:t})}function Lj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ab(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function kb(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class rs{constructor(e,n,r,s,i=ne.min(),o=ne.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jj{constructor(e){this.yt=e}}function Mj(t){const e=kj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xd(e,e.limit,"L"):e}/**
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
 */class Vj{constructor(){this.Sn=new Fj}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Ts.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Fj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(be.comparator)).toArray()}}/**
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
 */const Yw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rb=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(Rb,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Ro{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ro(0)}static ar(){return new Ro(-1)}}/**
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
 */const Jw="LruGarbageCollector",Uj=1048576;function Xw([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class Bj{constructor(e){this.Pr=e,this.buffer=new st(Xw),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $j{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Jw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ho(n)?H(Jw,"Ignoring IndexedDB error during garbage collection: ",n):await qo(n)}await this.Ar(3e5)})}}class zj{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(_h.ce);const r=new Bj(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Yw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,a=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),ji()<=le.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Wj(t,e){return new zj(t,e)}/**
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
 */class qj{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Hj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Gj{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&tl(r.mutation,s,Zt.empty(),ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=ei();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Va();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Nr();const o=el(),a=function(){return el()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Vs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),tl(h.mutation,u,h.mutation.getFieldMask(),ee.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new Hj(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=el();let s=new Xe((o,a)=>o-a),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Zt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const p=(s.get(a.batchId)||he()).add(l);s=s.insert(a.batchId,p)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,p=ub();h.forEach(m=>{if(!i.has(m)){const _=_b(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return KL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ib(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(ei());let a=Dl,l=i;return o.next(u=>M.forEach(u,(h,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,he())).next(h=>({batchId:a,changes:cb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Va();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Va();return this.indexManager.getCollectionParents(e,i).next(a=>M.forEach(a,l=>{const u=function(p,m){return new Go(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,bt.newInvalidDocument(h)))});let a=Va();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&tl(h.mutation,u,Zt.empty(),ee.now()),Eh(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class Kj{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Mj(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Qj{constructor(){this.overlays=new Xe(K.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=ei(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ei(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ei(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return M.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new fj(n,r));let i=this.Lr.get(n);i===void 0&&(i=he(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class Yj{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class w_{constructor(){this.kr=new st(ct.Kr),this.qr=new st(ct.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ct(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new be([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new be([])),r=new ct(n,e),s=new ct(n,e+1);let i=he();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||de(e.Hr,n.Hr)}static Ur(e,n){return de(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
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
 */class Jj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new st(ct.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?d_:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(de);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new ct(new K(i),0);let a=new st(de);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)},o),M.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ct(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Xj{constructor(e){this.ti=e,this.docs=function(){return new Xe(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():bt.newInvalidDocument(n))}getEntries(e,n){let r=Nr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():bt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Nr();const o=n.path,a=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||IL(TL(h),r)<=0||(s.has(h.key)||Eh(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zj(this)}getSize(e){return M.resolve(this.size)}}class Zj extends qj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class eM{constructor(e){this.persistence=e,this.ri=new Ci(n=>p_(n),m_),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new w_,this.targetCount=0,this.oi=Ro._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ro(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
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
 */class Pb{constructor(e,n){this._i={},this.overlays={},this.ai=new _h(0),this.ui=!1,this.ui=!0,this.ci=new Yj,this.referenceDelegate=e(this),this.li=new eM(this),this.indexManager=new Vj,this.remoteDocumentCache=function(s){return new Xj(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new jj(n),this.Pi=new Kj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Jj(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new tM(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class tM extends bL{constructor(e){super(),this.currentSequenceNumber=e}}class x_{constructor(e){this.persistence=e,this.Ri=new w_,this.Ai=null}static Vi(e){return new x_(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Id{constructor(e,n){this.persistence=e,this.fi=new Ci(r=>AL(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Wj(this,n)}static Vi(e,n){return new Id(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Su(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class E_{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new E_(e,n.fromCache,r,s)}}/**
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
 */class nM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rM{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return xP()?8:CL(Nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nM;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ji()<=le.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Mi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(ji()<=le.DEBUG&&H("QueryEngine","Query:",Mi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ji()<=le.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Mi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):M.resolve())}gs(e,n){if(Uw(n))return M.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=xd(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,a);return this.Ss(n,u,o,l.readTime)?this.gs(e,xd(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return Uw(n)||s.isEqual(ne.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(ji()<=le.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mi(n)),this.Ds(e,o,n,EL(s,Dl)).next(a=>a))})}bs(e,n){let r=new st(ab(e));return n.forEach((s,i)=>{Eh(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ji()<=le.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Mi(n)),this.fs.getDocumentsMatchingQuery(e,n,Ts.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const T_="LocalStore",sM=3e8;class iM{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Xe(de),this.Fs=new Ci(i=>p_(i),m_),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gj(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function oM(t,e,n,r){return new iM(t,e,n,r)}async function Db(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=he();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function aM(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const p=u.batch,m=p.keys();let _=M.resolve();return m.forEach(C=>{_=_.next(()=>h.getEntry(l,C)).next(A=>{const R=u.docVersions.get(C);ve(R!==null,48541),A.version.compareTo(R)<0&&(p.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=he();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Ob(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function lM(t,e){const n=re(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,p)=>{const m=s.get(p);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(vt.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(p,_),function(A,R,S){return A.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=sM?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(m,_,h)&&a.push(n.li.updateTargetData(i,_))});let l=Nr(),u=he();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(cM(i,o,e.documentUpdates).next(h=>{l=h.Bs,u=h.Ls})),!r.isEqual(ne.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return M.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function cM(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Nr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H(T_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function uM(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=d_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dM(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new rs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function km(t,e,n){const r=re(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ho(o))throw o;H(T_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Zw(t,e,n){const r=re(t);let s=ne.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const p=re(l),m=p.Fs.get(h);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(u,h)}(r,o,Gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ne.min(),n?i:he())).next(a=>(hM(r,JL(e),a),{documents:a,ks:i})))}function hM(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class ex{constructor(){this.activeTargetIds=rj()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fM{constructor(){this.vo=new ex,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ex,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pM{Mo(e){}shutdown(){}}/**
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
 */const tx="ConnectivityMonitor";class nx{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(tx,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(tx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let eu=null;function Rm(){return eu===null?eu=function(){return 268435456+Math.round(2147483648*Math.random())}():eu++,"0x"+eu.toString(16)}/**
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
 */const Zf="RestConnection",mM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class gM{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===yd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Rm(),a=this.Qo(e,n.toUriEncodedString());H(Zf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(a),h=Zn(u);return this.zo(e,a,l,r,h).then(p=>(H(Zf,`Received RPC '${e}' ${o}: `,p),p),p=>{throw bo(Zf,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=mM[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class _M{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Tt="WebChannelConnection",Ta=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class fo extends gM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fo.c_){const e=MS();Ta(e,jS.STAT_EVENT,n=>{n.stat===ym.PROXY?H(Tt,"STAT_EVENT: detected buffering proxy"):n.stat===ym.NOPROXY&&H(Tt,"STAT_EVENT: detected no buffering proxy")}),fo.c_=!0}}zo(e,n,r,s,i){const o=Rm();return new Promise((a,l)=>{const u=new OS;u.setWithCredentials(!0),u.listenOnce(LS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Iu.NO_ERROR:const p=u.getResponseJson();H(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case Iu.TIMEOUT:H(Tt,`RPC '${e}' ${o} timed out`),l(new q(j.DEADLINE_EXCEEDED,"Request time out"));break;case Iu.HTTP_ERROR:const m=u.getStatus();if(H(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const A=function(S){const E=S.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(C.status);l(new q(A,C.message))}else l(new q(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(j.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(Tt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);H(Tt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Rm(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");H(Tt,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let p=!1,m=!1;const _=new _M({Ho:C=>{m?H(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(H(Tt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),H(Tt,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},Jo:()=>h.close()});return Ta(h,Ma.EventType.OPEN,()=>{m||(H(Tt,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),Ta(h,Ma.EventType.CLOSE,()=>{m||(m=!0,H(Tt,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(h))}),Ta(h,Ma.EventType.ERROR,C=>{m||(m=!0,bo(Tt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),_.o_(new q(j.UNAVAILABLE,"The operation could not be completed")))}),Ta(h,Ma.EventType.MESSAGE,C=>{var A;if(!m){const R=C.data[0];ve(!!R,16349);const S=R,E=(S==null?void 0:S.error)||((A=S[0])==null?void 0:A.error);if(E){H(Tt,`RPC '${e}' stream ${s} received error:`,E);const x=E.status;let D=function(I){const y=Ge[I];if(y!==void 0)return wb(y)}(x),V=E.message;D===void 0&&(D=j.INTERNAL,V="Unknown error status: "+x+" with message "+E.message),m=!0,_.o_(new q(D,V)),h.close()}else H(Tt,`RPC '${e}' stream ${s} received:`,R),_.__(R)}}),fo.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return VS()}}/**
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
 */function yM(t){return new fo(t)}function ep(){return typeof document<"u"?document:null}/**
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
 */function bh(t){return new Ej(t,!0)}/**
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
 */fo.c_=!1;class Lb{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const rx="PersistentStream";class jb{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Lb(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Cr(n.toString()),Cr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new q(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(rx,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(rx,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vM extends jb{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Sj(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Qn(o.readTime):ne.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Am(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Im(l)?{documents:Nj(i,l)}:{query:Aj(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tb(i,o.resumeToken);const u=bm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Td(i,o.snapshotVersion.toTimestamp());const u=bm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Rj(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Am(this.serializer),n.removeTarget=e,this.K_(n)}}class wM extends jb{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Cj(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Am(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bj(this.serializer,r))};this.K_(n)}}/**
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
 */class xM{}class EM extends xM{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Cm(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Cm(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function TM(t,e,n,r){return new EM(t,e,n,r)}class IM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Cr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const gi="RemoteStore";class SM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(H(gi,"Restarting streams for network reachability change."),await async function(l){const u=re(l);u.Ea.add(4),await uc(u),u.Va.set("Unknown"),u.Ea.delete(4),await Ch(u)}(this))})}),this.Va=new IM(r,s)}}async function Ch(t){if(Ni(t))for(const e of t.Ra)await e(!0)}async function uc(t){for(const e of t.Ra)await e(!1)}function Mb(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),C_(n)?b_(n):Ko(n).O_()&&S_(n,e))}function I_(t,e){const n=re(t),r=Ko(n);n.Ia.delete(e),r.O_()&&Vb(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ni(n)&&n.Va.set("Unknown"))}function S_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ko(t).Z_(e)}function Vb(t,e){t.da.$e(e),Ko(t).X_(e)}function b_(t){t.da=new yj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ko(t).start(),t.Va.ua()}function C_(t){return Ni(t)&&!Ko(t).x_()&&t.Ia.size>0}function Ni(t){return re(t).Ea.size===0}function Fb(t){t.da=void 0}async function bM(t){t.Va.set("Online")}async function CM(t){t.Ia.forEach((e,n)=>{S_(t,e)})}async function NM(t,e){Fb(t),C_(t)?(t.Va.ha(e),b_(t)):t.Va.set("Unknown")}async function AM(t,e,n){if(t.Va.set("Online"),e instanceof Eb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){H(gi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sd(t,r)}else if(e instanceof Nu?t.da.Xe(e):e instanceof xb?t.da.st(e):t.da.tt(e),!n.isEqual(ne.min()))try{const r=await Ob(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(vt.EMPTY_BYTE_STRING,h.snapshotVersion)),Vb(i,l);const p=new rs(h.target,l,u,h.sequenceNumber);S_(i,p)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H(gi,"Failed to raise snapshot:",r),await Sd(t,r)}}async function Sd(t,e,n){if(!Ho(e))throw e;t.Ea.add(1),await uc(t),t.Va.set("Offline"),n||(n=()=>Ob(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(gi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ch(t)})}function Ub(t,e){return e().catch(n=>Sd(t,n,e))}async function Nh(t){const e=re(t),n=Cs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:d_;for(;kM(e);)try{const s=await uM(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,RM(e,s)}catch(s){await Sd(e,s)}Bb(e)&&$b(e)}function kM(t){return Ni(t)&&t.Ta.length<10}function RM(t,e){t.Ta.push(e);const n=Cs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Bb(t){return Ni(t)&&!Cs(t).x_()&&t.Ta.length>0}function $b(t){Cs(t).start()}async function PM(t){Cs(t).ra()}async function DM(t){const e=Cs(t);for(const n of t.Ta)e.ea(n.mutations)}async function OM(t,e,n){const r=t.Ta.shift(),s=__.from(r,e,n);await Ub(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nh(t)}async function LM(t,e){e&&Cs(t).Y_&&await async function(r,s){if(function(o){return mj(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Cs(r).B_(),await Ub(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nh(r)}}(t,e),Bb(t)&&$b(t)}async function sx(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),H(gi,"RemoteStore received new credentials");const r=Ni(n);n.Ea.add(3),await uc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ch(n)}async function jM(t,e){const n=re(t);e?(n.Ea.delete(2),await Ch(n)):e||(n.Ea.add(2),await uc(n),n.Va.set("Unknown"))}function Ko(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new vM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:bM.bind(null,t),Yo:CM.bind(null,t),t_:NM.bind(null,t),J_:AM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),C_(t)?b_(t):t.Va.set("Unknown")):(await t.ma.stop(),Fb(t))})),t.ma}function Cs(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new wM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:PM.bind(null,t),t_:LM.bind(null,t),ta:DM.bind(null,t),na:OM.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Nh(t)):(await t.fa.stop(),t.Ta.length>0&&(H(gi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class N_{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new N_(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A_(t,e){if(Cr("AsyncQueue",`${e}: ${t}`),Ho(t))return new q(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Va(),this.sortedSet=new Xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ix{constructor(){this.ga=new Xe(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Po{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Po(e,n,po.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class MM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class VM{constructor(){this.queries=ox(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=ox(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new q(j.ABORTED,"Firestore shutting down"))}}function ox(){return new Ci(t=>ob(t),xh)}async function k_(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new MM,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=A_(o,`Initialization of query '${Mi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&P_(n)}async function R_(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function FM(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&P_(n)}function UM(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function P_(t){t.Ca.forEach(e=>{e.next()})}var Pm,ax;(ax=Pm||(Pm={})).Ma="default",ax.Cache="cache";class D_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Pm.Cache}}/**
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
 */class zb{constructor(e){this.key=e}}class Wb{constructor(e){this.key=e}}class BM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=ab(e),this.tu=new po(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new ix,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,p)=>{const m=s.get(h),_=Eh(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?C!==A&&(r.track({type:3,doc:_}),R=!0):this.su(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||u)&&(a=!0)),R&&(_?(o=o.add(_),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,p)=>function(_,C){const A=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:R})}};return A(_)-A(C)}(h.type,p.type)||this.eu(h.doc,p.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Po(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ix,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Wb(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new zb(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const O_="SyncEngine";class $M{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zM{constructor(e){this.key=e,this.hu=!1}}class WM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ci(a=>ob(a),xh),this.Iu=new Map,this.Eu=new Set,this.Ru=new Xe(K.comparator),this.Au=new Map,this.Vu=new w_,this.du={},this.mu=new Map,this.fu=Ro.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qM(t,e,n=!0){const r=Yb(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await qb(r,e,n,!0),s}async function HM(t,e){const n=Yb(t);await qb(n,e,!0,!1)}async function qb(t,e,n,r){const s=await dM(t.localStore,Gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await GM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Mb(t.remoteStore,s),a}async function GM(t,e,n,r,s){t.pu=(p,m,_)=>async function(A,R,S,E){let x=R.view.ru(S);x.Ss&&(x=await Zw(A.localStore,R.query,!1).then(({documents:I})=>R.view.ru(I,x)));const D=E&&E.targetChanges.get(R.targetId),V=E&&E.targetMismatches.get(R.targetId)!=null,F=R.view.applyChanges(x,A.isPrimaryClient,D,V);return cx(A,R.targetId,F.au),F.snapshot}(t,p,m,_);const i=await Zw(t.localStore,e,!0),o=new BM(e,i.ks),a=o.ru(i.documents),l=cc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);cx(t,n,u.au);const h=new $M(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function KM(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!xh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await km(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&I_(r.remoteStore,s.targetId),Dm(r,s.targetId)}).catch(qo)):(Dm(r,s.targetId),await km(r.localStore,s.targetId,!0))}async function QM(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),I_(n.remoteStore,r.targetId))}async function YM(t,e,n){const r=rV(t);try{const s=await function(o,a){const l=re(o),u=ee.now(),h=a.reduce((_,C)=>_.add(C.key),he());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Nr(),A=he();return l.xs.getEntries(_,h).next(R=>{C=R,C.forEach((S,E)=>{E.isValidDocument()||(A=A.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(R=>{p=R;const S=[];for(const E of a){const x=uj(E,p.get(E.key).overlayedDocument);x!=null&&S.push(new Vs(E.key,x,XS(x.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,S,a)}).next(R=>{m=R;const S=R.applyToLocalDocumentSet(p,A);return l.documentOverlayCache.saveOverlays(_,R.batchId,S)})}).then(()=>({batchId:m.batchId,changes:cb(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Xe(de)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await dc(r,s.changes),await Nh(r.remoteStore)}catch(s){const i=A_(s,"Failed to persist write");n.reject(i)}}async function Hb(t,e){const n=re(t);try{const r=await lM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await dc(n,r,e)}catch(r){await qo(r)}}function lx(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=re(o);l.onlineState=a;let u=!1;l.queries.forEach((h,p)=>{for(const m of p.ba)m.va(a)&&(u=!0)}),u&&P_(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JM(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Xe(K.comparator);o=o.insert(i,bt.newNoDocument(i,ne.min()));const a=he().add(i),l=new Sh(ne.min(),new Map,new Xe(de),o,a);await Hb(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),L_(r)}else await km(r.localStore,e,!1).then(()=>Dm(r,e,n)).catch(qo)}async function XM(t,e){const n=re(t),r=e.batch.batchId;try{const s=await aM(n.localStore,e);Kb(n,r,null),Gb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await dc(n,s)}catch(s){await qo(s)}}async function ZM(t,e,n){const r=re(t);try{const s=await function(o,a){const l=re(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(p=>(ve(p!==null,37113),h=p.keys(),l.mutationQueue.removeMutationBatch(u,p))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Kb(r,e,n),Gb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await dc(r,s)}catch(s){await qo(s)}}function Gb(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Kb(t,e,n){const r=re(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Dm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||Qb(t,r)})}function Qb(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(I_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),L_(t))}function cx(t,e,n){for(const r of n)r instanceof zb?(t.Vu.addReference(r.key,e),eV(t,r)):r instanceof Wb?(H(O_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Qb(t,r.key)):Z(19791,{wu:r})}function eV(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(O_,"New document in limbo: "+n),t.Eu.add(r),L_(t))}function L_(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(be.fromString(e)),r=t.fu.next();t.Au.set(r,new zM(n)),t.Ru=t.Ru.insert(n,r),Mb(t.remoteStore,new rs(Gn(wh(n.path)),r,"TargetPurposeLimboResolution",_h.ce))}}async function dc(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=E_.Es(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,u){const h=re(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,m=>M.forEach(m.Ts,_=>h.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.Is,_=>h.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!Ho(p))throw p;H(T_,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=h.vs.get(m),C=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(C);h.vs=h.vs.insert(m,A)}}}(r.localStore,i))}async function tV(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){H(O_,"User change. New user:",e.toKey());const r=await Db(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new q(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dc(n,r.Ns)}}function nV(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function Yb(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Hb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JM.bind(null,e),e.Pu.J_=FM.bind(null,e.eventManager),e.Pu.yu=UM.bind(null,e.eventManager),e}function rV(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZM.bind(null,e),e}class bd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return oM(this.persistence,new rM,e.initialUser,this.serializer)}Cu(e){return new Pb(x_.Vi,this.serializer)}Du(e){return new fM}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bd.provider={build:()=>new bd};class sV extends bd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof Id,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $j(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new Pb(r=>Id.Vi(r,n),this.serializer)}}class Om{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tV.bind(null,this.syncEngine),await jM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VM}()}createDatastore(e){const n=bh(e.databaseInfo.databaseId),r=yM(e.databaseInfo);return TM(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new SM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>lx(this.syncEngine,n,0),function(){return nx.v()?new nx:new pM}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const p=new WM(s,i,o,a,l,u);return h&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);H(gi,"RemoteStore shutting down."),i.Ea.add(5),await uc(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Om.provider={build:()=>new Om};/**
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
 */class j_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Cr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ns="FirestoreClient";class iV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=u_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Ns,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Ns,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=A_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tp(t,e){t.asyncQueue.verifyOperationInProgress(),H(Ns,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Db(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ux(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oV(t);H(Ns,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sx(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sx(e.remoteStore,s)),t._onlineComponents=e}async function oV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Ns,"Using user provided OfflineComponentProvider");try{await tp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;bo("Error using user provided cache. Falling back to memory cache: "+n),await tp(t,new bd)}}else H(Ns,"Using default OfflineComponentProvider"),await tp(t,new sV(void 0));return t._offlineComponents}async function Jb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Ns,"Using user provided OnlineComponentProvider"),await ux(t,t._uninitializedComponentsProvider._online)):(H(Ns,"Using default OnlineComponentProvider"),await ux(t,new Om))),t._onlineComponents}function aV(t){return Jb(t).then(e=>e.syncEngine)}async function Cd(t){const e=await Jb(t),n=e.eventManager;return n.onListen=qM.bind(null,e.syncEngine),n.onUnlisten=KM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QM.bind(null,e.syncEngine),n}function lV(t,e,n,r){const s=new j_(r),i=new D_(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>k_(await Cd(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>R_(await Cd(t),i))}}function cV(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new j_({next:m=>{h.Nu(),o.enqueueAndForget(()=>R_(i,p));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new q(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new q(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new D_(wh(a.path),h,{includeMetadataChanges:!0,Ka:!0});return k_(i,p)}(await Cd(t),t.asyncQueue,e,n,r)),r.promise}function uV(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new j_({next:m=>{h.Nu(),o.enqueueAndForget(()=>R_(i,p)),m.fromCache&&l.source==="server"?u.reject(new q(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new D_(a,h,{includeMetadataChanges:!0,Ka:!0});return k_(i,p)}(await Cd(t),t.asyncQueue,e,n,r)),r.promise}function dV(t,e){const n=new _r;return t.asyncQueue.enqueueAndForget(async()=>YM(await aV(t),e,n)),n.promise}/**
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
 */function Xb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hV="ComponentProvider",dx=new Map;function fV(t,e,n,r,s){return new PL(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Xb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Zb="firestore.googleapis.com",hx=!0;class fx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zb,this.ssl=hx}else this.host=e.host,this.ssl=e.ssl??hx;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Uj)throw new q(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Xb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ah{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uL;switch(r.type){case"firstParty":return new pL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dx.get(n);r&&(H(hV,"Removing Datastore"),dx.delete(n),r.terminate())}(this),Promise.resolve()}}function pV(t,e,n,r={}){var u;t=mn(t,Ah);const s=Zn(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(lh(`https://${a}`),ch("Firestore",!0)),i.host!==Zb&&i.host!==a&&bo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!Tr(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,p;if(typeof r.mockUserToken=="string")h=r.mockUserToken,p=It.MOCK_USER;else{h=Xg(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new q(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new It(m)}t._authCredentials=new dL(new US(h,p))}}/**
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
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ac(n,Ue._jsonSchema))return new Ue(e,r||null,new K(be.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Ye("string",Ue._jsonSchemaVersion),referencePath:Ye("string")};class _s extends Pr{constructor(e,n,r){super(e,n,wh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new K(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function vn(t,e,...n){if(t=_e(t),BS("collection","path",e),t instanceof Ah){const r=be.fromString(e,...n);return bw(r),new _s(t,null,r)}{if(!(t instanceof Ue||t instanceof _s))throw new q(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return bw(r),new _s(t.firestore,null,r)}}function at(t,e,...n){if(t=_e(t),arguments.length===1&&(e=u_.newId()),BS("doc","path",e),t instanceof Ah){const r=be.fromString(e,...n);return Sw(r),new Ue(t,null,new K(r))}{if(!(t instanceof Ue||t instanceof _s))throw new q(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Sw(r),new Ue(t.firestore,t instanceof _s?t.converter:null,new K(r))}}/**
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
 */const px="AsyncQueue";class mx{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Lb(this,"async_queue_retry"),this._c=()=>{const r=ep();r&&H(px,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ep();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ep();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new _r;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ho(e))throw e;H(px,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Cr("INTERNAL UNHANDLED ERROR: ",gx(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=N_.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:gx(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gx(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _i extends Ah{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new mx,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mx(e),this._firestoreClient=void 0,await e}}}function mV(t,e){const n=typeof t=="object"?t:hh(),r=typeof t=="string"?t:yd,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jg("firestore");i&&pV(s,...i)}return s}function kh(t){if(t._terminated)throw new q(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||gV(t),t._firestoreClient}function gV(t){var r,s,i,o;const e=t._freezeSettings(),n=fV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new iV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class un{constructor(e){this._byteString=e}static fromBase64String(e){try{return new un(vt.fromBase64String(e))}catch(n){throw new q(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new un(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:un._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ac(e,un._jsonSchema))return un.fromBase64String(e.bytes)}}un._jsonSchemaVersion="firestore/bytes/1.0",un._jsonSchema={type:Ye("string",un._jsonSchemaVersion),bytes:Ye("string")};/**
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
 */class M_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hc{constructor(e){this._methodName=e}}/**
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
 */class Yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(ac(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:Ye("string",Yn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
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
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ac(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new q(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Ye("string",An._jsonSchemaVersion),vectorValues:Ye("object")};/**
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
 */const _V=/^__.*__$/;class yV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new lc(e,this.data,n,this.fieldTransforms)}}class eC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Rh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Rh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Nd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(tC(this.dataSource)&&_V.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class vV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bh(e)}createContext(e,n,r,s=!1){return new Rh({dataSource:e,methodName:n,targetDoc:r,path:gt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V_(t){const e=t._freezeSettings(),n=bh(t._databaseId);return new vV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wV(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);B_("Data must be an object, but it was:",o,r);const a=nC(r,o);let l,u;if(i.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const p of i.mergeFields){const m=yi(e,p,n);if(!o.contains(m))throw new q(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iC(h,m)||h.push(m)}l=new Zt(h),u=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,u=o.fieldTransforms;return new yV(new Bt(a),l,u)}class Ph extends hc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ph}}function xV(t,e,n){return new Rh({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class F_ extends hc{_toFieldTransform(e){return new gb(e.path,new Vl)}isEqual(e){return e instanceof F_}}class U_ extends hc{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=xV(this,e,!0),r=this.Ac.map(i=>Qo(i,n)),s=new ko(r);return new gb(e.path,s)}isEqual(e){return e instanceof U_&&Tr(this.Ac,e.Ac)}}function EV(t,e,n,r){const s=t.createContext(1,e,n);B_("Data must be an object, but it was:",s,r);const i=[],o=Bt.empty();Ms(r,(l,u)=>{const h=sC(e,l,n);u=_e(u);const p=s.childContextForFieldPath(h);if(u instanceof Ph)i.push(h);else{const m=Qo(u,p);m!=null&&(i.push(h),o.set(h,m))}});const a=new Zt(i);return new eC(o,a,s.fieldTransforms)}function TV(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[yi(e,r,n)],l=[s];if(i.length%2!=0)throw new q(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(yi(e,i[m])),l.push(i[m+1]);const u=[],h=Bt.empty();for(let m=a.length-1;m>=0;--m)if(!iC(u,a[m])){const _=a[m];let C=l[m];C=_e(C);const A=o.childContextForFieldPath(_);if(C instanceof Ph)u.push(_);else{const R=Qo(C,A);R!=null&&(u.push(_),h.set(_,R))}}const p=new Zt(u);return new eC(h,p,o.fieldTransforms)}function IV(t,e,n,r=!1){return Qo(n,t.createContext(r?4:3,e))}function Qo(t,e){if(rC(t=_e(t)))return B_("Unsupported field value:",e,t),nC(t,e);if(t instanceof hc)return function(r,s){if(!tC(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Qo(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:Td(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Td(s.serializer,i)}}if(r instanceof Yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof un)return{bytesValue:Tb(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:v_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,a){const l=o instanceof An?o.toArray():o;return{mapValue:{fields:{[YS]:{stringValue:JS},[vd]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return g_(a.serializer,h)})}}}}}}(r,s);if(kb(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${gh(r)}`)}(t,e)}function nC(t,e){const n={};return WS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(r,s)=>{const i=Qo(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ee||t instanceof Yn||t instanceof un||t instanceof Ue||t instanceof hc||t instanceof An||kb(t))}function B_(t,e,n){if(!rC(n)||!$S(n)){const r=gh(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function yi(t,e,n){if((e=_e(e))instanceof M_)return e._internalPath;if(typeof e=="string")return sC(t,e);throw Nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const SV=new RegExp("[~\\*/\\[\\]]");function sC(t,e,n){if(e.search(SV)>=0)throw Nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new M_(...e.split("."))._internalPath}catch{throw Nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nd(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new q(j.INVALID_ARGUMENT,a+t+l)}function iC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bV{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[vd].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ze(o.doubleValue));return new An(n)}convertGeoPoint(e){return new Yn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ol(e));default:return null}}convertTimestamp(e){const n=Is(e);return new ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);ve(Ab(r),9688,{name:e});const s=new Ll(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Cr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class $_ extends bV{constructor(e){super(),this.firestore=e}convertBytes(e){return new un(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function np(){return new F_("serverTimestamp")}function CV(...t){return new U_("arrayUnion",t)}const _x="@firebase/firestore",yx="4.10.0";/**
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
 */function vx(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class oC{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NV extends oC{data(){return super.data()}}/**
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
 */function aC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z_{}class W_ extends z_{}function wn(t,e,...n){let r=[];e instanceof z_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof q_).length,a=i.filter(l=>l instanceof Dh).length;if(o>1||o>0&&a>0)throw new q(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Dh extends W_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Dh(e,n,r)}_apply(e){const n=this._parse(e);return lC(e._query,n),new Pr(e.firestore,e.converter,Sm(e._query,n))}_parse(e){const n=V_(e.firestore);return function(i,o,a,l,u,h,p){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){xx(p,h);const C=[];for(const A of p)C.push(wx(l,i,A));m={arrayValue:{values:C}}}else m=wx(l,i,p)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||xx(p,h),m=IV(a,o,p,h==="in"||h==="not-in");return Qe.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function et(t,e,n){const r=e,s=yi("where",t);return Dh._create(s,r,n)}class q_ extends z_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)lC(o,l),o=Sm(o,l)}(e._query,n),new Pr(e.firestore,e.converter,Sm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class H_ extends W_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new H_(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ml(i,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,YL(e._query,n))}}function Qs(t,e="asc"){const n=e,r=yi("orderBy",t);return H_._create(r,n)}class G_ extends W_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new G_(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,xd(e._query,this._limit,this._limitType))}}function AV(t){return xL("limit",t),G_._create("limit",t,"F")}function wx(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new q(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ib(e)&&n.indexOf("/")!==-1)throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!K.isDocumentKey(r))throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ow(t,new K(r))}if(n instanceof Ue)return Ow(t,n._key);throw new q(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gh(n)}.`)}function xx(t,e){if(!Array.isArray(t)||t.length===0)throw new q(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lC(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function kV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ua{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ii extends oC{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ii._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",ii._jsonSchema={type:Ye("string",ii._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Au extends ii{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ua(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Au(this._firestore,this._userDataWriter,r.key,r,new Ua(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Au(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ua(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Au(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ua(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:RV(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=u_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Ye("string",oi._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};/**
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
 */function Ad(t){t=mn(t,Ue);const e=mn(t.firestore,_i),n=kh(e);return cV(n,t._key).then(r=>uC(e,t,r))}function qs(t){t=mn(t,Pr);const e=mn(t.firestore,_i),n=kh(e),r=new $_(e);return aC(t._query),uV(n,t._query).then(s=>new oi(e,r,t,s))}function PV(t,e,n){t=mn(t,Ue);const r=mn(t.firestore,_i),s=kV(t.converter,e),i=V_(r);return cC(r,[wV(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function an(t,e,n,...r){t=mn(t,Ue);const s=mn(t.firestore,_i),i=V_(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof M_?TV(i,"updateDoc",t._key,e,n,r):EV(i,"updateDoc",t._key,e),cC(s,[o.toMutation(t._key,Kn.exists(!0))])}function nl(t,...e){var u,h,p;t=_e(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||vx(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(vx(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,a;if(t instanceof Ue)o=mn(t.firestore,_i),a=wh(t._key.path),i={next:m=>{e[r]&&e[r](uC(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=mn(t,Pr);o=mn(m.firestore,_i),a=m._query;const _=new $_(o);i={next:C=>{e[r]&&e[r](new oi(o,_,m,C))},error:e[r+1],complete:e[r+2]},aC(t._query)}const l=kh(o);return lV(l,a,s,i)}function cC(t,e){const n=kh(t);return dV(n,e)}function uC(t,e,n){const r=n.docs.get(e._key),s=new $_(t);return new ii(t,s,e._key,r,new Ua(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){cL(Ls),Es(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new _i(new hL(r.getProvider("auth-internal")),new mL(o,r.getProvider("app-check-internal")),DL(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),pn(_x,yx,e),pn(_x,yx,"esm2020")})();var Ex={};const Tx="@firebase/database",Ix="1.1.0";/**
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
 */let dC="";function DV(t){dC=t}/**
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
 */class OV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Al(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class LV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const hC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new OV(e)}}catch{}return new LV},ti=hC("localStorage"),jV=hC("sessionStorage");/**
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
 */const mo=new dh("@firebase/database"),MV=function(){let t=1;return function(){return t++}}(),fC=function(t){const e=DP(t),n=new AP;n.update(e);const r=n.digest();return Yg.encodeByteArray(r)},fc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=fc.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let rl=null,Sx=!0;const VV=function(t,e){B(!0,"Can't turn on custom loggers persistently."),mo.logLevel=le.VERBOSE,rl=mo.log.bind(mo)},mt=function(...t){if(Sx===!0&&(Sx=!1,rl===null&&jV.get("logging_enabled")===!0&&VV()),rl){const e=fc.apply(null,t);rl(e)}},pc=function(t){return function(...e){mt(t,...e)}},Lm=function(...t){const e="FIREBASE INTERNAL ERROR: "+fc(...t);mo.error(e)},Ar=function(...t){const e=`FIREBASE FATAL ERROR: ${fc(...t)}`;throw mo.error(e),new Error(e)},Gt=function(...t){const e="FIREBASE WARNING: "+fc(...t);mo.warn(e)},FV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Oh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Do="[MIN_NAME]",vi="[MAX_NAME]",Ai=function(t,e){if(t===e)return 0;if(t===Do||e===vi)return-1;if(e===Do||t===vi)return 1;{const n=bx(t),r=bx(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},BV=function(t,e){return t===e?0:t<e?-1:1},Ia=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},K_=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=K_(t[e[r]]);return n+="}",n},pC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function At(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mC=function(t){B(!Oh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let p="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),p=p+m}return p.toLowerCase()},$V=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},zV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const qV=new RegExp("^-?(0*)\\d{1,10}$"),HV=-2147483648,GV=2147483647,bx=function(t){if(qV.test(t)){const e=Number(t);if(e>=HV&&e<=GV)return e}return null},Yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Gt("Exception was thrown by user callback.",n),e},Math.floor(0))}},KV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},sl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class QV{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class YV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Gt(e)}}class ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ku.OWNER="owner";/**
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
 */const Q_="5",gC="v",_C="s",yC="r",vC="f",wC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xC="ls",EC="p",jm="ac",TC="websocket",IC="long_polling";/**
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
 */class SC{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function JV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bC(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===TC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===IC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);JV(t)&&(n.ns=t.namespace);const s=[];return At(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class XV{constructor(){this.counters_={}}incrementCounter(e,n=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lP(this.counters_)}}/**
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
 */const rp={},sp={};function Y_(t){const e=t.toString();return rp[e]||(rp[e]=new XV),rp[e]}function ZV(t,e){const n=t.toString();return sp[n]||(sp[n]=e()),sp[n]}/**
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
 */class e4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Yo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Cx="start",t4="close",n4="pLPCommand",r4="pRTLPCB",CC="id",NC="pw",AC="ser",s4="cb",i4="seg",o4="ts",a4="d",l4="dframe",kC=1870,RC=30,c4=kC-RC,u4=25e3,d4=3e4;class Zi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pc(e),this.stats_=Y_(n),this.urlFn=l=>(this.appCheckToken&&(l[jm]=this.appCheckToken),bC(n,IC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new e4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(d4)),UV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new J_((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cx)this.id=a,this.password=l;else if(o===t4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Cx]="t",r[AC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[s4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gC]=Q_,this.transportSessionId&&(r[_C]=this.transportSessionId),this.lastSessionId&&(r[xC]=this.lastSessionId),this.applicationId&&(r[EC]=this.applicationId),this.appCheckToken&&(r[jm]=this.appCheckToken),typeof location<"u"&&location.hostname&&wC.test(location.hostname)&&(r[yC]=vC);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zi.forceAllow_=!0}static forceDisallow(){Zi.forceDisallow_=!0}static isAvailable(){return Zi.forceAllow_?!0:!Zi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$V()&&!zV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=UI(n),s=pC(r,c4);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[l4]="t",r[CC]=e,r[NC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class J_{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=MV(),window[n4+this.uniqueCallbackIdentifier]=e,window[r4+this.uniqueCallbackIdentifier]=n,this.myIFrame=J_.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[CC]=this.myID,e[NC]=this.myPW,e[AC]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+RC+r.length<=kC;){const o=this.pendingSegs.shift();r=r+"&"+i4+s+"="+o.seg+"&"+o4+s+"="+o.ts+"&"+a4+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(u4)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const h4=16384,f4=45e3;let kd=null;typeof MozWebSocket<"u"?kd=MozWebSocket:typeof WebSocket<"u"&&(kd=WebSocket);class In{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pc(this.connId),this.stats_=Y_(n),this.connURL=In.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[gC]=Q_,typeof location<"u"&&location.hostname&&wC.test(location.hostname)&&(o[yC]=vC),n&&(o[_C]=n),r&&(o[xC]=r),s&&(o[jm]=s),i&&(o[EC]=i),bC(e,TC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;wP(),this.mySock=new kd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){In.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kd!==null&&!In.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Al(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pC(n,h4);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(f4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}In.responsesRequiredToBeHealthy=2;In.healthyTimeout=3e4;/**
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
 */class Ul{static get ALL_TRANSPORTS(){return[Zi,In]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=In&&In.isAvailable();let r=n&&!In.previouslyFailed();if(e.webSocketOnly&&(n||Gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[In];else{const s=this.transports_=[];for(const i of Ul.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ul.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ul.globalTransportInitialized_=!1;/**
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
 */const p4=6e4,m4=5e3,g4=10*1024,_4=100*1024,ip="t",Nx="d",y4="s",Ax="r",v4="e",kx="o",Rx="a",Px="n",Dx="p",w4="h";class x4{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pc("c:"+this.id+":"),this.transportManager_=new Ul(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=sl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>g4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ip in e){const n=e[ip];n===Rx?this.upgradeIfSecondaryHealthy_():n===Ax?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===kx&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Dx,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rx,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Px,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ia(ip,e);if(Nx in e){const r=e[Nx];if(n===w4){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Px){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===y4?this.onConnectionShutdown_(r):n===Ax?this.onReset_(r):n===v4?Lm("Server Error: "+r):n===kx?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Q_!==r&&Gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),sl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(p4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(m4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Dx,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class PC{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class DC{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Rd extends DC{static getInstance(){return new Rd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ox=32,Lx=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ee("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function As(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function X_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function E4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function OC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ee(n,0)}function ie(t){return t.pieceNum_>=t.pieces_.length}function Ot(t,e){const n=ce(t),r=ce(e);if(n===null)return e;if(n===r)return Ot(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function T4(t,e){const n=Bl(t,0),r=Bl(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Ai(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function LC(t,e){if(As(t)!==As(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(As(t)>As(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class I4{constructor(e,n){this.errorPrefix_=n,this.parts_=Bl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=uh(this.parts_[r]);jC(this)}}function S4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=uh(e),jC(t)}function b4(t){const e=t.parts_.pop();t.byteLength_-=uh(e),t.parts_.length>0&&(t.byteLength_-=1)}function jC(t){if(t.byteLength_>Lx)throw new Error(t.errorPrefix_+"has a key path longer than "+Lx+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ox)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ox+") or object contains a cycle "+Ys(t))}function Ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Z_ extends DC{static getInstance(){return new Z_}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Sa=1e3,C4=60*5*1e3,jx=30*1e3,N4=1.3,A4=3e4,k4="server_kill",Mx=3;class yr extends PC{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=yr.nextPersistentConnectionId_++,this.log_=pc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sa,this.maxReconnectDelay_=C4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Z_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(nt(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new cr,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;yr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tr(e,"w")){const r=Io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jx)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lm("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>A4&&(this.reconnectDelay_=Sa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*N4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+yr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(p){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(p)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=m&&m.token,a=new x4(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Gt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(k4)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Gt(p),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],od(this.interruptReasons_)&&(this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>K_(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Mx&&(this.reconnectDelay_=jx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Mx&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dC.replace(/\./g,"-")]=1,Zg()?e["framework.cordova"]=1:qI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rd.getInstance().currentlyOnline();return od(this.interruptReasons_)&&e}}yr.nextPersistentConnectionId_=0;yr.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class Lh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(Do,e),s=new oe(Do,n);return this.compare(r,s)!==0}minPost(){return oe.MIN}}/**
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
 */let tu;class MC extends Lh{static get __EMPTY_NODE(){return tu}static set __EMPTY_NODE(e){tu=e}compare(e,n){return Ai(e.name,n.name)}isDefinedOn(e){throw Bo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(vi,tu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,tu)}toString(){return".key"}}const go=new MC;/**
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
 */class nu{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??zt.EMPTY_NODE,this.right=i??zt.EMPTY_NODE}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return zt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class R4{copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new nu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new nu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new nu(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new R4;/**
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
 */function P4(t,e){return Ai(t.name,e.name)}function ey(t,e){return Ai(t,e)}/**
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
 */let Mm;function D4(t){Mm=t}const VC=function(t){return typeof t=="number"?"number:"+mC(t):"string:"+t},FC=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else B(t===Mm||t.isEmpty(),"priority of unexpected type.");B(t===Mm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vx;class lt{static set __childrenNodeConstructor(e){Vx=e}static get __childrenNodeConstructor(){return Vx}constructor(e,n=lt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),FC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new lt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ie(e)?this:ce(e)===".priority"?this.priorityNode_:lt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:lt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||As(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,lt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mC(this.value_):e+=this.value_,this.lazyHash_=fC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===lt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof lt.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=lt.VALUE_TYPE_ORDER.indexOf(n),i=lt.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}lt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let UC,BC;function O4(t){UC=t}function L4(t){BC=t}class j4 extends Lh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ai(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(vi,new lt("[PRIORITY-POST]",BC))}makePost(e,n){const r=UC(e);return new oe(n,new lt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new j4;/**
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
 */const M4=Math.log(2);class V4{constructor(e){const n=i=>parseInt(Math.log(i)/M4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pd=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let p,m;if(h===0)return null;if(h===1)return p=t[l],m=n?n(p):p,new dt(m,p.node,dt.BLACK,null,null);{const _=parseInt(h/2,10)+l,C=s(l,_),A=s(_+1,u);return p=t[_],m=n?n(p):p,new dt(m,p.node,dt.BLACK,C,A)}},i=function(l){let u=null,h=null,p=t.length;const m=function(C,A){const R=p-C,S=p;p-=C;const E=s(R+1,S),x=t[R],D=n?n(x):x;_(new dt(D,x.node,A,null,E))},_=function(C){u?(u.left=C,u=C):(h=C,u=C)};for(let C=0;C<l.count;++C){const A=l.nextBitIsOne(),R=Math.pow(2,l.count-(C+1));A?m(R,dt.BLACK):(m(R,dt.BLACK),m(R,dt.RED))}return h},o=new V4(t.length),a=i(o);return new zt(r||e,a)};/**
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
 */let op;const Li={};class pr{static get Default(){return B(Li&&Le,"ChildrenNode.ts has not been loaded"),op=op||new pr({".priority":Li},{".priority":Le}),op}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(oe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Pd(r,e.getCompare()):a=Li;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new pr(h,u)}addToIndexes(e,n){const r=ad(this.indexes_,(s,i)=>{const o=Io(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Pd(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new pr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ad(this.indexes_,s=>{if(s===Li)return s;{const i=n.get(e.name);return i?s.remove(new oe(e.name,i)):s}});return new pr(r,this.indexSet_)}}/**
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
 */let ba;class X{static get EMPTY_NODE(){return ba||(ba=new X(new zt(ey),null,pr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&FC(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ba}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ba:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ba:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=ce(e);if(r===null)return n;{B(ce(e)!==".priority"||As(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VC(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":fC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new oe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mc?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),s=n.getIterator(Le);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class F4 extends X{constructor(){super(new zt(ey),X.EMPTY_NODE,pr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const mc=new F4;Object.defineProperties(oe,{MIN:{value:new oe(Do,X.EMPTY_NODE)},MAX:{value:new oe(vi,mc)}});MC.__EMPTY_NODE=X.EMPTY_NODE;lt.__childrenNodeConstructor=X;D4(mc);L4(mc);/**
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
 */const U4=!0;function qe(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new lt(n,qe(e))}if(!(t instanceof Array)&&U4){const n=[];let r=!1;if(At(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return X.EMPTY_NODE;const i=Pd(n,P4,o=>o.name,ey);if(r){const o=Pd(n,Le.getCompare());return new X(i,qe(e),new pr({".priority":o},{".priority":Le}))}else return new X(i,qe(e),pr.Default)}else{let n=X.EMPTY_NODE;return At(t,(r,s)=>{if(tr(t,r)&&r.substring(0,1)!=="."){const i=qe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(qe(e))}}O4(qe);/**
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
 */class B4 extends Lh{constructor(e){super(),this.indexPath_=e,B(!ie(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ai(e.name,n.name):i}makePost(e,n){const r=qe(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,mc);return new oe(vi,e)}toString(){return Bl(this.indexPath_,0).join("/")}}/**
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
 */class $4 extends Lh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ai(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=qe(e);return new oe(n,r)}toString(){return".value"}}const z4=new $4;/**
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
 */function $C(t){return{type:"value",snapshotNode:t}}function Oo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $l(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function W4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ty{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange($l(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Oo(n,r)):o.trackChildChange(zl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(s,i)=>{n.hasChild(s)||r.trackChildChange($l(s,i))}),n.isLeafNode()||n.forEachChild(Le,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(zl(s,i,o))}else r.trackChildChange(Oo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Wl{constructor(e){this.indexedFilter_=new ty(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wl.getStartPost_(e),this.endPost_=Wl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new oe(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(Le,(o,a)=>{i.matches(new oe(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class q4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Wl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new oe(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const p=this.index_.getCompare();o=(m,_)=>p(_,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new oe(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const p=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(h&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(zl(n,r,p)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange($l(n,p));const A=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Oo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange($l(u.name,u.node)),i.trackChildChange(Oo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
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
 */class ny{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Do}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new ny;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function H4(t){return t.loadsAllData()?new ty(t.getIndex()):t.hasLimit()?new q4(t):new Wl(t)}function Fx(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===z4?n="$value":t.index_===go?n="$key":(B(t.index_ instanceof B4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ux(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
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
 */class Dd extends PC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=pc("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Dd.getListenId_(e,r),a={};this.listens_[o]=a;const l=Fx(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let p=h;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(i,p,!1,r),Io(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=Dd.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Fx(e._queryParams),r=e._path.toString(),s=new cr;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Al(a.responseText)}catch{Gt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Gt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class G4{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Od(){return{value:null,children:new Map}}function Jo(t,e,n){if(ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ce(e);t.children.has(r)||t.children.set(r,Od());const s=t.children.get(r);e=Se(e),Jo(s,e,n)}}function Vm(t,e){if(ie(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Le,(r,s)=>{Jo(t,new Ee(r),s)}),Vm(t,e)}}else if(t.children.size>0){const n=ce(e);return e=Se(e),t.children.has(n)&&Vm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Fm(t,e,n){t.value!==null?n(e,t.value):K4(t,(r,s)=>{const i=new Ee(e.toString()+"/"+r);Fm(s,i,n)})}function K4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Q4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&At(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const Bx=10*1e3,Y4=30*1e3,J4=5*60*1e3;class X4{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Q4(e);const r=Bx+(Y4-Bx)*Math.random();sl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;At(e,(s,i)=>{i>0&&tr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),sl(this.reportStats_.bind(this),Math.floor(Math.random()*2*J4))}}/**
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
 */var bn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(bn||(bn={}));function zC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ry(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ld{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=bn.ACK_USER_WRITE,this.source=zC()}operationForChild(e){if(ie(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new Ld(me(),n,this.revert)}}else return B(ce(this.path)===e,"operationForChild called for unrelated child."),new Ld(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class ql{constructor(e,n){this.source=e,this.path=n,this.type=bn.LISTEN_COMPLETE}operationForChild(e){return ie(this.path)?new ql(this.source,me()):new ql(this.source,Se(this.path))}}/**
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
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=bn.OVERWRITE}operationForChild(e){return ie(this.path)?new wi(this.source,me(),this.snap.getImmediateChild(e)):new wi(this.source,Se(this.path),this.snap)}}/**
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
 */class Hl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=bn.MERGE}operationForChild(e){if(ie(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new wi(this.source,me(),n.value):new Hl(this.source,me(),n)}else return B(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hl(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ks{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Z4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eF(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(W4(o.childName,o.snapshotNode))}),Ca(t,s,"child_removed",e,r,n),Ca(t,s,"child_added",e,r,n),Ca(t,s,"child_moved",i,r,n),Ca(t,s,"child_changed",e,r,n),Ca(t,s,"value",e,r,n),s}function Ca(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>nF(t,a,l)),o.forEach(a=>{const l=tF(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function tF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function nF(t,e,n){if(e.childName==null||n.childName==null)throw Bo("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),s=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function jh(t,e){return{eventCache:t,serverCache:e}}function il(t,e,n,r){return jh(new ks(e,n,r),t.serverCache)}function WC(t,e,n,r){return jh(t.eventCache,new ks(e,n,r))}function jd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ap;const rF=()=>(ap||(ap=new zt(BV)),ap);class Re{static fromObject(e){let n=new Re(null);return At(e,(r,s)=>{n=n.set(new Ee(r),s)}),n}constructor(e,n=rF()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ie(e))return null;{const r=ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Se(e),n);return i!=null?{path:He(new Ee(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ie(e))return this;{const n=ce(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new Re(null)}}set(e,n){if(ie(e))return new Re(n,this.children);{const r=ce(e),i=(this.children.get(r)||new Re(null)).set(Se(e),n),o=this.children.insert(r,i);return new Re(this.value,o)}}remove(e){if(ie(e))return this.children.isEmpty()?new Re(null):new Re(null,this.children);{const n=ce(e),r=this.children.get(n);if(r){const s=r.remove(Se(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Re(null):new Re(this.value,i)}else return this}}get(e){if(ie(e))return this.value;{const n=ce(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(ie(e))return n;{const r=ce(e),i=(this.children.get(r)||new Re(null)).setTree(Se(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Re(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(He(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ie(e))return null;{const i=ce(e),o=this.children.get(i);return o?o.findOnPath_(Se(e),He(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(ie(e))return this;{this.value&&r(n,this.value);const s=ce(e),i=this.children.get(s);return i?i.foreachOnPath_(Se(e),He(n,s),r):new Re(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new Re(null))}}function ol(t,e,n){if(ie(e))return new kn(new Re(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ot(s,e);return i=i.updateChild(o,n),new kn(t.writeTree_.set(s,i))}else{const s=new Re(n),i=t.writeTree_.setTree(e,s);return new kn(i)}}}function $x(t,e,n){let r=t;return At(n,(s,i)=>{r=ol(r,He(e,s),i)}),r}function zx(t,e){if(ie(e))return kn.empty();{const n=t.writeTree_.setTree(e,new Re(null));return new kn(n)}}function Um(t,e){return ki(t,e)!=null}function ki(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ot(n.path,e)):null}function Wx(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,s)=>{e.push(new oe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new oe(r,s.value))}),e}function ys(t,e){if(ie(e))return t;{const n=ki(t,e);return n!=null?new kn(new Re(n)):new kn(t.writeTree_.subtree(e))}}function Bm(t){return t.writeTree_.isEmpty()}function Lo(t,e){return qC(me(),t.writeTree_,e)}function qC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=qC(He(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
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
 */function Mh(t,e){return QC(e,t)}function sF(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ol(t.visibleWrites,e,n)),t.lastWriteId=r}function iF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function oF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&aF(a,r.path)?s=!1:hn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return lF(t),!0;if(r.snap)t.visibleWrites=zx(t.visibleWrites,r.path);else{const a=r.children;At(a,l=>{t.visibleWrites=zx(t.visibleWrites,He(r.path,l))})}return!0}else return!1}function aF(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(He(t.path,n),e))return!0;return!1}function lF(t){t.visibleWrites=HC(t.allWrites,cF,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cF(t){return t.visible}function HC(t,e,n){let r=kn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)hn(n,o)?(a=Ot(n,o),r=ol(r,a,i.snap)):hn(o,n)&&(a=Ot(o,n),r=ol(r,me(),i.snap.getChild(a)));else if(i.children){if(hn(n,o))a=Ot(n,o),r=$x(r,a,i.children);else if(hn(o,n))if(a=Ot(o,n),ie(a))r=$x(r,me(),i.children);else{const l=Io(i.children,ce(a));if(l){const u=l.getChild(Se(a));r=ol(r,me(),u)}}}else throw Bo("WriteRecord should have .snap or .children")}}return r}function GC(t,e,n,r,s){if(!r&&!s){const i=ki(t.visibleWrites,e);if(i!=null)return i;{const o=ys(t.visibleWrites,e);if(Bm(o))return n;if(n==null&&!Um(o,me()))return null;{const a=n||X.EMPTY_NODE;return Lo(o,a)}}}else{const i=ys(t.visibleWrites,e);if(!s&&Bm(i))return n;if(!s&&n==null&&!Um(i,me()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(hn(u.path,e)||hn(e,u.path))},a=HC(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Lo(a,l)}}}function uF(t,e,n){let r=X.EMPTY_NODE;const s=ki(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Le,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=ys(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=Lo(ys(i,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),Wx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ys(t.visibleWrites,e);return Wx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function dF(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=He(e,n);if(Um(t.visibleWrites,i))return null;{const o=ys(t.visibleWrites,i);return Bm(o)?s.getChild(n):Lo(o,s.getChild(n))}}function hF(t,e,n,r){const s=He(e,n),i=ki(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=ys(t.visibleWrites,s);return Lo(o,r.getNode().getImmediateChild(n))}else return null}function fF(t,e){return ki(t.visibleWrites,e)}function pF(t,e,n,r,s,i,o){let a;const l=ys(t.visibleWrites,e),u=ki(l,me());if(u!=null)a=u;else if(n!=null)a=Lo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],p=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<s;)p(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function mF(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function Md(t,e,n,r){return GC(t.writeTree,t.treePath,e,n,r)}function iy(t,e){return uF(t.writeTree,t.treePath,e)}function qx(t,e,n,r){return dF(t.writeTree,t.treePath,e,n,r)}function Vd(t,e){return fF(t.writeTree,He(t.treePath,e))}function gF(t,e,n,r,s,i){return pF(t.writeTree,t.treePath,e,n,r,s,i)}function oy(t,e,n){return hF(t.writeTree,t.treePath,e,n)}function KC(t,e){return QC(He(t.treePath,e),t.writeTree)}function QC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class _F{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,zl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,$l(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Oo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,zl(r,e.snapshotNode,s.oldSnap));else throw Bo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const YC=new yF;class ay{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ks(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xi(this.viewCache_),i=gF(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function vF(t){return{filter:t}}function wF(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function xF(t,e,n,r,s){const i=new _F;let o,a;if(n.type===bn.OVERWRITE){const u=n;u.source.fromUser?o=$m(t,e,u.path,u.snap,r,s,i):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!ie(u.path),o=Fd(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===bn.MERGE){const u=n;u.source.fromUser?o=TF(t,e,u.path,u.children,r,s,i):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=zm(t,e,u.path,u.children,r,s,a,i))}else if(n.type===bn.ACK_USER_WRITE){const u=n;u.revert?o=bF(t,e,u.path,r,s,i):o=IF(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===bn.LISTEN_COMPLETE)o=SF(t,e,n.path,r,i);else throw Bo("Unknown operation type: "+n.type);const l=i.getChanges();return EF(e,o,l),{viewCache:o,changes:l}}function EF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=jd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push($C(jd(e)))}}function JC(t,e,n,r,s,i){const o=e.eventCache;if(Vd(r,n)!=null)return e;{let a,l;if(ie(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xi(e),h=u instanceof X?u:X.EMPTY_NODE,p=iy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const u=Md(r,xi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ce(n);if(u===".priority"){B(As(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const p=qx(r,n,h,l);p!=null?a=t.filter.updatePriority(h,p):a=o.getNode()}else{const h=Se(n);let p;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=qx(r,n,o.getNode(),l);m!=null?p=o.getNode().getImmediateChild(u).updateChild(h,m):p=o.getNode().getImmediateChild(u)}else p=oy(r,u,e.serverCache);p!=null?a=t.filter.updateChild(o.getNode(),u,p,h,s,i):a=o.getNode()}}return il(e,a,o.isFullyInitialized()||ie(n),t.filter.filtersNodes())}}function Fd(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(ie(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),_,null)}else{const _=ce(n);if(!l.isCompleteForPath(n)&&As(n)>1)return e;const C=Se(n),R=l.getNode().getImmediateChild(_).updateChild(C,r);_===".priority"?u=h.updatePriority(l.getNode(),R):u=h.updateChild(l.getNode(),_,R,C,YC,null)}const p=WC(e,u,l.isFullyInitialized()||ie(n),h.filtersNodes()),m=new ay(s,p,i);return JC(t,p,n,s,m,a)}function $m(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new ay(s,e,i);if(ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=il(e,u,!0,t.filter.filtersNodes());else{const p=ce(n);if(p===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=il(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Se(n),_=a.getNode().getImmediateChild(p);let C;if(ie(m))C=r;else{const A=h.getCompleteChild(p);A!=null?X_(m)===".priority"&&A.getChild(OC(m)).isEmpty()?C=A:C=A.updateChild(m,r):C=X.EMPTY_NODE}if(_.equals(C))l=e;else{const A=t.filter.updateChild(a.getNode(),p,C,m,h,o);l=il(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Hx(t,e){return t.eventCache.isCompleteForChild(e)}function TF(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=He(n,l);Hx(e,ce(h))&&(a=$m(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=He(n,l);Hx(e,ce(h))||(a=$m(t,a,h,u,s,i,o))}),a}function Gx(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function zm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;ie(n)?u=r:u=new Re(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((p,m)=>{if(h.hasChild(p)){const _=e.serverCache.getNode().getImmediateChild(p),C=Gx(t,_,m);l=Fd(t,l,new Ee(p),C,s,i,o,a)}}),u.children.inorderTraversal((p,m)=>{const _=!e.serverCache.isCompleteForChild(p)&&m.value===null;if(!h.hasChild(p)&&!_){const C=e.serverCache.getNode().getImmediateChild(p),A=Gx(t,C,m);l=Fd(t,l,new Ee(p),A,s,i,o,a)}}),l}function IF(t,e,n,r,s,i,o){if(Vd(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fd(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ie(n)){let u=new Re(null);return l.getNode().forEachChild(go,(h,p)=>{u=u.set(new Ee(h),p)}),zm(t,e,n,u,s,i,a,o)}else return e}else{let u=new Re(null);return r.foreach((h,p)=>{const m=He(n,h);l.isCompleteForPath(m)&&(u=u.set(h,l.getNode().getChild(m)))}),zm(t,e,n,u,s,i,a,o)}}function SF(t,e,n,r,s){const i=e.serverCache,o=WC(e,i.getNode(),i.isFullyInitialized()||ie(n),i.isFiltered());return JC(t,o,n,r,YC,s)}function bF(t,e,n,r,s,i){let o;if(Vd(r,n)!=null)return e;{const a=new ay(r,e,s),l=e.eventCache.getNode();let u;if(ie(n)||ce(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Md(r,xi(e));else{const p=e.serverCache.getNode();B(p instanceof X,"serverChildren would be complete if leaf node"),h=iy(r,p)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=ce(n);let p=oy(r,h,e.serverCache);p==null&&e.serverCache.isCompleteForChild(h)&&(p=l.getImmediateChild(h)),p!=null?u=t.filter.updateChild(l,h,p,Se(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,X.EMPTY_NODE,Se(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Md(r,xi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Vd(r,me())!=null,il(e,u,o,t.filter.filtersNodes())}}/**
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
 */class CF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ty(r.getIndex()),i=H4(r);this.processor_=vF(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new ks(l,o.isFullyInitialized(),s.filtersNodes()),p=new ks(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=jh(p,h),this.eventGenerator_=new Z4(this.query_)}get query(){return this.query_}}function NF(t){return t.viewCache_.serverCache.getNode()}function AF(t){return jd(t.viewCache_)}function kF(t,e){const n=xi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ie(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function Kx(t){return t.eventRegistrations_.length===0}function RF(t,e){t.eventRegistrations_.push(e)}function Qx(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Yx(t,e,n,r){e.type===bn.MERGE&&e.source.queryId!==null&&(B(xi(t.viewCache_),"We should always have a full cache before handling merges"),B(jd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=xF(t.processor_,s,e,n,r);return wF(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,XC(t,i.changes,i.viewCache.eventCache.getNode(),null)}function PF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(i,o)=>{r.push(Oo(i,o))}),n.isFullyInitialized()&&r.push($C(n.getNode())),XC(t,r,n.getNode(),e)}function XC(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return eF(t.eventGenerator_,e,n,s)}/**
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
 */let Ud;class ZC{constructor(){this.views=new Map}}function DF(t){B(!Ud,"__referenceConstructor has already been defined"),Ud=t}function OF(){return B(Ud,"Reference.ts has not been loaded"),Ud}function LF(t){return t.views.size===0}function ly(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),Yx(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Yx(o,e,n,r));return i}}function eN(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Md(n,s?r:null),l=!1;a?l=!0:r instanceof X?(a=iy(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=jh(new ks(a,l,!1),new ks(r,s,!1));return new CF(e,u)}return o}function jF(t,e,n,r,s,i){const o=eN(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RF(o,n),PF(o,n)}function MF(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Rs(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(Qx(u,n,r)),Kx(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(Qx(l,n,r)),Kx(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Rs(t)&&i.push(new(OF())(e._repo,e._path)),{removed:i,events:o}}function tN(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vs(t,e){let n=null;for(const r of t.views.values())n=n||kF(r,e);return n}function nN(t,e){if(e._queryParams.loadsAllData())return Vh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rN(t,e){return nN(t,e)!=null}function Rs(t){return Vh(t)!=null}function Vh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Bd;function VF(t){B(!Bd,"__referenceConstructor has already been defined"),Bd=t}function FF(){return B(Bd,"Reference.ts has not been loaded"),Bd}let UF=1;class Jx{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Re(null),this.pendingWriteTree_=mF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sN(t,e,n,r,s){return sF(t.pendingWriteTree_,e,n,r,s),s?_c(t,new wi(zC(),e,n)):[]}function ni(t,e,n=!1){const r=iF(t.pendingWriteTree_,e);if(oF(t.pendingWriteTree_,e)){let i=new Re(null);return r.snap!=null?i=i.set(me(),!0):At(r.children,o=>{i=i.set(new Ee(o),!0)}),_c(t,new Ld(r.path,i,n))}else return[]}function gc(t,e,n){return _c(t,new wi(ry(),e,n))}function BF(t,e,n){const r=Re.fromObject(n);return _c(t,new Hl(ry(),e,r))}function $F(t,e){return _c(t,new ql(ry(),e))}function zF(t,e,n){const r=uy(t,n);if(r){const s=dy(r),i=s.path,o=s.queryId,a=Ot(i,e),l=new ql(sy(o),a);return hy(t,i,l)}else return[]}function iN(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||rN(o,e))){const l=MF(o,e,n,r);LF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const h=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,p=t.syncPointTree_.findOnPath(i,(m,_)=>Rs(_));if(h&&!p){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=GF(m);for(let C=0;C<_.length;++C){const A=_[C],R=A.query,S=cN(t,A);t.listenProvider_.startListening(al(R),Gl(t,R),S.hashFn,S.onComplete)}}}!p&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(al(e),null):u.forEach(m=>{const _=t.queryToTagMap.get(Fh(m));t.listenProvider_.stopListening(al(m),_)}))}KF(t,u)}return a}function oN(t,e,n,r){const s=uy(t,r);if(s!=null){const i=dy(s),o=i.path,a=i.queryId,l=Ot(o,e),u=new wi(sy(a),l,n);return hy(t,o,u)}else return[]}function WF(t,e,n,r){const s=uy(t,r);if(s){const i=dy(s),o=i.path,a=i.queryId,l=Ot(o,e),u=Re.fromObject(n),h=new Hl(sy(a),l,u);return hy(t,o,h)}else return[]}function qF(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const C=Ot(m,s);i=i||vs(_,C),o=o||Rs(_)});let a=t.syncPointTree_.get(s);a?(o=o||Rs(a),i=i||vs(a,me())):(a=new ZC,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,C)=>{const A=vs(C,me());A&&(i=i.updateImmediateChild(_,A))}));const u=rN(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=Fh(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=QF();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=Mh(t.pendingWriteTree_,s);let p=jF(a,e,n,h,i,l);if(!u&&!o&&!r){const m=nN(a,e);p=p.concat(YF(t,e,m))}return p}function cy(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ot(o,e),u=vs(a,l);if(u)return u});return GC(s,e,i,n,!0)}function HF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const p=Ot(u,n);r=r||vs(h,p)});let s=t.syncPointTree_.get(n);s?r=r||vs(s,me()):(s=new ZC,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new ks(r,!0,!1):null,a=Mh(t.pendingWriteTree_,e._path),l=eN(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return AF(l)}function _c(t,e){return aN(e,t.syncPointTree_,null,Mh(t.pendingWriteTree_,me()))}function aN(t,e,n,r){if(ie(t.path))return lN(t,e,n,r);{const s=e.get(me());n==null&&s!=null&&(n=vs(s,me()));let i=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=KC(r,o);i=i.concat(aN(a,l,u,h))}return s&&(i=i.concat(ly(s,t,r,n))),i}}function lN(t,e,n,r){const s=e.get(me());n==null&&s!=null&&(n=vs(s,me()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=KC(r,o),h=t.operationForChild(o);h&&(i=i.concat(lN(h,a,l,u)))}),s&&(i=i.concat(ly(s,t,r,n))),i}function cN(t,e){const n=e.query,r=Gl(t,n);return{hashFn:()=>(NF(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?zF(t,n._path,r):$F(t,n._path);{const i=WV(s,n);return iN(t,n,null,i)}}}}function Gl(t,e){const n=Fh(e);return t.queryToTagMap.get(n)}function Fh(t){return t._path.toString()+"$"+t._queryIdentifier}function uy(t,e){return t.tagToQueryMap.get(e)}function dy(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function hy(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Mh(t.pendingWriteTree_,e);return ly(r,n,s,null)}function GF(t){return t.fold((e,n,r)=>{if(n&&Rs(n))return[Vh(n)];{let s=[];return n&&(s=tN(n)),At(r,(i,o)=>{s=s.concat(o)}),s}})}function al(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(FF())(t._repo,t._path):t}function KF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Fh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function QF(){return UF++}function YF(t,e,n){const r=e._path,s=Gl(t,e),i=cN(t,n),o=t.listenProvider_.startListening(al(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!Rs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,p)=>{if(!ie(u)&&h&&Rs(h))return[Vh(h).query];{let m=[];return h&&(m=m.concat(tN(h).map(_=>_.query))),At(p,(_,C)=>{m=m.concat(C)}),m}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(al(h),Gl(t,h))}}return o}/**
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
 */class fy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fy(n)}node(){return this.node_}}class py{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new py(this.syncTree_,n)}node(){return cy(this.syncTree_,this.path_)}}const JF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Xx=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ZF(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},ZF=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},e3=function(t,e,n,r){return my(e,new py(n,t),r)},uN=function(t,e,n){return my(t,new fy(e),n)};function my(t,e,n){const r=t.getPriority().val(),s=Xx(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=Xx(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new lt(a,qe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new lt(s))),o.forEachChild(Le,(a,l)=>{const u=my(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class gy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _y(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,s=ce(n);for(;s!==null;){const i=Io(r.node.children,s)||{children:{},childCount:0};r=new gy(s,r,i),n=Se(n),s=ce(n)}return r}function Xo(t){return t.node.value}function dN(t,e){t.node.value=e,Wm(t)}function hN(t){return t.node.childCount>0}function t3(t){return Xo(t)===void 0&&!hN(t)}function Uh(t,e){At(t.node.children,(n,r)=>{e(new gy(n,t,r))})}function fN(t,e,n,r){n&&e(t),Uh(t,s=>{fN(s,e,!0)})}function n3(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function yc(t){return new Ee(t.parent===null?t.name:yc(t.parent)+"/"+t.name)}function Wm(t){t.parent!==null&&r3(t.parent,t.name,t)}function r3(t,e,n){const r=t3(n),s=tr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Wm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Wm(t))}/**
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
 */const s3=/[\[\].#$\/\u0000-\u001F\u007F]/,i3=/[\[\].#$\u0000-\u001F\u007F]/,lp=10*1024*1024,yy=function(t){return typeof t=="string"&&t.length!==0&&!s3.test(t)},pN=function(t){return typeof t=="string"&&t.length!==0&&!i3.test(t)},o3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pN(t)},mN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Oh(t)||t&&typeof t=="object"&&tr(t,".sv")},qm=function(t,e,n,r){Bh(So(t,"value"),e,n)},Bh=function(t,e,n){const r=n instanceof Ee?new I4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ys(r)+" with contents = "+e.toString());if(Oh(e))throw new Error(t+"contains "+e.toString()+" "+Ys(r));if(typeof e=="string"&&e.length>lp/3&&uh(e)>lp)throw new Error(t+"contains a string greater than "+lp+" utf8 bytes "+Ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(At(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!yy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);S4(r,o),Bh(t,a,r),b4(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ys(r)+" in addition to actual children.")}},a3=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Bl(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!yy(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(T4);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&hn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},l3=function(t,e,n,r){const s=So(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];At(e,(o,a)=>{const l=new Ee(o);if(Bh(s,a,He(n,l)),X_(l)===".priority"&&!mN(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),a3(s,i)},c3=function(t,e,n){if(Oh(e))throw new Error(So(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!mN(e))throw new Error(So(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},gN=function(t,e,n,r){if(!pN(n))throw new Error(So(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},u3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gN(t,e,n)},eo=function(t,e){if(ce(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},d3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!o3(n))throw new Error(So(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class h3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _N(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!LC(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Xn(t,e,n){_N(t,n),f3(t,r=>hn(r,e)||hn(e,r))}function f3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(p3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function p3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();rl&&mt("event: "+n.toString()),Yo(r)}}}/**
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
 */const m3="repo_interrupt",g3=25;class _3{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new h3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Od(),this.transactionQueueTree_=new gy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function y3(t,e,n){if(t.stats_=Y_(t.repoInfo_),t.forceRestClient_||KV())t.server_=new Dd(t.repoInfo_,(r,s,i,o)=>{Zx(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>eE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new yr(t.repoInfo_,e,(r,s,i,o)=>{Zx(t,r,s,i,o)},r=>{eE(t,r)},r=>{w3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZV(t.repoInfo_,()=>new X4(t.stats_,t.server_)),t.infoData_=new G4,t.infoSyncTree_=new Jx({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=gc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wy(t,"connected",!1),t.serverSyncTree_=new Jx({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function v3(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vy(t){return JF({timestamp:v3(t)})}function Zx(t,e,n,r,s){t.dataUpdateCount++;const i=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=ad(n,u=>qe(u));o=WF(t.serverSyncTree_,i,l,s)}else{const l=qe(n);o=oN(t.serverSyncTree_,i,l,s)}else if(r){const l=ad(n,u=>qe(u));o=BF(t.serverSyncTree_,i,l)}else{const l=qe(n);o=gc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=zh(t,i)),Xn(t.eventQueue_,a,o)}function eE(t,e){wy(t,"connected",e),e===!1&&T3(t)}function w3(t,e){At(e,(n,r)=>{wy(t,n,r)})}function wy(t,e,n){const r=new Ee("/.info/"+e),s=qe(n);t.infoData_.updateSnapshot(r,s);const i=gc(t.infoSyncTree_,r,s);Xn(t.eventQueue_,r,i)}function yN(t){return t.nextWriteId_++}function x3(t,e,n){const r=HF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=qe(s).withIndex(e._queryParams.getIndex());qF(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=gc(t.serverSyncTree_,e._path,i);else{const a=Gl(t.serverSyncTree_,e);o=oN(t.serverSyncTree_,e._path,i,a)}return Xn(t.eventQueue_,e._path,o),iN(t.serverSyncTree_,e,n,null,!0),i},s=>($h(t,"get for query "+nt(e)+" failed: "+s),Promise.reject(new Error(s))))}function E3(t,e,n,r,s){$h(t,"set",{path:e.toString(),value:n,priority:r});const i=vy(t),o=qe(n,r),a=cy(t.serverSyncTree_,e),l=uN(o,a,i),u=yN(t),h=sN(t.serverSyncTree_,e,l,u,!0);_N(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const C=m==="ok";C||Gt("set at "+e+" failed: "+m);const A=ni(t.serverSyncTree_,u,!C);Xn(t.eventQueue_,e,A),jo(t,s,m,_)});const p=TN(t,e);zh(t,p),Xn(t.eventQueue_,p,[])}function T3(t){$h(t,"onDisconnectEvents");const e=vy(t),n=Od();Fm(t.onDisconnect_,me(),(s,i)=>{const o=e3(s,i,t.serverSyncTree_,e);Jo(n,s,o)});let r=[];Fm(n,me(),(s,i)=>{r=r.concat(gc(t.serverSyncTree_,s,i));const o=TN(t,s);zh(t,o)}),t.onDisconnect_=Od(),Xn(t.eventQueue_,me(),r)}function I3(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Vm(t.onDisconnect_,e),jo(t,n,r,s)})}function tE(t,e,n,r){const s=qe(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Jo(t.onDisconnect_,e,s),jo(t,r,i,o)})}function S3(t,e,n,r,s){const i=qe(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Jo(t.onDisconnect_,e,i),jo(t,s,o,a)})}function b3(t,e,n,r){if(od(n)){mt("onDisconnect().update() called with empty data.  Don't do anything."),jo(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&At(n,(o,a)=>{const l=qe(a);Jo(t.onDisconnect_,He(e,o),l)}),jo(t,r,s,i)})}function C3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(m3)}function $h(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function jo(t,e,n,r){e&&Yo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function vN(t,e,n){return cy(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function xy(t,e=t.transactionQueueTree_){if(e||Wh(t,e),Xo(e)){const n=xN(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&N3(t,yc(e),n)}else hN(e)&&Uh(e,n=>{xy(t,n)})}function N3(t,e,n){const r=n.map(u=>u.currentWriteId),s=vN(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];B(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const p=Ot(e,h.path);i=i.updateChild(p,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{$h(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const p=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(ni(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&p.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Wh(t,_y(t.transactionQueueTree_,e)),xy(t,t.transactionQueueTree_),Xn(t.eventQueue_,e,h);for(let m=0;m<p.length;m++)Yo(p[m])}else{if(u==="datastale")for(let p=0;p<n.length;p++)n[p].status===3?n[p].status=4:n[p].status=0;else{Gt("transaction at "+l.toString()+" failed: "+u);for(let p=0;p<n.length;p++)n[p].status=4,n[p].abortReason=u}zh(t,e)}},o)}function zh(t,e){const n=wN(t,e),r=yc(n),s=xN(t,n);return A3(t,s,r),r}function A3(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ot(n,l.path);let h=!1,p;if(B(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,p=l.abortReason,s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=g3)h=!0,p="maxretry",s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else{const m=vN(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){Bh("transaction failed: Data returned ",_,l.path);let C=qe(_);typeof _=="object"&&_!=null&&tr(_,".priority")||(C=C.updatePriority(m.getPriority()));const R=l.currentWriteId,S=vy(t),E=uN(C,m,S);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=E,l.currentWriteId=yN(t),o.splice(o.indexOf(R),1),s=s.concat(sN(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(ni(t.serverSyncTree_,R,!0))}else h=!0,p="nodata",s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0))}Xn(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(p==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(p),!1,null))))}Wh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Yo(r[a]);xy(t,t.transactionQueueTree_)}function wN(t,e){let n,r=t.transactionQueueTree_;for(n=ce(e);n!==null&&Xo(r)===void 0;)r=_y(r,n),e=Se(e),n=ce(e);return r}function xN(t,e){const n=[];return EN(t,e,n),n.sort((r,s)=>r.order-s.order),n}function EN(t,e,n){const r=Xo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Uh(e,s=>{EN(t,s,n)})}function Wh(t,e){const n=Xo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,dN(e,n.length>0?n:void 0)}Uh(e,r=>{Wh(t,r)})}function TN(t,e){const n=yc(wN(t,e)),r=_y(t.transactionQueueTree_,e);return n3(r,s=>{cp(t,s)}),cp(t,r),fN(r,s=>{cp(t,s)}),n}function cp(t,e){const n=Xo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?dN(e,void 0):n.length=i+1,Xn(t.eventQueue_,yc(e),s);for(let o=0;o<r.length;o++)Yo(r[o])}}/**
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
 */function k3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function R3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Gt(`Invalid query segment '${n}' in query '${t}'`)}return e}const nE=function(t,e){const n=P3(t),r=n.namespace;n.domain==="firebase.com"&&Ar(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FV();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SC(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},P3=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let p=t.indexOf("?");p===-1&&(p=t.length),e=t.substring(0,Math.min(h,p)),h<p&&(s=k3(t.substring(h,p)));const m=R3(t.substring(Math.min(t.length,p)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class D3{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class O3{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class L3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class j3{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new cr;return I3(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){eo("OnDisconnect.remove",this._path);const e=new cr;return tE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){eo("OnDisconnect.set",this._path),qm("OnDisconnect.set",e,this._path);const n=new cr;return tE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){eo("OnDisconnect.setWithPriority",this._path),qm("OnDisconnect.setWithPriority",e,this._path),c3("OnDisconnect.setWithPriority",n);const r=new cr;return S3(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){eo("OnDisconnect.update",this._path),l3("OnDisconnect.update",e,this._path);const n=new cr;return b3(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ey{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ie(this._path)?null:X_(this._path)}get ref(){return new Dr(this._repo,this._path)}get _queryIdentifier(){const e=Ux(this._queryParams),n=K_(e);return n==="{}"?"default":n}get _queryObject(){return Ux(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof Ey))return!1;const n=this._repo===e._repo,r=LC(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+E4(this._path)}}class Dr extends Ey{constructor(e,n){super(e,n,new ny,!1)}get parent(){const e=OC(this._path);return e===null?null:new Dr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=Hm(this.ref,e);return new Kl(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Kl(s,Hm(this.ref,r),Le)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jr(t,e){return t=_e(t),t._checkNotDeleted("ref"),e!==void 0?Hm(t._root,e):t._root}function Hm(t,e){return t=_e(t),ce(t._path)===null?u3("child","path",e):gN("child","path",e),new Dr(t._repo,He(t._path,e))}function rE(t){return t=_e(t),new j3(t._repo,t._path)}function M3(t){return eo("remove",t._path),ll(t,null)}function ll(t,e){t=_e(t),eo("set",t._path),qm("set",e,t._path);const n=new cr;return E3(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function up(t){t=_e(t);const e=new L3(()=>{}),n=new Ty(e);return x3(t._repo,t,n).then(r=>new Kl(r,new Dr(t._repo,t._path),t._queryParams.getIndex()))}class Ty{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new D3("value",this,new Kl(e.snapshotNode,new Dr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new O3(this,e,n):null}matches(e){return e instanceof Ty?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}DF(Dr);VF(Dr);/**
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
 */const V3="FIREBASE_DATABASE_EMULATOR_HOST",Gm={};let F3=!1;function U3(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Zn(i);t.repoInfo_=new SC(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function B3(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nE(i,s),a=o.repoInfo,l;typeof process<"u"&&Ex&&(l=Ex[V3]),l?(i=`http://${l}?ns=${a.namespace}`,o=nE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new YV(t.name,t.options,e);d3("Invalid Firebase Database URL",o),ie(o.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const h=z3(a,t,u,new QV(t,n));return new W3(h,t)}function $3(t,e){const n=Gm[e];(!n||n[t.key]!==t)&&Ar(`Database ${e}(${t.repoInfo_}) has already been deleted.`),C3(t),delete n[t.key]}function z3(t,e,n,r){let s=Gm[e.name];s||(s={},Gm[e.name]=s);let i=s[t.toURLString()];return i&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new _3(t,F3,n,r),s[t.toURLString()]=i,i}class W3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(y3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dr(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&($3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}}function IN(t=hh(),e){const n=nc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jg("database");r&&q3(n,...r)}return n}function q3(t,e,n,r={}){t=_e(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Tr(r,i.repoInfo_.emulatorOptions))return;Ar("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ku(ku.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Xg(r.mockUserToken,t.app.options.projectId);o=new ku(a)}Zn(e)&&(lh(e),ch("Database",!0)),U3(i,s,r,o)}/**
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
 */function H3(t){DV(Ls),Es(new Ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return B3(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),pn(Tx,Ix,t),pn(Tx,Ix,"esm2020")}yr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};H3();/**
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
 */const SN="firebasestorage.googleapis.com",bN="storageBucket",G3=2*60*1e3,K3=10*60*1e3;/**
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
 */class $e extends er{constructor(e,n,r=0){super(dp(e),`Firebase Storage: ${n} (${dp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function dp(t){return"storage/"+t}function Iy(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Be.UNKNOWN,t)}function Q3(t){return new $e(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Y3(t){return new $e(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function J3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Be.UNAUTHENTICATED,t)}function X3(){return new $e(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Z3(t){return new $e(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function e6(){return new $e(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function t6(){return new $e(Be.CANCELED,"User canceled the upload/download.")}function n6(t){return new $e(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function r6(t){return new $e(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function s6(){return new $e(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bN+"' property when initializing the app?")}function i6(){return new $e(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function o6(){return new $e(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function a6(t){return new $e(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Km(t){return new $e(Be.INVALID_ARGUMENT,t)}function CN(){return new $e(Be.APP_DELETED,"The Firebase app was deleted.")}function l6(t){return new $e(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cl(t,e){return new $e(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Na(t){throw new $e(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw r6(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${h}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},A=n===SN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",S=new RegExp(`^https?://${A}/${s}/${R}`,"i"),x=[{regex:a,indices:l,postModify:i},{regex:_,indices:C,postModify:u},{regex:S,indices:{bucket:1,path:2},postModify:u}];for(let D=0;D<x.length;D++){const V=x[D],F=V.regex.exec(e);if(F){const I=F[V.indices.bucket];let y=F[V.indices.path];y||(y=""),r=new en(I,y),V.postModify(r);break}}if(r==null)throw n6(e);return r}}class c6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function u6(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...R){u||(u=!0,e.apply(null,R))}function p(R){s=setTimeout(()=>{s=null,t(_,l())},R)}function m(){i&&clearTimeout(i)}function _(R,...S){if(u){m();return}if(R){m(),h.call(null,R,...S);return}if(l()||o){m(),h.call(null,R,...S);return}r<64&&(r*=2);let x;a===1?(a=2,x=0):x=(r+Math.random())*1e3,p(x)}let C=!1;function A(R){C||(C=!0,m(),!u&&(s!==null?(R||(a=2),clearTimeout(s),p(0)):R||(a=1)))}return p(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function d6(t){t(!1)}/**
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
 */function h6(t){return t!==void 0}function f6(t){return typeof t=="object"&&!Array.isArray(t)}function Sy(t){return typeof t=="string"||t instanceof String}function sE(t){return by()&&t instanceof Blob}function by(){return typeof Blob<"u"}function iE(t,e,n,r){if(r<e)throw Km(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Km(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Cy(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function NN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ai||(ai={}));/**
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
 */function p6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class m6{constructor(e,n,r,s,i,o,a,l,u,h,p,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=p,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,A)=>{this.resolve_=C,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ru(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ai.NO_ERROR,l=i.getStatus();if(!a||p6(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ai.ABORT;r(!1,new ru(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ru(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());h6(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Iy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?CN():t6();o(l)}else{const l=e6();o(l)}};this.canceled_?n(!1,new ru(!1,null,!0)):this.backoffId_=u6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function g6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function y6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function v6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function w6(t,e,n,r,s,i,o=!0,a=!1){const l=NN(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return y6(h,e),g6(h,n),_6(h,i),v6(h,r),new m6(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function x6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function E6(...t){const e=x6();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(by())return new Blob(t);throw new $e(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function T6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function I6(t){if(typeof atob>"u")throw a6("base-64");return atob(t)}/**
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
 */const Bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hp{constructor(e,n){this.data=e,this.contentType=n||null}}function S6(t,e){switch(t){case Bn.RAW:return new hp(AN(e));case Bn.BASE64:case Bn.BASE64URL:return new hp(kN(t,e));case Bn.DATA_URL:return new hp(C6(e),N6(e))}throw Iy()}function AN(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function b6(t){let e;try{e=decodeURIComponent(t)}catch{throw cl(Bn.DATA_URL,"Malformed data URL.")}return AN(e)}function kN(t,e){switch(t){case Bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw cl(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw cl(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=I6(e)}catch(s){throw s.message.includes("polyfill")?s:cl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class RN{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw cl(Bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=A6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function C6(t){const e=new RN(t);return e.base64?kN(Bn.BASE64,e.rest):b6(e.rest)}function N6(t){return new RN(t).contentType}function A6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Xr{constructor(e,n){let r=0,s="";sE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sE(this.data_)){const r=this.data_,s=T6(r,e,n);return s===null?null:new Xr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(by()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(E6.apply(null,n))}else{const n=e.map(o=>Sy(o)?S6(Bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Xr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function PN(t){let e;try{e=JSON.parse(t)}catch{return null}return f6(e)?e:null}/**
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
 */function k6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function R6(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function DN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function P6(t,e){return e}class Pt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||P6}}let su=null;function D6(t){return!Sy(t)||t.length<2?t:DN(t)}function ON(){if(su)return su;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(i,o){return D6(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Pt("size");return s.xform=r,t.push(s),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),su=t,su}function O6(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new en(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function L6(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return O6(r,t),r}function LN(t,e,n){const r=PN(e);return r===null?null:L6(t,r,n)}function j6(t,e,n,r){const s=PN(e);if(s===null||!Sy(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,p=t.fullPath,m="/b/"+o(h)+"/o/"+o(p),_=Cy(m,n,r),C=NN({alt:"media",token:u});return _+C})[0]}function M6(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class jN{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function MN(t){if(!t)throw Iy()}function V6(t,e){function n(r,s){const i=LN(t,s,e);return MN(i!==null),i}return n}function F6(t,e){function n(r,s){const i=LN(t,s,e);return MN(i!==null),j6(i,s,t.host,t._protocol)}return n}function VN(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=X3():s=J3():n.getStatus()===402?s=Y3(t.bucket):n.getStatus()===403?s=Z3(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function U6(t){const e=VN(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Q3(t.path)),i.serverResponse=s.serverResponse,i}return n}function B6(t,e,n){const r=e.fullServerUrl(),s=Cy(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new jN(s,i,F6(t,n),o);return a.errorHandler=U6(e),a}function $6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function z6(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$6(null,e)),r}function W6(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let x="";for(let D=0;D<2;D++)x=x+Math.random().toString().slice(2);return x}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=z6(e,r,s),h=M6(u,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Xr.getBlob(p,r,m);if(_===null)throw i6();const C={name:u.fullPath},A=Cy(i,t.host,t._protocol),R="POST",S=t.maxUploadRetryTime,E=new jN(A,R,V6(t,n),S);return E.urlParams=C,E.headers=o,E.body=_.uploadData(),E.errorHandler=VN(e),E}class q6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Na("cannot .send() more than once");if(Zn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Na("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Na("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Na("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Na("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class H6 extends q6{initXhr(){this.xhr_.responseType="text"}}function FN(){return new H6}/**
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
 */class Ei{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ei(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return DN(this._location.path)}get storage(){return this._service}get parent(){const e=k6(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw l6(e)}}function G6(t,e,n){t._throwIfRoot("uploadBytes");const r=W6(t.storage,t._location,ON(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,FN).then(s=>({metadata:s,ref:t}))}function K6(t){t._throwIfRoot("getDownloadURL");const e=B6(t.storage,t._location,ON());return t.storage.makeRequestWithTokens(e,FN).then(n=>{if(n===null)throw o6();return n})}function Q6(t,e){const n=R6(t._location.path,e),r=new en(t._location.bucket,n);return new Ei(t.storage,r)}/**
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
 */function Y6(t){return/^[A-Za-z]+:\/\//.test(t)}function J6(t,e){return new Ei(t,e)}function UN(t,e){if(t instanceof Ny){const n=t;if(n._bucket==null)throw s6();const r=new Ei(n,n._bucket);return e!=null?UN(r,e):r}else return e!==void 0?Q6(t,e):t}function X6(t,e){if(e&&Y6(e)){if(t instanceof Ny)return J6(t,e);throw Km("To use ref(service, url), the first argument must be a Storage instance.")}else return UN(t,e)}function oE(t,e){const n=e==null?void 0:e[bN];return n==null?null:en.makeFromBucketSpec(n,t)}function Z6(t,e,n,r={}){t.host=`${e}:${n}`;const s=Zn(e);s&&(lh(`https://${t.host}/b`),ch("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xg(i,t.app.options.projectId))}class Ny{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=SN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G3,this._maxUploadRetryTime=K3,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=oE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=oE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ei(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new c6(CN());{const o=w6(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const aE="@firebase/storage",lE="0.14.0";/**
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
 */const BN="storage";function eU(t,e,n){return t=_e(t),G6(t,e,n)}function tU(t){return t=_e(t),K6(t)}function nU(t,e){return t=_e(t),X6(t,e)}function rU(t=hh(),e){t=_e(t);const r=nc(t,BN).getImmediate({identifier:e}),s=Jg("storage");return s&&sU(r,...s),r}function sU(t,e,n,r={}){Z6(t,e,n,r)}function iU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ny(n,r,s,e,Ls)}function oU(){Es(new Ir(BN,iU,"PUBLIC").setMultipleInstances(!0)),pn(aE,lE,""),pn(aE,lE,"esm2020")}oU();const aU={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},qh=QI(aU),Te=aL(qh),we=mV(qh),lU=rU(qh),Aa=IN(qh);function $N(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[s,i]=O.useState(!1),[o,a]=O.useState(""),l=async u=>{u.preventDefault(),i(!0),a("");try{const p=(await W2(Te,t,n)).user,m=await Ad(at(we,"users",p.uid));if(!m.exists()){a("Profile not found. Please contact support."),await Te.signOut(),i(!1);return}const _=m.data();if(_.role==="carrier"&&!_.isApproved){a("Your account is pending approval. Please wait for coordinator approval."),await Te.signOut(),i(!1);return}console.log("Login successful for:",p.email)}catch(h){console.error("Login error:",h),h.code==="auth/invalid-credential"||h.code==="auth/user-not-found"||h.code==="auth/wrong-password"?a("Invalid email or password. Please try again."):h.code==="auth/too-many-requests"?a("Too many failed attempts. Please try again later."):h.code==="auth/user-disabled"?a("This account has been disabled. Please contact support."):h.code==="auth/network-request-failed"?a("Network error. Please check your internet connection."):a(h.message||"Login failed. Please try again.")}finally{i(!1)}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900",children:d.jsx("div",{className:"flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),d.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]}),d.jsx("p",{className:"text-gray-600",children:"Sign in to your carrier account"})]}),o&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:d.jsx("p",{className:"text-red-700 text-sm",children:o})}),d.jsxs("form",{onSubmit:l,className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"your@email.com",value:t,onChange:u=>e(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,disabled:s})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),d.jsx("input",{type:"password",placeholder:"Enter your password",value:n,onChange:u=>r(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,minLength:6,disabled:s}),d.jsx("div",{className:"text-right mt-2",children:d.jsx(lo,{to:"/forgot-password",className:"text-sm text-blue-600 hover:text-blue-800",children:"Forgot password?"})})]}),d.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:s?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),d.jsxs("div",{className:"flex items-center my-8",children:[d.jsx("div",{className:"flex-grow border-t border-gray-300"}),d.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),d.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-gray-600 mb-4",children:"Don't have a carrier account?"}),d.jsx(lo,{to:"/register",className:"inline-block w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition",children:"Register as Carrier"})]}),d.jsx("div",{className:"mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("span",{className:"text-yellow-600",children:"ℹ️"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important"}),d.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Carrier accounts require coordinator approval. You will receive SMS notification once approved."})]})]})}),d.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:d.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",d.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-blue-600 hover:text-blue-800",children:"Contact Support"})]})})]})})})}const iu=10,cE=30*1e3,uE=1e3,cU=10,Ru=(t,e,n,r)=>{const i=(n-t)*(Math.PI/180),o=(r-e)*(Math.PI/180),a=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*(Math.PI/180))*Math.cos(n*(Math.PI/180))*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))},fp=(t,e)=>{if(t.accuracy===void 0)return console.warn("❌ Position rejected: accuracy is undefined"),!1;if(t.accuracy>uE)return console.warn(`❌ Position rejected: accuracy too poor (${t.accuracy.toFixed(0)}m > ${uE}m)`),!1;if(Math.abs(t.lat)>90||Math.abs(t.lng)>180)return console.warn(`❌ Position rejected: invalid coordinates (${t.lat}, ${t.lng})`),!1;if(e){const n=Ru(e.lat,e.lng,t.lat,t.lng)/1e3;if(n>cU)return console.warn(`❌ Position rejected: impossible jump of ${n.toFixed(1)}km`),!1}return!0},ou=()=>{const t=new Date,e=new Date(t.toLocaleString("en-US",{timeZone:"Africa/Johannesburg"}));return{iso:e.toISOString(),ms:e.getTime()}};class ye{static async getCarrierProfile(){try{const e=Te.currentUser;if(!e)return null;const n=await qs(wn(vn(we,"users"),et("__name__","==",e.uid)));if(!n.empty){const r=n.docs[0].data();return{id:n.docs[0].id,...r}}return null}catch(e){return console.error("Error fetching carrier profile:",e),null}}static async updateCarrierStatus(e,n){try{const r=Te.currentUser;return r?e==="inactive"&&n?(console.error("Cannot change status to inactive while on delivery"),!1):(await an(at(we,"users",r.uid),{status:e,updatedAt:ee.now(),lastActive:ee.now()}),!0):!1}catch(r){return console.error("Error updating carrier status:",r),!1}}static async updateLocation(e,n){try{const r=Te.currentUser;if(!r)return console.warn("updateLocation: no authenticated user (auth.currentUser is null)"),!1;const s=Date.now(),i=r.uid,o=10*60*1e3;let a=!1;if(!this.lastFirestoreWrite[i])a=!0;else if(!this.lastSavedLocation)a=!0;else{const l=Ru(this.lastSavedLocation.lat,this.lastSavedLocation.lng,e,n);l>200&&(a=!0,console.log(`🔁 Significant move detected: ${l.toFixed(0)}m — forcing Firestore update`))}if(a||(a=!this.lastFirestoreWrite[i]||s-this.lastFirestoreWrite[i]>=o),a){const l=ee.now(),{iso:u}=ou();await an(at(we,"users",r.uid),{currentLocation:{lat:e,lng:n,timestamp:l,timestampISO:u,timestampMs:Date.now(),timezone:"SAST"},lastActive:ee.now(),lastActiveISO:u}),this.lastFirestoreWrite[i]=s,console.log("📝 Firestore location updated (Lesotho time)")}try{const{iso:l,ms:u}=ou(),h=Jr(Aa,`tracks/${r.uid}`);await ll(h,{lat:e,lng:n,timestamp:Date.now(),timestampISO:l,timestampMs:u,timezone:"SAST",status:"active"}),console.log("✅ RTDB location updated (Lesotho):",{lat:e,lng:n,lesothoTime:l});try{rE(h).remove()}catch{}}catch(l){console.error("❌ RTDB write failed for carrier track:",l)}return!0}catch(r){return console.error("Error updating location:",r),!1}}static async getActiveDelivery(){try{const e=Te.currentUser;if(!e)return null;const n=wn(vn(we,"deliveries"),et("carrierId","==",e.uid),et("status","in",["assigned","picked_up","in_transit","out_for_delivery"]),Qs("assignedAt","desc")),r=await qs(n);if(!r.empty){const s=r.docs[0].data();return{id:r.docs[0].id,...s}}return null}catch(e){return console.error("Error fetching active delivery:",e),null}}static async getDeliveries(e=10){try{const n=Te.currentUser;if(!n)return[];const r=wn(vn(we,"deliveries"),et("carrierId","==",n.uid),Qs("createdAt","desc"),AV(e));return(await qs(r)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){return console.error("Error fetching deliveries:",n),[]}}static async updateDeliveryStatus(e,n,r){try{const s={status:n,updatedAt:ee.now()};return n==="picked_up"&&(s.pickupTime=ee.now(),s.otpCode=r||Math.floor(1e3+Math.random()*9e3).toString()),n==="delivered"&&(s.deliveryTime=ee.now()),await an(at(we,"deliveries",e),s),!0}catch(s){return console.error("Error updating delivery:",s),!1}}static async verifyOTP(e,n){try{const r=at(we,"deliveries",e),s=await qs(wn(vn(we,"deliveries"),et("__name__","==",e)));return!s.empty&&s.docs[0].data().otpCode===n?(await an(r,{status:"delivered",otpVerified:!0,deliveryTime:ee.now(),updatedAt:ee.now()}),!0):!1}catch(r){return console.error("Error verifying OTP:",r),!1}}static async updateDeliveryLocation(e,n,r){try{const s=Date.now(),i=10*60*1e3;if(!this.lastDeliveryFirestoreWrite[e]||s-this.lastDeliveryFirestoreWrite[e]>=i){const a=ee.now(),{iso:l}=ou();await an(at(we,"deliveries",e),{currentLocation:{lat:n,lng:r,timestamp:a,timestampISO:l,timestampMs:Date.now(),timezone:"SAST"}}),this.lastDeliveryFirestoreWrite[e]=s,console.log(`📝 Delivery ${e} Firestore location updated (Lesotho time)`)}try{const{iso:a,ms:l}=ou(),u=Jr(Aa,`deliveryTracks/${e}`);await ll(u,{lat:n,lng:r,timestamp:Date.now(),timestampISO:a,timestampMs:l,timezone:"SAST"});try{rE(u).remove()}catch{}}catch(a){console.warn("RTDB write failed for delivery track:",a)}return!0}catch(s){return console.error("Error updating delivery location:",s),!1}}static subscribeToActiveDelivery(e){const n=Te.currentUser;if(!n)return()=>{};const r=wn(vn(we,"deliveries"),et("carrierId","==",n.uid),et("status","in",["assigned","picked_up","in_transit","out_for_delivery"]));return nl(r,i=>{if(i.empty)e(null);else{const o=i.docs[0].data();e({id:i.docs[0].id,...o})}})}static async getAvailableTasks(){try{if(!Te.currentUser)return[];const n=wn(vn(we,"deliveries"),et("status","==","pending"),et("carrierId","==",null),Qs("createdAt","desc"));return(await qs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching available tasks:",e),[]}}static subscribeToAvailableTasks(e){const n=wn(vn(we,"deliveries"),et("status","==","pending"),et("carrierId","==",null),Qs("createdAt","desc"));return nl(n,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)})}static async acceptTask(e){try{const n=Te.currentUser;if(!n)return!1;const r=at(we,"deliveries",e);return await an(r,{carrierId:n.uid,carrierEmail:n.email,carrierName:n.displayName||"",carrierPhone:n.phoneNumber||"",status:"accepted",assignedAt:ee.now(),acceptedAt:ee.now(),updatedAt:ee.now()}),await an(at(we,"users",n.uid),{status:"busy",updatedAt:ee.now()}),!0}catch(n){return console.error("Error accepting task:",n),!1}}static async getAssignedDeliveries(){try{const e=Te.currentUser;if(!e)return[];const n=wn(vn(we,"deliveries"),et("carrierId","==",e.uid),et("status","==","assigned"),Qs("assignedAt","desc"));return(await qs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching assigned deliveries:",e),[]}}static async acceptAssignedDelivery(e,n){try{if(!Te.currentUser)return!1;if(!n)return console.error("Location sharing required to accept delivery"),!1;const s=at(we,"deliveries",e);return await an(s,{status:"accepted",acceptedAt:ee.now(),updatedAt:ee.now()}),!0}catch(r){return console.error("Error accepting assigned delivery:",r),!1}}static async declineAssignedDelivery(e){try{if(!Te.currentUser)return!1;const r=at(we,"deliveries",e);return await an(r,{status:"pending",carrierId:null,carrierEmail:null,carrierName:null,carrierPhone:null,assignedAt:null,updatedAt:ee.now()}),!0}catch(n){return console.error("Error declining assigned delivery:",n),!1}}static subscribeToAssignedDeliveries(e){const n=Te.currentUser;if(!n)return()=>{};const r=wn(vn(we,"deliveries"),et("carrierId","==",n.uid),et("status","==","assigned"),Qs("assignedAt","desc"));return nl(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));e(o)})}static async updateShareLocation(e){try{const n=Te.currentUser;return n?(await an(at(we,"users",n.uid),{shareLocation:e,updatedAt:ee.now()}),!0):!1}catch(n){return console.error("Error updating share location:",n),!1}}static subscribeToLocationUpdates(e){return this.locationUpdateCallbacks.add(e),()=>{this.locationUpdateCallbacks.delete(e)}}static notifyLocationUpdate(e){this.locationUpdateCallbacks.forEach(n=>n(e))}static startLocationSharing(e){if(!navigator.geolocation)return console.error("Geolocation is not supported"),!1;if(this.gpsWatchId!==null)return console.log("GPS tracking already active"),!0;console.log("📍 Starting GPS tracking");const n=(r=!0)=>{navigator.geolocation.getCurrentPosition(async s=>{const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!fp(i,this.lastSavedLocation)){console.warn("Initial position failed validation, attempting fallback..."),r&&n(!1);return}console.log(`✅ Initial position (${r?"high":"low"} accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${i.accuracy.toFixed(0)}m`),this.notifyLocationUpdate(i);try{await this.updateLocation(i.lat,i.lng)}catch(o){console.error("Immediate location update failed:",o)}},s=>{r&&s.code===3?(console.warn("High accuracy initial position timeout, trying with low accuracy..."),n(!1)):console.warn("getCurrentPosition failed:",s)},{enableHighAccuracy:r,timeout:1e4,maximumAge:0})};try{n()}catch(r){console.warn("Immediate position request failed:",r)}return this.gpsWatchId=navigator.geolocation.watchPosition(async r=>{var a;const s={lat:r.coords.latitude,lng:r.coords.longitude,timestamp:new Date,accuracy:r.coords.accuracy};if(!fp(s,this.lastSavedLocation))return;console.log(`📍 New position: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}, accuracy: ${((a=s.accuracy)==null?void 0:a.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(s);let i=!1;const o=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),i=!0;else{const l=Ru(this.lastSavedLocation.lat,this.lastSavedLocation.lng,s.lat,s.lng);console.log(`📏 Distance from last saved: ${l.toFixed(0)}m (threshold: ${iu}m)`);const u=s.accuracy&&s.accuracy>1e3,h=u?0:iu,p=u?1e4:cE;l>h&&(i=!0,console.log("✅ Distance threshold exceeded")),!i&&this.lastSavedTime&&o-this.lastSavedTime>=p&&(console.log(`⏱️ Time threshold reached (${(o-this.lastSavedTime)/1e3}s >= ${p/1e3}s)`),i=!0)}if(i){console.log(`✅ Updating location: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}`);try{await this.updateLocation(s.lat,s.lng)}catch(l){console.error("Failed to update location:",l)}if(e)try{await this.updateDeliveryLocation(e,s.lat,s.lng)}catch(l){console.error("Failed to update delivery location:",l)}this.lastSavedLocation={lat:s.lat,lng:s.lng},this.lastSavedTime=o}else console.log("⏭️ Skipping update (thresholds not met)")},r=>{console.error("Geolocation error (high accuracy):",r),r.code===3?(console.warn("High accuracy timeout, retrying with lower accuracy..."),this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.gpsWatchId=navigator.geolocation.watchPosition(async s=>{var l;const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!fp(i,this.lastSavedLocation))return;console.log(`📍 New position (low accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${((l=i.accuracy)==null?void 0:l.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(i);let o=!1;const a=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),o=!0;else{const u=Ru(this.lastSavedLocation.lat,this.lastSavedLocation.lng,i.lat,i.lng);console.log(`📏 Distance from last saved: ${u.toFixed(0)}m (threshold: ${iu}m)`);const h=i.accuracy&&i.accuracy>1e3,p=h?0:iu,m=h?1e4:cE;u>p&&(o=!0,console.log("✅ Distance threshold exceeded")),!o&&this.lastSavedTime&&a-this.lastSavedTime>=m&&(console.log(`⏱️ Time threshold reached (${(a-this.lastSavedTime)/1e3}s >= ${m/1e3}s)`),o=!0)}if(o){console.log(`✅ Updating location: ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}`);try{await this.updateLocation(i.lat,i.lng)}catch(u){console.error("Failed to update location:",u)}if(e)try{await this.updateDeliveryLocation(e,i.lat,i.lng)}catch(u){console.error("Failed to update delivery location:",u)}this.lastSavedLocation={lat:i.lat,lng:i.lng},this.lastSavedTime=a}else console.log("⏭️ Skipping update (thresholds not met)")},s=>{console.error("Low accuracy geolocation also failed:",s),this.stopLocationSharing()},{enableHighAccuracy:!1,timeout:15e3,maximumAge:0})):this.stopLocationSharing()},{enableHighAccuracy:!0,timeout:15e3,maximumAge:0}),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),!0}static stopLocationSharing(){return this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null,console.log("📍 Stopped GPS tracking")),(async()=>{try{const e=Te.currentUser;if(!e)return;const n=Jr(Aa,`tracks/${e.uid}`),r=await up(n);if(r&&r.exists()){const s=r.val(),i=s.timestampMs||s.timestamp||Date.now(),o=s.timestampISO||new Date(i).toISOString();try{await an(at(we,"users",e.uid),{currentLocation:{lat:s.lat,lng:s.lng,timestamp:ee.fromDate(new Date(i)),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST"},lastActive:ee.now(),updatedAt:ee.now(),shareLocation:!1,status:"inactive"}),console.log("🗄️ Persisted last RTDB location to Firestore (on stop)");try{await ll(n,{...s,timestamp:Date.now(),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST",status:"inactive"})}catch(a){console.warn("Could not update RTDB track to inactive:",a)}}catch(a){console.error("Error writing last RTDB location to Firestore:",a)}}else console.log("ℹ️ No RTDB track found to persist on stop")}catch(e){console.error("Error reading RTDB on stopLocationSharing:",e)}})(),this.lastSavedLocation=null,this.lastSavedTime=null,this.notifyLocationUpdate(null),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=setTimeout(()=>{console.log("15 minutes offline, auto-disabling location sharing"),this.updateShareLocation(!1),this.offlineTimeoutId=null},this.OFFLINE_TIMEOUT_MS),!0}static isLocationSharingActive(){return this.gpsWatchId!==null}static stopAllTracking(){this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.offlineTimeoutId&&(clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=null),this.locationUpdateCallbacks.clear()}static async getTodayStats(){try{const e=Te.currentUser;if(!e)return{earnings:0,deliveries:0};const n=new Date;n.setHours(0,0,0,0);const r=wn(vn(we,"deliveries"),et("carrierId","==",e.uid),et("status","==","delivered"),et("deliveryTime",">=",ee.fromDate(n))),s=await qs(r);return{earnings:s.docs.reduce((o,a)=>{const l=a.data();return o+(l.earnings||0)},0),deliveries:s.docs.length}}catch(e){return console.error("Error fetching today stats:",e),{earnings:0,deliveries:0}}}static async getLocationPreferRealtime(e){try{const n=await up(Jr(Aa,`tracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,accuracy:s.accuracy,timezone:s.timezone||"SAST"}}const r=await Ad(at(we,"users",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,accuracy:i.accuracy,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (user):",n),null}}static async getDeliveryLocationPreferRealtime(e){try{const n=await up(Jr(Aa,`deliveryTracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,timezone:s.timezone||"SAST"}}const r=await Ad(at(we,"deliveries",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (delivery):",n),null}}}jn(ye,"lastFirestoreWrite",{}),jn(ye,"lastDeliveryFirestoreWrite",{}),jn(ye,"gpsWatchId",null),jn(ye,"lastSavedLocation",null),jn(ye,"lastSavedTime",null),jn(ye,"offlineTimeoutId",null),jn(ye,"locationUpdateCallbacks",new Set),jn(ye,"OFFLINE_TIMEOUT_MS",15*60*1e3);const zN=t=>{const[e,n]=O.useState(()=>ye.isLocationSharingActive()),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState(0),u=()=>{const m=ye.startLocationSharing(t);return m&&(n(!0),o(null)),m},h=()=>{ye.stopLocationSharing(),n(!1)},p=()=>{e?h():u()};return O.useEffect(()=>{const m=ye.subscribeToLocationUpdates(_=>{_&&(s(_),l(_.accuracy||0))});return()=>{m()}},[]),{isSharing:e,lastLocation:r,error:i,accuracy:a,startSharing:u,stopSharing:h,toggleSharing:p}},uU=()=>{const[t,e]=O.useState({todayEarnings:0,todayDeliveries:0,totalEarnings:0,totalDeliveries:0,rating:0,status:"inactive"}),[n,r]=O.useState(!0);return O.useEffect(()=>{const s=Te.currentUser;if(!s){r(!1);return}const i=async()=>{const a=await ye.getTodayStats();e(l=>({...l,todayEarnings:a.earnings,todayDeliveries:a.deliveries}))},o=nl(at(we,"users",s.uid),a=>{if(a.exists()){const l=a.data();e(u=>({...u,totalEarnings:l.earnings||0,totalDeliveries:l.completedDeliveries||0,rating:l.rating||0,status:l.status||"inactive"})),r(!1)}});return i(),()=>o()},[]),{stats:t,loading:n}},to=t=>t==null||Number.isNaN(t)?"M0.00":`M${t.toFixed(2)}`,dU=t=>t?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Not yet",Qm=t=>t?t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}):"N/A",hU=t=>{switch(t){case"delivered":return"bg-green-100 text-green-800";case"in_transit":return"bg-blue-100 text-blue-800";case"picked_up":return"bg-yellow-100 text-yellow-800";case"assigned":return"bg-purple-100 text-purple-800";case"pending":return"bg-gray-100 text-gray-800";default:return"bg-gray-100 text-gray-800"}},fU=t=>{switch(t){case"delivered":return"fa-solid fa-circle-check";case"in_transit":return"fa-solid fa-truck";case"picked_up":return"fa-solid fa-box";case"assigned":return"fa-solid fa-user";case"pending":return"fa-regular fa-clock";default:return"fa-regular fa-clipboard"}},dE=t=>({pending:10,assigned:30,accepted:40,picked_up:50,in_transit:70,out_for_delivery:90,delivered:100,cancelled:0})[t.status]||0;let pU={data:""},mU=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||pU},gU=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,_U=/\/\*[^]*?\*\/|  +/g,hE=/\n+/g,Zr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Zr(o,i):i+"{"+Zr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Zr(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Zr.p?Zr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},ir={},WN=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+WN(t[n]);return e}return t},yU=(t,e,n,r,s)=>{let i=WN(t),o=ir[i]||(ir[i]=(l=>{let u=0,h=11;for(;u<l.length;)h=101*h+l.charCodeAt(u++)>>>0;return"go"+h})(i));if(!ir[o]){let l=i!==t?t:(u=>{let h,p,m=[{}];for(;h=gU.exec(u.replace(_U,""));)h[4]?m.shift():h[3]?(p=h[3].replace(hE," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][h[1]]=h[2].replace(hE," ").trim();return m[0]})(t);ir[o]=Zr(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&ir.g?ir.g:null;return n&&(ir.g=ir[o]),((l,u,h,p)=>{p?u.data=u.data.replace(p,l):u.data.indexOf(l)===-1&&(u.data=h?l+u.data:u.data+l)})(ir[o],e,r,a),o},vU=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Zr(a,""):a===!1?"":a}return r+s+(o??"")},"");function Hh(t){let e=this||{},n=t.call?t(e.p):t;return yU(n.unshift?n.raw?vU(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,mU(e.target),e.g,e.o,e.k)}let qN,Ym,Jm;Hh.bind({g:1});let kr=Hh.bind({k:1});function wU(t,e,n,r){Zr.p=e,qN=t,Ym=n,Jm=r}function Fs(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Ym&&Ym()},a),n.o=/ *go\d+/.test(l),a.className=Hh.apply(n,r)+(l?" "+l:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),Jm&&u[0]&&Jm(a),qN(u,a)}return s}}var xU=t=>typeof t=="function",$d=(t,e)=>xU(t)?t(e):t,EU=(()=>{let t=0;return()=>(++t).toString()})(),HN=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),TU=20,Ay="default",GN=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return GN(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Pu=[],KN={toasts:[],pausedAt:void 0,settings:{toastLimit:TU}},$n={},QN=(t,e=Ay)=>{$n[e]=GN($n[e]||KN,t),Pu.forEach(([n,r])=>{n===e&&r($n[e])})},YN=t=>Object.keys($n).forEach(e=>QN(t,e)),IU=t=>Object.keys($n).find(e=>$n[e].toasts.some(n=>n.id===t)),Gh=(t=Ay)=>e=>{QN(e,t)},SU={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},bU=(t={},e=Ay)=>{let[n,r]=O.useState($n[e]||KN),s=O.useRef($n[e]);O.useEffect(()=>(s.current!==$n[e]&&r($n[e]),Pu.push([e,r]),()=>{let o=Pu.findIndex(([a])=>a===e);o>-1&&Pu.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||SU[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:i}},CU=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||EU()}),vc=t=>(e,n)=>{let r=CU(e,t,n);return Gh(r.toasterId||IU(r.id))({type:2,toast:r}),r.id},Y=(t,e)=>vc("blank")(t,e);Y.error=vc("error");Y.success=vc("success");Y.loading=vc("loading");Y.custom=vc("custom");Y.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Gh(e)(n):YN(n)};Y.dismissAll=t=>Y.dismiss(void 0,t);Y.remove=(t,e)=>{let n={type:4,toastId:t};e?Gh(e)(n):YN(n)};Y.removeAll=t=>Y.remove(void 0,t);Y.promise=(t,e,n)=>{let r=Y.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?$d(e.success,s):void 0;return i?Y.success(i,{id:r,...n,...n==null?void 0:n.success}):Y.dismiss(r),s}).catch(s=>{let i=e.error?$d(e.error,s):void 0;i?Y.error(i,{id:r,...n,...n==null?void 0:n.error}):Y.dismiss(r)}),t};var NU=1e3,AU=(t,e="default")=>{let{toasts:n,pausedAt:r}=bU(t,e),s=O.useRef(new Map).current,i=O.useCallback((p,m=NU)=>{if(s.has(p))return;let _=setTimeout(()=>{s.delete(p),o({type:4,toastId:p})},m);s.set(p,_)},[]);O.useEffect(()=>{if(r)return;let p=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let C=(_.duration||0)+_.pauseDuration-(p-_.createdAt);if(C<0){_.visible&&Y.dismiss(_.id);return}return setTimeout(()=>Y.dismiss(_.id,e),C)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=O.useCallback(Gh(e),[e]),a=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=O.useCallback((p,m)=>{o({type:1,toast:{id:p,height:m}})},[o]),u=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=O.useCallback((p,m)=>{let{reverseOrder:_=!1,gutter:C=8,defaultPosition:A}=m||{},R=n.filter(x=>(x.position||A)===(p.position||A)&&x.height),S=R.findIndex(x=>x.id===p.id),E=R.filter((x,D)=>D<S&&x.visible).length;return R.filter(x=>x.visible).slice(..._?[E+1]:[0,E]).reduce((x,D)=>x+(D.height||0)+C,0)},[n]);return O.useEffect(()=>{n.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let m=s.get(p.id);m&&(clearTimeout(m),s.delete(p.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:h}}},kU=kr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,RU=kr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,PU=kr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,DU=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${kU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${RU} 0.15s ease-out forwards;
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
    animation: ${PU} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,OU=kr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,LU=Fs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${OU} 1s linear infinite;
`,jU=kr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,MU=kr`
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
}`,VU=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${MU} 0.2s ease-out forwards;
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
`,FU=Fs("div")`
  position: absolute;
`,UU=Fs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,BU=kr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$U=Fs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${BU} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,zU=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement($U,null,e):e:n==="blank"?null:O.createElement(UU,null,O.createElement(LU,{...r}),n!=="loading"&&O.createElement(FU,null,n==="error"?O.createElement(DU,{...r}):O.createElement(VU,{...r})))},WU=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qU=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,HU="0%{opacity:0;} 100%{opacity:1;}",GU="0%{opacity:1;} 100%{opacity:0;}",KU=Fs("div")`
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
`,QU=Fs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,YU=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=HN()?[HU,GU]:[WU(n),qU(n)];return{animation:e?`${kr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${kr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},JU=O.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?YU(t.position||e||"top-center",t.visible):{opacity:0},i=O.createElement(zU,{toast:t}),o=O.createElement(QU,{...t.ariaProps},$d(t.message,t));return O.createElement(KU,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):O.createElement(O.Fragment,null,i,o))});wU(O.createElement);var XU=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=O.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:i,className:e,style:n},s)},ZU=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:HN()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},e5=Hh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,au=16,Kh=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=AU(n,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:au,left:au,right:au,bottom:au,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(h=>{let p=h.position||e,m=u.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),_=ZU(p,m);return O.createElement(XU,{id:h.id,key:h.id,onHeightUpdate:u.updateHeight,className:h.visible?e5:"",style:_},h.type==="custom"?$d(h.message,h):s?s(h):O.createElement(JU,{toast:h,position:p}))}))};function fE({user:t,onNavigate:e}){var z;const n=Qg(),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState([]),[u,h]=O.useState(!0),[p,m]=O.useState(!1),[_,C]=O.useState(""),[A,R]=O.useState(!1),[S,E]=O.useState("inactive"),[x,D]=O.useState(!1),{stats:V,loading:F}=uU(),{isSharing:I,lastLocation:y,error:w,accuracy:b,toggleSharing:N,startSharing:k}=zN(i==null?void 0:i.id);O.useEffect(()=>{(async()=>{h(!0);try{const ae=await ye.getCarrierProfile();s(ae),ae!=null&&ae.status&&E(ae.status),ae!=null&&ae.shareLocation&&!I&&(console.log("🔄 Restoring location sharing from profile..."),k());const Ne=await ye.getActiveDelivery();o(Ne);const on=await ye.getDeliveries(5);l(on)}catch(ae){console.error("Error loading data:",ae),Y.error("Failed to load data")}finally{h(!1)}})();const Q=ye.subscribeToActiveDelivery(o);return()=>Q()},[]);const T=async W=>{if(i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)&&W==="inactive"){Y.error("Cannot go offline while on a delivery");return}if(W==="busy"&&(i==null?void 0:i.status)!=="accepted"){Y.error("Cannot mark as on delivery without accepting the job first");return}try{await ye.updateCarrierStatus(W,i==null?void 0:i.id)?(E(W),Y.success(`Status updated to ${W}`)):Y.error("Failed to update status")}catch(Q){console.error("Error updating status:",Q),Y.error("Failed to update status")}},ge=async()=>{if(i)try{const W=Math.floor(1e3+Math.random()*9e3).toString();await ye.updateDeliveryStatus(i.id,"picked_up",W)?(C(W),m(!0),Y.success("Package picked up. OTP generated.")):Y.error("Failed to update delivery status")}catch(W){console.error("Error picking up package:",W),Y.error("Failed to pick up package")}},te=async()=>{if(!(!i||!_))try{await ye.verifyOTP(i.id,_)?(Y.success("OTP verified. Delivery completed."),m(!1),C(""),o(null)):Y.error("Invalid OTP code")}catch(W){console.error("Error verifying OTP:",W),Y.error("Failed to verify OTP")}},ft=async()=>{try{I&&N(),await Y2(Te),n("/login")}catch(W){console.error("Logout error:",W),Y.error("Failed to logout")}},it=i&&i.status!=="assigned";return u||F?d.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),d.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):d.jsxs("div",{className:"min-h-screen bg-[#f9f9f9] pb-24",children:[d.jsx(Kh,{position:"top-center"}),!I&&d.jsx("div",{className:"bg-rose-50 border-b border-rose-200",children:d.jsxs("div",{className:"px-4 py-3 flex items-center gap-3",children:[d.jsx("i",{className:"fa-solid fa-circle text-rose-600 text-xs animate-pulse"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-rose-900",children:"You are Offline"}),d.jsx("p",{className:"text-sm text-rose-700",children:"Location sharing is disabled. Enable it to accept jobs and be visible to coordinators."})]})]})}),d.jsx("header",{className:"bg-red-600 text-white shadow-sm border-b border-red-700 sticky top-0 z-10",children:d.jsxs("div",{className:"px-4 py-3 flex flex-wrap items-center justify-between gap-3",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-xl font-bold",children:"PTROS Carrier"}),d.jsxs("p",{className:"text-sm text-white/80",children:["Welcome, ",(r==null?void 0:r.fullName)||t.email]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[d.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-lg ${I?"bg-white/15 text-white":"bg-black/10 text-white"}`,children:[d.jsx("i",{className:`fa-solid fa-circle text-[8px] ${I?"text-emerald-200":"text-rose-200"}`}),d.jsx("span",{className:"text-xs font-semibold",children:I?"Online":"Offline"})]}),d.jsx("button",{onClick:()=>R(!0),className:`px-4 py-2 rounded-lg text-sm font-semibold transition border ${I?"bg-white text-red-700 border-white hover:bg-red-50":"bg-black/20 text-white border-white/40 hover:bg-black/30"}`,children:I?"Stop Sharing":"Start Sharing"}),d.jsx("button",{onClick:ft,className:"px-4 py-2 bg-white/10 text-white rounded-lg text-sm border border-white/30 hover:bg-white/20 transition",children:"Logout"})]})]})}),d.jsxs("div",{className:"p-4",children:[d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[d.jsxs("div",{className:"bg-[#003366] text-white border border-[#003366] shadow-md rounded-2xl p-4 flex items-start justify-between transition hover:bg-red-600",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-wide text-white/70 font-semibold mb-1",children:"Today's Earnings"}),d.jsx("p",{className:"text-2xl font-extrabold text-white",children:to(V.todayEarnings)}),d.jsx("p",{className:"text-xs text-white/70 mt-1",children:"Live tracked"})]}),d.jsx("span",{className:"w-10 h-10 rounded-xl bg-white/15 text-white inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-wallet"})})]}),d.jsxs("div",{className:"bg-[#003366] text-white border border-[#003366] shadow-md rounded-2xl p-4 flex items-start justify-between transition hover:bg-red-600",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-wide text-white/70 font-semibold mb-1",children:"Today's Deliveries"}),d.jsx("p",{className:"text-2xl font-extrabold text-white",children:V.todayDeliveries}),d.jsx("p",{className:"text-xs text-white/70 mt-1",children:"Completed"})]}),d.jsx("span",{className:"w-10 h-10 rounded-xl bg-white/15 text-white inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-truck-fast"})})]}),d.jsxs("div",{className:"bg-[#003366] text-white border border-[#003366] shadow-md rounded-2xl p-4 flex items-start justify-between transition hover:bg-red-600",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-wide text-white/70 font-semibold mb-1",children:"Total Earnings"}),d.jsx("p",{className:"text-2xl font-extrabold text-white",children:to(V.totalEarnings)}),d.jsx("p",{className:"text-xs text-white/70 mt-1",children:"Lifetime"})]}),d.jsx("span",{className:"w-10 h-10 rounded-xl bg-white/15 text-white inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-chart-line"})})]}),d.jsxs("div",{className:"bg-[#003366] text-white border border-[#003366] shadow-md rounded-2xl p-4 flex items-start justify-between transition hover:bg-red-600",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs uppercase tracking-wide text-white/70 font-semibold mb-1",children:"Rating"}),d.jsxs("p",{className:"text-2xl font-extrabold text-white inline-flex items-center gap-2",children:[d.jsx("span",{children:V.rating.toFixed(1)}),d.jsx("i",{className:"fa-solid fa-star"})]}),d.jsx("p",{className:"text-xs text-white/70 mt-1",children:"Customer score"})]}),d.jsx("span",{className:"w-10 h-10 rounded-xl bg-white/15 text-white inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-face-smile"})})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-md border border-slate-200 p-4 mb-6",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{className:"space-y-1",children:[d.jsxs("h2",{className:"font-bold text-[#003366] inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-signal text-[#003366]"})," Your Status"]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Control availability and visibility to coordinators."})]}),d.jsxs("div",{className:`px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-2 border ${S==="active"?"bg-emerald-50 text-emerald-800 border-emerald-200":S==="busy"?"bg-amber-50 text-amber-800 border-amber-200":"bg-slate-50 text-slate-800 border-slate-200"}`,children:[d.jsx("i",{className:S==="active"?"fa-solid fa-circle text-emerald-600":S==="busy"?"fa-solid fa-circle text-amber-600":"fa-regular fa-circle text-slate-600"}),S==="active"?"Available":S==="busy"?"On Delivery":"Offline"]})]}),d.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[d.jsxs("button",{onClick:()=>T("active"),className:`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition border ${S==="active"?"bg-[#003366] text-white border-[#003366] shadow-md":"bg-white text-[#003366] hover:bg-[#003366]/5 border-slate-200"}`,children:[d.jsx("i",{className:"fa-solid fa-bolt"})," Available"]}),d.jsxs("button",{onClick:()=>T("busy"),className:`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition border ${S==="busy"?"bg-[#003366] text-white border-[#003366] shadow-md":"bg-white text-[#003366] hover:bg-[#003366]/5 border-slate-200"}`,children:[d.jsx("i",{className:"fa-solid fa-truck-moving"})," On Delivery"]}),d.jsxs("button",{onClick:()=>T("inactive"),disabled:i?["picked_up","in_transit","out_for_delivery"].includes(i.status):!1,className:`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition border ${S==="inactive"?"bg-red-600 text-white border-red-700 shadow-md":"bg-white text-[#003366] hover:bg-[#003366]/5 border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"}`,title:i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)?"Cannot go offline during delivery":"",children:[d.jsx("i",{className:"fa-solid fa-moon"})," Offline"]})]}),S==="inactive"&&d.jsxs("div",{className:"mt-3 bg-rose-50 border border-rose-200 rounded-lg p-3 flex items-start gap-2",children:[d.jsx("i",{className:"fa-solid fa-triangle-exclamation text-rose-500 mt-0.5"}),d.jsxs("p",{className:"text-sm text-rose-700",children:[d.jsx("span",{className:"font-semibold",children:"You are Offline"})," — you won't receive new job assignments."]})]})]}),i&&i.status==="assigned"&&d.jsx("div",{className:"mb-6 bg-white rounded-xl shadow-sm border border-gray-100 p-4",children:d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-bold text-gray-800 mb-1",children:"New Job Assignment"}),d.jsxs("p",{className:"text-sm text-gray-600",children:[i.pickupAddress," →"," ",i.deliveryAddress]})]}),d.jsx("button",{onClick:()=>D(!0),className:"px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200",children:"View Route"})]})}),i?d.jsxs("div",{className:"bg-white rounded-2xl shadow-md border border-slate-100 mb-6 overflow-hidden",children:[d.jsx("div",{className:"bg-[#003366] p-4 text-white",children:d.jsxs("div",{className:"flex flex-wrap gap-3 justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-lg font-bold",children:"Delivery Progress"}),d.jsxs("p",{className:"text-white/80 text-sm",children:["Status: ",i.status.replace("_"," ")]}),d.jsxs("div",{className:"mt-3 flex flex-wrap gap-2 text-xs",children:[d.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/15 border border-white/25 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-barcode"})," ",i.trackingCode]}),d.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/15 border border-white/25 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-wallet"})," ",to(i.earnings||i.estimatedEarnings||0)]}),d.jsxs("span",{className:"px-3 py-1 rounded-full bg-white/15 border border-white/25 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-route"}),((z=i.route)==null?void 0:z.distance)||"--"," km"]})]})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 text-sm backdrop-blur",children:[d.jsx("i",{className:"fa-solid fa-shield-heart text-white/80"}),d.jsx("span",{children:"Live synced with coordinator"})]})]})}),d.jsxs("div",{className:"p-4 bg-slate-50/60",children:[d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"mb-2 flex justify-between text-sm",children:[d.jsx("span",{className:"text-gray-600",children:"Progress"}),d.jsxs("span",{className:"font-semibold text-gray-800",children:[dE(i),"%"]})]}),d.jsx("div",{className:"w-full bg-slate-200 rounded-full h-2 overflow-hidden",children:d.jsx("div",{className:"bg-gradient-to-r from-[#003366] to-red-600 h-2 rounded-full transition-all duration-500",style:{width:`${dE(i)}%`}})})]}),i.status==="assigned"&&d.jsxs("div",{className:"bg-amber-50 rounded-xl p-4 mb-4 border border-amber-200",children:[d.jsxs("p",{className:"text-amber-900 font-semibold mb-2 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-clock"}),"Assigned to You — Awaiting Acceptance"]}),d.jsx("p",{className:"text-sm text-amber-800 mb-3",children:"This job has been assigned to you by the coordinator. Accept to proceed with delivery."}),d.jsx("button",{onClick:()=>e==null?void 0:e("tasks"),className:"px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700",children:"Go to Jobs Tab to Accept/Decline"})]}),d.jsxs("div",{className:"mb-6 grid gap-3",children:[d.jsxs("div",{className:"flex items-start justify-between bg-white rounded-xl border border-slate-200 p-3 shadow-sm",children:[d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-slate-100 text-slate-400 border border-slate-200"}`,children:["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?d.jsx("i",{className:"fa-solid fa-check"}):"1"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold text-gray-800",children:"Pickup Location"}),d.jsx("div",{className:"text-sm text-gray-600 truncate max-w-xs",children:i.pickupAddress})]})]}),i.status==="accepted"&&d.jsx("button",{onClick:ge,className:"px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-red-600 text-sm font-semibold",children:"Mark as Picked Up"})]}),d.jsxs("div",{className:"flex items-start justify-between bg-white rounded-xl border border-slate-200 p-3 shadow-sm",children:[d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold ${["in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-emerald-50 text-emerald-700 border border-emerald-100":"bg-slate-100 text-slate-400 border border-slate-200"}`,children:["in_transit","out_for_delivery","delivered"].includes(i.status)?d.jsx("i",{className:"fa-solid fa-check"}):"2"}),d.jsxs("div",{children:[d.jsx("div",{className:"font-semibold text-gray-800",children:"Delivery Location"}),d.jsx("div",{className:"text-sm text-gray-600 truncate max-w-xs",children:i.deliveryAddress})]})]}),i.status==="picked_up"&&d.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-[#003366] text-white rounded-lg hover:bg-red-600 text-sm font-semibold",children:"Confirm Delivery"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl border border-slate-200 p-4 shadow-sm",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("div",{className:"font-semibold text-gray-800",children:"Package Details"}),d.jsxs("span",{className:"text-xs text-blue-600 inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"})," Notes"]})]}),d.jsx("div",{className:"text-sm text-gray-700",children:i.packageDescription}),i.deliveryInstructions&&d.jsxs("div",{className:"mt-3 text-sm text-blue-700 inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2",children:[d.jsx("i",{className:"fa-solid fa-lightbulb"}),i.deliveryInstructions]})]})]})]}):d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center mb-6",children:[d.jsx("div",{className:"w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-3xl",children:d.jsx("i",{className:"fa-solid fa-box"})}),d.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"No Active Deliveries"}),d.jsx("p",{className:"text-gray-500 mb-6",children:S==="active"?"Browse available tasks to get started":"You'll be assigned deliveries when you're available"}),d.jsxs("div",{className:"flex gap-3 justify-center flex-wrap",children:[d.jsx("button",{onClick:()=>T("active"),className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow",children:"Set as Available"}),S==="active"&&e&&d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>e("tasks"),className:"px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow",children:"View Available Tasks"}),d.jsx("button",{onClick:()=>e("deliveries"),className:"px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow",children:"View My Deliveries"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-xl shadow",children:[d.jsx("div",{className:"p-4 border-b bg-[#003366] text-white",children:d.jsx("h2",{className:"font-bold",children:"Recent Deliveries"})}),a.length===0?d.jsxs("div",{className:"p-8 text-center",children:[d.jsx("div",{className:"text-4xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-regular fa-inbox"})}),d.jsx("p",{className:"text-gray-500",children:"No completed deliveries yet"})]}):d.jsx("div",{className:"divide-y",children:a.map(W=>{var Q;return d.jsxs("div",{className:"p-4",children:[d.jsxs("div",{className:"flex justify-between items-start mb-2",children:[d.jsxs("div",{children:[d.jsx("div",{className:"font-bold text-gray-800",children:W.trackingCode}),d.jsx("div",{className:"text-sm text-gray-600",children:W.customerName})]}),d.jsx("div",{className:"text-green-600 font-bold",children:to(W.earnings)})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("div",{className:"text-xs text-gray-500",children:Qm((Q=W.deliveryTime)==null?void 0:Q.toDate())}),d.jsxs("span",{className:`px-2 py-1 rounded-full text-xs inline-flex items-center gap-2 ${hU(W.status)}`,children:[d.jsx("i",{className:fU(W.status)}),W.status.replace("_"," ")]})]})]},W.id)})})]})]}),p&&i&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-xl w-full max-w-sm",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-xl font-bold mb-2",children:"Delivery OTP"}),d.jsx("p",{className:"text-gray-600 mb-4",children:"Share this OTP with the recipient to verify delivery"}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"text-sm text-blue-700 mb-1",children:"OTP Code"}),d.jsx("div",{className:"text-3xl font-bold text-blue-800 tracking-widest",children:_||i.otpCode}),d.jsx("div",{className:"text-xs text-blue-600 mt-2",children:"Valid for this delivery only"})]})}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter OTP from recipient"}),d.jsx("input",{type:"text",value:_,onChange:W=>C(W.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full p-3 text-2xl text-center border border-gray-300 rounded-lg tracking-widest",placeholder:"0000",maxLength:4,autoFocus:!0})]}),d.jsxs("div",{className:"flex space-x-3",children:[d.jsx("button",{onClick:()=>{m(!1),C("")},className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Cancel"}),d.jsx("button",{onClick:te,disabled:_.length!==4,className:`flex-1 py-3 rounded-lg ${_.length===4?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Verify & Complete"})]})]})})}),A&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-xl w-full max-w-sm",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-xl font-bold mb-4",children:"Location Sharing"}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"flex items-center mb-4",children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${I?"bg-green-100":"bg-gray-100"}`,children:d.jsx("i",{className:I?"fa-solid fa-location-dot text-green-600":"fa-solid fa-location-crosshairs text-gray-400"})}),d.jsxs("div",{children:[d.jsx("div",{className:"font-medium",children:I?"Sharing Location":"Share Your Location"}),d.jsx("div",{className:"text-sm text-gray-500",children:I?"Your location is being shared with the coordinator":"Enable GPS to share your location in real-time"})]})]}),y&&d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"text-sm text-blue-700",children:[d.jsx("div",{className:"font-medium",children:"Last Location:"}),d.jsxs("div",{children:[y.lat.toFixed(6),","," ",y.lng.toFixed(6)]}),d.jsxs("div",{className:"text-xs",children:["Accuracy: ",b.toFixed(0)," meters"]}),d.jsxs("div",{className:"text-xs",children:["Updated: ",dU(y.timestamp)]})]})}),w&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 mb-4",children:d.jsx("div",{className:"text-sm text-red-700",children:w})}),it&&d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"text-sm text-yellow-700 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),d.jsx("span",{children:"You’re on an active delivery. Disabling location sharing may affect tracking."})]})}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"text-sm text-blue-700 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-lightbulb"}),d.jsx("span",{children:"Location sharing uses GPS and may consume battery."})]})})]}),d.jsxs("div",{className:"flex space-x-3",children:[d.jsx("button",{onClick:()=>R(!1),className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Close"}),I?d.jsx("button",{onClick:()=>{it?window.confirm("Are you sure? Disabling location sharing may affect tracking.")&&(N(),ye.updateShareLocation(!1),R(!1)):(N(),ye.updateShareLocation(!1),R(!1))},className:"flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Stop Sharing"}):d.jsx("button",{onClick:()=>{N(),ye.updateShareLocation(!0),R(!1)},className:"flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Start Sharing"})]})]})})}),x&&i&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto",children:[d.jsx("div",{className:"p-6 border-b sticky top-0 bg-white",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"text-xl font-bold",children:"Route Details"}),d.jsx("button",{onClick:()=>D(!1),className:"text-gray-500 hover:text-gray-700 text-2xl",children:d.jsx("i",{className:"fa-solid fa-xmark"})})]})}),d.jsxs("div",{className:"p-6",children:[i.route?d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[d.jsx("p",{className:"text-sm text-blue-700 font-semibold",children:"Distance"}),d.jsxs("p",{className:"text-2xl font-bold text-blue-900",children:[i.route.distance||"?"," km"]})]}),d.jsxs("div",{className:"bg-green-50 rounded-lg p-4",children:[d.jsx("p",{className:"text-sm text-green-700 font-semibold",children:"Est. Time"}),d.jsxs("p",{className:"text-2xl font-bold text-green-900",children:[i.route.duration||"?"," min"]})]})]}),d.jsxs("div",{className:"border rounded-lg p-4",children:[d.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-3",children:"Pickup"}),d.jsx("p",{className:"text-gray-800",children:i.pickupAddress})]}),d.jsxs("div",{className:"border rounded-lg p-4",children:[d.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-3",children:"Delivery"}),d.jsx("p",{className:"text-gray-800",children:i.deliveryAddress})]}),i.route.polyline&&d.jsx("div",{className:"border rounded-lg p-4 bg-gray-50",children:d.jsxs("p",{className:"text-sm text-gray-600 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Full route details available in map view"]})})]}):d.jsx("div",{className:"text-center py-8",children:d.jsx("p",{className:"text-gray-500",children:"Route details not available yet"})}),d.jsx("button",{onClick:()=>D(!1),className:"w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Close"})]})]})})]})}function t5(){const[t,e]=O.useState("assigned"),[n,r]=O.useState([]),[s,i]=O.useState([]),[o,a]=O.useState(!0),[l,u]=O.useState(null),[h,p]=O.useState(!1),{isSharing:m,startSharing:_}=zN();O.useEffect(()=>{a(!0),(async()=>{try{const F=await ye.getCarrierProfile();F!=null&&F.shareLocation&&!m&&(console.log("🔄 Restoring location sharing on AvailableTasks..."),_())}catch(F){console.error("Error restoring location sharing:",F)}})();const D=ye.subscribeToAssignedDeliveries(F=>{r(F),a(!1)}),V=ye.subscribeToAvailableTasks(F=>{i(F),a(!1)});return()=>{D(),V()}},[]);const C=async x=>{if(!m){p(!0);return}u(x);try{await ye.acceptAssignedDelivery(x,m)?(Y.success("Job accepted. Check dashboard for details."),r(V=>V.filter(F=>F.id!==x))):Y.error("Failed to accept job")}catch(D){console.error("Error accepting job:",D),Y.error("Error accepting job")}finally{u(null)}},A=async x=>{u(x);try{await ye.declineAssignedDelivery(x)?(Y.success("Job declined"),r(V=>V.filter(F=>F.id!==x))):Y.error("Failed to decline job")}catch(D){console.error("Error declining job:",D),Y.error("Error declining job")}finally{u(null)}},R=async x=>{u(x);try{await ye.acceptTask(x)?(Y.success("Task accepted. You are now on this delivery."),i(V=>V.filter(F=>F.id!==x))):Y.error("Failed to accept task")}catch(D){console.error("Error accepting task:",D),Y.error("Error accepting task")}finally{u(null)}};if(o)return d.jsx("div",{className:"min-h-screen bg-gray-50 p-4 flex items-center justify-center",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),d.jsx("p",{className:"mt-4 text-gray-600",children:"Loading tasks..."})]})});const S=n.length,E=s.length;return d.jsxs("div",{className:"min-h-screen bg-slate-50 pb-24",children:[d.jsx(Kh,{position:"top-center"}),d.jsx("div",{className:"bg-white/95 backdrop-blur shadow-sm border-b sticky top-0 z-10",children:d.jsxs("div",{className:"px-4 py-4",children:[d.jsx("div",{className:"flex items-center justify-between gap-3 mb-4",children:d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Jobs & Tasks"}),d.jsx("p",{className:"text-sm text-gray-500",children:"Accept assignments quickly and track available deliveries"})]})}),d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>e("assigned"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${t==="assigned"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-6 h-6 rounded-full inline-flex items-center justify-center ${t==="assigned"?"bg-blue-100 text-blue-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-thumbtack"})}),"Assigned",d.jsx("span",{className:"text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full",children:S})]}),d.jsxs("button",{onClick:()=>e("available"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${t==="available"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-6 h-6 rounded-full inline-flex items-center justify-center ${t==="available"?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-list-check"})}),"Available",d.jsx("span",{className:"text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full",children:E})]})]})]})}),d.jsxs("div",{className:"p-4",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[d.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-4",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Assigned"}),d.jsx("p",{className:"text-2xl font-bold text-blue-700",children:S})]}),d.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-thumbtack"})})]})}),d.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-4",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Available"}),d.jsx("p",{className:"text-2xl font-bold text-emerald-700",children:E})]}),d.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-list-check"})})]})})]}),t==="assigned"&&d.jsx("div",{children:S===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-4xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-solid fa-thumbtack"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No assigned jobs"}),d.jsx("p",{className:"text-gray-600",children:"When coordinator assigns you a job, it will appear here."})]}):d.jsx("div",{className:"space-y-4",children:n.map(x=>d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4",children:[x.status==="assigned"&&d.jsxs("div",{className:"bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-200",children:[d.jsxs("p",{className:"text-sm text-yellow-900 font-semibold inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-clock"}),"This job has been assigned to you. Accept to proceed."]}),!m&&d.jsxs("p",{className:"text-xs text-yellow-700 mt-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot mr-1"}),d.jsx("strong",{children:"Location sharing required"})," to accept this job"]})]}),d.jsxs("div",{className:"flex justify-between items-start mb-3",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:x.trackingCode}),d.jsx("span",{className:`text-xs font-bold px-2 py-1 rounded ${x.status==="assigned"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:x.status==="assigned"?"Awaiting Acceptance":"Accepted"})]}),d.jsx("h3",{className:"font-semibold text-gray-800",children:x.customerName||"Unknown Customer"})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",x.earnings||x.estimatedEarnings||0]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Payment"})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 mb-3",children:[d.jsxs("p",{className:"text-sm text-gray-700 mb-2 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-box"}),d.jsx("strong",{children:"Package:"})," ",x.packageDescription]}),x.packageWeight&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-solid fa-scale-balanced mr-1"}),d.jsx("strong",{children:"Weight:"})," ",x.packageWeight,"kg"]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Pickup"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:x.pickupAddress})]}),d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-flag-checkered"}),"Delivery"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:x.deliveryAddress})]})]}),x.deliveryInstructions&&d.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[d.jsxs("p",{className:"text-xs font-semibold text-blue-800 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"}),"Instructions:"]}),d.jsx("p",{className:"text-sm text-blue-700",children:x.deliveryInstructions})]}),d.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-phone"}),x.recipientPhone]}),x.recipientName&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-user"}),x.recipientName]})]}),x.status==="assigned"?d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>C(x.id),disabled:l===x.id||!m,className:"flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===x.id?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):m?d.jsx(d.Fragment,{children:"Accept Job"}):d.jsx(d.Fragment,{children:"Enable Location to Accept"})}),d.jsx("button",{onClick:()=>A(x.id),disabled:l===x.id,className:"flex-1 py-3 bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-red-700 font-semibold rounded-lg transition",children:"Decline"})]}):d.jsx("div",{className:"bg-green-50 p-3 rounded border border-green-200 text-center",children:d.jsxs("p",{className:"text-sm text-green-900 font-semibold inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"You have accepted this job"]})})]},x.id))})}),t==="available"&&d.jsx("div",{children:E===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-4xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-regular fa-inbox"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No available tasks"}),d.jsx("p",{className:"text-gray-600",children:"Check back soon for new delivery opportunities!"})]}):d.jsx("div",{className:"space-y-4",children:s.map(x=>d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4",children:[d.jsxs("div",{className:"flex justify-between items-start mb-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex items-center gap-2 mb-1",children:d.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:x.trackingCode})}),d.jsx("h3",{className:"font-semibold text-gray-800",children:x.customerName||"Unknown Customer"})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",x.estimatedEarnings||0]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Estimated pay"})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 mb-3",children:[d.jsxs("p",{className:"text-sm text-gray-700 mb-2 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-box"}),d.jsx("strong",{children:"Package:"})," ",x.packageDescription]}),x.packageWeight&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-solid fa-scale-balanced mr-1"}),d.jsx("strong",{children:"Weight:"})," ",x.packageWeight,"kg"]}),x.packageValue&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-regular fa-gem mr-1"}),d.jsx("strong",{children:"Value:"})," L",x.packageValue]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Pickup"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:x.pickupAddress})]}),d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-flag-checkered"}),"Delivery"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:x.deliveryAddress})]})]}),x.deliveryInstructions&&d.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[d.jsx("p",{className:"text-xs font-semibold text-blue-800 mb-1",children:"Instructions:"}),d.jsx("p",{className:"text-sm text-blue-700",children:x.deliveryInstructions})]}),d.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-phone"}),x.customerPhone]}),x.recipientName&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-user"}),x.recipientName]})]}),d.jsx("button",{onClick:()=>R(x.id),disabled:l===x.id,className:"w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===x.id?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):d.jsx(d.Fragment,{children:"Accept Task"})})]},x.id))})}),h&&d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-sm w-full p-6",children:[d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"text-5xl mb-4 text-blue-600",children:d.jsx("i",{className:"fa-solid fa-location-dot"})}),d.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"Enable Location Sharing"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Location sharing is required to accept assigned jobs. This allows the coordinator to track your delivery progress."})]}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("p",{className:"text-sm text-blue-800",children:[d.jsx("span",{className:"font-semibold",children:"What data is shared?"}),d.jsx("br",{}),"Your real-time location while on deliveries. You can disable it anytime."]})}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>p(!1),className:"flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition",children:"Not Now"}),d.jsx("button",{onClick:()=>{_(),p(!1),Y.success("Location sharing enabled. You can now accept jobs.")},className:"flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition",children:"Enable Location"})]})]})})]})]})}class n5{static async updateCarrierLocation(e,n,r,s){try{const i=Te.currentUser;if(!i)return!1;const o=Jr(this.db,`locations/active/${i.uid}/${e}`);return await ll(o,{deliveryId:e,carrierId:i.uid,lat:n,lng:r,accuracy:s||null,timestamp:Date.now(),carrierName:i.displayName||"Unknown",carrierEmail:i.email}),!0}catch(i){return console.error("Error updating carrier location:",i),!1}}static async clearCarrierLocation(e){try{const n=Te.currentUser;if(!n)return!1;const r=Jr(this.db,`locations/active/${n.uid}/${e}`);return await M3(r),!0}catch(n){return console.error("Error clearing carrier location:",n),!1}}static getLocationRef(e,n){return Jr(this.db,`locations/active/${e}/${n}`)}}jn(n5,"db",IN());const r5=async(t,e,n)=>{try{const r=at(we,"deliveries",t),s={status:e,updatedAt:np(),statusHistory:CV({status:e,timestamp:new Date().toISOString(),location:n})};return e==="picked_up"?s.pickupTime=np():e==="delivered"&&(s.deliveryTime=np()),n&&(s.location=n),await an(r,s),{success:!0,message:`Delivery marked as ${e}`}}catch(r){throw console.error("Error updating delivery status:",r),new Error(r.message||"Failed to update delivery status")}},s5=t=>{const[e,n]=O.useState(!1),[r,s]=O.useState(null);return O.useEffect(()=>{},[t]),{carrier:r,loading:e}},i5=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(null),{carrier:s}=s5(),i=(s==null?void 0:s.currentLocation)||{latitude:0,longitude:0},o=(h,p)=>{const m={accepted:["picked_up"],picked_up:["in_transit","stuck"],in_transit:["delivered","stuck"],stuck:["in_transit"]};return m[h]?m[h].includes(p)?{valid:!0}:{valid:!1,message:`Cannot transition from ${h} to ${p}`}:{valid:!1,message:`Cannot update status from ${h}`}};return{updateStatus:async(h,p,m)=>{e(!0),r(null);try{if(m){const _=o(m,p);if(!_.valid)throw new Error(_.message||"Invalid status transition")}return await r5(h,p,i),e(!1),{success:!0,message:`Status updated to ${p}`}}catch(_){const C=_.message||"Failed to update status";throw r(C),e(!1),_}},loading:t,error:n,getAvailableStatuses:h=>{switch(h){case"accepted":return["picked_up"];case"picked_up":return["in_transit","stuck"];case"in_transit":return["delivered","stuck"];case"stuck":return["in_transit"];default:return[]}},getStatusInfo:h=>({picked_up:{label:"Picked Up",icon:"fa-solid fa-box",color:"bg-blue-600",description:"Package collected from pickup location"},in_transit:{label:"In Transit",icon:"fa-solid fa-truck",color:"bg-purple-600",description:"Package is on the way"},stuck:{label:"Stuck",icon:"fa-solid fa-triangle-exclamation",color:"bg-orange-600",description:"Facing delays or issues"},delivered:{label:"Delivered",icon:"fa-solid fa-circle-check",color:"bg-green-600",description:"Package delivered successfully"}})[h]||{label:h,icon:"fa-regular fa-clipboard",color:"bg-gray-600",description:""},validateStatusTransition:o}};function o5(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[s,i]=O.useState("active"),[o,a]=O.useState(!1),[l,u]=O.useState(null),[h,p]=O.useState(""),[m,_]=O.useState(!1),[C,A]=O.useState(null),[R,S]=O.useState(null),{updateStatus:E,getAvailableStatuses:x,getStatusInfo:D}=i5();O.useEffect(()=>{const w=Te.currentUser;if(!w){r(!1);return}const b=wn(vn(we,"deliveries"),et("carrierId","==",w.uid),Qs("createdAt","desc")),N=nl(b,k=>{const T=[];k.forEach(ge=>{var ft,it,z;const te=ge.data();T.push({id:ge.id,customerId:te.customerId,carrierId:te.carrierId,carrierName:te.carrierName||"",customerName:te.customerName||"Unknown",customerPhone:te.customerPhone||"",deliveryAddress:te.deliveryAddress||"",pickupAddress:te.pickupAddress||"",status:te.status||"pending",createdAt:((ft=te.createdAt)==null?void 0:ft.toDate())||new Date,assignedAt:(it=te.assignedAt)==null?void 0:it.toDate(),deliveryDate:(z=te.deliveryDate)==null?void 0:z.toDate(),distance:te.distance||0,estimatedEarnings:te.estimatedEarnings||0,earnings:te.earnings||0,proofOfDelivery:te.proofOfDelivery,trackingCode:te.trackingCode||`TRK${ge.id.slice(0,8).toUpperCase()}`,packageDescription:te.packageDescription||"No description",packageWeight:te.packageWeight||0,recipientName:te.recipientName||te.customerName,recipientPhone:te.recipientPhone||te.customerPhone,deliveryInstructions:te.deliveryInstructions})}),e(T),r(!1)},k=>{console.error("Error loading deliveries:",k),Y.error("Failed to load deliveries"),r(!1)});return()=>N()},[]);const V=t.filter(w=>s==="active"?["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status):s==="completed"?w.status==="delivered":!0),F=async(w,b)=>{A(w);try{const N=t.find(k=>k.id===w);if(!N)throw new Error("Delivery not found");await E(w,b,N.status),Y.success(`Status updated to ${b.replace("_"," ")}`),e(k=>k.map(T=>T.id===w?{...T,status:b}:T))}catch(N){console.error("Error updating delivery status:",N),Y.error(N.message||"Failed to update status")}finally{A(null)}},I=async()=>{var w;if(!l||!h){Y.error("Please enter OTP");return}if(!((w=l.proofOfDelivery)!=null&&w.otp)){Y.error("No OTP set for this delivery");return}if(h!==l.proofOfDelivery.otp){Y.error("Invalid OTP. Please try again."),p("");return}_(!0);try{await F(l.id,"delivered"),Y.success("Delivery completed successfully."),a(!1),p(""),u(null),t.filter(N=>["assigned","accepted","picked_up","in_transit","stuck"].includes(N.status)&&N.id!==l.id).length===0&&(await ye.updateCarrierStatus("active"),Y.success("Status updated to Active"))}catch(b){console.error("Error completing delivery:",b),Y.error("Failed to complete delivery")}finally{_(!1)}},y=w=>{const b="px-3 py-1 rounded-full text-xs font-bold";switch(w){case"pending":return d.jsxs("span",{className:`${b} bg-gray-100 text-gray-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-regular fa-clock"}),"Pending"]});case"assigned":return d.jsxs("span",{className:`${b} bg-blue-100 text-blue-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Assigned"]});case"accepted":return d.jsxs("span",{className:`${b} bg-indigo-100 text-indigo-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-hand"}),"Accepted"]});case"picked_up":return d.jsxs("span",{className:`${b} bg-blue-200 text-blue-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-box"}),"Picked Up"]});case"in_transit":return d.jsxs("span",{className:`${b} bg-purple-100 text-purple-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-truck"}),"In Transit"]});case"stuck":return d.jsxs("span",{className:`${b} bg-orange-100 text-orange-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),"Stuck"]});case"delivered":return d.jsxs("span",{className:`${b} bg-green-100 text-green-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Delivered"]});default:return d.jsx("span",{className:`${b} bg-gray-100 text-gray-800`,children:w})}};return n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):d.jsxs("div",{className:"min-h-screen bg-slate-50 p-4 md:p-6",children:[d.jsx(Kh,{position:"top-right"}),d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Deliveries"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your active and completed deliveries"})]}),d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 mb-6",children:[d.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="active"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-bolt"}),"Active",d.jsx("span",{className:"text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full",children:t.filter(w=>["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status)).length})]}),d.jsxs("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="completed"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Completed",d.jsx("span",{className:"text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full",children:t.filter(w=>w.status==="delivered").length})]}),d.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="all"?"bg-white text-gray-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-layer-group"}),"All",d.jsx("span",{className:"text-xs font-bold text-gray-700 bg-gray-200 px-2 py-0.5 rounded-full",children:t.length})]})]})}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[d.jsx("div",{className:"bg-blue-50 rounded-lg p-3 border border-blue-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-blue-700 font-semibold",children:"Total Earnings"}),d.jsx("p",{className:"text-lg font-bold text-blue-900",children:to(t.reduce((w,b)=>w+(b.earnings||0),0))})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-wallet"})})]})}),d.jsx("div",{className:"bg-emerald-50 rounded-lg p-3 border border-emerald-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-emerald-700 font-semibold",children:"Active"}),d.jsx("p",{className:"text-lg font-bold text-emerald-900",children:t.filter(w=>["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status)).length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-bolt"})})]})}),d.jsx("div",{className:"bg-purple-50 rounded-lg p-3 border border-purple-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-purple-700 font-semibold",children:"Completed"}),d.jsx("p",{className:"text-lg font-bold text-purple-900",children:t.filter(w=>w.status==="delivered").length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-circle-check"})})]})}),d.jsx("div",{className:"bg-orange-50 rounded-lg p-3 border border-orange-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-orange-700 font-semibold",children:"Total"}),d.jsx("p",{className:"text-lg font-bold text-orange-900",children:t.length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-orange-100 text-orange-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-layer-group"})})]})})]})]}),V.length===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-5xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-solid fa-box"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No deliveries found"}),d.jsx("p",{className:"text-gray-500",children:s==="active"?"No active deliveries at the moment":s==="completed"?"You haven't completed any deliveries yet":"You don't have any deliveries"})]}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:V.map(w=>{const b=x(w.status),N=R===w.id;return d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition",children:[d.jsx("div",{className:"p-4 border-b bg-gradient-to-r from-gray-50 to-gray-100",children:d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[y(w.status),d.jsx("span",{className:"text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border",children:w.trackingCode})]}),d.jsx("h3",{className:"font-bold text-gray-800",children:w.customerName})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-xl font-bold text-green-600",children:to(w.earnings||w.estimatedEarnings||0)}),d.jsx("p",{className:"text-xs text-gray-500",children:"Earnings"})]})]})}),d.jsx("div",{className:"p-4",children:d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex items-start",children:[d.jsx("span",{className:"text-blue-600 mr-2",children:d.jsx("i",{className:"fa-solid fa-location-dot"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Pickup"}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.pickupAddress})]})]}),d.jsxs("div",{className:"flex items-start",children:[d.jsx("span",{className:"text-green-600 mr-2",children:d.jsx("i",{className:"fa-solid fa-flag-checkered"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Delivery"}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.deliveryAddress})]})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[d.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-1",children:"Package"}),d.jsxs("div",{className:"flex justify-between text-sm",children:[d.jsx("span",{className:"text-gray-600 truncate mr-2",children:w.packageDescription}),w.packageWeight>0&&d.jsxs("span",{className:"font-medium whitespace-nowrap",children:[w.packageWeight," kg"]})]})]}),N&&d.jsxs("div",{className:"pt-3 border-t space-y-3",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Recipient"}),d.jsx("p",{className:"text-sm font-medium",children:w.recipientName}),d.jsx("p",{className:"text-sm text-gray-600",children:w.recipientPhone})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Created"}),d.jsx("p",{className:"text-sm",children:Qm(w.createdAt)})]})]}),w.deliveryInstructions&&d.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[d.jsxs("p",{className:"text-xs font-semibold text-yellow-800 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"}),"Instructions"]}),d.jsx("p",{className:"text-sm text-yellow-900",children:w.deliveryInstructions})]}),w.distance>0&&d.jsxs("div",{className:"flex items-center justify-between text-sm",children:[d.jsx("span",{className:"text-gray-600",children:"Distance:"}),d.jsxs("span",{className:"font-medium",children:[w.distance.toFixed(1)," km"]})]})]}),b.length>0&&d.jsx("div",{className:"pt-3 border-t",children:d.jsxs("div",{className:"mb-2",children:[d.jsx("p",{className:"text-xs text-gray-500 font-medium mb-1",children:"Update Status"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(k=>{const T=D(k);return d.jsxs("button",{onClick:()=>F(w.id,k),disabled:C===w.id,className:`px-3 py-2 rounded-lg text-white text-xs font-medium transition ${T.color} hover:opacity-90 disabled:opacity-50 flex items-center gap-1`,children:[d.jsx("i",{className:T.icon}),d.jsx("span",{children:T.label})]},k)})})]})}),w.status==="in_transit"&&!b.includes("delivered")&&d.jsxs("button",{onClick:()=>{u(w),a(!0)},className:"w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-md transition flex items-center justify-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Complete Delivery"]})]})}),d.jsxs("div",{className:"px-4 py-3 bg-gray-50 border-t flex justify-between items-center",children:[d.jsxs("button",{onClick:()=>S(N?null:w.id),className:"text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1",children:[d.jsx("span",{children:N?"▲":"▼"}),N?"Show Less":"More Details"]}),d.jsx("div",{className:"text-xs text-gray-500",children:w.assignedAt&&`Assigned: ${Qm(w.assignedAt)}`})]})]},w.id)})}),o&&l&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-md",children:d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex justify-between items-start mb-6",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Verify Delivery OTP"}),d.jsx("button",{onClick:()=>{a(!1),p(""),u(null)},className:"text-gray-400 hover:text-gray-600 text-2xl",children:d.jsx("i",{className:"fa-solid fa-xmark"})})]}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[d.jsxs("p",{className:"text-blue-800 font-medium text-sm",children:[d.jsx("i",{className:"fa-solid fa-location-dot mr-2"}),l.deliveryAddress]}),d.jsx("p",{className:"text-blue-700 text-xs mt-2",children:"Ask the customer for their OTP code"})]}),d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Customer OTP Code"}),d.jsx("input",{type:"text",placeholder:"Enter 4-digit OTP",maxLength:4,value:h,onChange:w=>p(w.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500",autoFocus:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"The customer will provide this code from their delivery notification"})]}),d.jsxs("div",{className:"flex space-x-4",children:[d.jsx("button",{onClick:()=>{a(!1),p(""),u(null)},className:"flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium",children:"Cancel"}),d.jsx("button",{onClick:I,disabled:m||h.length!==4,className:`flex-1 px-4 py-3 rounded-lg font-medium ${h.length===4&&!m?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:m?d.jsxs("span",{className:"flex items-center justify-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"✓ Complete Delivery"})]})]})})}),V.length>0&&d.jsx("div",{className:"mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-4",children:d.jsxs("div",{className:"flex flex-wrap justify-between items-center",children:[d.jsxs("div",{className:"text-sm text-gray-600",children:["Showing"," ",d.jsx("span",{className:"font-bold text-gray-800",children:V.length})," ","of"," ",d.jsx("span",{className:"font-bold text-gray-800",children:t.length})," ","deliveries"]}),d.jsxs("div",{className:"text-sm text-gray-600",children:["Last updated:"," ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})})]})}function a5({user:t}){const[e,n]=O.useState("dashboard"),r=()=>{switch(e){case"dashboard":return d.jsx(fE,{user:t,onNavigate:n});case"tasks":return d.jsx(t5,{});case"deliveries":return d.jsx(o5,{});default:return d.jsx(fE,{user:t,onNavigate:n})}};return d.jsxs("div",{className:"min-h-screen bg-slate-50",children:[d.jsx("div",{className:"hidden md:block sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200",children:d.jsx("div",{className:"max-w-6xl mx-auto px-4 py-3",children:d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>n("dashboard"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="dashboard"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="dashboard"?"bg-blue-100 text-blue-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-chart-column"})}),"Dashboard"]}),d.jsxs("button",{onClick:()=>n("deliveries"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="deliveries"?"bg-white text-purple-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="deliveries"?"bg-purple-100 text-purple-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-box"})}),"Deliveries"]}),d.jsxs("button",{onClick:()=>n("tasks"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="tasks"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="tasks"?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-regular fa-clipboard"})}),"Tasks"]})]})})}),r(),d.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50 md:hidden",children:d.jsxs("div",{className:"max-w-full mx-auto flex justify-around",children:[d.jsx("button",{onClick:()=>n("dashboard"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="dashboard"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-solid fa-chart-column text-lg"}),d.jsx("span",{children:"Dashboard"})]})}),d.jsx("button",{onClick:()=>n("deliveries"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="deliveries"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-solid fa-box text-lg"}),d.jsx("span",{children:"Deliveries"})]})}),d.jsx("button",{onClick:()=>n("tasks"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="tasks"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-regular fa-clipboard text-lg"}),d.jsx("span",{children:"Tasks"})]})})]})})]})}const pp="carrier";function l5(){const[t,e]=O.useState(!0),[n,r]=O.useState(null),[s,i]=O.useState(null);return O.useEffect(()=>{const o=Q2(Te,async a=>{var l;if(a){const u=await Ad(at(we,"users",a.uid)),h=u.exists()?(l=u.data())==null?void 0:l.role:null;i(h),r(a)}else r(null),i(null);e(!1)});return()=>o()},[]),d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:d.jsx("p",{className:"text-2xl font-semibold text-gray-700",children:"Loading PTROS..."})}),!t&&!n&&d.jsx($N,{}),!t&&n&&s!==pp&&d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:d.jsxs("div",{className:"text-center p-10",children:[d.jsx("h1",{className:"text-5xl font-bold text-red-600 mb-6",children:"Access Denied"}),d.jsxs("p",{className:"text-xl mb-4",children:["This portal is for ",d.jsxs("strong",{children:[pp,"s"]})," only."]}),d.jsxs("p",{className:"text-lg",children:["You are logged in with role: ",d.jsx("strong",{children:s||"none"})]}),d.jsx("button",{onClick:()=>Te.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===pp&&d.jsx(a5,{user:n}),d.jsx(Kh,{})]})}function c5(){const t=Qg(),e=O.useRef(null),[n,r]=O.useState({email:"",password:"",confirmPassword:"",fullName:"",phone:"",whatsapp:"",address:"",city:"Maseru",vehicleType:"",licensePlate:"",idNumber:"",profilePicture:null,acceptTerms:!1}),[s,i]=O.useState(!1),[o,a]=O.useState(""),[l,u]=O.useState(1),[h,p]=O.useState(null),[m,_]=O.useState(!1),C=y=>new Promise((w,b)=>{const N=new FileReader;N.onload=k=>{var ge;const T=new Image;T.src=(ge=k.target)==null?void 0:ge.result,T.onload=()=>{const te=document.createElement("canvas"),ft=te.getContext("2d");if(!ft){b(new Error("Could not get canvas context"));return}const it=200;te.width=it,te.height=it;const z=T.width,W=T.height,Q=Math.min(z,W),ae=(z-Q)/2,Ne=(W-Q)/2;ft.drawImage(T,ae,Ne,Q,Q,0,0,it,it),te.toBlob(on=>{if(on){const sr=`profile_${Date.now()}.jpg`,Qt=new File([on],sr,{type:"image/jpeg",lastModified:Date.now()});w(Qt)}else b(new Error("Failed to create image blob"))},"image/jpeg",.85)},T.onerror=()=>b(new Error("Failed to load image"))},N.onerror=()=>b(new Error("Failed to read file")),N.readAsDataURL(y)}),A=async y=>{var k;const{name:w,value:b,type:N}=y.target;if(N==="checkbox"){const T=y.target.checked;r(ge=>({...ge,[w]:T}))}else if(N==="file"){const T=(k=y.target.files)==null?void 0:k[0];if(T){_(!0),a("");try{if(!["image/jpeg","image/jpg","image/png","image/webp","image/gif"].includes(T.type)){a("Please upload an image file (JPEG, PNG, WebP, GIF)"),_(!1);return}if(T.size>5*1024*1024){a("Image size should be less than 5MB"),_(!1);return}console.log("🖼️ Processing image...");const te=await C(T);if(console.log("Image processed successfully"),console.log("Original size:",T.size,"bytes"),console.log("Processed size:",te.size,"bytes"),te.size===0)throw new Error("Processed image is empty");r(it=>({...it,profilePicture:te}));const ft=new FileReader;ft.onloadend=()=>{p(ft.result),_(!1)},ft.readAsDataURL(te)}catch(ge){console.error("Image processing error:",ge),a("Failed to process image. Please try another image."),_(!1)}}}else r(T=>({...T,[w]:b}))},R=()=>{r(y=>({...y,profilePicture:null})),p(null),e.current&&(e.current.value="")},S=()=>n.profilePicture?n.fullName.trim()?n.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?n.password.length<8?(a("Password must be at least 8 characters"),!1):n.password!==n.confirmPassword?(a("Passwords do not match"),!1):!0:(a("Valid email is required"),!1):(a("Full name is required"),!1):(a("Profile picture is required"),!1),E=()=>n.phone.match(/^\+?[0-9\s\-]{10,}$/)?n.address.trim()?!0:(a("Physical address is required"),!1):(a("Valid phone number is required"),!1),x=()=>{a(""),!(l===1&&!S())&&(l===2&&!E()||u(l+1))},D=()=>{a(""),u(l-1)},V=async y=>{if(y.preventDefault(),i(!0),a(""),console.log("Starting registration process..."),!n.acceptTerms){a("You must accept the terms and conditions"),i(!1);return}try{console.log("Step 1: Creating Firebase Auth user...");const b=(await z2(Te,n.email,n.password)).user.uid;if(console.log("Auth user created. User ID:",b),!n.profilePicture)throw new Error("Profile picture is required");if(console.log("Step 2: Uploading profile picture..."),console.log("File details:",{name:n.profilePicture.name,size:n.profilePicture.size,type:n.profilePicture.type}),n.profilePicture.size===0)throw new Error("Profile picture file is empty (0 bytes)");const N=`carriers/${b}/profile.jpg`;console.log("Storage path:",N);const k=nU(lU,N);console.log("Uploading file to Firebase Storage..."),await eU(k,n.profilePicture),console.log("File uploaded successfully"),console.log("🔗 Getting download URL...");const T=await tU(k);console.log("Download URL obtained"),console.log("💾 Saving user data to Firestore..."),await PV(at(we,"users",b),{email:n.email,role:"carrier",fullName:n.fullName,phone:n.phone,whatsapp:n.whatsapp||n.phone,address:n.address,city:n.city,country:"Lesotho",vehicleType:n.vehicleType||"Not specified",licensePlate:n.licensePlate||"Not specified",idNumber:n.idNumber||"Not specified",photoURL:T,isApproved:!1,status:"pending",earnings:0,completedDeliveries:0,rating:0,createdAt:new Date,updatedAt:new Date,registrationStep:"completed",hasProfilePicture:!0}),console.log("Firestore document saved"),alert(`Registration Successful!

Your application has been submitted. Please wait for coordinator approval.

Your profile picture has been uploaded successfully.`),console.log("🎉 Registration complete! Redirecting to login..."),t("/login")}catch(w){if(console.error("Registration error:",w),w.code==="auth/email-already-in-use")try{const b=await H2(Te,n.email);console.log("Existing sign-in methods for email:",b),b.length===0?a("This email is already registered. Please login or use a different email."):a(`This email is already registered. Sign-in methods: ${b.join(", ")}. If you used a password, try signing in or reset your password from the login screen.`)}catch(b){console.error("Error fetching sign-in methods:",b),a("This email is already registered. Please login or use a different email.")}else w.code==="auth/weak-password"?a("Password is too weak. Use at least 8 characters with letters and numbers."):w.code==="auth/invalid-email"?a("Invalid email address. Please enter a valid email."):w.code==="storage/unknown"?a("Storage error. Please check if Firebase Storage is enabled."):w.code==="storage/unauthorized"?a("Storage permission denied. Please check Firebase Storage rules."):a(w.message||"Registration failed. Please try again.")}finally{i(!1)}},F=["Maseru","Teyateyaneng","Mafeteng","Hlotse","Mohale's Hoek","Maputsoe","Qacha's Nek","Quthing","Butha-Buthe","Mokhotlong","Thaba-Tseka","Semonkong","Roma"],I=["Motorcycle","Car","Van","Pickup Truck","Bicycle","Scooter","Other"];return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:d.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(lo,{to:"/",className:"inline-block mb-4",children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),d.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]})}),d.jsx("h2",{className:"text-2xl font-semibold text-gray-700",children:"Join Our Delivery Network"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Register as a carrier and start earning today"})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d.jsx("div",{className:`text-sm font-medium ${l>=1?"text-blue-600":"text-gray-400"}`,children:"1. Account"}),d.jsx("div",{className:`text-sm font-medium ${l>=2?"text-blue-600":"text-gray-400"}`,children:"2. Contact"}),d.jsx("div",{className:`text-sm font-medium ${l>=3?"text-blue-600":"text-gray-400"}`,children:"3. Vehicle"}),d.jsx("div",{className:`text-sm font-medium ${l>=4?"text-blue-600":"text-gray-400"}`,children:"4. Review"})]}),d.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:d.jsx("div",{className:"h-full bg-blue-600 rounded-full transition-all duration-300",style:{width:`${(l-1)*33.33}%`}})})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[o&&d.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-6",children:[d.jsx("p",{className:"text-red-700",children:o}),o.includes("already registered")&&d.jsx(lo,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium text-sm block mt-1",children:"Click here to login instead"})]}),d.jsxs("form",{onSubmit:V,children:[l===1&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Account Information"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Profile Picture ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("div",{className:"flex-shrink-0",children:m?d.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"}),d.jsx("span",{className:"text-xs text-gray-500 mt-2 block",children:"Processing..."})]})}):h?d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:h,alt:"Profile preview",className:"w-24 h-24 rounded-full object-cover border-2 border-blue-500",style:{objectFit:"cover"}}),d.jsx("button",{type:"button",onClick:R,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600",children:"×"})]}):d.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:d.jsxs("div",{className:"text-center",children:[d.jsx("span",{className:"text-gray-500 block text-xs",children:"Upload photo"}),d.jsx("span",{className:"text-xs text-red-500 block mt-1",children:"Required"})]})})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("input",{ref:e,type:"file",name:"profilePicture",onChange:A,accept:"image/*",className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,disabled:m}),d.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Clear front-facing photo. Max 5MB. Cropped to square."}),!n.profilePicture&&!m&&d.jsx("p",{className:"text-red-500 font-medium mt-2 text-xs",children:"Please upload your profile picture to continue."})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),d.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"John Doe",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),d.jsx("input",{type:"email",name:"email",value:n.email,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"john@example.com",required:!0})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password *"}),d.jsx("input",{type:"password",name:"password",value:n.password,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"At least 8 characters",minLength:8,required:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Minimum 8 characters with letters and numbers"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password *"}),d.jsx("input",{type:"password",name:"confirmPassword",value:n.confirmPassword,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Confirm your password",required:!0})]})]})]}),d.jsx("div",{className:"mt-8 flex justify-end",children:d.jsx("button",{type:"button",onClick:x,disabled:!n.profilePicture||m,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed",children:m?d.jsxs("span",{className:"flex items-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing Image..."]}):"Next: Contact Details →"})})]}),l===2&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Contact Details"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),d.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),d.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000 (optional)"}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Provide if different from phone number"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),d.jsx("select",{name:"city",value:n.city,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,children:F.map(y=>d.jsx("option",{value:y,children:y},y))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Physical Address *"}),d.jsx("textarea",{name:"address",value:n.address,onChange:A,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"House number, street, area",required:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"This is where you'll receive official correspondence"})]})]}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:D,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"button",onClick:x,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Vehicle Details →"})]})]}),l===3&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Vehicle Information"}),d.jsx("p",{className:"text-gray-600 mb-6",children:"This information helps us assign appropriate deliveries"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Vehicle Type"}),d.jsxs("select",{name:"vehicleType",value:n.vehicleType,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[d.jsx("option",{value:"",children:"Select your vehicle type"}),I.map(y=>d.jsx("option",{value:y,children:y},y))]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"License Plate"}),d.jsx("input",{type:"text",name:"licensePlate",value:n.licensePlate,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"e.g., A1234BC"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ID Number"}),d.jsx("input",{type:"text",name:"idNumber",value:n.idNumber,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"National ID or Passport"})]})]})]}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:D,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"button",onClick:x,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Review & Submit →"})]})]}),l===4&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Review & Submit"}),d.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[d.jsx("h4",{className:"font-semibold text-lg mb-4",children:"Your Information"}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),d.jsx("p",{className:"font-medium",children:n.fullName})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),d.jsx("p",{className:"font-medium",children:n.email})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Phone"}),d.jsx("p",{className:"font-medium",children:n.phone})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"City"}),d.jsx("p",{className:"font-medium",children:n.city})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Address"}),d.jsx("p",{className:"font-medium",children:n.address})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Vehicle Type"}),d.jsx("p",{className:"font-medium",children:n.vehicleType||"Not specified"})]}),d.jsxs("div",{className:"col-span-2",children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Profile Picture"}),d.jsx("div",{className:"flex items-center mt-2",children:h?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:h,alt:"Profile preview",className:"w-20 h-20 rounded-full object-cover border-2 border-green-500",style:{objectFit:"cover"}}),d.jsx("div",{className:"absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs",children:d.jsx("i",{className:"fa-solid fa-check"})})]}),d.jsxs("div",{className:"ml-3",children:[d.jsx("span",{className:"text-green-600 font-medium block",children:d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Uploaded and optimized"]})}),d.jsx("span",{className:"text-xs text-gray-500 block mt-1",children:"Cropped to square (200×200 pixels)"})]})]}):d.jsxs("span",{className:"text-red-500 font-medium inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-xmark"}),"No picture uploaded"]})})]})]})]}),d.jsx("div",{className:"mb-8",children:d.jsxs("div",{className:"flex items-start",children:[d.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:n.acceptTerms,onChange:A,className:"mt-1 mr-3",required:!0}),d.jsx("label",{htmlFor:"acceptTerms",className:"text-sm text-gray-700",children:"I agree to the PTROS Carrier Terms and Conditions. I understand that my account requires coordinator approval before I can start working. I confirm that the profile picture I uploaded is a clear, recent photo of myself."})]})}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("i",{className:"fa-solid fa-circle-info text-blue-600"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-blue-800",children:"Profile Picture Requirement"}),d.jsx("div",{className:"text-sm text-blue-700 mt-1",children:d.jsx("p",{children:"Your profile picture is mandatory for identification and security verification. Applications without a clear profile picture will be rejected."})})]})]})}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("i",{className:"fa-solid fa-triangle-exclamation text-yellow-600"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important Notice"}),d.jsxs("div",{className:"text-sm text-yellow-700 mt-1",children:[d.jsx("p",{children:"Your registration will be reviewed by a coordinator. Approval typically takes 1-2 business days."}),d.jsx("p",{className:"mt-2 font-semibold",children:"Your profile picture will be used for:"}),d.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1",children:[d.jsx("li",{children:"Identity verification by coordinators"}),d.jsx("li",{children:"Customer identification during deliveries"}),d.jsx("li",{children:"Security and safety purposes"})]})]})]})]})}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:D,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"submit",disabled:s||!n.acceptTerms||!n.profilePicture,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?d.jsxs("span",{className:"flex items-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Submitting..."]}):"Submit Registration"})]})]})]})]}),d.jsxs("div",{className:"text-center mt-8",children:[d.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",d.jsx(lo,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Login here"})]}),d.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Need help? Contact PTROS Support: support@ptros.co.ls or +266 2222 3333"})]})]})})}function u5(){const[t,e]=O.useState(""),[n,r]=O.useState(!1),[s,i]=O.useState(""),[o,a]=O.useState(!1),l=async u=>{u.preventDefault(),r(!0),i("");try{await $2(Te,t),a(!0)}catch(h){h.code==="auth/invalid-email"?i("Please enter a valid email address."):h.code==="auth/user-not-found"?i("No account found for that email."):h.code==="auth/too-many-requests"?i("Too many attempts. Please try again later."):h.code==="auth/network-request-failed"?i("Network error. Please check your connection."):i(h.message||"Could not send reset email.")}finally{r(!1)}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900",children:d.jsx("div",{className:"flex items-center justify-center p-4",children:d.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-white/95 backdrop-blur shadow-2xl p-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl",children:"P"}),d.jsx("h1",{className:"text-2xl font-bold text-gray-800 mt-4",children:"Reset your password"}),d.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your email and we’ll send a reset link."})]}),s&&d.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700",children:s}),o?d.jsx("div",{className:"rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700",children:"Reset link sent! Check your inbox."}):d.jsxs("form",{onSubmit:l,className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"you@example.com",value:t,onChange:u=>e(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,disabled:n})]}),d.jsx("button",{type:"submit",disabled:n,className:"w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition",children:n?"Sending...":"Send reset link"})]}),d.jsx("div",{className:"mt-8 text-center text-sm",children:d.jsx(lo,{to:"/login",className:"text-blue-600 hover:text-blue-800",children:"← Back to login"})})]})})})}mp.createRoot(document.getElementById("root")).render(d.jsx(IE.StrictMode,{children:d.jsx(tP,{children:d.jsxs(KR,{children:[d.jsx(Oa,{path:"/",element:d.jsx(l5,{})}),d.jsx(Oa,{path:"/login",element:d.jsx($N,{})}),d.jsx(Oa,{path:"/register",element:d.jsx(c5,{})}),d.jsx(Oa,{path:"/forgot-password",element:d.jsx(u5,{})})]})})}));
