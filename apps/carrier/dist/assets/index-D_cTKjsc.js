var kA=Object.defineProperty;var PA=(t,e,n)=>e in t?kA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var jn=(t,e,n)=>PA(t,typeof e!="symbol"?e+"":e,n);function DA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function OA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yx={exports:{}},zh={},vx={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),LA=Symbol.for("react.portal"),jA=Symbol.for("react.fragment"),MA=Symbol.for("react.strict_mode"),VA=Symbol.for("react.profiler"),FA=Symbol.for("react.provider"),UA=Symbol.for("react.context"),BA=Symbol.for("react.forward_ref"),$A=Symbol.for("react.suspense"),zA=Symbol.for("react.memo"),WA=Symbol.for("react.lazy"),Nv=Symbol.iterator;function qA(t){return t===null||typeof t!="object"?null:(t=Nv&&t[Nv]||t["@@iterator"],typeof t=="function"?t:null)}var wx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ex=Object.assign,xx={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=xx,this.updater=n||wx}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Tx(){}Tx.prototype=Mo.prototype;function Zm(t,e,n){this.props=t,this.context=e,this.refs=xx,this.updater=n||wx}var eg=Zm.prototype=new Tx;eg.constructor=Zm;Ex(eg,Mo.prototype);eg.isPureReactComponent=!0;var Av=Array.isArray,Ix=Object.prototype.hasOwnProperty,tg={current:null},Sx={key:!0,ref:!0,__self:!0,__source:!0};function Cx(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Ix.call(e,r)&&!Sx.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Kl,type:t,key:i,ref:o,props:s,_owner:tg.current}}function HA(t,e){return{$$typeof:Kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ng(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kl}function GA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rv=/\/+/g;function yf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?GA(""+t.key):e.toString(36)}function au(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kl:case LA:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+yf(o,0):r,Av(s)?(n="",t!=null&&(n=t.replace(Rv,"$&/")+"/"),au(s,e,n,"",function(u){return u})):s!=null&&(ng(s)&&(s=HA(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Rv,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Av(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+yf(i,a);o+=au(i,e,n,l,s)}else if(l=qA(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+yf(i,a++),o+=au(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function kc(t,e,n){if(t==null)return t;var r=[],s=0;return au(t,r,"","",function(i){return e.call(n,i,s++)}),r}function KA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Mt={current:null},lu={transition:null},QA={ReactCurrentDispatcher:Mt,ReactCurrentBatchConfig:lu,ReactCurrentOwner:tg};function bx(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:kc,forEach:function(t,e,n){kc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return kc(t,function(){e++}),e},toArray:function(t){return kc(t,function(e){return e})||[]},only:function(t){if(!ng(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Mo;ue.Fragment=jA;ue.Profiler=VA;ue.PureComponent=Zm;ue.StrictMode=MA;ue.Suspense=$A;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QA;ue.act=bx;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ex({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=tg.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ix.call(e,l)&&!Sx.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Kl,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:UA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FA,_context:t},t.Consumer=t};ue.createElement=Cx;ue.createFactory=function(t){var e=Cx.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:BA,render:t}};ue.isValidElement=ng;ue.lazy=function(t){return{$$typeof:WA,_payload:{_status:-1,_result:t},_init:KA}};ue.memo=function(t,e){return{$$typeof:zA,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=lu.transition;lu.transition={};try{t()}finally{lu.transition=e}};ue.unstable_act=bx;ue.useCallback=function(t,e){return Mt.current.useCallback(t,e)};ue.useContext=function(t){return Mt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Mt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Mt.current.useEffect(t,e)};ue.useId=function(){return Mt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Mt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Mt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Mt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Mt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Mt.current.useReducer(t,e,n)};ue.useRef=function(t){return Mt.current.useRef(t)};ue.useState=function(t){return Mt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Mt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Mt.current.useTransition()};ue.version="18.3.1";vx.exports=ue;var O=vx.exports;const Nx=OA(O),YA=DA({__proto__:null,default:Nx},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JA=O,XA=Symbol.for("react.element"),ZA=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=JA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)e1.call(e,r)&&!n1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:XA,type:t,key:i,ref:o,props:s,_owner:t1.current}}zh.Fragment=ZA;zh.jsx=Ax;zh.jsxs=Ax;yx.exports=zh;var h=yx.exports,gp={},Rx={exports:{}},rn={},kx={exports:{}},Px={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,G){var Q=F.length;F.push(G);e:for(;0<Q;){var ge=Q-1>>>1,Ne=F[ge];if(0<s(Ne,G))F[ge]=G,F[Q]=Ne,Q=ge;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var G=F[0],Q=F.pop();if(Q!==G){F[0]=Q;e:for(var ge=0,Ne=F.length,nr=Ne>>>1;ge<nr;){var Rt=2*(ge+1)-1,Or=F[Rt],Qt=Rt+1,Dn=F[Qt];if(0>s(Or,Q))Qt<Ne&&0>s(Dn,Or)?(F[ge]=Dn,F[Qt]=Q,ge=Qt):(F[ge]=Or,F[Rt]=Q,ge=Rt);else if(Qt<Ne&&0>s(Dn,Q))F[ge]=Dn,F[Qt]=Q,ge=Qt;else break e}}return G}function s(F,G){var Q=F.sortIndex-G.sortIndex;return Q!==0?Q:F.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,_=!1,C=!1,A=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(F){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=F)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function P(F){if(A=!1,w(F),!C)if(n(l)!==null)C=!0,Ge(M);else{var G=n(u);G!==null&&ot(P,G.startTime-F)}}function M(F,G){C=!1,A&&(A=!1,I(E),E=-1),_=!0;var Q=m;try{for(w(G),f=n(l);f!==null&&(!(f.expirationTime>G)||F&&!N());){var ge=f.callback;if(typeof ge=="function"){f.callback=null,m=f.priorityLevel;var Ne=ge(f.expirationTime<=G);G=t.unstable_now(),typeof Ne=="function"?f.callback=Ne:f===n(l)&&r(l),w(G)}else r(l);f=n(l)}if(f!==null)var nr=!0;else{var Rt=n(u);Rt!==null&&ot(P,Rt.startTime-G),nr=!1}return nr}finally{f=null,m=Q,_=!1}}var U=!1,T=null,E=-1,y=5,S=-1;function N(){return!(t.unstable_now()-S<y)}function k(){if(T!==null){var F=t.unstable_now();S=F;var G=!0;try{G=T(!0,F)}finally{G?b():(U=!1,T=null)}}else U=!1}var b;if(typeof x=="function")b=function(){x(k)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,re=se.port2;se.port1.onmessage=k,b=function(){re.postMessage(null)}}else b=function(){R(k,0)};function Ge(F){T=F,U||(U=!0,b())}function ot(F,G){E=R(function(){F(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){C||_||(C=!0,Ge(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var Q=m;m=G;try{return F()}finally{m=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,G){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=m;m=F;try{return G()}finally{m=Q}},t.unstable_scheduleCallback=function(F,G,Q){var ge=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ge+Q:ge):Q=ge,F){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=Q+Ne,F={id:d++,callback:G,priorityLevel:F,startTime:Q,expirationTime:Ne,sortIndex:-1},Q>ge?(F.sortIndex=Q,e(u,F),n(l)===null&&F===n(u)&&(A?(I(E),E=-1):A=!0,ot(P,Q-ge))):(F.sortIndex=Ne,e(l,F),C||_||(C=!0,Ge(M))),F},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(F){var G=m;return function(){var Q=m;m=G;try{return F.apply(this,arguments)}finally{m=Q}}}})(Px);kx.exports=Px;var r1=kx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1=O,nn=r1;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dx=new Set,cl={};function Ii(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(cl[t]=e,t=0;t<e.length;t++)Dx.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,i1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kv={},Pv={};function o1(t){return _p.call(Pv,t)?!0:_p.call(kv,t)?!1:i1.test(t)?Pv[t]=!0:(kv[t]=!0,!1)}function a1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,r){if(e===null||typeof e>"u"||a1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){yt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];yt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){yt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){yt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){yt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){yt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){yt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){yt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){yt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rg=/[\-:]([a-z])/g;function sg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rg,sg);yt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rg,sg);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rg,sg);yt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});yt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){yt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ig(t,e,n,r){var s=yt.hasOwnProperty(e)?yt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,s,r)&&(n=null),r||s===null?o1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=s1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pc=Symbol.for("react.element"),$i=Symbol.for("react.portal"),zi=Symbol.for("react.fragment"),og=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),Ox=Symbol.for("react.provider"),Lx=Symbol.for("react.context"),ag=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),wp=Symbol.for("react.suspense_list"),lg=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),jx=Symbol.for("react.offscreen"),Dv=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=Dv&&t[Dv]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,vf;function Ra(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var wf=!1;function Ef(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function c1(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function Ep(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zi:return"Fragment";case $i:return"Portal";case yp:return"Profiler";case og:return"StrictMode";case vp:return"Suspense";case wp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lx:return(t.displayName||"Context")+".Consumer";case Ox:return(t._context.displayName||"Context")+".Provider";case ag:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lg:return e=t.displayName||null,e!==null?e:Ep(t.type)||"Memo";case zr:e=t._payload,t=t._init;try{return Ep(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ep(e);case 8:return e===og?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Es(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function h1(t){var e=Mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dc(t){t._valueTracker||(t._valueTracker=h1(t))}function Vx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Mx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Es(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fx(t,e){e=e.checked,e!=null&&ig(t,"checked",e,!1)}function Tp(t,e){Fx(t,e);var n=Es(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ip(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ip(t,e.type,Es(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ip(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ka=Array.isArray;function ro(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Es(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ka(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Es(n)}}function Ux(t,e){var n=Es(e.value),r=Es(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oc,$x=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oc=Oc||document.createElement("div"),Oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ul(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d1=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(t){d1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ua[e]=Ua[t]})});function zx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ua.hasOwnProperty(t)&&Ua[t]?(""+e).trim():e+"px"}function Wx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=zx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var f1=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bp(t,e){if(e){if(f1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Np(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ap=null;function cg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rp=null,so=null,io=null;function Vv(t){if(t=Jl(t)){if(typeof Rp!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Kh(e),Rp(t.stateNode,t.type,e))}}function qx(t){so?io?io.push(t):io=[t]:so=t}function Hx(){if(so){var t=so,e=io;if(io=so=null,Vv(t),e)for(t=0;t<e.length;t++)Vv(e[t])}}function Gx(t,e){return t(e)}function Kx(){}var xf=!1;function Qx(t,e,n){if(xf)return t(e,n);xf=!0;try{return Gx(t,e,n)}finally{xf=!1,(so!==null||io!==null)&&(Kx(),Hx())}}function hl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var kp=!1;if(_r)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){kp=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{kp=!1}function p1(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ba=!1,Lu=null,ju=!1,Pp=null,m1={onError:function(t){Ba=!0,Lu=t}};function g1(t,e,n,r,s,i,o,a,l){Ba=!1,Lu=null,p1.apply(m1,arguments)}function _1(t,e,n,r,s,i,o,a,l){if(g1.apply(this,arguments),Ba){if(Ba){var u=Lu;Ba=!1,Lu=null}else throw Error(B(198));ju||(ju=!0,Pp=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fv(t){if(Si(t)!==t)throw Error(B(188))}function y1(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Fv(s),t;if(i===r)return Fv(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Jx(t){return t=y1(t),t!==null?Xx(t):null}function Xx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xx(t);if(e!==null)return e;t=t.sibling}return null}var Zx=nn.unstable_scheduleCallback,Uv=nn.unstable_cancelCallback,v1=nn.unstable_shouldYield,w1=nn.unstable_requestPaint,We=nn.unstable_now,E1=nn.unstable_getCurrentPriorityLevel,ug=nn.unstable_ImmediatePriority,eT=nn.unstable_UserBlockingPriority,Mu=nn.unstable_NormalPriority,x1=nn.unstable_LowPriority,tT=nn.unstable_IdlePriority,Wh=null,zn=null;function T1(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Wh,t,void 0,(t.current.flags&128)===128)}catch{}}var Cn=Math.clz32?Math.clz32:C1,I1=Math.log,S1=Math.LN2;function C1(t){return t>>>=0,t===0?32:31-(I1(t)/S1|0)|0}var Lc=64,jc=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Pa(a):(i&=o,i!==0&&(r=Pa(i)))}else o=n&~s,o!==0?r=Pa(o):i!==0&&(r=Pa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Cn(e),s=1<<n,r|=t[n],e&=~s;return r}function b1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function N1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Cn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=b1(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Dp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nT(){var t=Lc;return Lc<<=1,!(Lc&4194240)&&(Lc=64),t}function Tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Cn(e),t[e]=n}function A1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Cn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function hg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Cn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ee=0;function rT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sT,dg,iT,oT,aT,Op=!1,Mc=[],is=null,os=null,as=null,dl=new Map,fl=new Map,qr=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bv(t,e){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":dl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(e.pointerId)}}function _a(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Jl(e),e!==null&&dg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function k1(t,e,n,r,s){switch(e){case"focusin":return is=_a(is,t,e,n,r,s),!0;case"dragenter":return os=_a(os,t,e,n,r,s),!0;case"mouseover":return as=_a(as,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return dl.set(i,_a(dl.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fl.set(i,_a(fl.get(i)||null,t,e,n,r,s)),!0}return!1}function lT(t){var e=Js(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=Yx(n),e!==null){t.blockedOn=e,aT(t.priority,function(){iT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ap=r,n.target.dispatchEvent(r),Ap=null}else return e=Jl(n),e!==null&&dg(e),t.blockedOn=n,!1;e.shift()}return!0}function $v(t,e,n){cu(t)&&n.delete(e)}function P1(){Op=!1,is!==null&&cu(is)&&(is=null),os!==null&&cu(os)&&(os=null),as!==null&&cu(as)&&(as=null),dl.forEach($v),fl.forEach($v)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Op||(Op=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,P1)))}function pl(t){function e(s){return ya(s,t)}if(0<Mc.length){ya(Mc[0],t);for(var n=1;n<Mc.length;n++){var r=Mc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(is!==null&&ya(is,t),os!==null&&ya(os,t),as!==null&&ya(as,t),dl.forEach(e),fl.forEach(e),n=0;n<qr.length;n++)r=qr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qr.length&&(n=qr[0],n.blockedOn===null);)lT(n),n.blockedOn===null&&qr.shift()}var oo=Ar.ReactCurrentBatchConfig,Fu=!0;function D1(t,e,n,r){var s=Ee,i=oo.transition;oo.transition=null;try{Ee=1,fg(t,e,n,r)}finally{Ee=s,oo.transition=i}}function O1(t,e,n,r){var s=Ee,i=oo.transition;oo.transition=null;try{Ee=4,fg(t,e,n,r)}finally{Ee=s,oo.transition=i}}function fg(t,e,n,r){if(Fu){var s=Lp(t,e,n,r);if(s===null)Df(t,e,r,Uu,n),Bv(t,r);else if(k1(s,t,e,n,r))r.stopPropagation();else if(Bv(t,r),e&4&&-1<R1.indexOf(t)){for(;s!==null;){var i=Jl(s);if(i!==null&&sT(i),i=Lp(t,e,n,r),i===null&&Df(t,e,r,Uu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Df(t,e,r,null,n)}}var Uu=null;function Lp(t,e,n,r){if(Uu=null,t=cg(r),t=Js(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function cT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(E1()){case ug:return 1;case eT:return 4;case Mu:case x1:return 16;case tT:return 536870912;default:return 16}default:return 16}}var ts=null,pg=null,uu=null;function uT(){if(uu)return uu;var t,e=pg,n=e.length,r,s="value"in ts?ts.value:ts.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return uu=s.slice(t,1<r?1-r:void 0)}function hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vc(){return!0}function zv(){return!1}function sn(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Vc:zv,this.isPropagationStopped=zv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mg=sn(Vo),Yl=Me({},Vo,{view:0,detail:0}),L1=sn(Yl),If,Sf,va,qh=Me({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==va&&(va&&t.type==="mousemove"?(If=t.screenX-va.screenX,Sf=t.screenY-va.screenY):Sf=If=0,va=t),If)},movementY:function(t){return"movementY"in t?t.movementY:Sf}}),Wv=sn(qh),j1=Me({},qh,{dataTransfer:0}),M1=sn(j1),V1=Me({},Yl,{relatedTarget:0}),Cf=sn(V1),F1=Me({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=sn(F1),B1=Me({},Vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$1=sn(B1),z1=Me({},Vo,{data:0}),qv=sn(z1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=H1[t])?!!e[t]:!1}function gg(){return G1}var K1=Me({},Yl,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?q1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gg,charCode:function(t){return t.type==="keypress"?hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Q1=sn(K1),Y1=Me({},qh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hv=sn(Y1),J1=Me({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gg}),X1=sn(J1),Z1=Me({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),eR=sn(Z1),tR=Me({},qh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nR=sn(tR),rR=[9,13,27,32],_g=_r&&"CompositionEvent"in window,$a=null;_r&&"documentMode"in document&&($a=document.documentMode);var sR=_r&&"TextEvent"in window&&!$a,hT=_r&&(!_g||$a&&8<$a&&11>=$a),Gv=" ",Kv=!1;function dT(t,e){switch(t){case"keyup":return rR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wi=!1;function iR(t,e){switch(t){case"compositionend":return fT(e);case"keypress":return e.which!==32?null:(Kv=!0,Gv);case"textInput":return t=e.data,t===Gv&&Kv?null:t;default:return null}}function oR(t,e){if(Wi)return t==="compositionend"||!_g&&dT(t,e)?(t=uT(),uu=pg=ts=null,Wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hT&&e.locale!=="ko"?null:e.data;default:return null}}var aR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aR[t.type]:e==="textarea"}function pT(t,e,n,r){qx(r),e=Bu(e,"onChange"),0<e.length&&(n=new mg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var za=null,ml=null;function lR(t){ST(t,0)}function Hh(t){var e=Gi(t);if(Vx(e))return t}function cR(t,e){if(t==="change")return e}var mT=!1;if(_r){var bf;if(_r){var Nf="oninput"in document;if(!Nf){var Yv=document.createElement("div");Yv.setAttribute("oninput","return;"),Nf=typeof Yv.oninput=="function"}bf=Nf}else bf=!1;mT=bf&&(!document.documentMode||9<document.documentMode)}function Jv(){za&&(za.detachEvent("onpropertychange",gT),ml=za=null)}function gT(t){if(t.propertyName==="value"&&Hh(ml)){var e=[];pT(e,ml,t,cg(t)),Qx(lR,e)}}function uR(t,e,n){t==="focusin"?(Jv(),za=e,ml=n,za.attachEvent("onpropertychange",gT)):t==="focusout"&&Jv()}function hR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(ml)}function dR(t,e){if(t==="click")return Hh(e)}function fR(t,e){if(t==="input"||t==="change")return Hh(e)}function pR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rn=typeof Object.is=="function"?Object.is:pR;function gl(t,e){if(Rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_p.call(e,s)||!Rn(t[s],e[s]))return!1}return!0}function Xv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zv(t,e){var n=Xv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xv(n)}}function _T(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_T(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yT(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mR(t){var e=yT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_T(n.ownerDocument.documentElement,n)){if(r!==null&&yg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Zv(n,i);var o=Zv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gR=_r&&"documentMode"in document&&11>=document.documentMode,qi=null,jp=null,Wa=null,Mp=!1;function e0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mp||qi==null||qi!==Ou(r)||(r=qi,"selectionStart"in r&&yg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&gl(Wa,r)||(Wa=r,r=Bu(jp,"onSelect"),0<r.length&&(e=new mg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=qi)))}function Fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:Fc("Animation","AnimationEnd"),animationiteration:Fc("Animation","AnimationIteration"),animationstart:Fc("Animation","AnimationStart"),transitionend:Fc("Transition","TransitionEnd")},Af={},vT={};_r&&(vT=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function Gh(t){if(Af[t])return Af[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vT)return Af[t]=e[n];return t}var wT=Gh("animationend"),ET=Gh("animationiteration"),xT=Gh("animationstart"),TT=Gh("transitionend"),IT=new Map,t0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ds(t,e){IT.set(t,e),Ii(e,[t])}for(var Rf=0;Rf<t0.length;Rf++){var kf=t0[Rf],_R=kf.toLowerCase(),yR=kf[0].toUpperCase()+kf.slice(1);Ds(_R,"on"+yR)}Ds(wT,"onAnimationEnd");Ds(ET,"onAnimationIteration");Ds(xT,"onAnimationStart");Ds("dblclick","onDoubleClick");Ds("focusin","onFocus");Ds("focusout","onBlur");Ds(TT,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function n0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,_1(r,e,void 0,t),t.currentTarget=null}function ST(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;n0(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;n0(s,a,u),i=l}}}if(ju)throw t=Pp,ju=!1,Pp=null,t}function Re(t,e){var n=e[$p];n===void 0&&(n=e[$p]=new Set);var r=t+"__bubble";n.has(r)||(CT(e,t,2,!1),n.add(r))}function Pf(t,e,n){var r=0;e&&(r|=4),CT(n,t,r,e)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function _l(t){if(!t[Uc]){t[Uc]=!0,Dx.forEach(function(n){n!=="selectionchange"&&(vR.has(n)||Pf(n,!1,t),Pf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uc]||(e[Uc]=!0,Pf("selectionchange",!1,e))}}function CT(t,e,n,r){switch(cT(e)){case 1:var s=D1;break;case 4:s=O1;break;default:s=fg}n=s.bind(null,e,n,t),s=void 0,!kp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Df(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Js(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Qx(function(){var u=i,d=cg(n),f=[];e:{var m=IT.get(t);if(m!==void 0){var _=mg,C=t;switch(t){case"keypress":if(hu(n)===0)break e;case"keydown":case"keyup":_=Q1;break;case"focusin":C="focus",_=Cf;break;case"focusout":C="blur",_=Cf;break;case"beforeblur":case"afterblur":_=Cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=X1;break;case wT:case ET:case xT:_=U1;break;case TT:_=eR;break;case"scroll":_=L1;break;case"wheel":_=nR;break;case"copy":case"cut":case"paste":_=$1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Hv}var A=(e&4)!==0,R=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var x=u,w;x!==null;){w=x;var P=w.stateNode;if(w.tag===5&&P!==null&&(w=P,I!==null&&(P=hl(x,I),P!=null&&A.push(yl(x,P,w)))),R)break;x=x.return}0<A.length&&(m=new _(m,C,null,n,d),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Ap&&(C=n.relatedTarget||n.fromElement)&&(Js(C)||C[yr]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(C=n.relatedTarget||n.toElement,_=u,C=C?Js(C):null,C!==null&&(R=Si(C),C!==R||C.tag!==5&&C.tag!==6)&&(C=null)):(_=null,C=u),_!==C)){if(A=Wv,P="onMouseLeave",I="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(A=Hv,P="onPointerLeave",I="onPointerEnter",x="pointer"),R=_==null?m:Gi(_),w=C==null?m:Gi(C),m=new A(P,x+"leave",_,n,d),m.target=R,m.relatedTarget=w,P=null,Js(d)===u&&(A=new A(I,x+"enter",C,n,d),A.target=w,A.relatedTarget=R,P=A),R=P,_&&C)t:{for(A=_,I=C,x=0,w=A;w;w=ji(w))x++;for(w=0,P=I;P;P=ji(P))w++;for(;0<x-w;)A=ji(A),x--;for(;0<w-x;)I=ji(I),w--;for(;x--;){if(A===I||I!==null&&A===I.alternate)break t;A=ji(A),I=ji(I)}A=null}else A=null;_!==null&&r0(f,m,_,A,!1),C!==null&&R!==null&&r0(f,R,C,A,!0)}}e:{if(m=u?Gi(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=cR;else if(Qv(m))if(mT)M=fR;else{M=hR;var U=uR}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=dR);if(M&&(M=M(t,u))){pT(f,M,n,d);break e}U&&U(t,m,u),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&Ip(m,"number",m.value)}switch(U=u?Gi(u):window,t){case"focusin":(Qv(U)||U.contentEditable==="true")&&(qi=U,jp=u,Wa=null);break;case"focusout":Wa=jp=qi=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,e0(f,n,d);break;case"selectionchange":if(gR)break;case"keydown":case"keyup":e0(f,n,d)}var T;if(_g)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Wi?dT(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(hT&&n.locale!=="ko"&&(Wi||E!=="onCompositionStart"?E==="onCompositionEnd"&&Wi&&(T=uT()):(ts=d,pg="value"in ts?ts.value:ts.textContent,Wi=!0)),U=Bu(u,E),0<U.length&&(E=new qv(E,t,null,n,d),f.push({event:E,listeners:U}),T?E.data=T:(T=fT(n),T!==null&&(E.data=T)))),(T=sR?iR(t,n):oR(t,n))&&(u=Bu(u,"onBeforeInput"),0<u.length&&(d=new qv("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}ST(f,e)})}function yl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=hl(t,n),i!=null&&r.unshift(yl(t,i,s)),i=hl(t,e),i!=null&&r.push(yl(t,i,s))),t=t.return}return r}function ji(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=hl(n,i),l!=null&&o.unshift(yl(n,l,a))):s||(l=hl(n,i),l!=null&&o.push(yl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wR=/\r\n?/g,ER=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(wR,`
`).replace(ER,"")}function Bc(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(B(425))}function $u(){}var Vp=null,Fp=null;function Up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bp=typeof setTimeout=="function"?setTimeout:void 0,xR=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,TR=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(IR)}:Bp;function IR(t){setTimeout(function(){throw t})}function Of(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);pl(e)}function ls(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Un="__reactFiber$"+Fo,vl="__reactProps$"+Fo,yr="__reactContainer$"+Fo,$p="__reactEvents$"+Fo,SR="__reactListeners$"+Fo,CR="__reactHandles$"+Fo;function Js(t){var e=t[Un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yr]||n[Un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o0(t);t!==null;){if(n=t[Un])return n;t=o0(t)}return e}t=n,n=t.parentNode}return null}function Jl(t){return t=t[Un]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Kh(t){return t[vl]||null}var zp=[],Ki=-1;function Os(t){return{current:t}}function Pe(t){0>Ki||(t.current=zp[Ki],zp[Ki]=null,Ki--)}function be(t,e){Ki++,zp[Ki]=t.current,t.current=e}var xs={},bt=Os(xs),qt=Os(!1),ci=xs;function yo(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ht(t){return t=t.childContextTypes,t!=null}function zu(){Pe(qt),Pe(bt)}function a0(t,e,n){if(bt.current!==xs)throw Error(B(168));be(bt,e),be(qt,n)}function bT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,u1(t)||"Unknown",s));return Me({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,ci=bt.current,be(bt,t),be(qt,qt.current),!0}function l0(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=bT(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,Pe(qt),Pe(bt),be(bt,t)):Pe(qt),be(qt,n)}var or=null,Qh=!1,Lf=!1;function NT(t){or===null?or=[t]:or.push(t)}function bR(t){Qh=!0,NT(t)}function Ls(){if(!Lf&&or!==null){Lf=!0;var t=0,e=Ee;try{var n=or;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Qh=!1}catch(s){throw or!==null&&(or=or.slice(t+1)),Zx(ug,Ls),s}finally{Ee=e,Lf=!1}}return null}var Qi=[],Yi=0,qu=null,Hu=0,an=[],ln=0,ui=null,lr=1,cr="";function Hs(t,e){Qi[Yi++]=Hu,Qi[Yi++]=qu,qu=t,Hu=e}function AT(t,e,n){an[ln++]=lr,an[ln++]=cr,an[ln++]=ui,ui=t;var r=lr;t=cr;var s=32-Cn(r)-1;r&=~(1<<s),n+=1;var i=32-Cn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,lr=1<<32-Cn(e)+s|n<<s|r,cr=i+t}else lr=1<<i|n<<s|r,cr=t}function vg(t){t.return!==null&&(Hs(t,1),AT(t,1,0))}function wg(t){for(;t===qu;)qu=Qi[--Yi],Qi[Yi]=null,Hu=Qi[--Yi],Qi[Yi]=null;for(;t===ui;)ui=an[--ln],an[ln]=null,cr=an[--ln],an[ln]=null,lr=an[--ln],an[ln]=null}var tn=null,Xt=null,De=!1,xn=null;function RT(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tn=t,Xt=ls(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tn=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:lr,overflow:cr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tn=t,Xt=null,!0):!1;default:return!1}}function Wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qp(t){if(De){var e=Xt;if(e){var n=e;if(!c0(t,e)){if(Wp(t))throw Error(B(418));e=ls(n.nextSibling);var r=tn;e&&c0(t,e)?RT(r,n):(t.flags=t.flags&-4097|2,De=!1,tn=t)}}else{if(Wp(t))throw Error(B(418));t.flags=t.flags&-4097|2,De=!1,tn=t}}}function u0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tn=t}function $c(t){if(t!==tn)return!1;if(!De)return u0(t),De=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Up(t.type,t.memoizedProps)),e&&(e=Xt)){if(Wp(t))throw kT(),Error(B(418));for(;e;)RT(t,e),e=ls(e.nextSibling)}if(u0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=ls(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=tn?ls(t.stateNode.nextSibling):null;return!0}function kT(){for(var t=Xt;t;)t=ls(t.nextSibling)}function vo(){Xt=tn=null,De=!1}function Eg(t){xn===null?xn=[t]:xn.push(t)}var NR=Ar.ReactCurrentBatchConfig;function wa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function zc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function h0(t){var e=t._init;return e(t._payload)}function PT(t){function e(I,x){if(t){var w=I.deletions;w===null?(I.deletions=[x],I.flags|=16):w.push(x)}}function n(I,x){if(!t)return null;for(;x!==null;)e(I,x),x=x.sibling;return null}function r(I,x){for(I=new Map;x!==null;)x.key!==null?I.set(x.key,x):I.set(x.index,x),x=x.sibling;return I}function s(I,x){return I=ds(I,x),I.index=0,I.sibling=null,I}function i(I,x,w){return I.index=w,t?(w=I.alternate,w!==null?(w=w.index,w<x?(I.flags|=2,x):w):(I.flags|=2,x)):(I.flags|=1048576,x)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,x,w,P){return x===null||x.tag!==6?(x=$f(w,I.mode,P),x.return=I,x):(x=s(x,w),x.return=I,x)}function l(I,x,w,P){var M=w.type;return M===zi?d(I,x,w.props.children,P,w.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zr&&h0(M)===x.type)?(P=s(x,w.props),P.ref=wa(I,x,w),P.return=I,P):(P=yu(w.type,w.key,w.props,null,I.mode,P),P.ref=wa(I,x,w),P.return=I,P)}function u(I,x,w,P){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=zf(w,I.mode,P),x.return=I,x):(x=s(x,w.children||[]),x.return=I,x)}function d(I,x,w,P,M){return x===null||x.tag!==7?(x=si(w,I.mode,P,M),x.return=I,x):(x=s(x,w),x.return=I,x)}function f(I,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return x=$f(""+x,I.mode,w),x.return=I,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pc:return w=yu(x.type,x.key,x.props,null,I.mode,w),w.ref=wa(I,null,x),w.return=I,w;case $i:return x=zf(x,I.mode,w),x.return=I,x;case zr:var P=x._init;return f(I,P(x._payload),w)}if(ka(x)||ma(x))return x=si(x,I.mode,w,null),x.return=I,x;zc(I,x)}return null}function m(I,x,w,P){var M=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return M!==null?null:a(I,x,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pc:return w.key===M?l(I,x,w,P):null;case $i:return w.key===M?u(I,x,w,P):null;case zr:return M=w._init,m(I,x,M(w._payload),P)}if(ka(w)||ma(w))return M!==null?null:d(I,x,w,P,null);zc(I,w)}return null}function _(I,x,w,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return I=I.get(w)||null,a(x,I,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Pc:return I=I.get(P.key===null?w:P.key)||null,l(x,I,P,M);case $i:return I=I.get(P.key===null?w:P.key)||null,u(x,I,P,M);case zr:var U=P._init;return _(I,x,w,U(P._payload),M)}if(ka(P)||ma(P))return I=I.get(w)||null,d(x,I,P,M,null);zc(x,P)}return null}function C(I,x,w,P){for(var M=null,U=null,T=x,E=x=0,y=null;T!==null&&E<w.length;E++){T.index>E?(y=T,T=null):y=T.sibling;var S=m(I,T,w[E],P);if(S===null){T===null&&(T=y);break}t&&T&&S.alternate===null&&e(I,T),x=i(S,x,E),U===null?M=S:U.sibling=S,U=S,T=y}if(E===w.length)return n(I,T),De&&Hs(I,E),M;if(T===null){for(;E<w.length;E++)T=f(I,w[E],P),T!==null&&(x=i(T,x,E),U===null?M=T:U.sibling=T,U=T);return De&&Hs(I,E),M}for(T=r(I,T);E<w.length;E++)y=_(T,I,E,w[E],P),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?E:y.key),x=i(y,x,E),U===null?M=y:U.sibling=y,U=y);return t&&T.forEach(function(N){return e(I,N)}),De&&Hs(I,E),M}function A(I,x,w,P){var M=ma(w);if(typeof M!="function")throw Error(B(150));if(w=M.call(w),w==null)throw Error(B(151));for(var U=M=null,T=x,E=x=0,y=null,S=w.next();T!==null&&!S.done;E++,S=w.next()){T.index>E?(y=T,T=null):y=T.sibling;var N=m(I,T,S.value,P);if(N===null){T===null&&(T=y);break}t&&T&&N.alternate===null&&e(I,T),x=i(N,x,E),U===null?M=N:U.sibling=N,U=N,T=y}if(S.done)return n(I,T),De&&Hs(I,E),M;if(T===null){for(;!S.done;E++,S=w.next())S=f(I,S.value,P),S!==null&&(x=i(S,x,E),U===null?M=S:U.sibling=S,U=S);return De&&Hs(I,E),M}for(T=r(I,T);!S.done;E++,S=w.next())S=_(T,I,E,S.value,P),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?E:S.key),x=i(S,x,E),U===null?M=S:U.sibling=S,U=S);return t&&T.forEach(function(k){return e(I,k)}),De&&Hs(I,E),M}function R(I,x,w,P){if(typeof w=="object"&&w!==null&&w.type===zi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Pc:e:{for(var M=w.key,U=x;U!==null;){if(U.key===M){if(M=w.type,M===zi){if(U.tag===7){n(I,U.sibling),x=s(U,w.props.children),x.return=I,I=x;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zr&&h0(M)===U.type){n(I,U.sibling),x=s(U,w.props),x.ref=wa(I,U,w),x.return=I,I=x;break e}n(I,U);break}else e(I,U);U=U.sibling}w.type===zi?(x=si(w.props.children,I.mode,P,w.key),x.return=I,I=x):(P=yu(w.type,w.key,w.props,null,I.mode,P),P.ref=wa(I,x,w),P.return=I,I=P)}return o(I);case $i:e:{for(U=w.key;x!==null;){if(x.key===U)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){n(I,x.sibling),x=s(x,w.children||[]),x.return=I,I=x;break e}else{n(I,x);break}else e(I,x);x=x.sibling}x=zf(w,I.mode,P),x.return=I,I=x}return o(I);case zr:return U=w._init,R(I,x,U(w._payload),P)}if(ka(w))return C(I,x,w,P);if(ma(w))return A(I,x,w,P);zc(I,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,x!==null&&x.tag===6?(n(I,x.sibling),x=s(x,w),x.return=I,I=x):(n(I,x),x=$f(w,I.mode,P),x.return=I,I=x),o(I)):n(I,x)}return R}var wo=PT(!0),DT=PT(!1),Gu=Os(null),Ku=null,Ji=null,xg=null;function Tg(){xg=Ji=Ku=null}function Ig(t){var e=Gu.current;Pe(Gu),t._currentValue=e}function Hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){Ku=t,xg=Ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function mn(t){var e=t._currentValue;if(xg!==t)if(t={context:t,memoizedValue:e,next:null},Ji===null){if(Ku===null)throw Error(B(308));Ji=t,Ku.dependencies={lanes:0,firstContext:t}}else Ji=Ji.next=t;return e}var Xs=null;function Sg(t){Xs===null?Xs=[t]:Xs.push(t)}function OT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Sg(e)):(n.next=s.next,s.next=n),e.interleaved=n,vr(t,r)}function vr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wr=!1;function Cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function LT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cs(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,vr(t,n)}return s=r.interleaved,s===null?(e.next=e,Sg(r)):(e.next=s.next,s.next=e),r.interleaved=e,vr(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hg(t,n)}}function d0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var s=t.updateQueue;Wr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,d=u=l=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var C=t,A=a;switch(m=e,_=n,A.tag){case 1:if(C=A.payload,typeof C=="function"){f=C.call(_,f,m);break e}f=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=A.payload,m=typeof C=="function"?C.call(_,f,m):C,m==null)break e;f=Me({},f,m);break e;case 2:Wr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,l=f):d=d.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(l=f),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);di|=o,t.lanes=o,t.memoizedState=f}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var Xl={},Wn=Os(Xl),wl=Os(Xl),El=Os(Xl);function Zs(t){if(t===Xl)throw Error(B(174));return t}function bg(t,e){switch(be(El,e),be(wl,t),be(Wn,Xl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cp(e,t)}Pe(Wn),be(Wn,e)}function Eo(){Pe(Wn),Pe(wl),Pe(El)}function jT(t){Zs(El.current);var e=Zs(Wn.current),n=Cp(e,t.type);e!==n&&(be(wl,t),be(Wn,n))}function Ng(t){wl.current===t&&(Pe(Wn),Pe(wl))}var Oe=Os(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jf=[];function Ag(){for(var t=0;t<jf.length;t++)jf[t]._workInProgressVersionPrimary=null;jf.length=0}var fu=Ar.ReactCurrentDispatcher,Mf=Ar.ReactCurrentBatchConfig,hi=0,je=null,nt=null,ht=null,Ju=!1,qa=!1,xl=0,AR=0;function Et(){throw Error(B(321))}function Rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rn(t[n],e[n]))return!1;return!0}function kg(t,e,n,r,s,i){if(hi=i,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fu.current=t===null||t.memoizedState===null?DR:OR,t=n(r,s),qa){i=0;do{if(qa=!1,xl=0,25<=i)throw Error(B(301));i+=1,ht=nt=null,e.updateQueue=null,fu.current=LR,t=n(r,s)}while(qa)}if(fu.current=Xu,e=nt!==null&&nt.next!==null,hi=0,ht=nt=je=null,Ju=!1,e)throw Error(B(300));return t}function Pg(){var t=xl!==0;return xl=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?je.memoizedState=ht=t:ht=ht.next=t,ht}function gn(){if(nt===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=nt.next;var e=ht===null?je.memoizedState:ht.next;if(e!==null)ht=e,nt=t;else{if(t===null)throw Error(B(310));nt=t,t={memoizedState:nt.memoizedState,baseState:nt.baseState,baseQueue:nt.baseQueue,queue:nt.queue,next:null},ht===null?je.memoizedState=ht=t:ht=ht.next=t}return ht}function Tl(t,e){return typeof e=="function"?e(t):e}function Vf(t){var e=gn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=nt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var d=u.lane;if((hi&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,je.lanes|=d,di|=d}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Rn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,je.lanes|=i,di|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ff(t){var e=gn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Rn(i,e.memoizedState)||(zt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function MT(){}function VT(t,e){var n=je,r=gn(),s=e(),i=!Rn(r.memoizedState,s);if(i&&(r.memoizedState=s,zt=!0),r=r.queue,Dg(BT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,Il(9,UT.bind(null,n,r,s,e),void 0,null),ft===null)throw Error(B(349));hi&30||FT(n,e,s)}return s}function FT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function UT(t,e,n,r){e.value=n,e.getSnapshot=r,$T(e)&&zT(t)}function BT(t,e,n){return n(function(){$T(e)&&zT(t)})}function $T(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rn(t,n)}catch{return!0}}function zT(t){var e=vr(t,1);e!==null&&bn(e,t,1,-1)}function p0(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:t},e.queue=t,t=t.dispatch=PR.bind(null,je,t),[e.memoizedState,t]}function Il(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function WT(){return gn().memoizedState}function pu(t,e,n,r){var s=Vn();je.flags|=t,s.memoizedState=Il(1|e,n,void 0,r===void 0?null:r)}function Yh(t,e,n,r){var s=gn();r=r===void 0?null:r;var i=void 0;if(nt!==null){var o=nt.memoizedState;if(i=o.destroy,r!==null&&Rg(r,o.deps)){s.memoizedState=Il(e,n,i,r);return}}je.flags|=t,s.memoizedState=Il(1|e,n,i,r)}function m0(t,e){return pu(8390656,8,t,e)}function Dg(t,e){return Yh(2048,8,t,e)}function qT(t,e){return Yh(4,2,t,e)}function HT(t,e){return Yh(4,4,t,e)}function GT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function KT(t,e,n){return n=n!=null?n.concat([t]):null,Yh(4,4,GT.bind(null,e,t),n)}function Og(){}function QT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function YT(t,e){var n=gn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function JT(t,e,n){return hi&21?(Rn(n,e)||(n=nT(),je.lanes|=n,di|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function RR(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Mf.transition;Mf.transition={};try{t(!1),e()}finally{Ee=n,Mf.transition=r}}function XT(){return gn().memoizedState}function kR(t,e,n){var r=hs(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ZT(t))eI(e,n);else if(n=OT(t,e,n,r),n!==null){var s=jt();bn(n,t,r,s),tI(n,e,r)}}function PR(t,e,n){var r=hs(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ZT(t))eI(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Rn(a,o)){var l=e.interleaved;l===null?(s.next=s,Sg(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=OT(t,e,s,r),n!==null&&(s=jt(),bn(n,t,r,s),tI(n,e,r))}}function ZT(t){var e=t.alternate;return t===je||e!==null&&e===je}function eI(t,e){qa=Ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hg(t,n)}}var Xu={readContext:mn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},DR={readContext:mn,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:mn,useEffect:m0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pu(4194308,4,GT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pu(4194308,4,t,e)},useInsertionEffect:function(t,e){return pu(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Vn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=kR.bind(null,je,t),[r.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:p0,useDebugValue:Og,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=p0(!1),e=t[0];return t=RR.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=je,s=Vn();if(De){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ft===null)throw Error(B(349));hi&30||FT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,m0(BT.bind(null,r,i,t),[t]),r.flags|=2048,Il(9,UT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Vn(),e=ft.identifierPrefix;if(De){var n=cr,r=lr;n=(r&~(1<<32-Cn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OR={readContext:mn,useCallback:QT,useContext:mn,useEffect:Dg,useImperativeHandle:KT,useInsertionEffect:qT,useLayoutEffect:HT,useMemo:YT,useReducer:Vf,useRef:WT,useState:function(){return Vf(Tl)},useDebugValue:Og,useDeferredValue:function(t){var e=gn();return JT(e,nt.memoizedState,t)},useTransition:function(){var t=Vf(Tl)[0],e=gn().memoizedState;return[t,e]},useMutableSource:MT,useSyncExternalStore:VT,useId:XT,unstable_isNewReconciler:!1},LR={readContext:mn,useCallback:QT,useContext:mn,useEffect:Dg,useImperativeHandle:KT,useInsertionEffect:qT,useLayoutEffect:HT,useMemo:YT,useReducer:Ff,useRef:WT,useState:function(){return Ff(Tl)},useDebugValue:Og,useDeferredValue:function(t){var e=gn();return nt===null?e.memoizedState=t:JT(e,nt.memoizedState,t)},useTransition:function(){var t=Ff(Tl)[0],e=gn().memoizedState;return[t,e]},useMutableSource:MT,useSyncExternalStore:VT,useId:XT,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jh={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=jt(),s=hs(t),i=fr(r,s);i.payload=e,n!=null&&(i.callback=n),e=cs(t,i,s),e!==null&&(bn(e,t,s,r),du(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=jt(),s=hs(t),i=fr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=cs(t,i,s),e!==null&&(bn(e,t,s,r),du(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=jt(),r=hs(t),s=fr(n,r);s.tag=2,e!=null&&(s.callback=e),e=cs(t,s,r),e!==null&&(bn(e,t,r,n),du(e,t,r))}};function g0(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!gl(n,r)||!gl(s,i):!0}function nI(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=mn(i):(s=Ht(e)?ci:bt.current,r=e.contextTypes,i=(r=r!=null)?yo(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function _0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jh.enqueueReplaceState(e,e.state,null)}function Kp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cg(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=mn(i):(i=Ht(e)?ci:bt.current,s.context=yo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Gp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Jh.enqueueReplaceState(s,s.state,null),Qu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function xo(t,e){try{var n="",r=e;do n+=c1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Uf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jR=typeof WeakMap=="function"?WeakMap:Map;function rI(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eh||(eh=!0,im=r),Qp(t,e)},n}function sI(t,e,n){n=fr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qp(t,e),typeof r!="function"&&(us===null?us=new Set([this]):us.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function y0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new jR;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=YR.bind(null,t,e,n),e.then(t,t))}function v0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w0(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,cs(n,e,1))),n.lanes|=1),t)}var MR=Ar.ReactCurrentOwner,zt=!1;function Ot(t,e,n,r){e.child=t===null?DT(e,null,n,r):wo(e,t.child,n,r)}function E0(t,e,n,r,s){n=n.render;var i=e.ref;return ao(e,s),r=kg(t,e,n,r,i,s),n=Pg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,wr(t,e,s)):(De&&n&&vg(e),e.flags|=1,Ot(t,e,r,s),e.child)}function x0(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!$g(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,iI(t,e,i,r,s)):(t=yu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:gl,n(o,r)&&t.ref===e.ref)return wr(t,e,s)}return e.flags|=1,t=ds(i,r),t.ref=e.ref,t.return=e,e.child=t}function iI(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(gl(i,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,wr(t,e,s)}return Yp(t,e,n,r,s)}function oI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(Zi,Jt),Jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,be(Zi,Jt),Jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,be(Zi,Jt),Jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,be(Zi,Jt),Jt|=r;return Ot(t,e,s,n),e.child}function aI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yp(t,e,n,r,s){var i=Ht(n)?ci:bt.current;return i=yo(e,i),ao(e,s),n=kg(t,e,n,r,i,s),r=Pg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,wr(t,e,s)):(De&&r&&vg(e),e.flags|=1,Ot(t,e,n,s),e.child)}function T0(t,e,n,r,s){if(Ht(n)){var i=!0;Wu(e)}else i=!1;if(ao(e,s),e.stateNode===null)mu(t,e),nI(e,n,r),Kp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mn(u):(u=Ht(n)?ci:bt.current,u=yo(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_0(e,o,r,u),Wr=!1;var m=e.memoizedState;o.state=m,Qu(e,r,o,s),l=e.memoizedState,a!==r||m!==l||qt.current||Wr?(typeof d=="function"&&(Gp(e,n,d,r),l=e.memoizedState),(a=Wr||g0(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,LT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=mn(l):(l=Ht(n)?ci:bt.current,l=yo(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&_0(e,o,r,l),Wr=!1,m=e.memoizedState,o.state=m,Qu(e,r,o,s);var C=e.memoizedState;a!==f||m!==C||qt.current||Wr?(typeof _=="function"&&(Gp(e,n,_,r),C=e.memoizedState),(u=Wr||g0(e,n,u,r,m,C,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Jp(t,e,n,r,i,s)}function Jp(t,e,n,r,s,i){aI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&l0(e,n,!1),wr(t,e,i);r=e.stateNode,MR.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=wo(e,t.child,null,i),e.child=wo(e,null,a,i)):Ot(t,e,a,i),e.memoizedState=r.state,s&&l0(e,n,!0),e.child}function lI(t){var e=t.stateNode;e.pendingContext?a0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&a0(t,e.context,!1),bg(t,e.containerInfo)}function I0(t,e,n,r,s){return vo(),Eg(s),e.flags|=256,Ot(t,e,n,r),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function Zp(t){return{baseLanes:t,cachePool:null,transitions:null}}function cI(t,e,n){var r=e.pendingProps,s=Oe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),be(Oe,s&1),t===null)return qp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=ed(o,r,0,null),t=si(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zp(n),e.memoizedState=Xp,t):Lg(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return VR(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ds(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ds(a,i):(i=si(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xp,r}return i=t.child,t=i.sibling,r=ds(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Lg(t,e){return e=ed({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wc(t,e,n,r){return r!==null&&Eg(r),wo(e,t.child,null,n),t=Lg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VR(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Uf(Error(B(422))),Wc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=ed({mode:"visible",children:r.children},s,0,null),i=si(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&wo(e,t.child,null,o),e.child.memoizedState=Zp(o),e.memoizedState=Xp,i);if(!(e.mode&1))return Wc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Uf(i,r,void 0),Wc(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=ft,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,vr(t,s),bn(r,t,s,-1))}return Bg(),r=Uf(Error(B(421))),Wc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=JR.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Xt=ls(s.nextSibling),tn=e,De=!0,xn=null,t!==null&&(an[ln++]=lr,an[ln++]=cr,an[ln++]=ui,lr=t.id,cr=t.overflow,ui=e),e=Lg(e,r.children),e.flags|=4096,e)}function S0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hp(t.return,e,n)}function Bf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function uI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ot(t,e,r.children,n),r=Oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,n,e);else if(t.tag===19)S0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(be(Oe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Bf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Yu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Bf(e,!0,n,null,i);break;case"together":Bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),di|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ds(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ds(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FR(t,e,n){switch(e.tag){case 3:lI(e),vo();break;case 5:jT(e);break;case 1:Ht(e.type)&&Wu(e);break;case 4:bg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;be(Gu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(be(Oe,Oe.current&1),e.flags|=128,null):n&e.child.childLanes?cI(t,e,n):(be(Oe,Oe.current&1),t=wr(t,e,n),t!==null?t.sibling:null);be(Oe,Oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return uI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),be(Oe,Oe.current),r)break;return null;case 22:case 23:return e.lanes=0,oI(t,e,n)}return wr(t,e,n)}var hI,em,dI,fI;hI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};em=function(){};dI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Zs(Wn.current);var i=null;switch(n){case"input":s=xp(t,s),r=xp(t,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=Sp(t,s),r=Sp(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$u)}bp(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cl.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};fI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ea(t,e){if(!De)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UR(t,e,n){var r=e.pendingProps;switch(wg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(e),null;case 1:return Ht(e.type)&&zu(),xt(e),null;case 3:return r=e.stateNode,Eo(),Pe(qt),Pe(bt),Ag(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($c(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xn!==null&&(lm(xn),xn=null))),em(t,e),xt(e),null;case 5:Ng(e);var s=Zs(El.current);if(n=e.type,t!==null&&e.stateNode!=null)dI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return xt(e),null}if(t=Zs(Wn.current),$c(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Un]=e,r[vl]=i,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(s=0;s<Da.length;s++)Re(Da[s],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":Ov(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":jv(r,i),Re("invalid",r)}bp(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bc(r.textContent,a,t),s=["children",""+a]):cl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Dc(r),Lv(r,i,!0);break;case"textarea":Dc(r),Mv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$u)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Un]=e,t[vl]=r,hI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Np(n,r),n){case"dialog":Re("cancel",t),Re("close",t),s=r;break;case"iframe":case"object":case"embed":Re("load",t),s=r;break;case"video":case"audio":for(s=0;s<Da.length;s++)Re(Da[s],t);s=r;break;case"source":Re("error",t),s=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),s=r;break;case"details":Re("toggle",t),s=r;break;case"input":Ov(t,r),s=xp(t,r),Re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),Re("invalid",t);break;case"textarea":jv(t,r),s=Sp(t,r),Re("invalid",t);break;default:s=r}bp(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?Wx(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$x(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ul(t,l):typeof l=="number"&&ul(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(cl.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Re("scroll",t):l!=null&&ig(t,i,l,o))}switch(n){case"input":Dc(t),Lv(t,r,!1);break;case"textarea":Dc(t),Mv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Es(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ro(t,!!r.multiple,i,!1):r.defaultValue!=null&&ro(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=$u)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xt(e),null;case 6:if(t&&e.stateNode!=null)fI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Zs(El.current),Zs(Wn.current),$c(e)){if(r=e.stateNode,n=e.memoizedProps,r[Un]=e,(i=r.nodeValue!==n)&&(t=tn,t!==null))switch(t.tag){case 3:Bc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Un]=e,e.stateNode=r}return xt(e),null;case 13:if(Pe(Oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(De&&Xt!==null&&e.mode&1&&!(e.flags&128))kT(),vo(),e.flags|=98560,i=!1;else if(i=$c(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[Un]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xt(e),i=!1}else xn!==null&&(lm(xn),xn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?st===0&&(st=3):Bg())),e.updateQueue!==null&&(e.flags|=4),xt(e),null);case 4:return Eo(),em(t,e),t===null&&_l(e.stateNode.containerInfo),xt(e),null;case 10:return Ig(e.type._context),xt(e),null;case 17:return Ht(e.type)&&zu(),xt(e),null;case 19:if(Pe(Oe),i=e.memoizedState,i===null)return xt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ea(i,!1);else{if(st!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Ea(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return be(Oe,Oe.current&1|2),e.child}t=t.sibling}i.tail!==null&&We()>To&&(e.flags|=128,r=!0,Ea(i,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!De)return xt(e),null}else 2*We()-i.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,r=!0,Ea(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=We(),e.sibling=null,n=Oe.current,be(Oe,r?n&1|2:n&1),e):(xt(e),null);case 22:case 23:return Ug(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Jt&1073741824&&(xt(e),e.subtreeFlags&6&&(e.flags|=8192)):xt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function BR(t,e){switch(wg(e),e.tag){case 1:return Ht(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Eo(),Pe(qt),Pe(bt),Ag(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ng(e),null;case 13:if(Pe(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(Oe),null;case 4:return Eo(),null;case 10:return Ig(e.type._context),null;case 22:case 23:return Ug(),null;case 24:return null;default:return null}}var qc=!1,St=!1,$R=typeof WeakSet=="function"?WeakSet:Set,H=null;function Xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function tm(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var C0=!1;function zR(t,e){if(Vp=Fu,t=yT(),yg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++d===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fp={focusedElem:t,selectionRange:n},Fu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var A=C.memoizedProps,R=C.memoizedState,I=e.stateNode,x=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:wn(e.type,A),R);I.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(P){Fe(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return C=C0,C0=!1,C}function Ha(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&tm(e,n,i)}s=s.next}while(s!==r)}}function Xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pI(t){var e=t.alternate;e!==null&&(t.alternate=null,pI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Un],delete e[vl],delete e[$p],delete e[SR],delete e[CR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mI(t){return t.tag===5||t.tag===3||t.tag===4}function b0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$u));else if(r!==4&&(t=t.child,t!==null))for(rm(t,e,n),t=t.sibling;t!==null;)rm(t,e,n),t=t.sibling}function sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sm(t,e,n),t=t.sibling;t!==null;)sm(t,e,n),t=t.sibling}var pt=null,En=!1;function Br(t,e,n){for(n=n.child;n!==null;)gI(t,e,n),n=n.sibling}function gI(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Wh,n)}catch{}switch(n.tag){case 5:St||Xi(n,e);case 6:var r=pt,s=En;pt=null,Br(t,e,n),pt=r,En=s,pt!==null&&(En?(t=pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pt.removeChild(n.stateNode));break;case 18:pt!==null&&(En?(t=pt,n=n.stateNode,t.nodeType===8?Of(t.parentNode,n):t.nodeType===1&&Of(t,n),pl(t)):Of(pt,n.stateNode));break;case 4:r=pt,s=En,pt=n.stateNode.containerInfo,En=!0,Br(t,e,n),pt=r,En=s;break;case 0:case 11:case 14:case 15:if(!St&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&tm(n,e,o),s=s.next}while(s!==r)}Br(t,e,n);break;case 1:if(!St&&(Xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(St=(r=St)||n.memoizedState!==null,Br(t,e,n),St=r):Br(t,e,n);break;default:Br(t,e,n)}}function N0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $R),e.forEach(function(r){var s=XR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pt=a.stateNode,En=!1;break e;case 3:pt=a.stateNode.containerInfo,En=!0;break e;case 4:pt=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(pt===null)throw Error(B(160));gI(i,o,s),pt=null,En=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Fe(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_I(e,t),e=e.sibling}function _I(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Mn(t),r&4){try{Ha(3,t,t.return),Xh(3,t)}catch(A){Fe(t,t.return,A)}try{Ha(5,t,t.return)}catch(A){Fe(t,t.return,A)}}break;case 1:_n(e,t),Mn(t),r&512&&n!==null&&Xi(n,n.return);break;case 5:if(_n(e,t),Mn(t),r&512&&n!==null&&Xi(n,n.return),t.flags&32){var s=t.stateNode;try{ul(s,"")}catch(A){Fe(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Fx(s,i),Np(a,o);var u=Np(a,i);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Wx(s,f):d==="dangerouslySetInnerHTML"?$x(s,f):d==="children"?ul(s,f):ig(s,d,f,u)}switch(a){case"input":Tp(s,i);break;case"textarea":Ux(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?ro(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?ro(s,!!i.multiple,i.defaultValue,!0):ro(s,!!i.multiple,i.multiple?[]:"",!1))}s[vl]=i}catch(A){Fe(t,t.return,A)}}break;case 6:if(_n(e,t),Mn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){Fe(t,t.return,A)}}break;case 3:if(_n(e,t),Mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pl(e.containerInfo)}catch(A){Fe(t,t.return,A)}break;case 4:_n(e,t),Mn(t);break;case 13:_n(e,t),Mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Vg=We())),r&4&&N0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(St=(u=St)||d,_n(e,t),St=u):_n(e,t),Mn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,_=m.child,m.tag){case 0:case 11:case 14:case 15:Ha(4,m,m.return);break;case 1:Xi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(A){Fe(r,n,A)}}break;case 5:Xi(m,m.return);break;case 22:if(m.memoizedState!==null){R0(f);continue}}_!==null?(_.return=m,H=_):R0(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zx("display",o))}catch(A){Fe(t,t.return,A)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){Fe(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_n(e,t),Mn(t),r&4&&N0(t);break;case 21:break;default:_n(e,t),Mn(t)}}function Mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mI(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ul(s,""),r.flags&=-33);var i=b0(t);sm(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=b0(t);rm(t,a,o);break;default:throw Error(B(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WR(t,e,n){H=t,yI(t)}function yI(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||qc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||St;a=qc;var u=St;if(qc=o,(St=l)&&!u)for(H=s;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?k0(s):l!==null?(l.return=o,H=l):k0(s);for(;i!==null;)H=i,yI(i),i=i.sibling;H=s,qc=a,St=u}A0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):A0(t)}}function A0(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:St||Xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!St)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&f0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&pl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}St||e.flags&512&&nm(e)}catch(m){Fe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function R0(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function k0(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xh(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Fe(e,s,l)}}var i=e.return;try{nm(e)}catch(l){Fe(e,i,l)}break;case 5:var o=e.return;try{nm(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var qR=Math.ceil,Zu=Ar.ReactCurrentDispatcher,jg=Ar.ReactCurrentOwner,dn=Ar.ReactCurrentBatchConfig,pe=0,ft=null,Qe=null,_t=0,Jt=0,Zi=Os(0),st=0,Sl=null,di=0,Zh=0,Mg=0,Ga=null,Ut=null,Vg=0,To=1/0,ir=null,eh=!1,im=null,us=null,Hc=!1,ns=null,th=0,Ka=0,om=null,gu=-1,_u=0;function jt(){return pe&6?We():gu!==-1?gu:gu=We()}function hs(t){return t.mode&1?pe&2&&_t!==0?_t&-_t:NR.transition!==null?(_u===0&&(_u=nT()),_u):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:cT(t.type)),t):1}function bn(t,e,n,r){if(50<Ka)throw Ka=0,om=null,Error(B(185));Ql(t,n,r),(!(pe&2)||t!==ft)&&(t===ft&&(!(pe&2)&&(Zh|=n),st===4&&Hr(t,_t)),Gt(t,r),n===1&&pe===0&&!(e.mode&1)&&(To=We()+500,Qh&&Ls()))}function Gt(t,e){var n=t.callbackNode;N1(t,e);var r=Vu(t,t===ft?_t:0);if(r===0)n!==null&&Uv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Uv(n),e===1)t.tag===0?bR(P0.bind(null,t)):NT(P0.bind(null,t)),TR(function(){!(pe&6)&&Ls()}),n=null;else{switch(rT(r)){case 1:n=ug;break;case 4:n=eT;break;case 16:n=Mu;break;case 536870912:n=tT;break;default:n=Mu}n=CI(n,vI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function vI(t,e){if(gu=-1,_u=0,pe&6)throw Error(B(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var r=Vu(t,t===ft?_t:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nh(t,r);else{e=r;var s=pe;pe|=2;var i=EI();(ft!==t||_t!==e)&&(ir=null,To=We()+500,ri(t,e));do try{KR();break}catch(a){wI(t,a)}while(!0);Tg(),Zu.current=i,pe=s,Qe!==null?e=0:(ft=null,_t=0,e=st)}if(e!==0){if(e===2&&(s=Dp(t),s!==0&&(r=s,e=am(t,s))),e===1)throw n=Sl,ri(t,0),Hr(t,r),Gt(t,We()),n;if(e===6)Hr(t,r);else{if(s=t.current.alternate,!(r&30)&&!HR(s)&&(e=nh(t,r),e===2&&(i=Dp(t),i!==0&&(r=i,e=am(t,i))),e===1))throw n=Sl,ri(t,0),Hr(t,r),Gt(t,We()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Gs(t,Ut,ir);break;case 3:if(Hr(t,r),(r&130023424)===r&&(e=Vg+500-We(),10<e)){if(Vu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){jt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Bp(Gs.bind(null,t,Ut,ir),e);break}Gs(t,Ut,ir);break;case 4:if(Hr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Cn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=We()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qR(r/1960))-r,10<r){t.timeoutHandle=Bp(Gs.bind(null,t,Ut,ir),r);break}Gs(t,Ut,ir);break;case 5:Gs(t,Ut,ir);break;default:throw Error(B(329))}}}return Gt(t,We()),t.callbackNode===n?vI.bind(null,t):null}function am(t,e){var n=Ga;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=nh(t,e),t!==2&&(e=Ut,Ut=n,e!==null&&lm(e)),t}function lm(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function HR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Rn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hr(t,e){for(e&=~Mg,e&=~Zh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Cn(e),r=1<<n;t[n]=-1,e&=~r}}function P0(t){if(pe&6)throw Error(B(327));lo();var e=Vu(t,0);if(!(e&1))return Gt(t,We()),null;var n=nh(t,e);if(t.tag!==0&&n===2){var r=Dp(t);r!==0&&(e=r,n=am(t,r))}if(n===1)throw n=Sl,ri(t,0),Hr(t,e),Gt(t,We()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gs(t,Ut,ir),Gt(t,We()),null}function Fg(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(To=We()+500,Qh&&Ls())}}function fi(t){ns!==null&&ns.tag===0&&!(pe&6)&&lo();var e=pe;pe|=1;var n=dn.transition,r=Ee;try{if(dn.transition=null,Ee=1,t)return t()}finally{Ee=r,dn.transition=n,pe=e,!(pe&6)&&Ls()}}function Ug(){Jt=Zi.current,Pe(Zi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xR(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(wg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Eo(),Pe(qt),Pe(bt),Ag();break;case 5:Ng(r);break;case 4:Eo();break;case 13:Pe(Oe);break;case 19:Pe(Oe);break;case 10:Ig(r.type._context);break;case 22:case 23:Ug()}n=n.return}if(ft=t,Qe=t=ds(t.current,null),_t=Jt=e,st=0,Sl=null,Mg=Zh=di=0,Ut=Ga=null,Xs!==null){for(e=0;e<Xs.length;e++)if(n=Xs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Xs=null}return t}function wI(t,e){do{var n=Qe;try{if(Tg(),fu.current=Xu,Ju){for(var r=je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ju=!1}if(hi=0,ht=nt=je=null,qa=!1,xl=0,jg.current=null,n===null||n.return===null){st=1,Sl=e,Qe=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=_t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=v0(o);if(_!==null){_.flags&=-257,w0(_,o,a,i,e),_.mode&1&&y0(i,u,e),e=_,l=u;var C=e.updateQueue;if(C===null){var A=new Set;A.add(l),e.updateQueue=A}else C.add(l);break e}else{if(!(e&1)){y0(i,u,e),Bg();break e}l=Error(B(426))}}else if(De&&a.mode&1){var R=v0(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),w0(R,o,a,i,e),Eg(xo(l,a));break e}}i=l=xo(l,a),st!==4&&(st=2),Ga===null?Ga=[i]:Ga.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=rI(i,l,e);d0(i,I);break e;case 1:a=l;var x=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(us===null||!us.has(w)))){i.flags|=65536,e&=-e,i.lanes|=e;var P=sI(i,a,e);d0(i,P);break e}}i=i.return}while(i!==null)}TI(n)}catch(M){e=M,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function EI(){var t=Zu.current;return Zu.current=Xu,t===null?Xu:t}function Bg(){(st===0||st===3||st===2)&&(st=4),ft===null||!(di&268435455)&&!(Zh&268435455)||Hr(ft,_t)}function nh(t,e){var n=pe;pe|=2;var r=EI();(ft!==t||_t!==e)&&(ir=null,ri(t,e));do try{GR();break}catch(s){wI(t,s)}while(!0);if(Tg(),pe=n,Zu.current=r,Qe!==null)throw Error(B(261));return ft=null,_t=0,st}function GR(){for(;Qe!==null;)xI(Qe)}function KR(){for(;Qe!==null&&!v1();)xI(Qe)}function xI(t){var e=SI(t.alternate,t,Jt);t.memoizedProps=t.pendingProps,e===null?TI(t):Qe=e,jg.current=null}function TI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BR(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{st=6,Qe=null;return}}else if(n=UR(n,e,Jt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);st===0&&(st=5)}function Gs(t,e,n){var r=Ee,s=dn.transition;try{dn.transition=null,Ee=1,QR(t,e,n,r)}finally{dn.transition=s,Ee=r}return null}function QR(t,e,n,r){do lo();while(ns!==null);if(pe&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(A1(t,i),t===ft&&(Qe=ft=null,_t=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Hc||(Hc=!0,CI(Mu,function(){return lo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=dn.transition,dn.transition=null;var o=Ee;Ee=1;var a=pe;pe|=4,jg.current=null,zR(t,n),_I(n,t),mR(Fp),Fu=!!Vp,Fp=Vp=null,t.current=n,WR(n),w1(),pe=a,Ee=o,dn.transition=i}else t.current=n;if(Hc&&(Hc=!1,ns=t,th=s),i=t.pendingLanes,i===0&&(us=null),T1(n.stateNode),Gt(t,We()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(eh)throw eh=!1,t=im,im=null,t;return th&1&&t.tag!==0&&lo(),i=t.pendingLanes,i&1?t===om?Ka++:(Ka=0,om=t):Ka=0,Ls(),null}function lo(){if(ns!==null){var t=rT(th),e=dn.transition,n=Ee;try{if(dn.transition=null,Ee=16>t?16:t,ns===null)var r=!1;else{if(t=ns,ns=null,th=0,pe&6)throw Error(B(331));var s=pe;for(pe|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ha(8,d,i)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,_=d.return;if(pI(d),d===u){H=null;break}if(m!==null){m.return=_,H=m;break}H=_}}}var C=i.alternate;if(C!==null){var A=C.child;if(A!==null){C.child=null;do{var R=A.sibling;A.sibling=null,A=R}while(A!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ha(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,H=I;break e}H=i.return}}var x=t.current;for(H=x;H!==null;){o=H;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,H=w;else e:for(o=x;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xh(9,a)}}catch(M){Fe(a,a.return,M)}if(a===o){H=null;break e}var P=a.sibling;if(P!==null){P.return=a.return,H=P;break e}H=a.return}}if(pe=s,Ls(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Wh,t)}catch{}r=!0}return r}finally{Ee=n,dn.transition=e}}return!1}function D0(t,e,n){e=xo(n,e),e=rI(t,e,1),t=cs(t,e,1),e=jt(),t!==null&&(Ql(t,1,e),Gt(t,e))}function Fe(t,e,n){if(t.tag===3)D0(t,t,n);else for(;e!==null;){if(e.tag===3){D0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(us===null||!us.has(r))){t=xo(n,t),t=sI(e,t,1),e=cs(e,t,1),t=jt(),e!==null&&(Ql(e,1,t),Gt(e,t));break}}e=e.return}}function YR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=jt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(_t&n)===n&&(st===4||st===3&&(_t&130023424)===_t&&500>We()-Vg?ri(t,0):Mg|=n),Gt(t,e)}function II(t,e){e===0&&(t.mode&1?(e=jc,jc<<=1,!(jc&130023424)&&(jc=4194304)):e=1);var n=jt();t=vr(t,e),t!==null&&(Ql(t,e,n),Gt(t,n))}function JR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),II(t,n)}function XR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),II(t,n)}var SI;SI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,FR(t,e,n);zt=!!(t.flags&131072)}else zt=!1,De&&e.flags&1048576&&AT(e,Hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mu(t,e),t=e.pendingProps;var s=yo(e,bt.current);ao(e,n),s=kg(null,e,r,t,s,n);var i=Pg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(i=!0,Wu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cg(e),s.updater=Jh,e.stateNode=s,s._reactInternals=e,Kp(e,r,t,n),e=Jp(null,e,r,!0,i,n)):(e.tag=0,De&&i&&vg(e),Ot(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ek(r),t=wn(r,t),s){case 0:e=Yp(null,e,r,t,n);break e;case 1:e=T0(null,e,r,t,n);break e;case 11:e=E0(null,e,r,t,n);break e;case 14:e=x0(null,e,r,wn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wn(r,s),Yp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wn(r,s),T0(t,e,r,s,n);case 3:e:{if(lI(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,LT(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=xo(Error(B(423)),e),e=I0(t,e,r,n,s);break e}else if(r!==s){s=xo(Error(B(424)),e),e=I0(t,e,r,n,s);break e}else for(Xt=ls(e.stateNode.containerInfo.firstChild),tn=e,De=!0,xn=null,n=DT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),r===s){e=wr(t,e,n);break e}Ot(t,e,r,n)}e=e.child}return e;case 5:return jT(e),t===null&&qp(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Up(r,s)?o=null:i!==null&&Up(r,i)&&(e.flags|=32),aI(t,e),Ot(t,e,o,n),e.child;case 6:return t===null&&qp(e),null;case 13:return cI(t,e,n);case 4:return bg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=wo(e,null,r,n):Ot(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wn(r,s),E0(t,e,r,s,n);case 7:return Ot(t,e,e.pendingProps,n),e.child;case 8:return Ot(t,e,e.pendingProps.children,n),e.child;case 12:return Ot(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,be(Gu,r._currentValue),r._currentValue=o,i!==null)if(Rn(i.value,o)){if(i.children===s.children&&!qt.current){e=wr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=fr(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Hp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ot(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ao(e,n),s=mn(s),r=r(s),e.flags|=1,Ot(t,e,r,n),e.child;case 14:return r=e.type,s=wn(r,e.pendingProps),s=wn(r.type,s),x0(t,e,r,s,n);case 15:return iI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:wn(r,s),mu(t,e),e.tag=1,Ht(r)?(t=!0,Wu(e)):t=!1,ao(e,n),nI(e,r,s),Kp(e,r,s,n),Jp(null,e,r,!0,t,n);case 19:return uI(t,e,n);case 22:return oI(t,e,n)}throw Error(B(156,e.tag))};function CI(t,e){return Zx(t,e)}function ZR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new ZR(t,e,n,r)}function $g(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ek(t){if(typeof t=="function")return $g(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ag)return 11;if(t===lg)return 14}return 2}function ds(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")$g(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zi:return si(n.children,s,i,e);case og:o=8,s|=8;break;case yp:return t=un(12,n,e,s|2),t.elementType=yp,t.lanes=i,t;case vp:return t=un(13,n,e,s),t.elementType=vp,t.lanes=i,t;case wp:return t=un(19,n,e,s),t.elementType=wp,t.lanes=i,t;case jx:return ed(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ox:o=10;break e;case Lx:o=9;break e;case ag:o=11;break e;case lg:o=14;break e;case zr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=un(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function si(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function ed(t,e,n,r){return t=un(22,t,r,e),t.elementType=jx,t.lanes=n,t.stateNode={isHidden:!1},t}function $f(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function zf(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function zg(t,e,n,r,s,i,o,a,l){return t=new tk(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=un(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cg(i),t}function nk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bI(t){if(!t)return xs;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ht(n))return bT(t,n,e)}return e}function NI(t,e,n,r,s,i,o,a,l){return t=zg(n,r,!0,t,s,i,o,a,l),t.context=bI(null),n=t.current,r=jt(),s=hs(n),i=fr(r,s),i.callback=e??null,cs(n,i,s),t.current.lanes=s,Ql(t,s,r),Gt(t,r),t}function td(t,e,n,r){var s=e.current,i=jt(),o=hs(s);return n=bI(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cs(s,e,o),t!==null&&(bn(t,s,o,i),du(t,s,o)),o}function rh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function O0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wg(t,e){O0(t,e),(t=t.alternate)&&O0(t,e)}function rk(){return null}var AI=typeof reportError=="function"?reportError:function(t){console.error(t)};function qg(t){this._internalRoot=t}nd.prototype.render=qg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));td(t,e,null,null)};nd.prototype.unmount=qg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){td(null,t,null,null)}),e[yr]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=oT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qr.length&&e!==0&&e<qr[n].priority;n++);qr.splice(n,0,t),n===0&&lT(t)}};function Hg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function sk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=rh(o);i.call(u)}}var o=NI(e,r,t,0,null,!1,!1,"",L0);return t._reactRootContainer=o,t[yr]=o.current,_l(t.nodeType===8?t.parentNode:t),fi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=rh(l);a.call(u)}}var l=zg(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[yr]=l.current,_l(t.nodeType===8?t.parentNode:t),fi(function(){td(e,l,n,r)}),l}function sd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=rh(o);a.call(l)}}td(e,o,t,s)}else o=sk(n,e,t,s,r);return rh(o)}sT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(hg(e,n|1),Gt(e,We()),!(pe&6)&&(To=We()+500,Ls()))}break;case 13:fi(function(){var r=vr(t,1);if(r!==null){var s=jt();bn(r,t,1,s)}}),Wg(t,1)}};dg=function(t){if(t.tag===13){var e=vr(t,134217728);if(e!==null){var n=jt();bn(e,t,134217728,n)}Wg(t,134217728)}};iT=function(t){if(t.tag===13){var e=hs(t),n=vr(t,e);if(n!==null){var r=jt();bn(n,t,e,r)}Wg(t,e)}};oT=function(){return Ee};aT=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Rp=function(t,e,n){switch(e){case"input":if(Tp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Kh(r);if(!s)throw Error(B(90));Vx(r),Tp(r,s)}}}break;case"textarea":Ux(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};Gx=Fg;Kx=fi;var ik={usingClientEntryPoint:!1,Events:[Jl,Gi,Kh,qx,Hx,Fg]},xa={findFiberByHostInstance:Js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ok={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jx(t),t===null?null:t.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||rk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{Wh=Gc.inject(ok),zn=Gc}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hg(e))throw Error(B(200));return nk(t,e,null,n)};rn.createRoot=function(t,e){if(!Hg(t))throw Error(B(299));var n=!1,r="",s=AI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=zg(t,1,!1,null,null,n,!1,r,s),t[yr]=e.current,_l(t.nodeType===8?t.parentNode:t),new qg(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Jx(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return fi(t)};rn.hydrate=function(t,e,n){if(!rd(e))throw Error(B(200));return sd(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Hg(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=AI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=NI(e,null,t,1,n??null,s,!1,i,o),t[yr]=e.current,_l(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new nd(e)};rn.render=function(t,e,n){if(!rd(e))throw Error(B(200));return sd(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!rd(t))throw Error(B(40));return t._reactRootContainer?(fi(function(){sd(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};rn.unstable_batchedUpdates=Fg;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return sd(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function RI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RI)}catch(t){console.error(t)}}RI(),Rx.exports=rn;var ak=Rx.exports,j0=ak;gp.createRoot=j0.createRoot,gp.hydrateRoot=j0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cl.apply(this,arguments)}var rs;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rs||(rs={}));const M0="popstate";function lk(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return cm("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:sh(s)}return uk(e,n,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ck(){return Math.random().toString(36).substr(2,8)}function V0(t,e){return{usr:t.state,key:t.key,idx:e}}function cm(t,e,n,r){return n===void 0&&(n=null),Cl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Uo(e):e,{state:n,key:e&&e.key||r||ck()})}function sh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Uo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uk(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=rs.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Cl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=rs.Pop;let R=d(),I=R==null?null:R-u;u=R,l&&l({action:a,location:A.location,delta:I})}function m(R,I){a=rs.Push;let x=cm(A.location,R,I);u=d()+1;let w=V0(x,u),P=A.createHref(x);try{o.pushState(w,"",P)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(P)}i&&l&&l({action:a,location:A.location,delta:1})}function _(R,I){a=rs.Replace;let x=cm(A.location,R,I);u=d();let w=V0(x,u),P=A.createHref(x);o.replaceState(w,"",P),i&&l&&l({action:a,location:A.location,delta:0})}function C(R){let I=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof R=="string"?R:sh(R);return x=x.replace(/ $/,"%20"),Xe(I,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,I)}let A={get action(){return a},get location(){return t(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(M0,f),l=R,()=>{s.removeEventListener(M0,f),l=null}},createHref(R){return e(s,R)},createURL:C,encodeLocation(R){let I=C(R);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(R){return o.go(R)}};return A}var F0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(F0||(F0={}));function hk(t,e,n){return n===void 0&&(n="/"),dk(t,e,n)}function dk(t,e,n,r){let s=typeof e=="string"?Uo(e):e,i=Kg(s.pathname||"/",n);if(i==null)return null;let o=kI(t);fk(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=Sk(i);a=xk(o[l],u)}return a}function kI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Xe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=fs([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Xe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kI(i.children,e,d,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:wk(u,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of PI(i.path))s(i,o,l)}),e}function PI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=PI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Ek(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pk=/^:[\w-]+$/,mk=3,gk=2,_k=1,yk=10,vk=-2,U0=t=>t==="*";function wk(t,e){let n=t.split("/"),r=n.length;return n.some(U0)&&(r+=vk),e&&(r+=gk),n.filter(s=>!U0(s)).reduce((s,i)=>s+(pk.test(i)?mk:i===""?_k:yk),r)}function Ek(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function xk(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",f=Tk({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:fs([i,f.pathname]),pathnameBase:Rk(fs([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=fs([i,f.pathnameBase]))}return o}function Tk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ik(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let A=a[f]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const C=a[f];return _&&!C?u[m]=void 0:u[m]=(C||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function Ik(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Sk(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Gg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Kg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Ck=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bk=t=>Ck.test(t);function Nk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Uo(t):t,i;if(n)if(bk(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Gg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=B0(n.substring(1),"/"):i=B0(n,e)}else i=e;return{pathname:i,search:kk(r),hash:Pk(s)}}function B0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Wf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ak(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function DI(t,e){let n=Ak(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function OI(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Uo(t):(s=Cl({},t),Xe(!s.pathname||!s.pathname.includes("?"),Wf("?","pathname","search",s)),Xe(!s.pathname||!s.pathname.includes("#"),Wf("#","pathname","hash",s)),Xe(!s.search||!s.search.includes("#"),Wf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=Nk(s,a),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const fs=t=>t.join("/").replace(/\/\/+/g,"/"),Rk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Dk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const LI=["post","put","patch","delete"];new Set(LI);const Ok=["get",...LI];new Set(Ok);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bl.apply(this,arguments)}const Qg=O.createContext(null),Lk=O.createContext(null),Ci=O.createContext(null),id=O.createContext(null),bi=O.createContext({outlet:null,matches:[],isDataRoute:!1}),jI=O.createContext(null);function jk(t,e){let{relative:n}=e===void 0?{}:e;Zl()||Xe(!1);let{basename:r,navigator:s}=O.useContext(Ci),{hash:i,pathname:o,search:a}=VI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:fs([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Zl(){return O.useContext(id)!=null}function od(){return Zl()||Xe(!1),O.useContext(id).location}function MI(t){O.useContext(Ci).static||O.useLayoutEffect(t)}function ad(){let{isDataRoute:t}=O.useContext(bi);return t?Qk():Mk()}function Mk(){Zl()||Xe(!1);let t=O.useContext(Qg),{basename:e,future:n,navigator:r}=O.useContext(Ci),{matches:s}=O.useContext(bi),{pathname:i}=od(),o=JSON.stringify(DI(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return MI(()=>{a.current=!0}),O.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=OI(u,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:fs([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,i,t])}function VI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Ci),{matches:s}=O.useContext(bi),{pathname:i}=od(),o=JSON.stringify(DI(s,r.v7_relativeSplatPath));return O.useMemo(()=>OI(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function Vk(t,e){return Fk(t,e)}function Fk(t,e,n,r){Zl()||Xe(!1);let{navigator:s}=O.useContext(Ci),{matches:i}=O.useContext(bi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=od(),d;if(e){var f;let R=typeof e=="string"?Uo(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||Xe(!1),d=R}else d=u;let m=d.pathname||"/",_=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=hk(t,{pathname:_}),A=Wk(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:fs([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:fs([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&A?O.createElement(id.Provider,{value:{location:bl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:rs.Pop}},A):A}function Uk(){let t=Kk(),e=Dk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const Bk=O.createElement(Uk,null);class $k extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(bi.Provider,{value:this.props.routeContext},O.createElement(jI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zk(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(Qg);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(bi.Provider,{value:e},r)}function Wk(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Xe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:_}=n,C=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||C){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let _,C=!1,A=null,R=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||Bk,l&&(u<0&&m===0?(Yk("route-fallback"),C=!0,R=null):u===m&&(C=!0,R=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),x=()=>{let w;return _?w=A:C?w=R:f.route.Component?w=O.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=d,O.createElement(zk,{match:f,routeContext:{outlet:d,matches:I,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement($k,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:x(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):x()},null)}var FI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FI||{}),UI=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(UI||{});function qk(t){let e=O.useContext(Qg);return e||Xe(!1),e}function Hk(t){let e=O.useContext(Lk);return e||Xe(!1),e}function Gk(t){let e=O.useContext(bi);return e||Xe(!1),e}function BI(t){let e=Gk(),n=e.matches[e.matches.length-1];return n.route.id||Xe(!1),n.route.id}function Kk(){var t;let e=O.useContext(jI),n=Hk(),r=BI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Qk(){let{router:t}=qk(FI.UseNavigateStable),e=BI(UI.UseNavigateStable),n=O.useRef(!1);return MI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,bl({fromRouteId:e},i)))},[t,e])}const $0={};function Yk(t,e,n){$0[t]||($0[t]=!0)}function Jk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function vu(t){Xe(!1)}function Xk(t){let{basename:e="/",children:n=null,location:r,navigationType:s=rs.Pop,navigator:i,static:o=!1,future:a}=t;Zl()&&Xe(!1);let l=e.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:l,navigator:i,static:o,future:bl({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Uo(r));let{pathname:d="/",search:f="",hash:m="",state:_=null,key:C="default"}=r,A=O.useMemo(()=>{let R=Kg(d,l);return R==null?null:{location:{pathname:R,search:f,hash:m,state:_,key:C},navigationType:s}},[l,d,f,m,_,C,s]);return A==null?null:O.createElement(Ci.Provider,{value:u},O.createElement(id.Provider,{children:n,value:A}))}function Zk(t){let{children:e,location:n}=t;return Vk(um(e),n)}new Promise(()=>{});function um(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,um(r.props.children,i));return}r.type!==vu&&Xe(!1),!r.props.index||!r.props.children||Xe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=um(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hm(){return hm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hm.apply(this,arguments)}function eP(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function tP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function nP(t,e){return t.button===0&&(!e||e==="_self")&&!tP(t)}const rP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],sP="6";try{window.__reactRouterVersion=sP}catch{}const iP="startTransition",z0=YA[iP];function oP(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=lk({window:s,v5Compat:!0}));let o=i.current,[a,l]=O.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=O.useCallback(f=>{u&&z0?z0(()=>l(f)):l(f)},[l,u]);return O.useLayoutEffect(()=>o.listen(d),[o,d]),O.useEffect(()=>Jk(r),[r]),O.createElement(Xk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const aP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",lP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wu=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=e,m=eP(e,rP),{basename:_}=O.useContext(Ci),C,A=!1;if(typeof u=="string"&&lP.test(u)&&(C=u,aP))try{let w=new URL(window.location.href),P=u.startsWith("//")?new URL(w.protocol+u):new URL(u),M=Kg(P.pathname,_);P.origin===w.origin&&M!=null?u=M+P.search+P.hash:A=!0}catch{}let R=jk(u,{relative:s}),I=cP(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:s,viewTransition:f});function x(w){r&&r(w),w.defaultPrevented||I(w)}return O.createElement("a",hm({},m,{href:C||R,onClick:A||i?r:x,ref:n,target:l}))});var W0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(W0||(W0={}));var q0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(q0||(q0={}));function cP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=ad(),u=od(),d=VI(t,{relative:o});return O.useCallback(f=>{if(nP(f,n)){f.preventDefault();let m=r!==void 0?r:sh(u)===sh(d);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,d,r,s,n,t,i,o,a])}/**
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
 */const uP=()=>{};var H0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Bo(e)},Bo=function(t){return new Error("Firebase Database ("+$I.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new dP;const m=i<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),f!==64){const C=u<<6&192|f;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WI=function(t){const e=zI(t);return Yg.encodeByteArray(e,!0)},ih=function(t){return WI(t).replace(/\./g,"")},oh=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){return qI(void 0,t)}function qI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pP(n)||(t[n]=qI(t[n],e[n]));return t}function pP(t){return t!=="__proto__"}/**
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
 */function mP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gP=()=>mP().__FIREBASE_DEFAULTS__,_P=()=>{if(typeof process>"u"||typeof H0>"u")return;const t=H0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oh(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return uP()||gP()||_P()||yP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HI=t=>{var e,n;return(n=(e=ld())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Jg=t=>{const e=HI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},GI=()=>{var t;return(t=ld())==null?void 0:t.config},KI=t=>{var e;return(e=ld())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Xg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ih(JSON.stringify(n)),ih(JSON.stringify(o)),""].join(".")}const Qa={};function vP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Qa))Qa[e]?t.emulator.push(e):t.prod.push(e);return t}function wP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let G0=!1;function ud(t,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Qa[t]===e||Qa[t]||G0)return;Qa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=vP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{G0=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=wP(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),A=n("learnmore"),R=document.getElementById(A)||document.createElement("a"),I=n("preprendIcon"),x=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const w=m.element;a(w),d(R,A);const P=u();l(x,I),w.append(x,C,R,P),document.body.appendChild(w)}i?(C.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())}function EP(){var e;const t=(e=ld())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IP(){const t=Nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SP(){return $I.NODE_ADMIN===!0}function CP(){return!EP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bP(){try{return typeof indexedDB=="object"}catch{return!1}}function NP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AP,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ec.prototype.create)}}class ec{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?RP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new er(s,a,r)}}function RP(t,e){return t.replace(kP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t){return JSON.parse(t)}function rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Nl(oh(i[0])||""),n=Nl(oh(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},PP=function(t){const e=YI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DP=function(t){const e=YI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Io(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function lh(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(K0(i)&&K0(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function K0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+u+l+d+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function LP(t,e){const n=new jP(t,e);return n.subscribe.bind(n)}class jP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qf),s.error===void 0&&(s.error=qf),s.complete===void 0&&(s.complete=qf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qf(){}function So(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},hd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _e(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class FP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ar;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BP(e))try{this.getOrInitializeService({instanceIdentifier:Ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ks){return this.instances.has(e)}getOptions(e=Ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ks){return this.component?this.component.multipleInstances?e:Ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UP(t){return t===Ks?void 0:t}function BP(t){return t.instantiationMode==="EAGER"}/**
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
 */class $P{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new FP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const zP={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},WP=le.INFO,qP={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},HP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=WP,this._logHandler=HP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const GP=(t,e)=>e.some(n=>t instanceof n);let Q0,Y0;function KP(){return Q0||(Q0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QP(){return Y0||(Y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JI=new WeakMap,dm=new WeakMap,XI=new WeakMap,Hf=new WeakMap,e_=new WeakMap;function YP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ps(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&JI.set(n,t)}).catch(()=>{}),e_.set(e,t),e}function JP(t){if(dm.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});dm.set(t,e)}let fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||XI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ps(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XP(t){fm=t(fm)}function ZP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gf(this),e,...n);return XI.set(r,e.sort?e.sort():[e]),ps(r)}:QP().includes(t)?function(...e){return t.apply(Gf(this),e),ps(JI.get(this))}:function(...e){return ps(t.apply(Gf(this),e))}}function eD(t){return typeof t=="function"?ZP(t):(t instanceof IDBTransaction&&JP(t),GP(t,KP())?new Proxy(t,fm):t)}function ps(t){if(t instanceof IDBRequest)return YP(t);if(Hf.has(t))return Hf.get(t);const e=eD(t);return e!==t&&(Hf.set(t,e),e_.set(e,t)),e}const Gf=t=>e_.get(t);function tD(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ps(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ps(o.result),l.oldVersion,l.newVersion,ps(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const nD=["get","getKey","getAll","getAllKeys","count"],rD=["put","add","delete","clear"],Kf=new Map;function J0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kf.get(e))return Kf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=rD.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nD.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Kf.set(e,i),i}XP(t=>({...t,get:(e,n,r)=>J0(e,n)||t.get(e,n,r),has:(e,n)=>!!J0(e,n)||t.has(e,n)}));/**
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
 */class sD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(iD(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function iD(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pm="@firebase/app",X0="0.14.7";/**
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
 */const Tr=new dd("@firebase/app"),oD="@firebase/app-compat",aD="@firebase/analytics-compat",lD="@firebase/analytics",cD="@firebase/app-check-compat",uD="@firebase/app-check",hD="@firebase/auth",dD="@firebase/auth-compat",fD="@firebase/database",pD="@firebase/data-connect",mD="@firebase/database-compat",gD="@firebase/functions",_D="@firebase/functions-compat",yD="@firebase/installations",vD="@firebase/installations-compat",wD="@firebase/messaging",ED="@firebase/messaging-compat",xD="@firebase/performance",TD="@firebase/performance-compat",ID="@firebase/remote-config",SD="@firebase/remote-config-compat",CD="@firebase/storage",bD="@firebase/storage-compat",ND="@firebase/firestore",AD="@firebase/ai",RD="@firebase/firestore-compat",kD="firebase",PD="12.8.0";/**
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
 */const mm="[DEFAULT]",DD={[pm]:"fire-core",[oD]:"fire-core-compat",[lD]:"fire-analytics",[aD]:"fire-analytics-compat",[uD]:"fire-app-check",[cD]:"fire-app-check-compat",[hD]:"fire-auth",[dD]:"fire-auth-compat",[fD]:"fire-rtdb",[pD]:"fire-data-connect",[mD]:"fire-rtdb-compat",[gD]:"fire-fn",[_D]:"fire-fn-compat",[yD]:"fire-iid",[vD]:"fire-iid-compat",[wD]:"fire-fcm",[ED]:"fire-fcm-compat",[xD]:"fire-perf",[TD]:"fire-perf-compat",[ID]:"fire-rc",[SD]:"fire-rc-compat",[CD]:"fire-gcs",[bD]:"fire-gcs-compat",[ND]:"fire-fst",[RD]:"fire-fst-compat",[AD]:"fire-vertex","fire-js":"fire-js",[kD]:"fire-js-all"};/**
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
 */const ch=new Map,OD=new Map,gm=new Map;function Z0(t,e){try{t.container.addComponent(e)}catch(n){Tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ts(t){const e=t.name;if(gm.has(e))return Tr.debug(`There were multiple attempts to register component ${e}.`),!1;gm.set(e,t);for(const n of ch.values())Z0(n,t);for(const n of OD.values())Z0(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ms=new ec("app","Firebase",LD);/**
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
 */class jD{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ms.create("app-deleted",{appName:this._name})}}/**
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
 */const js=PD;function ZI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mm,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ms.create("bad-app-name",{appName:String(s)});if(n||(n=GI()),!n)throw ms.create("no-options");const i=ch.get(s);if(i){if(Er(n,i.options)&&Er(r,i.config))return i;throw ms.create("duplicate-app",{appName:s})}const o=new $P(s);for(const l of gm.values())o.addComponent(l);const a=new jD(n,r,o);return ch.set(s,a),a}function fd(t=mm){const e=ch.get(t);if(!e&&t===mm&&GI())return ZI();if(!e)throw ms.create("no-app",{appName:t});return e}function fn(t,e,n){let r=DD[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tr.warn(o.join(" "));return}Ts(new xr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const MD="firebase-heartbeat-database",VD=1,Al="firebase-heartbeat-store";let Qf=null;function eS(){return Qf||(Qf=tD(MD,VD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(t=>{throw ms.create("idb-open",{originalErrorMessage:t.message})})),Qf}async function FD(t){try{const n=(await eS()).transaction(Al),r=await n.objectStore(Al).get(tS(t));return await n.done,r}catch(e){if(e instanceof er)Tr.warn(e.message);else{const n=ms.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tr.warn(n.message)}}}async function ew(t,e){try{const r=(await eS()).transaction(Al,"readwrite");await r.objectStore(Al).put(e,tS(t)),await r.done}catch(n){if(n instanceof er)Tr.warn(n.message);else{const r=ms.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tr.warn(r.message)}}}function tS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UD=1024,BD=30;class $D{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=tw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>BD){const o=qD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tw(),{heartbeatsToSend:r,unsentEntries:s}=zD(this._heartbeatsCache.heartbeats),i=ih(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tr.warn(n),""}}}function tw(){return new Date().toISOString().substring(0,10)}function zD(t,e=UD){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),nw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bP()?NP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ew(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ew(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function nw(t){return ih(JSON.stringify({version:2,heartbeats:t})).length}function qD(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function HD(t){Ts(new xr("platform-logger",e=>new sD(e),"PRIVATE")),Ts(new xr("heartbeat",e=>new $D(e),"PRIVATE")),fn(pm,X0,t),fn(pm,X0,"esm2020"),fn("fire-js","")}HD("");var GD="firebase",KD="12.8.0";/**
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
 */fn(GD,KD,"app");function nS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QD=nS,rS=new ec("auth","Firebase",nS());/**
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
 */const uh=new dd("@firebase/auth");function YD(t,...e){uh.logLevel<=le.WARN&&uh.warn(`Auth (${js}): ${t}`,...e)}function Eu(t,...e){uh.logLevel<=le.ERROR&&uh.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function kn(t,...e){throw t_(t,...e)}function qn(t,...e){return t_(t,...e)}function sS(t,e,n){const r={...QD(),[e]:n};return new ec("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return sS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function t_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rS.create(t,...e)}function J(t,e,...n){if(!t)throw t_(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Eu(e),new Error(e)}function Ir(t,e){t||ur(e)}/**
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
 */function hh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function iS(){return rw()==="http:"||rw()==="https:"}function rw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function JD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iS()||TP()||"connection"in navigator)?navigator.onLine:!0}function XD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ir(n>e,"Short delay should be less than long delay!"),this.isMobile=Zg()||QI()}get(){return JD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function n_(t,e){Ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class oS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const e2=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],t2=new nc(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function kr(t,e,n,r,s={}){return aS(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=$o({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return xP()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(u.credentials="include"),oS.fetch()(await lS(t,t.config.apiHost,n,a),u)})}async function aS(t,e,n){t._canInitEmulator=!1;const r={...ZD,...e};try{const s=new r2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Kc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kc(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw sS(t,d,u);kn(t,d)}}catch(s){if(s instanceof er)throw s;kn(t,"network-request-failed",{message:String(s)})}}async function rc(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function lS(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?n_(t.config,s):`${t.config.apiScheme}://${s}`;return e2.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function n2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class r2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qn(this.auth,"network-request-failed")),t2.get())})}}function Kc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qn(t,e,r);return s.customData._tokenResponse=n,s}function sw(t){return t!==void 0&&t.enterprise!==void 0}class s2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return n2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function i2(t,e){return kr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
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
 */async function o2(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function dh(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ya(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=_e(t),r=await n.getIdToken(e),s=r_(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ya(Yf(s.auth_time)),issuedAtTime:Ya(Yf(s.iat)),expirationTime:Ya(Yf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yf(t){return Number(t)*1e3}function r_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Eu("JWT malformed, contained fewer than 3 sections"),null;try{const s=oh(n);return s?JSON.parse(s):(Eu("Failed to decode base64 JWT payload"),null)}catch(s){return Eu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function iw(t){const e=r_(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Rl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&l2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class c2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fh(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Rl(t,dh(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?cS(s.providerUserInfo):[],o=h2(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function u2(t){const e=_e(t);await fh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function d2(t,e){const n=await aS(t,{},async()=>{const r=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await lS(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(l.credentials="include"),oS.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return kr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
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
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=iw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await d2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new co;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
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
 */function $r(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new c2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Rl(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return u2(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Rl(this,o2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:_,providerData:C,stsTokenManager:A}=n;J(f&&A,e,"internal-error");const R=co.fromJSON(this.name,A);J(typeof f=="string",e,"internal-error"),$r(r,e.name),$r(s,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof _=="boolean",e,"internal-error"),$r(i,e.name),$r(o,e.name),$r(a,e.name),$r(l,e.name),$r(u,e.name),$r(d,e.name);const I=new In({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:d});return C&&Array.isArray(C)&&(I.providerData=C.map(x=>({...x}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new co;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fh(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cS(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new co;a.updateFromIdToken(r);const l=new In({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const ow=new Map;function hr(t){Ir(t instanceof Function,"Expected a class definition");let e=ow.get(t);return e?(Ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ow.set(t,e),e)}/**
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
 */class uS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uS.type="NONE";const aw=uS;/**
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
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xu(this.userKey,s.apiKey,i),this.fullPersistenceKey=xu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dh(this.auth,{idToken:e}).catch(()=>{});return n?In._fromGetAccountInfoResponse(this.auth,n,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new uo(hr(aw),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||hr(aw);const o=xu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await dh(e,{idToken:d}).catch(()=>{});if(!m)break;f=await In._fromGetAccountInfoResponse(e,m,d)}else f=In._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new uo(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new uo(i,e,r))}}/**
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
 */function lw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gS(e))return"Blackberry";if(_S(e))return"Webos";if(dS(e))return"Safari";if((e.includes("chrome/")||fS(e))&&!e.includes("edge/"))return"Chrome";if(mS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hS(t=Nt()){return/firefox\//i.test(t)}function dS(t=Nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fS(t=Nt()){return/crios\//i.test(t)}function pS(t=Nt()){return/iemobile/i.test(t)}function mS(t=Nt()){return/android/i.test(t)}function gS(t=Nt()){return/blackberry/i.test(t)}function _S(t=Nt()){return/webos/i.test(t)}function s_(t=Nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p2(t=Nt()){var e;return s_(t)&&!!((e=window.navigator)!=null&&e.standalone)}function m2(){return IP()&&document.documentMode===10}function yS(t=Nt()){return s_(t)||mS(t)||_S(t)||gS(t)||/windows phone/i.test(t)||pS(t)}/**
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
 */function vS(t,e=[]){let n;switch(t){case"Browser":n=lw(Nt());break;case"Worker":n=`${lw(Nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class g2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _2(t,e={}){return kr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
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
 */const y2=6;class v2{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??y2,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class w2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cw(this),this.idTokenSubscription=new cw(this),this.beforeStateQueue=new g2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dh(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(pr(this));const n=e?_e(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _2(this),n=new v2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ec("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[hr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&YD(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ni(t){return _e(t)}class cw{constructor(e){this.auth=e,this.observer=null,this.addObserver=LP(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E2(t){pd=t}function wS(t){return pd.loadJS(t)}function x2(){return pd.recaptchaEnterpriseScript}function T2(){return pd.gapiScript}function I2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class S2{constructor(){this.enterprise=new C2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class C2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const b2="recaptcha-enterprise",ES="NO_RECAPTCHA";class N2{constructor(e){this.type=b2,this.auth=Ni(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{i2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new s2(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;sw(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ES)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new S2().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sw(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=x2();l.length!==0&&(l+=a),wS(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function uw(t,e,n,r=!1,s=!1){const i=new N2(t);let o;if(s)o=ES;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ym(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await uw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await uw(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function A2(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return s;kn(s,"already-initialized")}return n.initialize({options:e})}function R2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k2(t,e,n){const r=Ni(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=xS(e),{host:o,port:a}=P2(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Er(u,r.config.emulator)&&Er(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Zn(o)?(cd(`${i}//${o}${l}`),ud("Auth",!0)):D2()}function xS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P2(t){const e=xS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:hw(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:hw(o)}}}function hw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function D2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class i_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}async function O2(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function L2(t,e){return rc(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
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
 */async function j2(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function M2(t,e){return rc(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
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
 */class kl extends i_{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new kl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new kl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ym(e,n,"signInWithPassword",L2);case"emailLink":return j2(e,{email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ym(e,r,"signUpPassword",O2);case"emailLink":return M2(e,{idToken:n,email:this._email,oobCode:this._password});default:kn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ho(t,e){return rc(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
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
 */const V2="http://localhost";class pi extends i_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new pi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ho(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ho(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ho(e,n)}buildRequest(){const e={requestUri:V2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$o(n)}return e}}/**
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
 */function F2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U2(t){const e=Oa(La(t)).link,n=e?Oa(La(e)).deep_link_id:null,r=Oa(La(t)).deep_link_id;return(r?Oa(La(r)).link:null)||r||n||e||t}class o_{constructor(e){const n=Oa(La(e)),r=n.apiKey??null,s=n.oobCode??null,i=F2(n.mode??null);J(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=U2(e);try{return new o_(n)}catch{return null}}}/**
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
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,n){return kl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=o_.parseLink(n);return J(r,"argument-error"),kl._fromEmailAndCode(e,r.code,r.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class TS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sc extends TS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gr extends sc{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gr.credential(e.oauthAccessToken)}catch{return null}}}Gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gr.PROVIDER_ID="facebook.com";/**
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
 */class Kr extends sc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kr.credential(n,r)}catch{return null}}}Kr.GOOGLE_SIGN_IN_METHOD="google.com";Kr.PROVIDER_ID="google.com";/**
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
 */class Qr extends sc{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Yr extends sc{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.TWITTER_SIGN_IN_METHOD="twitter.com";Yr.PROVIDER_ID="twitter.com";/**
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
 */async function B2(t,e){return rc(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=dw(r);return new mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=dw(r);return new mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function dw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ph extends er{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ph.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ph(e,n,r,s)}}function IS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ph._fromErrorAndOperation(t,i,e,r):i})}async function $2(t,e,n=!1){const r=await Rl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function z2(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Rl(t,IS(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=r_(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&kn(r,"user-mismatch"),i}}/**
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
 */async function SS(t,e,n=!1){if(Bt(t.app))return Promise.reject(pr(t));const r="signIn",s=await IS(t,r,e),i=await mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function W2(t,e){return SS(Ni(t),e)}/**
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
 */async function CS(t){const e=Ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function q2(t,e,n){if(Bt(t.app))return Promise.reject(pr(t));const r=Ni(t),o=await ym(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",B2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CS(t),l}),a=await mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function H2(t,e,n){return Bt(t.app)?Promise.reject(pr(t)):W2(_e(t),zo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&CS(t),r})}/**
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
 */async function G2(t,e){return kr(t,"POST","/v1/accounts:createAuthUri",Rr(t,e))}/**
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
 */async function K2(t,e){const n=iS()?hh():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await G2(_e(t),r);return s||[]}function Q2(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function Y2(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function J2(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function X2(t){return _e(t).signOut()}const mh="__sak";/**
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
 */class bS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mh,"1"),this.storage.removeItem(mh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Z2=1e3,eO=10;class NS extends bS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=yS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);m2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Z2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}NS.type="LOCAL";const tO=NS;/**
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
 */class AS extends bS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AS.type="SESSION";const RS=AS;/**
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
 */function nO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class md{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new md(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await nO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}md.receivers=[];/**
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
 */class rO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=a_("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function sO(t){Hn().location.href=t}/**
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
 */function kS(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function iO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function aO(){return kS()?self:null}/**
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
 */const PS="firebaseLocalStorageDb",lO=1,gh="firebaseLocalStorage",DS="fbase_key";class ic{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gd(t,e){return t.transaction([gh],e?"readwrite":"readonly").objectStore(gh)}function cO(){const t=indexedDB.deleteDatabase(PS);return new ic(t).toPromise()}function vm(){const t=indexedDB.open(PS,lO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(gh,{keyPath:DS})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(gh)?e(r):(r.close(),await cO(),e(await vm()))})})}async function fw(t,e,n){const r=gd(t,!0).put({[DS]:e,value:n});return new ic(r).toPromise()}async function uO(t,e){const n=gd(t,!1).get(e),r=await new ic(n).toPromise();return r===void 0?null:r.value}function pw(t,e){const n=gd(t,!0).delete(e);return new ic(n).toPromise()}const hO=800,dO=3;class OS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=md._getInstance(aO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await iO(),!this.activeServiceWorker)return;this.sender=new rO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vm();return await fw(e,mh,"1"),await pw(e,mh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gd(s,!1).getAll();return new ic(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}OS.type="LOCAL";const fO=OS;new nc(3e4,6e4);/**
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
 */function pO(t,e){return e?hr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class l_ extends i_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ho(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function mO(t){return SS(t.auth,new l_(t),t.bypassAuthState)}function gO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),z2(n,new l_(t),t.bypassAuthState)}async function _O(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),$2(n,new l_(t),t.bypassAuthState)}/**
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
 */class LS{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mO;case"linkViaPopup":case"linkViaRedirect":return _O;case"reauthViaPopup":case"reauthViaRedirect":return gO;default:kn(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yO=new nc(2e3,1e4);class eo extends LS{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,eo.currentPopupAction&&eo.currentPopupAction.cancel(),eo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Ir(this.filter.length===1,"Popup operations only handle one event");const e=a_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(qn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yO.get())};e()}}eo.currentPopupAction=null;/**
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
 */const vO="pendingRedirect",Tu=new Map;class wO extends LS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await EO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EO(t,e){const n=IO(e),r=TO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function xO(t,e){Tu.set(t._key(),e)}function TO(t){return hr(t._redirectPersistence)}function IO(t){return xu(vO,t.config.apiKey,t.name)}async function SO(t,e,n=!1){if(Bt(t.app))return Promise.reject(pr(t));const r=Ni(t),s=pO(r,e),o=await new wO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const CO=10*60*1e3;class bO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!jS(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(qn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CO&&this.cachedEventUids.clear(),this.cachedEventUids.has(mw(e))}saveEventToCache(e){this.cachedEventUids.add(mw(e)),this.lastProcessedEventTime=Date.now()}}function mw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jS(t);default:return!1}}/**
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
 */async function AO(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const RO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kO=/^https?/;async function PO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AO(t);for(const n of e)try{if(DO(n))return}catch{}kn(t,"unauthorized-domain")}function DO(t){const e=hh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kO.test(n))return!1;if(RO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OO=new nc(3e4,6e4);function gw(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LO(t){return new Promise((e,n)=>{var s,i,o;function r(){gw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gw(),n(qn(t,"network-request-failed"))},timeout:OO.get()})}if((i=(s=Hn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Hn().gapi)!=null&&o.load)r();else{const a=I2("iframefcb");return Hn()[a]=()=>{gapi.load?r():n(qn(t,"network-request-failed"))},wS(`${T2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Iu=null,e})}let Iu=null;function jO(t){return Iu=Iu||LO(t),Iu}/**
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
 */const MO=new nc(5e3,15e3),VO="__/auth/iframe",FO="emulator/auth/iframe",UO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $O(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?n_(e,FO):`https://${t.config.authDomain}/${VO}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=BO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$o(r).slice(1)}`}async function zO(t){const e=await jO(t),n=Hn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:$O(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qn(t,"network-request-failed"),a=Hn().setTimeout(()=>{i(o)},MO.get());function l(){Hn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const WO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qO=500,HO=600,GO="_blank",KO="http://localhost";class _w{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QO(t,e,n,r=qO,s=HO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...WO,width:r.toString(),height:s.toString(),top:i,left:o},u=Nt().toLowerCase();n&&(a=fS(u)?GO:n),hS(u)&&(e=e||KO,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(p2(u)&&a!=="_self")return YO(e||"",a),new _w(null);const f=window.open(e||"",a,d);J(f,t,"popup-blocked");try{f.focus()}catch{}return new _w(f)}function YO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JO="__/auth/handler",XO="emulator/auth/handler",ZO=encodeURIComponent("fac");async function yw(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof TS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof sc){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${ZO}=${encodeURIComponent(l)}`:"";return`${eL(t)}?${$o(a).slice(1)}${u}`}function eL({config:t}){return t.emulator?n_(t,XO):`https://${t.authDomain}/${JO}`}/**
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
 */const Jf="webStorageSupport";class tL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RS,this._completeRedirectFn=SO,this._overrideRedirectResult=xO}async _openPopup(e,n,r,s){var o;Ir((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await yw(e,n,r,hh(),s);return QO(e,i,a_())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await yw(e,n,r,hh(),s);return sO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zO(e),r=new bO(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jf,{type:Jf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Jf];i!==void 0&&n(!!i),kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yS()||dS()||s_()}}const nL=tL;var vw="@firebase/auth",ww="1.12.0";/**
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
 */class rL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iL(t){Ts(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vS(t)},u=new w2(r,s,i,l);return R2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ts(new xr("auth-internal",e=>{const n=Ni(e.getProvider("auth").getImmediate());return(r=>new rL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(vw,ww,sL(t)),fn(vw,ww,"esm2020")}/**
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
 */const oL=5*60,aL=KI("authIdTokenMaxAge")||oL;let Ew=null;const lL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aL)return;const s=n==null?void 0:n.token;Ew!==s&&(Ew=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cL(t=fd()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:nL,persistence:[fO,tO,RS]}),r=KI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lL(i.toString());Y2(n,o,()=>o(n.currentUser)),Q2(n,a=>o(a))}}const s=HI("auth");return s&&k2(n,`http://${s}`),n}function uL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}E2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",uL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iL("Browser");var xw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gs,MS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,E){function y(){}y.prototype=E.prototype,T.F=E.prototype,T.prototype=new y,T.prototype.constructor=T,T.D=function(S,N,k){for(var b=Array(arguments.length-2),se=2;se<arguments.length;se++)b[se-2]=arguments[se];return E.prototype[N].apply(S,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,E,y){y||(y=0);const S=Array(16);if(typeof E=="string")for(var N=0;N<16;++N)S[N]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(N=0;N<16;++N)S[N]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=T.g[0],y=T.g[1],N=T.g[2];let k=T.g[3],b;b=E+(k^y&(N^k))+S[0]+3614090360&4294967295,E=y+(b<<7&4294967295|b>>>25),b=k+(N^E&(y^N))+S[1]+3905402710&4294967295,k=E+(b<<12&4294967295|b>>>20),b=N+(y^k&(E^y))+S[2]+606105819&4294967295,N=k+(b<<17&4294967295|b>>>15),b=y+(E^N&(k^E))+S[3]+3250441966&4294967295,y=N+(b<<22&4294967295|b>>>10),b=E+(k^y&(N^k))+S[4]+4118548399&4294967295,E=y+(b<<7&4294967295|b>>>25),b=k+(N^E&(y^N))+S[5]+1200080426&4294967295,k=E+(b<<12&4294967295|b>>>20),b=N+(y^k&(E^y))+S[6]+2821735955&4294967295,N=k+(b<<17&4294967295|b>>>15),b=y+(E^N&(k^E))+S[7]+4249261313&4294967295,y=N+(b<<22&4294967295|b>>>10),b=E+(k^y&(N^k))+S[8]+1770035416&4294967295,E=y+(b<<7&4294967295|b>>>25),b=k+(N^E&(y^N))+S[9]+2336552879&4294967295,k=E+(b<<12&4294967295|b>>>20),b=N+(y^k&(E^y))+S[10]+4294925233&4294967295,N=k+(b<<17&4294967295|b>>>15),b=y+(E^N&(k^E))+S[11]+2304563134&4294967295,y=N+(b<<22&4294967295|b>>>10),b=E+(k^y&(N^k))+S[12]+1804603682&4294967295,E=y+(b<<7&4294967295|b>>>25),b=k+(N^E&(y^N))+S[13]+4254626195&4294967295,k=E+(b<<12&4294967295|b>>>20),b=N+(y^k&(E^y))+S[14]+2792965006&4294967295,N=k+(b<<17&4294967295|b>>>15),b=y+(E^N&(k^E))+S[15]+1236535329&4294967295,y=N+(b<<22&4294967295|b>>>10),b=E+(N^k&(y^N))+S[1]+4129170786&4294967295,E=y+(b<<5&4294967295|b>>>27),b=k+(y^N&(E^y))+S[6]+3225465664&4294967295,k=E+(b<<9&4294967295|b>>>23),b=N+(E^y&(k^E))+S[11]+643717713&4294967295,N=k+(b<<14&4294967295|b>>>18),b=y+(k^E&(N^k))+S[0]+3921069994&4294967295,y=N+(b<<20&4294967295|b>>>12),b=E+(N^k&(y^N))+S[5]+3593408605&4294967295,E=y+(b<<5&4294967295|b>>>27),b=k+(y^N&(E^y))+S[10]+38016083&4294967295,k=E+(b<<9&4294967295|b>>>23),b=N+(E^y&(k^E))+S[15]+3634488961&4294967295,N=k+(b<<14&4294967295|b>>>18),b=y+(k^E&(N^k))+S[4]+3889429448&4294967295,y=N+(b<<20&4294967295|b>>>12),b=E+(N^k&(y^N))+S[9]+568446438&4294967295,E=y+(b<<5&4294967295|b>>>27),b=k+(y^N&(E^y))+S[14]+3275163606&4294967295,k=E+(b<<9&4294967295|b>>>23),b=N+(E^y&(k^E))+S[3]+4107603335&4294967295,N=k+(b<<14&4294967295|b>>>18),b=y+(k^E&(N^k))+S[8]+1163531501&4294967295,y=N+(b<<20&4294967295|b>>>12),b=E+(N^k&(y^N))+S[13]+2850285829&4294967295,E=y+(b<<5&4294967295|b>>>27),b=k+(y^N&(E^y))+S[2]+4243563512&4294967295,k=E+(b<<9&4294967295|b>>>23),b=N+(E^y&(k^E))+S[7]+1735328473&4294967295,N=k+(b<<14&4294967295|b>>>18),b=y+(k^E&(N^k))+S[12]+2368359562&4294967295,y=N+(b<<20&4294967295|b>>>12),b=E+(y^N^k)+S[5]+4294588738&4294967295,E=y+(b<<4&4294967295|b>>>28),b=k+(E^y^N)+S[8]+2272392833&4294967295,k=E+(b<<11&4294967295|b>>>21),b=N+(k^E^y)+S[11]+1839030562&4294967295,N=k+(b<<16&4294967295|b>>>16),b=y+(N^k^E)+S[14]+4259657740&4294967295,y=N+(b<<23&4294967295|b>>>9),b=E+(y^N^k)+S[1]+2763975236&4294967295,E=y+(b<<4&4294967295|b>>>28),b=k+(E^y^N)+S[4]+1272893353&4294967295,k=E+(b<<11&4294967295|b>>>21),b=N+(k^E^y)+S[7]+4139469664&4294967295,N=k+(b<<16&4294967295|b>>>16),b=y+(N^k^E)+S[10]+3200236656&4294967295,y=N+(b<<23&4294967295|b>>>9),b=E+(y^N^k)+S[13]+681279174&4294967295,E=y+(b<<4&4294967295|b>>>28),b=k+(E^y^N)+S[0]+3936430074&4294967295,k=E+(b<<11&4294967295|b>>>21),b=N+(k^E^y)+S[3]+3572445317&4294967295,N=k+(b<<16&4294967295|b>>>16),b=y+(N^k^E)+S[6]+76029189&4294967295,y=N+(b<<23&4294967295|b>>>9),b=E+(y^N^k)+S[9]+3654602809&4294967295,E=y+(b<<4&4294967295|b>>>28),b=k+(E^y^N)+S[12]+3873151461&4294967295,k=E+(b<<11&4294967295|b>>>21),b=N+(k^E^y)+S[15]+530742520&4294967295,N=k+(b<<16&4294967295|b>>>16),b=y+(N^k^E)+S[2]+3299628645&4294967295,y=N+(b<<23&4294967295|b>>>9),b=E+(N^(y|~k))+S[0]+4096336452&4294967295,E=y+(b<<6&4294967295|b>>>26),b=k+(y^(E|~N))+S[7]+1126891415&4294967295,k=E+(b<<10&4294967295|b>>>22),b=N+(E^(k|~y))+S[14]+2878612391&4294967295,N=k+(b<<15&4294967295|b>>>17),b=y+(k^(N|~E))+S[5]+4237533241&4294967295,y=N+(b<<21&4294967295|b>>>11),b=E+(N^(y|~k))+S[12]+1700485571&4294967295,E=y+(b<<6&4294967295|b>>>26),b=k+(y^(E|~N))+S[3]+2399980690&4294967295,k=E+(b<<10&4294967295|b>>>22),b=N+(E^(k|~y))+S[10]+4293915773&4294967295,N=k+(b<<15&4294967295|b>>>17),b=y+(k^(N|~E))+S[1]+2240044497&4294967295,y=N+(b<<21&4294967295|b>>>11),b=E+(N^(y|~k))+S[8]+1873313359&4294967295,E=y+(b<<6&4294967295|b>>>26),b=k+(y^(E|~N))+S[15]+4264355552&4294967295,k=E+(b<<10&4294967295|b>>>22),b=N+(E^(k|~y))+S[6]+2734768916&4294967295,N=k+(b<<15&4294967295|b>>>17),b=y+(k^(N|~E))+S[13]+1309151649&4294967295,y=N+(b<<21&4294967295|b>>>11),b=E+(N^(y|~k))+S[4]+4149444226&4294967295,E=y+(b<<6&4294967295|b>>>26),b=k+(y^(E|~N))+S[11]+3174756917&4294967295,k=E+(b<<10&4294967295|b>>>22),b=N+(E^(k|~y))+S[2]+718787259&4294967295,N=k+(b<<15&4294967295|b>>>17),b=y+(k^(N|~E))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+E&4294967295,T.g[1]=T.g[1]+(N+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+N&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.v=function(T,E){E===void 0&&(E=T.length);const y=E-this.blockSize,S=this.C;let N=this.h,k=0;for(;k<E;){if(N==0)for(;k<=y;)s(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<E;)if(S[N++]=T.charCodeAt(k++),N==this.blockSize){s(this,S),N=0;break}}else for(;k<E;)if(S[N++]=T[k++],N==this.blockSize){s(this,S),N=0;break}}this.h=N,this.o+=E},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var E=1;E<T.length-8;++E)T[E]=0;E=this.o*8;for(var y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.v(T),T=Array(16),E=0,y=0;y<4;++y)for(let S=0;S<32;S+=8)T[E++]=this.g[y]>>>S&255;return T};function i(T,E){var y=a;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=E(T)}function o(T,E){this.h=E;const y=[];let S=!0;for(let N=T.length-1;N>=0;N--){const k=T[N]|0;S&&k==E||(y[N]=k,S=!1)}this.g=y}var a={};function l(T){return-128<=T&&T<128?i(T,function(E){return new o([E|0],E<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return R(u(-T));const E=[];let y=1;for(let S=0;T>=y;S++)E[S]=T/y|0,y*=4294967296;return new o(E,0)}function d(T,E){if(T.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(T.charAt(0)=="-")return R(d(T.substring(1),E));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(E,8));let S=f;for(let k=0;k<T.length;k+=8){var N=Math.min(8,T.length-k);const b=parseInt(T.substring(k,k+N),E);N<8?(N=u(Math.pow(E,N)),S=S.j(N).add(u(b))):(S=S.j(y),S=S.add(u(b)))}return S}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-R(this).m();let T=0,E=1;for(let y=0;y<this.g.length;y++){const S=this.i(y);T+=(S>=0?S:4294967296+S)*E,E*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(A(this))return"-"+R(this).toString(T);const E=u(Math.pow(T,6));var y=this;let S="";for(;;){const N=P(y,E).g;y=I(y,N.j(E));let k=((y.g.length>0?y.g[0]:y.h)>>>0).toString(T);if(y=N,C(y))return k+S;for(;k.length<6;)k="0"+k;S=k+S}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(let E=0;E<T.g.length;E++)if(T.g[E]!=0)return!1;return!0}function A(T){return T.h==-1}t.l=function(T){return T=I(this,T),A(T)?-1:C(T)?0:1};function R(T){const E=T.g.length,y=[];for(let S=0;S<E;S++)y[S]=~T.g[S];return new o(y,~T.h).add(m)}t.abs=function(){return A(this)?R(this):this},t.add=function(T){const E=Math.max(this.g.length,T.g.length),y=[];let S=0;for(let N=0;N<=E;N++){let k=S+(this.i(N)&65535)+(T.i(N)&65535),b=(k>>>16)+(this.i(N)>>>16)+(T.i(N)>>>16);S=b>>>16,k&=65535,b&=65535,y[N]=b<<16|k}return new o(y,y[y.length-1]&-2147483648?-1:0)};function I(T,E){return T.add(R(E))}t.j=function(T){if(C(this)||C(T))return f;if(A(this))return A(T)?R(this).j(R(T)):R(R(this).j(T));if(A(T))return R(this.j(R(T)));if(this.l(_)<0&&T.l(_)<0)return u(this.m()*T.m());const E=this.g.length+T.g.length,y=[];for(var S=0;S<2*E;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(let N=0;N<T.g.length;N++){const k=this.i(S)>>>16,b=this.i(S)&65535,se=T.i(N)>>>16,re=T.i(N)&65535;y[2*S+2*N]+=b*re,x(y,2*S+2*N),y[2*S+2*N+1]+=k*re,x(y,2*S+2*N+1),y[2*S+2*N+1]+=b*se,x(y,2*S+2*N+1),y[2*S+2*N+2]+=k*se,x(y,2*S+2*N+2)}for(T=0;T<E;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=E;T<2*E;T++)y[T]=0;return new o(y,0)};function x(T,E){for(;(T[E]&65535)!=T[E];)T[E+1]+=T[E]>>>16,T[E]&=65535,E++}function w(T,E){this.g=T,this.h=E}function P(T,E){if(C(E))throw Error("division by zero");if(C(T))return new w(f,f);if(A(T))return E=P(R(T),E),new w(R(E.g),R(E.h));if(A(E))return E=P(T,R(E)),new w(R(E.g),E.h);if(T.g.length>30){if(A(T)||A(E))throw Error("slowDivide_ only works with positive integers.");for(var y=m,S=E;S.l(T)<=0;)y=M(y),S=M(S);var N=U(y,1),k=U(S,1);for(S=U(S,2),y=U(y,2);!C(S);){var b=k.add(S);b.l(T)<=0&&(N=N.add(y),k=b),S=U(S,1),y=U(y,1)}return E=I(T,N.j(E)),new w(N,E)}for(N=f;T.l(E)>=0;){for(y=Math.max(1,Math.floor(T.m()/E.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),k=u(y),b=k.j(E);A(b)||b.l(T)>0;)y-=S,k=u(y),b=k.j(E);C(k)&&(k=m),N=N.add(k),T=I(T,b)}return new w(N,T)}t.B=function(T){return P(this,T).h},t.and=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)&T.i(S);return new o(y,this.h&T.h)},t.or=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)|T.i(S);return new o(y,this.h|T.h)},t.xor=function(T){const E=Math.max(this.g.length,T.g.length),y=[];for(let S=0;S<E;S++)y[S]=this.i(S)^T.i(S);return new o(y,this.h^T.h)};function M(T){const E=T.g.length+1,y=[];for(let S=0;S<E;S++)y[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(y,T.h)}function U(T,E){const y=E>>5;E%=32;const S=T.g.length-y,N=[];for(let k=0;k<S;k++)N[k]=E>0?T.i(k+y)>>>E|T.i(k+y+1)<<32-E:T.i(k+y);return new o(N,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,MS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,gs=o}).apply(typeof xw<"u"?xw:typeof self<"u"?self:typeof window<"u"?window:{});var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var VS,ja,FS,Su,wm,US,BS,$S;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qc=="object"&&Qc];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function u(c,p,g){return u=l,u.apply(null,arguments)}function d(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,D,L){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return p.prototype[D].apply(v,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function C(c,p){for(let v=1;v<arguments.length;v++){const D=arguments[v];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const L=D.length||0;c.length=g+L;for(let z=0;z<L;z++)c[g+z]=D[z]}else c.push(D)}}class A{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function R(c){o.setTimeout(()=>{throw c},0)}function I(){var c=T;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class x{constructor(){this.h=this.g=null}add(p,g){const v=w.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var w=new A(()=>new P,c=>c.reset());class P{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,T=new x,E=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(y)}};function y(){for(var c;c=I();){try{c.h.call(c.g)}catch(g){R(g)}var p=w;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}U=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function b(c){return/^[\s\xa0]*$/.test(c)}function se(c,p){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(se,N),se.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),Ge=0;function ot(c,p,g,v,D){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=D,this.key=++Ge,this.da=this.fa=!1}function F(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function G(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function Q(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function ge(c){const p={};for(const g in c)p[g]=c[g];return p}const Ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nr(c,p){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let L=0;L<Ne.length;L++)g=Ne[L],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Rt(c){this.src=c,this.g={},this.h=0}Rt.prototype.add=function(c,p,g,v,D){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const z=Qt(c,p,v,D);return z>-1?(p=c[z],g||(p.fa=!1)):(p=new ot(p,this.src,L,!!v,D),p.fa=g,c.push(p)),p};function Or(c,p){const g=p.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,p,void 0),L;(L=D>=0)&&Array.prototype.splice.call(v,D,1),L&&(F(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Qt(c,p,g,v){for(let D=0;D<c.length;++D){const L=c[D];if(!L.da&&L.listener==p&&L.capture==!!g&&L.ha==v)return D}return-1}var Dn="closure_lm_"+(Math.random()*1e6|0),Yd={};function Ry(c,p,g,v,D){if(Array.isArray(p)){for(let L=0;L<p.length;L++)Ry(c,p[L],g,v,D);return null}return g=Dy(g),c&&c[re]?c.J(p,g,a(v)?!!v.capture:!1,D):nA(c,p,g,!1,v,D)}function nA(c,p,g,v,D,L){if(!p)throw Error("Invalid event type");const z=a(D)?!!D.capture:!!D;let ie=Xd(c);if(ie||(c[Dn]=ie=new Rt(c)),g=ie.add(p,g,v,z,L),g.proxy)return g;if(v=rA(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)k||(D=z),D===void 0&&(D=!1),c.addEventListener(p.toString(),v,D);else if(c.attachEvent)c.attachEvent(Py(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function rA(){function c(g){return p.call(c.src,c.listener,g)}const p=sA;return c}function ky(c,p,g,v,D){if(Array.isArray(p))for(var L=0;L<p.length;L++)ky(c,p[L],g,v,D);else v=a(v)?!!v.capture:!!v,g=Dy(g),c&&c[re]?(c=c.i,L=String(p).toString(),L in c.g&&(p=c.g[L],g=Qt(p,g,v,D),g>-1&&(F(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[L],c.h--)))):c&&(c=Xd(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Qt(p,g,v,D)),(g=c>-1?p[c]:null)&&Jd(g))}function Jd(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[re])Or(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(Py(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=Xd(p))?(Or(g,c),g.h==0&&(g.src=null,p[Dn]=null)):F(c)}}}function Py(c){return c in Yd?Yd[c]:Yd[c]="on"+c}function sA(c,p){if(c.da)c=!0;else{p=new se(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&Jd(c),c=g.call(v,p)}return c}function Xd(c){return c=c[Dn],c instanceof Rt?c:null}var Zd="__closure_events_fn_"+(Math.random()*1e9>>>0);function Dy(c){return typeof c=="function"?c:(c[Zd]||(c[Zd]=function(p){return c.handleEvent(p)}),c[Zd])}function wt(){S.call(this),this.i=new Rt(this),this.M=this,this.G=null}f(wt,S),wt.prototype[re]=!0,wt.prototype.removeEventListener=function(c,p,g,v){ky(this,c,p,g,v)};function kt(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new N(p,c);else if(p instanceof N)p.target=p.target||c;else{var D=p;p=new N(v,c),nr(p,D)}D=!0;let L,z;if(g)for(z=g.length-1;z>=0;z--)L=p.g=g[z],D=vc(L,v,!0,p)&&D;if(L=p.g=c,D=vc(L,v,!0,p)&&D,D=vc(L,v,!1,p)&&D,g)for(z=0;z<g.length;z++)L=p.g=g[z],D=vc(L,v,!1,p)&&D}wt.prototype.N=function(){if(wt.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)F(g[v]);delete c.g[p],c.h--}}this.G=null},wt.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},wt.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function vc(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let D=!0;for(let L=0;L<p.length;++L){const z=p[L];if(z&&!z.da&&z.capture==g){const ie=z.listener,et=z.ha||z.src;z.fa&&Or(c.i,z),D=ie.call(et,v)!==!1&&D}}return D&&!v.defaultPrevented}function iA(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function Oy(c){c.g=iA(()=>{c.g=null,c.i&&(c.i=!1,Oy(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class oA extends S{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Oy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(c){S.call(this),this.h=c,this.g={}}f(Zo,S);var Ly=[];function jy(c){G(c.g,function(p,g){this.g.hasOwnProperty(g)&&Jd(p)},c),c.g={}}Zo.prototype.N=function(){Zo.Z.N.call(this),jy(this)},Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ef=o.JSON.stringify,aA=o.JSON.parse,lA=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function My(){}function Vy(){}var ea={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function tf(){N.call(this,"d")}f(tf,N);function nf(){N.call(this,"c")}f(nf,N);var Us={},Fy=null;function wc(){return Fy=Fy||new wt}Us.Ia="serverreachability";function Uy(c){N.call(this,Us.Ia,c)}f(Uy,N);function ta(c){const p=wc();kt(p,new Uy(p))}Us.STAT_EVENT="statevent";function By(c,p){N.call(this,Us.STAT_EVENT,c),this.stat=p}f(By,N);function Pt(c){const p=wc();kt(p,new By(p,c))}Us.Ja="timingevent";function $y(c,p){N.call(this,Us.Ja,c),this.size=p}f($y,N);function na(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function ra(){this.g=!0}ra.prototype.ua=function(){this.g=!1};function cA(c,p,g,v,D,L){c.info(function(){if(c.g)if(L){var z="",ie=L.split("&");for(let Te=0;Te<ie.length;Te++){var et=ie[Te].split("=");if(et.length>1){const at=et[0];et=et[1];const Ln=at.split("_");z=Ln.length>=2&&Ln[1]=="type"?z+(at+"="+et+"&"):z+(at+"=redacted&")}}}else z=null;else z=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+p+`
`+g+`
`+z})}function uA(c,p,g,v,D,L,z){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+p+`
`+g+`
`+L+" "+z})}function Di(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+dA(c,g)+(v?" "+v:"")})}function hA(c,p){c.info(function(){return"TIMEOUT: "+p})}ra.prototype.info=function(){};function dA(c,p){if(!c.g)return p;if(!p)return null;try{const L=JSON.parse(p);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let z=1;z<v.length;z++)v[z]=""}}}}return ef(L)}catch{return p}}var Ec={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},zy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wy;function rf(){}f(rf,My),rf.prototype.g=function(){return new XMLHttpRequest},Wy=new rf;function sa(c){return encodeURIComponent(String(c))}function fA(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function Lr(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new Zo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qy}function qy(){this.i=null,this.g="",this.h=!1}var Hy={},sf={};function of(c,p,g){c.M=1,c.A=Tc(On(p)),c.u=g,c.R=!0,Gy(c,null)}function Gy(c,p){c.F=Date.now(),xc(c),c.B=On(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),ov(g.i,"t",v),c.C=0,g=c.j.L,c.h=new qy,c.g=Iv(c.j,g?p:null,!c.u),c.P>0&&(c.O=new oA(u(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Ly[0]=D.toString()),D=Ly);for(let L=0;L<D.length;L++){const z=Ry(g,D[L],v||p.handleEvent,!1,p.h||p);if(!z)break;p.g[z.key]=z}p=c.J?ge(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),ta(),cA(c.i,c.v,c.B,c.l,c.S,c.u)}Lr.prototype.ba=function(c){c=c.target;const p=this.O;p&&Vr(c)==3?p.j():this.Y(c)},Lr.prototype.Y=function(c){try{if(c==this.g)e:{const ie=Vr(this.g),et=this.g.ya(),Te=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||fv(this.g)))){this.K||ie!=4||et==7||(et==8||Te<=0?ta(3):ta(2)),af(this);var p=this.g.ca();this.X=p;var g=pA(this);if(this.o=p==200,uA(this.i,this.v,this.B,this.l,this.S,ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(v)){var L=v;break t}}L=null}if(c=L)Di(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,lf(this,c);else{this.o=!1,this.m=3,Pt(12),Bs(this),ia(this);break e}}if(this.R){c=!0;let at;for(;!this.K&&this.C<g.length;)if(at=mA(this,g),at==sf){ie==4&&(this.m=4,Pt(14),c=!1),Di(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Hy){this.m=4,Pt(15),Di(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Di(this.i,this.l,at,null),lf(this,at);if(Ky(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||g.length!=0||this.h.h||(this.m=1,Pt(16),c=!1),this.o=this.o&&c,!c)Di(this.i,this.l,g,"[Invalid Chunked Response]"),Bs(this),ia(this);else if(g.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),gf(z),z.P=!0,Pt(11))}}else Di(this.i,this.l,g,null),lf(this,g);ie==4&&Bs(this),this.o&&!this.K&&(ie==4?wv(this.j,this):(this.o=!1,xc(this)))}else AA(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Pt(12)):(this.m=0,Pt(13)),Bs(this),ia(this)}}}catch{}finally{}};function pA(c){if(!Ky(c))return c.g.la();const p=fv(c.g);if(p==="")return"";let g="";const v=p.length,D=Vr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Bs(c),ia(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<v;L++)c.h.h=!0,g+=c.h.i.decode(p[L],{stream:!(D&&L==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function Ky(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function mA(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?sf:(g=Number(p.substring(g,v)),isNaN(g)?Hy:(v+=1,v+g>p.length?sf:(p=p.slice(v,v+g),c.C=v+g,p)))}Lr.prototype.cancel=function(){this.K=!0,Bs(this)};function xc(c){c.T=Date.now()+c.H,Qy(c,c.H)}function Qy(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=na(u(c.aa,c),p)}function af(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Lr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(hA(this.i,this.B),this.M!=2&&(ta(),Pt(17)),Bs(this),this.m=2,ia(this)):Qy(this,this.T-c)};function ia(c){c.j.I==0||c.K||wv(c.j,c)}function Bs(c){af(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,jy(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function lf(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||cf(g.h,c))){if(!c.L&&cf(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)Nc(g),Cc(g);else break e;mf(g),Pt(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=na(u(g.Va,g),6e3));Xy(g.h)<=1&&g.ta&&(g.ta=void 0)}else zs(g,11)}else if((c.L||g.g==c)&&Nc(g),!b(p))for(D=g.Ba.g.parse(p),p=0;p<D.length;p++){let Te=D[p];const at=Te[0];if(!(at<=g.K))if(g.K=at,Te=Te[1],g.I==2)if(Te[0]=="c"){g.M=Te[1],g.ba=Te[2];const Ln=Te[3];Ln!=null&&(g.ka=Ln,g.j.info("VER="+g.ka));const Ws=Te[4];Ws!=null&&(g.za=Ws,g.j.info("SVER="+g.za));const Fr=Te[5];Fr!=null&&typeof Fr=="number"&&Fr>0&&(v=1.5*Fr,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ur=c.g;if(Ur){const Rc=Ur.g?Ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rc){var L=v.h;L.g||Rc.indexOf("spdy")==-1&&Rc.indexOf("quic")==-1&&Rc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(uf(L,L.h),L.h=null))}if(v.G){const _f=Ur.g?Ur.g.getResponseHeader("X-HTTP-Session-Id"):null;_f&&(v.wa=_f,Ae(v.J,v.G,_f))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var z=c;if(v.na=Tv(v,v.L?v.ba:null,v.W),z.L){Zy(v.h,z);var ie=z,et=v.O;et&&(ie.H=et),ie.D&&(af(ie),xc(ie)),v.g=z}else yv(v);g.i.length>0&&bc(g)}else Te[0]!="stop"&&Te[0]!="close"||zs(g,7);else g.I==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?zs(g,7):pf(g):Te[0]!="noop"&&g.l&&g.l.qa(Te),g.A=0)}}ta(4)}catch{}}var gA=class{constructor(c,p){this.g=c,this.map=p}};function Yy(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Jy(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Xy(c){return c.h?1:c.g?c.g.size:0}function cf(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function uf(c,p){c.g?c.g.add(p):c.h=p}function Zy(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Yy.prototype.cancel=function(){if(this.i=ev(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ev(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return _(c.i)}var tv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _A(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let D,L=null;v>=0?(D=c[g].substring(0,v),L=c[g].substring(v+1)):D=c[g],p(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function jr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof jr?(this.l=c.l,oa(this,c.j),this.o=c.o,this.g=c.g,aa(this,c.u),this.h=c.h,hf(this,av(c.i)),this.m=c.m):c&&(p=String(c).match(tv))?(this.l=!1,oa(this,p[1]||"",!0),this.o=la(p[2]||""),this.g=la(p[3]||"",!0),aa(this,p[4]),this.h=la(p[5]||"",!0),hf(this,p[6]||"",!0),this.m=la(p[7]||"")):(this.l=!1,this.i=new ua(null,this.l))}jr.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(ca(p,nv,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ca(p,nv,!0),"@"),c.push(sa(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ca(g,g.charAt(0)=="/"?wA:vA,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ca(g,xA)),c.join("")},jr.prototype.resolve=function(c){const p=On(this);let g=!!c.j;g?oa(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)aa(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=p.h.lastIndexOf("/");D!=-1&&(v=p.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let z=0;z<D.length;){const ie=D[z++];ie=="."?v&&z==D.length&&L.push(""):ie==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&z==D.length&&L.push("")):(L.push(ie),v=!0)}v=L.join("/")}else v=D}return g?p.h=v:g=c.i.toString()!=="",g?hf(p,av(c.i)):g=!!c.m,g&&(p.m=c.m),p};function On(c){return new jr(c)}function oa(c,p,g){c.j=g?la(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function aa(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function hf(c,p,g){p instanceof ua?(c.i=p,TA(c.i,c.l)):(g||(p=ca(p,EA)),c.i=new ua(p,c.l))}function Ae(c,p,g){c.i.set(p,g)}function Tc(c){return Ae(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function la(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ca(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,yA),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yA(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var nv=/[#\/\?@]/g,vA=/[#\?:]/g,wA=/[#\?]/g,EA=/[#\?@]/g,xA=/#/g;function ua(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function $s(c){c.g||(c.g=new Map,c.h=0,c.i&&_A(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=ua.prototype,t.add=function(c,p){$s(this),this.i=null,c=Oi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function rv(c,p){$s(c),p=Oi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function sv(c,p){return $s(c),p=Oi(c,p),c.g.has(p)}t.forEach=function(c,p){$s(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(p,D,v,this)},this)},this)};function iv(c,p){$s(c);let g=[];if(typeof p=="string")sv(c,p)&&(g=g.concat(c.g.get(Oi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return $s(this),this.i=null,c=Oi(this,c),sv(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=iv(this,c),c.length>0?String(c[0]):p):p};function ov(c,p,g){rv(c,p),g.length>0&&(c.i=null,c.g.set(Oi(c,p),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const D=sa(g);g=iv(this,g);for(let L=0;L<g.length;L++){let z=D;g[L]!==""&&(z+="="+sa(g[L])),c.push(z)}}return this.i=c.join("&")};function av(c){const p=new ua;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Oi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function TA(c,p){p&&!c.j&&($s(c),c.i=null,c.g.forEach(function(g,v){const D=v.toLowerCase();v!=D&&(rv(this,v),ov(this,D,g))},c)),c.j=p}function IA(c,p){const g=new ra;if(o.Image){const v=new Image;v.onload=d(Mr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=d(Mr,g,"TestLoadImage: error",!1,p,v),v.onabort=d(Mr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=d(Mr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function SA(c,p){const g=new ra,v=new AbortController,D=setTimeout(()=>{v.abort(),Mr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?Mr(g,"TestPingServer: ok",!0,p):Mr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(D),Mr(g,"TestPingServer: error",!1,p)})}function Mr(c,p,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function CA(){this.g=new lA}function df(c){this.i=c.Sb||null,this.h=c.ab||!1}f(df,My),df.prototype.g=function(){return new Ic(this.i,this.h)};function Ic(c,p){wt.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Ic,wt),t=Ic.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,da(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ha(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,da(this)),this.g&&(this.readyState=3,da(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;lv(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function lv(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?ha(this):da(this),this.readyState==3&&lv(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,ha(this))},t.Na=function(c){this.g&&(this.response=c,ha(this))},t.ga=function(){this.g&&ha(this)};function ha(c){c.readyState=4,c.l=null,c.j=null,c.B=null,da(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function da(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function cv(c){let p="";return G(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function ff(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=cv(g),typeof c=="string"?g!=null&&sa(g):Ae(c,p,g))}function Ve(c){wt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ve,wt);var bA=/^https?$/i,NA=["POST","PUT"];t=Ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wy.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(L){uv(this,L);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(NA,p,void 0)>=0)||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,z]of g)this.g.setRequestHeader(L,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){uv(this,L)}};function uv(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,hv(c),Sc(c)}function hv(c){c.A||(c.A=!0,kt(c,"complete"),kt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,kt(this,"complete"),kt(this,"abort"),Sc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sc(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?dv(this):this.Xa())},t.Xa=function(){dv(this)};function dv(c){if(c.h&&typeof i<"u"){if(c.v&&Vr(c)==4)setTimeout(c.Ca.bind(c),0);else if(kt(c,"readystatechange"),Vr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=L===0){let z=String(c.D).match(tv)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),v=!bA.test(z?z.toLowerCase():"")}g=v}if(g)kt(c,"complete"),kt(c,"success");else{c.o=6;try{var D=Vr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",hv(c)}}finally{Sc(c)}}}}function Sc(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||kt(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),aA(p)}};function fv(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function AA(c){const p={};c=(c.g&&Vr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(b(c[v]))continue;var g=fA(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=p[D]||[];p[D]=L,L.push(g)}Q(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function fa(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function pv(c){this.za=0,this.i=[],this.j=new ra,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=fa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=fa("baseRetryDelayMs",5e3,c),this.Za=fa("retryDelaySeedMs",1e4,c),this.Ta=fa("forwardChannelMaxRetries",2,c),this.va=fa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Yy(c&&c.concurrentRequestLimit),this.Ba=new CA,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pv.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){Pt(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=Tv(this,null,this.W),bc(this)};function pf(c){if(mv(c),c.I==3){var p=c.V++,g=On(c.J);if(Ae(g,"SID",c.M),Ae(g,"RID",p),Ae(g,"TYPE","terminate"),pa(c,g),p=new Lr(c,c.j,p),p.M=2,p.A=Tc(On(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=Iv(p.j,null),p.g.ea(p.A)),p.F=Date.now(),xc(p)}xv(c)}function Cc(c){c.g&&(gf(c),c.g.cancel(),c.g=null)}function mv(c){Cc(c),c.v&&(o.clearTimeout(c.v),c.v=null),Nc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function bc(c){if(!Jy(c.h)&&!c.m){c.m=!0;var p=c.Ea;M||E(),U||(M(),U=!0),T.add(p,c),c.D=0}}function RA(c,p){return Xy(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=na(u(c.Ea,c,p),Ev(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new Lr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=ge(L),nr(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=_v(this,D,p),g=On(this.J),Ae(g,"RID",c),Ae(g,"CVER",22),this.G&&Ae(g,"X-HTTP-Session-Id",this.G),pa(this,g),L&&(this.R?p="headers="+sa(cv(L))+"&"+p:this.u&&ff(g,this.u,L)),uf(this.h,D),this.Ra&&Ae(g,"TYPE","init"),this.S?(Ae(g,"$req",p),Ae(g,"SID","null"),D.U=!0,of(D,g,null)):of(D,g,p),this.I=2}}else this.I==3&&(c?gv(this,c):this.i.length==0||Jy(this.h)||gv(this))};function gv(c,p){var g;p?g=p.l:g=c.V++;const v=On(c.J);Ae(v,"SID",c.M),Ae(v,"RID",g),Ae(v,"AID",c.K),pa(c,v),c.u&&c.o&&ff(v,c.u,c.o),g=new Lr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=_v(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),uf(c.h,g),of(g,v,p)}function pa(c,p){c.H&&G(c.H,function(g,v){Ae(p,v,g)}),c.l&&G({},function(g,v){Ae(p,v,g)})}function _v(c,p,g){g=Math.min(c.i.length,g);const v=c.l?u(c.l.Ka,c.l,c):null;e:{var D=c.i;let ie=-1;for(;;){const et=["count="+g];ie==-1?g>0?(ie=D[0].g,et.push("ofs="+ie)):ie=0:et.push("ofs="+ie);let Te=!0;for(let at=0;at<g;at++){var L=D[at].g;const Ln=D[at].map;if(L-=ie,L<0)ie=Math.max(0,D[at].g-100),Te=!1;else try{L="req"+L+"_"||"";try{var z=Ln instanceof Map?Ln:Object.entries(Ln);for(const[Ws,Fr]of z){let Ur=Fr;a(Fr)&&(Ur=ef(Fr)),et.push(L+Ws+"="+encodeURIComponent(Ur))}}catch(Ws){throw et.push(L+"type="+encodeURIComponent("_badmap")),Ws}}catch{v&&v(Ln)}}if(Te){z=et.join("&");break e}}z=void 0}return c=c.i.splice(0,g),p.G=c,z}function yv(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;M||E(),U||(M(),U=!0),T.add(p,c),c.A=0}}function mf(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=na(u(c.Da,c),Ev(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,vv(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=na(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Pt(10),Cc(this),vv(this))};function gf(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function vv(c){c.g=new Lr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=On(c.na);Ae(p,"RID","rpc"),Ae(p,"SID",c.M),Ae(p,"AID",c.K),Ae(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ae(p,"TO",c.ia),Ae(p,"TYPE","xmlhttp"),pa(c,p),c.u&&c.o&&ff(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Tc(On(p)),g.u=null,g.R=!0,Gy(g,c)}t.Va=function(){this.C!=null&&(this.C=null,Cc(this),mf(this),Pt(19))};function Nc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function wv(c,p){var g=null;if(c.g==p){Nc(c),gf(c),c.g=null;var v=2}else if(cf(c.h,p))g=p.G,Zy(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var D=c.D;v=wc(),kt(v,new $y(v,g)),bc(c)}else yv(c);else if(D=p.m,D==3||D==0&&p.X>0||!(v==1&&RA(c,p)||v==2&&mf(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),D){case 1:zs(c,5);break;case 4:zs(c,10);break;case 3:zs(c,6);break;default:zs(c,2)}}}function Ev(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function zs(c,p){if(c.j.info("Error code "+p),p==2){var g=u(c.bb,c),v=c.Ua;const D=!v;v=new jr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oa(v,"https"),Tc(v),D?IA(v.toString(),g):SA(v.toString(),g)}else Pt(2);c.I=0,c.l&&c.l.pa(p),xv(c),mv(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function xv(c){if(c.I=0,c.ja=[],c.l){const p=ev(c.h);(p.length!=0||c.i.length!=0)&&(C(c.ja,p),C(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function Tv(c,p,g){var v=g instanceof jr?On(g):new jr(g);if(v.g!="")p&&(v.g=p+"."+v.g),aa(v,v.u);else{var D=o.location;v=D.protocol,p=p?p+"."+D.hostname:D.hostname,D=+D.port;const L=new jr(null);v&&oa(L,v),p&&(L.g=p),D&&aa(L,D),g&&(L.h=g),v=L}return g=c.G,p=c.wa,g&&p&&Ae(v,g,p),Ae(v,"VER",c.ka),pa(c,v),v}function Iv(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Ve(new df({ab:g})):new Ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sv(){}t=Sv.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ac(){}Ac.prototype.g=function(c,p){return new Yt(c,p)};function Yt(c,p){wt.call(this),this.g=new pv(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!b(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!b(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Li(this)}f(Yt,wt),Yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Yt.prototype.close=function(){pf(this.g)},Yt.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=ef(c),c=g);p.i.push(new gA(p.Ya++,c)),p.I==3&&bc(p)},Yt.prototype.N=function(){this.g.l=null,delete this.j,pf(this.g),delete this.g,Yt.Z.N.call(this)};function Cv(c){tf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(Cv,tf);function bv(){nf.call(this),this.status=1}f(bv,nf);function Li(c){this.g=c}f(Li,Sv),Li.prototype.ra=function(){kt(this.g,"a")},Li.prototype.qa=function(c){kt(this.g,new Cv(c))},Li.prototype.pa=function(c){kt(this.g,new bv)},Li.prototype.oa=function(){kt(this.g,"b")},Ac.prototype.createWebChannel=Ac.prototype.g,Yt.prototype.send=Yt.prototype.o,Yt.prototype.open=Yt.prototype.m,Yt.prototype.close=Yt.prototype.close,$S=function(){return new Ac},BS=function(){return wc()},US=Us,wm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ec.NO_ERROR=0,Ec.TIMEOUT=8,Ec.HTTP_ERROR=6,Su=Ec,zy.COMPLETE="complete",FS=zy,Vy.EventType=ea,ea.OPEN="a",ea.CLOSE="b",ea.ERROR="c",ea.MESSAGE="d",wt.prototype.listen=wt.prototype.J,ja=Vy,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,VS=Ve}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Wo="12.8.0";function hL(t){Wo=t}/**
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
 */const gi=new dd("@firebase/firestore");function Vi(){return gi.logLevel}function q(t,...e){if(gi.logLevel<=le.DEBUG){const n=e.map(c_);gi.debug(`Firestore (${Wo}): ${t}`,...n)}}function Sr(t,...e){if(gi.logLevel<=le.ERROR){const n=e.map(c_);gi.error(`Firestore (${Wo}): ${t}`,...n)}}function Co(t,...e){if(gi.logLevel<=le.WARN){const n=e.map(c_);gi.warn(`Firestore (${Wo}): ${t}`,...n)}}function c_(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,zS(t,r,n)}function zS(t,e,n){let r=`FIRESTORE (${Wo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sr(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||zS(e,s,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(It.UNAUTHENTICATED))}shutdown(){}}class fL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pL{constructor(e){this.t=e,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new mr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new WS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new It(e)}}class mL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class gL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _L{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Tw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=yL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Em(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xf(s)===Xf(i)?he(s,i):Xf(s)?1:-1}return he(t.length,e.length)}const vL=55296,wL=57343;function Xf(t){const e=t.charCodeAt(0);return e>=vL&&e<=wL}function bo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="__name__";class Fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Fn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=Fn.isNumericId(e),s=Fn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Fn.extractNumericId(e).compare(Fn.extractNumericId(n)):Em(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return gs.fromString(e.substring(4,e.length-2))}}class Ce extends Fn{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const EL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends Fn{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return EL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iw}static keyField(){return new gt([Iw])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Ce.fromString(e))}static fromName(e){return new K(Ce.fromString(e).popFirst(5))}static empty(){return new K(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xL(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sw(t){if(!K.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Cw(t){if(K.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function HS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_d(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function TL(t,e){if(e<=0)throw new W(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function oc(t,e){if(!HS(t))throw new W(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw=-62135596800,Nw=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nw);return new ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<bw)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nw}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oc(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-bw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Je("string",ee._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new ee(0,0))}static max(){return new te(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pl=-1;function IL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new ee(n+1,0):new ee(n,r));return new Is(s,K.empty(),e)}function SL(t){return new Is(t.readTime,t.key,Pl)}class Is{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Is(te.min(),K.empty(),Pl)}static max(){return new Is(te.max(),K.empty(),Pl)}}function CL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const bL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==bL)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ho(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yd.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=-1;function vd(t){return t==null}function _h(t){return t===0&&1/t==-1/0}function RL(t){return typeof t=="number"&&Number.isInteger(t)&&!_h(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="";function kL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Aw(e)),e=PL(t.get(n),e);return Aw(e)}function PL(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case GS:n+="";break;default:n+=i}}return n}function Aw(t){return t+GS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ze=class xm{constructor(e,n){this.comparator=e,this.root=n||_s.EMPTY}insert(e,n){return new xm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_s.BLACK,null,null))}remove(e){return new xm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_s.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yc(this.root,e,this.comparator,!0)}},Yc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},_s=class sr{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??sr.RED,this.left=s??sr.EMPTY,this.right=i??sr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new sr(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return sr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return sr.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,sr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,sr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}};_s.EMPTY=null,_s.RED=!0,_s.BLACK=!1;_s.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new _s(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new kw(this.data.getIterator())}getIteratorFrom(e){return new kw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class kw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Zt([])}unionWith(e){let n=new it(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class QS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new QS("Invalid base64 string: "+i):i}}(e);return new vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const DL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ss(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=DL.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?vt.fromBase64String(t):vt.fromUint8Array(t)}/**
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
 */const YS="server_timestamp",JS="__type__",XS="__previous_value__",ZS="__local_write_time__";function d_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[JS])==null?void 0:r.stringValue)===YS}function wd(t){const e=t.mapValue.fields[XS];return d_(e)?wd(e):e}function Dl(t){const e=Ss(t.mapValue.fields[ZS].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(e,n,r,s,i,o,a,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const yh="(default)";class Ol{constructor(e,n){this.projectId=e,this.database=n||yh}static empty(){return new Ol("","")}get isDefaultDatabase(){return this.database===yh}isEqual(e){return e instanceof Ol&&e.projectId===this.projectId&&e.database===this.database}}function LL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ol(t.options.projectId,e)}/**
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
 */const eC="__type__",jL="__max__",Jc={mapValue:{}},tC="__vector__",vh="value";function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?d_(t)?4:VL(t)?9007199254740991:ML(t)?10:11:Z(28295,{value:t})}function Jn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dl(t).isEqual(Dl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ss(s.timestampValue),a=Ss(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Cs(s.bytesValue).isEqual(Cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?_h(o)===_h(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return bo(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rw(o)!==Rw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Ll(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function No(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Pw(t.timestampValue,e.timestampValue);case 4:return Pw(Dl(t),Dl(e));case 5:return Em(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Cs(i),l=Cs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=he(a[u],l[u]);if(d!==0)return d}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(ze(i.latitude),ze(o.latitude));return a!==0?a:he(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,C,A;const a=i.fields||{},l=o.fields||{},u=(m=a[vh])==null?void 0:m.arrayValue,d=(_=l[vh])==null?void 0:_.arrayValue,f=he(((C=u==null?void 0:u.values)==null?void 0:C.length)||0,((A=d==null?void 0:d.values)==null?void 0:A.length)||0);return f!==0?f:Dw(u,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Jc.mapValue&&o===Jc.mapValue)return 0;if(i===Jc.mapValue)return 1;if(o===Jc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Em(l[f],d[f]);if(m!==0)return m;const _=No(a[l[f]],u[d[f]]);if(_!==0)return _}return he(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Pw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Ss(t),r=Ss(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Dw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=No(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function Ao(t){return Tm(t)}function Tm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ss(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Tm(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Tm(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function Cu(t){switch(bs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wd(t);return e?16+Cu(e):16;case 5:return 2*t.stringValue.length;case 6:return Cs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Cu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ms(r.fields,(i,o)=>{s+=i.length+Cu(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function Ow(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Im(t){return!!t&&"integerValue"in t}function f_(t){return!!t&&"arrayValue"in t}function Lw(t){return!!t&&"nullValue"in t}function jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bu(t){return!!t&&"mapValue"in t}function ML(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[eC])==null?void 0:r.stringValue)===tC}function Ja(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ms(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ja(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ja(t.arrayValue.values[n]);return e}return{...t}}function VL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ja(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ms(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(Ja(this.value))}}function nC(t){const e=[];return Ms(t.fields,(n,r)=>{const s=new gt([n]);if(bu(r)){const i=nC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,te.min(),te.min(),te.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,te.min(),te.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,te.min(),te.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wh{constructor(e,n){this.position=e,this.inclusive=n}}function Mw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=No(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jl{constructor(e,n="asc"){this.field=e,this.dir=n}}function FL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rC{}class Ye extends rC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new BL(e,n,r):n==="array-contains"?new WL(e,r):n==="in"?new qL(e,r):n==="not-in"?new HL(e,r):n==="array-contains-any"?new GL(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $L(e,r):new zL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(No(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(No(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pn extends rC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pn(e,n)}matches(e){return sC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sC(t){return t.op==="and"}function iC(t){return UL(t)&&sC(t)}function UL(t){for(const e of t.filters)if(e instanceof Pn)return!1;return!0}function Sm(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Ao(t.value);if(iC(t))return t.filters.map(e=>Sm(e)).join(",");{const e=t.filters.map(n=>Sm(n)).join(",");return`${t.op}(${e})`}}function oC(t,e){return t instanceof Ye?function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Jn(r.value,s.value)}(t,e):t instanceof Pn?function(r,s){return s instanceof Pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&oC(o,s.filters[a]),!0):!1}(t,e):void Z(19439)}function aC(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Ao(n.value)}`}(t):t instanceof Pn?function(n){return n.op.toString()+" {"+n.getFilters().map(aC).join(" ,")+"}"}(t):"Filter"}class BL extends Ye{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class $L extends Ye{constructor(e,n){super(e,"in",n),this.keys=lC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zL extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=lC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class WL extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return f_(n)&&Ll(n.arrayValue,this.value)}}class qL extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ll(this.value.arrayValue,n)}}class HL extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ll(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ll(this.value.arrayValue,n)}}class GL extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!f_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ll(this.value.arrayValue,r))}}/**
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
 */class KL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function Fw(t,e=null,n=[],r=[],s=null,i=null,o=null){return new KL(t,e,n,r,s,i,o)}function p_(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ao(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ao(r)).join(",")),e.Te=n}return e.Te}function m_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!oC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vw(t.startAt,e.startAt)&&Vw(t.endAt,e.endAt)}function Cm(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function QL(t,e,n,r,s,i,o,a){return new Go(t,e,n,r,s,i,o,a)}function Ed(t){return new Go(t)}function Uw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function YL(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function cC(t){return t.collectionGroup!==null}function Xa(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new it(gt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new jl(i,r))}),n.has(gt.keyField().canonicalString())||e.Ie.push(new jl(gt.keyField(),r))}return e.Ie}function Gn(t){const e=ne(t);return e.Ee||(e.Ee=JL(e,Xa(t))),e.Ee}function JL(t,e){if(t.limitType==="F")return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new jl(s.field,i)});const n=t.endAt?new wh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wh(t.startAt.position,t.startAt.inclusive):null;return Fw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bm(t,e){const n=t.filters.concat([e]);return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function XL(t,e){const n=t.explicitOrderBy.concat([e]);return new Go(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Eh(t,e,n){return new Go(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xd(t,e){return m_(Gn(t),Gn(e))&&t.limitType===e.limitType}function uC(t){return`${p_(Gn(t))}|lt:${t.limitType}`}function Fi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>aC(s)).join(", ")}]`),vd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ao(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ao(s)).join(",")),`Target(${r})`}(Gn(t))}; limitType=${t.limitType})`}function Td(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Mw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Xa(r),s)||r.endAt&&!function(o,a,l){const u=Mw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Xa(r),s))}(t,e)}function ZL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hC(t){return(e,n)=>{let r=!1;for(const s of Xa(t)){const i=ej(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ej(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?No(l,u):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ms(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return KS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tj=new Ze(K.comparator);function Cr(){return tj}const dC=new Ze(K.comparator);function Ma(...t){let e=dC;for(const n of t)e=e.insert(n.key,n);return e}function fC(t){let e=dC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Za()}function pC(){return Za()}function Za(){return new Ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const nj=new Ze(K.comparator),rj=new it(K.comparator);function de(...t){let e=rj;for(const n of t)e=e.add(n);return e}const sj=new it(he);function ij(){return sj}/**
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
 */function g_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_h(e)?"-0":e}}function mC(t){return{integerValue:""+t}}function oj(t,e){return RL(e)?mC(e):g_(t,e)}/**
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
 */class Id{constructor(){this._=void 0}}function aj(t,e,n){return t instanceof Ml?function(s,i){const o={fields:{[JS]:{stringValue:YS},[ZS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&d_(i)&&(i=wd(i)),i&&(o.fields[XS]=i),{mapValue:o}}(n,e):t instanceof Ro?_C(t,e):t instanceof Vl?yC(t,e):function(s,i){const o=gC(s,i),a=Bw(o)+Bw(s.Ae);return Im(o)&&Im(s.Ae)?mC(a):g_(s.serializer,a)}(t,e)}function lj(t,e,n){return t instanceof Ro?_C(t,e):t instanceof Vl?yC(t,e):n}function gC(t,e){return t instanceof xh?function(r){return Im(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ml extends Id{}class Ro extends Id{constructor(e){super(),this.elements=e}}function _C(t,e){const n=vC(e);for(const r of t.elements)n.some(s=>Jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vl extends Id{constructor(e){super(),this.elements=e}}function yC(t,e){let n=vC(e);for(const r of t.elements)n=n.filter(s=>!Jn(s,r));return{arrayValue:{values:n}}}class xh extends Id{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Bw(t){return ze(t.integerValue||t.doubleValue)}function vC(t){return f_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.field=e,this.transform=n}}function cj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ro&&s instanceof Ro||r instanceof Vl&&s instanceof Vl?bo(r.elements,s.elements,Jn):r instanceof xh&&s instanceof xh?Jn(r.Ae,s.Ae):r instanceof Ml&&s instanceof Ml}(t.transform,e.transform)}class uj{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sd{}function EC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new TC(t.key,Kn.none()):new ac(t.key,t.data,Kn.none());{const n=t.data,r=$t.empty();let s=new it(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Vs(t.key,r,new Zt(s.toArray()),Kn.none())}}function hj(t,e,n){t instanceof ac?function(s,i,o){const a=s.value.clone(),l=zw(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Vs?function(s,i,o){if(!Nu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zw(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(xC(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function el(t,e,n,r){return t instanceof ac?function(i,o,a,l){if(!Nu(i.precondition,o))return a;const u=i.value.clone(),d=Ww(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vs?function(i,o,a,l){if(!Nu(i.precondition,o))return a;const u=Ww(i.fieldTransforms,l,o),d=o.data;return d.setAll(xC(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Nu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function dj(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gC(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function $w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bo(r,s,(i,o)=>cj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ac extends Sd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vs extends Sd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zw(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,lj(o,a,n[s]))}return r}function Ww(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,aj(i,o,e))}return r}class TC extends Sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fj extends Sd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=el(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=pC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=EC(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),de())}isEqual(e){return this.batchId===e.batchId&&bo(this.mutations,e.mutations,(n,r)=>$w(n,r))&&bo(this.baseMutations,e.baseMutations,(n,r)=>$w(n,r))}}class __{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return nj}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new __(e,n,r,s)}}/**
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
 */class mj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,fe;function _j(t){switch(t){case j.OK:return Z(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function IC(t){if(t===void 0)return Sr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ke.OK:return j.OK;case Ke.CANCELLED:return j.CANCELLED;case Ke.UNKNOWN:return j.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return j.INTERNAL;case Ke.UNAVAILABLE:return j.UNAVAILABLE;case Ke.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ke.NOT_FOUND:return j.NOT_FOUND;case Ke.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ke.ABORTED:return j.ABORTED;case Ke.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ke.DATA_LOSS:return j.DATA_LOSS;default:return Z(39323,{code:t})}}(fe=Ke||(Ke={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yj(){return new TextEncoder}/**
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
 */const vj=new gs([4294967295,4294967295],0);function qw(t){const e=yj().encode(t),n=new MS;return n.update(e),new Uint8Array(n.digest())}function Hw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gs([n,r],0),new gs([s,i],0)]}class y_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Va(`Invalid padding: ${n}`);if(r<0)throw new Va(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Va(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Va(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=gs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(gs.fromNumber(r)));return s.compare(vj)===1&&(s=new gs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qw(e),[r,s]=Hw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new y_(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=qw(e),[r,s]=Hw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Va extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cd(te.min(),s,new Ze(he),Cr(),de())}}class lc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new lc(r,n,de(),de(),de())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class SC{constructor(e,n){this.targetId=e,this.Ce=n}}class CC{constructor(e,n,r=vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gw{constructor(){this.ve=0,this.Fe=Kw(),this.Me=vt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=de(),n=de(),r=de();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new lc(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Kw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wj{constructor(e){this.Ge=e,this.ze=new Map,this.je=Cr(),this.He=Xc(),this.Je=Xc(),this.Ze=new Ze(he)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Cm(i))if(r===0){const o=new K(i.path);this.et(n,o,Ct.newNoDocument(o,te.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Cs(r).toUint8Array()}catch(l){if(l instanceof QS)return Co("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new y_(o,s,i)}catch(l){return Co(l instanceof Va?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Cm(a.target)){const l=new K(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ct.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=de();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Cd(e,n,this.Ze,this.je,r);return this.je=Cr(),this.He=Xc(),this.Je=Xc(),this.Ze=new Ze(he),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Gw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new it(he),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new it(he),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Gw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xc(){return new Ze(K.comparator)}function Kw(){return new Ze(K.comparator)}const Ej={asc:"ASCENDING",desc:"DESCENDING"},xj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Tj={and:"AND",or:"OR"};class Ij{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nm(t,e){return t.useProto3Json||vd(e)?e:{value:e}}function Th(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Sj(t,e){return Th(t,e.toTimestamp())}function Qn(t){return ve(!!t,49232),te.fromTimestamp(function(n){const r=Ss(n);return new ee(r.seconds,r.nanos)}(t))}function v_(t,e){return Am(t,e).canonicalString()}function Am(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NC(t){const e=Ce.fromString(t);return ve(DC(e),10190,{key:e.toString()}),e}function Rm(t,e){return v_(t.databaseId,e.path)}function Zf(t,e){const n=NC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(RC(n))}function AC(t,e){return v_(t.databaseId,e)}function Cj(t){const e=NC(t);return e.length===4?Ce.emptyPath():RC(e)}function km(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function RC(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qw(t,e,n){return{name:Rm(t,e),fields:n.value.mapValue.fields}}function bj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(ve(d===void 0||typeof d=="string",58123),vt.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),vt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?j.UNKNOWN:IC(u.code);return new W(d,u.message||"")}(o);n=new CC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zf(t,r.document.name),i=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):te.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=Ct.newFoundDocument(s,i,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Au(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Zf(t,r.document),i=r.readTime?Qn(r.readTime):te.min(),o=Ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Zf(t,r.document),i=r.removedTargetIds||[];n=new Au([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gj(s,i),a=r.targetId;n=new SC(a,o)}}return n}function Nj(t,e){let n;if(e instanceof ac)n={update:Qw(t,e.key,e.value)};else if(e instanceof TC)n={delete:Rm(t,e.key)};else if(e instanceof Vs)n={update:Qw(t,e.key,e.data),updateMask:Mj(e.fieldMask)};else{if(!(e instanceof fj))return Z(16599,{dt:e.type});n={verify:Rm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xh)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function Aj(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Qn(s.updateTime):Qn(i);return o.isEqual(te.min())&&(o=Qn(i)),new uj(o,s.transformResults||[])}(n,e))):[]}function Rj(t,e){return{documents:[AC(t,e.path)]}}function kj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=AC(t,s);const i=function(u){if(u.length!==0)return PC(Pn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Ui(m.field),direction:Oj(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Nm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Pj(t){let e=Cj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=kC(f);return m instanceof Pn&&iC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(C){return new jl(Bi(C.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,vd(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new wh(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new wh(_,m)}(n.endAt)),QL(e,s,o,i,a,"F",l,u)}function Dj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function kC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bi(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Bi(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Bi(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bi(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(Bi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pn.create(n.compositeFilter.filters.map(r=>kC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function Oj(t){return Ej[t]}function Lj(t){return xj[t]}function jj(t){return Tj[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function Bi(t){return gt.fromServerFormat(t.fieldPath)}function PC(t){return t instanceof Ye?function(n){if(n.op==="=="){if(jw(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(Lw(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jw(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(Lw(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:Lj(n.op),value:n.value}}}(t):t instanceof Pn?function(n){const r=n.getFilters().map(s=>PC(s));return r.length===1?r[0]:{compositeFilter:{op:jj(n.op),filters:r}}}(t):Z(54877,{filter:t})}function Mj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function DC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function OC(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n,r,s,i=te.min(),o=te.min(),a=vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ss(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ss(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vj{constructor(e){this.yt=e}}function Fj(t){const e=Pj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Eh(e,e.limit,"L"):e}/**
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
 */class Uj{constructor(){this.Sn=new Bj}addToCollectionParentIndex(e,n){return this.Sn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Is.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Is.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Bj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(Ce.comparator)).toArray()}}/**
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
 */const Yw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LC=41943040;class Ft{static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(LC,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ko(0)}static ar(){return new ko(-1)}}/**
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
 */const Jw="LruGarbageCollector",$j=1048576;function Xw([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class zj{constructor(e){this.Pr=e,this.buffer=new it(Xw),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Wj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(Jw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ho(n)?q(Jw,"Ignoring IndexedDB error during garbage collection: ",n):await qo(n)}await this.Ar(3e5)})}}class qj{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(yd.ce);const r=new zj(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Yw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Vi()<=le.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Hj(t,e){return new qj(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(){this.changes=new Ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qj{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&el(r.mutation,s,Zt.empty(),ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,de()).next(()=>r))}getLocalViewOfDocuments(e,n,r=de()){const s=ei();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ma();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,de()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Cr();const o=Za(),a=function(){return Za()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Vs)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),el(d.mutation,u,d.mutation.getFieldMask(),ee.now())):o.set(u.key,Zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>a.set(u,new Kj(d,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Za();let s=new Ze((o,a)=>o-a),i=de();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Zt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(s.get(a.batchId)||de()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=pC();d.forEach(m=>{if(!i.has(m)){const _=EC(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return YL(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(ei());let a=Pl,l=i;return o.next(u=>V.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,de())).next(d=>({batchId:a,changes:fC(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Ma();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ma();return this.indexManager.getCollectionParents(e,i).next(a=>V.forEach(a,l=>{const u=function(f,m){return new Go(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ct.newInvalidDocument(d)))});let a=Ma();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&el(d.mutation,u,Zt.empty(),ee.now()),Td(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class Yj{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Fj(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),V.resolve()}}/**
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
 */class Jj{constructor(){this.overlays=new Ze(K.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=ei(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ze((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=ei(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=ei(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=s)););return V.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mj(n,r));let i=this.Lr.get(n);i===void 0&&(i=de(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class Xj{constructor(){this.sessionToken=vt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.kr=new it(ut.Kr),this.qr=new it(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ut(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new K(new Ce([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new Ce([])),r=new ut(n,e),s=new ut(n,e+1);let i=de();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||he(e.Hr,n.Hr)}static Ur(e,n){return he(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new it(ut.Kr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?h_:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(he);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new ut(new K(i),0);let a=new it(he);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)},o),V.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return V.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Jr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e){this.ti=e,this.docs=function(){return new Ze(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Cr();const o=n.path,a=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||CL(SL(d),r)<=0||(s.has(d.key)||Td(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new tM(this)}getSize(e){return V.resolve(this.size)}}class tM extends Gj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e){this.persistence=e,this.ri=new Ai(n=>p_(n),m_),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new w_,this.targetCount=0,this.oi=ko._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ko(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e,n){this._i={},this.overlays={},this.ai=new yd(0),this.ui=!1,this.ui=!0,this.ci=new Xj,this.referenceDelegate=e(this),this.li=new nM(this),this.indexManager=new Uj,this.remoteDocumentCache=function(s){return new eM(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Vj(n),this.Pi=new Yj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Zj(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new rM(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class rM extends NL{constructor(e){super(),this.currentSequenceNumber=e}}class E_{constructor(e){this.persistence=e,this.Ri=new w_,this.Ai=null}static Vi(e){return new E_(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=K.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ih{constructor(e,n){this.persistence=e,this.fi=new Ai(r=>kL(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Hj(this,n)}static Vi(e,n){return new Ih(e,n)}Ti(){}Ii(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Cu(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=de(),s=de();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new x_(e,n.fromCache,r,s)}}/**
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
 */class sM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iM{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return CP()?8:AL(Nt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sM;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Vi()<=le.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Fi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Vi()<=le.DEBUG&&q("QueryEngine","Query:",Fi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Vi()<=le.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Fi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gn(n))):V.resolve())}gs(e,n){if(Uw(n))return V.resolve(null);let r=Gn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Eh(n,null,"F"),r=Gn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=de(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,a);return this.Ss(n,u,o,l.readTime)?this.gs(e,Eh(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return Uw(n)||s.isEqual(te.min())?V.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?V.resolve(null):(Vi()<=le.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fi(n)),this.Ds(e,o,n,IL(s,Pl)).next(a=>a))})}bs(e,n){let r=new it(hC(e));return n.forEach((s,i)=>{Td(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Vi()<=le.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Fi(n)),this.fs.getDocumentsMatchingQuery(e,n,Is.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const T_="LocalStore",oM=3e8;class aM{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ze(he),this.Fs=new Ai(i=>p_(i),m_),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Qj(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function lM(t,e,n,r){return new aM(t,e,n,r)}async function MC(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=de();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function cM(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const f=u.batch,m=f.keys();let _=V.resolve();return m.forEach(C=>{_=_.next(()=>d.getEntry(l,C)).next(A=>{const R=u.docVersions.get(C);ve(R!==null,48541),A.version.compareTo(R)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),d.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=de();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function VC(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function uM(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(vt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(f,_),function(A,R,I){return A.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=oM?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,d)&&a.push(n.li.updateTargetData(i,_))});let l=Cr(),u=de();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(hM(i,o,e.documentUpdates).next(d=>{l=d.Bs,u=d.Ls})),!r.isEqual(te.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return V.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function hM(t,e,n){let r=de(),s=de();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Cr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(T_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function dM(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=h_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fM(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new ss(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Pm(t,e,n){const r=ne(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ho(o))throw o;q(T_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Zw(t,e,n){const r=ne(t);let s=te.min(),i=de();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=ne(l),m=f.Fs.get(d);return m!==void 0?V.resolve(f.vs.get(m)):f.li.getTargetData(u,d)}(r,o,Gn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:de())).next(a=>(pM(r,ZL(e),a),{documents:a,ks:i})))}function pM(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class eE{constructor(){this.activeTargetIds=ij()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mM{constructor(){this.vo=new eE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new eE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gM{Mo(e){}shutdown(){}}/**
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
 */const tE="ConnectivityMonitor";class nE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(tE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(tE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zc=null;function Dm(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
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
 */const ep="RestConnection",_M={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class yM{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===yh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Dm(),a=this.Qo(e,n.toUriEncodedString());q(ep,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(a),d=Zn(u);return this.zo(e,a,l,r,d).then(f=>(q(ep,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Co(ep,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=_M[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vM{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="WebChannelConnection",Ta=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class fo extends yM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!fo.c_){const e=BS();Ta(e,US.STAT_EVENT,n=>{n.stat===wm.PROXY?q(Tt,"STAT_EVENT: detected buffering proxy"):n.stat===wm.NOPROXY&&q(Tt,"STAT_EVENT: detected no buffering proxy")}),fo.c_=!0}}zo(e,n,r,s,i){const o=Dm();return new Promise((a,l)=>{const u=new VS;u.setWithCredentials(!0),u.listenOnce(FS.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Su.NO_ERROR:const f=u.getResponseJson();q(Tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Su.TIMEOUT:q(Tt,`RPC '${e}' ${o} timed out`),l(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const m=u.getStatus();if(q(Tt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const A=function(I){const x=I.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(C.status);l(new W(A,C.message))}else l(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(j.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(Tt,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);q(Tt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Dm(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");q(Tt,`Creating RPC '${e}' stream ${s}: ${u}`,a);const d=o.createWebChannel(u,a);this.I_(d);let f=!1,m=!1;const _=new vM({Ho:C=>{m?q(Tt,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(f||(q(Tt,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),q(Tt,`RPC '${e}' stream ${s} sending:`,C),d.send(C))},Jo:()=>d.close()});return Ta(d,ja.EventType.OPEN,()=>{m||(q(Tt,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),Ta(d,ja.EventType.CLOSE,()=>{m||(m=!0,q(Tt,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(d))}),Ta(d,ja.EventType.ERROR,C=>{m||(m=!0,Co(Tt,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),_.o_(new W(j.UNAVAILABLE,"The operation could not be completed")))}),Ta(d,ja.EventType.MESSAGE,C=>{var A;if(!m){const R=C.data[0];ve(!!R,16349);const I=R,x=(I==null?void 0:I.error)||((A=I[0])==null?void 0:A.error);if(x){q(Tt,`RPC '${e}' stream ${s} received error:`,x);const w=x.status;let P=function(T){const E=Ke[T];if(E!==void 0)return IC(E)}(w),M=x.message;P===void 0&&(P=j.INTERNAL,M="Unknown error status: "+w+" with message "+x.message),m=!0,_.o_(new W(P,M)),d.close()}else q(Tt,`RPC '${e}' stream ${s} received:`,R),_.__(R)}}),fo.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return $S()}}/**
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
 */function wM(t){return new fo(t)}function tp(){return typeof document<"u"?document:null}/**
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
 */function bd(t){return new Ij(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fo.c_=!1;class FC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="PersistentStream";class UC{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new FC(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Sr(n.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(rE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(rE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EM extends UC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=bj(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Qn(o.readTime):te.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=km(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Cm(l)?{documents:Rj(i,l)}:{query:kj(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bC(i,o.resumeToken);const u=Nm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=Th(i,o.snapshotVersion.toTimestamp());const u=Nm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Dj(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=km(this.serializer),n.removeTarget=e,this.K_(n)}}class xM extends UC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Aj(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=km(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Nj(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{}class IM extends TM{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Am(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Am(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function SM(t,e,n,r){return new IM(t,e,n,r)}class CM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="RemoteStore";class bM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(q(_i,"Restarting streams for network reachability change."),await async function(l){const u=ne(l);u.Ea.add(4),await cc(u),u.Va.set("Unknown"),u.Ea.delete(4),await Nd(u)}(this))})}),this.Va=new CM(r,s)}}async function Nd(t){if(Ri(t))for(const e of t.Ra)await e(!0)}async function cc(t){for(const e of t.Ra)await e(!1)}function BC(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),b_(n)?C_(n):Ko(n).O_()&&S_(n,e))}function I_(t,e){const n=ne(t),r=Ko(n);n.Ia.delete(e),r.O_()&&$C(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ri(n)&&n.Va.set("Unknown"))}function S_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ko(t).Z_(e)}function $C(t,e){t.da.$e(e),Ko(t).X_(e)}function C_(t){t.da=new wj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ko(t).start(),t.Va.ua()}function b_(t){return Ri(t)&&!Ko(t).x_()&&t.Ia.size>0}function Ri(t){return ne(t).Ea.size===0}function zC(t){t.da=void 0}async function NM(t){t.Va.set("Online")}async function AM(t){t.Ia.forEach((e,n)=>{S_(t,e)})}async function RM(t,e){zC(t),b_(t)?(t.Va.ha(e),C_(t)):t.Va.set("Unknown")}async function kM(t,e,n){if(t.Va.set("Online"),e instanceof CC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){q(_i,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sh(t,r)}else if(e instanceof Au?t.da.Xe(e):e instanceof SC?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await VC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(vt.EMPTY_BYTE_STRING,d.snapshotVersion)),$C(i,l);const f=new ss(d.target,l,u,d.sequenceNumber);S_(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q(_i,"Failed to raise snapshot:",r),await Sh(t,r)}}async function Sh(t,e,n){if(!Ho(e))throw e;t.Ea.add(1),await cc(t),t.Va.set("Offline"),n||(n=()=>VC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(_i,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Nd(t)})}function WC(t,e){return e().catch(n=>Sh(t,n,e))}async function Ad(t){const e=ne(t),n=Ns(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:h_;for(;PM(e);)try{const s=await dM(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,DM(e,s)}catch(s){await Sh(e,s)}qC(e)&&HC(e)}function PM(t){return Ri(t)&&t.Ta.length<10}function DM(t,e){t.Ta.push(e);const n=Ns(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function qC(t){return Ri(t)&&!Ns(t).x_()&&t.Ta.length>0}function HC(t){Ns(t).start()}async function OM(t){Ns(t).ra()}async function LM(t){const e=Ns(t);for(const n of t.Ta)e.ea(n.mutations)}async function jM(t,e,n){const r=t.Ta.shift(),s=__.from(r,e,n);await WC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ad(t)}async function MM(t,e){e&&Ns(t).Y_&&await async function(r,s){if(function(o){return _j(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Ns(r).B_(),await WC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ad(r)}}(t,e),qC(t)&&HC(t)}async function sE(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),q(_i,"RemoteStore received new credentials");const r=Ri(n);n.Ea.add(3),await cc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nd(n)}async function VM(t,e){const n=ne(t);e?(n.Ea.delete(2),await Nd(n)):e||(n.Ea.add(2),await cc(n),n.Va.set("Unknown"))}function Ko(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.sa(),new EM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:NM.bind(null,t),Yo:AM.bind(null,t),t_:RM.bind(null,t),J_:kM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),b_(t)?C_(t):t.Va.set("Unknown")):(await t.ma.stop(),zC(t))})),t.ma}function Ns(t){return t.fa||(t.fa=function(n,r,s){const i=ne(n);return i.sa(),new xM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:OM.bind(null,t),t_:MM.bind(null,t),ta:LM.bind(null,t),na:jM.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ad(t)):(await t.fa.stop(),t.Ta.length>0&&(q(_i,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new N_(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function A_(t,e){if(Sr("AsyncQueue",`${e}: ${t}`),Ho(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Ma(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class iE{constructor(){this.ga=new Ze(K.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Po{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Po(e,n,po.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class UM{constructor(){this.queries=oE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=oE(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function oE(){return new Ai(t=>uC(t),xd)}async function R_(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new FM,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=A_(o,`Initialization of query '${Fi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&P_(n)}async function k_(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function BM(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&P_(n)}function $M(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function P_(t){t.Ca.forEach(e=>{e.next()})}var Om,aE;(aE=Om||(Om={})).Ma="default",aE.Cache="cache";class D_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Po(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Om.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.key=e}}class KC{constructor(e){this.key=e}}class zM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=de(),this.mutatedKeys=de(),this.eu=hC(e),this.tu=new po(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new iE,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),_=Td(this.query,f)?f:null,C=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?C!==A&&(r.track({type:3,doc:_}),R=!0):this.su(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||u)&&(a=!0)),R&&(_?(o=o.add(_),i=A?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(_,C){const A=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:R})}};return A(_)-A(C)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Po(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iE,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=de(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new KC(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new GC(r))}),n}cu(e){this.Za=e.ks,this.Ya=de();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Po.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const O_="SyncEngine";class WM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class qM{constructor(e){this.key=e,this.hu=!1}}class HM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ai(a=>uC(a),xd),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ze(K.comparator),this.Au=new Map,this.Vu=new w_,this.du={},this.mu=new Map,this.fu=ko.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GM(t,e,n=!0){const r=eb(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await QC(r,e,n,!0),s}async function KM(t,e){const n=eb(t);await QC(n,e,!0,!1)}async function QC(t,e,n,r){const s=await fM(t.localStore,Gn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await QM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&BC(t.remoteStore,s),a}async function QM(t,e,n,r,s){t.pu=(f,m,_)=>async function(A,R,I,x){let w=R.view.ru(I);w.Ss&&(w=await Zw(A.localStore,R.query,!1).then(({documents:T})=>R.view.ru(T,w)));const P=x&&x.targetChanges.get(R.targetId),M=x&&x.targetMismatches.get(R.targetId)!=null,U=R.view.applyChanges(w,A.isPrimaryClient,P,M);return cE(A,R.targetId,U.au),U.snapshot}(t,f,m,_);const i=await Zw(t.localStore,e,!0),o=new zM(e,i.ks),a=o.ru(i.documents),l=lc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);cE(t,n,u.au);const d=new WM(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function YM(t,e,n){const r=ne(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!xd(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&I_(r.remoteStore,s.targetId),Lm(r,s.targetId)}).catch(qo)):(Lm(r,s.targetId),await Pm(r.localStore,s.targetId,!0))}async function JM(t,e){const n=ne(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),I_(n.remoteStore,r.targetId))}async function XM(t,e,n){const r=iV(t);try{const s=await function(o,a){const l=ne(o),u=ee.now(),d=a.reduce((_,C)=>_.add(C.key),de());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Cr(),A=de();return l.xs.getEntries(_,d).next(R=>{C=R,C.forEach((I,x)=>{x.isValidDocument()||(A=A.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,C)).next(R=>{f=R;const I=[];for(const x of a){const w=dj(x,f.get(x.key).overlayedDocument);w!=null&&I.push(new Vs(x.key,w,nC(w.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,I,a)}).next(R=>{m=R;const I=R.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(_,R.batchId,I)})}).then(()=>({batchId:m.batchId,changes:fC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new Ze(he)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await uc(r,s.changes),await Ad(r.remoteStore)}catch(s){const i=A_(s,"Failed to persist write");n.reject(i)}}async function YC(t,e){const n=ne(t);try{const r=await uM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await uc(n,r,e)}catch(r){await qo(r)}}function lE(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.ba)m.va(a)&&(u=!0)}),u&&P_(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZM(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ze(K.comparator);o=o.insert(i,Ct.newNoDocument(i,te.min()));const a=de().add(i),l=new Cd(te.min(),new Map,new Ze(he),o,a);await YC(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),L_(r)}else await Pm(r.localStore,e,!1).then(()=>Lm(r,e,n)).catch(qo)}async function eV(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await cM(n.localStore,e);XC(n,r,null),JC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uc(n,s)}catch(s){await qo(s)}}async function tV(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(ve(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);XC(r,e,n),JC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uc(r,s)}catch(s){await qo(s)}}function JC(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function XC(t,e,n){const r=ne(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Lm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ZC(t,r)})}function ZC(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(I_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),L_(t))}function cE(t,e,n){for(const r of n)r instanceof GC?(t.Vu.addReference(r.key,e),nV(t,r)):r instanceof KC?(q(O_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ZC(t,r.key)):Z(19791,{wu:r})}function nV(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(O_,"New document in limbo: "+n),t.Eu.add(r),L_(t))}function L_(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new qM(n)),t.Ru=t.Ru.insert(n,r),BC(t.remoteStore,new ss(Gn(Ed(n.path)),r,"TargetPurposeLimboResolution",yd.ce))}}async function uc(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=x_.Es(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,u){const d=ne(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(u,m=>V.forEach(m.Ts,_=>d.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>V.forEach(m.Is,_=>d.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Ho(f))throw f;q(T_,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=d.vs.get(m),C=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(C);d.vs=d.vs.insert(m,A)}}}(r.localStore,i))}async function rV(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){q(O_,"User change. New user:",e.toKey());const r=await MC(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uc(n,r.Ns)}}function sV(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return de().add(r.key);{let s=de();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function eb(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=YC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZM.bind(null,e),e.Pu.J_=BM.bind(null,e.eventManager),e.Pu.yu=$M.bind(null,e.eventManager),e}function iV(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=eV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tV.bind(null,e),e}class Ch{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bd(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return lM(this.persistence,new iM,e.initialUser,this.serializer)}Cu(e){return new jC(E_.Vi,this.serializer)}Du(e){return new mM}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ch.provider={build:()=>new Ch};class oV extends Ch{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof Ih,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Wj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new jC(r=>Ih.Vi(r,n),this.serializer)}}class jm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rV.bind(null,this.syncEngine),await VM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UM}()}createDatastore(e){const n=bd(e.databaseInfo.databaseId),r=wM(e.databaseInfo);return SM(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new bM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>lE(this.syncEngine,n,0),function(){return nE.v()?new nE:new gM}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,d){const f=new HM(s,i,o,a,l,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);q(_i,"RemoteStore shutting down."),i.Ea.add(5),await cc(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jm.provider={build:()=>new jm};/**
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
 */class j_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="FirestoreClient";class aV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=u_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(As,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(As,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=A_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function np(t,e){t.asyncQueue.verifyOperationInProgress(),q(As,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await MC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await lV(t);q(As,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sE(e.remoteStore,s)),t._onlineComponents=e}async function lV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(As,"Using user provided OfflineComponentProvider");try{await np(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Co("Error using user provided cache. Falling back to memory cache: "+n),await np(t,new Ch)}}else q(As,"Using default OfflineComponentProvider"),await np(t,new oV(void 0));return t._offlineComponents}async function tb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(As,"Using user provided OnlineComponentProvider"),await uE(t,t._uninitializedComponentsProvider._online)):(q(As,"Using default OnlineComponentProvider"),await uE(t,new jm))),t._onlineComponents}function cV(t){return tb(t).then(e=>e.syncEngine)}async function bh(t){const e=await tb(t),n=e.eventManager;return n.onListen=GM.bind(null,e.syncEngine),n.onUnlisten=YM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=KM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JM.bind(null,e.syncEngine),n}function uV(t,e,n,r){const s=new j_(r),i=new D_(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>R_(await bh(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>k_(await bh(t),i))}}function hV(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new j_({next:m=>{d.Nu(),o.enqueueAndForget(()=>k_(i,f));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new D_(Ed(a.path),d,{includeMetadataChanges:!0,Ka:!0});return R_(i,f)}(await bh(t),t.asyncQueue,e,n,r)),r.promise}function dV(t,e,n={}){const r=new mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new j_({next:m=>{d.Nu(),o.enqueueAndForget(()=>k_(i,f)),m.fromCache&&l.source==="server"?u.reject(new W(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new D_(a,d,{includeMetadataChanges:!0,Ka:!0});return R_(i,f)}(await bh(t),t.asyncQueue,e,n,r)),r.promise}function fV(t,e){const n=new mr;return t.asyncQueue.enqueueAndForget(async()=>XM(await cV(t),e,n)),n.promise}/**
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
 */function nb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const pV="ComponentProvider",hE=new Map;function mV(t,e,n,r,s){return new OL(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,nb(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const rb="firestore.googleapis.com",dE=!0;class fE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=rb,this.ssl=dE}else this.host=e.host,this.ssl=e.ssl??dE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=LC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$j)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rd{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dL;switch(r.type){case"firstParty":return new gL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=hE.get(n);r&&(q(pV,"Removing Datastore"),hE.delete(n),r.terminate())}(this),Promise.resolve()}}function gV(t,e,n,r={}){var u;t=pn(t,Rd);const s=Zn(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(cd(`https://${a}`),ud("Firestore",!0)),i.host!==rb&&i.host!==a&&Co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!Er(l,o)&&(t._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=It.MOCK_USER;else{d=Xg(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new It(m)}t._authCredentials=new fL(new WS(d,f))}}/**
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
 */class Pr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pr(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ys(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(oc(n,Ue._jsonSchema))return new Ue(e,r||null,new K(Ce.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:Je("string",Ue._jsonSchemaVersion),referencePath:Je("string")};class ys extends Pr{constructor(e,n,r){super(e,n,Ed(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new K(e))}withConverter(e){return new ys(this.firestore,e,this._path)}}function yn(t,e,...n){if(t=_e(t),qS("collection","path",e),t instanceof Rd){const r=Ce.fromString(e,...n);return Cw(r),new ys(t,null,r)}{if(!(t instanceof Ue||t instanceof ys))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Cw(r),new ys(t.firestore,null,r)}}function lt(t,e,...n){if(t=_e(t),arguments.length===1&&(e=u_.newId()),qS("doc","path",e),t instanceof Rd){const r=Ce.fromString(e,...n);return Sw(r),new Ue(t,null,new K(r))}{if(!(t instanceof Ue||t instanceof ys))throw new W(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Sw(r),new Ue(t.firestore,t instanceof ys?t.converter:null,new K(r))}}/**
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
 */const pE="AsyncQueue";class mE{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new FC(this,"async_queue_retry"),this._c=()=>{const r=tp();r&&q(pE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=tp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=tp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ho(e))throw e;q(pE,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sr("INTERNAL UNHANDLED ERROR: ",gE(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=N_.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:gE(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function gE(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class yi extends Rd{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new mE,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mE(e),this._firestoreClient=void 0,await e}}}function _V(t,e){const n=typeof t=="object"?t:fd(),r=typeof t=="string"?t:yh,s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jg("firestore");i&&gV(s,...i)}return s}function kd(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||yV(t),t._firestoreClient}function yV(t){var r,s,i,o;const e=t._freezeSettings(),n=mV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new aV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cn(vt.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cn(vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oc(e,cn._jsonSchema))return cn.fromBase64String(e.bytes)}}cn._jsonSchemaVersion="firestore/bytes/1.0",cn._jsonSchema={type:Je("string",cn._jsonSchemaVersion),bytes:Je("string")};/**
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
 */class M_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(oc(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:Je("string",Yn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oc(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Nn(e.vectorValues);throw new W(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:Je("string",Nn._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=/^__.*__$/;class wV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ac(e,this.data,n,this.fieldTransforms)}}class sb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function ib(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Pd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Pd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Nh(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(ib(this.dataSource)&&vV.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class EV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||bd(e)}createContext(e,n,r,s=!1){return new Pd({dataSource:e,methodName:n,targetDoc:r,path:gt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function V_(t){const e=t._freezeSettings(),n=bd(t._databaseId);return new EV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xV(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);B_("Data must be an object, but it was:",o,r);const a=ob(r,o);let l,u;if(i.merge)l=new Zt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=vi(e,f,n);if(!o.contains(m))throw new W(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);cb(d,m)||d.push(m)}l=new Zt(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new wV(new $t(a),l,u)}class Dd extends hc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dd}}function TV(t,e,n){return new Pd({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class F_ extends hc{_toFieldTransform(e){return new wC(e.path,new Ml)}isEqual(e){return e instanceof F_}}class U_ extends hc{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=TV(this,e,!0),r=this.Ac.map(i=>Qo(i,n)),s=new Ro(r);return new wC(e.path,s)}isEqual(e){return e instanceof U_&&Er(this.Ac,e.Ac)}}function IV(t,e,n,r){const s=t.createContext(1,e,n);B_("Data must be an object, but it was:",s,r);const i=[],o=$t.empty();Ms(r,(l,u)=>{const d=lb(e,l,n);u=_e(u);const f=s.childContextForFieldPath(d);if(u instanceof Dd)i.push(d);else{const m=Qo(u,f);m!=null&&(i.push(d),o.set(d,m))}});const a=new Zt(i);return new sb(o,a,s.fieldTransforms)}function SV(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[vi(e,r,n)],l=[s];if(i.length%2!=0)throw new W(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(vi(e,i[m])),l.push(i[m+1]);const u=[],d=$t.empty();for(let m=a.length-1;m>=0;--m)if(!cb(u,a[m])){const _=a[m];let C=l[m];C=_e(C);const A=o.childContextForFieldPath(_);if(C instanceof Dd)u.push(_);else{const R=Qo(C,A);R!=null&&(u.push(_),d.set(_,R))}}const f=new Zt(u);return new sb(d,f,o.fieldTransforms)}function CV(t,e,n,r=!1){return Qo(n,t.createContext(r?4:3,e))}function Qo(t,e){if(ab(t=_e(t)))return B_("Unsupported field value:",e,t),ob(t,e);if(t instanceof hc)return function(r,s){if(!ib(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Qo(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:Th(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Th(s.serializer,i)}}if(r instanceof Yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:bC(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:v_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nn)return function(o,a){const l=o instanceof Nn?o.toArray():o;return{mapValue:{fields:{[eC]:{stringValue:tC},[vh]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw a.createError("VectorValues must only contain numeric values.");return g_(a.serializer,d)})}}}}}}(r,s);if(OC(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${_d(r)}`)}(t,e)}function ob(t,e){const n={};return KS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ms(t,(r,s)=>{const i=Qo(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ab(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ee||t instanceof Yn||t instanceof cn||t instanceof Ue||t instanceof hc||t instanceof Nn||OC(t))}function B_(t,e,n){if(!ab(n)||!HS(n)){const r=_d(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function vi(t,e,n){if((e=_e(e))instanceof M_)return e._internalPath;if(typeof e=="string")return lb(t,e);throw Nh("Field path arguments must be of type string or ",t,!1,void 0,n)}const bV=new RegExp("[~\\*/\\[\\]]");function lb(t,e,n){if(e.search(bV)>=0)throw Nh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new M_(...e.split("."))._internalPath}catch{throw Nh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(j.INVALID_ARGUMENT,a+t+l)}function cb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class NV{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ms(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[vh].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>ze(o.doubleValue));return new Nn(n)}convertGeoPoint(e){return new Yn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Dl(e));default:return null}}convertTimestamp(e){const n=Ss(e);return new ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ve(DC(r),9688,{name:e});const s=new Ol(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Sr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class $_ extends NV{constructor(e){super(),this.firestore=e}convertBytes(e){return new cn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function rp(){return new F_("serverTimestamp")}function AV(...t){return new U_("arrayUnion",t)}const _E="@firebase/firestore",yE="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class ub{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(vi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RV extends ub{data(){return super.data()}}/**
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
 */function hb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z_{}class W_ extends z_{}function vn(t,e,...n){let r=[];e instanceof z_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof q_).length,a=i.filter(l=>l instanceof Od).length;if(o>1||o>0&&a>0)throw new W(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Od extends W_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Od(e,n,r)}_apply(e){const n=this._parse(e);return db(e._query,n),new Pr(e.firestore,e.converter,bm(e._query,n))}_parse(e){const n=V_(e.firestore);return function(i,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){EE(f,d);const C=[];for(const A of f)C.push(wE(l,i,A));m={arrayValue:{values:C}}}else m=wE(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||EE(f,d),m=CV(a,o,f,d==="in"||d==="not-in");return Ye.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tt(t,e,n){const r=e,s=vi("where",t);return Od._create(s,r,n)}class q_ extends z_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)db(o,l),o=bm(o,l)}(e._query,n),new Pr(e.firestore,e.converter,bm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class H_ extends W_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new H_(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(i,o)}(e._query,this._field,this._direction);return new Pr(e.firestore,e.converter,XL(e._query,n))}}function Qs(t,e="asc"){const n=e,r=vi("orderBy",t);return H_._create(r,n)}class G_ extends W_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new G_(e,n,r)}_apply(e){return new Pr(e.firestore,e.converter,Eh(e._query,this._limit,this._limitType))}}function kV(t){return TL("limit",t),G_._create("limit",t,"F")}function wE(t,e,n){if(typeof(n=_e(n))=="string"){if(n==="")throw new W(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cC(e)&&n.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!K.isDocumentKey(r))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ow(t,new K(r))}if(n instanceof Ue)return Ow(t,n._key);throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_d(n)}.`)}function EE(t,e){if(!Array.isArray(t)||t.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function db(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function PV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ii extends ub{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ii._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ii._jsonSchemaVersion="firestore/documentSnapshot/1.0",ii._jsonSchema={type:Je("string",ii._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class Ru extends ii{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fa(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ru(this._firestore,this._userDataWriter,r.key,r,new Fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ru(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ru(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fa(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:DV(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=u_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Je("string",oi._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};/**
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
 */function Ah(t){t=pn(t,Ue);const e=pn(t.firestore,yi),n=kd(e);return hV(n,t._key).then(r=>pb(e,t,r))}function qs(t){t=pn(t,Pr);const e=pn(t.firestore,yi),n=kd(e),r=new $_(e);return hb(t._query),dV(n,t._query).then(s=>new oi(e,r,t,s))}function OV(t,e,n){t=pn(t,Ue);const r=pn(t.firestore,yi),s=PV(t.converter,e),i=V_(r);return fb(r,[xV(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kn.none())])}function on(t,e,n,...r){t=pn(t,Ue);const s=pn(t.firestore,yi),i=V_(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof M_?SV(i,"updateDoc",t._key,e,n,r):IV(i,"updateDoc",t._key,e),fb(s,[o.toMutation(t._key,Kn.exists(!0))])}function tl(t,...e){var u,d,f;t=_e(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||vE(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(vE(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof Ue)o=pn(t.firestore,yi),a=Ed(t._key.path),i={next:m=>{e[r]&&e[r](pb(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=pn(t,Pr);o=pn(m.firestore,yi),a=m._query;const _=new $_(o);i={next:C=>{e[r]&&e[r](new oi(o,_,m,C))},error:e[r+1],complete:e[r+2]},hb(t._query)}const l=kd(o);return uV(l,a,s,i)}function fb(t,e){const n=kd(t);return fV(n,e)}function pb(t,e,n){const r=n.docs.get(e._key),s=new $_(t);return new ii(t,s,e._key,r,new Fa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){hL(js),Ts(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new yi(new pL(r.getProvider("auth-internal")),new _L(o,r.getProvider("app-check-internal")),LL(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),fn(_E,yE,e),fn(_E,yE,"esm2020")})();var xE={};const TE="@firebase/database",IE="1.1.0";/**
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
 */let mb="";function LV(t){mb=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Nl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new jV(e)}}catch{}return new MV},ti=gb("localStorage"),VV=gb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo=new dd("@firebase/database"),FV=function(){let t=1;return function(){return t++}}(),_b=function(t){const e=VP(t),n=new OP;n.update(e);const r=n.digest();return Yg.encodeByteArray(r)},dc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=dc.apply(null,r):typeof r=="object"?e+=rt(r):e+=r,e+=" "}return e};let nl=null,SE=!0;const UV=function(t,e){$(!0,"Can't turn on custom loggers persistently."),mo.logLevel=le.VERBOSE,nl=mo.log.bind(mo)},mt=function(...t){if(SE===!0&&(SE=!1,nl===null&&VV.get("logging_enabled")===!0&&UV()),nl){const e=dc.apply(null,t);nl(e)}},fc=function(t){return function(...e){mt(t,...e)}},Mm=function(...t){const e="FIREBASE INTERNAL ERROR: "+dc(...t);mo.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${dc(...t)}`;throw mo.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+dc(...t);mo.warn(e)},BV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ld=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$V=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Do="[MIN_NAME]",wi="[MAX_NAME]",ki=function(t,e){if(t===e)return 0;if(t===Do||e===wi)return-1;if(e===Do||t===wi)return 1;{const n=CE(t),r=CE(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zV=function(t,e){return t===e?0:t<e?-1:1},Ia=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+rt(e))},K_=function(t){if(typeof t!="object"||t===null)return rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=rt(e[r]),n+=":",n+=K_(t[e[r]]);return n+="}",n},yb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function At(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vb=function(t){$(!Ld(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},WV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function HV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const GV=new RegExp("^-?(0*)\\d{1,10}$"),KV=-2147483648,QV=2147483647,CE=function(t){if(GV.test(t)){const e=Number(t);if(e>=KV&&e<=QV)return e}return null},Yo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},YV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class JV{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Bt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class ku{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ku.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_="5",wb="v",Eb="s",xb="r",Tb="f",Ib=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sb="ls",Cb="p",Vm="ac",bb="websocket",Nb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ti.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ti.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ZV(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rb(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===bb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ZV(t)&&(n.ns=t.namespace);const s=[];return At(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(){this.counters_={}}incrementCounter(e,n=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return fP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={},ip={};function Y_(t){const e=t.toString();return sp[e]||(sp[e]=new e4),sp[e]}function t4(t,e){const n=t.toString();return ip[n]||(ip[n]=e()),ip[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Yo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="start",r4="close",s4="pLPCommand",i4="pRTLPCB",kb="id",Pb="pw",Db="ser",o4="cb",a4="seg",l4="ts",c4="d",u4="dframe",Ob=1870,Lb=30,h4=Ob-Lb,d4=25e3,f4=3e4;class to{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fc(e),this.stats_=Y_(n),this.urlFn=l=>(this.appCheckToken&&(l[Vm]=this.appCheckToken),Rb(n,Nb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new n4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(f4)),$V(()=>{if(this.isClosed_)return;this.scriptTagHolder=new J_((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bE)this.id=a,this.password=l;else if(o===r4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[bE]="t",r[Db]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[o4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[wb]=Q_,this.transportSessionId&&(r[Eb]=this.transportSessionId),this.lastSessionId&&(r[Sb]=this.lastSessionId),this.applicationId&&(r[Cb]=this.applicationId),this.appCheckToken&&(r[Vm]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ib.test(location.hostname)&&(r[xb]=Tb);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){to.forceAllow_=!0}static forceDisallow(){to.forceDisallow_=!0}static isAvailable(){return to.forceAllow_?!0:!to.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WV()&&!qV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=WI(n),s=yb(r,h4);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[u4]="t",r[kb]=e,r[Pb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class J_{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FV(),window[s4+this.uniqueCallbackIdentifier]=e,window[i4+this.uniqueCallbackIdentifier]=n,this.myIFrame=J_.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){mt("frame writing exception"),a.stack&&mt(a.stack),mt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kb]=this.myID,e[Pb]=this.myPW,e[Db]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Lb+r.length<=Ob;){const o=this.pendingSegs.shift();r=r+"&"+a4+s+"="+o.seg+"&"+l4+s+"="+o.ts+"&"+c4+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(d4)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p4=16384,m4=45e3;let Rh=null;typeof MozWebSocket<"u"?Rh=MozWebSocket:typeof WebSocket<"u"&&(Rh=WebSocket);class Tn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fc(this.connId),this.stats_=Y_(n),this.connURL=Tn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[wb]=Q_,typeof location<"u"&&location.hostname&&Ib.test(location.hostname)&&(o[xb]=Tb),n&&(o[Eb]=n),r&&(o[Sb]=r),s&&(o[Vm]=s),i&&(o[Cb]=i),Rb(e,bb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ti.set("previous_websocket_failure",!0);try{let r;SP(),this.mySock=new Rh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Rh!==null&&!Tn.forceDisallow_}static previouslyFailed(){return ti.isInMemoryStorage||ti.get("previous_websocket_failure")===!0}markConnectionHealthy(){ti.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Nl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=yb(n,p4);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(m4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tn.responsesRequiredToBeHealthy=2;Tn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{static get ALL_TRANSPORTS(){return[to,Tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Tn&&Tn.isAvailable();let r=n&&!Tn.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tn];else{const s=this.transports_=[];for(const i of Fl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Fl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Fl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=6e4,_4=5e3,y4=10*1024,v4=100*1024,op="t",NE="d",w4="s",AE="r",E4="e",RE="o",kE="a",PE="n",DE="p",x4="h";class T4{constructor(e,n,r,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fc("c:"+this.id+":"),this.transportManager_=new Fl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=rl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>v4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>y4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(op in e){const n=e[op];n===kE?this.upgradeIfSecondaryHealthy_():n===AE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===RE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:DE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:PE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ia("t",e),r=Ia("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ia(op,e);if(NE in e){const r=e[NE];if(n===x4){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===PE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===w4?this.onConnectionShutdown_(r):n===AE?this.onReset_(r):n===E4?Mm("Server Error: "+r):n===RE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Q_!==r&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),rl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(g4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(_4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:DE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ti.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh extends Mb{static getInstance(){return new kh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=32,LE=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new xe("")}function ce(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rs(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function X_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function I4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ul(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function He(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new xe(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=ce(t),r=ce(e);if(n===null)return e;if(n===r)return Lt(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function S4(t,e){const n=Ul(t,0),r=Ul(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=ki(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Fb(t,e){if(Rs(t)!==Rs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function hn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rs(t)>Rs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class C4{constructor(e,n){this.errorPrefix_=n,this.parts_=Ul(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=hd(this.parts_[r]);Ub(this)}}function b4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=hd(e),Ub(t)}function N4(t){const e=t.parts_.pop();t.byteLength_-=hd(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ub(t){if(t.byteLength_>LE)throw new Error(t.errorPrefix_+"has a key path longer than "+LE+" bytes ("+t.byteLength_+").");if(t.parts_.length>OE)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+OE+") or object contains a cycle "+Ys(t))}function Ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_ extends Mb{static getInstance(){return new Z_}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=1e3,A4=60*5*1e3,jE=30*1e3,R4=1.3,k4=3e4,P4="server_kill",ME=3;class gr extends jb{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=gr.nextPersistentConnectionId_++,this.log_=fc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Sa,this.maxReconnectDelay_=A4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Z_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(rt(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ar,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;gr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tr(e,"w")){const r=Io(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=PP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mm("Unrecognized action received from server: "+rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>k4&&(this.reconnectDelay_=Sa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*R4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+gr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new T4(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Kt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(P4)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Kt(f),l())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ah(this.interruptReasons_)&&(this.reconnectDelay_=Sa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>K_(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new xe(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ME&&(this.reconnectDelay_=jE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ME&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mb.replace(/\./g,"-")]=1,Zg()?e["framework.cordova"]=1:QI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kh.getInstance().currentlyOnline();return ah(this.interruptReasons_)&&e}}gr.nextPersistentConnectionId_=0;gr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(Do,e),s=new ae(Do,n);return this.compare(r,s)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;class Bb extends jd{static get __EMPTY_NODE(){return eu}static set __EMPTY_NODE(e){eu=e}compare(e,n){return ki(e.name,n.name)}isDefinedOn(e){throw Bo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(wi,eu)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,eu)}toString(){return".key"}}const go=new Bb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??Wt.EMPTY_NODE,this.right=i??Wt.EMPTY_NODE}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Wt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}dt.RED=!0;dt.BLACK=!1;class D4{copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,dt.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,dt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tu(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new D4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(t,e){return ki(t.name,e.name)}function ey(t,e){return ki(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;function L4(t){Fm=t}const $b=function(t){return typeof t=="number"?"number:"+vb(t):"string:"+t},zb=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else $(t===Fm||t.isEmpty(),"priority of unexpected type.");$(t===Fm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VE;class ct{static set __childrenNodeConstructor(e){VE=e}static get __childrenNodeConstructor(){return VE}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),zb(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ce(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ce(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||Rs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$b(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vb(this.value_):e+=this.value_,this.lazyHash_=_b(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wb,qb;function j4(t){Wb=t}function M4(t){qb=t}class V4 extends jd{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ki(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(wi,new ct("[PRIORITY-POST]",qb))}makePost(e,n){const r=Wb(e);return new ae(n,new ct("[PRIORITY-POST]",r))}toString(){return".priority"}}const Le=new V4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F4=Math.log(2);class U4{constructor(e){const n=i=>parseInt(Math.log(i)/F4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ph=function(t,e,n,r){t.sort(e);const s=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=t[l],m=n?n(f):f,new dt(m,f.node,dt.BLACK,null,null);{const _=parseInt(d/2,10)+l,C=s(l,_),A=s(_+1,u);return f=t[_],m=n?n(f):f,new dt(m,f.node,dt.BLACK,C,A)}},i=function(l){let u=null,d=null,f=t.length;const m=function(C,A){const R=f-C,I=f;f-=C;const x=s(R+1,I),w=t[R],P=n?n(w):w;_(new dt(P,w.node,A,null,x))},_=function(C){u?(u.left=C,u=C):(d=C,u=C)};for(let C=0;C<l.count;++C){const A=l.nextBitIsOne(),R=Math.pow(2,l.count-(C+1));A?m(R,dt.BLACK):(m(R,dt.BLACK),m(R,dt.RED))}return d},o=new U4(t.length),a=i(o);return new Wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap;const Mi={};class dr{static get Default(){return $(Mi&&Le,"ChildrenNode.ts has not been loaded"),ap=ap||new dr({".priority":Mi},{".priority":Le}),ap}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Io(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ph(r,e.getCompare()):a=Mi;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new dr(d,u)}addToIndexes(e,n){const r=lh(this.indexes_,(s,i)=>{const o=Io(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===Mi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Ph(a,o.getCompare())}else return Mi;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new dr(r,this.indexSet_)}removeFromIndexes(e,n){const r=lh(this.indexes_,s=>{if(s===Mi)return s;{const i=n.get(e.name);return i?s.remove(new ae(e.name,i)):s}});return new dr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca;class X{static get EMPTY_NODE(){return Ca||(Ca=new X(new Wt(ey),null,dr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&zb(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ca}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ca:n}}getChild(e){const n=ce(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ca:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=ce(e);if(r===null)return n;{$(ce(e)!==".priority"||Rs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Se(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$b(this.getPriority().val())+":"),this.forEachChild(Le,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":_b(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===pc?-1:0}withIndex(e){if(e===go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Le),s=n.getIterator(Le);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===go?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class B4 extends X{constructor(){super(new Wt(ey),X.EMPTY_NODE,dr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const pc=new B4;Object.defineProperties(ae,{MIN:{value:new ae(Do,X.EMPTY_NODE)},MAX:{value:new ae(wi,pc)}});Bb.__EMPTY_NODE=X.EMPTY_NODE;ct.__childrenNodeConstructor=X;L4(pc);M4(pc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4=!0;function qe(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,qe(e))}if(!(t instanceof Array)&&$4){const n=[];let r=!1;if(At(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=qe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return X.EMPTY_NODE;const i=Ph(n,O4,o=>o.name,ey);if(r){const o=Ph(n,Le.getCompare());return new X(i,qe(e),new dr({".priority":o},{".priority":Le}))}else return new X(i,qe(e),dr.Default)}else{let n=X.EMPTY_NODE;return At(t,(r,s)=>{if(tr(t,r)&&r.substring(0,1)!=="."){const i=qe(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(qe(e))}}j4(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4 extends jd{constructor(e){super(),this.indexPath_=e,$(!oe(e)&&ce(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ki(e.name,n.name):i}makePost(e,n){const r=qe(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,pc);return new ae(wi,e)}toString(){return Ul(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4 extends jd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ki(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=qe(e);return new ae(n,r)}toString(){return".value"}}const q4=new W4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t){return{type:"value",snapshotNode:t}}function Oo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Bl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $l(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function H4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Bl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Oo(n,r)):o.trackChildChange($l(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Le,(s,i)=>{n.hasChild(s)||r.trackChildChange(Bl(s,i))}),n.isLeafNode()||n.forEachChild(Le,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange($l(s,i,o))}else r.trackChildChange(Oo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.indexedFilter_=new ty(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zl.getStartPost_(e),this.endPost_=zl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ae(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(Le,(o,a)=>{i.matches(new ae(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ae(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new ae(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(d&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange($l(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Bl(n,f));const A=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Oo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(Bl(u.name,u.node)),i.trackChildChange(Oo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Do}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new ny;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function K4(t){return t.loadsAllData()?new ty(t.getIndex()):t.hasLimit()?new G4(t):new zl(t)}function FE(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===q4?n="$value":t.index_===go?n="$key":($(t.index_ instanceof z4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function UE(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends jb{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=fc("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Dh.getListenId_(e,r),a={};this.listens_[o]=a;const l=FE(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),Io(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=Dh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=FE(e._queryParams),r=e._path.toString(),s=new ar;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$o(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nl(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return{value:null,children:new Map}}function Jo(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ce(e);t.children.has(r)||t.children.set(r,Oh());const s=t.children.get(r);e=Se(e),Jo(s,e,n)}}function Um(t,e){if(oe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(Le,(r,s)=>{Jo(t,new xe(r),s)}),Um(t,e)}}else if(t.children.size>0){const n=ce(e);return e=Se(e),t.children.has(n)&&Um(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Bm(t,e,n){t.value!==null?n(e,t.value):Y4(t,(r,s)=>{const i=new xe(e.toString()+"/"+r);Bm(s,i,n)})}function Y4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&At(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=10*1e3,X4=30*1e3,Z4=5*60*1e3;class eF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new J4(e);const r=BE+(X4-BE)*Math.random();rl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;At(e,(s,i)=>{i>0&&tr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),rl(this.reportStats_.bind(this),Math.floor(Math.random()*2*Z4))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Sn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Sn||(Sn={}));function Gb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ry(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Sn.ACK_USER_WRITE,this.source=Gb()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Lh(me(),n,this.revert)}}else return $(ce(this.path)===e,"operationForChild called for unrelated child."),new Lh(Se(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.source=e,this.path=n,this.type=Sn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Wl(this.source,me()):new Wl(this.source,Se(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Sn.OVERWRITE}operationForChild(e){return oe(this.path)?new Ei(this.source,me(),this.snap.getImmediateChild(e)):new Ei(this.source,Se(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Sn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Ei(this.source,me(),n.value):new ql(this.source,me(),n)}else return $(ce(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ql(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ce(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nF(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(H4(o.childName,o.snapshotNode))}),ba(t,s,"child_removed",e,r,n),ba(t,s,"child_added",e,r,n),ba(t,s,"child_moved",i,r,n),ba(t,s,"child_changed",e,r,n),ba(t,s,"value",e,r,n),s}function ba(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>sF(t,a,l)),o.forEach(a=>{const l=rF(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function rF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function sF(t,e,n){if(e.childName==null||n.childName==null)throw Bo("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),s=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){return{eventCache:t,serverCache:e}}function sl(t,e,n,r){return Md(new ks(e,n,r),t.serverCache)}function Kb(t,e,n,r){return Md(t.eventCache,new ks(e,n,r))}function jh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;const iF=()=>(lp||(lp=new Wt(zV)),lp);class ke{static fromObject(e){let n=new ke(null);return At(e,(r,s)=>{n=n.set(new xe(r),s)}),n}constructor(e,n=iF()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(oe(e))return null;{const r=ce(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Se(e),n);return i!=null?{path:He(new xe(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ce(e),r=this.children.get(n);return r!==null?r.subtree(Se(e)):new ke(null)}}set(e,n){if(oe(e))return new ke(n,this.children);{const r=ce(e),i=(this.children.get(r)||new ke(null)).set(Se(e),n),o=this.children.insert(r,i);return new ke(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=ce(e),r=this.children.get(n);if(r){const s=r.remove(Se(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ke(null):new ke(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=ce(e),r=this.children.get(n);return r?r.get(Se(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ce(e),i=(this.children.get(r)||new ke(null)).setTree(Se(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ke(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(He(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=ce(e),o=this.children.get(i);return o?o.findOnPath_(Se(e),He(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=ce(e),i=this.children.get(s);return i?i.foreachOnPath_(Se(e),He(n,s),r):new ke(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(He(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.writeTree_=e}static empty(){return new An(new ke(null))}}function il(t,e,n){if(oe(e))return new An(new ke(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Lt(s,e);return i=i.updateChild(o,n),new An(t.writeTree_.set(s,i))}else{const s=new ke(n),i=t.writeTree_.setTree(e,s);return new An(i)}}}function $E(t,e,n){let r=t;return At(n,(s,i)=>{r=il(r,He(e,s),i)}),r}function zE(t,e){if(oe(e))return An.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new An(n)}}function $m(t,e){return Pi(t,e)!=null}function Pi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function WE(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(r,s)=>{e.push(new ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ae(r,s.value))}),e}function vs(t,e){if(oe(e))return t;{const n=Pi(t,e);return n!=null?new An(new ke(n)):new An(t.writeTree_.subtree(e))}}function zm(t){return t.writeTree_.isEmpty()}function Lo(t,e){return Qb(me(),t.writeTree_,e)}function Qb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Qb(He(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(He(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t,e){return Zb(e,t)}function oF(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=il(t.visibleWrites,e,n)),t.lastWriteId=r}function aF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function lF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&cF(a,r.path)?s=!1:hn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return uF(t),!0;if(r.snap)t.visibleWrites=zE(t.visibleWrites,r.path);else{const a=r.children;At(a,l=>{t.visibleWrites=zE(t.visibleWrites,He(r.path,l))})}return!0}else return!1}function cF(t,e){if(t.snap)return hn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&hn(He(t.path,n),e))return!0;return!1}function uF(t){t.visibleWrites=Yb(t.allWrites,hF,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function hF(t){return t.visible}function Yb(t,e,n){let r=An.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)hn(n,o)?(a=Lt(n,o),r=il(r,a,i.snap)):hn(o,n)&&(a=Lt(o,n),r=il(r,me(),i.snap.getChild(a)));else if(i.children){if(hn(n,o))a=Lt(n,o),r=$E(r,a,i.children);else if(hn(o,n))if(a=Lt(o,n),oe(a))r=$E(r,me(),i.children);else{const l=Io(i.children,ce(a));if(l){const u=l.getChild(Se(a));r=il(r,me(),u)}}}else throw Bo("WriteRecord should have .snap or .children")}}return r}function Jb(t,e,n,r,s){if(!r&&!s){const i=Pi(t.visibleWrites,e);if(i!=null)return i;{const o=vs(t.visibleWrites,e);if(zm(o))return n;if(n==null&&!$m(o,me()))return null;{const a=n||X.EMPTY_NODE;return Lo(o,a)}}}else{const i=vs(t.visibleWrites,e);if(!s&&zm(i))return n;if(!s&&n==null&&!$m(i,me()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(hn(u.path,e)||hn(e,u.path))},a=Yb(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Lo(a,l)}}}function dF(t,e,n){let r=X.EMPTY_NODE;const s=Pi(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Le,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=vs(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=Lo(vs(i,new xe(o)),a);r=r.updateImmediateChild(o,l)}),WE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=vs(t.visibleWrites,e);return WE(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function fF(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=He(e,n);if($m(t.visibleWrites,i))return null;{const o=vs(t.visibleWrites,i);return zm(o)?s.getChild(n):Lo(o,s.getChild(n))}}function pF(t,e,n,r){const s=He(e,n),i=Pi(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=vs(t.visibleWrites,s);return Lo(o,r.getNode().getImmediateChild(n))}else return null}function mF(t,e){return Pi(t.visibleWrites,e)}function gF(t,e,n,r,s,i,o){let a;const l=vs(t.visibleWrites,e),u=Pi(l,me());if(u!=null)a=u;else if(n!=null)a=Lo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&d.length<s;)f(_,r)!==0&&d.push(_),_=m.getNext();return d}else return[]}function _F(){return{visibleWrites:An.empty(),allWrites:[],lastWriteId:-1}}function Mh(t,e,n,r){return Jb(t.writeTree,t.treePath,e,n,r)}function iy(t,e){return dF(t.writeTree,t.treePath,e)}function qE(t,e,n,r){return fF(t.writeTree,t.treePath,e,n,r)}function Vh(t,e){return mF(t.writeTree,He(t.treePath,e))}function yF(t,e,n,r,s,i){return gF(t.writeTree,t.treePath,e,n,r,s,i)}function oy(t,e,n){return pF(t.writeTree,t.treePath,e,n)}function Xb(t,e){return Zb(He(t.treePath,e),t.writeTree)}function Zb(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,$l(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Bl(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Oo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,$l(r,e.snapshotNode,s.oldSnap));else throw Bo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const eN=new wF;class ay{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ks(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xi(this.viewCache_),i=yF(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t){return{filter:t}}function xF(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function TF(t,e,n,r,s){const i=new vF;let o,a;if(n.type===Sn.OVERWRITE){const u=n;u.source.fromUser?o=Wm(t,e,u.path,u.snap,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!oe(u.path),o=Fh(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Sn.MERGE){const u=n;u.source.fromUser?o=SF(t,e,u.path,u.children,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=qm(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Sn.ACK_USER_WRITE){const u=n;u.revert?o=NF(t,e,u.path,r,s,i):o=CF(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Sn.LISTEN_COMPLETE)o=bF(t,e,n.path,r,i);else throw Bo("Unknown operation type: "+n.type);const l=i.getChanges();return IF(e,o,l),{viewCache:o,changes:l}}function IF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=jh(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Hb(jh(e)))}}function tN(t,e,n,r,s,i){const o=e.eventCache;if(Vh(r,n)!=null)return e;{let a,l;if(oe(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xi(e),d=u instanceof X?u:X.EMPTY_NODE,f=iy(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Mh(r,xi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ce(n);if(u===".priority"){$(Rs(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=qE(r,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Se(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=qE(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=oy(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return sl(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Fh(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(oe(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),_,null)}else{const _=ce(n);if(!l.isCompleteForPath(n)&&Rs(n)>1)return e;const C=Se(n),R=l.getNode().getImmediateChild(_).updateChild(C,r);_===".priority"?u=d.updatePriority(l.getNode(),R):u=d.updateChild(l.getNode(),_,R,C,eN,null)}const f=Kb(e,u,l.isFullyInitialized()||oe(n),d.filtersNodes()),m=new ay(s,f,i);return tN(t,f,n,s,m,a)}function Wm(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const d=new ay(s,e,i);if(oe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=sl(e,u,!0,t.filter.filtersNodes());else{const f=ce(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=sl(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=Se(n),_=a.getNode().getImmediateChild(f);let C;if(oe(m))C=r;else{const A=d.getCompleteChild(f);A!=null?X_(m)===".priority"&&A.getChild(Vb(m)).isEmpty()?C=A:C=A.updateChild(m,r):C=X.EMPTY_NODE}if(_.equals(C))l=e;else{const A=t.filter.updateChild(a.getNode(),f,C,m,d,o);l=sl(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function HE(t,e){return t.eventCache.isCompleteForChild(e)}function SF(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const d=He(n,l);HE(e,ce(d))&&(a=Wm(t,a,d,u,s,i,o))}),r.foreach((l,u)=>{const d=He(n,l);HE(e,ce(d))||(a=Wm(t,a,d,u,s,i,o))}),a}function GE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function qm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;oe(n)?u=r:u=new ke(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),C=GE(t,_,m);l=Fh(t,l,new xe(f),C,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!_){const C=e.serverCache.getNode().getImmediateChild(f),A=GE(t,C,m);l=Fh(t,l,new xe(f),A,s,i,o,a)}}),l}function CF(t,e,n,r,s,i,o){if(Vh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fh(t,e,n,l.getNode().getChild(n),s,i,a,o);if(oe(n)){let u=new ke(null);return l.getNode().forEachChild(go,(d,f)=>{u=u.set(new xe(d),f)}),qm(t,e,n,u,s,i,a,o)}else return e}else{let u=new ke(null);return r.foreach((d,f)=>{const m=He(n,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),qm(t,e,n,u,s,i,a,o)}}function bF(t,e,n,r,s){const i=e.serverCache,o=Kb(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return tN(t,o,n,r,eN,s)}function NF(t,e,n,r,s,i){let o;if(Vh(r,n)!=null)return e;{const a=new ay(r,e,s),l=e.eventCache.getNode();let u;if(oe(n)||ce(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Mh(r,xi(e));else{const f=e.serverCache.getNode();$(f instanceof X,"serverChildren would be complete if leaf node"),d=iy(r,f)}d=d,u=t.filter.updateFullNode(l,d,i)}else{const d=ce(n);let f=oy(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=t.filter.updateChild(l,d,f,Se(n),a,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,X.EMPTY_NODE,Se(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mh(r,xi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Vh(r,me())!=null,sl(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ty(r.getIndex()),i=K4(r);this.processor_=EF(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),d=new ks(l,o.isFullyInitialized(),s.filtersNodes()),f=new ks(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Md(f,d),this.eventGenerator_=new tF(this.query_)}get query(){return this.query_}}function RF(t){return t.viewCache_.serverCache.getNode()}function kF(t){return jh(t.viewCache_)}function PF(t,e){const n=xi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ce(e)).isEmpty())?n.getChild(e):null}function KE(t){return t.eventRegistrations_.length===0}function DF(t,e){t.eventRegistrations_.push(e)}function QE(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function YE(t,e,n,r){e.type===Sn.MERGE&&e.source.queryId!==null&&($(xi(t.viewCache_),"We should always have a full cache before handling merges"),$(jh(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=TF(t.processor_,s,e,n,r);return xF(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,nN(t,i.changes,i.viewCache.eventCache.getNode(),null)}function OF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(i,o)=>{r.push(Oo(i,o))}),n.isFullyInitialized()&&r.push(Hb(n.getNode())),nN(t,r,n.getNode(),e)}function nN(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return nF(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh;class rN{constructor(){this.views=new Map}}function LF(t){$(!Uh,"__referenceConstructor has already been defined"),Uh=t}function jF(){return $(Uh,"Reference.ts has not been loaded"),Uh}function MF(t){return t.views.size===0}function ly(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),YE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(YE(o,e,n,r));return i}}function sN(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Mh(n,s?r:null),l=!1;a?l=!0:r instanceof X?(a=iy(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=Md(new ks(a,l,!1),new ks(r,s,!1));return new AF(e,u)}return o}function VF(t,e,n,r,s,i){const o=sN(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),DF(o,n),OF(o,n)}function FF(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Ps(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(QE(u,n,r)),KE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(QE(l,n,r)),KE(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Ps(t)&&i.push(new(jF())(e._repo,e._path)),{removed:i,events:o}}function iN(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ws(t,e){let n=null;for(const r of t.views.values())n=n||PF(r,e);return n}function oN(t,e){if(e._queryParams.loadsAllData())return Fd(t);{const r=e._queryIdentifier;return t.views.get(r)}}function aN(t,e){return oN(t,e)!=null}function Ps(t){return Fd(t)!=null}function Fd(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh;function UF(t){$(!Bh,"__referenceConstructor has already been defined"),Bh=t}function BF(){return $(Bh,"Reference.ts has not been loaded"),Bh}let $F=1;class JE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=_F(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lN(t,e,n,r,s){return oF(t.pendingWriteTree_,e,n,r,s),s?gc(t,new Ei(Gb(),e,n)):[]}function ni(t,e,n=!1){const r=aF(t.pendingWriteTree_,e);if(lF(t.pendingWriteTree_,e)){let i=new ke(null);return r.snap!=null?i=i.set(me(),!0):At(r.children,o=>{i=i.set(new xe(o),!0)}),gc(t,new Lh(r.path,i,n))}else return[]}function mc(t,e,n){return gc(t,new Ei(ry(),e,n))}function zF(t,e,n){const r=ke.fromObject(n);return gc(t,new ql(ry(),e,r))}function WF(t,e){return gc(t,new Wl(ry(),e))}function qF(t,e,n){const r=uy(t,n);if(r){const s=hy(r),i=s.path,o=s.queryId,a=Lt(i,e),l=new Wl(sy(o),a);return dy(t,i,l)}else return[]}function cN(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||aN(o,e))){const l=FF(o,e,n,r);MF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>Ps(_));if(d&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=QF(m);for(let C=0;C<_.length;++C){const A=_[C],R=A.query,I=fN(t,A);t.listenProvider_.startListening(ol(R),Hl(t,R),I.hashFn,I.onComplete)}}}!f&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ol(e),null):u.forEach(m=>{const _=t.queryToTagMap.get(Ud(m));t.listenProvider_.stopListening(ol(m),_)}))}YF(t,u)}return a}function uN(t,e,n,r){const s=uy(t,r);if(s!=null){const i=hy(s),o=i.path,a=i.queryId,l=Lt(o,e),u=new Ei(sy(a),l,n);return dy(t,o,u)}else return[]}function HF(t,e,n,r){const s=uy(t,r);if(s){const i=hy(s),o=i.path,a=i.queryId,l=Lt(o,e),u=ke.fromObject(n),d=new ql(sy(a),l,u);return dy(t,o,d)}else return[]}function GF(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const C=Lt(m,s);i=i||ws(_,C),o=o||Ps(_)});let a=t.syncPointTree_.get(s);a?(o=o||Ps(a),i=i||ws(a,me())):(a=new rN,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,C)=>{const A=ws(C,me());A&&(i=i.updateImmediateChild(_,A))}));const u=aN(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=Ud(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=JF();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const d=Vd(t.pendingWriteTree_,s);let f=VF(a,e,n,d,i,l);if(!u&&!o&&!r){const m=oN(a,e);f=f.concat(XF(t,e,m))}return f}function cy(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Lt(o,e),u=ws(a,l);if(u)return u});return Jb(s,e,i,n,!0)}function KF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const f=Lt(u,n);r=r||ws(d,f)});let s=t.syncPointTree_.get(n);s?r=r||ws(s,me()):(s=new rN,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new ks(r,!0,!1):null,a=Vd(t.pendingWriteTree_,e._path),l=sN(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return kF(l)}function gc(t,e){return hN(e,t.syncPointTree_,null,Vd(t.pendingWriteTree_,me()))}function hN(t,e,n,r){if(oe(t.path))return dN(t,e,n,r);{const s=e.get(me());n==null&&s!=null&&(n=ws(s,me()));let i=[];const o=ce(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=Xb(r,o);i=i.concat(hN(a,l,u,d))}return s&&(i=i.concat(ly(s,t,r,n))),i}}function dN(t,e,n,r){const s=e.get(me());n==null&&s!=null&&(n=ws(s,me()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Xb(r,o),d=t.operationForChild(o);d&&(i=i.concat(dN(d,a,l,u)))}),s&&(i=i.concat(ly(s,t,r,n))),i}function fN(t,e){const n=e.query,r=Hl(t,n);return{hashFn:()=>(RF(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?qF(t,n._path,r):WF(t,n._path);{const i=HV(s,n);return cN(t,n,null,i)}}}}function Hl(t,e){const n=Ud(e);return t.queryToTagMap.get(n)}function Ud(t){return t._path.toString()+"$"+t._queryIdentifier}function uy(t,e){return t.tagToQueryMap.get(e)}function hy(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function dy(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=Vd(t.pendingWriteTree_,e);return ly(r,n,s,null)}function QF(t){return t.fold((e,n,r)=>{if(n&&Ps(n))return[Fd(n)];{let s=[];return n&&(s=iN(n)),At(r,(i,o)=>{s=s.concat(o)}),s}})}function ol(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(BF())(t._repo,t._path):t}function YF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Ud(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function JF(){return $F++}function XF(t,e,n){const r=e._path,s=Hl(t,e),i=fN(t,n),o=t.listenProvider_.startListening(ol(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!Ps(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!oe(u)&&d&&Ps(d))return[Fd(d).query];{let m=[];return d&&(m=m.concat(iN(d).map(_=>_.query))),At(f,(_,C)=>{m=m.concat(C)}),m}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(ol(d),Hl(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new fy(n)}node(){return this.node_}}class py{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=He(this.path_,e);return new py(this.syncTree_,n)}node(){return cy(this.syncTree_,this.path_)}}const ZF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},XE=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return e3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return t3(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},e3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},t3=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},n3=function(t,e,n,r){return my(e,new py(n,t),r)},pN=function(t,e,n){return my(t,new fy(e),n)};function my(t,e,n){const r=t.getPriority().val(),s=XE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=XE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ct(a,qe(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ct(s))),o.forEachChild(Le,(a,l)=>{const u=my(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function _y(t,e){let n=e instanceof xe?e:new xe(e),r=t,s=ce(n);for(;s!==null;){const i=Io(r.node.children,s)||{children:{},childCount:0};r=new gy(s,r,i),n=Se(n),s=ce(n)}return r}function Xo(t){return t.node.value}function mN(t,e){t.node.value=e,Hm(t)}function gN(t){return t.node.childCount>0}function r3(t){return Xo(t)===void 0&&!gN(t)}function Bd(t,e){At(t.node.children,(n,r)=>{e(new gy(n,t,r))})}function _N(t,e,n,r){n&&e(t),Bd(t,s=>{_N(s,e,!0)})}function s3(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function _c(t){return new xe(t.parent===null?t.name:_c(t.parent)+"/"+t.name)}function Hm(t){t.parent!==null&&i3(t.parent,t.name,t)}function i3(t,e,n){const r=r3(n),s=tr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Hm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Hm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3=/[\[\].#$\/\u0000-\u001F\u007F]/,a3=/[\[\].#$\u0000-\u001F\u007F]/,cp=10*1024*1024,yy=function(t){return typeof t=="string"&&t.length!==0&&!o3.test(t)},yN=function(t){return typeof t=="string"&&t.length!==0&&!a3.test(t)},l3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yN(t)},vN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ld(t)||t&&typeof t=="object"&&tr(t,".sv")},Gm=function(t,e,n,r){$d(So(t,"value"),e,n)},$d=function(t,e,n){const r=n instanceof xe?new C4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ys(r)+" with contents = "+e.toString());if(Ld(e))throw new Error(t+"contains "+e.toString()+" "+Ys(r));if(typeof e=="string"&&e.length>cp/3&&hd(e)>cp)throw new Error(t+"contains a string greater than "+cp+" utf8 bytes "+Ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(At(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!yy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);b4(r,o),$d(t,a,r),N4(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ys(r)+" in addition to actual children.")}},c3=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Ul(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!yy(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(S4);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&hn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},u3=function(t,e,n,r){const s=So(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];At(e,(o,a)=>{const l=new xe(o);if($d(s,a,He(n,l)),X_(l)===".priority"&&!vN(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),c3(s,i)},h3=function(t,e,n){if(Ld(e))throw new Error(So(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!vN(e))throw new Error(So(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},wN=function(t,e,n,r){if(!yN(n))throw new Error(So(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},d3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wN(t,e,n)},no=function(t,e){if(ce(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},f3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!l3(n))throw new Error(So(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function EN(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Fb(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Xn(t,e,n){EN(t,n),m3(t,r=>hn(r,e)||hn(e,r))}function m3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(g3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function g3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();nl&&mt("event: "+n.toString()),Yo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3="repo_interrupt",y3=25;class v3{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oh(),this.transactionQueueTree_=new gy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function w3(t,e,n){if(t.stats_=Y_(t.repoInfo_),t.forceRestClient_||YV())t.server_=new Dh(t.repoInfo_,(r,s,i,o)=>{ZE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ex(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new gr(t.repoInfo_,e,(r,s,i,o)=>{ZE(t,r,s,i,o)},r=>{ex(t,r)},r=>{x3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=t4(t.repoInfo_,()=>new eF(t.stats_,t.server_)),t.infoData_=new Q4,t.infoSyncTree_=new JE({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=mc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wy(t,"connected",!1),t.serverSyncTree_=new JE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function E3(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vy(t){return ZF({timestamp:E3(t)})}function ZE(t,e,n,r,s){t.dataUpdateCount++;const i=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=lh(n,u=>qe(u));o=HF(t.serverSyncTree_,i,l,s)}else{const l=qe(n);o=uN(t.serverSyncTree_,i,l,s)}else if(r){const l=lh(n,u=>qe(u));o=zF(t.serverSyncTree_,i,l)}else{const l=qe(n);o=mc(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Wd(t,i)),Xn(t.eventQueue_,a,o)}function ex(t,e){wy(t,"connected",e),e===!1&&S3(t)}function x3(t,e){At(e,(n,r)=>{wy(t,n,r)})}function wy(t,e,n){const r=new xe("/.info/"+e),s=qe(n);t.infoData_.updateSnapshot(r,s);const i=mc(t.infoSyncTree_,r,s);Xn(t.eventQueue_,r,i)}function xN(t){return t.nextWriteId_++}function T3(t,e,n){const r=KF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=qe(s).withIndex(e._queryParams.getIndex());GF(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=mc(t.serverSyncTree_,e._path,i);else{const a=Hl(t.serverSyncTree_,e);o=uN(t.serverSyncTree_,e._path,i,a)}return Xn(t.eventQueue_,e._path,o),cN(t.serverSyncTree_,e,n,null,!0),i},s=>(zd(t,"get for query "+rt(e)+" failed: "+s),Promise.reject(new Error(s))))}function I3(t,e,n,r,s){zd(t,"set",{path:e.toString(),value:n,priority:r});const i=vy(t),o=qe(n,r),a=cy(t.serverSyncTree_,e),l=pN(o,a,i),u=xN(t),d=lN(t.serverSyncTree_,e,l,u,!0);EN(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const C=m==="ok";C||Kt("set at "+e+" failed: "+m);const A=ni(t.serverSyncTree_,u,!C);Xn(t.eventQueue_,e,A),jo(t,s,m,_)});const f=bN(t,e);Wd(t,f),Xn(t.eventQueue_,f,[])}function S3(t){zd(t,"onDisconnectEvents");const e=vy(t),n=Oh();Bm(t.onDisconnect_,me(),(s,i)=>{const o=n3(s,i,t.serverSyncTree_,e);Jo(n,s,o)});let r=[];Bm(n,me(),(s,i)=>{r=r.concat(mc(t.serverSyncTree_,s,i));const o=bN(t,s);Wd(t,o)}),t.onDisconnect_=Oh(),Xn(t.eventQueue_,me(),r)}function C3(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Um(t.onDisconnect_,e),jo(t,n,r,s)})}function tx(t,e,n,r){const s=qe(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Jo(t.onDisconnect_,e,s),jo(t,r,i,o)})}function b3(t,e,n,r,s){const i=qe(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Jo(t.onDisconnect_,e,i),jo(t,s,o,a)})}function N3(t,e,n,r){if(ah(n)){mt("onDisconnect().update() called with empty data.  Don't do anything."),jo(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&At(n,(o,a)=>{const l=qe(a);Jo(t.onDisconnect_,He(e,o),l)}),jo(t,r,s,i)})}function A3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(_3)}function zd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function jo(t,e,n,r){e&&Yo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function TN(t,e,n){return cy(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Ey(t,e=t.transactionQueueTree_){if(e||qd(t,e),Xo(e)){const n=SN(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&R3(t,_c(e),n)}else gN(e)&&Bd(e,n=>{Ey(t,n)})}function R3(t,e,n){const r=n.map(u=>u.currentWriteId),s=TN(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];$(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Lt(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{zd(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(ni(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();qd(t,_y(t.transactionQueueTree_,e)),Ey(t,t.transactionQueueTree_),Xn(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)Yo(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Kt("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Wd(t,e)}},o)}function Wd(t,e){const n=IN(t,e),r=_c(n),s=SN(t,n);return k3(t,s,r),r}function k3(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Lt(n,l.path);let d=!1,f;if($(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=y3)d=!0,f="maxretry",s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0));else{const m=TN(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){$d("transaction failed: Data returned ",_,l.path);let C=qe(_);typeof _=="object"&&_!=null&&tr(_,".priority")||(C=C.updatePriority(m.getPriority()));const R=l.currentWriteId,I=vy(t),x=pN(C,m,I);l.currentOutputSnapshotRaw=C,l.currentOutputSnapshotResolved=x,l.currentWriteId=xN(t),o.splice(o.indexOf(R),1),s=s.concat(lN(t.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),s=s.concat(ni(t.serverSyncTree_,R,!0))}else d=!0,f="nodata",s=s.concat(ni(t.serverSyncTree_,l.currentWriteId,!0))}Xn(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}qd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Yo(r[a]);Ey(t,t.transactionQueueTree_)}function IN(t,e){let n,r=t.transactionQueueTree_;for(n=ce(e);n!==null&&Xo(r)===void 0;)r=_y(r,n),e=Se(e),n=ce(e);return r}function SN(t,e){const n=[];return CN(t,e,n),n.sort((r,s)=>r.order-s.order),n}function CN(t,e,n){const r=Xo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Bd(e,s=>{CN(t,s,n)})}function qd(t,e){const n=Xo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,mN(e,n.length>0?n:void 0)}Bd(e,r=>{qd(t,r)})}function bN(t,e){const n=_c(IN(t,e)),r=_y(t.transactionQueueTree_,e);return s3(r,s=>{up(t,s)}),up(t,r),_N(r,s=>{up(t,s)}),n}function up(t,e){const n=Xo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ni(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?mN(e,void 0):n.length=i+1,Xn(t.eventQueue_,_c(e),s);for(let o=0;o<r.length;o++)Yo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function D3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const nx=function(t,e){const n=O3(t),r=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||BV();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ab(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new xe(n.pathString)}},O3=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=P3(t.substring(d,f)));const m=D3(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const C=e.indexOf(".");r=e.substring(0,C).toLowerCase(),n=e.substring(C+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+rt(this.snapshot.exportVal())}}class j3{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class V3{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ar;return C3(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){no("OnDisconnect.remove",this._path);const e=new ar;return tx(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){no("OnDisconnect.set",this._path),Gm("OnDisconnect.set",e,this._path);const n=new ar;return tx(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){no("OnDisconnect.setWithPriority",this._path),Gm("OnDisconnect.setWithPriority",e,this._path),h3("OnDisconnect.setWithPriority",n);const r=new ar;return b3(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){no("OnDisconnect.update",this._path),u3("OnDisconnect.update",e,this._path);const n=new ar;return N3(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class xy{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:X_(this._path)}get ref(){return new Dr(this._repo,this._path)}get _queryIdentifier(){const e=UE(this._queryParams),n=K_(e);return n==="{}"?"default":n}get _queryObject(){return UE(this._queryParams)}isEqual(e){if(e=_e(e),!(e instanceof xy))return!1;const n=this._repo===e._repo,r=Fb(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+I4(this._path)}}class Dr extends xy{constructor(e,n){super(e,n,new ny,!1)}get parent(){const e=Vb(this._path);return e===null?null:new Dr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),r=Km(this.ref,e);return new Gl(this._node.getChild(n),r,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Gl(s,Km(this.ref,r),Le)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Jr(t,e){return t=_e(t),t._checkNotDeleted("ref"),e!==void 0?Km(t._root,e):t._root}function Km(t,e){return t=_e(t),ce(t._path)===null?d3("child","path",e):wN("child","path",e),new Dr(t._repo,He(t._path,e))}function rx(t){return t=_e(t),new V3(t._repo,t._path)}function F3(t){return no("remove",t._path),al(t,null)}function al(t,e){t=_e(t),no("set",t._path),Gm("set",e,t._path);const n=new ar;return I3(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function hp(t){t=_e(t);const e=new M3(()=>{}),n=new Ty(e);return T3(t._repo,t,n).then(r=>new Gl(r,new Dr(t._repo,t._path),t._queryParams.getIndex()))}class Ty{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new L3("value",this,new Gl(e.snapshotNode,new Dr(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new j3(this,e,n):null}matches(e){return e instanceof Ty?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}LF(Dr);UF(Dr);/**
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
 */const U3="FIREBASE_DATABASE_EMULATOR_HOST",Qm={};let B3=!1;function $3(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Zn(i);t.repoInfo_=new Ab(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function z3(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=nx(i,s),a=o.repoInfo,l;typeof process<"u"&&xE&&(l=xE[U3]),l?(i=`http://${l}?ns=${a.namespace}`,o=nx(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new XV(t.name,t.options,e);f3("Invalid Firebase Database URL",o),oe(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const d=q3(a,t,u,new JV(t,n));return new H3(d,t)}function W3(t,e){const n=Qm[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),A3(t),delete n[t.key]}function q3(t,e,n,r){let s=Qm[e.name];s||(s={},Qm[e.name]=s);let i=s[t.toURLString()];return i&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new v3(t,B3,n,r),s[t.toURLString()]=i,i}class H3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(w3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dr(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}function NN(t=fd(),e){const n=tc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Jg("database");r&&G3(n,...r)}return n}function G3(t,e,n,r={}){t=_e(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Er(r,i.repoInfo_.emulatorOptions))return;br("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&br('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ku(ku.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Xg(r.mockUserToken,t.app.options.projectId);o=new ku(a)}Zn(e)&&(cd(e),ud("Database",!0)),$3(i,s,r,o)}/**
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
 */function K3(t){LV(js),Ts(new xr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return z3(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),fn(TE,IE,t),fn(TE,IE,"esm2020")}gr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};gr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};K3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="firebasestorage.googleapis.com",RN="storageBucket",Q3=2*60*1e3,Y3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function dp(t){return"storage/"+t}function Iy(){const t="An unknown error occurred, please check the error payload for server response.";return new $e(Be.UNKNOWN,t)}function J3(t){return new $e(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function X3(t){return new $e(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z3(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new $e(Be.UNAUTHENTICATED,t)}function e6(){return new $e(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function t6(t){return new $e(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function n6(){return new $e(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function r6(){return new $e(Be.CANCELED,"User canceled the upload/download.")}function s6(t){return new $e(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function i6(t){return new $e(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o6(){return new $e(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+RN+"' property when initializing the app?")}function a6(){return new $e(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function l6(){return new $e(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function c6(t){return new $e(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ym(t){return new $e(Be.INVALID_ARGUMENT,t)}function kN(){return new $e(Be.APP_DELETED,"The Firebase app was deleted.")}function u6(t){return new $e(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ll(t,e){return new $e(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Na(t){throw new $e(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=en.makeFromUrl(e,n)}catch{return new en(e,"")}if(r.path==="")return r;throw i6(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),C={bucket:1,path:3},A=n===AN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",I=new RegExp(`^https?://${A}/${s}/${R}`,"i"),w=[{regex:a,indices:l,postModify:i},{regex:_,indices:C,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<w.length;P++){const M=w[P],U=M.regex.exec(e);if(U){const T=U[M.indices.bucket];let E=U[M.indices.path];E||(E=""),r=new en(T,E),M.postModify(r);break}}if(r==null)throw s6(e);return r}}class h6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d6(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...R){u||(u=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(_,l())},R)}function m(){i&&clearTimeout(i)}function _(R,...I){if(u){m();return}if(R){m(),d.call(null,R,...I);return}if(l()||o){m(),d.call(null,R,...I);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let C=!1;function A(R){C||(C=!0,m(),!u&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function f6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(t){return t!==void 0}function m6(t){return typeof t=="object"&&!Array.isArray(t)}function Sy(t){return typeof t=="string"||t instanceof String}function sx(t){return Cy()&&t instanceof Blob}function Cy(){return typeof Blob<"u"}function ix(t,e,n,r){if(r<e)throw Ym(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ym(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function PN(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ai;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ai||(ai={}));/**
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
 */function g6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _6{constructor(e,n,r,s,i,o,a,l,u,d,f,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,A)=>{this.resolve_=C,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new nu(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ai.NO_ERROR,l=i.getStatus();if(!a||g6(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===ai.ABORT;r(!1,new nu(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new nu(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());p6(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Iy();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?kN():r6();o(l)}else{const l=n6();o(l)}};this.canceled_?n(!1,new nu(!1,null,!0)):this.backoffId_=d6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&f6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nu{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function v6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function w6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function E6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function x6(t,e,n,r,s,i,o=!0,a=!1){const l=PN(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return w6(d,e),y6(d,n),v6(d,i),E6(d,r),new _6(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function I6(...t){const e=T6();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cy())return new Blob(t);throw new $e(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function S6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function C6(t){if(typeof atob>"u")throw c6("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fp{constructor(e,n){this.data=e,this.contentType=n||null}}function b6(t,e){switch(t){case Bn.RAW:return new fp(DN(e));case Bn.BASE64:case Bn.BASE64URL:return new fp(ON(t,e));case Bn.DATA_URL:return new fp(A6(e),R6(e))}throw Iy()}function DN(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function N6(t){let e;try{e=decodeURIComponent(t)}catch{throw ll(Bn.DATA_URL,"Malformed data URL.")}return DN(e)}function ON(t,e){switch(t){case Bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ll(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ll(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=C6(e)}catch(s){throw s.message.includes("polyfill")?s:ll(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class LN{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ll(Bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=k6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function A6(t){const e=new LN(t);return e.base64?ON(Bn.BASE64,e.rest):N6(e.rest)}function R6(t){return new LN(t).contentType}function k6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){let r=0,s="";sx(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(sx(this.data_)){const r=this.data_,s=S6(r,e,n);return s===null?null:new Xr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(Cy()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(I6.apply(null,n))}else{const n=e.map(o=>Sy(o)?b6(Bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Xr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t){let e;try{e=JSON.parse(t)}catch{return null}return m6(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function D6(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function MN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O6(t,e){return e}class Dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||O6}}let ru=null;function L6(t){return!Sy(t)||t.length<2?t:MN(t)}function VN(){if(ru)return ru;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(i,o){return L6(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Dt("size");return s.xform=r,t.push(s),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),ru=t,ru}function j6(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new en(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function M6(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return j6(r,t),r}function FN(t,e,n){const r=jN(e);return r===null?null:M6(t,r,n)}function V6(t,e,n,r){const s=jN(e);if(s===null||!Sy(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),_=by(m,n,r),C=PN({alt:"media",token:u});return _+C})[0]}function F6(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class UN{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t){if(!t)throw Iy()}function U6(t,e){function n(r,s){const i=FN(t,s,e);return BN(i!==null),i}return n}function B6(t,e){function n(r,s){const i=FN(t,s,e);return BN(i!==null),V6(i,s,t.host,t._protocol)}return n}function $N(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=e6():s=Z3():n.getStatus()===402?s=X3(t.bucket):n.getStatus()===403?s=t6(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function $6(t){const e=$N(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=J3(t.path)),i.serverResponse=s.serverResponse,i}return n}function z6(t,e,n){const r=e.fullServerUrl(),s=by(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new UN(s,i,B6(t,n),o);return a.errorHandler=$6(e),a}function W6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function q6(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=W6(null,e)),r}function H6(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let P=0;P<2;P++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=q6(e,r,s),d=F6(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Xr.getBlob(f,r,m);if(_===null)throw a6();const C={name:u.fullPath},A=by(i,t.host,t._protocol),R="POST",I=t.maxUploadRetryTime,x=new UN(A,R,U6(t,n),I);return x.urlParams=C,x.headers=o,x.body=_.uploadData(),x.errorHandler=$N(e),x}class G6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ai.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ai.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ai.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Na("cannot .send() more than once");if(Zn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Na("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Na("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Na("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Na("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class K6 extends G6{initXhr(){this.xhr_.responseType="text"}}function zN(){return new K6}/**
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
 */class Ti{constructor(e,n){this._service=e,n instanceof en?this._location=n:this._location=en.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ti(e,n)}get root(){const e=new en(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return MN(this._location.path)}get storage(){return this._service}get parent(){const e=P6(this._location.path);if(e===null)return null;const n=new en(this._location.bucket,e);return new Ti(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw u6(e)}}function Q6(t,e,n){t._throwIfRoot("uploadBytes");const r=H6(t.storage,t._location,VN(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,zN).then(s=>({metadata:s,ref:t}))}function Y6(t){t._throwIfRoot("getDownloadURL");const e=z6(t.storage,t._location,VN());return t.storage.makeRequestWithTokens(e,zN).then(n=>{if(n===null)throw l6();return n})}function J6(t,e){const n=D6(t._location.path,e),r=new en(t._location.bucket,n);return new Ti(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X6(t){return/^[A-Za-z]+:\/\//.test(t)}function Z6(t,e){return new Ti(t,e)}function WN(t,e){if(t instanceof Ny){const n=t;if(n._bucket==null)throw o6();const r=new Ti(n,n._bucket);return e!=null?WN(r,e):r}else return e!==void 0?J6(t,e):t}function eU(t,e){if(e&&X6(e)){if(t instanceof Ny)return Z6(t,e);throw Ym("To use ref(service, url), the first argument must be a Storage instance.")}else return WN(t,e)}function ox(t,e){const n=e==null?void 0:e[RN];return n==null?null:en.makeFromBucketSpec(n,t)}function tU(t,e,n,r={}){t.host=`${e}:${n}`;const s=Zn(e);s&&(cd(`https://${t.host}/b`),ud("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Xg(i,t.app.options.projectId))}class Ny{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=AN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Q3,this._maxUploadRetryTime=Y3,this._requests=new Set,s!=null?this._bucket=en.makeFromBucketSpec(s,this._host):this._bucket=ox(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=en.makeFromBucketSpec(this._url,e):this._bucket=ox(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ix("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ix("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ti(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new h6(kN());{const o=x6(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const ax="@firebase/storage",lx="0.14.0";/**
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
 */const qN="storage";function cx(t,e,n){return t=_e(t),Q6(t,e,n)}function ux(t){return t=_e(t),Y6(t)}function hx(t,e){return t=_e(t),eU(t,e)}function nU(t=fd(),e){t=_e(t);const r=tc(t,qN).getImmediate({identifier:e}),s=Jg("storage");return s&&rU(r,...s),r}function rU(t,e,n,r={}){tU(t,e,n,r)}function sU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ny(n,r,s,e,js)}function iU(){Ts(new xr(qN,sU,"PUBLIC").setMultipleInstances(!0)),fn(ax,lx,""),fn(ax,lx,"esm2020")}iU();const oU={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},Hd=ZI(oU),Ie=cL(Hd),we=_V(Hd),dx=nU(Hd),Aa=NN(Hd);function HN(){const t=ad(),[e,n]=O.useState(""),[r,s]=O.useState(""),[i,o]=O.useState(!1),[a,l]=O.useState(""),u=async d=>{d.preventDefault(),o(!0),l("");try{const m=(await H2(Ie,e,r)).user,_=await Ah(lt(we,"users",m.uid));if(!_.exists()){l("Profile not found. Please contact support."),await Ie.signOut(),o(!1);return}const C=_.data();if(C.role==="carrier"&&!C.isApproved){l("Your account is pending approval. Please wait for coordinator approval."),await Ie.signOut(),o(!1);return}console.log("Login successful for:",m.email)}catch(f){console.error("Login error:",f),f.code==="auth/invalid-credential"||f.code==="auth/user-not-found"||f.code==="auth/wrong-password"?l("Invalid email or password. Please try again."):f.code==="auth/too-many-requests"?l("Too many failed attempts. Please try again later."):f.code==="auth/user-disabled"?l("This account has been disabled. Please contact support."):f.code==="auth/network-request-failed"?l("Network error. Please check your internet connection."):l(f.message||"Login failed. Please try again.")}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[h.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),h.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]}),h.jsx("p",{className:"text-gray-600",children:"Sign in to your carrier account"})]}),a&&h.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 mb-6",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-red-500",children:"⚠️"})}),h.jsx("div",{className:"ml-3",children:h.jsx("p",{className:"text-red-700 text-sm",children:a})})]})}),h.jsxs("form",{onSubmit:u,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),h.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:d=>n(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0,disabled:i})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),h.jsx("input",{type:"password",placeholder:"Enter your password",value:r,onChange:d=>s(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0,minLength:6,disabled:i}),h.jsx("div",{className:"text-right mt-2",children:h.jsx("button",{type:"button",onClick:()=>t("/forgot-password"),className:"text-sm text-blue-600 hover:text-blue-800",children:"Forgot password?"})})]}),h.jsx("button",{type:"submit",disabled:i,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:i?h.jsxs(h.Fragment,{children:[h.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),h.jsxs("div",{className:"flex items-center my-8",children:[h.jsx("div",{className:"flex-grow border-t border-gray-300"}),h.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),h.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),h.jsxs("div",{className:"text-center",children:[h.jsx("p",{className:"text-gray-600 mb-4",children:"Don't have a carrier account?"}),h.jsx(wu,{to:"/register",className:"inline-block w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition",children:"Register as Carrier"})]}),h.jsx("div",{className:"mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-yellow-600",children:"ℹ️"})}),h.jsxs("div",{className:"ml-3",children:[h.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important"}),h.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Carrier accounts require coordinator approval. You will receive SMS notification once approved."})]})]})}),h.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:h.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",h.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-blue-600 hover:text-blue-800",children:"Contact Support"})]})})]})})}const su=10,fx=30*1e3,px=1e3,aU=10,Pu=(t,e,n,r)=>{const i=(n-t)*(Math.PI/180),o=(r-e)*(Math.PI/180),a=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*(Math.PI/180))*Math.cos(n*(Math.PI/180))*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))},pp=(t,e)=>{if(t.accuracy===void 0)return console.warn("❌ Position rejected: accuracy is undefined"),!1;if(t.accuracy>px)return console.warn(`❌ Position rejected: accuracy too poor (${t.accuracy.toFixed(0)}m > ${px}m)`),!1;if(Math.abs(t.lat)>90||Math.abs(t.lng)>180)return console.warn(`❌ Position rejected: invalid coordinates (${t.lat}, ${t.lng})`),!1;if(e){const n=Pu(e.lat,e.lng,t.lat,t.lng)/1e3;if(n>aU)return console.warn(`❌ Position rejected: impossible jump of ${n.toFixed(1)}km`),!1}return!0},iu=()=>{const t=new Date,e=new Date(t.toLocaleString("en-US",{timeZone:"Africa/Johannesburg"}));return{iso:e.toISOString(),ms:e.getTime()}};class ye{static async getCarrierProfile(){try{const e=Ie.currentUser;if(!e)return null;const n=await qs(vn(yn(we,"users"),tt("__name__","==",e.uid)));if(!n.empty){const r=n.docs[0].data();return{id:n.docs[0].id,...r}}return null}catch(e){return console.error("Error fetching carrier profile:",e),null}}static async updateCarrierStatus(e,n){try{const r=Ie.currentUser;return r?e==="inactive"&&n?(console.error("Cannot change status to inactive while on delivery"),!1):(await on(lt(we,"users",r.uid),{status:e,updatedAt:ee.now(),lastActive:ee.now()}),!0):!1}catch(r){return console.error("Error updating carrier status:",r),!1}}static async updateLocation(e,n){try{const r=Ie.currentUser;if(!r)return console.warn("updateLocation: no authenticated user (auth.currentUser is null)"),!1;const s=Date.now(),i=r.uid,o=10*60*1e3;let a=!1;if(!this.lastFirestoreWrite[i])a=!0;else if(!this.lastSavedLocation)a=!0;else{const l=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,e,n);l>200&&(a=!0,console.log(`🔁 Significant move detected: ${l.toFixed(0)}m — forcing Firestore update`))}if(a||(a=!this.lastFirestoreWrite[i]||s-this.lastFirestoreWrite[i]>=o),a){const l=ee.now(),{iso:u}=iu();await on(lt(we,"users",r.uid),{currentLocation:{lat:e,lng:n,timestamp:l,timestampISO:u,timestampMs:Date.now(),timezone:"SAST"},lastActive:ee.now(),lastActiveISO:u}),this.lastFirestoreWrite[i]=s,console.log("📝 Firestore location updated (Lesotho time)")}try{const{iso:l,ms:u}=iu(),d=Jr(Aa,`tracks/${r.uid}`);await al(d,{lat:e,lng:n,timestamp:Date.now(),timestampISO:l,timestampMs:u,timezone:"SAST",status:"active"}),console.log("✅ RTDB location updated (Lesotho):",{lat:e,lng:n,lesothoTime:l});try{rx(d).remove()}catch{}}catch(l){console.error("❌ RTDB write failed for carrier track:",l)}return!0}catch(r){return console.error("Error updating location:",r),!1}}static async getActiveDelivery(){try{const e=Ie.currentUser;if(!e)return null;const n=vn(yn(we,"deliveries"),tt("carrierId","==",e.uid),tt("status","in",["assigned","picked_up","in_transit","out_for_delivery"]),Qs("assignedAt","desc")),r=await qs(n);if(!r.empty){const s=r.docs[0].data();return{id:r.docs[0].id,...s}}return null}catch(e){return console.error("Error fetching active delivery:",e),null}}static async getDeliveries(e=10){try{const n=Ie.currentUser;if(!n)return[];const r=vn(yn(we,"deliveries"),tt("carrierId","==",n.uid),Qs("createdAt","desc"),kV(e));return(await qs(r)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){return console.error("Error fetching deliveries:",n),[]}}static async updateDeliveryStatus(e,n,r){try{const s={status:n,updatedAt:ee.now()};return n==="picked_up"&&(s.pickupTime=ee.now(),s.otpCode=r||Math.floor(1e3+Math.random()*9e3).toString()),n==="delivered"&&(s.deliveryTime=ee.now()),await on(lt(we,"deliveries",e),s),!0}catch(s){return console.error("Error updating delivery:",s),!1}}static async verifyOTP(e,n){try{const r=lt(we,"deliveries",e),s=await qs(vn(yn(we,"deliveries"),tt("__name__","==",e)));return!s.empty&&s.docs[0].data().otpCode===n?(await on(r,{status:"delivered",otpVerified:!0,deliveryTime:ee.now(),updatedAt:ee.now()}),!0):!1}catch(r){return console.error("Error verifying OTP:",r),!1}}static async updateDeliveryLocation(e,n,r){try{const s=Date.now(),i=10*60*1e3;if(!this.lastDeliveryFirestoreWrite[e]||s-this.lastDeliveryFirestoreWrite[e]>=i){const a=ee.now(),{iso:l}=iu();await on(lt(we,"deliveries",e),{currentLocation:{lat:n,lng:r,timestamp:a,timestampISO:l,timestampMs:Date.now(),timezone:"SAST"}}),this.lastDeliveryFirestoreWrite[e]=s,console.log(`📝 Delivery ${e} Firestore location updated (Lesotho time)`)}try{const{iso:a,ms:l}=iu(),u=Jr(Aa,`deliveryTracks/${e}`);await al(u,{lat:n,lng:r,timestamp:Date.now(),timestampISO:a,timestampMs:l,timezone:"SAST"});try{rx(u).remove()}catch{}}catch(a){console.warn("RTDB write failed for delivery track:",a)}return!0}catch(s){return console.error("Error updating delivery location:",s),!1}}static subscribeToActiveDelivery(e){const n=Ie.currentUser;if(!n)return()=>{};const r=vn(yn(we,"deliveries"),tt("carrierId","==",n.uid),tt("status","in",["assigned","picked_up","in_transit","out_for_delivery"]));return tl(r,i=>{if(i.empty)e(null);else{const o=i.docs[0].data();e({id:i.docs[0].id,...o})}})}static async getAvailableTasks(){try{if(!Ie.currentUser)return[];const n=vn(yn(we,"deliveries"),tt("status","==","pending"),tt("carrierId","==",null),Qs("createdAt","desc"));return(await qs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching available tasks:",e),[]}}static subscribeToAvailableTasks(e){const n=vn(yn(we,"deliveries"),tt("status","==","pending"),tt("carrierId","==",null),Qs("createdAt","desc"));return tl(n,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)})}static async acceptTask(e){try{const n=Ie.currentUser;if(!n)return!1;const r=lt(we,"deliveries",e);return await on(r,{carrierId:n.uid,carrierEmail:n.email,carrierName:n.displayName||"",carrierPhone:n.phoneNumber||"",status:"accepted",assignedAt:ee.now(),acceptedAt:ee.now(),updatedAt:ee.now()}),await on(lt(we,"users",n.uid),{status:"busy",updatedAt:ee.now()}),!0}catch(n){return console.error("Error accepting task:",n),!1}}static async getAssignedDeliveries(){try{const e=Ie.currentUser;if(!e)return[];const n=vn(yn(we,"deliveries"),tt("carrierId","==",e.uid),tt("status","==","assigned"),Qs("assignedAt","desc"));return(await qs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching assigned deliveries:",e),[]}}static async acceptAssignedDelivery(e,n){try{if(!Ie.currentUser)return!1;if(!n)return console.error("Location sharing required to accept delivery"),!1;const s=lt(we,"deliveries",e);return await on(s,{status:"accepted",acceptedAt:ee.now(),updatedAt:ee.now()}),!0}catch(r){return console.error("Error accepting assigned delivery:",r),!1}}static async declineAssignedDelivery(e){try{if(!Ie.currentUser)return!1;const r=lt(we,"deliveries",e);return await on(r,{status:"pending",carrierId:null,carrierEmail:null,carrierName:null,carrierPhone:null,assignedAt:null,updatedAt:ee.now()}),!0}catch(n){return console.error("Error declining assigned delivery:",n),!1}}static subscribeToAssignedDeliveries(e){const n=Ie.currentUser;if(!n)return()=>{};const r=vn(yn(we,"deliveries"),tt("carrierId","==",n.uid),tt("status","==","assigned"),Qs("assignedAt","desc"));return tl(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));e(o)})}static async updateShareLocation(e){try{const n=Ie.currentUser;return n?(await on(lt(we,"users",n.uid),{shareLocation:e,updatedAt:ee.now()}),!0):!1}catch(n){return console.error("Error updating share location:",n),!1}}static subscribeToLocationUpdates(e){return this.locationUpdateCallbacks.add(e),()=>{this.locationUpdateCallbacks.delete(e)}}static notifyLocationUpdate(e){this.locationUpdateCallbacks.forEach(n=>n(e))}static startLocationSharing(e){if(!navigator.geolocation)return console.error("Geolocation is not supported"),!1;if(this.gpsWatchId!==null)return console.log("GPS tracking already active"),!0;console.log("📍 Starting GPS tracking");const n=(r=!0)=>{navigator.geolocation.getCurrentPosition(async s=>{const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!pp(i,this.lastSavedLocation)){console.warn("Initial position failed validation, attempting fallback..."),r&&n(!1);return}console.log(`✅ Initial position (${r?"high":"low"} accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${i.accuracy.toFixed(0)}m`),this.notifyLocationUpdate(i);try{await this.updateLocation(i.lat,i.lng)}catch(o){console.error("Immediate location update failed:",o)}},s=>{r&&s.code===3?(console.warn("High accuracy initial position timeout, trying with low accuracy..."),n(!1)):console.warn("getCurrentPosition failed:",s)},{enableHighAccuracy:r,timeout:1e4,maximumAge:0})};try{n()}catch(r){console.warn("Immediate position request failed:",r)}return this.gpsWatchId=navigator.geolocation.watchPosition(async r=>{var a;const s={lat:r.coords.latitude,lng:r.coords.longitude,timestamp:new Date,accuracy:r.coords.accuracy};if(!pp(s,this.lastSavedLocation))return;console.log(`📍 New position: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}, accuracy: ${((a=s.accuracy)==null?void 0:a.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(s);let i=!1;const o=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),i=!0;else{const l=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,s.lat,s.lng);console.log(`📏 Distance from last saved: ${l.toFixed(0)}m (threshold: ${su}m)`);const u=s.accuracy&&s.accuracy>1e3,d=u?0:su,f=u?1e4:fx;l>d&&(i=!0,console.log("✅ Distance threshold exceeded")),!i&&this.lastSavedTime&&o-this.lastSavedTime>=f&&(console.log(`⏱️ Time threshold reached (${(o-this.lastSavedTime)/1e3}s >= ${f/1e3}s)`),i=!0)}if(i){console.log(`✅ Updating location: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}`);try{await this.updateLocation(s.lat,s.lng)}catch(l){console.error("Failed to update location:",l)}if(e)try{await this.updateDeliveryLocation(e,s.lat,s.lng)}catch(l){console.error("Failed to update delivery location:",l)}this.lastSavedLocation={lat:s.lat,lng:s.lng},this.lastSavedTime=o}else console.log("⏭️ Skipping update (thresholds not met)")},r=>{console.error("Geolocation error (high accuracy):",r),r.code===3?(console.warn("High accuracy timeout, retrying with lower accuracy..."),this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.gpsWatchId=navigator.geolocation.watchPosition(async s=>{var l;const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!pp(i,this.lastSavedLocation))return;console.log(`📍 New position (low accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${((l=i.accuracy)==null?void 0:l.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(i);let o=!1;const a=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),o=!0;else{const u=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,i.lat,i.lng);console.log(`📏 Distance from last saved: ${u.toFixed(0)}m (threshold: ${su}m)`);const d=i.accuracy&&i.accuracy>1e3,f=d?0:su,m=d?1e4:fx;u>f&&(o=!0,console.log("✅ Distance threshold exceeded")),!o&&this.lastSavedTime&&a-this.lastSavedTime>=m&&(console.log(`⏱️ Time threshold reached (${(a-this.lastSavedTime)/1e3}s >= ${m/1e3}s)`),o=!0)}if(o){console.log(`✅ Updating location: ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}`);try{await this.updateLocation(i.lat,i.lng)}catch(u){console.error("Failed to update location:",u)}if(e)try{await this.updateDeliveryLocation(e,i.lat,i.lng)}catch(u){console.error("Failed to update delivery location:",u)}this.lastSavedLocation={lat:i.lat,lng:i.lng},this.lastSavedTime=a}else console.log("⏭️ Skipping update (thresholds not met)")},s=>{console.error("Low accuracy geolocation also failed:",s),this.stopLocationSharing()},{enableHighAccuracy:!1,timeout:15e3,maximumAge:0})):this.stopLocationSharing()},{enableHighAccuracy:!0,timeout:15e3,maximumAge:0}),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),!0}static stopLocationSharing(){return this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null,console.log("📍 Stopped GPS tracking")),(async()=>{try{const e=Ie.currentUser;if(!e)return;const n=Jr(Aa,`tracks/${e.uid}`),r=await hp(n);if(r&&r.exists()){const s=r.val(),i=s.timestampMs||s.timestamp||Date.now(),o=s.timestampISO||new Date(i).toISOString();try{await on(lt(we,"users",e.uid),{currentLocation:{lat:s.lat,lng:s.lng,timestamp:ee.fromDate(new Date(i)),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST"},lastActive:ee.now(),updatedAt:ee.now(),shareLocation:!1,status:"inactive"}),console.log("🗄️ Persisted last RTDB location to Firestore (on stop)");try{await al(n,{...s,timestamp:Date.now(),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST",status:"inactive"})}catch(a){console.warn("Could not update RTDB track to inactive:",a)}}catch(a){console.error("Error writing last RTDB location to Firestore:",a)}}else console.log("ℹ️ No RTDB track found to persist on stop")}catch(e){console.error("Error reading RTDB on stopLocationSharing:",e)}})(),this.lastSavedLocation=null,this.lastSavedTime=null,this.notifyLocationUpdate(null),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=setTimeout(()=>{console.log("15 minutes offline, auto-disabling location sharing"),this.updateShareLocation(!1),this.offlineTimeoutId=null},this.OFFLINE_TIMEOUT_MS),!0}static isLocationSharingActive(){return this.gpsWatchId!==null}static stopAllTracking(){this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.offlineTimeoutId&&(clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=null),this.locationUpdateCallbacks.clear()}static async getTodayStats(){try{const e=Ie.currentUser;if(!e)return{earnings:0,deliveries:0};const n=new Date;n.setHours(0,0,0,0);const r=vn(yn(we,"deliveries"),tt("carrierId","==",e.uid),tt("status","==","delivered"),tt("deliveryTime",">=",ee.fromDate(n))),s=await qs(r);return{earnings:s.docs.reduce((o,a)=>{const l=a.data();return o+(l.earnings||0)},0),deliveries:s.docs.length}}catch(e){return console.error("Error fetching today stats:",e),{earnings:0,deliveries:0}}}static async getLocationPreferRealtime(e){try{const n=await hp(Jr(Aa,`tracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,accuracy:s.accuracy,timezone:s.timezone||"SAST"}}const r=await Ah(lt(we,"users",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,accuracy:i.accuracy,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (user):",n),null}}static async getDeliveryLocationPreferRealtime(e){try{const n=await hp(Jr(Aa,`deliveryTracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,timezone:s.timezone||"SAST"}}const r=await Ah(lt(we,"deliveries",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (delivery):",n),null}}}jn(ye,"lastFirestoreWrite",{}),jn(ye,"lastDeliveryFirestoreWrite",{}),jn(ye,"gpsWatchId",null),jn(ye,"lastSavedLocation",null),jn(ye,"lastSavedTime",null),jn(ye,"offlineTimeoutId",null),jn(ye,"locationUpdateCallbacks",new Set),jn(ye,"OFFLINE_TIMEOUT_MS",15*60*1e3);const GN=t=>{const[e,n]=O.useState(()=>ye.isLocationSharingActive()),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState(0),u=()=>{const m=ye.startLocationSharing(t);return m&&(n(!0),o(null)),m},d=()=>{ye.stopLocationSharing(),n(!1)},f=()=>{e?d():u()};return O.useEffect(()=>{const m=ye.subscribeToLocationUpdates(_=>{_&&(s(_),l(_.accuracy||0))});return()=>{m()}},[]),{isSharing:e,lastLocation:r,error:i,accuracy:a,startSharing:u,stopSharing:d,toggleSharing:f}},lU=()=>{const[t,e]=O.useState({todayEarnings:0,todayDeliveries:0,totalEarnings:0,totalDeliveries:0,rating:0,status:"inactive"}),[n,r]=O.useState(!0);return O.useEffect(()=>{const s=Ie.currentUser;if(!s){r(!1);return}const i=async()=>{const a=await ye.getTodayStats();e(l=>({...l,todayEarnings:a.earnings,todayDeliveries:a.deliveries}))},o=tl(lt(we,"users",s.uid),a=>{if(a.exists()){const l=a.data();e(u=>({...u,totalEarnings:l.earnings||0,totalDeliveries:l.completedDeliveries||0,rating:l.rating||0,status:l.status||"inactive"})),r(!1)}});return i(),()=>o()},[]),{stats:t,loading:n}},li=t=>t==null||Number.isNaN(t)?"M0.00":`M${t.toFixed(2)}`,cU=t=>t?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Not yet",Zr=t=>t?t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}):"N/A",uU=t=>{switch(t){case"delivered":return"bg-green-100 text-green-800";case"in_transit":return"bg-blue-100 text-blue-800";case"picked_up":return"bg-yellow-100 text-yellow-800";case"assigned":return"bg-purple-100 text-purple-800";case"pending":return"bg-gray-100 text-gray-800";default:return"bg-gray-100 text-gray-800"}},hU=t=>{switch(t){case"delivered":return"✅";case"in_transit":return"🚚";case"picked_up":return"📦";case"assigned":return"👤";case"pending":return"⏳";default:return"📋"}},mx=t=>({pending:10,assigned:30,accepted:40,picked_up:50,in_transit:70,out_for_delivery:90,delivered:100,cancelled:0})[t.status]||0;let dU={data:""},fU=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||dU},pU=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,mU=/\/\*[^]*?\*\/|  +/g,gx=/\n+/g,es=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?es(o,i):i+"{"+es(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=es(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=es.p?es.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},rr={},KN=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+KN(t[n]);return e}return t},gU=(t,e,n,r,s)=>{let i=KN(t),o=rr[i]||(rr[i]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(i));if(!rr[o]){let l=i!==t?t:(u=>{let d,f,m=[{}];for(;d=pU.exec(u.replace(mU,""));)d[4]?m.shift():d[3]?(f=d[3].replace(gx," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(gx," ").trim();return m[0]})(t);rr[o]=es(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&rr.g?rr.g:null;return n&&(rr.g=rr[o]),((l,u,d,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(rr[o],e,r,a),o},_U=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":es(a,""):a===!1?"":a}return r+s+(o??"")},"");function Gd(t){let e=this||{},n=t.call?t(e.p):t;return gU(n.unshift?n.raw?_U(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,fU(e.target),e.g,e.o,e.k)}let QN,Jm,Xm;Gd.bind({g:1});let Nr=Gd.bind({k:1});function yU(t,e,n,r){es.p=e,QN=t,Jm=n,Xm=r}function Fs(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Jm&&Jm()},a),n.o=/ *go\d+/.test(l),a.className=Gd.apply(n,r)+(l?" "+l:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),Xm&&u[0]&&Xm(a),QN(u,a)}return s}}var vU=t=>typeof t=="function",$h=(t,e)=>vU(t)?t(e):t,wU=(()=>{let t=0;return()=>(++t).toString()})(),YN=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),EU=20,Ay="default",JN=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return JN(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Du=[],XN={toasts:[],pausedAt:void 0,settings:{toastLimit:EU}},$n={},ZN=(t,e=Ay)=>{$n[e]=JN($n[e]||XN,t),Du.forEach(([n,r])=>{n===e&&r($n[e])})},eA=t=>Object.keys($n).forEach(e=>ZN(t,e)),xU=t=>Object.keys($n).find(e=>$n[e].toasts.some(n=>n.id===t)),Kd=(t=Ay)=>e=>{ZN(e,t)},TU={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},IU=(t={},e=Ay)=>{let[n,r]=O.useState($n[e]||XN),s=O.useRef($n[e]);O.useEffect(()=>(s.current!==$n[e]&&r($n[e]),Du.push([e,r]),()=>{let o=Du.findIndex(([a])=>a===e);o>-1&&Du.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||TU[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:i}},SU=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||wU()}),yc=t=>(e,n)=>{let r=SU(e,t,n);return Kd(r.toasterId||xU(r.id))({type:2,toast:r}),r.id},Y=(t,e)=>yc("blank")(t,e);Y.error=yc("error");Y.success=yc("success");Y.loading=yc("loading");Y.custom=yc("custom");Y.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Kd(e)(n):eA(n)};Y.dismissAll=t=>Y.dismiss(void 0,t);Y.remove=(t,e)=>{let n={type:4,toastId:t};e?Kd(e)(n):eA(n)};Y.removeAll=t=>Y.remove(void 0,t);Y.promise=(t,e,n)=>{let r=Y.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?$h(e.success,s):void 0;return i?Y.success(i,{id:r,...n,...n==null?void 0:n.success}):Y.dismiss(r),s}).catch(s=>{let i=e.error?$h(e.error,s):void 0;i?Y.error(i,{id:r,...n,...n==null?void 0:n.error}):Y.dismiss(r)}),t};var CU=1e3,bU=(t,e="default")=>{let{toasts:n,pausedAt:r}=IU(t,e),s=O.useRef(new Map).current,i=O.useCallback((f,m=CU)=>{if(s.has(f))return;let _=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,_)},[]);O.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let C=(_.duration||0)+_.pauseDuration-(f-_.createdAt);if(C<0){_.visible&&Y.dismiss(_.id);return}return setTimeout(()=>Y.dismiss(_.id,e),C)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=O.useCallback(Kd(e),[e]),a=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=O.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=O.useCallback((f,m)=>{let{reverseOrder:_=!1,gutter:C=8,defaultPosition:A}=m||{},R=n.filter(w=>(w.position||A)===(f.position||A)&&w.height),I=R.findIndex(w=>w.id===f.id),x=R.filter((w,P)=>P<I&&w.visible).length;return R.filter(w=>w.visible).slice(..._?[x+1]:[0,x]).reduce((w,P)=>w+(P.height||0)+C,0)},[n]);return O.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:d}}},NU=Nr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,AU=Nr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RU=Nr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kU=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${NU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${AU} 0.15s ease-out forwards;
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
    animation: ${RU} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,PU=Nr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,DU=Fs("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${PU} 1s linear infinite;
`,OU=Nr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,LU=Nr`
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
}`,jU=Fs("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${OU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${LU} 0.2s ease-out forwards;
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
`,MU=Fs("div")`
  position: absolute;
`,VU=Fs("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,FU=Nr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,UU=Fs("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${FU} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,BU=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(UU,null,e):e:n==="blank"?null:O.createElement(VU,null,O.createElement(DU,{...r}),n!=="loading"&&O.createElement(MU,null,n==="error"?O.createElement(kU,{...r}):O.createElement(jU,{...r})))},$U=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zU=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,WU="0%{opacity:0;} 100%{opacity:1;}",qU="0%{opacity:1;} 100%{opacity:0;}",HU=Fs("div")`
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
`,GU=Fs("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,KU=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=YN()?[WU,qU]:[$U(n),zU(n)];return{animation:e?`${Nr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Nr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},QU=O.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?KU(t.position||e||"top-center",t.visible):{opacity:0},i=O.createElement(BU,{toast:t}),o=O.createElement(GU,{...t.ariaProps},$h(t.message,t));return O.createElement(HU,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):O.createElement(O.Fragment,null,i,o))});yU(O.createElement);var YU=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=O.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:i,className:e,style:n},s)},JU=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:YN()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},XU=Gd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ou=16,Qd=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=bU(n,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ou,left:ou,right:ou,bottom:ou,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(d=>{let f=d.position||e,m=u.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),_=JU(f,m);return O.createElement(YU,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?XU:"",style:_},d.type==="custom"?$h(d.message,d):s?s(d):O.createElement(QU,{toast:d,position:f}))}))};class ZU{static async updateCarrierLocation(e,n,r,s){try{const i=Ie.currentUser;if(!i)return!1;const o=Jr(this.db,`locations/active/${i.uid}/${e}`);return await al(o,{deliveryId:e,carrierId:i.uid,lat:n,lng:r,accuracy:s||null,timestamp:Date.now(),carrierName:i.displayName||"Unknown",carrierEmail:i.email}),!0}catch(i){return console.error("Error updating carrier location:",i),!1}}static async clearCarrierLocation(e){try{const n=Ie.currentUser;if(!n)return!1;const r=Jr(this.db,`locations/active/${n.uid}/${e}`);return await F3(r),!0}catch(n){return console.error("Error clearing carrier location:",n),!1}}static getLocationRef(e,n){return Jr(this.db,`locations/active/${e}/${n}`)}}jn(ZU,"db",NN());const e5=async(t,e,n)=>{try{const r=lt(we,"deliveries",t),s={status:e,updatedAt:rp(),statusHistory:AV({status:e,timestamp:new Date().toISOString(),location:n})};return e==="picked_up"?s.pickupTime=rp():e==="delivered"&&(s.deliveryTime=rp()),n&&(s.location=n),await on(r,s),{success:!0,message:`Delivery marked as ${e}`}}catch(r){throw console.error("Error updating delivery status:",r),new Error(r.message||"Failed to update delivery status")}},t5=t=>{const[e,n]=O.useState(!1),[r,s]=O.useState(null);return O.useEffect(()=>{},[t]),{carrier:r,loading:e}},tA=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(null),{carrier:s}=t5(),i=(s==null?void 0:s.currentLocation)||{latitude:0,longitude:0},o=(d,f)=>{const m={accepted:["picked_up"],picked_up:["in_transit","stuck"],in_transit:["delivered","stuck"],stuck:["in_transit"]};return m[d]?m[d].includes(f)?{valid:!0}:{valid:!1,message:`Cannot transition from ${d} to ${f}`}:{valid:!1,message:`Cannot update status from ${d}`}};return{updateStatus:async(d,f,m)=>{e(!0),r(null);try{if(m){const _=o(m,f);if(!_.valid)throw new Error(_.message||"Invalid status transition")}return await e5(d,f,i),e(!1),{success:!0,message:`Status updated to ${f}`}}catch(_){const C=_.message||"Failed to update status";throw r(C),e(!1),_}},loading:t,error:n,getAvailableStatuses:d=>{switch(d){case"accepted":return["picked_up"];case"picked_up":return["in_transit","stuck"];case"in_transit":return["delivered","stuck"];case"stuck":return["in_transit"];default:return[]}},getStatusInfo:d=>({picked_up:{label:"Picked Up",icon:"📦",color:"bg-blue-600",description:"Package collected from pickup location"},in_transit:{label:"In Transit",icon:"🚚",color:"bg-purple-600",description:"Package is on the way"},stuck:{label:"Stuck",icon:"⚠️",color:"bg-orange-600",description:"Facing delays or issues"},delivered:{label:"Delivered",icon:"✅",color:"bg-green-600",description:"Package delivered successfully"}})[d]||{label:d,icon:"📋",color:"bg-gray-600",description:""},validateStatusTransition:o}};function n5({delivery:t,onViewRoute:e,onNavigateToPickup:n,onStatusUpdate:r}){var I;const{updateStatus:s,loading:i,error:o,getAvailableStatuses:a,getStatusInfo:l}=tA(),[u,d]=O.useState(null),[f,m]=O.useState(!1);if(!t)return h.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8 text-center",children:[h.jsx("div",{className:"text-gray-400 text-6xl mb-4",children:"📦"}),h.jsx("h3",{className:"text-xl font-bold text-gray-700 mb-2",children:"No Active Job"}),h.jsx("p",{className:"text-gray-500",children:"You don't have any active delivery at the moment"})]});const _=t.status==="accepted",C=t.status==="assigned",A=async x=>{try{await s(t.id,x,t.status);const P=`✅ Delivery marked as ${{picked_up:"Picked Up",in_transit:"In Transit",stuck:"Stuck",delivered:"Delivered"}[x]}`;d(P),setTimeout(()=>d(null),3e3),r&&r(t.id,x)}catch(w){console.error("Status update failed:",w)}},R=a(t.status);return h.jsxs("div",{className:"bg-white rounded-xl shadow-lg overflow-hidden",children:[h.jsx("div",{className:`px-6 py-4 ${C?"bg-gradient-to-r from-yellow-50 to-yellow-100 border-b-2 border-yellow-300":_?"bg-gradient-to-r from-green-50 to-green-100 border-b-2 border-green-300":"bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-300"}`,children:h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Current Delivery"}),h.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[h.jsxs("p",{className:"text-sm text-gray-600",children:["Tracking: ",h.jsx("span",{className:"font-mono font-bold",children:t.trackingCode})]}),h.jsx("span",{className:`px-2 py-1 rounded-full text-xs font-bold ${C?"bg-yellow-200 text-yellow-800":_?"bg-green-200 text-green-800":"bg-blue-200 text-blue-800"}`,children:C?"⏳ Awaiting Acceptance":_?"✋ Accepted":"📦 In Progress"})]})]}),h.jsx("button",{onClick:()=>m(!f),className:"text-blue-600 hover:text-blue-800 text-sm font-medium",children:f?"Show Less":"More Details"})]})}),h.jsxs("div",{className:"p-6 space-y-4",children:[h.jsx("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-gray-700 font-medium",children:"Estimated Earnings"}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Complete delivery to earn"})]}),h.jsx("span",{className:"text-2xl font-bold text-green-600",children:li(t.earnings||t.estimatedEarnings||0)})]})}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-blue-50 rounded-xl p-4 border border-blue-200",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3",children:"📍"}),h.jsx("h4",{className:"font-semibold text-gray-800",children:"Pickup Location"})]}),h.jsxs("div",{className:"ml-13",children:[h.jsx("p",{className:"text-sm text-gray-700 font-medium",children:t.pickupAddress}),h.jsxs("div",{className:"mt-2 space-y-1",children:[h.jsxs("p",{className:"text-xs text-gray-500",children:["From: ",t.customerName]}),h.jsxs("p",{className:"text-xs text-gray-500",children:["Phone: ",t.customerPhone]}),t.pickupTime&&h.jsxs("p",{className:"text-xs text-green-600 font-medium",children:["Picked up: ",Zr(t.pickupTime.toDate())]})]})]})]}),h.jsxs("div",{className:"bg-green-50 rounded-xl p-4 border border-green-200",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold mr-3",children:"🏁"}),h.jsx("h4",{className:"font-semibold text-gray-800",children:"Delivery Location"})]}),h.jsxs("div",{className:"ml-13",children:[h.jsx("p",{className:"text-sm text-gray-700 font-medium",children:t.deliveryAddress}),h.jsxs("div",{className:"mt-2 space-y-1",children:[h.jsxs("p",{className:"text-xs text-gray-500",children:["To: ",t.recipientName]}),h.jsxs("p",{className:"text-xs text-gray-500",children:["Phone: ",t.recipientPhone]}),t.deliveryTime&&h.jsxs("p",{className:"text-xs text-green-600 font-medium",children:["Delivered: ",Zr(t.deliveryTime.toDate())]})]})]})]})]}),h.jsxs("div",{className:"bg-gray-50 rounded-xl p-4",children:[h.jsx("h4",{className:"font-semibold text-gray-800 mb-3",children:"Package Information"}),h.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Description"}),h.jsx("p",{className:"text-sm font-medium text-gray-800",children:t.packageDescription})]}),h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Weight"}),h.jsxs("p",{className:"text-sm font-medium text-gray-800",children:[t.packageWeight," kg"]})]}),h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Value"}),h.jsx("p",{className:"text-sm font-medium text-gray-800",children:li(t.packageValue||0)})]}),h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Payment"}),h.jsx("p",{className:"text-sm font-medium text-gray-800 capitalize",children:((I=t.paymentMethod)==null?void 0:I.replace("_"," "))||"Cash"})]})]})]}),f&&h.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 space-y-3",children:[h.jsx("h4",{className:"font-semibold text-gray-800",children:"Additional Details"}),t.deliveryInstructions&&h.jsxs("div",{className:"bg-yellow-50 rounded-lg p-3 border border-yellow-200",children:[h.jsx("p",{className:"text-xs font-semibold text-yellow-800 mb-1",children:"📝 Delivery Instructions"}),h.jsx("p",{className:"text-sm text-yellow-900",children:t.deliveryInstructions})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Created Date"}),h.jsx("p",{className:"text-sm font-medium",children:Zr(t.createdAt.toDate())})]}),t.estimatedDelivery&&h.jsxs("div",{className:"bg-white rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Estimated Delivery"}),h.jsx("p",{className:"text-sm font-medium",children:Zr(t.estimatedDelivery.toDate())})]})]})]}),t.route&&h.jsx("div",{className:"bg-blue-50 rounded-xl p-4 border border-blue-200",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-blue-700 font-semibold mb-1",children:"Route Details"}),h.jsxs("p",{className:"text-sm text-blue-900",children:[t.route.distance&&`${t.route.distance} km`,t.route.distance&&t.route.duration&&" • ",t.route.duration&&`${t.route.duration} min`]})]}),e&&h.jsxs("button",{onClick:()=>e(t),className:"px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-2",children:[h.jsx("span",{children:"🗺️"}),"View Route"]})]})}),_&&n&&h.jsxs("button",{onClick:()=>n(t),className:"w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2",children:[h.jsx("span",{children:"📍"}),"Navigate to Pickup Location"]}),C&&h.jsx("div",{className:"bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-center",children:h.jsx("p",{className:"text-sm text-yellow-900 font-semibold",children:"⚠️ Go to Jobs Tab to accept or decline this assignment"})}),R.length>0&&h.jsxs("div",{className:"bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 border",children:[h.jsxs("div",{className:"mb-4",children:[h.jsx("h4",{className:"font-semibold text-gray-800 mb-1",children:"Update Delivery Status"}),h.jsx("p",{className:"text-sm text-gray-600",children:"Update the current progress of this delivery"})]}),u&&h.jsx("div",{className:"mb-4 p-3 bg-green-100 text-green-700 rounded-lg border border-green-200",children:u}),o&&h.jsx("div",{className:"mb-4 p-3 bg-red-100 text-red-700 rounded-lg border border-red-200",children:o}),h.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:R.map(x=>{const w=l(x);return h.jsxs("button",{onClick:()=>A(x),disabled:i,className:`${w.color} text-white p-4 rounded-xl hover:opacity-90 disabled:opacity-50 transition flex flex-col items-center justify-center min-h-[100px]`,children:[h.jsx("span",{className:"text-2xl mb-2",children:w.icon}),h.jsx("span",{className:"font-semibold",children:w.label}),h.jsx("span",{className:"text-xs opacity-90 mt-1 text-center",children:w.description})]},x)})}),h.jsxs("div",{className:"mt-4 text-xs text-gray-500 text-center",children:["Current status: ",h.jsx("span",{className:"font-medium",children:t.status.replace("_"," ")})]})]}),t.status==="delivered"&&h.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-300 text-center",children:[h.jsx("div",{className:"text-4xl mb-3",children:"🎉"}),h.jsx("h4",{className:"font-bold text-green-800 text-lg mb-1",children:"Delivery Completed!"}),h.jsx("p",{className:"text-green-700",children:"Package successfully delivered to recipient"}),t.deliveryTime&&h.jsxs("p",{className:"text-sm text-green-600 mt-2",children:["Delivered on ",Zr(t.deliveryTime.toDate())]})]})]})]})}function _x({user:t,onNavigate:e}){const n=ad(),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState([]),[u,d]=O.useState(!0),[f,m]=O.useState(!1),[_,C]=O.useState(""),[A,R]=O.useState(!1),[I,x]=O.useState("inactive"),[w,P]=O.useState(!1),{stats:M,loading:U}=lU(),{isSharing:T,lastLocation:E,error:y,accuracy:S,toggleSharing:N,startSharing:k}=GN(i==null?void 0:i.id);O.useEffect(()=>{(async()=>{d(!0);try{const Q=await ye.getCarrierProfile();s(Q),Q!=null&&Q.status&&x(Q.status),Q!=null&&Q.shareLocation&&!T&&(console.log("🔄 Restoring location sharing from profile..."),k());const ge=await ye.getActiveDelivery();o(ge);const Ne=await ye.getDeliveries(5);l(Ne)}catch(Q){console.error("Error loading data:",Q),Y.error("Failed to load data")}finally{d(!1)}})();const G=ye.subscribeToActiveDelivery(o);return()=>G()},[]);const b=async F=>{if(i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)&&F==="inactive"){Y.error("⚠️ Cannot go offline while on a delivery");return}if(F==="busy"&&(i==null?void 0:i.status)!=="accepted"){Y.error("⚠️ Cannot mark as on delivery without accepting the job first");return}try{await ye.updateCarrierStatus(F,i==null?void 0:i.id)?(x(F),Y.success(`Status updated to ${F}`)):Y.error("Failed to update status")}catch(G){console.error("Error updating status:",G),Y.error("Failed to update status")}},se=async()=>{if(i)try{const F=Math.floor(1e3+Math.random()*9e3).toString();await ye.updateDeliveryStatus(i.id,"picked_up",F)?(C(F),m(!0),Y.success("Package picked up! OTP generated.")):Y.error("Failed to update delivery status")}catch(F){console.error("Error picking up package:",F),Y.error("Failed to pick up package")}},re=async()=>{if(!(!i||!_))try{await ye.verifyOTP(i.id,_)?(Y.success("OTP verified! Delivery completed."),m(!1),C(""),o(null)):Y.error("Invalid OTP code")}catch(F){console.error("Error verifying OTP:",F),Y.error("Failed to verify OTP")}},Ge=async()=>{try{T&&N(),await X2(Ie),n("/login")}catch(F){console.error("Logout error:",F),Y.error("Failed to logout")}},ot=i&&i.status!=="assigned";return u||U?h.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):h.jsxs("div",{className:"min-h-screen bg-gray-50 pb-24",children:[h.jsx(Qd,{position:"top-center"}),!T&&h.jsx("div",{className:"bg-red-50 border-b-2 border-red-300",children:h.jsxs("div",{className:"px-4 py-3 flex items-center gap-2",children:[h.jsx("span",{className:"text-red-600 text-2xl animate-pulse",children:"🔴"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-semibold text-red-900",children:"You are Offline"}),h.jsx("p",{className:"text-sm text-red-700",children:"Location sharing is disabled. Enable it to accept jobs and be visible to coordinators."})]})]})}),h.jsx("header",{className:"bg-white shadow-sm border-b sticky top-0 z-10",children:h.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"PTROS Carrier"}),h.jsxs("p",{className:"text-sm text-gray-500",children:["Welcome, ",(r==null?void 0:r.fullName)||t.email]})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("div",{className:`flex items-center gap-2 px-3 py-2 rounded-lg ${T?"bg-green-100":"bg-red-100"}`,children:[h.jsx("span",{className:`text-lg ${T?"animate-pulse text-green-600":"text-red-600"}`,children:T?"🟢":"🔴"}),h.jsx("span",{className:`text-xs font-semibold ${T?"text-green-700":"text-red-700"}`,children:T?"Online":"Offline"})]}),h.jsx("button",{onClick:()=>R(!0),className:`px-4 py-2 rounded-lg text-sm font-medium ${T?"bg-green-100 text-green-700":"bg-red-100 text-red-700 hover:bg-red-200"}`,children:T?"📍 Stop Sharing":"📍 Start Sharing"}),h.jsx("button",{onClick:Ge,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200",children:"Logout"})]})]})}),h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 mb-6",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Today's Earnings"}),h.jsx("div",{className:"text-2xl font-bold text-green-600",children:li(M.todayEarnings)})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Today's Deliveries"}),h.jsx("div",{className:"text-2xl font-bold text-blue-600",children:M.todayDeliveries})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Total Earnings"}),h.jsx("div",{className:"text-2xl font-bold text-purple-600",children:li(M.totalEarnings)})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-4",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Rating"}),h.jsxs("div",{className:"text-2xl font-bold text-yellow-600",children:[M.rating.toFixed(1)," ⭐"]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-4 mb-6",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h2",{className:"font-bold text-gray-800",children:"Your Status"}),h.jsx("div",{className:`px-3 py-1 rounded-full text-sm font-medium ${I==="active"?"bg-green-100 text-green-800":I==="busy"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:I==="active"?"🟢 Available":I==="busy"?"🟡 On Delivery":"⚫ Offline"})]}),h.jsxs("div",{className:"flex space-x-2",children:[h.jsx("button",{onClick:()=>b("active"),className:`flex-1 py-3 rounded-lg transition ${I==="active"?"bg-green-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"🟢 Available"}),h.jsx("button",{onClick:()=>b("busy"),className:`flex-1 py-3 rounded-lg transition ${I==="busy"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"🟡 On Delivery"}),h.jsx("button",{onClick:()=>b("inactive"),disabled:i?["picked_up","in_transit","out_for_delivery"].includes(i.status):!1,className:`flex-1 py-3 rounded-lg transition ${I==="inactive"?"bg-gray-600 text-white":"bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200"}`,title:i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)?"Cannot go offline during delivery":"",children:"⚫ Offline"})]}),I==="inactive"&&h.jsx("div",{className:"mt-3 bg-red-50 border border-red-200 rounded-lg p-3",children:h.jsxs("p",{className:"text-sm text-red-700",children:[h.jsx("span",{className:"font-semibold",children:"⚠️ You are Offline"}),` - You won't receive new job assignments. Click "🟢 Available" to go online.`]})})]}),i&&h.jsx("div",{className:"mb-6",children:h.jsx(n5,{delivery:i,onViewRoute:()=>P(!0),onNavigateToPickup:()=>{Y.success("Opening navigation to pickup location")}})}),i?h.jsxs("div",{className:"bg-white rounded-xl shadow mb-6 overflow-hidden",children:[h.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-lg font-bold",children:"Delivery Progress"}),h.jsxs("p",{className:"text-blue-100",children:["Status: ",i.status.replace("_"," ")]})]}),h.jsx("div",{className:"text-3xl",children:"📦"})]})}),h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"mb-2 flex justify-between text-sm",children:[h.jsx("span",{className:"text-gray-600",children:"Progress"}),h.jsxs("span",{className:"font-medium",children:[mx(i),"%"]})]}),h.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:h.jsx("div",{className:"bg-blue-600 h-2 rounded-full transition-all duration-500",style:{width:`${mx(i)}%`}})})]}),i.status==="assigned"&&h.jsxs("div",{className:"bg-yellow-50 rounded-lg p-4 mb-4 border-2 border-yellow-300",children:[h.jsx("p",{className:"text-yellow-900 font-semibold mb-2",children:"⏳ Assigned to You – Awaiting Your Acceptance"}),h.jsx("p",{className:"text-sm text-yellow-800 mb-3",children:"This job has been assigned to you by the coordinator. Accept to proceed with delivery."}),h.jsx("button",{onClick:()=>e==null?void 0:e("tasks"),className:"px-4 py-2 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700",children:"Go to Jobs Tab to Accept/Decline"})]}),h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-green-100 text-green-600":"bg-gray-100 text-gray-400"}`,children:["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?"✓":"1"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-medium",children:"Pickup Location"}),h.jsx("div",{className:"text-sm text-gray-600 truncate max-w-xs",children:i.pickupAddress})]})]}),i.status==="accepted"&&h.jsx("button",{onClick:se,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Mark as Picked Up"})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${["in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-green-100 text-green-600":"bg-gray-100 text-gray-400"}`,children:["in_transit","out_for_delivery","delivered"].includes(i.status)?"✓":"2"}),h.jsxs("div",{children:[h.jsx("div",{className:"font-medium",children:"Delivery Location"}),h.jsx("div",{className:"text-sm text-gray-600 truncate max-w-xs",children:i.deliveryAddress})]})]}),i.status==="picked_up"&&h.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Confirm Delivery"})]})]}),h.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[h.jsx("div",{className:"font-medium mb-2",children:"Package Details:"}),h.jsx("div",{className:"text-sm text-gray-600",children:i.packageDescription}),i.deliveryInstructions&&h.jsxs("div",{className:"mt-2 text-sm text-blue-600",children:["📝 ",i.deliveryInstructions]})]})]})]}):h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center mb-6",children:[h.jsx("div",{className:"text-6xl mb-4",children:"📦"}),h.jsx("h3",{className:"text-lg font-semibold text-gray-700 mb-2",children:"No Active Deliveries"}),h.jsx("p",{className:"text-gray-500 mb-6",children:I==="active"?"Browse available tasks to get started":"You'll be assigned deliveries when you're available"}),h.jsxs("div",{className:"flex gap-3 justify-center flex-wrap",children:[h.jsx("button",{onClick:()=>b("active"),className:"px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Set as Available"}),I==="active"&&e&&h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>e("tasks"),className:"px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"📋 View Available Tasks"}),h.jsx("button",{onClick:()=>e("deliveries"),className:"px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:"📦 View My Deliveries"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow",children:[h.jsx("div",{className:"p-4 border-b",children:h.jsx("h2",{className:"font-bold text-gray-800",children:"Recent Deliveries"})}),a.length===0?h.jsxs("div",{className:"p-8 text-center",children:[h.jsx("div",{className:"text-4xl mb-4",children:"📭"}),h.jsx("p",{className:"text-gray-500",children:"No completed deliveries yet"})]}):h.jsx("div",{className:"divide-y",children:a.map(F=>{var G;return h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"flex justify-between items-start mb-2",children:[h.jsxs("div",{children:[h.jsx("div",{className:"font-bold text-gray-800",children:F.trackingCode}),h.jsx("div",{className:"text-sm text-gray-600",children:F.customerName})]}),h.jsx("div",{className:"text-green-600 font-bold",children:li(F.earnings)})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("div",{className:"text-xs text-gray-500",children:Zr((G=F.deliveryTime)==null?void 0:G.toDate())}),h.jsxs("span",{className:`px-2 py-1 rounded-full text-xs ${uU(F.status)}`,children:[hU(F.status)," ",F.status.replace("_"," ")]})]})]},F.id)})})]})]}),f&&i&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:h.jsx("div",{className:"bg-white rounded-xl w-full max-w-sm",children:h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-xl font-bold mb-2",children:"Delivery OTP"}),h.jsx("p",{className:"text-gray-600 mb-4",children:"Share this OTP with the recipient to verify delivery"}),h.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"text-sm text-blue-700 mb-1",children:"OTP Code"}),h.jsx("div",{className:"text-3xl font-bold text-blue-800 tracking-widest",children:_||i.otpCode}),h.jsx("div",{className:"text-xs text-blue-600 mt-2",children:"Valid for this delivery only"})]})}),h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter OTP from recipient"}),h.jsx("input",{type:"text",value:_,onChange:F=>C(F.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full p-3 text-2xl text-center border border-gray-300 rounded-lg tracking-widest",placeholder:"0000",maxLength:4,autoFocus:!0})]}),h.jsxs("div",{className:"flex space-x-3",children:[h.jsx("button",{onClick:()=>{m(!1),C("")},className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Cancel"}),h.jsx("button",{onClick:re,disabled:_.length!==4,className:`flex-1 py-3 rounded-lg ${_.length===4?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Verify & Complete"})]})]})})}),A&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:h.jsx("div",{className:"bg-white rounded-xl w-full max-w-sm",children:h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-xl font-bold mb-4",children:"Location Sharing"}),h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"flex items-center mb-4",children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${T?"bg-green-100":"bg-gray-100"}`,children:h.jsx("span",{className:`text-2xl ${T?"text-green-600":"text-gray-400"}`,children:T?"📍":"🔍"})}),h.jsxs("div",{children:[h.jsx("div",{className:"font-medium",children:T?"Sharing Location":"Share Your Location"}),h.jsx("div",{className:"text-sm text-gray-500",children:T?"Your location is being shared with the coordinator":"Enable GPS to share your location in real-time"})]})]}),E&&h.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4",children:h.jsxs("div",{className:"text-sm text-blue-700",children:[h.jsx("div",{className:"font-medium",children:"Last Location:"}),h.jsxs("div",{children:[E.lat.toFixed(6),", ",E.lng.toFixed(6)]}),h.jsxs("div",{className:"text-xs",children:["Accuracy: ",S.toFixed(0)," meters"]}),h.jsxs("div",{className:"text-xs",children:["Updated: ",cU(E.timestamp)]})]})}),y&&h.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 mb-4",children:h.jsx("div",{className:"text-sm text-red-700",children:y})}),ot&&h.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4",children:h.jsxs("div",{className:"text-sm text-yellow-700",children:[h.jsx("span",{className:"font-medium",children:"⚠️ Note:"})," You're on an active delivery. Disabling location sharing may affect tracking."]})}),h.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4",children:h.jsxs("div",{className:"text-sm text-blue-700",children:[h.jsx("span",{className:"font-medium",children:"💡 Tip:"})," Location sharing uses GPS and may consume battery."]})})]}),h.jsxs("div",{className:"flex space-x-3",children:[h.jsx("button",{onClick:()=>R(!1),className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Close"}),T?h.jsx("button",{onClick:()=>{ot?window.confirm("⚠️ Are you sure? Disabling location sharing may affect tracking.")&&(N(),ye.updateShareLocation(!1),R(!1)):(N(),ye.updateShareLocation(!1),R(!1))},className:"flex-1 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Stop Sharing"}):h.jsx("button",{onClick:()=>{N(),ye.updateShareLocation(!0),R(!1)},className:"flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Start Sharing"})]})]})})}),w&&i&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto",children:[h.jsx("div",{className:"p-6 border-b sticky top-0 bg-white",children:h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("h3",{className:"text-xl font-bold",children:"Route Details"}),h.jsx("button",{onClick:()=>P(!1),className:"text-gray-500 hover:text-gray-700 text-2xl",children:"✕"})]})}),h.jsxs("div",{className:"p-6",children:[i.route?h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[h.jsx("p",{className:"text-sm text-blue-700 font-semibold",children:"Distance"}),h.jsxs("p",{className:"text-2xl font-bold text-blue-900",children:[i.route.distance||"?"," km"]})]}),h.jsxs("div",{className:"bg-green-50 rounded-lg p-4",children:[h.jsx("p",{className:"text-sm text-green-700 font-semibold",children:"Est. Time"}),h.jsxs("p",{className:"text-2xl font-bold text-green-900",children:[i.route.duration||"?"," min"]})]})]}),h.jsxs("div",{className:"border rounded-lg p-4",children:[h.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-3",children:"Pickup"}),h.jsx("p",{className:"text-gray-800",children:i.pickupAddress})]}),h.jsxs("div",{className:"border rounded-lg p-4",children:[h.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-3",children:"Delivery"}),h.jsx("p",{className:"text-gray-800",children:i.deliveryAddress})]}),i.route.polyline&&h.jsx("div",{className:"border rounded-lg p-4 bg-gray-50",children:h.jsx("p",{className:"text-sm text-gray-600",children:"📍 Full route details available in map view"})})]}):h.jsx("div",{className:"text-center py-8",children:h.jsx("p",{className:"text-gray-500",children:"Route details not available yet"})}),h.jsx("button",{onClick:()=>P(!1),className:"w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Close"})]})]})})]})}function r5(){const[t,e]=O.useState("assigned"),[n,r]=O.useState([]),[s,i]=O.useState([]),[o,a]=O.useState(!0),[l,u]=O.useState(null),[d,f]=O.useState(!1),{isSharing:m,startSharing:_}=GN();O.useEffect(()=>{a(!0),(async()=>{try{const U=await ye.getCarrierProfile();U!=null&&U.shareLocation&&!m&&(console.log("🔄 Restoring location sharing on AvailableTasks..."),_())}catch(U){console.error("Error restoring location sharing:",U)}})();const P=ye.subscribeToAssignedDeliveries(U=>{r(U),a(!1)}),M=ye.subscribeToAvailableTasks(U=>{i(U),a(!1)});return()=>{P(),M()}},[]);const C=async w=>{if(!m){f(!0);return}u(w);try{await ye.acceptAssignedDelivery(w,m)?(Y.success("✅ Job accepted! Check dashboard for details."),r(M=>M.filter(U=>U.id!==w))):Y.error("Failed to accept job")}catch(P){console.error("Error accepting job:",P),Y.error("Error accepting job")}finally{u(null)}},A=async w=>{u(w);try{await ye.declineAssignedDelivery(w)?(Y.success("Job declined"),r(M=>M.filter(U=>U.id!==w))):Y.error("Failed to decline job")}catch(P){console.error("Error declining job:",P),Y.error("Error declining job")}finally{u(null)}},R=async w=>{u(w);try{await ye.acceptTask(w)?(Y.success("✅ Task accepted! You are now on this delivery."),i(M=>M.filter(U=>U.id!==w))):Y.error("Failed to accept task")}catch(P){console.error("Error accepting task:",P),Y.error("Error accepting task")}finally{u(null)}};if(o)return h.jsx("div",{className:"min-h-screen bg-gray-50 p-4 flex items-center justify-center",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Loading tasks..."})]})});const I=n.length,x=s.length;return h.jsxs("div",{className:"min-h-screen bg-gray-50 pb-24",children:[h.jsx(Qd,{position:"top-center"}),h.jsx("div",{className:"bg-white shadow-sm border-b sticky top-0 z-10",children:h.jsxs("div",{className:"px-4 py-4",children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Jobs & Tasks"}),h.jsxs("div",{className:"flex space-x-2",children:[h.jsxs("button",{onClick:()=>e("assigned"),className:`px-4 py-2 rounded-lg font-medium transition ${t==="assigned"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["📌 Assigned to You (",I,")"]}),h.jsxs("button",{onClick:()=>e("available"),className:`px-4 py-2 rounded-lg font-medium transition ${t==="available"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["📭 Available Tasks (",x,")"]})]})]})}),h.jsxs("div",{className:"p-4",children:[t==="assigned"&&h.jsx("div",{children:I===0?h.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 text-center",children:[h.jsx("div",{className:"text-4xl mb-4",children:"📌"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No assigned jobs"}),h.jsx("p",{className:"text-gray-600",children:"When coordinator assigns you a job, it will appear here."})]}):h.jsx("div",{className:"space-y-4",children:n.map(w=>h.jsxs("div",{className:"bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border-l-4 border-yellow-500",children:[w.status==="assigned"&&h.jsxs("div",{className:"bg-yellow-50 rounded p-3 mb-4 border border-yellow-200",children:[h.jsx("p",{className:"text-sm text-yellow-900 font-semibold",children:"⏳ This job has been assigned to you. Accept to proceed."}),!m&&h.jsxs("p",{className:"text-xs text-yellow-700 mt-2",children:["📍 ",h.jsx("strong",{children:"Location sharing required"})," to accept this job"]})]}),h.jsxs("div",{className:"flex justify-between items-start mb-3",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:w.trackingCode}),h.jsx("span",{className:`text-xs font-bold px-2 py-1 rounded ${w.status==="assigned"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:w.status==="assigned"?"⏳ Awaiting Acceptance":"✅ Accepted"})]}),h.jsx("h3",{className:"font-semibold text-gray-800",children:w.customerName||"Unknown Customer"})]}),h.jsxs("div",{className:"text-right",children:[h.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",w.earnings||w.estimatedEarnings||0]}),h.jsx("p",{className:"text-xs text-gray-500",children:"Payment"})]})]}),h.jsxs("div",{className:"bg-gray-50 rounded p-3 mb-3",children:[h.jsxs("p",{className:"text-sm text-gray-700 mb-2",children:[h.jsx("strong",{children:"📦 Package:"})," ",w.packageDescription]}),w.packageWeight&&h.jsxs("p",{className:"text-sm text-gray-600",children:[h.jsx("strong",{children:"⚖️ Weight:"})," ",w.packageWeight,"kg"]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"📍 Pickup"}),h.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.pickupAddress})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"🏁 Delivery"}),h.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.deliveryAddress})]})]}),w.deliveryInstructions&&h.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[h.jsx("p",{className:"text-xs font-semibold text-blue-800 mb-1",children:"📝 Instructions:"}),h.jsx("p",{className:"text-sm text-blue-700",children:w.deliveryInstructions})]}),h.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[h.jsxs("span",{children:["📞 ",w.recipientPhone]}),w.recipientName&&h.jsxs("span",{children:["👤 ",w.recipientName]})]}),w.status==="assigned"?h.jsxs("div",{className:"flex gap-2",children:[h.jsx("button",{onClick:()=>C(w.id),disabled:l===w.id||!m,className:"flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===w.id?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):m?h.jsx(h.Fragment,{children:"✅ Accept Job"}):h.jsx(h.Fragment,{children:"📍 Enable Location to Accept"})}),h.jsx("button",{onClick:()=>A(w.id),disabled:l===w.id,className:"flex-1 py-3 bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-red-700 font-semibold rounded-lg transition",children:"❌ Decline"})]}):h.jsx("div",{className:"bg-green-50 p-3 rounded border border-green-200 text-center",children:h.jsx("p",{className:"text-sm text-green-900 font-semibold",children:"✅ You have accepted this job"})})]},w.id))})}),t==="available"&&h.jsx("div",{children:x===0?h.jsxs("div",{className:"bg-white rounded-lg shadow-sm p-8 text-center",children:[h.jsx("div",{className:"text-4xl mb-4",children:"📭"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No available tasks"}),h.jsx("p",{className:"text-gray-600",children:"Check back soon for new delivery opportunities!"})]}):h.jsx("div",{className:"space-y-4",children:s.map(w=>h.jsxs("div",{className:"bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border-l-4 border-blue-500",children:[h.jsxs("div",{className:"flex justify-between items-start mb-3",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center gap-2 mb-1",children:h.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:w.trackingCode})}),h.jsx("h3",{className:"font-semibold text-gray-800",children:w.customerName||"Unknown Customer"})]}),h.jsxs("div",{className:"text-right",children:[h.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",w.estimatedEarnings||0]}),h.jsx("p",{className:"text-xs text-gray-500",children:"Estimated pay"})]})]}),h.jsxs("div",{className:"bg-gray-50 rounded p-3 mb-3",children:[h.jsxs("p",{className:"text-sm text-gray-700 mb-2",children:[h.jsx("strong",{children:"📦 Package:"})," ",w.packageDescription]}),w.packageWeight&&h.jsxs("p",{className:"text-sm text-gray-600",children:[h.jsx("strong",{children:"⚖️ Weight:"})," ",w.packageWeight,"kg"]}),w.packageValue&&h.jsxs("p",{className:"text-sm text-gray-600",children:[h.jsx("strong",{children:"💎 Value:"})," L",w.packageValue]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"📍 Pickup"}),h.jsx("p",{className:"text-sm font-medium text-gray-800",children:w.pickupAddress})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"🏁 Delivery"}),h.jsx("p",{className:"text-sm font-medium text-gray-800",children:w.deliveryAddress})]})]}),w.deliveryInstructions&&h.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[h.jsx("p",{className:"text-xs font-semibold text-blue-800 mb-1",children:"Instructions:"}),h.jsx("p",{className:"text-sm text-blue-700",children:w.deliveryInstructions})]}),h.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[h.jsxs("span",{children:["📞 ",w.customerPhone]}),w.recipientName&&h.jsxs("span",{children:["👤 ",w.recipientName]})]}),h.jsx("button",{onClick:()=>R(w.id),disabled:l===w.id,className:"w-full py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===w.id?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):h.jsx(h.Fragment,{children:"✅ Accept This Task"})})]},w.id))})}),d&&h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:h.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-sm w-full p-6",children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("div",{className:"text-5xl mb-4",children:"📍"}),h.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"Enable Location Sharing"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Location sharing is required to accept assigned jobs. This allows the coordinator to track your delivery progress."})]}),h.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:h.jsxs("p",{className:"text-sm text-blue-800",children:[h.jsx("span",{className:"font-semibold",children:"What data is shared?"}),h.jsx("br",{}),"Your real-time location while on deliveries. You can disable it anytime."]})}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>f(!1),className:"flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition",children:"Not Now"}),h.jsx("button",{onClick:()=>{_(),f(!1),Y.success("📍 Location sharing enabled! You can now accept jobs.")},className:"flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition",children:"Enable Location"})]})]})})]})]})}function s5(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[s,i]=O.useState("active"),[o,a]=O.useState(!1),[l,u]=O.useState(null),[d,f]=O.useState(""),[m,_]=O.useState(!1),[C,A]=O.useState(null),[R,I]=O.useState(null),{updateStatus:x,getAvailableStatuses:w,getStatusInfo:P}=tA();O.useEffect(()=>{const y=Ie.currentUser;if(!y){r(!1);return}const S=vn(yn(we,"deliveries"),tt("carrierId","==",y.uid),Qs("createdAt","desc")),N=tl(S,k=>{const b=[];k.forEach(se=>{var Ge,ot,F;const re=se.data();b.push({id:se.id,customerId:re.customerId,carrierId:re.carrierId,carrierName:re.carrierName||"",customerName:re.customerName||"Unknown",customerPhone:re.customerPhone||"",deliveryAddress:re.deliveryAddress||"",pickupAddress:re.pickupAddress||"",status:re.status||"pending",createdAt:((Ge=re.createdAt)==null?void 0:Ge.toDate())||new Date,assignedAt:(ot=re.assignedAt)==null?void 0:ot.toDate(),deliveryDate:(F=re.deliveryDate)==null?void 0:F.toDate(),distance:re.distance||0,estimatedEarnings:re.estimatedEarnings||0,earnings:re.earnings||0,proofOfDelivery:re.proofOfDelivery,trackingCode:re.trackingCode||`TRK${se.id.slice(0,8).toUpperCase()}`,packageDescription:re.packageDescription||"No description",packageWeight:re.packageWeight||0,recipientName:re.recipientName||re.customerName,recipientPhone:re.recipientPhone||re.customerPhone,deliveryInstructions:re.deliveryInstructions})}),e(b),r(!1)},k=>{console.error("Error loading deliveries:",k),Y.error("Failed to load deliveries"),r(!1)});return()=>N()},[]);const M=t.filter(y=>s==="active"?["assigned","accepted","picked_up","in_transit","stuck"].includes(y.status):s==="completed"?y.status==="delivered":!0),U=async(y,S)=>{A(y);try{const N=t.find(k=>k.id===y);if(!N)throw new Error("Delivery not found");await x(y,S,N.status),Y.success(`✅ Status updated to ${S.replace("_"," ")}`),e(k=>k.map(b=>b.id===y?{...b,status:S}:b))}catch(N){console.error("Error updating delivery status:",N),Y.error(N.message||"Failed to update status")}finally{A(null)}},T=async()=>{var y;if(!l||!d){Y.error("Please enter OTP");return}if(!((y=l.proofOfDelivery)!=null&&y.otp)){Y.error("No OTP set for this delivery");return}if(d!==l.proofOfDelivery.otp){Y.error("Invalid OTP. Please try again."),f("");return}_(!0);try{await U(l.id,"delivered"),Y.success("✅ Delivery completed successfully!"),a(!1),f(""),u(null),t.filter(N=>["assigned","accepted","picked_up","in_transit","stuck"].includes(N.status)&&N.id!==l.id).length===0&&(await ye.updateCarrierStatus("active"),Y.success("Status updated to Active"))}catch(S){console.error("Error completing delivery:",S),Y.error("Failed to complete delivery")}finally{_(!1)}},E=y=>{const S="px-3 py-1 rounded-full text-xs font-bold";switch(y){case"pending":return h.jsx("span",{className:`${S} bg-gray-100 text-gray-800`,children:"⏳ Pending"});case"assigned":return h.jsx("span",{className:`${S} bg-blue-100 text-blue-800`,children:"📍 Assigned"});case"accepted":return h.jsx("span",{className:`${S} bg-indigo-100 text-indigo-800`,children:"✋ Accepted"});case"picked_up":return h.jsx("span",{className:`${S} bg-blue-200 text-blue-800`,children:"📦 Picked Up"});case"in_transit":return h.jsx("span",{className:`${S} bg-purple-100 text-purple-800`,children:"🚚 In Transit"});case"stuck":return h.jsx("span",{className:`${S} bg-orange-100 text-orange-800`,children:"⚠️ Stuck"});case"delivered":return h.jsx("span",{className:`${S} bg-green-100 text-green-800`,children:"✅ Delivered"});default:return h.jsx("span",{className:`${S} bg-gray-100 text-gray-800`,children:y})}};return n?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):h.jsxs("div",{className:"min-h-screen bg-gray-50 p-4 md:p-6",children:[h.jsx(Qd,{position:"top-right"}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Deliveries"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your active and completed deliveries"})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-4 md:p-6 mb-6",children:[h.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[h.jsxs("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-lg transition ${s==="active"?"bg-blue-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Active (",t.filter(y=>["assigned","accepted","picked_up","in_transit","stuck"].includes(y.status)).length,")"]}),h.jsxs("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-lg transition ${s==="completed"?"bg-green-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Completed (",t.filter(y=>y.status==="delivered").length,")"]}),h.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg transition ${s==="all"?"bg-gray-600 text-white shadow-md":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["All (",t.length,")"]})]}),h.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"bg-blue-50 rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-blue-700 font-semibold",children:"Total Earnings"}),h.jsx("p",{className:"text-lg font-bold text-blue-900",children:li(t.reduce((y,S)=>y+(S.earnings||0),0))})]}),h.jsxs("div",{className:"bg-green-50 rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-green-700 font-semibold",children:"Active"}),h.jsx("p",{className:"text-lg font-bold text-green-900",children:t.filter(y=>["assigned","accepted","picked_up","in_transit","stuck"].includes(y.status)).length})]}),h.jsxs("div",{className:"bg-purple-50 rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-purple-700 font-semibold",children:"Completed"}),h.jsx("p",{className:"text-lg font-bold text-purple-900",children:t.filter(y=>y.status==="delivered").length})]}),h.jsxs("div",{className:"bg-orange-50 rounded-lg p-3",children:[h.jsx("p",{className:"text-xs text-orange-700 font-semibold",children:"Total"}),h.jsx("p",{className:"text-lg font-bold text-orange-900",children:t.length})]})]})]}),M.length===0?h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[h.jsx("div",{className:"text-6xl mb-4",children:"📦"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No deliveries found"}),h.jsx("p",{className:"text-gray-500",children:s==="active"?"No active deliveries at the moment":s==="completed"?"You haven't completed any deliveries yet":"You don't have any deliveries"})]}):h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:M.map(y=>{const S=w(y.status),N=R===y.id;return h.jsxs("div",{className:"bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition",children:[h.jsx("div",{className:"p-4 border-b bg-gradient-to-r from-gray-50 to-gray-100",children:h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[E(y.status),h.jsx("span",{className:"text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border",children:y.trackingCode})]}),h.jsx("h3",{className:"font-bold text-gray-800",children:y.customerName})]}),h.jsxs("div",{className:"text-right",children:[h.jsx("div",{className:"text-xl font-bold text-green-600",children:li(y.earnings||y.estimatedEarnings||0)}),h.jsx("p",{className:"text-xs text-gray-500",children:"Earnings"})]})]})}),h.jsx("div",{className:"p-4",children:h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex items-start",children:[h.jsx("span",{className:"text-blue-600 mr-2",children:"📍"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("p",{className:"text-xs text-gray-500",children:"Pickup"}),h.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:y.pickupAddress})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("span",{className:"text-green-600 mr-2",children:"🏁"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("p",{className:"text-xs text-gray-500",children:"Delivery"}),h.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:y.deliveryAddress})]})]})]}),h.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[h.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-1",children:"Package"}),h.jsxs("div",{className:"flex justify-between text-sm",children:[h.jsx("span",{className:"text-gray-600 truncate mr-2",children:y.packageDescription}),y.packageWeight>0&&h.jsxs("span",{className:"font-medium whitespace-nowrap",children:[y.packageWeight," kg"]})]})]}),N&&h.jsxs("div",{className:"pt-3 border-t space-y-3",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Recipient"}),h.jsx("p",{className:"text-sm font-medium",children:y.recipientName}),h.jsx("p",{className:"text-sm text-gray-600",children:y.recipientPhone})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Created"}),h.jsx("p",{className:"text-sm",children:Zr(y.createdAt)})]})]}),y.deliveryInstructions&&h.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[h.jsx("p",{className:"text-xs font-semibold text-yellow-800 mb-1",children:"📝 Instructions"}),h.jsx("p",{className:"text-sm text-yellow-900",children:y.deliveryInstructions})]}),y.distance>0&&h.jsxs("div",{className:"flex items-center justify-between text-sm",children:[h.jsx("span",{className:"text-gray-600",children:"Distance:"}),h.jsxs("span",{className:"font-medium",children:[y.distance.toFixed(1)," km"]})]})]}),S.length>0&&h.jsx("div",{className:"pt-3 border-t",children:h.jsxs("div",{className:"mb-2",children:[h.jsx("p",{className:"text-xs text-gray-500 font-medium mb-1",children:"Update Status"}),h.jsx("div",{className:"flex flex-wrap gap-2",children:S.map(k=>{const b=P(k);return h.jsxs("button",{onClick:()=>U(y.id,k),disabled:C===y.id,className:`px-3 py-2 rounded-lg text-white text-xs font-medium transition ${b.color} hover:opacity-90 disabled:opacity-50 flex items-center gap-1`,children:[h.jsx("span",{children:b.icon}),h.jsx("span",{children:b.label})]},k)})})]})}),y.status==="in_transit"&&!S.includes("delivered")&&h.jsxs("button",{onClick:()=>{u(y),a(!0)},className:"w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-md transition flex items-center justify-center gap-2",children:[h.jsx("span",{children:"✅"}),"Complete Delivery"]})]})}),h.jsxs("div",{className:"px-4 py-3 bg-gray-50 border-t flex justify-between items-center",children:[h.jsxs("button",{onClick:()=>I(N?null:y.id),className:"text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1",children:[h.jsx("span",{children:N?"▲":"▼"}),N?"Show Less":"More Details"]}),h.jsx("div",{className:"text-xs text-gray-500",children:y.assignedAt&&`Assigned: ${Zr(y.assignedAt)}`})]})]},y.id)})}),o&&l&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:h.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-md",children:h.jsxs("div",{className:"p-6",children:[h.jsxs("div",{className:"flex justify-between items-start mb-6",children:[h.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Verify Delivery OTP"}),h.jsx("button",{onClick:()=>{a(!1),f(""),u(null)},className:"text-gray-400 hover:text-gray-600 text-2xl",children:"✕"})]}),h.jsxs("div",{className:"mb-6",children:[h.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[h.jsxs("p",{className:"text-blue-800 font-medium text-sm",children:["📍 ",l.deliveryAddress]}),h.jsx("p",{className:"text-blue-700 text-xs mt-2",children:"Ask the customer for their OTP code"})]}),h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Customer OTP Code"}),h.jsx("input",{type:"text",placeholder:"Enter 4-digit OTP",maxLength:4,value:d,onChange:y=>f(y.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500",autoFocus:!0}),h.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"The customer will provide this code from their delivery notification"})]}),h.jsxs("div",{className:"flex space-x-4",children:[h.jsx("button",{onClick:()=>{a(!1),f(""),u(null)},className:"flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium",children:"Cancel"}),h.jsx("button",{onClick:T,disabled:m||d.length!==4,className:`flex-1 px-4 py-3 rounded-lg font-medium ${d.length===4&&!m?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:m?h.jsxs("span",{className:"flex items-center justify-center",children:[h.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"✓ Complete Delivery"})]})]})})}),M.length>0&&h.jsx("div",{className:"mt-8 bg-white rounded-xl shadow p-4",children:h.jsxs("div",{className:"flex flex-wrap justify-between items-center",children:[h.jsxs("div",{className:"text-sm text-gray-600",children:["Showing"," ",h.jsx("span",{className:"font-bold text-gray-800",children:M.length})," ","of ",h.jsx("span",{className:"font-bold text-gray-800",children:t.length})," ","deliveries"]}),h.jsxs("div",{className:"text-sm text-gray-600",children:["Last updated: ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})})]})}function i5({user:t}){const[e,n]=O.useState("dashboard"),r=()=>{switch(e){case"dashboard":return h.jsx(_x,{user:t,onNavigate:n});case"tasks":return h.jsx(r5,{});case"deliveries":return h.jsx(s5,{});default:return h.jsx(_x,{user:t,onNavigate:n})}};return h.jsxs("div",{children:[r(),h.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50",children:h.jsxs("div",{className:"max-w-full mx-auto flex justify-around",children:[h.jsx("button",{onClick:()=>n("dashboard"),className:`flex-1 py-3 text-center text-sm font-medium transition ${e==="dashboard"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:"📊 Dashboard"}),h.jsx("button",{onClick:()=>n("deliveries"),className:`flex-1 py-3 text-center text-sm font-medium transition ${e==="deliveries"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:"📦 My Deliveries"}),h.jsx("button",{onClick:()=>n("tasks"),className:`flex-1 py-3 text-center text-sm font-medium transition ${e==="tasks"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:"📋 Available Tasks"})]})})]})}const mp="carrier";function o5(){const[t,e]=O.useState(!0),[n,r]=O.useState(null),[s,i]=O.useState(null);return O.useEffect(()=>{const o=J2(Ie,async a=>{var l;if(a){const u=await Ah(lt(we,"users",a.uid)),d=u.exists()?(l=u.data())==null?void 0:l.role:null;i(d),r(a)}else r(null),i(null);e(!1)});return()=>o()},[]),h.jsxs(h.Fragment,{children:[t&&h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:h.jsx("p",{className:"text-2xl font-semibold text-gray-700",children:"Loading PTROS..."})}),!t&&!n&&h.jsx(HN,{}),!t&&n&&s!==mp&&h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:h.jsxs("div",{className:"text-center p-10",children:[h.jsx("h1",{className:"text-5xl font-bold text-red-600 mb-6",children:"Access Denied"}),h.jsxs("p",{className:"text-xl mb-4",children:["This portal is for ",h.jsxs("strong",{children:[mp,"s"]})," only."]}),h.jsxs("p",{className:"text-lg",children:["You are logged in with role: ",h.jsx("strong",{children:s||"none"})]}),h.jsx("button",{onClick:()=>Ie.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===mp&&h.jsx(i5,{user:n}),h.jsx(Qd,{})]})}function a5(){const t=ad(),e=O.useRef(null),[n,r]=O.useState({email:"",password:"",confirmPassword:"",fullName:"",phone:"",whatsapp:"",address:"",city:"Maseru",vehicleType:"",licensePlate:"",idNumber:"",profilePicture:null,acceptTerms:!1}),[s,i]=O.useState(!1),[o,a]=O.useState(""),[l,u]=O.useState(1),[d,f]=O.useState(null),[m,_]=O.useState(!1),C=y=>new Promise((S,N)=>{const k=new FileReader;k.onload=b=>{var re;const se=new Image;se.src=(re=b.target)==null?void 0:re.result,se.onload=()=>{const Ge=document.createElement("canvas"),ot=Ge.getContext("2d");if(!ot){N(new Error("Could not get canvas context"));return}const F=200;Ge.width=F,Ge.height=F;const G=se.width,Q=se.height,ge=Math.min(G,Q),Ne=(G-ge)/2,nr=(Q-ge)/2;ot.drawImage(se,Ne,nr,ge,ge,0,0,F,F),Ge.toBlob(Rt=>{if(Rt){const Qt=`profile_${Date.now()}.jpg`,Dn=new File([Rt],Qt,{type:"image/jpeg",lastModified:Date.now()});S(Dn)}else N(new Error("Failed to create image blob"))},"image/jpeg",.85)},se.onerror=()=>N(new Error("Failed to load image"))},k.onerror=()=>N(new Error("Failed to read file")),k.readAsDataURL(y)}),A=async()=>{console.log("🧪 Testing Firebase Storage...");try{const y=`Test upload at ${new Date().toISOString()}`,S=new Blob([y],{type:"text/plain"}),N=new File([S],"test.txt");console.log("📤 Uploading test file...");const k=hx(dx,"carriers/test_upload.txt");await cx(k,N);const b=await ux(k);console.log("✅ Storage test successful!"),console.log("📎 Download URL:",b),alert(`✅ Storage test successful!
File uploaded to: carriers/test_upload.txt`)}catch(y){console.error("❌ Storage test failed:",y),alert(`❌ Storage test failed:
${y.code}
${y.message}`)}},R=async y=>{var b;const{name:S,value:N,type:k}=y.target;if(k==="checkbox"){const se=y.target.checked;r(re=>({...re,[S]:se}))}else if(k==="file"){const se=(b=y.target.files)==null?void 0:b[0];if(se){_(!0),a("");try{if(!["image/jpeg","image/jpg","image/png","image/webp","image/gif"].includes(se.type)){a("Please upload an image file (JPEG, PNG, WebP, GIF)"),_(!1);return}if(se.size>5*1024*1024){a("Image size should be less than 5MB"),_(!1);return}console.log("🖼️ Processing image...");const Ge=await C(se);if(console.log("✅ Image processed successfully"),console.log("Original size:",se.size,"bytes"),console.log("Processed size:",Ge.size,"bytes"),Ge.size===0)throw new Error("Processed image is empty");r(F=>({...F,profilePicture:Ge}));const ot=new FileReader;ot.onloadend=()=>{f(ot.result),_(!1)},ot.readAsDataURL(Ge)}catch(re){console.error("Image processing error:",re),a("Failed to process image. Please try another image."),_(!1)}}}else r(se=>({...se,[S]:N}))},I=()=>{r(y=>({...y,profilePicture:null})),f(null),e.current&&(e.current.value="")},x=()=>n.profilePicture?n.fullName.trim()?n.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?n.password.length<8?(a("Password must be at least 8 characters"),!1):n.password!==n.confirmPassword?(a("Passwords do not match"),!1):!0:(a("Valid email is required"),!1):(a("Full name is required"),!1):(a("Profile picture is required"),!1),w=()=>n.phone.match(/^\+?[0-9\s\-]{10,}$/)?n.address.trim()?!0:(a("Physical address is required"),!1):(a("Valid phone number is required"),!1),P=()=>{a(""),!(l===1&&!x())&&(l===2&&!w()||u(l+1))},M=()=>{a(""),u(l-1)},U=async y=>{if(y.preventDefault(),i(!0),a(""),console.log("🚀 Starting registration process..."),!n.acceptTerms){a("You must accept the terms and conditions"),i(!1);return}try{console.log("👤 Step 1: Creating Firebase Auth user...");const N=(await q2(Ie,n.email,n.password)).user.uid;if(console.log("✅ Auth user created. User ID:",N),!n.profilePicture)throw new Error("Profile picture is required");if(console.log("📤 Step 2: Uploading profile picture..."),console.log("File details:",{name:n.profilePicture.name,size:n.profilePicture.size,type:n.profilePicture.type}),n.profilePicture.size===0)throw new Error("Profile picture file is empty (0 bytes)");const k=`carriers/${N}/profile.jpg`;console.log("Storage path:",k);const b=hx(dx,k);console.log("Uploading file to Firebase Storage..."),await cx(b,n.profilePicture),console.log("✅ File uploaded successfully!"),console.log("🔗 Getting download URL...");const se=await ux(b);console.log("✅ Download URL obtained"),console.log("💾 Saving user data to Firestore..."),await OV(lt(we,"users",N),{email:n.email,role:"carrier",fullName:n.fullName,phone:n.phone,whatsapp:n.whatsapp||n.phone,address:n.address,city:n.city,country:"Lesotho",vehicleType:n.vehicleType||"Not specified",licensePlate:n.licensePlate||"Not specified",idNumber:n.idNumber||"Not specified",photoURL:se,isApproved:!1,status:"pending",earnings:0,completedDeliveries:0,rating:0,createdAt:new Date,updatedAt:new Date,registrationStep:"completed",hasProfilePicture:!0}),console.log("✅ Firestore document saved!"),alert(`✅ Registration Successful!

Your application has been submitted. Please wait for coordinator approval.

Your profile picture has been uploaded successfully.`),console.log("🎉 Registration complete! Redirecting to login..."),t("/login")}catch(S){if(console.error("❌ Registration error:",S),S.code==="auth/email-already-in-use")try{const N=await K2(Ie,n.email);console.log("Existing sign-in methods for email:",N),N.length===0?a("This email is already registered. Please login or use a different email."):a(`This email is already registered. Sign-in methods: ${N.join(", ")}. If you used a password, try signing in or reset your password from the login screen.`)}catch(N){console.error("Error fetching sign-in methods:",N),a("This email is already registered. Please login or use a different email.")}else S.code==="auth/weak-password"?a("Password is too weak. Use at least 8 characters with letters and numbers."):S.code==="auth/invalid-email"?a("Invalid email address. Please enter a valid email."):S.code==="storage/unknown"?a("Storage error. Please check if Firebase Storage is enabled."):S.code==="storage/unauthorized"?a("Storage permission denied. Please check Firebase Storage rules."):a(S.message||"Registration failed. Please try again.")}finally{i(!1)}},T=["Maseru","Teyateyaneng","Mafeteng","Hlotse","Mohale's Hoek","Maputsoe","Qacha's Nek","Quthing","Butha-Buthe","Mokhotlong","Thaba-Tseka","Semonkong","Roma"],E=["Motorcycle","Car","Van","Pickup Truck","Bicycle","Scooter","Other"];return h.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4",children:h.jsxs("div",{className:"max-w-4xl mx-auto",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx(wu,{to:"/",className:"inline-block mb-4",children:h.jsxs("div",{className:"flex items-center justify-center gap-2",children:[h.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),h.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]})}),h.jsx("h2",{className:"text-2xl font-semibold text-gray-700",children:"Join Our Delivery Network"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Register as a carrier and start earning today"})]}),h.jsxs("div",{className:"mb-8",children:[h.jsxs("div",{className:"flex justify-between items-center mb-2",children:[h.jsx("div",{className:`text-sm font-medium ${l>=1?"text-blue-600":"text-gray-400"}`,children:"1. Account"}),h.jsx("div",{className:`text-sm font-medium ${l>=2?"text-blue-600":"text-gray-400"}`,children:"2. Contact"}),h.jsx("div",{className:`text-sm font-medium ${l>=3?"text-blue-600":"text-gray-400"}`,children:"3. Vehicle"}),h.jsx("div",{className:`text-sm font-medium ${l>=4?"text-blue-600":"text-gray-400"}`,children:"4. Review"})]}),h.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:h.jsx("div",{className:"h-full bg-blue-600 rounded-full transition-all duration-300",style:{width:`${(l-1)*33.33}%`}})})]}),h.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[o&&h.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 m-6",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-red-500",children:"⚠️"})}),h.jsxs("div",{className:"ml-3",children:[h.jsx("p",{className:"text-red-700",children:o}),o.includes("already registered")&&h.jsx(wu,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium text-sm block mt-1",children:"Click here to login instead"})]})]})}),h.jsxs("form",{onSubmit:U,children:[l===1&&h.jsxs("div",{className:"p-8",children:[h.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Account Information"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Profile Picture *",h.jsx("span",{className:"text-red-500 ml-1",children:"(Required)"})]}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("div",{className:"flex-shrink-0",children:m?h.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"}),h.jsx("span",{className:"text-xs text-gray-500 mt-2 block",children:"Processing..."})]})}):d?h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:d,alt:"Profile preview",className:"w-24 h-24 rounded-full object-cover border-2 border-blue-500",style:{objectFit:"cover"}}),h.jsx("button",{type:"button",onClick:I,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600",children:"×"})]}):h.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:h.jsxs("div",{className:"text-center",children:[h.jsx("span",{className:"text-gray-400 block",children:"Upload Photo"}),h.jsx("span",{className:"text-xs text-red-500 block mt-1",children:"Required"})]})})}),h.jsxs("div",{className:"flex-1",children:[h.jsx("input",{ref:e,type:"file",name:"profilePicture",onChange:R,accept:"image/*",className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,disabled:m}),h.jsxs("div",{className:"mt-2 text-xs text-gray-600",children:[h.jsx("p",{className:"font-medium",children:"Image Processing:"}),h.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1",children:[h.jsx("li",{children:"Images are automatically cropped to a perfect square"}),h.jsx("li",{children:"Resized to 200×200 pixels for optimal display"}),h.jsx("li",{children:"Center-cropped to focus on your face"}),h.jsx("li",{children:"Optimized for fast loading"})]}),h.jsx("p",{className:"font-medium mt-3",children:"Requirements:"}),h.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1",children:[h.jsx("li",{children:"Clear front-facing photo of your face"}),h.jsx("li",{children:"File must be an image (JPEG, PNG, etc.)"}),h.jsx("li",{children:"Maximum file size: 5MB"}),h.jsx("li",{children:"This is for identification and security purposes"})]}),!n.profilePicture&&!m&&h.jsx("p",{className:"text-red-500 font-medium mt-2",children:"Please upload your profile picture to continue"})]})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),h.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"John Doe",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"email",name:"email",value:n.email,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"john@example.com",required:!0}),h.jsx("button",{type:"button",onClick:()=>{const S=`carrier${Date.now()}@ptros.com`;r(N=>({...N,email:S}))},className:"absolute right-2 top-3 px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200",children:"Generate Test Email"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password *"}),h.jsx("input",{type:"password",name:"password",value:n.password,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"At least 8 characters",minLength:8,required:!0}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Minimum 8 characters with letters and numbers"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password *"}),h.jsx("input",{type:"password",name:"confirmPassword",value:n.confirmPassword,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Confirm your password",required:!0})]})]})]}),h.jsx("div",{className:"mt-8 flex justify-end",children:h.jsx("button",{type:"button",onClick:P,disabled:!n.profilePicture||m,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed",children:m?h.jsxs("span",{className:"flex items-center",children:[h.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing Image..."]}):"Next: Contact Details →"})})]}),l===2&&h.jsxs("div",{className:"p-8",children:[h.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Contact Details"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),h.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),h.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000 (optional)"}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Provide if different from phone number"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),h.jsx("select",{name:"city",value:n.city,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,children:T.map(y=>h.jsx("option",{value:y,children:y},y))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Physical Address *"}),h.jsx("textarea",{name:"address",value:n.address,onChange:R,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"House number, street, area",required:!0}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"This is where you'll receive official correspondence"})]})]}),h.jsxs("div",{className:"mt-8 flex justify-between",children:[h.jsx("button",{type:"button",onClick:M,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),h.jsx("button",{type:"button",onClick:P,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Vehicle Details →"})]})]}),l===3&&h.jsxs("div",{className:"p-8",children:[h.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Vehicle Information"}),h.jsx("p",{className:"text-gray-600 mb-6",children:"This information helps us assign appropriate deliveries"}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Vehicle Type"}),h.jsxs("select",{name:"vehicleType",value:n.vehicleType,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[h.jsx("option",{value:"",children:"Select your vehicle type"}),E.map(y=>h.jsx("option",{value:y,children:y},y))]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"License Plate"}),h.jsx("input",{type:"text",name:"licensePlate",value:n.licensePlate,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"e.g., A1234BC"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ID Number"}),h.jsx("input",{type:"text",name:"idNumber",value:n.idNumber,onChange:R,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"National ID or Passport"})]})]})]}),h.jsxs("div",{className:"mt-8 flex justify-between",children:[h.jsx("button",{type:"button",onClick:M,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),h.jsx("button",{type:"button",onClick:P,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Review & Submit →"})]})]}),l===4&&h.jsxs("div",{className:"p-8",children:[h.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Review & Submit"}),h.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[h.jsx("h4",{className:"font-semibold text-lg mb-4",children:"Your Information"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),h.jsx("p",{className:"font-medium",children:n.fullName})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),h.jsx("p",{className:"font-medium",children:n.email})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Phone"}),h.jsx("p",{className:"font-medium",children:n.phone})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"City"}),h.jsx("p",{className:"font-medium",children:n.city})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Address"}),h.jsx("p",{className:"font-medium",children:n.address})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Vehicle Type"}),h.jsx("p",{className:"font-medium",children:n.vehicleType||"Not specified"})]}),h.jsxs("div",{className:"col-span-2",children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Profile Picture"}),h.jsx("div",{className:"flex items-center mt-2",children:d?h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:d,alt:"Profile preview",className:"w-20 h-20 rounded-full object-cover border-2 border-green-500",style:{objectFit:"cover"}}),h.jsx("div",{className:"absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs",children:"✓"})]}),h.jsxs("div",{className:"ml-3",children:[h.jsx("span",{className:"text-green-600 font-medium block",children:"✓ Uploaded and optimized"}),h.jsx("span",{className:"text-xs text-gray-500 block mt-1",children:"Cropped to square (200×200 pixels)"})]})]}):h.jsx("span",{className:"text-red-500 font-medium",children:"❌ No picture uploaded"})})]})]})]}),h.jsx("div",{className:"mb-8",children:h.jsxs("div",{className:"flex items-start",children:[h.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:n.acceptTerms,onChange:R,className:"mt-1 mr-3",required:!0}),h.jsx("label",{htmlFor:"acceptTerms",className:"text-sm text-gray-700",children:"I agree to the PTROS Carrier Terms and Conditions. I understand that my account requires coordinator approval before I can start working. I confirm that the profile picture I uploaded is a clear, recent photo of myself."})]})}),h.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-blue-600",children:"ℹ️"})}),h.jsxs("div",{className:"ml-3",children:[h.jsx("h4",{className:"text-sm font-medium text-blue-800",children:"Profile Picture Requirement"}),h.jsx("div",{className:"text-sm text-blue-700 mt-1",children:h.jsx("p",{children:"Your profile picture is mandatory for identification and security verification. Applications without a clear profile picture will be rejected."})})]})]})}),h.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-yellow-600",children:"⚠️"})}),h.jsxs("div",{className:"ml-3",children:[h.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important Notice"}),h.jsxs("div",{className:"text-sm text-yellow-700 mt-1",children:[h.jsx("p",{children:"Your registration will be reviewed by a coordinator. Approval typically takes 1-2 business days."}),h.jsx("p",{className:"mt-2 font-semibold",children:"Your profile picture will be used for:"}),h.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1",children:[h.jsx("li",{children:"Identity verification by coordinators"}),h.jsx("li",{children:"Customer identification during deliveries"}),h.jsx("li",{children:"Security and safety purposes"})]})]})]})]})}),h.jsxs("div",{className:"mt-8 flex justify-between",children:[h.jsx("button",{type:"button",onClick:M,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),h.jsx("button",{type:"submit",disabled:s||!n.acceptTerms||!n.profilePicture,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?h.jsxs("span",{className:"flex items-center",children:[h.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Submitting..."]}):"Submit Registration"})]})]})]}),h.jsxs("div",{className:"p-6 border-t border-gray-200",children:[h.jsx("button",{type:"button",onClick:A,className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm",children:"Test Firebase Storage"}),h.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Click this button to test if Firebase Storage is working properly."})]})]}),h.jsxs("div",{className:"text-center mt-8",children:[h.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",h.jsx(wu,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Login here"})]}),h.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Need help? Contact PTROS Support: support@ptros.co.ls or +266 2222 3333"})]})]})})}gp.createRoot(document.getElementById("root")).render(h.jsx(Nx.StrictMode,{children:h.jsx(oP,{children:h.jsxs(Zk,{children:[h.jsx(vu,{path:"/",element:h.jsx(o5,{})}),h.jsx(vu,{path:"/login",element:h.jsx(HN,{})}),h.jsx(vu,{path:"/register",element:h.jsx(a5,{})})]})})}));
