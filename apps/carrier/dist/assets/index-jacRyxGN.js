var D1=Object.defineProperty;var O1=(t,e,n)=>e in t?D1(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var pt=(t,e,n)=>O1(t,typeof e!="symbol"?e+"":e,n);function L1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function j1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vE={exports:{}},Wd={},wE={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=Symbol.for("react.element"),M1=Symbol.for("react.portal"),V1=Symbol.for("react.fragment"),F1=Symbol.for("react.strict_mode"),U1=Symbol.for("react.profiler"),$1=Symbol.for("react.provider"),B1=Symbol.for("react.context"),z1=Symbol.for("react.forward_ref"),W1=Symbol.for("react.suspense"),q1=Symbol.for("react.memo"),H1=Symbol.for("react.lazy"),kv=Symbol.iterator;function G1(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var xE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},EE=Object.assign,TE={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||xE}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function IE(){}IE.prototype=Uo.prototype;function eg(t,e,n){this.props=t,this.context=e,this.refs=TE,this.updater=n||xE}var tg=eg.prototype=new IE;tg.constructor=eg;EE(tg,Uo.prototype);tg.isPureReactComponent=!0;var Rv=Array.isArray,SE=Object.prototype.hasOwnProperty,ng={current:null},bE={key:!0,ref:!0,__self:!0,__source:!0};function CE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)SE.call(e,r)&&!bE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Yl,type:t,key:i,ref:o,props:s,_owner:ng.current}}function K1(t,e){return{$$typeof:Yl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yl}function Q1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pv=/\/+/g;function vf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Q1(""+t.key):e.toString(36)}function cu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yl:case M1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+vf(o,0):r,Rv(s)?(n="",t!=null&&(n=t.replace(Pv,"$&/")+"/"),cu(s,e,n,"",function(u){return u})):s!=null&&(rg(s)&&(s=K1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pv,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Rv(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+vf(i,a);o+=cu(i,e,n,l,s)}else if(l=G1(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+vf(i,a++),o+=cu(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dc(t,e,n){if(t==null)return t;var r=[],s=0;return cu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Y1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Vt={current:null},uu={transition:null},J1={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:uu,ReactCurrentOwner:ng};function NE(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Dc,forEach:function(t,e,n){Dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dc(t,function(){e++}),e},toArray:function(t){return Dc(t,function(e){return e})||[]},only:function(t){if(!rg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=Uo;de.Fragment=V1;de.Profiler=U1;de.PureComponent=eg;de.StrictMode=F1;de.Suspense=W1;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;de.act=NE;de.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=EE({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=ng.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)SE.call(e,l)&&!bE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Yl,type:t.type,key:s,ref:i,props:r,_owner:o}};de.createContext=function(t){return t={$$typeof:B1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$1,_context:t},t.Consumer=t};de.createElement=CE;de.createFactory=function(t){var e=CE.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:z1,render:t}};de.isValidElement=rg;de.lazy=function(t){return{$$typeof:H1,_payload:{_status:-1,_result:t},_init:Y1}};de.memo=function(t,e){return{$$typeof:q1,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};de.unstable_act=NE;de.useCallback=function(t,e){return Vt.current.useCallback(t,e)};de.useContext=function(t){return Vt.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return Vt.current.useDeferredValue(t)};de.useEffect=function(t,e){return Vt.current.useEffect(t,e)};de.useId=function(){return Vt.current.useId()};de.useImperativeHandle=function(t,e,n){return Vt.current.useImperativeHandle(t,e,n)};de.useInsertionEffect=function(t,e){return Vt.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return Vt.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return Vt.current.useMemo(t,e)};de.useReducer=function(t,e,n){return Vt.current.useReducer(t,e,n)};de.useRef=function(t){return Vt.current.useRef(t)};de.useState=function(t){return Vt.current.useState(t)};de.useSyncExternalStore=function(t,e,n){return Vt.current.useSyncExternalStore(t,e,n)};de.useTransition=function(){return Vt.current.useTransition()};de.version="18.3.1";wE.exports=de;var O=wE.exports;const AE=j1(O),X1=L1({__proto__:null,default:AE},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z1=O,eA=Symbol.for("react.element"),tA=Symbol.for("react.fragment"),nA=Object.prototype.hasOwnProperty,rA=Z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sA={key:!0,ref:!0,__self:!0,__source:!0};function kE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)nA.call(e,r)&&!sA.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:eA,type:t,key:i,ref:o,props:s,_owner:rA.current}}Wd.Fragment=tA;Wd.jsx=kE;Wd.jsxs=kE;vE.exports=Wd;var d=vE.exports,gp={},RE={exports:{}},an={},PE={exports:{}},DE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var q=z.length;z.push(K);e:for(;0<q;){var pe=q-1>>>1,me=z[pe];if(0<s(me,K))z[pe]=K,z[q]=me,q=pe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],q=z.pop();if(q!==K){z[0]=q;e:for(var pe=0,me=z.length,cn=me>>>1;pe<cn;){var Rt=2*(pe+1)-1,sr=z[Rt],Jt=Rt+1,Lr=z[Jt];if(0>s(sr,q))Jt<me&&0>s(Lr,sr)?(z[pe]=Lr,z[Jt]=q,pe=Jt):(z[pe]=sr,z[Rt]=q,pe=Rt);else if(Jt<me&&0>s(Lr,q))z[pe]=Lr,z[Jt]=q,pe=Jt;else break e}}return K}function s(z,K){var q=z.sortIndex-K.sortIndex;return q!==0?q:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,m=3,_=!1,S=!1,A=!1,P=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(z){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=z)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function k(z){if(A=!1,C(z),!S)if(n(l)!==null)S=!0,ie(M);else{var K=n(u);K!==null&&at(k,K.startTime-z)}}function M(z,K){S=!1,A&&(A=!1,I(y),y=-1),_=!0;var q=m;try{for(C(K),f=n(l);f!==null&&(!(f.expirationTime>K)||z&&!N());){var pe=f.callback;if(typeof pe=="function"){f.callback=null,m=f.priorityLevel;var me=pe(f.expirationTime<=K);K=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(l)&&r(l),C(K)}else r(l);f=n(l)}if(f!==null)var cn=!0;else{var Rt=n(u);Rt!==null&&at(k,Rt.startTime-K),cn=!1}return cn}finally{f=null,m=q,_=!1}}var F=!1,x=null,y=-1,b=5,w=-1;function N(){return!(t.unstable_now()-w<b)}function R(){if(x!==null){var z=t.unstable_now();w=z;var K=!0;try{K=x(!0,z)}finally{K?T():(F=!1,x=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Ae=se.port2;se.port1.onmessage=R,T=function(){Ae.postMessage(null)}}else T=function(){P(R,0)};function ie(z){x=z,F||(F=!0,T())}function at(z,K){y=P(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||_||(S=!0,ie(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var q=m;m=K;try{return z()}finally{m=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var q=m;m=z;try{return K()}finally{m=q}},t.unstable_scheduleCallback=function(z,K,q){var pe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?pe+q:pe):q=pe,z){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=q+me,z={id:h++,callback:K,priorityLevel:z,startTime:q,expirationTime:me,sortIndex:-1},q>pe?(z.sortIndex=q,e(u,z),n(l)===null&&z===n(u)&&(A?(I(y),y=-1):A=!0,at(k,q-pe))):(z.sortIndex=me,e(l,z),S||_||(S=!0,ie(M))),z},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(z){var K=m;return function(){var q=m;m=K;try{return z.apply(this,arguments)}finally{m=q}}}})(DE);PE.exports=DE;var iA=PE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oA=O,on=iA;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var OE=new Set,dl={};function Ti(t,e){wo(t,e),wo(t+"Capture",e)}function wo(t,e){for(dl[t]=e,t=0;t<e.length;t++)OE.add(e[t])}var wr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=Object.prototype.hasOwnProperty,aA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dv={},Ov={};function lA(t){return _p.call(Ov,t)?!0:_p.call(Dv,t)?!1:aA.test(t)?Ov[t]=!0:(Dv[t]=!0,!1)}function cA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uA(t,e,n,r){if(e===null||typeof e>"u"||cA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){vt[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];vt[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){vt[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){vt[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){vt[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){vt[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){vt[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){vt[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){vt[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var sg=/[\-:]([a-z])/g;function ig(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sg,ig);vt[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sg,ig);vt[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sg,ig);vt[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){vt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){vt[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function og(t,e,n,r){var s=vt.hasOwnProperty(e)?vt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uA(e,n,s,r)&&(n=null),r||s===null?lA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pr=oA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oc=Symbol.for("react.element"),$i=Symbol.for("react.portal"),Bi=Symbol.for("react.fragment"),ag=Symbol.for("react.strict_mode"),yp=Symbol.for("react.profiler"),LE=Symbol.for("react.provider"),jE=Symbol.for("react.context"),lg=Symbol.for("react.forward_ref"),vp=Symbol.for("react.suspense"),wp=Symbol.for("react.suspense_list"),cg=Symbol.for("react.memo"),Wr=Symbol.for("react.lazy"),ME=Symbol.for("react.offscreen"),Lv=Symbol.iterator;function ya(t){return t===null||typeof t!="object"?null:(t=Lv&&t[Lv]||t["@@iterator"],typeof t=="function"?t:null)}var Ve=Object.assign,wf;function Pa(t){if(wf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wf=e&&e[1]||""}return`
`+wf+t}var xf=!1;function Ef(t,e){if(!t||xf)return"";xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{xf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pa(t):""}function dA(t){switch(t.tag){case 5:return Pa(t.type);case 16:return Pa("Lazy");case 13:return Pa("Suspense");case 19:return Pa("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function xp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bi:return"Fragment";case $i:return"Portal";case yp:return"Profiler";case ag:return"StrictMode";case vp:return"Suspense";case wp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jE:return(t.displayName||"Context")+".Consumer";case LE:return(t._context.displayName||"Context")+".Provider";case lg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case cg:return e=t.displayName||null,e!==null?e:xp(t.type)||"Memo";case Wr:e=t._payload,t=t._init;try{return xp(t(e))}catch{}}return null}function hA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xp(e);case 8:return e===ag?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ws(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function VE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fA(t){var e=VE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lc(t){t._valueTracker||(t._valueTracker=fA(t))}function FE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=VE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ep(t,e){var n=e.checked;return Ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ws(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function UE(t,e){e=e.checked,e!=null&&og(t,"checked",e,!1)}function Tp(t,e){UE(t,e);var n=ws(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ip(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ip(t,e.type,ws(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ip(t,e,n){(e!=="number"||Ou(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function so(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ws(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Sp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Da(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ws(n)}}function $E(t,e){var n=ws(e.value),r=ws(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function BE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?BE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jc,zE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jc=jc||document.createElement("div"),jc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var za={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pA=["Webkit","ms","Moz","O"];Object.keys(za).forEach(function(t){pA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),za[e]=za[t]})});function WE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||za.hasOwnProperty(t)&&za[t]?(""+e).trim():e+"px"}function qE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=WE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var mA=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cp(t,e){if(e){if(mA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Np(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ap=null;function ug(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kp=null,io=null,oo=null;function Uv(t){if(t=Zl(t)){if(typeof kp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Qd(e),kp(t.stateNode,t.type,e))}}function HE(t){io?oo?oo.push(t):oo=[t]:io=t}function GE(){if(io){var t=io,e=oo;if(oo=io=null,Uv(t),e)for(t=0;t<e.length;t++)Uv(e[t])}}function KE(t,e){return t(e)}function QE(){}var Tf=!1;function YE(t,e,n){if(Tf)return t(e,n);Tf=!0;try{return KE(t,e,n)}finally{Tf=!1,(io!==null||oo!==null)&&(QE(),GE())}}function fl(t,e){var n=t.stateNode;if(n===null)return null;var r=Qd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Rp=!1;if(wr)try{var va={};Object.defineProperty(va,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Rp=!1}function gA(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Wa=!1,Lu=null,ju=!1,Pp=null,_A={onError:function(t){Wa=!0,Lu=t}};function yA(t,e,n,r,s,i,o,a,l){Wa=!1,Lu=null,gA.apply(_A,arguments)}function vA(t,e,n,r,s,i,o,a,l){if(yA.apply(this,arguments),Wa){if(Wa){var u=Lu;Wa=!1,Lu=null}else throw Error(U(198));ju||(ju=!0,Pp=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function JE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $v(t){if(Ii(t)!==t)throw Error(U(188))}function wA(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return $v(s),t;if(i===r)return $v(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function XE(t){return t=wA(t),t!==null?ZE(t):null}function ZE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ZE(t);if(e!==null)return e;t=t.sibling}return null}var eT=on.unstable_scheduleCallback,Bv=on.unstable_cancelCallback,xA=on.unstable_shouldYield,EA=on.unstable_requestPaint,He=on.unstable_now,TA=on.unstable_getCurrentPriorityLevel,dg=on.unstable_ImmediatePriority,tT=on.unstable_UserBlockingPriority,Mu=on.unstable_NormalPriority,IA=on.unstable_LowPriority,nT=on.unstable_IdlePriority,qd=null,Wn=null;function SA(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(qd,t,void 0,(t.current.flags&128)===128)}catch{}}var Nn=Math.clz32?Math.clz32:NA,bA=Math.log,CA=Math.LN2;function NA(t){return t>>>=0,t===0?32:31-(bA(t)/CA|0)|0}var Mc=64,Vc=4194304;function Oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Oa(a):(i&=o,i!==0&&(r=Oa(i)))}else o=n&~s,o!==0?r=Oa(o):i!==0&&(r=Oa(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Nn(e),s=1<<n,r|=t[n],e&=~s;return r}function AA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Nn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=AA(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Dp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rT(){var t=Mc;return Mc<<=1,!(Mc&4194240)&&(Mc=64),t}function If(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Nn(e),t[e]=n}function RA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Nn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function hg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Nn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ee=0;function sT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iT,fg,oT,aT,lT,Op=!1,Fc=[],ss=null,is=null,os=null,pl=new Map,ml=new Map,Hr=[],PA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zv(t,e){switch(t){case"focusin":case"focusout":ss=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(e.pointerId)}}function wa(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Zl(e),e!==null&&fg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function DA(t,e,n,r,s){switch(e){case"focusin":return ss=wa(ss,t,e,n,r,s),!0;case"dragenter":return is=wa(is,t,e,n,r,s),!0;case"mouseover":return os=wa(os,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return pl.set(i,wa(pl.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ml.set(i,wa(ml.get(i)||null,t,e,n,r,s)),!0}return!1}function cT(t){var e=Xs(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=JE(n),e!==null){t.blockedOn=e,lT(t.priority,function(){oT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ap=r,n.target.dispatchEvent(r),Ap=null}else return e=Zl(n),e!==null&&fg(e),t.blockedOn=n,!1;e.shift()}return!0}function Wv(t,e,n){du(t)&&n.delete(e)}function OA(){Op=!1,ss!==null&&du(ss)&&(ss=null),is!==null&&du(is)&&(is=null),os!==null&&du(os)&&(os=null),pl.forEach(Wv),ml.forEach(Wv)}function xa(t,e){t.blockedOn===e&&(t.blockedOn=null,Op||(Op=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,OA)))}function gl(t){function e(s){return xa(s,t)}if(0<Fc.length){xa(Fc[0],t);for(var n=1;n<Fc.length;n++){var r=Fc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ss!==null&&xa(ss,t),is!==null&&xa(is,t),os!==null&&xa(os,t),pl.forEach(e),ml.forEach(e),n=0;n<Hr.length;n++)r=Hr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hr.length&&(n=Hr[0],n.blockedOn===null);)cT(n),n.blockedOn===null&&Hr.shift()}var ao=Pr.ReactCurrentBatchConfig,Fu=!0;function LA(t,e,n,r){var s=Ee,i=ao.transition;ao.transition=null;try{Ee=1,pg(t,e,n,r)}finally{Ee=s,ao.transition=i}}function jA(t,e,n,r){var s=Ee,i=ao.transition;ao.transition=null;try{Ee=4,pg(t,e,n,r)}finally{Ee=s,ao.transition=i}}function pg(t,e,n,r){if(Fu){var s=Lp(t,e,n,r);if(s===null)Of(t,e,r,Uu,n),zv(t,r);else if(DA(s,t,e,n,r))r.stopPropagation();else if(zv(t,r),e&4&&-1<PA.indexOf(t)){for(;s!==null;){var i=Zl(s);if(i!==null&&iT(i),i=Lp(t,e,n,r),i===null&&Of(t,e,r,Uu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Of(t,e,r,null,n)}}var Uu=null;function Lp(t,e,n,r){if(Uu=null,t=ug(r),t=Xs(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=JE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uu=t,null}function uT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TA()){case dg:return 1;case tT:return 4;case Mu:case IA:return 16;case nT:return 536870912;default:return 16}default:return 16}}var es=null,mg=null,hu=null;function dT(){if(hu)return hu;var t,e=mg,n=e.length,r,s="value"in es?es.value:es.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return hu=s.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uc(){return!0}function qv(){return!1}function ln(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Uc:qv,this.isPropagationStopped=qv,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uc)},persist:function(){},isPersistent:Uc}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gg=ln($o),Xl=Ve({},$o,{view:0,detail:0}),MA=ln(Xl),Sf,bf,Ea,Hd=Ve({},Xl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_g,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ea&&(Ea&&t.type==="mousemove"?(Sf=t.screenX-Ea.screenX,bf=t.screenY-Ea.screenY):bf=Sf=0,Ea=t),Sf)},movementY:function(t){return"movementY"in t?t.movementY:bf}}),Hv=ln(Hd),VA=Ve({},Hd,{dataTransfer:0}),FA=ln(VA),UA=Ve({},Xl,{relatedTarget:0}),Cf=ln(UA),$A=Ve({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),BA=ln($A),zA=Ve({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),WA=ln(zA),qA=Ve({},$o,{data:0}),Gv=ln(qA),HA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=KA[t])?!!e[t]:!1}function _g(){return QA}var YA=Ve({},Xl,{key:function(t){if(t.key){var e=HA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_g,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JA=ln(YA),XA=Ve({},Hd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kv=ln(XA),ZA=Ve({},Xl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_g}),ek=ln(ZA),tk=Ve({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),nk=ln(tk),rk=Ve({},Hd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sk=ln(rk),ik=[9,13,27,32],yg=wr&&"CompositionEvent"in window,qa=null;wr&&"documentMode"in document&&(qa=document.documentMode);var ok=wr&&"TextEvent"in window&&!qa,hT=wr&&(!yg||qa&&8<qa&&11>=qa),Qv=" ",Yv=!1;function fT(t,e){switch(t){case"keyup":return ik.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zi=!1;function ak(t,e){switch(t){case"compositionend":return pT(e);case"keypress":return e.which!==32?null:(Yv=!0,Qv);case"textInput":return t=e.data,t===Qv&&Yv?null:t;default:return null}}function lk(t,e){if(zi)return t==="compositionend"||!yg&&fT(t,e)?(t=dT(),hu=mg=es=null,zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hT&&e.locale!=="ko"?null:e.data;default:return null}}var ck={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ck[t.type]:e==="textarea"}function mT(t,e,n,r){HE(r),e=$u(e,"onChange"),0<e.length&&(n=new gg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ha=null,_l=null;function uk(t){bT(t,0)}function Gd(t){var e=Hi(t);if(FE(e))return t}function dk(t,e){if(t==="change")return e}var gT=!1;if(wr){var Nf;if(wr){var Af="oninput"in document;if(!Af){var Xv=document.createElement("div");Xv.setAttribute("oninput","return;"),Af=typeof Xv.oninput=="function"}Nf=Af}else Nf=!1;gT=Nf&&(!document.documentMode||9<document.documentMode)}function Zv(){Ha&&(Ha.detachEvent("onpropertychange",_T),_l=Ha=null)}function _T(t){if(t.propertyName==="value"&&Gd(_l)){var e=[];mT(e,_l,t,ug(t)),YE(uk,e)}}function hk(t,e,n){t==="focusin"?(Zv(),Ha=e,_l=n,Ha.attachEvent("onpropertychange",_T)):t==="focusout"&&Zv()}function fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gd(_l)}function pk(t,e){if(t==="click")return Gd(e)}function mk(t,e){if(t==="input"||t==="change")return Gd(e)}function gk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:gk;function yl(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_p.call(e,s)||!Dn(t[s],e[s]))return!1}return!0}function e0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function t0(t,e){var n=e0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=e0(n)}}function yT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vT(){for(var t=window,e=Ou();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ou(t.document)}return e}function vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _k(t){var e=vT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yT(n.ownerDocument.documentElement,n)){if(r!==null&&vg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=t0(n,i);var o=t0(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yk=wr&&"documentMode"in document&&11>=document.documentMode,Wi=null,jp=null,Ga=null,Mp=!1;function n0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mp||Wi==null||Wi!==Ou(r)||(r=Wi,"selectionStart"in r&&vg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ga&&yl(Ga,r)||(Ga=r,r=$u(jp,"onSelect"),0<r.length&&(e=new gg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wi)))}function $c(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:$c("Animation","AnimationEnd"),animationiteration:$c("Animation","AnimationIteration"),animationstart:$c("Animation","AnimationStart"),transitionend:$c("Transition","TransitionEnd")},kf={},wT={};wr&&(wT=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Kd(t){if(kf[t])return kf[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in wT)return kf[t]=e[n];return t}var xT=Kd("animationend"),ET=Kd("animationiteration"),TT=Kd("animationstart"),IT=Kd("transitionend"),ST=new Map,r0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ds(t,e){ST.set(t,e),Ti(e,[t])}for(var Rf=0;Rf<r0.length;Rf++){var Pf=r0[Rf],vk=Pf.toLowerCase(),wk=Pf[0].toUpperCase()+Pf.slice(1);Ds(vk,"on"+wk)}Ds(xT,"onAnimationEnd");Ds(ET,"onAnimationIteration");Ds(TT,"onAnimationStart");Ds("dblclick","onDoubleClick");Ds("focusin","onFocus");Ds("focusout","onBlur");Ds(IT,"onTransitionEnd");wo("onMouseEnter",["mouseout","mouseover"]);wo("onMouseLeave",["mouseout","mouseover"]);wo("onPointerEnter",["pointerout","pointerover"]);wo("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function s0(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vA(r,e,void 0,t),t.currentTarget=null}function bT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;s0(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;s0(s,a,u),i=l}}}if(ju)throw t=Pp,ju=!1,Pp=null,t}function Re(t,e){var n=e[Bp];n===void 0&&(n=e[Bp]=new Set);var r=t+"__bubble";n.has(r)||(CT(e,t,2,!1),n.add(r))}function Df(t,e,n){var r=0;e&&(r|=4),CT(n,t,r,e)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function vl(t){if(!t[Bc]){t[Bc]=!0,OE.forEach(function(n){n!=="selectionchange"&&(xk.has(n)||Df(n,!1,t),Df(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bc]||(e[Bc]=!0,Df("selectionchange",!1,e))}}function CT(t,e,n,r){switch(uT(e)){case 1:var s=LA;break;case 4:s=jA;break;default:s=pg}n=s.bind(null,e,n,t),s=void 0,!Rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Of(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Xs(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}YE(function(){var u=i,h=ug(n),f=[];e:{var m=ST.get(t);if(m!==void 0){var _=gg,S=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":_=JA;break;case"focusin":S="focus",_=Cf;break;case"focusout":S="blur",_=Cf;break;case"beforeblur":case"afterblur":_=Cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=FA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ek;break;case xT:case ET:case TT:_=BA;break;case IT:_=nk;break;case"scroll":_=MA;break;case"wheel":_=sk;break;case"copy":case"cut":case"paste":_=WA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Kv}var A=(e&4)!==0,P=!A&&t==="scroll",I=A?m!==null?m+"Capture":null:m;A=[];for(var E=u,C;E!==null;){C=E;var k=C.stateNode;if(C.tag===5&&k!==null&&(C=k,I!==null&&(k=fl(E,I),k!=null&&A.push(wl(E,k,C)))),P)break;E=E.return}0<A.length&&(m=new _(m,S,null,n,h),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Ap&&(S=n.relatedTarget||n.fromElement)&&(Xs(S)||S[xr]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(S=n.relatedTarget||n.toElement,_=u,S=S?Xs(S):null,S!==null&&(P=Ii(S),S!==P||S.tag!==5&&S.tag!==6)&&(S=null)):(_=null,S=u),_!==S)){if(A=Hv,k="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(A=Kv,k="onPointerLeave",I="onPointerEnter",E="pointer"),P=_==null?m:Hi(_),C=S==null?m:Hi(S),m=new A(k,E+"leave",_,n,h),m.target=P,m.relatedTarget=C,k=null,Xs(h)===u&&(A=new A(I,E+"enter",S,n,h),A.target=C,A.relatedTarget=P,k=A),P=k,_&&S)t:{for(A=_,I=S,E=0,C=A;C;C=Oi(C))E++;for(C=0,k=I;k;k=Oi(k))C++;for(;0<E-C;)A=Oi(A),E--;for(;0<C-E;)I=Oi(I),C--;for(;E--;){if(A===I||I!==null&&A===I.alternate)break t;A=Oi(A),I=Oi(I)}A=null}else A=null;_!==null&&i0(f,m,_,A,!1),S!==null&&P!==null&&i0(f,P,S,A,!0)}}e:{if(m=u?Hi(u):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var M=dk;else if(Jv(m))if(gT)M=mk;else{M=fk;var F=hk}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=pk);if(M&&(M=M(t,u))){mT(f,M,n,h);break e}F&&F(t,m,u),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&Ip(m,"number",m.value)}switch(F=u?Hi(u):window,t){case"focusin":(Jv(F)||F.contentEditable==="true")&&(Wi=F,jp=u,Ga=null);break;case"focusout":Ga=jp=Wi=null;break;case"mousedown":Mp=!0;break;case"contextmenu":case"mouseup":case"dragend":Mp=!1,n0(f,n,h);break;case"selectionchange":if(yk)break;case"keydown":case"keyup":n0(f,n,h)}var x;if(yg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else zi?fT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(hT&&n.locale!=="ko"&&(zi||y!=="onCompositionStart"?y==="onCompositionEnd"&&zi&&(x=dT()):(es=h,mg="value"in es?es.value:es.textContent,zi=!0)),F=$u(u,y),0<F.length&&(y=new Gv(y,t,null,n,h),f.push({event:y,listeners:F}),x?y.data=x:(x=pT(n),x!==null&&(y.data=x)))),(x=ok?ak(t,n):lk(t,n))&&(u=$u(u,"onBeforeInput"),0<u.length&&(h=new Gv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=x))}bT(f,e)})}function wl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function $u(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=fl(t,n),i!=null&&r.unshift(wl(t,i,s)),i=fl(t,e),i!=null&&r.push(wl(t,i,s))),t=t.return}return r}function Oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function i0(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=fl(n,i),l!=null&&o.unshift(wl(n,l,a))):s||(l=fl(n,i),l!=null&&o.push(wl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ek=/\r\n?/g,Tk=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(Ek,`
`).replace(Tk,"")}function zc(t,e,n){if(e=o0(e),o0(t)!==e&&n)throw Error(U(425))}function Bu(){}var Vp=null,Fp=null;function Up(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $p=typeof setTimeout=="function"?setTimeout:void 0,Ik=typeof clearTimeout=="function"?clearTimeout:void 0,a0=typeof Promise=="function"?Promise:void 0,Sk=typeof queueMicrotask=="function"?queueMicrotask:typeof a0<"u"?function(t){return a0.resolve(null).then(t).catch(bk)}:$p;function bk(t){setTimeout(function(){throw t})}function Lf(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),gl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);gl(e)}function as(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function l0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),$n="__reactFiber$"+Bo,xl="__reactProps$"+Bo,xr="__reactContainer$"+Bo,Bp="__reactEvents$"+Bo,Ck="__reactListeners$"+Bo,Nk="__reactHandles$"+Bo;function Xs(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=l0(t);t!==null;){if(n=t[$n])return n;t=l0(t)}return e}t=n,n=t.parentNode}return null}function Zl(t){return t=t[$n]||t[xr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Qd(t){return t[xl]||null}var zp=[],Gi=-1;function Os(t){return{current:t}}function De(t){0>Gi||(t.current=zp[Gi],zp[Gi]=null,Gi--)}function Ne(t,e){Gi++,zp[Gi]=t.current,t.current=e}var xs={},Nt=Os(xs),Gt=Os(!1),ci=xs;function xo(t,e){var n=t.type.contextTypes;if(!n)return xs;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Kt(t){return t=t.childContextTypes,t!=null}function zu(){De(Gt),De(Nt)}function c0(t,e,n){if(Nt.current!==xs)throw Error(U(168));Ne(Nt,e),Ne(Gt,n)}function NT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,hA(t)||"Unknown",s));return Ve({},n,r)}function Wu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xs,ci=Nt.current,Ne(Nt,t),Ne(Gt,Gt.current),!0}function u0(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=NT(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,De(Gt),De(Nt),Ne(Nt,t)):De(Gt),Ne(Gt,n)}var lr=null,Yd=!1,jf=!1;function AT(t){lr===null?lr=[t]:lr.push(t)}function Ak(t){Yd=!0,AT(t)}function Ls(){if(!jf&&lr!==null){jf=!0;var t=0,e=Ee;try{var n=lr;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}lr=null,Yd=!1}catch(s){throw lr!==null&&(lr=lr.slice(t+1)),eT(dg,Ls),s}finally{Ee=e,jf=!1}}return null}var Ki=[],Qi=0,qu=null,Hu=0,dn=[],hn=0,ui=null,dr=1,hr="";function Gs(t,e){Ki[Qi++]=Hu,Ki[Qi++]=qu,qu=t,Hu=e}function kT(t,e,n){dn[hn++]=dr,dn[hn++]=hr,dn[hn++]=ui,ui=t;var r=dr;t=hr;var s=32-Nn(r)-1;r&=~(1<<s),n+=1;var i=32-Nn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,dr=1<<32-Nn(e)+s|n<<s|r,hr=i+t}else dr=1<<i|n<<s|r,hr=t}function wg(t){t.return!==null&&(Gs(t,1),kT(t,1,0))}function xg(t){for(;t===qu;)qu=Ki[--Qi],Ki[Qi]=null,Hu=Ki[--Qi],Ki[Qi]=null;for(;t===ui;)ui=dn[--hn],dn[hn]=null,hr=dn[--hn],dn[hn]=null,dr=dn[--hn],dn[hn]=null}var rn=null,en=null,Oe=!1,In=null;function RT(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function d0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,en=as(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,en=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:dr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,en=null,!0):!1;default:return!1}}function Wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qp(t){if(Oe){var e=en;if(e){var n=e;if(!d0(t,e)){if(Wp(t))throw Error(U(418));e=as(n.nextSibling);var r=rn;e&&d0(t,e)?RT(r,n):(t.flags=t.flags&-4097|2,Oe=!1,rn=t)}}else{if(Wp(t))throw Error(U(418));t.flags=t.flags&-4097|2,Oe=!1,rn=t}}}function h0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Wc(t){if(t!==rn)return!1;if(!Oe)return h0(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Up(t.type,t.memoizedProps)),e&&(e=en)){if(Wp(t))throw PT(),Error(U(418));for(;e;)RT(t,e),e=as(e.nextSibling)}if(h0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){en=as(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}en=null}}else en=rn?as(t.stateNode.nextSibling):null;return!0}function PT(){for(var t=en;t;)t=as(t.nextSibling)}function Eo(){en=rn=null,Oe=!1}function Eg(t){In===null?In=[t]:In.push(t)}var kk=Pr.ReactCurrentBatchConfig;function Ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function qc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function f0(t){var e=t._init;return e(t._payload)}function DT(t){function e(I,E){if(t){var C=I.deletions;C===null?(I.deletions=[E],I.flags|=16):C.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function r(I,E){for(I=new Map;E!==null;)E.key!==null?I.set(E.key,E):I.set(E.index,E),E=E.sibling;return I}function s(I,E){return I=ds(I,E),I.index=0,I.sibling=null,I}function i(I,E,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<E?(I.flags|=2,E):C):(I.flags|=2,E)):(I.flags|=1048576,E)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,E,C,k){return E===null||E.tag!==6?(E=zf(C,I.mode,k),E.return=I,E):(E=s(E,C),E.return=I,E)}function l(I,E,C,k){var M=C.type;return M===Bi?h(I,E,C.props.children,k,C.key):E!==null&&(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wr&&f0(M)===E.type)?(k=s(E,C.props),k.ref=Ta(I,E,C),k.return=I,k):(k=wu(C.type,C.key,C.props,null,I.mode,k),k.ref=Ta(I,E,C),k.return=I,k)}function u(I,E,C,k){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Wf(C,I.mode,k),E.return=I,E):(E=s(E,C.children||[]),E.return=I,E)}function h(I,E,C,k,M){return E===null||E.tag!==7?(E=ii(C,I.mode,k,M),E.return=I,E):(E=s(E,C),E.return=I,E)}function f(I,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=zf(""+E,I.mode,C),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Oc:return C=wu(E.type,E.key,E.props,null,I.mode,C),C.ref=Ta(I,null,E),C.return=I,C;case $i:return E=Wf(E,I.mode,C),E.return=I,E;case Wr:var k=E._init;return f(I,k(E._payload),C)}if(Da(E)||ya(E))return E=ii(E,I.mode,C,null),E.return=I,E;qc(I,E)}return null}function m(I,E,C,k){var M=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return M!==null?null:a(I,E,""+C,k);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Oc:return C.key===M?l(I,E,C,k):null;case $i:return C.key===M?u(I,E,C,k):null;case Wr:return M=C._init,m(I,E,M(C._payload),k)}if(Da(C)||ya(C))return M!==null?null:h(I,E,C,k,null);qc(I,C)}return null}function _(I,E,C,k,M){if(typeof k=="string"&&k!==""||typeof k=="number")return I=I.get(C)||null,a(E,I,""+k,M);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Oc:return I=I.get(k.key===null?C:k.key)||null,l(E,I,k,M);case $i:return I=I.get(k.key===null?C:k.key)||null,u(E,I,k,M);case Wr:var F=k._init;return _(I,E,C,F(k._payload),M)}if(Da(k)||ya(k))return I=I.get(C)||null,h(E,I,k,M,null);qc(E,k)}return null}function S(I,E,C,k){for(var M=null,F=null,x=E,y=E=0,b=null;x!==null&&y<C.length;y++){x.index>y?(b=x,x=null):b=x.sibling;var w=m(I,x,C[y],k);if(w===null){x===null&&(x=b);break}t&&x&&w.alternate===null&&e(I,x),E=i(w,E,y),F===null?M=w:F.sibling=w,F=w,x=b}if(y===C.length)return n(I,x),Oe&&Gs(I,y),M;if(x===null){for(;y<C.length;y++)x=f(I,C[y],k),x!==null&&(E=i(x,E,y),F===null?M=x:F.sibling=x,F=x);return Oe&&Gs(I,y),M}for(x=r(I,x);y<C.length;y++)b=_(x,I,y,C[y],k),b!==null&&(t&&b.alternate!==null&&x.delete(b.key===null?y:b.key),E=i(b,E,y),F===null?M=b:F.sibling=b,F=b);return t&&x.forEach(function(N){return e(I,N)}),Oe&&Gs(I,y),M}function A(I,E,C,k){var M=ya(C);if(typeof M!="function")throw Error(U(150));if(C=M.call(C),C==null)throw Error(U(151));for(var F=M=null,x=E,y=E=0,b=null,w=C.next();x!==null&&!w.done;y++,w=C.next()){x.index>y?(b=x,x=null):b=x.sibling;var N=m(I,x,w.value,k);if(N===null){x===null&&(x=b);break}t&&x&&N.alternate===null&&e(I,x),E=i(N,E,y),F===null?M=N:F.sibling=N,F=N,x=b}if(w.done)return n(I,x),Oe&&Gs(I,y),M;if(x===null){for(;!w.done;y++,w=C.next())w=f(I,w.value,k),w!==null&&(E=i(w,E,y),F===null?M=w:F.sibling=w,F=w);return Oe&&Gs(I,y),M}for(x=r(I,x);!w.done;y++,w=C.next())w=_(x,I,y,w.value,k),w!==null&&(t&&w.alternate!==null&&x.delete(w.key===null?y:w.key),E=i(w,E,y),F===null?M=w:F.sibling=w,F=w);return t&&x.forEach(function(R){return e(I,R)}),Oe&&Gs(I,y),M}function P(I,E,C,k){if(typeof C=="object"&&C!==null&&C.type===Bi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Oc:e:{for(var M=C.key,F=E;F!==null;){if(F.key===M){if(M=C.type,M===Bi){if(F.tag===7){n(I,F.sibling),E=s(F,C.props.children),E.return=I,I=E;break e}}else if(F.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Wr&&f0(M)===F.type){n(I,F.sibling),E=s(F,C.props),E.ref=Ta(I,F,C),E.return=I,I=E;break e}n(I,F);break}else e(I,F);F=F.sibling}C.type===Bi?(E=ii(C.props.children,I.mode,k,C.key),E.return=I,I=E):(k=wu(C.type,C.key,C.props,null,I.mode,k),k.ref=Ta(I,E,C),k.return=I,I=k)}return o(I);case $i:e:{for(F=C.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(I,E.sibling),E=s(E,C.children||[]),E.return=I,I=E;break e}else{n(I,E);break}else e(I,E);E=E.sibling}E=Wf(C,I.mode,k),E.return=I,I=E}return o(I);case Wr:return F=C._init,P(I,E,F(C._payload),k)}if(Da(C))return S(I,E,C,k);if(ya(C))return A(I,E,C,k);qc(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(I,E.sibling),E=s(E,C),E.return=I,I=E):(n(I,E),E=zf(C,I.mode,k),E.return=I,I=E),o(I)):n(I,E)}return P}var To=DT(!0),OT=DT(!1),Gu=Os(null),Ku=null,Yi=null,Tg=null;function Ig(){Tg=Yi=Ku=null}function Sg(t){var e=Gu.current;De(Gu),t._currentValue=e}function Hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Ku=t,Tg=Yi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Tg!==t)if(t={context:t,memoizedValue:e,next:null},Yi===null){if(Ku===null)throw Error(U(308));Yi=t,Ku.dependencies={lanes:0,firstContext:t}}else Yi=Yi.next=t;return e}var Zs=null;function bg(t){Zs===null?Zs=[t]:Zs.push(t)}function LT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,bg(e)):(n.next=s.next,s.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qr=!1;function Cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Er(t,n)}return s=r.interleaved,s===null?(e.next=e,bg(r)):(e.next=s.next,s.next=e),r.interleaved=e,Er(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hg(t,n)}}function p0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Qu(t,e,n,r){var s=t.updateQueue;qr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,h=u=l=null,a=i;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=t,A=a;switch(m=e,_=n,A.tag){case 1:if(S=A.payload,typeof S=="function"){f=S.call(_,f,m);break e}f=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=A.payload,m=typeof S=="function"?S.call(_,f,m):S,m==null)break e;f=Ve({},f,m);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=_,l=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=f}}function m0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var ec={},qn=Os(ec),El=Os(ec),Tl=Os(ec);function ei(t){if(t===ec)throw Error(U(174));return t}function Ng(t,e){switch(Ne(Tl,e),Ne(El,t),Ne(qn,ec),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bp(e,t)}De(qn),Ne(qn,e)}function Io(){De(qn),De(El),De(Tl)}function MT(t){ei(Tl.current);var e=ei(qn.current),n=bp(e,t.type);e!==n&&(Ne(El,t),Ne(qn,n))}function Ag(t){El.current===t&&(De(qn),De(El))}var Le=Os(0);function Yu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mf=[];function kg(){for(var t=0;t<Mf.length;t++)Mf[t]._workInProgressVersionPrimary=null;Mf.length=0}var mu=Pr.ReactCurrentDispatcher,Vf=Pr.ReactCurrentBatchConfig,di=0,Me=null,rt=null,dt=null,Ju=!1,Ka=!1,Il=0,Rk=0;function Et(){throw Error(U(321))}function Rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function Pg(t,e,n,r,s,i){if(di=i,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?Lk:jk,t=n(r,s),Ka){i=0;do{if(Ka=!1,Il=0,25<=i)throw Error(U(301));i+=1,dt=rt=null,e.updateQueue=null,mu.current=Mk,t=n(r,s)}while(Ka)}if(mu.current=Xu,e=rt!==null&&rt.next!==null,di=0,dt=rt=Me=null,Ju=!1,e)throw Error(U(300));return t}function Dg(){var t=Il!==0;return Il=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dt===null?Me.memoizedState=dt=t:dt=dt.next=t,dt}function vn(){if(rt===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=rt.next;var e=dt===null?Me.memoizedState:dt.next;if(e!==null)dt=e,rt=t;else{if(t===null)throw Error(U(310));rt=t,t={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},dt===null?Me.memoizedState=dt=t:dt=dt.next=t}return dt}function Sl(t,e){return typeof e=="function"?e(t):e}function Ff(t){var e=vn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=rt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var h=u.lane;if((di&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Me.lanes|=h,hi|=h}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,Dn(r,e.memoizedState)||(qt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Me.lanes|=i,hi|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uf(t){var e=vn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Dn(i,e.memoizedState)||(qt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function VT(){}function FT(t,e){var n=Me,r=vn(),s=e(),i=!Dn(r.memoizedState,s);if(i&&(r.memoizedState=s,qt=!0),r=r.queue,Og(BT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||dt!==null&&dt.memoizedState.tag&1){if(n.flags|=2048,bl(9,$T.bind(null,n,r,s,e),void 0,null),ft===null)throw Error(U(349));di&30||UT(n,e,s)}return s}function UT(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $T(t,e,n,r){e.value=n,e.getSnapshot=r,zT(e)&&WT(t)}function BT(t,e,n){return n(function(){zT(e)&&WT(t)})}function zT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function WT(t){var e=Er(t,1);e!==null&&An(e,t,1,-1)}function g0(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:t},e.queue=t,t=t.dispatch=Ok.bind(null,Me,t),[e.memoizedState,t]}function bl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qT(){return vn().memoizedState}function gu(t,e,n,r){var s=Fn();Me.flags|=t,s.memoizedState=bl(1|e,n,void 0,r===void 0?null:r)}function Jd(t,e,n,r){var s=vn();r=r===void 0?null:r;var i=void 0;if(rt!==null){var o=rt.memoizedState;if(i=o.destroy,r!==null&&Rg(r,o.deps)){s.memoizedState=bl(e,n,i,r);return}}Me.flags|=t,s.memoizedState=bl(1|e,n,i,r)}function _0(t,e){return gu(8390656,8,t,e)}function Og(t,e){return Jd(2048,8,t,e)}function HT(t,e){return Jd(4,2,t,e)}function GT(t,e){return Jd(4,4,t,e)}function KT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function QT(t,e,n){return n=n!=null?n.concat([t]):null,Jd(4,4,KT.bind(null,e,t),n)}function Lg(){}function YT(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JT(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function XT(t,e,n){return di&21?(Dn(n,e)||(n=rT(),Me.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qt=!0),t.memoizedState=n)}function Pk(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Vf.transition;Vf.transition={};try{t(!1),e()}finally{Ee=n,Vf.transition=r}}function ZT(){return vn().memoizedState}function Dk(t,e,n){var r=us(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},eI(t))tI(e,n);else if(n=LT(t,e,n,r),n!==null){var s=Mt();An(n,t,r,s),nI(n,e,r)}}function Ok(t,e,n){var r=us(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(eI(t))tI(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(s.next=s,bg(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=LT(t,e,s,r),n!==null&&(s=Mt(),An(n,t,r,s),nI(n,e,r))}}function eI(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function tI(t,e){Ka=Ju=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nI(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hg(t,n)}}var Xu={readContext:yn,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useInsertionEffect:Et,useLayoutEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useMutableSource:Et,useSyncExternalStore:Et,useId:Et,unstable_isNewReconciler:!1},Lk={readContext:yn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:_0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,KT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Dk.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:g0,useDebugValue:Lg,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=g0(!1),e=t[0];return t=Pk.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,s=Fn();if(Oe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ft===null)throw Error(U(349));di&30||UT(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,_0(BT.bind(null,r,i,t),[t]),r.flags|=2048,bl(9,$T.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Fn(),e=ft.identifierPrefix;if(Oe){var n=hr,r=dr;n=(r&~(1<<32-Nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Rk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jk={readContext:yn,useCallback:YT,useContext:yn,useEffect:Og,useImperativeHandle:QT,useInsertionEffect:HT,useLayoutEffect:GT,useMemo:JT,useReducer:Ff,useRef:qT,useState:function(){return Ff(Sl)},useDebugValue:Lg,useDeferredValue:function(t){var e=vn();return XT(e,rt.memoizedState,t)},useTransition:function(){var t=Ff(Sl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:VT,useSyncExternalStore:FT,useId:ZT,unstable_isNewReconciler:!1},Mk={readContext:yn,useCallback:YT,useContext:yn,useEffect:Og,useImperativeHandle:QT,useInsertionEffect:HT,useLayoutEffect:GT,useMemo:JT,useReducer:Uf,useRef:qT,useState:function(){return Uf(Sl)},useDebugValue:Lg,useDeferredValue:function(t){var e=vn();return rt===null?e.memoizedState=t:XT(e,rt.memoizedState,t)},useTransition:function(){var t=Uf(Sl)[0],e=vn().memoizedState;return[t,e]},useMutableSource:VT,useSyncExternalStore:FT,useId:ZT,unstable_isNewReconciler:!1};function En(t,e){if(t&&t.defaultProps){e=Ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xd={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mt(),s=us(t),i=gr(r,s);i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(An(e,t,s,r),pu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mt(),s=us(t),i=gr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ls(t,i,s),e!==null&&(An(e,t,s,r),pu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mt(),r=us(t),s=gr(n,r);s.tag=2,e!=null&&(s.callback=e),e=ls(t,s,r),e!==null&&(An(e,t,r,n),pu(e,t,r))}};function y0(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!yl(n,r)||!yl(s,i):!0}function rI(t,e,n){var r=!1,s=xs,i=e.contextType;return typeof i=="object"&&i!==null?i=yn(i):(s=Kt(e)?ci:Nt.current,r=e.contextTypes,i=(r=r!=null)?xo(t,s):xs),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function v0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xd.enqueueReplaceState(e,e.state,null)}function Kp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Cg(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=yn(i):(i=Kt(e)?ci:Nt.current,s.context=xo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Gp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Xd.enqueueReplaceState(s,s.state,null),Qu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e){try{var n="",r=e;do n+=dA(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function $f(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vk=typeof WeakMap=="function"?WeakMap:Map;function sI(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ed||(ed=!0,im=r),Qp(t,e)},n}function iI(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qp(t,e),typeof r!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function w0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Xk.bind(null,t,e,n),e.then(t,t))}function x0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function E0(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,ls(n,e,1))),n.lanes|=1),t)}var Fk=Pr.ReactCurrentOwner,qt=!1;function Lt(t,e,n,r){e.child=t===null?OT(e,null,n,r):To(e,t.child,n,r)}function T0(t,e,n,r,s){n=n.render;var i=e.ref;return lo(e,s),r=Pg(t,e,n,r,i,s),n=Dg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Tr(t,e,s)):(Oe&&n&&wg(e),e.flags|=1,Lt(t,e,r,s),e.child)}function I0(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!zg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,oI(t,e,i,r,s)):(t=wu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:yl,n(o,r)&&t.ref===e.ref)return Tr(t,e,s)}return e.flags|=1,t=ds(i,r),t.ref=e.ref,t.return=e,e.child=t}function oI(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(yl(i,r)&&t.ref===e.ref)if(qt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(qt=!0);else return e.lanes=t.lanes,Tr(t,e,s)}return Yp(t,e,n,r,s)}function aI(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Xi,Zt),Zt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Xi,Zt),Zt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ne(Xi,Zt),Zt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ne(Xi,Zt),Zt|=r;return Lt(t,e,s,n),e.child}function lI(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yp(t,e,n,r,s){var i=Kt(n)?ci:Nt.current;return i=xo(e,i),lo(e,s),n=Pg(t,e,n,r,i,s),r=Dg(),t!==null&&!qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Tr(t,e,s)):(Oe&&r&&wg(e),e.flags|=1,Lt(t,e,n,s),e.child)}function S0(t,e,n,r,s){if(Kt(n)){var i=!0;Wu(e)}else i=!1;if(lo(e,s),e.stateNode===null)_u(t,e),rI(e,n,r),Kp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=yn(u):(u=Kt(n)?ci:Nt.current,u=xo(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&v0(e,o,r,u),qr=!1;var m=e.memoizedState;o.state=m,Qu(e,r,o,s),l=e.memoizedState,a!==r||m!==l||Gt.current||qr?(typeof h=="function"&&(Gp(e,n,h,r),l=e.memoizedState),(a=qr||y0(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jT(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:En(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yn(l):(l=Kt(n)?ci:Nt.current,l=xo(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&v0(e,o,r,l),qr=!1,m=e.memoizedState,o.state=m,Qu(e,r,o,s);var S=e.memoizedState;a!==f||m!==S||Gt.current||qr?(typeof _=="function"&&(Gp(e,n,_,r),S=e.memoizedState),(u=qr||y0(e,n,u,r,m,S,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Jp(t,e,n,r,i,s)}function Jp(t,e,n,r,s,i){lI(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&u0(e,n,!1),Tr(t,e,i);r=e.stateNode,Fk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=To(e,t.child,null,i),e.child=To(e,null,a,i)):Lt(t,e,a,i),e.memoizedState=r.state,s&&u0(e,n,!0),e.child}function cI(t){var e=t.stateNode;e.pendingContext?c0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&c0(t,e.context,!1),Ng(t,e.containerInfo)}function b0(t,e,n,r,s){return Eo(),Eg(s),e.flags|=256,Lt(t,e,n,r),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function Zp(t){return{baseLanes:t,cachePool:null,transitions:null}}function uI(t,e,n){var r=e.pendingProps,s=Le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ne(Le,s&1),t===null)return qp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=th(o,r,0,null),t=ii(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zp(n),e.memoizedState=Xp,t):jg(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Uk(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ds(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=ds(a,i):(i=ii(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xp,r}return i=t.child,t=i.sibling,r=ds(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jg(t,e){return e=th({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hc(t,e,n,r){return r!==null&&Eg(r),To(e,t.child,null,n),t=jg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=$f(Error(U(422))),Hc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=th({mode:"visible",children:r.children},s,0,null),i=ii(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&To(e,t.child,null,o),e.child.memoizedState=Zp(o),e.memoizedState=Xp,i);if(!(e.mode&1))return Hc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=$f(i,r,void 0),Hc(t,e,o,r)}if(a=(o&t.childLanes)!==0,qt||a){if(r=ft,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Er(t,s),An(r,t,s,-1))}return Bg(),r=$f(Error(U(421))),Hc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Zk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,en=as(s.nextSibling),rn=e,Oe=!0,In=null,t!==null&&(dn[hn++]=dr,dn[hn++]=hr,dn[hn++]=ui,dr=t.id,hr=t.overflow,ui=e),e=jg(e,r.children),e.flags|=4096,e)}function C0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hp(t.return,e,n)}function Bf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function dI(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Lt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C0(t,n,e);else if(t.tag===19)C0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Yu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Bf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Yu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Bf(e,!0,n,null,i);break;case"together":Bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _u(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=ds(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ds(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $k(t,e,n){switch(e.tag){case 3:cI(e),Eo();break;case 5:MT(e);break;case 1:Kt(e.type)&&Wu(e);break;case 4:Ng(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ne(Gu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?uI(t,e,n):(Ne(Le,Le.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Ne(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dI(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ne(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,aI(t,e,n)}return Tr(t,e,n)}var hI,em,fI,pI;hI=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};em=function(){};fI=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ei(qn.current);var i=null;switch(n){case"input":s=Ep(t,s),r=Ep(t,r),i=[];break;case"select":s=Ve({},s,{value:void 0}),r=Ve({},r,{value:void 0}),i=[];break;case"textarea":s=Sp(t,s),r=Sp(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bu)}Cp(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(dl.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(dl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Re("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};pI=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ia(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Bk(t,e,n){var r=e.pendingProps;switch(xg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(e),null;case 1:return Kt(e.type)&&zu(),Tt(e),null;case 3:return r=e.stateNode,Io(),De(Gt),De(Nt),kg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,In!==null&&(lm(In),In=null))),em(t,e),Tt(e),null;case 5:Ag(e);var s=ei(Tl.current);if(n=e.type,t!==null&&e.stateNode!=null)fI(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Tt(e),null}if(t=ei(qn.current),Wc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[$n]=e,r[xl]=i,t=(e.mode&1)!==0,n){case"dialog":Re("cancel",r),Re("close",r);break;case"iframe":case"object":case"embed":Re("load",r);break;case"video":case"audio":for(s=0;s<La.length;s++)Re(La[s],r);break;case"source":Re("error",r);break;case"img":case"image":case"link":Re("error",r),Re("load",r);break;case"details":Re("toggle",r);break;case"input":jv(r,i),Re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Re("invalid",r);break;case"textarea":Vv(r,i),Re("invalid",r)}Cp(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&zc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&zc(r.textContent,a,t),s=["children",""+a]):dl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Re("scroll",r)}switch(n){case"input":Lc(r),Mv(r,i,!0);break;case"textarea":Lc(r),Fv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=BE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[xl]=r,hI(t,e,!1,!1),e.stateNode=t;e:{switch(o=Np(n,r),n){case"dialog":Re("cancel",t),Re("close",t),s=r;break;case"iframe":case"object":case"embed":Re("load",t),s=r;break;case"video":case"audio":for(s=0;s<La.length;s++)Re(La[s],t);s=r;break;case"source":Re("error",t),s=r;break;case"img":case"image":case"link":Re("error",t),Re("load",t),s=r;break;case"details":Re("toggle",t),s=r;break;case"input":jv(t,r),s=Ep(t,r),Re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ve({},r,{value:void 0}),Re("invalid",t);break;case"textarea":Vv(t,r),s=Sp(t,r),Re("invalid",t);break;default:s=r}Cp(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?qE(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zE(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hl(t,l):typeof l=="number"&&hl(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dl.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Re("scroll",t):l!=null&&og(t,i,l,o))}switch(n){case"input":Lc(t),Mv(t,r,!1);break;case"textarea":Lc(t),Fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ws(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?so(t,!!r.multiple,i,!1):r.defaultValue!=null&&so(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Bu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Tt(e),null;case 6:if(t&&e.stateNode!=null)pI(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=ei(Tl.current),ei(qn.current),Wc(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(i=r.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:zc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return Tt(e),null;case 13:if(De(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&en!==null&&e.mode&1&&!(e.flags&128))PT(),Eo(),e.flags|=98560,i=!1;else if(i=Wc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[$n]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Tt(e),i=!1}else In!==null&&(lm(In),In=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?it===0&&(it=3):Bg())),e.updateQueue!==null&&(e.flags|=4),Tt(e),null);case 4:return Io(),em(t,e),t===null&&vl(e.stateNode.containerInfo),Tt(e),null;case 10:return Sg(e.type._context),Tt(e),null;case 17:return Kt(e.type)&&zu(),Tt(e),null;case 19:if(De(Le),i=e.memoizedState,i===null)return Tt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ia(i,!1);else{if(it!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yu(t),o!==null){for(e.flags|=128,Ia(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Le,Le.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>bo&&(e.flags|=128,r=!0,Ia(i,!1),e.lanes=4194304)}else{if(!r)if(t=Yu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ia(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return Tt(e),null}else 2*He()-i.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,r=!0,Ia(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=Le.current,Ne(Le,r?n&1|2:n&1),e):(Tt(e),null);case 22:case 23:return $g(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Zt&1073741824&&(Tt(e),e.subtreeFlags&6&&(e.flags|=8192)):Tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function zk(t,e){switch(xg(e),e.tag){case 1:return Kt(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Io(),De(Gt),De(Nt),kg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ag(e),null;case 13:if(De(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(Le),null;case 4:return Io(),null;case 10:return Sg(e.type._context),null;case 22:case 23:return $g(),null;case 24:return null;default:return null}}var Gc=!1,bt=!1,Wk=typeof WeakSet=="function"?WeakSet:Set,G=null;function Ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ue(t,e,r)}else n.current=null}function tm(t,e,n){try{n()}catch(r){Ue(t,e,r)}}var N0=!1;function qk(t,e){if(Vp=Fu,t=vT(),vg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fp={focusedElem:t,selectionRange:n},Fu=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var A=S.memoizedProps,P=S.memoizedState,I=e.stateNode,E=I.getSnapshotBeforeUpdate(e.elementType===e.type?A:En(e.type,A),P);I.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(k){Ue(e,e.return,k)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return S=N0,N0=!1,S}function Qa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&tm(e,n,i)}s=s.next}while(s!==r)}}function Zd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nm(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mI(t){var e=t.alternate;e!==null&&(t.alternate=null,mI(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[xl],delete e[Bp],delete e[Ck],delete e[Nk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gI(t){return t.tag===5||t.tag===3||t.tag===4}function A0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gI(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bu));else if(r!==4&&(t=t.child,t!==null))for(rm(t,e,n),t=t.sibling;t!==null;)rm(t,e,n),t=t.sibling}function sm(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sm(t,e,n),t=t.sibling;t!==null;)sm(t,e,n),t=t.sibling}var mt=null,Tn=!1;function Br(t,e,n){for(n=n.child;n!==null;)_I(t,e,n),n=n.sibling}function _I(t,e,n){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(qd,n)}catch{}switch(n.tag){case 5:bt||Ji(n,e);case 6:var r=mt,s=Tn;mt=null,Br(t,e,n),mt=r,Tn=s,mt!==null&&(Tn?(t=mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):mt.removeChild(n.stateNode));break;case 18:mt!==null&&(Tn?(t=mt,n=n.stateNode,t.nodeType===8?Lf(t.parentNode,n):t.nodeType===1&&Lf(t,n),gl(t)):Lf(mt,n.stateNode));break;case 4:r=mt,s=Tn,mt=n.stateNode.containerInfo,Tn=!0,Br(t,e,n),mt=r,Tn=s;break;case 0:case 11:case 14:case 15:if(!bt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&tm(n,e,o),s=s.next}while(s!==r)}Br(t,e,n);break;case 1:if(!bt&&(Ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ue(n,e,a)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(bt=(r=bt)||n.memoizedState!==null,Br(t,e,n),bt=r):Br(t,e,n);break;default:Br(t,e,n)}}function k0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wk),e.forEach(function(r){var s=eR.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function wn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,Tn=!1;break e;case 3:mt=a.stateNode.containerInfo,Tn=!0;break e;case 4:mt=a.stateNode.containerInfo,Tn=!0;break e}a=a.return}if(mt===null)throw Error(U(160));_I(i,o,s),mt=null,Tn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Ue(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yI(e,t),e=e.sibling}function yI(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wn(e,t),Vn(t),r&4){try{Qa(3,t,t.return),Zd(3,t)}catch(A){Ue(t,t.return,A)}try{Qa(5,t,t.return)}catch(A){Ue(t,t.return,A)}}break;case 1:wn(e,t),Vn(t),r&512&&n!==null&&Ji(n,n.return);break;case 5:if(wn(e,t),Vn(t),r&512&&n!==null&&Ji(n,n.return),t.flags&32){var s=t.stateNode;try{hl(s,"")}catch(A){Ue(t,t.return,A)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&UE(s,i),Np(a,o);var u=Np(a,i);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?qE(s,f):h==="dangerouslySetInnerHTML"?zE(s,f):h==="children"?hl(s,f):og(s,h,f,u)}switch(a){case"input":Tp(s,i);break;case"textarea":$E(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?so(s,!!i.multiple,_,!1):m!==!!i.multiple&&(i.defaultValue!=null?so(s,!!i.multiple,i.defaultValue,!0):so(s,!!i.multiple,i.multiple?[]:"",!1))}s[xl]=i}catch(A){Ue(t,t.return,A)}}break;case 6:if(wn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(A){Ue(t,t.return,A)}}break;case 3:if(wn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gl(e.containerInfo)}catch(A){Ue(t,t.return,A)}break;case 4:wn(e,t),Vn(t);break;case 13:wn(e,t),Vn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Fg=He())),r&4&&k0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(bt=(u=bt)||h,wn(e,t),bt=u):wn(e,t),Vn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(G=t,h=t.child;h!==null;){for(f=G=h;G!==null;){switch(m=G,_=m.child,m.tag){case 0:case 11:case 14:case 15:Qa(4,m,m.return);break;case 1:Ji(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(A){Ue(r,n,A)}}break;case 5:Ji(m,m.return);break;case 22:if(m.memoizedState!==null){P0(f);continue}}_!==null?(_.return=m,G=_):P0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=WE("display",o))}catch(A){Ue(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(A){Ue(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:wn(e,t),Vn(t),r&4&&k0(t);break;case 21:break;default:wn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gI(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(hl(s,""),r.flags&=-33);var i=A0(t);sm(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=A0(t);rm(t,a,o);break;default:throw Error(U(161))}}catch(l){Ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hk(t,e,n){G=t,vI(t)}function vI(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Gc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||bt;a=Gc;var u=bt;if(Gc=o,(bt=l)&&!u)for(G=s;G!==null;)o=G,l=o.child,o.tag===22&&o.memoizedState!==null?D0(s):l!==null?(l.return=o,G=l):D0(s);for(;i!==null;)G=i,vI(i),i=i.sibling;G=s,Gc=a,bt=u}R0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):R0(t)}}function R0(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bt||Zd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!bt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:En(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&m0(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}m0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&gl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}bt||e.flags&512&&nm(e)}catch(m){Ue(e,e.return,m)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function P0(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function D0(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zd(4,e)}catch(l){Ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Ue(e,s,l)}}var i=e.return;try{nm(e)}catch(l){Ue(e,i,l)}break;case 5:var o=e.return;try{nm(e)}catch(l){Ue(e,o,l)}}}catch(l){Ue(e,e.return,l)}if(e===t){G=null;break}var a=e.sibling;if(a!==null){a.return=e.return,G=a;break}G=e.return}}var Gk=Math.ceil,Zu=Pr.ReactCurrentDispatcher,Mg=Pr.ReactCurrentOwner,gn=Pr.ReactCurrentBatchConfig,_e=0,ft=null,Ye=null,yt=0,Zt=0,Xi=Os(0),it=0,Cl=null,hi=0,eh=0,Vg=0,Ya=null,Bt=null,Fg=0,bo=1/0,ar=null,ed=!1,im=null,cs=null,Kc=!1,ts=null,td=0,Ja=0,om=null,yu=-1,vu=0;function Mt(){return _e&6?He():yu!==-1?yu:yu=He()}function us(t){return t.mode&1?_e&2&&yt!==0?yt&-yt:kk.transition!==null?(vu===0&&(vu=rT()),vu):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:uT(t.type)),t):1}function An(t,e,n,r){if(50<Ja)throw Ja=0,om=null,Error(U(185));Jl(t,n,r),(!(_e&2)||t!==ft)&&(t===ft&&(!(_e&2)&&(eh|=n),it===4&&Gr(t,yt)),Qt(t,r),n===1&&_e===0&&!(e.mode&1)&&(bo=He()+500,Yd&&Ls()))}function Qt(t,e){var n=t.callbackNode;kA(t,e);var r=Vu(t,t===ft?yt:0);if(r===0)n!==null&&Bv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bv(n),e===1)t.tag===0?Ak(O0.bind(null,t)):AT(O0.bind(null,t)),Sk(function(){!(_e&6)&&Ls()}),n=null;else{switch(sT(r)){case 1:n=dg;break;case 4:n=tT;break;case 16:n=Mu;break;case 536870912:n=nT;break;default:n=Mu}n=CI(n,wI.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function wI(t,e){if(yu=-1,vu=0,_e&6)throw Error(U(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var r=Vu(t,t===ft?yt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nd(t,r);else{e=r;var s=_e;_e|=2;var i=EI();(ft!==t||yt!==e)&&(ar=null,bo=He()+500,si(t,e));do try{Yk();break}catch(a){xI(t,a)}while(!0);Ig(),Zu.current=i,_e=s,Ye!==null?e=0:(ft=null,yt=0,e=it)}if(e!==0){if(e===2&&(s=Dp(t),s!==0&&(r=s,e=am(t,s))),e===1)throw n=Cl,si(t,0),Gr(t,r),Qt(t,He()),n;if(e===6)Gr(t,r);else{if(s=t.current.alternate,!(r&30)&&!Kk(s)&&(e=nd(t,r),e===2&&(i=Dp(t),i!==0&&(r=i,e=am(t,i))),e===1))throw n=Cl,si(t,0),Gr(t,r),Qt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ks(t,Bt,ar);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=Fg+500-He(),10<e)){if(Vu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$p(Ks.bind(null,t,Bt,ar),e);break}Ks(t,Bt,ar);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Nn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gk(r/1960))-r,10<r){t.timeoutHandle=$p(Ks.bind(null,t,Bt,ar),r);break}Ks(t,Bt,ar);break;case 5:Ks(t,Bt,ar);break;default:throw Error(U(329))}}}return Qt(t,He()),t.callbackNode===n?wI.bind(null,t):null}function am(t,e){var n=Ya;return t.current.memoizedState.isDehydrated&&(si(t,e).flags|=256),t=nd(t,e),t!==2&&(e=Bt,Bt=n,e!==null&&lm(e)),t}function lm(t){Bt===null?Bt=t:Bt.push.apply(Bt,t)}function Kk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Dn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~Vg,e&=~eh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Nn(e),r=1<<n;t[n]=-1,e&=~r}}function O0(t){if(_e&6)throw Error(U(327));co();var e=Vu(t,0);if(!(e&1))return Qt(t,He()),null;var n=nd(t,e);if(t.tag!==0&&n===2){var r=Dp(t);r!==0&&(e=r,n=am(t,r))}if(n===1)throw n=Cl,si(t,0),Gr(t,e),Qt(t,He()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ks(t,Bt,ar),Qt(t,He()),null}function Ug(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(bo=He()+500,Yd&&Ls())}}function fi(t){ts!==null&&ts.tag===0&&!(_e&6)&&co();var e=_e;_e|=1;var n=gn.transition,r=Ee;try{if(gn.transition=null,Ee=1,t)return t()}finally{Ee=r,gn.transition=n,_e=e,!(_e&6)&&Ls()}}function $g(){Zt=Xi.current,De(Xi)}function si(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ik(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(xg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Io(),De(Gt),De(Nt),kg();break;case 5:Ag(r);break;case 4:Io();break;case 13:De(Le);break;case 19:De(Le);break;case 10:Sg(r.type._context);break;case 22:case 23:$g()}n=n.return}if(ft=t,Ye=t=ds(t.current,null),yt=Zt=e,it=0,Cl=null,Vg=eh=hi=0,Bt=Ya=null,Zs!==null){for(e=0;e<Zs.length;e++)if(n=Zs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Zs=null}return t}function xI(t,e){do{var n=Ye;try{if(Ig(),mu.current=Xu,Ju){for(var r=Me.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ju=!1}if(di=0,dt=rt=Me=null,Ka=!1,Il=0,Mg.current=null,n===null||n.return===null){it=1,Cl=e,Ye=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=x0(o);if(_!==null){_.flags&=-257,E0(_,o,a,i,e),_.mode&1&&w0(i,u,e),e=_,l=u;var S=e.updateQueue;if(S===null){var A=new Set;A.add(l),e.updateQueue=A}else S.add(l);break e}else{if(!(e&1)){w0(i,u,e),Bg();break e}l=Error(U(426))}}else if(Oe&&a.mode&1){var P=x0(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),E0(P,o,a,i,e),Eg(So(l,a));break e}}i=l=So(l,a),it!==4&&(it=2),Ya===null?Ya=[i]:Ya.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=sI(i,l,e);p0(i,I);break e;case 1:a=l;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(cs===null||!cs.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var k=iI(i,a,e);p0(i,k);break e}}i=i.return}while(i!==null)}II(n)}catch(M){e=M,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function EI(){var t=Zu.current;return Zu.current=Xu,t===null?Xu:t}function Bg(){(it===0||it===3||it===2)&&(it=4),ft===null||!(hi&268435455)&&!(eh&268435455)||Gr(ft,yt)}function nd(t,e){var n=_e;_e|=2;var r=EI();(ft!==t||yt!==e)&&(ar=null,si(t,e));do try{Qk();break}catch(s){xI(t,s)}while(!0);if(Ig(),_e=n,Zu.current=r,Ye!==null)throw Error(U(261));return ft=null,yt=0,it}function Qk(){for(;Ye!==null;)TI(Ye)}function Yk(){for(;Ye!==null&&!xA();)TI(Ye)}function TI(t){var e=bI(t.alternate,t,Zt);t.memoizedProps=t.pendingProps,e===null?II(t):Ye=e,Mg.current=null}function II(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zk(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{it=6,Ye=null;return}}else if(n=Bk(n,e,Zt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);it===0&&(it=5)}function Ks(t,e,n){var r=Ee,s=gn.transition;try{gn.transition=null,Ee=1,Jk(t,e,n,r)}finally{gn.transition=s,Ee=r}return null}function Jk(t,e,n,r){do co();while(ts!==null);if(_e&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(RA(t,i),t===ft&&(Ye=ft=null,yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kc||(Kc=!0,CI(Mu,function(){return co(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gn.transition,gn.transition=null;var o=Ee;Ee=1;var a=_e;_e|=4,Mg.current=null,qk(t,n),yI(n,t),_k(Fp),Fu=!!Vp,Fp=Vp=null,t.current=n,Hk(n),EA(),_e=a,Ee=o,gn.transition=i}else t.current=n;if(Kc&&(Kc=!1,ts=t,td=s),i=t.pendingLanes,i===0&&(cs=null),SA(n.stateNode),Qt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ed)throw ed=!1,t=im,im=null,t;return td&1&&t.tag!==0&&co(),i=t.pendingLanes,i&1?t===om?Ja++:(Ja=0,om=t):Ja=0,Ls(),null}function co(){if(ts!==null){var t=sT(td),e=gn.transition,n=Ee;try{if(gn.transition=null,Ee=16>t?16:t,ts===null)var r=!1;else{if(t=ts,ts=null,td=0,_e&6)throw Error(U(331));var s=_e;for(_e|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(G=u;G!==null;){var h=G;switch(h.tag){case 0:case 11:case 15:Qa(8,h,i)}var f=h.child;if(f!==null)f.return=h,G=f;else for(;G!==null;){h=G;var m=h.sibling,_=h.return;if(mI(h),h===u){G=null;break}if(m!==null){m.return=_,G=m;break}G=_}}}var S=i.alternate;if(S!==null){var A=S.child;if(A!==null){S.child=null;do{var P=A.sibling;A.sibling=null,A=P}while(A!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qa(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,G=I;break e}G=i.return}}var E=t.current;for(G=E;G!==null;){o=G;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,G=C;else e:for(o=E;G!==null;){if(a=G,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zd(9,a)}}catch(M){Ue(a,a.return,M)}if(a===o){G=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,G=k;break e}G=a.return}}if(_e=s,Ls(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(qd,t)}catch{}r=!0}return r}finally{Ee=n,gn.transition=e}}return!1}function L0(t,e,n){e=So(n,e),e=sI(t,e,1),t=ls(t,e,1),e=Mt(),t!==null&&(Jl(t,1,e),Qt(t,e))}function Ue(t,e,n){if(t.tag===3)L0(t,t,n);else for(;e!==null;){if(e.tag===3){L0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cs===null||!cs.has(r))){t=So(n,t),t=iI(e,t,1),e=ls(e,t,1),t=Mt(),e!==null&&(Jl(e,1,t),Qt(e,t));break}}e=e.return}}function Xk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Mt(),t.pingedLanes|=t.suspendedLanes&n,ft===t&&(yt&n)===n&&(it===4||it===3&&(yt&130023424)===yt&&500>He()-Fg?si(t,0):Vg|=n),Qt(t,e)}function SI(t,e){e===0&&(t.mode&1?(e=Vc,Vc<<=1,!(Vc&130023424)&&(Vc=4194304)):e=1);var n=Mt();t=Er(t,e),t!==null&&(Jl(t,e,n),Qt(t,n))}function Zk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),SI(t,n)}function eR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),SI(t,n)}var bI;bI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qt=!1,$k(t,e,n);qt=!!(t.flags&131072)}else qt=!1,Oe&&e.flags&1048576&&kT(e,Hu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_u(t,e),t=e.pendingProps;var s=xo(e,Nt.current);lo(e,n),s=Pg(null,e,r,t,s,n);var i=Dg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(r)?(i=!0,Wu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Cg(e),s.updater=Xd,e.stateNode=s,s._reactInternals=e,Kp(e,r,t,n),e=Jp(null,e,r,!0,i,n)):(e.tag=0,Oe&&i&&wg(e),Lt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_u(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=nR(r),t=En(r,t),s){case 0:e=Yp(null,e,r,t,n);break e;case 1:e=S0(null,e,r,t,n);break e;case 11:e=T0(null,e,r,t,n);break e;case 14:e=I0(null,e,r,En(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),Yp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),S0(t,e,r,s,n);case 3:e:{if(cI(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,jT(t,e),Qu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=So(Error(U(423)),e),e=b0(t,e,r,n,s);break e}else if(r!==s){s=So(Error(U(424)),e),e=b0(t,e,r,n,s);break e}else for(en=as(e.stateNode.containerInfo.firstChild),rn=e,Oe=!0,In=null,n=OT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),r===s){e=Tr(t,e,n);break e}Lt(t,e,r,n)}e=e.child}return e;case 5:return MT(e),t===null&&qp(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Up(r,s)?o=null:i!==null&&Up(r,i)&&(e.flags|=32),lI(t,e),Lt(t,e,o,n),e.child;case 6:return t===null&&qp(e),null;case 13:return uI(t,e,n);case 4:return Ng(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=To(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),T0(t,e,r,s,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ne(Gu,r._currentValue),r._currentValue=o,i!==null)if(Dn(i.value,o)){if(i.children===s.children&&!Gt.current){e=Tr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=gr(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Hp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Lt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,lo(e,n),s=yn(s),r=r(s),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return r=e.type,s=En(r,e.pendingProps),s=En(r.type,s),I0(t,e,r,s,n);case 15:return oI(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:En(r,s),_u(t,e),e.tag=1,Kt(r)?(t=!0,Wu(e)):t=!1,lo(e,n),rI(e,r,s),Kp(e,r,s,n),Jp(null,e,r,!0,t,n);case 19:return dI(t,e,n);case 22:return aI(t,e,n)}throw Error(U(156,e.tag))};function CI(t,e){return eT(t,e)}function tR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new tR(t,e,n,r)}function zg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nR(t){if(typeof t=="function")return zg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===lg)return 11;if(t===cg)return 14}return 2}function ds(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")zg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Bi:return ii(n.children,s,i,e);case ag:o=8,s|=8;break;case yp:return t=pn(12,n,e,s|2),t.elementType=yp,t.lanes=i,t;case vp:return t=pn(13,n,e,s),t.elementType=vp,t.lanes=i,t;case wp:return t=pn(19,n,e,s),t.elementType=wp,t.lanes=i,t;case ME:return th(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case LE:o=10;break e;case jE:o=9;break e;case lg:o=11;break e;case cg:o=14;break e;case Wr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=pn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function ii(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function th(t,e,n,r){return t=pn(22,t,r,e),t.elementType=ME,t.lanes=n,t.stateNode={isHidden:!1},t}function zf(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function Wf(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function rR(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=If(0),this.expirationTimes=If(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=If(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Wg(t,e,n,r,s,i,o,a,l){return t=new rR(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=pn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cg(i),t}function sR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function NI(t){if(!t)return xs;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Kt(n))return NT(t,n,e)}return e}function AI(t,e,n,r,s,i,o,a,l){return t=Wg(n,r,!0,t,s,i,o,a,l),t.context=NI(null),n=t.current,r=Mt(),s=us(n),i=gr(r,s),i.callback=e??null,ls(n,i,s),t.current.lanes=s,Jl(t,s,r),Qt(t,r),t}function nh(t,e,n,r){var s=e.current,i=Mt(),o=us(s);return n=NI(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ls(s,e,o),t!==null&&(An(t,s,o,i),pu(t,s,o)),o}function rd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function j0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qg(t,e){j0(t,e),(t=t.alternate)&&j0(t,e)}function iR(){return null}var kI=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hg(t){this._internalRoot=t}rh.prototype.render=Hg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));nh(t,e,null,null)};rh.prototype.unmount=Hg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){nh(null,t,null,null)}),e[xr]=null}};function rh(t){this._internalRoot=t}rh.prototype.unstable_scheduleHydration=function(t){if(t){var e=aT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hr.length&&e!==0&&e<Hr[n].priority;n++);Hr.splice(n,0,t),n===0&&cT(t)}};function Gg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M0(){}function oR(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=rd(o);i.call(u)}}var o=AI(e,r,t,0,null,!1,!1,"",M0);return t._reactRootContainer=o,t[xr]=o.current,vl(t.nodeType===8?t.parentNode:t),fi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=rd(l);a.call(u)}}var l=Wg(t,0,!1,null,null,!1,!1,"",M0);return t._reactRootContainer=l,t[xr]=l.current,vl(t.nodeType===8?t.parentNode:t),fi(function(){nh(e,l,n,r)}),l}function ih(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=rd(o);a.call(l)}}nh(e,o,t,s)}else o=oR(n,e,t,s,r);return rd(o)}iT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oa(e.pendingLanes);n!==0&&(hg(e,n|1),Qt(e,He()),!(_e&6)&&(bo=He()+500,Ls()))}break;case 13:fi(function(){var r=Er(t,1);if(r!==null){var s=Mt();An(r,t,1,s)}}),qg(t,1)}};fg=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Mt();An(e,t,134217728,n)}qg(t,134217728)}};oT=function(t){if(t.tag===13){var e=us(t),n=Er(t,e);if(n!==null){var r=Mt();An(n,t,e,r)}qg(t,e)}};aT=function(){return Ee};lT=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};kp=function(t,e,n){switch(e){case"input":if(Tp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Qd(r);if(!s)throw Error(U(90));FE(r),Tp(r,s)}}}break;case"textarea":$E(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};KE=Ug;QE=fi;var aR={usingClientEntryPoint:!1,Events:[Zl,Hi,Qd,HE,GE,Ug]},Sa={findFiberByHostInstance:Xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lR={bundleType:Sa.bundleType,version:Sa.version,rendererPackageName:Sa.rendererPackageName,rendererConfig:Sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=XE(t),t===null?null:t.stateNode},findFiberByHostInstance:Sa.findFiberByHostInstance||iR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qc.isDisabled&&Qc.supportsFiber)try{qd=Qc.inject(lR),Wn=Qc}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aR;an.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gg(e))throw Error(U(200));return sR(t,e,null,n)};an.createRoot=function(t,e){if(!Gg(t))throw Error(U(299));var n=!1,r="",s=kI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Wg(t,1,!1,null,null,n,!1,r,s),t[xr]=e.current,vl(t.nodeType===8?t.parentNode:t),new Hg(e)};an.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=XE(e),t=t===null?null:t.stateNode,t};an.flushSync=function(t){return fi(t)};an.hydrate=function(t,e,n){if(!sh(e))throw Error(U(200));return ih(null,t,e,!0,n)};an.hydrateRoot=function(t,e,n){if(!Gg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=kI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=AI(e,null,t,1,n??null,s,!1,i,o),t[xr]=e.current,vl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new rh(e)};an.render=function(t,e,n){if(!sh(e))throw Error(U(200));return ih(null,t,e,!1,n)};an.unmountComponentAtNode=function(t){if(!sh(t))throw Error(U(40));return t._reactRootContainer?(fi(function(){ih(null,null,t,!1,function(){t._reactRootContainer=null,t[xr]=null})}),!0):!1};an.unstable_batchedUpdates=Ug;an.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!sh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return ih(t,e,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function RI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RI)}catch(t){console.error(t)}}RI(),RE.exports=an;var cR=RE.exports,V0=cR;gp.createRoot=V0.createRoot,gp.hydrateRoot=V0.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nl.apply(this,arguments)}var ns;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ns||(ns={}));const F0="popstate";function uR(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return cm("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:sd(s)}return hR(e,n,null,t)}function Ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Kg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dR(){return Math.random().toString(36).substr(2,8)}function U0(t,e){return{usr:t.state,key:t.key,idx:e}}function cm(t,e,n,r){return n===void 0&&(n=null),Nl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zo(e):e,{state:n,key:e&&e.key||r||dR()})}function sd(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function hR(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=ns.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Nl({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=ns.Pop;let P=h(),I=P==null?null:P-u;u=P,l&&l({action:a,location:A.location,delta:I})}function m(P,I){a=ns.Push;let E=cm(A.location,P,I);u=h()+1;let C=U0(E,u),k=A.createHref(E);try{o.pushState(C,"",k)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(k)}i&&l&&l({action:a,location:A.location,delta:1})}function _(P,I){a=ns.Replace;let E=cm(A.location,P,I);u=h();let C=U0(E,u),k=A.createHref(E);o.replaceState(C,"",k),i&&l&&l({action:a,location:A.location,delta:0})}function S(P){let I=s.location.origin!=="null"?s.location.origin:s.location.href,E=typeof P=="string"?P:sd(P);return E=E.replace(/ $/,"%20"),Ze(I,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,I)}let A={get action(){return a},get location(){return t(s,o)},listen(P){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(F0,f),l=P,()=>{s.removeEventListener(F0,f),l=null}},createHref(P){return e(s,P)},createURL:S,encodeLocation(P){let I=S(P);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:_,go(P){return o.go(P)}};return A}var $0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($0||($0={}));function fR(t,e,n){return n===void 0&&(n="/"),pR(t,e,n)}function pR(t,e,n,r){let s=typeof e=="string"?zo(e):e,i=Qg(s.pathname||"/",n);if(i==null)return null;let o=PI(t);mR(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=CR(i);a=IR(o[l],u)}return a}function PI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Ze(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hs([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(Ze(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),PI(i.children,e,h,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:ER(u,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of DI(i.path))s(i,o,l)}),e}function DI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=DI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function mR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gR=/^:[\w-]+$/,_R=3,yR=2,vR=1,wR=10,xR=-2,B0=t=>t==="*";function ER(t,e){let n=t.split("/"),r=n.length;return n.some(B0)&&(r+=xR),e&&(r+=yR),n.filter(s=>!B0(s)).reduce((s,i)=>s+(gR.test(i)?_R:i===""?vR:wR),r)}function TR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function IR(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=SR({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:hs([i,f.pathname]),pathnameBase:PR(hs([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=hs([i,f.pathnameBase]))}return o}function SR(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bR(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:m,isOptional:_}=h;if(m==="*"){let A=a[f]||"";o=i.slice(0,i.length-A.length).replace(/(.)\/+$/,"$1")}const S=a[f];return _&&!S?u[m]=void 0:u[m]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function bR(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Kg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function CR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Kg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const NR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,AR=t=>NR.test(t);function kR(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?zo(t):t,i;if(n)if(AR(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),Kg(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=z0(n.substring(1),"/"):i=z0(n,e)}else i=e;return{pathname:i,search:DR(r),hash:OR(s)}}function z0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function qf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function OI(t,e){let n=RR(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function LI(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=zo(t):(s=Nl({},t),Ze(!s.pathname||!s.pathname.includes("?"),qf("?","pathname","search",s)),Ze(!s.pathname||!s.pathname.includes("#"),qf("#","pathname","hash",s)),Ze(!s.search||!s.search.includes("#"),qf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=kR(s,a),u=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const hs=t=>t.join("/").replace(/\/\/+/g,"/"),PR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const jI=["post","put","patch","delete"];new Set(jI);const jR=["get",...jI];new Set(jR);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Al.apply(this,arguments)}const Yg=O.createContext(null),MR=O.createContext(null),Si=O.createContext(null),oh=O.createContext(null),bi=O.createContext({outlet:null,matches:[],isDataRoute:!1}),MI=O.createContext(null);function VR(t,e){let{relative:n}=e===void 0?{}:e;tc()||Ze(!1);let{basename:r,navigator:s}=O.useContext(Si),{hash:i,pathname:o,search:a}=FI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hs([r,o])),s.createHref({pathname:l,search:a,hash:i})}function tc(){return O.useContext(oh)!=null}function ah(){return tc()||Ze(!1),O.useContext(oh).location}function VI(t){O.useContext(Si).static||O.useLayoutEffect(t)}function Jg(){let{isDataRoute:t}=O.useContext(bi);return t?JR():FR()}function FR(){tc()||Ze(!1);let t=O.useContext(Yg),{basename:e,future:n,navigator:r}=O.useContext(Si),{matches:s}=O.useContext(bi),{pathname:i}=ah(),o=JSON.stringify(OI(s,n.v7_relativeSplatPath)),a=O.useRef(!1);return VI(()=>{a.current=!0}),O.useCallback(function(u,h){if(h===void 0&&(h={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=LI(u,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:hs([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,i,t])}function FI(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=O.useContext(Si),{matches:s}=O.useContext(bi),{pathname:i}=ah(),o=JSON.stringify(OI(s,r.v7_relativeSplatPath));return O.useMemo(()=>LI(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function UR(t,e){return $R(t,e)}function $R(t,e,n,r){tc()||Ze(!1);let{navigator:s}=O.useContext(Si),{matches:i}=O.useContext(bi),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ah(),h;if(e){var f;let P=typeof e=="string"?zo(e):e;l==="/"||(f=P.pathname)!=null&&f.startsWith(l)||Ze(!1),h=P}else h=u;let m=h.pathname||"/",_=m;if(l!=="/"){let P=l.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(P.length).join("/")}let S=fR(t,{pathname:_}),A=HR(S&&S.map(P=>Object.assign({},P,{params:Object.assign({},a,P.params),pathname:hs([l,s.encodeLocation?s.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?l:hs([l,s.encodeLocation?s.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,n,r);return e&&A?O.createElement(oh.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:ns.Pop}},A):A}function BR(){let t=YR(),e=LR(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:s},n):null,null)}const zR=O.createElement(BR,null);class WR extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(bi.Provider,{value:this.props.routeContext},O.createElement(MI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qR(t){let{routeContext:e,match:n,children:r}=t,s=O.useContext(Yg);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(bi.Provider,{value:e},r)}function HR(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ze(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:m,errors:_}=n,S=f.route.loader&&m[f.route.id]===void 0&&(!_||_[f.route.id]===void 0);if(f.route.lazy||S){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let _,S=!1,A=null,P=null;n&&(_=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||zR,l&&(u<0&&m===0?(XR("route-fallback"),S=!0,P=null):u===m&&(S=!0,P=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),E=()=>{let C;return _?C=A:S?C=P:f.route.Component?C=O.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=h,O.createElement(qR,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?O.createElement(WR,{location:n.location,revalidation:n.revalidation,component:A,error:_,children:E(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):E()},null)}var UI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(UI||{}),$I=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($I||{});function GR(t){let e=O.useContext(Yg);return e||Ze(!1),e}function KR(t){let e=O.useContext(MR);return e||Ze(!1),e}function QR(t){let e=O.useContext(bi);return e||Ze(!1),e}function BI(t){let e=QR(),n=e.matches[e.matches.length-1];return n.route.id||Ze(!1),n.route.id}function YR(){var t;let e=O.useContext(MI),n=KR(),r=BI();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function JR(){let{router:t}=GR(UI.UseNavigateStable),e=BI($I.UseNavigateStable),n=O.useRef(!1);return VI(()=>{n.current=!0}),O.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Al({fromRouteId:e},i)))},[t,e])}const W0={};function XR(t,e,n){W0[t]||(W0[t]=!0)}function ZR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function ja(t){Ze(!1)}function eP(t){let{basename:e="/",children:n=null,location:r,navigationType:s=ns.Pop,navigator:i,static:o=!1,future:a}=t;tc()&&Ze(!1);let l=e.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:l,navigator:i,static:o,future:Al({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=zo(r));let{pathname:h="/",search:f="",hash:m="",state:_=null,key:S="default"}=r,A=O.useMemo(()=>{let P=Qg(h,l);return P==null?null:{location:{pathname:P,search:f,hash:m,state:_,key:S},navigationType:s}},[l,h,f,m,_,S,s]);return A==null?null:O.createElement(Si.Provider,{value:u},O.createElement(oh.Provider,{children:n,value:A}))}function tP(t){let{children:e,location:n}=t;return UR(um(e),n)}new Promise(()=>{});function um(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,s)=>{if(!O.isValidElement(r))return;let i=[...e,s];if(r.type===O.Fragment){n.push.apply(n,um(r.props.children,i));return}r.type!==ja&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=um(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dm(){return dm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dm.apply(this,arguments)}function nP(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function rP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function sP(t,e){return t.button===0&&(!e||e==="_self")&&!rP(t)}const iP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],oP="6";try{window.__reactRouterVersion=oP}catch{}const aP="startTransition",q0=X1[aP];function lP(t){let{basename:e,children:n,future:r,window:s}=t,i=O.useRef();i.current==null&&(i.current=uR({window:s,v5Compat:!0}));let o=i.current,[a,l]=O.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=O.useCallback(f=>{u&&q0?q0(()=>l(f)):l(f)},[l,u]);return O.useLayoutEffect(()=>o.listen(h),[o,h]),O.useEffect(()=>ZR(r),[r]),O.createElement(eP,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const cP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uo=O.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:u,preventScrollReset:h,viewTransition:f}=e,m=nP(e,iP),{basename:_}=O.useContext(Si),S,A=!1;if(typeof u=="string"&&uP.test(u)&&(S=u,cP))try{let C=new URL(window.location.href),k=u.startsWith("//")?new URL(C.protocol+u):new URL(u),M=Qg(k.pathname,_);k.origin===C.origin&&M!=null?u=M+k.search+k.hash:A=!0}catch{}let P=VR(u,{relative:s}),I=dP(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:f});function E(C){r&&r(C),C.defaultPrevented||I(C)}return O.createElement("a",dm({},m,{href:S||P,onClick:A||i?r:E,ref:n,target:l}))});var H0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(H0||(H0={}));var G0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(G0||(G0={}));function dP(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=Jg(),u=ah(),h=FI(t,{relative:o});return O.useCallback(f=>{if(sP(f,n)){f.preventDefault();let m=r!==void 0?r:sd(u)===sd(h);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,h,r,s,n,t,i,o,a])}/**
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
 */const hP=()=>{};var K0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Wo(e)},Wo=function(t){return new Error("Firebase Database ("+zI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new pP;const m=i<<2|a>>4;if(r.push(m),u!==64){const _=a<<4&240|u>>2;if(r.push(_),f!==64){const S=u<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=WI(t);return Xg.encodeByteArray(e,!0)},id=function(t){return qI(t).replace(/\./g,"")},od=function(t){try{return Xg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t){return HI(void 0,t)}function HI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gP(n)||(t[n]=HI(t[n],e[n]));return t}function gP(t){return t!=="__proto__"}/**
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
 */function _P(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yP=()=>_P().__FIREBASE_DEFAULTS__,vP=()=>{if(typeof process>"u"||typeof K0>"u")return;const t=K0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&od(t[1]);return e&&JSON.parse(e)},lh=()=>{try{return hP()||yP()||vP()||wP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GI=t=>{var e,n;return(n=(e=lh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Zg=t=>{const e=GI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},KI=()=>{var t;return(t=lh())==null?void 0:t.config},QI=t=>{var e;return(e=lh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ch(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function e_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[id(JSON.stringify(n)),id(JSON.stringify(o)),""].join(".")}const Xa={};function xP(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xa))Xa[e]?t.emulator.push(e):t.prod.push(e);return t}function EP(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Q0=!1;function uh(t,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Xa[t]===e||Xa[t]||Q0)return;Xa[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=xP().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Q0=!0,o()},m}function h(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=EP(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),A=n("learnmore"),P=document.getElementById(A)||document.createElement("a"),I=n("preprendIcon"),E=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const C=m.element;a(C),h(P,A);const k=u();l(E,I),C.append(E,S,P,k),document.body.appendChild(C)}i?(S.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function t_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function TP(){var e;const t=(e=lh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bP(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CP(){return zI.NODE_ADMIN===!0}function NP(){return!TP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AP(){try{return typeof indexedDB=="object"}catch{return!1}}function kP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RP,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nc.prototype.create)}}class nc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new er(s,a,r)}}function PP(t,e){return t.replace(DP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(t){return JSON.parse(t)}function st(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=kl(od(i[0])||""),n=kl(od(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},OP=function(t){const e=JI(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},LP=function(t){const e=JI(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Co(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ad(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ld(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Y0(i)&&Y0(o)){if(!Ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Y0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ma(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Va(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+u+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function MP(t,e){const n=new VP(t,e);return n.subscribe.bind(n)}class VP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hf),s.error===void 0&&(s.error=Hf),s.complete===void 0&&(s.complete=Hf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hf(){}function No(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function we(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qs="[DEFAULT]";/**
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
 */class $P{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ur;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zP(e))try{this.getOrInitializeService({instanceIdentifier:Qs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qs){return this.instances.has(e)}getOptions(e=Qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qs){return this.component?this.component.multipleInstances?e:Qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BP(t){return t===Qs?void 0:t}function zP(t){return t.instantiationMode==="EAGER"}/**
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
 */class WP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $P(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const qP={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},HP=ce.INFO,GP={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},KP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hh{constructor(e){this.name=e,this._logLevel=HP,this._logHandler=KP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const QP=(t,e)=>e.some(n=>t instanceof n);let J0,X0;function YP(){return J0||(J0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JP(){return X0||(X0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const XI=new WeakMap,hm=new WeakMap,ZI=new WeakMap,Gf=new WeakMap,n_=new WeakMap;function XP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(fs(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&XI.set(n,t)}).catch(()=>{}),n_.set(e,t),e}function ZP(t){if(hm.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hm.set(t,e)}let fm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ZI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function e2(t){fm=t(fm)}function t2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kf(this),e,...n);return ZI.set(r,e.sort?e.sort():[e]),fs(r)}:JP().includes(t)?function(...e){return t.apply(Kf(this),e),fs(XI.get(this))}:function(...e){return fs(t.apply(Kf(this),e))}}function n2(t){return typeof t=="function"?t2(t):(t instanceof IDBTransaction&&ZP(t),QP(t,YP())?new Proxy(t,fm):t)}function fs(t){if(t instanceof IDBRequest)return XP(t);if(Gf.has(t))return Gf.get(t);const e=n2(t);return e!==t&&(Gf.set(t,e),n_.set(e,t)),e}const Kf=t=>n_.get(t);function r2(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=fs(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fs(o.result),l.oldVersion,l.newVersion,fs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const s2=["get","getKey","getAll","getAllKeys","count"],i2=["put","add","delete","clear"],Qf=new Map;function Z0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qf.get(e))return Qf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=i2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||s2.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Qf.set(e,i),i}e2(t=>({...t,get:(e,n,r)=>Z0(e,n)||t.get(e,n,r),has:(e,n)=>!!Z0(e,n)||t.has(e,n)}));/**
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
 */class o2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pm="@firebase/app",ew="0.14.7";/**
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
 */const br=new hh("@firebase/app"),l2="@firebase/app-compat",c2="@firebase/analytics-compat",u2="@firebase/analytics",d2="@firebase/app-check-compat",h2="@firebase/app-check",f2="@firebase/auth",p2="@firebase/auth-compat",m2="@firebase/database",g2="@firebase/data-connect",_2="@firebase/database-compat",y2="@firebase/functions",v2="@firebase/functions-compat",w2="@firebase/installations",x2="@firebase/installations-compat",E2="@firebase/messaging",T2="@firebase/messaging-compat",I2="@firebase/performance",S2="@firebase/performance-compat",b2="@firebase/remote-config",C2="@firebase/remote-config-compat",N2="@firebase/storage",A2="@firebase/storage-compat",k2="@firebase/firestore",R2="@firebase/ai",P2="@firebase/firestore-compat",D2="firebase",O2="12.8.0";/**
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
 */const mm="[DEFAULT]",L2={[pm]:"fire-core",[l2]:"fire-core-compat",[u2]:"fire-analytics",[c2]:"fire-analytics-compat",[h2]:"fire-app-check",[d2]:"fire-app-check-compat",[f2]:"fire-auth",[p2]:"fire-auth-compat",[m2]:"fire-rtdb",[g2]:"fire-data-connect",[_2]:"fire-rtdb-compat",[y2]:"fire-fn",[v2]:"fire-fn-compat",[w2]:"fire-iid",[x2]:"fire-iid-compat",[E2]:"fire-fcm",[T2]:"fire-fcm-compat",[I2]:"fire-perf",[S2]:"fire-perf-compat",[b2]:"fire-rc",[C2]:"fire-rc-compat",[N2]:"fire-gcs",[A2]:"fire-gcs-compat",[k2]:"fire-fst",[P2]:"fire-fst-compat",[R2]:"fire-vertex","fire-js":"fire-js",[D2]:"fire-js-all"};/**
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
 */const cd=new Map,j2=new Map,gm=new Map;function tw(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(gm.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;gm.set(e,t);for(const n of cd.values())tw(n,t);for(const n of j2.values())tw(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const M2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ps=new nc("app","Firebase",M2);/**
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
 */class V2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ps.create("app-deleted",{appName:this._name})}}/**
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
 */const js=O2;function eS(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mm,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ps.create("bad-app-name",{appName:String(s)});if(n||(n=KI()),!n)throw ps.create("no-options");const i=cd.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw ps.create("duplicate-app",{appName:s})}const o=new WP(s);for(const l of gm.values())o.addComponent(l);const a=new V2(n,r,o);return cd.set(s,a),a}function fh(t=mm){const e=cd.get(t);if(!e&&t===mm&&KI())return eS();if(!e)throw ps.create("no-app",{appName:t});return e}function _n(t,e,n){let r=L2[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(o.join(" "));return}Es(new Sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const F2="firebase-heartbeat-database",U2=1,Rl="firebase-heartbeat-store";let Yf=null;function tS(){return Yf||(Yf=r2(F2,U2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ps.create("idb-open",{originalErrorMessage:t.message})})),Yf}async function $2(t){try{const n=(await tS()).transaction(Rl),r=await n.objectStore(Rl).get(nS(t));return await n.done,r}catch(e){if(e instanceof er)br.warn(e.message);else{const n=ps.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function nw(t,e){try{const r=(await tS()).transaction(Rl,"readwrite");await r.objectStore(Rl).put(e,nS(t)),await r.done}catch(n){if(n instanceof er)br.warn(n.message);else{const r=ps.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function nS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const B2=1024,z2=30;class W2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rw();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>z2){const o=G2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){br.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rw(),{heartbeatsToSend:r,unsentEntries:s}=q2(this._heartbeatsCache.heartbeats),i=id(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return br.warn(n),""}}}function rw(){return new Date().toISOString().substring(0,10)}function q2(t,e=B2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),sw(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),sw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class H2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AP()?kP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return nw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return nw(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function sw(t){return id(JSON.stringify({version:2,heartbeats:t})).length}function G2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function K2(t){Es(new Sr("platform-logger",e=>new o2(e),"PRIVATE")),Es(new Sr("heartbeat",e=>new W2(e),"PRIVATE")),_n(pm,ew,t),_n(pm,ew,"esm2020"),_n("fire-js","")}K2("");var Q2="firebase",Y2="12.8.0";/**
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
 */_n(Q2,Y2,"app");function rS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const J2=rS,sS=new nc("auth","Firebase",rS());/**
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
 */const ud=new hh("@firebase/auth");function X2(t,...e){ud.logLevel<=ce.WARN&&ud.warn(`Auth (${js}): ${t}`,...e)}function xu(t,...e){ud.logLevel<=ce.ERROR&&ud.error(`Auth (${js}): ${t}`,...e)}/**
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
 */function On(t,...e){throw r_(t,...e)}function Hn(t,...e){return r_(t,...e)}function iS(t,e,n){const r={...J2(),[e]:n};return new nc("auth","Firebase",r).create(e,{appName:t.name})}function _r(t){return iS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function r_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return sS.create(t,...e)}function J(t,e,...n){if(!t)throw r_(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function Cr(t,e){t||fr(e)}/**
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
 */function dd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function oS(){return iw()==="http:"||iw()==="https:"}function iw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function Z2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oS()||SP()||"connection"in navigator)?navigator.onLine:!0}function eD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class sc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=t_()||YI()}get(){return Z2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function s_(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class aS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rD=new sc(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function rr(t,e,n,r,s={}){return lS(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=qo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return IP()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(u.credentials="include"),aS.fetch()(await cS(t,t.config.apiHost,n,a),u)})}async function lS(t,e,n){t._canInitEmulator=!1;const r={...tD,...e};try{const s=new iD(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw iS(t,h,u);On(t,h)}}catch(s){if(s instanceof er)throw s;On(t,"network-request-failed",{message:String(s)})}}async function ic(t,e,n,r,s={}){const i=await rr(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function cS(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?s_(t.config,s):`${t.config.apiScheme}://${s}`;return nD.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function sD(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),rD.get())})}}function Yc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Hn(t,e,r);return s.customData._tokenResponse=n,s}function ow(t){return t!==void 0&&t.enterprise!==void 0}class oD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return sD(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aD(t,e){return rr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function lD(t,e){return rr(t,"POST","/v1/accounts:delete",e)}async function hd(t,e){return rr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Za(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cD(t,e=!1){const n=we(t),r=await n.getIdToken(e),s=i_(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Za(Jf(s.auth_time)),issuedAtTime:Za(Jf(s.iat)),expirationTime:Za(Jf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jf(t){return Number(t)*1e3}function i_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=od(n);return s?JSON.parse(s):(xu("Failed to decode base64 JWT payload"),null)}catch(s){return xu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function aw(t){const e=i_(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&uD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Za(this.lastLoginAt),this.creationTime=Za(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fd(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Pl(t,hd(e,{idToken:n}));J(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?uS(s.providerUserInfo):[],o=fD(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hD(t){const e=we(t);await fd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fD(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function uS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function pD(t,e){const n=await lS(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await cS(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(l.credentials="include"),aS.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mD(t,e){return rr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):aw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=aw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pD(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ho;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ho,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
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
 */function zr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new dD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return cD(this,e)}reload(){return hD(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(_r(this.auth));const e=await this.getIdToken();return await Pl(this,lD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:_,providerData:S,stsTokenManager:A}=n;J(f&&A,e,"internal-error");const P=ho.fromJSON(this.name,A);J(typeof f=="string",e,"internal-error"),zr(r,e.name),zr(s,e.name),J(typeof m=="boolean",e,"internal-error"),J(typeof _=="boolean",e,"internal-error"),zr(i,e.name),zr(o,e.name),zr(a,e.name),zr(l,e.name),zr(u,e.name),zr(h,e.name);const I=new bn({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:P,createdAt:u,lastLoginAt:h});return S&&Array.isArray(S)&&(I.providerData=S.map(E=>({...E}))),l&&(I._redirectEventId=l),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ho;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fd(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?uS(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ho;a.updateFromIdToken(r);const l=new bn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const lw=new Map;function pr(t){Cr(t instanceof Function,"Expected a class definition");let e=lw.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lw.set(t,e),e)}/**
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
 */class dS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dS.type="NONE";const cw=dS;/**
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
 */function Eu(t,e,n){return`firebase:${t}:${e}:${n}`}class fo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hd(this.auth,{idToken:e}).catch(()=>{});return n?bn._fromGetAccountInfoResponse(this.auth,n,e):null}return bn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fo(pr(cw),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||pr(cw);const o=Eu(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const m=await hd(e,{idToken:h}).catch(()=>{});if(!m)break;f=await bn._fromGetAccountInfoResponse(e,m,h)}else f=bn._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new fo(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fo(i,e,r))}}/**
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
 */function uw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_S(e))return"Blackberry";if(yS(e))return"Webos";if(fS(e))return"Safari";if((e.includes("chrome/")||pS(e))&&!e.includes("edge/"))return"Chrome";if(gS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hS(t=At()){return/firefox\//i.test(t)}function fS(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pS(t=At()){return/crios\//i.test(t)}function mS(t=At()){return/iemobile/i.test(t)}function gS(t=At()){return/android/i.test(t)}function _S(t=At()){return/blackberry/i.test(t)}function yS(t=At()){return/webos/i.test(t)}function o_(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gD(t=At()){var e;return o_(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _D(){return bP()&&document.documentMode===10}function vS(t=At()){return o_(t)||gS(t)||yS(t)||_S(t)||/windows phone/i.test(t)||mS(t)}/**
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
 */function wS(t,e=[]){let n;switch(t){case"Browser":n=uw(At());break;case"Worker":n=`${uw(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${js}/${r}`}/**
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
 */class yD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vD(t,e={}){return rr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const wD=6;class xD{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wD,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ED{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dw(this),this.idTokenSubscription=new dw(this),this.beforeStateQueue=new yD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hd(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(_r(this));const n=e?we(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(_r(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(_r(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vD(this),n=new xD(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pr(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await fo.create(this,[pr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&X2(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ms(t){return we(t)}class dw{constructor(e){this.auth=e,this.observer=null,this.addObserver=MP(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ph={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function TD(t){ph=t}function xS(t){return ph.loadJS(t)}function ID(){return ph.recaptchaEnterpriseScript}function SD(){return ph.gapiScript}function bD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class CD{constructor(){this.enterprise=new ND}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ND{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const AD="recaptcha-enterprise",ES="NO_RECAPTCHA";class kD{constructor(e){this.type=AD,this.auth=Ms(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{aD(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new oD(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;ow(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(ES)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CD().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ow(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ID();l.length!==0&&(l+=a),xS(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function hw(t,e,n,r=!1,s=!1){const i=new kD(t);let o;if(s)o=ES;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function pd(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await hw(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await hw(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function RD(t,e){const n=rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function PD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DD(t,e,n){const r=Ms(t);J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=TS(e),{host:o,port:a}=OD(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){J(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),J(Ir(u,r.config.emulator)&&Ir(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Zn(o)?(ch(`${i}//${o}${l}`),uh("Auth",!0)):LD()}function TS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OD(t){const e=TS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fw(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fw(o)}}}function fw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class a_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}async function jD(t,e){return rr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MD(t,e){return ic(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}async function VD(t,e){return rr(t,"POST","/v1/accounts:sendOobCode",nr(t,e))}async function FD(t,e){return VD(t,e)}/**
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
 */async function UD(t,e){return ic(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function $D(t,e){return ic(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Dl extends a_{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Dl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,n,"signInWithPassword",MD);case"emailLink":return UD(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,r,"signUpPassword",jD);case"emailLink":return $D(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function po(t,e){return ic(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const BD="http://localhost";class pi extends a_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new pi(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return po(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,po(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,po(e,n)}buildRequest(){const e={requestUri:BD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
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
 */function zD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function WD(t){const e=Ma(Va(t)).link,n=e?Ma(Va(e)).deep_link_id:null,r=Ma(Va(t)).deep_link_id;return(r?Ma(Va(r)).link:null)||r||n||e||t}class l_{constructor(e){const n=Ma(Va(e)),r=n.apiKey??null,s=n.oobCode??null,i=zD(n.mode??null);J(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=WD(e);try{return new l_(n)}catch{return null}}}/**
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
 */class Ho{constructor(){this.providerId=Ho.PROVIDER_ID}static credential(e,n){return Dl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=l_.parseLink(n);return J(r,"argument-error"),Dl._fromEmailAndCode(e,r.code,r.tenantId)}}Ho.PROVIDER_ID="password";Ho.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ho.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class IS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oc extends IS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends oc{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Qr extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qr.credential(n,r)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
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
 */class Yr extends oc{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yr.credential(e.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
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
 */class Jr extends oc{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */async function qD(t,e){return ic(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=pw(r);return new mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=pw(r);return new mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function pw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class md extends er{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,md.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new md(e,n,r,s)}}function SS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?md._fromErrorAndOperation(t,i,e,r):i})}async function HD(t,e,n=!1){const r=await Pl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function GD(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(_r(r));const s="reauthenticate";try{const i=await Pl(t,SS(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=i_(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
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
 */async function bS(t,e,n=!1){if(zt(t.app))return Promise.reject(_r(t));const r="signIn",s=await SS(t,r,e),i=await mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KD(t,e){return bS(Ms(t),e)}/**
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
 */async function CS(t){const e=Ms(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QD(t,e,n){const r=Ms(t);await pd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",FD)}async function YD(t,e,n){if(zt(t.app))return Promise.reject(_r(t));const r=Ms(t),o=await pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qD).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&CS(t),l}),a=await mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JD(t,e,n){return zt(t.app)?Promise.reject(_r(t)):KD(we(t),Ho.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&CS(t),r})}/**
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
 */async function XD(t,e){return rr(t,"POST","/v1/accounts:createAuthUri",nr(t,e))}/**
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
 */async function ZD(t,e){const n=oS()?dd():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await XD(we(t),r);return s||[]}function eO(t,e,n,r){return we(t).onIdTokenChanged(e,n,r)}function tO(t,e,n){return we(t).beforeAuthStateChanged(e,n)}function nO(t,e,n,r){return we(t).onAuthStateChanged(e,n,r)}function rO(t){return we(t).signOut()}const gd="__sak";/**
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
 */class NS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const sO=1e3,iO=10;class AS extends NS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_D()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iO):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}AS.type="LOCAL";const oO=AS;/**
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
 */class kS extends NS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kS.type="SESSION";const RS=kS;/**
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
 */function aO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class mh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new mh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await aO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mh.receivers=[];/**
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
 */function c_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=c_("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Gn(){return window}function cO(t){Gn().location.href=t}/**
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
 */function PS(){return typeof Gn().WorkerGlobalScope<"u"&&typeof Gn().importScripts=="function"}async function uO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function hO(){return PS()?self:null}/**
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
 */const DS="firebaseLocalStorageDb",fO=1,_d="firebaseLocalStorage",OS="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gh(t,e){return t.transaction([_d],e?"readwrite":"readonly").objectStore(_d)}function pO(){const t=indexedDB.deleteDatabase(DS);return new ac(t).toPromise()}function ym(){const t=indexedDB.open(DS,fO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(_d,{keyPath:OS})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(_d)?e(r):(r.close(),await pO(),e(await ym()))})})}async function mw(t,e,n){const r=gh(t,!0).put({[OS]:e,value:n});return new ac(r).toPromise()}async function mO(t,e){const n=gh(t,!1).get(e),r=await new ac(n).toPromise();return r===void 0?null:r.value}function gw(t,e){const n=gh(t,!0).delete(e);return new ac(n).toPromise()}const gO=800,_O=3;class LS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ym(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_O)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return PS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mh._getInstance(hO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await uO(),!this.activeServiceWorker)return;this.sender=new lO(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await mw(e,gd,"1"),await gw(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gh(s,!1).getAll();return new ac(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}LS.type="LOCAL";const yO=LS;new sc(3e4,6e4);/**
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
 */function vO(t,e){return e?pr(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class u_ extends a_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return po(e,this._buildIdpRequest())}_linkToIdToken(e,n){return po(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return po(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return bS(t.auth,new u_(t),t.bypassAuthState)}function xO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),GD(n,new u_(t),t.bypassAuthState)}async function EO(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),HD(n,new u_(t),t.bypassAuthState)}/**
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
 */class jS{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return EO;case"reauthViaPopup":case"reauthViaRedirect":return xO;default:On(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const TO=new sc(2e3,1e4);class Zi extends jS{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zi.currentPopupAction&&Zi.currentPopupAction.cancel(),Zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=c_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,TO.get())};e()}}Zi.currentPopupAction=null;/**
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
 */const IO="pendingRedirect",Tu=new Map;class SO extends jS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tu.get(this.auth._key());if(!e){try{const r=await bO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tu.set(this.auth._key(),e)}return this.bypassAuthState||Tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bO(t,e){const n=AO(e),r=NO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function CO(t,e){Tu.set(t._key(),e)}function NO(t){return pr(t._redirectPersistence)}function AO(t){return Eu(IO,t.config.apiKey,t.name)}async function kO(t,e,n=!1){if(zt(t.app))return Promise.reject(_r(t));const r=Ms(t),s=vO(r,e),o=await new SO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const RO=10*60*1e3;class PO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!MS(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RO&&this.cachedEventUids.clear(),this.cachedEventUids.has(_w(e))}saveEventToCache(e){this.cachedEventUids.add(_w(e)),this.lastProcessedEventTime=Date.now()}}function _w(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function MS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return MS(t);default:return!1}}/**
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
 */async function OO(t,e={}){return rr(t,"GET","/v1/projects",e)}/**
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
 */const LO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jO=/^https?/;async function MO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OO(t);for(const n of e)try{if(VO(n))return}catch{}On(t,"unauthorized-domain")}function VO(t){const e=dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jO.test(n))return!1;if(LO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const FO=new sc(3e4,6e4);function yw(){const t=Gn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UO(t){return new Promise((e,n)=>{var s,i,o;function r(){yw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yw(),n(Hn(t,"network-request-failed"))},timeout:FO.get()})}if((i=(s=Gn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Gn().gapi)!=null&&o.load)r();else{const a=bD("iframefcb");return Gn()[a]=()=>{gapi.load?r():n(Hn(t,"network-request-failed"))},xS(`${SD()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Iu=null,e})}let Iu=null;function $O(t){return Iu=Iu||UO(t),Iu}/**
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
 */const BO=new sc(5e3,15e3),zO="__/auth/iframe",WO="emulator/auth/iframe",qO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GO(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?s_(e,WO):`https://${t.config.authDomain}/${zO}`,r={apiKey:e.apiKey,appName:t.name,v:js},s=HO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function KO(t){const e=await $O(t),n=Gn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:GO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=Gn().setTimeout(()=>{i(o)},BO.get());function l(){Gn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const QO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YO=500,JO=600,XO="_blank",ZO="http://localhost";class vw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eL(t,e,n,r=YO,s=JO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...QO,width:r.toString(),height:s.toString(),top:i,left:o},u=At().toLowerCase();n&&(a=pS(u)?XO:n),hS(u)&&(e=e||ZO,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(gD(u)&&a!=="_self")return tL(e||"",a),new vw(null);const f=window.open(e||"",a,h);J(f,t,"popup-blocked");try{f.focus()}catch{}return new vw(f)}function tL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nL="__/auth/handler",rL="emulator/auth/handler",sL=encodeURIComponent("fac");async function ww(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:js,eventId:s};if(e instanceof IS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ad(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof oc){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${sL}=${encodeURIComponent(l)}`:"";return`${iL(t)}?${qo(a).slice(1)}${u}`}function iL({config:t}){return t.emulator?s_(t,rL):`https://${t.authDomain}/${nL}`}/**
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
 */const Xf="webStorageSupport";class oL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RS,this._completeRedirectFn=kO,this._overrideRedirectResult=CO}async _openPopup(e,n,r,s){var o;Cr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await ww(e,n,r,dd(),s);return eL(e,i,c_())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ww(e,n,r,dd(),s);return cO(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KO(e),r=new PO(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xf,{type:Xf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Xf];i!==void 0&&n(!!i),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vS()||fS()||o_()}}const aL=oL;var xw="@firebase/auth",Ew="1.12.0";/**
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
 */class lL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uL(t){Es(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wS(t)},u=new ED(r,s,i,l);return PD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Sr("auth-internal",e=>{const n=Ms(e.getProvider("auth").getImmediate());return(r=>new lL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(xw,Ew,cL(t)),_n(xw,Ew,"esm2020")}/**
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
 */const dL=5*60,hL=QI("authIdTokenMaxAge")||dL;let Tw=null;const fL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hL)return;const s=n==null?void 0:n.token;Tw!==s&&(Tw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pL(t=fh()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RD(t,{popupRedirectResolver:aL,persistence:[yO,oO,RS]}),r=QI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fL(i.toString());tO(n,o,()=>o(n.currentUser)),eO(n,a=>o(a))}}const s=GI("auth");return s&&DD(n,`http://${s}`),n}function mL(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}TD({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Hn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uL("Browser");var Iw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ms,VS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,y){function b(){}b.prototype=y.prototype,x.F=y.prototype,x.prototype=new b,x.prototype.constructor=x,x.D=function(w,N,R){for(var T=Array(arguments.length-2),se=2;se<arguments.length;se++)T[se-2]=arguments[se];return y.prototype[N].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,y,b){b||(b=0);const w=Array(16);if(typeof y=="string")for(var N=0;N<16;++N)w[N]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(N=0;N<16;++N)w[N]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=x.g[0],b=x.g[1],N=x.g[2];let R=x.g[3],T;T=y+(R^b&(N^R))+w[0]+3614090360&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(N^y&(b^N))+w[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=N+(b^R&(y^b))+w[2]+606105819&4294967295,N=R+(T<<17&4294967295|T>>>15),T=b+(y^N&(R^y))+w[3]+3250441966&4294967295,b=N+(T<<22&4294967295|T>>>10),T=y+(R^b&(N^R))+w[4]+4118548399&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(N^y&(b^N))+w[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=N+(b^R&(y^b))+w[6]+2821735955&4294967295,N=R+(T<<17&4294967295|T>>>15),T=b+(y^N&(R^y))+w[7]+4249261313&4294967295,b=N+(T<<22&4294967295|T>>>10),T=y+(R^b&(N^R))+w[8]+1770035416&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(N^y&(b^N))+w[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=N+(b^R&(y^b))+w[10]+4294925233&4294967295,N=R+(T<<17&4294967295|T>>>15),T=b+(y^N&(R^y))+w[11]+2304563134&4294967295,b=N+(T<<22&4294967295|T>>>10),T=y+(R^b&(N^R))+w[12]+1804603682&4294967295,y=b+(T<<7&4294967295|T>>>25),T=R+(N^y&(b^N))+w[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=N+(b^R&(y^b))+w[14]+2792965006&4294967295,N=R+(T<<17&4294967295|T>>>15),T=b+(y^N&(R^y))+w[15]+1236535329&4294967295,b=N+(T<<22&4294967295|T>>>10),T=y+(N^R&(b^N))+w[1]+4129170786&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^N&(y^b))+w[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=N+(y^b&(R^y))+w[11]+643717713&4294967295,N=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(N^R))+w[0]+3921069994&4294967295,b=N+(T<<20&4294967295|T>>>12),T=y+(N^R&(b^N))+w[5]+3593408605&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^N&(y^b))+w[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=N+(y^b&(R^y))+w[15]+3634488961&4294967295,N=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(N^R))+w[4]+3889429448&4294967295,b=N+(T<<20&4294967295|T>>>12),T=y+(N^R&(b^N))+w[9]+568446438&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^N&(y^b))+w[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=N+(y^b&(R^y))+w[3]+4107603335&4294967295,N=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(N^R))+w[8]+1163531501&4294967295,b=N+(T<<20&4294967295|T>>>12),T=y+(N^R&(b^N))+w[13]+2850285829&4294967295,y=b+(T<<5&4294967295|T>>>27),T=R+(b^N&(y^b))+w[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=N+(y^b&(R^y))+w[7]+1735328473&4294967295,N=R+(T<<14&4294967295|T>>>18),T=b+(R^y&(N^R))+w[12]+2368359562&4294967295,b=N+(T<<20&4294967295|T>>>12),T=y+(b^N^R)+w[5]+4294588738&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^N)+w[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=N+(R^y^b)+w[11]+1839030562&4294967295,N=R+(T<<16&4294967295|T>>>16),T=b+(N^R^y)+w[14]+4259657740&4294967295,b=N+(T<<23&4294967295|T>>>9),T=y+(b^N^R)+w[1]+2763975236&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^N)+w[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=N+(R^y^b)+w[7]+4139469664&4294967295,N=R+(T<<16&4294967295|T>>>16),T=b+(N^R^y)+w[10]+3200236656&4294967295,b=N+(T<<23&4294967295|T>>>9),T=y+(b^N^R)+w[13]+681279174&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^N)+w[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=N+(R^y^b)+w[3]+3572445317&4294967295,N=R+(T<<16&4294967295|T>>>16),T=b+(N^R^y)+w[6]+76029189&4294967295,b=N+(T<<23&4294967295|T>>>9),T=y+(b^N^R)+w[9]+3654602809&4294967295,y=b+(T<<4&4294967295|T>>>28),T=R+(y^b^N)+w[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=N+(R^y^b)+w[15]+530742520&4294967295,N=R+(T<<16&4294967295|T>>>16),T=b+(N^R^y)+w[2]+3299628645&4294967295,b=N+(T<<23&4294967295|T>>>9),T=y+(N^(b|~R))+w[0]+4096336452&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~N))+w[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=N+(y^(R|~b))+w[14]+2878612391&4294967295,N=R+(T<<15&4294967295|T>>>17),T=b+(R^(N|~y))+w[5]+4237533241&4294967295,b=N+(T<<21&4294967295|T>>>11),T=y+(N^(b|~R))+w[12]+1700485571&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~N))+w[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=N+(y^(R|~b))+w[10]+4293915773&4294967295,N=R+(T<<15&4294967295|T>>>17),T=b+(R^(N|~y))+w[1]+2240044497&4294967295,b=N+(T<<21&4294967295|T>>>11),T=y+(N^(b|~R))+w[8]+1873313359&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~N))+w[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=N+(y^(R|~b))+w[6]+2734768916&4294967295,N=R+(T<<15&4294967295|T>>>17),T=b+(R^(N|~y))+w[13]+1309151649&4294967295,b=N+(T<<21&4294967295|T>>>11),T=y+(N^(b|~R))+w[4]+4149444226&4294967295,y=b+(T<<6&4294967295|T>>>26),T=R+(b^(y|~N))+w[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=N+(y^(R|~b))+w[2]+718787259&4294967295,N=R+(T<<15&4294967295|T>>>17),T=b+(R^(N|~y))+w[9]+3951481745&4294967295,x.g[0]=x.g[0]+y&4294967295,x.g[1]=x.g[1]+(N+(T<<21&4294967295|T>>>11))&4294967295,x.g[2]=x.g[2]+N&4294967295,x.g[3]=x.g[3]+R&4294967295}r.prototype.v=function(x,y){y===void 0&&(y=x.length);const b=y-this.blockSize,w=this.C;let N=this.h,R=0;for(;R<y;){if(N==0)for(;R<=b;)s(this,x,R),R+=this.blockSize;if(typeof x=="string"){for(;R<y;)if(w[N++]=x.charCodeAt(R++),N==this.blockSize){s(this,w),N=0;break}}else for(;R<y;)if(w[N++]=x[R++],N==this.blockSize){s(this,w),N=0;break}}this.h=N,this.o+=y},r.prototype.A=function(){var x=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);x[0]=128;for(var y=1;y<x.length-8;++y)x[y]=0;y=this.o*8;for(var b=x.length-8;b<x.length;++b)x[b]=y&255,y/=256;for(this.v(x),x=Array(16),y=0,b=0;b<4;++b)for(let w=0;w<32;w+=8)x[y++]=this.g[b]>>>w&255;return x};function i(x,y){var b=a;return Object.prototype.hasOwnProperty.call(b,x)?b[x]:b[x]=y(x)}function o(x,y){this.h=y;const b=[];let w=!0;for(let N=x.length-1;N>=0;N--){const R=x[N]|0;w&&R==y||(b[N]=R,w=!1)}this.g=b}var a={};function l(x){return-128<=x&&x<128?i(x,function(y){return new o([y|0],y<0?-1:0)}):new o([x|0],x<0?-1:0)}function u(x){if(isNaN(x)||!isFinite(x))return f;if(x<0)return P(u(-x));const y=[];let b=1;for(let w=0;x>=b;w++)y[w]=x/b|0,b*=4294967296;return new o(y,0)}function h(x,y){if(x.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x.charAt(0)=="-")return P(h(x.substring(1),y));if(x.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=u(Math.pow(y,8));let w=f;for(let R=0;R<x.length;R+=8){var N=Math.min(8,x.length-R);const T=parseInt(x.substring(R,R+N),y);N<8?(N=u(Math.pow(y,N)),w=w.j(N).add(u(T))):(w=w.j(b),w=w.add(u(T)))}return w}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(A(this))return-P(this).m();let x=0,y=1;for(let b=0;b<this.g.length;b++){const w=this.i(b);x+=(w>=0?w:4294967296+w)*y,y*=4294967296}return x},t.toString=function(x){if(x=x||10,x<2||36<x)throw Error("radix out of range: "+x);if(S(this))return"0";if(A(this))return"-"+P(this).toString(x);const y=u(Math.pow(x,6));var b=this;let w="";for(;;){const N=k(b,y).g;b=I(b,N.j(y));let R=((b.g.length>0?b.g[0]:b.h)>>>0).toString(x);if(b=N,S(b))return R+w;for(;R.length<6;)R="0"+R;w=R+w}},t.i=function(x){return x<0?0:x<this.g.length?this.g[x]:this.h};function S(x){if(x.h!=0)return!1;for(let y=0;y<x.g.length;y++)if(x.g[y]!=0)return!1;return!0}function A(x){return x.h==-1}t.l=function(x){return x=I(this,x),A(x)?-1:S(x)?0:1};function P(x){const y=x.g.length,b=[];for(let w=0;w<y;w++)b[w]=~x.g[w];return new o(b,~x.h).add(m)}t.abs=function(){return A(this)?P(this):this},t.add=function(x){const y=Math.max(this.g.length,x.g.length),b=[];let w=0;for(let N=0;N<=y;N++){let R=w+(this.i(N)&65535)+(x.i(N)&65535),T=(R>>>16)+(this.i(N)>>>16)+(x.i(N)>>>16);w=T>>>16,R&=65535,T&=65535,b[N]=T<<16|R}return new o(b,b[b.length-1]&-2147483648?-1:0)};function I(x,y){return x.add(P(y))}t.j=function(x){if(S(this)||S(x))return f;if(A(this))return A(x)?P(this).j(P(x)):P(P(this).j(x));if(A(x))return P(this.j(P(x)));if(this.l(_)<0&&x.l(_)<0)return u(this.m()*x.m());const y=this.g.length+x.g.length,b=[];for(var w=0;w<2*y;w++)b[w]=0;for(w=0;w<this.g.length;w++)for(let N=0;N<x.g.length;N++){const R=this.i(w)>>>16,T=this.i(w)&65535,se=x.i(N)>>>16,Ae=x.i(N)&65535;b[2*w+2*N]+=T*Ae,E(b,2*w+2*N),b[2*w+2*N+1]+=R*Ae,E(b,2*w+2*N+1),b[2*w+2*N+1]+=T*se,E(b,2*w+2*N+1),b[2*w+2*N+2]+=R*se,E(b,2*w+2*N+2)}for(x=0;x<y;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=y;x<2*y;x++)b[x]=0;return new o(b,0)};function E(x,y){for(;(x[y]&65535)!=x[y];)x[y+1]+=x[y]>>>16,x[y]&=65535,y++}function C(x,y){this.g=x,this.h=y}function k(x,y){if(S(y))throw Error("division by zero");if(S(x))return new C(f,f);if(A(x))return y=k(P(x),y),new C(P(y.g),P(y.h));if(A(y))return y=k(x,P(y)),new C(P(y.g),y.h);if(x.g.length>30){if(A(x)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var b=m,w=y;w.l(x)<=0;)b=M(b),w=M(w);var N=F(b,1),R=F(w,1);for(w=F(w,2),b=F(b,2);!S(w);){var T=R.add(w);T.l(x)<=0&&(N=N.add(b),R=T),w=F(w,1),b=F(b,1)}return y=I(x,N.j(y)),new C(N,y)}for(N=f;x.l(y)>=0;){for(b=Math.max(1,Math.floor(x.m()/y.m())),w=Math.ceil(Math.log(b)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),R=u(b),T=R.j(y);A(T)||T.l(x)>0;)b-=w,R=u(b),T=R.j(y);S(R)&&(R=m),N=N.add(R),x=I(x,T)}return new C(N,x)}t.B=function(x){return k(this,x).h},t.and=function(x){const y=Math.max(this.g.length,x.g.length),b=[];for(let w=0;w<y;w++)b[w]=this.i(w)&x.i(w);return new o(b,this.h&x.h)},t.or=function(x){const y=Math.max(this.g.length,x.g.length),b=[];for(let w=0;w<y;w++)b[w]=this.i(w)|x.i(w);return new o(b,this.h|x.h)},t.xor=function(x){const y=Math.max(this.g.length,x.g.length),b=[];for(let w=0;w<y;w++)b[w]=this.i(w)^x.i(w);return new o(b,this.h^x.h)};function M(x){const y=x.g.length+1,b=[];for(let w=0;w<y;w++)b[w]=x.i(w)<<1|x.i(w-1)>>>31;return new o(b,x.h)}function F(x,y){const b=y>>5;y%=32;const w=x.g.length-b,N=[];for(let R=0;R<w;R++)N[R]=y>0?x.i(R+b)>>>y|x.i(R+b+1)<<32-y:x.i(R+b);return new o(N,x.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,VS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,ms=o}).apply(typeof Iw<"u"?Iw:typeof self<"u"?self:typeof window<"u"?window:{});var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var FS,Fa,US,Su,vm,$S,BS,zS;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jc=="object"&&Jc];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function u(c,p,g){return u=l,u.apply(null,arguments)}function h(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,D,L){for(var B=Array(arguments.length-2),re=2;re<arguments.length;re++)B[re-2]=arguments[re];return p.prototype[D].apply(v,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function _(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function S(c,p){for(let v=1;v<arguments.length;v++){const D=arguments[v];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const L=D.length||0;c.length=g+L;for(let B=0;B<L;B++)c[g+B]=D[B]}else c.push(D)}}class A{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(c){o.setTimeout(()=>{throw c},0)}function I(){var c=x;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class E{constructor(){this.h=this.g=null}add(p,g){const v=C.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var C=new A(()=>new k,c=>c.reset());class k{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let M,F=!1,x=new E,y=()=>{const c=Promise.resolve(void 0);M=()=>{c.then(b)}};function b(){for(var c;c=I();){try{c.h.call(c.g)}catch(g){P(g)}var p=C;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}F=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function N(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}N.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function T(c){return/^[\s\xa0]*$/.test(c)}function se(c,p){N.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(se,N),se.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&se.Z.h.call(this)},se.prototype.h=function(){se.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ae="closure_listenable_"+(Math.random()*1e6|0),ie=0;function at(c,p,g,v,D){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=D,this.key=++ie,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function K(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function q(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function pe(c){const p={};for(const g in c)p[g]=c[g];return p}const me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cn(c,p){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let L=0;L<me.length;L++)g=me[L],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Rt(c){this.src=c,this.g={},this.h=0}Rt.prototype.add=function(c,p,g,v,D){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const B=Jt(c,p,v,D);return B>-1?(p=c[B],g||(p.fa=!1)):(p=new at(p,this.src,L,!!v,D),p.fa=g,c.push(p)),p};function sr(c,p){const g=p.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,p,void 0),L;(L=D>=0)&&Array.prototype.splice.call(v,D,1),L&&(z(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function Jt(c,p,g,v){for(let D=0;D<c.length;++D){const L=c[D];if(!L.da&&L.listener==p&&L.capture==!!g&&L.ha==v)return D}return-1}var Lr="closure_lm_"+(Math.random()*1e6|0),Jh={};function Py(c,p,g,v,D){if(Array.isArray(p)){for(let L=0;L<p.length;L++)Py(c,p[L],g,v,D);return null}return g=Ly(g),c&&c[Ae]?c.J(p,g,a(v)?!!v.capture:!1,D):s1(c,p,g,!1,v,D)}function s1(c,p,g,v,D,L){if(!p)throw Error("Invalid event type");const B=a(D)?!!D.capture:!!D;let re=Zh(c);if(re||(c[Lr]=re=new Rt(c)),g=re.add(p,g,v,B,L),g.proxy)return g;if(v=i1(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)R||(D=B),D===void 0&&(D=!1),c.addEventListener(p.toString(),v,D);else if(c.attachEvent)c.attachEvent(Oy(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function i1(){function c(g){return p.call(c.src,c.listener,g)}const p=o1;return c}function Dy(c,p,g,v,D){if(Array.isArray(p))for(var L=0;L<p.length;L++)Dy(c,p[L],g,v,D);else v=a(v)?!!v.capture:!!v,g=Ly(g),c&&c[Ae]?(c=c.i,L=String(p).toString(),L in c.g&&(p=c.g[L],g=Jt(p,g,v,D),g>-1&&(z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[L],c.h--)))):c&&(c=Zh(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Jt(p,g,v,D)),(g=c>-1?p[c]:null)&&Xh(g))}function Xh(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ae])sr(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(Oy(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=Zh(p))?(sr(g,c),g.h==0&&(g.src=null,p[Lr]=null)):z(c)}}}function Oy(c){return c in Jh?Jh[c]:Jh[c]="on"+c}function o1(c,p){if(c.da)c=!0;else{p=new se(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&Xh(c),c=g.call(v,p)}return c}function Zh(c){return c=c[Lr],c instanceof Rt?c:null}var ef="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ly(c){return typeof c=="function"?c:(c[ef]||(c[ef]=function(p){return c.handleEvent(p)}),c[ef])}function xt(){w.call(this),this.i=new Rt(this),this.M=this,this.G=null}f(xt,w),xt.prototype[Ae]=!0,xt.prototype.removeEventListener=function(c,p,g,v){Dy(this,c,p,g,v)};function Pt(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new N(p,c);else if(p instanceof N)p.target=p.target||c;else{var D=p;p=new N(v,c),cn(p,D)}D=!0;let L,B;if(g)for(B=g.length-1;B>=0;B--)L=p.g=g[B],D=xc(L,v,!0,p)&&D;if(L=p.g=c,D=xc(L,v,!0,p)&&D,D=xc(L,v,!1,p)&&D,g)for(B=0;B<g.length;B++)L=p.g=g[B],D=xc(L,v,!1,p)&&D}xt.prototype.N=function(){if(xt.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)z(g[v]);delete c.g[p],c.h--}}this.G=null},xt.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},xt.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function xc(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let D=!0;for(let L=0;L<p.length;++L){const B=p[L];if(B&&!B.da&&B.capture==g){const re=B.listener,tt=B.ha||B.src;B.fa&&sr(c.i,B),D=re.call(tt,v)!==!1&&D}}return D&&!v.defaultPrevented}function a1(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function jy(c){c.g=a1(()=>{c.g=null,c.i&&(c.i=!1,jy(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class l1 extends w{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:jy(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(c){w.call(this),this.h=c,this.g={}}f(na,w);var My=[];function Vy(c){K(c.g,function(p,g){this.g.hasOwnProperty(g)&&Xh(p)},c),c.g={}}na.prototype.N=function(){na.Z.N.call(this),Vy(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tf=o.JSON.stringify,c1=o.JSON.parse,u1=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function Fy(){}function Uy(){}var ra={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function nf(){N.call(this,"d")}f(nf,N);function rf(){N.call(this,"c")}f(rf,N);var $s={},$y=null;function Ec(){return $y=$y||new xt}$s.Ia="serverreachability";function By(c){N.call(this,$s.Ia,c)}f(By,N);function sa(c){const p=Ec();Pt(p,new By(p))}$s.STAT_EVENT="statevent";function zy(c,p){N.call(this,$s.STAT_EVENT,c),this.stat=p}f(zy,N);function Dt(c){const p=Ec();Pt(p,new zy(p,c))}$s.Ja="timingevent";function Wy(c,p){N.call(this,$s.Ja,c),this.size=p}f(Wy,N);function ia(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function oa(){this.g=!0}oa.prototype.ua=function(){this.g=!1};function d1(c,p,g,v,D,L){c.info(function(){if(c.g)if(L){var B="",re=L.split("&");for(let Se=0;Se<re.length;Se++){var tt=re[Se].split("=");if(tt.length>1){const lt=tt[0];tt=tt[1];const Mn=lt.split("_");B=Mn.length>=2&&Mn[1]=="type"?B+(lt+"="+tt+"&"):B+(lt+"=redacted&")}}}else B=null;else B=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+p+`
`+g+`
`+B})}function h1(c,p,g,v,D,L,B){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+p+`
`+g+`
`+L+" "+B})}function Ri(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+p1(c,g)+(v?" "+v:"")})}function f1(c,p){c.info(function(){return"TIMEOUT: "+p})}oa.prototype.info=function(){};function p1(c,p){if(!c.g)return p;if(!p)return null;try{const L=JSON.parse(p);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let B=1;B<v.length;B++)v[B]=""}}}}return tf(L)}catch{return p}}var Tc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},qy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Hy;function sf(){}f(sf,Fy),sf.prototype.g=function(){return new XMLHttpRequest},Hy=new sf;function aa(c){return encodeURIComponent(String(c))}function m1(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function jr(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new na(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gy}function Gy(){this.i=null,this.g="",this.h=!1}var Ky={},of={};function af(c,p,g){c.M=1,c.A=Sc(jn(p)),c.u=g,c.R=!0,Qy(c,null)}function Qy(c,p){c.F=Date.now(),Ic(c),c.B=jn(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),lv(g.i,"t",v),c.C=0,g=c.j.L,c.h=new Gy,c.g=bv(c.j,g?p:null,!c.u),c.P>0&&(c.O=new l1(u(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(My[0]=D.toString()),D=My);for(let L=0;L<D.length;L++){const B=Py(g,D[L],v||p.handleEvent,!1,p.h||p);if(!B)break;p.g[B.key]=B}p=c.J?pe(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),sa(),d1(c.i,c.v,c.B,c.l,c.S,c.u)}jr.prototype.ba=function(c){c=c.target;const p=this.O;p&&Fr(c)==3?p.j():this.Y(c)},jr.prototype.Y=function(c){try{if(c==this.g)e:{const re=Fr(this.g),tt=this.g.ya(),Se=this.g.ca();if(!(re<3)&&(re!=3||this.g&&(this.h.h||this.g.la()||mv(this.g)))){this.K||re!=4||tt==7||(tt==8||Se<=0?sa(3):sa(2)),lf(this);var p=this.g.ca();this.X=p;var g=g1(this);if(this.o=p==200,h1(this.i,this.v,this.B,this.l,this.S,re,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var L=v;break t}}L=null}if(c=L)Ri(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,cf(this,c);else{this.o=!1,this.m=3,Dt(12),Bs(this),la(this);break e}}if(this.R){c=!0;let lt;for(;!this.K&&this.C<g.length;)if(lt=_1(this,g),lt==of){re==4&&(this.m=4,Dt(14),c=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(lt==Ky){this.m=4,Dt(15),Ri(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else Ri(this.i,this.l,lt,null),cf(this,lt);if(Yy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),re!=4||g.length!=0||this.h.h||(this.m=1,Dt(16),c=!1),this.o=this.o&&c,!c)Ri(this.i,this.l,g,"[Invalid Chunked Response]"),Bs(this),la(this);else if(g.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),_f(B),B.P=!0,Dt(11))}}else Ri(this.i,this.l,g,null),cf(this,g);re==4&&Bs(this),this.o&&!this.K&&(re==4?Ev(this.j,this):(this.o=!1,Ic(this)))}else R1(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Dt(12)):(this.m=0,Dt(13)),Bs(this),la(this)}}}catch{}finally{}};function g1(c){if(!Yy(c))return c.g.la();const p=mv(c.g);if(p==="")return"";let g="";const v=p.length,D=Fr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return Bs(c),la(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<v;L++)c.h.h=!0,g+=c.h.i.decode(p[L],{stream:!(D&&L==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function Yy(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function _1(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?of:(g=Number(p.substring(g,v)),isNaN(g)?Ky:(v+=1,v+g>p.length?of:(p=p.slice(v,v+g),c.C=v+g,p)))}jr.prototype.cancel=function(){this.K=!0,Bs(this)};function Ic(c){c.T=Date.now()+c.H,Jy(c,c.H)}function Jy(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ia(u(c.aa,c),p)}function lf(c){c.D&&(o.clearTimeout(c.D),c.D=null)}jr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(f1(this.i,this.B),this.M!=2&&(sa(),Dt(17)),Bs(this),this.m=2,la(this)):Jy(this,this.T-c)};function la(c){c.j.I==0||c.K||Ev(c.j,c)}function Bs(c){lf(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,Vy(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function cf(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||uf(g.h,c))){if(!c.L&&uf(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)kc(g),Nc(g);else break e;gf(g),Dt(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=ia(u(g.Va,g),6e3));ev(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ws(g,11)}else if((c.L||g.g==c)&&kc(g),!T(p))for(D=g.Ba.g.parse(p),p=0;p<D.length;p++){let Se=D[p];const lt=Se[0];if(!(lt<=g.K))if(g.K=lt,Se=Se[1],g.I==2)if(Se[0]=="c"){g.M=Se[1],g.ba=Se[2];const Mn=Se[3];Mn!=null&&(g.ka=Mn,g.j.info("VER="+g.ka));const qs=Se[4];qs!=null&&(g.za=qs,g.j.info("SVER="+g.za));const Ur=Se[5];Ur!=null&&typeof Ur=="number"&&Ur>0&&(v=1.5*Ur,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const $r=c.g;if($r){const Pc=$r.g?$r.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pc){var L=v.h;L.g||Pc.indexOf("spdy")==-1&&Pc.indexOf("quic")==-1&&Pc.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(df(L,L.h),L.h=null))}if(v.G){const yf=$r.g?$r.g.getResponseHeader("X-HTTP-Session-Id"):null;yf&&(v.wa=yf,ke(v.J,v.G,yf))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var B=c;if(v.na=Sv(v,v.L?v.ba:null,v.W),B.L){tv(v.h,B);var re=B,tt=v.O;tt&&(re.H=tt),re.D&&(lf(re),Ic(re)),v.g=B}else wv(v);g.i.length>0&&Ac(g)}else Se[0]!="stop"&&Se[0]!="close"||Ws(g,7);else g.I==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Ws(g,7):mf(g):Se[0]!="noop"&&g.l&&g.l.qa(Se),g.A=0)}}sa(4)}catch{}}var y1=class{constructor(c,p){this.g=c,this.map=p}};function Xy(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zy(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function ev(c){return c.h?1:c.g?c.g.size:0}function uf(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function df(c,p){c.g?c.g.add(p):c.h=p}function tv(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Xy.prototype.cancel=function(){if(this.i=nv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function nv(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return _(c.i)}var rv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function v1(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let D,L=null;v>=0?(D=c[g].substring(0,v),L=c[g].substring(v+1)):D=c[g],p(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Mr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Mr?(this.l=c.l,ca(this,c.j),this.o=c.o,this.g=c.g,ua(this,c.u),this.h=c.h,hf(this,cv(c.i)),this.m=c.m):c&&(p=String(c).match(rv))?(this.l=!1,ca(this,p[1]||"",!0),this.o=da(p[2]||""),this.g=da(p[3]||"",!0),ua(this,p[4]),this.h=da(p[5]||"",!0),hf(this,p[6]||"",!0),this.m=da(p[7]||"")):(this.l=!1,this.i=new fa(null,this.l))}Mr.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(ha(p,sv,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ha(p,sv,!0),"@"),c.push(aa(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ha(g,g.charAt(0)=="/"?E1:x1,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ha(g,I1)),c.join("")},Mr.prototype.resolve=function(c){const p=jn(this);let g=!!c.j;g?ca(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)ua(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=p.h.lastIndexOf("/");D!=-1&&(v=p.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let B=0;B<D.length;){const re=D[B++];re=="."?v&&B==D.length&&L.push(""):re==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&B==D.length&&L.push("")):(L.push(re),v=!0)}v=L.join("/")}else v=D}return g?p.h=v:g=c.i.toString()!=="",g?hf(p,cv(c.i)):g=!!c.m,g&&(p.m=c.m),p};function jn(c){return new Mr(c)}function ca(c,p,g){c.j=g?da(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function ua(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function hf(c,p,g){p instanceof fa?(c.i=p,S1(c.i,c.l)):(g||(p=ha(p,T1)),c.i=new fa(p,c.l))}function ke(c,p,g){c.i.set(p,g)}function Sc(c){return ke(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function da(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ha(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,w1),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function w1(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var sv=/[#\/\?@]/g,x1=/[#\?:]/g,E1=/[#\?]/g,T1=/[#\?@]/g,I1=/#/g;function fa(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function zs(c){c.g||(c.g=new Map,c.h=0,c.i&&v1(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=fa.prototype,t.add=function(c,p){zs(this),this.i=null,c=Pi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function iv(c,p){zs(c),p=Pi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function ov(c,p){return zs(c),p=Pi(c,p),c.g.has(p)}t.forEach=function(c,p){zs(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(p,D,v,this)},this)},this)};function av(c,p){zs(c);let g=[];if(typeof p=="string")ov(c,p)&&(g=g.concat(c.g.get(Pi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return zs(this),this.i=null,c=Pi(this,c),ov(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=av(this,c),c.length>0?String(c[0]):p):p};function lv(c,p,g){iv(c,p),g.length>0&&(c.i=null,c.g.set(Pi(c,p),_(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const D=aa(g);g=av(this,g);for(let L=0;L<g.length;L++){let B=D;g[L]!==""&&(B+="="+aa(g[L])),c.push(B)}}return this.i=c.join("&")};function cv(c){const p=new fa;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Pi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function S1(c,p){p&&!c.j&&(zs(c),c.i=null,c.g.forEach(function(g,v){const D=v.toLowerCase();v!=D&&(iv(this,v),lv(this,D,g))},c)),c.j=p}function b1(c,p){const g=new oa;if(o.Image){const v=new Image;v.onload=h(Vr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=h(Vr,g,"TestLoadImage: error",!1,p,v),v.onabort=h(Vr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=h(Vr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function C1(c,p){const g=new oa,v=new AbortController,D=setTimeout(()=>{v.abort(),Vr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?Vr(g,"TestPingServer: ok",!0,p):Vr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(D),Vr(g,"TestPingServer: error",!1,p)})}function Vr(c,p,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function N1(){this.g=new u1}function ff(c){this.i=c.Sb||null,this.h=c.ab||!1}f(ff,Fy),ff.prototype.g=function(){return new bc(this.i,this.h)};function bc(c,p){xt.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(bc,xt),t=bc.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,ma(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,pa(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ma(this)),this.g&&(this.readyState=3,ma(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;uv(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function uv(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?pa(this):ma(this),this.readyState==3&&uv(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,pa(this))},t.Na=function(c){this.g&&(this.response=c,pa(this))},t.ga=function(){this.g&&pa(this)};function pa(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ma(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function ma(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(bc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function dv(c){let p="";return K(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function pf(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=dv(g),typeof c=="string"?g!=null&&aa(g):ke(c,p,g))}function Fe(c){xt.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Fe,xt);var A1=/^https?$/i,k1=["POST","PUT"];t=Fe.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Hy.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(L){hv(this,L);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(k1,p,void 0)>=0)||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,B]of g)this.g.setRequestHeader(L,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){hv(this,L)}};function hv(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,fv(c),Cc(c)}function fv(c){c.A||(c.A=!0,Pt(c,"complete"),Pt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Pt(this,"complete"),Pt(this,"abort"),Cc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cc(this,!0)),Fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pv(this):this.Xa())},t.Xa=function(){pv(this)};function pv(c){if(c.h&&typeof i<"u"){if(c.v&&Fr(c)==4)setTimeout(c.Ca.bind(c),0);else if(Pt(c,"readystatechange"),Fr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=L===0){let B=String(c.D).match(rv)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),v=!A1.test(B?B.toLowerCase():"")}g=v}if(g)Pt(c,"complete"),Pt(c,"success");else{c.o=6;try{var D=Fr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",fv(c)}}finally{Cc(c)}}}}function Cc(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||Pt(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Fr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Fr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),c1(p)}};function mv(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function R1(c){const p={};c=(c.g&&Fr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(T(c[v]))continue;var g=m1(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=p[D]||[];p[D]=L,L.push(g)}q(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ga(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function gv(c){this.za=0,this.i=[],this.j=new oa,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ga("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ga("baseRetryDelayMs",5e3,c),this.Za=ga("retryDelaySeedMs",1e4,c),this.Ta=ga("forwardChannelMaxRetries",2,c),this.va=ga("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Xy(c&&c.concurrentRequestLimit),this.Ba=new N1,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=gv.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){Dt(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=Sv(this,null,this.W),Ac(this)};function mf(c){if(_v(c),c.I==3){var p=c.V++,g=jn(c.J);if(ke(g,"SID",c.M),ke(g,"RID",p),ke(g,"TYPE","terminate"),_a(c,g),p=new jr(c,c.j,p),p.M=2,p.A=Sc(jn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=bv(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Ic(p)}Iv(c)}function Nc(c){c.g&&(_f(c),c.g.cancel(),c.g=null)}function _v(c){Nc(c),c.v&&(o.clearTimeout(c.v),c.v=null),kc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function Ac(c){if(!Zy(c.h)&&!c.m){c.m=!0;var p=c.Ea;M||y(),F||(M(),F=!0),x.add(p,c),c.D=0}}function P1(c,p){return ev(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ia(u(c.Ea,c,p),Tv(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new jr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=pe(L),cn(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=vv(this,D,p),g=jn(this.J),ke(g,"RID",c),ke(g,"CVER",22),this.G&&ke(g,"X-HTTP-Session-Id",this.G),_a(this,g),L&&(this.R?p="headers="+aa(dv(L))+"&"+p:this.u&&pf(g,this.u,L)),df(this.h,D),this.Ra&&ke(g,"TYPE","init"),this.S?(ke(g,"$req",p),ke(g,"SID","null"),D.U=!0,af(D,g,null)):af(D,g,p),this.I=2}}else this.I==3&&(c?yv(this,c):this.i.length==0||Zy(this.h)||yv(this))};function yv(c,p){var g;p?g=p.l:g=c.V++;const v=jn(c.J);ke(v,"SID",c.M),ke(v,"RID",g),ke(v,"AID",c.K),_a(c,v),c.u&&c.o&&pf(v,c.u,c.o),g=new jr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=vv(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),df(c.h,g),af(g,v,p)}function _a(c,p){c.H&&K(c.H,function(g,v){ke(p,v,g)}),c.l&&K({},function(g,v){ke(p,v,g)})}function vv(c,p,g){g=Math.min(c.i.length,g);const v=c.l?u(c.l.Ka,c.l,c):null;e:{var D=c.i;let re=-1;for(;;){const tt=["count="+g];re==-1?g>0?(re=D[0].g,tt.push("ofs="+re)):re=0:tt.push("ofs="+re);let Se=!0;for(let lt=0;lt<g;lt++){var L=D[lt].g;const Mn=D[lt].map;if(L-=re,L<0)re=Math.max(0,D[lt].g-100),Se=!1;else try{L="req"+L+"_"||"";try{var B=Mn instanceof Map?Mn:Object.entries(Mn);for(const[qs,Ur]of B){let $r=Ur;a(Ur)&&($r=tf(Ur)),tt.push(L+qs+"="+encodeURIComponent($r))}}catch(qs){throw tt.push(L+"type="+encodeURIComponent("_badmap")),qs}}catch{v&&v(Mn)}}if(Se){B=tt.join("&");break e}}B=void 0}return c=c.i.splice(0,g),p.G=c,B}function wv(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;M||y(),F||(M(),F=!0),x.add(p,c),c.A=0}}function gf(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ia(u(c.Da,c),Tv(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,xv(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ia(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Dt(10),Nc(this),xv(this))};function _f(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function xv(c){c.g=new jr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=jn(c.na);ke(p,"RID","rpc"),ke(p,"SID",c.M),ke(p,"AID",c.K),ke(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&ke(p,"TO",c.ia),ke(p,"TYPE","xmlhttp"),_a(c,p),c.u&&c.o&&pf(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Sc(jn(p)),g.u=null,g.R=!0,Qy(g,c)}t.Va=function(){this.C!=null&&(this.C=null,Nc(this),gf(this),Dt(19))};function kc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Ev(c,p){var g=null;if(c.g==p){kc(c),_f(c),c.g=null;var v=2}else if(uf(c.h,p))g=p.G,tv(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var D=c.D;v=Ec(),Pt(v,new Wy(v,g)),Ac(c)}else wv(c);else if(D=p.m,D==3||D==0&&p.X>0||!(v==1&&P1(c,p)||v==2&&gf(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),D){case 1:Ws(c,5);break;case 4:Ws(c,10);break;case 3:Ws(c,6);break;default:Ws(c,2)}}}function Tv(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function Ws(c,p){if(c.j.info("Error code "+p),p==2){var g=u(c.bb,c),v=c.Ua;const D=!v;v=new Mr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ca(v,"https"),Sc(v),D?b1(v.toString(),g):C1(v.toString(),g)}else Dt(2);c.I=0,c.l&&c.l.pa(p),Iv(c),_v(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Dt(2)):(this.j.info("Failed to ping google.com"),Dt(1))};function Iv(c){if(c.I=0,c.ja=[],c.l){const p=nv(c.h);(p.length!=0||c.i.length!=0)&&(S(c.ja,p),S(c.ja,c.i),c.h.i.length=0,_(c.i),c.i.length=0),c.l.oa()}}function Sv(c,p,g){var v=g instanceof Mr?jn(g):new Mr(g);if(v.g!="")p&&(v.g=p+"."+v.g),ua(v,v.u);else{var D=o.location;v=D.protocol,p=p?p+"."+D.hostname:D.hostname,D=+D.port;const L=new Mr(null);v&&ca(L,v),p&&(L.g=p),D&&ua(L,D),g&&(L.h=g),v=L}return g=c.G,p=c.wa,g&&p&&ke(v,g,p),ke(v,"VER",c.ka),_a(c,v),v}function bv(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Fe(new ff({ab:g})):new Fe(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cv(){}t=Cv.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Rc(){}Rc.prototype.g=function(c,p){return new Xt(c,p)};function Xt(c,p){xt.call(this),this.g=new gv(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!T(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Di(this)}f(Xt,xt),Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){mf(this.g)},Xt.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=tf(c),c=g);p.i.push(new y1(p.Ya++,c)),p.I==3&&Ac(p)},Xt.prototype.N=function(){this.g.l=null,delete this.j,mf(this.g),delete this.g,Xt.Z.N.call(this)};function Nv(c){nf.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(Nv,nf);function Av(){rf.call(this),this.status=1}f(Av,rf);function Di(c){this.g=c}f(Di,Cv),Di.prototype.ra=function(){Pt(this.g,"a")},Di.prototype.qa=function(c){Pt(this.g,new Nv(c))},Di.prototype.pa=function(c){Pt(this.g,new Av)},Di.prototype.oa=function(){Pt(this.g,"b")},Rc.prototype.createWebChannel=Rc.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,zS=function(){return new Rc},BS=function(){return Ec()},$S=$s,vm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tc.NO_ERROR=0,Tc.TIMEOUT=8,Tc.HTTP_ERROR=6,Su=Tc,qy.COMPLETE="complete",US=qy,Uy.EventType=ra,ra.OPEN="a",ra.CLOSE="b",ra.ERROR="c",ra.MESSAGE="d",xt.prototype.listen=xt.prototype.J,Fa=Uy,Fe.prototype.listenOnce=Fe.prototype.K,Fe.prototype.getLastError=Fe.prototype.Ha,Fe.prototype.getLastErrorCode=Fe.prototype.ya,Fe.prototype.getStatus=Fe.prototype.ca,Fe.prototype.getResponseJson=Fe.prototype.La,Fe.prototype.getResponseText=Fe.prototype.la,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Fa,FS=Fe}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}St.UNAUTHENTICATED=new St(null),St.GOOGLE_CREDENTIALS=new St("google-credentials-uid"),St.FIRST_PARTY=new St("first-party-uid"),St.MOCK_USER=new St("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Go="12.8.0";function gL(t){Go=t}/**
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
 */const gi=new hh("@firebase/firestore");function Mi(){return gi.logLevel}function H(t,...e){if(gi.logLevel<=ce.DEBUG){const n=e.map(d_);gi.debug(`Firestore (${Go}): ${t}`,...n)}}function Nr(t,...e){if(gi.logLevel<=ce.ERROR){const n=e.map(d_);gi.error(`Firestore (${Go}): ${t}`,...n)}}function Ao(t,...e){if(gi.logLevel<=ce.WARN){const n=e.map(d_);gi.warn(`Firestore (${Go}): ${t}`,...n)}}function d_(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,WS(t,r,n)}function WS(t,e,n){let r=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nr(r),new Error(r)}function xe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||WS(e,s,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(St.UNAUTHENTICATED))}shutdown(){}}class yL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vL{constructor(e){this.t=e,this.currentUser=St.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new yr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(xe(typeof r.accessToken=="string",31837,{l:r}),new qS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string",2055,{h:e}),new St(e)}}class wL{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=St.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class xL{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new wL(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(St.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class EL{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Sw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Sw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function TL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=TL(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function wm(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Zf(s)===Zf(i)?he(s,i):Zf(s)?1:-1}return he(t.length,e.length)}const IL=55296,SL=57343;function Zf(t){const e=t.charCodeAt(0);return e>=IL&&e<=SL}function ko(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="__name__";class Un{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Z(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Un.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Un?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Un.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=Un.isNumericId(e),s=Un.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Un.extractNumericId(e).compare(Un.extractNumericId(n)):wm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ms.fromString(e.substring(4,e.length-2))}}class Ce extends Un{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const bL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Un{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return bL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bw}static keyField(){return new _t([bw])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ce.fromString(e))}static fromName(e){return new Q(Ce.fromString(e).popFirst(5))}static empty(){return new Q(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t,e,n){if(!n)throw new W(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function CL(t,e,n,r){if(e===!0&&r===!0)throw new W(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Cw(t){if(!Q.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nw(t){if(Q.isDocumentKey(t))throw new W(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function GS(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function _h(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z(12329,{type:typeof t})}function sn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_h(t);throw new W(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function NL(t,e){if(e<=0)throw new W(j.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function lc(t,e){if(!GS(t))throw new W(j.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(j.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=-62135596800,kw=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*kw);return new ee(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Aw)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/kw}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(lc(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Aw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:Xe("string",ee._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ol=-1;function AL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new ee(n+1,0):new ee(n,r));return new Ts(s,Q.empty(),e)}function kL(t){return new Ts(t.readTime,t.key,Ol)}class Ts{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ts(te.min(),Q.empty(),Ol)}static max(){return new Ts(te.max(),Q.empty(),Ol)}}function RL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const PL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==PL)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function OL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class yh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=-1;function vh(t){return t==null}function yd(t){return t===0&&1/t==-1/0}function LL(t){return typeof t=="number"&&Number.isInteger(t)&&!yd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="";function jL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Rw(e)),e=ML(t.get(n),e);return Rw(e)}function ML(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case KS:n+="";break;default:n+=i}}return n}function Rw(t){return t+KS+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et=class xm{constructor(e,n){this.comparator=e,this.root=n||gs.EMPTY}insert(e,n){return new xm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,gs.BLACK,null,null))}remove(e){return new xm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,gs.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xc(this.root,e,this.comparator,!0)}},Xc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},gs=class or{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??or.RED,this.left=s??or.EMPTY,this.right=i??or.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new or(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return or.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return or.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Z(27949);return e+(this.isRed()?0:1)}};gs.EMPTY=null,gs.RED=!0,gs.BLACK=!1;gs.EMPTY=new class{constructor(){this.size=0}get key(){throw Z(57766)}get value(){throw Z(16141)}get color(){throw Z(16727)}get left(){throw Z(29726)}get right(){throw Z(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new gs(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dw(this.data.getIterator())}getIteratorFrom(e){return new Dw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Dw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new tn([])}unionWith(e){let n=new ot(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ko(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class YS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new YS("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const VL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Is(t){if(xe(!!t,39018),typeof t=="string"){let e=0;const n=VL.exec(t);if(xe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ss(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
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
 */const JS="server_timestamp",XS="__type__",ZS="__previous_value__",eb="__local_write_time__";function p_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[XS])==null?void 0:r.stringValue)===JS}function wh(t){const e=t.mapValue.fields[ZS];return p_(e)?wh(e):e}function Ll(t){const e=Is(t.mapValue.fields[eb].timestampValue);return new ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e,n,r,s,i,o,a,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const vd="(default)";class jl{constructor(e,n){this.projectId=e,this.database=n||vd}static empty(){return new jl("","")}get isDefaultDatabase(){return this.database===vd}isEqual(e){return e instanceof jl&&e.projectId===this.projectId&&e.database===this.database}}function UL(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jl(t.options.projectId,e)}/**
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
 */const tb="__type__",$L="__max__",Zc={mapValue:{}},nb="__vector__",wd="value";function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?p_(t)?4:zL(t)?9007199254740991:BL(t)?10:11:Z(28295,{value:t})}function Jn(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ll(t).isEqual(Ll(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Is(s.timestampValue),a=Is(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ss(s.bytesValue).isEqual(Ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),a=qe(i.doubleValue);return o===a?yd(o)===yd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ko(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Pw(o)!==Pw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Jn(o[l],a[l])))return!1;return!0}(t,e);default:return Z(52216,{left:t})}}function Ml(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function Ro(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=qe(i.integerValue||i.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Ow(t.timestampValue,e.timestampValue);case 4:return Ow(Ll(t),Ll(e));case 5:return wm(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ss(i),l=Ss(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=he(a[u],l[u]);if(h!==0)return h}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(qe(i.latitude),qe(o.latitude));return a!==0?a:he(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,S,A;const a=i.fields||{},l=o.fields||{},u=(m=a[wd])==null?void 0:m.arrayValue,h=(_=l[wd])==null?void 0:_.arrayValue,f=he(((S=u==null?void 0:u.values)==null?void 0:S.length)||0,((A=h==null?void 0:h.values)==null?void 0:A.length)||0);return f!==0?f:Lw(u,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Zc.mapValue&&o===Zc.mapValue)return 0;if(i===Zc.mapValue)return 1;if(o===Zc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=wm(l[f],h[f]);if(m!==0)return m;const _=Ro(a[l[f]],u[h[f]]);if(_!==0)return _}return he(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Z(23264,{he:n})}}function Ow(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Is(t),r=Is(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Lw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ro(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function Po(t){return Em(t)}function Em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Is(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Em(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Em(n.fields[o])}`;return s+"}"}(t.mapValue):Z(61005,{value:t})}function bu(t){switch(bs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=wh(t);return e?16+bu(e):16;case 5:return 2*t.stringValue.length;case 6:return Ss(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+bu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Vs(r.fields,(i,o)=>{s+=i.length+bu(o)}),s}(t.mapValue);default:throw Z(13486,{value:t})}}function jw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tm(t){return!!t&&"integerValue"in t}function m_(t){return!!t&&"arrayValue"in t}function Mw(t){return!!t&&"nullValue"in t}function Vw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cu(t){return!!t&&"mapValue"in t}function BL(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[tb])==null?void 0:r.stringValue)===nb}function el(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=el(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return{...t}}function zL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===$L}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.value=e}static empty(){return new Wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=_t.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=el(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Cu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Vs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Wt(el(this.value))}}function rb(t){const e=[];return Vs(t.fields,(n,r)=>{const s=new _t([n]);if(Cu(r)){const i=rb(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new tn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ct(e,0,te.min(),te.min(),te.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ct(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new Ct(e,2,n,te.min(),te.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,te.min(),te.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xd{constructor(e,n){this.position=e,this.inclusive=n}}function Fw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ro(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vl{constructor(e,n="asc"){this.field=e,this.dir=n}}function WL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sb{}class Je extends sb{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new HL(e,n,r):n==="array-contains"?new QL(e,r):n==="in"?new YL(e,r):n==="not-in"?new JL(e,r):n==="array-contains-any"?new XL(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new GL(e,r):new KL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ro(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(Ro(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ln extends sb{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ln(e,n)}matches(e){return ib(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function ib(t){return t.op==="and"}function ob(t){return qL(t)&&ib(t)}function qL(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function Im(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+Po(t.value);if(ob(t))return t.filters.map(e=>Im(e)).join(",");{const e=t.filters.map(n=>Im(n)).join(",");return`${t.op}(${e})`}}function ab(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&Jn(r.value,s.value)}(t,e):t instanceof Ln?function(r,s){return s instanceof Ln&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ab(o,s.filters[a]),!0):!1}(t,e):void Z(19439)}function lb(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${Po(n.value)}`}(t):t instanceof Ln?function(n){return n.op.toString()+" {"+n.getFilters().map(lb).join(" ,")+"}"}(t):"Filter"}class HL extends Je{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class GL extends Je{constructor(e,n){super(e,"in",n),this.keys=cb("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KL extends Je{constructor(e,n){super(e,"not-in",n),this.keys=cb("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cb(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class QL extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return m_(n)&&Ml(n.arrayValue,this.value)}}class YL extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class JL extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ml(this.value.arrayValue,n)}}class XL extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!m_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
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
 */class ZL{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function $w(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ZL(t,e,n,r,s,i,o)}function g_(t){const e=ne(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Im(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Po(r)).join(",")),e.Te=n}return e.Te}function __(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ab(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uw(t.startAt,e.startAt)&&Uw(t.endAt,e.endAt)}function Sm(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function ej(t,e,n,r,s,i,o,a){return new Yo(t,e,n,r,s,i,o,a)}function xh(t){return new Yo(t)}function Bw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tj(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function ub(t){return t.collectionGroup!==null}function tl(t){const e=ne(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ot(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Vl(i,r))}),n.has(_t.keyField().canonicalString())||e.Ie.push(new Vl(_t.keyField(),r))}return e.Ie}function Kn(t){const e=ne(t);return e.Ee||(e.Ee=nj(e,tl(t))),e.Ee}function nj(t,e){if(t.limitType==="F")return $w(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Vl(s.field,i)});const n=t.endAt?new xd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xd(t.startAt.position,t.startAt.inclusive):null;return $w(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bm(t,e){const n=t.filters.concat([e]);return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function rj(t,e){const n=t.explicitOrderBy.concat([e]);return new Yo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ed(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Eh(t,e){return __(Kn(t),Kn(e))&&t.limitType===e.limitType}function db(t){return`${g_(Kn(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lb(s)).join(", ")}]`),vh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Po(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Po(s)).join(",")),`Target(${r})`}(Kn(t))}; limitType=${t.limitType})`}function Th(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of tl(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Fw(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,tl(r),s)||r.endAt&&!function(o,a,l){const u=Fw(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,tl(r),s))}(t,e)}function sj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hb(t){return(e,n)=>{let r=!1;for(const s of tl(t)){const i=ij(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ij(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Ro(l,u):Z(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return QS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj=new et(Q.comparator);function Ar(){return oj}const fb=new et(Q.comparator);function Ua(...t){let e=fb;for(const n of t)e=e.insert(n.key,n);return e}function pb(t){let e=fb;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return nl()}function mb(){return nl()}function nl(){return new Ci(t=>t.toString(),(t,e)=>t.isEqual(e))}const aj=new et(Q.comparator),lj=new ot(Q.comparator);function fe(...t){let e=lj;for(const n of t)e=e.add(n);return e}const cj=new ot(he);function uj(){return cj}/**
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
 */function y_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yd(e)?"-0":e}}function gb(t){return{integerValue:""+t}}function dj(t,e){return LL(e)?gb(e):y_(t,e)}/**
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
 */class Ih{constructor(){this._=void 0}}function hj(t,e,n){return t instanceof Fl?function(s,i){const o={fields:{[XS]:{stringValue:JS},[eb]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&p_(i)&&(i=wh(i)),i&&(o.fields[ZS]=i),{mapValue:o}}(n,e):t instanceof Do?yb(t,e):t instanceof Ul?vb(t,e):function(s,i){const o=_b(s,i),a=zw(o)+zw(s.Ae);return Tm(o)&&Tm(s.Ae)?gb(a):y_(s.serializer,a)}(t,e)}function fj(t,e,n){return t instanceof Do?yb(t,e):t instanceof Ul?vb(t,e):n}function _b(t,e){return t instanceof Td?function(r){return Tm(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fl extends Ih{}class Do extends Ih{constructor(e){super(),this.elements=e}}function yb(t,e){const n=wb(e);for(const r of t.elements)n.some(s=>Jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ul extends Ih{constructor(e){super(),this.elements=e}}function vb(t,e){let n=wb(e);for(const r of t.elements)n=n.filter(s=>!Jn(s,r));return{arrayValue:{values:n}}}class Td extends Ih{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function zw(t){return qe(t.integerValue||t.doubleValue)}function wb(t){return m_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.field=e,this.transform=n}}function pj(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof Ul&&s instanceof Ul?ko(r.elements,s.elements,Jn):r instanceof Td&&s instanceof Td?Jn(r.Ae,s.Ae):r instanceof Fl&&s instanceof Fl}(t.transform,e.transform)}class mj{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sh{}function Eb(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ib(t.key,kn.none()):new cc(t.key,t.data,kn.none());{const n=t.data,r=Wt.empty();let s=new ot(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fs(t.key,r,new tn(s.toArray()),kn.none())}}function gj(t,e,n){t instanceof cc?function(s,i,o){const a=s.value.clone(),l=qw(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(s,i,o){if(!Nu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=qw(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Tb(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof cc?function(i,o,a,l){if(!Nu(i.precondition,o))return a;const u=i.value.clone(),h=Hw(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(i,o,a,l){if(!Nu(i.precondition,o))return a;const u=Hw(i.fieldTransforms,l,o),h=o.data;return h.setAll(Tb(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Nu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _j(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=_b(r.transform,s||null);i!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,i))}return n||null}function Ww(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ko(r,s,(i,o)=>pj(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cc extends Sh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fs extends Sh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tb(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function qw(t,e,n){const r=new Map;xe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,fj(o,a,n[s]))}return r}function Hw(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,hj(i,o,e))}return r}class Ib extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yj extends Sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vj{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&gj(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mb();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Eb(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&ko(this.mutations,e.mutations,(n,r)=>Ww(n,r))&&ko(this.baseMutations,e.baseMutations,(n,r)=>Ww(n,r))}}class v_{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){xe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return aj}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new v_(e,n,r,s)}}/**
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
 */class wj{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe,ge;function Ej(t){switch(t){case j.OK:return Z(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return Z(15467,{code:t})}}function Sb(t){if(t===void 0)return Nr("GRPC error has no .code"),j.UNKNOWN;switch(t){case Qe.OK:return j.OK;case Qe.CANCELLED:return j.CANCELLED;case Qe.UNKNOWN:return j.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return j.INTERNAL;case Qe.UNAVAILABLE:return j.UNAVAILABLE;case Qe.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Qe.NOT_FOUND:return j.NOT_FOUND;case Qe.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Qe.ABORTED:return j.ABORTED;case Qe.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Qe.DATA_LOSS:return j.DATA_LOSS;default:return Z(39323,{code:t})}}(ge=Qe||(Qe={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tj(){return new TextEncoder}/**
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
 */const Ij=new ms([4294967295,4294967295],0);function Gw(t){const e=Tj().encode(t),n=new VS;return n.update(e),new Uint8Array(n.digest())}function Kw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ms([n,r],0),new ms([s,i],0)]}class w_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $a(`Invalid padding: ${n}`);if(r<0)throw new $a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ms.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ms.fromNumber(r)));return s.compare(Ij)===1&&(s=new ms([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Gw(e),[r,s]=Kw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new w_(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=Gw(e),[r,s]=Kw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,uc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new bh(te.min(),s,new et(he),Ar(),fe())}}class uc{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new uc(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class bb{constructor(e,n){this.targetId=e,this.Ce=n}}class Cb{constructor(e,n,r=wt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Qw{constructor(){this.ve=0,this.Fe=Yw(),this.Me=wt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z(38017,{changeType:i})}}),new uc(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Yw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,xe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Sj{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ar(),this.He=eu(),this.Je=eu(),this.Ze=new et(he)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Z(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Sm(i))if(r===0){const o=new Q(i.path);this.et(n,o,Ct.newNoDocument(o,te.min()))}else xe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ss(r).toUint8Array()}catch(l){if(l instanceof YS)return Ao("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new w_(o,s,i)}catch(l){return Ao(l instanceof $a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&Sm(a.target)){const l=new Q(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ct.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=fe();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new bh(e,n,this.Ze,this.je,r);return this.je=Ar(),this.He=eu(),this.Je=eu(),this.Ze=new et(he),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Qw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new ot(he),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new ot(he),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Qw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function eu(){return new et(Q.comparator)}function Yw(){return new et(Q.comparator)}const bj={asc:"ASCENDING",desc:"DESCENDING"},Cj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nj={and:"AND",or:"OR"};class Aj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cm(t,e){return t.useProto3Json||vh(e)?e:{value:e}}function Id(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kj(t,e){return Id(t,e.toTimestamp())}function Qn(t){return xe(!!t,49232),te.fromTimestamp(function(n){const r=Is(n);return new ee(r.seconds,r.nanos)}(t))}function x_(t,e){return Nm(t,e).canonicalString()}function Nm(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ab(t){const e=Ce.fromString(t);return xe(Ob(e),10190,{key:e.toString()}),e}function Am(t,e){return x_(t.databaseId,e.path)}function ep(t,e){const n=Ab(e);if(n.get(1)!==t.databaseId.projectId)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Rb(n))}function kb(t,e){return x_(t.databaseId,e)}function Rj(t){const e=Ab(t);return e.length===4?Ce.emptyPath():Rb(e)}function km(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rb(t){return xe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Jw(t,e,n){return{name:Am(t,e),fields:n.value.mapValue.fields}}function Pj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Z(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string",58123),wt.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),wt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:Sb(u.code);return new W(h,u.message||"")}(o);n=new Cb(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ep(t,r.document.name),i=Qn(r.document.updateTime),o=r.document.createTime?Qn(r.document.createTime):te.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=Ct.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Au(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ep(t,r.document),i=r.readTime?Qn(r.readTime):te.min(),o=Ct.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Au([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ep(t,r.document),i=r.removedTargetIds||[];n=new Au([],i,s,null)}else{if(!("filter"in e))return Z(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xj(s,i),a=r.targetId;n=new bb(a,o)}}return n}function Dj(t,e){let n;if(e instanceof cc)n={update:Jw(t,e.key,e.value)};else if(e instanceof Ib)n={delete:Am(t,e.key)};else if(e instanceof Fs)n={update:Jw(t,e.key,e.data),updateMask:Bj(e.fieldMask)};else{if(!(e instanceof yj))return Z(16599,{dt:e.type});n={verify:Am(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ul)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Td)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Z(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kj(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z(27497)}(t,e.precondition)),n}function Oj(t,e){return t&&t.length>0?(xe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Qn(s.updateTime):Qn(i);return o.isEqual(te.min())&&(o=Qn(i)),new mj(o,s.transformResults||[])}(n,e))):[]}function Lj(t,e){return{documents:[kb(t,e.path)]}}function jj(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=kb(t,s);const i=function(u){if(u.length!==0)return Db(Ln.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Fi(m.field),direction:Fj(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function Mj(t){let e=Rj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){xe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=Pb(f);return m instanceof Ln&&ob(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(S){return new Vl(Ui(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,vh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new xd(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,_=f.values||[];return new xd(_,m)}(n.endAt)),ej(e,s,o,i,a,"F",l,u)}function Vj(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pb(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ui(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ui(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ui(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Z(61313);default:return Z(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Ui(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Z(58110);default:return Z(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ln.create(n.compositeFilter.filters.map(r=>Pb(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z(1026)}}(n.compositeFilter.op))}(t):Z(30097,{filter:t})}function Fj(t){return bj[t]}function Uj(t){return Cj[t]}function $j(t){return Nj[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return _t.fromServerFormat(t.fieldPath)}function Db(t){return t instanceof Je?function(n){if(n.op==="=="){if(Vw(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(Mw(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Vw(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(Mw(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:Uj(n.op),value:n.value}}}(t):t instanceof Ln?function(n){const r=n.getFilters().map(s=>Db(s));return r.length===1?r[0]:{compositeFilter:{op:$j(n.op),filters:r}}}(t):Z(54877,{filter:t})}function Bj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ob(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Lb(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r,s,i=te.min(),o=te.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zj{constructor(e){this.yt=e}}function Wj(t){const e=Mj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ed(e,e.limit,"L"):e}/**
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
 */class qj{constructor(){this.Sn=new Hj}addToCollectionParentIndex(e,n){return this.Sn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Ts.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Ts.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Hj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ce.comparator)).toArray()}}/**
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
 */const Xw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},jb=41943040;class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(jb,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Oo(0)}static ar(){return new Oo(-1)}}/**
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
 */const Zw="LruGarbageCollector",Gj=1048576;function ex([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class Kj{constructor(e){this.Pr=e,this.buffer=new ot(ex),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ex(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Qj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Zw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qo(n)?H(Zw,"Ignoring IndexedDB error during garbage collection: ",n):await Ko(n)}await this.Ar(3e5)})}}class Yj{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(yh.ce);const r=new Kj(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Xw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Xw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Mi()<=ce.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function Jj(t,e){return new Yj(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xj{constructor(){this.changes=new Ci(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&rl(r.mutation,s,tn.empty(),ee.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=ti();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ua();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ar();const o=nl(),a=function(){return nl()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Fs)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),rl(h.mutation,u,h.mutation.getFieldMask(),ee.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>a.set(u,new Zj(h,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=nl();let s=new et((o,a)=>o-a),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||tn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||fe()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=mb();h.forEach(m=>{if(!i.has(m)){const _=Eb(n.get(m),r.get(m));_!==null&&f.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return tj(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ub(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(ti());let a=Ol,l=i;return o.next(u=>V.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,fe())).next(h=>({batchId:a,changes:pb(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Ua();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ua();return this.indexManager.getCollectionParents(e,i).next(a=>V.forEach(a,l=>{const u=function(f,m){return new Yo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Ct.newInvalidDocument(h)))});let a=Ua();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&rl(h.mutation,u,tn.empty(),ee.now()),Th(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class tM{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Qn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:Wj(s.bundledQuery),readTime:Qn(s.readTime)}}(n)),V.resolve()}}/**
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
 */class nM{constructor(){this.overlays=new et(Q.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=ti(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new et((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ti(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ti(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return V.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new wj(n,r));let i=this.Lr.get(n);i===void 0&&(i=fe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class rM{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.kr=new ot(ut.Kr),this.qr=new ot(ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new ut(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new Ce([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Q(new Ce([])),r=new ut(n,e),s=new ut(n,e+1);let i=fe();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Q.comparator(e.key,n.key)||he(e.Hr,n.Hr)}static Ur(e,n){return he(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new ot(ut.Kr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vj(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?f_:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(he);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new ut(new Q(i),0);let a=new ot(he);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)},o),V.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){xe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return V.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new ut(n,0),s=this.Jr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.ti=e,this.docs=function(){return new et(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let r=Ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ct.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ar();const o=n.path,a=new Q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||RL(kL(h),r)<=0||(s.has(h.key)||Th(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oM(this)}getSize(e){return V.resolve(this.size)}}class oM extends Xj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aM{constructor(e){this.persistence=e,this.ri=new Ci(n=>g_(n),__),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new E_,this.targetCount=0,this.oi=Oo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Oo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n){this._i={},this.overlays={},this.ai=new yh(0),this.ui=!1,this.ui=!0,this.ci=new rM,this.referenceDelegate=e(this),this.li=new aM(this),this.indexManager=new qj,this.remoteDocumentCache=function(s){return new iM(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new zj(n),this.Pi=new tM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new sM(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new lM(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class lM extends DL{constructor(e){super(),this.currentSequenceNumber=e}}class T_{constructor(e){this.persistence=e,this.Ri=new E_,this.Ai=null}static Vi(e){return new T_(e)}get di(){if(this.Ai)return this.Ai;throw Z(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Sd{constructor(e,n){this.persistence=e,this.fi=new Ci(r=>jL(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Jj(this,n)}static Vi(e,n){return new Sd(e,n)}Ti(){}Ii(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bu(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new I_(e,n.fromCache,r,s)}}/**
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
 */class cM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class uM{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return NP()?8:OL(At())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new cM;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Mi()<=ce.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Mi()<=ce.DEBUG&&H("QueryEngine","Query:",Vi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Mi()<=ce.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kn(n))):V.resolve())}gs(e,n){if(Bw(n))return V.resolve(null);let r=Kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ed(n,null,"F"),r=Kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,a);return this.Ss(n,u,o,l.readTime)?this.gs(e,Ed(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return Bw(n)||s.isEqual(te.min())?V.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?V.resolve(null):(Mi()<=ce.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vi(n)),this.Ds(e,o,n,AL(s,Ol)).next(a=>a))})}bs(e,n){let r=new ot(hb(e));return n.forEach((s,i)=>{Th(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Mi()<=ce.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.fs.getDocumentsMatchingQuery(e,n,Ts.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const S_="LocalStore",dM=3e8;class hM{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new et(he),this.Fs=new Ci(i=>g_(i),__),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eM(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function fM(t,e,n,r){return new hM(t,e,n,r)}async function Vb(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=fe();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function pM(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,m=f.keys();let _=V.resolve();return m.forEach(S=>{_=_.next(()=>h.getEntry(l,S)).next(A=>{const P=u.docVersions.get(S);xe(P!==null,48541),A.version.compareTo(P)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Fb(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function mM(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,f)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(wt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),s=s.insert(f,_),function(A,P,I){return A.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=dM?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,_,h)&&a.push(n.li.updateTargetData(i,_))});let l=Ar(),u=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(gM(i,o,e.documentUpdates).next(h=>{l=h.Bs,u=h.Ls})),!r.isEqual(te.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function gM(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ar();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H(S_,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function _M(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=f_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yM(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new rs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Rm(t,e,n){const r=ne(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qo(o))throw o;H(S_,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function tx(t,e,n){const r=ne(t);let s=te.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=ne(l),m=f.Fs.get(h);return m!==void 0?V.resolve(f.vs.get(m)):f.li.getTargetData(u,h)}(r,o,Kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:fe())).next(a=>(vM(r,sj(e),a),{documents:a,ks:i})))}function vM(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class nx{constructor(){this.activeTargetIds=uj()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wM{constructor(){this.vo=new nx,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new nx,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class xM{Mo(e){}shutdown(){}}/**
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
 */const rx="ConnectivityMonitor";class sx{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(rx,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(rx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tu=null;function Pm(){return tu===null?tu=function(){return 268435456+Math.round(2147483648*Math.random())}():tu++,"0x"+tu.toString(16)}/**
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
 */const tp="RestConnection",EM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class TM{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===vd?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Pm(),a=this.Qo(e,n.toUriEncodedString());H(tp,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(a),h=Zn(u);return this.zo(e,a,l,r,h).then(f=>(H(tp,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ao(tp,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=EM[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="WebChannelConnection",ba=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class mo extends TM{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!mo.c_){const e=BS();ba(e,$S.STAT_EVENT,n=>{n.stat===vm.PROXY?H(It,"STAT_EVENT: detected buffering proxy"):n.stat===vm.NOPROXY&&H(It,"STAT_EVENT: detected no buffering proxy")}),mo.c_=!0}}zo(e,n,r,s,i){const o=Pm();return new Promise((a,l)=>{const u=new FS;u.setWithCredentials(!0),u.listenOnce(US.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Su.NO_ERROR:const f=u.getResponseJson();H(It,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Su.TIMEOUT:H(It,`RPC '${e}' ${o} timed out`),l(new W(j.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const m=u.getStatus();if(H(It,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const A=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(E)>=0?E:j.UNKNOWN}(S.status);l(new W(A,S.message))}else l(new W(j.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(j.UNAVAILABLE,"Connection failed."));break;default:Z(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(It,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);H(It,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)})}T_(e,n,r){const s=Pm(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");H(It,`Creating RPC '${e}' stream ${s}: ${u}`,a);const h=o.createWebChannel(u,a);this.I_(h);let f=!1,m=!1;const _=new IM({Ho:S=>{m?H(It,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(f||(H(It,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(It,`RPC '${e}' stream ${s} sending:`,S),h.send(S))},Jo:()=>h.close()});return ba(h,Fa.EventType.OPEN,()=>{m||(H(It,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),ba(h,Fa.EventType.CLOSE,()=>{m||(m=!0,H(It,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.E_(h))}),ba(h,Fa.EventType.ERROR,S=>{m||(m=!0,Ao(It,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),_.o_(new W(j.UNAVAILABLE,"The operation could not be completed")))}),ba(h,Fa.EventType.MESSAGE,S=>{var A;if(!m){const P=S.data[0];xe(!!P,16349);const I=P,E=(I==null?void 0:I.error)||((A=I[0])==null?void 0:A.error);if(E){H(It,`RPC '${e}' stream ${s} received error:`,E);const C=E.status;let k=function(x){const y=Qe[x];if(y!==void 0)return Sb(y)}(C),M=E.message;k===void 0&&(k=j.INTERNAL,M="Unknown error status: "+C+" with message "+E.message),m=!0,_.o_(new W(k,M)),h.close()}else H(It,`RPC '${e}' stream ${s} received:`,P),_.__(P)}}),mo.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zS()}}/**
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
 */function SM(t){return new mo(t)}function np(){return typeof document<"u"?document:null}/**
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
 */function Ch(t){return new Aj(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mo.c_=!1;class Ub{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix="PersistentStream";class $b{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ub(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(ix,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(ix,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bM extends $b{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=Pj(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Qn(o.readTime):te.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=km(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Sm(l)?{documents:Lj(i,l)}:{query:jj(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Nb(i,o.resumeToken);const u=Cm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=Id(i,o.snapshotVersion.toTimestamp());const u=Cm(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Vj(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=km(this.serializer),n.removeTarget=e,this.K_(n)}}class CM extends $b{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Oj(e.writeResults,e.commitTime),r=Qn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=km(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Dj(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{}class AM extends NM{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Nm(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(j.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Nm(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(j.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function kM(t,e,n,r){return new AM(t,e,n,r)}class RM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Nr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="RemoteStore";class PM{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{Ni(this)&&(H(_i,"Restarting streams for network reachability change."),await async function(l){const u=ne(l);u.Ea.add(4),await dc(u),u.Va.set("Unknown"),u.Ea.delete(4),await Nh(u)}(this))})}),this.Va=new RM(r,s)}}async function Nh(t){if(Ni(t))for(const e of t.Ra)await e(!0)}async function dc(t){for(const e of t.Ra)await e(!1)}function Bb(t,e){const n=ne(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),A_(n)?N_(n):Jo(n).O_()&&C_(n,e))}function b_(t,e){const n=ne(t),r=Jo(n);n.Ia.delete(e),r.O_()&&zb(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ni(n)&&n.Va.set("Unknown"))}function C_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Jo(t).Z_(e)}function zb(t,e){t.da.$e(e),Jo(t).X_(e)}function N_(t){t.da=new Sj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Jo(t).start(),t.Va.ua()}function A_(t){return Ni(t)&&!Jo(t).x_()&&t.Ia.size>0}function Ni(t){return ne(t).Ea.size===0}function Wb(t){t.da=void 0}async function DM(t){t.Va.set("Online")}async function OM(t){t.Ia.forEach((e,n)=>{C_(t,e)})}async function LM(t,e){Wb(t),A_(t)?(t.Va.ha(e),N_(t)):t.Va.set("Unknown")}async function jM(t,e,n){if(t.Va.set("Online"),e instanceof Cb&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){H(_i,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bd(t,r)}else if(e instanceof Au?t.da.Xe(e):e instanceof bb?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await Fb(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(wt.EMPTY_BYTE_STRING,h.snapshotVersion)),zb(i,l);const f=new rs(h.target,l,u,h.sequenceNumber);C_(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){H(_i,"Failed to raise snapshot:",r),await bd(t,r)}}async function bd(t,e,n){if(!Qo(e))throw e;t.Ea.add(1),await dc(t),t.Va.set("Offline"),n||(n=()=>Fb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(_i,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Nh(t)})}function qb(t,e){return e().catch(n=>bd(t,n,e))}async function Ah(t){const e=ne(t),n=Cs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:f_;for(;MM(e);)try{const s=await _M(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,VM(e,s)}catch(s){await bd(e,s)}Hb(e)&&Gb(e)}function MM(t){return Ni(t)&&t.Ta.length<10}function VM(t,e){t.Ta.push(e);const n=Cs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Hb(t){return Ni(t)&&!Cs(t).x_()&&t.Ta.length>0}function Gb(t){Cs(t).start()}async function FM(t){Cs(t).ra()}async function UM(t){const e=Cs(t);for(const n of t.Ta)e.ea(n.mutations)}async function $M(t,e,n){const r=t.Ta.shift(),s=v_.from(r,e,n);await qb(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ah(t)}async function BM(t,e){e&&Cs(t).Y_&&await async function(r,s){if(function(o){return Ej(o)&&o!==j.ABORTED}(s.code)){const i=r.Ta.shift();Cs(r).B_(),await qb(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ah(r)}}(t,e),Hb(t)&&Gb(t)}async function ox(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H(_i,"RemoteStore received new credentials");const r=Ni(n);n.Ea.add(3),await dc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Nh(n)}async function zM(t,e){const n=ne(t);e?(n.Ea.delete(2),await Nh(n)):e||(n.Ea.add(2),await dc(n),n.Va.set("Unknown"))}function Jo(t){return t.ma||(t.ma=function(n,r,s){const i=ne(n);return i.sa(),new bM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:DM.bind(null,t),Yo:OM.bind(null,t),t_:LM.bind(null,t),J_:jM.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),A_(t)?N_(t):t.Va.set("Unknown")):(await t.ma.stop(),Wb(t))})),t.ma}function Cs(t){return t.fa||(t.fa=function(n,r,s){const i=ne(n);return i.sa(),new CM(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:FM.bind(null,t),t_:BM.bind(null,t),ta:UM.bind(null,t),na:$M.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ah(t)):(await t.fa.stop(),t.Ta.length>0&&(H(_i,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new k_(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function R_(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),Qo(t))return new W(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{static emptySet(e){return new go(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ua(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof go)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new go;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.ga=new et(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Z(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Lo{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Lo(e,n,go.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class qM{constructor(){this.queries=lx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=lx(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(j.ABORTED,"Firestore shutting down"))}}function lx(){return new Ci(t=>db(t),Eh)}async function P_(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new WM,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=R_(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&O_(n)}async function D_(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function HM(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&O_(n)}function GM(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function O_(t){t.Ca.forEach(e=>{e.next()})}var Dm,cx;(cx=Dm||(Dm={})).Ma="default",cx.Cache="cache";class L_{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Lo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Dm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.key=e}}class Qb{constructor(e){this.key=e}}class KM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=fe(),this.mutatedKeys=fe(),this.eu=hb(e),this.tu=new go(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new ax,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),_=Th(this.query,f)?f:null,S=!!m&&this.mutatedKeys.has(m.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let P=!1;m&&_?m.data.isEqual(_.data)?S!==A&&(r.track({type:3,doc:_}),P=!0):this.su(m,_)||(r.track({type:2,doc:_}),P=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),P=!0):m&&!_&&(r.track({type:1,doc:m}),P=!0,(l||u)&&(a=!0)),P&&(_?(o=o.add(_),i=A?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(_,S){const A=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z(20277,{Vt:P})}};return A(_)-A(S)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new Lo(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ax,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new Qb(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new Kb(r))}),n}cu(e){this.Za=e.ks,this.Ya=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Lo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const j_="SyncEngine";class QM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YM{constructor(e){this.key=e,this.hu=!1}}class JM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Ci(a=>db(a),Eh),this.Iu=new Map,this.Eu=new Set,this.Ru=new et(Q.comparator),this.Au=new Map,this.Vu=new E_,this.du={},this.mu=new Map,this.fu=Oo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XM(t,e,n=!0){const r=tC(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Yb(r,e,n,!0),s}async function ZM(t,e){const n=tC(t);await Yb(n,e,!0,!1)}async function Yb(t,e,n,r){const s=await yM(t.localStore,Kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await eV(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Bb(t.remoteStore,s),a}async function eV(t,e,n,r,s){t.pu=(f,m,_)=>async function(A,P,I,E){let C=P.view.ru(I);C.Ss&&(C=await tx(A.localStore,P.query,!1).then(({documents:x})=>P.view.ru(x,C)));const k=E&&E.targetChanges.get(P.targetId),M=E&&E.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(C,A.isPrimaryClient,k,M);return dx(A,P.targetId,F.au),F.snapshot}(t,f,m,_);const i=await tx(t.localStore,e,!0),o=new KM(e,i.ks),a=o.ru(i.documents),l=uc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);dx(t,n,u.au);const h=new QM(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function tV(t,e,n){const r=ne(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Eh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Rm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&b_(r.remoteStore,s.targetId),Om(r,s.targetId)}).catch(Ko)):(Om(r,s.targetId),await Rm(r.localStore,s.targetId,!0))}async function nV(t,e){const n=ne(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),b_(n.remoteStore,r.targetId))}async function rV(t,e,n){const r=uV(t);try{const s=await function(o,a){const l=ne(o),u=ee.now(),h=a.reduce((_,S)=>_.add(S.key),fe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Ar(),A=fe();return l.xs.getEntries(_,h).next(P=>{S=P,S.forEach((I,E)=>{E.isValidDocument()||(A=A.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,S)).next(P=>{f=P;const I=[];for(const E of a){const C=_j(E,f.get(E.key).overlayedDocument);C!=null&&I.push(new Fs(E.key,C,rb(C.value.mapValue),kn.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,I,a)}).next(P=>{m=P;const I=P.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(_,P.batchId,I)})}).then(()=>({batchId:m.batchId,changes:pb(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new et(he)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await hc(r,s.changes),await Ah(r.remoteStore)}catch(s){const i=R_(s,"Failed to persist write");n.reject(i)}}async function Jb(t,e){const n=ne(t);try{const r=await mM(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?xe(o.hu,14607):s.removedDocuments.size>0&&(xe(o.hu,42227),o.hu=!1))}),await hc(n,r,e)}catch(r){await Ko(r)}}function ux(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const m of f.ba)m.va(a)&&(u=!0)}),u&&O_(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sV(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new et(Q.comparator);o=o.insert(i,Ct.newNoDocument(i,te.min()));const a=fe().add(i),l=new bh(te.min(),new Map,new et(he),o,a);await Jb(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),M_(r)}else await Rm(r.localStore,e,!1).then(()=>Om(r,e,n)).catch(Ko)}async function iV(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await pM(n.localStore,e);Zb(n,r,null),Xb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hc(n,s)}catch(s){await Ko(s)}}async function oV(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Zb(r,e,n),Xb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await hc(r,s)}catch(s){await Ko(s)}}function Xb(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Zb(t,e,n){const r=ne(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Om(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||eC(t,r)})}function eC(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(b_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),M_(t))}function dx(t,e,n){for(const r of n)r instanceof Kb?(t.Vu.addReference(r.key,e),aV(t,r)):r instanceof Qb?(H(j_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||eC(t,r.key)):Z(19791,{wu:r})}function aV(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(j_,"New document in limbo: "+n),t.Eu.add(r),M_(t))}function M_(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Q(Ce.fromString(e)),r=t.fu.next();t.Au.set(r,new YM(n)),t.Ru=t.Ru.insert(n,r),Bb(t.remoteStore,new rs(Kn(xh(n.path)),r,"TargetPurposeLimboResolution",yh.ce))}}async function hc(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=I_.Es(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,u){const h=ne(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(u,m=>V.forEach(m.Ts,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>V.forEach(m.Is,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Qo(f))throw f;H(S_,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const _=h.vs.get(m),S=_.snapshotVersion,A=_.withLastLimboFreeSnapshotVersion(S);h.vs=h.vs.insert(m,A)}}}(r.localStore,i))}async function lV(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H(j_,"User change. New user:",e.toKey());const r=await Vb(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(j.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hc(n,r.Ns)}}function cV(t,e){const n=ne(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function tC(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sV.bind(null,e),e.Pu.J_=HM.bind(null,e.eventManager),e.Pu.yu=GM.bind(null,e.eventManager),e}function uV(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=oV.bind(null,e),e}class Cd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ch(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return fM(this.persistence,new uM,e.initialUser,this.serializer)}Cu(e){return new Mb(T_.Vi,this.serializer)}Du(e){return new wM}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cd.provider={build:()=>new Cd};class dV extends Cd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){xe(this.persistence.referenceDelegate instanceof Sd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Qj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new Mb(r=>Sd.Vi(r,n),this.serializer)}}class Lm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ux(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lV.bind(null,this.syncEngine),await zM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qM}()}createDatastore(e){const n=Ch(e.databaseInfo.databaseId),r=SM(e.databaseInfo);return kM(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new PM(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ux(this.syncEngine,n,0),function(){return sx.v()?new sx:new xM}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const f=new JM(s,i,o,a,l,u);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);H(_i,"RemoteStore shutting down."),i.Ea.add(5),await dc(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Lm.provider={build:()=>new Lm};/**
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
 */class V_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="FirestoreClient";class hV{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=St.UNAUTHENTICATED,this.clientId=h_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H(Ns,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Ns,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=R_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rp(t,e){t.asyncQueue.verifyOperationInProgress(),H(Ns,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vb(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fV(t);H(Ns,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ox(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>ox(e.remoteStore,s)),t._onlineComponents=e}async function fV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Ns,"Using user provided OfflineComponentProvider");try{await rp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ao("Error using user provided cache. Falling back to memory cache: "+n),await rp(t,new Cd)}}else H(Ns,"Using default OfflineComponentProvider"),await rp(t,new dV(void 0));return t._offlineComponents}async function nC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Ns,"Using user provided OnlineComponentProvider"),await hx(t,t._uninitializedComponentsProvider._online)):(H(Ns,"Using default OnlineComponentProvider"),await hx(t,new Lm))),t._onlineComponents}function pV(t){return nC(t).then(e=>e.syncEngine)}async function Nd(t){const e=await nC(t),n=e.eventManager;return n.onListen=XM.bind(null,e.syncEngine),n.onUnlisten=tV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nV.bind(null,e.syncEngine),n}function mV(t,e,n,r){const s=new V_(r),i=new L_(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>P_(await Nd(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>D_(await Nd(t),i))}}function gV(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new V_({next:m=>{h.Nu(),o.enqueueAndForget(()=>D_(i,f));const _=m.docs.has(a);!_&&m.fromCache?u.reject(new W(j.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new W(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new L_(xh(a.path),h,{includeMetadataChanges:!0,Ka:!0});return P_(i,f)}(await Nd(t),t.asyncQueue,e,n,r)),r.promise}function _V(t,e,n={}){const r=new yr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new V_({next:m=>{h.Nu(),o.enqueueAndForget(()=>D_(i,f)),m.fromCache&&l.source==="server"?u.reject(new W(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new L_(a,h,{includeMetadataChanges:!0,Ka:!0});return P_(i,f)}(await Nd(t),t.asyncQueue,e,n,r)),r.promise}function yV(t,e){const n=new yr;return t.asyncQueue.enqueueAndForget(async()=>rV(await pV(t),e,n)),n.promise}/**
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
 */function rC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const vV="ComponentProvider",fx=new Map;function wV(t,e,n,r,s){return new FL(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const sC="firestore.googleapis.com",px=!0;class mx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sC,this.ssl=px}else this.host=e.host,this.ssl=e.ssl??px;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=jb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Gj)throw new W(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}CL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rC(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(j.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _L;switch(r.type){case"firstParty":return new xL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fx.get(n);r&&(H(vV,"Removing Datastore"),fx.delete(n),r.terminate())}(this),Promise.resolve()}}function xV(t,e,n,r={}){var u;t=sn(t,kh);const s=Zn(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(ch(`https://${a}`),uh("Firestore",!0)),i.host!==sC&&i.host!==a&&Ao("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!Ir(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=St.MOCK_USER;else{h=e_(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new St(m)}t._authCredentials=new yL(new qS(h,f))}}/**
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
 */class Dr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Dr(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(lc(n,$e._jsonSchema))return new $e(e,r||null,new Q(Ce.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:Xe("string",$e._jsonSchemaVersion),referencePath:Xe("string")};class _s extends Dr{constructor(e,n,r){super(e,n,xh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new Q(e))}withConverter(e){return new _s(this.firestore,e,this._path)}}function un(t,e,...n){if(t=we(t),HS("collection","path",e),t instanceof kh){const r=Ce.fromString(e,...n);return Nw(r),new _s(t,null,r)}{if(!(t instanceof $e||t instanceof _s))throw new W(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Nw(r),new _s(t.firestore,null,r)}}function We(t,e,...n){if(t=we(t),arguments.length===1&&(e=h_.newId()),HS("doc","path",e),t instanceof kh){const r=Ce.fromString(e,...n);return Cw(r),new $e(t,null,new Q(r))}{if(!(t instanceof $e||t instanceof _s))throw new W(j.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Cw(r),new $e(t.firestore,t instanceof _s?t.converter:null,new Q(r))}}/**
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
 */const gx="AsyncQueue";class _x{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ub(this,"async_queue_retry"),this._c=()=>{const r=np();r&&H(gx,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=np();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=np();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new yr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Qo(e))throw e;H(gx,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Nr("INTERNAL UNHANDLED ERROR: ",yx(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=k_.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Z(47125,{Pc:yx(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function yx(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class As extends kh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _x,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _x(e),this._firestoreClient=void 0,await e}}}function EV(t,e){const n=typeof t=="object"?t:fh(),r=typeof t=="string"?t:vd,s=rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zg("firestore");i&&xV(s,...i)}return s}function Rh(t){if(t._terminated)throw new W(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||TV(t),t._firestoreClient}function TV(t){var r,s,i,o;const e=t._freezeSettings(),n=wV(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new hV(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class fn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fn(wt.fromBase64String(e))}catch(n){throw new W(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fn(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:fn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(lc(e,fn._jsonSchema))return fn.fromBase64String(e.bytes)}}fn._jsonSchemaVersion="firestore/bytes/1.0",fn._jsonSchema={type:Xe("string",fn._jsonSchemaVersion),bytes:Xe("string")};/**
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
 */class F_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Yn._jsonSchemaVersion}}static fromJSON(e){if(lc(e,Yn._jsonSchema))return new Yn(e.latitude,e.longitude)}}Yn._jsonSchemaVersion="firestore/geoPoint/1.0",Yn._jsonSchema={type:Xe("string",Yn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
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
 */class Rn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(lc(e,Rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Rn(e.vectorValues);throw new W(j.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rn._jsonSchemaVersion="firestore/vectorValue/1.0",Rn._jsonSchema={type:Xe("string",Rn._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IV=/^__.*__$/;class SV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new cc(e,this.data,n,this.fieldTransforms)}}class iC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function oC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z(40011,{dataSource:t})}}class Ph{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Ph({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ad(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(oC(this.dataSource)&&IV.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class bV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ch(e)}createContext(e,n,r,s=!1){return new Ph({dataSource:e,methodName:n,targetDoc:r,path:_t.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Dh(t){const e=t._freezeSettings(),n=Ch(t._databaseId);return new bV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aC(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);B_("Data must be an object, but it was:",o,r);const a=lC(r,o);let l,u;if(i.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=yi(e,f,n);if(!o.contains(m))throw new W(j.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);dC(h,m)||h.push(m)}l=new tn(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new SV(new Wt(a),l,u)}class Oh extends fc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oh}}function CV(t,e,n){return new Ph({dataSource:3,targetDoc:e.settings.targetDoc,methodName:t._methodName,arrayElement:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class U_ extends fc{_toFieldTransform(e){return new xb(e.path,new Fl)}isEqual(e){return e instanceof U_}}class $_ extends fc{constructor(e,n){super(e),this.Ac=n}_toFieldTransform(e){const n=CV(this,e,!0),r=this.Ac.map(i=>Xo(i,n)),s=new Do(r);return new xb(e.path,s)}isEqual(e){return e instanceof $_&&Ir(this.Ac,e.Ac)}}function NV(t,e,n,r){const s=t.createContext(1,e,n);B_("Data must be an object, but it was:",s,r);const i=[],o=Wt.empty();Vs(r,(l,u)=>{const h=uC(e,l,n);u=we(u);const f=s.childContextForFieldPath(h);if(u instanceof Oh)i.push(h);else{const m=Xo(u,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new tn(i);return new iC(o,a,s.fieldTransforms)}function AV(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[yi(e,r,n)],l=[s];if(i.length%2!=0)throw new W(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(yi(e,i[m])),l.push(i[m+1]);const u=[],h=Wt.empty();for(let m=a.length-1;m>=0;--m)if(!dC(u,a[m])){const _=a[m];let S=l[m];S=we(S);const A=o.childContextForFieldPath(_);if(S instanceof Oh)u.push(_);else{const P=Xo(S,A);P!=null&&(u.push(_),h.set(_,P))}}const f=new tn(u);return new iC(h,f,o.fieldTransforms)}function kV(t,e,n,r=!1){return Xo(n,t.createContext(r?4:3,e))}function Xo(t,e){if(cC(t=we(t)))return B_("Unsupported field value:",e,t),lC(t,e);if(t instanceof fc)return function(r,s){if(!oC(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Xo(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=we(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return dj(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:Id(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Id(s.serializer,i)}}if(r instanceof Yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fn)return{bytesValue:Nb(s.serializer,r._byteString)};if(r instanceof $e){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:x_(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Rn)return function(o,a){const l=o instanceof Rn?o.toArray():o;return{mapValue:{fields:{[tb]:{stringValue:nb},[wd]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return y_(a.serializer,h)})}}}}}}(r,s);if(Lb(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${_h(r)}`)}(t,e)}function lC(t,e){const n={};return QS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,(r,s)=>{const i=Xo(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function cC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ee||t instanceof Yn||t instanceof fn||t instanceof $e||t instanceof fc||t instanceof Rn||Lb(t))}function B_(t,e,n){if(!cC(n)||!GS(n)){const r=_h(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function yi(t,e,n){if((e=we(e))instanceof F_)return e._internalPath;if(typeof e=="string")return uC(t,e);throw Ad("Field path arguments must be of type string or ",t,!1,void 0,n)}const RV=new RegExp("[~\\*/\\[\\]]");function uC(t,e,n){if(e.search(RV)>=0)throw Ad(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new F_(...e.split("."))._internalPath}catch{throw Ad(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ad(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(j.INVALID_ARGUMENT,a+t+l)}function dC(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class PV{convertValue(e,n="none"){switch(bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[wd].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new Rn(n)}convertGeoPoint(e){return new Yn(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ll(e));default:return null}}convertTimestamp(e){const n=Is(e);return new ee(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);xe(Ob(r),9688,{name:e});const s=new jl(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||Nr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class z_ extends PV{constructor(e){super(),this.firestore=e}convertBytes(e){return new fn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function _o(){return new U_("serverTimestamp")}function jm(...t){return new $_("arrayUnion",t)}const vx="@firebase/firestore",wx="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class hC{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(yi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DV extends hC{data(){return super.data()}}/**
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
 */function fC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class W_{}class q_ extends W_{}function xn(t,e,...n){let r=[];e instanceof W_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof H_).length,a=i.filter(l=>l instanceof Lh).length;if(o>1||o>0&&a>0)throw new W(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lh extends q_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lh(e,n,r)}_apply(e){const n=this._parse(e);return pC(e._query,n),new Dr(e.firestore,e.converter,bm(e._query,n))}_parse(e){const n=Dh(e.firestore);return function(i,o,a,l,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Tx(f,h);const S=[];for(const A of f)S.push(Ex(l,i,A));m={arrayValue:{values:S}}}else m=Ex(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Tx(f,h),m=kV(a,o,f,h==="in"||h==="not-in");return Je.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function nt(t,e,n){const r=e,s=yi("where",t);return Lh._create(s,r,n)}class H_ extends W_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new H_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ln.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)pC(o,l),o=bm(o,l)}(e._query,n),new Dr(e.firestore,e.converter,bm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class G_ extends q_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new G_(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vl(i,o)}(e._query,this._field,this._direction);return new Dr(e.firestore,e.converter,rj(e._query,n))}}function Ys(t,e="asc"){const n=e,r=yi("orderBy",t);return G_._create(r,n)}class K_ extends q_{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new K_(e,n,r)}_apply(e){return new Dr(e.firestore,e.converter,Ed(e._query,this._limit,this._limitType))}}function OV(t){return NL("limit",t),K_._create("limit",t,"F")}function Ex(t,e,n){if(typeof(n=we(n))=="string"){if(n==="")throw new W(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ub(e)&&n.indexOf("/")!==-1)throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Q.isDocumentKey(r))throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jw(t,new Q(r))}if(n instanceof $e)return jw(t,n._key);throw new W(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_h(n)}.`)}function Tx(t,e){if(!Array.isArray(t)||t.length===0)throw new W(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pC(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function mC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ba{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oi extends hC{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(j.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=oi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}oi._jsonSchemaVersion="firestore/documentSnapshot/1.0",oi._jsonSchema={type:Xe("string",oi._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class ku extends oi{data(e={}){return super.data(e)}}class ai{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ba(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new Ba(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new ku(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ba(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new ku(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ba(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:LV(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(j.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ai._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=h_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function LV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z(61501,{type:t})}}/**
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
 */ai._jsonSchemaVersion="firestore/querySnapshot/1.0",ai._jsonSchema={type:Xe("string",ai._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};/**
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
 */function kd(t){t=sn(t,$e);const e=sn(t.firestore,As),n=Rh(e);return gV(n,t._key).then(r=>gC(e,t,r))}function Hs(t){t=sn(t,Dr);const e=sn(t.firestore,As),n=Rh(e),r=new z_(e);return fC(t._query),_V(n,t._query).then(s=>new ai(e,r,t,s))}function jV(t,e,n){t=sn(t,$e);const r=sn(t.firestore,As),s=mC(t.converter,e),i=Dh(r);return Q_(r,[aC(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kn.none())])}function Ut(t,e,n,...r){t=sn(t,$e);const s=sn(t.firestore,As),i=Dh(s);let o;return o=typeof(e=we(e))=="string"||e instanceof F_?AV(i,"updateDoc",t._key,e,n,r):NV(i,"updateDoc",t._key,e),Q_(s,[o.toMutation(t._key,kn.exists(!0))])}function MV(t,e){const n=sn(t.firestore,As),r=We(t),s=mC(t.converter,e),i=Dh(t.firestore);return Q_(n,[aC(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,kn.exists(!1))]).then(()=>r)}function sl(t,...e){var u,h,f;t=we(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||xx(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(xx(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof $e)o=sn(t.firestore,As),a=xh(t._key.path),i={next:m=>{e[r]&&e[r](gC(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=sn(t,Dr);o=sn(m.firestore,As),a=m._query;const _=new z_(o);i={next:S=>{e[r]&&e[r](new ai(o,_,m,S))},error:e[r+1],complete:e[r+2]},fC(t._query)}const l=Rh(o);return mV(l,a,s,i)}function Q_(t,e){const n=Rh(t);return yV(n,e)}function gC(t,e,n){const r=n.docs.get(e._key),s=new z_(t);return new oi(t,s,e._key,r,new Ba(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){gL(js),Es(new Sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new As(new vL(r.getProvider("auth-internal")),new EL(o,r.getProvider("app-check-internal")),UL(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),_n(vx,wx,e),_n(vx,wx,"esm2020")})();var Ix={};const Sx="@firebase/database",bx="1.1.0";/**
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
 */let _C="";function VV(t){_C=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),st(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:kl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FV(e)}}catch{}return new UV},ni=yC("localStorage"),$V=yC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new hh("@firebase/database"),BV=function(){let t=1;return function(){return t++}}(),vC=function(t){const e=UP(t),n=new jP;n.update(e);const r=n.digest();return Xg.encodeByteArray(r)},pc=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=pc.apply(null,r):typeof r=="object"?e+=st(r):e+=r,e+=" "}return e};let il=null,Cx=!0;const zV=function(t,e){$(!0,"Can't turn on custom loggers persistently."),yo.logLevel=ce.VERBOSE,il=yo.log.bind(yo)},gt=function(...t){if(Cx===!0&&(Cx=!1,il===null&&$V.get("logging_enabled")===!0&&zV()),il){const e=pc.apply(null,t);il(e)}},mc=function(t){return function(...e){gt(t,...e)}},Mm=function(...t){const e="FIREBASE INTERNAL ERROR: "+pc(...t);yo.error(e)},kr=function(...t){const e=`FIREBASE FATAL ERROR: ${pc(...t)}`;throw yo.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+pc(...t);yo.warn(e)},WV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},qV=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jo="[MIN_NAME]",vi="[MAX_NAME]",Ai=function(t,e){if(t===e)return 0;if(t===jo||e===vi)return-1;if(e===jo||t===vi)return 1;{const n=Nx(t),r=Nx(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},HV=function(t,e){return t===e?0:t<e?-1:1},Ca=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+st(e))},Y_=function(t){if(typeof t!="object"||t===null)return st(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=st(e[r]),n+=":",n+=Y_(t[e[r]]);return n+="}",n},wC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xC=function(t){$(!jh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},GV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},KV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QV(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const YV=new RegExp("^-?(0*)\\d{1,10}$"),JV=-2147483648,XV=2147483647,Nx=function(t){if(YV.test(t)){const e=Number(t);if(e>=JV&&e<=XV)return e}return null},Zo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ol=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class e4{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(gt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}class Ru{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ru.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="5",EC="v",TC="s",IC="r",SC="f",bC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,CC="ls",NC="p",Vm="ac",AC="websocket",kC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ni.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ni.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function n4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function PC(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===AC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);n4(t)&&(n.ns=t.namespace);const s=[];return kt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this.counters_={}}incrementCounter(e,n=1){tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp={},ip={};function X_(t){const e=t.toString();return sp[e]||(sp[e]=new r4),sp[e]}function s4(t,e){const n=t.toString();return ip[n]||(ip[n]=e()),ip[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Zo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax="start",o4="close",a4="pLPCommand",l4="pRTLPCB",DC="id",OC="pw",LC="ser",c4="cb",u4="seg",d4="ts",h4="d",f4="dframe",jC=1870,MC=30,p4=jC-MC,m4=25e3,g4=3e4;class eo{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=mc(e),this.stats_=X_(n),this.urlFn=l=>(this.appCheckToken&&(l[Vm]=this.appCheckToken),PC(n,kC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new i4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(g4)),qV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Z_((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ax)this.id=a,this.password=l;else if(o===o4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ax]="t",r[LC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[c4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[EC]=J_,this.transportSessionId&&(r[TC]=this.transportSessionId),this.lastSessionId&&(r[CC]=this.lastSessionId),this.applicationId&&(r[NC]=this.applicationId),this.appCheckToken&&(r[Vm]=this.appCheckToken),typeof location<"u"&&location.hostname&&bC.test(location.hostname)&&(r[IC]=SC);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){eo.forceAllow_=!0}static forceDisallow(){eo.forceDisallow_=!0}static isAvailable(){return eo.forceAllow_?!0:!eo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!GV()&&!KV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=qI(n),s=wC(r,p4);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[f4]="t",r[DC]=e,r[OC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=st(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Z_{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BV(),window[a4+this.uniqueCallbackIdentifier]=e,window[l4+this.uniqueCallbackIdentifier]=n,this.myIFrame=Z_.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){gt("frame writing exception"),a.stack&&gt(a.stack),gt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||gt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[DC]=this.myID,e[OC]=this.myPW,e[LC]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+MC+r.length<=jC;){const o=this.pendingSegs.shift();r=r+"&"+u4+s+"="+o.seg+"&"+d4+s+"="+o.ts+"&"+h4+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(m4)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{gt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4=16384,y4=45e3;let Rd=null;typeof MozWebSocket<"u"?Rd=MozWebSocket:typeof WebSocket<"u"&&(Rd=WebSocket);class Sn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=mc(this.connId),this.stats_=X_(n),this.connURL=Sn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[EC]=J_,typeof location<"u"&&location.hostname&&bC.test(location.hostname)&&(o[IC]=SC),n&&(o[TC]=n),r&&(o[CC]=r),s&&(o[Vm]=s),i&&(o[NC]=i),PC(e,AC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ni.set("previous_websocket_failure",!0);try{let r;CP(),this.mySock=new Rd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Rd!==null&&!Sn.forceDisallow_}static previouslyFailed(){return ni.isInMemoryStorage||ni.get("previous_websocket_failure")===!0}markConnectionHealthy(){ni.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=kl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=st(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=wC(n,_4);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(y4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Sn.responsesRequiredToBeHealthy=2;Sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{static get ALL_TRANSPORTS(){return[eo,Sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Sn&&Sn.isAvailable();let r=n&&!Sn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Sn];else{const s=this.transports_=[];for(const i of $l.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);$l.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$l.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v4=6e4,w4=5e3,x4=10*1024,E4=100*1024,op="t",kx="d",T4="s",Rx="r",I4="e",Px="o",Dx="a",Ox="n",Lx="p",S4="h";class b4{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=mc("c:"+this.id+":"),this.transportManager_=new $l(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ol(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>E4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>x4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(op in e){const n=e[op];n===Dx?this.upgradeIfSecondaryHealthy_():n===Rx?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Px&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ca("t",e),r=Ca("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lx,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dx,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ox,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ca("t",e),r=Ca("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ca(op,e);if(kx in e){const r=e[kx];if(n===S4){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Ox){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===T4?this.onConnectionShutdown_(r):n===Rx?this.onReset_(r):n===I4?Mm("Server Error: "+r):n===Px?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),J_!==r&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ol(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(v4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ol(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(w4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lx,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ni.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends FC{static getInstance(){return new Pd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!t_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=32,Mx=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Te("")}function ue(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ks(t){return t.pieces_.length-t.pieceNum_}function be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function ey(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function C4(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Bl(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Te(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=ue(t),r=ue(e);if(n===null)return e;if(n===r)return jt(be(t),be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function N4(t,e){const n=Bl(t,0),r=Bl(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Ai(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function $C(t,e){if(ks(t)!==ks(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ks(t)>ks(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class A4{constructor(e,n){this.errorPrefix_=n,this.parts_=Bl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dh(this.parts_[r]);BC(this)}}function k4(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dh(e),BC(t)}function R4(t){const e=t.parts_.pop();t.byteLength_-=dh(e),t.parts_.length>0&&(t.byteLength_-=1)}function BC(t){if(t.byteLength_>Mx)throw new Error(t.errorPrefix_+"has a key path longer than "+Mx+" bytes ("+t.byteLength_+").");if(t.parts_.length>jx)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jx+") or object contains a cycle "+Js(t))}function Js(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty extends FC{static getInstance(){return new ty}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=1e3,P4=60*5*1e3,Vx=30*1e3,D4=1.3,O4=3e4,L4="server_kill",Fx=3;class vr extends VC{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vr.nextPersistentConnectionId_++,this.log_=mc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Na,this.maxReconnectDelay_=P4,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ty.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(st(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ur,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;vr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&tr(e,"w")){const r=Co(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vx)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+st(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mm("Unrecognized action received from server: "+st(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Na,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Na,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>O4&&(this.reconnectDelay_=Na),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*D4)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+vr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?gt("getToken() completed but was canceled"):(gt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new b4(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Yt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(L4)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),l())}}}interrupt(e){gt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){gt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ad(this.interruptReasons_)&&(this.reconnectDelay_=Na,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Y_(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Te(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){gt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fx&&(this.reconnectDelay_=Vx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){gt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fx&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_C.replace(/\./g,"-")]=1,t_()?e["framework.cordova"]=1:YI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pd.getInstance().currentlyOnline();return ad(this.interruptReasons_)&&e}}vr.nextPersistentConnectionId_=0;vr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ae(jo,e),s=new ae(jo,n);return this.compare(r,s)!==0}minPost(){return ae.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;class zC extends Mh{static get __EMPTY_NODE(){return nu}static set __EMPTY_NODE(e){nu=e}compare(e,n){return Ai(e.name,n.name)}isDefinedOn(e){throw Wo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(vi,nu)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,nu)}toString(){return".key"}}const vo=new zC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ht.RED,this.left=s??Ht.EMPTY_NODE,this.right=i??Ht.EMPTY_NODE}copy(e,n,r,s,i){return new ht(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ht.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class j4{copy(e,n,r,s,i){return this}insert(e,n,r){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ht{constructor(e,n=Ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ru(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ru(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ru(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ru(this.root_,null,this.comparator_,!0,e)}}Ht.EMPTY_NODE=new j4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(t,e){return Ai(t.name,e.name)}function ny(t,e){return Ai(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fm;function V4(t){Fm=t}const WC=function(t){return typeof t=="number"?"number:"+xC(t):"string:"+t},qC=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&tr(e,".sv"),"Priority must be a string or number.")}else $(t===Fm||t.isEmpty(),"priority of unexpected type.");$(t===Fm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ux;class ct{static set __childrenNodeConstructor(e){Ux=e}static get __childrenNodeConstructor(){return Ux}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ue(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ue(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||ks(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+WC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xC(this.value_):e+=this.value_,this.lazyHash_=vC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let HC,GC;function F4(t){HC=t}function U4(t){GC=t}class $4 extends Mh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Ai(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(vi,new ct("[PRIORITY-POST]",GC))}makePost(e,n){const r=HC(e);return new ae(n,new ct("[PRIORITY-POST]",r))}toString(){return".priority"}}const je=new $4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B4=Math.log(2);class z4{constructor(e){const n=i=>parseInt(Math.log(i)/B4,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Dd=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new ht(m,f.node,ht.BLACK,null,null);{const _=parseInt(h/2,10)+l,S=s(l,_),A=s(_+1,u);return f=t[_],m=n?n(f):f,new ht(m,f.node,ht.BLACK,S,A)}},i=function(l){let u=null,h=null,f=t.length;const m=function(S,A){const P=f-S,I=f;f-=S;const E=s(P+1,I),C=t[P],k=n?n(C):C;_(new ht(k,C.node,A,null,E))},_=function(S){u?(u.left=S,u=S):(h=S,u=S)};for(let S=0;S<l.count;++S){const A=l.nextBitIsOne(),P=Math.pow(2,l.count-(S+1));A?m(P,ht.BLACK):(m(P,ht.BLACK),m(P,ht.RED))}return h},o=new z4(t.length),a=i(o);return new Ht(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ap;const Li={};class mr{static get Default(){return $(Li&&je,"ChildrenNode.ts has not been loaded"),ap=ap||new mr({".priority":Li},{".priority":je}),ap}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Co(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ht?n:null}hasIndex(e){return tr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==vo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ae.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Dd(r,e.getCompare()):a=Li;const l=e.toString(),u={...this.indexSet_};u[l]=e;const h={...this.indexes_};return h[l]=a,new mr(h,u)}addToIndexes(e,n){const r=ld(this.indexes_,(s,i)=>{const o=Co(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===Li)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Dd(a,o.getCompare())}else return Li;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ae(e.name,a))),l.insert(e,e.node)}});return new mr(r,this.indexSet_)}removeFromIndexes(e,n){const r=ld(this.indexes_,s=>{if(s===Li)return s;{const i=n.get(e.name);return i?s.remove(new ae(e.name,i)):s}});return new mr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aa;class X{static get EMPTY_NODE(){return Aa||(Aa=new X(new Ht(ny),null,mr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qC(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Aa}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Aa:n}}getChild(e){const n=ue(e);return n===null?this:this.getImmediateChild(n).getChild(be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ae(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Aa:this.priorityNode_;return new X(s,o,i)}}updateChild(e,n){const r=ue(e);if(r===null)return n;{$(ue(e)!==".priority"||ks(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(be(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(je,(o,a)=>{n[o]=a.val(e),r++,i&&X.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+WC(this.getPriority().val())+":"),this.forEachChild(je,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":vC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gc?-1:0}withIndex(e){if(e===vo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(je),s=n.getIterator(je);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vo?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class W4 extends X{constructor(){super(new Ht(ny),X.EMPTY_NODE,mr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const gc=new W4;Object.defineProperties(ae,{MIN:{value:new ae(jo,X.EMPTY_NODE)},MAX:{value:new ae(vi,gc)}});zC.__EMPTY_NODE=X.EMPTY_NODE;ct.__childrenNodeConstructor=X;V4(gc);U4(gc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=!0;function Ge(t,e=null){if(t===null)return X.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,Ge(e))}if(!(t instanceof Array)&&q4){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ge(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ae(o,l)))}}),n.length===0)return X.EMPTY_NODE;const i=Dd(n,M4,o=>o.name,ny);if(r){const o=Dd(n,je.getCompare());return new X(i,Ge(e),new mr({".priority":o},{".priority":je}))}else return new X(i,Ge(e),mr.Default)}else{let n=X.EMPTY_NODE;return kt(t,(r,s)=>{if(tr(t,r)&&r.substring(0,1)!=="."){const i=Ge(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ge(e))}}F4(Ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4 extends Mh{constructor(e){super(),this.indexPath_=e,$(!oe(e)&&ue(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Ai(e.name,n.name):i}makePost(e,n){const r=Ge(e),s=X.EMPTY_NODE.updateChild(this.indexPath_,r);return new ae(n,s)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,gc);return new ae(vi,e)}toString(){return Bl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G4 extends Mh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ai(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const r=Ge(e);return new ae(n,r)}toString(){return".value"}}const K4=new G4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return{type:"value",snapshotNode:t}}function Mo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function zl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Wl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Q4(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(zl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Mo(n,r)):o.trackChildChange(Wl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(je,(s,i)=>{n.hasChild(s)||r.trackChildChange(zl(s,i))}),n.isLeafNode()||n.forEachChild(je,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Wl(s,i,o))}else r.trackChildChange(Mo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e){this.indexedFilter_=new ry(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ql.getStartPost_(e),this.endPost_=ql.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ae(n,r))||(r=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=X.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(X.EMPTY_NODE);const i=this;return n.forEachChild(je,(o,a)=>{i.matches(new ae(o,a))||(s=s.updateImmediateChild(o,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ql(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ae(n,r))||(r=X.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=X.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(X.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new ae(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(h&&!r.isEmpty()&&_>=0)return i!=null&&i.trackChildChange(Wl(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(zl(n,f));const A=a.updateImmediateChild(n,X.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Mo(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:h&&o(u,l)>=0?(i!=null&&(i.trackChildChange(zl(u.name,u.node)),i.trackChildChange(Mo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jo}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===je}copy(){const e=new sy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function J4(t){return t.loadsAllData()?new ry(t.getIndex()):t.hasLimit()?new Y4(t):new ql(t)}function $x(t){const e={};if(t.isDefault())return e;let n;if(t.index_===je?n="$priority":t.index_===K4?n="$value":t.index_===vo?n="$key":($(t.index_ instanceof H4,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=st(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=st(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+st(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=st(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+st(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Bx(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==je&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od extends VC{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=mc("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Od.getListenId_(e,r),a={};this.listens_[o]=a;const l=$x(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),Co(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=Od.getListenId_(e,n);delete this.listens_[r]}get(e){const n=$x(e._queryParams),r=e._path.toString(),s=new ur;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=kl(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X4{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){return{value:null,children:new Map}}function ea(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ue(e);t.children.has(r)||t.children.set(r,Ld());const s=t.children.get(r);e=be(e),ea(s,e,n)}}function Um(t,e){if(oe(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(je,(r,s)=>{ea(t,new Te(r),s)}),Um(t,e)}}else if(t.children.size>0){const n=ue(e);return e=be(e),t.children.has(n)&&Um(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function $m(t,e,n){t.value!==null?n(e,t.value):Z4(t,(r,s)=>{const i=new Te(e.toString()+"/"+r);$m(s,i,n)})}function Z4(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&kt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=10*1e3,tF=30*1e3,nF=5*60*1e3;class rF{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eF(e);const r=zx+(tF-zx)*Math.random();ol(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(s,i)=>{i>0&&tr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ol(this.reportStats_.bind(this),Math.floor(Math.random()*2*nF))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Cn||(Cn={}));function QC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iy(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oy(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Cn.ACK_USER_WRITE,this.source=QC()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new jd(ve(),n,this.revert)}}else return $(ue(this.path)===e,"operationForChild called for unrelated child."),new jd(be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n){this.source=e,this.path=n,this.type=Cn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Hl(this.source,ve()):new Hl(this.source,be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Cn.OVERWRITE}operationForChild(e){return oe(this.path)?new wi(this.source,ve(),this.snap.getImmediateChild(e)):new wi(this.source,be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Cn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new wi(this.source,ve(),n.value):new Gl(this.source,ve(),n)}else return $(ue(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gl(this.source,be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ue(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iF(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Q4(o.childName,o.snapshotNode))}),ka(t,s,"child_removed",e,r,n),ka(t,s,"child_added",e,r,n),ka(t,s,"child_moved",i,r,n),ka(t,s,"child_changed",e,r,n),ka(t,s,"value",e,r,n),s}function ka(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>aF(t,a,l)),o.forEach(a=>{const l=oF(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function oF(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function aF(t,e,n){if(e.childName==null||n.childName==null)throw Wo("Should only compare child_ events.");const r=new ae(e.childName,e.snapshotNode),s=new ae(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e){return{eventCache:t,serverCache:e}}function al(t,e,n,r){return Vh(new Rs(e,n,r),t.serverCache)}function YC(t,e,n,r){return Vh(t.eventCache,new Rs(e,n,r))}function Md(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lp;const lF=()=>(lp||(lp=new Ht(HV)),lp);class Pe{static fromObject(e){let n=new Pe(null);return kt(e,(r,s)=>{n=n.set(new Te(r),s)}),n}constructor(e,n=lF()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(oe(e))return null;{const r=ue(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(be(e),n);return i!=null?{path:Ke(new Te(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ue(e),r=this.children.get(n);return r!==null?r.subtree(be(e)):new Pe(null)}}set(e,n){if(oe(e))return new Pe(n,this.children);{const r=ue(e),i=(this.children.get(r)||new Pe(null)).set(be(e),n),o=this.children.insert(r,i);return new Pe(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=ue(e),r=this.children.get(n);if(r){const s=r.remove(be(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Pe(null):new Pe(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=ue(e),r=this.children.get(n);return r?r.get(be(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ue(e),i=(this.children.get(r)||new Pe(null)).setTree(be(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Pe(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ke(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=ue(e),o=this.children.get(i);return o?o.findOnPath_(be(e),Ke(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=ue(e),i=this.children.get(s);return i?i.foreachOnPath_(be(e),Ke(n,s),r):new Pe(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Pe(null))}}function ll(t,e,n){if(oe(e))return new Pn(new Pe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=jt(s,e);return i=i.updateChild(o,n),new Pn(t.writeTree_.set(s,i))}else{const s=new Pe(n),i=t.writeTree_.setTree(e,s);return new Pn(i)}}}function Wx(t,e,n){let r=t;return kt(n,(s,i)=>{r=ll(r,Ke(e,s),i)}),r}function qx(t,e){if(oe(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new Pn(n)}}function Bm(t,e){return ki(t,e)!=null}function ki(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function Hx(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(je,(r,s)=>{e.push(new ae(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ae(r,s.value))}),e}function ys(t,e){if(oe(e))return t;{const n=ki(t,e);return n!=null?new Pn(new Pe(n)):new Pn(t.writeTree_.subtree(e))}}function zm(t){return t.writeTree_.isEmpty()}function Vo(t,e){return JC(ve(),t.writeTree_,e)}function JC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=JC(Ke(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(t,e){return tN(e,t)}function cF(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ll(t.visibleWrites,e,n)),t.lastWriteId=r}function uF(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function dF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hF(a,r.path)?s=!1:mn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return fF(t),!0;if(r.snap)t.visibleWrites=qx(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=qx(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function hF(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(Ke(t.path,n),e))return!0;return!1}function fF(t){t.visibleWrites=XC(t.allWrites,pF,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pF(t){return t.visible}function XC(t,e,n){let r=Pn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)mn(n,o)?(a=jt(n,o),r=ll(r,a,i.snap)):mn(o,n)&&(a=jt(o,n),r=ll(r,ve(),i.snap.getChild(a)));else if(i.children){if(mn(n,o))a=jt(n,o),r=Wx(r,a,i.children);else if(mn(o,n))if(a=jt(o,n),oe(a))r=Wx(r,ve(),i.children);else{const l=Co(i.children,ue(a));if(l){const u=l.getChild(be(a));r=ll(r,ve(),u)}}}else throw Wo("WriteRecord should have .snap or .children")}}return r}function ZC(t,e,n,r,s){if(!r&&!s){const i=ki(t.visibleWrites,e);if(i!=null)return i;{const o=ys(t.visibleWrites,e);if(zm(o))return n;if(n==null&&!Bm(o,ve()))return null;{const a=n||X.EMPTY_NODE;return Vo(o,a)}}}else{const i=ys(t.visibleWrites,e);if(!s&&zm(i))return n;if(!s&&n==null&&!Bm(i,ve()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(mn(u.path,e)||mn(e,u.path))},a=XC(t.allWrites,o,e),l=n||X.EMPTY_NODE;return Vo(a,l)}}}function mF(t,e,n){let r=X.EMPTY_NODE;const s=ki(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(je,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=ys(t.visibleWrites,e);return n.forEachChild(je,(o,a)=>{const l=Vo(ys(i,new Te(o)),a);r=r.updateImmediateChild(o,l)}),Hx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ys(t.visibleWrites,e);return Hx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gF(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,n);if(Bm(t.visibleWrites,i))return null;{const o=ys(t.visibleWrites,i);return zm(o)?s.getChild(n):Vo(o,s.getChild(n))}}function _F(t,e,n,r){const s=Ke(e,n),i=ki(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=ys(t.visibleWrites,s);return Vo(o,r.getNode().getImmediateChild(n))}else return null}function yF(t,e){return ki(t.visibleWrites,e)}function vF(t,e,n,r,s,i,o){let a;const l=ys(t.visibleWrites,e),u=ki(l,ve());if(u!=null)a=u;else if(n!=null)a=Vo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<s;)f(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function wF(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function Vd(t,e,n,r){return ZC(t.writeTree,t.treePath,e,n,r)}function ay(t,e){return mF(t.writeTree,t.treePath,e)}function Gx(t,e,n,r){return gF(t.writeTree,t.treePath,e,n,r)}function Fd(t,e){return yF(t.writeTree,Ke(t.treePath,e))}function xF(t,e,n,r,s,i){return vF(t.writeTree,t.treePath,e,n,r,s,i)}function ly(t,e,n){return _F(t.writeTree,t.treePath,e,n)}function eN(t,e){return tN(Ke(t.treePath,e),t.writeTree)}function tN(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Wl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,zl(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Mo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Wl(r,e.snapshotNode,s.oldSnap));else throw Wo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TF{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const nN=new TF;class cy{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Rs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ly(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xi(this.viewCache_),i=xF(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IF(t){return{filter:t}}function SF(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function bF(t,e,n,r,s){const i=new EF;let o,a;if(n.type===Cn.OVERWRITE){const u=n;u.source.fromUser?o=Wm(t,e,u.path,u.snap,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!oe(u.path),o=Ud(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Cn.MERGE){const u=n;u.source.fromUser?o=NF(t,e,u.path,u.children,r,s,i):($(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=qm(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Cn.ACK_USER_WRITE){const u=n;u.revert?o=RF(t,e,u.path,r,s,i):o=AF(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Cn.LISTEN_COMPLETE)o=kF(t,e,n.path,r,i);else throw Wo("Unknown operation type: "+n.type);const l=i.getChanges();return CF(e,o,l),{viewCache:o,changes:l}}function CF(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=Md(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(KC(Md(e)))}}function rN(t,e,n,r,s,i){const o=e.eventCache;if(Fd(r,n)!=null)return e;{let a,l;if(oe(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=xi(e),h=u instanceof X?u:X.EMPTY_NODE,f=ay(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Vd(r,xi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ue(n);if(u===".priority"){$(ks(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Gx(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=be(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Gx(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(h,m):f=o.getNode().getImmediateChild(u)}else f=ly(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return al(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Ud(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(oe(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),_,null)}else{const _=ue(n);if(!l.isCompleteForPath(n)&&ks(n)>1)return e;const S=be(n),P=l.getNode().getImmediateChild(_).updateChild(S,r);_===".priority"?u=h.updatePriority(l.getNode(),P):u=h.updateChild(l.getNode(),_,P,S,nN,null)}const f=YC(e,u,l.isFullyInitialized()||oe(n),h.filtersNodes()),m=new cy(s,f,i);return rN(t,f,n,s,m,a)}function Wm(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new cy(s,e,i);if(oe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=al(e,u,!0,t.filter.filtersNodes());else{const f=ue(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=al(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=be(n),_=a.getNode().getImmediateChild(f);let S;if(oe(m))S=r;else{const A=h.getCompleteChild(f);A!=null?ey(m)===".priority"&&A.getChild(UC(m)).isEmpty()?S=A:S=A.updateChild(m,r):S=X.EMPTY_NODE}if(_.equals(S))l=e;else{const A=t.filter.updateChild(a.getNode(),f,S,m,h,o);l=al(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Kx(t,e){return t.eventCache.isCompleteForChild(e)}function NF(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=Ke(n,l);Kx(e,ue(h))&&(a=Wm(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=Ke(n,l);Kx(e,ue(h))||(a=Wm(t,a,h,u,s,i,o))}),a}function Qx(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function qm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;oe(n)?u=r:u=new Pe(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),S=Qx(t,_,m);l=Ud(t,l,new Te(f),S,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const S=e.serverCache.getNode().getImmediateChild(f),A=Qx(t,S,m);l=Ud(t,l,new Te(f),A,s,i,o,a)}}),l}function AF(t,e,n,r,s,i,o){if(Fd(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ud(t,e,n,l.getNode().getChild(n),s,i,a,o);if(oe(n)){let u=new Pe(null);return l.getNode().forEachChild(vo,(h,f)=>{u=u.set(new Te(h),f)}),qm(t,e,n,u,s,i,a,o)}else return e}else{let u=new Pe(null);return r.foreach((h,f)=>{const m=Ke(n,h);l.isCompleteForPath(m)&&(u=u.set(h,l.getNode().getChild(m)))}),qm(t,e,n,u,s,i,a,o)}}function kF(t,e,n,r,s){const i=e.serverCache,o=YC(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return rN(t,o,n,r,nN,s)}function RF(t,e,n,r,s,i){let o;if(Fd(r,n)!=null)return e;{const a=new cy(r,e,s),l=e.eventCache.getNode();let u;if(oe(n)||ue(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Vd(r,xi(e));else{const f=e.serverCache.getNode();$(f instanceof X,"serverChildren would be complete if leaf node"),h=ay(r,f)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=ue(n);let f=ly(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,be(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,X.EMPTY_NODE,be(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vd(r,xi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Fd(r,ve())!=null,al(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PF{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ry(r.getIndex()),i=J4(r);this.processor_=IF(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(X.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(X.EMPTY_NODE,a.getNode(),null),h=new Rs(l,o.isFullyInitialized(),s.filtersNodes()),f=new Rs(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Vh(f,h),this.eventGenerator_=new sF(this.query_)}get query(){return this.query_}}function DF(t){return t.viewCache_.serverCache.getNode()}function OF(t){return Md(t.viewCache_)}function LF(t,e){const n=xi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ue(e)).isEmpty())?n.getChild(e):null}function Yx(t){return t.eventRegistrations_.length===0}function jF(t,e){t.eventRegistrations_.push(e)}function Jx(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function Xx(t,e,n,r){e.type===Cn.MERGE&&e.source.queryId!==null&&($(xi(t.viewCache_),"We should always have a full cache before handling merges"),$(Md(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=bF(t.processor_,s,e,n,r);return SF(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sN(t,i.changes,i.viewCache.eventCache.getNode(),null)}function MF(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(je,(i,o)=>{r.push(Mo(i,o))}),n.isFullyInitialized()&&r.push(KC(n.getNode())),sN(t,r,n.getNode(),e)}function sN(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return iF(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $d;class iN{constructor(){this.views=new Map}}function VF(t){$(!$d,"__referenceConstructor has already been defined"),$d=t}function FF(){return $($d,"Reference.ts has not been loaded"),$d}function UF(t){return t.views.size===0}function uy(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),Xx(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Xx(o,e,n,r));return i}}function oN(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Vd(n,s?r:null),l=!1;a?l=!0:r instanceof X?(a=ay(n,r),l=!1):(a=X.EMPTY_NODE,l=!1);const u=Vh(new Rs(a,l,!1),new Rs(r,s,!1));return new PF(e,u)}return o}function $F(t,e,n,r,s,i){const o=oN(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),jF(o,n),MF(o,n)}function BF(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Ps(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(Jx(u,n,r)),Yx(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(Jx(l,n,r)),Yx(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Ps(t)&&i.push(new(FF())(e._repo,e._path)),{removed:i,events:o}}function aN(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vs(t,e){let n=null;for(const r of t.views.values())n=n||LF(r,e);return n}function lN(t,e){if(e._queryParams.loadsAllData())return Uh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cN(t,e){return lN(t,e)!=null}function Ps(t){return Uh(t)!=null}function Uh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bd;function zF(t){$(!Bd,"__referenceConstructor has already been defined"),Bd=t}function WF(){return $(Bd,"Reference.ts has not been loaded"),Bd}let qF=1;class Zx{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=wF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uN(t,e,n,r,s){return cF(t.pendingWriteTree_,e,n,r,s),s?yc(t,new wi(QC(),e,n)):[]}function ri(t,e,n=!1){const r=uF(t.pendingWriteTree_,e);if(dF(t.pendingWriteTree_,e)){let i=new Pe(null);return r.snap!=null?i=i.set(ve(),!0):kt(r.children,o=>{i=i.set(new Te(o),!0)}),yc(t,new jd(r.path,i,n))}else return[]}function _c(t,e,n){return yc(t,new wi(iy(),e,n))}function HF(t,e,n){const r=Pe.fromObject(n);return yc(t,new Gl(iy(),e,r))}function GF(t,e){return yc(t,new Hl(iy(),e))}function KF(t,e,n){const r=hy(t,n);if(r){const s=fy(r),i=s.path,o=s.queryId,a=jt(i,e),l=new Hl(oy(o),a);return py(t,i,l)}else return[]}function dN(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||cN(o,e))){const l=BF(o,e,n,r);UF(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const h=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,_)=>Ps(_));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const _=XF(m);for(let S=0;S<_.length;++S){const A=_[S],P=A.query,I=mN(t,A);t.listenProvider_.startListening(cl(P),Kl(t,P),I.hashFn,I.onComplete)}}}!f&&u.length>0&&!r&&(h?t.listenProvider_.stopListening(cl(e),null):u.forEach(m=>{const _=t.queryToTagMap.get($h(m));t.listenProvider_.stopListening(cl(m),_)}))}ZF(t,u)}return a}function hN(t,e,n,r){const s=hy(t,r);if(s!=null){const i=fy(s),o=i.path,a=i.queryId,l=jt(o,e),u=new wi(oy(a),l,n);return py(t,o,u)}else return[]}function QF(t,e,n,r){const s=hy(t,r);if(s){const i=fy(s),o=i.path,a=i.queryId,l=jt(o,e),u=Pe.fromObject(n),h=new Gl(oy(a),l,u);return py(t,o,h)}else return[]}function YF(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,_)=>{const S=jt(m,s);i=i||vs(_,S),o=o||Ps(_)});let a=t.syncPointTree_.get(s);a?(o=o||Ps(a),i=i||vs(a,ve())):(a=new iN,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=X.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((_,S)=>{const A=vs(S,ve());A&&(i=i.updateImmediateChild(_,A))}));const u=cN(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=$h(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=e3();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=Fh(t.pendingWriteTree_,s);let f=$F(a,e,n,h,i,l);if(!u&&!o&&!r){const m=lN(a,e);f=f.concat(t3(t,e,m))}return f}function dy(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=jt(o,e),u=vs(a,l);if(u)return u});return ZC(s,e,i,n,!0)}function JF(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,h)=>{const f=jt(u,n);r=r||vs(h,f)});let s=t.syncPointTree_.get(n);s?r=r||vs(s,ve()):(s=new iN,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Rs(r,!0,!1):null,a=Fh(t.pendingWriteTree_,e._path),l=oN(s,e,a,i?o.getNode():X.EMPTY_NODE,i);return OF(l)}function yc(t,e){return fN(e,t.syncPointTree_,null,Fh(t.pendingWriteTree_,ve()))}function fN(t,e,n,r){if(oe(t.path))return pN(t,e,n,r);{const s=e.get(ve());n==null&&s!=null&&(n=vs(s,ve()));let i=[];const o=ue(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=eN(r,o);i=i.concat(fN(a,l,u,h))}return s&&(i=i.concat(uy(s,t,r,n))),i}}function pN(t,e,n,r){const s=e.get(ve());n==null&&s!=null&&(n=vs(s,ve()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=eN(r,o),h=t.operationForChild(o);h&&(i=i.concat(pN(h,a,l,u)))}),s&&(i=i.concat(uy(s,t,r,n))),i}function mN(t,e){const n=e.query,r=Kl(t,n);return{hashFn:()=>(DF(e)||X.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?KF(t,n._path,r):GF(t,n._path);{const i=QV(s,n);return dN(t,n,null,i)}}}}function Kl(t,e){const n=$h(e);return t.queryToTagMap.get(n)}function $h(t){return t._path.toString()+"$"+t._queryIdentifier}function hy(t,e){return t.tagToQueryMap.get(e)}function fy(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function py(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=Fh(t.pendingWriteTree_,e);return uy(r,n,s,null)}function XF(t){return t.fold((e,n,r)=>{if(n&&Ps(n))return[Uh(n)];{let s=[];return n&&(s=aN(n)),kt(r,(i,o)=>{s=s.concat(o)}),s}})}function cl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(WF())(t._repo,t._path):t}function ZF(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=$h(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function e3(){return qF++}function t3(t,e,n){const r=e._path,s=Kl(t,e),i=mN(t,n),o=t.listenProvider_.startListening(cl(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!Ps(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,h,f)=>{if(!oe(u)&&h&&Ps(h))return[Uh(h).query];{let m=[];return h&&(m=m.concat(aN(h).map(_=>_.query))),kt(f,(_,S)=>{m=m.concat(S)}),m}});for(let u=0;u<l.length;++u){const h=l[u];t.listenProvider_.stopListening(cl(h),Kl(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new my(n)}node(){return this.node_}}class gy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new gy(this.syncTree_,n)}node(){return dy(this.syncTree_,this.path_)}}const n3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},eE=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return r3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return s3(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},r3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},s3=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},i3=function(t,e,n,r){return _y(e,new gy(n,t),r)},gN=function(t,e,n){return _y(t,new my(e),n)};function _y(t,e,n){const r=t.getPriority().val(),s=eE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=eE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ct(a,Ge(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ct(s))),o.forEachChild(je,(a,l)=>{const u=_y(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vy(t,e){let n=e instanceof Te?e:new Te(e),r=t,s=ue(n);for(;s!==null;){const i=Co(r.node.children,s)||{children:{},childCount:0};r=new yy(s,r,i),n=be(n),s=ue(n)}return r}function ta(t){return t.node.value}function _N(t,e){t.node.value=e,Hm(t)}function yN(t){return t.node.childCount>0}function o3(t){return ta(t)===void 0&&!yN(t)}function Bh(t,e){kt(t.node.children,(n,r)=>{e(new yy(n,t,r))})}function vN(t,e,n,r){n&&e(t),Bh(t,s=>{vN(s,e,!0)})}function a3(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vc(t){return new Te(t.parent===null?t.name:vc(t.parent)+"/"+t.name)}function Hm(t){t.parent!==null&&l3(t.parent,t.name,t)}function l3(t,e,n){const r=o3(n),s=tr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Hm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Hm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c3=/[\[\].#$\/\u0000-\u001F\u007F]/,u3=/[\[\].#$\u0000-\u001F\u007F]/,cp=10*1024*1024,wy=function(t){return typeof t=="string"&&t.length!==0&&!c3.test(t)},wN=function(t){return typeof t=="string"&&t.length!==0&&!u3.test(t)},d3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),wN(t)},xN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!jh(t)||t&&typeof t=="object"&&tr(t,".sv")},Gm=function(t,e,n,r){zh(No(t,"value"),e,n)},zh=function(t,e,n){const r=n instanceof Te?new A4(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Js(r));if(typeof e=="function")throw new Error(t+"contains a function "+Js(r)+" with contents = "+e.toString());if(jh(e))throw new Error(t+"contains "+e.toString()+" "+Js(r));if(typeof e=="string"&&e.length>cp/3&&dh(e)>cp)throw new Error(t+"contains a string greater than "+cp+" utf8 bytes "+Js(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(kt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!wy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Js(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);k4(r,o),zh(t,a,r),R4(r)}),s&&i)throw new Error(t+' contains ".value" child '+Js(r)+" in addition to actual children.")}},h3=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=Bl(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!wy(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(N4);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&mn(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},f3=function(t,e,n,r){const s=No(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];kt(e,(o,a)=>{const l=new Te(o);if(zh(s,a,Ke(n,l)),ey(l)===".priority"&&!xN(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),h3(s,i)},p3=function(t,e,n){if(jh(e))throw new Error(No(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!xN(e))throw new Error(No(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},EN=function(t,e,n,r){if(!wN(n))throw new Error(No(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},m3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),EN(t,e,n)},to=function(t,e){if(ue(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},g3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!d3(n))throw new Error(No(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function TN(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!$C(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Xn(t,e,n){TN(t,n),y3(t,r=>mn(r,e)||mn(e,r))}function y3(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(v3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function v3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();il&&gt("event: "+n.toString()),Zo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w3="repo_interrupt",x3=25;class E3{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ld(),this.transactionQueueTree_=new yy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T3(t,e,n){if(t.stats_=X_(t.repoInfo_),t.forceRestClient_||ZV())t.server_=new Od(t.repoInfo_,(r,s,i,o)=>{tE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>nE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{st(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new vr(t.repoInfo_,e,(r,s,i,o)=>{tE(t,r,s,i,o)},r=>{nE(t,r)},r=>{S3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=s4(t.repoInfo_,()=>new rF(t.stats_,t.server_)),t.infoData_=new X4,t.infoSyncTree_=new Zx({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_c(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ey(t,"connected",!1),t.serverSyncTree_=new Zx({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Xn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function I3(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xy(t){return n3({timestamp:I3(t)})}function tE(t,e,n,r,s){t.dataUpdateCount++;const i=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=ld(n,u=>Ge(u));o=QF(t.serverSyncTree_,i,l,s)}else{const l=Ge(n);o=hN(t.serverSyncTree_,i,l,s)}else if(r){const l=ld(n,u=>Ge(u));o=HF(t.serverSyncTree_,i,l)}else{const l=Ge(n);o=_c(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=qh(t,i)),Xn(t.eventQueue_,a,o)}function nE(t,e){Ey(t,"connected",e),e===!1&&N3(t)}function S3(t,e){kt(e,(n,r)=>{Ey(t,n,r)})}function Ey(t,e,n){const r=new Te("/.info/"+e),s=Ge(n);t.infoData_.updateSnapshot(r,s);const i=_c(t.infoSyncTree_,r,s);Xn(t.eventQueue_,r,i)}function IN(t){return t.nextWriteId_++}function b3(t,e,n){const r=JF(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ge(s).withIndex(e._queryParams.getIndex());YF(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_c(t.serverSyncTree_,e._path,i);else{const a=Kl(t.serverSyncTree_,e);o=hN(t.serverSyncTree_,e._path,i,a)}return Xn(t.eventQueue_,e._path,o),dN(t.serverSyncTree_,e,n,null,!0),i},s=>(Wh(t,"get for query "+st(e)+" failed: "+s),Promise.reject(new Error(s))))}function C3(t,e,n,r,s){Wh(t,"set",{path:e.toString(),value:n,priority:r});const i=xy(t),o=Ge(n,r),a=dy(t.serverSyncTree_,e),l=gN(o,a,i),u=IN(t),h=uN(t.serverSyncTree_,e,l,u,!0);TN(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(m,_)=>{const S=m==="ok";S||Yt("set at "+e+" failed: "+m);const A=ri(t.serverSyncTree_,u,!S);Xn(t.eventQueue_,e,A),Fo(t,s,m,_)});const f=AN(t,e);qh(t,f),Xn(t.eventQueue_,f,[])}function N3(t){Wh(t,"onDisconnectEvents");const e=xy(t),n=Ld();$m(t.onDisconnect_,ve(),(s,i)=>{const o=i3(s,i,t.serverSyncTree_,e);ea(n,s,o)});let r=[];$m(n,ve(),(s,i)=>{r=r.concat(_c(t.serverSyncTree_,s,i));const o=AN(t,s);qh(t,o)}),t.onDisconnect_=Ld(),Xn(t.eventQueue_,ve(),r)}function A3(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Um(t.onDisconnect_,e),Fo(t,n,r,s)})}function rE(t,e,n,r){const s=Ge(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&ea(t.onDisconnect_,e,s),Fo(t,r,i,o)})}function k3(t,e,n,r,s){const i=Ge(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&ea(t.onDisconnect_,e,i),Fo(t,s,o,a)})}function R3(t,e,n,r){if(ad(n)){gt("onDisconnect().update() called with empty data.  Don't do anything."),Fo(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&kt(n,(o,a)=>{const l=Ge(a);ea(t.onDisconnect_,Ke(e,o),l)}),Fo(t,r,s,i)})}function P3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(w3)}function Wh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),gt(n,...e)}function Fo(t,e,n,r){e&&Zo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function SN(t,e,n){return dy(t.serverSyncTree_,e,n)||X.EMPTY_NODE}function Ty(t,e=t.transactionQueueTree_){if(e||Hh(t,e),ta(e)){const n=CN(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&D3(t,vc(e),n)}else yN(e)&&Bh(e,n=>{Ty(t,n)})}function D3(t,e,n){const r=n.map(u=>u.currentWriteId),s=SN(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];$(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=jt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Wh(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(ri(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Hh(t,vy(t.transactionQueueTree_,e)),Ty(t,t.transactionQueueTree_),Xn(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Zo(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yt("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}qh(t,e)}},o)}function qh(t,e){const n=bN(t,e),r=vc(n),s=CN(t,n);return O3(t,s,r),r}function O3(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=jt(n,l.path);let h=!1,f;if($(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=x3)h=!0,f="maxretry",s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0));else{const m=SN(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){zh("transaction failed: Data returned ",_,l.path);let S=Ge(_);typeof _=="object"&&_!=null&&tr(_,".priority")||(S=S.updatePriority(m.getPriority()));const P=l.currentWriteId,I=xy(t),E=gN(S,m,I);l.currentOutputSnapshotRaw=S,l.currentOutputSnapshotResolved=E,l.currentWriteId=IN(t),o.splice(o.indexOf(P),1),s=s.concat(uN(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(ri(t.serverSyncTree_,P,!0))}else h=!0,f="nodata",s=s.concat(ri(t.serverSyncTree_,l.currentWriteId,!0))}Xn(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Hh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Zo(r[a]);Ty(t,t.transactionQueueTree_)}function bN(t,e){let n,r=t.transactionQueueTree_;for(n=ue(e);n!==null&&ta(r)===void 0;)r=vy(r,n),e=be(e),n=ue(e);return r}function CN(t,e){const n=[];return NN(t,e,n),n.sort((r,s)=>r.order-s.order),n}function NN(t,e,n){const r=ta(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Bh(e,s=>{NN(t,s,n)})}function Hh(t,e){const n=ta(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,_N(e,n.length>0?n:void 0)}Bh(e,r=>{Hh(t,r)})}function AN(t,e){const n=vc(bN(t,e)),r=vy(t.transactionQueueTree_,e);return a3(r,s=>{up(t,s)}),up(t,r),vN(r,s=>{up(t,s)}),n}function up(t,e){const n=ta(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ri(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?_N(e,void 0):n.length=i+1,Xn(t.eventQueue_,vc(e),s);for(let o=0;o<r.length;o++)Zo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function j3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const sE=function(t,e){const n=M3(t),r=n.namespace;n.domain==="firebase.com"&&kr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&kr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||WV();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RC(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Te(n.pathString)}},M3=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=L3(t.substring(h,f)));const m=j3(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const S=e.indexOf(".");r=e.substring(0,S).toLowerCase(),n=e.substring(S+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V3{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+st(this.snapshot.exportVal())}}class F3{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $3{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new ur;return A3(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){to("OnDisconnect.remove",this._path);const e=new ur;return rE(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){to("OnDisconnect.set",this._path),Gm("OnDisconnect.set",e,this._path);const n=new ur;return rE(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){to("OnDisconnect.setWithPriority",this._path),Gm("OnDisconnect.setWithPriority",e,this._path),p3("OnDisconnect.setWithPriority",n);const r=new ur;return k3(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){to("OnDisconnect.update",this._path),f3("OnDisconnect.update",e,this._path);const n=new ur;return R3(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Iy{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:ey(this._path)}get ref(){return new Or(this._repo,this._path)}get _queryIdentifier(){const e=Bx(this._queryParams),n=Y_(e);return n==="{}"?"default":n}get _queryObject(){return Bx(this._queryParams)}isEqual(e){if(e=we(e),!(e instanceof Iy))return!1;const n=this._repo===e._repo,r=$C(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+C4(this._path)}}class Or extends Iy{constructor(e,n){super(e,n,new sy,!1)}get parent(){const e=UC(this._path);return e===null?null:new Or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ql{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),r=Km(this.ref,e);return new Ql(this._node.getChild(n),r,je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ql(s,Km(this.ref,r),je)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cr(t,e){return t=we(t),t._checkNotDeleted("ref"),e!==void 0?Km(t._root,e):t._root}function Km(t,e){return t=we(t),ue(t._path)===null?m3("child","path",e):EN("child","path",e),new Or(t._repo,Ke(t._path,e))}function iE(t){return t=we(t),new $3(t._repo,t._path)}function B3(t){return to("remove",t._path),no(t,null)}function no(t,e){t=we(t),to("set",t._path),Gm("set",e,t._path);const n=new ur;return C3(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dp(t){t=we(t);const e=new U3(()=>{}),n=new Sy(e);return b3(t._repo,t,n).then(r=>new Ql(r,new Or(t._repo,t._path),t._queryParams.getIndex()))}class Sy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new V3("value",this,new Ql(e.snapshotNode,new Or(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new F3(this,e,n):null}matches(e){return e instanceof Sy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}VF(Or);zF(Or);/**
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
 */const z3="FIREBASE_DATABASE_EMULATOR_HOST",Qm={};let W3=!1;function q3(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=Zn(i);t.repoInfo_=new RC(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function H3(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||kr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),gt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=sE(i,s),a=o.repoInfo,l;typeof process<"u"&&Ix&&(l=Ix[z3]),l?(i=`http://${l}?ns=${a.namespace}`,o=sE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new t4(t.name,t.options,e);g3("Invalid Firebase Database URL",o),oe(o.path)||kr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=K3(a,t,u,new e4(t,n));return new Q3(h,t)}function G3(t,e){const n=Qm[e];(!n||n[t.key]!==t)&&kr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),P3(t),delete n[t.key]}function K3(t,e,n,r){let s=Qm[e.name];s||(s={},Qm[e.name]=s);let i=s[t.toURLString()];return i&&kr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new E3(t,W3,n,r),s[t.toURLString()]=i,i}class Q3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Or(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(G3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kr("Cannot call "+e+" on a deleted database.")}}function kN(t=fh(),e){const n=rc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Zg("database");r&&Y3(n,...r)}return n}function Y3(t,e,n,r={}){t=we(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Ir(r,i.repoInfo_.emulatorOptions))return;kr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ru(Ru.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:e_(r.mockUserToken,t.app.options.projectId);o=new Ru(a)}Zn(e)&&(ch(e),uh("Database",!0)),q3(i,s,r,o)}/**
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
 */function J3(t){VV(js),Es(new Sr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return H3(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),_n(Sx,bx,t),_n(Sx,bx,"esm2020")}vr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};J3();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN="firebasestorage.googleapis.com",PN="storageBucket",X3=2*60*1e3,Z3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends er{constructor(e,n,r=0){super(hp(e),`Firebase Storage: ${n} (${hp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Be||(Be={}));function hp(t){return"storage/"+t}function by(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(Be.UNKNOWN,t)}function e6(t){return new ze(Be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function t6(t){return new ze(Be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function n6(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(Be.UNAUTHENTICATED,t)}function r6(){return new ze(Be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function s6(t){return new ze(Be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function i6(){return new ze(Be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function o6(){return new ze(Be.CANCELED,"User canceled the upload/download.")}function a6(t){return new ze(Be.INVALID_URL,"Invalid URL '"+t+"'.")}function l6(t){return new ze(Be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function c6(){return new ze(Be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+PN+"' property when initializing the app?")}function u6(){return new ze(Be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function d6(){return new ze(Be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function h6(t){return new ze(Be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ym(t){return new ze(Be.INVALID_ARGUMENT,t)}function DN(){return new ze(Be.APP_DELETED,"The Firebase app was deleted.")}function f6(t){return new ze(Be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ul(t,e){return new ze(Be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ra(t){throw new ze(Be.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nn.makeFromUrl(e,n)}catch{return new nn(e,"")}if(r.path==="")return r;throw l6(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},A=n===RN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",I=new RegExp(`^https?://${A}/${s}/${P}`,"i"),C=[{regex:a,indices:l,postModify:i},{regex:_,indices:S,postModify:u},{regex:I,indices:{bucket:1,path:2},postModify:u}];for(let k=0;k<C.length;k++){const M=C[k],F=M.regex.exec(e);if(F){const x=F[M.indices.bucket];let y=F[M.indices.path];y||(y=""),r=new nn(x,y),M.postModify(r);break}}if(r==null)throw a6(e);return r}}class p6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m6(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...P){u||(u=!0,e.apply(null,P))}function f(P){s=setTimeout(()=>{s=null,t(_,l())},P)}function m(){i&&clearTimeout(i)}function _(P,...I){if(u){m();return}if(P){m(),h.call(null,P,...I);return}if(l()||o){m(),h.call(null,P,...I);return}r<64&&(r*=2);let C;a===1?(a=2,C=0):C=(r+Math.random())*1e3,f(C)}let S=!1;function A(P){S||(S=!0,m(),!u&&(s!==null?(P||(a=2),clearTimeout(s),f(0)):P||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,A(!0)},n),A}function g6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _6(t){return t!==void 0}function y6(t){return typeof t=="object"&&!Array.isArray(t)}function Cy(t){return typeof t=="string"||t instanceof String}function oE(t){return Ny()&&t instanceof Blob}function Ny(){return typeof Blob<"u"}function aE(t,e,n,r){if(r<e)throw Ym(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ym(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ON(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var li;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(li||(li={}));/**
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
 */function v6(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w6{constructor(e,n,r,s,i,o,a,l,u,h,f,m=!0,_=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,A)=>{this.resolve_=S,this.reject_=A,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new su(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===li.NO_ERROR,l=i.getStatus();if(!a||v6(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===li.ABORT;r(!1,new su(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new su(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_6(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=by();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?DN():o6();o(l)}else{const l=i6();o(l)}};this.canceled_?n(!1,new su(!1,null,!0)):this.backoffId_=m6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&g6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class su{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function x6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function E6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function T6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function I6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S6(t,e,n,r,s,i,o=!0,a=!1){const l=ON(t.urlParams),u=t.url+l,h=Object.assign({},t.headers);return T6(h,e),x6(h,n),E6(h,i),I6(h,r),new w6(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b6(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function C6(...t){const e=b6();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ny())return new Blob(t);throw new ze(Be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function N6(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function A6(t){if(typeof atob>"u")throw h6("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fp{constructor(e,n){this.data=e,this.contentType=n||null}}function k6(t,e){switch(t){case Bn.RAW:return new fp(LN(e));case Bn.BASE64:case Bn.BASE64URL:return new fp(jN(t,e));case Bn.DATA_URL:return new fp(P6(e),D6(e))}throw by()}function LN(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function R6(t){let e;try{e=decodeURIComponent(t)}catch{throw ul(Bn.DATA_URL,"Malformed data URL.")}return LN(e)}function jN(t,e){switch(t){case Bn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ul(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Bn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ul(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=A6(e)}catch(s){throw s.message.includes("polyfill")?s:ul(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class MN{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ul(Bn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=O6(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function P6(t){const e=new MN(t);return e.base64?jN(Bn.BASE64,e.rest):R6(e.rest)}function D6(t){return new MN(t).contentType}function O6(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){let r=0,s="";oE(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(oE(this.data_)){const r=this.data_,s=N6(r,e,n);return s===null?null:new Xr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Xr(r,!0)}}static getBlob(...e){if(Ny()){const n=e.map(r=>r instanceof Xr?r.data_:r);return new Xr(C6.apply(null,n))}else{const n=e.map(o=>Cy(o)?k6(Bn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Xr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t){let e;try{e=JSON.parse(t)}catch{return null}return y6(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function j6(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function FN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M6(t,e){return e}class Ot{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||M6}}let iu=null;function V6(t){return!Cy(t)||t.length<2?t:FN(t)}function UN(){if(iu)return iu;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(i,o){return V6(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ot("size");return s.xform=r,t.push(s),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),iu=t,iu}function F6(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new nn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function U6(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return F6(r,t),r}function $N(t,e,n){const r=VN(e);return r===null?null:U6(t,r,n)}function $6(t,e,n,r){const s=VN(e);if(s===null||!Cy(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),_=Ay(m,n,r),S=ON({alt:"media",token:u});return _+S})[0]}function B6(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class BN{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(t){if(!t)throw by()}function z6(t,e){function n(r,s){const i=$N(t,s,e);return zN(i!==null),i}return n}function W6(t,e){function n(r,s){const i=$N(t,s,e);return zN(i!==null),$6(i,s,t.host,t._protocol)}return n}function WN(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=r6():s=n6():n.getStatus()===402?s=t6(t.bucket):n.getStatus()===403?s=s6(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function q6(t){const e=WN(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=e6(t.path)),i.serverResponse=s.serverResponse,i}return n}function H6(t,e,n){const r=e.fullServerUrl(),s=Ay(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new BN(s,i,W6(t,n),o);return a.errorHandler=q6(e),a}function G6(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function K6(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=G6(null,e)),r}function Q6(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let k=0;k<2;k++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=K6(e,r,s),h=B6(u,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+l+"--",_=Xr.getBlob(f,r,m);if(_===null)throw u6();const S={name:u.fullPath},A=Ay(i,t.host,t._protocol),P="POST",I=t.maxUploadRetryTime,E=new BN(A,P,z6(t,n),I);return E.urlParams=S,E.headers=o,E.body=_.uploadData(),E.errorHandler=WN(e),E}class Y6{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=li.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=li.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=li.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s,i){if(this.sent_)throw Ra("cannot .send() more than once");if(Zn(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ra("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ra("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ra("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ra("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class J6 extends Y6{initXhr(){this.xhr_.responseType="text"}}function qN(){return new J6}/**
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
 */class Ei{constructor(e,n){this._service=e,n instanceof nn?this._location=n:this._location=nn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ei(e,n)}get root(){const e=new nn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return FN(this._location.path)}get storage(){return this._service}get parent(){const e=L6(this._location.path);if(e===null)return null;const n=new nn(this._location.bucket,e);return new Ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw f6(e)}}function X6(t,e,n){t._throwIfRoot("uploadBytes");const r=Q6(t.storage,t._location,UN(),new Xr(e,!0),n);return t.storage.makeRequestWithTokens(r,qN).then(s=>({metadata:s,ref:t}))}function Z6(t){t._throwIfRoot("getDownloadURL");const e=H6(t.storage,t._location,UN());return t.storage.makeRequestWithTokens(e,qN).then(n=>{if(n===null)throw d6();return n})}function eU(t,e){const n=j6(t._location.path,e),r=new nn(t._location.bucket,n);return new Ei(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(t){return/^[A-Za-z]+:\/\//.test(t)}function nU(t,e){return new Ei(t,e)}function HN(t,e){if(t instanceof ky){const n=t;if(n._bucket==null)throw c6();const r=new Ei(n,n._bucket);return e!=null?HN(r,e):r}else return e!==void 0?eU(t,e):t}function rU(t,e){if(e&&tU(e)){if(t instanceof ky)return nU(t,e);throw Ym("To use ref(service, url), the first argument must be a Storage instance.")}else return HN(t,e)}function lE(t,e){const n=e==null?void 0:e[PN];return n==null?null:nn.makeFromBucketSpec(n,t)}function sU(t,e,n,r={}){t.host=`${e}:${n}`;const s=Zn(e);s&&(ch(`https://${t.host}/b`),uh("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:e_(i,t.app.options.projectId))}class ky{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=RN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=X3,this._maxUploadRetryTime=Z3,this._requests=new Set,s!=null?this._bucket=nn.makeFromBucketSpec(s,this._host):this._bucket=lE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nn.makeFromBucketSpec(this._url,e):this._bucket=lE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){aE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){aE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ei(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new p6(DN());{const o=S6(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const cE="@firebase/storage",uE="0.14.0";/**
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
 */const GN="storage";function iU(t,e,n){return t=we(t),X6(t,e,n)}function oU(t){return t=we(t),Z6(t)}function aU(t,e){return t=we(t),rU(t,e)}function lU(t=fh(),e){t=we(t);const r=rc(t,GN).getImmediate({identifier:e}),s=Zg("storage");return s&&cU(r,...s),r}function cU(t,e,n,r={}){sU(t,e,n,r)}function uU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ky(n,r,s,e,js)}function dU(){Es(new Sr(GN,uU,"PUBLIC").setMultipleInstances(!0)),_n(cE,uE,""),_n(cE,uE,"esm2020")}dU();const hU={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},Gh=eS(hU),Ie=pL(Gh),ye=EV(Gh),fU=lU(Gh),ji=kN(Gh);function KN(){const[t,e]=O.useState(""),[n,r]=O.useState(""),[s,i]=O.useState(!1),[o,a]=O.useState(""),l=async u=>{u.preventDefault(),i(!0),a("");try{const f=(await JD(Ie,t,n)).user,m=await kd(We(ye,"users",f.uid));if(!m.exists()){a("Profile not found. Please contact support."),await Ie.signOut(),i(!1);return}const _=m.data();if(_.role==="carrier"&&!_.isApproved){a("Your account is pending approval. Please wait for coordinator approval."),await Ie.signOut(),i(!1);return}console.log("Login successful for:",f.email)}catch(h){console.error("Login error:",h),h.code==="auth/invalid-credential"||h.code==="auth/user-not-found"||h.code==="auth/wrong-password"?a("Invalid email or password. Please try again."):h.code==="auth/too-many-requests"?a("Too many failed attempts. Please try again later."):h.code==="auth/user-disabled"?a("This account has been disabled. Please contact support."):h.code==="auth/network-request-failed"?a("Network error. Please check your internet connection."):a(h.message||"Login failed. Please try again.")}finally{i(!1)}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900",children:d.jsx("div",{className:"flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[d.jsx("div",{className:"w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),d.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]}),d.jsx("p",{className:"text-gray-600",children:"Sign in to your carrier account"})]}),o&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 mb-6",children:d.jsx("p",{className:"text-red-700 text-sm",children:o})}),d.jsxs("form",{onSubmit:l,className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"your@email.com",value:t,onChange:u=>e(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,disabled:s})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),d.jsx("input",{type:"password",placeholder:"Enter your password",value:n,onChange:u=>r(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,minLength:6,disabled:s}),d.jsx("div",{className:"text-right mt-2",children:d.jsx(uo,{to:"/forgot-password",className:"text-sm text-blue-600 hover:text-blue-800",children:"Forgot password?"})})]}),d.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:s?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),d.jsxs("div",{className:"flex items-center my-8",children:[d.jsx("div",{className:"flex-grow border-t border-gray-300"}),d.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),d.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-gray-600 mb-4",children:"Don't have a carrier account?"}),d.jsx(uo,{to:"/register",className:"inline-block w-full py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition",children:"Register as Carrier"})]}),d.jsx("div",{className:"mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("span",{className:"text-yellow-600",children:"ℹ️"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important"}),d.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Carrier accounts require coordinator approval. You will receive SMS notification once approved."})]})]})}),d.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:d.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",d.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-blue-600 hover:text-blue-800",children:"Contact Support"})]})})]})})})}const pU=6371e3,dE=t=>{let e=t<0?~(t<<1):t<<1,n="";for(;e>=32;)n+=String.fromCharCode((32|e&31)+63),e>>=5;return n+=String.fromCharCode(e+63),n},hE=t=>{let e=0,n=0,r="";for(const s of t){const i=Math.round(s.lat*1e5),o=Math.round(s.lng*1e5);r+=dE(i-e),r+=dE(o-n),e=i,n=o}return r},QN=(t,e)=>{const n=(e.lat-t.lat)*Math.PI/180,r=(e.lng-t.lng)*Math.PI/180,s=t.lat*Math.PI/180,i=e.lat*Math.PI/180,o=Math.sin(n/2)**2+Math.cos(s)*Math.cos(i)*Math.sin(r/2)**2;return pU*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},fE=(t,e=6)=>{if(t.length<=2)return t;const n=[t[0]];for(let r=1;r<t.length-1;r+=1){const s=t[r],i=n[n.length-1];QN(i,s)>=e&&n.push(s)}return n.push(t[t.length-1]),n},ou=3,pE=5*1e3,mE=1e3,mU=10,Pu=(t,e,n,r)=>{const i=(n-t)*(Math.PI/180),o=(r-e)*(Math.PI/180),a=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*(Math.PI/180))*Math.cos(n*(Math.PI/180))*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))},pp=(t,e)=>{if(t.accuracy===void 0)return console.warn("❌ Position rejected: accuracy is undefined"),!1;if(t.accuracy>mE)return console.warn(`❌ Position rejected: accuracy too poor (${t.accuracy.toFixed(0)}m > ${mE}m)`),!1;if(Math.abs(t.lat)>90||Math.abs(t.lng)>180)return console.warn(`❌ Position rejected: invalid coordinates (${t.lat}, ${t.lng})`),!1;if(e){const n=Pu(e.lat,e.lng,t.lat,t.lng)/1e3;if(n>mU)return console.warn(`❌ Position rejected: impossible jump of ${n.toFixed(1)}km`),!1}return!0},au=()=>{const t=Date.now(),e=new Date(t).toISOString(),n=new Intl.DateTimeFormat("sv-SE",{timeZone:"Africa/Johannesburg",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date(t)),r=Object.fromEntries(n.map(i=>[i.type,i.value])),s=`${r.year}-${r.month}-${r.day}T${r.hour}:${r.minute}:${r.second}+02:00`;return{ms:t,utcISO:e,lesothoISO:s}};class le{static appendRoutePoint(e,n){const r=this.routeBuffers[e]||[];if(r.length>0){const i=r[r.length-1];if(QN(i,n)<this.ROUTE_MIN_POINT_DISTANCE_M)return r}const s=[...r,n];return this.routeBuffers[e]=s,s}static async persistActiveRouteHistory(e,n){var a,l;if(n.length===0)return;const r=Date.now(),s=this.lastRoutePersistAtMs[e]||0;if(r-s<this.ROUTE_PERSIST_INTERVAL_MS)return;const i=fE(n),o=hE(i);await Ut(We(ye,"deliveries",e),{routeHistory:{schemaVersion:1,activePolyline:o,activePointCount:i.length,activeStartTs:((a=i[0])==null?void 0:a.timestamp)||r,activeEndTs:((l=i[i.length-1])==null?void 0:l.timestamp)||r,lastUpdatedTs:r,updatedAt:_o()},routeHistoryMeta:{hasHistory:!0,lastActiveUpdateTs:r}}),this.lastRoutePersistAtMs[e]=r}static async flushRouteSnapshot(e,n){const r=this.routeBuffers[e]||[];if(r.length<2)return;const s=fE(r),i=hE(s),o=s[0].timestamp,a=s[s.length-1].timestamp,l=Date.now();await MV(un(ye,"deliveries",e,"routeSnapshots"),{schemaVersion:1,encodedPolyline:i,pointCount:s.length,rawPointCount:r.length,startedAt:o,endedAt:a,createdAt:_o(),reason:n}),await Ut(We(ye,"deliveries",e),{routeHistoryMeta:{hasHistory:!0,lastSnapshotAt:_o(),lastSnapshotTs:l},routeHistorySnapshots:jm({startedAt:o,endedAt:a,pointCount:s.length,reason:n})}),this.lastRouteSnapshotAtMs[e]=l,this.routeBuffers[e]=[s[s.length-1]]}static async getCarrierProfile(){try{const e=Ie.currentUser;if(!e)return null;const n=await Hs(xn(un(ye,"users"),nt("__name__","==",e.uid)));if(!n.empty){const r=n.docs[0].data();return{id:n.docs[0].id,...r}}return null}catch(e){return console.error("Error fetching carrier profile:",e),null}}static async updateCarrierStatus(e,n){try{const r=Ie.currentUser;return r?e==="inactive"&&n?(console.error("Cannot change status to inactive while on delivery"),!1):(await Ut(We(ye,"users",r.uid),{status:e,updatedAt:ee.now(),lastActive:ee.now()}),!0):!1}catch(r){return console.error("Error updating carrier status:",r),!1}}static async updateLocation(e,n){try{const r=Ie.currentUser;if(!r)return console.warn("updateLocation: no authenticated user (auth.currentUser is null)"),!1;const s=Date.now(),i=r.uid,o=10*60*1e3;let a=!1;if(!this.lastFirestoreWrite[i])a=!0;else if(!this.lastSavedLocation)a=!0;else{const l=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,e,n);l>200&&(a=!0,console.log(`🔁 Significant move detected: ${l.toFixed(0)}m — forcing Firestore update`))}if(a||(a=!this.lastFirestoreWrite[i]||s-this.lastFirestoreWrite[i]>=o),a){const l=ee.now(),{ms:u,lesothoISO:h}=au();await Ut(We(ye,"users",r.uid),{currentLocation:{lat:e,lng:n,timestamp:l,timestampISO:h,timestampMs:u,timezone:"SAST"},lastActive:ee.now(),lastActiveISO:h}),this.lastFirestoreWrite[i]=s,console.log("📝 Firestore location updated (Lesotho time)")}try{const{ms:l,utcISO:u,lesothoISO:h}=au(),f=cr(ji,`tracks/${r.uid}`);await no(f,{lat:e,lng:n,timestamp:l,timestampISO:h,timestampMs:l,timestampUtcISO:u,timezone:"SAST",status:"active"}),console.log("✅ RTDB location updated (Lesotho):",{lat:e,lng:n,lesothoTime:h});try{iE(f).remove()}catch{}}catch(l){console.error("❌ RTDB write failed for carrier track:",l)}return!0}catch(r){return console.error("Error updating location:",r),!1}}static async getActiveDelivery(){try{const e=Ie.currentUser;if(!e)return null;const n=xn(un(ye,"deliveries"),nt("carrierId","==",e.uid),nt("status","in",["assigned","picked_up","in_transit","out_for_delivery"]),Ys("assignedAt","desc")),r=await Hs(n);if(!r.empty){const s=r.docs[0].data();return{id:r.docs[0].id,...s}}return null}catch(e){return console.error("Error fetching active delivery:",e),null}}static async getDeliveries(e=10){try{const n=Ie.currentUser;if(!n)return[];const r=xn(un(ye,"deliveries"),nt("carrierId","==",n.uid),Ys("createdAt","desc"),OV(e));return(await Hs(r)).docs.map(i=>({id:i.id,...i.data()}))}catch(n){return console.error("Error fetching deliveries:",n),[]}}static async updateDeliveryStatus(e,n,r){try{const s={status:n,updatedAt:ee.now()};if(n==="picked_up"&&(s.pickupTime=ee.now(),s.otpCode=r||Math.floor(1e3+Math.random()*9e3).toString()),n==="delivered"&&(s.deliveryTime=ee.now()),await Ut(We(ye,"deliveries",e),s),["picked_up","in_transit","out_for_delivery","delivered"].includes(n)){const i=n==="delivered"?"delivery_complete":"status_change";await this.flushRouteSnapshot(e,i)}return!0}catch(s){return console.error("Error updating delivery:",s),!1}}static async verifyOTP(e,n){try{const r=We(ye,"deliveries",e),s=await Hs(xn(un(ye,"deliveries"),nt("__name__","==",e)));return!s.empty&&s.docs[0].data().otpCode===n?(await Ut(r,{status:"delivered",otpVerified:!0,deliveryTime:ee.now(),updatedAt:ee.now()}),!0):!1}catch(r){return console.error("Error verifying OTP:",r),!1}}static async updateDeliveryLocation(e,n,r){try{const s=Date.now(),i=10*60*1e3;if(!this.lastDeliveryFirestoreWrite[e]||s-this.lastDeliveryFirestoreWrite[e]>=i){const f=ee.now(),{ms:m,lesothoISO:_}=au();await Ut(We(ye,"deliveries",e),{currentLocation:{lat:n,lng:r,timestamp:f,timestampISO:_,timestampMs:m,timezone:"SAST"}}),this.lastDeliveryFirestoreWrite[e]=s,console.log(`📝 Delivery ${e} Firestore location updated (Lesotho time)`)}const a={lat:n,lng:r,timestamp:Date.now()},l=this.appendRoutePoint(e,a);await this.persistActiveRouteHistory(e,l);const u=this.lastRouteSnapshotAtMs[e]||0;(l.length>=this.ROUTE_SNAPSHOT_POINTS||Date.now()-u>=this.ROUTE_SNAPSHOT_INTERVAL_MS)&&await this.flushRouteSnapshot(e,"periodic");try{const{ms:f,utcISO:m,lesothoISO:_}=au(),S=cr(ji,`deliveryTracks/${e}`);await no(S,{lat:n,lng:r,timestamp:f,timestampISO:_,timestampMs:f,timestampUtcISO:m,timezone:"SAST"});const A=cr(ji,`deliveryRouteBuffer/${e}/${f}`);await no(A,{lat:n,lng:r,timestamp:f,timestampISO:_,timestampUtcISO:m,timezone:"SAST"});try{iE(S).remove()}catch{}}catch(f){console.warn("RTDB write failed for delivery track:",f)}return!0}catch(s){return console.error("Error updating delivery location:",s),!1}}static subscribeToActiveDelivery(e){const n=Ie.currentUser;if(!n)return()=>{};const r=xn(un(ye,"deliveries"),nt("carrierId","==",n.uid),nt("status","in",["assigned","picked_up","in_transit","out_for_delivery"]));return sl(r,i=>{if(i.empty)e(null);else{const o=i.docs[0].data();e({id:i.docs[0].id,...o})}})}static async getAvailableTasks(){try{if(!Ie.currentUser)return[];const n=xn(un(ye,"deliveries"),nt("status","==","pending"),nt("carrierId","==",null),Ys("createdAt","desc"));return(await Hs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching available tasks:",e),[]}}static subscribeToAvailableTasks(e){const n=xn(un(ye,"deliveries"),nt("status","==","pending"),nt("carrierId","==",null),Ys("createdAt","desc"));return sl(n,s=>{const i=s.docs.map(o=>({id:o.id,...o.data()}));e(i)})}static async acceptTask(e){try{const n=Ie.currentUser;if(!n)return!1;const r=We(ye,"deliveries",e);return await Ut(r,{carrierId:n.uid,carrierEmail:n.email,carrierName:n.displayName||"",carrierPhone:n.phoneNumber||"",status:"accepted",assignedAt:ee.now(),acceptedAt:ee.now(),updatedAt:ee.now()}),await Ut(We(ye,"users",n.uid),{status:"busy",updatedAt:ee.now()}),!0}catch(n){return console.error("Error accepting task:",n),!1}}static async getAssignedDeliveries(){try{const e=Ie.currentUser;if(!e)return[];const n=xn(un(ye,"deliveries"),nt("carrierId","==",e.uid),nt("status","==","assigned"),Ys("assignedAt","desc"));return(await Hs(n)).docs.map(s=>({id:s.id,...s.data()}))}catch(e){return console.error("Error fetching assigned deliveries:",e),[]}}static async acceptAssignedDelivery(e,n){try{if(!Ie.currentUser)return!1;if(!n)return console.error("Location sharing required to accept delivery"),!1;const s=We(ye,"deliveries",e);return await Ut(s,{status:"accepted",acceptedAt:ee.now(),updatedAt:ee.now()}),!0}catch(r){return console.error("Error accepting assigned delivery:",r),!1}}static async declineAssignedDelivery(e){try{if(!Ie.currentUser)return!1;const r=We(ye,"deliveries",e);return await Ut(r,{status:"pending",carrierId:null,carrierEmail:null,carrierName:null,carrierPhone:null,assignedAt:null,updatedAt:ee.now()}),!0}catch(n){return console.error("Error declining assigned delivery:",n),!1}}static subscribeToAssignedDeliveries(e){const n=Ie.currentUser;if(!n)return()=>{};const r=xn(un(ye,"deliveries"),nt("carrierId","==",n.uid),nt("status","==","assigned"),Ys("assignedAt","desc"));return sl(r,i=>{const o=i.docs.map(a=>({id:a.id,...a.data()}));e(o)})}static async updateShareLocation(e){try{const n=Ie.currentUser;return n?(await Ut(We(ye,"users",n.uid),{shareLocation:e,updatedAt:ee.now()}),!0):!1}catch(n){return console.error("Error updating share location:",n),!1}}static subscribeToLocationUpdates(e){return this.locationUpdateCallbacks.add(e),()=>{this.locationUpdateCallbacks.delete(e)}}static notifyLocationUpdate(e){this.locationUpdateCallbacks.forEach(n=>n(e))}static startLocationSharing(e){if(!navigator.geolocation)return console.error("Geolocation is not supported"),!1;if(this.gpsWatchId!==null)return console.log("GPS tracking already active"),!0;console.log("📍 Starting GPS tracking");const n=(r=!0)=>{navigator.geolocation.getCurrentPosition(async s=>{const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!pp(i,this.lastSavedLocation)){console.warn("Initial position failed validation, attempting fallback..."),r&&n(!1);return}console.log(`✅ Initial position (${r?"high":"low"} accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${i.accuracy.toFixed(0)}m`),this.notifyLocationUpdate(i);try{await this.updateLocation(i.lat,i.lng)}catch(o){console.error("Immediate location update failed:",o)}},s=>{r&&s.code===3?(console.warn("High accuracy initial position timeout, trying with low accuracy..."),n(!1)):console.warn("getCurrentPosition failed:",s)},{enableHighAccuracy:r,timeout:1e4,maximumAge:0})};try{n()}catch(r){console.warn("Immediate position request failed:",r)}return this.gpsWatchId=navigator.geolocation.watchPosition(async r=>{var a;const s={lat:r.coords.latitude,lng:r.coords.longitude,timestamp:new Date,accuracy:r.coords.accuracy};if(!pp(s,this.lastSavedLocation))return;console.log(`📍 New position: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}, accuracy: ${((a=s.accuracy)==null?void 0:a.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(s);let i=!1;const o=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),i=!0;else{const l=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,s.lat,s.lng);console.log(`📏 Distance from last saved: ${l.toFixed(0)}m (threshold: ${ou}m)`);const u=s.accuracy&&s.accuracy>1e3,h=u?0:ou,f=u?1e4:pE;l>h&&(i=!0,console.log("✅ Distance threshold exceeded")),!i&&this.lastSavedTime&&o-this.lastSavedTime>=f&&(console.log(`⏱️ Time threshold reached (${(o-this.lastSavedTime)/1e3}s >= ${f/1e3}s)`),i=!0)}if(i){console.log(`✅ Updating location: ${s.lat.toFixed(5)}, ${s.lng.toFixed(5)}`);try{await this.updateLocation(s.lat,s.lng)}catch(l){console.error("Failed to update location:",l)}if(e)try{await this.updateDeliveryLocation(e,s.lat,s.lng)}catch(l){console.error("Failed to update delivery location:",l)}this.lastSavedLocation={lat:s.lat,lng:s.lng},this.lastSavedTime=o}else console.log("⏭️ Skipping update (thresholds not met)")},r=>{console.error("Geolocation error (high accuracy):",r),r.code===3?(console.warn("High accuracy timeout, retrying with lower accuracy..."),this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.gpsWatchId=navigator.geolocation.watchPosition(async s=>{var l;const i={lat:s.coords.latitude,lng:s.coords.longitude,timestamp:new Date,accuracy:s.coords.accuracy};if(!pp(i,this.lastSavedLocation))return;console.log(`📍 New position (low accuracy): ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}, accuracy: ${((l=i.accuracy)==null?void 0:l.toFixed(0))??"unknown"}m`),this.notifyLocationUpdate(i);let o=!1;const a=Date.now();if(!this.lastSavedLocation)console.log("✅ First position, saving immediately"),o=!0;else{const u=Pu(this.lastSavedLocation.lat,this.lastSavedLocation.lng,i.lat,i.lng);console.log(`📏 Distance from last saved: ${u.toFixed(0)}m (threshold: ${ou}m)`);const h=i.accuracy&&i.accuracy>1e3,f=h?0:ou,m=h?1e4:pE;u>f&&(o=!0,console.log("✅ Distance threshold exceeded")),!o&&this.lastSavedTime&&a-this.lastSavedTime>=m&&(console.log(`⏱️ Time threshold reached (${(a-this.lastSavedTime)/1e3}s >= ${m/1e3}s)`),o=!0)}if(o){console.log(`✅ Updating location: ${i.lat.toFixed(5)}, ${i.lng.toFixed(5)}`);try{await this.updateLocation(i.lat,i.lng)}catch(u){console.error("Failed to update location:",u)}if(e)try{await this.updateDeliveryLocation(e,i.lat,i.lng)}catch(u){console.error("Failed to update delivery location:",u)}this.lastSavedLocation={lat:i.lat,lng:i.lng},this.lastSavedTime=a}else console.log("⏭️ Skipping update (thresholds not met)")},s=>{console.error("Low accuracy geolocation also failed:",s),this.stopLocationSharing()},{enableHighAccuracy:!1,timeout:15e3,maximumAge:0})):this.stopLocationSharing()},{enableHighAccuracy:!0,timeout:15e3,maximumAge:0}),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),!0}static stopLocationSharing(){return this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null,console.log("📍 Stopped GPS tracking")),(async()=>{try{const e=Ie.currentUser;if(!e)return;const n=cr(ji,`tracks/${e.uid}`),r=await dp(n);if(r&&r.exists()){const s=r.val(),i=s.timestampMs||s.timestamp||Date.now(),o=s.timestampISO||new Date(i).toISOString();try{await Ut(We(ye,"users",e.uid),{currentLocation:{lat:s.lat,lng:s.lng,timestamp:ee.fromDate(new Date(i)),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST"},lastActive:ee.now(),updatedAt:ee.now(),shareLocation:!1,status:"inactive"}),console.log("🗄️ Persisted last RTDB location to Firestore (on stop)");try{await no(n,{...s,timestamp:Date.now(),timestampISO:o,timestampMs:i,timezone:s.timezone||"SAST",status:"inactive"})}catch(a){console.warn("Could not update RTDB track to inactive:",a)}}catch(a){console.error("Error writing last RTDB location to Firestore:",a)}}else console.log("ℹ️ No RTDB track found to persist on stop")}catch(e){console.error("Error reading RTDB on stopLocationSharing:",e)}})(),this.lastSavedLocation=null,this.lastSavedTime=null,this.notifyLocationUpdate(null),this.offlineTimeoutId&&clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=setTimeout(()=>{console.log("15 minutes offline, auto-disabling location sharing"),this.updateShareLocation(!1),this.offlineTimeoutId=null},this.OFFLINE_TIMEOUT_MS),!0}static isLocationSharingActive(){return this.gpsWatchId!==null}static stopAllTracking(){this.gpsWatchId!==null&&(navigator.geolocation.clearWatch(this.gpsWatchId),this.gpsWatchId=null),this.offlineTimeoutId&&(clearTimeout(this.offlineTimeoutId),this.offlineTimeoutId=null),this.locationUpdateCallbacks.clear()}static async getTodayStats(){try{const e=Ie.currentUser;if(!e)return{earnings:0,deliveries:0};const n=new Date;n.setHours(0,0,0,0);const r=xn(un(ye,"deliveries"),nt("carrierId","==",e.uid),nt("status","==","delivered"),nt("deliveryTime",">=",ee.fromDate(n))),s=await Hs(r);return{earnings:s.docs.reduce((o,a)=>{const l=a.data();return o+(l.earnings||0)},0),deliveries:s.docs.length}}catch(e){return console.error("Error fetching today stats:",e),{earnings:0,deliveries:0}}}static async getLocationPreferRealtime(e){try{const n=await dp(cr(ji,`tracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,accuracy:s.accuracy,timezone:s.timezone||"SAST"}}const r=await kd(We(ye,"users",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,accuracy:i.accuracy,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (user):",n),null}}static async getDeliveryLocationPreferRealtime(e){try{const n=await dp(cr(ji,`deliveryTracks/${e}`));if(n&&n.exists()){const s=n.val();return{lat:s.lat,lng:s.lng,timestamp:s.timestampISO?new Date(s.timestampISO):new Date(s.timestamp||Date.now()),timestampLesotho:s.timestampISO,timezone:s.timezone||"SAST"}}const r=await kd(We(ye,"deliveries",e));if(r.exists()){const i=r.data().currentLocation;if(i&&i.lat!==void 0&&i.lng!==void 0){const o=i.timestampISO?new Date(i.timestampISO):i.timestamp&&i.timestamp.toDate?i.timestamp.toDate():new Date;return{lat:i.lat,lng:i.lng,timestamp:o,timestampLesotho:i.timestampISO,timezone:i.timezone||"SAST"}}}return null}catch(n){return console.error("Error fetching preferred location (delivery):",n),null}}}pt(le,"lastFirestoreWrite",{}),pt(le,"lastDeliveryFirestoreWrite",{}),pt(le,"routeBuffers",{}),pt(le,"lastRouteSnapshotAtMs",{}),pt(le,"lastRoutePersistAtMs",{}),pt(le,"gpsWatchId",null),pt(le,"lastSavedLocation",null),pt(le,"lastSavedTime",null),pt(le,"offlineTimeoutId",null),pt(le,"locationUpdateCallbacks",new Set),pt(le,"OFFLINE_TIMEOUT_MS",15*60*1e3),pt(le,"ROUTE_SNAPSHOT_INTERVAL_MS",2*60*1e3),pt(le,"ROUTE_PERSIST_INTERVAL_MS",15*1e3),pt(le,"ROUTE_SNAPSHOT_POINTS",30),pt(le,"ROUTE_MIN_POINT_DISTANCE_M",8);const YN=t=>{const[e,n]=O.useState(()=>le.isLocationSharingActive()),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState(0),u=()=>{const m=le.startLocationSharing(t);return m&&(n(!0),o(null)),m},h=()=>{le.stopLocationSharing(),n(!1)},f=()=>{e?h():u()};return O.useEffect(()=>{const m=le.subscribeToLocationUpdates(_=>{_&&(s(_),l(_.accuracy||0))});return()=>{m()}},[]),{isSharing:e,lastLocation:r,error:i,accuracy:a,startSharing:u,stopSharing:h,toggleSharing:f}},gU=()=>{const[t,e]=O.useState({todayEarnings:0,todayDeliveries:0,totalEarnings:0,totalDeliveries:0,rating:0,status:"inactive"}),[n,r]=O.useState(!0);return O.useEffect(()=>{const s=Ie.currentUser;if(!s){r(!1);return}const i=async()=>{const a=await le.getTodayStats();e(l=>({...l,todayEarnings:a.earnings,todayDeliveries:a.deliveries}))},o=sl(We(ye,"users",s.uid),a=>{if(a.exists()){const l=a.data();e(u=>({...u,totalEarnings:l.earnings||0,totalDeliveries:l.completedDeliveries||0,rating:l.rating||0,status:l.status||"inactive"})),r(!1)}});return i(),()=>o()},[]),{stats:t,loading:n}},ro=t=>t==null||Number.isNaN(t)?"M0.00":`M${t.toFixed(2)}`,_U=t=>t?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Not yet",Jm=t=>t?t.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}):"N/A",yU=t=>{switch(t){case"delivered":return"bg-green-100 text-green-800";case"in_transit":return"bg-blue-100 text-blue-800";case"picked_up":return"bg-yellow-100 text-yellow-800";case"assigned":return"bg-purple-100 text-purple-800";case"pending":return"bg-gray-100 text-gray-800";default:return"bg-gray-100 text-gray-800"}},vU=t=>{switch(t){case"delivered":return"fa-solid fa-circle-check";case"in_transit":return"fa-solid fa-truck";case"picked_up":return"fa-solid fa-box";case"assigned":return"fa-solid fa-user";case"pending":return"fa-regular fa-clock";default:return"fa-regular fa-clipboard"}},gE=t=>({pending:10,assigned:30,accepted:40,picked_up:50,in_transit:70,out_for_delivery:90,delivered:100,cancelled:0})[t.status]||0;let wU={data:""},xU=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||wU},EU=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,TU=/\/\*[^]*?\*\/|  +/g,_E=/\n+/g,Zr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Zr(o,i):i+"{"+Zr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Zr(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Zr.p?Zr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},ir={},JN=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+JN(t[n]);return e}return t},IU=(t,e,n,r,s)=>{let i=JN(t),o=ir[i]||(ir[i]=(l=>{let u=0,h=11;for(;u<l.length;)h=101*h+l.charCodeAt(u++)>>>0;return"go"+h})(i));if(!ir[o]){let l=i!==t?t:(u=>{let h,f,m=[{}];for(;h=EU.exec(u.replace(TU,""));)h[4]?m.shift():h[3]?(f=h[3].replace(_E," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(_E," ").trim();return m[0]})(t);ir[o]=Zr(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&ir.g?ir.g:null;return n&&(ir.g=ir[o]),((l,u,h,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=h?l+u.data:u.data+l)})(ir[o],e,r,a),o},SU=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Zr(a,""):a===!1?"":a}return r+s+(o??"")},"");function Kh(t){let e=this||{},n=t.call?t(e.p):t;return IU(n.unshift?n.raw?SU(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,xU(e.target),e.g,e.o,e.k)}let XN,Xm,Zm;Kh.bind({g:1});let Rr=Kh.bind({k:1});function bU(t,e,n,r){Zr.p=e,XN=t,Xm=n,Zm=r}function Us(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Xm&&Xm()},a),n.o=/ *go\d+/.test(l),a.className=Kh.apply(n,r)+(l?" "+l:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),Zm&&u[0]&&Zm(a),XN(u,a)}return s}}var CU=t=>typeof t=="function",zd=(t,e)=>CU(t)?t(e):t,NU=(()=>{let t=0;return()=>(++t).toString()})(),ZN=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),AU=20,Ry="default",e1=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return e1(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Du=[],t1={toasts:[],pausedAt:void 0,settings:{toastLimit:AU}},zn={},n1=(t,e=Ry)=>{zn[e]=e1(zn[e]||t1,t),Du.forEach(([n,r])=>{n===e&&r(zn[e])})},r1=t=>Object.keys(zn).forEach(e=>n1(t,e)),kU=t=>Object.keys(zn).find(e=>zn[e].toasts.some(n=>n.id===t)),Qh=(t=Ry)=>e=>{n1(e,t)},RU={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},PU=(t={},e=Ry)=>{let[n,r]=O.useState(zn[e]||t1),s=O.useRef(zn[e]);O.useEffect(()=>(s.current!==zn[e]&&r(zn[e]),Du.push([e,r]),()=>{let o=Du.findIndex(([a])=>a===e);o>-1&&Du.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||RU[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:i}},DU=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||NU()}),wc=t=>(e,n)=>{let r=DU(e,t,n);return Qh(r.toasterId||kU(r.id))({type:2,toast:r}),r.id},Y=(t,e)=>wc("blank")(t,e);Y.error=wc("error");Y.success=wc("success");Y.loading=wc("loading");Y.custom=wc("custom");Y.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Qh(e)(n):r1(n)};Y.dismissAll=t=>Y.dismiss(void 0,t);Y.remove=(t,e)=>{let n={type:4,toastId:t};e?Qh(e)(n):r1(n)};Y.removeAll=t=>Y.remove(void 0,t);Y.promise=(t,e,n)=>{let r=Y.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?zd(e.success,s):void 0;return i?Y.success(i,{id:r,...n,...n==null?void 0:n.success}):Y.dismiss(r),s}).catch(s=>{let i=e.error?zd(e.error,s):void 0;i?Y.error(i,{id:r,...n,...n==null?void 0:n.error}):Y.dismiss(r)}),t};var OU=1e3,LU=(t,e="default")=>{let{toasts:n,pausedAt:r}=PU(t,e),s=O.useRef(new Map).current,i=O.useCallback((f,m=OU)=>{if(s.has(f))return;let _=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,_)},[]);O.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let S=(_.duration||0)+_.pauseDuration-(f-_.createdAt);if(S<0){_.visible&&Y.dismiss(_.id);return}return setTimeout(()=>Y.dismiss(_.id,e),S)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=O.useCallback(Qh(e),[e]),a=O.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=O.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=O.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=O.useCallback((f,m)=>{let{reverseOrder:_=!1,gutter:S=8,defaultPosition:A}=m||{},P=n.filter(C=>(C.position||A)===(f.position||A)&&C.height),I=P.findIndex(C=>C.id===f.id),E=P.filter((C,k)=>k<I&&C.visible).length;return P.filter(C=>C.visible).slice(..._?[E+1]:[0,E]).reduce((C,k)=>C+(k.height||0)+S,0)},[n]);return O.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:h}}},jU=Rr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,MU=Rr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,VU=Rr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,FU=Us("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${MU} 0.15s ease-out forwards;
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
    animation: ${VU} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,UU=Rr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,$U=Us("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${UU} 1s linear infinite;
`,BU=Rr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,zU=Rr`
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
}`,WU=Us("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${BU} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${zU} 0.2s ease-out forwards;
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
`,qU=Us("div")`
  position: absolute;
`,HU=Us("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,GU=Rr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,KU=Us("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${GU} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,QU=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?O.createElement(KU,null,e):e:n==="blank"?null:O.createElement(HU,null,O.createElement($U,{...r}),n!=="loading"&&O.createElement(qU,null,n==="error"?O.createElement(FU,{...r}):O.createElement(WU,{...r})))},YU=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,JU=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,XU="0%{opacity:0;} 100%{opacity:1;}",ZU="0%{opacity:1;} 100%{opacity:0;}",e5=Us("div")`
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
`,t5=Us("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,n5=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=ZN()?[XU,ZU]:[YU(n),JU(n)];return{animation:e?`${Rr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Rr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},r5=O.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?n5(t.position||e||"top-center",t.visible):{opacity:0},i=O.createElement(QU,{toast:t}),o=O.createElement(t5,{...t.ariaProps},zd(t.message,t));return O.createElement(e5,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):O.createElement(O.Fragment,null,i,o))});bU(O.createElement);var s5=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=O.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return O.createElement("div",{ref:i,className:e,style:n},s)},i5=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ZN()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},o5=Kh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,lu=16,Yh=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=LU(n,i);return O.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:lu,left:lu,right:lu,bottom:lu,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(h=>{let f=h.position||e,m=u.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),_=i5(f,m);return O.createElement(s5,{id:h.id,key:h.id,onHeightUpdate:u.updateHeight,className:h.visible?o5:"",style:_},h.type==="custom"?zd(h.message,h):s?s(h):O.createElement(r5,{toast:h,position:f}))}))};function yE({user:t,onNavigate:e}){var z,K;const n=Jg(),[r,s]=O.useState(null),[i,o]=O.useState(null),[a,l]=O.useState([]),[u,h]=O.useState(!0),[f,m]=O.useState(!1),[_,S]=O.useState(""),[A,P]=O.useState(!1),[I,E]=O.useState("inactive"),[C,k]=O.useState(!1),{stats:M,loading:F}=gU(),{isSharing:x,lastLocation:y,error:b,accuracy:w,toggleSharing:N,startSharing:R}=YN(i==null?void 0:i.id);O.useEffect(()=>{(async()=>{h(!0);try{const me=await le.getCarrierProfile();s(me),me!=null&&me.status&&E(me.status),me!=null&&me.shareLocation&&!x&&(console.log("🔄 Restoring location sharing from profile..."),R());const cn=await le.getActiveDelivery();o(cn);const Rt=await le.getDeliveries(5);l(Rt)}catch(me){console.error("Error loading data:",me),Y.error("Failed to load data")}finally{h(!1)}})();const pe=le.subscribeToActiveDelivery(o);return()=>pe()},[]);const T=async q=>{if(i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)&&q==="inactive"){Y.error("Cannot go offline while on a delivery");return}if(q==="busy"&&(i==null?void 0:i.status)!=="accepted"){Y.error("Cannot mark as on delivery without accepting the job first");return}try{await le.updateCarrierStatus(q,i==null?void 0:i.id)?(E(q),Y.success(`Status updated to ${q}`)):Y.error("Failed to update status")}catch(pe){console.error("Error updating status:",pe),Y.error("Failed to update status")}},se=async()=>{if(i)try{const q=Math.floor(1e3+Math.random()*9e3).toString();await le.updateDeliveryStatus(i.id,"picked_up",q)?(S(q),m(!0),Y.success("Package picked up. OTP generated.")):Y.error("Failed to update delivery status")}catch(q){console.error("Error picking up package:",q),Y.error("Failed to pick up package")}},Ae=async()=>{if(!(!i||!_))try{await le.verifyOTP(i.id,_)?(Y.success("OTP verified. Delivery completed."),m(!1),S(""),o(null)):Y.error("Invalid OTP code")}catch(q){console.error("Error verifying OTP:",q),Y.error("Failed to verify OTP")}},ie=async()=>{try{x&&N(),await rO(Ie),n("/login")}catch(q){console.error("Logout error:",q),Y.error("Failed to logout")}},at=i&&i.status!=="assigned";return u||F?d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center",children:d.jsxs("div",{className:"text-center",children:[d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"w-20 h-20 border-4 border-purple-300 border-t-indigo-600 rounded-full animate-spin mx-auto shadow-lg"}),d.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:d.jsx("div",{className:"w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse"})})]}),d.jsx("p",{className:"mt-6 text-gray-700 font-semibold text-lg",children:"Loading your dashboard..."})]})}):d.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",children:[d.jsx(Yh,{position:"top-center",toastOptions:{duration:4e3,style:{background:"#363636",color:"#fff",borderRadius:"12px",padding:"16px"},success:{style:{background:"#10b981"},iconTheme:{primary:"#fff",secondary:"#10b981"}},error:{style:{background:"#ef4444"}}}}),!x&&d.jsx("div",{className:"bg-gradient-to-r from-rose-100 via-red-100 to-orange-100 border-b-2 border-red-300 shadow-md",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",children:d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"font-bold text-red-900",children:"You are Offline"}),d.jsx("p",{className:"text-sm text-red-700 font-medium",children:"Location sharing is disabled. Enable it to accept jobs and be visible to coordinators."})]}),d.jsx("button",{onClick:()=>P(!0),className:"px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl text-sm font-bold hover:from-red-700 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105",children:"Enable Now"})]})})}),d.jsx("header",{className:"bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white sticky top-0 z-40 shadow-2xl border-b-2 border-purple-600",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-4",children:[d.jsxs("div",{children:[d.jsx("h1",{className:"text-3xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg",children:"PTROS Carrier"}),d.jsxs("p",{className:"text-sm text-purple-200 mt-1 font-semibold",children:["Welcome back,"," ",(r==null?void 0:r.fullName)||((z=t.email)==null?void 0:z.split("@")[0])]})]}),d.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[d.jsxs("div",{className:`flex items-center gap-2 px-5 py-2.5 rounded-xl shadow-lg ${x?"bg-gradient-to-r from-green-400 to-emerald-500":"bg-gradient-to-r from-red-400 to-rose-500"}`,children:[d.jsx("div",{className:`w-3 h-3 rounded-full shadow-md ${x?"bg-white animate-pulse":"bg-white"}`}),d.jsx("span",{className:"text-sm font-bold text-white",children:x?"Online":"Offline"})]}),d.jsxs("button",{onClick:()=>P(!0),className:`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-xl ${x?"bg-gradient-to-r from-yellow-300 to-yellow-400 text-purple-900 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105":"bg-white/20 text-white border-2 border-white/40 hover:bg-white/30 backdrop-blur-sm"}`,children:[d.jsx("i",{className:`fa-solid ${x?"fa-location-dot":"fa-location-crosshairs"} mr-2`}),x?"Sharing Location":"Share Location"]}),d.jsxs("button",{onClick:ie,className:"px-5 py-2.5 bg-white/20 text-white rounded-xl text-sm font-bold border-2 border-white/40 hover:bg-white/30 transition-all shadow-lg backdrop-blur-sm",children:[d.jsx("i",{className:"fa-solid fa-sign-out-alt mr-2"}),"Logout"]})]})]})})}),d.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[d.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",children:[d.jsx("div",{className:"bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-cyan-500/50 border-2 border-cyan-400/30",children:d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-blue-100 text-sm font-medium uppercase tracking-wider",children:"Today's Earnings"}),d.jsx("p",{className:"text-3xl font-bold mt-2",children:ro(M.todayEarnings)}),d.jsx("p",{className:"text-blue-100 text-xs mt-2",children:"Live tracked"})]}),d.jsx("div",{className:"bg-white/20 rounded-xl p-3",children:d.jsx("i",{className:"fa-solid fa-wallet text-2xl"})})]})}),d.jsx("div",{className:"bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-green-500/50 border-2 border-emerald-400/30",children:d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-green-100 text-sm font-medium uppercase tracking-wider",children:"Today's Deliveries"}),d.jsx("p",{className:"text-3xl font-bold mt-2",children:M.todayDeliveries}),d.jsx("p",{className:"text-green-100 text-xs mt-2",children:"Completed"})]}),d.jsx("div",{className:"bg-white/20 rounded-xl p-3",children:d.jsx("i",{className:"fa-solid fa-truck-fast text-2xl"})})]})}),d.jsx("div",{className:"bg-gradient-to-br from-fuchsia-500 via-purple-600 to-violet-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-purple-500/50 border-2 border-fuchsia-400/30",children:d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-purple-100 text-sm font-medium uppercase tracking-wider",children:"Total Earnings"}),d.jsx("p",{className:"text-3xl font-bold mt-2",children:ro(M.totalEarnings)}),d.jsx("p",{className:"text-purple-100 text-xs mt-2",children:"Lifetime"})]}),d.jsx("div",{className:"bg-white/20 rounded-xl p-3",children:d.jsx("i",{className:"fa-solid fa-chart-line text-2xl"})})]})}),d.jsx("div",{className:"bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all hover:shadow-amber-500/50 border-2 border-yellow-400/30",children:d.jsxs("div",{className:"flex items-start justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-amber-100 text-sm font-medium uppercase tracking-wider",children:"Rating"}),d.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[d.jsx("span",{className:"text-3xl font-bold",children:M.rating.toFixed(1)}),d.jsx("i",{className:"fa-solid fa-star text-amber-200 text-xl"})]}),d.jsx("p",{className:"text-amber-100 text-xs mt-2",children:"Customer score"})]}),d.jsx("div",{className:"bg-white/20 rounded-xl p-3",children:d.jsx("i",{className:"fa-solid fa-face-smile text-2xl"})})]})})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6",children:[d.jsx("div",{className:"lg:col-span-1",children:d.jsxs("div",{className:"bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-2xl p-6 sticky top-24 border-2 border-purple-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{children:[d.jsxs("h2",{className:"text-lg font-bold text-gray-800 flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-signal text-blue-600"}),"Your Status"]}),d.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Control your availability"})]}),d.jsxs("div",{className:`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 ${I==="active"?"bg-green-100 text-green-700 border border-green-200":I==="busy"?"bg-amber-100 text-amber-700 border border-amber-200":"bg-gray-100 text-gray-700 border border-gray-200"}`,children:[d.jsx("div",{className:`w-2 h-2 rounded-full ${I==="active"?"bg-green-500":I==="busy"?"bg-amber-500":"bg-gray-500"}`}),I==="active"?"Available":I==="busy"?"On Delivery":"Offline"]})]}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("button",{onClick:()=>T("active"),className:`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${I==="active"?"bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-2xl shadow-blue-500/50 transform scale-105":"bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md"}`,children:[d.jsx("i",{className:"fa-solid fa-bolt"}),"Available"]}),d.jsxs("button",{onClick:()=>T("busy"),className:`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${I==="busy"?"bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white shadow-2xl shadow-amber-500/50 transform scale-105":"bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md"}`,children:[d.jsx("i",{className:"fa-solid fa-truck-moving"}),"On Delivery"]}),d.jsxs("button",{onClick:()=>T("inactive"),disabled:!!(i&&["picked_up","in_transit","out_for_delivery"].includes(i.status)),className:`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${I==="inactive"?"bg-gradient-to-r from-rose-600 via-red-600 to-red-700 text-white shadow-2xl shadow-red-500/50 transform scale-105":"bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 border-2 border-gray-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"}`,children:[d.jsx("i",{className:"fa-solid fa-moon"}),"Offline"]})]}),I==="inactive"&&d.jsx("div",{className:"mt-4 p-4 bg-gradient-to-r from-red-50 to-rose-100 border-2 border-red-300 rounded-xl shadow-lg",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("i",{className:"fa-solid fa-circle-exclamation text-red-600 mt-0.5 text-xl"}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm font-bold text-red-900",children:"You are Offline"}),d.jsx("p",{className:"text-xs text-red-700 mt-1 font-semibold",children:"You won't receive new job assignments while offline."})]})]})})]})}),d.jsx("div",{className:"lg:col-span-2",children:i?d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200",children:[d.jsxs("div",{className:"bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-6 text-white shadow-lg",children:[d.jsxs("div",{className:"flex flex-wrap items-start justify-between gap-4",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-xl font-bold",children:"Active Delivery"}),d.jsxs("p",{className:"text-blue-100 text-sm mt-1",children:["Status: ",i.status.replace("_"," ")]}),d.jsxs("div",{className:"flex flex-wrap gap-3 mt-4",children:[d.jsxs("span",{className:"px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-barcode"}),i.trackingCode]}),d.jsxs("span",{className:"px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-wallet"}),ro(i.earnings||i.estimatedEarnings||0)]}),d.jsxs("span",{className:"px-3 py-1.5 bg-white/20 rounded-lg text-sm flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-route"}),((K=i.route)==null?void 0:K.distance)||"--"," km"]})]})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2 text-sm backdrop-blur-sm",children:[d.jsx("div",{className:"w-2 h-2 bg-green-300 rounded-full animate-pulse"}),d.jsx("span",{children:"Live Tracking Active"})]})]}),d.jsx("div",{className:"mt-4",children:d.jsx("button",{onClick:()=>window.open(`/g/track/${i.id}`,"_blank","noopener,noreferrer"),className:"px-4 py-2 bg-cyan-500/90 text-white rounded-lg text-sm font-semibold hover:bg-cyan-500",children:"Live Track"})}),d.jsxs("div",{className:"mt-6",children:[d.jsxs("div",{className:"flex justify-between text-sm mb-2",children:[d.jsx("span",{className:"text-blue-100",children:"Delivery Progress"}),d.jsxs("span",{className:"font-semibold",children:[gE(i),"%"]})]}),d.jsx("div",{className:"w-full bg-white/20 rounded-full h-2.5",children:d.jsx("div",{className:"bg-gradient-to-r from-green-400 to-green-500 h-2.5 rounded-full transition-all duration-500",style:{width:`${gE(i)}%`}})})]})]}),d.jsxs("div",{className:"p-6",children:[i.status==="assigned"&&d.jsx("div",{className:"mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("i",{className:"fa-regular fa-clock text-amber-600 text-lg"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"font-semibold text-amber-800",children:"New Job Assignment"}),d.jsx("p",{className:"text-sm text-amber-700 mt-1",children:"This job has been assigned to you. Accept it to proceed with delivery."}),d.jsx("button",{onClick:()=>e==null?void 0:e("tasks"),className:"mt-3 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors",children:"Go to Tasks to Accept"})]})]})}),d.jsxs("div",{className:"space-y-4 mb-6",children:[d.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-xl border-2 ${["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?"border-green-200 bg-green-50":"border-gray-200"}`,children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-green-500 text-white":"bg-gray-200 text-gray-500"}`,children:["accepted","picked_up","in_transit","out_for_delivery","delivered"].includes(i.status)?d.jsx("i",{className:"fa-solid fa-check"}):"1"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-semibold text-gray-800",children:"Pickup Location"}),d.jsx("p",{className:"text-sm text-gray-600 mt-1",children:i.pickupAddress})]}),i.status==="accepted"&&d.jsx("button",{onClick:se,className:"px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md",children:"Mark as Picked Up"})]}),d.jsxs("div",{className:`flex items-start gap-4 p-4 rounded-xl border-2 ${["in_transit","out_for_delivery","delivered"].includes(i.status)?"border-green-200 bg-green-50":"border-gray-200"}`,children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${["in_transit","out_for_delivery","delivered"].includes(i.status)?"bg-green-500 text-white":"bg-gray-200 text-gray-500"}`,children:["in_transit","out_for_delivery","delivered"].includes(i.status)?d.jsx("i",{className:"fa-solid fa-check"}):"2"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"font-semibold text-gray-800",children:"Delivery Location"}),d.jsx("p",{className:"text-sm text-gray-600 mt-1",children:i.deliveryAddress})]}),i.status==="picked_up"&&d.jsx("button",{onClick:()=>m(!0),className:"px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg text-sm font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-md",children:"Confirm Delivery"})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-xl p-4 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsx("h4",{className:"font-semibold text-gray-800",children:"Package Details"}),d.jsxs("span",{className:"text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"}),"Notes"]})]}),d.jsx("p",{className:"text-sm text-gray-700",children:i.packageDescription}),i.deliveryInstructions&&d.jsxs("div",{className:"mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg text-sm text-blue-700 flex items-start gap-2",children:[d.jsx("i",{className:"fa-solid fa-lightbulb mt-0.5"}),d.jsx("span",{children:i.deliveryInstructions})]})]})]})]}):d.jsxs("div",{className:"bg-gradient-to-br from-white via-purple-50 to-pink-50 rounded-2xl shadow-2xl p-12 text-center border-2 border-purple-200",children:[d.jsx("div",{className:"w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 rounded-full flex items-center justify-center shadow-lg",children:d.jsx("i",{className:"fa-solid fa-box-open text-4xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"})}),d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-3",children:"No Active Deliveries"}),d.jsx("p",{className:"text-gray-500 mb-8 max-w-md mx-auto",children:I==="active"?"You're available! Browse available tasks to get started with your first delivery.":"Set your status to available to start receiving delivery assignments."}),d.jsxs("div",{className:"flex flex-wrap gap-4 justify-center",children:[I!=="active"&&d.jsxs("button",{onClick:()=>T("active"),className:"px-6 py-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105",children:[d.jsx("i",{className:"fa-solid fa-bolt mr-2"}),"Go Available"]}),I==="active"&&e&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:()=>e("tasks"),className:"px-6 py-3 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white rounded-xl font-bold hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transition-all shadow-2xl hover:shadow-green-500/50 transform hover:scale-105",children:[d.jsx("i",{className:"fa-solid fa-list-check mr-2"}),"View Available Tasks"]}),d.jsxs("button",{onClick:()=>e("deliveries"),className:"px-6 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-violet-600 text-white rounded-xl font-bold hover:from-fuchsia-700 hover:via-purple-700 hover:to-violet-700 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105",children:[d.jsx("i",{className:"fa-solid fa-clock-rotate-left mr-2"}),"View My Deliveries"]})]})]})]})})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-purple-200",children:[d.jsx("div",{className:"bg-gradient-to-r from-slate-800 via-gray-900 to-zinc-900 px-6 py-4 shadow-md",children:d.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-clock-rotate-left"}),"Recent Deliveries"]})}),a.length===0?d.jsxs("div",{className:"p-12 text-center",children:[d.jsx("div",{className:"w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center",children:d.jsx("i",{className:"fa-regular fa-inbox text-2xl text-gray-400"})}),d.jsx("p",{className:"text-gray-500",children:"No completed deliveries yet"})]}):d.jsx("div",{className:"divide-y divide-gray-100",children:a.map(q=>{var pe;return d.jsx("div",{className:"p-4 hover:bg-gray-50 transition-colors",children:d.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("span",{className:"font-mono font-semibold text-gray-800",children:q.trackingCode}),d.jsxs("span",{className:`px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${yU(q.status)}`,children:[d.jsx("i",{className:vU(q.status)}),q.status.replace("_"," ")]})]}),d.jsx("p",{className:"text-sm text-gray-600 truncate",children:q.customerName})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("p",{className:"text-lg font-bold text-green-600",children:ro(q.earnings)}),d.jsx("p",{className:"text-xs text-gray-400",children:Jm((pe=q.deliveryTime)==null?void 0:pe.toDate())})]})]})},q.id)})})]})]}),f&&i&&d.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-2xl w-full max-w-md animate-fadeIn",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Delivery OTP"}),d.jsx("p",{className:"text-gray-500 mb-6",children:"Share this code with the recipient to verify delivery"}),d.jsx("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 mb-6",children:d.jsxs("div",{className:"text-center",children:[d.jsx("p",{className:"text-sm text-blue-600 mb-2",children:"OTP Code"}),d.jsx("p",{className:"text-4xl font-bold text-blue-800 tracking-widest font-mono",children:_||i.otpCode}),d.jsx("p",{className:"text-xs text-blue-500 mt-3",children:"Valid for this delivery only"})]})}),d.jsxs("div",{className:"mb-6",children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Enter OTP from recipient"}),d.jsx("input",{type:"text",value:_,onChange:q=>S(q.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full p-4 text-3xl text-center border-2 border-gray-200 rounded-xl font-mono tracking-widest focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all",placeholder:"0000",maxLength:4,autoFocus:!0})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>{m(!1),S("")},className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors",children:"Cancel"}),d.jsx("button",{onClick:Ae,disabled:_.length!==4,className:`flex-1 py-3 rounded-xl font-medium transition-all ${_.length===4?"bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg":"bg-gray-200 text-gray-500 cursor-not-allowed"}`,children:"Verify & Complete"})]})]})})}),A&&d.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-2xl w-full max-w-md animate-fadeIn",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-4",children:"Location Sharing"}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-4",children:[d.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center ${x?"bg-green-100":"bg-gray-200"}`,children:d.jsx("i",{className:`fa-solid fa-location-dot text-xl ${x?"text-green-600":"text-gray-500"}`})}),d.jsxs("div",{children:[d.jsx("p",{className:"font-semibold text-gray-800",children:x?"Sharing Location":"Location Sharing Off"}),d.jsx("p",{className:"text-sm text-gray-500",children:x?"Your location is being shared with coordinators":"Enable to receive real-time job assignments"})]})]}),y&&d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4",children:[d.jsx("p",{className:"text-sm font-medium text-blue-800 mb-2",children:"Current Location"}),d.jsxs("p",{className:"text-xs text-blue-600 font-mono mb-1",children:[y.lat.toFixed(6),","," ",y.lng.toFixed(6)]}),d.jsxs("p",{className:"text-xs text-blue-500",children:["Accuracy: ±",w.toFixed(0),"m"]}),d.jsxs("p",{className:"text-xs text-blue-500 mt-1",children:["Updated: ",_U(y.timestamp)]})]}),b&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-xl p-4 mb-4",children:d.jsx("p",{className:"text-sm text-red-600",children:b})}),at&&d.jsx("div",{className:"bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("i",{className:"fa-solid fa-triangle-exclamation text-amber-600 mt-0.5"}),d.jsx("p",{className:"text-sm text-amber-700",children:"You have an active delivery. Disabling location sharing may affect tracking."})]})}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("i",{className:"fa-regular fa-lightbulb text-blue-600 mt-0.5"}),d.jsx("p",{className:"text-sm text-blue-700",children:"Location sharing uses GPS and may consume more battery. You can disable it anytime."})]})})]}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>P(!1),className:"flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors",children:"Close"}),x?d.jsx("button",{onClick:()=>{at?window.confirm("Disabling location sharing may affect tracking. Are you sure?")&&(N(),le.updateShareLocation(!1),P(!1)):(N(),le.updateShareLocation(!1),P(!1))},className:"flex-1 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-lg",children:"Stop Sharing"}):d.jsx("button",{onClick:()=>{N(),le.updateShareLocation(!0),P(!1)},className:"flex-1 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg",children:"Start Sharing"})]})]})})}),C&&i&&d.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:d.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeIn",children:[d.jsx("div",{className:"sticky top-0 bg-white border-b border-gray-200 p-6",children:d.jsxs("div",{className:"flex justify-between items-center",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:"Route Details"}),d.jsx("button",{onClick:()=>k(!1),className:"w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors",children:d.jsx("i",{className:"fa-solid fa-xmark text-xl"})})]})}),d.jsxs("div",{className:"p-6",children:[i.route?d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100",children:[d.jsx("p",{className:"text-sm text-blue-600 font-medium mb-2",children:"Distance"}),d.jsxs("p",{className:"text-2xl font-bold text-blue-900",children:[i.route.distance||"?"," km"]})]}),d.jsxs("div",{className:"bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100",children:[d.jsx("p",{className:"text-sm text-green-600 font-medium mb-2",children:"Est. Time"}),d.jsxs("p",{className:"text-2xl font-bold text-green-900",children:[i.route.duration||"?"," min"]})]})]}),d.jsxs("div",{className:"border-2 border-gray-100 rounded-xl p-4",children:[d.jsxs("p",{className:"text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot text-blue-500"}),"Pickup Address"]}),d.jsx("p",{className:"text-gray-800",children:i.pickupAddress})]}),d.jsxs("div",{className:"border-2 border-gray-100 rounded-xl p-4",children:[d.jsxs("p",{className:"text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-flag-checkered text-green-500"}),"Delivery Address"]}),d.jsx("p",{className:"text-gray-800",children:i.deliveryAddress})]}),i.route.polyline&&d.jsx("div",{className:"bg-gray-50 border border-gray-200 rounded-xl p-4",children:d.jsxs("p",{className:"text-sm text-gray-600 flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-map"}),"Full route map available in navigation"]})})]}):d.jsxs("div",{className:"text-center py-8",children:[d.jsx("div",{className:"w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-route text-2xl text-gray-400"})}),d.jsx("p",{className:"text-gray-500",children:"Route details not available yet"})]}),d.jsx("button",{onClick:()=>k(!1),className:"w-full mt-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg",children:"Close"})]})]})}),d.jsxs("style",{children:[`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `," ","as any"]})]})}function a5(){const[t,e]=O.useState("assigned"),[n,r]=O.useState([]),[s,i]=O.useState([]),[o,a]=O.useState(!0),[l,u]=O.useState(null),[h,f]=O.useState(!1),{isSharing:m,startSharing:_}=YN(),S=k=>{window.open(`/g/track/${k}`,"_blank","noopener,noreferrer")};O.useEffect(()=>{a(!0),(async()=>{try{const x=await le.getCarrierProfile();x!=null&&x.shareLocation&&!m&&(console.log("🔄 Restoring location sharing on AvailableTasks..."),_())}catch(x){console.error("Error restoring location sharing:",x)}})();const M=le.subscribeToAssignedDeliveries(x=>{r(x),a(!1)}),F=le.subscribeToAvailableTasks(x=>{i(x),a(!1)});return()=>{M(),F()}},[]);const A=async k=>{if(!m){f(!0);return}u(k);try{await le.acceptAssignedDelivery(k,m)?(Y.success("Job accepted. Check dashboard for details."),r(F=>F.filter(x=>x.id!==k))):Y.error("Failed to accept job")}catch(M){console.error("Error accepting job:",M),Y.error("Error accepting job")}finally{u(null)}},P=async k=>{u(k);try{await le.declineAssignedDelivery(k)?(Y.success("Job declined"),r(F=>F.filter(x=>x.id!==k))):Y.error("Failed to decline job")}catch(M){console.error("Error declining job:",M),Y.error("Error declining job")}finally{u(null)}},I=async k=>{u(k);try{await le.acceptTask(k)?(Y.success("Task accepted. You are now on this delivery."),i(F=>F.filter(x=>x.id!==k))):Y.error("Failed to accept task")}catch(M){console.error("Error accepting task:",M),Y.error("Error accepting task")}finally{u(null)}};if(o)return d.jsx("div",{className:"min-h-screen bg-gray-50 p-4 flex items-center justify-center",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),d.jsx("p",{className:"mt-4 text-gray-600",children:"Loading tasks..."})]})});const E=n.length,C=s.length;return d.jsxs("div",{className:"min-h-screen bg-slate-50 pb-24",children:[d.jsx(Yh,{position:"top-center"}),d.jsx("div",{className:"bg-white/95 backdrop-blur shadow-sm border-b sticky top-0 z-10",children:d.jsxs("div",{className:"px-4 py-4",children:[d.jsx("div",{className:"flex items-center justify-between gap-3 mb-4",children:d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Jobs & Tasks"}),d.jsx("p",{className:"text-sm text-gray-500",children:"Accept assignments quickly and track available deliveries"})]})}),d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>e("assigned"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${t==="assigned"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-6 h-6 rounded-full inline-flex items-center justify-center ${t==="assigned"?"bg-blue-100 text-blue-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-thumbtack"})}),"Assigned",d.jsx("span",{className:"text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full",children:E})]}),d.jsxs("button",{onClick:()=>e("available"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${t==="available"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-6 h-6 rounded-full inline-flex items-center justify-center ${t==="available"?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-list-check"})}),"Available",d.jsx("span",{className:"text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full",children:C})]})]})]})}),d.jsxs("div",{className:"p-4",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[d.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-4",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Assigned"}),d.jsx("p",{className:"text-2xl font-bold text-blue-700",children:E})]}),d.jsx("div",{className:"w-10 h-10 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-thumbtack"})})]})}),d.jsx("div",{className:"bg-white rounded-xl border border-gray-100 shadow-sm p-4",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Available"}),d.jsx("p",{className:"text-2xl font-bold text-emerald-700",children:C})]}),d.jsx("div",{className:"w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-list-check"})})]})})]}),t==="assigned"&&d.jsx("div",{children:E===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-4xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-solid fa-thumbtack"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No assigned jobs"}),d.jsx("p",{className:"text-gray-600",children:"When coordinator assigns you a job, it will appear here."})]}):d.jsx("div",{className:"space-y-4",children:n.map(k=>d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4",children:[k.status==="assigned"&&d.jsxs("div",{className:"bg-yellow-50 rounded-lg p-3 mb-4 border border-yellow-200",children:[d.jsxs("p",{className:"text-sm text-yellow-900 font-semibold inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-clock"}),"This job has been assigned to you. Accept to proceed."]}),!m&&d.jsxs("p",{className:"text-xs text-yellow-700 mt-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot mr-1"}),d.jsx("strong",{children:"Location sharing required"})," to accept this job"]})]}),d.jsxs("div",{className:"flex justify-between items-start mb-3",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:k.trackingCode}),d.jsx("span",{className:`text-xs font-bold px-2 py-1 rounded ${k.status==="assigned"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:k.status==="assigned"?"Awaiting Acceptance":"Accepted"})]}),d.jsx("h3",{className:"font-semibold text-gray-800",children:k.customerName||"Unknown Customer"})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",k.earnings||k.estimatedEarnings||0]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Payment"})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 mb-3",children:[d.jsxs("p",{className:"text-sm text-gray-700 mb-2 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-box"}),d.jsx("strong",{children:"Package:"})," ",k.packageDescription]}),k.packageWeight&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-solid fa-scale-balanced mr-1"}),d.jsx("strong",{children:"Weight:"})," ",k.packageWeight,"kg"]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Pickup"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:k.pickupAddress})]}),d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-flag-checkered"}),"Delivery"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:k.deliveryAddress})]})]}),k.deliveryInstructions&&d.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[d.jsxs("p",{className:"text-xs font-semibold text-blue-800 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"}),"Instructions:"]}),d.jsx("p",{className:"text-sm text-blue-700",children:k.deliveryInstructions})]}),d.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-phone"}),k.recipientPhone]}),k.recipientName&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-user"}),k.recipientName]})]}),k.status==="assigned"?d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>S(k.id),className:"px-3 py-3 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 font-semibold rounded-lg transition",children:"Live Track"}),d.jsx("button",{onClick:()=>A(k.id),disabled:l===k.id||!m,className:"flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===k.id?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):m?d.jsx(d.Fragment,{children:"Accept Job"}):d.jsx(d.Fragment,{children:"Enable Location to Accept"})}),d.jsx("button",{onClick:()=>P(k.id),disabled:l===k.id,className:"flex-1 py-3 bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-red-700 font-semibold rounded-lg transition",children:"Decline"})]}):d.jsxs("div",{className:"bg-green-50 p-3 rounded border border-green-200 text-center",children:[d.jsx("div",{className:"flex items-center justify-center gap-2 mb-2",children:d.jsxs("p",{className:"text-sm text-green-900 font-semibold inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"You have accepted this job"]})}),d.jsx("button",{onClick:()=>S(k.id),className:"px-3 py-1.5 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 font-semibold rounded-lg text-sm",children:"Live Track"})]})]},k.id))})}),t==="available"&&d.jsx("div",{children:C===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-4xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-regular fa-inbox"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-800 mb-2",children:"No available tasks"}),d.jsx("p",{className:"text-gray-600",children:"Check back soon for new delivery opportunities!"})]}):d.jsx("div",{className:"space-y-4",children:s.map(k=>d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-4",children:[d.jsxs("div",{className:"flex justify-between items-start mb-3",children:[d.jsxs("div",{children:[d.jsx("div",{className:"flex items-center gap-2 mb-1",children:d.jsx("span",{className:"text-sm font-mono bg-blue-100 text-blue-700 px-2 py-1 rounded",children:k.trackingCode})}),d.jsx("h3",{className:"font-semibold text-gray-800",children:k.customerName||"Unknown Customer"})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg font-bold text-green-600",children:["L",k.estimatedEarnings||0]}),d.jsx("p",{className:"text-xs text-gray-500",children:"Estimated pay"})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3 mb-3",children:[d.jsxs("p",{className:"text-sm text-gray-700 mb-2 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-box"}),d.jsx("strong",{children:"Package:"})," ",k.packageDescription]}),k.packageWeight&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-solid fa-scale-balanced mr-1"}),d.jsx("strong",{children:"Weight:"})," ",k.packageWeight,"kg"]}),k.packageValue&&d.jsxs("p",{className:"text-sm text-gray-600",children:[d.jsx("i",{className:"fa-regular fa-gem mr-1"}),d.jsx("strong",{children:"Value:"})," L",k.packageValue]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-4",children:[d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Pickup"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:k.pickupAddress})]}),d.jsxs("div",{children:[d.jsxs("p",{className:"text-xs text-gray-500 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-flag-checkered"}),"Delivery"]}),d.jsx("p",{className:"text-sm font-medium text-gray-800",children:k.deliveryAddress})]})]}),k.deliveryInstructions&&d.jsxs("div",{className:"bg-blue-50 rounded p-2 mb-4",children:[d.jsx("p",{className:"text-xs font-semibold text-blue-800 mb-1",children:"Instructions:"}),d.jsx("p",{className:"text-sm text-blue-700",children:k.deliveryInstructions})]}),d.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-600 mb-4",children:[d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-phone"}),k.customerPhone]}),k.recipientName&&d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-user"}),k.recipientName]})]}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>S(k.id),className:"px-3 py-3 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 font-semibold rounded-lg transition",children:"Live Track"}),d.jsx("button",{onClick:()=>I(k.id),disabled:l===k.id,className:"flex-1 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2",children:l===k.id?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}),"Accepting..."]}):d.jsx(d.Fragment,{children:"Accept Task"})})]})]},k.id))})}),h&&d.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-sm w-full p-6",children:[d.jsxs("div",{className:"text-center mb-6",children:[d.jsx("div",{className:"text-5xl mb-4 text-blue-600",children:d.jsx("i",{className:"fa-solid fa-location-dot"})}),d.jsx("h3",{className:"text-xl font-bold text-gray-900",children:"Enable Location Sharing"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Location sharing is required to accept assigned jobs. This allows the coordinator to track your delivery progress."})]}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("p",{className:"text-sm text-blue-800",children:[d.jsx("span",{className:"font-semibold",children:"What data is shared?"}),d.jsx("br",{}),"Your real-time location while on deliveries. You can disable it anytime."]})}),d.jsxs("div",{className:"flex gap-3",children:[d.jsx("button",{onClick:()=>f(!1),className:"flex-1 px-4 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition",children:"Not Now"}),d.jsx("button",{onClick:()=>{_(),f(!1),Y.success("Location sharing enabled. You can now accept jobs.")},className:"flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition",children:"Enable Location"})]})]})})]})]})}class l5{static async updateCarrierLocation(e,n,r,s){try{const i=Ie.currentUser;if(!i)return!1;const o=cr(this.db,`locations/active/${i.uid}/${e}`);return await no(o,{deliveryId:e,carrierId:i.uid,lat:n,lng:r,accuracy:s||null,timestamp:Date.now(),carrierName:i.displayName||"Unknown",carrierEmail:i.email}),!0}catch(i){return console.error("Error updating carrier location:",i),!1}}static async clearCarrierLocation(e){try{const n=Ie.currentUser;if(!n)return!1;const r=cr(this.db,`locations/active/${n.uid}/${e}`);return await B3(r),!0}catch(n){return console.error("Error clearing carrier location:",n),!1}}static getLocationRef(e,n){return cr(this.db,`locations/active/${e}/${n}`)}}pt(l5,"db",kN());const c5=async(t,e,n,r)=>{try{const s=We(ye,"deliveries",t),i={status:e,updatedAt:_o(),statusHistory:jm({status:e,timestamp:new Date().toISOString(),location:n})};return e==="picked_up"?i.pickupTime=_o():e==="delivered"&&(i.deliveryTime=_o()),n&&(i.location=n),(r!=null&&r.reason||r!=null&&r.note||r!=null&&r.shortcut)&&(i.routeContext={reason:r.reason||null,note:r.note||null,shortcut:r.shortcut||null,timestamp:new Date().toISOString()},i.routeFeedback=jm({type:r.shortcut?"shortcut":"deviation",reason:r.reason||null,note:r.note||null,shortcut:r.shortcut||null,reportedAt:new Date().toISOString()})),await Ut(s,i),{success:!0,message:`Delivery marked as ${e}`}}catch(s){throw console.error("Error updating delivery status:",s),new Error(s.message||"Failed to update delivery status")}},u5=t=>{const[e,n]=O.useState(!1),[r,s]=O.useState(null);return O.useEffect(()=>{},[t]),{carrier:r,loading:e}},d5=()=>{const[t,e]=O.useState(!1),[n,r]=O.useState(null),{carrier:s}=u5(),i=(s==null?void 0:s.currentLocation)||{latitude:0,longitude:0},o=(h,f)=>{const m={accepted:["picked_up"],picked_up:["in_transit","stuck"],in_transit:["delivered","stuck"],stuck:["in_transit"]};return m[h]?m[h].includes(f)?{valid:!0}:{valid:!1,message:`Cannot transition from ${h} to ${f}`}:{valid:!1,message:`Cannot update status from ${h}`}};return{updateStatus:async(h,f,m,_)=>{e(!0),r(null);try{if(m){const S=o(m,f);if(!S.valid)throw new Error(S.message||"Invalid status transition")}return await c5(h,f,i,_),e(!1),{success:!0,message:`Status updated to ${f}`}}catch(S){const A=S.message||"Failed to update status";throw r(A),e(!1),S}},loading:t,error:n,getAvailableStatuses:h=>{switch(h){case"accepted":return["picked_up"];case"picked_up":return["in_transit","stuck"];case"in_transit":return["delivered","stuck"];case"stuck":return["in_transit"];default:return[]}},getStatusInfo:h=>({picked_up:{label:"Picked Up",icon:"fa-solid fa-box",color:"bg-blue-600",description:"Package collected from pickup location"},in_transit:{label:"In Transit",icon:"fa-solid fa-truck",color:"bg-purple-600",description:"Package is on the way"},stuck:{label:"Stuck",icon:"fa-solid fa-triangle-exclamation",color:"bg-orange-600",description:"Facing delays or issues"},delivered:{label:"Delivered",icon:"fa-solid fa-circle-check",color:"bg-green-600",description:"Package delivered successfully"}})[h]||{label:h,icon:"fa-regular fa-clipboard",color:"bg-gray-600",description:""},validateStatusTransition:o}};function h5(){const[t,e]=O.useState([]),[n,r]=O.useState(!0),[s,i]=O.useState("active"),[o,a]=O.useState(!1),[l,u]=O.useState(null),[h,f]=O.useState(""),[m,_]=O.useState(!1),[S,A]=O.useState(null),[P,I]=O.useState(null),{updateStatus:E,getAvailableStatuses:C,getStatusInfo:k}=d5();O.useEffect(()=>{const w=Ie.currentUser;if(!w){r(!1);return}const N=xn(un(ye,"deliveries"),nt("carrierId","==",w.uid),Ys("createdAt","desc")),R=sl(N,T=>{const se=[];T.forEach(Ae=>{var at,z,K;const ie=Ae.data();se.push({id:Ae.id,customerId:ie.customerId,carrierId:ie.carrierId,carrierName:ie.carrierName||"",customerName:ie.customerName||"Unknown",customerPhone:ie.customerPhone||"",deliveryAddress:ie.deliveryAddress||"",pickupAddress:ie.pickupAddress||"",status:ie.status||"pending",createdAt:((at=ie.createdAt)==null?void 0:at.toDate())||new Date,assignedAt:(z=ie.assignedAt)==null?void 0:z.toDate(),deliveryDate:(K=ie.deliveryDate)==null?void 0:K.toDate(),distance:ie.distance||0,estimatedEarnings:ie.estimatedEarnings||0,earnings:ie.earnings||0,proofOfDelivery:ie.proofOfDelivery,trackingCode:ie.trackingCode||`TRK${Ae.id.slice(0,8).toUpperCase()}`,packageDescription:ie.packageDescription||"No description",packageWeight:ie.packageWeight||0,recipientName:ie.recipientName||ie.customerName,recipientPhone:ie.recipientPhone||ie.customerPhone,deliveryInstructions:ie.deliveryInstructions})}),e(se),r(!1)},T=>{console.error("Error loading deliveries:",T),Y.error("Failed to load deliveries"),r(!1)});return()=>R()},[]);const M=t.filter(w=>s==="active"?["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status):s==="completed"?w.status==="delivered":!0),F=async(w,N)=>{A(w);try{const R=t.find(T=>T.id===w);if(!R)throw new Error("Delivery not found");await E(w,N,R.status),Y.success(`Status updated to ${N.replace("_"," ")}`),e(T=>T.map(se=>se.id===w?{...se,status:N}:se))}catch(R){console.error("Error updating delivery status:",R),Y.error(R.message||"Failed to update status")}finally{A(null)}},x=async()=>{var w;if(!l||!h){Y.error("Please enter OTP");return}if(!((w=l.proofOfDelivery)!=null&&w.otp)){Y.error("No OTP set for this delivery");return}if(h!==l.proofOfDelivery.otp){Y.error("Invalid OTP. Please try again."),f("");return}_(!0);try{await F(l.id,"delivered"),Y.success("Delivery completed successfully."),a(!1),f(""),u(null),t.filter(R=>["assigned","accepted","picked_up","in_transit","stuck"].includes(R.status)&&R.id!==l.id).length===0&&(await le.updateCarrierStatus("active"),Y.success("Status updated to Active"))}catch(N){console.error("Error completing delivery:",N),Y.error("Failed to complete delivery")}finally{_(!1)}},y=w=>{const N="px-3 py-1 rounded-full text-xs font-bold";switch(w){case"pending":return d.jsxs("span",{className:`${N} bg-gray-100 text-gray-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-regular fa-clock"}),"Pending"]});case"assigned":return d.jsxs("span",{className:`${N} bg-blue-100 text-blue-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-location-dot"}),"Assigned"]});case"accepted":return d.jsxs("span",{className:`${N} bg-indigo-100 text-indigo-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-hand"}),"Accepted"]});case"picked_up":return d.jsxs("span",{className:`${N} bg-blue-200 text-blue-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-box"}),"Picked Up"]});case"in_transit":return d.jsxs("span",{className:`${N} bg-purple-100 text-purple-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-truck"}),"In Transit"]});case"stuck":return d.jsxs("span",{className:`${N} bg-orange-100 text-orange-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-triangle-exclamation"}),"Stuck"]});case"delivered":return d.jsxs("span",{className:`${N} bg-green-100 text-green-800 inline-flex items-center gap-2`,children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Delivered"]});default:return d.jsx("span",{className:`${N} bg-gray-100 text-gray-800`,children:w})}},b=w=>{window.open(`/g/track/${w}`,"_blank","noopener,noreferrer")};return n?d.jsx("div",{className:"flex justify-center items-center h-64",children:d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):d.jsxs("div",{className:"min-h-screen bg-slate-50 p-4 md:p-6",children:[d.jsx(Yh,{position:"top-right"}),d.jsxs("div",{className:"mb-8",children:[d.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Deliveries"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your active and completed deliveries"})]}),d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 mb-6",children:[d.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="active"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-bolt"}),"Active",d.jsx("span",{className:"text-xs font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full",children:t.filter(w=>["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status)).length})]}),d.jsxs("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="completed"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Completed",d.jsx("span",{className:"text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full",children:t.filter(w=>w.status==="delivered").length})]}),d.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${s==="all"?"bg-white text-gray-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("i",{className:"fa-solid fa-layer-group"}),"All",d.jsx("span",{className:"text-xs font-bold text-gray-700 bg-gray-200 px-2 py-0.5 rounded-full",children:t.length})]})]})}),d.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[d.jsx("div",{className:"bg-blue-50 rounded-lg p-3 border border-blue-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-blue-700 font-semibold",children:"Total Earnings"}),d.jsx("p",{className:"text-lg font-bold text-blue-900",children:ro(t.reduce((w,N)=>w+(N.earnings||0),0))})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-blue-100 text-blue-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-wallet"})})]})}),d.jsx("div",{className:"bg-emerald-50 rounded-lg p-3 border border-emerald-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-emerald-700 font-semibold",children:"Active"}),d.jsx("p",{className:"text-lg font-bold text-emerald-900",children:t.filter(w=>["assigned","accepted","picked_up","in_transit","stuck"].includes(w.status)).length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-bolt"})})]})}),d.jsx("div",{className:"bg-purple-50 rounded-lg p-3 border border-purple-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-purple-700 font-semibold",children:"Completed"}),d.jsx("p",{className:"text-lg font-bold text-purple-900",children:t.filter(w=>w.status==="delivered").length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-purple-100 text-purple-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-circle-check"})})]})}),d.jsx("div",{className:"bg-orange-50 rounded-lg p-3 border border-orange-100",children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-orange-700 font-semibold",children:"Total"}),d.jsx("p",{className:"text-lg font-bold text-orange-900",children:t.length})]}),d.jsx("div",{className:"w-9 h-9 rounded-full bg-orange-100 text-orange-700 inline-flex items-center justify-center",children:d.jsx("i",{className:"fa-solid fa-layer-group"})})]})})]})]}),M.length===0?d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center",children:[d.jsx("div",{className:"text-5xl mb-4 text-gray-400",children:d.jsx("i",{className:"fa-solid fa-box"})}),d.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No deliveries found"}),d.jsx("p",{className:"text-gray-500",children:s==="active"?"No active deliveries at the moment":s==="completed"?"You haven't completed any deliveries yet":"You don't have any deliveries"})]}):d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:M.map(w=>{const N=C(w.status),R=P===w.id;return d.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition",children:[d.jsx("div",{className:"p-4 border-b bg-gradient-to-r from-gray-50 to-gray-100",children:d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[y(w.status),d.jsx("span",{className:"text-xs font-mono text-gray-600 bg-white px-2 py-1 rounded border",children:w.trackingCode})]}),d.jsx("h3",{className:"font-bold text-gray-800",children:w.customerName})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-xl font-bold text-green-600",children:ro(w.earnings||w.estimatedEarnings||0)}),d.jsx("p",{className:"text-xs text-gray-500",children:"Earnings"})]})]})}),d.jsx("div",{className:"p-4",children:d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex items-start",children:[d.jsx("span",{className:"text-blue-600 mr-2",children:d.jsx("i",{className:"fa-solid fa-location-dot"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Pickup"}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.pickupAddress})]})]}),d.jsxs("div",{className:"flex items-start",children:[d.jsx("span",{className:"text-green-600 mr-2",children:d.jsx("i",{className:"fa-solid fa-flag-checkered"})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("p",{className:"text-xs text-gray-500",children:"Delivery"}),d.jsx("p",{className:"text-sm font-medium text-gray-800 line-clamp-2",children:w.deliveryAddress})]})]})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-3",children:[d.jsx("p",{className:"text-sm font-semibold text-gray-700 mb-1",children:"Package"}),d.jsxs("div",{className:"flex justify-between text-sm",children:[d.jsx("span",{className:"text-gray-600 truncate mr-2",children:w.packageDescription}),w.packageWeight>0&&d.jsxs("span",{className:"font-medium whitespace-nowrap",children:[w.packageWeight," kg"]})]})]}),R&&d.jsxs("div",{className:"pt-3 border-t space-y-3",children:[d.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Recipient"}),d.jsx("p",{className:"text-sm font-medium",children:w.recipientName}),d.jsx("p",{className:"text-sm text-gray-600",children:w.recipientPhone})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-xs text-gray-500 mb-1",children:"Created"}),d.jsx("p",{className:"text-sm",children:Jm(w.createdAt)})]})]}),w.deliveryInstructions&&d.jsxs("div",{className:"bg-yellow-50 p-3 rounded",children:[d.jsxs("p",{className:"text-xs font-semibold text-yellow-800 mb-1 inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-regular fa-note-sticky"}),"Instructions"]}),d.jsx("p",{className:"text-sm text-yellow-900",children:w.deliveryInstructions})]}),w.distance>0&&d.jsxs("div",{className:"flex items-center justify-between text-sm",children:[d.jsx("span",{className:"text-gray-600",children:"Distance:"}),d.jsxs("span",{className:"font-medium",children:[w.distance.toFixed(1)," km"]})]})]}),N.length>0&&d.jsx("div",{className:"pt-3 border-t",children:d.jsxs("div",{className:"mb-2",children:[d.jsx("p",{className:"text-xs text-gray-500 font-medium mb-1",children:"Update Status"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:N.map(T=>{const se=k(T);return d.jsxs("button",{onClick:()=>F(w.id,T),disabled:S===w.id,className:`px-3 py-2 rounded-lg text-white text-xs font-medium transition ${se.color} hover:opacity-90 disabled:opacity-50 flex items-center gap-1`,children:[d.jsx("i",{className:se.icon}),d.jsx("span",{children:se.label})]},T)})})]})}),w.status==="in_transit"&&!N.includes("delivered")&&d.jsxs("button",{onClick:()=>{u(w),a(!0)},className:"w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-medium hover:shadow-md transition flex items-center justify-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Complete Delivery"]})]})}),d.jsxs("div",{className:"px-4 py-3 bg-gray-50 border-t flex justify-between items-center",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs("button",{onClick:()=>I(R?null:w.id),className:"text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1",children:[d.jsx("span",{children:R?"▲":"▼"}),R?"Show Less":"More Details"]}),d.jsx("button",{onClick:()=>b(w.id),className:"text-sm px-2.5 py-1.5 rounded-md bg-cyan-100 text-cyan-700 hover:bg-cyan-200 font-semibold",children:"Live Track"})]}),d.jsx("div",{className:"text-xs text-gray-500",children:w.assignedAt&&`Assigned: ${Jm(w.assignedAt)}`})]})]},w.id)})}),o&&l&&d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:d.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-md",children:d.jsxs("div",{className:"p-6",children:[d.jsxs("div",{className:"flex justify-between items-start mb-6",children:[d.jsx("h2",{className:"text-xl font-bold text-gray-800",children:"Verify Delivery OTP"}),d.jsx("button",{onClick:()=>{a(!1),f(""),u(null)},className:"text-gray-400 hover:text-gray-600 text-2xl",children:d.jsx("i",{className:"fa-solid fa-xmark"})})]}),d.jsxs("div",{className:"mb-6",children:[d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4",children:[d.jsxs("p",{className:"text-blue-800 font-medium text-sm",children:[d.jsx("i",{className:"fa-solid fa-location-dot mr-2"}),l.deliveryAddress]}),d.jsx("p",{className:"text-blue-700 text-xs mt-2",children:"Ask the customer for their OTP code"})]}),d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Customer OTP Code"}),d.jsx("input",{type:"text",placeholder:"Enter 4-digit OTP",maxLength:4,value:h,onChange:w=>f(w.target.value.replace(/\D/g,"").slice(0,4)),className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500",autoFocus:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"The customer will provide this code from their delivery notification"})]}),d.jsxs("div",{className:"flex space-x-4",children:[d.jsx("button",{onClick:()=>{a(!1),f(""),u(null)},className:"flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium",children:"Cancel"}),d.jsx("button",{onClick:x,disabled:m||h.length!==4,className:`flex-1 px-4 py-3 rounded-lg font-medium ${h.length===4&&!m?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:m?d.jsxs("span",{className:"flex items-center justify-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Verifying..."]}):"✓ Complete Delivery"})]})]})})}),M.length>0&&d.jsx("div",{className:"mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-4",children:d.jsxs("div",{className:"flex flex-wrap justify-between items-center",children:[d.jsxs("div",{className:"text-sm text-gray-600",children:["Showing"," ",d.jsx("span",{className:"font-bold text-gray-800",children:M.length})," ","of"," ",d.jsx("span",{className:"font-bold text-gray-800",children:t.length})," ","deliveries"]}),d.jsxs("div",{className:"text-sm text-gray-600",children:["Last updated:"," ",new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]})})]})}function f5({user:t}){const[e,n]=O.useState("dashboard"),r=()=>{switch(e){case"dashboard":return d.jsx(yE,{user:t,onNavigate:n});case"tasks":return d.jsx(a5,{});case"deliveries":return d.jsx(h5,{});default:return d.jsx(yE,{user:t,onNavigate:n})}};return d.jsxs("div",{className:"min-h-screen bg-slate-50",children:[d.jsx("div",{className:"hidden md:block sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200",children:d.jsx("div",{className:"max-w-6xl mx-auto px-4 py-3",children:d.jsxs("div",{className:"inline-flex items-center gap-2 bg-gray-100 rounded-full p-1",children:[d.jsxs("button",{onClick:()=>n("dashboard"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="dashboard"?"bg-white text-blue-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="dashboard"?"bg-blue-100 text-blue-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-chart-column"})}),"Dashboard"]}),d.jsxs("button",{onClick:()=>n("deliveries"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="deliveries"?"bg-white text-purple-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="deliveries"?"bg-purple-100 text-purple-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-solid fa-box"})}),"Deliveries"]}),d.jsxs("button",{onClick:()=>n("tasks"),className:`px-4 py-2 rounded-full text-sm font-semibold transition inline-flex items-center gap-2 ${e==="tasks"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-800"}`,children:[d.jsx("span",{className:`w-7 h-7 rounded-full inline-flex items-center justify-center ${e==="tasks"?"bg-emerald-100 text-emerald-700":"bg-gray-200 text-gray-600"}`,children:d.jsx("i",{className:"fa-regular fa-clipboard"})}),"Tasks"]})]})})}),r(),d.jsx("nav",{className:"fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur border-t border-gray-200 z-50 md:hidden",children:d.jsxs("div",{className:"max-w-full mx-auto flex justify-around",children:[d.jsx("button",{onClick:()=>n("dashboard"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="dashboard"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-solid fa-chart-column text-lg"}),d.jsx("span",{children:"Dashboard"})]})}),d.jsx("button",{onClick:()=>n("deliveries"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="deliveries"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-solid fa-box text-lg"}),d.jsx("span",{children:"Deliveries"})]})}),d.jsx("button",{onClick:()=>n("tasks"),className:`flex-1 py-3 text-center text-xs font-medium transition ${e==="tasks"?"text-blue-600 border-t-2 border-blue-600":"text-gray-600 hover:text-gray-800"}`,children:d.jsxs("div",{className:"flex flex-col items-center gap-1",children:[d.jsx("i",{className:"fa-regular fa-clipboard text-lg"}),d.jsx("span",{children:"Tasks"})]})})]})})]})}const mp="carrier";function p5(){const[t,e]=O.useState(!0),[n,r]=O.useState(null),[s,i]=O.useState(null);return O.useEffect(()=>{const o=nO(Ie,async a=>{var l;if(a){const u=await kd(We(ye,"users",a.uid)),h=u.exists()?(l=u.data())==null?void 0:l.role:null;i(h),r(a)}else r(null),i(null);e(!1)});return()=>o()},[]),d.jsxs(d.Fragment,{children:[t&&d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:d.jsx("p",{className:"text-2xl font-semibold text-gray-700",children:"Loading PTROS..."})}),!t&&!n&&d.jsx(KN,{}),!t&&n&&s!==mp&&d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:d.jsxs("div",{className:"text-center p-10",children:[d.jsx("h1",{className:"text-5xl font-bold text-red-600 mb-6",children:"Access Denied"}),d.jsxs("p",{className:"text-xl mb-4",children:["This portal is for ",d.jsxs("strong",{children:[mp,"s"]})," only."]}),d.jsxs("p",{className:"text-lg",children:["You are logged in with role: ",d.jsx("strong",{children:s||"none"})]}),d.jsx("button",{onClick:()=>Ie.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===mp&&d.jsx(f5,{user:n}),d.jsx(Yh,{})]})}function m5(){const t=Jg(),e=O.useRef(null),[n,r]=O.useState({email:"",password:"",confirmPassword:"",fullName:"",phone:"",whatsapp:"",address:"",city:"Maseru",vehicleType:"",licensePlate:"",idNumber:"",profilePicture:null,acceptTerms:!1}),[s,i]=O.useState(!1),[o,a]=O.useState(""),[l,u]=O.useState(1),[h,f]=O.useState(null),[m,_]=O.useState(!1),S=y=>new Promise((b,w)=>{const N=new FileReader;N.onload=R=>{var se;const T=new Image;T.src=(se=R.target)==null?void 0:se.result,T.onload=()=>{const Ae=document.createElement("canvas"),ie=Ae.getContext("2d");if(!ie){w(new Error("Could not get canvas context"));return}const at=200;Ae.width=at,Ae.height=at;const z=T.width,K=T.height,q=Math.min(z,K),pe=(z-q)/2,me=(K-q)/2;ie.drawImage(T,pe,me,q,q,0,0,at,at),Ae.toBlob(cn=>{if(cn){const sr=`profile_${Date.now()}.jpg`,Jt=new File([cn],sr,{type:"image/jpeg",lastModified:Date.now()});b(Jt)}else w(new Error("Failed to create image blob"))},"image/jpeg",.85)},T.onerror=()=>w(new Error("Failed to load image"))},N.onerror=()=>w(new Error("Failed to read file")),N.readAsDataURL(y)}),A=async y=>{var R;const{name:b,value:w,type:N}=y.target;if(N==="checkbox"){const T=y.target.checked;r(se=>({...se,[b]:T}))}else if(N==="file"){const T=(R=y.target.files)==null?void 0:R[0];if(T){_(!0),a("");try{if(!["image/jpeg","image/jpg","image/png","image/webp","image/gif"].includes(T.type)){a("Please upload an image file (JPEG, PNG, WebP, GIF)"),_(!1);return}if(T.size>5*1024*1024){a("Image size should be less than 5MB"),_(!1);return}console.log("🖼️ Processing image...");const Ae=await S(T);if(console.log("Image processed successfully"),console.log("Original size:",T.size,"bytes"),console.log("Processed size:",Ae.size,"bytes"),Ae.size===0)throw new Error("Processed image is empty");r(at=>({...at,profilePicture:Ae}));const ie=new FileReader;ie.onloadend=()=>{f(ie.result),_(!1)},ie.readAsDataURL(Ae)}catch(se){console.error("Image processing error:",se),a("Failed to process image. Please try another image."),_(!1)}}}else r(T=>({...T,[b]:w}))},P=()=>{r(y=>({...y,profilePicture:null})),f(null),e.current&&(e.current.value="")},I=()=>n.profilePicture?n.fullName.trim()?n.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)?n.password.length<8?(a("Password must be at least 8 characters"),!1):n.password!==n.confirmPassword?(a("Passwords do not match"),!1):!0:(a("Valid email is required"),!1):(a("Full name is required"),!1):(a("Profile picture is required"),!1),E=()=>n.phone.match(/^\+?[0-9\s\-]{10,}$/)?n.address.trim()?!0:(a("Physical address is required"),!1):(a("Valid phone number is required"),!1),C=()=>{a(""),!(l===1&&!I())&&(l===2&&!E()||u(l+1))},k=()=>{a(""),u(l-1)},M=async y=>{if(y.preventDefault(),i(!0),a(""),console.log("Starting registration process..."),!n.acceptTerms){a("You must accept the terms and conditions"),i(!1);return}try{console.log("Step 1: Creating Firebase Auth user...");const w=(await YD(Ie,n.email,n.password)).user.uid;if(console.log("Auth user created. User ID:",w),!n.profilePicture)throw new Error("Profile picture is required");if(console.log("Step 2: Uploading profile picture..."),console.log("File details:",{name:n.profilePicture.name,size:n.profilePicture.size,type:n.profilePicture.type}),n.profilePicture.size===0)throw new Error("Profile picture file is empty (0 bytes)");const N=`carriers/${w}/profile.jpg`;console.log("Storage path:",N);const R=aU(fU,N);console.log("Uploading file to Firebase Storage..."),await iU(R,n.profilePicture),console.log("File uploaded successfully"),console.log("🔗 Getting download URL...");const T=await oU(R);console.log("Download URL obtained"),console.log("💾 Saving user data to Firestore..."),await jV(We(ye,"users",w),{email:n.email,role:"carrier",fullName:n.fullName,phone:n.phone,whatsapp:n.whatsapp||n.phone,address:n.address,city:n.city,country:"Lesotho",vehicleType:n.vehicleType||"Not specified",licensePlate:n.licensePlate||"Not specified",idNumber:n.idNumber||"Not specified",photoURL:T,isApproved:!1,status:"pending",earnings:0,completedDeliveries:0,rating:0,createdAt:new Date,updatedAt:new Date,registrationStep:"completed",hasProfilePicture:!0}),console.log("Firestore document saved"),alert(`Registration Successful!

Your application has been submitted. Please wait for coordinator approval.

Your profile picture has been uploaded successfully.`),console.log("🎉 Registration complete! Redirecting to login..."),t("/login")}catch(b){if(console.error("Registration error:",b),b.code==="auth/email-already-in-use")try{const w=await ZD(Ie,n.email);console.log("Existing sign-in methods for email:",w),w.length===0?a("This email is already registered. Please login or use a different email."):a(`This email is already registered. Sign-in methods: ${w.join(", ")}. If you used a password, try signing in or reset your password from the login screen.`)}catch(w){console.error("Error fetching sign-in methods:",w),a("This email is already registered. Please login or use a different email.")}else b.code==="auth/weak-password"?a("Password is too weak. Use at least 8 characters with letters and numbers."):b.code==="auth/invalid-email"?a("Invalid email address. Please enter a valid email."):b.code==="storage/unknown"?a("Storage error. Please check if Firebase Storage is enabled."):b.code==="storage/unauthorized"?a("Storage permission denied. Please check Firebase Storage rules."):a(b.message||"Registration failed. Please try again.")}finally{i(!1)}},F=["Maseru","Teyateyaneng","Mafeteng","Hlotse","Mohale's Hoek","Maputsoe","Qacha's Nek","Quthing","Butha-Buthe","Mokhotlong","Thaba-Tseka","Semonkong","Roma"],x=["Motorcycle","Car","Van","Pickup Truck","Bicycle","Scooter","Other"];return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-blue-50",children:d.jsxs("div",{className:"max-w-4xl mx-auto py-8 px-4",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx(uo,{to:"/",className:"inline-block mb-4",children:d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),d.jsx("h1",{className:"text-3xl font-bold text-blue-800",children:"PTROS Carrier"})]})}),d.jsx("h2",{className:"text-2xl font-semibold text-gray-700",children:"Join Our Delivery Network"}),d.jsx("p",{className:"text-gray-600 mt-2",children:"Register as a carrier and start earning today"})]}),d.jsxs("div",{className:"mb-8",children:[d.jsxs("div",{className:"flex justify-between items-center mb-2",children:[d.jsx("div",{className:`text-sm font-medium ${l>=1?"text-blue-600":"text-gray-400"}`,children:"1. Account"}),d.jsx("div",{className:`text-sm font-medium ${l>=2?"text-blue-600":"text-gray-400"}`,children:"2. Contact"}),d.jsx("div",{className:`text-sm font-medium ${l>=3?"text-blue-600":"text-gray-400"}`,children:"3. Vehicle"}),d.jsx("div",{className:`text-sm font-medium ${l>=4?"text-blue-600":"text-gray-400"}`,children:"4. Review"})]}),d.jsx("div",{className:"h-2 bg-gray-200 rounded-full",children:d.jsx("div",{className:"h-full bg-blue-600 rounded-full transition-all duration-300",style:{width:`${(l-1)*33.33}%`}})})]}),d.jsxs("div",{className:"bg-white rounded-2xl shadow-xl overflow-hidden",children:[o&&d.jsxs("div",{className:"bg-red-50 border border-red-200 rounded-lg p-4 m-6",children:[d.jsx("p",{className:"text-red-700",children:o}),o.includes("already registered")&&d.jsx(uo,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium text-sm block mt-1",children:"Click here to login instead"})]}),d.jsxs("form",{onSubmit:M,children:[l===1&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Account Information"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:["Profile Picture ",d.jsx("span",{className:"text-red-500",children:"*"})]}),d.jsxs("div",{className:"flex items-center space-x-4",children:[d.jsx("div",{className:"flex-shrink-0",children:m?d.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:d.jsxs("div",{className:"text-center",children:[d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"}),d.jsx("span",{className:"text-xs text-gray-500 mt-2 block",children:"Processing..."})]})}):h?d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:h,alt:"Profile preview",className:"w-24 h-24 rounded-full object-cover border-2 border-blue-500",style:{objectFit:"cover"}}),d.jsx("button",{type:"button",onClick:P,className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600",children:"×"})]}):d.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300",children:d.jsxs("div",{className:"text-center",children:[d.jsx("span",{className:"text-gray-500 block text-xs",children:"Upload photo"}),d.jsx("span",{className:"text-xs text-red-500 block mt-1",children:"Required"})]})})}),d.jsxs("div",{className:"flex-1",children:[d.jsx("input",{ref:e,type:"file",name:"profilePicture",onChange:A,accept:"image/*",className:"w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,disabled:m}),d.jsx("p",{className:"mt-2 text-xs text-gray-500",children:"Clear front-facing photo. Max 5MB. Cropped to square."}),!n.profilePicture&&!m&&d.jsx("p",{className:"text-red-500 font-medium mt-2 text-xs",children:"Please upload your profile picture to continue."})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name *"}),d.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"John Doe",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address *"}),d.jsx("input",{type:"email",name:"email",value:n.email,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"john@example.com",required:!0})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password *"}),d.jsx("input",{type:"password",name:"password",value:n.password,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"At least 8 characters",minLength:8,required:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Minimum 8 characters with letters and numbers"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Confirm Password *"}),d.jsx("input",{type:"password",name:"confirmPassword",value:n.confirmPassword,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"Confirm your password",required:!0})]})]})]}),d.jsx("div",{className:"mt-8 flex justify-end",children:d.jsx("button",{type:"button",onClick:C,disabled:!n.profilePicture||m,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition disabled:opacity-50 disabled:cursor-not-allowed",children:m?d.jsxs("span",{className:"flex items-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing Image..."]}):"Next: Contact Details →"})})]}),l===2&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Contact Details"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number *"}),d.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),d.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"+266 5000 0000 (optional)"}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Provide if different from phone number"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"City *"}),d.jsx("select",{name:"city",value:n.city,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",required:!0,children:F.map(y=>d.jsx("option",{value:y,children:y},y))})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Physical Address *"}),d.jsx("textarea",{name:"address",value:n.address,onChange:A,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"House number, street, area",required:!0}),d.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"This is where you'll receive official correspondence"})]})]}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:k,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"button",onClick:C,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Vehicle Details →"})]})]}),l===3&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Vehicle Information"}),d.jsx("p",{className:"text-gray-600 mb-6",children:"This information helps us assign appropriate deliveries"}),d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Vehicle Type"}),d.jsxs("select",{name:"vehicleType",value:n.vehicleType,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",children:[d.jsx("option",{value:"",children:"Select your vehicle type"}),x.map(y=>d.jsx("option",{value:y,children:y},y))]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"License Plate"}),d.jsx("input",{type:"text",name:"licensePlate",value:n.licensePlate,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"e.g., A1234BC"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"ID Number"}),d.jsx("input",{type:"text",name:"idNumber",value:n.idNumber,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",placeholder:"National ID or Passport"})]})]})]}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:k,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"button",onClick:C,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:"Next: Review & Submit →"})]})]}),l===4&&d.jsxs("div",{className:"p-8",children:[d.jsx("h3",{className:"text-2xl font-bold text-gray-800 mb-6",children:"Review & Submit"}),d.jsxs("div",{className:"bg-gray-50 rounded-xl p-6 mb-8",children:[d.jsx("h4",{className:"font-semibold text-lg mb-4",children:"Your Information"}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Full Name"}),d.jsx("p",{className:"font-medium",children:n.fullName})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Email"}),d.jsx("p",{className:"font-medium",children:n.email})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Phone"}),d.jsx("p",{className:"font-medium",children:n.phone})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"City"}),d.jsx("p",{className:"font-medium",children:n.city})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Address"}),d.jsx("p",{className:"font-medium",children:n.address})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Vehicle Type"}),d.jsx("p",{className:"font-medium",children:n.vehicleType||"Not specified"})]}),d.jsxs("div",{className:"col-span-2",children:[d.jsx("p",{className:"text-sm text-gray-500",children:"Profile Picture"}),d.jsx("div",{className:"flex items-center mt-2",children:h?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"relative",children:[d.jsx("img",{src:h,alt:"Profile preview",className:"w-20 h-20 rounded-full object-cover border-2 border-green-500",style:{objectFit:"cover"}}),d.jsx("div",{className:"absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs",children:d.jsx("i",{className:"fa-solid fa-check"})})]}),d.jsxs("div",{className:"ml-3",children:[d.jsx("span",{className:"text-green-600 font-medium block",children:d.jsxs("span",{className:"inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-check"}),"Uploaded and optimized"]})}),d.jsx("span",{className:"text-xs text-gray-500 block mt-1",children:"Cropped to square (200×200 pixels)"})]})]}):d.jsxs("span",{className:"text-red-500 font-medium inline-flex items-center gap-2",children:[d.jsx("i",{className:"fa-solid fa-circle-xmark"}),"No picture uploaded"]})})]})]})]}),d.jsx("div",{className:"mb-8",children:d.jsxs("div",{className:"flex items-start",children:[d.jsx("input",{type:"checkbox",id:"acceptTerms",name:"acceptTerms",checked:n.acceptTerms,onChange:A,className:"mt-1 mr-3",required:!0}),d.jsx("label",{htmlFor:"acceptTerms",className:"text-sm text-gray-700",children:"I agree to the PTROS Carrier Terms and Conditions. I understand that my account requires coordinator approval before I can start working. I confirm that the profile picture I uploaded is a clear, recent photo of myself."})]})}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("i",{className:"fa-solid fa-circle-info text-blue-600"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-blue-800",children:"Profile Picture Requirement"}),d.jsx("div",{className:"text-sm text-blue-700 mt-1",children:d.jsx("p",{children:"Your profile picture is mandatory for identification and security verification. Applications without a clear profile picture will be rejected."})})]})]})}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:d.jsxs("div",{className:"flex",children:[d.jsx("div",{className:"flex-shrink-0",children:d.jsx("i",{className:"fa-solid fa-triangle-exclamation text-yellow-600"})}),d.jsxs("div",{className:"ml-3",children:[d.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Important Notice"}),d.jsxs("div",{className:"text-sm text-yellow-700 mt-1",children:[d.jsx("p",{children:"Your registration will be reviewed by a coordinator. Approval typically takes 1-2 business days."}),d.jsx("p",{className:"mt-2 font-semibold",children:"Your profile picture will be used for:"}),d.jsxs("ul",{className:"list-disc pl-4 mt-1 space-y-1",children:[d.jsx("li",{children:"Identity verification by coordinators"}),d.jsx("li",{children:"Customer identification during deliveries"}),d.jsx("li",{children:"Security and safety purposes"})]})]})]})]})}),d.jsxs("div",{className:"mt-8 flex justify-between",children:[d.jsx("button",{type:"button",onClick:k,className:"px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium",children:"← Back"}),d.jsx("button",{type:"submit",disabled:s||!n.acceptTerms||!n.profilePicture,className:"px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?d.jsxs("span",{className:"flex items-center",children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Submitting..."]}):"Submit Registration"})]})]})]})]}),d.jsxs("div",{className:"text-center mt-8",children:[d.jsxs("p",{className:"text-gray-600",children:["Already have an account?"," ",d.jsx(uo,{to:"/login",className:"text-blue-600 hover:text-blue-800 font-medium",children:"Login here"})]}),d.jsx("p",{className:"text-sm text-gray-500 mt-4",children:"Need help? Contact PTROS Support: support@ptros.co.ls or +266 2222 3333"})]})]})})}function g5(){const[t,e]=O.useState(""),[n,r]=O.useState(!1),[s,i]=O.useState(""),[o,a]=O.useState(!1),l=async u=>{u.preventDefault(),r(!0),i("");try{await QD(Ie,t),a(!0)}catch(h){h.code==="auth/invalid-email"?i("Please enter a valid email address."):h.code==="auth/user-not-found"?i("No account found for that email."):h.code==="auth/too-many-requests"?i("Too many attempts. Please try again later."):h.code==="auth/network-request-failed"?i("Network error. Please check your connection."):i(h.message||"Could not send reset email.")}finally{r(!1)}};return d.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900",children:d.jsx("div",{className:"flex items-center justify-center p-4",children:d.jsxs("div",{className:"w-full max-w-md rounded-2xl bg-white/95 backdrop-blur shadow-2xl p-8",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl",children:"P"}),d.jsx("h1",{className:"text-2xl font-bold text-gray-800 mt-4",children:"Reset your password"}),d.jsx("p",{className:"text-sm text-gray-600 mt-2",children:"Enter your email and we’ll send a reset link."})]}),s&&d.jsx("div",{className:"mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700",children:s}),o?d.jsx("div",{className:"rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700",children:"Reset link sent! Check your inbox."}):d.jsxs("form",{onSubmit:l,className:"space-y-5",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),d.jsx("input",{type:"email",placeholder:"you@example.com",value:t,onChange:u=>e(u.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition",required:!0,disabled:n})]}),d.jsx("button",{type:"submit",disabled:n,className:"w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition",children:n?"Sending...":"Send reset link"})]}),d.jsx("div",{className:"mt-8 text-center text-sm",children:d.jsx(uo,{to:"/login",className:"text-blue-600 hover:text-blue-800",children:"← Back to login"})})]})})})}gp.createRoot(document.getElementById("root")).render(d.jsx(AE.StrictMode,{children:d.jsx(lP,{children:d.jsxs(tP,{children:[d.jsx(ja,{path:"/",element:d.jsx(p5,{})}),d.jsx(ja,{path:"/login",element:d.jsx(KN,{})}),d.jsx(ja,{path:"/register",element:d.jsx(m5,{})}),d.jsx(ja,{path:"/forgot-password",element:d.jsx(g5,{})})]})})}));
