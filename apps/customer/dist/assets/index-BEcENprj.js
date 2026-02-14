function wk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ek(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var SE={exports:{}},fh={},NE={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xl=Symbol.for("react.element"),xk=Symbol.for("react.portal"),Tk=Symbol.for("react.fragment"),Ik=Symbol.for("react.strict_mode"),Ck=Symbol.for("react.profiler"),Sk=Symbol.for("react.provider"),Nk=Symbol.for("react.context"),kk=Symbol.for("react.forward_ref"),bk=Symbol.for("react.suspense"),Rk=Symbol.for("react.memo"),Ak=Symbol.for("react.lazy"),zy=Symbol.iterator;function Pk(t){return t===null||typeof t!="object"?null:(t=zy&&t[zy]||t["@@iterator"],typeof t=="function"?t:null)}var kE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bE=Object.assign,RE={};function yo(t,e,n){this.props=t,this.context=e,this.refs=RE,this.updater=n||kE}yo.prototype.isReactComponent={};yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function AE(){}AE.prototype=yo.prototype;function Em(t,e,n){this.props=t,this.context=e,this.refs=RE,this.updater=n||kE}var xm=Em.prototype=new AE;xm.constructor=Em;bE(xm,yo.prototype);xm.isPureReactComponent=!0;var Wy=Array.isArray,PE=Object.prototype.hasOwnProperty,Tm={current:null},DE={key:!0,ref:!0,__self:!0,__source:!0};function OE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)PE.call(e,r)&&!DE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:xl,type:t,key:i,ref:o,props:s,_owner:Tm.current}}function Dk(t,e){return{$$typeof:xl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Im(t){return typeof t=="object"&&t!==null&&t.$$typeof===xl}function Ok(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qy=/\/+/g;function Fd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ok(""+t.key):e.toString(36)}function Dc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xl:case xk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Fd(o,0):r,Wy(s)?(n="",t!=null&&(n=t.replace(qy,"$&/")+"/"),Dc(s,e,n,"",function(u){return u})):s!=null&&(Im(s)&&(s=Dk(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(qy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Wy(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Fd(i,a);o+=Dc(i,e,n,l,s)}else if(l=Pk(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Fd(i,a++),o+=Dc(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oc(t,e,n){if(t==null)return t;var r=[],s=0;return Dc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Lk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ct={current:null},Oc={transition:null},Mk={ReactCurrentDispatcher:Ct,ReactCurrentBatchConfig:Oc,ReactCurrentOwner:Tm};function LE(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:oc,forEach:function(t,e,n){oc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return oc(t,function(){e++}),e},toArray:function(t){return oc(t,function(e){return e})||[]},only:function(t){if(!Im(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=yo;ae.Fragment=Tk;ae.Profiler=Ck;ae.PureComponent=Em;ae.StrictMode=Ik;ae.Suspense=bk;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mk;ae.act=LE;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=bE({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Tm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)PE.call(e,l)&&!DE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xl,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:Nk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sk,_context:t},t.Consumer=t};ae.createElement=OE;ae.createFactory=function(t){var e=OE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:kk,render:t}};ae.isValidElement=Im;ae.lazy=function(t){return{$$typeof:Ak,_payload:{_status:-1,_result:t},_init:Lk}};ae.memo=function(t,e){return{$$typeof:Rk,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Oc.transition;Oc.transition={};try{t()}finally{Oc.transition=e}};ae.unstable_act=LE;ae.useCallback=function(t,e){return Ct.current.useCallback(t,e)};ae.useContext=function(t){return Ct.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Ct.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Ct.current.useEffect(t,e)};ae.useId=function(){return Ct.current.useId()};ae.useImperativeHandle=function(t,e,n){return Ct.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Ct.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Ct.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Ct.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Ct.current.useReducer(t,e,n)};ae.useRef=function(t){return Ct.current.useRef(t)};ae.useState=function(t){return Ct.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Ct.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Ct.current.useTransition()};ae.version="18.3.1";NE.exports=ae;var P=NE.exports;const ME=Ek(P),jk=wk({__proto__:null,default:ME},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vk=P,Fk=Symbol.for("react.element"),Uk=Symbol.for("react.fragment"),Bk=Object.prototype.hasOwnProperty,$k=Vk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zk={key:!0,ref:!0,__self:!0,__source:!0};function jE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Bk.call(e,r)&&!zk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Fk,type:t,key:i,ref:o,props:s,_owner:$k.current}}fh.Fragment=Uk;fh.jsx=jE;fh.jsxs=jE;SE.exports=fh;var h=SE.exports,Lf={},VE={exports:{}},Ht={},FE={exports:{}},UE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var ee=z.length;z.push(X);e:for(;0<ee;){var ke=ee-1>>>1,je=z[ke];if(0<s(je,X))z[ke]=X,z[ee]=je,ee=ke;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],ee=z.pop();if(ee!==X){z[0]=ee;e:for(var ke=0,je=z.length,Cs=je>>>1;ke<Cs;){var Kt=2*(ke+1)-1,Ss=z[Kt],sn=Kt+1,vr=z[sn];if(0>s(Ss,ee))sn<je&&0>s(vr,Ss)?(z[ke]=vr,z[sn]=ee,ke=sn):(z[ke]=Ss,z[Kt]=ee,ke=Kt);else if(sn<je&&0>s(vr,ee))z[ke]=vr,z[sn]=ee,ke=sn;else break e}}return X}function s(z,X){var ee=z.sortIndex-X.sortIndex;return ee!==0?ee:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,m=3,y=!1,T=!1,b=!1,R=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var X=n(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=z)r(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function O(z){if(b=!1,S(z),!T)if(n(l)!==null)T=!0,st(j);else{var X=n(u);X!==null&&rn(O,X.startTime-z)}}function j(z,X){T=!1,b&&(b=!1,C(_),_=-1),y=!0;var ee=m;try{for(S(X),f=n(l);f!==null&&(!(f.expirationTime>X)||z&&!k());){var ke=f.callback;if(typeof ke=="function"){f.callback=null,m=f.priorityLevel;var je=ke(f.expirationTime<=X);X=t.unstable_now(),typeof je=="function"?f.callback=je:f===n(l)&&r(l),S(X)}else r(l);f=n(l)}if(f!==null)var Cs=!0;else{var Kt=n(u);Kt!==null&&rn(O,Kt.startTime-X),Cs=!1}return Cs}finally{f=null,m=ee,y=!1}}var M=!1,w=null,_=-1,x=5,N=-1;function k(){return!(t.unstable_now()-N<x)}function A(){if(w!==null){var z=t.unstable_now();N=z;var X=!0;try{X=w(!0,z)}finally{X?I():(M=!1,w=null)}}else M=!1}var I;if(typeof E=="function")I=function(){E(A)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,xe=de.port2;de.port1.onmessage=A,I=function(){xe.postMessage(null)}}else I=function(){R(A,0)};function st(z){w=z,M||(M=!0,I())}function rn(z,X){_=R(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){T||y||(T=!0,st(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var ee=m;m=X;try{return z()}finally{m=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=m;m=z;try{return X()}finally{m=ee}},t.unstable_scheduleCallback=function(z,X,ee){var ke=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ke+ee:ke):ee=ke,z){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=ee+je,z={id:d++,callback:X,priorityLevel:z,startTime:ee,expirationTime:je,sortIndex:-1},ee>ke?(z.sortIndex=ee,e(u,z),n(l)===null&&z===n(u)&&(b?(C(_),_=-1):b=!0,rn(O,ee-ke))):(z.sortIndex=je,e(l,z),T||y||(T=!0,st(j))),z},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(z){var X=m;return function(){var ee=m;m=X;try{return z.apply(this,arguments)}finally{m=ee}}}})(UE);FE.exports=UE;var Wk=FE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qk=P,qt=Wk;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var BE=new Set,Fa={};function si(t,e){Xi(t,e),Xi(t+"Capture",e)}function Xi(t,e){for(Fa[t]=e,t=0;t<e.length;t++)BE.add(e[t])}var rr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,Hk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hy={},Gy={};function Gk(t){return Mf.call(Gy,t)?!0:Mf.call(Hy,t)?!1:Hk.test(t)?Gy[t]=!0:(Hy[t]=!0,!1)}function Kk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Qk(t,e,n,r){if(e===null||typeof e>"u"||Kk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function Sm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cm,Sm);lt[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cm,Sm);lt[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cm,Sm);lt[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nm(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Qk(e,n,s,r)&&(n=null),r||s===null?Gk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var pr=qk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ac=Symbol.for("react.element"),xi=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),km=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),zE=Symbol.for("react.context"),bm=Symbol.for("react.forward_ref"),Vf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),Rm=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),WE=Symbol.for("react.offscreen"),Ky=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=Ky&&t[Ky]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Ud;function ca(t){if(Ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ud=e&&e[1]||""}return`
`+Ud+t}var Bd=!1;function $d(t,e){if(!t||Bd)return"";Bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function Yk(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=$d(t.type,!1),t;case 11:return t=$d(t.type.render,!1),t;case 1:return t=$d(t.type,!0),t;default:return""}}function Uf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case xi:return"Portal";case jf:return"Profiler";case km:return"StrictMode";case Vf:return"Suspense";case Ff:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zE:return(t.displayName||"Context")+".Consumer";case $E:return(t._context.displayName||"Context")+".Provider";case bm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rm:return e=t.displayName||null,e!==null?e:Uf(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Uf(t(e))}catch{}}return null}function Xk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uf(e);case 8:return e===km?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Jk(t){var e=qE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function lc(t){t._valueTracker||(t._valueTracker=Jk(t))}function HE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bf(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Qy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function GE(t,e){e=e.checked,e!=null&&Nm(t,"checked",e,!1)}function $f(t,e){GE(t,e);var n=rs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zf(t,e.type,n):e.hasOwnProperty("defaultValue")&&zf(t,e.type,rs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Yy(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zf(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function ji(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Xy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ua(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rs(n)}}function KE(t,e){var n=rs(e.value),r=rs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Jy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function QE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?QE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var cc,YE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(cc=cc||document.createElement("div"),cc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zk=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){Zk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function XE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function JE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=XE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var e1=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hf(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Gf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kf=null;function Am(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qf=null,Vi=null,Fi=null;function Zy(t){if(t=Cl(t)){if(typeof Qf!="function")throw Error(U(280));var e=t.stateNode;e&&(e=yh(e),Qf(t.stateNode,t.type,e))}}function ZE(t){Vi?Fi?Fi.push(t):Fi=[t]:Vi=t}function ex(){if(Vi){var t=Vi,e=Fi;if(Fi=Vi=null,Zy(t),e)for(t=0;t<e.length;t++)Zy(e[t])}}function tx(t,e){return t(e)}function nx(){}var zd=!1;function rx(t,e,n){if(zd)return t(e,n);zd=!0;try{return tx(t,e,n)}finally{zd=!1,(Vi!==null||Fi!==null)&&(nx(),ex())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var r=yh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Yf=!1;if(rr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){Yf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{Yf=!1}function t1(t,e,n,r,s,i,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var wa=!1,su=null,iu=!1,Xf=null,n1={onError:function(t){wa=!0,su=t}};function r1(t,e,n,r,s,i,o,a,l){wa=!1,su=null,t1.apply(n1,arguments)}function s1(t,e,n,r,s,i,o,a,l){if(r1.apply(this,arguments),wa){if(wa){var u=su;wa=!1,su=null}else throw Error(U(198));iu||(iu=!0,Xf=u)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ev(t){if(ii(t)!==t)throw Error(U(188))}function i1(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ev(s),t;if(i===r)return ev(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function ix(t){return t=i1(t),t!==null?ox(t):null}function ox(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ox(t);if(e!==null)return e;t=t.sibling}return null}var ax=qt.unstable_scheduleCallback,tv=qt.unstable_cancelCallback,o1=qt.unstable_shouldYield,a1=qt.unstable_requestPaint,Fe=qt.unstable_now,l1=qt.unstable_getCurrentPriorityLevel,Pm=qt.unstable_ImmediatePriority,lx=qt.unstable_UserBlockingPriority,ou=qt.unstable_NormalPriority,c1=qt.unstable_LowPriority,cx=qt.unstable_IdlePriority,ph=null,An=null;function u1(t){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(ph,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:f1,h1=Math.log,d1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(h1(t)/d1|0)|0}var uc=64,hc=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ha(a):(i&=o,i!==0&&(r=ha(i)))}else o=n&~s,o!==0?r=ha(o):i!==0&&(r=ha(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),s=1<<n,r|=t[n],e&=~s;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-mn(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=p1(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ux(){var t=uc;return uc<<=1,!(uc&4194240)&&(uc=64),t}function Wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Dm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function hx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dx,Om,fx,px,mx,Zf=!1,dc=[],Br=null,$r=null,zr=null,$a=new Map,za=new Map,Rr=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nv(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":$a.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Jo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Cl(e),e!==null&&Om(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function y1(t,e,n,r,s){switch(e){case"focusin":return Br=Jo(Br,t,e,n,r,s),!0;case"dragenter":return $r=Jo($r,t,e,n,r,s),!0;case"mouseover":return zr=Jo(zr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return $a.set(i,Jo($a.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,za.set(i,Jo(za.get(i)||null,t,e,n,r,s)),!0}return!1}function gx(t){var e=Ms(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=sx(n),e!==null){t.blockedOn=e,mx(t.priority,function(){fx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ep(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Kf=r,n.target.dispatchEvent(r),Kf=null}else return e=Cl(n),e!==null&&Om(e),t.blockedOn=n,!1;e.shift()}return!0}function rv(t,e,n){Lc(t)&&n.delete(e)}function v1(){Zf=!1,Br!==null&&Lc(Br)&&(Br=null),$r!==null&&Lc($r)&&($r=null),zr!==null&&Lc(zr)&&(zr=null),$a.forEach(rv),za.forEach(rv)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Zf||(Zf=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,v1)))}function Wa(t){function e(s){return Zo(s,t)}if(0<dc.length){Zo(dc[0],t);for(var n=1;n<dc.length;n++){var r=dc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Br!==null&&Zo(Br,t),$r!==null&&Zo($r,t),zr!==null&&Zo(zr,t),$a.forEach(e),za.forEach(e),n=0;n<Rr.length;n++)r=Rr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rr.length&&(n=Rr[0],n.blockedOn===null);)gx(n),n.blockedOn===null&&Rr.shift()}var Ui=pr.ReactCurrentBatchConfig,lu=!0;function w1(t,e,n,r){var s=ge,i=Ui.transition;Ui.transition=null;try{ge=1,Lm(t,e,n,r)}finally{ge=s,Ui.transition=i}}function E1(t,e,n,r){var s=ge,i=Ui.transition;Ui.transition=null;try{ge=4,Lm(t,e,n,r)}finally{ge=s,Ui.transition=i}}function Lm(t,e,n,r){if(lu){var s=ep(t,e,n,r);if(s===null)ef(t,e,r,cu,n),nv(t,r);else if(y1(s,t,e,n,r))r.stopPropagation();else if(nv(t,r),e&4&&-1<_1.indexOf(t)){for(;s!==null;){var i=Cl(s);if(i!==null&&dx(i),i=ep(t,e,n,r),i===null&&ef(t,e,r,cu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ef(t,e,r,null,n)}}var cu=null;function ep(t,e,n,r){if(cu=null,t=Am(r),t=Ms(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function _x(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Pm:return 1;case lx:return 4;case ou:case c1:return 16;case cx:return 536870912;default:return 16}default:return 16}}var jr=null,Mm=null,Mc=null;function yx(){if(Mc)return Mc;var t,e=Mm,n=e.length,r,s="value"in jr?jr.value:jr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Mc=s.slice(t,1<r?1-r:void 0)}function jc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fc(){return!0}function sv(){return!1}function Gt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fc:sv,this.isPropagationStopped=sv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fc)},persist:function(){},isPersistent:fc}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jm=Gt(vo),Il=De({},vo,{view:0,detail:0}),x1=Gt(Il),qd,Hd,ea,mh=De({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(qd=t.screenX-ea.screenX,Hd=t.screenY-ea.screenY):Hd=qd=0,ea=t),qd)},movementY:function(t){return"movementY"in t?t.movementY:Hd}}),iv=Gt(mh),T1=De({},mh,{dataTransfer:0}),I1=Gt(T1),C1=De({},Il,{relatedTarget:0}),Gd=Gt(C1),S1=De({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),N1=Gt(S1),k1=De({},vo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b1=Gt(k1),R1=De({},vo,{data:0}),ov=Gt(R1),A1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function Vm(){return O1}var L1=De({},Il,{key:function(t){if(t.key){var e=A1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(t){return t.type==="keypress"?jc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M1=Gt(L1),j1=De({},mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),av=Gt(j1),V1=De({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),F1=Gt(V1),U1=De({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=Gt(U1),$1=De({},mh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),z1=Gt($1),W1=[9,13,27,32],Fm=rr&&"CompositionEvent"in window,Ea=null;rr&&"documentMode"in document&&(Ea=document.documentMode);var q1=rr&&"TextEvent"in window&&!Ea,vx=rr&&(!Fm||Ea&&8<Ea&&11>=Ea),lv=" ",cv=!1;function wx(t,e){switch(t){case"keyup":return W1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ex(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function H1(t,e){switch(t){case"compositionend":return Ex(e);case"keypress":return e.which!==32?null:(cv=!0,lv);case"textInput":return t=e.data,t===lv&&cv?null:t;default:return null}}function G1(t,e){if(Ii)return t==="compositionend"||!Fm&&wx(t,e)?(t=yx(),Mc=Mm=jr=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vx&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function xx(t,e,n,r){ZE(r),e=uu(e,"onChange"),0<e.length&&(n=new jm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xa=null,qa=null;function Q1(t){Dx(t,0)}function gh(t){var e=Ni(t);if(HE(e))return t}function Y1(t,e){if(t==="change")return e}var Tx=!1;if(rr){var Kd;if(rr){var Qd="oninput"in document;if(!Qd){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),Qd=typeof hv.oninput=="function"}Kd=Qd}else Kd=!1;Tx=Kd&&(!document.documentMode||9<document.documentMode)}function dv(){xa&&(xa.detachEvent("onpropertychange",Ix),qa=xa=null)}function Ix(t){if(t.propertyName==="value"&&gh(qa)){var e=[];xx(e,qa,t,Am(t)),rx(Q1,e)}}function X1(t,e,n){t==="focusin"?(dv(),xa=e,qa=n,xa.attachEvent("onpropertychange",Ix)):t==="focusout"&&dv()}function J1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gh(qa)}function Z1(t,e){if(t==="click")return gh(e)}function eb(t,e){if(t==="input"||t==="change")return gh(e)}function tb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:tb;function Ha(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Mf.call(e,s)||!wn(t[s],e[s]))return!1}return!0}function fv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pv(t,e){var n=fv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fv(n)}}function Cx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sx(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Um(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nb(t){var e=Sx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cx(n.ownerDocument.documentElement,n)){if(r!==null&&Um(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=pv(n,i);var o=pv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rb=rr&&"documentMode"in document&&11>=document.documentMode,Ci=null,tp=null,Ta=null,np=!1;function mv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;np||Ci==null||Ci!==ru(r)||(r=Ci,"selectionStart"in r&&Um(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&Ha(Ta,r)||(Ta=r,r=uu(tp,"onSelect"),0<r.length&&(e=new jm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ci)))}function pc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:pc("Animation","AnimationEnd"),animationiteration:pc("Animation","AnimationIteration"),animationstart:pc("Animation","AnimationStart"),transitionend:pc("Transition","TransitionEnd")},Yd={},Nx={};rr&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function _h(t){if(Yd[t])return Yd[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nx)return Yd[t]=e[n];return t}var kx=_h("animationend"),bx=_h("animationiteration"),Rx=_h("animationstart"),Ax=_h("transitionend"),Px=new Map,gv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ms(t,e){Px.set(t,e),si(e,[t])}for(var Xd=0;Xd<gv.length;Xd++){var Jd=gv[Xd],sb=Jd.toLowerCase(),ib=Jd[0].toUpperCase()+Jd.slice(1);ms(sb,"on"+ib)}ms(kx,"onAnimationEnd");ms(bx,"onAnimationIteration");ms(Rx,"onAnimationStart");ms("dblclick","onDoubleClick");ms("focusin","onFocus");ms("focusout","onBlur");ms(Ax,"onTransitionEnd");Xi("onMouseEnter",["mouseout","mouseover"]);Xi("onMouseLeave",["mouseout","mouseover"]);Xi("onPointerEnter",["pointerout","pointerover"]);Xi("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ob=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function _v(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,s1(r,e,void 0,t),t.currentTarget=null}function Dx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;_v(s,a,u),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;_v(s,a,u),i=l}}}if(iu)throw t=Xf,iu=!1,Xf=null,t}function Ie(t,e){var n=e[ap];n===void 0&&(n=e[ap]=new Set);var r=t+"__bubble";n.has(r)||(Ox(e,t,2,!1),n.add(r))}function Zd(t,e,n){var r=0;e&&(r|=4),Ox(n,t,r,e)}var mc="_reactListening"+Math.random().toString(36).slice(2);function Ga(t){if(!t[mc]){t[mc]=!0,BE.forEach(function(n){n!=="selectionchange"&&(ob.has(n)||Zd(n,!1,t),Zd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mc]||(e[mc]=!0,Zd("selectionchange",!1,e))}}function Ox(t,e,n,r){switch(_x(e)){case 1:var s=w1;break;case 4:s=E1;break;default:s=Lm}n=s.bind(null,e,n,t),s=void 0,!Yf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ef(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Ms(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}rx(function(){var u=i,d=Am(n),f=[];e:{var m=Px.get(t);if(m!==void 0){var y=jm,T=t;switch(t){case"keypress":if(jc(n)===0)break e;case"keydown":case"keyup":y=M1;break;case"focusin":T="focus",y=Gd;break;case"focusout":T="blur",y=Gd;break;case"beforeblur":case"afterblur":y=Gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=F1;break;case kx:case bx:case Rx:y=N1;break;case Ax:y=B1;break;case"scroll":y=x1;break;case"wheel":y=z1;break;case"copy":case"cut":case"paste":y=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=av}var b=(e&4)!==0,R=!b&&t==="scroll",C=b?m!==null?m+"Capture":null:m;b=[];for(var E=u,S;E!==null;){S=E;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,C!==null&&(O=Ba(E,C),O!=null&&b.push(Ka(E,O,S)))),R)break;E=E.return}0<b.length&&(m=new y(m,T,null,n,d),f.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Kf&&(T=n.relatedTarget||n.fromElement)&&(Ms(T)||T[sr]))break e;if((y||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,y?(T=n.relatedTarget||n.toElement,y=u,T=T?Ms(T):null,T!==null&&(R=ii(T),T!==R||T.tag!==5&&T.tag!==6)&&(T=null)):(y=null,T=u),y!==T)){if(b=iv,O="onMouseLeave",C="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(b=av,O="onPointerLeave",C="onPointerEnter",E="pointer"),R=y==null?m:Ni(y),S=T==null?m:Ni(T),m=new b(O,E+"leave",y,n,d),m.target=R,m.relatedTarget=S,O=null,Ms(d)===u&&(b=new b(C,E+"enter",T,n,d),b.target=S,b.relatedTarget=R,O=b),R=O,y&&T)t:{for(b=y,C=T,E=0,S=b;S;S=gi(S))E++;for(S=0,O=C;O;O=gi(O))S++;for(;0<E-S;)b=gi(b),E--;for(;0<S-E;)C=gi(C),S--;for(;E--;){if(b===C||C!==null&&b===C.alternate)break t;b=gi(b),C=gi(C)}b=null}else b=null;y!==null&&yv(f,m,y,b,!1),T!==null&&R!==null&&yv(f,R,T,b,!0)}}e:{if(m=u?Ni(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var j=Y1;else if(uv(m))if(Tx)j=eb;else{j=J1;var M=X1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Z1);if(j&&(j=j(t,u))){xx(f,j,n,d);break e}M&&M(t,m,u),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&zf(m,"number",m.value)}switch(M=u?Ni(u):window,t){case"focusin":(uv(M)||M.contentEditable==="true")&&(Ci=M,tp=u,Ta=null);break;case"focusout":Ta=tp=Ci=null;break;case"mousedown":np=!0;break;case"contextmenu":case"mouseup":case"dragend":np=!1,mv(f,n,d);break;case"selectionchange":if(rb)break;case"keydown":case"keyup":mv(f,n,d)}var w;if(Fm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ii?wx(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(vx&&n.locale!=="ko"&&(Ii||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ii&&(w=yx()):(jr=d,Mm="value"in jr?jr.value:jr.textContent,Ii=!0)),M=uu(u,_),0<M.length&&(_=new ov(_,t,null,n,d),f.push({event:_,listeners:M}),w?_.data=w:(w=Ex(n),w!==null&&(_.data=w)))),(w=q1?H1(t,n):G1(t,n))&&(u=uu(u,"onBeforeInput"),0<u.length&&(d=new ov("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=w))}Dx(f,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Ba(t,n),i!=null&&r.unshift(Ka(t,i,s)),i=Ba(t,e),i!=null&&r.push(Ka(t,i,s))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,s?(l=Ba(n,i),l!=null&&o.unshift(Ka(n,l,a))):s||(l=Ba(n,i),l!=null&&o.push(Ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ab=/\r\n?/g,lb=/\u0000|\uFFFD/g;function vv(t){return(typeof t=="string"?t:""+t).replace(ab,`
`).replace(lb,"")}function gc(t,e,n){if(e=vv(e),vv(t)!==e&&n)throw Error(U(425))}function hu(){}var rp=null,sp=null;function ip(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var op=typeof setTimeout=="function"?setTimeout:void 0,cb=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,ub=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(hb)}:op;function hb(t){setTimeout(function(){throw t})}function tf(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Wa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Wa(e)}function Wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ev(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),bn="__reactFiber$"+wo,Qa="__reactProps$"+wo,sr="__reactContainer$"+wo,ap="__reactEvents$"+wo,db="__reactListeners$"+wo,fb="__reactHandles$"+wo;function Ms(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[sr]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ev(t);t!==null;){if(n=t[bn])return n;t=Ev(t)}return e}t=n,n=t.parentNode}return null}function Cl(t){return t=t[bn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ni(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function yh(t){return t[Qa]||null}var lp=[],ki=-1;function gs(t){return{current:t}}function Se(t){0>ki||(t.current=lp[ki],lp[ki]=null,ki--)}function Ee(t,e){ki++,lp[ki]=t.current,t.current=e}var ss={},vt=gs(ss),Dt=gs(!1),qs=ss;function Ji(t,e){var n=t.type.contextTypes;if(!n)return ss;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ot(t){return t=t.childContextTypes,t!=null}function du(){Se(Dt),Se(vt)}function xv(t,e,n){if(vt.current!==ss)throw Error(U(168));Ee(vt,e),Ee(Dt,n)}function Lx(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,Xk(t)||"Unknown",s));return De({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ss,qs=vt.current,Ee(vt,t),Ee(Dt,Dt.current),!0}function Tv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=Lx(t,e,qs),r.__reactInternalMemoizedMergedChildContext=t,Se(Dt),Se(vt),Ee(vt,t)):Se(Dt),Ee(Dt,n)}var Hn=null,vh=!1,nf=!1;function Mx(t){Hn===null?Hn=[t]:Hn.push(t)}function pb(t){vh=!0,Mx(t)}function _s(){if(!nf&&Hn!==null){nf=!0;var t=0,e=ge;try{var n=Hn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Hn=null,vh=!1}catch(s){throw Hn!==null&&(Hn=Hn.slice(t+1)),ax(Pm,_s),s}finally{ge=e,nf=!1}}return null}var bi=[],Ri=0,pu=null,mu=0,Qt=[],Yt=0,Hs=null,Gn=1,Kn="";function Ps(t,e){bi[Ri++]=mu,bi[Ri++]=pu,pu=t,mu=e}function jx(t,e,n){Qt[Yt++]=Gn,Qt[Yt++]=Kn,Qt[Yt++]=Hs,Hs=t;var r=Gn;t=Kn;var s=32-mn(r)-1;r&=~(1<<s),n+=1;var i=32-mn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Gn=1<<32-mn(e)+s|n<<s|r,Kn=i+t}else Gn=1<<i|n<<s|r,Kn=t}function Bm(t){t.return!==null&&(Ps(t,1),jx(t,1,0))}function $m(t){for(;t===pu;)pu=bi[--Ri],bi[Ri]=null,mu=bi[--Ri],bi[Ri]=null;for(;t===Hs;)Hs=Qt[--Yt],Qt[Yt]=null,Kn=Qt[--Yt],Qt[Yt]=null,Gn=Qt[--Yt],Qt[Yt]=null}var $t=null,Ut=null,be=!1,cn=null;function Vx(t,e){var n=Jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Iv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Ut=Wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Ut=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hs!==null?{id:Gn,overflow:Kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Ut=null,!0):!1;default:return!1}}function cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function up(t){if(be){var e=Ut;if(e){var n=e;if(!Iv(t,e)){if(cp(t))throw Error(U(418));e=Wr(n.nextSibling);var r=$t;e&&Iv(t,e)?Vx(r,n):(t.flags=t.flags&-4097|2,be=!1,$t=t)}}else{if(cp(t))throw Error(U(418));t.flags=t.flags&-4097|2,be=!1,$t=t}}}function Cv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function _c(t){if(t!==$t)return!1;if(!be)return Cv(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ip(t.type,t.memoizedProps)),e&&(e=Ut)){if(cp(t))throw Fx(),Error(U(418));for(;e;)Vx(t,e),e=Wr(e.nextSibling)}if(Cv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ut=Wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ut=null}}else Ut=$t?Wr(t.stateNode.nextSibling):null;return!0}function Fx(){for(var t=Ut;t;)t=Wr(t.nextSibling)}function Zi(){Ut=$t=null,be=!1}function zm(t){cn===null?cn=[t]:cn.push(t)}var mb=pr.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function yc(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sv(t){var e=t._init;return e(t._payload)}function Ux(t){function e(C,E){if(t){var S=C.deletions;S===null?(C.deletions=[E],C.flags|=16):S.push(E)}}function n(C,E){if(!t)return null;for(;E!==null;)e(C,E),E=E.sibling;return null}function r(C,E){for(C=new Map;E!==null;)E.key!==null?C.set(E.key,E):C.set(E.index,E),E=E.sibling;return C}function s(C,E){return C=Kr(C,E),C.index=0,C.sibling=null,C}function i(C,E,S){return C.index=S,t?(S=C.alternate,S!==null?(S=S.index,S<E?(C.flags|=2,E):S):(C.flags|=2,E)):(C.flags|=1048576,E)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,E,S,O){return E===null||E.tag!==6?(E=uf(S,C.mode,O),E.return=C,E):(E=s(E,S),E.return=C,E)}function l(C,E,S,O){var j=S.type;return j===Ti?d(C,E,S.props.children,O,S.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Sv(j)===E.type)?(O=s(E,S.props),O.ref=ta(C,E,S),O.return=C,O):(O=Wc(S.type,S.key,S.props,null,C.mode,O),O.ref=ta(C,E,S),O.return=C,O)}function u(C,E,S,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==S.containerInfo||E.stateNode.implementation!==S.implementation?(E=hf(S,C.mode,O),E.return=C,E):(E=s(E,S.children||[]),E.return=C,E)}function d(C,E,S,O,j){return E===null||E.tag!==7?(E=$s(S,C.mode,O,j),E.return=C,E):(E=s(E,S),E.return=C,E)}function f(C,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return E=uf(""+E,C.mode,S),E.return=C,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ac:return S=Wc(E.type,E.key,E.props,null,C.mode,S),S.ref=ta(C,null,E),S.return=C,S;case xi:return E=hf(E,C.mode,S),E.return=C,E;case kr:var O=E._init;return f(C,O(E._payload),S)}if(ua(E)||Yo(E))return E=$s(E,C.mode,S,null),E.return=C,E;yc(C,E)}return null}function m(C,E,S,O){var j=E!==null?E.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(C,E,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ac:return S.key===j?l(C,E,S,O):null;case xi:return S.key===j?u(C,E,S,O):null;case kr:return j=S._init,m(C,E,j(S._payload),O)}if(ua(S)||Yo(S))return j!==null?null:d(C,E,S,O,null);yc(C,S)}return null}function y(C,E,S,O,j){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(S)||null,a(E,C,""+O,j);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ac:return C=C.get(O.key===null?S:O.key)||null,l(E,C,O,j);case xi:return C=C.get(O.key===null?S:O.key)||null,u(E,C,O,j);case kr:var M=O._init;return y(C,E,S,M(O._payload),j)}if(ua(O)||Yo(O))return C=C.get(S)||null,d(E,C,O,j,null);yc(E,O)}return null}function T(C,E,S,O){for(var j=null,M=null,w=E,_=E=0,x=null;w!==null&&_<S.length;_++){w.index>_?(x=w,w=null):x=w.sibling;var N=m(C,w,S[_],O);if(N===null){w===null&&(w=x);break}t&&w&&N.alternate===null&&e(C,w),E=i(N,E,_),M===null?j=N:M.sibling=N,M=N,w=x}if(_===S.length)return n(C,w),be&&Ps(C,_),j;if(w===null){for(;_<S.length;_++)w=f(C,S[_],O),w!==null&&(E=i(w,E,_),M===null?j=w:M.sibling=w,M=w);return be&&Ps(C,_),j}for(w=r(C,w);_<S.length;_++)x=y(w,C,_,S[_],O),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?_:x.key),E=i(x,E,_),M===null?j=x:M.sibling=x,M=x);return t&&w.forEach(function(k){return e(C,k)}),be&&Ps(C,_),j}function b(C,E,S,O){var j=Yo(S);if(typeof j!="function")throw Error(U(150));if(S=j.call(S),S==null)throw Error(U(151));for(var M=j=null,w=E,_=E=0,x=null,N=S.next();w!==null&&!N.done;_++,N=S.next()){w.index>_?(x=w,w=null):x=w.sibling;var k=m(C,w,N.value,O);if(k===null){w===null&&(w=x);break}t&&w&&k.alternate===null&&e(C,w),E=i(k,E,_),M===null?j=k:M.sibling=k,M=k,w=x}if(N.done)return n(C,w),be&&Ps(C,_),j;if(w===null){for(;!N.done;_++,N=S.next())N=f(C,N.value,O),N!==null&&(E=i(N,E,_),M===null?j=N:M.sibling=N,M=N);return be&&Ps(C,_),j}for(w=r(C,w);!N.done;_++,N=S.next())N=y(w,C,_,N.value,O),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?_:N.key),E=i(N,E,_),M===null?j=N:M.sibling=N,M=N);return t&&w.forEach(function(A){return e(C,A)}),be&&Ps(C,_),j}function R(C,E,S,O){if(typeof S=="object"&&S!==null&&S.type===Ti&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ac:e:{for(var j=S.key,M=E;M!==null;){if(M.key===j){if(j=S.type,j===Ti){if(M.tag===7){n(C,M.sibling),E=s(M,S.props.children),E.return=C,C=E;break e}}else if(M.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===kr&&Sv(j)===M.type){n(C,M.sibling),E=s(M,S.props),E.ref=ta(C,M,S),E.return=C,C=E;break e}n(C,M);break}else e(C,M);M=M.sibling}S.type===Ti?(E=$s(S.props.children,C.mode,O,S.key),E.return=C,C=E):(O=Wc(S.type,S.key,S.props,null,C.mode,O),O.ref=ta(C,E,S),O.return=C,C=O)}return o(C);case xi:e:{for(M=S.key;E!==null;){if(E.key===M)if(E.tag===4&&E.stateNode.containerInfo===S.containerInfo&&E.stateNode.implementation===S.implementation){n(C,E.sibling),E=s(E,S.children||[]),E.return=C,C=E;break e}else{n(C,E);break}else e(C,E);E=E.sibling}E=hf(S,C.mode,O),E.return=C,C=E}return o(C);case kr:return M=S._init,R(C,E,M(S._payload),O)}if(ua(S))return T(C,E,S,O);if(Yo(S))return b(C,E,S,O);yc(C,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,E!==null&&E.tag===6?(n(C,E.sibling),E=s(E,S),E.return=C,C=E):(n(C,E),E=uf(S,C.mode,O),E.return=C,C=E),o(C)):n(C,E)}return R}var eo=Ux(!0),Bx=Ux(!1),gu=gs(null),_u=null,Ai=null,Wm=null;function qm(){Wm=Ai=_u=null}function Hm(t){var e=gu.current;Se(gu),t._currentValue=e}function hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){_u=t,Wm=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Wm!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(_u===null)throw Error(U(308));Ai=t,_u.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var js=null;function Gm(t){js===null?js=[t]:js.push(t)}function $x(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Gm(e)):(n.next=s.next,s.next=n),e.interleaved=n,ir(t,r)}function ir(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var br=!1;function Km(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,ir(t,n)}return s=r.interleaved,s===null?(e.next=e,Gm(r)):(e.next=s.next,s.next=e),r.interleaved=e,ir(t,n)}function Vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dm(t,n)}}function Nv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function yu(t,e,n,r){var s=t.updateQueue;br=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?i=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,d=u=l=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,b=a;switch(m=e,y=n,b.tag){case 1:if(T=b.payload,typeof T=="function"){f=T.call(y,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=b.payload,m=typeof T=="function"?T.call(y,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:br=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=f):d=d.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(d===null&&(l=f),s.baseState=l,s.firstBaseUpdate=u,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ks|=o,t.lanes=o,t.memoizedState=f}}function kv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Sl={},Pn=gs(Sl),Ya=gs(Sl),Xa=gs(Sl);function Vs(t){if(t===Sl)throw Error(U(174));return t}function Qm(t,e){switch(Ee(Xa,e),Ee(Ya,t),Ee(Pn,Sl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}Se(Pn),Ee(Pn,e)}function to(){Se(Pn),Se(Ya),Se(Xa)}function Wx(t){Vs(Xa.current);var e=Vs(Pn.current),n=qf(e,t.type);e!==n&&(Ee(Ya,t),Ee(Pn,n))}function Ym(t){Ya.current===t&&(Se(Pn),Se(Ya))}var Re=gs(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rf=[];function Xm(){for(var t=0;t<rf.length;t++)rf[t]._workInProgressVersionPrimary=null;rf.length=0}var Fc=pr.ReactCurrentDispatcher,sf=pr.ReactCurrentBatchConfig,Gs=0,Ae=null,Ge=null,et=null,wu=!1,Ia=!1,Ja=0,gb=0;function ht(){throw Error(U(321))}function Jm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function Zm(t,e,n,r,s,i){if(Gs=i,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fc.current=t===null||t.memoizedState===null?wb:Eb,t=n(r,s),Ia){i=0;do{if(Ia=!1,Ja=0,25<=i)throw Error(U(301));i+=1,et=Ge=null,e.updateQueue=null,Fc.current=xb,t=n(r,s)}while(Ia)}if(Fc.current=Eu,e=Ge!==null&&Ge.next!==null,Gs=0,et=Ge=Ae=null,wu=!1,e)throw Error(U(300));return t}function eg(){var t=Ja!==0;return Ja=0,t}function Nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ae.memoizedState=et=t:et=et.next=t,et}function nn(){if(Ge===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=et===null?Ae.memoizedState:et.next;if(e!==null)et=e,Ge=t;else{if(t===null)throw Error(U(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},et===null?Ae.memoizedState=et=t:et=et.next=t}return et}function Za(t,e){return typeof e=="function"?e(t):e}function of(t){var e=nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ge,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,u=i;do{var d=u.lane;if((Gs&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Ae.lanes|=d,Ks|=d}u=u.next}while(u!==null&&u!==i);l===null?o=r:l.next=a,wn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ae.lanes|=i,Ks|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function af(t){var e=nn(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);wn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function qx(){}function Hx(t,e){var n=Ae,r=nn(),s=e(),i=!wn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,tg(Qx.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||et!==null&&et.memoizedState.tag&1){if(n.flags|=2048,el(9,Kx.bind(null,n,r,s,e),void 0,null),rt===null)throw Error(U(349));Gs&30||Gx(n,e,s)}return s}function Gx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kx(t,e,n,r){e.value=n,e.getSnapshot=r,Yx(e)&&Xx(t)}function Qx(t,e,n){return n(function(){Yx(e)&&Xx(t)})}function Yx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function Xx(t){var e=ir(t,1);e!==null&&gn(e,t,1,-1)}function bv(t){var e=Nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=vb.bind(null,Ae,t),[e.memoizedState,t]}function el(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Jx(){return nn().memoizedState}function Uc(t,e,n,r){var s=Nn();Ae.flags|=t,s.memoizedState=el(1|e,n,void 0,r===void 0?null:r)}function wh(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(Ge!==null){var o=Ge.memoizedState;if(i=o.destroy,r!==null&&Jm(r,o.deps)){s.memoizedState=el(e,n,i,r);return}}Ae.flags|=t,s.memoizedState=el(1|e,n,i,r)}function Rv(t,e){return Uc(8390656,8,t,e)}function tg(t,e){return wh(2048,8,t,e)}function Zx(t,e){return wh(4,2,t,e)}function eT(t,e){return wh(4,4,t,e)}function tT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function nT(t,e,n){return n=n!=null?n.concat([t]):null,wh(4,4,tT.bind(null,e,t),n)}function ng(){}function rT(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sT(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function iT(t,e,n){return Gs&21?(wn(n,e)||(n=ux(),Ae.lanes|=n,Ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function _b(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=sf.transition;sf.transition={};try{t(!1),e()}finally{ge=n,sf.transition=r}}function oT(){return nn().memoizedState}function yb(t,e,n){var r=Gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aT(t))lT(e,n);else if(n=$x(t,e,n,r),n!==null){var s=It();gn(n,t,r,s),cT(n,e,r)}}function vb(t,e,n){var r=Gr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aT(t))lT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,wn(a,o)){var l=e.interleaved;l===null?(s.next=s,Gm(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=$x(t,e,s,r),n!==null&&(s=It(),gn(n,t,r,s),cT(n,e,r))}}function aT(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function lT(t,e){Ia=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dm(t,n)}}var Eu={readContext:tn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},wb={readContext:tn,useCallback:function(t,e){return Nn().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:Rv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uc(4194308,4,tT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uc(4,2,t,e)},useMemo:function(t,e){var n=Nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=yb.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=Nn();return t={current:t},e.memoizedState=t},useState:bv,useDebugValue:ng,useDeferredValue:function(t){return Nn().memoizedState=t},useTransition:function(){var t=bv(!1),e=t[0];return t=_b.bind(null,t[1]),Nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,s=Nn();if(be){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),rt===null)throw Error(U(349));Gs&30||Gx(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Rv(Qx.bind(null,r,i,t),[t]),r.flags|=2048,el(9,Kx.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Nn(),e=rt.identifierPrefix;if(be){var n=Kn,r=Gn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Eb={readContext:tn,useCallback:rT,useContext:tn,useEffect:tg,useImperativeHandle:nT,useInsertionEffect:Zx,useLayoutEffect:eT,useMemo:sT,useReducer:of,useRef:Jx,useState:function(){return of(Za)},useDebugValue:ng,useDeferredValue:function(t){var e=nn();return iT(e,Ge.memoizedState,t)},useTransition:function(){var t=of(Za)[0],e=nn().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Hx,useId:oT,unstable_isNewReconciler:!1},xb={readContext:tn,useCallback:rT,useContext:tn,useEffect:tg,useImperativeHandle:nT,useInsertionEffect:Zx,useLayoutEffect:eT,useMemo:sT,useReducer:af,useRef:Jx,useState:function(){return af(Za)},useDebugValue:ng,useDeferredValue:function(t){var e=nn();return Ge===null?e.memoizedState=t:iT(e,Ge.memoizedState,t)},useTransition:function(){var t=af(Za)[0],e=nn().memoizedState;return[t,e]},useMutableSource:qx,useSyncExternalStore:Hx,useId:oT,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function dp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Eh={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Gr(t),i=Jn(r,s);i.payload=e,n!=null&&(i.callback=n),e=qr(t,i,s),e!==null&&(gn(e,t,s,r),Vc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Gr(t),i=Jn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=qr(t,i,s),e!==null&&(gn(e,t,s,r),Vc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Gr(t),s=Jn(n,r);s.tag=2,e!=null&&(s.callback=e),e=qr(t,s,r),e!==null&&(gn(e,t,r,n),Vc(e,t,r))}};function Av(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ha(n,r)||!Ha(s,i):!0}function uT(t,e,n){var r=!1,s=ss,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=Ot(e)?qs:vt.current,r=e.contextTypes,i=(r=r!=null)?Ji(t,s):ss),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Eh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Eh.enqueueReplaceState(e,e.state,null)}function fp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Km(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=Ot(e)?qs:vt.current,s.context=Ji(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(dp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Eh.enqueueReplaceState(s,s.state,null),yu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e){try{var n="",r=e;do n+=Yk(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function lf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function pp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Tb=typeof WeakMap=="function"?WeakMap:Map;function hT(t,e,n){n=Jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,Ip=r),pp(t,e)},n}function dT(t,e,n){n=Jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){pp(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){pp(t,e),typeof r!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Dv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Tb;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=jb.bind(null,t,e,n),e.then(t,t))}function Ov(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Jn(-1,1),e.tag=2,qr(n,e,1))),n.lanes|=1),t)}var Ib=pr.ReactCurrentOwner,Rt=!1;function Tt(t,e,n,r){e.child=t===null?Bx(e,null,n,r):eo(e,t.child,n,r)}function Mv(t,e,n,r,s){n=n.render;var i=e.ref;return Bi(e,s),r=Zm(t,e,n,r,i,s),n=eg(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,or(t,e,s)):(be&&n&&Bm(e),e.flags|=1,Tt(t,e,r,s),e.child)}function jv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!ug(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,fT(t,e,i,r,s)):(t=Wc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ha,n(o,r)&&t.ref===e.ref)return or(t,e,s)}return e.flags|=1,t=Kr(i,r),t.ref=e.ref,t.return=e,e.child=t}function fT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ha(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,or(t,e,s)}return mp(t,e,n,r,s)}function pT(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(Di,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(Di,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ee(Di,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ee(Di,Vt),Vt|=r;return Tt(t,e,s,n),e.child}function mT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mp(t,e,n,r,s){var i=Ot(n)?qs:vt.current;return i=Ji(e,i),Bi(e,s),n=Zm(t,e,n,r,i,s),r=eg(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,or(t,e,s)):(be&&r&&Bm(e),e.flags|=1,Tt(t,e,n,s),e.child)}function Vv(t,e,n,r,s){if(Ot(n)){var i=!0;fu(e)}else i=!1;if(Bi(e,s),e.stateNode===null)Bc(t,e),uT(e,n,r),fp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Ot(n)?qs:vt.current,u=Ji(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pv(e,o,r,u),br=!1;var m=e.memoizedState;o.state=m,yu(e,r,o,s),l=e.memoizedState,a!==r||m!==l||Dt.current||br?(typeof d=="function"&&(dp(e,n,d,r),l=e.memoizedState),(a=br||Av(e,n,a,r,m,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,zx(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:an(e.type,a),o.props=u,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Ot(n)?qs:vt.current,l=Ji(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Pv(e,o,r,l),br=!1,m=e.memoizedState,o.state=m,yu(e,r,o,s);var T=e.memoizedState;a!==f||m!==T||Dt.current||br?(typeof y=="function"&&(dp(e,n,y,r),T=e.memoizedState),(u=br||Av(e,n,u,r,m,T,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return gp(t,e,n,r,i,s)}function gp(t,e,n,r,s,i){mT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Tv(e,n,!1),or(t,e,i);r=e.stateNode,Ib.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=eo(e,t.child,null,i),e.child=eo(e,null,a,i)):Tt(t,e,a,i),e.memoizedState=r.state,s&&Tv(e,n,!0),e.child}function gT(t){var e=t.stateNode;e.pendingContext?xv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xv(t,e.context,!1),Qm(t,e.containerInfo)}function Fv(t,e,n,r,s){return Zi(),zm(s),e.flags|=256,Tt(t,e,n,r),e.child}var _p={dehydrated:null,treeContext:null,retryLane:0};function yp(t){return{baseLanes:t,cachePool:null,transitions:null}}function _T(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ee(Re,s&1),t===null)return up(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ih(o,r,0,null),t=$s(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=yp(n),e.memoizedState=_p,t):rg(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return Cb(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Kr(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Kr(a,i):(i=$s(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?yp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=_p,r}return i=t.child,t=i.sibling,r=Kr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rg(t,e){return e=Ih({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vc(t,e,n,r){return r!==null&&zm(r),eo(e,t.child,null,n),t=rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Cb(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=lf(Error(U(422))),vc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ih({mode:"visible",children:r.children},s,0,null),i=$s(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&eo(e,t.child,null,o),e.child.memoizedState=yp(o),e.memoizedState=_p,i);if(!(e.mode&1))return vc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=lf(i,r,void 0),vc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Rt||a){if(r=rt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ir(t,s),gn(r,t,s,-1))}return cg(),r=lf(Error(U(421))),vc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Vb.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Ut=Wr(s.nextSibling),$t=e,be=!0,cn=null,t!==null&&(Qt[Yt++]=Gn,Qt[Yt++]=Kn,Qt[Yt++]=Hs,Gn=t.id,Kn=t.overflow,Hs=e),e=rg(e,r.children),e.flags|=4096,e)}function Uv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hp(t.return,e,n)}function cf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function yT(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uv(t,n,e);else if(t.tag===19)Uv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ee(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),cf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&vu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}cf(e,!0,n,null,i);break;case"together":cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function or(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sb(t,e,n){switch(e.tag){case 3:gT(e),Zi();break;case 5:Wx(e);break;case 1:Ot(e.type)&&fu(e);break;case 4:Qm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ee(gu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ee(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?_T(t,e,n):(Ee(Re,Re.current&1),t=or(t,e,n),t!==null?t.sibling:null);Ee(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return yT(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ee(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,pT(t,e,n)}return or(t,e,n)}var vT,vp,wT,ET;vT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vp=function(){};wT=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vs(Pn.current);var i=null;switch(n){case"input":s=Bf(t,s),r=Bf(t,r),i=[];break;case"select":s=De({},s,{value:void 0}),r=De({},r,{value:void 0}),i=[];break;case"textarea":s=Wf(t,s),r=Wf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Hf(n,r);var o;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var a=s[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var l=r[u];if(a=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ie("scroll",t),i||a===l||(i=[])):(i=i||[]).push(u,l))}n&&(i=i||[]).push("style",n);var u=i;(e.updateQueue=u)&&(e.flags|=4)}};ET=function(t,e,n,r){n!==r&&(e.flags|=4)};function na(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function dt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Nb(t,e,n){var r=e.pendingProps;switch($m(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(e),null;case 1:return Ot(e.type)&&du(),dt(e),null;case 3:return r=e.stateNode,to(),Se(Dt),Se(vt),Xm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_c(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Np(cn),cn=null))),vp(t,e),dt(e),null;case 5:Ym(e);var s=Vs(Xa.current);if(n=e.type,t!==null&&e.stateNode!=null)wT(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return dt(e),null}if(t=Vs(Pn.current),_c(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bn]=e,r[Qa]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<da.length;s++)Ie(da[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Qy(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":Xy(r,i),Ie("invalid",r)}Hf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&gc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&gc(r.textContent,a,t),s=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":lc(r),Yy(r,i,!0);break;case"textarea":lc(r),Jy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=hu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=QE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[Qa]=r,vT(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<da.length;s++)Ie(da[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":Qy(t,r),s=Bf(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=De({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":Xy(t,r),s=Wf(t,r),Ie("invalid",t);break;default:s=r}Hf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?JE(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&YE(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Fa.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Ie("scroll",t):l!=null&&Nm(t,i,l,o))}switch(n){case"input":lc(t),Yy(t,r,!1);break;case"textarea":lc(t),Jy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ji(t,!!r.multiple,i,!1):r.defaultValue!=null&&ji(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dt(e),null;case 6:if(t&&e.stateNode!=null)ET(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Vs(Xa.current),Vs(Pn.current),_c(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(i=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:gc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return dt(e),null;case 13:if(Se(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&Ut!==null&&e.mode&1&&!(e.flags&128))Fx(),Zi(),e.flags|=98560,i=!1;else if(i=_c(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[bn]=e}else Zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dt(e),i=!1}else cn!==null&&(Np(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?Qe===0&&(Qe=3):cg())),e.updateQueue!==null&&(e.flags|=4),dt(e),null);case 4:return to(),vp(t,e),t===null&&Ga(e.stateNode.containerInfo),dt(e),null;case 10:return Hm(e.type._context),dt(e),null;case 17:return Ot(e.type)&&du(),dt(e),null;case 19:if(Se(Re),i=e.memoizedState,i===null)return dt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)na(i,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,na(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ee(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>ro&&(e.flags|=128,r=!0,na(i,!1),e.lanes=4194304)}else{if(!r)if(t=vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!be)return dt(e),null}else 2*Fe()-i.renderingStartTime>ro&&n!==1073741824&&(e.flags|=128,r=!0,na(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Re.current,Ee(Re,r?n&1|2:n&1),e):(dt(e),null);case 22:case 23:return lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(dt(e),e.subtreeFlags&6&&(e.flags|=8192)):dt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function kb(t,e){switch($m(e),e.tag){case 1:return Ot(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return to(),Se(Dt),Se(vt),Xm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ym(e),null;case 13:if(Se(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Re),null;case 4:return to(),null;case 10:return Hm(e.type._context),null;case 22:case 23:return lg(),null;case 24:return null;default:return null}}var wc=!1,mt=!1,bb=typeof WeakSet=="function"?WeakSet:Set,H=null;function Pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function wp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Bv=!1;function Rb(t,e){if(rp=lu,t=Sx(),Um(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++u===s&&(a=o),m===i&&++d===r&&(l=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sp={focusedElem:t,selectionRange:n},lu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var b=T.memoizedProps,R=T.memoizedState,C=e.stateNode,E=C.getSnapshotBeforeUpdate(e.elementType===e.type?b:an(e.type,b),R);C.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Le(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return T=Bv,Bv=!1,T}function Ca(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&wp(e,n,i)}s=s.next}while(s!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ep(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xT(t){var e=t.alternate;e!==null&&(t.alternate=null,xT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[Qa],delete e[ap],delete e[db],delete e[fb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function TT(t){return t.tag===5||t.tag===3||t.tag===4}function $v(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||TT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(xp(t,e,n),t=t.sibling;t!==null;)xp(t,e,n),t=t.sibling}function Tp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Tp(t,e,n),t=t.sibling;t!==null;)Tp(t,e,n),t=t.sibling}var it=null,ln=!1;function Sr(t,e,n){for(n=n.child;n!==null;)IT(t,e,n),n=n.sibling}function IT(t,e,n){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(ph,n)}catch{}switch(n.tag){case 5:mt||Pi(n,e);case 6:var r=it,s=ln;it=null,Sr(t,e,n),it=r,ln=s,it!==null&&(ln?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(ln?(t=it,n=n.stateNode,t.nodeType===8?tf(t.parentNode,n):t.nodeType===1&&tf(t,n),Wa(t)):tf(it,n.stateNode));break;case 4:r=it,s=ln,it=n.stateNode.containerInfo,ln=!0,Sr(t,e,n),it=r,ln=s;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&wp(n,e,o),s=s.next}while(s!==r)}Sr(t,e,n);break;case 1:if(!mt&&(Pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Sr(t,e,n);break;case 21:Sr(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,Sr(t,e,n),mt=r):Sr(t,e,n);break;default:Sr(t,e,n)}}function zv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bb),e.forEach(function(r){var s=Fb.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,ln=!1;break e;case 3:it=a.stateNode.containerInfo,ln=!0;break e;case 4:it=a.stateNode.containerInfo,ln=!0;break e}a=a.return}if(it===null)throw Error(U(160));IT(i,o,s),it=null,ln=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(u){Le(s,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)CT(e,t),e=e.sibling}function CT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),Cn(t),r&4){try{Ca(3,t,t.return),xh(3,t)}catch(b){Le(t,t.return,b)}try{Ca(5,t,t.return)}catch(b){Le(t,t.return,b)}}break;case 1:on(e,t),Cn(t),r&512&&n!==null&&Pi(n,n.return);break;case 5:if(on(e,t),Cn(t),r&512&&n!==null&&Pi(n,n.return),t.flags&32){var s=t.stateNode;try{Ua(s,"")}catch(b){Le(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&GE(s,i),Gf(a,o);var u=Gf(a,i);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?JE(s,f):d==="dangerouslySetInnerHTML"?YE(s,f):d==="children"?Ua(s,f):Nm(s,d,f,u)}switch(a){case"input":$f(s,i);break;case"textarea":KE(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ji(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?ji(s,!!i.multiple,i.defaultValue,!0):ji(s,!!i.multiple,i.multiple?[]:"",!1))}s[Qa]=i}catch(b){Le(t,t.return,b)}}break;case 6:if(on(e,t),Cn(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){Le(t,t.return,b)}}break;case 3:if(on(e,t),Cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wa(e.containerInfo)}catch(b){Le(t,t.return,b)}break;case 4:on(e,t),Cn(t);break;case 13:on(e,t),Cn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(og=Fe())),r&4&&zv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||d,on(e,t),mt=u):on(e,t),Cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(H=t,d=t.child;d!==null;){for(f=H=d;H!==null;){switch(m=H,y=m.child,m.tag){case 0:case 11:case 14:case 15:Ca(4,m,m.return);break;case 1:Pi(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(b){Le(r,n,b)}}break;case 5:Pi(m,m.return);break;case 22:if(m.memoizedState!==null){qv(f);continue}}y!==null?(y.return=m,H=y):qv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=XE("display",o))}catch(b){Le(t,t.return,b)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){Le(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:on(e,t),Cn(t),r&4&&zv(t);break;case 21:break;default:on(e,t),Cn(t)}}function Cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(TT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ua(s,""),r.flags&=-33);var i=$v(t);Tp(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$v(t);xp(t,a,o);break;default:throw Error(U(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ab(t,e,n){H=t,ST(t)}function ST(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||mt;a=wc;var u=mt;if(wc=o,(mt=l)&&!u)for(H=s;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?Hv(s):l!==null?(l.return=o,H=l):Hv(s);for(;i!==null;)H=i,ST(i),i=i.sibling;H=s,wc=a,mt=u}Wv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):Wv(t)}}function Wv(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&kv(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Wa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}mt||e.flags&512&&Ep(e)}catch(m){Le(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function qv(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Hv(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Le(e,s,l)}}var i=e.return;try{Ep(e)}catch(l){Le(e,i,l)}break;case 5:var o=e.return;try{Ep(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var Pb=Math.ceil,xu=pr.ReactCurrentDispatcher,sg=pr.ReactCurrentOwner,Zt=pr.ReactCurrentBatchConfig,he=0,rt=null,$e=null,at=0,Vt=0,Di=gs(0),Qe=0,tl=null,Ks=0,Th=0,ig=0,Sa=null,kt=null,og=0,ro=1/0,qn=null,Tu=!1,Ip=null,Hr=null,Ec=!1,Vr=null,Iu=0,Na=0,Cp=null,$c=-1,zc=0;function It(){return he&6?Fe():$c!==-1?$c:$c=Fe()}function Gr(t){return t.mode&1?he&2&&at!==0?at&-at:mb.transition!==null?(zc===0&&(zc=ux()),zc):(t=ge,t!==0||(t=window.event,t=t===void 0?16:_x(t.type)),t):1}function gn(t,e,n,r){if(50<Na)throw Na=0,Cp=null,Error(U(185));Tl(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(Th|=n),Qe===4&&Ar(t,at)),Lt(t,r),n===1&&he===0&&!(e.mode&1)&&(ro=Fe()+500,vh&&_s()))}function Lt(t,e){var n=t.callbackNode;m1(t,e);var r=au(t,t===rt?at:0);if(r===0)n!==null&&tv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tv(n),e===1)t.tag===0?pb(Gv.bind(null,t)):Mx(Gv.bind(null,t)),ub(function(){!(he&6)&&_s()}),n=null;else{switch(hx(r)){case 1:n=Pm;break;case 4:n=lx;break;case 16:n=ou;break;case 536870912:n=cx;break;default:n=ou}n=OT(n,NT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function NT(t,e){if($c=-1,zc=0,he&6)throw Error(U(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=au(t,t===rt?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cu(t,r);else{e=r;var s=he;he|=2;var i=bT();(rt!==t||at!==e)&&(qn=null,ro=Fe()+500,Bs(t,e));do try{Lb();break}catch(a){kT(t,a)}while(!0);qm(),xu.current=i,he=s,$e!==null?e=0:(rt=null,at=0,e=Qe)}if(e!==0){if(e===2&&(s=Jf(t),s!==0&&(r=s,e=Sp(t,s))),e===1)throw n=tl,Bs(t,0),Ar(t,r),Lt(t,Fe()),n;if(e===6)Ar(t,r);else{if(s=t.current.alternate,!(r&30)&&!Db(s)&&(e=Cu(t,r),e===2&&(i=Jf(t),i!==0&&(r=i,e=Sp(t,i))),e===1))throw n=tl,Bs(t,0),Ar(t,r),Lt(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Ds(t,kt,qn);break;case 3:if(Ar(t,r),(r&130023424)===r&&(e=og+500-Fe(),10<e)){if(au(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=op(Ds.bind(null,t,kt,qn),e);break}Ds(t,kt,qn);break;case 4:if(Ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-mn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Pb(r/1960))-r,10<r){t.timeoutHandle=op(Ds.bind(null,t,kt,qn),r);break}Ds(t,kt,qn);break;case 5:Ds(t,kt,qn);break;default:throw Error(U(329))}}}return Lt(t,Fe()),t.callbackNode===n?NT.bind(null,t):null}function Sp(t,e){var n=Sa;return t.current.memoizedState.isDehydrated&&(Bs(t,e).flags|=256),t=Cu(t,e),t!==2&&(e=kt,kt=n,e!==null&&Np(e)),t}function Np(t){kt===null?kt=t:kt.push.apply(kt,t)}function Db(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!wn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ar(t,e){for(e&=~ig,e&=~Th,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Gv(t){if(he&6)throw Error(U(327));$i();var e=au(t,0);if(!(e&1))return Lt(t,Fe()),null;var n=Cu(t,e);if(t.tag!==0&&n===2){var r=Jf(t);r!==0&&(e=r,n=Sp(t,r))}if(n===1)throw n=tl,Bs(t,0),Ar(t,e),Lt(t,Fe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ds(t,kt,qn),Lt(t,Fe()),null}function ag(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ro=Fe()+500,vh&&_s())}}function Qs(t){Vr!==null&&Vr.tag===0&&!(he&6)&&$i();var e=he;he|=1;var n=Zt.transition,r=ge;try{if(Zt.transition=null,ge=1,t)return t()}finally{ge=r,Zt.transition=n,he=e,!(he&6)&&_s()}}function lg(){Vt=Di.current,Se(Di)}function Bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cb(n)),$e!==null)for(n=$e.return;n!==null;){var r=n;switch($m(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:to(),Se(Dt),Se(vt),Xm();break;case 5:Ym(r);break;case 4:to();break;case 13:Se(Re);break;case 19:Se(Re);break;case 10:Hm(r.type._context);break;case 22:case 23:lg()}n=n.return}if(rt=t,$e=t=Kr(t.current,null),at=Vt=e,Qe=0,tl=null,ig=Th=Ks=0,kt=Sa=null,js!==null){for(e=0;e<js.length;e++)if(n=js[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}js=null}return t}function kT(t,e){do{var n=$e;try{if(qm(),Fc.current=Eu,wu){for(var r=Ae.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}wu=!1}if(Gs=0,et=Ge=Ae=null,Ia=!1,Ja=0,sg.current=null,n===null||n.return===null){Qe=1,tl=e,$e=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Ov(o);if(y!==null){y.flags&=-257,Lv(y,o,a,i,e),y.mode&1&&Dv(i,u,e),e=y,l=u;var T=e.updateQueue;if(T===null){var b=new Set;b.add(l),e.updateQueue=b}else T.add(l);break e}else{if(!(e&1)){Dv(i,u,e),cg();break e}l=Error(U(426))}}else if(be&&a.mode&1){var R=Ov(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Lv(R,o,a,i,e),zm(no(l,a));break e}}i=l=no(l,a),Qe!==4&&(Qe=2),Sa===null?Sa=[i]:Sa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=hT(i,l,e);Nv(i,C);break e;case 1:a=l;var E=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Hr===null||!Hr.has(S)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=dT(i,a,e);Nv(i,O);break e}}i=i.return}while(i!==null)}AT(n)}catch(j){e=j,$e===n&&n!==null&&($e=n=n.return);continue}break}while(!0)}function bT(){var t=xu.current;return xu.current=Eu,t===null?Eu:t}function cg(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),rt===null||!(Ks&268435455)&&!(Th&268435455)||Ar(rt,at)}function Cu(t,e){var n=he;he|=2;var r=bT();(rt!==t||at!==e)&&(qn=null,Bs(t,e));do try{Ob();break}catch(s){kT(t,s)}while(!0);if(qm(),he=n,xu.current=r,$e!==null)throw Error(U(261));return rt=null,at=0,Qe}function Ob(){for(;$e!==null;)RT($e)}function Lb(){for(;$e!==null&&!o1();)RT($e)}function RT(t){var e=DT(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?AT(t):$e=e,sg.current=null}function AT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kb(n,e),n!==null){n.flags&=32767,$e=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,$e=null;return}}else if(n=Nb(n,e,Vt),n!==null){$e=n;return}if(e=e.sibling,e!==null){$e=e;return}$e=e=t}while(e!==null);Qe===0&&(Qe=5)}function Ds(t,e,n){var r=ge,s=Zt.transition;try{Zt.transition=null,ge=1,Mb(t,e,n,r)}finally{Zt.transition=s,ge=r}return null}function Mb(t,e,n,r){do $i();while(Vr!==null);if(he&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(g1(t,i),t===rt&&($e=rt=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ec||(Ec=!0,OT(ou,function(){return $i(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Zt.transition,Zt.transition=null;var o=ge;ge=1;var a=he;he|=4,sg.current=null,Rb(t,n),CT(n,t),nb(sp),lu=!!rp,sp=rp=null,t.current=n,Ab(n),a1(),he=a,ge=o,Zt.transition=i}else t.current=n;if(Ec&&(Ec=!1,Vr=t,Iu=s),i=t.pendingLanes,i===0&&(Hr=null),u1(n.stateNode),Lt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Tu)throw Tu=!1,t=Ip,Ip=null,t;return Iu&1&&t.tag!==0&&$i(),i=t.pendingLanes,i&1?t===Cp?Na++:(Na=0,Cp=t):Na=0,_s(),null}function $i(){if(Vr!==null){var t=hx(Iu),e=Zt.transition,n=ge;try{if(Zt.transition=null,ge=16>t?16:t,Vr===null)var r=!1;else{if(t=Vr,Vr=null,Iu=0,he&6)throw Error(U(331));var s=he;for(he|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(H=u;H!==null;){var d=H;switch(d.tag){case 0:case 11:case 15:Ca(8,d,i)}var f=d.child;if(f!==null)f.return=d,H=f;else for(;H!==null;){d=H;var m=d.sibling,y=d.return;if(xT(d),d===u){H=null;break}if(m!==null){m.return=y,H=m;break}H=y}}}var T=i.alternate;if(T!==null){var b=T.child;if(b!==null){T.child=null;do{var R=b.sibling;b.sibling=null,b=R}while(b!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ca(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,H=C;break e}H=i.return}}var E=t.current;for(H=E;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=E;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xh(9,a)}}catch(j){Le(a,a.return,j)}if(a===o){H=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,H=O;break e}H=a.return}}if(he=s,_s(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(ph,t)}catch{}r=!0}return r}finally{ge=n,Zt.transition=e}}return!1}function Kv(t,e,n){e=no(n,e),e=hT(t,e,1),t=qr(t,e,1),e=It(),t!==null&&(Tl(t,1,e),Lt(t,e))}function Le(t,e,n){if(t.tag===3)Kv(t,t,n);else for(;e!==null;){if(e.tag===3){Kv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hr===null||!Hr.has(r))){t=no(n,t),t=dT(e,t,1),e=qr(e,t,1),t=It(),e!==null&&(Tl(e,1,t),Lt(e,t));break}}e=e.return}}function jb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(at&n)===n&&(Qe===4||Qe===3&&(at&130023424)===at&&500>Fe()-og?Bs(t,0):ig|=n),Lt(t,e)}function PT(t,e){e===0&&(t.mode&1?(e=hc,hc<<=1,!(hc&130023424)&&(hc=4194304)):e=1);var n=It();t=ir(t,e),t!==null&&(Tl(t,e,n),Lt(t,n))}function Vb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),PT(t,n)}function Fb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),PT(t,n)}var DT;DT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Dt.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Sb(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,be&&e.flags&1048576&&jx(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bc(t,e),t=e.pendingProps;var s=Ji(e,vt.current);Bi(e,n),s=Zm(null,e,r,t,s,n);var i=eg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(i=!0,fu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Km(e),s.updater=Eh,e.stateNode=s,s._reactInternals=e,fp(e,r,t,n),e=gp(null,e,r,!0,i,n)):(e.tag=0,be&&i&&Bm(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Bb(r),t=an(r,t),s){case 0:e=mp(null,e,r,t,n);break e;case 1:e=Vv(null,e,r,t,n);break e;case 11:e=Mv(null,e,r,t,n);break e;case 14:e=jv(null,e,r,an(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:an(r,s),mp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:an(r,s),Vv(t,e,r,s,n);case 3:e:{if(gT(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,zx(t,e),yu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=no(Error(U(423)),e),e=Fv(t,e,r,n,s);break e}else if(r!==s){s=no(Error(U(424)),e),e=Fv(t,e,r,n,s);break e}else for(Ut=Wr(e.stateNode.containerInfo.firstChild),$t=e,be=!0,cn=null,n=Bx(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===s){e=or(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return Wx(e),t===null&&up(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,ip(r,s)?o=null:i!==null&&ip(r,i)&&(e.flags|=32),mT(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&up(e),null;case 13:return _T(t,e,n);case 4:return Qm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=eo(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:an(r,s),Mv(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ee(gu,r._currentValue),r._currentValue=o,i!==null)if(wn(i.value,o)){if(i.children===s.children&&!Dt.current){e=or(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Jn(-1,n&-n),l.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),hp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),hp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Bi(e,n),s=tn(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=an(r,e.pendingProps),s=an(r.type,s),jv(t,e,r,s,n);case 15:return fT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:an(r,s),Bc(t,e),e.tag=1,Ot(r)?(t=!0,fu(e)):t=!1,Bi(e,n),uT(e,r,s),fp(e,r,s,n),gp(null,e,r,!0,t,n);case 19:return yT(t,e,n);case 22:return pT(t,e,n)}throw Error(U(156,e.tag))};function OT(t,e){return ax(t,e)}function Ub(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,e,n,r){return new Ub(t,e,n,r)}function ug(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bb(t){if(typeof t=="function")return ug(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bm)return 11;if(t===Rm)return 14}return 2}function Kr(t,e){var n=t.alternate;return n===null?(n=Jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wc(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")ug(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return $s(n.children,s,i,e);case km:o=8,s|=8;break;case jf:return t=Jt(12,n,e,s|2),t.elementType=jf,t.lanes=i,t;case Vf:return t=Jt(13,n,e,s),t.elementType=Vf,t.lanes=i,t;case Ff:return t=Jt(19,n,e,s),t.elementType=Ff,t.lanes=i,t;case WE:return Ih(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $E:o=10;break e;case zE:o=9;break e;case bm:o=11;break e;case Rm:o=14;break e;case kr:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function $s(t,e,n,r){return t=Jt(7,t,r,e),t.lanes=n,t}function Ih(t,e,n,r){return t=Jt(22,t,r,e),t.elementType=WE,t.lanes=n,t.stateNode={isHidden:!1},t}function uf(t,e,n){return t=Jt(6,t,null,e),t.lanes=n,t}function hf(t,e,n){return e=Jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $b(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wd(0),this.expirationTimes=Wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function hg(t,e,n,r,s,i,o,a,l){return t=new $b(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Km(i),t}function zb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function LT(t){if(!t)return ss;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Ot(n))return Lx(t,n,e)}return e}function MT(t,e,n,r,s,i,o,a,l){return t=hg(n,r,!0,t,s,i,o,a,l),t.context=LT(null),n=t.current,r=It(),s=Gr(n),i=Jn(r,s),i.callback=e??null,qr(n,i,s),t.current.lanes=s,Tl(t,s,r),Lt(t,r),t}function Ch(t,e,n,r){var s=e.current,i=It(),o=Gr(s);return n=LT(n),e.context===null?e.context=n:e.pendingContext=n,e=Jn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qr(s,e,o),t!==null&&(gn(t,s,o,i),Vc(t,s,o)),o}function Su(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dg(t,e){Qv(t,e),(t=t.alternate)&&Qv(t,e)}function Wb(){return null}var jT=typeof reportError=="function"?reportError:function(t){console.error(t)};function fg(t){this._internalRoot=t}Sh.prototype.render=fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ch(t,e,null,null)};Sh.prototype.unmount=fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qs(function(){Ch(null,t,null,null)}),e[sr]=null}};function Sh(t){this._internalRoot=t}Sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=px();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rr.length&&e!==0&&e<Rr[n].priority;n++);Rr.splice(n,0,t),n===0&&gx(t)}};function pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yv(){}function qb(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=Su(o);i.call(u)}}var o=MT(e,r,t,0,null,!1,!1,"",Yv);return t._reactRootContainer=o,t[sr]=o.current,Ga(t.nodeType===8?t.parentNode:t),Qs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var u=Su(l);a.call(u)}}var l=hg(t,0,!1,null,null,!1,!1,"",Yv);return t._reactRootContainer=l,t[sr]=l.current,Ga(t.nodeType===8?t.parentNode:t),Qs(function(){Ch(e,l,n,r)}),l}function kh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Su(o);a.call(l)}}Ch(e,o,t,s)}else o=qb(n,e,t,s,r);return Su(o)}dx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&(Dm(e,n|1),Lt(e,Fe()),!(he&6)&&(ro=Fe()+500,_s()))}break;case 13:Qs(function(){var r=ir(t,1);if(r!==null){var s=It();gn(r,t,1,s)}}),dg(t,1)}};Om=function(t){if(t.tag===13){var e=ir(t,134217728);if(e!==null){var n=It();gn(e,t,134217728,n)}dg(t,134217728)}};fx=function(t){if(t.tag===13){var e=Gr(t),n=ir(t,e);if(n!==null){var r=It();gn(n,t,e,r)}dg(t,e)}};px=function(){return ge};mx=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};Qf=function(t,e,n){switch(e){case"input":if($f(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=yh(r);if(!s)throw Error(U(90));HE(r),$f(r,s)}}}break;case"textarea":KE(t,n);break;case"select":e=n.value,e!=null&&ji(t,!!n.multiple,e,!1)}};tx=ag;nx=Qs;var Hb={usingClientEntryPoint:!1,Events:[Cl,Ni,yh,ZE,ex,ag]},ra={findFiberByHostInstance:Ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gb={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ix(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||Wb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xc.isDisabled&&xc.supportsFiber)try{ph=xc.inject(Gb),An=xc}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hb;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pg(e))throw Error(U(200));return zb(t,e,null,n)};Ht.createRoot=function(t,e){if(!pg(t))throw Error(U(299));var n=!1,r="",s=jT;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=hg(t,1,!1,null,null,n,!1,r,s),t[sr]=e.current,Ga(t.nodeType===8?t.parentNode:t),new fg(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=ix(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return Qs(t)};Ht.hydrate=function(t,e,n){if(!Nh(e))throw Error(U(200));return kh(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!pg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=jT;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=MT(e,null,t,1,n??null,s,!1,i,o),t[sr]=e.current,Ga(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Sh(e)};Ht.render=function(t,e,n){if(!Nh(e))throw Error(U(200));return kh(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Nh(t))throw Error(U(40));return t._reactRootContainer?(Qs(function(){kh(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1};Ht.unstable_batchedUpdates=ag;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nh(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return kh(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function VT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VT)}catch(t){console.error(t)}}VT(),VE.exports=Ht;var Kb=VE.exports,Xv=Kb;Lf.createRoot=Xv.createRoot,Lf.hydrateRoot=Xv.hydrateRoot;/**
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
 */const Qb=()=>{};var Jv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw Eo(e)},Eo=function(t){return new Error("Firebase Database ("+FT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Yb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[d],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(UT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Yb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new Xb;const m=i<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),f!==64){const T=u<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BT=function(t){const e=UT(t);return mg.encodeByteArray(e,!0)},Nu=function(t){return BT(t).replace(/\./g,"")},ku=function(t){try{return mg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){return $T(void 0,t)}function $T(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Zb(n)||(t[n]=$T(t[n],e[n]));return t}function Zb(t){return t!=="__proto__"}/**
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
 */function eR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tR=()=>eR().__FIREBASE_DEFAULTS__,nR=()=>{if(typeof process>"u"||typeof Jv>"u")return;const t=Jv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ku(t[1]);return e&&JSON.parse(e)},bh=()=>{try{return Qb()||tR()||nR()||rR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zT=t=>{var e,n;return(n=(e=bh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},gg=t=>{const e=zT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WT=()=>{var t;return(t=bh())==null?void 0:t.config},qT=t=>{var e;return(e=bh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rh(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function yg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),""].join(".")}const ka={};function sR(){const t={prod:[],emulator:[]};for(const e of Object.keys(ka))ka[e]?t.emulator.push(e):t.prod.push(e);return t}function iR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zv=!1;function Ah(t,e){if(typeof window>"u"||typeof document>"u"||!mr(window.location.host)||ka[t]===e||ka[t]||Zv)return;ka[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=sR().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Zv=!0,o()},m}function d(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=iR(r),y=n("text"),T=document.getElementById(y)||document.createElement("span"),b=n("learnmore"),R=document.getElementById(b)||document.createElement("a"),C=n("preprendIcon"),E=document.getElementById(C)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const S=m.element;a(S),d(R,b);const O=u();l(E,C),S.append(E,T,R,O),document.body.appendChild(S)}i?(T.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(wt())}function oR(){var e;const t=(e=bh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cR(){const t=wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uR(){return FT.NODE_ADMIN===!0}function hR(){return!oR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dR(){try{return typeof indexedDB=="object"}catch{return!1}}function fR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pR,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,a,r)}}function mR(t,e){return t.replace(gR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return JSON.parse(t)}function nt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=nl(ku(i[0])||""),n=nl(ku(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},_R=function(t){const e=GT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yR=function(t){const e=GT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function so(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function bu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function is(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(e0(i)&&e0(o)){if(!is(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function e0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),d=1518500249):(u=i^o^a,d=1859775393):f<60?(u=i&o|a&(i|o),d=2400959708):(u=i^o^a,d=3395469782);const m=(s<<5|s>>>27)+u+l+d+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function wR(t,e){const n=new ER(t,e);return n.subscribe.bind(n)}class ER{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=df),s.error===void 0&&(s.error=df),s.complete===void 0&&(s.complete=df);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function df(){}function KT(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ph=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Os="[DEFAULT]";/**
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
 */class IR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _g;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SR(e))try{this.getOrInitializeService({instanceIdentifier:Os})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Os){return this.instances.has(e)}getOptions(e=Os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Os){return this.component?this.component.multipleInstances?e:Os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CR(t){return t===Os?void 0:t}function SR(t){return t.instantiationMode==="EAGER"}/**
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
 */class NR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const kR={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},bR=se.INFO,RR={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},AR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dh{constructor(e){this.name=e,this._logLevel=bR,this._logHandler=AR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const PR=(t,e)=>e.some(n=>t instanceof n);let t0,n0;function DR(){return t0||(t0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OR(){return n0||(n0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QT=new WeakMap,bp=new WeakMap,YT=new WeakMap,ff=new WeakMap,wg=new WeakMap;function LR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QT.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function MR(t){if(bp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bp.set(t,e)}let Rp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jR(t){Rp=t(Rp)}function VR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pf(this),e,...n);return YT.set(r,e.sort?e.sort():[e]),Qr(r)}:OR().includes(t)?function(...e){return t.apply(pf(this),e),Qr(QT.get(this))}:function(...e){return Qr(t.apply(pf(this),e))}}function FR(t){return typeof t=="function"?VR(t):(t instanceof IDBTransaction&&MR(t),PR(t,DR())?new Proxy(t,Rp):t)}function Qr(t){if(t instanceof IDBRequest)return LR(t);if(ff.has(t))return ff.get(t);const e=FR(t);return e!==t&&(ff.set(t,e),wg.set(e,t)),e}const pf=t=>wg.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Qr(o.result),l.oldVersion,l.newVersion,Qr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const BR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],mf=new Map;function r0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mf.get(e))return mf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return mf.set(e,i),i}jR(t=>({...t,get:(e,n,r)=>r0(e,n)||t.get(e,n,r),has:(e,n)=>!!r0(e,n)||t.has(e,n)}));/**
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
 */class zR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ap="@firebase/app",s0="0.14.7";/**
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
 */const lr=new Dh("@firebase/app"),qR="@firebase/app-compat",HR="@firebase/analytics-compat",GR="@firebase/analytics",KR="@firebase/app-check-compat",QR="@firebase/app-check",YR="@firebase/auth",XR="@firebase/auth-compat",JR="@firebase/database",ZR="@firebase/data-connect",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",sA="@firebase/installations-compat",iA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",lA="@firebase/performance-compat",cA="@firebase/remote-config",uA="@firebase/remote-config-compat",hA="@firebase/storage",dA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/ai",mA="@firebase/firestore-compat",gA="firebase",_A="12.8.0";/**
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
 */const Pp="[DEFAULT]",yA={[Ap]:"fire-core",[qR]:"fire-core-compat",[GR]:"fire-analytics",[HR]:"fire-analytics-compat",[QR]:"fire-app-check",[KR]:"fire-app-check-compat",[YR]:"fire-auth",[XR]:"fire-auth-compat",[JR]:"fire-rtdb",[ZR]:"fire-data-connect",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[sA]:"fire-iid-compat",[iA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[lA]:"fire-perf-compat",[cA]:"fire-rc",[uA]:"fire-rc-compat",[hA]:"fire-gcs",[dA]:"fire-gcs-compat",[fA]:"fire-fst",[mA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[gA]:"fire-js-all"};/**
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
 */const Ru=new Map,vA=new Map,Dp=new Map;function i0(t,e){try{t.container.addComponent(e)}catch(n){lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function os(t){const e=t.name;if(Dp.has(e))return lr.debug(`There were multiple attempts to register component ${e}.`),!1;Dp.set(e,t);for(const n of Ru.values())i0(n,t);for(const n of vA.values())i0(n,t);return!0}function kl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yr=new Nl("app","Firebase",wA);/**
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
 */class EA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=_A;function XT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Pp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Yr.create("bad-app-name",{appName:String(s)});if(n||(n=WT()),!n)throw Yr.create("no-options");const i=Ru.get(s);if(i){if(is(n,i.options)&&is(r,i.config))return i;throw Yr.create("duplicate-app",{appName:s})}const o=new NR(s);for(const l of Dp.values())o.addComponent(l);const a=new EA(n,r,o);return Ru.set(s,a),a}function Oh(t=Pp){const e=Ru.get(t);if(!e&&t===Pp&&WT())return XT();if(!e)throw Yr.create("no-app",{appName:t});return e}function en(t,e,n){let r=yA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lr.warn(o.join(" "));return}os(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xA="firebase-heartbeat-database",TA=1,rl="firebase-heartbeat-store";let gf=null;function JT(){return gf||(gf=UR(xA,TA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rl)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yr.create("idb-open",{originalErrorMessage:t.message})})),gf}async function IA(t){try{const n=(await JT()).transaction(rl),r=await n.objectStore(rl).get(ZT(t));return await n.done,r}catch(e){if(e instanceof Bn)lr.warn(e.message);else{const n=Yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lr.warn(n.message)}}}async function o0(t,e){try{const r=(await JT()).transaction(rl,"readwrite");await r.objectStore(rl).put(e,ZT(t)),await r.done}catch(n){if(n instanceof Bn)lr.warn(n.message);else{const r=Yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});lr.warn(r.message)}}}function ZT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CA=1024,SA=30;class NA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=a0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>SA){const o=RA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a0(),{heartbeatsToSend:r,unsentEntries:s}=kA(this._heartbeatsCache.heartbeats),i=Nu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return lr.warn(n),""}}}function a0(){return new Date().toISOString().substring(0,10)}function kA(t,e=CA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),l0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),l0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dR()?fR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function l0(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}function RA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function AA(t){os(new ar("platform-logger",e=>new zR(e),"PRIVATE")),os(new ar("heartbeat",e=>new NA(e),"PRIVATE")),en(Ap,s0,t),en(Ap,s0,"esm2020"),en("fire-js","")}AA("");var PA="firebase",DA="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(PA,DA,"app");function eI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OA=eI,tI=new Nl("auth","Firebase",eI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Dh("@firebase/auth");function LA(t,...e){Au.logLevel<=se.WARN&&Au.warn(`Auth (${ys}): ${t}`,...e)}function qc(t,...e){Au.logLevel<=se.ERROR&&Au.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw Eg(t,...e)}function Dn(t,...e){return Eg(t,...e)}function nI(t,e,n){const r={...OA(),[e]:n};return new Nl("auth","Firebase",r).create(e,{appName:t.name})}function Xr(t){return nI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tI.create(t,...e)}function K(t,e,...n){if(!t)throw Eg(e,...n)}function Qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qc(e),new Error(e)}function cr(t,e){t||Qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function MA(){return c0()==="http:"||c0()==="https:"}function c0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MA()||lR()||"connection"in navigator)?navigator.onLine:!0}function VA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,cr(n>e,"Short delay should be less than long delay!"),this.isMobile=vg()||HT()}get(){return jA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t,e){cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],BA=new bl(3e4,6e4);function oi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function vs(t,e,n,r,s={}){return sI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=xo({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return aR()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&mr(t.emulatorConfig.host)&&(u.credentials="include"),rI.fetch()(await iI(t,t.config.apiHost,n,a),u)})}async function sI(t,e,n){t._canInitEmulator=!1;const r={...FA,...e};try{const s=new zA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Tc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Tc(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw nI(t,d,u);En(t,d)}}catch(s){if(s instanceof Bn)throw s;En(t,"network-request-failed",{message:String(s)})}}async function Lh(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function iI(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?xg(t.config,s):`${t.config.apiScheme}://${s}`;return UA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function $A(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),BA.get())})}}function Tc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dn(t,e,r);return s.customData._tokenResponse=n,s}function u0(t){return t!==void 0&&t.enterprise!==void 0}class WA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $A(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qA(t,e){return vs(t,"GET","/v2/recaptchaConfig",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function Pu(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GA(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),s=Tg(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ba(_f(s.auth_time)),issuedAtTime:ba(_f(s.iat)),expirationTime:ba(_f(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function _f(t){return Number(t)*1e3}function Tg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const s=ku(n);return s?JSON.parse(s):(qc("Failed to decode base64 JWT payload"),null)}catch(s){return qc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function h0(t){const e=Tg(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&KA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function KA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ba(this.lastLoginAt),this.creationTime=ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Du(t){var f;const e=t.auth,n=await t.getIdToken(),r=await sl(t,Pu(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?oI(s.providerUserInfo):[],o=XA(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=a?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Lp(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function YA(t){const e=Ne(t);await Du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JA(t,e){const n=await sI(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await iI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&mr(t.emulatorConfig.host)&&(l.credentials="include"),rI.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZA(t,e){return vs(t,"POST","/v2/accounts:revokeToken",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):h0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=h0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class hn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new QA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await sl(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GA(this,e)}reload(){return YA(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await sl(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:y,providerData:T,stsTokenManager:b}=n;K(f&&b,e,"internal-error");const R=zi.fromJSON(this.name,b);K(typeof f=="string",e,"internal-error"),Nr(r,e.name),Nr(s,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof y=="boolean",e,"internal-error"),Nr(i,e.name),Nr(o,e.name),Nr(a,e.name),Nr(l,e.name),Nr(u,e.name),Nr(d,e.name);const C=new hn({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:R,createdAt:u,lastLoginAt:d});return T&&Array.isArray(T)&&(C.providerData=T.map(E=>({...E}))),l&&(C._redirectEventId=l),C}static async _fromIdTokenResponse(e,n,r=!1){const s=new zi;s.updateFromServerResponse(n);const i=new hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Du(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?oI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new zi;a.updateFromIdToken(r);const l=new hn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=new Map;function Yn(t){cr(t instanceof Function,"Expected a class definition");let e=d0.get(t);return e?(cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,d0.set(t,e),e)}/**
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
 */class aI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aI.type="NONE";const f0=aI;/**
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
 */function Hc(t,e,n){return`firebase:${t}:${e}:${n}`}class Wi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Hc(this.userKey,s.apiKey,i),this.fullPersistenceKey=Hc("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Pu(this.auth,{idToken:e}).catch(()=>{});return n?hn._fromGetAccountInfoResponse(this.auth,n,e):null}return hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wi(Yn(f0),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Yn(f0);const o=Hc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){let f;if(typeof d=="string"){const m=await Pu(e,{idToken:d}).catch(()=>{});if(!m)break;f=await hn._fromGetAccountInfoResponse(e,m,d)}else f=hn._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Wi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Wi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fI(e))return"Blackberry";if(pI(e))return"Webos";if(cI(e))return"Safari";if((e.includes("chrome/")||uI(e))&&!e.includes("edge/"))return"Chrome";if(dI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lI(t=wt()){return/firefox\//i.test(t)}function cI(t=wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uI(t=wt()){return/crios\//i.test(t)}function hI(t=wt()){return/iemobile/i.test(t)}function dI(t=wt()){return/android/i.test(t)}function fI(t=wt()){return/blackberry/i.test(t)}function pI(t=wt()){return/webos/i.test(t)}function Ig(t=wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eP(t=wt()){var e;return Ig(t)&&!!((e=window.navigator)!=null&&e.standalone)}function tP(){return cR()&&document.documentMode===10}function mI(t=wt()){return Ig(t)||dI(t)||pI(t)||fI(t)||/windows phone/i.test(t)||hI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e=[]){let n;switch(t){case"Browser":n=p0(wt());break;case"Worker":n=`${p0(wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
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
 */class nP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rP(t,e={}){return vs(t,"GET","/v2/passwordPolicy",oi(t,e))}/**
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
 */const sP=6;class iP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new m0(this),this.idTokenSubscription=new m0(this),this.beforeStateQueue=new nP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Wi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pu(this,{idToken:e}),r=await hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Xr(this));const n=e?Ne(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rP(this),n=new iP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Nl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Wi.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&LA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function To(t){return Ne(t)}class m0{constructor(e){this.auth=e,this.observer=null,this.addObserver=wR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aP(t){Mh=t}function _I(t){return Mh.loadJS(t)}function lP(){return Mh.recaptchaEnterpriseScript}function cP(){return Mh.gapiScript}function uP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class hP{constructor(){this.enterprise=new dP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class dP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fP="recaptcha-enterprise",yI="NO_RECAPTCHA";class pP{constructor(e){this.type=fP,this.auth=To(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{qA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new WA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;u0(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(yI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&u0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lP();l.length!==0&&(l+=a),_I(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function g0(t,e,n,r=!1,s=!1){const i=new pP(t);let o;if(s)o=yI;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function _0(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await g0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await g0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e){const n=kl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(is(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function gP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function _P(t,e,n){const r=To(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=vI(e),{host:o,port:a}=yP(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(is(u,r.config.emulator)&&is(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,mr(o)?(Rh(`${i}//${o}${l}`),Ah("Auth",!0)):vP()}function vI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yP(t){const e=vI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:y0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:y0(o)}}}function y0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(e){return Qn("not implemented")}_linkToIdToken(e,n){return Qn("not implemented")}_getReauthenticationResolver(e){return Qn("not implemented")}}async function wP(t,e){return vs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return Lh(t,"POST","/v1/accounts:signInWithPassword",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return Lh(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}async function TP(t,e){return Lh(t,"POST","/v1/accounts:signInWithEmailLink",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Cg{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new il(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new il(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _0(e,n,"signInWithPassword",EP);case"emailLink":return xP(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _0(e,r,"signUpPassword",wP);case"emailLink":return TP(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return Lh(t,"POST","/v1/accounts:signInWithIdp",oi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="http://localhost";class Ys extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Ys(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:IP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SP(t){const e=fa(pa(t)).link,n=e?fa(pa(e)).deep_link_id:null,r=fa(pa(t)).deep_link_id;return(r?fa(pa(r)).link:null)||r||n||e||t}class Sg{constructor(e){const n=fa(pa(e)),r=n.apiKey??null,s=n.oobCode??null,i=CP(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=SP(e);try{return new Sg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.providerId=Io.PROVIDER_ID}static credential(e,n){return il._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sg.parseLink(n);return K(r,"argument-error"),il._fromEmailAndCode(e,r.code,r.tenantId)}}Io.PROVIDER_ID="password";Io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rl extends wI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends Rl{constructor(){super("facebook.com")}static credential(e){return Ys._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Rl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ys._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.GOOGLE_SIGN_IN_METHOD="google.com";Dr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Rl{constructor(){super("github.com")}static credential(e){return Ys._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Or.credential(e.oauthAccessToken)}catch{return null}}}Or.GITHUB_SIGN_IN_METHOD="github.com";Or.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends Rl{constructor(){super("twitter.com")}static credential(e,n){return Ys._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lr.credential(n,r)}catch{return null}}}Lr.TWITTER_SIGN_IN_METHOD="twitter.com";Lr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await hn._fromIdTokenResponse(e,r,s),o=v0(r);return new io({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=v0(r);return new io({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function v0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou extends Bn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ou.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ou(e,n,r,s)}}function EI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ou._fromErrorAndOperation(t,i,e,r):i})}async function NP(t,e,n=!1){const r=await sl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return io._forOperation(t,"link",r)}/**
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
 */async function kP(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Xr(r));const s="reauthenticate";try{const i=await sl(t,EI(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Tg(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),io._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e,n=!1){if(Ft(t.app))return Promise.reject(Xr(t));const r="signIn",s=await EI(t,r,e),i=await io._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function bP(t,e){return xI(To(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RP(t){const e=To(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function AP(t,e,n){return Ft(t.app)?Promise.reject(Xr(t)):bP(Ne(t),Io.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&RP(t),r})}function PP(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function DP(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function OP(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function TI(t){return Ne(t).signOut()}async function LP(t){return Ne(t).delete()}const Lu="__sak";/**
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
 */class II{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lu,"1"),this.storage.removeItem(Lu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=1e3,jP=10;class CI extends II{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=mI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);tP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CI.type="LOCAL";const VP=CI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI extends II{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SI.type="SESSION";const NI=SI;/**
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
 */function FP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await FP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class UP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Ng("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function BP(t){On().location.href=t}/**
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
 */function kI(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function $P(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function WP(){return kI()?self:null}/**
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
 */const bI="firebaseLocalStorageDb",qP=1,Mu="firebaseLocalStorage",RI="fbase_key";class Al{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vh(t,e){return t.transaction([Mu],e?"readwrite":"readonly").objectStore(Mu)}function HP(){const t=indexedDB.deleteDatabase(bI);return new Al(t).toPromise()}function Mp(){const t=indexedDB.open(bI,qP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mu,{keyPath:RI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mu)?e(r):(r.close(),await HP(),e(await Mp()))})})}async function w0(t,e,n){const r=Vh(t,!0).put({[RI]:e,value:n});return new Al(r).toPromise()}async function GP(t,e){const n=Vh(t,!1).get(e),r=await new Al(n).toPromise();return r===void 0?null:r.value}function E0(t,e){const n=Vh(t,!0).delete(e);return new Al(n).toPromise()}const KP=800,QP=3;class AI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>QP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jh._getInstance(WP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await $P(),!this.activeServiceWorker)return;this.sender=new UP(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mp();return await w0(e,Lu,"1"),await E0(e,Lu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>w0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>E0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Vh(s,!1).getAll();return new Al(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),KP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AI.type="LOCAL";const YP=AI;new bl(3e4,6e4);/**
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
 */function XP(t,e){return e?Yn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class kg extends Cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function JP(t){return xI(t.auth,new kg(t),t.bypassAuthState)}function ZP(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),kP(n,new kg(t),t.bypassAuthState)}async function eD(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),NP(n,new kg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return JP;case"linkViaPopup":case"linkViaRedirect":return eD;case"reauthViaPopup":case"reauthViaRedirect":return ZP;default:En(this.auth,"internal-error")}}resolve(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new bl(2e3,1e4);class Oi extends PI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const e=Ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tD.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD="pendingRedirect",Gc=new Map;class rD extends PI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gc.get(this.auth._key());if(!e){try{const r=await sD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gc.set(this.auth._key(),e)}return this.bypassAuthState||Gc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sD(t,e){const n=aD(e),r=oD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function iD(t,e){Gc.set(t._key(),e)}function oD(t){return Yn(t._redirectPersistence)}function aD(t){return Hc(nD,t.config.apiKey,t.name)}async function lD(t,e,n=!1){if(Ft(t.app))return Promise.reject(Xr(t));const r=To(t),s=XP(r,e),o=await new rD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=10*60*1e3;class uD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cD&&this.cachedEventUids.clear(),this.cachedEventUids.has(x0(e))}saveEventToCache(e){this.cachedEventUids.add(x0(e)),this.lastProcessedEventTime=Date.now()}}function x0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pD=/^https?/;async function mD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dD(t);for(const n of e)try{if(gD(n))return}catch{}En(t,"unauthorized-domain")}function gD(t){const e=Op(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pD.test(n))return!1;if(fD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _D=new bl(3e4,6e4);function T0(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yD(t){return new Promise((e,n)=>{var s,i,o;function r(){T0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{T0(),n(Dn(t,"network-request-failed"))},timeout:_D.get()})}if((i=(s=On().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=On().gapi)!=null&&o.load)r();else{const a=uP("iframefcb");return On()[a]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},_I(`${cP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Kc=null,e})}let Kc=null;function vD(t){return Kc=Kc||yD(t),Kc}/**
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
 */const wD=new bl(5e3,15e3),ED="__/auth/iframe",xD="emulator/auth/iframe",TD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ID=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CD(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xg(e,xD):`https://${t.config.authDomain}/${ED}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=ID.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xo(r).slice(1)}`}async function SD(t){const e=await vD(t),n=On().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:CD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),a=On().setTimeout(()=>{i(o)},wD.get());function l(){On().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ND={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kD=500,bD=600,RD="_blank",AD="http://localhost";class I0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function PD(t,e,n,r=kD,s=bD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...ND,width:r.toString(),height:s.toString(),top:i,left:o},u=wt().toLowerCase();n&&(a=uI(u)?RD:n),lI(u)&&(e=e||AD,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[y,T])=>`${m}${y}=${T},`,"");if(eP(u)&&a!=="_self")return DD(e||"",a),new I0(null);const f=window.open(e||"",a,d);K(f,t,"popup-blocked");try{f.focus()}catch{}return new I0(f)}function DD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OD="__/auth/handler",LD="emulator/auth/handler",MD=encodeURIComponent("fac");async function C0(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof wI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",kp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof Rl){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${MD}=${encodeURIComponent(l)}`:"";return`${jD(t)}?${xo(a).slice(1)}${u}`}function jD({config:t}){return t.emulator?xg(t,LD):`https://${t.authDomain}/${OD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="webStorageSupport";class VD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=NI,this._completeRedirectFn=lD,this._overrideRedirectResult=iD}async _openPopup(e,n,r,s){var o;cr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await C0(e,n,r,Op(),s);return PD(e,i,Ng())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await C0(e,n,r,Op(),s);return BP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SD(e),r=new uD(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yf,{type:yf},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[yf];i!==void 0&&n(!!i),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mI()||cI()||Ig()}}const FD=VD;var S0="@firebase/auth",N0="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $D(t){os(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gI(t)},u=new oP(r,s,i,l);return gP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),os(new ar("auth-internal",e=>{const n=To(e.getProvider("auth").getImmediate());return(r=>new UD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(S0,N0,BD(t)),en(S0,N0,"esm2020")}/**
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
 */const zD=5*60,WD=qT("authIdTokenMaxAge")||zD;let k0=null;const qD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WD)return;const s=n==null?void 0:n.token;k0!==s&&(k0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HD(t=Oh()){const e=kl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mP(t,{popupRedirectResolver:FD,persistence:[YP,VP,NI]}),r=qT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=qD(i.toString());DP(n,o,()=>o(n.currentUser)),PP(n,a=>o(a))}}const s=zT("auth");return s&&_P(n,`http://${s}`),n}function GD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",GD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$D("Browser");var b0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,OI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function x(){}x.prototype=_.prototype,w.F=_.prototype,w.prototype=new x,w.prototype.constructor=w,w.D=function(N,k,A){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return _.prototype[k].apply(N,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,_,x){x||(x=0);const N=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)N[k]=_.charCodeAt(x++)|_.charCodeAt(x++)<<8|_.charCodeAt(x++)<<16|_.charCodeAt(x++)<<24;else for(k=0;k<16;++k)N[k]=_[x++]|_[x++]<<8|_[x++]<<16|_[x++]<<24;_=w.g[0],x=w.g[1],k=w.g[2];let A=w.g[3],I;I=_+(A^x&(k^A))+N[0]+3614090360&4294967295,_=x+(I<<7&4294967295|I>>>25),I=A+(k^_&(x^k))+N[1]+3905402710&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(x^A&(_^x))+N[2]+606105819&4294967295,k=A+(I<<17&4294967295|I>>>15),I=x+(_^k&(A^_))+N[3]+3250441966&4294967295,x=k+(I<<22&4294967295|I>>>10),I=_+(A^x&(k^A))+N[4]+4118548399&4294967295,_=x+(I<<7&4294967295|I>>>25),I=A+(k^_&(x^k))+N[5]+1200080426&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(x^A&(_^x))+N[6]+2821735955&4294967295,k=A+(I<<17&4294967295|I>>>15),I=x+(_^k&(A^_))+N[7]+4249261313&4294967295,x=k+(I<<22&4294967295|I>>>10),I=_+(A^x&(k^A))+N[8]+1770035416&4294967295,_=x+(I<<7&4294967295|I>>>25),I=A+(k^_&(x^k))+N[9]+2336552879&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(x^A&(_^x))+N[10]+4294925233&4294967295,k=A+(I<<17&4294967295|I>>>15),I=x+(_^k&(A^_))+N[11]+2304563134&4294967295,x=k+(I<<22&4294967295|I>>>10),I=_+(A^x&(k^A))+N[12]+1804603682&4294967295,_=x+(I<<7&4294967295|I>>>25),I=A+(k^_&(x^k))+N[13]+4254626195&4294967295,A=_+(I<<12&4294967295|I>>>20),I=k+(x^A&(_^x))+N[14]+2792965006&4294967295,k=A+(I<<17&4294967295|I>>>15),I=x+(_^k&(A^_))+N[15]+1236535329&4294967295,x=k+(I<<22&4294967295|I>>>10),I=_+(k^A&(x^k))+N[1]+4129170786&4294967295,_=x+(I<<5&4294967295|I>>>27),I=A+(x^k&(_^x))+N[6]+3225465664&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^x&(A^_))+N[11]+643717713&4294967295,k=A+(I<<14&4294967295|I>>>18),I=x+(A^_&(k^A))+N[0]+3921069994&4294967295,x=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(x^k))+N[5]+3593408605&4294967295,_=x+(I<<5&4294967295|I>>>27),I=A+(x^k&(_^x))+N[10]+38016083&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^x&(A^_))+N[15]+3634488961&4294967295,k=A+(I<<14&4294967295|I>>>18),I=x+(A^_&(k^A))+N[4]+3889429448&4294967295,x=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(x^k))+N[9]+568446438&4294967295,_=x+(I<<5&4294967295|I>>>27),I=A+(x^k&(_^x))+N[14]+3275163606&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^x&(A^_))+N[3]+4107603335&4294967295,k=A+(I<<14&4294967295|I>>>18),I=x+(A^_&(k^A))+N[8]+1163531501&4294967295,x=k+(I<<20&4294967295|I>>>12),I=_+(k^A&(x^k))+N[13]+2850285829&4294967295,_=x+(I<<5&4294967295|I>>>27),I=A+(x^k&(_^x))+N[2]+4243563512&4294967295,A=_+(I<<9&4294967295|I>>>23),I=k+(_^x&(A^_))+N[7]+1735328473&4294967295,k=A+(I<<14&4294967295|I>>>18),I=x+(A^_&(k^A))+N[12]+2368359562&4294967295,x=k+(I<<20&4294967295|I>>>12),I=_+(x^k^A)+N[5]+4294588738&4294967295,_=x+(I<<4&4294967295|I>>>28),I=A+(_^x^k)+N[8]+2272392833&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^x)+N[11]+1839030562&4294967295,k=A+(I<<16&4294967295|I>>>16),I=x+(k^A^_)+N[14]+4259657740&4294967295,x=k+(I<<23&4294967295|I>>>9),I=_+(x^k^A)+N[1]+2763975236&4294967295,_=x+(I<<4&4294967295|I>>>28),I=A+(_^x^k)+N[4]+1272893353&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^x)+N[7]+4139469664&4294967295,k=A+(I<<16&4294967295|I>>>16),I=x+(k^A^_)+N[10]+3200236656&4294967295,x=k+(I<<23&4294967295|I>>>9),I=_+(x^k^A)+N[13]+681279174&4294967295,_=x+(I<<4&4294967295|I>>>28),I=A+(_^x^k)+N[0]+3936430074&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^x)+N[3]+3572445317&4294967295,k=A+(I<<16&4294967295|I>>>16),I=x+(k^A^_)+N[6]+76029189&4294967295,x=k+(I<<23&4294967295|I>>>9),I=_+(x^k^A)+N[9]+3654602809&4294967295,_=x+(I<<4&4294967295|I>>>28),I=A+(_^x^k)+N[12]+3873151461&4294967295,A=_+(I<<11&4294967295|I>>>21),I=k+(A^_^x)+N[15]+530742520&4294967295,k=A+(I<<16&4294967295|I>>>16),I=x+(k^A^_)+N[2]+3299628645&4294967295,x=k+(I<<23&4294967295|I>>>9),I=_+(k^(x|~A))+N[0]+4096336452&4294967295,_=x+(I<<6&4294967295|I>>>26),I=A+(x^(_|~k))+N[7]+1126891415&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~x))+N[14]+2878612391&4294967295,k=A+(I<<15&4294967295|I>>>17),I=x+(A^(k|~_))+N[5]+4237533241&4294967295,x=k+(I<<21&4294967295|I>>>11),I=_+(k^(x|~A))+N[12]+1700485571&4294967295,_=x+(I<<6&4294967295|I>>>26),I=A+(x^(_|~k))+N[3]+2399980690&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~x))+N[10]+4293915773&4294967295,k=A+(I<<15&4294967295|I>>>17),I=x+(A^(k|~_))+N[1]+2240044497&4294967295,x=k+(I<<21&4294967295|I>>>11),I=_+(k^(x|~A))+N[8]+1873313359&4294967295,_=x+(I<<6&4294967295|I>>>26),I=A+(x^(_|~k))+N[15]+4264355552&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~x))+N[6]+2734768916&4294967295,k=A+(I<<15&4294967295|I>>>17),I=x+(A^(k|~_))+N[13]+1309151649&4294967295,x=k+(I<<21&4294967295|I>>>11),I=_+(k^(x|~A))+N[4]+4149444226&4294967295,_=x+(I<<6&4294967295|I>>>26),I=A+(x^(_|~k))+N[11]+3174756917&4294967295,A=_+(I<<10&4294967295|I>>>22),I=k+(_^(A|~x))+N[2]+718787259&4294967295,k=A+(I<<15&4294967295|I>>>17),I=x+(A^(k|~_))+N[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.v=function(w,_){_===void 0&&(_=w.length);const x=_-this.blockSize,N=this.C;let k=this.h,A=0;for(;A<_;){if(k==0)for(;A<=x;)s(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<_;)if(N[k++]=w.charCodeAt(A++),k==this.blockSize){s(this,N),k=0;break}}else for(;A<_;)if(N[k++]=w[A++],k==this.blockSize){s(this,N),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;_=this.o*8;for(var x=w.length-8;x<w.length;++x)w[x]=_&255,_/=256;for(this.v(w),w=Array(16),_=0,x=0;x<4;++x)for(let N=0;N<32;N+=8)w[_++]=this.g[x]>>>N&255;return w};function i(w,_){var x=a;return Object.prototype.hasOwnProperty.call(x,w)?x[w]:x[w]=_(w)}function o(w,_){this.h=_;const x=[];let N=!0;for(let k=w.length-1;k>=0;k--){const A=w[k]|0;N&&A==_||(x[k]=A,N=!1)}this.g=x}var a={};function l(w){return-128<=w&&w<128?i(w,function(_){return new o([_|0],_<0?-1:0)}):new o([w|0],w<0?-1:0)}function u(w){if(isNaN(w)||!isFinite(w))return f;if(w<0)return R(u(-w));const _=[];let x=1;for(let N=0;w>=x;N++)_[N]=w/x|0,x*=4294967296;return new o(_,0)}function d(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return R(d(w.substring(1),_));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=u(Math.pow(_,8));let N=f;for(let A=0;A<w.length;A+=8){var k=Math.min(8,w.length-A);const I=parseInt(w.substring(A,A+k),_);k<8?(k=u(Math.pow(_,k)),N=N.j(k).add(u(I))):(N=N.j(x),N=N.add(u(I)))}return N}var f=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(b(this))return-R(this).m();let w=0,_=1;for(let x=0;x<this.g.length;x++){const N=this.i(x);w+=(N>=0?N:4294967296+N)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(b(this))return"-"+R(this).toString(w);const _=u(Math.pow(w,6));var x=this;let N="";for(;;){const k=O(x,_).g;x=C(x,k.j(_));let A=((x.g.length>0?x.g[0]:x.h)>>>0).toString(w);if(x=k,T(x))return A+N;for(;A.length<6;)A="0"+A;N=A+N}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(let _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function b(w){return w.h==-1}t.l=function(w){return w=C(this,w),b(w)?-1:T(w)?0:1};function R(w){const _=w.g.length,x=[];for(let N=0;N<_;N++)x[N]=~w.g[N];return new o(x,~w.h).add(m)}t.abs=function(){return b(this)?R(this):this},t.add=function(w){const _=Math.max(this.g.length,w.g.length),x=[];let N=0;for(let k=0;k<=_;k++){let A=N+(this.i(k)&65535)+(w.i(k)&65535),I=(A>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);N=I>>>16,A&=65535,I&=65535,x[k]=I<<16|A}return new o(x,x[x.length-1]&-2147483648?-1:0)};function C(w,_){return w.add(R(_))}t.j=function(w){if(T(this)||T(w))return f;if(b(this))return b(w)?R(this).j(R(w)):R(R(this).j(w));if(b(w))return R(this.j(R(w)));if(this.l(y)<0&&w.l(y)<0)return u(this.m()*w.m());const _=this.g.length+w.g.length,x=[];for(var N=0;N<2*_;N++)x[N]=0;for(N=0;N<this.g.length;N++)for(let k=0;k<w.g.length;k++){const A=this.i(N)>>>16,I=this.i(N)&65535,de=w.i(k)>>>16,xe=w.i(k)&65535;x[2*N+2*k]+=I*xe,E(x,2*N+2*k),x[2*N+2*k+1]+=A*xe,E(x,2*N+2*k+1),x[2*N+2*k+1]+=I*de,E(x,2*N+2*k+1),x[2*N+2*k+2]+=A*de,E(x,2*N+2*k+2)}for(w=0;w<_;w++)x[w]=x[2*w+1]<<16|x[2*w];for(w=_;w<2*_;w++)x[w]=0;return new o(x,0)};function E(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function S(w,_){this.g=w,this.h=_}function O(w,_){if(T(_))throw Error("division by zero");if(T(w))return new S(f,f);if(b(w))return _=O(R(w),_),new S(R(_.g),R(_.h));if(b(_))return _=O(w,R(_)),new S(R(_.g),_.h);if(w.g.length>30){if(b(w)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var x=m,N=_;N.l(w)<=0;)x=j(x),N=j(N);var k=M(x,1),A=M(N,1);for(N=M(N,2),x=M(x,2);!T(N);){var I=A.add(N);I.l(w)<=0&&(k=k.add(x),A=I),N=M(N,1),x=M(x,1)}return _=C(w,k.j(_)),new S(k,_)}for(k=f;w.l(_)>=0;){for(x=Math.max(1,Math.floor(w.m()/_.m())),N=Math.ceil(Math.log(x)/Math.LN2),N=N<=48?1:Math.pow(2,N-48),A=u(x),I=A.j(_);b(I)||I.l(w)>0;)x-=N,A=u(x),I=A.j(_);T(A)&&(A=m),k=k.add(A),w=C(w,I)}return new S(k,w)}t.B=function(w){return O(this,w).h},t.and=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let N=0;N<_;N++)x[N]=this.i(N)&w.i(N);return new o(x,this.h&w.h)},t.or=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let N=0;N<_;N++)x[N]=this.i(N)|w.i(N);return new o(x,this.h|w.h)},t.xor=function(w){const _=Math.max(this.g.length,w.g.length),x=[];for(let N=0;N<_;N++)x[N]=this.i(N)^w.i(N);return new o(x,this.h^w.h)};function j(w){const _=w.g.length+1,x=[];for(let N=0;N<_;N++)x[N]=w.i(N)<<1|w.i(N-1)>>>31;return new o(x,w.h)}function M(w,_){const x=_>>5;_%=32;const N=w.g.length-x,k=[];for(let A=0;A<N;A++)k[A]=_>0?w.i(A+x)>>>_|w.i(A+x+1)<<32-_:w.i(A+x);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,OI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Jr=o}).apply(typeof b0<"u"?b0:typeof self<"u"?self:typeof window<"u"?window:{});var Ic=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LI,ma,MI,Qc,jp,jI,VI,FI;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ic=="object"&&Ic];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var D=c[v];if(!(D in g))break e;g=g[D]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function u(c,p,g){return u=l,u.apply(null,arguments)}function d(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,D,L){for(var $=Array(arguments.length-2),te=2;te<arguments.length;te++)$[te-2]=arguments[te];return p.prototype[D].apply(v,$)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function T(c,p){for(let v=1;v<arguments.length;v++){const D=arguments[v];var g=typeof D;if(g=g!="object"?g:D?Array.isArray(D)?"array":g:"null",g=="array"||g=="object"&&typeof D.length=="number"){g=c.length||0;const L=D.length||0;c.length=g+L;for(let $=0;$<L;$++)c[g+$]=D[$]}else c.push(D)}}class b{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function R(c){o.setTimeout(()=>{throw c},0)}function C(){var c=w;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class E{constructor(){this.h=this.g=null}add(p,g){const v=S.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var S=new b(()=>new O,c=>c.reset());class O{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,w=new E,_=()=>{const c=Promise.resolve(void 0);j=()=>{c.then(x)}};function x(){for(var c;c=C();){try{c.h.call(c.g)}catch(g){R(g)}var p=S;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}M=!1}function N(){this.u=this.u,this.C=this.C}N.prototype.u=!1,N.prototype.dispose=function(){this.u||(this.u=!0,this.N())},N.prototype[Symbol.dispose]=function(){this.dispose()},N.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function I(c){return/^[\s\xa0]*$/.test(c)}function de(c,p){k.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(de,k),de.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&de.Z.h.call(this)},de.prototype.h=function(){de.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var xe="closure_listenable_"+(Math.random()*1e6|0),st=0;function rn(c,p,g,v,D){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=D,this.key=++st,this.da=this.fa=!1}function z(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function X(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function ee(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function ke(c){const p={};for(const g in c)p[g]=c[g];return p}const je="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cs(c,p){let g,v;for(let D=1;D<arguments.length;D++){v=arguments[D];for(g in v)c[g]=v[g];for(let L=0;L<je.length;L++)g=je[L],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Kt(c){this.src=c,this.g={},this.h=0}Kt.prototype.add=function(c,p,g,v,D){const L=c.toString();c=this.g[L],c||(c=this.g[L]=[],this.h++);const $=sn(c,p,v,D);return $>-1?(p=c[$],g||(p.fa=!1)):(p=new rn(p,this.src,L,!!v,D),p.fa=g,c.push(p)),p};function Ss(c,p){const g=p.type;if(g in c.g){var v=c.g[g],D=Array.prototype.indexOf.call(v,p,void 0),L;(L=D>=0)&&Array.prototype.splice.call(v,D,1),L&&(z(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function sn(c,p,g,v){for(let D=0;D<c.length;++D){const L=c[D];if(!L.da&&L.listener==p&&L.capture==!!g&&L.ha==v)return D}return-1}var vr="closure_lm_"+(Math.random()*1e6|0),yd={};function q_(c,p,g,v,D){if(Array.isArray(p)){for(let L=0;L<p.length;L++)q_(c,p[L],g,v,D);return null}return g=K_(g),c&&c[xe]?c.J(p,g,a(v)?!!v.capture:!1,D):qN(c,p,g,!1,v,D)}function qN(c,p,g,v,D,L){if(!p)throw Error("Invalid event type");const $=a(D)?!!D.capture:!!D;let te=wd(c);if(te||(c[vr]=te=new Kt(c)),g=te.add(p,g,v,$,L),g.proxy)return g;if(v=HN(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)A||(D=$),D===void 0&&(D=!1),c.addEventListener(p.toString(),v,D);else if(c.attachEvent)c.attachEvent(G_(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function HN(){function c(g){return p.call(c.src,c.listener,g)}const p=GN;return c}function H_(c,p,g,v,D){if(Array.isArray(p))for(var L=0;L<p.length;L++)H_(c,p[L],g,v,D);else v=a(v)?!!v.capture:!!v,g=K_(g),c&&c[xe]?(c=c.i,L=String(p).toString(),L in c.g&&(p=c.g[L],g=sn(p,g,v,D),g>-1&&(z(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[L],c.h--)))):c&&(c=wd(c))&&(p=c.g[p.toString()],c=-1,p&&(c=sn(p,g,v,D)),(g=c>-1?p[c]:null)&&vd(g))}function vd(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[xe])Ss(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(G_(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=wd(p))?(Ss(g,c),g.h==0&&(g.src=null,p[vr]=null)):z(c)}}}function G_(c){return c in yd?yd[c]:yd[c]="on"+c}function GN(c,p){if(c.da)c=!0;else{p=new de(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&vd(c),c=g.call(v,p)}return c}function wd(c){return c=c[vr],c instanceof Kt?c:null}var Ed="__closure_events_fn_"+(Math.random()*1e9>>>0);function K_(c){return typeof c=="function"?c:(c[Ed]||(c[Ed]=function(p){return c.handleEvent(p)}),c[Ed])}function ut(){N.call(this),this.i=new Kt(this),this.M=this,this.G=null}f(ut,N),ut.prototype[xe]=!0,ut.prototype.removeEventListener=function(c,p,g,v){H_(this,c,p,g,v)};function Et(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new k(p,c);else if(p instanceof k)p.target=p.target||c;else{var D=p;p=new k(v,c),Cs(p,D)}D=!0;let L,$;if(g)for($=g.length-1;$>=0;$--)L=p.g=g[$],D=Kl(L,v,!0,p)&&D;if(L=p.g=c,D=Kl(L,v,!0,p)&&D,D=Kl(L,v,!1,p)&&D,g)for($=0;$<g.length;$++)L=p.g=g[$],D=Kl(L,v,!1,p)&&D}ut.prototype.N=function(){if(ut.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)z(g[v]);delete c.g[p],c.h--}}this.G=null},ut.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},ut.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function Kl(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let D=!0;for(let L=0;L<p.length;++L){const $=p[L];if($&&!$.da&&$.capture==g){const te=$.listener,He=$.ha||$.src;$.fa&&Ss(c.i,$),D=te.call(He,v)!==!1&&D}}return D&&!v.defaultPrevented}function KN(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=u(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function Q_(c){c.g=KN(()=>{c.g=null,c.i&&(c.i=!1,Q_(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class QN extends N{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Q_(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oo(c){N.call(this),this.h=c,this.g={}}f(Oo,N);var Y_=[];function X_(c){X(c.g,function(p,g){this.g.hasOwnProperty(g)&&vd(p)},c),c.g={}}Oo.prototype.N=function(){Oo.Z.N.call(this),X_(this)},Oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xd=o.JSON.stringify,YN=o.JSON.parse,XN=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function J_(){}function Z_(){}var Lo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Td(){k.call(this,"d")}f(Td,k);function Id(){k.call(this,"c")}f(Id,k);var Ns={},ey=null;function Ql(){return ey=ey||new ut}Ns.Ia="serverreachability";function ty(c){k.call(this,Ns.Ia,c)}f(ty,k);function Mo(c){const p=Ql();Et(p,new ty(p))}Ns.STAT_EVENT="statevent";function ny(c,p){k.call(this,Ns.STAT_EVENT,c),this.stat=p}f(ny,k);function xt(c){const p=Ql();Et(p,new ny(p,c))}Ns.Ja="timingevent";function ry(c,p){k.call(this,Ns.Ja,c),this.size=p}f(ry,k);function jo(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function Vo(){this.g=!0}Vo.prototype.ua=function(){this.g=!1};function JN(c,p,g,v,D,L){c.info(function(){if(c.g)if(L){var $="",te=L.split("&");for(let _e=0;_e<te.length;_e++){var He=te[_e].split("=");if(He.length>1){const Xe=He[0];He=He[1];const In=Xe.split("_");$=In.length>=2&&In[1]=="type"?$+(Xe+"="+He+"&"):$+(Xe+"=redacted&")}}}else $=null;else $=L;return"XMLHTTP REQ ("+v+") [attempt "+D+"]: "+p+`
`+g+`
`+$})}function ZN(c,p,g,v,D,L,$){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+D+"]: "+p+`
`+g+`
`+L+" "+$})}function fi(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+tk(c,g)+(v?" "+v:"")})}function ek(c,p){c.info(function(){return"TIMEOUT: "+p})}Vo.prototype.info=function(){};function tk(c,p){if(!c.g)return p;if(!p)return null;try{const L=JSON.parse(p);if(L){for(c=0;c<L.length;c++)if(Array.isArray(L[c])){var g=L[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var D=v[0];if(D!="noop"&&D!="stop"&&D!="close")for(let $=1;$<v.length;$++)v[$]=""}}}}return xd(L)}catch{return p}}var Yl={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},sy={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},iy;function Cd(){}f(Cd,J_),Cd.prototype.g=function(){return new XMLHttpRequest},iy=new Cd;function Fo(c){return encodeURIComponent(String(c))}function nk(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function wr(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new Oo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new oy}function oy(){this.i=null,this.g="",this.h=!1}var ay={},Sd={};function Nd(c,p,g){c.M=1,c.A=Jl(Tn(p)),c.u=g,c.R=!0,ly(c,null)}function ly(c,p){c.F=Date.now(),Xl(c),c.B=Tn(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),Ey(g.i,"t",v),c.C=0,g=c.j.L,c.h=new oy,c.g=Fy(c.j,g?p:null,!c.u),c.P>0&&(c.O=new QN(u(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var D="readystatechange";Array.isArray(D)||(D&&(Y_[0]=D.toString()),D=Y_);for(let L=0;L<D.length;L++){const $=q_(g,D[L],v||p.handleEvent,!1,p.h||p);if(!$)break;p.g[$.key]=$}p=c.J?ke(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Mo(),JN(c.i,c.v,c.B,c.l,c.S,c.u)}wr.prototype.ba=function(c){c=c.target;const p=this.O;p&&Tr(c)==3?p.j():this.Y(c)},wr.prototype.Y=function(c){try{if(c==this.g)e:{const te=Tr(this.g),He=this.g.ya(),_e=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||ky(this.g)))){this.K||te!=4||He==7||(He==8||_e<=0?Mo(3):Mo(2)),kd(this);var p=this.g.ca();this.X=p;var g=rk(this);if(this.o=p==200,ZN(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,D=this.g;if((v=D.g?D.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(v)){var L=v;break t}}L=null}if(c=L)fi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bd(this,c);else{this.o=!1,this.m=3,xt(12),ks(this),Uo(this);break e}}if(this.R){c=!0;let Xe;for(;!this.K&&this.C<g.length;)if(Xe=sk(this,g),Xe==Sd){te==4&&(this.m=4,xt(14),c=!1),fi(this.i,this.l,null,"[Incomplete Response]");break}else if(Xe==ay){this.m=4,xt(15),fi(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else fi(this.i,this.l,Xe,null),bd(this,Xe);if(cy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||g.length!=0||this.h.h||(this.m=1,xt(16),c=!1),this.o=this.o&&c,!c)fi(this.i,this.l,g,"[Invalid Chunked Response]"),ks(this),Uo(this);else if(g.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),jd($),$.P=!0,xt(11))}}else fi(this.i,this.l,g,null),bd(this,g);te==4&&ks(this),this.o&&!this.K&&(te==4?Ly(this.j,this):(this.o=!1,Xl(this)))}else yk(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,xt(12)):(this.m=0,xt(13)),ks(this),Uo(this)}}}catch{}finally{}};function rk(c){if(!cy(c))return c.g.la();const p=ky(c.g);if(p==="")return"";let g="";const v=p.length,D=Tr(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ks(c),Uo(c),"";c.h.i=new o.TextDecoder}for(let L=0;L<v;L++)c.h.h=!0,g+=c.h.i.decode(p[L],{stream:!(D&&L==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function cy(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function sk(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?Sd:(g=Number(p.substring(g,v)),isNaN(g)?ay:(v+=1,v+g>p.length?Sd:(p=p.slice(v,v+g),c.C=v+g,p)))}wr.prototype.cancel=function(){this.K=!0,ks(this)};function Xl(c){c.T=Date.now()+c.H,uy(c,c.H)}function uy(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=jo(u(c.aa,c),p)}function kd(c){c.D&&(o.clearTimeout(c.D),c.D=null)}wr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ek(this.i,this.B),this.M!=2&&(Mo(),xt(17)),ks(this),this.m=2,Uo(this)):uy(this,this.T-c)};function Uo(c){c.j.I==0||c.K||Ly(c.j,c)}function ks(c){kd(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,X_(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function bd(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||Rd(g.h,c))){if(!c.L&&Rd(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var D=v;if(D[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)rc(g),tc(g);else break e;Md(g),xt(18)}}else g.xa=D[1],0<g.xa-g.K&&D[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=jo(u(g.Va,g),6e3));fy(g.h)<=1&&g.ta&&(g.ta=void 0)}else Rs(g,11)}else if((c.L||g.g==c)&&rc(g),!I(p))for(D=g.Ba.g.parse(p),p=0;p<D.length;p++){let _e=D[p];const Xe=_e[0];if(!(Xe<=g.K))if(g.K=Xe,_e=_e[1],g.I==2)if(_e[0]=="c"){g.M=_e[1],g.ba=_e[2];const In=_e[3];In!=null&&(g.ka=In,g.j.info("VER="+g.ka));const As=_e[4];As!=null&&(g.za=As,g.j.info("SVER="+g.za));const Ir=_e[5];Ir!=null&&typeof Ir=="number"&&Ir>0&&(v=1.5*Ir,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Cr=c.g;if(Cr){const ic=Cr.g?Cr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ic){var L=v.h;L.g||ic.indexOf("spdy")==-1&&ic.indexOf("quic")==-1&&ic.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Ad(L,L.h),L.h=null))}if(v.G){const Vd=Cr.g?Cr.g.getResponseHeader("X-HTTP-Session-Id"):null;Vd&&(v.wa=Vd,Te(v.J,v.G,Vd))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var $=c;if(v.na=Vy(v,v.L?v.ba:null,v.W),$.L){py(v.h,$);var te=$,He=v.O;He&&(te.H=He),te.D&&(kd(te),Xl(te)),v.g=$}else Dy(v);g.i.length>0&&nc(g)}else _e[0]!="stop"&&_e[0]!="close"||Rs(g,7);else g.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Rs(g,7):Ld(g):_e[0]!="noop"&&g.l&&g.l.qa(_e),g.A=0)}}Mo(4)}catch{}}var ik=class{constructor(c,p){this.g=c,this.map=p}};function hy(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function dy(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function fy(c){return c.h?1:c.g?c.g.size:0}function Rd(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Ad(c,p){c.g?c.g.add(p):c.h=p}function py(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}hy.prototype.cancel=function(){if(this.i=my(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function my(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return y(c.i)}var gy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ok(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let D,L=null;v>=0?(D=c[g].substring(0,v),L=c[g].substring(v+1)):D=c[g],p(D,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Er(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Er?(this.l=c.l,Bo(this,c.j),this.o=c.o,this.g=c.g,$o(this,c.u),this.h=c.h,Pd(this,xy(c.i)),this.m=c.m):c&&(p=String(c).match(gy))?(this.l=!1,Bo(this,p[1]||"",!0),this.o=zo(p[2]||""),this.g=zo(p[3]||"",!0),$o(this,p[4]),this.h=zo(p[5]||"",!0),Pd(this,p[6]||"",!0),this.m=zo(p[7]||"")):(this.l=!1,this.i=new qo(null,this.l))}Er.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(Wo(p,_y,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(Wo(p,_y,!0),"@"),c.push(Fo(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(Wo(g,g.charAt(0)=="/"?ck:lk,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",Wo(g,hk)),c.join("")},Er.prototype.resolve=function(c){const p=Tn(this);let g=!!c.j;g?Bo(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)$o(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var D=p.h.lastIndexOf("/");D!=-1&&(v=p.h.slice(0,D+1)+v)}if(D=v,D==".."||D==".")v="";else if(D.indexOf("./")!=-1||D.indexOf("/.")!=-1){v=D.lastIndexOf("/",0)==0,D=D.split("/");const L=[];for(let $=0;$<D.length;){const te=D[$++];te=="."?v&&$==D.length&&L.push(""):te==".."?((L.length>1||L.length==1&&L[0]!="")&&L.pop(),v&&$==D.length&&L.push("")):(L.push(te),v=!0)}v=L.join("/")}else v=D}return g?p.h=v:g=c.i.toString()!=="",g?Pd(p,xy(c.i)):g=!!c.m,g&&(p.m=c.m),p};function Tn(c){return new Er(c)}function Bo(c,p,g){c.j=g?zo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function $o(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Pd(c,p,g){p instanceof qo?(c.i=p,dk(c.i,c.l)):(g||(p=Wo(p,uk)),c.i=new qo(p,c.l))}function Te(c,p,g){c.i.set(p,g)}function Jl(c){return Te(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function zo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Wo(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,ak),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ak(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var _y=/[#\/\?@]/g,lk=/[#\?:]/g,ck=/[#\?]/g,uk=/[#\?@]/g,hk=/#/g;function qo(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function bs(c){c.g||(c.g=new Map,c.h=0,c.i&&ok(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=qo.prototype,t.add=function(c,p){bs(this),this.i=null,c=pi(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function yy(c,p){bs(c),p=pi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function vy(c,p){return bs(c),p=pi(c,p),c.g.has(p)}t.forEach=function(c,p){bs(this),this.g.forEach(function(g,v){g.forEach(function(D){c.call(p,D,v,this)},this)},this)};function wy(c,p){bs(c);let g=[];if(typeof p=="string")vy(c,p)&&(g=g.concat(c.g.get(pi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return bs(this),this.i=null,c=pi(this,c),vy(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=wy(this,c),c.length>0?String(c[0]):p):p};function Ey(c,p,g){yy(c,p),g.length>0&&(c.i=null,c.g.set(pi(c,p),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const D=Fo(g);g=wy(this,g);for(let L=0;L<g.length;L++){let $=D;g[L]!==""&&($+="="+Fo(g[L])),c.push($)}}return this.i=c.join("&")};function xy(c){const p=new qo;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function pi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function dk(c,p){p&&!c.j&&(bs(c),c.i=null,c.g.forEach(function(g,v){const D=v.toLowerCase();v!=D&&(yy(this,v),Ey(this,D,g))},c)),c.j=p}function fk(c,p){const g=new Vo;if(o.Image){const v=new Image;v.onload=d(xr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=d(xr,g,"TestLoadImage: error",!1,p,v),v.onabort=d(xr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=d(xr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function pk(c,p){const g=new Vo,v=new AbortController,D=setTimeout(()=>{v.abort(),xr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(L=>{clearTimeout(D),L.ok?xr(g,"TestPingServer: ok",!0,p):xr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(D),xr(g,"TestPingServer: error",!1,p)})}function xr(c,p,g,v,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),v(g)}catch{}}function mk(){this.g=new XN}function Dd(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Dd,J_),Dd.prototype.g=function(){return new Zl(this.i,this.h)};function Zl(c,p){ut.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Zl,ut),t=Zl.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Go(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ho(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Go(this)),this.g&&(this.readyState=3,Go(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ty(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ty(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Ho(this):Go(this),this.readyState==3&&Ty(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Ho(this))},t.Na=function(c){this.g&&(this.response=c,Ho(this))},t.ga=function(){this.g&&Ho(this)};function Ho(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Go(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function Go(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Zl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Iy(c){let p="";return X(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function Od(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=Iy(g),typeof c=="string"?g!=null&&Fo(g):Te(c,p,g))}function Oe(c){ut.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Oe,ut);var gk=/^https?$/i,_k=["POST","PUT"];t=Oe.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():iy.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(L){Cy(this,L);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var D in v)g.set(D,v[D]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const L of v.keys())g.set(L,v.get(L));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(L=>L.toLowerCase()=="content-type"),D=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(_k,p,void 0)>=0)||v||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,$]of g)this.g.setRequestHeader(L,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(L){Cy(this,L)}};function Cy(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,Sy(c),ec(c)}function Sy(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Et(this,"complete"),Et(this,"abort"),ec(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ec(this,!0)),Oe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ny(this):this.Xa())},t.Xa=function(){Ny(this)};function Ny(c){if(c.h&&typeof i<"u"){if(c.v&&Tr(c)==4)setTimeout(c.Ca.bind(c),0);else if(Et(c,"readystatechange"),Tr(c)==4){c.h=!1;try{const L=c.ca();e:switch(L){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=L===0){let $=String(c.D).match(gy)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),v=!gk.test($?$.toLowerCase():"")}g=v}if(g)Et(c,"complete"),Et(c,"success");else{c.o=6;try{var D=Tr(c)>2?c.g.statusText:""}catch{D=""}c.l=D+" ["+c.ca()+"]",Sy(c)}}finally{ec(c)}}}}function ec(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||Et(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Tr(c){return c.g?c.g.readyState:0}t.ca=function(){try{return Tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),YN(p)}};function ky(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function yk(c){const p={};c=(c.g&&Tr(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(I(c[v]))continue;var g=nk(c[v]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const L=p[D]||[];p[D]=L,L.push(g)}ee(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ko(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function by(c){this.za=0,this.i=[],this.j=new Vo,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ko("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ko("baseRetryDelayMs",5e3,c),this.Za=Ko("retryDelaySeedMs",1e4,c),this.Ta=Ko("forwardChannelMaxRetries",2,c),this.va=Ko("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new hy(c&&c.concurrentRequestLimit),this.Ba=new mk,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=by.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){xt(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=Vy(this,null,this.W),nc(this)};function Ld(c){if(Ry(c),c.I==3){var p=c.V++,g=Tn(c.J);if(Te(g,"SID",c.M),Te(g,"RID",p),Te(g,"TYPE","terminate"),Qo(c,g),p=new wr(c,c.j,p),p.M=2,p.A=Jl(Tn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=Fy(p.j,null),p.g.ea(p.A)),p.F=Date.now(),Xl(p)}jy(c)}function tc(c){c.g&&(jd(c),c.g.cancel(),c.g=null)}function Ry(c){tc(c),c.v&&(o.clearTimeout(c.v),c.v=null),rc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function nc(c){if(!dy(c.h)&&!c.m){c.m=!0;var p=c.Ea;j||_(),M||(j(),M=!0),w.add(p,c),c.D=0}}function vk(c,p){return fy(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=jo(u(c.Ea,c,p),My(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const D=new wr(this,this.j,c);let L=this.o;if(this.U&&(L?(L=ke(L),Cs(L,this.U)):L=this.U),this.u!==null||this.R||(D.J=L,L=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=Py(this,D,p),g=Tn(this.J),Te(g,"RID",c),Te(g,"CVER",22),this.G&&Te(g,"X-HTTP-Session-Id",this.G),Qo(this,g),L&&(this.R?p="headers="+Fo(Iy(L))+"&"+p:this.u&&Od(g,this.u,L)),Ad(this.h,D),this.Ra&&Te(g,"TYPE","init"),this.S?(Te(g,"$req",p),Te(g,"SID","null"),D.U=!0,Nd(D,g,null)):Nd(D,g,p),this.I=2}}else this.I==3&&(c?Ay(this,c):this.i.length==0||dy(this.h)||Ay(this))};function Ay(c,p){var g;p?g=p.l:g=c.V++;const v=Tn(c.J);Te(v,"SID",c.M),Te(v,"RID",g),Te(v,"AID",c.K),Qo(c,v),c.u&&c.o&&Od(v,c.u,c.o),g=new wr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=Py(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ad(c.h,g),Nd(g,v,p)}function Qo(c,p){c.H&&X(c.H,function(g,v){Te(p,v,g)}),c.l&&X({},function(g,v){Te(p,v,g)})}function Py(c,p,g){g=Math.min(c.i.length,g);const v=c.l?u(c.l.Ka,c.l,c):null;e:{var D=c.i;let te=-1;for(;;){const He=["count="+g];te==-1?g>0?(te=D[0].g,He.push("ofs="+te)):te=0:He.push("ofs="+te);let _e=!0;for(let Xe=0;Xe<g;Xe++){var L=D[Xe].g;const In=D[Xe].map;if(L-=te,L<0)te=Math.max(0,D[Xe].g-100),_e=!1;else try{L="req"+L+"_"||"";try{var $=In instanceof Map?In:Object.entries(In);for(const[As,Ir]of $){let Cr=Ir;a(Ir)&&(Cr=xd(Ir)),He.push(L+As+"="+encodeURIComponent(Cr))}}catch(As){throw He.push(L+"type="+encodeURIComponent("_badmap")),As}}catch{v&&v(In)}}if(_e){$=He.join("&");break e}}$=void 0}return c=c.i.splice(0,g),p.G=c,$}function Dy(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;j||_(),M||(j(),M=!0),w.add(p,c),c.A=0}}function Md(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=jo(u(c.Da,c),My(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Oy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=jo(u(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xt(10),tc(this),Oy(this))};function jd(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Oy(c){c.g=new wr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=Tn(c.na);Te(p,"RID","rpc"),Te(p,"SID",c.M),Te(p,"AID",c.K),Te(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&Te(p,"TO",c.ia),Te(p,"TYPE","xmlhttp"),Qo(c,p),c.u&&c.o&&Od(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=Jl(Tn(p)),g.u=null,g.R=!0,ly(g,c)}t.Va=function(){this.C!=null&&(this.C=null,tc(this),Md(this),xt(19))};function rc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Ly(c,p){var g=null;if(c.g==p){rc(c),jd(c),c.g=null;var v=2}else if(Rd(c.h,p))g=p.G,py(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var D=c.D;v=Ql(),Et(v,new ry(v,g)),nc(c)}else Dy(c);else if(D=p.m,D==3||D==0&&p.X>0||!(v==1&&vk(c,p)||v==2&&Md(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),D){case 1:Rs(c,5);break;case 4:Rs(c,10);break;case 3:Rs(c,6);break;default:Rs(c,2)}}}function My(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function Rs(c,p){if(c.j.info("Error code "+p),p==2){var g=u(c.bb,c),v=c.Ua;const D=!v;v=new Er(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Bo(v,"https"),Jl(v),D?fk(v.toString(),g):pk(v.toString(),g)}else xt(2);c.I=0,c.l&&c.l.pa(p),jy(c),Ry(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function jy(c){if(c.I=0,c.ja=[],c.l){const p=my(c.h);(p.length!=0||c.i.length!=0)&&(T(c.ja,p),T(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function Vy(c,p,g){var v=g instanceof Er?Tn(g):new Er(g);if(v.g!="")p&&(v.g=p+"."+v.g),$o(v,v.u);else{var D=o.location;v=D.protocol,p=p?p+"."+D.hostname:D.hostname,D=+D.port;const L=new Er(null);v&&Bo(L,v),p&&(L.g=p),D&&$o(L,D),g&&(L.h=g),v=L}return g=c.G,p=c.wa,g&&p&&Te(v,g,p),Te(v,"VER",c.ka),Qo(c,v),v}function Fy(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Oe(new Dd({ab:g})):new Oe(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uy(){}t=Uy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function sc(){}sc.prototype.g=function(c,p){return new jt(c,p)};function jt(c,p){ut.call(this),this.g=new by(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!I(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!I(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new mi(this)}f(jt,ut),jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Ld(this.g)},jt.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=xd(c),c=g);p.i.push(new ik(p.Ya++,c)),p.I==3&&nc(p)},jt.prototype.N=function(){this.g.l=null,delete this.j,Ld(this.g),delete this.g,jt.Z.N.call(this)};function By(c){Td.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(By,Td);function $y(){Id.call(this),this.status=1}f($y,Id);function mi(c){this.g=c}f(mi,Uy),mi.prototype.ra=function(){Et(this.g,"a")},mi.prototype.qa=function(c){Et(this.g,new By(c))},mi.prototype.pa=function(c){Et(this.g,new $y)},mi.prototype.oa=function(){Et(this.g,"b")},sc.prototype.createWebChannel=sc.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,FI=function(){return new sc},VI=function(){return Ql()},jI=Ns,jp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yl.NO_ERROR=0,Yl.TIMEOUT=8,Yl.HTTP_ERROR=6,Qc=Yl,sy.COMPLETE="complete",MI=sy,Z_.EventType=Lo,Lo.OPEN="a",Lo.CLOSE="b",Lo.ERROR="c",Lo.MESSAGE="d",ut.prototype.listen=ut.prototype.J,ma=Z_,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,LI=Oe}).apply(typeof Ic<"u"?Ic:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="12.8.0";function KD(t){Co=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xs=new Dh("@firebase/firestore");function yi(){return Xs.logLevel}function q(t,...e){if(Xs.logLevel<=se.DEBUG){const n=e.map(bg);Xs.debug(`Firestore (${Co}): ${t}`,...n)}}function ur(t,...e){if(Xs.logLevel<=se.ERROR){const n=e.map(bg);Xs.error(`Firestore (${Co}): ${t}`,...n)}}function oo(t,...e){if(Xs.logLevel<=se.WARN){const n=e.map(bg);Xs.warn(`Firestore (${Co}): ${t}`,...n)}}function bg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,UI(t,r,n)}function UI(t,e,n){let r=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ur(r),new Error(r)}function me(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||UI(e,s,r)}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class YD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XD{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){me(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new BI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class JD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ZD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new JD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){me(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new R0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new R0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=t2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Vp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return vf(s)===vf(i)?le(s,i):vf(s)?1:-1}return le(t.length,e.length)}const n2=55296,r2=57343;function vf(t){const e=t.charCodeAt(0);return e>=n2&&e<=r2}function ao(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="__name__";class kn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return kn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=kn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=kn.isNumericId(e),s=kn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?kn.extractNumericId(e).compare(kn.extractNumericId(n)):Vp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Jr.fromString(e.substring(4,e.length-2))}}class we extends kn{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const s2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends kn{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return s2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===A0}static keyField(){return new ot([A0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $I(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function i2(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function P0(t){if(!G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D0(t){if(G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function zI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Fh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fh(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function We(t,e){const n={typeString:t};return e&&(n.value=e),n}function Pl(t,e){if(!zI(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=-62135596800,L0=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*L0);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<O0)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/L0}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Pl(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-O0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:We("string",fe._jsonSchemaVersion),seconds:We("number"),nanoseconds:We("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new fe(0,0))}static max(){return new J(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ol=-1;function o2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new as(s,G.empty(),e)}function a2(t){return new as(t.readTime,t.key,ol)}class as{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new as(J.min(),G.empty(),ol)}static max(){return new as(J.max(),G.empty(),ol)}}function l2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class u2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==c2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(d=>{o[u]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function h2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function No(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Uh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=-1;function Bh(t){return t==null}function ju(t){return t===0&&1/t==-1/0}function d2(t){return typeof t=="number"&&Number.isInteger(t)&&!ju(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="";function f2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=M0(e)),e=p2(t.get(n),e);return M0(e)}function p2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case WI:n+="";break;default:n+=i}}return n}function M0(t){return t+WI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe=class Fp{constructor(e,n){this.comparator=e,this.root=n||Zr.EMPTY}insert(e,n){return new Fp(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zr.BLACK,null,null))}remove(e){return new Fp(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cc(this.root,e,this.comparator,!0)}},Cc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Zr=class Wn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Wn.RED,this.left=s??Wn.EMPTY,this.right=i??Wn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Wn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Wn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Wn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Wn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Wn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}};Zr.EMPTY=null,Zr.RED=!0,Zr.BLACK=!1;Zr.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Zr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V0(this.data.getIterator())}getIteratorFrom(e){return new V0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class V0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Ye(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ao(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class HI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new HI("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const m2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(t){if(me(!!t,39018),typeof t=="string"){let e=0;const n=m2.exec(t);if(me(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function cs(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="server_timestamp",KI="__type__",QI="__previous_value__",YI="__local_write_time__";function Pg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[KI])==null?void 0:r.stringValue)===GI}function $h(t){const e=t.mapValue.fields[QI];return Pg(e)?$h(e):e}function al(t){const e=ls(t.mapValue.fields[YI].timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r,s,i,o,a,l,u,d,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d,this.apiKey=f}}const Vu="(default)";class ll{constructor(e,n){this.projectId=e,this.database=n||Vu}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database===Vu}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}function _2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="__type__",y2="__max__",Sc={mapValue:{}},JI="__vector__",Fu="value";function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pg(t)?4:w2(t)?9007199254740991:v2(t)?10:11:Q(28295,{value:t})}function Fn(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return al(t).isEqual(al(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ls(s.timestampValue),a=ls(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return cs(s.bytesValue).isEqual(cs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ju(o)===ju(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ao(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(j0(o)!==j0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Fn(o[l],a[l])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function cl(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function lo(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),l=Ve(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return F0(t.timestampValue,e.timestampValue);case 4:return F0(al(t),al(e));case 5:return Vp(t.stringValue,e.stringValue);case 6:return function(i,o){const a=cs(i),l=cs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const d=le(a[u],l[u]);if(d!==0)return d}return le(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=le(Ve(i.latitude),Ve(o.latitude));return a!==0?a:le(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return U0(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,T,b;const a=i.fields||{},l=o.fields||{},u=(m=a[Fu])==null?void 0:m.arrayValue,d=(y=l[Fu])==null?void 0:y.arrayValue,f=le(((T=u==null?void 0:u.values)==null?void 0:T.length)||0,((b=d==null?void 0:d.values)==null?void 0:b.length)||0);return f!==0?f:U0(u,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Sc.mapValue&&o===Sc.mapValue)return 0;if(i===Sc.mapValue)return 1;if(o===Sc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Vp(l[f],d[f]);if(m!==0)return m;const y=lo(a[l[f]],u[d[f]]);if(y!==0)return y}return le(l.length,d.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function F0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=ls(t),r=ls(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function U0(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=lo(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function co(t){return Up(t)}function Up(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ls(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Up(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Up(n.fields[o])}`;return s+"}"}(t.mapValue):Q(61005,{value:t})}function Yc(t){switch(us(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$h(t);return e?16+Yc(e):16;case 5:return 2*t.stringValue.length;case 6:return cs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Yc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ws(r.fields,(i,o)=>{s+=i.length+Yc(o)}),s}(t.mapValue);default:throw Q(13486,{value:t})}}function B0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bp(t){return!!t&&"integerValue"in t}function Dg(t){return!!t&&"arrayValue"in t}function $0(t){return!!t&&"nullValue"in t}function z0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xc(t){return!!t&&"mapValue"in t}function v2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[XI])==null?void 0:r.stringValue)===JI}function Ra(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ra(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ra(t.arrayValue.values[n]);return e}return{...t}}function w2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===y2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ra(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new bt(Ra(this.value))}}function ZI(t){const e=[];return ws(t.fields,(n,r)=>{const s=new ot([n]);if(Xc(r)){const i=ZI(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,J.min(),J.min(),J.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new gt(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new gt(e,2,n,J.min(),J.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,J.min(),J.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uu{constructor(e,n){this.position=e,this.inclusive=n}}function W0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=lo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function q0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bu{constructor(e,n="asc"){this.field=e,this.dir=n}}function E2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class eC{}class ze extends eC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new T2(e,n,r):n==="array-contains"?new S2(e,r):n==="in"?new N2(e,r):n==="not-in"?new k2(e,r):n==="array-contains-any"?new b2(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new I2(e,r):new C2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(lo(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(lo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends eC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new xn(e,n)}matches(e){return tC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function tC(t){return t.op==="and"}function nC(t){return x2(t)&&tC(t)}function x2(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function $p(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+co(t.value);if(nC(t))return t.filters.map(e=>$p(e)).join(",");{const e=t.filters.map(n=>$p(n)).join(",");return`${t.op}(${e})`}}function rC(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Fn(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&rC(o,s.filters[a]),!0):!1}(t,e):void Q(19439)}function sC(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${co(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(sC).join(" ,")+"}"}(t):"Filter"}class T2 extends ze{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class I2 extends ze{constructor(e,n){super(e,"in",n),this.keys=iC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class C2 extends ze{constructor(e,n){super(e,"not-in",n),this.keys=iC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class S2 extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dg(n)&&cl(n.arrayValue,this.value)}}class N2 extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&cl(this.value.arrayValue,n)}}class k2 extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!cl(this.value.arrayValue,n)}}class b2 extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>cl(this.value.arrayValue,r))}}/**
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
 */class R2{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function H0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new R2(t,e,n,r,s,i,o)}function Og(t){const e=Z(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>$p(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>co(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>co(r)).join(",")),e.Te=n}return e.Te}function Lg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!E2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!rC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!q0(t.startAt,e.startAt)&&q0(t.endAt,e.endAt)}function zp(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function A2(t,e,n,r,s,i,o,a){return new Dl(t,e,n,r,s,i,o,a)}function zh(t){return new Dl(t)}function G0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function P2(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function oC(t){return t.collectionGroup!==null}function Aa(t){const e=Z(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Bu(i,r))}),n.has(ot.keyField().canonicalString())||e.Ie.push(new Bu(ot.keyField(),r))}return e.Ie}function Ln(t){const e=Z(t);return e.Ee||(e.Ee=D2(e,Aa(t))),e.Ee}function D2(t,e){if(t.limitType==="F")return H0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bu(s.field,i)});const n=t.endAt?new Uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uu(t.startAt.position,t.startAt.inclusive):null;return H0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wp(t,e){const n=t.filters.concat([e]);return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function qp(t,e,n){return new Dl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wh(t,e){return Lg(Ln(t),Ln(e))&&t.limitType===e.limitType}function aC(t){return`${Og(Ln(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>sC(s)).join(", ")}]`),Bh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>co(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>co(s)).join(",")),`Target(${r})`}(Ln(t))}; limitType=${t.limitType})`}function qh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Aa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=W0(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Aa(r),s)||r.endAt&&!function(o,a,l){const u=W0(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Aa(r),s))}(t,e)}function O2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lC(t){return(e,n)=>{let r=!1;for(const s of Aa(t)){const i=L2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function L2(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?lo(l,u):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2=new qe(G.comparator);function hr(){return M2}const cC=new qe(G.comparator);function ga(...t){let e=cC;for(const n of t)e=e.insert(n.key,n);return e}function uC(t){let e=cC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fs(){return Pa()}function hC(){return Pa()}function Pa(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const j2=new qe(G.comparator),V2=new Ye(G.comparator);function ce(...t){let e=V2;for(const n of t)e=e.add(n);return e}const F2=new Ye(le);function U2(){return F2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(e)?"-0":e}}function dC(t){return{integerValue:""+t}}function B2(t,e){return d2(e)?dC(e):Mg(t,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function $2(t,e,n){return t instanceof ul?function(s,i){const o={fields:{[KI]:{stringValue:GI},[YI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pg(i)&&(i=$h(i)),i&&(o.fields[QI]=i),{mapValue:o}}(n,e):t instanceof hl?pC(t,e):t instanceof dl?mC(t,e):function(s,i){const o=fC(s,i),a=K0(o)+K0(s.Ae);return Bp(o)&&Bp(s.Ae)?dC(a):Mg(s.serializer,a)}(t,e)}function z2(t,e,n){return t instanceof hl?pC(t,e):t instanceof dl?mC(t,e):n}function fC(t,e){return t instanceof $u?function(r){return Bp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ul extends Hh{}class hl extends Hh{constructor(e){super(),this.elements=e}}function pC(t,e){const n=gC(e);for(const r of t.elements)n.some(s=>Fn(s,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends Hh{constructor(e){super(),this.elements=e}}function mC(t,e){let n=gC(e);for(const r of t.elements)n=n.filter(s=>!Fn(s,r));return{arrayValue:{values:n}}}class $u extends Hh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function K0(t){return Ve(t.integerValue||t.doubleValue)}function gC(t){return Dg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n){this.field=e,this.transform=n}}function q2(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof hl&&s instanceof hl||r instanceof dl&&s instanceof dl?ao(r.elements,s.elements,Fn):r instanceof $u&&s instanceof $u?Fn(r.Ae,s.Ae):r instanceof ul&&s instanceof ul}(t.transform,e.transform)}class H2{constructor(e,n){this.version=e,this.transformResults=n}}class Mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gh{}function _C(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vC(t.key,Mn.none()):new Ol(t.key,t.data,Mn.none());{const n=t.data,r=bt.empty();let s=new Ye(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Es(t.key,r,new Bt(s.toArray()),Mn.none())}}function G2(t,e,n){t instanceof Ol?function(s,i,o){const a=s.value.clone(),l=Y0(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Es?function(s,i,o){if(!Jc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Y0(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(yC(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Da(t,e,n,r){return t instanceof Ol?function(i,o,a,l){if(!Jc(i.precondition,o))return a;const u=i.value.clone(),d=X0(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Es?function(i,o,a,l){if(!Jc(i.precondition,o))return a;const u=X0(i.fieldTransforms,l,o),d=o.data;return d.setAll(yC(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Jc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function K2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=fC(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function Q0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ao(r,s,(i,o)=>q2(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ol extends Gh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Es extends Gh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Y0(t,e,n){const r=new Map;me(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,z2(o,a,n[s]))}return r}function X0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$2(i,o,e))}return r}class vC extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q2 extends Gh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&G2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Da(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=_C(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ao(this.mutations,e.mutations,(n,r)=>Q0(n,r))&&ao(this.baseMutations,e.baseMutations,(n,r)=>Q0(n,r))}}class jg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return j2}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new jg(e,n,r,s)}}/**
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
 */class X2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ue;function Z2(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function wC(t){if(t===void 0)return ur("GRPC error has no .code"),V.UNKNOWN;switch(t){case Be.OK:return V.OK;case Be.CANCELLED:return V.CANCELLED;case Be.UNKNOWN:return V.UNKNOWN;case Be.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Be.INTERNAL:return V.INTERNAL;case Be.UNAVAILABLE:return V.UNAVAILABLE;case Be.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Be.NOT_FOUND:return V.NOT_FOUND;case Be.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Be.ABORTED:return V.ABORTED;case Be.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Be.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(ue=Be||(Be={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eO(){return new TextEncoder}/**
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
 */const tO=new Jr([4294967295,4294967295],0);function J0(t){const e=eO().encode(t),n=new OI;return n.update(e),new Uint8Array(n.digest())}function Z0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([s,i],0)]}class Vg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new _a(`Invalid padding: ${n}`);if(r<0)throw new _a(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new _a(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new _a(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Jr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Jr.fromNumber(r)));return s.compare(tO)===1&&(s=new Jr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=J0(e),[r,s]=Z0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=J0(e),[r,s]=Z0(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class _a extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ll.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kh(J.min(),s,new qe(le),hr(),ce())}}class Ll{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ll(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class EC{constructor(e,n){this.targetId=e,this.Ce=n}}class xC{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ew{constructor(){this.ve=0,this.Fe=tw(),this.Me=ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}}),new Ll(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=tw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class nO{constructor(e){this.Ge=e,this.ze=new Map,this.je=hr(),this.He=Nc(),this.Je=Nc(),this.Ze=new qe(le)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(zp(i))if(r===0){const o=new G(i.path);this.et(n,o,gt.newNoDocument(o,J.min()))}else me(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=cs(r).toUint8Array()}catch(l){if(l instanceof HI)return oo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Vg(o,s,i)}catch(l){return oo(l instanceof _a?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&zp(a.target)){const l=new G(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,gt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=ce();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Kh(e,n,this.Ze,this.je,r);return this.je=hr(),this.He=Nc(),this.Je=Nc(),this.Ze=new qe(le),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ew,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Ye(le),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Ye(le),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ew),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Nc(){return new qe(G.comparator)}function tw(){return new qe(G.comparator)}const rO={asc:"ASCENDING",desc:"DESCENDING"},sO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iO={and:"AND",or:"OR"};class oO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hp(t,e){return t.useProto3Json||Bh(e)?e:{value:e}}function zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aO(t,e){return zu(t,e.toTimestamp())}function jn(t){return me(!!t,49232),J.fromTimestamp(function(n){const r=ls(n);return new fe(r.seconds,r.nanos)}(t))}function Fg(t,e){return Gp(t,e).canonicalString()}function Gp(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function IC(t){const e=we.fromString(t);return me(bC(e),10190,{key:e.toString()}),e}function Kp(t,e){return Fg(t.databaseId,e.path)}function wf(t,e){const n=IC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(SC(n))}function CC(t,e){return Fg(t.databaseId,e)}function lO(t){const e=IC(t);return e.length===4?we.emptyPath():SC(e)}function Qp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function SC(t){return me(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function nw(t,e,n){return{name:Kp(t,e),fields:n.value.mapValue.fields}}function cO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(me(d===void 0||typeof d=="string",58123),ct.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ct.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?V.UNKNOWN:wC(u.code);return new W(d,u.message||"")}(o);n=new xC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wf(t,r.document.name),i=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):J.min(),a=new bt({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(s,i,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Zc(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wf(t,r.document),i=r.readTime?jn(r.readTime):J.min(),o=gt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Zc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wf(t,r.document),i=r.removedTargetIds||[];n=new Zc([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new J2(s,i),a=r.targetId;n=new EC(a,o)}}return n}function uO(t,e){let n;if(e instanceof Ol)n={update:nw(t,e.key,e.value)};else if(e instanceof vC)n={delete:Kp(t,e.key)};else if(e instanceof Es)n={update:nw(t,e.key,e.data),updateMask:vO(e.fieldMask)};else{if(!(e instanceof Q2))return Q(16599,{dt:e.type});n={verify:Kp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ul)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof hl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof dl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $u)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:aO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)}(t,e.precondition)),n}function hO(t,e){return t&&t.length>0?(me(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?jn(s.updateTime):jn(i);return o.isEqual(J.min())&&(o=jn(i)),new H2(o,s.transformResults||[])}(n,e))):[]}function dO(t,e){return{documents:[CC(t,e.path)]}}function fO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=CC(t,s);const i=function(u){if(u.length!==0)return kC(xn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:wi(m.field),direction:gO(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Hp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function pO(t){let e=lO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=NC(f);return m instanceof xn&&nC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Bu(Ei(T.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Bh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,y=f.values||[];return new Uu(y,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,y=f.values||[];return new Uu(y,m)}(n.endAt)),A2(e,s,o,i,a,"F",l,u)}function mO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function NC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ei(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ei(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ei(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ei(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Ei(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>NC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function gO(t){return rO[t]}function _O(t){return sO[t]}function yO(t){return iO[t]}function wi(t){return{fieldPath:t.canonicalString()}}function Ei(t){return ot.fromServerFormat(t.fieldPath)}function kC(t){return t instanceof ze?function(n){if(n.op==="=="){if(z0(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NAN"}};if($0(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(z0(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NAN"}};if($0(n.value))return{unaryFilter:{field:wi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wi(n.field),op:_O(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>kC(s));return r.length===1?r[0]:{compositeFilter:{op:yO(n.op),filters:r}}}(t):Q(54877,{filter:t})}function vO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function RC(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,n,r,s,i=J.min(),o=J.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e){this.yt=e}}function EO(t){const e=pO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?qp(e,e.limit,"L"):e}/**
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
 */class xO{constructor(){this.Sn=new TO}addToCollectionParentIndex(e,n){return this.Sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(as.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(as.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class TO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(we.comparator)).toArray()}}/**
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
 */const rw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},AC=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(AC,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new uo(0)}static ar(){return new uo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw="LruGarbageCollector",IO=1048576;function iw([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class CO{constructor(e){this.Pr=e,this.buffer=new Ye(iw),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();iw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class SO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(sw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){No(n)?q(sw,"Ignoring IndexedDB error during garbage collection: ",n):await So(n)}await this.Ar(3e5)})}}class NO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Uh.ce);const r=new CO(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(rw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),yi()<=se.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function kO(t,e){return new NO(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Da(r.mutation,s,Bt.empty(),fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=Fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ga();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=hr();const o=Pa(),a=function(){return Pa()}();return n.forEach((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Es)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Da(d.mutation,u,d.mutation.getFieldMask(),fe.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>a.set(u,new RO(d,o.get(u)??null))),a))}recalculateAndSaveOverlays(e,n){const r=Pa();let s=new qe((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Bt.empty();d=a.applyToLocalView(u,d),r.set(l,d);const f=(s.get(a.batchId)||ce()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,d=l.value,f=hC();d.forEach(m=>{if(!i.has(m)){const y=_C(n.get(m),r.get(m));y!==null&&f.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return P2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):oC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Fs());let a=ol,l=i;return o.next(u=>F.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ce())).next(d=>({batchId:a,changes:uC(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=ga();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ga();return this.indexManager.getCollectionParents(e,i).next(a=>F.forEach(a,l=>{const u=function(f,m){return new Dl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,gt.newInvalidDocument(d)))});let a=ga();return o.forEach((l,u)=>{const d=i.get(l);d!==void 0&&Da(d.mutation,u,Bt.empty(),fe.now()),qh(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return F.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jn(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:EO(s.bundledQuery),readTime:jn(s.readTime)}}(n)),F.resolve()}}/**
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
 */class DO{constructor(){this.overlays=new qe(G.comparator),this.Lr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fs();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Fs(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Fs(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=Fs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=s)););return F.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X2(n,r));let i=this.Lr.get(n);i===void 0&&(i=ce(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class OO{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.kr=new Ye(Ze.Kr),this.qr=new Ye(Ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new we([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new we([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ce();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||le(e.Hr,n.Hr)}static Ur(e,n){return le(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Ye(Ze.Kr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y2(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Ag:this.Yn-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(le);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),F.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new G(i),0);let a=new Ye(le);return this.Jr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)},o),F.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return F.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Jr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.ti=e,this.docs=function(){return new qe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=hr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():gt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=hr();const o=n.path,a=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||l2(a2(d),r)<=0||(s.has(d.key)||qh(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jO(this)}getSize(e){return F.resolve(this.size)}}class jO extends bO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.persistence=e,this.ri=new ai(n=>Og(n),Lg),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Ug,this.targetCount=0,this.oi=uo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),F.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new uo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.lr(n),F.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this._i={},this.overlays={},this.ai=new Uh(0),this.ui=!1,this.ui=!0,this.ci=new OO,this.referenceDelegate=e(this),this.li=new VO(this),this.indexManager=new xO,this.remoteDocumentCache=function(s){return new MO(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new wO(n),this.Pi=new PO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new LO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new FO(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return F.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class FO extends u2{constructor(e){super(),this.currentSequenceNumber=e}}class Bg{constructor(e){this.persistence=e,this.Ri=new Ug,this.Ai=null}static Vi(e){return new Bg(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.di,r=>{const s=G.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Wu{constructor(e,n){this.persistence=e,this.fi=new ai(r=>f2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=kO(this,n)}static Vi(e,n){return new Wu(e,n)}Ti(){}Ii(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return F.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,J.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),F.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yc(e.data.value)),n}wr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $g(e,n.fromCache,r,s)}}/**
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
 */class UO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return hR()?8:h2(wt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new UO;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(yi()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(yi()<=se.DEBUG&&q("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(yi()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(n))):F.resolve())}gs(e,n){if(G0(n))return F.resolve(null);let r=Ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=qp(n,null,"F"),r=Ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(n,a);return this.Ss(n,u,o,l.readTime)?this.gs(e,qp(n,null,"F")):this.Ds(e,u,n,l)}))})))}ps(e,n,r,s){return G0(n)||s.isEqual(J.min())?F.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?F.resolve(null):(yi()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vi(n)),this.Ds(e,o,n,o2(s,ol)).next(a=>a))})}bs(e,n){let r=new Ye(lC(e));return n.forEach((s,i)=>{qh(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return yi()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",vi(n)),this.fs.getDocumentsMatchingQuery(e,n,as.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg="LocalStore",$O=3e8;class zO{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new qe(le),this.Fs=new ai(i=>Og(i),Lg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AO(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function WO(t,e,n,r){return new zO(t,e,n,r)}async function DC(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ce();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function qO(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,d){const f=u.batch,m=f.keys();let y=F.resolve();return m.forEach(T=>{y=y.next(()=>d.getEntry(l,T)).next(b=>{const R=u.docVersions.get(T);me(R!==null,48541),b.version.compareTo(R)<0&&(f.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),d.addEntry(b)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ce();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function OC(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function HO(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,f)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(ct.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(d.resumeToken,r)),s=s.insert(f,y),function(b,R,C){return b.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=$O?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(m,y,d)&&a.push(n.li.updateTargetData(i,y))});let l=hr(),u=ce();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(GO(i,o,e.documentUpdates).next(d=>{l=d.Bs,u=d.Ls})),!r.isEqual(J.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return F.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.vs=s,i))}function GO(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=hr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(zg,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function KO(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Ag),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QO(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new Fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Yp(t,e,n){const r=Z(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!No(o))throw o;q(zg,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function ow(t,e,n){const r=Z(t);let s=J.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=Z(l),m=f.Fs.get(d);return m!==void 0?F.resolve(f.vs.get(m)):f.li.getTargetData(u,d)}(r,o,Ln(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ce())).next(a=>(YO(r,O2(e),a),{documents:a,ks:i})))}function YO(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class aw{constructor(){this.activeTargetIds=U2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XO{constructor(){this.vo=new aw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new aw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class JO{Mo(e){}shutdown(){}}/**
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
 */const lw="ConnectivityMonitor";class cw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(lw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(lw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kc=null;function Xp(){return kc===null?kc=function(){return 268435456+Math.round(2147483648*Math.random())}():kc++,"0x"+kc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef="RestConnection",ZO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eL{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Vu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Xp(),a=this.Qo(e,n.toUriEncodedString());q(Ef,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(a),d=mr(u);return this.zo(e,a,l,r,d).then(f=>(q(Ef,`Received RPC '${e}' ${o}: `,f),f),f=>{throw oo(Ef,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=ZO[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection",sa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Hi extends eL{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Hi.c_){const e=VI();sa(e,jI.STAT_EVENT,n=>{n.stat===jp.PROXY?q(ft,"STAT_EVENT: detected buffering proxy"):n.stat===jp.NOPROXY&&q(ft,"STAT_EVENT: detected no buffering proxy")}),Hi.c_=!0}}zo(e,n,r,s,i){const o=Xp();return new Promise((a,l)=>{const u=new LI;u.setWithCredentials(!0),u.listenOnce(MI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Qc.NO_ERROR:const f=u.getResponseJson();q(ft,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Qc.TIMEOUT:q(ft,`RPC '${e}' ${o} timed out`),l(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Qc.HTTP_ERROR:const m=u.getStatus();if(q(ft,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const T=y==null?void 0:y.error;if(T&&T.status&&T.message){const b=function(C){const E=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(T.status);l(new W(b,T.message))}else l(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{q(ft,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);q(ft,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Xp(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const u=i.join("");q(ft,`Creating RPC '${e}' stream ${s}: ${u}`,a);const d=o.createWebChannel(u,a);this.I_(d);let f=!1,m=!1;const y=new tL({Ho:T=>{m?q(ft,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(q(ft,`Opening RPC '${e}' stream ${s} transport.`),d.open(),f=!0),q(ft,`RPC '${e}' stream ${s} sending:`,T),d.send(T))},Jo:()=>d.close()});return sa(d,ma.EventType.OPEN,()=>{m||(q(ft,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),sa(d,ma.EventType.CLOSE,()=>{m||(m=!0,q(ft,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(d))}),sa(d,ma.EventType.ERROR,T=>{m||(m=!0,oo(ft,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),y.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),sa(d,ma.EventType.MESSAGE,T=>{var b;if(!m){const R=T.data[0];me(!!R,16349);const C=R,E=(C==null?void 0:C.error)||((b=C[0])==null?void 0:b.error);if(E){q(ft,`RPC '${e}' stream ${s} received error:`,E);const S=E.status;let O=function(w){const _=Be[w];if(_!==void 0)return wC(_)}(S),j=E.message;O===void 0&&(O=V.INTERNAL,j="Unknown error status: "+S+" with message "+E.message),m=!0,y.o_(new W(O,j)),d.close()}else q(ft,`RPC '${e}' stream ${s} received:`,R),y.__(R)}}),Hi.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return FI()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){return new Hi(t)}function xf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t){return new oO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Hi.c_=!1;class LC{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw="PersistentStream";class MC{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new LC(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(uw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(uw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rL extends MC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cO(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?jn(o.readTime):J.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Qp(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=zp(l)?{documents:dO(i,l)}:{query:fO(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=TC(i,o.resumeToken);const u=Hp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=zu(i,o.snapshotVersion.toTimestamp());const u=Hp(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=mO(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Qp(this.serializer),n.removeTarget=e,this.K_(n)}}class sL extends MC{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=hO(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Qp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uO(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{}class oL extends iL{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Gp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,Gp(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function aL(t,e,n,r){return new oL(t,e,n,r)}class lL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="RemoteStore";class cL{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{li(this)&&(q(Js,"Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.Ea.add(4),await Ml(u),u.Va.set("Unknown"),u.Ea.delete(4),await Yh(u)}(this))})}),this.Va=new lL(r,s)}}async function Yh(t){if(li(t))for(const e of t.Ra)await e(!0)}async function Ml(t){for(const e of t.Ra)await e(!1)}function jC(t,e){const n=Z(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Gg(n)?Hg(n):ko(n).O_()&&qg(n,e))}function Wg(t,e){const n=Z(t),r=ko(n);n.Ia.delete(e),r.O_()&&VC(n,e),n.Ia.size===0&&(r.O_()?r.L_():li(n)&&n.Va.set("Unknown"))}function qg(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(t).Z_(e)}function VC(t,e){t.da.$e(e),ko(t).X_(e)}function Hg(t){t.da=new nO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ko(t).start(),t.Va.ua()}function Gg(t){return li(t)&&!ko(t).x_()&&t.Ia.size>0}function li(t){return Z(t).Ea.size===0}function FC(t){t.da=void 0}async function uL(t){t.Va.set("Online")}async function hL(t){t.Ia.forEach((e,n)=>{qg(t,e)})}async function dL(t,e){FC(t),Gg(t)?(t.Va.ha(e),Hg(t)):t.Va.set("Unknown")}async function fL(t,e,n){if(t.Va.set("Online"),e instanceof xC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){q(Js,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qu(t,r)}else if(e instanceof Zc?t.da.Xe(e):e instanceof EC?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const r=await OC(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(u);d&&i.Ia.set(u,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(ct.EMPTY_BYTE_STRING,d.snapshotVersion)),VC(i,l);const f=new Fr(d.target,l,u,d.sequenceNumber);qg(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q(Js,"Failed to raise snapshot:",r),await qu(t,r)}}async function qu(t,e,n){if(!No(e))throw e;t.Ea.add(1),await Ml(t),t.Va.set("Offline"),n||(n=()=>OC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(Js,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Yh(t)})}function UC(t,e){return e().catch(n=>qu(t,n,e))}async function Xh(t){const e=Z(t),n=hs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Ag;for(;pL(e);)try{const s=await KO(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,mL(e,s)}catch(s){await qu(e,s)}BC(e)&&$C(e)}function pL(t){return li(t)&&t.Ta.length<10}function mL(t,e){t.Ta.push(e);const n=hs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function BC(t){return li(t)&&!hs(t).x_()&&t.Ta.length>0}function $C(t){hs(t).start()}async function gL(t){hs(t).ra()}async function _L(t){const e=hs(t);for(const n of t.Ta)e.ea(n.mutations)}async function yL(t,e,n){const r=t.Ta.shift(),s=jg.from(r,e,n);await UC(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xh(t)}async function vL(t,e){e&&hs(t).Y_&&await async function(r,s){if(function(o){return Z2(o)&&o!==V.ABORTED}(s.code)){const i=r.Ta.shift();hs(r).B_(),await UC(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xh(r)}}(t,e),BC(t)&&$C(t)}async function hw(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),q(Js,"RemoteStore received new credentials");const r=li(n);n.Ea.add(3),await Ml(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Yh(n)}async function wL(t,e){const n=Z(t);e?(n.Ea.delete(2),await Yh(n)):e||(n.Ea.add(2),await Ml(n),n.Va.set("Unknown"))}function ko(t){return t.ma||(t.ma=function(n,r,s){const i=Z(n);return i.sa(),new rL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:uL.bind(null,t),Yo:hL.bind(null,t),t_:dL.bind(null,t),J_:fL.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Gg(t)?Hg(t):t.Va.set("Unknown")):(await t.ma.stop(),FC(t))})),t.ma}function hs(t){return t.fa||(t.fa=function(n,r,s){const i=Z(n);return i.sa(),new sL(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gL.bind(null,t),t_:vL.bind(null,t),ta:_L.bind(null,t),na:yL.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Xh(t)):(await t.fa.stop(),t.Ta.length>0&&(q(Js,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Kg(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qg(t,e){if(ur("AsyncQueue",`${e}: ${t}`),No(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static emptySet(e){return new Gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ga(),this.sortedSet=new qe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.ga=new qe(G.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ho{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ho(e,n,Gi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class xL{constructor(){this.queries=fw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=fw(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function fw(){return new ai(t=>aC(t),Wh)}async function Yg(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new EL,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Qg(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Jg(n)}async function Xg(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function TL(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&Jg(n)}function IL(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Jg(t){t.Ca.forEach(e=>{e.next()})}var Jp,pw;(pw=Jp||(Jp={})).Ma="default",pw.Cache="cache";class Zg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ho(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ho.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Jp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.key=e}}class WC{constructor(e){this.key=e}}class CL{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ce(),this.mutatedKeys=ce(),this.eu=lC(e),this.tu=new Gi(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new dw,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),y=qh(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),b=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let R=!1;m&&y?m.data.isEqual(y.data)?T!==b&&(r.track({type:3,doc:y}),R=!0):this.su(m,y)||(r.track({type:2,doc:y}),R=!0,(l&&this.eu(y,l)>0||u&&this.eu(y,u)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),R=!0):m&&!y&&(r.track({type:1,doc:m}),R=!0,(l||u)&&(a=!0)),R&&(y?(o=o.add(y),i=b?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,f)=>function(y,T){const b=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:R})}};return b(y)-b(T)}(d.type,f.type)||this.eu(d.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new ho(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new dw,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ce(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new WC(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new zC(r))}),n}cu(e){this.Za=e.ks,this.Ya=ce();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ho.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const e_="SyncEngine";class SL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NL{constructor(e){this.key=e,this.hu=!1}}class kL{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ai(a=>aC(a),Wh),this.Iu=new Map,this.Eu=new Set,this.Ru=new qe(G.comparator),this.Au=new Map,this.Vu=new Ug,this.du={},this.mu=new Map,this.fu=uo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bL(t,e,n=!0){const r=YC(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await qC(r,e,n,!0),s}async function RL(t,e){const n=YC(t);await qC(n,e,!0,!1)}async function qC(t,e,n,r){const s=await QO(t.localStore,Ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await AL(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&jC(t.remoteStore,s),a}async function AL(t,e,n,r,s){t.pu=(f,m,y)=>async function(b,R,C,E){let S=R.view.ru(C);S.Ss&&(S=await ow(b.localStore,R.query,!1).then(({documents:w})=>R.view.ru(w,S)));const O=E&&E.targetChanges.get(R.targetId),j=E&&E.targetMismatches.get(R.targetId)!=null,M=R.view.applyChanges(S,b.isPrimaryClient,O,j);return gw(b,R.targetId,M.au),M.snapshot}(t,f,m,y);const i=await ow(t.localStore,e,!0),o=new CL(e,i.ks),a=o.ru(i.documents),l=Ll.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);gw(t,n,u.au);const d=new SL(e,n,o);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function PL(t,e,n){const r=Z(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Wh(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Wg(r.remoteStore,s.targetId),Zp(r,s.targetId)}).catch(So)):(Zp(r,s.targetId),await Yp(r.localStore,s.targetId,!0))}async function DL(t,e){const n=Z(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wg(n.remoteStore,r.targetId))}async function OL(t,e,n){const r=BL(t);try{const s=await function(o,a){const l=Z(o),u=fe.now(),d=a.reduce((y,T)=>y.add(T.key),ce());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let T=hr(),b=ce();return l.xs.getEntries(y,d).next(R=>{T=R,T.forEach((C,E)=>{E.isValidDocument()||(b=b.add(C))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,T)).next(R=>{f=R;const C=[];for(const E of a){const S=K2(E,f.get(E.key).overlayedDocument);S!=null&&C.push(new Es(E.key,S,ZI(S.value.mapValue),Mn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,u,C,a)}).next(R=>{m=R;const C=R.applyToLocalDocumentSet(f,b);return l.documentOverlayCache.saveOverlays(y,R.batchId,C)})}).then(()=>({batchId:m.batchId,changes:uC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.du[o.currentUser.toKey()];u||(u=new qe(le)),u=u.insert(a,l),o.du[o.currentUser.toKey()]=u}(r,s.batchId,n),await jl(r,s.changes),await Xh(r.remoteStore)}catch(s){const i=Qg(s,"Failed to persist write");n.reject(i)}}async function HC(t,e){const n=Z(t);try{const r=await HO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?me(o.hu,14607):s.removedDocuments.size>0&&(me(o.hu,42227),o.hu=!1))}),await jl(n,r,e)}catch(r){await So(r)}}function mw(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.ba)m.va(a)&&(u=!0)}),u&&Jg(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function LL(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new qe(G.comparator);o=o.insert(i,gt.newNoDocument(i,J.min()));const a=ce().add(i),l=new Kh(J.min(),new Map,new qe(le),o,a);await HC(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),t_(r)}else await Yp(r.localStore,e,!1).then(()=>Zp(r,e,n)).catch(So)}async function ML(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await qO(n.localStore,e);KC(n,r,null),GC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jl(n,s)}catch(s){await So(s)}}async function jL(t,e,n){const r=Z(t);try{const s=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(me(f!==null,37113),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);KC(r,e,n),GC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jl(r,s)}catch(s){await So(s)}}function GC(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function KC(t,e,n){const r=Z(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Zp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||QC(t,r)})}function QC(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Wg(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),t_(t))}function gw(t,e,n){for(const r of n)r instanceof zC?(t.Vu.addReference(r.key,e),VL(t,r)):r instanceof WC?(q(e_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||QC(t,r.key)):Q(19791,{wu:r})}function VL(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(e_,"New document in limbo: "+n),t.Eu.add(r),t_(t))}function t_(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(we.fromString(e)),r=t.fu.next();t.Au.set(r,new NL(n)),t.Ru=t.Ru.insert(n,r),jC(t.remoteStore,new Fr(Ln(zh(n.path)),r,"TargetPurposeLimboResolution",Uh.ce))}}async function jl(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=$g.Es(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,u){const d=Z(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>F.forEach(u,m=>F.forEach(m.Ts,y=>d.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>F.forEach(m.Is,y=>d.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!No(f))throw f;q(zg,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const y=d.vs.get(m),T=y.snapshotVersion,b=y.withLastLimboFreeSnapshotVersion(T);d.vs=d.vs.insert(m,b)}}}(r.localStore,i))}async function FL(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){q(e_,"User change. New user:",e.toKey());const r=await DC(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(V.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(n,r.Ns)}}function UL(t,e){const n=Z(t),r=n.Au.get(e);if(r&&r.hu)return ce().add(r.key);{let s=ce();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function YC(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=LL.bind(null,e),e.Pu.J_=TL.bind(null,e.eventManager),e.Pu.yu=IL.bind(null,e.eventManager),e}function BL(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ML.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jL.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return WO(this.persistence,new BO,e.initialUser,this.serializer)}Cu(e){return new PC(Bg.Vi,this.serializer)}Du(e){return new XO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class $L extends Hu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){me(this.persistence.referenceDelegate instanceof Wu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new SO(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new PC(r=>Wu.Vi(r,n),this.serializer)}}class em{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FL.bind(null,this.syncEngine),await wL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xL}()}createDatastore(e){const n=Qh(e.databaseInfo.databaseId),r=nL(e.databaseInfo);return aL(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new cL(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>mw(this.syncEngine,n,0),function(){return cw.v()?new cw:new JO}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,d){const f=new kL(s,i,o,a,l,u);return d&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);q(Js,"RemoteStore shutting down."),i.Ea.add(5),await Ml(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}em.provider={build:()=>new em};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="FirestoreClient";class zL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Rg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(ds,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ds,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Tf(t,e){t.asyncQueue.verifyOperationInProgress(),q(ds,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await DC(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function _w(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WL(t);q(ds,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>hw(e.remoteStore,s)),t._onlineComponents=e}async function WL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(ds,"Using user provided OfflineComponentProvider");try{await Tf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;oo("Error using user provided cache. Falling back to memory cache: "+n),await Tf(t,new Hu)}}else q(ds,"Using default OfflineComponentProvider"),await Tf(t,new $L(void 0));return t._offlineComponents}async function XC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(ds,"Using user provided OnlineComponentProvider"),await _w(t,t._uninitializedComponentsProvider._online)):(q(ds,"Using default OnlineComponentProvider"),await _w(t,new em))),t._onlineComponents}function qL(t){return XC(t).then(e=>e.syncEngine)}async function Gu(t){const e=await XC(t),n=e.eventManager;return n.onListen=bL.bind(null,e.syncEngine),n.onUnlisten=PL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DL.bind(null,e.syncEngine),n}function HL(t,e,n,r){const s=new n_(r),i=new Zg(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Yg(await Gu(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Xg(await Gu(t),i))}}function GL(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new n_({next:m=>{d.Nu(),o.enqueueAndForget(()=>Xg(i,f));const y=m.docs.has(a);!y&&m.fromCache?u.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Zg(zh(a.path),d,{includeMetadataChanges:!0,Ka:!0});return Yg(i,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function KL(t,e,n={}){const r=new Zn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const d=new n_({next:m=>{d.Nu(),o.enqueueAndForget(()=>Xg(i,f)),m.fromCache&&l.source==="server"?u.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new Zg(a,d,{includeMetadataChanges:!0,Ka:!0});return Yg(i,f)}(await Gu(t),t.asyncQueue,e,n,r)),r.promise}function QL(t,e){const n=new Zn;return t.asyncQueue.enqueueAndForget(async()=>OL(await qL(t),e,n)),n.promise}/**
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
 */function JC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL="ComponentProvider",yw=new Map;function XL(t,e,n,r,s){return new g2(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,JC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC="firestore.googleapis.com",vw=!0;class ww{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ZC,this.ssl=vw}else this.host=e.host,this.ssl=e.ssl??vw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=AC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<IO)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}i2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=JC(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ww({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ww(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QD;switch(r.type){case"firstParty":return new ZD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yw.get(n);r&&(q(YL,"Removing Datastore"),yw.delete(n),r.terminate())}(this),Promise.resolve()}}function JL(t,e,n,r={}){var u;t=_n(t,Jh);const s=mr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(Rh(`https://${a}`),Ah("Firestore",!0)),i.host!==ZC&&i.host!==a&&oo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!is(l,o)&&(t._setSettings(l),r.mockUserToken)){let d,f;if(typeof r.mockUserToken=="string")d=r.mockUserToken,f=pt.MOCK_USER;else{d=yg(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new pt(m)}t._authCredentials=new YD(new BI(d,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ci(this.firestore,e,this._query)}}class Ue{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new es(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}toJSON(){return{type:Ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Pl(n,Ue._jsonSchema))return new Ue(e,r||null,new G(we.fromString(n.referencePath)))}}Ue._jsonSchemaVersion="firestore/documentReference/1.0",Ue._jsonSchema={type:We("string",Ue._jsonSchemaVersion),referencePath:We("string")};class es extends ci{constructor(e,n,r){super(e,n,zh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new G(e))}withConverter(e){return new es(this.firestore,e,this._path)}}function Vl(t,e,...n){if(t=Ne(t),$I("collection","path",e),t instanceof Jh){const r=we.fromString(e,...n);return D0(r),new es(t,null,r)}{if(!(t instanceof Ue||t instanceof es))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return D0(r),new es(t.firestore,null,r)}}function er(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Rg.newId()),$I("doc","path",e),t instanceof Jh){const r=we.fromString(e,...n);return P0(r),new Ue(t,null,new G(r))}{if(!(t instanceof Ue||t instanceof es))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return P0(r),new Ue(t.firestore,t instanceof es?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="AsyncQueue";class xw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new LC(this,"async_queue_retry"),this._c=()=>{const r=xf();r&&q(Ew,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=xf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=xf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Zn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!No(e))throw e;q(Ew,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ur("INTERNAL UNHANDLED ERROR: ",Tw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Kg.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Tw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Zs extends Jh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new xw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xw(e),this._firestoreClient=void 0,await e}}}function ZL(t,e){const n=typeof t=="object"?t:Oh(),r=typeof t=="string"?t:Vu,s=kl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=gg("firestore");i&&JL(s,...i)}return s}function Zh(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||eM(t),t._firestoreClient}function eM(t){var r,s,i,o;const e=t._freezeSettings(),n=XL(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new zL(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(ct.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Pl(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:We("string",Xt._jsonSchemaVersion),bytes:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vn._jsonSchemaVersion}}static fromJSON(e){if(Pl(e,Vn._jsonSchema))return new Vn(e.latitude,e.longitude)}}Vn._jsonSchemaVersion="firestore/geoPoint/1.0",Vn._jsonSchema={type:We("string",Vn._jsonSchemaVersion),latitude:We("number"),longitude:We("number")};/**
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
 */class yn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:yn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Pl(e,yn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new yn(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}yn._jsonSchemaVersion="firestore/vectorValue/1.0",yn._jsonSchema={type:We("string",yn._jsonSchemaVersion),vectorValues:We("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tM=/^__.*__$/;class nM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ol(e,this.data,n,this.fieldTransforms)}}class eS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class s_{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new s_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ku(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(tS(this.dataSource)&&tM.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class rM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Qh(e)}createContext(e,n,r,s=!1){return new s_({dataSource:e,methodName:n,targetDoc:r,path:ot.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function i_(t){const e=t._freezeSettings(),n=Qh(t._databaseId);return new rM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sM(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);a_("Data must be an object, but it was:",o,r);const a=nS(r,o);let l,u;if(i.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=fo(e,f,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);iS(d,m)||d.push(m)}l=new Bt(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new nM(new bt(a),l,u)}class td extends ed{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof td}}class o_ extends ed{_toFieldTransform(e){return new W2(e.path,new ul)}isEqual(e){return e instanceof o_}}function iM(t,e,n,r){const s=t.createContext(1,e,n);a_("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();ws(r,(l,u)=>{const d=sS(e,l,n);u=Ne(u);const f=s.childContextForFieldPath(d);if(u instanceof td)i.push(d);else{const m=Fl(u,f);m!=null&&(i.push(d),o.set(d,m))}});const a=new Bt(i);return new eS(o,a,s.fieldTransforms)}function oM(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[fo(e,r,n)],l=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(fo(e,i[m])),l.push(i[m+1]);const u=[],d=bt.empty();for(let m=a.length-1;m>=0;--m)if(!iS(u,a[m])){const y=a[m];let T=l[m];T=Ne(T);const b=o.childContextForFieldPath(y);if(T instanceof td)u.push(y);else{const R=Fl(T,b);R!=null&&(u.push(y),d.set(y,R))}}const f=new Bt(u);return new eS(d,f,o.fieldTransforms)}function aM(t,e,n,r=!1){return Fl(n,t.createContext(r?4:3,e))}function Fl(t,e){if(rS(t=Ne(t)))return a_("Unsupported field value:",e,t),nS(t,e);if(t instanceof ed)return function(r,s){if(!tS(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Fl(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return B2(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=fe.fromDate(r);return{timestampValue:zu(s.serializer,i)}}if(r instanceof fe){const i=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zu(s.serializer,i)}}if(r instanceof Vn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:TC(s.serializer,r._byteString)};if(r instanceof Ue){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof yn)return function(o,a){const l=o instanceof yn?o.toArray():o;return{mapValue:{fields:{[XI]:{stringValue:JI},[Fu]:{arrayValue:{values:l.map(d=>{if(typeof d!="number")throw a.createError("VectorValues must only contain numeric values.");return Mg(a.serializer,d)})}}}}}}(r,s);if(RC(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Fh(r)}`)}(t,e)}function nS(t,e){const n={};return qI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,s)=>{const i=Fl(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Vn||t instanceof Xt||t instanceof Ue||t instanceof ed||t instanceof yn||RC(t))}function a_(t,e,n){if(!rS(n)||!zI(n)){const r=Fh(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function fo(t,e,n){if((e=Ne(e))instanceof r_)return e._internalPath;if(typeof e=="string")return sS(t,e);throw Ku("Field path arguments must be of type string or ",t,!1,void 0,n)}const lM=new RegExp("[~\\*/\\[\\]]");function sS(t,e,n){if(e.search(lM)>=0)throw Ku(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new r_(...e.split("."))._internalPath}catch{throw Ku(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ku(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(V.INVALID_ARGUMENT,a+t+l)}function iS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ws(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Fu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ve(o.doubleValue));return new yn(n)}convertGeoPoint(e){return new Vn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$h(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const n=ls(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);me(bC(r),9688,{name:e});const s=new ll(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||ur(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class l_ extends cM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,n)}}function If(){return new o_("serverTimestamp")}const Iw="@firebase/firestore",Cw="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class uM extends oS{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class c_{}class hM extends c_{}function nd(t,e,...n){let r=[];e instanceof c_&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof u_).length,a=i.filter(l=>l instanceof rd).length;if(o>1||o>0&&a>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class rd extends hM{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rd(e,n,r)}_apply(e){const n=this._parse(e);return lS(e._query,n),new ci(e.firestore,e.converter,Wp(e._query,n))}_parse(e){const n=i_(e.firestore);return function(i,o,a,l,u,d,f){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){kw(f,d);const T=[];for(const b of f)T.push(Nw(l,i,b));m={arrayValue:{values:T}}}else m=Nw(l,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||kw(f,d),m=aM(a,o,f,d==="in"||d==="not-in");return ze.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function fl(t,e,n){const r=e,s=fo("where",t);return rd._create(s,r,n)}class u_ extends c_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new u_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)lS(o,l),o=Wp(o,l)}(e._query,n),new ci(e.firestore,e.converter,Wp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Nw(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oC(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!G.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return B0(t,new G(r))}if(n instanceof Ue)return B0(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fh(n)}.`)}function kw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lS(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function dM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ya{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zs extends oS{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=zs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}zs._jsonSchemaVersion="firestore/documentSnapshot/1.0",zs._jsonSchema={type:We("string",zs._jsonSchemaVersion),bundleSource:We("string","DocumentSnapshot"),bundleName:We("string"),bundle:We("string")};class eu extends zs{data(e={}){return super.data(e)}}class Ws{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ya(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new eu(this._firestore,this._userDataWriter,r.key,r,new ya(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new eu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ya(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new eu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ya(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:fM(a.type),doc:l,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ws._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Rg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Ws._jsonSchemaVersion="firestore/querySnapshot/1.0",Ws._jsonSchema={type:We("string",Ws._jsonSchemaVersion),bundleSource:We("string","QuerySnapshot"),bundleName:We("string"),bundle:We("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t){t=_n(t,Ue);const e=_n(t.firestore,Zs),n=Zh(e);return GL(n,t._key).then(r=>uS(e,t,r))}function h_(t){t=_n(t,ci);const e=_n(t.firestore,Zs),n=Zh(e),r=new l_(e);return aS(t._query),KL(n,t._query).then(s=>new Ws(e,r,t,s))}function tm(t,e,n,...r){t=_n(t,Ue);const s=_n(t.firestore,Zs),i=i_(s);let o;return o=typeof(e=Ne(e))=="string"||e instanceof r_?oM(i,"updateDoc",t._key,e,n,r):iM(i,"updateDoc",t._key,e),cS(s,[o.toMutation(t._key,Mn.exists(!0))])}function pM(t,e){const n=_n(t.firestore,Zs),r=er(t),s=dM(t.converter,e),i=i_(t.firestore);return cS(n,[sM(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mn.exists(!1))]).then(()=>r)}function mM(t,...e){var u,d,f;t=Ne(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Sw(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Sw(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof Ue)o=_n(t.firestore,Zs),a=zh(t._key.path),i={next:m=>{e[r]&&e[r](uS(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=_n(t,ci);o=_n(m.firestore,Zs),a=m._query;const y=new l_(o);i={next:T=>{e[r]&&e[r](new Ws(o,y,m,T))},error:e[r+1],complete:e[r+2]},aS(t._query)}const l=Zh(o);return HL(l,a,s,i)}function cS(t,e){const n=Zh(t);return QL(n,e)}function uS(t,e,n){const r=n.docs.get(e._key),s=new l_(t);return new zs(t,s,e._key,r,new ya(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){KD(ys),os(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Zs(new XD(r.getProvider("auth-internal")),new e2(o,r.getProvider("app-check-internal")),_2(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),en(Iw,Cw,e),en(Iw,Cw,"esm2020")})();var bw={};const Rw="@firebase/database",Aw="1.1.0";/**
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
 */let hS="";function gM(t){hS=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),nt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:nl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return gr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _M(e)}}catch{}return new yM},Us=dS("localStorage"),vM=dS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Dh("@firebase/database"),wM=function(){let t=1;return function(){return t++}}(),fS=function(t){const e=TR(t),n=new vR;n.update(e);const r=n.digest();return mg.encodeByteArray(r)},Bl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Bl.apply(null,r):typeof r=="object"?e+=nt(r):e+=r,e+=" "}return e};let Oa=null,Pw=!0;const EM=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ki.logLevel=se.VERBOSE,Oa=Ki.log.bind(Ki)},_t=function(...t){if(Pw===!0&&(Pw=!1,Oa===null&&vM.get("logging_enabled")===!0&&EM()),Oa){const e=Bl.apply(null,t);Oa(e)}},$l=function(t){return function(...e){_t(t,...e)}},nm=function(...t){const e="FIREBASE INTERNAL ERROR: "+Bl(...t);Ki.error(e)},dr=function(...t){const e=`FIREBASE FATAL ERROR: ${Bl(...t)}`;throw Ki.error(e),new Error(e)},zt=function(...t){const e="FIREBASE WARNING: "+Bl(...t);Ki.warn(e)},xM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&zt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pS=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},po="[MIN_NAME]",ei="[MAX_NAME]",bo=function(t,e){if(t===e)return 0;if(t===po||e===ei)return-1;if(e===po||t===ei)return 1;{const n=Dw(t),r=Dw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IM=function(t,e){return t===e?0:t<e?-1:1},ia=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+nt(e))},d_=function(t){if(typeof t!="object"||t===null)return nt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=nt(e[r]),n+=":",n+=d_(t[e[r]]);return n+="}",n},mS=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Mt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gS=function(t){B(!pS(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const d=u.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(d.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},CM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NM(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const kM=new RegExp("^-?(0*)\\d{1,10}$"),bM=-2147483648,RM=2147483647,Dw=function(t){if(kM.test(t)){const e=Number(t);if(e>=bM&&e<=RM)return e}return null},zl=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw zt("Exception was thrown by user callback.",n),e},Math.floor(0))}},AM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},La=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PM{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ft(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){zt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zt(e)}}class tu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="5",_S="v",yS="s",vS="r",wS="f",ES=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xS="ls",TS="p",rm="ac",IS="websocket",CS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Us.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Us.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OM(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function NS(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===IS)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===CS)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OM(t)&&(n.ns=t.namespace);const s=[];return Mt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(){this.counters_={}}incrementCounter(e,n=1){gr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Jb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={},Sf={};function p_(t){const e=t.toString();return Cf[e]||(Cf[e]=new LM),Cf[e]}function MM(t,e){const n=t.toString();return Sf[n]||(Sf[n]=e()),Sf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&zl(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="start",VM="close",FM="pLPCommand",UM="pRTLPCB",kS="id",bS="pw",RS="ser",BM="cb",$M="seg",zM="ts",WM="d",qM="dframe",AS=1870,PS=30,HM=AS-PS,GM=25e3,KM=3e4;class Li{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$l(e),this.stats_=p_(n),this.urlFn=l=>(this.appCheckToken&&(l[rm]=this.appCheckToken),NS(n,CS,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(KM)),TM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new m_((...i)=>{const[o,a,l,u,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ow)this.id=a,this.password=l;else if(o===VM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Ow]="t",r[RS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[BM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_S]=f_,this.transportSessionId&&(r[yS]=this.transportSessionId),this.lastSessionId&&(r[xS]=this.lastSessionId),this.applicationId&&(r[TS]=this.applicationId),this.appCheckToken&&(r[rm]=this.appCheckToken),typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(r[vS]=wS);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Li.forceAllow_=!0}static forceDisallow(){Li.forceDisallow_=!0}static isAvailable(){return Li.forceAllow_?!0:!Li.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CM()&&!SM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=BT(n),s=mS(r,HM);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qM]="t",r[kS]=e,r[bS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=nt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class m_{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wM(),window[FM+this.uniqueCallbackIdentifier]=e,window[UM+this.uniqueCallbackIdentifier]=n,this.myIFrame=m_.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[kS]=this.myID,e[bS]=this.myPW,e[RS]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+PS+r.length<=AS;){const o=this.pendingSegs.shift();r=r+"&"+$M+s+"="+o.seg+"&"+zM+s+"="+o.ts+"&"+WM+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(GM)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=16384,YM=45e3;let Qu=null;typeof MozWebSocket<"u"?Qu=MozWebSocket:typeof WebSocket<"u"&&(Qu=WebSocket);class un{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$l(this.connId),this.stats_=p_(n),this.connURL=un.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[_S]=f_,typeof location<"u"&&location.hostname&&ES.test(location.hostname)&&(o[vS]=wS),n&&(o[yS]=n),r&&(o[xS]=r),s&&(o[rm]=s),i&&(o[TS]=i),NS(e,IS,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Us.set("previous_websocket_failure",!0);try{let r;uR(),this.mySock=new Qu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qu!==null&&!un.forceDisallow_}static previouslyFailed(){return Us.isInMemoryStorage||Us.get("previous_websocket_failure")===!0}markConnectionHealthy(){Us.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=nl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=nt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mS(n,QM);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}un.responsesRequiredToBeHealthy=2;un.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{static get ALL_TRANSPORTS(){return[Li,un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=un&&un.isAvailable();let r=n&&!un.previouslyFailed();if(e.webSocketOnly&&(n||zt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[un];else{const s=this.transports_=[];for(const i of pl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);pl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=6e4,JM=5e3,ZM=10*1024,ej=100*1024,Nf="t",Lw="d",tj="s",Mw="r",nj="e",jw="o",Vw="a",Fw="n",Uw="p",rj="h";class sj{constructor(e,n,r,s,i,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$l("c:"+this.id+":"),this.transportManager_=new pl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=La(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ej?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Nf in e){const n=e[Nf];n===Vw?this.upgradeIfSecondaryHealthy_():n===Mw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===jw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ia("t",e),r=ia("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ia("t",e),r=ia("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ia(Nf,e);if(Lw in e){const r=e[Lw];if(n===rj){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Fw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tj?this.onConnectionShutdown_(r):n===Mw?this.onReset_(r):n===nj?nm("Server Error: "+r):n===jw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):nm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),f_!==r&&zt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),La(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):La(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Uw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Us.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends OS{static getInstance(){return new Yu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw=32,$w=768;class ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ye("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ye(t.pieces_,e)}function LS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ij(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function MS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ye(e,0)}function Ke(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ye(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function At(t,e){const n=ie(t),r=ie(e);if(n===null)return e;if(n===r)return At(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function g_(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class oj{constructor(e,n){this.errorPrefix_=n,this.parts_=MS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ph(this.parts_[r]);VS(this)}}function aj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ph(e),VS(t)}function lj(t){const e=t.parts_.pop();t.byteLength_-=Ph(e),t.parts_.length>0&&(t.byteLength_-=1)}function VS(t){if(t.byteLength_>$w)throw new Error(t.errorPrefix_+"has a key path longer than "+$w+" bytes ("+t.byteLength_+").");if(t.parts_.length>Bw)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Bw+") or object contains a cycle "+Ls(t))}function Ls(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends OS{static getInstance(){return new __}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=1e3,cj=60*5*1e3,zw=30*1e3,uj=1.3,hj=3e4,dj="server_kill",Ww=3;class tr extends DS{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=tr.nextPersistentConnectionId_++,this.log_=$l("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oa,this.maxReconnectDelay_=cj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");__.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(nt(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new _g,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;tr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&gr(e,"w")){const r=so(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();zt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=_R(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+nt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):nm("Unrecognized action received from server: "+nt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hj&&(this.reconnectDelay_=oa),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+tr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new sj(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{zt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(dj)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&zt(f),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kp(this.interruptReasons_)&&(this.reconnectDelay_=oa,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>d_(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ye(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ww&&(this.reconnectDelay_=zw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ww&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hS.replace(/\./g,"-")]=1,vg()?e["framework.cordova"]=1:HT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yu.getInstance().currentlyOnline();return kp(this.interruptReasons_)&&e}}tr.nextPersistentConnectionId_=0;tr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(po,e),s=new ne(po,n);return this.compare(r,s)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bc;class FS extends sd{static get __EMPTY_NODE(){return bc}static set __EMPTY_NODE(e){bc=e}compare(e,n){return bo(e.name,n.name)}isDefinedOn(e){throw Eo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(ei,bc)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,bc)}toString(){return".key"}}const Qi=new FS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class tt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tt.RED,this.left=s??Pt.EMPTY_NODE,this.right=i??Pt.EMPTY_NODE}copy(e,n,r,s,i){return new tt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Pt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}tt.RED=!0;tt.BLACK=!1;class fj{copy(e,n,r,s,i){return this}insert(e,n,r){return new tt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Pt{constructor(e,n=Pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,tt.BLACK,null,null))}remove(e){return new Pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,tt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Rc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Rc(this.root_,null,this.comparator_,!0,e)}}Pt.EMPTY_NODE=new fj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pj(t,e){return bo(t.name,e.name)}function y_(t,e){return bo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sm;function mj(t){sm=t}const US=function(t){return typeof t=="number"?"number:"+gS(t):"string:"+t},BS=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&gr(e,".sv"),"Priority must be a string or number.")}else B(t===sm||t.isEmpty(),"priority of unexpected type.");B(t===sm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qw;class Je{static set __childrenNodeConstructor(e){qw=e}static get __childrenNodeConstructor(){return qw}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:ie(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ie(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+US(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gS(this.value_):e+=this.value_,this.lazyHash_=fS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Je.VALUE_TYPE_ORDER.indexOf(n),i=Je.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $S,zS;function gj(t){$S=t}function _j(t){zS=t}class yj extends sd{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?bo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(ei,new Je("[PRIORITY-POST]",zS))}makePost(e,n){const r=$S(e);return new ne(n,new Je("[PRIORITY-POST]",r))}toString(){return".priority"}}const Me=new yj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj=Math.log(2);class wj{constructor(e){const n=i=>parseInt(Math.log(i)/vj,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Xu=function(t,e,n,r){t.sort(e);const s=function(l,u){const d=u-l;let f,m;if(d===0)return null;if(d===1)return f=t[l],m=n?n(f):f,new tt(m,f.node,tt.BLACK,null,null);{const y=parseInt(d/2,10)+l,T=s(l,y),b=s(y+1,u);return f=t[y],m=n?n(f):f,new tt(m,f.node,tt.BLACK,T,b)}},i=function(l){let u=null,d=null,f=t.length;const m=function(T,b){const R=f-T,C=f;f-=T;const E=s(R+1,C),S=t[R],O=n?n(S):S;y(new tt(O,S.node,b,null,E))},y=function(T){u?(u.left=T,u=T):(d=T,u=T)};for(let T=0;T<l.count;++T){const b=l.nextBitIsOne(),R=Math.pow(2,l.count-(T+1));b?m(R,tt.BLACK):(m(R,tt.BLACK),m(R,tt.RED))}return d},o=new wj(t.length),a=i(o);return new Pt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf;const _i={};class Xn{static get Default(){return B(_i&&Me,"ChildrenNode.ts has not been loaded"),kf=kf||new Xn({".priority":_i},{".priority":Me}),kf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=so(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pt?n:null}hasIndex(e){return gr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Qi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ne.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Xu(r,e.getCompare()):a=_i;const l=e.toString(),u={...this.indexSet_};u[l]=e;const d={...this.indexes_};return d[l]=a,new Xn(d,u)}addToIndexes(e,n){const r=bu(this.indexes_,(s,i)=>{const o=so(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===_i)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ne.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Xu(a,o.getCompare())}else return _i;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new ne(e.name,a))),l.insert(e,e.node)}});return new Xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=bu(this.indexes_,s=>{if(s===_i)return s;{const i=n.get(e.name);return i?s.remove(new ne(e.name,i)):s}});return new Xn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa;class Y{static get EMPTY_NODE(){return aa||(aa=new Y(new Pt(y_),null,Xn.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BS(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||aa}updatePriority(e){return this.children_.isEmpty()?this:new Y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?aa:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?aa:this.priorityNode_;return new Y(s,o,i)}}updateChild(e,n){const r=ie(e);if(r===null)return n;{B(ie(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ve(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Me,(o,a)=>{n[o]=a.val(e),r++,i&&Y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+US(this.getPriority().val())+":"),this.forEachChild(Me,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":fS(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ne(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ne.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wl?-1:0}withIndex(e){if(e===Qi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Y(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Qi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Me),s=n.getIterator(Me);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qi?null:this.indexMap_.get(e.toString())}}Y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ej extends Y{constructor(){super(new Pt(y_),Y.EMPTY_NODE,Xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Y.EMPTY_NODE}isEmpty(){return!1}}const Wl=new Ej;Object.defineProperties(ne,{MIN:{value:new ne(po,Y.EMPTY_NODE)},MAX:{value:new ne(ei,Wl)}});FS.__EMPTY_NODE=Y.EMPTY_NODE;Je.__childrenNodeConstructor=Y;mj(Wl);_j(Wl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xj=!0;function yt(t,e=null){if(t===null)return Y.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,yt(e))}if(!(t instanceof Array)&&xj){const n=[];let r=!1;if(Mt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=yt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new ne(o,l)))}}),n.length===0)return Y.EMPTY_NODE;const i=Xu(n,pj,o=>o.name,y_);if(r){const o=Xu(n,Me.getCompare());return new Y(i,yt(e),new Xn({".priority":o},{".priority":Me}))}else return new Y(i,yt(e),Xn.Default)}else{let n=Y.EMPTY_NODE;return Mt(t,(r,s)=>{if(gr(t,r)&&r.substring(0,1)!=="."){const i=yt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(yt(e))}}gj(yt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj extends sd{constructor(e){super(),this.indexPath_=e,B(!oe(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?bo(e.name,n.name):i}makePost(e,n){const r=yt(e),s=Y.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,s)}maxPost(){const e=Y.EMPTY_NODE.updateChild(this.indexPath_,Wl);return new ne(ei,e)}toString(){return MS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij extends sd{compare(e,n){const r=e.node.compareTo(n.node);return r===0?bo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=yt(e);return new ne(n,r)}toString(){return".value"}}const Cj=new Ij;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t){return{type:"value",snapshotNode:t}}function mo(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ml(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ml(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(mo(n,r)):o.trackChildChange(gl(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Me,(s,i)=>{n.hasChild(s)||r.trackChildChange(ml(s,i))}),n.isLeafNode()||n.forEachChild(Me,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(gl(s,i,o))}else r.trackChildChange(mo(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Y.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.indexedFilter_=new v_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_l.getStartPost_(e),this.endPost_=_l.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ne(n,r))||(r=Y.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Y.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Y.EMPTY_NODE);const i=this;return n.forEachChild(Me,(o,a)=>{i.matches(new ne(o,a))||(s=s.updateImmediateChild(o,Y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _l(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ne(n,r))||(r=Y.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Y.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Y.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const l=new ne(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,u,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,l);if(d&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(gl(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(ml(n,f));const b=a.updateImmediateChild(n,Y.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(mo(m.name,m.node)),b.updateImmediateChild(m.name,m.node)):b}}else return r.isEmpty()?e:d&&o(u,l)>=0?(i!=null&&(i.trackChildChange(ml(u.name,u.node)),i.trackChildChange(mo(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,Y.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:po}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ei}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Me}copy(){const e=new w_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kj(t){return t.loadsAllData()?new v_(t.getIndex()):t.hasLimit()?new Nj(t):new _l(t)}function Hw(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Me?n="$priority":t.index_===Cj?n="$value":t.index_===Qi?n="$key":(B(t.index_ instanceof Tj,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=nt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=nt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+nt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=nt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+nt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Gw(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends DS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=$l("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Ju.getListenId_(e,r),a={};this.listens_[o]=a;const l=Hw(e._queryParams);this.restRequest_(i+".json",l,(u,d)=>{let f=d;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),so(this.listens_,o)===a){let m;u?u===401?m="permission_denied":m="rest_error:"+u:m="ok",s(m,null)}})}unlisten(e,n){const r=Ju.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Hw(e._queryParams),r=e._path.toString(),s=new _g;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xo(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nl(a.responseText)}catch{zt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&zt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bj{constructor(){this.rootNode_=Y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(){return{value:null,children:new Map}}function qS(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ie(e);t.children.has(r)||t.children.set(r,Zu());const s=t.children.get(r);e=ve(e),qS(s,e,n)}}function im(t,e,n){t.value!==null?n(e,t.value):Rj(t,(r,s)=>{const i=new ye(e.toString()+"/"+r);im(s,i,n)})}function Rj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Mt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=10*1e3,Pj=30*1e3,Dj=5*60*1e3;class Oj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Aj(e);const r=Kw+(Pj-Kw)*Math.random();La(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Mt(e,(s,i)=>{i>0&&gr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),La(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fn||(fn={}));function HS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function E_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function x_(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=fn.ACK_USER_WRITE,this.source=HS()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ye(e));return new eh(pe(),n,this.revert)}}else return B(ie(this.path)===e,"operationForChild called for unrelated child."),new eh(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.source=e,this.path=n,this.type=fn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new yl(this.source,pe()):new yl(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=fn.OVERWRITE}operationForChild(e){return oe(this.path)?new ti(this.source,pe(),this.snap.getImmediateChild(e)):new ti(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=fn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ye(e));return n.isEmpty()?null:n.value?new ti(this.source,pe(),n.value):new vl(this.source,pe(),n)}else return B(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vl(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mj(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(Sj(o.childName,o.snapshotNode))}),la(t,s,"child_removed",e,r,n),la(t,s,"child_added",e,r,n),la(t,s,"child_moved",i,r,n),la(t,s,"child_changed",e,r,n),la(t,s,"value",e,r,n),s}function la(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Vj(t,a,l)),o.forEach(a=>{const l=jj(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function jj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Vj(t,e,n){if(e.childName==null||n.childName==null)throw Eo("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),s=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e){return{eventCache:t,serverCache:e}}function Ma(t,e,n,r){return id(new ni(e,n,r),t.serverCache)}function GS(t,e,n,r){return id(t.eventCache,new ni(e,n,r))}function om(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ri(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bf;const Fj=()=>(bf||(bf=new Pt(IM)),bf);class Ce{static fromObject(e){let n=new Ce(null);return Mt(e,(r,s)=>{n=n.set(new ye(r),s)}),n}constructor(e,n=Fj()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(oe(e))return null;{const r=ie(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ve(e),n);return i!=null?{path:Ke(new ye(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=ie(e),r=this.children.get(n);return r!==null?r.subtree(ve(e)):new Ce(null)}}set(e,n){if(oe(e))return new Ce(n,this.children);{const r=ie(e),i=(this.children.get(r)||new Ce(null)).set(ve(e),n),o=this.children.insert(r,i);return new Ce(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=ie(e),r=this.children.get(n);if(r){const s=r.remove(ve(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=ie(e),r=this.children.get(n);return r?r.get(ve(e)):null}}setTree(e,n){if(oe(e))return n;{const r=ie(e),i=(this.children.get(r)||new Ce(null)).setTree(ve(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ce(this.value,o)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ke(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=ie(e),o=this.children.get(i);return o?o.findOnPath_(ve(e),Ke(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=ie(e),i=this.children.get(s);return i?i.foreachOnPath_(ve(e),Ke(n,s),r):new Ce(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ke(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new Ce(null))}}function ja(t,e,n){if(oe(e))return new vn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=At(s,e);return i=i.updateChild(o,n),new vn(t.writeTree_.set(s,i))}else{const s=new Ce(n),i=t.writeTree_.setTree(e,s);return new vn(i)}}}function Qw(t,e,n){let r=t;return Mt(n,(s,i)=>{r=ja(r,Ke(e,s),i)}),r}function Yw(t,e){if(oe(e))return vn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new vn(n)}}function am(t,e){return ui(t,e)!=null}function ui(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(At(n.path,e)):null}function Xw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Me,(r,s)=>{e.push(new ne(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ne(r,s.value))}),e}function ts(t,e){if(oe(e))return t;{const n=ui(t,e);return n!=null?new vn(new Ce(n)):new vn(t.writeTree_.subtree(e))}}function lm(t){return t.writeTree_.isEmpty()}function go(t,e){return KS(pe(),t.writeTree_,e)}function KS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=KS(Ke(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ke(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e){return JS(e,t)}function Uj(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ja(t.visibleWrites,e,n)),t.lastWriteId=r}function Bj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $j(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zj(a,r.path)?s=!1:dn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return Wj(t),!0;if(r.snap)t.visibleWrites=Yw(t.visibleWrites,r.path);else{const a=r.children;Mt(a,l=>{t.visibleWrites=Yw(t.visibleWrites,Ke(r.path,l))})}return!0}else return!1}function zj(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(Ke(t.path,n),e))return!0;return!1}function Wj(t){t.visibleWrites=QS(t.allWrites,qj,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qj(t){return t.visible}function QS(t,e,n){let r=vn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)dn(n,o)?(a=At(n,o),r=ja(r,a,i.snap)):dn(o,n)&&(a=At(o,n),r=ja(r,pe(),i.snap.getChild(a)));else if(i.children){if(dn(n,o))a=At(n,o),r=Qw(r,a,i.children);else if(dn(o,n))if(a=At(o,n),oe(a))r=Qw(r,pe(),i.children);else{const l=so(i.children,ie(a));if(l){const u=l.getChild(ve(a));r=ja(r,pe(),u)}}}else throw Eo("WriteRecord should have .snap or .children")}}return r}function YS(t,e,n,r,s){if(!r&&!s){const i=ui(t.visibleWrites,e);if(i!=null)return i;{const o=ts(t.visibleWrites,e);if(lm(o))return n;if(n==null&&!am(o,pe()))return null;{const a=n||Y.EMPTY_NODE;return go(o,a)}}}else{const i=ts(t.visibleWrites,e);if(!s&&lm(i))return n;if(!s&&n==null&&!am(i,pe()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(dn(u.path,e)||dn(e,u.path))},a=QS(t.allWrites,o,e),l=n||Y.EMPTY_NODE;return go(a,l)}}}function Hj(t,e,n){let r=Y.EMPTY_NODE;const s=ui(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Me,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=ts(t.visibleWrites,e);return n.forEachChild(Me,(o,a)=>{const l=go(ts(i,new ye(o)),a);r=r.updateImmediateChild(o,l)}),Xw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=ts(t.visibleWrites,e);return Xw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Gj(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ke(e,n);if(am(t.visibleWrites,i))return null;{const o=ts(t.visibleWrites,i);return lm(o)?s.getChild(n):go(o,s.getChild(n))}}function Kj(t,e,n,r){const s=Ke(e,n),i=ui(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=ts(t.visibleWrites,s);return go(o,r.getNode().getImmediateChild(n))}else return null}function Qj(t,e){return ui(t.visibleWrites,e)}function Yj(t,e,n,r,s,i,o){let a;const l=ts(t.visibleWrites,e),u=ui(l,pe());if(u!=null)a=u;else if(n!=null)a=go(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&d.length<s;)f(y,r)!==0&&d.push(y),y=m.getNext();return d}else return[]}function Xj(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function th(t,e,n,r){return YS(t.writeTree,t.treePath,e,n,r)}function I_(t,e){return Hj(t.writeTree,t.treePath,e)}function Jw(t,e,n,r){return Gj(t.writeTree,t.treePath,e,n,r)}function nh(t,e){return Qj(t.writeTree,Ke(t.treePath,e))}function Jj(t,e,n,r,s,i){return Yj(t.writeTree,t.treePath,e,n,r,s,i)}function C_(t,e,n){return Kj(t.writeTree,t.treePath,e,n)}function XS(t,e){return JS(Ke(t.treePath,e),t.writeTree)}function JS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,gl(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,ml(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,mo(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,gl(r,e.snapshotNode,s.oldSnap));else throw Eo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ZS=new eV;class S_{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ni(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return C_(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ri(this.viewCache_),i=Jj(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tV(t){return{filter:t}}function nV(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rV(t,e,n,r,s){const i=new Zj;let o,a;if(n.type===fn.OVERWRITE){const u=n;u.source.fromUser?o=cm(t,e,u.path,u.snap,r,s,i):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!oe(u.path),o=rh(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===fn.MERGE){const u=n;u.source.fromUser?o=iV(t,e,u.path,u.children,r,s,i):(B(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=um(t,e,u.path,u.children,r,s,a,i))}else if(n.type===fn.ACK_USER_WRITE){const u=n;u.revert?o=lV(t,e,u.path,r,s,i):o=oV(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===fn.LISTEN_COMPLETE)o=aV(t,e,n.path,r,i);else throw Eo("Unknown operation type: "+n.type);const l=i.getChanges();return sV(e,o,l),{viewCache:o,changes:l}}function sV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=om(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(WS(om(e)))}}function eN(t,e,n,r,s,i){const o=e.eventCache;if(nh(r,n)!=null)return e;{let a,l;if(oe(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ri(e),d=u instanceof Y?u:Y.EMPTY_NODE,f=I_(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=th(r,ri(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=ie(n);if(u===".priority"){B(fs(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const f=Jw(r,n,d,l);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=ve(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const m=Jw(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(u).updateChild(d,m):f=o.getNode().getImmediateChild(u)}else f=C_(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,d,s,i):a=o.getNode()}}return Ma(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function rh(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(oe(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),y,null)}else{const y=ie(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const T=ve(n),R=l.getNode().getImmediateChild(y).updateChild(T,r);y===".priority"?u=d.updatePriority(l.getNode(),R):u=d.updateChild(l.getNode(),y,R,T,ZS,null)}const f=GS(e,u,l.isFullyInitialized()||oe(n),d.filtersNodes()),m=new S_(s,f,i);return eN(t,f,n,s,m,a)}function cm(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const d=new S_(s,e,i);if(oe(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ma(e,u,!0,t.filter.filtersNodes());else{const f=ie(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ma(e,u,a.isFullyInitialized(),a.isFiltered());else{const m=ve(n),y=a.getNode().getImmediateChild(f);let T;if(oe(m))T=r;else{const b=d.getCompleteChild(f);b!=null?LS(m)===".priority"&&b.getChild(jS(m)).isEmpty()?T=b:T=b.updateChild(m,r):T=Y.EMPTY_NODE}if(y.equals(T))l=e;else{const b=t.filter.updateChild(a.getNode(),f,T,m,d,o);l=Ma(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Zw(t,e){return t.eventCache.isCompleteForChild(e)}function iV(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const d=Ke(n,l);Zw(e,ie(d))&&(a=cm(t,a,d,u,s,i,o))}),r.foreach((l,u)=>{const d=Ke(n,l);Zw(e,ie(d))||(a=cm(t,a,d,u,s,i,o))}),a}function eE(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function um(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;oe(n)?u=r:u=new Ce(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((f,m)=>{if(d.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),T=eE(t,y,m);l=rh(t,l,new ye(f),T,s,i,o,a)}}),u.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!d.hasChild(f)&&!y){const T=e.serverCache.getNode().getImmediateChild(f),b=eE(t,T,m);l=rh(t,l,new ye(f),b,s,i,o,a)}}),l}function oV(t,e,n,r,s,i,o){if(nh(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(oe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rh(t,e,n,l.getNode().getChild(n),s,i,a,o);if(oe(n)){let u=new Ce(null);return l.getNode().forEachChild(Qi,(d,f)=>{u=u.set(new ye(d),f)}),um(t,e,n,u,s,i,a,o)}else return e}else{let u=new Ce(null);return r.foreach((d,f)=>{const m=Ke(n,d);l.isCompleteForPath(m)&&(u=u.set(d,l.getNode().getChild(m)))}),um(t,e,n,u,s,i,a,o)}}function aV(t,e,n,r,s){const i=e.serverCache,o=GS(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return eN(t,o,n,r,ZS,s)}function lV(t,e,n,r,s,i){let o;if(nh(r,n)!=null)return e;{const a=new S_(r,e,s),l=e.eventCache.getNode();let u;if(oe(n)||ie(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=th(r,ri(e));else{const f=e.serverCache.getNode();B(f instanceof Y,"serverChildren would be complete if leaf node"),d=I_(r,f)}d=d,u=t.filter.updateFullNode(l,d,i)}else{const d=ie(n);let f=C_(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),f!=null?u=t.filter.updateChild(l,d,f,ve(n),a,i):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,Y.EMPTY_NODE,ve(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=th(r,ri(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||nh(r,pe())!=null,Ma(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new v_(r.getIndex()),i=kj(r);this.processor_=tV(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(Y.EMPTY_NODE,o.getNode(),null),u=i.updateFullNode(Y.EMPTY_NODE,a.getNode(),null),d=new ni(l,o.isFullyInitialized(),s.filtersNodes()),f=new ni(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=id(f,d),this.eventGenerator_=new Lj(this.query_)}get query(){return this.query_}}function uV(t){return t.viewCache_.serverCache.getNode()}function hV(t,e){const n=ri(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function tE(t){return t.eventRegistrations_.length===0}function dV(t,e){t.eventRegistrations_.push(e)}function nE(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function rE(t,e,n,r){e.type===fn.MERGE&&e.source.queryId!==null&&(B(ri(t.viewCache_),"We should always have a full cache before handling merges"),B(om(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=rV(t.processor_,s,e,n,r);return nV(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,tN(t,i.changes,i.viewCache.eventCache.getNode(),null)}function fV(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Me,(i,o)=>{r.push(mo(i,o))}),n.isFullyInitialized()&&r.push(WS(n.getNode())),tN(t,r,n.getNode(),e)}function tN(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return Mj(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sh;class pV{constructor(){this.views=new Map}}function mV(t){B(!sh,"__referenceConstructor has already been defined"),sh=t}function gV(){return B(sh,"Reference.ts has not been loaded"),sh}function _V(t){return t.views.size===0}function N_(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),rE(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(rE(o,e,n,r));return i}}function yV(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=th(n,s?r:null),l=!1;a?l=!0:r instanceof Y?(a=I_(n,r),l=!1):(a=Y.EMPTY_NODE,l=!1);const u=id(new ni(a,l,!1),new ni(r,s,!1));return new cV(e,u)}return o}function vV(t,e,n,r,s,i){const o=yV(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dV(o,n),fV(o,n)}function wV(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=ps(t);if(s==="default")for(const[l,u]of t.views.entries())o=o.concat(nE(u,n,r)),tE(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||i.push(u.query));else{const l=t.views.get(s);l&&(o=o.concat(nE(l,n,r)),tE(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!ps(t)&&i.push(new(gV())(e._repo,e._path)),{removed:i,events:o}}function nN(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yi(t,e){let n=null;for(const r of t.views.values())n=n||hV(r,e);return n}function rN(t,e){if(e._queryParams.loadsAllData())return od(t);{const r=e._queryIdentifier;return t.views.get(r)}}function sN(t,e){return rN(t,e)!=null}function ps(t){return od(t)!=null}function od(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;function EV(t){B(!ih,"__referenceConstructor has already been defined"),ih=t}function xV(){return B(ih,"Reference.ts has not been loaded"),ih}let TV=1;class sE{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=Xj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function IV(t,e,n,r,s){return Uj(t.pendingWriteTree_,e,n,r,s),s?ql(t,new ti(HS(),e,n)):[]}function Mi(t,e,n=!1){const r=Bj(t.pendingWriteTree_,e);if($j(t.pendingWriteTree_,e)){let i=new Ce(null);return r.snap!=null?i=i.set(pe(),!0):Mt(r.children,o=>{i=i.set(new ye(o),!0)}),ql(t,new eh(r.path,i,n))}else return[]}function ad(t,e,n){return ql(t,new ti(E_(),e,n))}function CV(t,e,n){const r=Ce.fromObject(n);return ql(t,new vl(E_(),e,r))}function SV(t,e){return ql(t,new yl(E_(),e))}function NV(t,e,n){const r=k_(t,n);if(r){const s=b_(r),i=s.path,o=s.queryId,a=At(i,e),l=new yl(x_(o),a);return R_(t,i,l)}else return[]}function hm(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||sN(o,e))){const l=wV(o,e,n,r);_V(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const u=l.removed;if(a=l.events,!s){const d=u.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,y)=>ps(y));if(d&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const y=RV(m);for(let T=0;T<y.length;++T){const b=y[T],R=b.query,C=lN(t,b);t.listenProvider_.startListening(Va(R),oh(t,R),C.hashFn,C.onComplete)}}}!f&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Va(e),null):u.forEach(m=>{const y=t.queryToTagMap.get(ld(m));t.listenProvider_.stopListening(Va(m),y)}))}AV(t,u)}return a}function kV(t,e,n,r){const s=k_(t,r);if(s!=null){const i=b_(s),o=i.path,a=i.queryId,l=At(o,e),u=new ti(x_(a),l,n);return R_(t,o,u)}else return[]}function bV(t,e,n,r){const s=k_(t,r);if(s){const i=b_(s),o=i.path,a=i.queryId,l=At(o,e),u=Ce.fromObject(n),d=new vl(x_(a),l,u);return R_(t,o,d)}else return[]}function iE(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,y)=>{const T=At(m,s);i=i||Yi(y,T),o=o||ps(y)});let a=t.syncPointTree_.get(s);a?(o=o||ps(a),i=i||Yi(a,pe())):(a=new pV,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Y.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,T)=>{const b=Yi(T,pe());b&&(i=i.updateImmediateChild(y,b))}));const u=sN(a,e);if(!u&&!e._queryParams.loadsAllData()){const m=ld(e);B(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=PV();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const d=T_(t.pendingWriteTree_,s);let f=vV(a,e,n,d,i,l);if(!u&&!o&&!r){const m=rN(a,e);f=f.concat(DV(t,e,m))}return f}function iN(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=At(o,e),u=Yi(a,l);if(u)return u});return YS(s,e,i,n,!0)}function ql(t,e){return oN(e,t.syncPointTree_,null,T_(t.pendingWriteTree_,pe()))}function oN(t,e,n,r){if(oe(t.path))return aN(t,e,n,r);{const s=e.get(pe());n==null&&s!=null&&(n=Yi(s,pe()));let i=[];const o=ie(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=XS(r,o);i=i.concat(oN(a,l,u,d))}return s&&(i=i.concat(N_(s,t,r,n))),i}}function aN(t,e,n,r){const s=e.get(pe());n==null&&s!=null&&(n=Yi(s,pe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=XS(r,o),d=t.operationForChild(o);d&&(i=i.concat(aN(d,a,l,u)))}),s&&(i=i.concat(N_(s,t,r,n))),i}function lN(t,e){const n=e.query,r=oh(t,n);return{hashFn:()=>(uV(e)||Y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?NV(t,n._path,r):SV(t,n._path);{const i=NM(s,n);return hm(t,n,null,i)}}}}function oh(t,e){const n=ld(e);return t.queryToTagMap.get(n)}function ld(t){return t._path.toString()+"$"+t._queryIdentifier}function k_(t,e){return t.tagToQueryMap.get(e)}function b_(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ye(t.substr(0,e))}}function R_(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=T_(t.pendingWriteTree_,e);return N_(r,n,s,null)}function RV(t){return t.fold((e,n,r)=>{if(n&&ps(n))return[od(n)];{let s=[];return n&&(s=nN(n)),Mt(r,(i,o)=>{s=s.concat(o)}),s}})}function Va(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xV())(t._repo,t._path):t}function AV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=ld(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function PV(){return TV++}function DV(t,e,n){const r=e._path,s=oh(t,e),i=lN(t,n),o=t.listenProvider_.startListening(Va(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!ps(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,f)=>{if(!oe(u)&&d&&ps(d))return[od(d).query];{let m=[];return d&&(m=m.concat(nN(d).map(y=>y.query))),Mt(f,(y,T)=>{m=m.concat(T)}),m}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Va(d),oh(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new A_(n)}node(){return this.node_}}class P_{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ke(this.path_,e);return new P_(this.syncTree_,n)}node(){return iN(this.syncTree_,this.path_)}}const OV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},oE=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return LV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return MV(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},LV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},MV=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},jV=function(t,e,n,r){return D_(e,new P_(n,t),r)},VV=function(t,e,n){return D_(t,new A_(e),n)};function D_(t,e,n){const r=t.getPriority().val(),s=oE(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=oE(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Je(a,yt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Je(s))),o.forEachChild(Me,(a,l)=>{const u=D_(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function L_(t,e){let n=e instanceof ye?e:new ye(e),r=t,s=ie(n);for(;s!==null;){const i=so(r.node.children,s)||{children:{},childCount:0};r=new O_(s,r,i),n=ve(n),s=ie(n)}return r}function Ro(t){return t.node.value}function cN(t,e){t.node.value=e,dm(t)}function uN(t){return t.node.childCount>0}function FV(t){return Ro(t)===void 0&&!uN(t)}function cd(t,e){Mt(t.node.children,(n,r)=>{e(new O_(n,t,r))})}function hN(t,e,n,r){n&&e(t),cd(t,s=>{hN(s,e,!0)})}function UV(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hl(t){return new ye(t.parent===null?t.name:Hl(t.parent)+"/"+t.name)}function dm(t){t.parent!==null&&BV(t.parent,t.name,t)}function BV(t,e,n){const r=FV(n),s=gr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,dm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,dm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $V=/[\[\].#$\/\u0000-\u001F\u007F]/,zV=/[\[\].#$\u0000-\u001F\u007F]/,Rf=10*1024*1024,dN=function(t){return typeof t=="string"&&t.length!==0&&!$V.test(t)},fN=function(t){return typeof t=="string"&&t.length!==0&&!zV.test(t)},WV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fN(t)},pN=function(t,e,n){const r=n instanceof ye?new oj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ls(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ls(r)+" with contents = "+e.toString());if(pS(e))throw new Error(t+"contains "+e.toString()+" "+Ls(r));if(typeof e=="string"&&e.length>Rf/3&&Ph(e)>Rf)throw new Error(t+"contains a string greater than "+Rf+" utf8 bytes "+Ls(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Mt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!dN(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ls(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);aj(r,o),pN(t,a,r),lj(r)}),s&&i)throw new Error(t+' contains ".value" child '+Ls(r)+" in addition to actual children.")}},mN=function(t,e,n,r){if(!fN(n))throw new Error(KT(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mN(t,e,n)},HV=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dN(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!WV(n))throw new Error(KT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function gN(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!g_(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function _N(t,e,n){gN(t,n),yN(t,r=>g_(r,e))}function hi(t,e,n){gN(t,n),yN(t,r=>dn(r,e)||dn(e,r))}function yN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(KV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Oa&&_t("event: "+n.toString()),zl(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV="repo_interrupt",YV=25;class XV{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new GV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zu(),this.transactionQueueTree_=new O_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function JV(t,e,n){if(t.stats_=p_(t.repoInfo_),t.forceRestClient_||AM())t.server_=new Ju(t.repoInfo_,(r,s,i,o)=>{aE(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>lE(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{nt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new tr(t.repoInfo_,e,(r,s,i,o)=>{aE(t,r,s,i,o)},r=>{lE(t,r)},r=>{e4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=MM(t.repoInfo_,()=>new Oj(t.stats_,t.server_)),t.infoData_=new bj,t.infoSyncTree_=new sE({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ad(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),M_(t,"connected",!1),t.serverSyncTree_=new sE({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);hi(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function ZV(t){const n=t.infoData_.getNode(new ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vN(t){return OV({timestamp:ZV(t)})}function aE(t,e,n,r,s){t.dataUpdateCount++;const i=new ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=bu(n,u=>yt(u));o=bV(t.serverSyncTree_,i,l,s)}else{const l=yt(n);o=kV(t.serverSyncTree_,i,l,s)}else if(r){const l=bu(n,u=>yt(u));o=CV(t.serverSyncTree_,i,l)}else{const l=yt(n);o=ad(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=V_(t,i)),hi(t.eventQueue_,a,o)}function lE(t,e){M_(t,"connected",e),e===!1&&n4(t)}function e4(t,e){Mt(e,(n,r)=>{M_(t,n,r)})}function M_(t,e,n){const r=new ye("/.info/"+e),s=yt(n);t.infoData_.updateSnapshot(r,s);const i=ad(t.infoSyncTree_,r,s);hi(t.eventQueue_,r,i)}function t4(t){return t.nextWriteId_++}function n4(t){wN(t,"onDisconnectEvents");const e=vN(t),n=Zu();im(t.onDisconnect_,pe(),(s,i)=>{const o=jV(s,i,t.serverSyncTree_,e);qS(n,s,o)});let r=[];im(n,pe(),(s,i)=>{r=r.concat(ad(t.serverSyncTree_,s,i));const o=l4(t,s);V_(t,o)}),t.onDisconnect_=Zu(),hi(t.eventQueue_,pe(),r)}function r4(t,e,n){let r;ie(e._path)===".info"?r=iE(t.infoSyncTree_,e,n):r=iE(t.serverSyncTree_,e,n),_N(t.eventQueue_,e._path,r)}function s4(t,e,n){let r;ie(e._path)===".info"?r=hm(t.infoSyncTree_,e,n):r=hm(t.serverSyncTree_,e,n),_N(t.eventQueue_,e._path,r)}function i4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(QV)}function wN(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function EN(t,e,n){return iN(t.serverSyncTree_,e,n)||Y.EMPTY_NODE}function j_(t,e=t.transactionQueueTree_){if(e||ud(t,e),Ro(e)){const n=TN(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&o4(t,Hl(e),n)}else uN(e)&&cd(e,n=>{j_(t,n)})}function o4(t,e,n){const r=n.map(u=>u.currentWriteId),s=EN(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const d=n[u];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=At(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{wN(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,d=d.concat(Mi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();ud(t,L_(t.transactionQueueTree_,e)),j_(t,t.transactionQueueTree_),hi(t.eventQueue_,e,d);for(let m=0;m<f.length;m++)zl(f[m])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{zt("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}V_(t,e)}},o)}function V_(t,e){const n=xN(t,e),r=Hl(n),s=TN(t,n);return a4(t,s,r),r}function a4(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=At(n,l.path);let d=!1,f;if(B(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,f=l.abortReason,s=s.concat(Mi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=YV)d=!0,f="maxretry",s=s.concat(Mi(t.serverSyncTree_,l.currentWriteId,!0));else{const m=EN(t,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){pN("transaction failed: Data returned ",y,l.path);let T=yt(y);typeof y=="object"&&y!=null&&gr(y,".priority")||(T=T.updatePriority(m.getPriority()));const R=l.currentWriteId,C=vN(t),E=VV(T,m,C);l.currentOutputSnapshotRaw=T,l.currentOutputSnapshotResolved=E,l.currentWriteId=t4(t),o.splice(o.indexOf(R),1),s=s.concat(IV(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(Mi(t.serverSyncTree_,R,!0))}else d=!0,f="nodata",s=s.concat(Mi(t.serverSyncTree_,l.currentWriteId,!0))}hi(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}ud(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)zl(r[a]);j_(t,t.transactionQueueTree_)}function xN(t,e){let n,r=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ro(r)===void 0;)r=L_(r,n),e=ve(e),n=ie(e);return r}function TN(t,e){const n=[];return IN(t,e,n),n.sort((r,s)=>r.order-s.order),n}function IN(t,e,n){const r=Ro(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);cd(e,s=>{IN(t,s,n)})}function ud(t,e){const n=Ro(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,cN(e,n.length>0?n:void 0)}cd(e,r=>{ud(t,r)})}function l4(t,e){const n=Hl(xN(t,e)),r=L_(t.transactionQueueTree_,e);return UV(r,s=>{Af(t,s)}),Af(t,r),hN(r,s=>{Af(t,s)}),n}function Af(t,e){const n=Ro(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Mi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?cN(e,void 0):n.length=i+1,hi(t.eventQueue_,Hl(e),s);for(let o=0;o<r.length;o++)zl(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function u4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):zt(`Invalid query segment '${n}' in query '${t}'`)}return e}const cE=function(t,e){const n=h4(t),r=n.namespace;n.domain==="firebase.com"&&dr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&dr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new SS(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ye(n.pathString)}},h4=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=c4(t.substring(d,f)));const m=u4(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+nt(this.snapshot.exportVal())}}class f4{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:LS(this._path)}get ref(){return new xs(this._repo,this._path)}get _queryIdentifier(){const e=Gw(this._queryParams),n=d_(e);return n==="{}"?"default":n}get _queryObject(){return Gw(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof F_))return!1;const n=this._repo===e._repo,r=g_(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ij(this._path)}}class xs extends F_{constructor(e,n){super(e,n,new w_,!1)}get parent(){const e=jS(this._path);return e===null?null:new xs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ah{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ye(e),r=fm(this.ref,e);return new ah(this._node.getChild(n),r,Me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ah(s,fm(this.ref,r),Me)))}hasChild(e){const n=new ye(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function m4(t,e){return t=Ne(t),t._checkNotDeleted("ref"),fm(t._root,e)}function fm(t,e){return t=Ne(t),ie(t._path)===null?qV("child","path",e):mN("child","path",e),new xs(t._repo,Ke(t._path,e))}class U_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new d4("value",this,new ah(e.snapshotNode,new xs(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new f4(this,e,n):null}matches(e){return e instanceof U_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function g4(t,e,n,r,s){const i=new p4(n,void 0),o=new U_(i);return r4(t._repo,t,o),()=>s4(t._repo,t,o)}function _4(t,e,n,r){return g4(t,"value",e)}mV(xs);EV(xs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y4="FIREBASE_DATABASE_EMULATOR_HOST",pm={};let v4=!1;function w4(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=mr(i);t.repoInfo_=new SS(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function E4(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||dr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cE(i,s),a=o.repoInfo,l;typeof process<"u"&&bw&&(l=bw[y4]),l?(i=`http://${l}?ns=${a.namespace}`,o=cE(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new DM(t.name,t.options,e);HV("Invalid Firebase Database URL",o),oe(o.path)||dr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=T4(a,t,u,new PM(t,n));return new I4(d,t)}function x4(t,e){const n=pm[e];(!n||n[t.key]!==t)&&dr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),i4(t),delete n[t.key]}function T4(t,e,n,r){let s=pm[e.name];s||(s={},pm[e.name]=s);let i=s[t.toURLString()];return i&&dr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new XV(t,v4,n,r),s[t.toURLString()]=i,i}class I4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(JV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xs(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dr("Cannot call "+e+" on a deleted database.")}}function C4(t=Oh(),e){const n=kl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=gg("database");r&&S4(n,...r)}return n}function S4(t,e,n,r={}){t=Ne(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&is(r,i.repoInfo_.emulatorOptions))return;dr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&dr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new tu(tu.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:yg(r.mockUserToken,t.app.options.projectId);o=new tu(a)}mr(e)&&(Rh(e),Ah("Database",!0)),w4(i,s,r,o)}/**
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
 */function N4(t){gM(ys),os(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return E4(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),en(Rw,Aw,t),en(Rw,Aw,"esm2020")}tr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};tr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};N4();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="firebasestorage.googleapis.com",k4="storageBucket",b4=2*60*1e3,R4=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Bn{constructor(e,n,r=0){super(Pf(e),`Firebase Storage: ${n} (${Pf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,$n.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Un;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Un||(Un={}));function Pf(t){return"storage/"+t}function A4(){const t="An unknown error occurred, please check the error payload for server response.";return new $n(Un.UNKNOWN,t)}function P4(){return new $n(Un.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D4(){return new $n(Un.CANCELED,"User canceled the upload/download.")}function O4(t){return new $n(Un.INVALID_URL,"Invalid URL '"+t+"'.")}function L4(t){return new $n(Un.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function uE(t){return new $n(Un.INVALID_ARGUMENT,t)}function SN(){return new $n(Un.APP_DELETED,"The Firebase app was deleted.")}function M4(t){return new $n(Un.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=pn.makeFromUrl(e,n)}catch{return new pn(e,"")}if(r.path==="")return r;throw L4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),T={bucket:1,path:3},b=n===CN?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",C=new RegExp(`^https?://${b}/${s}/${R}`,"i"),S=[{regex:a,indices:l,postModify:i},{regex:y,indices:T,postModify:u},{regex:C,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<S.length;O++){const j=S[O],M=j.regex.exec(e);if(M){const w=M[j.indices.bucket];let _=M[j.indices.path];_||(_=""),r=new pn(w,_),j.postModify(r);break}}if(r==null)throw O4(e);return r}}class j4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function d(...R){u||(u=!0,e.apply(null,R))}function f(R){s=setTimeout(()=>{s=null,t(y,l())},R)}function m(){i&&clearTimeout(i)}function y(R,...C){if(u){m();return}if(R){m(),d.call(null,R,...C);return}if(l()||o){m(),d.call(null,R,...C);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,f(S)}let T=!1;function b(R){T||(T=!0,m(),!u&&(s!==null?(R||(a=2),clearTimeout(s),f(0)):R||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,b(!0)},n),b}function F4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t){return t!==void 0}function hE(t,e,n,r){if(r<e)throw uE(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw uE(`Invalid value for '${t}'. Expected ${n} or less.`)}function B4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var lh;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(lh||(lh={}));/**
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
 */function $4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(e,n,r,s,i,o,a,l,u,d,f,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,b)=>{this.resolve_=T,this.reject_=b,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ac(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===lh.NO_ERROR,l=i.getStatus();if(!a||$4(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===lh.ABORT;r(!1,new Ac(!1,null,d));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ac(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());U4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=A4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?SN():D4();o(l)}else{const l=P4();o(l)}};this.canceled_?n(!1,new Ac(!1,null,!0)):this.backoffId_=V4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&F4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ac{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function W4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K4(t,e,n,r,s,i,o=!0,a=!1){const l=B4(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return H4(d,e),W4(d,n),q4(d,i),G4(d,r),new z4(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ch{constructor(e,n){this._service=e,n instanceof pn?this._location=n:this._location=pn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ch(e,n)}get root(){const e=new pn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y4(this._location.path)}get storage(){return this._service}get parent(){const e=Q4(this._location.path);if(e===null)return null;const n=new pn(this._location.bucket,e);return new ch(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M4(e)}}function dE(t,e){const n=e==null?void 0:e[k4];return n==null?null:pn.makeFromBucketSpec(n,t)}function X4(t,e,n,r={}){t.host=`${e}:${n}`;const s=mr(e);s&&(Rh(`https://${t.host}/b`),Ah("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:yg(i,t.app.options.projectId))}class J4{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=CN,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b4,this._maxUploadRetryTime=R4,this._requests=new Set,s!=null?this._bucket=pn.makeFromBucketSpec(s,this._host):this._bucket=dE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=pn.makeFromBucketSpec(this._url,e):this._bucket=dE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ch(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new j4(SN());{const o=K4(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const fE="@firebase/storage",pE="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN="storage";function Z4(t=Oh(),e){t=Ne(t);const r=kl(t,NN).getImmediate({identifier:e}),s=gg("storage");return s&&eF(r,...s),r}function eF(t,e,n,r={}){X4(t,e,n,r)}function tF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new J4(n,r,s,e,ys)}function nF(){os(new ar(NN,tF,"PUBLIC").setMultipleInstances(!0)),en(fE,pE,""),en(fE,pE,"esm2020")}nF();const rF={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},hd=XT(rF),nr=HD(hd),Wt=ZL(hd);Z4(hd);const sF=C4(hd);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wl(){return wl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wl.apply(this,arguments)}var Ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ur||(Ur={}));const mE="popstate";function iF(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return mm("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:uh(s)}return aF(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function B_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oF(){return Math.random().toString(36).substr(2,8)}function gE(t,e){return{usr:t.state,key:t.key,idx:e}}function mm(t,e,n,r){return n===void 0&&(n=null),wl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:n,key:e&&e.key||r||oF()})}function uh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aF(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Ur.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(wl({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Ur.Pop;let R=d(),C=R==null?null:R-u;u=R,l&&l({action:a,location:b.location,delta:C})}function m(R,C){a=Ur.Push;let E=mm(b.location,R,C);u=d()+1;let S=gE(E,u),O=b.createHref(E);try{o.pushState(S,"",O)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(O)}i&&l&&l({action:a,location:b.location,delta:1})}function y(R,C){a=Ur.Replace;let E=mm(b.location,R,C);u=d();let S=gE(E,u),O=b.createHref(E);o.replaceState(S,"",O),i&&l&&l({action:a,location:b.location,delta:0})}function T(R){let C=s.location.origin!=="null"?s.location.origin:s.location.href,E=typeof R=="string"?R:uh(R);return E=E.replace(/ $/,"%20"),Pe(C,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,C)}let b={get action(){return a},get location(){return t(s,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(mE,f),l=R,()=>{s.removeEventListener(mE,f),l=null}},createHref(R){return e(s,R)},createURL:T,encodeLocation(R){let C=T(R);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:m,replace:y,go(R){return o.go(R)}};return b}var _E;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_E||(_E={}));function lF(t,e,n){return n===void 0&&(n="/"),cF(t,e,n)}function cF(t,e,n,r){let s=typeof e=="string"?Ao(e):e,i=_o(s.pathname||"/",n);if(i==null)return null;let o=kN(t);uF(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=EF(i);a=vF(o[l],u)}return a}function kN(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ns([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),kN(i.children,e,d,u)),!(i.path==null&&!i.index)&&e.push({path:u,score:_F(u,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of bN(i.path))s(i,o,l)}),e}function bN(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=bN(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function uF(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yF(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hF=/^:[\w-]+$/,dF=3,fF=2,pF=1,mF=10,gF=-2,yE=t=>t==="*";function _F(t,e){let n=t.split("/"),r=n.length;return n.some(yE)&&(r+=gF),e&&(r+=fF),n.filter(s=>!yE(s)).reduce((s,i)=>s+(hF.test(i)?dF:i===""?pF:mF),r)}function yF(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function vF(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",f=gm({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:ns([i,f.pathname]),pathnameBase:SF(ns([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=ns([i,f.pathnameBase]))}return o}function gm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=wF(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:y}=d;if(m==="*"){let b=a[f]||"";o=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const T=a[f];return y&&!T?u[m]=void 0:u[m]=(T||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:o,pattern:t}}function wF(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),B_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function EF(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return B_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _o(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const xF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,TF=t=>xF.test(t);function IF(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ao(t):t,i;if(n)if(TF(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),B_(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=vE(n.substring(1),"/"):i=vE(n,e)}else i=e;return{pathname:i,search:NF(r),hash:kF(s)}}function vE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Df(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function CF(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $_(t,e){let n=CF(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function z_(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ao(t):(s=wl({},t),Pe(!s.pathname||!s.pathname.includes("?"),Df("?","pathname","search",s)),Pe(!s.pathname||!s.pathname.includes("#"),Df("#","pathname","hash",s)),Pe(!s.search||!s.search.includes("#"),Df("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=IF(s,a),u=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const ns=t=>t.join("/").replace(/\/\/+/g,"/"),SF=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NF=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kF=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bF(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const RN=["post","put","patch","delete"];new Set(RN);const RF=["get",...RN];new Set(RF);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},El.apply(this,arguments)}const dd=P.createContext(null),AN=P.createContext(null),_r=P.createContext(null),fd=P.createContext(null),yr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),PN=P.createContext(null);function AF(t,e){let{relative:n}=e===void 0?{}:e;Po()||Pe(!1);let{basename:r,navigator:s}=P.useContext(_r),{hash:i,pathname:o,search:a}=pd(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ns([r,o])),s.createHref({pathname:l,search:a,hash:i})}function Po(){return P.useContext(fd)!=null}function Do(){return Po()||Pe(!1),P.useContext(fd).location}function DN(t){P.useContext(_r).static||P.useLayoutEffect(t)}function di(){let{isDataRoute:t}=P.useContext(yr);return t?qF():PF()}function PF(){Po()||Pe(!1);let t=P.useContext(dd),{basename:e,future:n,navigator:r}=P.useContext(_r),{matches:s}=P.useContext(yr),{pathname:i}=Do(),o=JSON.stringify($_(s,n.v7_relativeSplatPath)),a=P.useRef(!1);return DN(()=>{a.current=!0}),P.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=z_(u,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ns([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,i,t])}function DF(){let{matches:t}=P.useContext(yr),e=t[t.length-1];return e?e.params:{}}function pd(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(_r),{matches:s}=P.useContext(yr),{pathname:i}=Do(),o=JSON.stringify($_(s,r.v7_relativeSplatPath));return P.useMemo(()=>z_(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function OF(t,e){return LF(t,e)}function LF(t,e,n,r){Po()||Pe(!1);let{navigator:s}=P.useContext(_r),{matches:i}=P.useContext(yr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Do(),d;if(e){var f;let R=typeof e=="string"?Ao(e):e;l==="/"||(f=R.pathname)!=null&&f.startsWith(l)||Pe(!1),d=R}else d=u;let m=d.pathname||"/",y=m;if(l!=="/"){let R=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let T=lF(t,{pathname:y}),b=UF(T&&T.map(R=>Object.assign({},R,{params:Object.assign({},a,R.params),pathname:ns([l,s.encodeLocation?s.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:ns([l,s.encodeLocation?s.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),i,n,r);return e&&b?P.createElement(fd.Provider,{value:{location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ur.Pop}},b):b}function MF(){let t=WF(),e=bF(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:s},n):null,null)}const jF=P.createElement(MF,null);class VF extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(yr.Provider,{value:this.props.routeContext},P.createElement(PN.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function FF(t){let{routeContext:e,match:n,children:r}=t,s=P.useContext(dd);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(yr.Provider,{value:e},r)}function UF(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Pe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:y}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||T){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let y,T=!1,b=null,R=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,b=f.route.errorElement||jF,l&&(u<0&&m===0?(HF("route-fallback"),T=!0,R=null):u===m&&(T=!0,R=f.route.hydrateFallbackElement||null)));let C=e.concat(o.slice(0,m+1)),E=()=>{let S;return y?S=b:T?S=R:f.route.Component?S=P.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=d,P.createElement(FF,{match:f,routeContext:{outlet:d,matches:C,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?P.createElement(VF,{location:n.location,revalidation:n.revalidation,component:b,error:y,children:E(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):E()},null)}var ON=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ON||{}),LN=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(LN||{});function BF(t){let e=P.useContext(dd);return e||Pe(!1),e}function $F(t){let e=P.useContext(AN);return e||Pe(!1),e}function zF(t){let e=P.useContext(yr);return e||Pe(!1),e}function MN(t){let e=zF(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function WF(){var t;let e=P.useContext(PN),n=$F(),r=MN();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qF(){let{router:t}=BF(ON.UseNavigateStable),e=MN(LN.UseNavigateStable),n=P.useRef(!1);return DN(()=>{n.current=!0}),P.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,El({fromRouteId:e},i)))},[t,e])}const wE={};function HF(t,e,n){wE[t]||(wE[t]=!0)}function GF(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function KF(t){let{to:e,replace:n,state:r,relative:s}=t;Po()||Pe(!1);let{future:i,static:o}=P.useContext(_r),{matches:a}=P.useContext(yr),{pathname:l}=Do(),u=di(),d=z_(e,$_(a,i.v7_relativeSplatPath),l,s==="path"),f=JSON.stringify(d);return P.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:s}),[u,f,s,n,r]),null}function Sn(t){Pe(!1)}function QF(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Ur.Pop,navigator:i,static:o=!1,future:a}=t;Po()&&Pe(!1);let l=e.replace(/^\/*/,"/"),u=P.useMemo(()=>({basename:l,navigator:i,static:o,future:El({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Ao(r));let{pathname:d="/",search:f="",hash:m="",state:y=null,key:T="default"}=r,b=P.useMemo(()=>{let R=_o(d,l);return R==null?null:{location:{pathname:R,search:f,hash:m,state:y,key:T},navigationType:s}},[l,d,f,m,y,T,s]);return b==null?null:P.createElement(_r.Provider,{value:u},P.createElement(fd.Provider,{children:n,value:b}))}function YF(t){let{children:e,location:n}=t;return OF(_m(e),n)}new Promise(()=>{});function _m(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,s)=>{if(!P.isValidElement(r))return;let i=[...e,s];if(r.type===P.Fragment){n.push.apply(n,_m(r.props.children,i));return}r.type!==Sn&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=_m(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hh(){return hh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hh.apply(this,arguments)}function jN(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function XF(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JF(t,e){return t.button===0&&(!e||e==="_self")&&!XF(t)}const ZF=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],e3=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],t3="6";try{window.__reactRouterVersion=t3}catch{}const n3=P.createContext({isTransitioning:!1}),r3="startTransition",EE=jk[r3];function s3(t){let{basename:e,children:n,future:r,window:s}=t,i=P.useRef();i.current==null&&(i.current=iF({window:s,v5Compat:!0}));let o=i.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=P.useCallback(f=>{u&&EE?EE(()=>l(f)):l(f)},[l,u]);return P.useLayoutEffect(()=>o.listen(d),[o,d]),P.useEffect(()=>GF(r),[r]),P.createElement(QF,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const i3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",o3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,md=P.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:f}=e,m=jN(e,ZF),{basename:y}=P.useContext(_r),T,b=!1;if(typeof u=="string"&&o3.test(u)&&(T=u,i3))try{let S=new URL(window.location.href),O=u.startsWith("//")?new URL(S.protocol+u):new URL(u),j=_o(O.pathname,y);O.origin===S.origin&&j!=null?u=j+O.search+O.hash:b=!0}catch{}let R=AF(u,{relative:s}),C=c3(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:s,viewTransition:f});function E(S){r&&r(S),S.defaultPrevented||C(S)}return P.createElement("a",hh({},m,{href:T||R,onClick:b||i?r:E,ref:n,target:l}))}),a3=P.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:l,viewTransition:u,children:d}=e,f=jN(e,e3),m=pd(l,{relative:f.relative}),y=Do(),T=P.useContext(AN),{navigator:b,basename:R}=P.useContext(_r),C=T!=null&&u3(m)&&u===!0,E=b.encodeLocation?b.encodeLocation(m).pathname:m.pathname,S=y.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;s||(S=S.toLowerCase(),O=O?O.toLowerCase():null,E=E.toLowerCase()),O&&R&&(O=_o(O,R)||O);const j=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let M=S===E||!o&&S.startsWith(E)&&S.charAt(j)==="/",w=O!=null&&(O===E||!o&&O.startsWith(E)&&O.charAt(E.length)==="/"),_={isActive:M,isPending:w,isTransitioning:C},x=M?r:void 0,N;typeof i=="function"?N=i(_):N=[i,M?"active":null,w?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(_):a;return P.createElement(md,hh({},f,{"aria-current":x,className:N,ref:n,style:k,to:l,viewTransition:u}),typeof d=="function"?d(_):d)});var ym;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ym||(ym={}));var xE;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(xE||(xE={}));function l3(t){let e=P.useContext(dd);return e||Pe(!1),e}function c3(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=di(),u=Do(),d=pd(t,{relative:o});return P.useCallback(f=>{if(JF(f,n)){f.preventDefault();let m=r!==void 0?r:uh(u)===uh(d);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[u,l,d,r,s,n,t,i,o,a])}function u3(t,e){e===void 0&&(e={});let n=P.useContext(n3);n==null&&Pe(!1);let{basename:r}=l3(ym.useViewTransitionState),s=pd(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=_o(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=_o(n.nextLocation.pathname,r)||n.nextLocation.pathname;return gm(s.pathname,o)!=null||gm(s.pathname,i)!=null}function h3({children:t}){const[e,n]=P.useState(!1),[r,s]=P.useState(null),i="AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";return P.useEffect(()=>{if(window.google&&window.google.maps){n(!0),window.mapsReady=!0,window.dispatchEvent(new CustomEvent("mapsReady"));return}console.log("Loading Google Maps with API key...");const o=()=>{console.log("✅ Google Maps loaded successfully"),window.mapsReady=!0,n(!0),s(null),window.dispatchEvent(new CustomEvent("mapsReady"))};window.initMap=o;const a=document.createElement("script");return a.src=`https://maps.googleapis.com/maps/api/js?key=${i}&libraries=places,geometry&callback=initMap`,a.async=!0,a.defer=!0,a.onerror=()=>{const l="Failed to load Google Maps";console.error(l),s(l)},document.head.appendChild(a),()=>{const l=document.querySelector('script[src*="maps.googleapis.com"]');if(l&&document.head.contains(l))try{document.head.removeChild(l)}catch(u){console.warn("Failed to remove script:",u)}window.initMap&&delete window.initMap,window.mapsReady=!1}},[]),r?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:h.jsxs("div",{className:"text-center",children:[h.jsxs("p",{className:"text-red-600 font-medium",children:["⚠️ ",r]}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Please check your Google Maps API key configuration."})]})}):e?h.jsx(h.Fragment,{children:t}):h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing maps..."})]})})}function d3(){const[t,e]=P.useState(!1),n=[{path:"/dashboard",icon:"🏠",label:"Home"},{path:"/orders",icon:"📦",label:"My Orders"},{path:"/track",icon:"📍",label:"Track Order"},{path:"/track-map",icon:"🗺️",label:"Live Tracking"},{path:"/profile",icon:"👤",label:"My Profile"},{path:"/settings",icon:"⚙️",label:"Settings"}];return h.jsxs("aside",{className:`bg-blue-900 text-white ${t?"w-20":"w-64"} transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`,children:[h.jsx("div",{className:"p-6 border-b border-blue-800",children:h.jsxs("div",{className:"flex items-center justify-between",children:[!t&&h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center",children:h.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl font-bold",children:"PTROS"}),h.jsx("p",{className:"text-xs text-blue-300",children:"Customer"})]})]}),t&&h.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto",children:h.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),h.jsx("button",{onClick:()=>e(!t),className:"text-blue-300 hover:text-white",children:t?"→":"←"})]})}),h.jsx("nav",{className:"flex-1 p-4 overflow-y-auto",children:h.jsx("ul",{className:"space-y-2",children:n.map(r=>h.jsx("li",{children:h.jsxs(a3,{to:r.path,className:({isActive:s})=>`flex items-center px-4 py-3 rounded-lg transition-colors ${s?"bg-blue-800 text-white":"text-blue-200 hover:bg-blue-800 hover:text-white"}`,children:[h.jsx("span",{className:"text-xl mr-3",children:r.icon}),!t&&h.jsx("span",{children:r.label})]})},r.path))})}),!t&&h.jsx("div",{className:"p-4 border-t border-blue-800",children:h.jsxs("div",{className:"bg-blue-800 rounded-lg p-4",children:[h.jsx("p",{className:"text-xs text-blue-300 mb-2",children:"Active Orders"}),h.jsx("p",{className:"text-2xl font-bold",children:"3"})]})})]})}function f3({user:t,userProfile:e}){var o,a;const[n,r]=P.useState(!1),s=di(),i=async()=>{try{await TI(nr),s("/login")}catch(l){console.error("Error logging out:",l)}};return h.jsx("header",{className:"bg-white border-b shadow-sm py-4 px-6 ml-64",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"text",placeholder:"Search your orders...",className:"pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"}),h.jsx("span",{className:"absolute left-3 top-2.5",children:"🔍"})]}),h.jsxs("button",{className:"relative p-2 hover:bg-gray-100 rounded-lg",children:[h.jsx("span",{children:"🔔"}),h.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:"2"})]})]}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsxs("div",{className:"text-right hidden md:block",children:[h.jsx("p",{className:"font-medium text-gray-800",children:(e==null?void 0:e.fullName)||t.email}),h.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),h.jsxs("div",{className:"relative",children:[h.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg",children:[h.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-blue-600 font-semibold",children:((o=e==null?void 0:e.fullName)==null?void 0:o[0])||((a=t.email)==null?void 0:a[0])||"C"})}),h.jsx("span",{children:"▼"})]}),n&&h.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50",children:[h.jsxs("div",{className:"p-4 border-b",children:[h.jsx("p",{className:"font-medium",children:t.email}),h.jsx("p",{className:"text-sm text-gray-500",children:"Customer"})]}),h.jsxs("div",{className:"py-2",children:[h.jsx("a",{href:"/profile",className:"block px-4 py-2 hover:bg-gray-100",children:"👤 My Profile"}),h.jsx("a",{href:"/settings",className:"block px-4 py-2 hover:bg-gray-100",children:"⚙️ Settings"}),h.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100",children:"🆘 Help & Support"})]}),h.jsx("div",{className:"border-t py-2",children:h.jsx("button",{onClick:i,className:"w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600",children:"🚪 Logout"})})]})]})]})]})})}function p3({user:t,userProfile:e}){const[n,r]=P.useState([]),[s,i]=P.useState({totalOrders:0,activeOrders:0,completedOrders:0,totalSpent:0});P.useEffect(()=>{(async()=>{try{const l=nd(Vl(Wt,"deliveries"),fl("customerId","==",t.uid)),u=await h_(l),d=[];u.forEach(f=>{var y,T;const m=f.data();d.push({id:f.id,trackingCode:m.trackingCode,status:m.status,pickupAddress:m.pickupAddress,deliveryAddress:m.deliveryAddress,createdAt:((y=m.createdAt)==null?void 0:y.toDate())||new Date,estimatedDelivery:(T=m.estimatedDelivery)==null?void 0:T.toDate()})}),r(d.slice(0,5)),i({totalOrders:d.length,activeOrders:d.filter(f=>f.status!=="delivered").length,completedOrders:d.filter(f=>f.status==="delivered").length,totalSpent:0})}catch(l){console.error("Error fetching deliveries:",l)}})()},[t.uid]);const o=[{label:"Create Order",icon:"📝",path:"/orders/new",color:"bg-blue-600 hover:bg-blue-700"},{label:"Track Order",icon:"📍",path:"/track",color:"bg-green-600 hover:bg-green-700"},{label:"Live Tracking",icon:"🗺️",path:"/track-map",color:"bg-cyan-600 hover:bg-cyan-700"},{label:"My Orders",icon:"📦",path:"/orders",color:"bg-purple-600 hover:bg-purple-700"}];return h.jsxs("div",{children:[h.jsxs("div",{className:"mb-8",children:[h.jsxs("h1",{className:"text-3xl font-bold text-gray-800",children:["Welcome Back, ",(e==null?void 0:e.fullName)||"Customer","!"]}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Here's an overview of your deliveries and account."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[h.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"p-3 bg-blue-100 rounded-lg mr-4",children:h.jsx("span",{className:"text-2xl",children:"📦"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Total Orders"}),h.jsx("p",{className:"text-3xl font-bold",children:s.totalOrders})]})]})}),h.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg mr-4",children:h.jsx("span",{className:"text-2xl",children:"⏳"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Active Orders"}),h.jsx("p",{className:"text-3xl font-bold",children:s.activeOrders})]})]})}),h.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"p-3 bg-green-100 rounded-lg mr-4",children:h.jsx("span",{className:"text-2xl",children:"✅"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Completed"}),h.jsx("p",{className:"text-3xl font-bold",children:s.completedOrders})]})]})}),h.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"p-3 bg-purple-100 rounded-lg mr-4",children:h.jsx("span",{className:"text-2xl",children:"💰"})}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500",children:"Total Spent"}),h.jsxs("p",{className:"text-3xl font-bold",children:["M",s.totalSpent]})]})]})})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[h.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Quick Actions"}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:o.map((a,l)=>h.jsxs("a",{href:a.path,className:`${a.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`,children:[h.jsx("span",{className:"text-3xl mb-2",children:a.icon}),h.jsx("span",{className:"font-medium",children:a.label})]},l))})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"text-xl font-bold mb-4",children:"Recent Orders"}),n.length===0?h.jsx("p",{className:"text-gray-500 text-center py-8",children:"No orders yet"}):h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b",children:[h.jsx("th",{className:"text-left py-3 px-4",children:"Tracking Code"}),h.jsx("th",{className:"text-left py-3 px-4",children:"Delivery To"}),h.jsx("th",{className:"text-left py-3 px-4",children:"Status"}),h.jsx("th",{className:"text-left py-3 px-4",children:"Date"})]})}),h.jsx("tbody",{children:n.map(a=>h.jsxs("tr",{className:"border-b hover:bg-gray-50",children:[h.jsx("td",{className:"py-3 px-4 font-medium",children:a.trackingCode}),h.jsx("td",{className:"py-3 px-4",children:a.deliveryAddress}),h.jsx("td",{className:"py-3 px-4",children:h.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${a.status==="delivered"?"bg-green-100 text-green-800":a.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:a.status})}),h.jsx("td",{className:"py-3 px-4",children:a.createdAt.toLocaleDateString()})]},a.id))})]})})]})]})}let m3={data:""},g3=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||m3},_3=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,y3=/\/\*[^]*?\*\/|  +/g,TE=/\n+/g,Mr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Mr(o,i):i+"{"+Mr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Mr(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Mr.p?Mr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},zn={},VN=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+VN(t[n]);return e}return t},v3=(t,e,n,r,s)=>{let i=VN(t),o=zn[i]||(zn[i]=(l=>{let u=0,d=11;for(;u<l.length;)d=101*d+l.charCodeAt(u++)>>>0;return"go"+d})(i));if(!zn[o]){let l=i!==t?t:(u=>{let d,f,m=[{}];for(;d=_3.exec(u.replace(y3,""));)d[4]?m.shift():d[3]?(f=d[3].replace(TE," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][d[1]]=d[2].replace(TE," ").trim();return m[0]})(t);zn[o]=Mr(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&zn.g?zn.g:null;return n&&(zn.g=zn[o]),((l,u,d,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=d?l+u.data:u.data+l)})(zn[o],e,r,a),o},w3=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Mr(a,""):a===!1?"":a}return r+s+(o??"")},"");function gd(t){let e=this||{},n=t.call?t(e.p):t;return v3(n.unshift?n.raw?w3(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,g3(e.target),e.g,e.o,e.k)}let FN,vm,wm;gd.bind({g:1});let fr=gd.bind({k:1});function E3(t,e,n,r){Mr.p=e,FN=t,vm=n,wm=r}function Ts(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:vm&&vm()},a),n.o=/ *go\d+/.test(l),a.className=gd.apply(n,r)+(l?" "+l:"");let u=t;return t[0]&&(u=a.as||t,delete a.as),wm&&u[0]&&wm(a),FN(u,a)}return s}}var x3=t=>typeof t=="function",dh=(t,e)=>x3(t)?t(e):t,T3=(()=>{let t=0;return()=>(++t).toString()})(),UN=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),I3=20,W_="default",BN=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return BN(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},nu=[],$N={toasts:[],pausedAt:void 0,settings:{toastLimit:I3}},Rn={},zN=(t,e=W_)=>{Rn[e]=BN(Rn[e]||$N,t),nu.forEach(([n,r])=>{n===e&&r(Rn[e])})},WN=t=>Object.keys(Rn).forEach(e=>zN(t,e)),C3=t=>Object.keys(Rn).find(e=>Rn[e].toasts.some(n=>n.id===t)),_d=(t=W_)=>e=>{zN(e,t)},S3={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},N3=(t={},e=W_)=>{let[n,r]=P.useState(Rn[e]||$N),s=P.useRef(Rn[e]);P.useEffect(()=>(s.current!==Rn[e]&&r(Rn[e]),nu.push([e,r]),()=>{let o=nu.findIndex(([a])=>a===e);o>-1&&nu.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,u;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||S3[o.type],style:{...t.style,...(u=t[o.type])==null?void 0:u.style,...o.style}}});return{...n,toasts:i}},k3=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||T3()}),Gl=t=>(e,n)=>{let r=k3(e,t,n);return _d(r.toasterId||C3(r.id))({type:2,toast:r}),r.id},re=(t,e)=>Gl("blank")(t,e);re.error=Gl("error");re.success=Gl("success");re.loading=Gl("loading");re.custom=Gl("custom");re.dismiss=(t,e)=>{let n={type:3,toastId:t};e?_d(e)(n):WN(n)};re.dismissAll=t=>re.dismiss(void 0,t);re.remove=(t,e)=>{let n={type:4,toastId:t};e?_d(e)(n):WN(n)};re.removeAll=t=>re.remove(void 0,t);re.promise=(t,e,n)=>{let r=re.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?dh(e.success,s):void 0;return i?re.success(i,{id:r,...n,...n==null?void 0:n.success}):re.dismiss(r),s}).catch(s=>{let i=e.error?dh(e.error,s):void 0;i?re.error(i,{id:r,...n,...n==null?void 0:n.error}):re.dismiss(r)}),t};var b3=1e3,R3=(t,e="default")=>{let{toasts:n,pausedAt:r}=N3(t,e),s=P.useRef(new Map).current,i=P.useCallback((f,m=b3)=>{if(s.has(f))return;let y=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,y)},[]);P.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(y=>{if(y.duration===1/0)return;let T=(y.duration||0)+y.pauseDuration-(f-y.createdAt);if(T<0){y.visible&&re.dismiss(y.id);return}return setTimeout(()=>re.dismiss(y.id,e),T)});return()=>{m.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=P.useCallback(_d(e),[e]),a=P.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=P.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),u=P.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=P.useCallback((f,m)=>{let{reverseOrder:y=!1,gutter:T=8,defaultPosition:b}=m||{},R=n.filter(S=>(S.position||b)===(f.position||b)&&S.height),C=R.findIndex(S=>S.id===f.id),E=R.filter((S,O)=>O<C&&S.visible).length;return R.filter(S=>S.visible).slice(...y?[E+1]:[0,E]).reduce((S,O)=>S+(O.height||0)+T,0)},[n]);return P.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:u,calculateOffset:d}}},A3=fr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,P3=fr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D3=fr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,O3=Ts("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${A3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${P3} 0.15s ease-out forwards;
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
    animation: ${D3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L3=fr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M3=Ts("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${L3} 1s linear infinite;
`,j3=fr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,V3=fr`
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
}`,F3=Ts("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${j3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${V3} 0.2s ease-out forwards;
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
`,U3=Ts("div")`
  position: absolute;
`,B3=Ts("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,$3=fr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z3=Ts("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${$3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W3=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?P.createElement(z3,null,e):e:n==="blank"?null:P.createElement(B3,null,P.createElement(M3,{...r}),n!=="loading"&&P.createElement(U3,null,n==="error"?P.createElement(O3,{...r}):P.createElement(F3,{...r})))},q3=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,H3=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,G3="0%{opacity:0;} 100%{opacity:1;}",K3="0%{opacity:1;} 100%{opacity:0;}",Q3=Ts("div")`
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
`,Y3=Ts("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X3=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=UN()?[G3,K3]:[q3(n),H3(n)];return{animation:e?`${fr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${fr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},J3=P.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?X3(t.position||e||"top-center",t.visible):{opacity:0},i=P.createElement(W3,{toast:t}),o=P.createElement(Y3,{...t.ariaProps},dh(t.message,t));return P.createElement(Q3,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):P.createElement(P.Fragment,null,i,o))});E3(P.createElement);var Z3=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=P.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return P.createElement("div",{ref:i,className:e,style:n},s)},e6=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:UN()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},t6=gd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Pc=16,Is=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:u}=R3(n,i);return P.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Pc,left:Pc,right:Pc,bottom:Pc,pointerEvents:"none",...o},className:a,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(d=>{let f=d.position||e,m=u.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),y=e6(f,m);return P.createElement(Z3,{id:d.id,key:d.id,onHeightUpdate:u.updateHeight,className:d.visible?t6:"",style:y},d.type==="custom"?dh(d.message,d):s?s(d):P.createElement(J3,{toast:d,position:f}))}))};function n6(){const[t,e]=P.useState([]),[n,r]=P.useState(!0),[s,i]=P.useState("all");P.useEffect(()=>{o()},[]);const o=async()=>{try{const l=nr.currentUser;if(!l)return;const u=nd(Vl(Wt,"deliveries"),fl("customerId","==",l.uid)),d=await h_(u),f=[];d.forEach(m=>{var T,b;const y=m.data();f.push({id:m.id,trackingCode:y.trackingCode,status:y.status,pickupAddress:y.pickupAddress,deliveryAddress:y.deliveryAddress,createdAt:((T=y.createdAt)==null?void 0:T.toDate())||new Date,estimatedDelivery:(b=y.estimatedDelivery)==null?void 0:b.toDate()})}),f.sort((m,y)=>y.createdAt.getTime()-m.createdAt.getTime()),e(f),r(!1)}catch(l){console.error("Error fetching orders:",l),re.error("Failed to load orders"),r(!1)}},a=t.filter(l=>s==="all"?!0:s==="pending"?l.status==="pending":s==="active"?l.status==="assigned"||l.status==="in_transit":s==="completed"?l.status==="delivered":!0);return h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Orders"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"View and track all your deliveries"})]}),h.jsx("div",{className:"bg-white rounded-xl shadow p-6 mb-6",children:h.jsxs("div",{className:"flex flex-wrap gap-3",children:[h.jsxs("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["All Orders (",t.length,")"]}),h.jsx("button",{onClick:()=>i("pending"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="pending"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Pending"}),h.jsx("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="active"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"In Transit"}),h.jsx("button",{onClick:()=>i("completed"),className:`px-4 py-2 rounded-lg font-medium transition ${s==="completed"?"bg-green-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:"Completed"})]})}),n?h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Loading your orders..."})]}):a.length===0?h.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:h.jsx("p",{className:"text-gray-500 text-lg",children:"No orders found"})}):h.jsx("div",{className:"space-y-4",children:a.map(l=>h.jsx(md,{to:`/orders/${l.id}`,className:"bg-white rounded-xl shadow p-6 hover:shadow-lg transition",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center space-x-4 mb-2",children:[h.jsx("h3",{className:"text-lg font-bold",children:l.trackingCode}),h.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${l.status==="delivered"?"bg-green-100 text-green-800":l.status==="in_transit"?"bg-blue-100 text-blue-800":l.status==="pending"?"bg-yellow-100 text-yellow-800":"bg-gray-100 text-gray-800"}`,children:l.status})]}),h.jsxs("p",{className:"text-gray-600",children:["To: ",l.deliveryAddress]}),h.jsxs("p",{className:"text-sm text-gray-500 mt-2",children:["Ordered on ",l.createdAt.toLocaleDateString()]})]}),h.jsx("div",{className:"text-right",children:h.jsx("span",{className:"text-2xl",children:"→"})})]})},l.id))})]})}function r6(){const{id:t}=DF(),e=di(),[n,r]=P.useState(null),[s,i]=P.useState(!0);if(P.useEffect(()=>{(async()=>{var l,u,d;try{if(!t)return;const f=er(Wt,"deliveries",t),m=await Ul(f);if(m.exists()){const y=m.data();r({id:m.id,trackingCode:y.trackingCode,status:y.status,pickupAddress:y.pickupAddress,deliveryAddress:y.deliveryAddress,packageDetails:y.packageDetails,carrierName:y.carrierName,createdAt:((l=y.createdAt)==null?void 0:l.toDate())||new Date,estimatedDelivery:(u=y.estimatedDelivery)==null?void 0:u.toDate(),actualDelivery:(d=y.actualDelivery)==null?void 0:d.toDate(),currentLocation:y.currentLocation})}else re.error("Order not found"),e("/orders")}catch(f){console.error("Error fetching order:",f),re.error("Failed to load order details")}finally{i(!1)}})()},[t,e]),s)return h.jsx("div",{className:"flex items-center justify-center min-h-screen",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Loading order details..."})]})});if(!n)return h.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:h.jsx("p",{className:"text-gray-500 text-lg",children:"Order not found"})});const o=()=>{const a=["pending","assigned","picked_up","in_transit","delivered"];return a.map((l,u)=>({step:l,completed:a.indexOf(n.status)>=u}))};return h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsx("button",{onClick:()=>e("/orders"),className:"mb-6 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg font-medium",children:"← Back to Orders"}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[h.jsx("div",{className:"bg-white rounded-xl shadow p-6",children:h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-bold",children:n.trackingCode}),h.jsxs("p",{className:"text-gray-600 mt-2",children:["Ordered on ",n.createdAt.toLocaleDateString()]})]}),h.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]})}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"text-xl font-bold mb-6",children:"Delivery Progress"}),h.jsx("div",{className:"flex items-center justify-between",children:o().map((a,l)=>h.jsxs("div",{className:"flex flex-col items-center flex-1",children:[h.jsx("div",{className:`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 ${a.completed?"bg-blue-600 text-white":"bg-gray-200 text-gray-600"}`,children:a.completed?"✓":l+1}),h.jsx("p",{className:`text-sm text-center ${a.completed?"text-blue-600":"text-gray-500"}`,children:a.step}),l<o().length-1&&h.jsx("div",{className:`h-1 w-full mx-2 mt-4 ${a.completed?"bg-blue-600":"bg-gray-200"}`})]},l))})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"text-xl font-bold mb-4",children:"Delivery Details"}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Pickup Address"}),h.jsx("p",{className:"text-gray-800 font-medium",children:n.pickupAddress})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Delivery Address"}),h.jsx("p",{className:"text-gray-800 font-medium",children:n.deliveryAddress})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Package Details"}),h.jsx("p",{className:"text-gray-800 font-medium",children:n.packageDetails})]}),n.carrierName&&h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Carrier"}),h.jsx("p",{className:"text-gray-800 font-medium",children:n.carrierName})]}),n.estimatedDelivery&&h.jsxs("div",{children:[h.jsx("p",{className:"text-sm text-gray-500 mb-1",children:"Estimated Delivery"}),h.jsx("p",{className:"text-gray-800 font-medium",children:n.estimatedDelivery.toLocaleDateString()})]})]})]})]}),h.jsxs("div",{className:"space-y-6",children:[n.status!=="delivered"&&h.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[h.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),h.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Carrier"}),h.jsx("button",{className:"w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 font-medium",children:"💬 Chat Support"})]}),n.status==="delivered"&&n.actualDelivery&&h.jsxs("div",{className:"bg-green-50 rounded-xl p-6 border border-green-200",children:[h.jsx("h3",{className:"font-bold mb-2",children:"✓ Delivered"}),h.jsxs("p",{className:"text-sm text-green-800",children:["Your package was delivered on"," ",n.actualDelivery.toLocaleDateString()]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"font-bold mb-4",children:"Actions"}),h.jsx("button",{className:"w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium mb-2",children:"📱 Share Tracking"}),h.jsx("button",{className:"w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium",children:"🖨️ Print Receipt"})]})]})]})]})}function IE({value:t,onChange:e,onSelect:n,placeholder:r="Enter address..."}){const[s,i]=P.useState([]),o=P.useRef(null),a=P.useRef(null),l=P.useRef(null);P.useEffect(()=>{window.google&&window.google.maps&&(a.current=new window.google.maps.places.AutocompleteService,l.current=new window.google.maps.places.PlacesService(document.createElement("div")))},[]);const u=f=>{const m=f.target.value;e(m),m.length>2&&a.current?a.current.getPlacePredictions({input:m,componentRestrictions:{country:"ls"}},y=>{i(y||[])}):i([])},d=(f,m)=>{e(m),i([]),n&&l.current&&l.current.getDetails({placeId:f},y=>{n(y)})};return h.jsxs("div",{className:"relative",children:[h.jsx("input",{ref:o,type:"text",value:t,onChange:u,placeholder:r,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),s.length>0&&h.jsx("div",{className:"absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50",children:s.map((f,m)=>h.jsxs("button",{onClick:()=>d(f.place_id,f.description),className:"w-full text-left px-4 py-2 hover:bg-gray-100 border-b last:border-b-0",children:[h.jsx("p",{className:"font-medium text-sm",children:f.main_text}),h.jsx("p",{className:"text-xs text-gray-500",children:f.secondary_text})]},m))})]})}const Of=30*60*1e3,s6=()=>{const t=P.useRef(null),e=P.useRef(new Map),n=P.useCallback(()=>{var a;return!t.current&&((a=window.google)!=null&&a.maps)&&(t.current=new window.google.maps.Geocoder),t.current},[]),r=P.useCallback(()=>{const a=Date.now();for(const[l,u]of e.current.entries())a-u.timestamp>Of&&e.current.delete(l)},[]),s=P.useCallback(async(a,l="ls")=>{if(!a.trim())return null;const u=`${a}-${l}`,d=e.current.get(u);return d&&Date.now()-d.timestamp<Of?d:new Promise(f=>{try{const m=n();if(!m){console.warn("Geocoder not available"),f(null);return}m.geocode({address:a.trim(),componentRestrictions:{country:l}},(y,T)=>{if(T==="OK"&&(y!=null&&y[0])){const b={lat:y[0].geometry.location.lat(),lng:y[0].geometry.location.lng(),address:y[0].formatted_address};e.current.set(u,{...b,timestamp:Date.now()}),f(b)}else console.warn("Geocoding failed:",T),f(null)})}catch(m){console.error("Geocoder error:",m),f(null)}})},[n]),i=P.useCallback(async(a,l)=>{const u=`${a}-${l}-reverse`,d=e.current.get(u);return d&&Date.now()-d.timestamp<Of?d.address:new Promise(f=>{try{const m=n();if(!m){f(null);return}m.geocode({location:{lat:a,lng:l}},(y,T)=>{if(T==="OK"&&(y!=null&&y[0])){const b=y[0].formatted_address;e.current.set(u,{lat:a,lng:l,address:b,timestamp:Date.now()}),f(b)}else console.warn("Reverse geocoding failed:",T),f(null)})}catch(m){console.error("Reverse geocoder error:",m),f(null)}})},[n]),o=P.useCallback(()=>{e.current.clear()},[]);return{geocodeAddress:s,reverseGeocode:i,clearCache:o,clearExpiredCache:r}};function i6({user:t}){const e=di(),{geocodeAddress:n}=s6(),[r,s]=P.useState({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),[i,o]=P.useState(!0),[a,l]=P.useState(!1),[u,d]=P.useState(!1);P.useEffect(()=>{(async()=>{try{if(!t)return;const M=await Ul(er(Wt,"users",t.uid));if(M.exists()){const w=M.data();s(_=>({..._,pickupContactName:w.fullName||_.pickupContactName,pickupContactPhone:w.phone||_.pickupContactPhone,pickupAddress:w.address||_.pickupAddress}))}}catch(M){console.error("Error fetching user profile:",M)}finally{o(!1)}})()},[t]);const f=async j=>{const M=await n(j,"ls");return M?{lat:M.lat,lng:M.lng,address:M.address}:null},m=j=>{const{name:M,value:w,type:_}=j.target;if(_==="checkbox"){const x=j.target.checked;s(N=>({...N,[M]:x}))}else s(_==="number"?x=>({...x,[M]:w===""?"":Number(w)}):x=>({...x,[M]:w}))},y=async j=>{if(s(M=>({...M,pickupAddress:j,pickupCoordinates:null})),j.length>10){const M=await f(j);M&&s(w=>({...w,pickupCoordinates:M}))}},T=async j=>{if(s(M=>({...M,deliveryAddress:j,deliveryCoordinates:null})),j.length>10){const M=await f(j);M&&s(w=>({...w,deliveryCoordinates:M}))}},b=()=>{const j="PTR",M=Math.floor(1e5+Math.random()*9e5);return`${j}-${M}`},R=()=>r.packageDescription?!r.pickupAddress||!r.deliveryAddress?(re.error("Pickup and delivery addresses are required"),!1):!r.deliveryContactName||!r.deliveryContactPhone?(re.error("Delivery contact information is required"),!1):!0:(re.error("Package description is required"),!1),C=(j,M,w,_)=>{const N=(w-j)*Math.PI/180,k=(_-M)*Math.PI/180,A=Math.sin(N/2)*Math.sin(N/2)+Math.cos(j*Math.PI/180)*Math.cos(w*Math.PI/180)*Math.sin(k/2)*Math.sin(k/2);return 6371*(2*Math.atan2(Math.sqrt(A),Math.sqrt(1-A)))},E=j=>j<10?"Same day":j<50?"1 day":"1-2 days",S=(j,M)=>{const w=j||100,_=M*10,x=Math.round(w*.15);return Math.max(50,x+_)},O=async j=>{if(j.preventDefault(),!!R()){l(!0),d(!0);try{let M=r.pickupCoordinates,w=r.deliveryCoordinates;M||(M=await f(r.pickupAddress)),w||(w=await f(r.deliveryAddress)),d(!1),(!M||!w)&&re.error("Unable to get coordinates for addresses. Order will be created without location data.",{duration:5e3});const _=b();let x=0,N="1-2 days",k=0;M&&w&&(x=C(M.lat,M.lng,w.lat,w.lng),N=E(x),k=S(r.packageValue?Number(r.packageValue):0,x));const A={trackingCode:_,status:"pending",priority:r.priority,customerId:t.uid,customerEmail:t.email||"",customerName:r.pickupContactName||"",customerPhone:r.pickupContactPhone||"",packageDescription:r.packageDescription,packageWeight:r.packageWeight?Number(r.packageWeight):null,packageValue:r.packageValue?Number(r.packageValue):null,packageDimensions:r.packageDimensions,pickupAddress:r.pickupAddress,pickupLocation:M?{lat:M.lat,lng:M.lng,address:M.address,timestamp:fe.now()}:null,pickupContactName:r.pickupContactName,pickupContactPhone:r.pickupContactPhone,pickupInstructions:r.pickupInstructions,pickupDateTime:fe.fromDate(new Date(`${r.pickupDate}T${r.pickupTime}`)),deliveryAddress:r.deliveryAddress,deliveryLocation:w?{lat:w.lat,lng:w.lng,address:w.address,timestamp:fe.now()}:null,deliveryContactName:r.deliveryContactName,deliveryContactPhone:r.deliveryContactPhone,deliveryInstructions:r.deliveryInstructions,deliveryDate:fe.fromDate(new Date(r.deliveryDate)),deliveryTimeWindow:r.deliveryTimeWindow,distance:x>0?Math.round(x*100)/100:null,estimatedDeliveryTime:N,estimatedEarnings:k,carrierId:null,carrierEmail:null,carrierName:null,assignedAt:null,paymentMethod:r.paymentMethod,paymentAmount:r.paymentAmount?Number(r.paymentAmount):k,paymentStatus:"pending",isFragile:r.isFragile,requiresSignature:r.requiresSignature,insuranceRequired:r.insuranceRequired,notes:r.notes,createdAt:If(),updatedAt:If(),createdBy:t.uid,proofOfDelivery:{otp:null,verified:!1,verifiedAt:null,photoUrl:null,signatureUrl:null},currentLocation:M?{lat:M.lat,lng:M.lng,timestamp:fe.now(),address:r.pickupAddress,locationType:"pickup_point",status:"waiting_for_pickup"}:null,locationHistory:M?[{lat:M.lat,lng:M.lng,timestamp:fe.now(),status:"created_at_pickup",address:r.pickupAddress}]:[],milestones:{created:If(),assigned:null,pickedUp:null,inTransit:null,outForDelivery:null,delivered:null}},I=await pM(Vl(Wt,"deliveries"),A),de=h.jsxs("div",{children:[h.jsx("p",{className:"font-bold",children:"✅ Order Created Successfully!"}),h.jsxs("div",{className:"mt-2 space-y-1",children:[h.jsxs("p",{className:"text-sm",children:[h.jsx("span",{className:"font-semibold",children:"Tracking Code:"})," ",_]}),x>0&&h.jsxs("p",{className:"text-sm",children:[h.jsx("span",{className:"font-semibold",children:"Distance:"})," ",x.toFixed(1)," km"]}),M&&w&&h.jsx("p",{className:"text-sm text-green-600",children:"✓ Location tracking initialized at pickup point"}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Package location is set to pickup address until carrier picks it up."})]})]});re.success(de,{duration:6e3}),s({packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",priority:"standard",paymentMethod:"card_prepaid",paymentAmount:"",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),setTimeout(()=>{e(`/orders/${I.id}`)},2e3)}catch(M){console.error("Error creating order:",M),re.error(`Failed to create order: ${M.message}`)}finally{l(!1),d(!1)}}};return i?h.jsxs("div",{className:"flex justify-center items-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),h.jsx("p",{className:"ml-4 text-gray-600",children:"Loading profile..."})]}):h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[h.jsx(Is,{position:"top-right"}),h.jsx("div",{className:"mb-8",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Create New Order"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Fill in delivery details. Package location will start at pickup address."})]}),h.jsx("button",{onClick:()=>e("/orders"),className:"px-4 py-2 text-sm text-gray-600 hover:text-gray-800",children:"← Back to Orders"})]})}),h.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3",children:h.jsx("span",{className:"text-white text-sm",children:"📍"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-blue-800",children:"Location Tracking"}),h.jsx("p",{className:"text-sm text-blue-700",children:"Package location will be initialized at the pickup address and updated as the carrier moves."})]})]})}),h.jsxs("form",{onSubmit:O,className:"space-y-8",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[h.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[h.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"1"}),h.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Package Information"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Package Description *"}),h.jsx("textarea",{name:"packageDescription",value:r.packageDescription,onChange:m,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Describe what's being delivered (e.g., Documents, Electronics, Food, etc.)",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg)"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"number",name:"packageWeight",value:r.packageWeight,onChange:m,step:"0.1",min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 2.5"}),h.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"kg"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Dimensions (L×W×H cm)"}),h.jsx("input",{type:"text",name:"packageDimensions",value:r.packageDimensions,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 30×20×15"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Declared Value (M)"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"number",name:"packageValue",value:r.packageValue,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 500"}),h.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Priority Level"}),h.jsxs("select",{name:"priority",value:r.priority,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[h.jsx("option",{value:"standard",children:"Standard (1-2 days)"}),h.jsx("option",{value:"express",children:"Express (Same day)"}),h.jsx("option",{value:"urgent",children:"Urgent (Within hours)"})]})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[h.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[h.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"2"}),h.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Pickup Details (Start Location)"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Address *"}),h.jsx(IE,{value:r.pickupAddress,onChange:y,placeholder:"Start typing address..."}),r.pickupCoordinates&&h.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[h.jsx("span",{className:"mr-2",children:"✓"}),h.jsxs("span",{children:["Coordinates ready: ",r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Name *"}),h.jsx("input",{type:"text",name:"pickupContactName",value:r.pickupContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Phone *"}),h.jsx("input",{type:"tel",name:"pickupContactPhone",value:r.pickupContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Date"}),h.jsx("input",{type:"date",name:"pickupDate",value:r.pickupDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Time"}),h.jsx("input",{type:"time",name:"pickupTime",value:r.pickupTime,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Instructions"}),h.jsx("textarea",{name:"pickupInstructions",value:r.pickupInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for pickup (e.g., call before arrival, etc.)"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[h.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[h.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"3"}),h.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Delivery Details (Destination)"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Address *"}),h.jsx(IE,{value:r.deliveryAddress,onChange:T,placeholder:"Start typing address..."}),r.deliveryCoordinates&&h.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[h.jsx("span",{className:"mr-2",children:"✓"}),h.jsxs("span",{children:["Coordinates ready: ",r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Name *"}),h.jsx("input",{type:"text",name:"deliveryContactName",value:r.deliveryContactName,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Phone *"}),h.jsx("input",{type:"tel",name:"deliveryContactPhone",value:r.deliveryContactPhone,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Date"}),h.jsx("input",{type:"date",name:"deliveryDate",value:r.deliveryDate,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Window"}),h.jsxs("select",{name:"deliveryTimeWindow",value:r.deliveryTimeWindow,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[h.jsx("option",{value:"09:00-17:00",children:"9:00 AM - 5:00 PM"}),h.jsx("option",{value:"08:00-16:00",children:"8:00 AM - 4:00 PM"}),h.jsx("option",{value:"10:00-18:00",children:"10:00 AM - 6:00 PM"}),h.jsx("option",{value:"anytime",children:"Anytime"})]})]}),h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Instructions"}),h.jsx("textarea",{name:"deliveryInstructions",value:r.deliveryInstructions,onChange:m,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for delivery (e.g., leave at reception, etc.)"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[h.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[h.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"4"}),h.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Special Requirements & Payment"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Payment Information"}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Method"}),h.jsxs("select",{name:"paymentMethod",value:r.paymentMethod,onChange:m,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[h.jsx("option",{value:"card_prepaid",children:"Card Prepaid"}),h.jsx("option",{value:"cash_on_delivery",children:"Cash on Delivery"}),h.jsx("option",{value:"mobile_money",children:"Mobile Money"}),h.jsx("option",{value:"bank_transfer",children:"Bank Transfer"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Amount (M)"}),h.jsxs("div",{className:"relative",children:[h.jsx("input",{type:"number",name:"paymentAmount",value:r.paymentAmount,onChange:m,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Leave blank for auto-calculation"}),h.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave blank to auto-calculate based on distance and package value"})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Special Requirements"}),h.jsxs("div",{className:"space-y-4 mb-6",children:[h.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[h.jsx("input",{type:"checkbox",id:"isFragile",name:"isFragile",checked:r.isFragile,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),h.jsxs("label",{htmlFor:"isFragile",className:"ml-3 text-gray-700",children:[h.jsx("span",{className:"font-medium",children:"Fragile items"}),h.jsx("span",{className:"block text-sm text-gray-500",children:"Handle with care"})]})]}),h.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[h.jsx("input",{type:"checkbox",id:"requiresSignature",name:"requiresSignature",checked:r.requiresSignature,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),h.jsxs("label",{htmlFor:"requiresSignature",className:"ml-3 text-gray-700",children:[h.jsx("span",{className:"font-medium",children:"Signature required"}),h.jsx("span",{className:"block text-sm text-gray-500",children:"Upon delivery"})]})]}),h.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[h.jsx("input",{type:"checkbox",id:"insuranceRequired",name:"insuranceRequired",checked:r.insuranceRequired,onChange:m,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),h.jsxs("label",{htmlFor:"insuranceRequired",className:"ml-3 text-gray-700",children:[h.jsx("span",{className:"font-medium",children:"Insurance required"}),h.jsx("span",{className:"block text-sm text-gray-500",children:"For high-value items"})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes"}),h.jsx("textarea",{name:"notes",value:r.notes,onChange:m,rows:4,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Any additional information or special requests..."})]})]})]})]}),(r.pickupCoordinates||r.deliveryCoordinates)&&h.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6",children:[h.jsxs("h3",{className:"text-lg font-semibold text-green-800 mb-4 flex items-center",children:[h.jsx("span",{className:"mr-2",children:"✅"}),"Location Tracking Ready"]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[r.pickupCoordinates&&h.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[h.jsx("div",{className:"font-medium text-green-700 mb-1",children:"📍 Pickup Location"}),h.jsxs("div",{className:"text-sm text-gray-600",children:[h.jsx("div",{className:"truncate",children:r.pickupAddress}),h.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.pickupCoordinates.lat.toFixed(6),","," ",r.pickupCoordinates.lng.toFixed(6)]})]})]}),r.deliveryCoordinates&&h.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[h.jsx("div",{className:"font-medium text-green-700 mb-1",children:"🎯 Delivery Location"}),h.jsxs("div",{className:"text-sm text-gray-600",children:[h.jsx("div",{className:"truncate",children:r.deliveryAddress}),h.jsxs("div",{className:"text-xs font-mono mt-1",children:[r.deliveryCoordinates.lat.toFixed(6),","," ",r.deliveryCoordinates.lng.toFixed(6)]})]})]})]}),h.jsx("p",{className:"text-sm text-green-700 mt-4",children:"Package location will start at pickup coordinates and update as the carrier moves."})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6",children:h.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[h.jsx("div",{children:r.pickupCoordinates&&r.deliveryCoordinates&&h.jsx("p",{className:"text-sm text-green-600",children:"✓ Ready for location-based tracking"})}),h.jsxs("div",{className:"flex space-x-4",children:[h.jsx("button",{type:"button",onClick:()=>e("/orders"),className:"px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition",children:"Cancel"}),h.jsx("button",{type:"submit",disabled:a,className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md",children:a?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),u?"Getting coordinates...":"Creating Order..."]}):h.jsxs(h.Fragment,{children:[h.jsx("span",{className:"mr-2",children:"📦"}),"Create Order"]})})]})]})})]}),h.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[h.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4",children:[h.jsx("div",{className:"text-blue-600 font-medium mb-2",children:"📍 Location Tracking"}),h.jsx("p",{className:"text-sm text-blue-700",children:"Package location starts at pickup address and updates automatically as the carrier moves."})]}),h.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-xl p-4",children:[h.jsx("div",{className:"text-green-600 font-medium mb-2",children:"💰 Pricing"}),h.jsx("p",{className:"text-sm text-green-700",children:"Distance-based calculation: M10 per km + 15% of package value (minimum M50)."})]}),h.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-xl p-4",children:[h.jsx("div",{className:"text-purple-600 font-medium mb-2",children:"🚚 Carrier Assignment"}),h.jsx("p",{className:"text-sm text-purple-700",children:"Auto-assigns nearest available carrier. OTP verification included."})]})]})]})}function o6(){const[t,e]=P.useState(""),[n,r]=P.useState(null),[s,i]=P.useState(!1),o=async a=>{var l;if(a.preventDefault(),!t.trim()){re.error("Please enter a tracking code");return}i(!0);try{const u=nd(Vl(Wt,"deliveries"),fl("trackingCode","==",t.toUpperCase())),d=await h_(u);if(d.empty)re.error("Tracking code not found"),r(null);else{const f=d.docs[0],m=f.data();r({id:f.id,trackingCode:m.trackingCode,status:m.status,deliveryAddress:m.deliveryAddress,carrierName:m.carrierName,estimatedDelivery:(l=m.estimatedDelivery)==null?void 0:l.toDate()}),re.success("Order found!")}}catch(u){console.error("Error tracking order:",u),re.error("Failed to track order")}finally{i(!1)}};return h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Order"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Enter your tracking code to get real-time updates"})]}),h.jsx(md,{to:"/track-map",className:"px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 font-medium flex items-center gap-2 h-fit",children:"🗺️ View Live Map"})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[h.jsx("form",{onSubmit:o,children:h.jsxs("div",{className:"flex gap-4",children:[h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:t,onChange:a=>e(a.target.value),placeholder:"e.g., PTR-001234",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono text-lg",disabled:s})}),h.jsx("button",{type:"submit",disabled:s,className:"px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Tracking...":"Track"})]})}),h.jsxs("div",{className:"mt-6 pt-6 border-t",children:[h.jsx("p",{className:"text-sm text-gray-600 mb-3",children:"Recent Searches"}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[h.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-001"}),h.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-045"}),h.jsx("button",{className:"px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm",children:"PTR-089"})]})]})]}),n&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{children:[h.jsx("h2",{className:"text-2xl font-bold",children:n.trackingCode}),h.jsxs("p",{className:"text-gray-600 mt-1",children:["Destination: ",n.deliveryAddress]})]}),h.jsx("span",{className:`px-4 py-2 rounded-full text-lg font-medium ${n.status==="delivered"?"bg-green-100 text-green-800":n.status==="in_transit"?"bg-blue-100 text-blue-800":"bg-yellow-100 text-yellow-800"}`,children:n.status})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0",children:h.jsx("span",{className:"text-blue-600 text-lg",children:"✓"})}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium",children:"Order Received"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Your order has been received"})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status!=="pending"?"bg-blue-100":"bg-gray-200"}`,children:h.jsx("span",{className:`text-lg ${n.status!=="pending"?"text-blue-600":"text-gray-400"}`,children:n.status!=="pending"?"✓":"2"})}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium",children:n.carrierName?`Assigned to ${n.carrierName}`:"Waiting for Carrier"}),h.jsx("p",{className:"text-sm text-gray-500",children:n.carrierName?"Your carrier has been assigned":"Waiting for a carrier to pick up"})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="in_transit"||n.status==="delivered"?"bg-blue-100":"bg-gray-200"}`,children:h.jsx("span",{className:n.status==="in_transit"||n.status==="delivered"?"text-blue-600 text-lg":"text-gray-400",children:n.status==="in_transit"||n.status==="delivered"?"✓":"3"})}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium",children:"In Transit"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Your package is on its way"})]})]}),h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${n.status==="delivered"?"bg-green-100":"bg-gray-200"}`,children:h.jsx("span",{className:n.status==="delivered"?"text-green-600 text-lg":"text-gray-400",children:n.status==="delivered"?"✓":"4"})}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium",children:"Delivered"}),h.jsx("p",{className:"text-sm text-gray-500",children:n.estimatedDelivery?`Estimated: ${n.estimatedDelivery.toLocaleDateString()}`:"Delivery in progress"})]})]})]})]}),h.jsxs("div",{className:"bg-blue-50 rounded-xl p-6 border border-blue-200",children:[h.jsx("h3",{className:"font-bold mb-4",children:"Need Help?"}),h.jsx("p",{className:"text-gray-700 mb-4",children:"If you have any questions about your delivery, our support team is here to help."}),h.jsx("button",{className:"w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium",children:"📞 Contact Support"})]})]}),!n&&t&&!s&&h.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:h.jsx("p",{className:"text-gray-600",children:"Enter a tracking code and click Track to see order details"})})]})}function a6({user:t}){const[e,n]=P.useState([]),[r,s]=P.useState({}),[i,o]=P.useState(!1),[a,l]=P.useState(null),[u,d]=P.useState(null),[f,m]=P.useState(!0),y=P.useRef(null),T=P.useRef(null),b=P.useRef(new Map),R=P.useRef(null),C=P.useRef(null),E=P.useRef(null),S={lat:-29.31,lng:27.48};P.useEffect(()=>{const _=()=>{var k;return(k=window.google)!=null&&k.maps?(console.log("✅ Google Maps API is loaded"),o(!0),!0):!1};if(_())return;const x=()=>{_()&&window.removeEventListener("mapsReady",x)};window.addEventListener("mapsReady",x);const N=setTimeout(()=>{var k;(k=window.google)!=null&&k.maps||(window.removeEventListener("mapsReady",x),l("Google Maps failed to load. Please refresh the page."))},15e3);return()=>{window.removeEventListener("mapsReady",x),clearTimeout(N)}},[]),P.useEffect(()=>{if(!(t!=null&&t.uid))return;m(!0);const _=nd(Vl(Wt,"deliveries"),fl("customerId","==",t.uid),fl("status","in",["assigned","picked_up","in_transit","out_for_delivery","delivered"])),x=mM(_,A=>{const I=[];A.forEach(de=>{const xe=de.data(),st=r[de.id],rn=st?{lat:st.lat,lng:st.lng,timestamp:new Date(st.timestamp)}:xe.currentLocation;I.push({id:de.id,trackingCode:xe.trackingCode,status:xe.status,pickupAddress:xe.pickupAddress,deliveryAddress:xe.deliveryAddress,estimatedDeliveryTime:xe.estimatedDeliveryTime,distance:xe.distance,currentLocation:rn,pickupLocation:xe.pickupLocation,deliveryLocation:xe.deliveryLocation,carrierName:xe.carrierName,deliveryContactName:xe.deliveryContactName,deliveryDate:xe.deliveryDate})}),n(I),m(!1),I.length>0&&!u&&d(I[0].id)},A=>{console.error("Error loading deliveries:",A),m(!1)}),N=m4(sF,"deliveryTracks"),k=_4(N,A=>{const I=A.val()||{};s(I)});return()=>{x();try{k&&k()}catch{}}},[t==null?void 0:t.uid,r]),P.useEffect(()=>{if(!(!i||!window.google||!y.current)){console.log("🔄 Initializing Tracking Map...");try{const _={center:S,zoom:12,mapTypeId:window.google.maps.MapTypeId.ROADMAP,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!0,rotateControl:!1,fullscreenControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},x=new window.google.maps.Map(y.current,_);T.current=x,console.log("✅ Tracking Map initialized successfully"),b.current=new Map,l(null)}catch(_){console.error("❌ Error initializing map:",_),l("Failed to initialize map. Please check console for details.")}}},[i]);const O=P.useCallback(()=>{if(!T.current||!window.google||!i||!u)return;const _=e.find(I=>I.id===u);if(!_)return;const x=[];_.pickupLocation&&x.push({id:`pickup-${_.id}`,type:"pickup",lat:_.pickupLocation.lat,lng:_.pickupLocation.lng,title:"Pickup Location",content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #059669; font-size: 14px; font-weight: 600;">📍 Pickup Point</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${_.pickupAddress}</p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${_.pickupLocation.lat.toFixed(4)}, ${_.pickupLocation.lng.toFixed(4)}
            </p>
          </div>
        `,deliveryId:_.id}),_.currentLocation&&x.push({id:`current-${_.id}`,type:"current",lat:_.currentLocation.lat,lng:_.currentLocation.lng,title:`Order: ${_.trackingCode}`,content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${_.trackingCode}</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
              Status: <strong>${_.status.replace(/_/g," ")}</strong>
            </p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              📍 ${_.currentLocation.address||"Current location"}
            </p>
            ${_.carrierName?`<p style="margin: 0 0 5px 0; font-size: 11px; color: #6B7280;">
                Carrier: ${_.carrierName}
              </p>`:""}
            ${_.estimatedDeliveryTime?`<p style="margin: 0; font-size: 11px; color: #059669; font-weight: 600;">
                Delivery: ${_.estimatedDeliveryTime}
              </p>`:""}
          </div>
        `,deliveryId:_.id}),_.deliveryLocation&&x.push({id:`delivery-${_.id}`,type:"delivery",lat:_.deliveryLocation.lat,lng:_.deliveryLocation.lng,title:"Delivery Location",content:`
          <div style="padding: 10px; min-width: 220px; font-family: system-ui;">
            <h3 style="margin: 0 0 5px 0; color: #DC2626; font-size: 14px; font-weight: 600;">🎯 Delivery Destination</h3>
            <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${_.deliveryAddress}</p>
            <p style="margin: 0 0 5px 0; font-size: 11px;">
              Recipient: <strong>${_.deliveryContactName}</strong>
            </p>
            <p style="margin: 0; font-size: 11px; color: #6B7280;">
              ${_.deliveryLocation.lat.toFixed(4)}, ${_.deliveryLocation.lng.toFixed(4)}
            </p>
          </div>
        `,deliveryId:_.id});const N=new Set(b.current.keys()),k=new Set(x.map(I=>I.id));for(const I of N)if(!k.has(I)){const de=b.current.get(I);de&&(de.setMap(null),b.current.delete(I))}const A=[];if(x.forEach(I=>{const de=b.current.get(I.id),xe={lat:I.lat,lng:I.lng};let st;if(de)de.setPosition(xe),st=de;else try{const rn=I.type==="pickup"?"#059669":I.type==="delivery"?"#DC2626":"#3B82F6",z={path:window.google.maps.SymbolPath.CIRCLE,fillColor:rn,fillOpacity:1,strokeColor:"#FFFFFF",strokeWeight:2,scale:I.type==="current"?12:9};st=new window.google.maps.Marker({position:xe,map:T.current,icon:z,title:I.title}),st.addListener("click",()=>{C.current||(C.current=new window.google.maps.InfoWindow),C.current.setContent(I.content),C.current.open(T.current,st)}),b.current.set(I.id,st)}catch(rn){console.error("Error creating marker:",rn);return}A.push(st)}),E.current&&E.current.setMap(null),_.pickupLocation&&_.currentLocation&&_.deliveryLocation){const I=[{lat:_.pickupLocation.lat,lng:_.pickupLocation.lng}];_.currentLocation&&I.push({lat:_.currentLocation.lat,lng:_.currentLocation.lng}),I.push({lat:_.deliveryLocation.lat,lng:_.deliveryLocation.lng}),E.current=new window.google.maps.Polyline({path:I,geodesic:!0,strokeColor:"#3B82F6",strokeOpacity:.7,strokeWeight:3,map:T.current})}if(A.length>0){const I=new window.google.maps.LatLngBounds;A.forEach(de=>{I.extend(de.getPosition())}),I.isEmpty()||T.current.fitBounds(I,50)}},[e,u,i]);P.useEffect(()=>(R.current&&clearTimeout(R.current),R.current=setTimeout(()=>{O()},300),()=>{R.current&&clearTimeout(R.current)}),[e,u,i,O]);const j=_=>{const x=e.find(N=>N.id===_);x!=null&&x.currentLocation&&T.current&&(T.current.setCenter({lat:x.currentLocation.lat,lng:x.currentLocation.lng}),T.current.setZoom(16))},M=_=>{switch(_){case"assigned":return"bg-blue-50 border-blue-200 text-blue-700";case"picked_up":return"bg-purple-50 border-purple-200 text-purple-700";case"in_transit":return"bg-amber-50 border-amber-200 text-amber-700";case"out_for_delivery":return"bg-blue-50 border-blue-200 text-blue-700";case"delivered":return"bg-green-50 border-green-200 text-green-700";default:return"bg-gray-50 border-gray-200 text-gray-700"}},w=_=>{switch(_){case"assigned":return"📋";case"picked_up":return"📦";case"in_transit":return"🚚";case"out_for_delivery":return"🚗";case"delivered":return"✅";default:return"📍"}};return i?a?h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[h.jsx("div",{className:"text-6xl mb-4",children:"🗺️"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Map Error"}),h.jsx("p",{className:"text-red-600 mb-4",children:a}),h.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Refresh Page"})]}):f?h.jsxs("div",{className:"flex justify-center items-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),h.jsx("p",{className:"ml-4 text-gray-600",children:"Loading your deliveries..."})]}):h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Track Your Orders"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Real-time tracking of your deliveries"})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",children:[h.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Active Orders"}),h.jsx("div",{className:"text-2xl font-bold text-blue-600",children:e.length})]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"In Transit"}),h.jsx("div",{className:"text-2xl font-bold text-amber-600",children:e.filter(_=>_.status==="in_transit").length})]}),h.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[h.jsx("div",{className:"text-sm text-gray-500",children:"Delivered"}),h.jsx("div",{className:"text-2xl font-bold text-green-600",children:e.filter(_=>_.status==="delivered").length})]})]}),e.length===0?h.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[h.jsx("div",{className:"text-6xl mb-4",children:"📦"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No active orders"}),h.jsx("p",{className:"text-gray-500",children:"Your orders will appear here once they are assigned to a carrier"})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden mb-8",children:[h.jsx("div",{className:"border-b px-6 py-4 bg-gray-50",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("h3",{className:"font-medium text-gray-700",children:"Real-time Order Tracking"}),h.jsxs("div",{className:"flex items-center space-x-4 text-sm",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-3 h-3 rounded-full bg-green-600 mr-2"}),h.jsx("span",{children:"Pickup"})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600 mr-2"}),h.jsx("span",{children:"Current"})]}),h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-3 h-3 rounded-full bg-red-600 mr-2"}),h.jsx("span",{children:"Destination"})]})]})]})}),h.jsx("div",{ref:y,className:"w-full h-[500px] bg-gray-100",style:{minHeight:"500px"}}),h.jsx("div",{className:"border-t px-6 py-4 bg-gray-50",children:h.jsx("div",{className:"text-sm text-gray-500",children:"Click on markers for details. Your package location updates in real-time."})})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"lg:col-span-1",children:[h.jsx("h3",{className:"text-xl font-bold mb-4",children:"Your Orders"}),h.jsx("div",{className:"space-y-3",children:e.map(_=>h.jsxs("div",{onClick:()=>{d(_.id),j(_.id)},className:`p-4 rounded-lg border-2 cursor-pointer transition ${u===_.id?"border-blue-600 bg-blue-50":"border-gray-200 bg-white hover:border-gray-300"}`,children:[h.jsx("div",{className:"flex items-start justify-between",children:h.jsxs("div",{children:[h.jsx("div",{className:"font-bold text-gray-800",children:_.trackingCode}),h.jsxs("div",{className:`text-xs mt-1 inline-block px-2 py-1 rounded ${M(_.status)}`,children:[w(_.status)," ",_.status.replace(/_/g," ")]})]})}),_.distance&&h.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Distance: ",_.distance," km"]})]},_.id))})]}),h.jsx("div",{className:"lg:col-span-2",children:u&&e.find(_=>_.id===u)?(()=>{var x;const _=e.find(N=>N.id===u);return h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Order Summary"}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-gray-600",children:"Tracking Code"}),h.jsx("div",{className:"font-bold text-gray-800",children:_.trackingCode})]}),h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-gray-600",children:"Status"}),h.jsxs("div",{className:`inline-block px-3 py-1 rounded-lg text-sm font-medium ${M(_.status)}`,children:[w(_.status)," ",_.status.replace(/_/g," ")]})]}),_.carrierName&&h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-gray-600",children:"Carrier"}),h.jsx("div",{className:"font-medium text-gray-800",children:_.carrierName})]}),_.distance&&h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-gray-600",children:"Distance"}),h.jsxs("div",{className:"font-medium text-gray-800",children:[_.distance," km"]})]}),_.estimatedDeliveryTime&&h.jsxs("div",{children:[h.jsx("div",{className:"text-sm text-gray-600",children:"Estimated Delivery"}),h.jsx("div",{className:"font-medium text-green-600",children:_.estimatedDeliveryTime})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h4",{className:"text-lg font-bold text-gray-800 mb-4",children:"Route Information"}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("div",{className:"pb-4 border-b",children:h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold",children:"1"}),h.jsxs("div",{className:"ml-3 flex-1",children:[h.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Pickup Location"}),h.jsx("div",{className:"text-sm text-gray-600 mt-1",children:_.pickupAddress})]})]})}),h.jsx("div",{className:"pb-4 border-b",children:h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold",children:"2"}),h.jsxs("div",{className:"ml-3 flex-1",children:[h.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Current Location"}),h.jsx("div",{className:"text-sm text-gray-600 mt-1",children:((x=_.currentLocation)==null?void 0:x.address)||"In transit"})]})]})}),h.jsx("div",{children:h.jsxs("div",{className:"flex items-start",children:[h.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold",children:"3"}),h.jsxs("div",{className:"ml-3 flex-1",children:[h.jsx("div",{className:"text-sm font-semibold text-gray-700",children:"Delivery Location"}),h.jsx("div",{className:"text-sm text-gray-600 mt-1",children:_.deliveryAddress}),h.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Recipient: ",_.deliveryContactName]})]})]})})]})]})]})})():null})]})]})]}):h.jsxs("div",{className:"flex flex-col items-center justify-center h-96",children:[h.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Loading map..."}),h.jsx("p",{className:"text-gray-500",children:"This may take a few moments"})]})}function l6({user:t,userProfile:e}){var d,f;const[n,r]=P.useState({fullName:(e==null?void 0:e.fullName)||"",email:(t==null?void 0:t.email)||"",phone:(e==null?void 0:e.phone)||"",address:(e==null?void 0:e.address)||"",whatsapp:(e==null?void 0:e.whatsapp)||""}),[s,i]=P.useState(!1),[o,a]=P.useState(!1),l=m=>{const{name:y,value:T}=m.target;r(b=>({...b,[y]:T}))},u=async()=>{i(!0);try{t&&(await tm(er(Wt,"users",t.uid),{fullName:n.fullName,phone:n.phone,address:n.address,whatsapp:n.whatsapp,updatedAt:new Date}),re.success("Profile updated successfully!"),a(!1))}catch(m){console.error("Error updating profile:",m),re.error("Failed to update profile")}finally{i(!1)}};return h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"My Profile"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your personal information"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[h.jsx("div",{className:"lg:col-span-2",children:h.jsxs("div",{className:"bg-white rounded-xl shadow p-8",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsx("h2",{className:"text-2xl font-bold",children:"Personal Information"}),h.jsx("button",{onClick:()=>a(!o),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",children:o?"Cancel":"Edit"})]}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),h.jsx("input",{type:"text",name:"fullName",value:n.fullName,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email"}),h.jsx("input",{type:"email",value:n.email,disabled:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Phone Number"}),h.jsx("input",{type:"tel",name:"phone",value:n.phone,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"WhatsApp Number"}),h.jsx("input",{type:"tel",name:"whatsapp",value:n.whatsapp,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Default Address"}),h.jsx("input",{type:"text",name:"address",value:n.address,onChange:l,disabled:!o,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-600"})]}),o&&h.jsx("button",{onClick:u,disabled:s,className:"w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed",children:s?"Saving...":"Save Changes"})]})]})}),h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"font-bold mb-4",children:"Account Information"}),h.jsxs("div",{className:"space-y-3 text-sm",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-500",children:"Member Since"}),h.jsx("p",{className:"font-medium",children:e!=null&&e.createdAt?new Date(((f=(d=e.createdAt).toDate)==null?void 0:f.call(d))||e.createdAt).toLocaleDateString():"N/A"})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-500",children:"Account Status"}),h.jsx("p",{className:"font-medium text-green-600",children:"Active"})]}),h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-500",children:"Verified Email"}),h.jsx("p",{className:"font-medium",children:"✓ Yes"})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h3",{className:"font-bold mb-4",children:"Activity"}),h.jsxs("div",{className:"space-y-3 text-sm",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("p",{className:"text-gray-600",children:"Total Orders"}),h.jsx("p",{className:"font-bold",children:"12"})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("p",{className:"text-gray-600",children:"Completed"}),h.jsx("p",{className:"font-bold text-green-600",children:"10"})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("p",{className:"text-gray-600",children:"In Progress"}),h.jsx("p",{className:"font-bold text-blue-600",children:"2"})]})]})]})]})]})]})}function c6(){const t=di(),[e,n]=P.useState({emailNotifications:!0,smsNotifications:!0,pushNotifications:!0,showProfile:!0}),[r,s]=P.useState(!1),[i,o]=P.useState(!1),a=d=>{n(f=>({...f,[d]:!f[d]})),re.success("Preference updated")},l=async()=>{try{await TI(nr),re.success("Logged out successfully"),t("/login")}catch(d){console.error("Error logging out:",d),re.error("Failed to logout")}},u=async()=>{o(!0);try{const d=nr.currentUser;d&&(await LP(d),re.success("Account deleted successfully"),t("/login"))}catch(d){console.error("Error deleting account:",d),re.error("Failed to delete account. Please try again later.")}finally{o(!1),s(!1)}};return h.jsxs("div",{children:[h.jsx(Is,{position:"top-right"}),h.jsxs("div",{className:"mb-8",children:[h.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Settings"}),h.jsx("p",{className:"text-gray-600 mt-2",children:"Manage your preferences and account"})]}),h.jsxs("div",{className:"max-w-2xl space-y-6",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h2",{className:"text-xl font-bold mb-6",children:"Notifications"}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-800",children:"Email Notifications"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Receive updates about your deliveries via email"})]}),h.jsx("button",{onClick:()=>a("emailNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.emailNotifications?"bg-blue-600":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.emailNotifications?"translate-x-7":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-800",children:"SMS Notifications"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Receive text message updates about your deliveries"})]}),h.jsx("button",{onClick:()=>a("smsNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.smsNotifications?"bg-blue-600":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.smsNotifications?"translate-x-7":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-800",children:"Push Notifications"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Receive push notifications from the app"})]}),h.jsx("button",{onClick:()=>a("pushNotifications"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.pushNotifications?"bg-blue-600":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.pushNotifications?"translate-x-7":"translate-x-1"}`})})]})]})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h2",{className:"text-xl font-bold mb-6",children:"Privacy"}),h.jsx("div",{className:"space-y-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-800",children:"Public Profile"}),h.jsx("p",{className:"text-sm text-gray-500",children:"Let other users see your profile information"})]}),h.jsx("button",{onClick:()=>a("showProfile"),className:`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${e.showProfile?"bg-blue-600":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${e.showProfile?"translate-x-7":"translate-x-1"}`})})]})})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h2",{className:"text-xl font-bold mb-6",children:"Security"}),h.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🔐 Change Password"}),h.jsx("button",{className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50",children:"🔑 Two-Factor Authentication"})]}),h.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[h.jsx("h2",{className:"text-xl font-bold mb-6",children:"Account"}),h.jsx("button",{onClick:l,className:"w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 mb-3",children:"🚪 Logout"}),h.jsx("button",{onClick:()=>s(!0),className:"w-full px-4 py-3 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-50",children:"🗑️ Delete Account"})]}),r&&h.jsxs("div",{className:"bg-red-50 rounded-xl shadow p-6 border border-red-200",children:[h.jsx("h3",{className:"text-lg font-bold text-red-800 mb-3",children:"⚠️ Delete Account"}),h.jsx("p",{className:"text-red-700 mb-6",children:"Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed."}),h.jsxs("div",{className:"flex gap-3",children:[h.jsx("button",{onClick:()=>s(!1),className:"flex-1 px-4 py-2 border border-red-300 rounded-lg text-red-600 font-medium hover:bg-red-100",children:"Cancel"}),h.jsx("button",{onClick:u,disabled:i,className:"flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed",children:i?"Deleting...":"Delete Permanently"})]})]})]})]})}function u6({user:t}){const[e,n]=P.useState(null),[r,s]=P.useState(!0);return P.useEffect(()=>{(async()=>{if(t){const o=await Ul(er(Wt,"users",t.uid));o.exists()&&n(o.data())}s(!1)})()},[t]),r?h.jsx("div",{className:"flex items-center justify-center min-h-screen",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):h.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[h.jsx(d3,{}),h.jsxs("div",{className:"flex-1 flex flex-col",children:[h.jsx(f3,{user:t,userProfile:e}),h.jsx("main",{className:"flex-1 p-6",children:h.jsxs(YF,{children:[h.jsx(Sn,{path:"/",element:h.jsx(KF,{to:"/dashboard",replace:!0})}),h.jsx(Sn,{path:"/dashboard",element:h.jsx(p3,{user:t,userProfile:e})}),h.jsx(Sn,{path:"/orders",element:h.jsx(n6,{})}),h.jsx(Sn,{path:"/orders/new",element:h.jsx(i6,{user:t})}),h.jsx(Sn,{path:"/orders/:id",element:h.jsx(r6,{})}),h.jsx(Sn,{path:"/track",element:h.jsx(o6,{})}),h.jsx(Sn,{path:"/track-map",element:h.jsx(a6,{user:t})}),h.jsx(Sn,{path:"/profile",element:h.jsx(l6,{user:t,userProfile:e})}),h.jsx(Sn,{path:"/settings",element:h.jsx(c6,{})})]})})]})]})}function h6(){const t=di(),[e,n]=P.useState(""),[r,s]=P.useState(""),[i,o]=P.useState(!1),[a,l]=P.useState(""),[u,d]=P.useState(!1),f=async m=>{m.preventDefault(),o(!0),l(""),d(!1);try{const T=(await AP(nr,e,r)).user,b=await Ul(er(Wt,"users",T.uid));if(!b.exists()){l("Account not found. Please contact support."),await nr.signOut(),o(!1);return}const R=b.data();if(R.role!=="customer"){l("This account is not a customer account. Please use the correct portal."),await nr.signOut(),o(!1);return}T.emailVerified||R.emailVerified===!0?T.emailVerified&&!R.emailVerified&&await tm(er(Wt,"users",T.uid),{emailVerified:!0,updatedAt:new Date}):(d(!0),T.emailVerified&&!R.emailVerified&&await tm(er(Wt,"users",T.uid),{emailVerified:!0,updatedAt:new Date})),console.log("Customer login successful for:",T.email)}catch(y){console.error("Login error:",y),y.code==="auth/invalid-credential"||y.code==="auth/user-not-found"||y.code==="auth/wrong-password"?l("Invalid email or password. Please try again."):y.code==="auth/too-many-requests"?l("Too many failed attempts. Please try again later."):y.code==="auth/user-disabled"?l("This account has been disabled. Please contact support."):y.code==="auth/network-request-failed"?l("Network error. Please check your internet connection."):l(y.message||"Login failed. Please try again.")}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 to-emerald-900 p-4",children:h.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[h.jsx("div",{className:"w-12 h-12 bg-green-600 rounded-full flex items-center justify-center",children:h.jsx("span",{className:"text-white font-bold text-xl",children:"P"})}),h.jsx("h1",{className:"text-3xl font-bold text-green-800",children:"PTROS Customer"})]}),h.jsx("p",{className:"text-gray-600",children:"Sign in to track deliveries and manage orders"})]}),u&&h.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:h.jsxs("div",{className:"flex",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-yellow-600",children:"⚠️"})}),h.jsxs("div",{className:"ml-3",children:[h.jsx("h4",{className:"text-sm font-medium text-yellow-800",children:"Verify Your Email"}),h.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Please verify your email for full account security. Check your inbox for the verification email."})]})]})}),a&&h.jsx("div",{className:"bg-red-50 border-l-4 border-red-500 p-4 mb-6",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("span",{className:"text-red-500",children:"⚠️"})}),h.jsx("div",{className:"ml-3",children:h.jsx("p",{className:"text-red-700 text-sm",children:a})})]})}),h.jsxs("form",{onSubmit:f,className:"space-y-6",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),h.jsx("input",{type:"email",placeholder:"your@email.com",value:e,onChange:m=>n(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,disabled:i})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),h.jsx("input",{type:"password",placeholder:"Enter your password",value:r,onChange:m=>s(m.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition",required:!0,minLength:6,disabled:i}),h.jsx("div",{className:"text-right mt-2",children:h.jsx("button",{type:"button",onClick:()=>t("/forgot-password"),className:"text-sm text-green-600 hover:text-green-800",children:"Forgot password?"})})]}),h.jsx("button",{type:"submit",disabled:i,className:"w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center",children:i?h.jsxs(h.Fragment,{children:[h.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[h.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),h.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Signing in..."]}):"Sign In"})]}),h.jsxs("div",{className:"flex items-center my-8",children:[h.jsx("div",{className:"flex-grow border-t border-gray-300"}),h.jsx("span",{className:"mx-4 text-gray-500 text-sm",children:"OR"}),h.jsx("div",{className:"flex-grow border-t border-gray-300"})]}),h.jsxs("div",{className:"text-center",children:[h.jsx("p",{className:"text-gray-600 mb-4",children:"New to PTROS?"}),h.jsx(md,{to:"/register",className:"inline-block w-full py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition",children:"Create Customer Account"})]}),h.jsxs("div",{className:"mt-8 p-4 bg-green-50 border border-green-200 rounded-lg",children:[h.jsx("h4",{className:"text-sm font-medium text-green-800 mb-2",children:"Customer Benefits"}),h.jsxs("ul",{className:"text-sm text-green-700 space-y-1",children:[h.jsx("li",{children:"• Track deliveries in real-time"}),h.jsx("li",{children:"• View delivery history"}),h.jsx("li",{children:"• Get SMS/email notifications"}),h.jsx("li",{children:"• Manage your delivery addresses"})]})]}),h.jsx("div",{className:"text-center mt-8 pt-6 border-t border-gray-200",children:h.jsxs("p",{className:"text-sm text-gray-500",children:["Need help?"," ",h.jsx("a",{href:"mailto:support@ptros.co.ls",className:"text-green-600 hover:text-green-800",children:"Contact Support"})]})})]})})}const CE="customer";function d6(){const[t,e]=P.useState(!0),[n,r]=P.useState(null),[s,i]=P.useState(null);return P.useEffect(()=>{const o=OP(nr,async a=>{var l;if(a){const u=await Ul(er(Wt,"users",a.uid)),d=u.exists()?(l=u.data())==null?void 0:l.role:null;r(a),i(d)}else r(null),i(null);e(!1)});return()=>o()},[]),h.jsxs(s3,{children:[h.jsxs(h3,{children:[t&&h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:h.jsxs("div",{className:"text-center",children:[h.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),h.jsx("p",{className:"mt-4 text-gray-700",children:"Loading PTROS Customer..."})]})}),!t&&!n&&h.jsx(h6,{}),!t&&n&&s!==CE&&h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:h.jsxs("div",{className:"text-center p-10",children:[h.jsx("h1",{className:"text-4xl font-bold text-red-600 mb-4",children:"Access Denied"}),h.jsx("p",{className:"text-xl mb-4",children:"This portal is for customers only."}),h.jsxs("p",{className:"text-lg",children:["You are logged in as: ",h.jsx("strong",{children:s})]}),h.jsx("button",{onClick:()=>nr.signOut(),className:"mt-8 px-8 py-4 bg-red-600 text-white rounded-lg text-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===CE&&h.jsx(u6,{user:n})]}),h.jsx(Is,{})]})}Lf.createRoot(document.getElementById("root")).render(h.jsx(ME.StrictMode,{children:h.jsx(d6,{})}));
