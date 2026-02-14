function Qb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Yb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xx={exports:{}},bd={},Jx={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=Symbol.for("react.element"),Xb=Symbol.for("react.portal"),Jb=Symbol.for("react.fragment"),Zb=Symbol.for("react.strict_mode"),ek=Symbol.for("react.profiler"),tk=Symbol.for("react.provider"),nk=Symbol.for("react.context"),rk=Symbol.for("react.forward_ref"),sk=Symbol.for("react.suspense"),ik=Symbol.for("react.memo"),ok=Symbol.for("react.lazy"),sv=Symbol.iterator;function ak(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var Zx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eE=Object.assign,tE={};function So(t,e,n){this.props=t,this.context=e,this.refs=tE,this.updater=n||Zx}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nE(){}nE.prototype=So.prototype;function Mm(t,e,n){this.props=t,this.context=e,this.refs=tE,this.updater=n||Zx}var Lm=Mm.prototype=new nE;Lm.constructor=Mm;eE(Lm,So.prototype);Lm.isPureReactComponent=!0;var iv=Array.isArray,rE=Object.prototype.hasOwnProperty,Vm={current:null},sE={key:!0,ref:!0,__self:!0,__source:!0};function iE(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)rE.call(e,r)&&!sE.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),d=0;d<a;d++)l[d]=arguments[d+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:Ll,type:t,key:i,ref:o,props:s,_owner:Vm.current}}function lk(t,e){return{$$typeof:Ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ll}function ck(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ov=/\/+/g;function tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ck(""+t.key):e.toString(36)}function qc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ll:case Xb:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+tf(o,0):r,iv(s)?(n="",t!=null&&(n=t.replace(ov,"$&/")+"/"),qc(s,e,n,"",function(d){return d})):s!=null&&(Fm(s)&&(s=lk(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ov,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",iv(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+tf(i,a);o+=qc(i,e,n,l,s)}else if(l=ak(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+tf(i,a++),o+=qc(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function _c(t,e,n){if(t==null)return t;var r=[],s=0;return qc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function uk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Hc={transition:null},dk={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Hc,ReactCurrentOwner:Vm};function oE(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:_c,forEach:function(t,e,n){_c(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return _c(t,function(){e++}),e},toArray:function(t){return _c(t,function(e){return e})||[]},only:function(t){if(!Fm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=So;ue.Fragment=Jb;ue.Profiler=ek;ue.PureComponent=Mm;ue.StrictMode=Zb;ue.Suspense=sk;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dk;ue.act=oE;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=eE({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Vm.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rE.call(e,l)&&!sE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}return{$$typeof:Ll,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:nk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tk,_context:t},t.Consumer=t};ue.createElement=iE;ue.createFactory=function(t){var e=iE.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:rk,render:t}};ue.isValidElement=Fm;ue.lazy=function(t){return{$$typeof:ok,_payload:{_status:-1,_result:t},_init:uk}};ue.memo=function(t,e){return{$$typeof:ik,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Hc.transition;Hc.transition={};try{t()}finally{Hc.transition=e}};ue.unstable_act=oE;ue.useCallback=function(t,e){return kt.current.useCallback(t,e)};ue.useContext=function(t){return kt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return kt.current.useEffect(t,e)};ue.useId=function(){return kt.current.useId()};ue.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return kt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ue.useRef=function(t){return kt.current.useRef(t)};ue.useState=function(t){return kt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return kt.current.useTransition()};ue.version="18.3.1";Jx.exports=ue;var P=Jx.exports;const aE=Yb(P),hk=Qb({__proto__:null,default:aE},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fk=P,pk=Symbol.for("react.element"),mk=Symbol.for("react.fragment"),gk=Object.prototype.hasOwnProperty,yk=fk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_k={key:!0,ref:!0,__self:!0,__source:!0};function lE(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gk.call(e,r)&&!_k.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:pk,type:t,key:i,ref:o,props:s,_owner:yk.current}}bd.Fragment=mk;bd.jsx=lE;bd.jsxs=lE;Xx.exports=bd;var u=Xx.exports,Xf={},cE={exports:{}},Yt={},uE={exports:{}},dE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var G=B.length;B.push(K);e:for(;0<G;){var de=G-1>>>1,ye=B[de];if(0<s(ye,K))B[de]=K,B[G]=ye,G=de;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],G=B.pop();if(G!==K){B[0]=G;e:for(var de=0,ye=B.length,Kn=ye>>>1;de<Kn;){var Jt=2*(de+1)-1,Ds=B[Jt],ln=Jt+1,Ir=B[ln];if(0>s(Ds,G))ln<ye&&0>s(Ir,Ds)?(B[de]=Ir,B[ln]=G,de=ln):(B[de]=Ds,B[Jt]=G,de=Jt);else if(ln<ye&&0>s(Ir,G))B[de]=Ir,B[ln]=G,de=ln;else break e}}return K}function s(B,K){var G=B.sortIndex-K.sortIndex;return G!==0?G:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],d=[],h=1,f=null,m=3,y=!1,N=!1,_=!1,A=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var K=n(d);K!==null;){if(K.callback===null)r(d);else if(K.startTime<=B)r(d),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(d)}}function D(B){if(_=!1,b(B),!N)if(n(l)!==null)N=!0,Se(j);else{var K=n(d);K!==null&&ee(D,K.startTime-B)}}function j(B,K){N=!1,_&&(_=!1,x(w),w=-1),y=!0;var G=m;try{for(b(K),f=n(l);f!==null&&(!(f.expirationTime>K)||B&&!S());){var de=f.callback;if(typeof de=="function"){f.callback=null,m=f.priorityLevel;var ye=de(f.expirationTime<=K);K=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&r(l),b(K)}else r(l);f=n(l)}if(f!==null)var Kn=!0;else{var Jt=n(d);Jt!==null&&ee(D,Jt.startTime-K),Kn=!1}return Kn}finally{f=null,m=G,y=!1}}var F=!1,k=null,w=-1,C=5,I=-1;function S(){return!(t.unstable_now()-I<C)}function R(){if(k!==null){var B=t.unstable_now();I=B;var K=!0;try{K=k(!0,B)}finally{K?T():(F=!1,k=null)}}else F=!1}var T;if(typeof E=="function")T=function(){E(R)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,Ne=Y.port2;Y.port1.onmessage=R,T=function(){Ne.postMessage(null)}}else T=function(){A(R,0)};function Se(B){k=B,F||(F=!0,T())}function ee(B,K){w=A(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){N||y||(N=!0,Se(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var K=3;break;default:K=m}var G=m;m=K;try{return B()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=m;m=B;try{return K()}finally{m=G}},t.unstable_scheduleCallback=function(B,K,G){var de=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?de+G:de):G=de,B){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=G+ye,B={id:h++,callback:K,priorityLevel:B,startTime:G,expirationTime:ye,sortIndex:-1},G>de?(B.sortIndex=G,e(d,B),n(l)===null&&B===n(d)&&(_?(x(w),w=-1):_=!0,ee(D,G-de))):(B.sortIndex=ye,e(l,B),N||y||(N=!0,Se(j))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var K=m;return function(){var G=m;m=K;try{return B.apply(this,arguments)}finally{m=G}}}})(dE);uE.exports=dE;var vk=uE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wk=P,Qt=vk;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hE=new Set,Za={};function fi(t,e){oo(t,e),oo(t+"Capture",e)}function oo(t,e){for(Za[t]=e,t=0;t<e.length;t++)hE.add(e[t])}var lr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jf=Object.prototype.hasOwnProperty,xk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,av={},lv={};function Ek(t){return Jf.call(lv,t)?!0:Jf.call(av,t)?!1:xk.test(t)?lv[t]=!0:(av[t]=!0,!1)}function Tk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ik(t,e,n,r){if(e===null||typeof e>"u"||Tk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function At(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){dt[t]=new At(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new At(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new At(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){dt[t]=new At(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){dt[t]=new At(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){dt[t]=new At(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){dt[t]=new At(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=new At(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new At(t,5,!1,t.toLowerCase(),null,!1,!1)});var Um=/[\-:]([a-z])/g;function Bm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Um,Bm);dt[e]=new At(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Um,Bm);dt[e]=new At(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Um,Bm);dt[e]=new At(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){dt[t]=new At(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new At("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){dt[t]=new At(t,1,!1,t.toLowerCase(),null,!0,!0)});function $m(t,e,n,r){var s=dt.hasOwnProperty(e)?dt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ik(e,n,s,r)&&(n=null),r||s===null?Ek(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vr=wk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vc=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Pi=Symbol.for("react.fragment"),zm=Symbol.for("react.strict_mode"),Zf=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),ep=Symbol.for("react.suspense"),tp=Symbol.for("react.suspense_list"),qm=Symbol.for("react.memo"),Or=Symbol.for("react.lazy"),mE=Symbol.for("react.offscreen"),cv=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=cv&&t[cv]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,nf;function Ea(t){if(nf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nf=e&&e[1]||""}return`
`+nf+t}var rf=!1;function sf(t,e){if(!t||rf)return"";rf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{rf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function Ck(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=sf(t.type,!1),t;case 11:return t=sf(t.type.render,!1),t;case 1:return t=sf(t.type,!0),t;default:return""}}function np(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pi:return"Fragment";case Ri:return"Portal";case Zf:return"Profiler";case zm:return"StrictMode";case ep:return"Suspense";case tp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pE:return(t.displayName||"Context")+".Consumer";case fE:return(t._context.displayName||"Context")+".Provider";case Wm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qm:return e=t.displayName||null,e!==null?e:np(t.type)||"Memo";case Or:e=t._payload,t=t._init;try{return np(t(e))}catch{}}return null}function Nk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return np(e);case 8:return e===zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gE(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Sk(t){var e=gE(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wc(t){t._valueTracker||(t._valueTracker=Sk(t))}function yE(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=gE(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rp(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _E(t,e){e=e.checked,e!=null&&$m(t,"checked",e,!1)}function sp(t,e){_E(t,e);var n=cs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ip(t,e.type,n):e.hasOwnProperty("defaultValue")&&ip(t,e.type,cs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ip(t,e,n){(e!=="number"||mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Hi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function op(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ta(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cs(n)}}function vE(t,e){var n=cs(e.value),r=cs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function fv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function wE(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ap(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?wE(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xc,xE=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xc=xc||document.createElement("div"),xc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function el(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bk=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){bk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function EE(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function TE(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=EE(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var kk=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lp(t,e){if(e){if(kk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function cp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var up=null;function Hm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dp=null,Gi=null,Ki=null;function pv(t){if(t=Ul(t)){if(typeof dp!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Dd(e),dp(t.stateNode,t.type,e))}}function IE(t){Gi?Ki?Ki.push(t):Ki=[t]:Gi=t}function CE(){if(Gi){var t=Gi,e=Ki;if(Ki=Gi=null,pv(t),e)for(t=0;t<e.length;t++)pv(e[t])}}function NE(t,e){return t(e)}function SE(){}var of=!1;function bE(t,e,n){if(of)return t(e,n);of=!0;try{return NE(t,e,n)}finally{of=!1,(Gi!==null||Ki!==null)&&(SE(),CE())}}function tl(t,e){var n=t.stateNode;if(n===null)return null;var r=Dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var hp=!1;if(lr)try{var aa={};Object.defineProperty(aa,"passive",{get:function(){hp=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{hp=!1}function Ak(t,e,n,r,s,i,o,a,l){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(h){this.onError(h)}}var Da=!1,gu=null,yu=!1,fp=null,Rk={onError:function(t){Da=!0,gu=t}};function Pk(t,e,n,r,s,i,o,a,l){Da=!1,gu=null,Ak.apply(Rk,arguments)}function Dk(t,e,n,r,s,i,o,a,l){if(Pk.apply(this,arguments),Da){if(Da){var d=gu;Da=!1,gu=null}else throw Error(U(198));yu||(yu=!0,fp=d)}}function pi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kE(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mv(t){if(pi(t)!==t)throw Error(U(188))}function Ok(t){var e=t.alternate;if(!e){if(e=pi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return mv(s),t;if(i===r)return mv(s),e;i=i.sibling}throw Error(U(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function AE(t){return t=Ok(t),t!==null?RE(t):null}function RE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=RE(t);if(e!==null)return e;t=t.sibling}return null}var PE=Qt.unstable_scheduleCallback,gv=Qt.unstable_cancelCallback,jk=Qt.unstable_shouldYield,Mk=Qt.unstable_requestPaint,$e=Qt.unstable_now,Lk=Qt.unstable_getCurrentPriorityLevel,Gm=Qt.unstable_ImmediatePriority,DE=Qt.unstable_UserBlockingPriority,_u=Qt.unstable_NormalPriority,Vk=Qt.unstable_LowPriority,OE=Qt.unstable_IdlePriority,kd=null,Mn=null;function Fk(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(kd,t,void 0,(t.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:$k,Uk=Math.log,Bk=Math.LN2;function $k(t){return t>>>=0,t===0?32:31-(Uk(t)/Bk|0)|0}var Ec=64,Tc=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=Ia(a):(i&=o,i!==0&&(r=Ia(i)))}else o=n&~s,o!==0?r=Ia(o):i!==0&&(r=Ia(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-_n(e),s=1<<n,r|=t[n],e&=~s;return r}function zk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-_n(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=zk(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function pp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jE(){var t=Ec;return Ec<<=1,!(Ec&4194240)&&(Ec=64),t}function af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Vl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-_n(e),t[e]=n}function qk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-_n(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Km(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-_n(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var we=0;function ME(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var LE,Qm,VE,FE,UE,mp=!1,Ic=[],Gr=null,Kr=null,Qr=null,nl=new Map,rl=new Map,Mr=[],Hk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yv(t,e){switch(t){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Qr=null;break;case"pointerover":case"pointerout":nl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(e.pointerId)}}function la(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Ul(e),e!==null&&Qm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Gk(t,e,n,r,s){switch(e){case"focusin":return Gr=la(Gr,t,e,n,r,s),!0;case"dragenter":return Kr=la(Kr,t,e,n,r,s),!0;case"mouseover":return Qr=la(Qr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return nl.set(i,la(nl.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,rl.set(i,la(rl.get(i)||null,t,e,n,r,s)),!0}return!1}function BE(t){var e=Ws(t.target);if(e!==null){var n=pi(e);if(n!==null){if(e=n.tag,e===13){if(e=kE(n),e!==null){t.blockedOn=e,UE(t.priority,function(){VE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);up=r,n.target.dispatchEvent(r),up=null}else return e=Ul(n),e!==null&&Qm(e),t.blockedOn=n,!1;e.shift()}return!0}function _v(t,e,n){Gc(t)&&n.delete(e)}function Kk(){mp=!1,Gr!==null&&Gc(Gr)&&(Gr=null),Kr!==null&&Gc(Kr)&&(Kr=null),Qr!==null&&Gc(Qr)&&(Qr=null),nl.forEach(_v),rl.forEach(_v)}function ca(t,e){t.blockedOn===e&&(t.blockedOn=null,mp||(mp=!0,Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority,Kk)))}function sl(t){function e(s){return ca(s,t)}if(0<Ic.length){ca(Ic[0],t);for(var n=1;n<Ic.length;n++){var r=Ic[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gr!==null&&ca(Gr,t),Kr!==null&&ca(Kr,t),Qr!==null&&ca(Qr,t),nl.forEach(e),rl.forEach(e),n=0;n<Mr.length;n++)r=Mr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Mr.length&&(n=Mr[0],n.blockedOn===null);)BE(n),n.blockedOn===null&&Mr.shift()}var Qi=vr.ReactCurrentBatchConfig,wu=!0;function Qk(t,e,n,r){var s=we,i=Qi.transition;Qi.transition=null;try{we=1,Ym(t,e,n,r)}finally{we=s,Qi.transition=i}}function Yk(t,e,n,r){var s=we,i=Qi.transition;Qi.transition=null;try{we=4,Ym(t,e,n,r)}finally{we=s,Qi.transition=i}}function Ym(t,e,n,r){if(wu){var s=gp(t,e,n,r);if(s===null)yf(t,e,r,xu,n),yv(t,r);else if(Gk(s,t,e,n,r))r.stopPropagation();else if(yv(t,r),e&4&&-1<Hk.indexOf(t)){for(;s!==null;){var i=Ul(s);if(i!==null&&LE(i),i=gp(t,e,n,r),i===null&&yf(t,e,r,xu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else yf(t,e,r,null,n)}}var xu=null;function gp(t,e,n,r){if(xu=null,t=Hm(r),t=Ws(t),t!==null)if(e=pi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kE(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xu=t,null}function $E(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lk()){case Gm:return 1;case DE:return 4;case _u:case Vk:return 16;case OE:return 536870912;default:return 16}default:return 16}}var zr=null,Xm=null,Kc=null;function zE(){if(Kc)return Kc;var t,e=Xm,n=e.length,r,s="value"in zr?zr.value:zr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Kc=s.slice(t,1<r?1-r:void 0)}function Qc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Cc(){return!0}function vv(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Cc:vv,this.isPropagationStopped=vv,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Cc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Cc)},persist:function(){},isPersistent:Cc}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jm=Xt(bo),Fl=Me({},bo,{view:0,detail:0}),Xk=Xt(Fl),lf,cf,ua,Ad=Me({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ua&&(ua&&t.type==="mousemove"?(lf=t.screenX-ua.screenX,cf=t.screenY-ua.screenY):cf=lf=0,ua=t),lf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),wv=Xt(Ad),Jk=Me({},Ad,{dataTransfer:0}),Zk=Xt(Jk),e1=Me({},Fl,{relatedTarget:0}),uf=Xt(e1),t1=Me({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),n1=Xt(t1),r1=Me({},bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s1=Xt(r1),i1=Me({},bo,{data:0}),xv=Xt(i1),o1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=l1[t])?!!e[t]:!1}function Zm(){return c1}var u1=Me({},Fl,{key:function(t){if(t.key){var e=o1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?a1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zm,charCode:function(t){return t.type==="keypress"?Qc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=Xt(u1),h1=Me({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ev=Xt(h1),f1=Me({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zm}),p1=Xt(f1),m1=Me({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),g1=Xt(m1),y1=Me({},Ad,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=Xt(y1),v1=[9,13,27,32],eg=lr&&"CompositionEvent"in window,Oa=null;lr&&"documentMode"in document&&(Oa=document.documentMode);var w1=lr&&"TextEvent"in window&&!Oa,WE=lr&&(!eg||Oa&&8<Oa&&11>=Oa),Tv=" ",Iv=!1;function qE(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function HE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function x1(t,e){switch(t){case"compositionend":return HE(e);case"keypress":return e.which!==32?null:(Iv=!0,Tv);case"textInput":return t=e.data,t===Tv&&Iv?null:t;default:return null}}function E1(t,e){if(Di)return t==="compositionend"||!eg&&qE(t,e)?(t=zE(),Kc=Xm=zr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return WE&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function GE(t,e,n,r){IE(r),e=Eu(e,"onChange"),0<e.length&&(n=new Jm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ja=null,il=null;function I1(t){sT(t,0)}function Rd(t){var e=Mi(t);if(yE(e))return t}function C1(t,e){if(t==="change")return e}var KE=!1;if(lr){var df;if(lr){var hf="oninput"in document;if(!hf){var Nv=document.createElement("div");Nv.setAttribute("oninput","return;"),hf=typeof Nv.oninput=="function"}df=hf}else df=!1;KE=df&&(!document.documentMode||9<document.documentMode)}function Sv(){ja&&(ja.detachEvent("onpropertychange",QE),il=ja=null)}function QE(t){if(t.propertyName==="value"&&Rd(il)){var e=[];GE(e,il,t,Hm(t)),bE(I1,e)}}function N1(t,e,n){t==="focusin"?(Sv(),ja=e,il=n,ja.attachEvent("onpropertychange",QE)):t==="focusout"&&Sv()}function S1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rd(il)}function b1(t,e){if(t==="click")return Rd(e)}function k1(t,e){if(t==="input"||t==="change")return Rd(e)}function A1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tn=typeof Object.is=="function"?Object.is:A1;function ol(t,e){if(Tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jf.call(e,s)||!Tn(t[s],e[s]))return!1}return!0}function bv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kv(t,e){var n=bv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bv(n)}}function YE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?YE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function XE(){for(var t=window,e=mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mu(t.document)}return e}function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R1(t){var e=XE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&YE(n.ownerDocument.documentElement,n)){if(r!==null&&tg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=kv(n,i);var o=kv(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=lr&&"documentMode"in document&&11>=document.documentMode,Oi=null,yp=null,Ma=null,_p=!1;function Av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_p||Oi==null||Oi!==mu(r)||(r=Oi,"selectionStart"in r&&tg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ma&&ol(Ma,r)||(Ma=r,r=Eu(yp,"onSelect"),0<r.length&&(e=new Jm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Nc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ji={animationend:Nc("Animation","AnimationEnd"),animationiteration:Nc("Animation","AnimationIteration"),animationstart:Nc("Animation","AnimationStart"),transitionend:Nc("Transition","TransitionEnd")},ff={},JE={};lr&&(JE=document.createElement("div").style,"AnimationEvent"in window||(delete ji.animationend.animation,delete ji.animationiteration.animation,delete ji.animationstart.animation),"TransitionEvent"in window||delete ji.transitionend.transition);function Pd(t){if(ff[t])return ff[t];if(!ji[t])return t;var e=ji[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in JE)return ff[t]=e[n];return t}var ZE=Pd("animationend"),eT=Pd("animationiteration"),tT=Pd("animationstart"),nT=Pd("transitionend"),rT=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ts(t,e){rT.set(t,e),fi(e,[t])}for(var pf=0;pf<Rv.length;pf++){var mf=Rv[pf],D1=mf.toLowerCase(),O1=mf[0].toUpperCase()+mf.slice(1);Ts(D1,"on"+O1)}Ts(ZE,"onAnimationEnd");Ts(eT,"onAnimationIteration");Ts(tT,"onAnimationStart");Ts("dblclick","onDoubleClick");Ts("focusin","onFocus");Ts("focusout","onBlur");Ts(nT,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fi("onBeforeInput",["compositionend","keypress","textInput","paste"]);fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function Pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Dk(r,e,void 0,t),t.currentTarget=null}function sT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,d=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;Pv(s,a,d),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,d=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;Pv(s,a,d),i=l}}}if(yu)throw t=fp,yu=!1,fp=null,t}function ke(t,e){var n=e[Tp];n===void 0&&(n=e[Tp]=new Set);var r=t+"__bubble";n.has(r)||(iT(e,t,2,!1),n.add(r))}function gf(t,e,n){var r=0;e&&(r|=4),iT(n,t,r,e)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function al(t){if(!t[Sc]){t[Sc]=!0,hE.forEach(function(n){n!=="selectionchange"&&(j1.has(n)||gf(n,!1,t),gf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sc]||(e[Sc]=!0,gf("selectionchange",!1,e))}}function iT(t,e,n,r){switch($E(e)){case 1:var s=Qk;break;case 4:s=Yk;break;default:s=Ym}n=s.bind(null,e,n,t),s=void 0,!hp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function yf(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=Ws(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}bE(function(){var d=i,h=Hm(n),f=[];e:{var m=rT.get(t);if(m!==void 0){var y=Jm,N=t;switch(t){case"keypress":if(Qc(n)===0)break e;case"keydown":case"keyup":y=d1;break;case"focusin":N="focus",y=uf;break;case"focusout":N="blur",y=uf;break;case"beforeblur":case"afterblur":y=uf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=wv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Zk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=p1;break;case ZE:case eT:case tT:y=n1;break;case nT:y=g1;break;case"scroll":y=Xk;break;case"wheel":y=_1;break;case"copy":case"cut":case"paste":y=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ev}var _=(e&4)!==0,A=!_&&t==="scroll",x=_?m!==null?m+"Capture":null:m;_=[];for(var E=d,b;E!==null;){b=E;var D=b.stateNode;if(b.tag===5&&D!==null&&(b=D,x!==null&&(D=tl(E,x),D!=null&&_.push(ll(E,D,b)))),A)break;E=E.return}0<_.length&&(m=new y(m,N,null,n,h),f.push({event:m,listeners:_}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==up&&(N=n.relatedTarget||n.fromElement)&&(Ws(N)||N[cr]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(N=n.relatedTarget||n.toElement,y=d,N=N?Ws(N):null,N!==null&&(A=pi(N),N!==A||N.tag!==5&&N.tag!==6)&&(N=null)):(y=null,N=d),y!==N)){if(_=wv,D="onMouseLeave",x="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ev,D="onPointerLeave",x="onPointerEnter",E="pointer"),A=y==null?m:Mi(y),b=N==null?m:Mi(N),m=new _(D,E+"leave",y,n,h),m.target=A,m.relatedTarget=b,D=null,Ws(h)===d&&(_=new _(x,E+"enter",N,n,h),_.target=b,_.relatedTarget=A,D=_),A=D,y&&N)t:{for(_=y,x=N,E=0,b=_;b;b=Ii(b))E++;for(b=0,D=x;D;D=Ii(D))b++;for(;0<E-b;)_=Ii(_),E--;for(;0<b-E;)x=Ii(x),b--;for(;E--;){if(_===x||x!==null&&_===x.alternate)break t;_=Ii(_),x=Ii(x)}_=null}else _=null;y!==null&&Dv(f,m,y,_,!1),N!==null&&A!==null&&Dv(f,A,N,_,!0)}}e:{if(m=d?Mi(d):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var j=C1;else if(Cv(m))if(KE)j=k1;else{j=S1;var F=N1}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=b1);if(j&&(j=j(t,d))){GE(f,j,n,h);break e}F&&F(t,m,d),t==="focusout"&&(F=m._wrapperState)&&F.controlled&&m.type==="number"&&ip(m,"number",m.value)}switch(F=d?Mi(d):window,t){case"focusin":(Cv(F)||F.contentEditable==="true")&&(Oi=F,yp=d,Ma=null);break;case"focusout":Ma=yp=Oi=null;break;case"mousedown":_p=!0;break;case"contextmenu":case"mouseup":case"dragend":_p=!1,Av(f,n,h);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":Av(f,n,h)}var k;if(eg)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Di?qE(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(WE&&n.locale!=="ko"&&(Di||w!=="onCompositionStart"?w==="onCompositionEnd"&&Di&&(k=zE()):(zr=h,Xm="value"in zr?zr.value:zr.textContent,Di=!0)),F=Eu(d,w),0<F.length&&(w=new xv(w,t,null,n,h),f.push({event:w,listeners:F}),k?w.data=k:(k=HE(n),k!==null&&(w.data=k)))),(k=w1?x1(t,n):E1(t,n))&&(d=Eu(d,"onBeforeInput"),0<d.length&&(h=new xv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:d}),h.data=k))}sT(f,e)})}function ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=tl(t,n),i!=null&&r.unshift(ll(t,i,s)),i=tl(t,e),i!=null&&r.push(ll(t,i,s))),t=t.return}return r}function Ii(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dv(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,d=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&d!==null&&(a=d,s?(l=tl(n,i),l!=null&&o.unshift(ll(n,l,a))):s||(l=tl(n,i),l!=null&&o.push(ll(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var M1=/\r\n?/g,L1=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(M1,`
`).replace(L1,"")}function bc(t,e,n){if(e=Ov(e),Ov(t)!==e&&n)throw Error(U(425))}function Tu(){}var vp=null,wp=null;function xp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ep=typeof setTimeout=="function"?setTimeout:void 0,V1=typeof clearTimeout=="function"?clearTimeout:void 0,jv=typeof Promise=="function"?Promise:void 0,F1=typeof queueMicrotask=="function"?queueMicrotask:typeof jv<"u"?function(t){return jv.resolve(null).then(t).catch(U1)}:Ep;function U1(t){setTimeout(function(){throw t})}function _f(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),sl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sl(e)}function Yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),On="__reactFiber$"+ko,cl="__reactProps$"+ko,cr="__reactContainer$"+ko,Tp="__reactEvents$"+ko,B1="__reactListeners$"+ko,$1="__reactHandles$"+ko;function Ws(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[cr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mv(t);t!==null;){if(n=t[On])return n;t=Mv(t)}return e}t=n,n=t.parentNode}return null}function Ul(t){return t=t[On]||t[cr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Dd(t){return t[cl]||null}var Ip=[],Li=-1;function Is(t){return{current:t}}function Re(t){0>Li||(t.current=Ip[Li],Ip[Li]=null,Li--)}function Ce(t,e){Li++,Ip[Li]=t.current,t.current=e}var us={},Et=Is(us),Lt=Is(!1),Zs=us;function ao(t,e){var n=t.type.contextTypes;if(!n)return us;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Vt(t){return t=t.childContextTypes,t!=null}function Iu(){Re(Lt),Re(Et)}function Lv(t,e,n){if(Et.current!==us)throw Error(U(168));Ce(Et,e),Ce(Lt,n)}function oT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(U(108,Nk(t)||"Unknown",s));return Me({},n,r)}function Cu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||us,Zs=Et.current,Ce(Et,t),Ce(Lt,Lt.current),!0}function Vv(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=oT(t,e,Zs),r.__reactInternalMemoizedMergedChildContext=t,Re(Lt),Re(Et),Ce(Et,t)):Re(Lt),Ce(Lt,n)}var Jn=null,Od=!1,vf=!1;function aT(t){Jn===null?Jn=[t]:Jn.push(t)}function z1(t){Od=!0,aT(t)}function Cs(){if(!vf&&Jn!==null){vf=!0;var t=0,e=we;try{var n=Jn;for(we=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jn=null,Od=!1}catch(s){throw Jn!==null&&(Jn=Jn.slice(t+1)),PE(Gm,Cs),s}finally{we=e,vf=!1}}return null}var Vi=[],Fi=0,Nu=null,Su=0,Zt=[],en=0,ei=null,Zn=1,er="";function Fs(t,e){Vi[Fi++]=Su,Vi[Fi++]=Nu,Nu=t,Su=e}function lT(t,e,n){Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=ei,ei=t;var r=Zn;t=er;var s=32-_n(r)-1;r&=~(1<<s),n+=1;var i=32-_n(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Zn=1<<32-_n(e)+s|n<<s|r,er=i+t}else Zn=1<<i|n<<s|r,er=t}function ng(t){t.return!==null&&(Fs(t,1),lT(t,1,0))}function rg(t){for(;t===Nu;)Nu=Vi[--Fi],Vi[Fi]=null,Su=Vi[--Fi],Vi[Fi]=null;for(;t===ei;)ei=Zt[--en],Zt[en]=null,er=Zt[--en],Zt[en]=null,Zn=Zt[--en],Zt[en]=null}var Gt=null,Wt=null,Pe=!1,hn=null;function cT(t,e){var n=nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Fv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=Yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:Zn,overflow:er}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Wt=null,!0):!1;default:return!1}}function Cp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Np(t){if(Pe){var e=Wt;if(e){var n=e;if(!Fv(t,e)){if(Cp(t))throw Error(U(418));e=Yr(n.nextSibling);var r=Gt;e&&Fv(t,e)?cT(r,n):(t.flags=t.flags&-4097|2,Pe=!1,Gt=t)}}else{if(Cp(t))throw Error(U(418));t.flags=t.flags&-4097|2,Pe=!1,Gt=t}}}function Uv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function kc(t){if(t!==Gt)return!1;if(!Pe)return Uv(t),Pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!xp(t.type,t.memoizedProps)),e&&(e=Wt)){if(Cp(t))throw uT(),Error(U(418));for(;e;)cT(t,e),e=Yr(e.nextSibling)}if(Uv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Gt?Yr(t.stateNode.nextSibling):null;return!0}function uT(){for(var t=Wt;t;)t=Yr(t.nextSibling)}function lo(){Wt=Gt=null,Pe=!1}function sg(t){hn===null?hn=[t]:hn.push(t)}var W1=vr.ReactCurrentBatchConfig;function da(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function Ac(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bv(t){var e=t._init;return e(t._payload)}function dT(t){function e(x,E){if(t){var b=x.deletions;b===null?(x.deletions=[E],x.flags|=16):b.push(E)}}function n(x,E){if(!t)return null;for(;E!==null;)e(x,E),E=E.sibling;return null}function r(x,E){for(x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function s(x,E){return x=es(x,E),x.index=0,x.sibling=null,x}function i(x,E,b){return x.index=b,t?(b=x.alternate,b!==null?(b=b.index,b<E?(x.flags|=2,E):b):(x.flags|=2,E)):(x.flags|=1048576,E)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,E,b,D){return E===null||E.tag!==6?(E=Nf(b,x.mode,D),E.return=x,E):(E=s(E,b),E.return=x,E)}function l(x,E,b,D){var j=b.type;return j===Pi?h(x,E,b.props.children,D,b.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Or&&Bv(j)===E.type)?(D=s(E,b.props),D.ref=da(x,E,b),D.return=x,D):(D=nu(b.type,b.key,b.props,null,x.mode,D),D.ref=da(x,E,b),D.return=x,D)}function d(x,E,b,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==b.containerInfo||E.stateNode.implementation!==b.implementation?(E=Sf(b,x.mode,D),E.return=x,E):(E=s(E,b.children||[]),E.return=x,E)}function h(x,E,b,D,j){return E===null||E.tag!==7?(E=Ys(b,x.mode,D,j),E.return=x,E):(E=s(E,b),E.return=x,E)}function f(x,E,b){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Nf(""+E,x.mode,b),E.return=x,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case vc:return b=nu(E.type,E.key,E.props,null,x.mode,b),b.ref=da(x,null,E),b.return=x,b;case Ri:return E=Sf(E,x.mode,b),E.return=x,E;case Or:var D=E._init;return f(x,D(E._payload),b)}if(Ta(E)||oa(E))return E=Ys(E,x.mode,b,null),E.return=x,E;Ac(x,E)}return null}function m(x,E,b,D){var j=E!==null?E.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return j!==null?null:a(x,E,""+b,D);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case vc:return b.key===j?l(x,E,b,D):null;case Ri:return b.key===j?d(x,E,b,D):null;case Or:return j=b._init,m(x,E,j(b._payload),D)}if(Ta(b)||oa(b))return j!==null?null:h(x,E,b,D,null);Ac(x,b)}return null}function y(x,E,b,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return x=x.get(b)||null,a(E,x,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case vc:return x=x.get(D.key===null?b:D.key)||null,l(E,x,D,j);case Ri:return x=x.get(D.key===null?b:D.key)||null,d(E,x,D,j);case Or:var F=D._init;return y(x,E,b,F(D._payload),j)}if(Ta(D)||oa(D))return x=x.get(b)||null,h(E,x,D,j,null);Ac(E,D)}return null}function N(x,E,b,D){for(var j=null,F=null,k=E,w=E=0,C=null;k!==null&&w<b.length;w++){k.index>w?(C=k,k=null):C=k.sibling;var I=m(x,k,b[w],D);if(I===null){k===null&&(k=C);break}t&&k&&I.alternate===null&&e(x,k),E=i(I,E,w),F===null?j=I:F.sibling=I,F=I,k=C}if(w===b.length)return n(x,k),Pe&&Fs(x,w),j;if(k===null){for(;w<b.length;w++)k=f(x,b[w],D),k!==null&&(E=i(k,E,w),F===null?j=k:F.sibling=k,F=k);return Pe&&Fs(x,w),j}for(k=r(x,k);w<b.length;w++)C=y(k,x,w,b[w],D),C!==null&&(t&&C.alternate!==null&&k.delete(C.key===null?w:C.key),E=i(C,E,w),F===null?j=C:F.sibling=C,F=C);return t&&k.forEach(function(S){return e(x,S)}),Pe&&Fs(x,w),j}function _(x,E,b,D){var j=oa(b);if(typeof j!="function")throw Error(U(150));if(b=j.call(b),b==null)throw Error(U(151));for(var F=j=null,k=E,w=E=0,C=null,I=b.next();k!==null&&!I.done;w++,I=b.next()){k.index>w?(C=k,k=null):C=k.sibling;var S=m(x,k,I.value,D);if(S===null){k===null&&(k=C);break}t&&k&&S.alternate===null&&e(x,k),E=i(S,E,w),F===null?j=S:F.sibling=S,F=S,k=C}if(I.done)return n(x,k),Pe&&Fs(x,w),j;if(k===null){for(;!I.done;w++,I=b.next())I=f(x,I.value,D),I!==null&&(E=i(I,E,w),F===null?j=I:F.sibling=I,F=I);return Pe&&Fs(x,w),j}for(k=r(x,k);!I.done;w++,I=b.next())I=y(k,x,w,I.value,D),I!==null&&(t&&I.alternate!==null&&k.delete(I.key===null?w:I.key),E=i(I,E,w),F===null?j=I:F.sibling=I,F=I);return t&&k.forEach(function(R){return e(x,R)}),Pe&&Fs(x,w),j}function A(x,E,b,D){if(typeof b=="object"&&b!==null&&b.type===Pi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case vc:e:{for(var j=b.key,F=E;F!==null;){if(F.key===j){if(j=b.type,j===Pi){if(F.tag===7){n(x,F.sibling),E=s(F,b.props.children),E.return=x,x=E;break e}}else if(F.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Or&&Bv(j)===F.type){n(x,F.sibling),E=s(F,b.props),E.ref=da(x,F,b),E.return=x,x=E;break e}n(x,F);break}else e(x,F);F=F.sibling}b.type===Pi?(E=Ys(b.props.children,x.mode,D,b.key),E.return=x,x=E):(D=nu(b.type,b.key,b.props,null,x.mode,D),D.ref=da(x,E,b),D.return=x,x=D)}return o(x);case Ri:e:{for(F=b.key;E!==null;){if(E.key===F)if(E.tag===4&&E.stateNode.containerInfo===b.containerInfo&&E.stateNode.implementation===b.implementation){n(x,E.sibling),E=s(E,b.children||[]),E.return=x,x=E;break e}else{n(x,E);break}else e(x,E);E=E.sibling}E=Sf(b,x.mode,D),E.return=x,x=E}return o(x);case Or:return F=b._init,A(x,E,F(b._payload),D)}if(Ta(b))return N(x,E,b,D);if(oa(b))return _(x,E,b,D);Ac(x,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,E!==null&&E.tag===6?(n(x,E.sibling),E=s(E,b),E.return=x,x=E):(n(x,E),E=Nf(b,x.mode,D),E.return=x,x=E),o(x)):n(x,E)}return A}var co=dT(!0),hT=dT(!1),bu=Is(null),ku=null,Ui=null,ig=null;function og(){ig=Ui=ku=null}function ag(t){var e=bu.current;Re(bu),t._currentValue=e}function Sp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){ku=t,ig=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function on(t){var e=t._currentValue;if(ig!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(ku===null)throw Error(U(308));Ui=t,ku.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var qs=null;function lg(t){qs===null?qs=[t]:qs.push(t)}function fT(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lg(e)):(n.next=s.next,s.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var jr=!1;function cg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,ur(t,n)}return s=r.interleaved,s===null?(e.next=e,lg(r)):(e.next=s.next,s.next=e),r.interleaved=e,ur(t,n)}function Yc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Km(t,n)}}function $v(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Au(t,e,n,r){var s=t.updateQueue;jr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,d=l.next;l.next=null,o===null?i=d:o.next=d,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=d:a.next=d,h.lastBaseUpdate=l))}if(i!==null){var f=s.baseState;o=0,h=d=l=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var N=t,_=a;switch(m=e,y=n,_.tag){case 1:if(N=_.payload,typeof N=="function"){f=N.call(y,f,m);break e}f=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=_.payload,m=typeof N=="function"?N.call(y,f,m):N,m==null)break e;f=Me({},f,m);break e;case 2:jr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(d=h=y,l=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(l=f),s.baseState=l,s.firstBaseUpdate=d,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=f}}function zv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(U(191,s));s.call(r)}}}var Bl={},Ln=Is(Bl),ul=Is(Bl),dl=Is(Bl);function Hs(t){if(t===Bl)throw Error(U(174));return t}function ug(t,e){switch(Ce(dl,e),Ce(ul,t),Ce(Ln,Bl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ap(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ap(e,t)}Re(Ln),Ce(Ln,e)}function uo(){Re(Ln),Re(ul),Re(dl)}function mT(t){Hs(dl.current);var e=Hs(Ln.current),n=ap(e,t.type);e!==n&&(Ce(ul,t),Ce(Ln,n))}function dg(t){ul.current===t&&(Re(Ln),Re(ul))}var De=Is(0);function Ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wf=[];function hg(){for(var t=0;t<wf.length;t++)wf[t]._workInProgressVersionPrimary=null;wf.length=0}var Xc=vr.ReactCurrentDispatcher,xf=vr.ReactCurrentBatchConfig,ti=0,Oe=null,Ye=null,st=null,Pu=!1,La=!1,hl=0,q1=0;function pt(){throw Error(U(321))}function fg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tn(t[n],e[n]))return!1;return!0}function pg(t,e,n,r,s,i){if(ti=i,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xc.current=t===null||t.memoizedState===null?Q1:Y1,t=n(r,s),La){i=0;do{if(La=!1,hl=0,25<=i)throw Error(U(301));i+=1,st=Ye=null,e.updateQueue=null,Xc.current=X1,t=n(r,s)}while(La)}if(Xc.current=Du,e=Ye!==null&&Ye.next!==null,ti=0,st=Ye=Oe=null,Pu=!1,e)throw Error(U(300));return t}function mg(){var t=hl!==0;return hl=0,t}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Oe.memoizedState=st=t:st=st.next=t,st}function an(){if(Ye===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=st===null?Oe.memoizedState:st.next;if(e!==null)st=e,Ye=t;else{if(t===null)throw Error(U(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},st===null?Oe.memoizedState=st=t:st=st.next=t}return st}function fl(t,e){return typeof e=="function"?e(t):e}function Ef(t){var e=an(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ye,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,d=i;do{var h=d.lane;if((ti&h)===h)l!==null&&(l=l.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Oe.lanes|=h,ni|=h}d=d.next}while(d!==null&&d!==i);l===null?o=r:l.next=a,Tn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Oe.lanes|=i,ni|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tf(t){var e=an(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Tn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function gT(){}function yT(t,e){var n=Oe,r=an(),s=e(),i=!Tn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ot=!0),r=r.queue,gg(wT.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,pl(9,vT.bind(null,n,r,s,e),void 0,null),at===null)throw Error(U(349));ti&30||_T(n,e,s)}return s}function _T(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vT(t,e,n,r){e.value=n,e.getSnapshot=r,xT(e)&&ET(t)}function wT(t,e,n){return n(function(){xT(e)&&ET(t)})}function xT(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tn(t,n)}catch{return!0}}function ET(t){var e=ur(t,1);e!==null&&vn(e,t,1,-1)}function Wv(t){var e=Rn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,Oe,t),[e.memoizedState,t]}function pl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function TT(){return an().memoizedState}function Jc(t,e,n,r){var s=Rn();Oe.flags|=t,s.memoizedState=pl(1|e,n,void 0,r===void 0?null:r)}function jd(t,e,n,r){var s=an();r=r===void 0?null:r;var i=void 0;if(Ye!==null){var o=Ye.memoizedState;if(i=o.destroy,r!==null&&fg(r,o.deps)){s.memoizedState=pl(e,n,i,r);return}}Oe.flags|=t,s.memoizedState=pl(1|e,n,i,r)}function qv(t,e){return Jc(8390656,8,t,e)}function gg(t,e){return jd(2048,8,t,e)}function IT(t,e){return jd(4,2,t,e)}function CT(t,e){return jd(4,4,t,e)}function NT(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ST(t,e,n){return n=n!=null?n.concat([t]):null,jd(4,4,NT.bind(null,e,t),n)}function yg(){}function bT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function kT(t,e){var n=an();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AT(t,e,n){return ti&21?(Tn(n,e)||(n=jE(),Oe.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function H1(t,e){var n=we;we=n!==0&&4>n?n:4,t(!0);var r=xf.transition;xf.transition={};try{t(!1),e()}finally{we=n,xf.transition=r}}function RT(){return an().memoizedState}function G1(t,e,n){var r=Zr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},PT(t))DT(e,n);else if(n=fT(t,e,n,r),n!==null){var s=bt();vn(n,t,r,s),OT(n,e,r)}}function K1(t,e,n){var r=Zr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(PT(t))DT(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Tn(a,o)){var l=e.interleaved;l===null?(s.next=s,lg(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=fT(t,e,s,r),n!==null&&(s=bt(),vn(n,t,r,s),OT(n,e,r))}}function PT(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function DT(t,e){La=Pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function OT(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Km(t,n)}}var Du={readContext:on,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},Q1={readContext:on,useCallback:function(t,e){return Rn().memoizedState=[t,e===void 0?null:e],t},useContext:on,useEffect:qv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Jc(4194308,4,NT.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Jc(4,2,t,e)},useMemo:function(t,e){var n=Rn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=G1.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Rn();return t={current:t},e.memoizedState=t},useState:Wv,useDebugValue:yg,useDeferredValue:function(t){return Rn().memoizedState=t},useTransition:function(){var t=Wv(!1),e=t[0];return t=H1.bind(null,t[1]),Rn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,s=Rn();if(Pe){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),at===null)throw Error(U(349));ti&30||_T(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,qv(wT.bind(null,r,i,t),[t]),r.flags|=2048,pl(9,vT.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Rn(),e=at.identifierPrefix;if(Pe){var n=er,r=Zn;n=(r&~(1<<32-_n(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=hl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=q1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Y1={readContext:on,useCallback:bT,useContext:on,useEffect:gg,useImperativeHandle:ST,useInsertionEffect:IT,useLayoutEffect:CT,useMemo:kT,useReducer:Ef,useRef:TT,useState:function(){return Ef(fl)},useDebugValue:yg,useDeferredValue:function(t){var e=an();return AT(e,Ye.memoizedState,t)},useTransition:function(){var t=Ef(fl)[0],e=an().memoizedState;return[t,e]},useMutableSource:gT,useSyncExternalStore:yT,useId:RT,unstable_isNewReconciler:!1},X1={readContext:on,useCallback:bT,useContext:on,useEffect:gg,useImperativeHandle:ST,useInsertionEffect:IT,useLayoutEffect:CT,useMemo:kT,useReducer:Tf,useRef:TT,useState:function(){return Tf(fl)},useDebugValue:yg,useDeferredValue:function(t){var e=an();return Ye===null?e.memoizedState=t:AT(e,Ye.memoizedState,t)},useTransition:function(){var t=Tf(fl)[0],e=an().memoizedState;return[t,e]},useMutableSource:gT,useSyncExternalStore:yT,useId:RT,unstable_isNewReconciler:!1};function un(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Md={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Zr(t),i=sr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Xr(t,i,s),e!==null&&(vn(e,t,s,r),Yc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=bt(),s=Zr(t),i=sr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Xr(t,i,s),e!==null&&(vn(e,t,s,r),Yc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=bt(),r=Zr(t),s=sr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Xr(t,s,r),e!==null&&(vn(e,t,r,n),Yc(e,t,r))}};function Hv(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ol(n,r)||!ol(s,i):!0}function jT(t,e,n){var r=!1,s=us,i=e.contextType;return typeof i=="object"&&i!==null?i=on(i):(s=Vt(e)?Zs:Et.current,r=e.contextTypes,i=(r=r!=null)?ao(t,s):us),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Md,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Gv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Md.enqueueReplaceState(e,e.state,null)}function kp(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},cg(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=on(i):(i=Vt(e)?Zs:Et.current,s.context=ao(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(bp(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Md.enqueueReplaceState(s,s.state,null),Au(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ho(t,e){try{var n="",r=e;do n+=Ck(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function If(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ap(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var J1=typeof WeakMap=="function"?WeakMap:Map;function MT(t,e,n){n=sr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ju||(ju=!0,Up=r),Ap(t,e)},n}function LT(t,e,n){n=sr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ap(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ap(t,e),typeof r!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new J1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=hA.bind(null,t,e,n),e.then(t,t))}function Qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Yv(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=sr(-1,1),e.tag=2,Xr(n,e,1))),n.lanes|=1),t)}var Z1=vr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?hT(e,null,n,r):co(e,t.child,n,r)}function Xv(t,e,n,r,s){n=n.render;var i=e.ref;return Yi(e,s),r=pg(t,e,n,r,i,s),n=mg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Pe&&n&&ng(e),e.flags|=1,St(t,e,r,s),e.child)}function Jv(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,VT(t,e,i,r,s)):(t=nu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(o,r)&&t.ref===e.ref)return dr(t,e,s)}return e.flags|=1,t=es(i,r),t.ref=e.ref,t.return=e,e.child=t}function VT(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ol(i,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,dr(t,e,s)}return Rp(t,e,n,r,s)}function FT(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce($i,$t),$t|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce($i,$t),$t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce($i,$t),$t|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce($i,$t),$t|=r;return St(t,e,s,n),e.child}function UT(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rp(t,e,n,r,s){var i=Vt(n)?Zs:Et.current;return i=ao(e,i),Yi(e,s),n=pg(t,e,n,r,i,s),r=mg(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,dr(t,e,s)):(Pe&&r&&ng(e),e.flags|=1,St(t,e,n,s),e.child)}function Zv(t,e,n,r,s){if(Vt(n)){var i=!0;Cu(e)}else i=!1;if(Yi(e,s),e.stateNode===null)Zc(t,e),jT(e,n,r),kp(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=on(d):(d=Vt(n)?Zs:Et.current,d=ao(e,d));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==d)&&Gv(e,o,r,d),jr=!1;var m=e.memoizedState;o.state=m,Au(e,r,o,s),l=e.memoizedState,a!==r||m!==l||Lt.current||jr?(typeof h=="function"&&(bp(e,n,h,r),l=e.memoizedState),(a=jr||Hv(e,n,a,r,m,l,d))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=d,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pT(t,e),a=e.memoizedProps,d=e.type===e.elementType?a:un(e.type,a),o.props=d,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=on(l):(l=Vt(n)?Zs:Et.current,l=ao(e,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Gv(e,o,r,l),jr=!1,m=e.memoizedState,o.state=m,Au(e,r,o,s);var N=e.memoizedState;a!==f||m!==N||Lt.current||jr?(typeof y=="function"&&(bp(e,n,y,r),N=e.memoizedState),(d=jr||Hv(e,n,d,r,m,N,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=l,r=d):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Pp(t,e,n,r,i,s)}function Pp(t,e,n,r,s,i){UT(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Vv(e,n,!1),dr(t,e,i);r=e.stateNode,Z1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=co(e,t.child,null,i),e.child=co(e,null,a,i)):St(t,e,a,i),e.memoizedState=r.state,s&&Vv(e,n,!0),e.child}function BT(t){var e=t.stateNode;e.pendingContext?Lv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lv(t,e.context,!1),ug(t,e.containerInfo)}function e0(t,e,n,r,s){return lo(),sg(s),e.flags|=256,St(t,e,n,r),e.child}var Dp={dehydrated:null,treeContext:null,retryLane:0};function Op(t){return{baseLanes:t,cachePool:null,transitions:null}}function $T(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(De,s&1),t===null)return Np(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Fd(o,r,0,null),t=Ys(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Op(n),e.memoizedState=Dp,t):_g(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return eA(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=es(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=es(a,i):(i=Ys(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Op(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Dp,r}return i=t.child,t=i.sibling,r=es(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function _g(t,e){return e=Fd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Rc(t,e,n,r){return r!==null&&sg(r),co(e,t.child,null,n),t=_g(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function eA(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=If(Error(U(422))),Rc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Fd({mode:"visible",children:r.children},s,0,null),i=Ys(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&co(e,t.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Dp,i);if(!(e.mode&1))return Rc(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(U(419)),r=If(i,r,void 0),Rc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=at,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,ur(t,s),vn(r,t,s,-1))}return Ig(),r=If(Error(U(421))),Rc(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=fA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Wt=Yr(s.nextSibling),Gt=e,Pe=!0,hn=null,t!==null&&(Zt[en++]=Zn,Zt[en++]=er,Zt[en++]=ei,Zn=t.id,er=t.overflow,ei=e),e=_g(e,r.children),e.flags|=4096,e)}function t0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sp(t.return,e,n)}function Cf(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function zT(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(St(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,n,e);else if(t.tag===19)t0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ru(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Cf(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ru(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Cf(e,!0,n,null,i);break;case"together":Cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function dr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=es(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=es(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tA(t,e,n){switch(e.tag){case 3:BT(e),lo();break;case 5:mT(e);break;case 1:Vt(e.type)&&Cu(e);break;case 4:ug(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(bu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?$T(t,e,n):(Ce(De,De.current&1),t=dr(t,e,n),t!==null?t.sibling:null);Ce(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zT(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,FT(t,e,n)}return dr(t,e,n)}var WT,jp,qT,HT;WT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jp=function(){};qT=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Hs(Ln.current);var i=null;switch(n){case"input":s=rp(t,s),r=rp(t,r),i=[];break;case"select":s=Me({},s,{value:void 0}),r=Me({},r,{value:void 0}),i=[];break;case"textarea":s=op(t,s),r=op(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Tu)}lp(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var a=s[d];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Za.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var l=r[d];if(a=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&l!==a&&(l!=null||a!=null))if(d==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(d,n)),n=l;else d==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(d,l)):d==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(d,""+l):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Za.hasOwnProperty(d)?(l!=null&&d==="onScroll"&&ke("scroll",t),i||a===l||(i=[])):(i=i||[]).push(d,l))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};HT=function(t,e,n,r){n!==r&&(e.flags|=4)};function ha(t,e){if(!Pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function nA(t,e,n){var r=e.pendingProps;switch(rg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Vt(e.type)&&Iu(),mt(e),null;case 3:return r=e.stateNode,uo(),Re(Lt),Re(Et),hg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(zp(hn),hn=null))),jp(t,e),mt(e),null;case 5:dg(e);var s=Hs(dl.current);if(n=e.type,t!==null&&e.stateNode!=null)qT(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return mt(e),null}if(t=Hs(Ln.current),kc(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[On]=e,r[cl]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<Ca.length;s++)ke(Ca[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":uv(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":hv(r,i),ke("invalid",r)}lp(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&bc(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&bc(r.textContent,a,t),s=["children",""+a]):Za.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":wc(r),dv(r,i,!0);break;case"textarea":wc(r),fv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Tu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=wE(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[cl]=r,WT(t,e,!1,!1),e.stateNode=t;e:{switch(o=cp(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ca.length;s++)ke(Ca[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":uv(t,r),s=rp(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Me({},r,{value:void 0}),ke("invalid",t);break;case"textarea":hv(t,r),s=op(t,r),ke("invalid",t);break;default:s=r}lp(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?TE(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xE(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&el(t,l):typeof l=="number"&&el(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Za.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ke("scroll",t):l!=null&&$m(t,i,l,o))}switch(n){case"input":wc(t),dv(t,r,!1);break;case"textarea":wc(t),fv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Hi(t,!!r.multiple,i,!1):r.defaultValue!=null&&Hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)HT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Hs(dl.current),Hs(Ln.current),kc(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(i=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:bc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bc(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return mt(e),null;case 13:if(Re(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Pe&&Wt!==null&&e.mode&1&&!(e.flags&128))uT(),lo(),e.flags|=98560,i=!1;else if(i=kc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(U(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[On]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),i=!1}else hn!==null&&(zp(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Je===0&&(Je=3):Ig())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return uo(),jp(t,e),t===null&&al(e.stateNode.containerInfo),mt(e),null;case 10:return ag(e.type._context),mt(e),null;case 17:return Vt(e.type)&&Iu(),mt(e),null;case 19:if(Re(De),i=e.memoizedState,i===null)return mt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ha(i,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ru(t),o!==null){for(e.flags|=128,ha(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&$e()>fo&&(e.flags|=128,r=!0,ha(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Pe)return mt(e),null}else 2*$e()-i.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,r=!0,ha(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=$e(),e.sibling=null,n=De.current,Ce(De,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Tg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?$t&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function rA(t,e){switch(rg(e),e.tag){case 1:return Vt(e.type)&&Iu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return uo(),Re(Lt),Re(Et),hg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dg(e),null;case 13:if(Re(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Re(De),null;case 4:return uo(),null;case 10:return ag(e.type._context),null;case 22:case 23:return Tg(),null;case 24:return null;default:return null}}var Pc=!1,_t=!1,sA=typeof WeakSet=="function"?WeakSet:Set,H=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Fe(t,e,r)}else n.current=null}function Mp(t,e,n){try{n()}catch(r){Fe(t,e,r)}}var n0=!1;function iA(t,e){if(vp=wu,t=XE(),tg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,d=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++d===s&&(a=o),m===i&&++h===r&&(l=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wp={focusedElem:t,selectionRange:n},wu=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var _=N.memoizedProps,A=N.memoizedState,x=e.stateNode,E=x.getSnapshotBeforeUpdate(e.elementType===e.type?_:un(e.type,_),A);x.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){Fe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return N=n0,n0=!1,N}function Va(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Mp(e,n,i)}s=s.next}while(s!==r)}}function Ld(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Lp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function GT(t){var e=t.alternate;e!==null&&(t.alternate=null,GT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[cl],delete e[Tp],delete e[B1],delete e[$1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function KT(t){return t.tag===5||t.tag===3||t.tag===4}function r0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||KT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tu));else if(r!==4&&(t=t.child,t!==null))for(Vp(t,e,n),t=t.sibling;t!==null;)Vp(t,e,n),t=t.sibling}function Fp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fp(t,e,n),t=t.sibling;t!==null;)Fp(t,e,n),t=t.sibling}var lt=null,dn=!1;function Rr(t,e,n){for(n=n.child;n!==null;)QT(t,e,n),n=n.sibling}function QT(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(kd,n)}catch{}switch(n.tag){case 5:_t||Bi(n,e);case 6:var r=lt,s=dn;lt=null,Rr(t,e,n),lt=r,dn=s,lt!==null&&(dn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(dn?(t=lt,n=n.stateNode,t.nodeType===8?_f(t.parentNode,n):t.nodeType===1&&_f(t,n),sl(t)):_f(lt,n.stateNode));break;case 4:r=lt,s=dn,lt=n.stateNode.containerInfo,dn=!0,Rr(t,e,n),lt=r,dn=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Mp(n,e,o),s=s.next}while(s!==r)}Rr(t,e,n);break;case 1:if(!_t&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Fe(n,e,a)}Rr(t,e,n);break;case 21:Rr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,Rr(t,e,n),_t=r):Rr(t,e,n);break;default:Rr(t,e,n)}}function s0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sA),e.forEach(function(r){var s=pA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,dn=!1;break e;case 3:lt=a.stateNode.containerInfo,dn=!0;break e;case 4:lt=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(lt===null)throw Error(U(160));QT(i,o,s),lt=null,dn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(d){Fe(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)YT(e,t),e=e.sibling}function YT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),An(t),r&4){try{Va(3,t,t.return),Ld(3,t)}catch(_){Fe(t,t.return,_)}try{Va(5,t,t.return)}catch(_){Fe(t,t.return,_)}}break;case 1:cn(e,t),An(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(cn(e,t),An(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var s=t.stateNode;try{el(s,"")}catch(_){Fe(t,t.return,_)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&_E(s,i),cp(a,o);var d=cp(a,i);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?TE(s,f):h==="dangerouslySetInnerHTML"?xE(s,f):h==="children"?el(s,f):$m(s,h,f,d)}switch(a){case"input":sp(s,i);break;case"textarea":vE(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Hi(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?Hi(s,!!i.multiple,i.defaultValue,!0):Hi(s,!!i.multiple,i.multiple?[]:"",!1))}s[cl]=i}catch(_){Fe(t,t.return,_)}}break;case 6:if(cn(e,t),An(t),r&4){if(t.stateNode===null)throw Error(U(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(_){Fe(t,t.return,_)}}break;case 3:if(cn(e,t),An(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(_){Fe(t,t.return,_)}break;case 4:cn(e,t),An(t);break;case 13:cn(e,t),An(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xg=$e())),r&4&&s0(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(d=_t)||h,cn(e,t),_t=d):cn(e,t),An(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!h&&t.mode&1)for(H=t,h=t.child;h!==null;){for(f=H=h;H!==null;){switch(m=H,y=m.child,m.tag){case 0:case 11:case 14:case 15:Va(4,m,m.return);break;case 1:Bi(m,m.return);var N=m.stateNode;if(typeof N.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(_){Fe(r,n,_)}}break;case 5:Bi(m,m.return);break;case 22:if(m.memoizedState!==null){o0(f);continue}}y!==null?(y.return=m,H=y):o0(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=EE("display",o))}catch(_){Fe(t,t.return,_)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(_){Fe(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:cn(e,t),An(t),r&4&&s0(t);break;case 21:break;default:cn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(KT(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(el(s,""),r.flags&=-33);var i=r0(t);Fp(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=r0(t);Vp(t,a,o);break;default:throw Error(U(161))}}catch(l){Fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function oA(t,e,n){H=t,XT(t)}function XT(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pc;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||_t;a=Pc;var d=_t;if(Pc=o,(_t=l)&&!d)for(H=s;H!==null;)o=H,l=o.child,o.tag===22&&o.memoizedState!==null?a0(s):l!==null?(l.return=o,H=l):a0(s);for(;i!==null;)H=i,XT(i),i=i.sibling;H=s,Pc=a,_t=d}i0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):i0(t)}}function i0(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Ld(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&zv(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&sl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}_t||e.flags&512&&Lp(e)}catch(m){Fe(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function o0(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function a0(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ld(4,e)}catch(l){Fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Fe(e,s,l)}}var i=e.return;try{Lp(e)}catch(l){Fe(e,i,l)}break;case 5:var o=e.return;try{Lp(e)}catch(l){Fe(e,o,l)}}}catch(l){Fe(e,e.return,l)}if(e===t){H=null;break}var a=e.sibling;if(a!==null){a.return=e.return,H=a;break}H=e.return}}var aA=Math.ceil,Ou=vr.ReactCurrentDispatcher,vg=vr.ReactCurrentOwner,rn=vr.ReactCurrentBatchConfig,me=0,at=null,qe=null,ut=0,$t=0,$i=Is(0),Je=0,ml=null,ni=0,Vd=0,wg=0,Fa=null,Pt=null,xg=0,fo=1/0,Xn=null,ju=!1,Up=null,Jr=null,Dc=!1,Wr=null,Mu=0,Ua=0,Bp=null,eu=-1,tu=0;function bt(){return me&6?$e():eu!==-1?eu:eu=$e()}function Zr(t){return t.mode&1?me&2&&ut!==0?ut&-ut:W1.transition!==null?(tu===0&&(tu=jE()),tu):(t=we,t!==0||(t=window.event,t=t===void 0?16:$E(t.type)),t):1}function vn(t,e,n,r){if(50<Ua)throw Ua=0,Bp=null,Error(U(185));Vl(t,n,r),(!(me&2)||t!==at)&&(t===at&&(!(me&2)&&(Vd|=n),Je===4&&Lr(t,ut)),Ft(t,r),n===1&&me===0&&!(e.mode&1)&&(fo=$e()+500,Od&&Cs()))}function Ft(t,e){var n=t.callbackNode;Wk(t,e);var r=vu(t,t===at?ut:0);if(r===0)n!==null&&gv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&gv(n),e===1)t.tag===0?z1(l0.bind(null,t)):aT(l0.bind(null,t)),F1(function(){!(me&6)&&Cs()}),n=null;else{switch(ME(r)){case 1:n=Gm;break;case 4:n=DE;break;case 16:n=_u;break;case 536870912:n=OE;break;default:n=_u}n=iI(n,JT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function JT(t,e){if(eu=-1,tu=0,me&6)throw Error(U(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=vu(t,t===at?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lu(t,r);else{e=r;var s=me;me|=2;var i=eI();(at!==t||ut!==e)&&(Xn=null,fo=$e()+500,Qs(t,e));do try{uA();break}catch(a){ZT(t,a)}while(!0);og(),Ou.current=i,me=s,qe!==null?e=0:(at=null,ut=0,e=Je)}if(e!==0){if(e===2&&(s=pp(t),s!==0&&(r=s,e=$p(t,s))),e===1)throw n=ml,Qs(t,0),Lr(t,r),Ft(t,$e()),n;if(e===6)Lr(t,r);else{if(s=t.current.alternate,!(r&30)&&!lA(s)&&(e=Lu(t,r),e===2&&(i=pp(t),i!==0&&(r=i,e=$p(t,i))),e===1))throw n=ml,Qs(t,0),Lr(t,r),Ft(t,$e()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Us(t,Pt,Xn);break;case 3:if(Lr(t,r),(r&130023424)===r&&(e=xg+500-$e(),10<e)){if(vu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){bt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Ep(Us.bind(null,t,Pt,Xn),e);break}Us(t,Pt,Xn);break;case 4:if(Lr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-_n(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=$e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*aA(r/1960))-r,10<r){t.timeoutHandle=Ep(Us.bind(null,t,Pt,Xn),r);break}Us(t,Pt,Xn);break;case 5:Us(t,Pt,Xn);break;default:throw Error(U(329))}}}return Ft(t,$e()),t.callbackNode===n?JT.bind(null,t):null}function $p(t,e){var n=Fa;return t.current.memoizedState.isDehydrated&&(Qs(t,e).flags|=256),t=Lu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&zp(e)),t}function zp(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function lA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Tn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e){for(e&=~wg,e&=~Vd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-_n(e),r=1<<n;t[n]=-1,e&=~r}}function l0(t){if(me&6)throw Error(U(327));Xi();var e=vu(t,0);if(!(e&1))return Ft(t,$e()),null;var n=Lu(t,e);if(t.tag!==0&&n===2){var r=pp(t);r!==0&&(e=r,n=$p(t,r))}if(n===1)throw n=ml,Qs(t,0),Lr(t,e),Ft(t,$e()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Us(t,Pt,Xn),Ft(t,$e()),null}function Eg(t,e){var n=me;me|=1;try{return t(e)}finally{me=n,me===0&&(fo=$e()+500,Od&&Cs())}}function ri(t){Wr!==null&&Wr.tag===0&&!(me&6)&&Xi();var e=me;me|=1;var n=rn.transition,r=we;try{if(rn.transition=null,we=1,t)return t()}finally{we=r,rn.transition=n,me=e,!(me&6)&&Cs()}}function Tg(){$t=$i.current,Re($i)}function Qs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,V1(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(rg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Iu();break;case 3:uo(),Re(Lt),Re(Et),hg();break;case 5:dg(r);break;case 4:uo();break;case 13:Re(De);break;case 19:Re(De);break;case 10:ag(r.type._context);break;case 22:case 23:Tg()}n=n.return}if(at=t,qe=t=es(t.current,null),ut=$t=e,Je=0,ml=null,wg=Vd=ni=0,Pt=Fa=null,qs!==null){for(e=0;e<qs.length;e++)if(n=qs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}qs=null}return t}function ZT(t,e){do{var n=qe;try{if(og(),Xc.current=Du,Pu){for(var r=Oe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pu=!1}if(ti=0,st=Ye=Oe=null,La=!1,hl=0,vg.current=null,n===null||n.return===null){Je=1,ml=e,qe=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Qv(o);if(y!==null){y.flags&=-257,Yv(y,o,a,i,e),y.mode&1&&Kv(i,d,e),e=y,l=d;var N=e.updateQueue;if(N===null){var _=new Set;_.add(l),e.updateQueue=_}else N.add(l);break e}else{if(!(e&1)){Kv(i,d,e),Ig();break e}l=Error(U(426))}}else if(Pe&&a.mode&1){var A=Qv(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Yv(A,o,a,i,e),sg(ho(l,a));break e}}i=l=ho(l,a),Je!==4&&(Je=2),Fa===null?Fa=[i]:Fa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=MT(i,l,e);$v(i,x);break e;case 1:a=l;var E=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Jr===null||!Jr.has(b)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=LT(i,a,e);$v(i,D);break e}}i=i.return}while(i!==null)}nI(n)}catch(j){e=j,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function eI(){var t=Ou.current;return Ou.current=Du,t===null?Du:t}function Ig(){(Je===0||Je===3||Je===2)&&(Je=4),at===null||!(ni&268435455)&&!(Vd&268435455)||Lr(at,ut)}function Lu(t,e){var n=me;me|=2;var r=eI();(at!==t||ut!==e)&&(Xn=null,Qs(t,e));do try{cA();break}catch(s){ZT(t,s)}while(!0);if(og(),me=n,Ou.current=r,qe!==null)throw Error(U(261));return at=null,ut=0,Je}function cA(){for(;qe!==null;)tI(qe)}function uA(){for(;qe!==null&&!jk();)tI(qe)}function tI(t){var e=sI(t.alternate,t,$t);t.memoizedProps=t.pendingProps,e===null?nI(t):qe=e,vg.current=null}function nI(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rA(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,qe=null;return}}else if(n=nA(n,e,$t),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Je===0&&(Je=5)}function Us(t,e,n){var r=we,s=rn.transition;try{rn.transition=null,we=1,dA(t,e,n,r)}finally{rn.transition=s,we=r}return null}function dA(t,e,n,r){do Xi();while(Wr!==null);if(me&6)throw Error(U(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(qk(t,i),t===at&&(qe=at=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Dc||(Dc=!0,iI(_u,function(){return Xi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=rn.transition,rn.transition=null;var o=we;we=1;var a=me;me|=4,vg.current=null,iA(t,n),YT(n,t),R1(wp),wu=!!vp,wp=vp=null,t.current=n,oA(n),Mk(),me=a,we=o,rn.transition=i}else t.current=n;if(Dc&&(Dc=!1,Wr=t,Mu=s),i=t.pendingLanes,i===0&&(Jr=null),Fk(n.stateNode),Ft(t,$e()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ju)throw ju=!1,t=Up,Up=null,t;return Mu&1&&t.tag!==0&&Xi(),i=t.pendingLanes,i&1?t===Bp?Ua++:(Ua=0,Bp=t):Ua=0,Cs(),null}function Xi(){if(Wr!==null){var t=ME(Mu),e=rn.transition,n=we;try{if(rn.transition=null,we=16>t?16:t,Wr===null)var r=!1;else{if(t=Wr,Wr=null,Mu=0,me&6)throw Error(U(331));var s=me;for(me|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var d=a[l];for(H=d;H!==null;){var h=H;switch(h.tag){case 0:case 11:case 15:Va(8,h,i)}var f=h.child;if(f!==null)f.return=h,H=f;else for(;H!==null;){h=H;var m=h.sibling,y=h.return;if(GT(h),h===d){H=null;break}if(m!==null){m.return=y,H=m;break}H=y}}}var N=i.alternate;if(N!==null){var _=N.child;if(_!==null){N.child=null;do{var A=_.sibling;_.sibling=null,_=A}while(_!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Va(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,H=x;break e}H=i.return}}var E=t.current;for(H=E;H!==null;){o=H;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,H=b;else e:for(o=E;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ld(9,a)}}catch(j){Fe(a,a.return,j)}if(a===o){H=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,H=D;break e}H=a.return}}if(me=s,Cs(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(kd,t)}catch{}r=!0}return r}finally{we=n,rn.transition=e}}return!1}function c0(t,e,n){e=ho(n,e),e=MT(t,e,1),t=Xr(t,e,1),e=bt(),t!==null&&(Vl(t,1,e),Ft(t,e))}function Fe(t,e,n){if(t.tag===3)c0(t,t,n);else for(;e!==null;){if(e.tag===3){c0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jr===null||!Jr.has(r))){t=ho(n,t),t=LT(e,t,1),e=Xr(e,t,1),t=bt(),e!==null&&(Vl(e,1,t),Ft(e,t));break}}e=e.return}}function hA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=bt(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ut&n)===n&&(Je===4||Je===3&&(ut&130023424)===ut&&500>$e()-xg?Qs(t,0):wg|=n),Ft(t,e)}function rI(t,e){e===0&&(t.mode&1?(e=Tc,Tc<<=1,!(Tc&130023424)&&(Tc=4194304)):e=1);var n=bt();t=ur(t,e),t!==null&&(Vl(t,e,n),Ft(t,n))}function fA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rI(t,n)}function pA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),rI(t,n)}var sI;sI=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Lt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,tA(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,Pe&&e.flags&1048576&&lT(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Zc(t,e),t=e.pendingProps;var s=ao(e,Et.current);Yi(e,n),s=pg(null,e,r,t,s,n);var i=mg();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Vt(r)?(i=!0,Cu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,cg(e),s.updater=Md,e.stateNode=s,s._reactInternals=e,kp(e,r,t,n),e=Pp(null,e,r,!0,i,n)):(e.tag=0,Pe&&i&&ng(e),St(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Zc(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=gA(r),t=un(r,t),s){case 0:e=Rp(null,e,r,t,n);break e;case 1:e=Zv(null,e,r,t,n);break e;case 11:e=Xv(null,e,r,t,n);break e;case 14:e=Jv(null,e,r,un(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Rp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Zv(t,e,r,s,n);case 3:e:{if(BT(e),t===null)throw Error(U(387));r=e.pendingProps,i=e.memoizedState,s=i.element,pT(t,e),Au(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ho(Error(U(423)),e),e=e0(t,e,r,n,s);break e}else if(r!==s){s=ho(Error(U(424)),e),e=e0(t,e,r,n,s);break e}else for(Wt=Yr(e.stateNode.containerInfo.firstChild),Gt=e,Pe=!0,hn=null,n=hT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lo(),r===s){e=dr(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return mT(e),t===null&&Np(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,xp(r,s)?o=null:i!==null&&xp(r,i)&&(e.flags|=32),UT(t,e),St(t,e,o,n),e.child;case 6:return t===null&&Np(e),null;case 13:return $T(t,e,n);case 4:return ug(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=co(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Xv(t,e,r,s,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(bu,r._currentValue),r._currentValue=o,i!==null)if(Tn(i.value,o)){if(i.children===s.children&&!Lt.current){e=dr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=sr(-1,n&-n),l.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?l.next=l:(l.next=h.next,h.next=l),d.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Sp(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(U(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sp(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}St(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Yi(e,n),s=on(s),r=r(s),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,s=un(r,e.pendingProps),s=un(r.type,s),Jv(t,e,r,s,n);case 15:return VT(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:un(r,s),Zc(t,e),e.tag=1,Vt(r)?(t=!0,Cu(e)):t=!1,Yi(e,n),jT(e,r,s),kp(e,r,s,n),Pp(null,e,r,!0,t,n);case 19:return zT(t,e,n);case 22:return FT(t,e,n)}throw Error(U(156,e.tag))};function iI(t,e){return PE(t,e)}function mA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(t,e,n,r){return new mA(t,e,n,r)}function Cg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gA(t){if(typeof t=="function")return Cg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wm)return 11;if(t===qm)return 14}return 2}function es(t,e){var n=t.alternate;return n===null?(n=nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pi:return Ys(n.children,s,i,e);case zm:o=8,s|=8;break;case Zf:return t=nn(12,n,e,s|2),t.elementType=Zf,t.lanes=i,t;case ep:return t=nn(13,n,e,s),t.elementType=ep,t.lanes=i,t;case tp:return t=nn(19,n,e,s),t.elementType=tp,t.lanes=i,t;case mE:return Fd(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fE:o=10;break e;case pE:o=9;break e;case Wm:o=11;break e;case qm:o=14;break e;case Or:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=nn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ys(t,e,n,r){return t=nn(7,t,r,e),t.lanes=n,t}function Fd(t,e,n,r){return t=nn(22,t,r,e),t.elementType=mE,t.lanes=n,t.stateNode={isHidden:!1},t}function Nf(t,e,n){return t=nn(6,t,null,e),t.lanes=n,t}function Sf(t,e,n){return e=nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function yA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=af(0),this.expirationTimes=af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=af(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Ng(t,e,n,r,s,i,o,a,l){return t=new yA(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=nn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cg(i),t}function _A(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function oI(t){if(!t)return us;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(Vt(n))return oT(t,n,e)}return e}function aI(t,e,n,r,s,i,o,a,l){return t=Ng(n,r,!0,t,s,i,o,a,l),t.context=oI(null),n=t.current,r=bt(),s=Zr(n),i=sr(r,s),i.callback=e??null,Xr(n,i,s),t.current.lanes=s,Vl(t,s,r),Ft(t,r),t}function Ud(t,e,n,r){var s=e.current,i=bt(),o=Zr(s);return n=oI(n),e.context===null?e.context=n:e.pendingContext=n,e=sr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xr(s,e,o),t!==null&&(vn(t,s,o,i),Yc(t,s,o)),o}function Vu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sg(t,e){u0(t,e),(t=t.alternate)&&u0(t,e)}function vA(){return null}var lI=typeof reportError=="function"?reportError:function(t){console.error(t)};function bg(t){this._internalRoot=t}Bd.prototype.render=bg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Ud(t,e,null,null)};Bd.prototype.unmount=bg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Ud(null,t,null,null)}),e[cr]=null}};function Bd(t){this._internalRoot=t}Bd.prototype.unstable_scheduleHydration=function(t){if(t){var e=FE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Mr.length&&e!==0&&e<Mr[n].priority;n++);Mr.splice(n,0,t),n===0&&BE(t)}};function kg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function d0(){}function wA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Vu(o);i.call(d)}}var o=aI(e,r,t,0,null,!1,!1,"",d0);return t._reactRootContainer=o,t[cr]=o.current,al(t.nodeType===8?t.parentNode:t),ri(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var d=Vu(l);a.call(d)}}var l=Ng(t,0,!1,null,null,!1,!1,"",d0);return t._reactRootContainer=l,t[cr]=l.current,al(t.nodeType===8?t.parentNode:t),ri(function(){Ud(e,l,n,r)}),l}function zd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Vu(o);a.call(l)}}Ud(e,o,t,s)}else o=wA(n,e,t,s,r);return Vu(o)}LE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(Km(e,n|1),Ft(e,$e()),!(me&6)&&(fo=$e()+500,Cs()))}break;case 13:ri(function(){var r=ur(t,1);if(r!==null){var s=bt();vn(r,t,1,s)}}),Sg(t,1)}};Qm=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=bt();vn(e,t,134217728,n)}Sg(t,134217728)}};VE=function(t){if(t.tag===13){var e=Zr(t),n=ur(t,e);if(n!==null){var r=bt();vn(n,t,e,r)}Sg(t,e)}};FE=function(){return we};UE=function(t,e){var n=we;try{return we=t,e()}finally{we=n}};dp=function(t,e,n){switch(e){case"input":if(sp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Dd(r);if(!s)throw Error(U(90));yE(r),sp(r,s)}}}break;case"textarea":vE(t,n);break;case"select":e=n.value,e!=null&&Hi(t,!!n.multiple,e,!1)}};NE=Eg;SE=ri;var xA={usingClientEntryPoint:!1,Events:[Ul,Mi,Dd,IE,CE,Eg]},fa={findFiberByHostInstance:Ws,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},EA={bundleType:fa.bundleType,version:fa.version,rendererPackageName:fa.rendererPackageName,rendererConfig:fa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=AE(t),t===null?null:t.stateNode},findFiberByHostInstance:fa.findFiberByHostInstance||vA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{kd=Oc.inject(EA),Mn=Oc}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xA;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kg(e))throw Error(U(200));return _A(t,e,null,n)};Yt.createRoot=function(t,e){if(!kg(t))throw Error(U(299));var n=!1,r="",s=lI;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Ng(t,1,!1,null,null,n,!1,r,s),t[cr]=e.current,al(t.nodeType===8?t.parentNode:t),new bg(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=AE(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return ri(t)};Yt.hydrate=function(t,e,n){if(!$d(e))throw Error(U(200));return zd(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!kg(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=lI;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=aI(e,null,t,1,n??null,s,!1,i,o),t[cr]=e.current,al(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Bd(e)};Yt.render=function(t,e,n){if(!$d(e))throw Error(U(200));return zd(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!$d(t))throw Error(U(40));return t._reactRootContainer?(ri(function(){zd(null,null,t,!1,function(){t._reactRootContainer=null,t[cr]=null})}),!0):!1};Yt.unstable_batchedUpdates=Eg;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!$d(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return zd(t,e,n,!1,r)};Yt.version="18.3.1-next-f1338f8080-20240426";function cI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cI)}catch(t){console.error(t)}}cI(),cE.exports=Yt;var TA=cE.exports,h0=TA;Xf.createRoot=h0.createRoot,Xf.hydrateRoot=h0.hydrateRoot;/**
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
 */const IA=()=>{};var f0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e){if(!t)throw Ao(e)},Ao=function(t){return new Error("Firebase Database ("+uI.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},CA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,d=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|d>>6,y=d&63;l||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||f==null)throw new NA;const m=i<<2|a>>4;if(r.push(m),d!==64){const y=a<<4&240|d>>2;if(r.push(y),f!==64){const N=d<<6&192|f;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class NA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hI=function(t){const e=dI(t);return Ag.encodeByteArray(e,!0)},Fu=function(t){return hI(t).replace(/\./g,"")},Uu=function(t){try{return Ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(t){return fI(void 0,t)}function fI(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!bA(n)||(t[n]=fI(t[n],e[n]));return t}function bA(t){return t!=="__proto__"}/**
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
 */function kA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AA=()=>kA().__FIREBASE_DEFAULTS__,RA=()=>{if(typeof process>"u"||typeof f0>"u")return;const t=f0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uu(t[1]);return e&&JSON.parse(e)},Wd=()=>{try{return IA()||AA()||RA()||PA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pI=t=>{var e,n;return(n=(e=Wd())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Rg=t=>{const e=pI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mI=()=>{var t;return(t=Wd())==null?void 0:t.config},gI=t=>{var e;return(e=Wd())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function wr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Dg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Fu(JSON.stringify(n)),Fu(JSON.stringify(o)),""].join(".")}const Ba={};function DA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ba))Ba[e]?t.emulator.push(e):t.prod.push(e);return t}function OA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let p0=!1;function Hd(t,e){if(typeof window>"u"||typeof document>"u"||!wr(window.location.host)||Ba[t]===e||Ba[t]||p0)return;Ba[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=DA().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function a(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function d(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{p0=!0,o()},m}function h(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=OA(r),y=n("text"),N=document.getElementById(y)||document.createElement("span"),_=n("learnmore"),A=document.getElementById(_)||document.createElement("a"),x=n("preprendIcon"),E=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const b=m.element;a(b),h(A,_);const D=d();l(E,x),b.append(E,N,A,D),document.body.appendChild(b)}i?(N.innerText="Preview backend disconnected.",E.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,N.innerText="Preview backend running in this workspace."),N.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Og(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function jA(){var e;const t=(e=Wd())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function MA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function LA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VA(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function FA(){return uI.NODE_ADMIN===!0}function UA(){return!jA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function BA(){try{return typeof indexedDB=="object"}catch{return!1}}function $A(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zA,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$l.prototype.create)}}class $l{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?WA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Hn(s,a,r)}}function WA(t,e){return t.replace(qA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=gl(Uu(i[0])||""),n=gl(Uu(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},HA=function(t){const e=_I(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GA=function(t){const e=_I(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function po(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Wp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bu(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(m0(i)&&m0(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function m0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Sa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],d,h;for(let f=0;f<80;f++){f<40?f<20?(d=a^i&(o^a),h=1518500249):(d=i^o^a,h=1859775393):f<60?(d=i&o|a&(i|o),h=2400959708):(d=i^o^a,h=3395469782);const m=(s<<5|s>>>27)+d+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=m}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function QA(t,e){const n=new YA(t,e);return n.subscribe.bind(n)}class YA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bf),s.error===void 0&&(s.error=bf),s.complete===void 0&&(s.complete=bf);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bf(){}function vI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,$(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gd=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bs="[DEFAULT]";/**
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
 */class ZA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Pg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tR(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:eR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eR(t){return t===Bs?void 0:t}function tR(t){return t.instantiationMode==="EAGER"}/**
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
 */class nR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const rR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},sR=ae.INFO,iR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},oR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=iR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kd{constructor(e){this.name=e,this._logLevel=sR,this._logHandler=oR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const aR=(t,e)=>e.some(n=>t instanceof n);let g0,y0;function lR(){return g0||(g0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return y0||(y0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wI=new WeakMap,qp=new WeakMap,xI=new WeakMap,kf=new WeakMap,jg=new WeakMap;function uR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ts(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wI.set(n,t)}).catch(()=>{}),jg.set(e,t),e}function dR(t){if(qp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qp.set(t,e)}let Hp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hR(t){Hp=t(Hp)}function fR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Af(this),e,...n);return xI.set(r,e.sort?e.sort():[e]),ts(r)}:cR().includes(t)?function(...e){return t.apply(Af(this),e),ts(wI.get(this))}:function(...e){return ts(t.apply(Af(this),e))}}function pR(t){return typeof t=="function"?fR(t):(t instanceof IDBTransaction&&dR(t),aR(t,lR())?new Proxy(t,Hp):t)}function ts(t){if(t instanceof IDBRequest)return uR(t);if(kf.has(t))return kf.get(t);const e=pR(t);return e!==t&&(kf.set(t,e),jg.set(e,t)),e}const Af=t=>jg.get(t);function mR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=ts(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ts(o.result),l.oldVersion,l.newVersion,ts(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const gR=["get","getKey","getAll","getAllKeys","count"],yR=["put","add","delete","clear"],Rf=new Map;function _0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=yR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&l.done]))[0]};return Rf.set(e,i),i}hR(t=>({...t,get:(e,n,r)=>_0(e,n)||t.get(e,n,r),has:(e,n)=>!!_0(e,n)||t.has(e,n)}));/**
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
 */class _R{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gp="@firebase/app",v0="0.14.7";/**
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
 */const fr=new Kd("@firebase/app"),wR="@firebase/app-compat",xR="@firebase/analytics-compat",ER="@firebase/analytics",TR="@firebase/app-check-compat",IR="@firebase/app-check",CR="@firebase/auth",NR="@firebase/auth-compat",SR="@firebase/database",bR="@firebase/data-connect",kR="@firebase/database-compat",AR="@firebase/functions",RR="@firebase/functions-compat",PR="@firebase/installations",DR="@firebase/installations-compat",OR="@firebase/messaging",jR="@firebase/messaging-compat",MR="@firebase/performance",LR="@firebase/performance-compat",VR="@firebase/remote-config",FR="@firebase/remote-config-compat",UR="@firebase/storage",BR="@firebase/storage-compat",$R="@firebase/firestore",zR="@firebase/ai",WR="@firebase/firestore-compat",qR="firebase",HR="12.8.0";/**
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
 */const Kp="[DEFAULT]",GR={[Gp]:"fire-core",[wR]:"fire-core-compat",[ER]:"fire-analytics",[xR]:"fire-analytics-compat",[IR]:"fire-app-check",[TR]:"fire-app-check-compat",[CR]:"fire-auth",[NR]:"fire-auth-compat",[SR]:"fire-rtdb",[bR]:"fire-data-connect",[kR]:"fire-rtdb-compat",[AR]:"fire-fn",[RR]:"fire-fn-compat",[PR]:"fire-iid",[DR]:"fire-iid-compat",[OR]:"fire-fcm",[jR]:"fire-fcm-compat",[MR]:"fire-perf",[LR]:"fire-perf-compat",[VR]:"fire-rc",[FR]:"fire-rc-compat",[UR]:"fire-gcs",[BR]:"fire-gcs-compat",[$R]:"fire-fst",[WR]:"fire-fst-compat",[zR]:"fire-vertex","fire-js":"fire-js",[qR]:"fire-js-all"};/**
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
 */const $u=new Map,KR=new Map,Qp=new Map;function w0(t,e){try{t.container.addComponent(e)}catch(n){fr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(Qp.has(e))return fr.debug(`There were multiple attempts to register component ${e}.`),!1;Qp.set(e,t);for(const n of $u.values())w0(n,t);for(const n of KR.values())w0(n,t);return!0}function zl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const QR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new $l("app","Firebase",QR);/**
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
 */class YR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=HR;function EI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Kp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw ns.create("bad-app-name",{appName:String(s)});if(n||(n=mI()),!n)throw ns.create("no-options");const i=$u.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw ns.create("duplicate-app",{appName:s})}const o=new nR(s);for(const l of Qp.values())o.addComponent(l);const a=new YR(n,r,o);return $u.set(s,a),a}function Qd(t=Kp){const e=$u.get(t);if(!e&&t===Kp&&mI())return EI();if(!e)throw ns.create("no-app",{appName:t});return e}function sn(t,e,n){let r=GR[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fr.warn(o.join(" "));return}hs(new hr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const XR="firebase-heartbeat-database",JR=1,yl="firebase-heartbeat-store";let Pf=null;function TI(){return Pf||(Pf=mR(XR,JR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ns.create("idb-open",{originalErrorMessage:t.message})})),Pf}async function ZR(t){try{const n=(await TI()).transaction(yl),r=await n.objectStore(yl).get(II(t));return await n.done,r}catch(e){if(e instanceof Hn)fr.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fr.warn(n.message)}}}async function x0(t,e){try{const r=(await TI()).transaction(yl,"readwrite");await r.objectStore(yl).put(e,II(t)),await r.done}catch(n){if(n instanceof Hn)fr.warn(n.message);else{const r=ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fr.warn(r.message)}}}function II(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eP=1024,tP=30;class nP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=E0();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>tP){const o=iP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=E0(),{heartbeatsToSend:r,unsentEntries:s}=rP(this._heartbeatsCache.heartbeats),i=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fr.warn(n),""}}}function E0(){return new Date().toISOString().substring(0,10)}function rP(t,e=eP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),T0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),T0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return BA()?$A().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return x0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return x0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function T0(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}function iP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function oP(t){hs(new hr("platform-logger",e=>new _R(e),"PRIVATE")),hs(new hr("heartbeat",e=>new nP(e),"PRIVATE")),sn(Gp,v0,t),sn(Gp,v0,"esm2020"),sn("fire-js","")}oP("");var aP="firebase",lP="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(aP,lP,"app");function CI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const cP=CI,NI=new $l("auth","Firebase",CI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Kd("@firebase/auth");function uP(t,...e){zu.logLevel<=ae.WARN&&zu.warn(`Auth (${Ns}): ${t}`,...e)}function ru(t,...e){zu.logLevel<=ae.ERROR&&zu.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t,...e){throw Mg(t,...e)}function Vn(t,...e){return Mg(t,...e)}function SI(t,e,n){const r={...cP(),[e]:n};return new $l("auth","Firebase",r).create(e,{appName:t.name})}function rs(t){return SI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return NI.create(t,...e)}function X(t,e,...n){if(!t)throw Mg(e,...n)}function tr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ru(e),new Error(e)}function pr(t,e){t||tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function dP(){return I0()==="http:"||I0()==="https:"}function I0(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dP()||LA()||"connection"in navigator)?navigator.onLine:!0}function fP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.shortDelay=e,this.longDelay=n,pr(n>e,"Short delay should be less than long delay!"),this.isMobile=Og()||yI()}get(){return hP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t,e){pr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gP=new Wl(3e4,6e4);function mi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ss(t,e,n,r,s={}){return kI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ro({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:l,...i};return MA()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&wr(t.emulatorConfig.host)&&(d.credentials="include"),bI.fetch()(await AI(t,t.config.apiHost,n,a),d)})}async function kI(t,e,n){t._canInitEmulator=!1;const r={...pP,...e};try{const s=new _P(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jc(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,d]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw SI(t,h,d);In(t,h)}}catch(s){if(s instanceof Hn)throw s;In(t,"network-request-failed",{message:String(s)})}}async function Yd(t,e,n,r,s={}){const i=await Ss(t,e,n,r,s);return"mfaPendingCredential"in i&&In(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function AI(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Lg(t.config,s):`${t.config.apiScheme}://${s}`;return mP.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function yP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _P{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),gP.get())})}}function jc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vn(t,e,r);return s.customData._tokenResponse=n,s}function C0(t){return t!==void 0&&t.enterprise!==void 0}class vP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wP(t,e){return Ss(t,"GET","/v2/recaptchaConfig",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return Ss(t,"POST","/v1/accounts:delete",e)}async function Wu(t,e){return Ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EP(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=Vg(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$a(Df(s.auth_time)),issuedAtTime:$a(Df(s.iat)),expirationTime:$a(Df(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Df(t){return Number(t)*1e3}function Vg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ru("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uu(n);return s?JSON.parse(s):(ru("Failed to decode base64 JWT payload"),null)}catch(s){return ru("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function N0(t){const e=Vg(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&TP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$a(this.lastLoginAt),this.creationTime=$a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qu(t){var f;const e=t.auth,n=await t.getIdToken(),r=await _l(t,Wu(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?RI(s.providerUserInfo):[],o=NP(t.providerData,i),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=a?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Xp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function CP(t){const e=Le(t);await qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function RI(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){const n=await kI(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await AI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&wr(t.emulatorConfig.host)&&(l.credentials="include"),bI.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bP(t,e){return Ss(t,"POST","/v2/accounts:revokeToken",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=N0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await SP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ji;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new IP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Xp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _l(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EP(this,e)}reload(){return CP(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(rs(this.auth));const e=await this.getIdToken();return await _l(this,xP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,d=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:y,providerData:N,stsTokenManager:_}=n;X(f&&_,e,"internal-error");const A=Ji.fromJSON(this.name,_);X(typeof f=="string",e,"internal-error"),Pr(r,e.name),Pr(s,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof y=="boolean",e,"internal-error"),Pr(i,e.name),Pr(o,e.name),Pr(a,e.name),Pr(l,e.name),Pr(d,e.name),Pr(h,e.name);const x=new pn({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:A,createdAt:d,lastLoginAt:h});return N&&Array.isArray(N)&&(x.providerData=N.map(E=>({...E}))),l&&(x._redirectEventId=l),x}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ji;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?RI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ji;a.updateFromIdToken(r);const l=new pn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Xp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=new Map;function nr(t){pr(t instanceof Function,"Expected a class definition");let e=S0.get(t);return e?(pr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,S0.set(t,e),e)}/**
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
 */class PI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PI.type="NONE";const b0=PI;/**
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
 */function su(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=su(this.userKey,s.apiKey,i),this.fullPersistenceKey=su("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wu(this.auth,{idToken:e}).catch(()=>{});return n?pn._fromGetAccountInfoResponse(this.auth,n,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(nr(b0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||nr(b0);const o=su(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const h=await d._get(o);if(h){let f;if(typeof h=="string"){const m=await Wu(e,{idToken:h}).catch(()=>{});if(!m)break;f=await pn._fromGetAccountInfoResponse(e,m,h)}else f=pn._fromJSON(e,h);d!==i&&(a=f),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Zi(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Zi(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(VI(e))return"Blackberry";if(FI(e))return"Webos";if(OI(e))return"Safari";if((e.includes("chrome/")||jI(e))&&!e.includes("edge/"))return"Chrome";if(LI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DI(t=Tt()){return/firefox\//i.test(t)}function OI(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jI(t=Tt()){return/crios\//i.test(t)}function MI(t=Tt()){return/iemobile/i.test(t)}function LI(t=Tt()){return/android/i.test(t)}function VI(t=Tt()){return/blackberry/i.test(t)}function FI(t=Tt()){return/webos/i.test(t)}function Fg(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kP(t=Tt()){var e;return Fg(t)&&!!((e=window.navigator)!=null&&e.standalone)}function AP(){return VA()&&document.documentMode===10}function UI(t=Tt()){return Fg(t)||LI(t)||FI(t)||VI(t)||/windows phone/i.test(t)||MI(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(t,e=[]){let n;switch(t){case"Browser":n=k0(Tt());break;case"Worker":n=`${k0(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
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
 */class RP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PP(t,e={}){return Ss(t,"GET","/v2/passwordPolicy",mi(t,e))}/**
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
 */const DP=6;class OP{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??DP,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new A0(this),this.idTokenSubscription=new A0(this),this.beforeStateQueue=new RP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=NI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wu(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(rs(this));const n=e?Le(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(rs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(rs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PP(this),n=new OP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $l("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&nr(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&uP(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Po(t){return Le(t)}class A0{constructor(e){this.auth=e,this.observer=null,this.addObserver=QA(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MP(t){Xd=t}function $I(t){return Xd.loadJS(t)}function LP(){return Xd.recaptchaEnterpriseScript}function VP(){return Xd.gapiScript}function FP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class UP{constructor(){this.enterprise=new BP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class BP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const $P="recaptcha-enterprise",zI="NO_RECAPTCHA";class zP{constructor(e){this.type=$P,this.auth=Po(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{wP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const d=new vP(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;C0(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(zI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new UP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&C0(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=LP();l.length!==0&&(l+=a),$I(l).then(()=>{s(a,i,o)}).catch(d=>{o(d)})}}).catch(a=>{o(a)})})}}async function R0(t,e,n,r=!1,s=!1){const i=new zP(t);let o;if(s)o=zI;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,d=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function P0(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await R0(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await R0(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t,e){const n=zl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return s;In(s,"already-initialized")}return n.initialize({options:e})}function qP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(nr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HP(t,e,n){const r=Po(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=WI(e),{host:o,port:a}=GP(e),l=a===null?"":`:${a}`,d={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(ds(d,r.config.emulator)&&ds(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,wr(o)?(qd(`${i}//${o}${l}`),Hd("Auth",!0)):KP()}function WI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GP(t){const e=WI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:D0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:D0(o)}}}function D0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function KP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tr("not implemented")}_getIdTokenResponse(e){return tr("not implemented")}_linkToIdToken(e,n){return tr("not implemented")}_getReauthenticationResolver(e){return tr("not implemented")}}async function QP(t,e){return Ss(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e){return Yd(t,"POST","/v1/accounts:signInWithPassword",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(t,e){return Yd(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}async function JP(t,e){return Yd(t,"POST","/v1/accounts:signInWithEmailLink",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Ug{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return P0(e,n,"signInWithPassword",YP);case"emailLink":return XP(e,{email:this._email,oobCode:this._password});default:In(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return P0(e,r,"signUpPassword",QP);case"emailLink":return JP(e,{idToken:n,email:this._email,oobCode:this._password});default:In(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){return Yd(t,"POST","/v1/accounts:signInWithIdp",mi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP="http://localhost";class si extends Ug{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):In("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new si(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return eo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,eo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,eo(e,n)}buildRequest(){const e={requestUri:ZP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tD(t){const e=Na(Sa(t)).link,n=e?Na(Sa(e)).deep_link_id:null,r=Na(Sa(t)).deep_link_id;return(r?Na(Sa(r)).link:null)||r||n||e||t}class Bg{constructor(e){const n=Na(Sa(e)),r=n.apiKey??null,s=n.oobCode??null,i=eD(n.mode??null);X(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=tD(e);try{return new Bg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.providerId=Do.PROVIDER_ID}static credential(e,n){return vl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bg.parseLink(n);return X(r,"argument-error"),vl._fromEmailAndCode(e,r.code,r.tenantId)}}Do.PROVIDER_ID="password";Do.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Do.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ql extends qI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends ql{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends ql{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.GOOGLE_SIGN_IN_METHOD="google.com";Fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends ql{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ur.credential(e.oauthAccessToken)}catch{return null}}}Ur.GITHUB_SIGN_IN_METHOD="github.com";Ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends ql{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Br.credential(n,r)}catch{return null}}}Br.TWITTER_SIGN_IN_METHOD="twitter.com";Br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=O0(r);return new mo({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=O0(r);return new mo({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function O0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu extends Hn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hu(e,n,r,s)}}function HI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hu._fromErrorAndOperation(t,i,e,r):i})}async function nD(t,e,n=!1){const r=await _l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mo._forOperation(t,"link",r)}/**
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
 */async function rD(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(rs(r));const s="reauthenticate";try{const i=await _l(t,HI(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Vg(i.idToken);X(o,r,"internal-error");const{sub:a}=o;return X(t.uid===a,r,"user-mismatch"),mo._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&In(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(t,e,n=!1){if(zt(t.app))return Promise.reject(rs(t));const r="signIn",s=await HI(t,r,e),i=await mo._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function sD(t,e){return GI(Po(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iD(t){const e=Po(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function oD(t,e,n){return zt(t.app)?Promise.reject(rs(t)):sD(Le(t),Do.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&iD(t),r})}function aD(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function lD(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function cD(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}const Gu="__sak";/**
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
 */class KI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gu,"1"),this.storage.removeItem(Gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=1e3,dD=10;class QI extends KI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);AP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dD):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QI.type="LOCAL";const hD=QI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends KI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YI.type="SESSION";const XI=YI;/**
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
 */function fD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),l=await fD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const d=$g("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return window}function mD(t){Fn().location.href=t}/**
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
 */function JI(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function gD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _D(){return JI()?self:null}/**
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
 */const ZI="firebaseLocalStorageDb",vD=1,Ku="firebaseLocalStorage",eC="fbase_key";class Hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zd(t,e){return t.transaction([Ku],e?"readwrite":"readonly").objectStore(Ku)}function wD(){const t=indexedDB.deleteDatabase(ZI);return new Hl(t).toPromise()}function Jp(){const t=indexedDB.open(ZI,vD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ku,{keyPath:eC})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ku)?e(r):(r.close(),await wD(),e(await Jp()))})})}async function j0(t,e,n){const r=Zd(t,!0).put({[eC]:e,value:n});return new Hl(r).toPromise()}async function xD(t,e){const n=Zd(t,!1).get(e),r=await new Hl(n).toPromise();return r===void 0?null:r.value}function M0(t,e){const n=Zd(t,!0).delete(e);return new Hl(n).toPromise()}const ED=800,TD=3;class tC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jd._getInstance(_D()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await gD(),!this.activeServiceWorker)return;this.sender=new pD(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jp();return await j0(e,Gu,"1"),await M0(e,Gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>j0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>M0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Zd(s,!1).getAll();return new Hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ED)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tC.type="LOCAL";const ID=tC;new Wl(3e4,6e4);/**
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
 */function CD(t,e){return e?nr(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zg extends Ug{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return eo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return eo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ND(t){return GI(t.auth,new zg(t),t.bypassAuthState)}function SD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),rD(n,new zg(t),t.bypassAuthState)}async function bD(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),nD(n,new zg(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return bD;case"reauthViaPopup":case"reauthViaRedirect":return SD;default:In(this.auth,"internal-error")}}resolve(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD=new Wl(2e3,1e4);class zi extends nC{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){pr(this.filter.length===1,"Popup operations only handle one event");const e=$g();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,kD.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD="pendingRedirect",iu=new Map;class RD extends nC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=iu.get(this.auth._key());if(!e){try{const r=await PD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}iu.set(this.auth._key(),e)}return this.bypassAuthState||iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PD(t,e){const n=jD(e),r=OD(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function DD(t,e){iu.set(t._key(),e)}function OD(t){return nr(t._redirectPersistence)}function jD(t){return su(AD,t.config.apiKey,t.name)}async function MD(t,e,n=!1){if(zt(t.app))return Promise.reject(rs(t));const r=Po(t),s=CD(r,e),o=await new RD(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=10*60*1e3;class VD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rC(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LD&&this.cachedEventUids.clear(),this.cachedEventUids.has(L0(e))}saveEventToCache(e){this.cachedEventUids.add(L0(e)),this.lastProcessedEventTime=Date.now()}}function L0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rC(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e={}){return Ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$D=/^https?/;async function zD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UD(t);for(const n of e)try{if(WD(n))return}catch{}In(t,"unauthorized-domain")}function WD(t){const e=Yp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$D.test(n))return!1;if(BD.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qD=new Wl(3e4,6e4);function V0(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HD(t){return new Promise((e,n)=>{var s,i,o;function r(){V0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{V0(),n(Vn(t,"network-request-failed"))},timeout:qD.get()})}if((i=(s=Fn().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Fn().gapi)!=null&&o.load)r();else{const a=FP("iframefcb");return Fn()[a]=()=>{gapi.load?r():n(Vn(t,"network-request-failed"))},$I(`${VP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ou=null,e})}let ou=null;function GD(t){return ou=ou||HD(t),ou}/**
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
 */const KD=new Wl(5e3,15e3),QD="__/auth/iframe",YD="emulator/auth/iframe",XD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZD(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lg(e,YD):`https://${t.config.authDomain}/${QD}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=JD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ro(r).slice(1)}`}async function e2(t){const e=await GD(t),n=Fn().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:ZD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Fn().setTimeout(()=>{i(o)},KD.get());function l(){Fn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const t2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n2=500,r2=600,s2="_blank",i2="http://localhost";class F0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function o2(t,e,n,r=n2,s=r2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...t2,width:r.toString(),height:s.toString(),top:i,left:o},d=Tt().toLowerCase();n&&(a=jI(d)?s2:n),DI(d)&&(e=e||i2,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[y,N])=>`${m}${y}=${N},`,"");if(kP(d)&&a!=="_self")return a2(e||"",a),new F0(null);const f=window.open(e||"",a,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new F0(f)}function a2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const l2="__/auth/handler",c2="emulator/auth/handler",u2=encodeURIComponent("fac");async function U0(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof qI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ql){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),d=l?`#${u2}=${encodeURIComponent(l)}`:"";return`${d2(t)}?${Ro(a).slice(1)}${d}`}function d2({config:t}){return t.emulator?Lg(t,c2):`https://${t.authDomain}/${l2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="webStorageSupport";class h2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XI,this._completeRedirectFn=MD,this._overrideRedirectResult=DD}async _openPopup(e,n,r,s){var o;pr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await U0(e,n,r,Yp(),s);return o2(e,i,$g())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await U0(e,n,r,Yp(),s);return mD(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await e2(e),r=new VD(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Of,{type:Of},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Of];i!==void 0&&n(!!i),In(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return UI()||OI()||Fg()}}const f2=h2;var B0="@firebase/auth",$0="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g2(t){hs(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BI(t)},d=new jP(r,s,i,l);return qP(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new hr("auth-internal",e=>{const n=Po(e.getProvider("auth").getImmediate());return(r=>new p2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(B0,$0,m2(t)),sn(B0,$0,"esm2020")}/**
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
 */const y2=5*60,_2=gI("authIdTokenMaxAge")||y2;let z0=null;const v2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_2)return;const s=n==null?void 0:n.token;z0!==s&&(z0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function w2(t=Qd()){const e=zl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:f2,persistence:[ID,hD,XI]}),r=gI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=v2(i.toString());lD(n,o,()=>o(n.currentUser)),aD(n,a=>o(a))}}const s=pI("auth");return s&&HP(n,`http://${s}`),n}function x2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}MP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",x2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g2("Browser");var W0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ss,sC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,w){function C(){}C.prototype=w.prototype,k.F=w.prototype,k.prototype=new C,k.prototype.constructor=k,k.D=function(I,S,R){for(var T=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)T[Y-2]=arguments[Y];return w.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,w,C){C||(C=0);const I=Array(16);if(typeof w=="string")for(var S=0;S<16;++S)I[S]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(S=0;S<16;++S)I[S]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=k.g[0],C=k.g[1],S=k.g[2];let R=k.g[3],T;T=w+(R^C&(S^R))+I[0]+3614090360&4294967295,w=C+(T<<7&4294967295|T>>>25),T=R+(S^w&(C^S))+I[1]+3905402710&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(C^R&(w^C))+I[2]+606105819&4294967295,S=R+(T<<17&4294967295|T>>>15),T=C+(w^S&(R^w))+I[3]+3250441966&4294967295,C=S+(T<<22&4294967295|T>>>10),T=w+(R^C&(S^R))+I[4]+4118548399&4294967295,w=C+(T<<7&4294967295|T>>>25),T=R+(S^w&(C^S))+I[5]+1200080426&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(C^R&(w^C))+I[6]+2821735955&4294967295,S=R+(T<<17&4294967295|T>>>15),T=C+(w^S&(R^w))+I[7]+4249261313&4294967295,C=S+(T<<22&4294967295|T>>>10),T=w+(R^C&(S^R))+I[8]+1770035416&4294967295,w=C+(T<<7&4294967295|T>>>25),T=R+(S^w&(C^S))+I[9]+2336552879&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(C^R&(w^C))+I[10]+4294925233&4294967295,S=R+(T<<17&4294967295|T>>>15),T=C+(w^S&(R^w))+I[11]+2304563134&4294967295,C=S+(T<<22&4294967295|T>>>10),T=w+(R^C&(S^R))+I[12]+1804603682&4294967295,w=C+(T<<7&4294967295|T>>>25),T=R+(S^w&(C^S))+I[13]+4254626195&4294967295,R=w+(T<<12&4294967295|T>>>20),T=S+(C^R&(w^C))+I[14]+2792965006&4294967295,S=R+(T<<17&4294967295|T>>>15),T=C+(w^S&(R^w))+I[15]+1236535329&4294967295,C=S+(T<<22&4294967295|T>>>10),T=w+(S^R&(C^S))+I[1]+4129170786&4294967295,w=C+(T<<5&4294967295|T>>>27),T=R+(C^S&(w^C))+I[6]+3225465664&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^C&(R^w))+I[11]+643717713&4294967295,S=R+(T<<14&4294967295|T>>>18),T=C+(R^w&(S^R))+I[0]+3921069994&4294967295,C=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(C^S))+I[5]+3593408605&4294967295,w=C+(T<<5&4294967295|T>>>27),T=R+(C^S&(w^C))+I[10]+38016083&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^C&(R^w))+I[15]+3634488961&4294967295,S=R+(T<<14&4294967295|T>>>18),T=C+(R^w&(S^R))+I[4]+3889429448&4294967295,C=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(C^S))+I[9]+568446438&4294967295,w=C+(T<<5&4294967295|T>>>27),T=R+(C^S&(w^C))+I[14]+3275163606&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^C&(R^w))+I[3]+4107603335&4294967295,S=R+(T<<14&4294967295|T>>>18),T=C+(R^w&(S^R))+I[8]+1163531501&4294967295,C=S+(T<<20&4294967295|T>>>12),T=w+(S^R&(C^S))+I[13]+2850285829&4294967295,w=C+(T<<5&4294967295|T>>>27),T=R+(C^S&(w^C))+I[2]+4243563512&4294967295,R=w+(T<<9&4294967295|T>>>23),T=S+(w^C&(R^w))+I[7]+1735328473&4294967295,S=R+(T<<14&4294967295|T>>>18),T=C+(R^w&(S^R))+I[12]+2368359562&4294967295,C=S+(T<<20&4294967295|T>>>12),T=w+(C^S^R)+I[5]+4294588738&4294967295,w=C+(T<<4&4294967295|T>>>28),T=R+(w^C^S)+I[8]+2272392833&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^C)+I[11]+1839030562&4294967295,S=R+(T<<16&4294967295|T>>>16),T=C+(S^R^w)+I[14]+4259657740&4294967295,C=S+(T<<23&4294967295|T>>>9),T=w+(C^S^R)+I[1]+2763975236&4294967295,w=C+(T<<4&4294967295|T>>>28),T=R+(w^C^S)+I[4]+1272893353&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^C)+I[7]+4139469664&4294967295,S=R+(T<<16&4294967295|T>>>16),T=C+(S^R^w)+I[10]+3200236656&4294967295,C=S+(T<<23&4294967295|T>>>9),T=w+(C^S^R)+I[13]+681279174&4294967295,w=C+(T<<4&4294967295|T>>>28),T=R+(w^C^S)+I[0]+3936430074&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^C)+I[3]+3572445317&4294967295,S=R+(T<<16&4294967295|T>>>16),T=C+(S^R^w)+I[6]+76029189&4294967295,C=S+(T<<23&4294967295|T>>>9),T=w+(C^S^R)+I[9]+3654602809&4294967295,w=C+(T<<4&4294967295|T>>>28),T=R+(w^C^S)+I[12]+3873151461&4294967295,R=w+(T<<11&4294967295|T>>>21),T=S+(R^w^C)+I[15]+530742520&4294967295,S=R+(T<<16&4294967295|T>>>16),T=C+(S^R^w)+I[2]+3299628645&4294967295,C=S+(T<<23&4294967295|T>>>9),T=w+(S^(C|~R))+I[0]+4096336452&4294967295,w=C+(T<<6&4294967295|T>>>26),T=R+(C^(w|~S))+I[7]+1126891415&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~C))+I[14]+2878612391&4294967295,S=R+(T<<15&4294967295|T>>>17),T=C+(R^(S|~w))+I[5]+4237533241&4294967295,C=S+(T<<21&4294967295|T>>>11),T=w+(S^(C|~R))+I[12]+1700485571&4294967295,w=C+(T<<6&4294967295|T>>>26),T=R+(C^(w|~S))+I[3]+2399980690&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~C))+I[10]+4293915773&4294967295,S=R+(T<<15&4294967295|T>>>17),T=C+(R^(S|~w))+I[1]+2240044497&4294967295,C=S+(T<<21&4294967295|T>>>11),T=w+(S^(C|~R))+I[8]+1873313359&4294967295,w=C+(T<<6&4294967295|T>>>26),T=R+(C^(w|~S))+I[15]+4264355552&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~C))+I[6]+2734768916&4294967295,S=R+(T<<15&4294967295|T>>>17),T=C+(R^(S|~w))+I[13]+1309151649&4294967295,C=S+(T<<21&4294967295|T>>>11),T=w+(S^(C|~R))+I[4]+4149444226&4294967295,w=C+(T<<6&4294967295|T>>>26),T=R+(C^(w|~S))+I[11]+3174756917&4294967295,R=w+(T<<10&4294967295|T>>>22),T=S+(w^(R|~C))+I[2]+718787259&4294967295,S=R+(T<<15&4294967295|T>>>17),T=C+(R^(S|~w))+I[9]+3951481745&4294967295,k.g[0]=k.g[0]+w&4294967295,k.g[1]=k.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,k.g[2]=k.g[2]+S&4294967295,k.g[3]=k.g[3]+R&4294967295}r.prototype.v=function(k,w){w===void 0&&(w=k.length);const C=w-this.blockSize,I=this.C;let S=this.h,R=0;for(;R<w;){if(S==0)for(;R<=C;)s(this,k,R),R+=this.blockSize;if(typeof k=="string"){for(;R<w;)if(I[S++]=k.charCodeAt(R++),S==this.blockSize){s(this,I),S=0;break}}else for(;R<w;)if(I[S++]=k[R++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=w},r.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var w=1;w<k.length-8;++w)k[w]=0;w=this.o*8;for(var C=k.length-8;C<k.length;++C)k[C]=w&255,w/=256;for(this.v(k),k=Array(16),w=0,C=0;C<4;++C)for(let I=0;I<32;I+=8)k[w++]=this.g[C]>>>I&255;return k};function i(k,w){var C=a;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=w(k)}function o(k,w){this.h=w;const C=[];let I=!0;for(let S=k.length-1;S>=0;S--){const R=k[S]|0;I&&R==w||(C[S]=R,I=!1)}this.g=C}var a={};function l(k){return-128<=k&&k<128?i(k,function(w){return new o([w|0],w<0?-1:0)}):new o([k|0],k<0?-1:0)}function d(k){if(isNaN(k)||!isFinite(k))return f;if(k<0)return A(d(-k));const w=[];let C=1;for(let I=0;k>=C;I++)w[I]=k/C|0,C*=4294967296;return new o(w,0)}function h(k,w){if(k.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(k.charAt(0)=="-")return A(h(k.substring(1),w));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=d(Math.pow(w,8));let I=f;for(let R=0;R<k.length;R+=8){var S=Math.min(8,k.length-R);const T=parseInt(k.substring(R,R+S),w);S<8?(S=d(Math.pow(w,S)),I=I.j(S).add(d(T))):(I=I.j(C),I=I.add(d(T)))}return I}var f=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(_(this))return-A(this).m();let k=0,w=1;for(let C=0;C<this.g.length;C++){const I=this.i(C);k+=(I>=0?I:4294967296+I)*w,w*=4294967296}return k},t.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(N(this))return"0";if(_(this))return"-"+A(this).toString(k);const w=d(Math.pow(k,6));var C=this;let I="";for(;;){const S=D(C,w).g;C=x(C,S.j(w));let R=((C.g.length>0?C.g[0]:C.h)>>>0).toString(k);if(C=S,N(C))return R+I;for(;R.length<6;)R="0"+R;I=R+I}},t.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function N(k){if(k.h!=0)return!1;for(let w=0;w<k.g.length;w++)if(k.g[w]!=0)return!1;return!0}function _(k){return k.h==-1}t.l=function(k){return k=x(this,k),_(k)?-1:N(k)?0:1};function A(k){const w=k.g.length,C=[];for(let I=0;I<w;I++)C[I]=~k.g[I];return new o(C,~k.h).add(m)}t.abs=function(){return _(this)?A(this):this},t.add=function(k){const w=Math.max(this.g.length,k.g.length),C=[];let I=0;for(let S=0;S<=w;S++){let R=I+(this.i(S)&65535)+(k.i(S)&65535),T=(R>>>16)+(this.i(S)>>>16)+(k.i(S)>>>16);I=T>>>16,R&=65535,T&=65535,C[S]=T<<16|R}return new o(C,C[C.length-1]&-2147483648?-1:0)};function x(k,w){return k.add(A(w))}t.j=function(k){if(N(this)||N(k))return f;if(_(this))return _(k)?A(this).j(A(k)):A(A(this).j(k));if(_(k))return A(this.j(A(k)));if(this.l(y)<0&&k.l(y)<0)return d(this.m()*k.m());const w=this.g.length+k.g.length,C=[];for(var I=0;I<2*w;I++)C[I]=0;for(I=0;I<this.g.length;I++)for(let S=0;S<k.g.length;S++){const R=this.i(I)>>>16,T=this.i(I)&65535,Y=k.i(S)>>>16,Ne=k.i(S)&65535;C[2*I+2*S]+=T*Ne,E(C,2*I+2*S),C[2*I+2*S+1]+=R*Ne,E(C,2*I+2*S+1),C[2*I+2*S+1]+=T*Y,E(C,2*I+2*S+1),C[2*I+2*S+2]+=R*Y,E(C,2*I+2*S+2)}for(k=0;k<w;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=w;k<2*w;k++)C[k]=0;return new o(C,0)};function E(k,w){for(;(k[w]&65535)!=k[w];)k[w+1]+=k[w]>>>16,k[w]&=65535,w++}function b(k,w){this.g=k,this.h=w}function D(k,w){if(N(w))throw Error("division by zero");if(N(k))return new b(f,f);if(_(k))return w=D(A(k),w),new b(A(w.g),A(w.h));if(_(w))return w=D(k,A(w)),new b(A(w.g),w.h);if(k.g.length>30){if(_(k)||_(w))throw Error("slowDivide_ only works with positive integers.");for(var C=m,I=w;I.l(k)<=0;)C=j(C),I=j(I);var S=F(C,1),R=F(I,1);for(I=F(I,2),C=F(C,2);!N(I);){var T=R.add(I);T.l(k)<=0&&(S=S.add(C),R=T),I=F(I,1),C=F(C,1)}return w=x(k,S.j(w)),new b(S,w)}for(S=f;k.l(w)>=0;){for(C=Math.max(1,Math.floor(k.m()/w.m())),I=Math.ceil(Math.log(C)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),R=d(C),T=R.j(w);_(T)||T.l(k)>0;)C-=I,R=d(C),T=R.j(w);N(R)&&(R=m),S=S.add(R),k=x(k,T)}return new b(S,k)}t.B=function(k){return D(this,k).h},t.and=function(k){const w=Math.max(this.g.length,k.g.length),C=[];for(let I=0;I<w;I++)C[I]=this.i(I)&k.i(I);return new o(C,this.h&k.h)},t.or=function(k){const w=Math.max(this.g.length,k.g.length),C=[];for(let I=0;I<w;I++)C[I]=this.i(I)|k.i(I);return new o(C,this.h|k.h)},t.xor=function(k){const w=Math.max(this.g.length,k.g.length),C=[];for(let I=0;I<w;I++)C[I]=this.i(I)^k.i(I);return new o(C,this.h^k.h)};function j(k){const w=k.g.length+1,C=[];for(let I=0;I<w;I++)C[I]=k.i(I)<<1|k.i(I-1)>>>31;return new o(C,k.h)}function F(k,w){const C=w>>5;w%=32;const I=k.g.length-C,S=[];for(let R=0;R<I;R++)S[R]=w>0?k.i(R+C)>>>w|k.i(R+C+1)<<32-w:k.i(R+C);return new o(S,k.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,sC=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=h,ss=o}).apply(typeof W0<"u"?W0:typeof self<"u"?self:typeof window<"u"?window:{});var Mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iC,ba,oC,au,Zp,aC,lC,cC;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mc=="object"&&Mc];for(var p=0;p<c.length;++p){var g=c[p];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=n(this);function s(c,p){if(p)e:{var g=r;c=c.split(".");for(var v=0;v<c.length-1;v++){var O=c[v];if(!(O in g))break e;g=g[O]}c=c[c.length-1],v=g[c],p=p(v),p!=v&&p!=null&&e(g,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var g=[],v;for(v in p)Object.prototype.hasOwnProperty.call(p,v)&&g.push([v,p[v]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,g){return c.call.apply(c.bind,arguments)}function d(c,p,g){return d=l,d.apply(null,arguments)}function h(c,p){var g=Array.prototype.slice.call(arguments,1);return function(){var v=g.slice();return v.push.apply(v,arguments),c.apply(this,v)}}function f(c,p){function g(){}g.prototype=p.prototype,c.Z=p.prototype,c.prototype=new g,c.prototype.constructor=c,c.Ob=function(v,O,M){for(var z=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)z[ie-2]=arguments[ie];return p.prototype[O].apply(v,z)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function y(c){const p=c.length;if(p>0){const g=Array(p);for(let v=0;v<p;v++)g[v]=c[v];return g}return[]}function N(c,p){for(let v=1;v<arguments.length;v++){const O=arguments[v];var g=typeof O;if(g=g!="object"?g:O?Array.isArray(O)?"array":g:"null",g=="array"||g=="object"&&typeof O.length=="number"){g=c.length||0;const M=O.length||0;c.length=g+M;for(let z=0;z<M;z++)c[g+z]=O[z]}else c.push(O)}}class _{constructor(p,g){this.i=p,this.j=g,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function A(c){o.setTimeout(()=>{throw c},0)}function x(){var c=k;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class E{constructor(){this.h=this.g=null}add(p,g){const v=b.get();v.set(p,g),this.h?this.h.next=v:this.g=v,this.h=v}}var b=new _(()=>new D,c=>c.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,g){this.h=p,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let j,F=!1,k=new E,w=()=>{const c=Promise.resolve(void 0);j=()=>{c.then(C)}};function C(){for(var c;c=x();){try{c.h.call(c.g)}catch(g){A(g)}var p=b;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}F=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};o.addEventListener("test",g,p),o.removeEventListener("test",g,p)}catch{}return c}();function T(c){return/^[\s\xa0]*$/.test(c)}function Y(c,p){S.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}f(Y,S),Y.prototype.init=function(c,p){const g=this.type=c.type,v=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(g=="mouseover"?p=c.fromElement:g=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),Se=0;function ee(c,p,g,v,O){this.listener=c,this.proxy=null,this.src=p,this.type=g,this.capture=!!v,this.ha=O,this.key=++Se,this.da=this.fa=!1}function B(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function K(c,p,g){for(const v in c)p.call(g,c[v],v,c)}function G(c,p){for(const g in c)p.call(void 0,c[g],g,c)}function de(c){const p={};for(const g in c)p[g]=c[g];return p}const ye="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Kn(c,p){let g,v;for(let O=1;O<arguments.length;O++){v=arguments[O];for(g in v)c[g]=v[g];for(let M=0;M<ye.length;M++)g=ye[M],Object.prototype.hasOwnProperty.call(v,g)&&(c[g]=v[g])}}function Jt(c){this.src=c,this.g={},this.h=0}Jt.prototype.add=function(c,p,g,v,O){const M=c.toString();c=this.g[M],c||(c=this.g[M]=[],this.h++);const z=ln(c,p,v,O);return z>-1?(p=c[z],g||(p.fa=!1)):(p=new ee(p,this.src,M,!!v,O),p.fa=g,c.push(p)),p};function Ds(c,p){const g=p.type;if(g in c.g){var v=c.g[g],O=Array.prototype.indexOf.call(v,p,void 0),M;(M=O>=0)&&Array.prototype.splice.call(v,O,1),M&&(B(p),c.g[g].length==0&&(delete c.g[g],c.h--))}}function ln(c,p,g,v){for(let O=0;O<c.length;++O){const M=c[O];if(!M.da&&M.listener==p&&M.capture==!!g&&M.ha==v)return O}return-1}var Ir="closure_lm_"+(Math.random()*1e6|0),Oh={};function o_(c,p,g,v,O){if(Array.isArray(p)){for(let M=0;M<p.length;M++)o_(c,p[M],g,v,O);return null}return g=c_(g),c&&c[Ne]?c.J(p,g,a(v)?!!v.capture:!1,O):wb(c,p,g,!1,v,O)}function wb(c,p,g,v,O,M){if(!p)throw Error("Invalid event type");const z=a(O)?!!O.capture:!!O;let ie=Mh(c);if(ie||(c[Ir]=ie=new Jt(c)),g=ie.add(p,g,v,z,M),g.proxy)return g;if(v=xb(),g.proxy=v,v.src=c,v.listener=g,c.addEventListener)R||(O=z),O===void 0&&(O=!1),c.addEventListener(p.toString(),v,O);else if(c.attachEvent)c.attachEvent(l_(p.toString()),v);else if(c.addListener&&c.removeListener)c.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return g}function xb(){function c(g){return p.call(c.src,c.listener,g)}const p=Eb;return c}function a_(c,p,g,v,O){if(Array.isArray(p))for(var M=0;M<p.length;M++)a_(c,p[M],g,v,O);else v=a(v)?!!v.capture:!!v,g=c_(g),c&&c[Ne]?(c=c.i,M=String(p).toString(),M in c.g&&(p=c.g[M],g=ln(p,g,v,O),g>-1&&(B(p[g]),Array.prototype.splice.call(p,g,1),p.length==0&&(delete c.g[M],c.h--)))):c&&(c=Mh(c))&&(p=c.g[p.toString()],c=-1,p&&(c=ln(p,g,v,O)),(g=c>-1?p[c]:null)&&jh(g))}function jh(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[Ne])Ds(p.i,c);else{var g=c.type,v=c.proxy;p.removeEventListener?p.removeEventListener(g,v,c.capture):p.detachEvent?p.detachEvent(l_(g),v):p.addListener&&p.removeListener&&p.removeListener(v),(g=Mh(p))?(Ds(g,c),g.h==0&&(g.src=null,p[Ir]=null)):B(c)}}}function l_(c){return c in Oh?Oh[c]:Oh[c]="on"+c}function Eb(c,p){if(c.da)c=!0;else{p=new Y(p,this);const g=c.listener,v=c.ha||c.src;c.fa&&jh(c),c=g.call(v,p)}return c}function Mh(c){return c=c[Ir],c instanceof Jt?c:null}var Lh="__closure_events_fn_"+(Math.random()*1e9>>>0);function c_(c){return typeof c=="function"?c:(c[Lh]||(c[Lh]=function(p){return c.handleEvent(p)}),c[Lh])}function ft(){I.call(this),this.i=new Jt(this),this.M=this,this.G=null}f(ft,I),ft.prototype[Ne]=!0,ft.prototype.removeEventListener=function(c,p,g,v){a_(this,c,p,g,v)};function It(c,p){var g,v=c.G;if(v)for(g=[];v;v=v.G)g.push(v);if(c=c.M,v=p.type||p,typeof p=="string")p=new S(p,c);else if(p instanceof S)p.target=p.target||c;else{var O=p;p=new S(v,c),Kn(p,O)}O=!0;let M,z;if(g)for(z=g.length-1;z>=0;z--)M=p.g=g[z],O=oc(M,v,!0,p)&&O;if(M=p.g=c,O=oc(M,v,!0,p)&&O,O=oc(M,v,!1,p)&&O,g)for(z=0;z<g.length;z++)M=p.g=g[z],O=oc(M,v,!1,p)&&O}ft.prototype.N=function(){if(ft.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const g=c.g[p];for(let v=0;v<g.length;v++)B(g[v]);delete c.g[p],c.h--}}this.G=null},ft.prototype.J=function(c,p,g,v){return this.i.add(String(c),p,!1,g,v)},ft.prototype.K=function(c,p,g,v){return this.i.add(String(c),p,!0,g,v)};function oc(c,p,g,v){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let O=!0;for(let M=0;M<p.length;++M){const z=p[M];if(z&&!z.da&&z.capture==g){const ie=z.listener,Qe=z.ha||z.src;z.fa&&Ds(c.i,z),O=ie.call(Qe,v)!==!1&&O}}return O&&!v.defaultPrevented}function Tb(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=d(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(c,p||0)}function u_(c){c.g=Tb(()=>{c.g=null,c.i&&(c.i=!1,u_(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Ib extends I{constructor(p,g){super(),this.m=p,this.l=g,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:u_(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(c){I.call(this),this.h=c,this.g={}}f(Wo,I);var d_=[];function h_(c){K(c.g,function(p,g){this.g.hasOwnProperty(g)&&jh(p)},c),c.g={}}Wo.prototype.N=function(){Wo.Z.N.call(this),h_(this)},Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vh=o.JSON.stringify,Cb=o.JSON.parse,Nb=class{stringify(c){return o.JSON.stringify(c,void 0)}parse(c){return o.JSON.parse(c,void 0)}};function f_(){}function p_(){}var qo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fh(){S.call(this,"d")}f(Fh,S);function Uh(){S.call(this,"c")}f(Uh,S);var Os={},m_=null;function ac(){return m_=m_||new ft}Os.Ia="serverreachability";function g_(c){S.call(this,Os.Ia,c)}f(g_,S);function Ho(c){const p=ac();It(p,new g_(p))}Os.STAT_EVENT="statevent";function y_(c,p){S.call(this,Os.STAT_EVENT,c),this.stat=p}f(y_,S);function Ct(c){const p=ac();It(p,new y_(p,c))}Os.Ja="timingevent";function __(c,p){S.call(this,Os.Ja,c),this.size=p}f(__,S);function Go(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){c()},p)}function Ko(){this.g=!0}Ko.prototype.ua=function(){this.g=!1};function Sb(c,p,g,v,O,M){c.info(function(){if(c.g)if(M){var z="",ie=M.split("&");for(let xe=0;xe<ie.length;xe++){var Qe=ie[xe].split("=");if(Qe.length>1){const tt=Qe[0];Qe=Qe[1];const kn=tt.split("_");z=kn.length>=2&&kn[1]=="type"?z+(tt+"="+Qe+"&"):z+(tt+"=redacted&")}}}else z=null;else z=M;return"XMLHTTP REQ ("+v+") [attempt "+O+"]: "+p+`
`+g+`
`+z})}function bb(c,p,g,v,O,M,z){c.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+O+"]: "+p+`
`+g+`
`+M+" "+z})}function xi(c,p,g,v){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ab(c,g)+(v?" "+v:"")})}function kb(c,p){c.info(function(){return"TIMEOUT: "+p})}Ko.prototype.info=function(){};function Ab(c,p){if(!c.g)return p;if(!p)return null;try{const M=JSON.parse(p);if(M){for(c=0;c<M.length;c++)if(Array.isArray(M[c])){var g=M[c];if(!(g.length<2)){var v=g[1];if(Array.isArray(v)&&!(v.length<1)){var O=v[0];if(O!="noop"&&O!="stop"&&O!="close")for(let z=1;z<v.length;z++)v[z]=""}}}}return Vh(M)}catch{return p}}var lc={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},v_={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},w_;function Bh(){}f(Bh,f_),Bh.prototype.g=function(){return new XMLHttpRequest},w_=new Bh;function Qo(c){return encodeURIComponent(String(c))}function Rb(c){var p=1;c=c.split(":");const g=[];for(;p>0&&c.length;)g.push(c.shift()),p--;return c.length&&g.push(c.join(":")),g}function Cr(c,p,g,v){this.j=c,this.i=p,this.l=g,this.S=v||1,this.V=new Wo(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new x_}function x_(){this.i=null,this.g="",this.h=!1}var E_={},$h={};function zh(c,p,g){c.M=1,c.A=uc(bn(p)),c.u=g,c.R=!0,T_(c,null)}function T_(c,p){c.F=Date.now(),cc(c),c.B=bn(c.A);var g=c.B,v=c.S;Array.isArray(v)||(v=[String(v)]),M_(g.i,"t",v),c.C=0,g=c.j.L,c.h=new x_,c.g=ev(c.j,g?p:null,!c.u),c.P>0&&(c.O=new Ib(d(c.Y,c,c.g),c.P)),p=c.V,g=c.g,v=c.ba;var O="readystatechange";Array.isArray(O)||(O&&(d_[0]=O.toString()),O=d_);for(let M=0;M<O.length;M++){const z=o_(g,O[M],v||p.handleEvent,!1,p.h||p);if(!z)break;p.g[z.key]=z}p=c.J?de(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Ho(),Sb(c.i,c.v,c.B,c.l,c.S,c.u)}Cr.prototype.ba=function(c){c=c.target;const p=this.O;p&&br(c)==3?p.j():this.Y(c)},Cr.prototype.Y=function(c){try{if(c==this.g)e:{const ie=br(this.g),Qe=this.g.ya(),xe=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||z_(this.g)))){this.K||ie!=4||Qe==7||(Qe==8||xe<=0?Ho(3):Ho(2)),Wh(this);var p=this.g.ca();this.X=p;var g=Pb(this);if(this.o=p==200,bb(this.i,this.v,this.B,this.l,this.S,ie,p),this.o){if(this.U&&!this.L){t:{if(this.g){var v,O=this.g;if((v=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(v)){var M=v;break t}}M=null}if(c=M)xi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,qh(this,c);else{this.o=!1,this.m=3,Ct(12),js(this),Yo(this);break e}}if(this.R){c=!0;let tt;for(;!this.K&&this.C<g.length;)if(tt=Db(this,g),tt==$h){ie==4&&(this.m=4,Ct(14),c=!1),xi(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==E_){this.m=4,Ct(15),xi(this.i,this.l,g,"[Invalid Chunk]"),c=!1;break}else xi(this.i,this.l,tt,null),qh(this,tt);if(I_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||g.length!=0||this.h.h||(this.m=1,Ct(16),c=!1),this.o=this.o&&c,!c)xi(this.i,this.l,g,"[Invalid Chunked Response]"),js(this),Yo(this);else if(g.length>0&&!this.W){this.W=!0;var z=this.j;z.g==this&&z.aa&&!z.P&&(z.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),Zh(z),z.P=!0,Ct(11))}}else xi(this.i,this.l,g,null),qh(this,g);ie==4&&js(this),this.o&&!this.K&&(ie==4?Y_(this.j,this):(this.o=!1,cc(this)))}else Gb(this.g),p==400&&g.indexOf("Unknown SID")>0?(this.m=3,Ct(12)):(this.m=0,Ct(13)),js(this),Yo(this)}}}catch{}finally{}};function Pb(c){if(!I_(c))return c.g.la();const p=z_(c.g);if(p==="")return"";let g="";const v=p.length,O=br(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return js(c),Yo(c),"";c.h.i=new o.TextDecoder}for(let M=0;M<v;M++)c.h.h=!0,g+=c.h.i.decode(p[M],{stream:!(O&&M==v-1)});return p.length=0,c.h.g+=g,c.C=0,c.h.g}function I_(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Db(c,p){var g=c.C,v=p.indexOf(`
`,g);return v==-1?$h:(g=Number(p.substring(g,v)),isNaN(g)?E_:(v+=1,v+g>p.length?$h:(p=p.slice(v,v+g),c.C=v+g,p)))}Cr.prototype.cancel=function(){this.K=!0,js(this)};function cc(c){c.T=Date.now()+c.H,C_(c,c.H)}function C_(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Go(d(c.aa,c),p)}function Wh(c){c.D&&(o.clearTimeout(c.D),c.D=null)}Cr.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(kb(this.i,this.B),this.M!=2&&(Ho(),Ct(17)),js(this),this.m=2,Yo(this)):C_(this,this.T-c)};function Yo(c){c.j.I==0||c.K||Y_(c.j,c)}function js(c){Wh(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,h_(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function qh(c,p){try{var g=c.j;if(g.I!=0&&(g.g==c||Hh(g.h,c))){if(!c.L&&Hh(g.h,c)&&g.I==3){try{var v=g.Ba.g.parse(p)}catch{v=null}if(Array.isArray(v)&&v.length==3){var O=v;if(O[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<c.F)mc(g),fc(g);else break e;Jh(g),Ct(18)}}else g.xa=O[1],0<g.xa-g.K&&O[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Go(d(g.Va,g),6e3));b_(g.h)<=1&&g.ta&&(g.ta=void 0)}else Ls(g,11)}else if((c.L||g.g==c)&&mc(g),!T(p))for(O=g.Ba.g.parse(p),p=0;p<O.length;p++){let xe=O[p];const tt=xe[0];if(!(tt<=g.K))if(g.K=tt,xe=xe[1],g.I==2)if(xe[0]=="c"){g.M=xe[1],g.ba=xe[2];const kn=xe[3];kn!=null&&(g.ka=kn,g.j.info("VER="+g.ka));const Vs=xe[4];Vs!=null&&(g.za=Vs,g.j.info("SVER="+g.za));const kr=xe[5];kr!=null&&typeof kr=="number"&&kr>0&&(v=1.5*kr,g.O=v,g.j.info("backChannelRequestTimeoutMs_="+v)),v=g;const Ar=c.g;if(Ar){const yc=Ar.g?Ar.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(yc){var M=v.h;M.g||yc.indexOf("spdy")==-1&&yc.indexOf("quic")==-1&&yc.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Gh(M,M.h),M.h=null))}if(v.G){const ef=Ar.g?Ar.g.getResponseHeader("X-HTTP-Session-Id"):null;ef&&(v.wa=ef,be(v.J,v.G,ef))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-c.F,g.j.info("Handshake RTT: "+g.T+"ms")),v=g;var z=c;if(v.na=Z_(v,v.L?v.ba:null,v.W),z.L){k_(v.h,z);var ie=z,Qe=v.O;Qe&&(ie.H=Qe),ie.D&&(Wh(ie),cc(ie)),v.g=z}else K_(v);g.i.length>0&&pc(g)}else xe[0]!="stop"&&xe[0]!="close"||Ls(g,7);else g.I==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?Ls(g,7):Xh(g):xe[0]!="noop"&&g.l&&g.l.qa(xe),g.A=0)}}Ho(4)}catch{}}var Ob=class{constructor(c,p){this.g=c,this.map=p}};function N_(c){this.l=c||10,o.PerformanceNavigationTiming?(c=o.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function S_(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function b_(c){return c.h?1:c.g?c.g.size:0}function Hh(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Gh(c,p){c.g?c.g.add(p):c.h=p}function k_(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}N_.prototype.cancel=function(){if(this.i=A_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function A_(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const g of c.g.values())p=p.concat(g.G);return p}return y(c.i)}var R_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jb(c,p){if(c){c=c.split("&");for(let g=0;g<c.length;g++){const v=c[g].indexOf("=");let O,M=null;v>=0?(O=c[g].substring(0,v),M=c[g].substring(v+1)):O=c[g],p(O,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function Nr(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof Nr?(this.l=c.l,Xo(this,c.j),this.o=c.o,this.g=c.g,Jo(this,c.u),this.h=c.h,Kh(this,L_(c.i)),this.m=c.m):c&&(p=String(c).match(R_))?(this.l=!1,Xo(this,p[1]||"",!0),this.o=Zo(p[2]||""),this.g=Zo(p[3]||"",!0),Jo(this,p[4]),this.h=Zo(p[5]||"",!0),Kh(this,p[6]||"",!0),this.m=Zo(p[7]||"")):(this.l=!1,this.i=new ta(null,this.l))}Nr.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(ea(p,P_,!0),":");var g=this.g;return(g||p=="file")&&(c.push("//"),(p=this.o)&&c.push(ea(p,P_,!0),"@"),c.push(Qo(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&c.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(ea(g,g.charAt(0)=="/"?Vb:Lb,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",ea(g,Ub)),c.join("")},Nr.prototype.resolve=function(c){const p=bn(this);let g=!!c.j;g?Xo(p,c.j):g=!!c.o,g?p.o=c.o:g=!!c.g,g?p.g=c.g:g=c.u!=null;var v=c.h;if(g)Jo(p,c.u);else if(g=!!c.h){if(v.charAt(0)!="/")if(this.g&&!this.h)v="/"+v;else{var O=p.h.lastIndexOf("/");O!=-1&&(v=p.h.slice(0,O+1)+v)}if(O=v,O==".."||O==".")v="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){v=O.lastIndexOf("/",0)==0,O=O.split("/");const M=[];for(let z=0;z<O.length;){const ie=O[z++];ie=="."?v&&z==O.length&&M.push(""):ie==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),v&&z==O.length&&M.push("")):(M.push(ie),v=!0)}v=M.join("/")}else v=O}return g?p.h=v:g=c.i.toString()!=="",g?Kh(p,L_(c.i)):g=!!c.m,g&&(p.m=c.m),p};function bn(c){return new Nr(c)}function Xo(c,p,g){c.j=g?Zo(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Jo(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Kh(c,p,g){p instanceof ta?(c.i=p,Bb(c.i,c.l)):(g||(p=ea(p,Fb)),c.i=new ta(p,c.l))}function be(c,p,g){c.i.set(p,g)}function uc(c){return be(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function Zo(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ea(c,p,g){return typeof c=="string"?(c=encodeURI(c).replace(p,Mb),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Mb(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var P_=/[#\/\?@]/g,Lb=/[#\?:]/g,Vb=/[#\?]/g,Fb=/[#\?@]/g,Ub=/#/g;function ta(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function Ms(c){c.g||(c.g=new Map,c.h=0,c.i&&jb(c.i,function(p,g){c.add(decodeURIComponent(p.replace(/\+/g," ")),g)}))}t=ta.prototype,t.add=function(c,p){Ms(this),this.i=null,c=Ei(this,c);let g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(p),this.h+=1,this};function D_(c,p){Ms(c),p=Ei(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function O_(c,p){return Ms(c),p=Ei(c,p),c.g.has(p)}t.forEach=function(c,p){Ms(this),this.g.forEach(function(g,v){g.forEach(function(O){c.call(p,O,v,this)},this)},this)};function j_(c,p){Ms(c);let g=[];if(typeof p=="string")O_(c,p)&&(g=g.concat(c.g.get(Ei(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)g=g.concat(c[p]);return g}t.set=function(c,p){return Ms(this),this.i=null,c=Ei(this,c),O_(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=j_(this,c),c.length>0?String(c[0]):p):p};function M_(c,p,g){D_(c,p),g.length>0&&(c.i=null,c.g.set(Ei(c,p),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let v=0;v<p.length;v++){var g=p[v];const O=Qo(g);g=j_(this,g);for(let M=0;M<g.length;M++){let z=O;g[M]!==""&&(z+="="+Qo(g[M])),c.push(z)}}return this.i=c.join("&")};function L_(c){const p=new ta;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Ei(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Bb(c,p){p&&!c.j&&(Ms(c),c.i=null,c.g.forEach(function(g,v){const O=v.toLowerCase();v!=O&&(D_(this,v),M_(this,O,g))},c)),c.j=p}function $b(c,p){const g=new Ko;if(o.Image){const v=new Image;v.onload=h(Sr,g,"TestLoadImage: loaded",!0,p,v),v.onerror=h(Sr,g,"TestLoadImage: error",!1,p,v),v.onabort=h(Sr,g,"TestLoadImage: abort",!1,p,v),v.ontimeout=h(Sr,g,"TestLoadImage: timeout",!1,p,v),o.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=c}else p(!1)}function zb(c,p){const g=new Ko,v=new AbortController,O=setTimeout(()=>{v.abort(),Sr(g,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:v.signal}).then(M=>{clearTimeout(O),M.ok?Sr(g,"TestPingServer: ok",!0,p):Sr(g,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(O),Sr(g,"TestPingServer: error",!1,p)})}function Sr(c,p,g,v,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),v(g)}catch{}}function Wb(){this.g=new Nb}function Qh(c){this.i=c.Sb||null,this.h=c.ab||!1}f(Qh,f_),Qh.prototype.g=function(){return new dc(this.i,this.h)};function dc(c,p){ft.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(dc,ft),t=dc.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,ra(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,na(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;V_(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function V_(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?na(this):ra(this),this.readyState==3&&V_(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,na(this))},t.Na=function(c){this.g&&(this.response=c,na(this))},t.ga=function(){this.g&&na(this)};function na(c){c.readyState=4,c.l=null,c.j=null,c.B=null,ra(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var g=p.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=p.next();return c.join(`\r
`)};function ra(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(dc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function F_(c){let p="";return K(c,function(g,v){p+=v,p+=":",p+=g,p+=`\r
`}),p}function Yh(c,p,g){e:{for(v in g){var v=!1;break e}v=!0}v||(g=F_(g),typeof c=="string"?g!=null&&Qo(g):be(c,p,g))}function Ve(c){ft.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ve,ft);var qb=/^https?$/i,Hb=["POST","PUT"];t=Ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,g,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():w_.g(),this.g.onreadystatechange=m(d(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(M){U_(this,M);return}if(c=g||"",g=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var O in v)g.set(O,v[O]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const M of v.keys())g.set(M,v.get(M));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(g.keys()).find(M=>M.toLowerCase()=="content-type"),O=o.FormData&&c instanceof o.FormData,!(Array.prototype.indexOf.call(Hb,p,void 0)>=0)||v||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,z]of g)this.g.setRequestHeader(M,z);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(M){U_(this,M)}};function U_(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,B_(c),hc(c)}function B_(c){c.A||(c.A=!0,It(c,"complete"),It(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,It(this,"complete"),It(this,"abort"),hc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),hc(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$_(this):this.Xa())},t.Xa=function(){$_(this)};function $_(c){if(c.h&&typeof i<"u"){if(c.v&&br(c)==4)setTimeout(c.Ca.bind(c),0);else if(It(c,"readystatechange"),br(c)==4){c.h=!1;try{const M=c.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var g;if(!(g=p)){var v;if(v=M===0){let z=String(c.D).match(R_)[1]||null;!z&&o.self&&o.self.location&&(z=o.self.location.protocol.slice(0,-1)),v=!qb.test(z?z.toLowerCase():"")}g=v}if(g)It(c,"complete"),It(c,"success");else{c.o=6;try{var O=br(c)>2?c.g.statusText:""}catch{O=""}c.l=O+" ["+c.ca()+"]",B_(c)}}finally{hc(c)}}}}function hc(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const g=c.g;c.g=null,p||It(c,"ready");try{g.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function br(c){return c.g?c.g.readyState:0}t.ca=function(){try{return br(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),Cb(p)}};function z_(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Gb(c){const p={};c=(c.g&&br(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<c.length;v++){if(T(c[v]))continue;var g=Rb(c[v]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const M=p[O]||[];p[O]=M,M.push(g)}G(p,function(v){return v.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function sa(c,p,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||p}function W_(c){this.za=0,this.i=[],this.j=new Ko,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=sa("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=sa("baseRetryDelayMs",5e3,c),this.Za=sa("retryDelaySeedMs",1e4,c),this.Ta=sa("forwardChannelMaxRetries",2,c),this.va=sa("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new N_(c&&c.concurrentRequestLimit),this.Ba=new Wb,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=W_.prototype,t.ka=8,t.I=1,t.connect=function(c,p,g,v){Ct(0),this.W=c,this.H=p||{},g&&v!==void 0&&(this.H.OSID=g,this.H.OAID=v),this.F=this.X,this.J=Z_(this,null,this.W),pc(this)};function Xh(c){if(q_(c),c.I==3){var p=c.V++,g=bn(c.J);if(be(g,"SID",c.M),be(g,"RID",p),be(g,"TYPE","terminate"),ia(c,g),p=new Cr(c,c.j,p),p.M=2,p.A=uc(bn(g)),g=!1,o.navigator&&o.navigator.sendBeacon)try{g=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!g&&o.Image&&(new Image().src=p.A,g=!0),g||(p.g=ev(p.j,null),p.g.ea(p.A)),p.F=Date.now(),cc(p)}J_(c)}function fc(c){c.g&&(Zh(c),c.g.cancel(),c.g=null)}function q_(c){fc(c),c.v&&(o.clearTimeout(c.v),c.v=null),mc(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&o.clearTimeout(c.m),c.m=null)}function pc(c){if(!S_(c.h)&&!c.m){c.m=!0;var p=c.Ea;j||w(),F||(j(),F=!0),k.add(p,c),c.D=0}}function Kb(c,p){return b_(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Go(d(c.Ea,c,p),X_(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const O=new Cr(this,this.j,c);let M=this.o;if(this.U&&(M?(M=de(M),Kn(M,this.U)):M=this.U),this.u!==null||this.R||(O.J=M,M=null),this.S)e:{for(var p=0,g=0;g<this.i.length;g++){t:{var v=this.i[g];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(p+=v,p>4096){p=g;break e}if(p===4096||g===this.i.length-1){p=g+1;break e}}p=1e3}else p=1e3;p=G_(this,O,p),g=bn(this.J),be(g,"RID",c),be(g,"CVER",22),this.G&&be(g,"X-HTTP-Session-Id",this.G),ia(this,g),M&&(this.R?p="headers="+Qo(F_(M))+"&"+p:this.u&&Yh(g,this.u,M)),Gh(this.h,O),this.Ra&&be(g,"TYPE","init"),this.S?(be(g,"$req",p),be(g,"SID","null"),O.U=!0,zh(O,g,null)):zh(O,g,p),this.I=2}}else this.I==3&&(c?H_(this,c):this.i.length==0||S_(this.h)||H_(this))};function H_(c,p){var g;p?g=p.l:g=c.V++;const v=bn(c.J);be(v,"SID",c.M),be(v,"RID",g),be(v,"AID",c.K),ia(c,v),c.u&&c.o&&Yh(v,c.u,c.o),g=new Cr(c,c.j,g,c.D+1),c.u===null&&(g.J=c.o),p&&(c.i=p.G.concat(c.i)),p=G_(c,g,1e3),g.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Gh(c.h,g),zh(g,v,p)}function ia(c,p){c.H&&K(c.H,function(g,v){be(p,v,g)}),c.l&&K({},function(g,v){be(p,v,g)})}function G_(c,p,g){g=Math.min(c.i.length,g);const v=c.l?d(c.l.Ka,c.l,c):null;e:{var O=c.i;let ie=-1;for(;;){const Qe=["count="+g];ie==-1?g>0?(ie=O[0].g,Qe.push("ofs="+ie)):ie=0:Qe.push("ofs="+ie);let xe=!0;for(let tt=0;tt<g;tt++){var M=O[tt].g;const kn=O[tt].map;if(M-=ie,M<0)ie=Math.max(0,O[tt].g-100),xe=!1;else try{M="req"+M+"_"||"";try{var z=kn instanceof Map?kn:Object.entries(kn);for(const[Vs,kr]of z){let Ar=kr;a(kr)&&(Ar=Vh(kr)),Qe.push(M+Vs+"="+encodeURIComponent(Ar))}}catch(Vs){throw Qe.push(M+"type="+encodeURIComponent("_badmap")),Vs}}catch{v&&v(kn)}}if(xe){z=Qe.join("&");break e}}z=void 0}return c=c.i.splice(0,g),p.G=c,z}function K_(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;j||w(),F||(j(),F=!0),k.add(p,c),c.A=0}}function Jh(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Go(d(c.Da,c),X_(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Q_(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Go(d(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ct(10),fc(this),Q_(this))};function Zh(c){c.B!=null&&(o.clearTimeout(c.B),c.B=null)}function Q_(c){c.g=new Cr(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=bn(c.na);be(p,"RID","rpc"),be(p,"SID",c.M),be(p,"AID",c.K),be(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&be(p,"TO",c.ia),be(p,"TYPE","xmlhttp"),ia(c,p),c.u&&c.o&&Yh(p,c.u,c.o),c.O&&(c.g.H=c.O);var g=c.g;c=c.ba,g.M=1,g.A=uc(bn(p)),g.u=null,g.R=!0,T_(g,c)}t.Va=function(){this.C!=null&&(this.C=null,fc(this),Jh(this),Ct(19))};function mc(c){c.C!=null&&(o.clearTimeout(c.C),c.C=null)}function Y_(c,p){var g=null;if(c.g==p){mc(c),Zh(c),c.g=null;var v=2}else if(Hh(c.h,p))g=p.G,k_(c.h,p),v=1;else return;if(c.I!=0){if(p.o)if(v==1){g=p.u?p.u.length:0,p=Date.now()-p.F;var O=c.D;v=ac(),It(v,new __(v,g)),pc(c)}else K_(c);else if(O=p.m,O==3||O==0&&p.X>0||!(v==1&&Kb(c,p)||v==2&&Jh(c)))switch(g&&g.length>0&&(p=c.h,p.i=p.i.concat(g)),O){case 1:Ls(c,5);break;case 4:Ls(c,10);break;case 3:Ls(c,6);break;default:Ls(c,2)}}}function X_(c,p){let g=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(g*=2),g*p}function Ls(c,p){if(c.j.info("Error code "+p),p==2){var g=d(c.bb,c),v=c.Ua;const O=!v;v=new Nr(v||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Xo(v,"https"),uc(v),O?$b(v.toString(),g):zb(v.toString(),g)}else Ct(2);c.I=0,c.l&&c.l.pa(p),J_(c),q_(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function J_(c){if(c.I=0,c.ja=[],c.l){const p=A_(c.h);(p.length!=0||c.i.length!=0)&&(N(c.ja,p),N(c.ja,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.oa()}}function Z_(c,p,g){var v=g instanceof Nr?bn(g):new Nr(g);if(v.g!="")p&&(v.g=p+"."+v.g),Jo(v,v.u);else{var O=o.location;v=O.protocol,p=p?p+"."+O.hostname:O.hostname,O=+O.port;const M=new Nr(null);v&&Xo(M,v),p&&(M.g=p),O&&Jo(M,O),g&&(M.h=g),v=M}return g=c.G,p=c.wa,g&&p&&be(v,g,p),be(v,"VER",c.ka),ia(c,v),v}function ev(c,p,g){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new Ve(new Qh({ab:g})):new Ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function tv(){}t=tv.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function gc(){}gc.prototype.g=function(c,p){return new Bt(c,p)};function Bt(c,p){ft.call(this),this.g=new W_(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!T(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Ti(this)}f(Bt,ft),Bt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Xh(this.g)},Bt.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.v&&(g={},g.__data__=Vh(c),c=g);p.i.push(new Ob(p.Ya++,c)),p.I==3&&pc(p)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Xh(this.g),delete this.g,Bt.Z.N.call(this)};function nv(c){Fh.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const g in p){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}f(nv,Fh);function rv(){Uh.call(this),this.status=1}f(rv,Uh);function Ti(c){this.g=c}f(Ti,tv),Ti.prototype.ra=function(){It(this.g,"a")},Ti.prototype.qa=function(c){It(this.g,new nv(c))},Ti.prototype.pa=function(c){It(this.g,new rv)},Ti.prototype.oa=function(){It(this.g,"b")},gc.prototype.createWebChannel=gc.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,cC=function(){return new gc},lC=function(){return ac()},aC=Os,Zp={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},lc.NO_ERROR=0,lc.TIMEOUT=8,lc.HTTP_ERROR=6,au=lc,v_.COMPLETE="complete",oC=v_,p_.EventType=qo,qo.OPEN="a",qo.CLOSE="b",qo.ERROR="c",qo.MESSAGE="d",ft.prototype.listen=ft.prototype.J,ba=p_,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,iC=Ve}).apply(typeof Mc<"u"?Mc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="12.8.0";function E2(t){Oo=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ii=new Kd("@firebase/firestore");function Si(){return ii.logLevel}function q(t,...e){if(ii.logLevel<=ae.DEBUG){const n=e.map(Wg);ii.debug(`Firestore (${Oo}): ${t}`,...n)}}function mr(t,...e){if(ii.logLevel<=ae.ERROR){const n=e.map(Wg);ii.error(`Firestore (${Oo}): ${t}`,...n)}}function go(t,...e){if(ii.logLevel<=ae.WARN){const n=e.map(Wg);ii.warn(`Firestore (${Oo}): ${t}`,...n)}}function Wg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,uC(t,r,n)}function uC(t,e,n){let r=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw mr(r),new Error(r)}function _e(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||uC(e,s,r)}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class T2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class I2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C2{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new ir;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ir,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ir)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new dC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class N2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class S2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new N2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class q0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class b2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new q0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new q0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=k2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function em(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return jf(s)===jf(i)?he(s,i):jf(s)?1:-1}return he(t.length,e.length)}const A2=55296,R2=57343;function jf(t){const e=t.charCodeAt(0);return e>=A2&&e<=R2}function yo(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="__name__";class Pn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Pn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=Pn.isNumericId(e),s=Pn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Pn.extractNumericId(e).compare(Pn.extractNumericId(n)):em(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ss.fromString(e.substring(4,e.length-2))}}class Ie extends Pn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const P2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Pn{construct(e,n,r){return new ct(e,n,r)}static isValidIdentifier(e){return P2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===H0}static keyField(){return new ct([H0])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Ie.fromString(e))}static fromName(e){return new Q(Ie.fromString(e).popFirst(5))}static empty(){return new Q(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Ie(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function D2(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function G0(t){if(!Q.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function K0(t){if(Q.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function eh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=eh(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function Gl(t,e){if(!fC(t))throw new W(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new W(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=-62135596800,Y0=1e6;class se{static now(){return se.fromMillis(Date.now())}static fromDate(e){return se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Y0);return new se(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Q0)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Y0}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gl(e,se._jsonSchema))return new se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Q0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}se._jsonSchemaVersion="firestore/timestamp/1.0",se._jsonSchema={type:Ge("string",se._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static fromTimestamp(e){return new te(e)}static min(){return new te(new se(0,0))}static max(){return new te(new se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wl=-1;function O2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new se(n+1,0):new se(n,r));return new fs(s,Q.empty(),e)}function j2(t){return new fs(t.readTime,t.key,wl)}class fs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fs(te.min(),Q.empty(),wl)}static max(){return new fs(te.max(),Q.empty(),wl)}}function M2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==L2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const d=l;n(e[d]).next(h=>{o[d]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function F2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class th{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}th.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=-1;function nh(t){return t==null}function Qu(t){return t===0&&1/t==-1/0}function U2(t){return typeof t=="number"&&Number.isInteger(t)&&!Qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="";function B2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=X0(e)),e=$2(t.get(n),e);return X0(e)}function $2(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pC:n+="";break;default:n+=i}}return n}function X0(t){return t+pC+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ke=class tm{constructor(e,n){this.comparator=e,this.root=n||is.EMPTY}insert(e,n){return new tm(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,is.BLACK,null,null))}remove(e){return new tm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,is.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lc(this.root,e,this.comparator,!0)}},Lc=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},is=class Yn{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Yn.RED,this.left=s??Yn.EMPTY,this.right=i??Yn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Yn(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Yn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Yn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Yn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Yn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}};is.EMPTY=null,is.RED=!0,is.BLACK=!1;is.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new is(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Z0(this.data.getIterator())}getIteratorFrom(e){return new Z0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class Z0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new qt([])}unionWith(e){let n=new et(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gC("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const z2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ps(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=z2.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ms(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="server_timestamp",_C="__type__",vC="__previous_value__",wC="__local_write_time__";function Gg(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_C])==null?void 0:r.stringValue)===yC}function rh(t){const e=t.mapValue.fields[vC];return Gg(e)?rh(e):e}function xl(t){const e=ps(t.mapValue.fields[wC].timestampValue);return new se(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e,n,r,s,i,o,a,l,d,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=h,this.apiKey=f}}const Yu="(default)";class El{constructor(e,n){this.projectId=e,this.database=n||Yu}static empty(){return new El("","")}get isDefaultDatabase(){return this.database===Yu}isEqual(e){return e instanceof El&&e.projectId===this.projectId&&e.database===this.database}}function q2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new El(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="__type__",H2="__max__",Vc={mapValue:{}},EC="__vector__",Xu="value";function gs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gg(t)?4:K2(t)?9007199254740991:G2(t)?10:11:J(28295,{value:t})}function Wn(t,e){if(t===e)return!0;const n=gs(t);if(n!==gs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xl(t).isEqual(xl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ps(s.timestampValue),a=ps(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ms(s.bytesValue).isEqual(ms(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Be(s.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(s.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Be(s.integerValue)===Be(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Be(s.doubleValue),a=Be(i.doubleValue);return o===a?Qu(o)===Qu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return yo(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(J0(o)!==J0(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function Tl(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function _o(t,e){if(t===e)return 0;const n=gs(t),r=gs(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Be(i.integerValue||i.doubleValue),l=Be(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return ew(t.timestampValue,e.timestampValue);case 4:return ew(xl(t),xl(e));case 5:return em(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ms(i),l=ms(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let d=0;d<a.length&&d<l.length;d++){const h=he(a[d],l[d]);if(h!==0)return h}return he(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(Be(i.latitude),Be(o.latitude));return a!==0?a:he(Be(i.longitude),Be(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return tw(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,y,N,_;const a=i.fields||{},l=o.fields||{},d=(m=a[Xu])==null?void 0:m.arrayValue,h=(y=l[Xu])==null?void 0:y.arrayValue,f=he(((N=d==null?void 0:d.values)==null?void 0:N.length)||0,((_=h==null?void 0:h.values)==null?void 0:_.length)||0);return f!==0?f:tw(d,h)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Vc.mapValue&&o===Vc.mapValue)return 0;if(i===Vc.mapValue)return 1;if(o===Vc.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),d=o.fields||{},h=Object.keys(d);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=em(l[f],h[f]);if(m!==0)return m;const y=_o(a[l[f]],d[h[f]]);if(y!==0)return y}return he(l.length,h.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function ew(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=ps(t),r=ps(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function tw(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_o(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function vo(t){return nm(t)}function nm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ps(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ms(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=nm(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${nm(n.fields[o])}`;return s+"}"}(t.mapValue):J(61005,{value:t})}function lu(t){switch(gs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rh(t);return e?16+lu(e):16;case 5:return 2*t.stringValue.length;case 6:return ms(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+lu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return bs(r.fields,(i,o)=>{s+=i.length+lu(o)}),s}(t.mapValue);default:throw J(13486,{value:t})}}function nw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function rm(t){return!!t&&"integerValue"in t}function Kg(t){return!!t&&"arrayValue"in t}function rw(t){return!!t&&"nullValue"in t}function sw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cu(t){return!!t&&"mapValue"in t}function G2(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xC])==null?void 0:r.stringValue)===EC}function za(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=za(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=za(t.arrayValue.values[n]);return e}return{...t}}function K2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===H2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=za(n)}setAll(e){let n=ct.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=za(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());cu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];cu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(za(this.value))}}function TC(t){const e=[];return bs(t.fields,(n,r)=>{const s=new ct([n]);if(cu(r)){const i=TC(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new vt(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ju{constructor(e,n){this.position=e,this.inclusive=n}}function iw(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=_o(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ow(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Il{constructor(e,n="asc"){this.field=e,this.dir=n}}function Q2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class IC{}class He extends IC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new X2(e,n,r):n==="array-contains"?new eO(e,r):n==="in"?new tO(e,r):n==="not-in"?new nO(e,r):n==="array-contains-any"?new rO(e,r):new He(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new J2(e,r):new Z2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_o(n,this.value)):n!==null&&gs(this.value)===gs(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Cn extends IC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Cn(e,n)}matches(e){return CC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function CC(t){return t.op==="and"}function NC(t){return Y2(t)&&CC(t)}function Y2(t){for(const e of t.filters)if(e instanceof Cn)return!1;return!0}function sm(t){if(t instanceof He)return t.field.canonicalString()+t.op.toString()+vo(t.value);if(NC(t))return t.filters.map(e=>sm(e)).join(",");{const e=t.filters.map(n=>sm(n)).join(",");return`${t.op}(${e})`}}function SC(t,e){return t instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&Wn(r.value,s.value)}(t,e):t instanceof Cn?function(r,s){return s instanceof Cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&SC(o,s.filters[a]),!0):!1}(t,e):void J(19439)}function bC(t){return t instanceof He?function(n){return`${n.field.canonicalString()} ${n.op} ${vo(n.value)}`}(t):t instanceof Cn?function(n){return n.op.toString()+" {"+n.getFilters().map(bC).join(" ,")+"}"}(t):"Filter"}class X2 extends He{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class J2 extends He{constructor(e,n){super(e,"in",n),this.keys=kC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Z2 extends He{constructor(e,n){super(e,"not-in",n),this.keys=kC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class eO extends He{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kg(n)&&Tl(n.arrayValue,this.value)}}class tO extends He{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Tl(this.value.arrayValue,n)}}class nO extends He{constructor(e,n){super(e,"not-in",n)}matches(e){if(Tl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Tl(this.value.arrayValue,n)}}class rO extends He{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Tl(this.value.arrayValue,r))}}/**
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
 */class sO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Te=null}}function aw(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sO(t,e,n,r,s,i,o)}function Qg(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),nh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vo(r)).join(",")),e.Te=n}return e.Te}function Yg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Q2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ow(t.startAt,e.startAt)&&ow(t.endAt,e.endAt)}function im(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function iO(t,e,n,r,s,i,o,a){return new Lo(t,e,n,r,s,i,o,a)}function sh(t){return new Lo(t)}function lw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function oO(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function AC(t){return t.collectionGroup!==null}function Wa(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(a=a.add(d.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Il(i,r))}),n.has(ct.keyField().canonicalString())||e.Ie.push(new Il(ct.keyField(),r))}return e.Ie}function Un(t){const e=re(t);return e.Ee||(e.Ee=aO(e,Wa(t))),e.Ee}function aO(t,e){if(t.limitType==="F")return aw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Il(s.field,i)});const n=t.endAt?new Ju(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ju(t.startAt.position,t.startAt.inclusive):null;return aw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function om(t,e){const n=t.filters.concat([e]);return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function lO(t,e){const n=t.explicitOrderBy.concat([e]);return new Lo(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function am(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ih(t,e){return Yg(Un(t),Un(e))&&t.limitType===e.limitType}function RC(t){return`${Qg(Un(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>bC(s)).join(", ")}]`),nh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>vo(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>vo(s)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function oh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Wa(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const d=iw(o,a,l);return o.inclusive?d<=0:d<0}(r.startAt,Wa(r),s)||r.endAt&&!function(o,a,l){const d=iw(o,a,l);return o.inclusive?d>=0:d>0}(r.endAt,Wa(r),s))}(t,e)}function cO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function PC(t){return(e,n)=>{let r=!1;for(const s of Wa(t)){const i=uO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uO(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),d=a.data.field(i);return l!==null&&d!==null?_o(l,d):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=new Ke(Q.comparator);function gr(){return dO}const DC=new Ke(Q.comparator);function ka(...t){let e=DC;for(const n of t)e=e.insert(n.key,n);return e}function OC(t){let e=DC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gs(){return qa()}function jC(){return qa()}function qa(){return new gi(t=>t.toString(),(t,e)=>t.isEqual(e))}const hO=new Ke(Q.comparator),fO=new et(Q.comparator);function fe(...t){let e=fO;for(const n of t)e=e.add(n);return e}const pO=new et(he);function mO(){return pO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qu(e)?"-0":e}}function MC(t){return{integerValue:""+t}}function gO(t,e){return U2(e)?MC(e):Xg(t,e)}/**
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
 */class ah{constructor(){this._=void 0}}function yO(t,e,n){return t instanceof Cl?function(s,i){const o={fields:{[_C]:{stringValue:yC},[wC]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gg(i)&&(i=rh(i)),i&&(o.fields[vC]=i),{mapValue:o}}(n,e):t instanceof Nl?VC(t,e):t instanceof Sl?FC(t,e):function(s,i){const o=LC(s,i),a=cw(o)+cw(s.Ae);return rm(o)&&rm(s.Ae)?MC(a):Xg(s.serializer,a)}(t,e)}function _O(t,e,n){return t instanceof Nl?VC(t,e):t instanceof Sl?FC(t,e):n}function LC(t,e){return t instanceof Zu?function(r){return rm(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Cl extends ah{}class Nl extends ah{constructor(e){super(),this.elements=e}}function VC(t,e){const n=UC(e);for(const r of t.elements)n.some(s=>Wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Sl extends ah{constructor(e){super(),this.elements=e}}function FC(t,e){let n=UC(e);for(const r of t.elements)n=n.filter(s=>!Wn(s,r));return{arrayValue:{values:n}}}class Zu extends ah{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function cw(t){return Be(t.integerValue||t.doubleValue)}function UC(t){return Kg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.field=e,this.transform=n}}function wO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Nl&&s instanceof Nl||r instanceof Sl&&s instanceof Sl?yo(r.elements,s.elements,Wn):r instanceof Zu&&s instanceof Zu?Wn(r.Ae,s.Ae):r instanceof Cl&&s instanceof Cl}(t.transform,e.transform)}class xO{constructor(e,n){this.version=e,this.transformResults=n}}class Bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bn}static exists(e){return new Bn(void 0,e)}static updateTime(e){return new Bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lh{}function BC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new zC(t.key,Bn.none()):new Kl(t.key,t.data,Bn.none());{const n=t.data,r=Dt.empty();let s=new et(ct.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ks(t.key,r,new qt(s.toArray()),Bn.none())}}function EO(t,e,n){t instanceof Kl?function(s,i,o){const a=s.value.clone(),l=dw(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ks?function(s,i,o){if(!uu(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=dw(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll($C(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ha(t,e,n,r){return t instanceof Kl?function(i,o,a,l){if(!uu(i.precondition,o))return a;const d=i.value.clone(),h=hw(i.fieldTransforms,l,o);return d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof ks?function(i,o,a,l){if(!uu(i.precondition,o))return a;const d=hw(i.fieldTransforms,l,o),h=o.data;return h.setAll($C(i)),h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return uu(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function TO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=LC(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function uw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&yo(r,s,(i,o)=>wO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kl extends lh{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ks extends lh{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function $C(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dw(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,_O(o,a,n[s]))}return r}function hw(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,yO(i,o,e))}return r}class zC extends lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IO extends lh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&EO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jC();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=BC(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&yo(this.mutations,e.mutations,(n,r)=>uw(n,r))&&yo(this.baseMutations,e.baseMutations,(n,r)=>uw(n,r))}}class Jg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return hO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jg(e,n,r,s)}}/**
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
 */class NO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class SO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,pe;function bO(t){switch(t){case L.OK:return J(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function WC(t){if(t===void 0)return mr("GRPC error has no .code"),L.UNKNOWN;switch(t){case We.OK:return L.OK;case We.CANCELLED:return L.CANCELLED;case We.UNKNOWN:return L.UNKNOWN;case We.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case We.INTERNAL:return L.INTERNAL;case We.UNAVAILABLE:return L.UNAVAILABLE;case We.UNAUTHENTICATED:return L.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case We.NOT_FOUND:return L.NOT_FOUND;case We.ALREADY_EXISTS:return L.ALREADY_EXISTS;case We.PERMISSION_DENIED:return L.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case We.ABORTED:return L.ABORTED;case We.OUT_OF_RANGE:return L.OUT_OF_RANGE;case We.UNIMPLEMENTED:return L.UNIMPLEMENTED;case We.DATA_LOSS:return L.DATA_LOSS;default:return J(39323,{code:t})}}(pe=We||(We={}))[pe.OK=0]="OK",pe[pe.CANCELLED=1]="CANCELLED",pe[pe.UNKNOWN=2]="UNKNOWN",pe[pe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",pe[pe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",pe[pe.NOT_FOUND=5]="NOT_FOUND",pe[pe.ALREADY_EXISTS=6]="ALREADY_EXISTS",pe[pe.PERMISSION_DENIED=7]="PERMISSION_DENIED",pe[pe.UNAUTHENTICATED=16]="UNAUTHENTICATED",pe[pe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",pe[pe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",pe[pe.ABORTED=10]="ABORTED",pe[pe.OUT_OF_RANGE=11]="OUT_OF_RANGE",pe[pe.UNIMPLEMENTED=12]="UNIMPLEMENTED",pe[pe.INTERNAL=13]="INTERNAL",pe[pe.UNAVAILABLE=14]="UNAVAILABLE",pe[pe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function kO(){return new TextEncoder}/**
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
 */const AO=new ss([4294967295,4294967295],0);function fw(t){const e=kO().encode(t),n=new sC;return n.update(e),new Uint8Array(n.digest())}function pw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ss([n,r],0),new ss([s,i],0)]}class Zg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Aa(`Invalid padding: ${n}`);if(r<0)throw new Aa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Aa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Aa(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ss.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(ss.fromNumber(r)));return s.compare(AO)===1&&(s=new ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=fw(e),[r,s]=pw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Zg(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.ge===0)return;const n=fw(e),[r,s]=pw(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Aa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ch(te.min(),s,new Ke(he),gr(),fe())}}class Ql{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ql(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class qC{constructor(e,n){this.targetId=e,this.Ce=n}}class HC{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mw{constructor(){this.ve=0,this.Fe=gw(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}}),new Ql(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=gw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class RO{constructor(e){this.Ge=e,this.ze=new Map,this.je=gr(),this.He=Fc(),this.Je=Fc(),this.Ze=new Ke(he)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(im(i))if(r===0){const o=new Q(i.path);this.et(n,o,vt.newNoDocument(o,te.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(n);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ms(r).toUint8Array()}catch(l){if(l instanceof gC)return go("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Zg(o,s,i)}catch(l){return go(l instanceof Aa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const a=this.ot(o);if(a){if(i.current&&im(a.target)){const l=new Q(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,vt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}});let r=fe();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ch(e,n,this.Ze,this.je,r);return this.je=gr(),this.He=Fc(),this.Je=Fc(),this.Ze=new Ke(he),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new mw,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new et(he),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new et(he),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new mw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Fc(){return new Ke(Q.comparator)}function gw(){return new Ke(Q.comparator)}const PO={asc:"ASCENDING",desc:"DESCENDING"},DO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},OO={and:"AND",or:"OR"};class jO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lm(t,e){return t.useProto3Json||nh(e)?e:{value:e}}function ed(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function MO(t,e){return ed(t,e.toTimestamp())}function $n(t){return _e(!!t,49232),te.fromTimestamp(function(n){const r=ps(n);return new se(r.seconds,r.nanos)}(t))}function ey(t,e){return cm(t,e).canonicalString()}function cm(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KC(t){const e=Ie.fromString(t);return _e(ZC(e),10190,{key:e.toString()}),e}function um(t,e){return ey(t.databaseId,e.path)}function Mf(t,e){const n=KC(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(YC(n))}function QC(t,e){return ey(t.databaseId,e)}function LO(t){const e=KC(t);return e.length===4?Ie.emptyPath():YC(e)}function dm(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function YC(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yw(t,e,n){return{name:um(t,e),fields:n.value.mapValue.fields}}function VO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,h){return d.useProto3Json?(_e(h===void 0||typeof h=="string",58123),ht.fromBase64String(h||"")):(_e(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ht.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(d){const h=d.code===void 0?L.UNKNOWN:WC(d.code);return new W(h,d.message||"")}(o);n=new HC(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Mf(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):te.min(),a=new Dt({mapValue:{fields:r.document.fields}}),l=vt.newFoundDocument(s,i,o,a),d=r.targetIds||[],h=r.removedTargetIds||[];n=new du(d,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Mf(t,r.document),i=r.readTime?$n(r.readTime):te.min(),o=vt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new du([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Mf(t,r.document),i=r.removedTargetIds||[];n=new du([],i,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SO(s,i),a=r.targetId;n=new qC(a,o)}}return n}function FO(t,e){let n;if(e instanceof Kl)n={update:yw(t,e.key,e.value)};else if(e instanceof zC)n={delete:um(t,e.key)};else if(e instanceof ks)n={update:yw(t,e.key,e.data),updateMask:KO(e.fieldMask)};else{if(!(e instanceof IO))return J(16599,{dt:e.type});n={verify:um(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Nl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Sl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Zu)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:MO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)}(t,e.precondition)),n}function UO(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?$n(s.updateTime):$n(i);return o.isEqual(te.min())&&(o=$n(i)),new xO(o,s.transformResults||[])}(n,e))):[]}function BO(t,e){return{documents:[QC(t,e.path)]}}function $O(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=QC(t,s);const i=function(d){if(d.length!==0)return JC(Cn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(h=>function(m){return{field:ki(m.field),direction:qO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=lm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:s}}function zO(t){let e=LO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_e(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=XC(f);return m instanceof Cn&&NC(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(N){return new Il(Ai(N.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,nh(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,y=f.values||[];return new Ju(y,m)}(n.startAt));let d=null;return n.endAt&&(d=function(f){const m=!f.before,y=f.values||[];return new Ju(y,m)}(n.endAt)),iO(e,s,o,i,a,"F",l,d)}function WO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function XC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ai(n.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ai(n.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(n.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ai(n.unaryFilter.field);return He.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return He.create(Ai(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Cn.create(n.compositeFilter.filters.map(r=>XC(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function qO(t){return PO[t]}function HO(t){return DO[t]}function GO(t){return OO[t]}function ki(t){return{fieldPath:t.canonicalString()}}function Ai(t){return ct.fromServerFormat(t.fieldPath)}function JC(t){return t instanceof He?function(n){if(n.op==="=="){if(sw(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NAN"}};if(rw(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sw(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NAN"}};if(rw(n.value))return{unaryFilter:{field:ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ki(n.field),op:HO(n.op),value:n.value}}}(t):t instanceof Cn?function(n){const r=n.getFilters().map(s=>JC(s));return r.length===1?r[0]:{compositeFilter:{op:GO(n.op),filters:r}}}(t):J(54877,{filter:t})}function KO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ZC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function eN(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,r,s,i=te.min(),o=te.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.yt=e}}function YO(t){const e=zO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?am(e,e.limit,"L"):e}/**
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
 */class XO{constructor(){this.Sn=new JO}addToCollectionParentIndex(e,n){return this.Sn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(fs.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(fs.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class JO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Ie.comparator)).toArray()}}/**
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
 */const _w={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tN=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(tN,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new wo(0)}static ar(){return new wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="LruGarbageCollector",ZO=1048576;function ww([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class ej{constructor(e){this.Pr=e,this.buffer=new et(ww),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ww(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class tj{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){q(vw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Mo(n)?q(vw,"Ignoring IndexedDB error during garbage collection: ",n):await jo(n)}await this.Ar(3e5)})}}class nj{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(th.ce);const r=new ej(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(_w)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_w):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,a,l,d;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(d=Date.now(),Si()<=ae.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(d-l)+`ms
Total Duration: ${d-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function rj(t,e){return new nj(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{constructor(){this.changes=new gi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ij{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oj{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ha(r.mutation,s,qt.empty(),se.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=Gs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ka();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=gr();const o=qa(),a=function(){return qa()}();return n.forEach((l,d)=>{const h=r.get(d.key);s.has(d.key)&&(h===void 0||h.mutation instanceof ks)?i=i.insert(d.key,d):h!==void 0?(o.set(d.key,h.mutation.getFieldMask()),Ha(h.mutation,d,h.mutation.getFieldMask(),se.now())):o.set(d.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,h)=>o.set(d,h)),n.forEach((d,h)=>a.set(d,new ij(h,o.get(d)??null))),a))}recalculateAndSaveOverlays(e,n){const r=qa();let s=new Ke((o,a)=>o-a),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const d=n.get(l);if(d===null)return;let h=r.get(l)||qt.empty();h=a.applyToLocalView(d,h),r.set(l,h);const f=(s.get(a.batchId)||fe()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),d=l.key,h=l.value,f=jC();h.forEach(m=>{if(!i.has(m)){const y=BC(n.get(m),r.get(m));y!==null&&f.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,f))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return oO(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):AC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Gs());let a=wl,l=i;return o.next(d=>V.forEach(d,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,fe())).next(h=>({batchId:a,changes:OC(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=ka();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ka();return this.indexManager.getCollectionParents(e,i).next(a=>V.forEach(a,l=>{const d=function(f,m){return new Lo(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,d)=>{const h=d.getKey();o.get(h)===null&&(o=o.insert(h,vt.newInvalidDocument(h)))});let a=ka();return o.forEach((l,d)=>{const h=i.get(l);h!==void 0&&Ha(h.mutation,d,qt.empty(),se.now()),oh(n,d)&&(a=a.insert(l,d))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return V.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$n(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:YO(s.bundledQuery),readTime:$n(s.readTime)}}(n)),V.resolve()}}/**
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
 */class lj{constructor(){this.overlays=new Ke(Q.comparator),this.Lr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gs();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Gs(),i=n.length+1,o=new Q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,d=l.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ke((d,h)=>d-h);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let h=i.get(d.largestBatchId);h===null&&(h=Gs(),i=i.insert(d.largestBatchId,h)),h.set(d.getKey(),d)}}const a=Gs(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,h)=>a.set(d,h)),!(a.size()>=s)););return V.resolve(a)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NO(n,r));let i=this.Lr.get(n);i===void 0&&(i=fe(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class cj{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.kr=new et(rt.Kr),this.qr=new et(rt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new rt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Q(new Ie([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.qr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Q(new Ie([])),r=new rt(n,e),s=new rt(n,e+1);let i=fe();return this.qr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return Q.comparator(e.key,n.key)||he(e.Hr,n.Hr)}static Ur(e,n){return he(e.Hr,n.Hr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new et(rt.Kr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.Jr=this.Jr.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Hg:this.Yn-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(he);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new rt(new Q(i),0);let a=new et(he);return this.Jr.forEachWhile(l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(a=a.add(l.Hr)),!0)},o),V.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return V.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,n){const r=new rt(n,0),s=this.Jr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dj{constructor(e){this.ti=e,this.docs=function(){return new Ke(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=gr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=gr();const o=n.path,a=new Q(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:d,value:{document:h}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||M2(j2(h),r)<=0||(s.has(h.key)||oh(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J(9500)}ni(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new hj(this)}getSize(e){return V.resolve(this.size)}}class hj extends sj{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fj{constructor(e){this.persistence=e,this.ri=new gi(n=>Qg(n),Yg),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.ii=0,this.si=new ty,this.targetCount=0,this.oi=wo._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),V.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new wo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.lr(n),V.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e,n){this._i={},this.overlays={},this.ai=new th(0),this.ui=!1,this.ui=!0,this.ci=new cj,this.referenceDelegate=e(this),this.li=new fj(this),this.indexManager=new XO,this.remoteDocumentCache=function(s){return new dj(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new QO(n),this.Pi=new aj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new uj(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const s=new pj(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class pj extends V2{constructor(e){super(),this.currentSequenceNumber=e}}class ny{constructor(e){this.persistence=e,this.Ri=new ty,this.Ai=null}static Vi(e){return new ny(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=Q.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class td{constructor(e,n){this.persistence=e,this.fi=new gi(r=>B2(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=rj(this,n)}static Vi(e,n){return new td(e,n)}Ti(){}Ii(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return V.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,te.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),V.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=lu(e.data.value)),n}wr(e,n,r){return V.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ry(e,n.fromCache,r,s)}}/**
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
 */class mj{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class gj{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return UA()?8:F2(Tt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new mj;return this.ys(e,n,o).next(a=>{if(i.result=a,this.As)return this.ws(e,n,o,a.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Si()<=ae.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(Si()<=ae.DEBUG&&q("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Si()<=ae.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):V.resolve())}gs(e,n){if(lw(n))return V.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=am(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.fs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const d=this.bs(n,a);return this.Ss(n,d,o,l.readTime)?this.gs(e,am(n,null,"F")):this.Ds(e,d,n,l)}))})))}ps(e,n,r,s){return lw(n)||s.isEqual(te.min())?V.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?V.resolve(null):(Si()<=ae.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bi(n)),this.Ds(e,o,n,O2(s,wl)).next(a=>a))})}bs(e,n){let r=new et(PC(e));return n.forEach((s,i)=>{oh(e,i)&&(r=r.add(i))}),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Si()<=ae.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",bi(n)),this.fs.getDocumentsMatchingQuery(e,n,fs.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="LocalStore",yj=3e8;class _j{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ke(he),this.Fs=new gi(i=>Qg(i),Yg),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oj(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function vj(t,e,n,r){return new _j(t,e,n,r)}async function rN(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=fe();for(const d of s){o.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}for(const d of i){a.push(d.batchId);for(const h of d.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:a}))})})}function wj(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,d,h){const f=d.batch,m=f.keys();let y=V.resolve();return m.forEach(N=>{y=y.next(()=>h.getEntry(l,N)).next(_=>{const A=d.docVersions.get(N);_e(A!==null,48541),_.version.compareTo(A)<0&&(f.applyToRemoteDocument(_,d),_.isValidDocument()&&(_.setReadTime(d.commitVersion),h.addEntry(_)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=fe();for(let d=0;d<a.mutationResults.length;++d)a.mutationResults[d].transformResults.length>0&&(l=l.add(a.batch.mutations[d].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function sN(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function xj(t,e){const n=re(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.li.addMatchingKeys(i,h.addedDocuments,f)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(ht.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(f,y),function(_,A,x){return _.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=yj?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,y,h)&&a.push(n.li.updateTargetData(i,y))});let l=gr(),d=fe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(Ej(i,o,e.documentUpdates).next(h=>{l=h.Bs,d=h.Ls})),!r.isEqual(te.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next(f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(n.vs=s,i))}function Ej(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=gr();return n.forEach((a,l)=>{const d=i.get(a);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(sy,"Ignoring outdated watch update for ",a,". Current version:",d.version," Watch version:",l.version)}),{Bs:o,Ls:s}})}function Tj(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hg),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Ij(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new qr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function hm(t,e,n){const r=re(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mo(o))throw o;q(sy,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function xw(t,e,n){const r=re(t);let s=te.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,h){const f=re(l),m=f.Fs.get(h);return m!==void 0?V.resolve(f.vs.get(m)):f.li.getTargetData(d,h)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:fe())).next(a=>(Cj(r,cO(e),a),{documents:a,ks:i})))}function Cj(t,e,n){let r=t.Ms.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Ew{constructor(){this.activeTargetIds=mO()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nj{constructor(){this.vo=new Ew,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ew,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Sj{Mo(e){}shutdown(){}}/**
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
 */const Tw="ConnectivityMonitor";class Iw{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){q(Tw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){q(Tw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Uc=null;function fm(){return Uc===null?Uc=function(){return 268435456+Math.round(2147483648*Math.random())}():Uc++,"0x"+Uc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="RestConnection",bj={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class kj{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Yu?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=fm(),a=this.Qo(e,n.toUriEncodedString());q(Lf,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:d}=new URL(a),h=wr(d);return this.zo(e,a,l,r,h).then(f=>(q(Lf,`Received RPC '${e}' ${o}: `,f),f),f=>{throw go(Lf,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=bj[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aj{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection",pa=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class to extends kj{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!to.c_){const e=lC();pa(e,aC.STAT_EVENT,n=>{n.stat===Zp.PROXY?q(gt,"STAT_EVENT: detected buffering proxy"):n.stat===Zp.NOPROXY&&q(gt,"STAT_EVENT: detected no buffering proxy")}),to.c_=!0}}zo(e,n,r,s,i){const o=fm();return new Promise((a,l)=>{const d=new iC;d.setWithCredentials(!0),d.listenOnce(oC.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case au.NO_ERROR:const f=d.getResponseJson();q(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case au.TIMEOUT:q(gt,`RPC '${e}' ${o} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case au.HTTP_ERROR:const m=d.getStatus();if(q(gt,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let y=d.getResponseJson();Array.isArray(y)&&(y=y[0]);const N=y==null?void 0:y.error;if(N&&N.status&&N.message){const _=function(x){const E=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(E)>=0?E:L.UNKNOWN}(N.status);l(new W(_,N.message))}else l(new W(L.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{q(gt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(gt,`RPC '${e}' ${o} sending request:`,s),d.send(n,"POST",h,r,15)})}T_(e,n,r){const s=fm(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const d=i.join("");q(gt,`Creating RPC '${e}' stream ${s}: ${d}`,a);const h=o.createWebChannel(d,a);this.I_(h);let f=!1,m=!1;const y=new Aj({Ho:N=>{m?q(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(f||(q(gt,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),q(gt,`RPC '${e}' stream ${s} sending:`,N),h.send(N))},Jo:()=>h.close()});return pa(h,ba.EventType.OPEN,()=>{m||(q(gt,`RPC '${e}' stream ${s} transport opened.`),y.i_())}),pa(h,ba.EventType.CLOSE,()=>{m||(m=!0,q(gt,`RPC '${e}' stream ${s} transport closed`),y.o_(),this.E_(h))}),pa(h,ba.EventType.ERROR,N=>{m||(m=!0,go(gt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),y.o_(new W(L.UNAVAILABLE,"The operation could not be completed")))}),pa(h,ba.EventType.MESSAGE,N=>{var _;if(!m){const A=N.data[0];_e(!!A,16349);const x=A,E=(x==null?void 0:x.error)||((_=x[0])==null?void 0:_.error);if(E){q(gt,`RPC '${e}' stream ${s} received error:`,E);const b=E.status;let D=function(k){const w=We[k];if(w!==void 0)return WC(w)}(b),j=E.message;D===void 0&&(D=L.INTERNAL,j="Unknown error status: "+b+" with message "+E.message),m=!0,y.o_(new W(D,j)),h.close()}else q(gt,`RPC '${e}' stream ${s} received:`,A),y.__(A)}}),to.u_(),setTimeout(()=>{y.s_()},0),y}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rj(t){return new to(t)}function Vf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t){return new jO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */to.c_=!1;class iN{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="PersistentStream";class oN{constructor(e,n,r,s,i,o,a,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new iN(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(mr(n.toString()),mr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return q(Cw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(q(Cw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Pj extends oN{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=VO(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?$n(o.readTime):te.min()}(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=dm(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=im(l)?{documents:BO(i,l)}:{query:$O(i,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GC(i,o.resumeToken);const d=lm(i,o.expectedCount);d!==null&&(a.expectedCount=d)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=ed(i,o.snapshotVersion.toTimestamp());const d=lm(i,o.expectedCount);d!==null&&(a.expectedCount=d)}return a}(this.serializer,e);const r=WO(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=dm(this.serializer),n.removeTarget=e,this.K_(n)}}class Dj extends oN{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=UO(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=dm(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>FO(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oj{}class jj extends Oj{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,cm(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.jo(e,cm(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Mj(t,e,n,r){return new jj(t,e,n,r)}class Lj{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(mr(n),this.aa=!1):q("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="RemoteStore";class Vj{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{yi(this)&&(q(oi,"Restarting streams for network reachability change."),await async function(l){const d=re(l);d.Ea.add(4),await Yl(d),d.Va.set("Unknown"),d.Ea.delete(4),await dh(d)}(this))})}),this.Va=new Lj(r,s)}}async function dh(t){if(yi(t))for(const e of t.Ra)await e(!0)}async function Yl(t){for(const e of t.Ra)await e(!1)}function aN(t,e){const n=re(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ly(n)?ay(n):Vo(n).O_()&&oy(n,e))}function iy(t,e){const n=re(t),r=Vo(n);n.Ia.delete(e),r.O_()&&lN(n,e),n.Ia.size===0&&(r.O_()?r.L_():yi(n)&&n.Va.set("Unknown"))}function oy(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Vo(t).Z_(e)}function lN(t,e){t.da.$e(e),Vo(t).X_(e)}function ay(t){t.da=new RO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Vo(t).start(),t.Va.ua()}function ly(t){return yi(t)&&!Vo(t).x_()&&t.Ia.size>0}function yi(t){return re(t).Ea.size===0}function cN(t){t.da=void 0}async function Fj(t){t.Va.set("Online")}async function Uj(t){t.Ia.forEach((e,n)=>{oy(t,e)})}async function Bj(t,e){cN(t),ly(t)?(t.Va.ha(e),ay(t)):t.Va.set("Unknown")}async function $j(t,e,n){if(t.Va.set("Online"),e instanceof HC&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ia.delete(a),s.da.removeTarget(a))}(t,e)}catch(r){q(oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await nd(t,r)}else if(e instanceof du?t.da.Xe(e):e instanceof qC?t.da.st(e):t.da.tt(e),!n.isEqual(te.min()))try{const r=await sN(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.da.Tt(o);return a.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(d);h&&i.Ia.set(d,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,d)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken(ht.EMPTY_BYTE_STRING,h.snapshotVersion)),lN(i,l);const f=new qr(h.target,l,d,h.sequenceNumber);oy(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){q(oi,"Failed to raise snapshot:",r),await nd(t,r)}}async function nd(t,e,n){if(!Mo(e))throw e;t.Ea.add(1),await Yl(t),t.Va.set("Offline"),n||(n=()=>sN(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q(oi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await dh(t)})}function uN(t,e){return e().catch(n=>nd(t,n,e))}async function hh(t){const e=re(t),n=ys(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hg;for(;zj(e);)try{const s=await Tj(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,Wj(e,s)}catch(s){await nd(e,s)}dN(e)&&hN(e)}function zj(t){return yi(t)&&t.Ta.length<10}function Wj(t,e){t.Ta.push(e);const n=ys(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function dN(t){return yi(t)&&!ys(t).x_()&&t.Ta.length>0}function hN(t){ys(t).start()}async function qj(t){ys(t).ra()}async function Hj(t){const e=ys(t);for(const n of t.Ta)e.ea(n.mutations)}async function Gj(t,e,n){const r=t.Ta.shift(),s=Jg.from(r,e,n);await uN(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await hh(t)}async function Kj(t,e){e&&ys(t).Y_&&await async function(r,s){if(function(o){return bO(o)&&o!==L.ABORTED}(s.code)){const i=r.Ta.shift();ys(r).B_(),await uN(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await hh(r)}}(t,e),dN(t)&&hN(t)}async function Nw(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),q(oi,"RemoteStore received new credentials");const r=yi(n);n.Ea.add(3),await Yl(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await dh(n)}async function Qj(t,e){const n=re(t);e?(n.Ea.delete(2),await dh(n)):e||(n.Ea.add(2),await Yl(n),n.Va.set("Unknown"))}function Vo(t){return t.ma||(t.ma=function(n,r,s){const i=re(n);return i.sa(),new Pj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:Fj.bind(null,t),Yo:Uj.bind(null,t),t_:Bj.bind(null,t),J_:$j.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),ly(t)?ay(t):t.Va.set("Unknown")):(await t.ma.stop(),cN(t))})),t.ma}function ys(t){return t.fa||(t.fa=function(n,r,s){const i=re(n);return i.sa(),new Dj(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:qj.bind(null,t),t_:Kj.bind(null,t),ta:Hj.bind(null,t),na:Gj.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await hh(t)):(await t.fa.stop(),t.Ta.length>0&&(q(oi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ir,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new cy(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uy(t,e){if(mr("AsyncQueue",`${e}: ${t}`),Mo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{static emptySet(e){return new no(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=ka(),this.sortedSet=new Ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof no)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new no;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(){this.ga=new Ke(Q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class xo{constructor(e,n,r,s,i,o,a,l,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xo(e,n,no.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ih(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yj{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class Xj{constructor(){this.queries=bw(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=re(n),i=s.queries;s.queries=bw(),i.forEach((o,a)=>{for(const l of a.ba)l.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function bw(){return new gi(t=>RC(t),ih)}async function dy(t,e){const n=re(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new Yj,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=uy(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&fy(n)}async function hy(t,e){const n=re(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Jj(t,e){const n=re(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.ba)a.Fa(s)&&(r=!0);o.wa=s}}r&&fy(n)}function Zj(t,e,n){const r=re(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function fy(t){t.Ca.forEach(e=>{e.next()})}var pm,kw;(kw=pm||(pm={})).Ma="default",kw.Cache="cache";class py{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==pm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.key=e}}class pN{constructor(e){this.key=e}}class eM{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=fe(),this.mutatedKeys=fe(),this.eu=PC(e),this.tu=new no(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Sw,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),y=oh(this.query,f)?f:null,N=!!m&&this.mutatedKeys.has(m.key),_=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let A=!1;m&&y?m.data.isEqual(y.data)?N!==_&&(r.track({type:3,doc:y}),A=!0):this.su(m,y)||(r.track({type:2,doc:y}),A=!0,(l&&this.eu(y,l)>0||d&&this.eu(y,d)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),A=!0):m&&!y&&(r.track({type:1,doc:m}),A=!0,(l||d)&&(a=!0)),A&&(y?(o=o.add(y),i=_?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:a,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((h,f)=>function(y,N){const _=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:A})}};return _(y)-_(N)}(h.type,f.type)||this.eu(h.doc,f.doc)),this.ou(r),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new xo(this.query,e.tu,i,o,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sw,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new pN(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new fN(r))}),n}cu(e){this.Za=e.ks,this.Ya=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return xo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const my="SyncEngine";class tM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class nM{constructor(e){this.key=e,this.hu=!1}}class rM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gi(a=>RC(a),ih),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ke(Q.comparator),this.Au=new Map,this.Vu=new ty,this.du={},this.mu=new Map,this.fu=wo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function sM(t,e,n=!0){const r=wN(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await mN(r,e,n,!0),s}async function iM(t,e){const n=wN(t);await mN(n,e,!0,!1)}async function mN(t,e,n,r){const s=await Ij(t.localStore,Un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await oM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&aN(t.remoteStore,s),a}async function oM(t,e,n,r,s){t.pu=(f,m,y)=>async function(_,A,x,E){let b=A.view.ru(x);b.Ss&&(b=await xw(_.localStore,A.query,!1).then(({documents:k})=>A.view.ru(k,b)));const D=E&&E.targetChanges.get(A.targetId),j=E&&E.targetMismatches.get(A.targetId)!=null,F=A.view.applyChanges(b,_.isPrimaryClient,D,j);return Rw(_,A.targetId,F.au),F.snapshot}(t,f,m,y);const i=await xw(t.localStore,e,!0),o=new eM(e,i.ks),a=o.ru(i.documents),l=Ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(a,t.isPrimaryClient,l);Rw(t,n,d.au);const h=new tM(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),d.snapshot}async function aM(t,e,n){const r=re(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ih(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hm(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&iy(r.remoteStore,s.targetId),mm(r,s.targetId)}).catch(jo)):(mm(r,s.targetId),await hm(r.localStore,s.targetId,!0))}async function lM(t,e){const n=re(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),iy(n.remoteStore,r.targetId))}async function cM(t,e,n){const r=gM(t);try{const s=await function(o,a){const l=re(o),d=se.now(),h=a.reduce((y,N)=>y.add(N.key),fe());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",y=>{let N=gr(),_=fe();return l.xs.getEntries(y,h).next(A=>{N=A,N.forEach((x,E)=>{E.isValidDocument()||(_=_.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(y,N)).next(A=>{f=A;const x=[];for(const E of a){const b=TO(E,f.get(E.key).overlayedDocument);b!=null&&x.push(new ks(E.key,b,TC(b.value.mapValue),Bn.exists(!0)))}return l.mutationQueue.addMutationBatch(y,d,x,a)}).next(A=>{m=A;const x=A.applyToLocalDocumentSet(f,_);return l.documentOverlayCache.saveOverlays(y,A.batchId,x)})}).then(()=>({batchId:m.batchId,changes:OC(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let d=o.du[o.currentUser.toKey()];d||(d=new Ke(he)),d=d.insert(a,l),o.du[o.currentUser.toKey()]=d}(r,s.batchId,n),await Xl(r,s.changes),await hh(r.remoteStore)}catch(s){const i=uy(s,"Failed to persist write");n.reject(i)}}async function gN(t,e){const n=re(t);try{const r=await xj(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?_e(o.hu,14607):s.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await Xl(n,r,e)}catch(r){await jo(r)}}function Aw(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=re(o);l.onlineState=a;let d=!1;l.queries.forEach((h,f)=>{for(const m of f.ba)m.va(a)&&(d=!0)}),d&&fy(l)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function uM(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ke(Q.comparator);o=o.insert(i,vt.newNoDocument(i,te.min()));const a=fe().add(i),l=new ch(te.min(),new Map,new Ke(he),o,a);await gN(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),gy(r)}else await hm(r.localStore,e,!1).then(()=>mm(r,e,n)).catch(jo)}async function dM(t,e){const n=re(t),r=e.batch.batchId;try{const s=await wj(n.localStore,e);_N(n,r,null),yN(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xl(n,s)}catch(s){await jo(s)}}async function hM(t,e,n){const r=re(t);try{const s=await function(o,a){const l=re(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let h;return l.mutationQueue.lookupMutationBatch(d,a).next(f=>(_e(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(d,f))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,h)).next(()=>l.localDocuments.getDocuments(d,h))})}(r.localStore,e);_N(r,e,n),yN(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xl(r,s)}catch(s){await jo(s)}}function yN(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function _N(t,e,n){const r=re(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function mm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||vN(t,r)})}function vN(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(iy(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),gy(t))}function Rw(t,e,n){for(const r of n)r instanceof fN?(t.Vu.addReference(r.key,e),fM(t,r)):r instanceof pN?(q(my,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||vN(t,r.key)):J(19791,{wu:r})}function fM(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(q(my,"New document in limbo: "+n),t.Eu.add(r),gy(t))}function gy(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new Q(Ie.fromString(e)),r=t.fu.next();t.Au.set(r,new nM(n)),t.Ru=t.Ru.insert(n,r),aN(t.remoteStore,new qr(Un(sh(n.path)),r,"TargetPurposeLimboResolution",th.ce))}}async function Xl(t,e,n){const r=re(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((a,l)=>{o.push(r.pu(l,e,n).then(d=>{var h;if((d||n)&&r.isPrimaryClient){const f=d?!d.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(d){s.push(d);const f=ry.Es(l.targetId,d);i.push(f)}}))}),await Promise.all(o),r.Pu.J_(s),await async function(l,d){const h=re(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(d,m=>V.forEach(m.Ts,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>V.forEach(m.Is,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!Mo(f))throw f;q(sy,"Failed to update sequence numbers: "+f)}for(const f of d){const m=f.targetId;if(!f.fromCache){const y=h.vs.get(m),N=y.snapshotVersion,_=y.withLastLimboFreeSnapshotVersion(N);h.vs=h.vs.insert(m,_)}}}(r.localStore,i))}async function pM(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){q(my,"User change. New user:",e.toKey());const r=await rN(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(a=>{a.forEach(l=>{l.reject(new W(L.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xl(n,r.Ns)}}function mM(t,e){const n=re(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const a=n.Tu.get(o);s=s.unionWith(a.view.nu)}return s}}function wN(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gN.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uM.bind(null,e),e.Pu.J_=Jj.bind(null,e.eventManager),e.Pu.yu=Zj.bind(null,e.eventManager),e}function gM(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hM.bind(null,e),e}class rd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=uh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return vj(this.persistence,new gj,e.initialUser,this.serializer)}Cu(e){return new nN(ny.Vi,this.serializer)}Du(e){return new Nj}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}rd.provider={build:()=>new rd};class yM extends rd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof td,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new tj(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new nN(r=>td.Vi(r,n),this.serializer)}}class gm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Aw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pM.bind(null,this.syncEngine),await Qj(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Xj}()}createDatastore(e){const n=uh(e.databaseInfo.databaseId),r=Rj(e.databaseInfo);return Mj(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Vj(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Aw(this.syncEngine,n,0),function(){return Iw.v()?new Iw:new Sj}())}createSyncEngine(e,n){return function(s,i,o,a,l,d,h){const f=new rM(s,i,o,a,l,d);return h&&(f.gu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=re(s);q(oi,"RemoteStore shutting down."),i.Ea.add(5),await Yl(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}gm.provider={build:()=>new gm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):mr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="FirestoreClient";class _M{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(_s,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(_s,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ir;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ff(t,e){t.asyncQueue.verifyOperationInProgress(),q(_s,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rN(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await vM(t);q(_s,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Nw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Nw(e.remoteStore,s)),t._onlineComponents=e}async function vM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q(_s,"Using user provided OfflineComponentProvider");try{await Ff(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;go("Error using user provided cache. Falling back to memory cache: "+n),await Ff(t,new rd)}}else q(_s,"Using default OfflineComponentProvider"),await Ff(t,new yM(void 0));return t._offlineComponents}async function xN(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q(_s,"Using user provided OnlineComponentProvider"),await Pw(t,t._uninitializedComponentsProvider._online)):(q(_s,"Using default OnlineComponentProvider"),await Pw(t,new gm))),t._onlineComponents}function wM(t){return xN(t).then(e=>e.syncEngine)}async function sd(t){const e=await xN(t),n=e.eventManager;return n.onListen=sM.bind(null,e.syncEngine),n.onUnlisten=aM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lM.bind(null,e.syncEngine),n}function xM(t,e,n,r){const s=new yy(r),i=new py(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>dy(await sd(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>hy(await sd(t),i))}}function EM(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new yy({next:m=>{h.Nu(),o.enqueueAndForget(()=>hy(i,f));const y=m.docs.has(a);!y&&m.fromCache?d.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new py(sh(a.path),h,{includeMetadataChanges:!0,Ka:!0});return dy(i,f)}(await sd(t),t.asyncQueue,e,n,r)),r.promise}function TM(t,e,n={}){const r=new ir;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,d){const h=new yy({next:m=>{h.Nu(),o.enqueueAndForget(()=>hy(i,f)),m.fromCache&&l.source==="server"?d.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),f=new py(a,h,{includeMetadataChanges:!0,Ka:!0});return dy(i,f)}(await sd(t),t.asyncQueue,e,n,r)),r.promise}function IM(t,e){const n=new ir;return t.asyncQueue.enqueueAndForget(async()=>cM(await wM(t),e,n)),n.promise}/**
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
 */function EN(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="ComponentProvider",Dw=new Map;function NM(t,e,n,r,s){return new W2(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,EN(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="firestore.googleapis.com",Ow=!0;class jw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TN,this.ssl=Ow}else this.host=e.host,this.ssl=e.ssl??Ow;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tN;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ZO)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}D2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=EN(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new T2;switch(r.type){case"firstParty":return new S2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Dw.get(n);r&&(q(CM,"Removing Datastore"),Dw.delete(n),r.terminate())}(this),Promise.resolve()}}function SM(t,e,n,r={}){var d;t=wn(t,fh);const s=wr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(qd(`https://${a}`),Hd("Firestore",!0)),i.host!==TN&&i.host!==a&&go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:a,ssl:s,emulatorOptions:r};if(!ds(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=yt.MOCK_USER;else{h=Dg(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new yt(m)}t._authCredentials=new I2(new dC(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new os(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Gl(n,ze._jsonSchema))return new ze(e,r||null,new Q(Ie.fromString(n.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Ge("string",ze._jsonSchemaVersion),referencePath:Ge("string")};class os extends As{constructor(e,n,r){super(e,n,sh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new Q(e))}withConverter(e){return new os(this.firestore,e,this._path)}}function or(t,e,...n){if(t=Le(t),hC("collection","path",e),t instanceof fh){const r=Ie.fromString(e,...n);return K0(r),new os(t,null,r)}{if(!(t instanceof ze||t instanceof os))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return K0(r),new os(t.firestore,null,r)}}function Nn(t,e,...n){if(t=Le(t),arguments.length===1&&(e=qg.newId()),hC("doc","path",e),t instanceof fh){const r=Ie.fromString(e,...n);return G0(r),new ze(t,null,new Q(r))}{if(!(t instanceof ze||t instanceof os))throw new W(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return G0(r),new ze(t.firestore,t instanceof os?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="AsyncQueue";class Lw{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new iN(this,"async_queue_retry"),this._c=()=>{const r=Vf();r&&q(Mw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Vf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Vf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new ir;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Mo(e))throw e;q(Mw,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,mr("INTERNAL UNHANDLED ERROR: ",Vw(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=cy.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:Vw(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Vw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ai extends fh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Lw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lw(e),this._firestoreClient=void 0,await e}}}function bM(t,e){const n=typeof t=="object"?t:Qd(),r=typeof t=="string"?t:Yu,s=zl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rg("firestore");i&&SM(s,...i)}return s}function ph(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||kM(t),t._firestoreClient}function kM(t){var r,s,i,o;const e=t._freezeSettings(),n=NM(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new _M(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ht.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:Ge("string",tn._jsonSchemaVersion),bytes:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zn._jsonSchemaVersion}}static fromJSON(e){if(Gl(e,zn._jsonSchema))return new zn(e.latitude,e.longitude)}}zn._jsonSchemaVersion="firestore/geoPoint/1.0",zn._jsonSchema={type:Ge("string",zn._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
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
 */class xn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gl(e,xn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xn(e.vectorValues);throw new W(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xn._jsonSchemaVersion="firestore/vectorValue/1.0",xn._jsonSchema={type:Ge("string",xn._jsonSchemaVersion),vectorValues:Ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AM=/^__.*__$/;class RM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(e,this.data,n,this.fieldTransforms)}}class IN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ks(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function CN(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class vy{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new vy({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return id(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(CN(this.dataSource)&&AM.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class PM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||uh(e)}createContext(e,n,r,s=!1){return new vy({dataSource:e,methodName:n,targetDoc:r,path:ct.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wy(t){const e=t._freezeSettings(),n=uh(t._databaseId);return new PM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function DM(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);Ey("Data must be an object, but it was:",o,r);const a=NN(r,o);let l,d;if(i.merge)l=new qt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=li(e,f,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kN(h,m)||h.push(m)}l=new qt(h),d=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,d=o.fieldTransforms;return new RM(new Dt(a),l,d)}class gh extends mh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gh}}class xy extends mh{_toFieldTransform(e){return new vO(e.path,new Cl)}isEqual(e){return e instanceof xy}}function OM(t,e,n,r){const s=t.createContext(1,e,n);Ey("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();bs(r,(l,d)=>{const h=bN(e,l,n);d=Le(d);const f=s.childContextForFieldPath(h);if(d instanceof gh)i.push(h);else{const m=Jl(d,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new qt(i);return new IN(o,a,s.fieldTransforms)}function jM(t,e,n,r,s,i){const o=t.createContext(1,e,n),a=[li(e,r,n)],l=[s];if(i.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(li(e,i[m])),l.push(i[m+1]);const d=[],h=Dt.empty();for(let m=a.length-1;m>=0;--m)if(!kN(d,a[m])){const y=a[m];let N=l[m];N=Le(N);const _=o.childContextForFieldPath(y);if(N instanceof gh)d.push(y);else{const A=Jl(N,_);A!=null&&(d.push(y),h.set(y,A))}}const f=new qt(d);return new IN(h,f,o.fieldTransforms)}function MM(t,e,n,r=!1){return Jl(n,t.createContext(r?4:3,e))}function Jl(t,e){if(SN(t=Le(t)))return Ey("Unsupported field value:",e,t),NN(t,e);if(t instanceof mh)return function(r,s){if(!CN(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Jl(a,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=se.fromDate(r);return{timestampValue:ed(s.serializer,i)}}if(r instanceof se){const i=new se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ed(s.serializer,i)}}if(r instanceof zn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof tn)return{bytesValue:GC(s.serializer,r._byteString)};if(r instanceof ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ey(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xn)return function(o,a){const l=o instanceof xn?o.toArray():o;return{mapValue:{fields:{[xC]:{stringValue:EC},[Xu]:{arrayValue:{values:l.map(h=>{if(typeof h!="number")throw a.createError("VectorValues must only contain numeric values.");return Xg(a.serializer,h)})}}}}}}(r,s);if(eN(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${eh(r)}`)}(t,e)}function NN(t,e){const n={};return mC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=Jl(s,e.childContextForField(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function SN(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof se||t instanceof zn||t instanceof tn||t instanceof ze||t instanceof mh||t instanceof xn||eN(t))}function Ey(t,e,n){if(!SN(n)||!fC(n)){const r=eh(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function li(t,e,n){if((e=Le(e))instanceof _y)return e._internalPath;if(typeof e=="string")return bN(t,e);throw id("Field path arguments must be of type string or ",t,!1,void 0,n)}const LM=new RegExp("[~\\*/\\[\\]]");function bN(t,e,n){if(e.search(LM)>=0)throw id(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _y(...e.split("."))._internalPath}catch{throw id(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function id(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new W(L.INVALID_ARGUMENT,a+t+l)}function kN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{convertValue(e,n="none"){switch(gs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Xu].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Be(o.doubleValue));return new xn(n)}convertGeoPoint(e){return new zn(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xl(e));default:return null}}convertTimestamp(e){const n=ps(e);return new se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);_e(ZC(r),9688,{name:e});const s=new El(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||mr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class Ty extends VM{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function ma(){return new xy("serverTimestamp")}const Fw="@firebase/firestore",Uw="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(li("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class FM extends AN{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Iy{}class PN extends Iy{}function vs(t,e,...n){let r=[];e instanceof Iy&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Cy).length,a=i.filter(l=>l instanceof yh).length;if(o>1||o>0&&a>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class yh extends PN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yh(e,n,r)}_apply(e){const n=this._parse(e);return DN(e._query,n),new As(e.firestore,e.converter,om(e._query,n))}_parse(e){const n=wy(e.firestore);return function(i,o,a,l,d,h,f){let m;if(d.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){zw(f,h);const N=[];for(const _ of f)N.push($w(l,i,_));m={arrayValue:{values:N}}}else m=$w(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||zw(f,h),m=MM(a,o,f,h==="in"||h==="not-in");return He.create(d,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ht(t,e,n){const r=e,s=li("where",t);return yh._create(s,r,n)}class Cy extends Iy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cy(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Cn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)DN(o,l),o=om(o,l)}(e._query,n),new As(e.firestore,e.converter,om(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ny extends PN{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ny(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Il(i,o)}(e._query,this._field,this._direction);return new As(e.firestore,e.converter,lO(e._query,n))}}function UM(t,e="asc"){const n=e,r=li("orderBy",t);return Ny._create(r,n)}function $w(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!AC(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!Q.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return nw(t,new Q(r))}if(n instanceof ze)return nw(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${eh(n)}.`)}function zw(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function DN(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function BM(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ra{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xs extends AN{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new hu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(li("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Xs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Xs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xs._jsonSchema={type:Ge("string",Xs._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class hu extends Xs{data(e={}){return super.data(e)}}class Js{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ra(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new hu(this._firestore,this._userDataWriter,r.key,r,new Ra(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new hu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ra(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new hu(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ra(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,h=-1;return a.type!==0&&(d=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:$M(a.type),doc:l,oldIndex:d,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=qg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function $M(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */Js._jsonSchemaVersion="firestore/querySnapshot/1.0",Js._jsonSchema={type:Ge("string",Js._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(t){t=wn(t,ze);const e=wn(t.firestore,ai),n=ph(e);return EM(n,t._key).then(r=>jN(e,t,r))}function od(t){t=wn(t,As);const e=wn(t.firestore,ai),n=ph(e),r=new Ty(e);return RN(t._query),TM(n,t._query).then(s=>new Js(e,r,t,s))}function Eo(t,e,n,...r){t=wn(t,ze);const s=wn(t.firestore,ai),i=wy(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof _y?jM(i,"updateDoc",t._key,e,n,r):OM(i,"updateDoc",t._key,e),ON(s,[o.toMutation(t._key,Bn.exists(!0))])}function zM(t,e){const n=wn(t.firestore,ai),r=Nn(t),s=BM(t.converter,e),i=wy(t.firestore);return ON(n,[DM(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bn.exists(!1))]).then(()=>r)}function ad(t,...e){var d,h,f;t=Le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Bw(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Bw(e[r])){const m=e[r];e[r]=(d=m.next)==null?void 0:d.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,a;if(t instanceof ze)o=wn(t.firestore,ai),a=sh(t._key.path),i={next:m=>{e[r]&&e[r](jN(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=wn(t,As);o=wn(m.firestore,ai),a=m._query;const y=new Ty(o);i={next:N=>{e[r]&&e[r](new Js(o,y,m,N))},error:e[r+1],complete:e[r+2]},RN(t._query)}const l=ph(o);return xM(l,a,s,i)}function ON(t,e){const n=ph(t);return IM(n,e)}function jN(t,e,n){const r=n.docs.get(e._key),s=new Ty(t);return new Xs(t,s,e._key,r,new Ra(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){E2(Ns),hs(new hr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ai(new C2(r.getProvider("auth-internal")),new b2(o,r.getProvider("app-check-internal")),q2(o,s),o);return i={useFetchStreams:n,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),sn(Fw,Uw,e),sn(Fw,Uw,"esm2020")})();var Ww={};const qw="@firebase/database",Hw="1.1.0";/**
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
 */let MN="";function WM(t){MN=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:gl(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qM(e)}}catch{}return new HM},Ks=LN("localStorage"),GM=LN("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new Kd("@firebase/database"),KM=function(){let t=1;return function(){return t++}}(),VN=function(t){const e=JA(t),n=new KA;n.update(e);const r=n.digest();return Ag.encodeByteArray(r)},Zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Zl.apply(null,r):typeof r=="object"?e+=ot(r):e+=r,e+=" "}return e};let Ga=null,Gw=!0;const QM=function(t,e){$(!0,"Can't turn on custom loggers persistently."),ro.logLevel=ae.VERBOSE,Ga=ro.log.bind(ro)},wt=function(...t){if(Gw===!0&&(Gw=!1,Ga===null&&GM.get("logging_enabled")===!0&&QM()),Ga){const e=Zl.apply(null,t);Ga(e)}},ec=function(t){return function(...e){wt(t,...e)}},ym=function(...t){const e="FIREBASE INTERNAL ERROR: "+Zl(...t);ro.error(e)},yr=function(...t){const e=`FIREBASE FATAL ERROR: ${Zl(...t)}`;throw ro.error(e),new Error(e)},Kt=function(...t){const e="FIREBASE WARNING: "+Zl(...t);ro.warn(e)},YM=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Kt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},FN=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},XM=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},To="[MIN_NAME]",ci="[MAX_NAME]",Fo=function(t,e){if(t===e)return 0;if(t===To||e===ci)return-1;if(e===To||t===ci)return 1;{const n=Kw(t),r=Kw(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},JM=function(t,e){return t===e?0:t<e?-1:1},ga=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},Sy=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ot(e[r]),n+=":",n+=Sy(t[e[r]]);return n+="}",n},UN=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ut(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const BN=function(t){$(!FN(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const d=[];for(l=n;l;l-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)d.push(i%2?1:0),i=Math.floor(i/2);d.push(s?1:0),d.reverse();const h=d.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},ZM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const nL=new RegExp("^-?(0*)\\d{1,10}$"),rL=-2147483648,sL=2147483647,Kw=function(t){if(nL.test(t)){const e=Number(t);if(e>=rL&&e<=sL)return e}return null},tc=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Kt("Exception was thrown by user callback.",n),e},Math.floor(0))}},iL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ka=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class oL{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Kt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(wt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Kt(e)}}class fu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="5",$N="v",zN="s",WN="r",qN="f",HN=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,GN="ls",KN="p",_m="ac",QN="websocket",YN="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1,d=null){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function lL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function JN(t,e,n){$(typeof e=="string","typeof type must == string"),$(typeof n=="object","typeof params must == object");let r;if(e===QN)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===YN)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lL(t)&&(n.ns=t.namespace);const s=[];return Ut(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(){this.counters_={}}incrementCounter(e,n=1){xr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf={},Bf={};function ky(t){const e=t.toString();return Uf[e]||(Uf[e]=new cL),Uf[e]}function uL(t,e){const n=t.toString();return Bf[n]||(Bf[n]=e()),Bf[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&tc(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="start",hL="close",fL="pLPCommand",pL="pRTLPCB",ZN="id",eS="pw",tS="ser",mL="cb",gL="seg",yL="ts",_L="d",vL="dframe",nS=1870,rS=30,wL=nS-rS,xL=25e3,EL=3e4;class Wi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ec(e),this.stats_=ky(n),this.urlFn=l=>(this.appCheckToken&&(l[_m]=this.appCheckToken),JN(n,YN,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new dL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EL)),XM(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ay((...i)=>{const[o,a,l,d,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qw)this.id=a,this.password=l;else if(o===hL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qw]="t",r[tS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mL]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$N]=by,this.transportSessionId&&(r[zN]=this.transportSessionId),this.lastSessionId&&(r[GN]=this.lastSessionId),this.applicationId&&(r[KN]=this.applicationId),this.appCheckToken&&(r[_m]=this.appCheckToken),typeof location<"u"&&location.hostname&&HN.test(location.hostname)&&(r[WN]=qN);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZM()&&!eL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hI(n),s=UN(r,wL);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[vL]="t",r[ZN]=e,r[eS]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ay{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=KM(),window[fL+this.uniqueCallbackIdentifier]=e,window[pL+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ay.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wt("frame writing exception"),a.stack&&wt(a.stack),wt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||wt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ZN]=this.myID,e[eS]=this.myPW,e[tS]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rS+r.length<=nS;){const o=this.pendingSegs.shift();r=r+"&"+gL+s+"="+o.seg+"&"+yL+s+"="+o.ts+"&"+_L+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(xL)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{wt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=16384,IL=45e3;let ld=null;typeof MozWebSocket<"u"?ld=MozWebSocket:typeof WebSocket<"u"&&(ld=WebSocket);class fn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ec(this.connId),this.stats_=ky(n),this.connURL=fn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[$N]=by,typeof location<"u"&&location.hostname&&HN.test(location.hostname)&&(o[WN]=qN),n&&(o[zN]=n),r&&(o[GN]=r),s&&(o[_m]=s),i&&(o[KN]=i),JN(e,QN,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ks.set("previous_websocket_failure",!0);try{let r;FA(),this.mySock=new ld(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ld!==null&&!fn.forceDisallow_}static previouslyFailed(){return Ks.isInMemoryStorage||Ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=gl(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if($(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=UN(n,TL);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IL))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fn.responsesRequiredToBeHealthy=2;fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{static get ALL_TRANSPORTS(){return[Wi,fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=fn&&fn.isAvailable();let r=n&&!fn.previouslyFailed();if(e.webSocketOnly&&(n||Kt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fn];else{const s=this.transports_=[];for(const i of bl.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);bl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=6e4,NL=5e3,SL=10*1024,bL=100*1024,$f="t",Yw="d",kL="s",Xw="r",AL="e",Jw="o",Zw="a",ex="n",tx="p",RL="h";class PL{constructor(e,n,r,s,i,o,a,l,d,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=d,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ec("c:"+this.id+":"),this.transportManager_=new bl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ka(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>bL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>SL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if($f in e){const n=e[$f];n===Zw?this.upgradeIfSecondaryHealthy_():n===Xw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ga("t",e),r=ga("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tx,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ex,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ga("t",e),r=ga("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ga($f,e);if(Yw in e){const r=e[Yw];if(n===RL){const s={...r};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===ex){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kL?this.onConnectionShutdown_(r):n===Xw?this.onReset_(r):n===AL?ym("Server Error: "+r):n===Jw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ym("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),by!==r&&Kt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ka(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(CL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ka(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(NL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tx,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.allowedEvents_=e,this.listeners_={},$(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){$(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd extends iS{static getInstance(){return new cd}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Og()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return $(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=32,rx=768;class Ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ee("")}function le(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ws(t){return t.pieces_.length-t.pieceNum_}function Te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ee(t.pieces_,e)}function oS(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DL(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function aS(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function lS(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ee(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ee(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function jt(t,e){const n=le(t),r=le(e);if(n===null)return e;if(n===r)return jt(Te(t),Te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ry(t,e){if(ws(t)!==ws(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ws(t)>ws(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class OL{constructor(e,n){this.errorPrefix_=n,this.parts_=aS(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gd(this.parts_[r]);cS(this)}}function jL(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gd(e),cS(t)}function ML(t){const e=t.parts_.pop();t.byteLength_-=Gd(e),t.parts_.length>0&&(t.byteLength_-=1)}function cS(t){if(t.byteLength_>rx)throw new Error(t.errorPrefix_+"has a key path longer than "+rx+" bytes ("+t.byteLength_+").");if(t.parts_.length>nx)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nx+") or object contains a cycle "+$s(t))}function $s(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py extends iS{static getInstance(){return new Py}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return $(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=1e3,LL=60*5*1e3,sx=30*1e3,VL=1.3,FL=3e4,UL="server_kill",ix=3;class ar extends sS{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ar.nextPersistentConnectionId_++,this.log_=ec("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ya,this.maxReconnectDelay_=LL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Py.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&cd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ot(i)),$(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Pg,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),$(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,d=a.s;ar.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(d,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xr(e,"w")){const r=po(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Kt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sx)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=HA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),$(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ym("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){$(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FL&&(this.reconnectDelay_=ya),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ar.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},d=function(f){$(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:d};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?wt("getToken() completed but was canceled"):(wt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new PL(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Kt(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(UL)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Kt(f),l())}}}interrupt(e){wt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){wt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Wp(this.interruptReasons_)&&(this.reconnectDelay_=ya,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Sy(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ee(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){wt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ix&&(this.reconnectDelay_=sx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){wt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ix&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+MN.replace(/\./g,"-")]=1,Og()?e["framework.cordova"]=1:yI()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=cd.getInstance().currentlyOnline();return Wp(this.interruptReasons_)&&e}}ar.nextPersistentConnectionId_=0;ar.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class vh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new oe(To,e),s=new oe(To,n);return this.compare(r,s)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bc;class uS extends vh{static get __EMPTY_NODE(){return Bc}static set __EMPTY_NODE(e){Bc=e}compare(e,n){return Fo(e.name,n.name)}isDefinedOn(e){throw Ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ci,Bc)}makePost(e,n){return $(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Bc)}toString(){return".key"}}const so=new uS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??Mt.EMPTY_NODE,this.right=i??Mt.EMPTY_NODE}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}it.RED=!0;it.BLACK=!1;class BL{copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,it.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,it.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $c(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $c(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $c(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $c(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new BL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t,e){return Fo(t.name,e.name)}function Dy(t,e){return Fo(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vm;function zL(t){vm=t}const dS=function(t){return typeof t=="number"?"number:"+BN(t):"string:"+t},hS=function(t){if(t.isLeafNode()){const e=t.val();$(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xr(e,".sv"),"Priority must be a string or number.")}else $(t===vm||t.isEmpty(),"priority of unexpected type.");$(t===vm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ox;class nt{static set __childrenNodeConstructor(e){ox=e}static get __childrenNodeConstructor(){return ox}constructor(e,n=nt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,$(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hS(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:le(e)===".priority"?this.priorityNode_:nt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=le(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:($(r!==".priority"||ws(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dS(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=BN(this.value_):e+=this.value_,this.lazyHash_=VN(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nt.__childrenNodeConstructor?-1:($(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=nt.VALUE_TYPE_ORDER.indexOf(n),i=nt.VALUE_TYPE_ORDER.indexOf(r);return $(s>=0,"Unknown leaf type: "+n),$(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}nt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fS,pS;function WL(t){fS=t}function qL(t){pS=t}class HL extends vh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Fo(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ci,new nt("[PRIORITY-POST]",pS))}makePost(e,n){const r=fS(e);return new oe(n,new nt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ue=new HL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=Math.log(2);class KL{constructor(e){const n=i=>parseInt(Math.log(i)/GL,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ud=function(t,e,n,r){t.sort(e);const s=function(l,d){const h=d-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new it(m,f.node,it.BLACK,null,null);{const y=parseInt(h/2,10)+l,N=s(l,y),_=s(y+1,d);return f=t[y],m=n?n(f):f,new it(m,f.node,it.BLACK,N,_)}},i=function(l){let d=null,h=null,f=t.length;const m=function(N,_){const A=f-N,x=f;f-=N;const E=s(A+1,x),b=t[A],D=n?n(b):b;y(new it(D,b.node,_,null,E))},y=function(N){d?(d.left=N,d=N):(h=N,d=N)};for(let N=0;N<l.count;++N){const _=l.nextBitIsOne(),A=Math.pow(2,l.count-(N+1));_?m(A,it.BLACK):(m(A,it.BLACK),m(A,it.RED))}return h},o=new KL(t.length),a=i(o);return new Mt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zf;const Ci={};class rr{static get Default(){return $(Ci&&Ue,"ChildrenNode.ts has not been loaded"),zf=zf||new rr({".priority":Ci},{".priority":Ue}),zf}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=po(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return xr(this.indexSet_,e.toString())}addIndex(e,n){$(e!==so,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(oe.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=ud(r,e.getCompare()):a=Ci;const l=e.toString(),d={...this.indexSet_};d[l]=e;const h={...this.indexes_};return h[l]=a,new rr(h,d)}addToIndexes(e,n){const r=Bu(this.indexes_,(s,i)=>{const o=po(this.indexSet_,i);if($(o,"Missing index implementation for "+i),s===Ci)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let d=l.getNext();for(;d;)d.name!==e.name&&a.push(d),d=l.getNext();return a.push(e),ud(a,o.getCompare())}else return Ci;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new rr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Bu(this.indexes_,s=>{if(s===Ci)return s;{const i=n.get(e.name);return i?s.remove(new oe(e.name,i)):s}});return new rr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _a;class Z{static get EMPTY_NODE(){return _a||(_a=new Z(new Mt(Dy),null,rr.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hS(this.priorityNode_),this.children_.isEmpty()&&$(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_a}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_a:n}}getChild(e){const n=le(e);return n===null?this:this.getImmediateChild(n).getChild(Te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if($(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new oe(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?_a:this.priorityNode_;return new Z(s,o,i)}}updateChild(e,n){const r=le(e);if(r===null)return n;{$(le(e)!==".priority"||ws(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Te(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ue,(o,a)=>{n[o]=a.val(e),r++,i&&Z.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dS(this.getPriority().val())+":"),this.forEachChild(Ue,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":VN(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new oe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nc?-1:0}withIndex(e){if(e===so||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===so||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ue),s=n.getIterator(Ue);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===so?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QL extends Z{constructor(){super(new Mt(Dy),Z.EMPTY_NODE,rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const nc=new QL;Object.defineProperties(oe,{MIN:{value:new oe(To,Z.EMPTY_NODE)},MAX:{value:new oe(ci,nc)}});uS.__EMPTY_NODE=Z.EMPTY_NODE;nt.__childrenNodeConstructor=Z;zL(nc);qL(nc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YL=!0;function xt(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),$(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new nt(n,xt(e))}if(!(t instanceof Array)&&YL){const n=[];let r=!1;if(Ut(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=xt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return Z.EMPTY_NODE;const i=ud(n,$L,o=>o.name,Dy);if(r){const o=ud(n,Ue.getCompare());return new Z(i,xt(e),new rr({".priority":o},{".priority":Ue}))}else return new Z(i,xt(e),rr.Default)}else{let n=Z.EMPTY_NODE;return Ut(t,(r,s)=>{if(xr(t,r)&&r.substring(0,1)!=="."){const i=xt(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(xt(e))}}WL(xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL extends vh{constructor(e){super(),this.indexPath_=e,$(!ce(e)&&le(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Fo(e.name,n.name):i}makePost(e,n){const r=xt(e),s=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new oe(n,s)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,nc);return new oe(ci,e)}toString(){return aS(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JL extends vh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fo(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const r=xt(e);return new oe(n,r)}toString(){return".value"}}const ZL=new JL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t){return{type:"value",snapshotNode:t}}function Io(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function kl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Al(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function eV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){$(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(kl(n,a)):$(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Io(n,r)):o.trackChildChange(Al(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ue,(s,i)=>{n.hasChild(s)||r.trackChildChange(kl(s,i))}),n.isLeafNode()||n.forEachChild(Ue,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Al(s,i,o))}else r.trackChildChange(Io(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.indexedFilter_=new Oy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rl.getStartPost_(e),this.endPost_=Rl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new oe(n,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Z.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Z.EMPTY_NODE);const i=this;return n.forEachChild(Ue,(o,a)=>{i.matches(new oe(o,a))||(s=s.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Rl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new oe(n,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Z.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Z.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,y)=>f(y,m)}else o=this.index_.getCompare();const a=e;$(a.numChildren()===this.limit_,"");const l=new oe(n,r),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=s.getChildAfterChild(this.index_,d,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=s.getChildAfterChild(this.index_,m,this.reverse_);const y=m==null?1:o(m,l);if(h&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(Al(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(kl(n,f));const _=a.updateImmediateChild(n,Z.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(i!=null&&i.trackChildChange(Io(m.name,m.node)),_.updateImmediateChild(m.name,m.node)):_}}else return r.isEmpty()?e:h&&o(d,l)>=0?(i!=null&&(i.trackChildChange(kl(d.name,d.node)),i.trackChildChange(Io(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(d.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return $(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return $(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:To}hasEnd(){return this.endSet_}getIndexEndValue(){return $(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return $(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ci}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return $(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new jy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nV(t){return t.loadsAllData()?new Oy(t.getIndex()):t.hasLimit()?new tV(t):new Rl(t)}function ax(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===ZL?n="$value":t.index_===so?n="$key":($(t.index_ instanceof XL,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ot(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ot(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ot(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lx(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd extends sS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:($(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ec("p:rest:"),this.listens_={}}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=dd.getListenId_(e,r),a={};this.listens_[o]=a;const l=ax(e._queryParams);this.restRequest_(i+".json",l,(d,h)=>{let f=h;if(d===404&&(f=null,d=null),d===null&&this.onDataUpdate_(i,f,!1,r),po(this.listens_,o)===a){let m;d?d===401?m="permission_denied":m="rest_error:"+d:m="ok",s(m,null)}})}unlisten(e,n){const r=dd.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ax(e._queryParams),r=e._path.toString(),s=new Pg;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ro(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=gl(a.responseText)}catch{Kt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Kt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(){return{value:null,children:new Map}}function gS(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=le(e);t.children.has(r)||t.children.set(r,hd());const s=t.children.get(r);e=Te(e),gS(s,e,n)}}function wm(t,e,n){t.value!==null?n(e,t.value):sV(t,(r,s)=>{const i=new Ee(e.toString()+"/"+r);wm(s,i,n)})}function sV(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Ut(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=10*1e3,oV=30*1e3,aV=5*60*1e3;class lV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iV(e);const r=cx+(oV-cx)*Math.random();Ka(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ut(e,(s,i)=>{i>0&&xr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ka(this.reportStats_.bind(this),Math.floor(Math.random()*2*aV))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(gn||(gn={}));function yS(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function My(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ly(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=gn.ACK_USER_WRITE,this.source=yS()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return $(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ee(e));return new fd(ge(),n,this.revert)}}else return $(le(this.path)===e,"operationForChild called for unrelated child."),new fd(Te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.source=e,this.path=n,this.type=gn.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new Pl(this.source,ge()):new Pl(this.source,Te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=gn.OVERWRITE}operationForChild(e){return ce(this.path)?new ui(this.source,ge(),this.snap.getImmediateChild(e)):new ui(this.source,Te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=gn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Ee(e));return n.isEmpty()?null:n.value?new ui(this.source,ge(),n.value):new Dl(this.source,ge(),n)}else return $(le(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dl(this.source,Te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=le(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uV(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(eV(o.childName,o.snapshotNode))}),va(t,s,"child_removed",e,r,n),va(t,s,"child_added",e,r,n),va(t,s,"child_moved",i,r,n),va(t,s,"child_changed",e,r,n),va(t,s,"value",e,r,n),s}function va(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>hV(t,a,l)),o.forEach(a=>{const l=dV(t,a,i);s.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(l,t.query_))})})}function dV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hV(t,e,n){if(e.childName==null||n.childName==null)throw Ao("Should only compare child_ events.");const r=new oe(e.childName,e.snapshotNode),s=new oe(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(t,e){return{eventCache:t,serverCache:e}}function Qa(t,e,n,r){return wh(new di(e,n,r),t.serverCache)}function _S(t,e,n,r){return wh(t.eventCache,new di(e,n,r))}function xm(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;const fV=()=>(Wf||(Wf=new Mt(JM)),Wf);class Ae{static fromObject(e){let n=new Ae(null);return Ut(e,(r,s)=>{n=n.set(new Ee(r),s)}),n}constructor(e,n=fV()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(ce(e))return null;{const r=le(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Te(e),n);return i!=null?{path:Xe(new Ee(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=le(e),r=this.children.get(n);return r!==null?r.subtree(Te(e)):new Ae(null)}}set(e,n){if(ce(e))return new Ae(n,this.children);{const r=le(e),i=(this.children.get(r)||new Ae(null)).set(Te(e),n),o=this.children.insert(r,i);return new Ae(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=le(e),r=this.children.get(n);if(r){const s=r.remove(Te(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ae(null):new Ae(this.value,i)}else return this}}get(e){if(ce(e))return this.value;{const n=le(e),r=this.children.get(n);return r?r.get(Te(e)):null}}setTree(e,n){if(ce(e))return n;{const r=le(e),i=(this.children.get(r)||new Ae(null)).setTree(Te(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ae(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Xe(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(ce(e))return null;{const i=le(e),o=this.children.get(i);return o?o.findOnPath_(Te(e),Xe(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,r){if(ce(e))return this;{this.value&&r(n,this.value);const s=le(e),i=this.children.get(s);return i?i.foreachOnPath_(Te(e),Xe(n,s),r):new Ae(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new Ae(null))}}function Ya(t,e,n){if(ce(e))return new En(new Ae(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=jt(s,e);return i=i.updateChild(o,n),new En(t.writeTree_.set(s,i))}else{const s=new Ae(n),i=t.writeTree_.setTree(e,s);return new En(i)}}}function ux(t,e,n){let r=t;return Ut(n,(s,i)=>{r=Ya(r,Xe(e,s),i)}),r}function dx(t,e){if(ce(e))return En.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new En(n)}}function Em(t,e){return _i(t,e)!=null}function _i(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(jt(n.path,e)):null}function hx(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(r,s)=>{e.push(new oe(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new oe(r,s.value))}),e}function as(t,e){if(ce(e))return t;{const n=_i(t,e);return n!=null?new En(new Ae(n)):new En(t.writeTree_.subtree(e))}}function Tm(t){return t.writeTree_.isEmpty()}function Co(t,e){return vS(ge(),t.writeTree_,e)}function vS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?($(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=vS(Xe(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e){return TS(e,t)}function pV(t,e,n,r,s){$(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ya(t.visibleWrites,e,n)),t.lastWriteId=r}function mV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function gV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);$(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&yV(a,r.path)?s=!1:mn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return _V(t),!0;if(r.snap)t.visibleWrites=dx(t.visibleWrites,r.path);else{const a=r.children;Ut(a,l=>{t.visibleWrites=dx(t.visibleWrites,Xe(r.path,l))})}return!0}else return!1}function yV(t,e){if(t.snap)return mn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mn(Xe(t.path,n),e))return!0;return!1}function _V(t){t.visibleWrites=wS(t.allWrites,vV,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function vV(t){return t.visible}function wS(t,e,n){let r=En.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)mn(n,o)?(a=jt(n,o),r=Ya(r,a,i.snap)):mn(o,n)&&(a=jt(o,n),r=Ya(r,ge(),i.snap.getChild(a)));else if(i.children){if(mn(n,o))a=jt(n,o),r=ux(r,a,i.children);else if(mn(o,n))if(a=jt(o,n),ce(a))r=ux(r,ge(),i.children);else{const l=po(i.children,le(a));if(l){const d=l.getChild(Te(a));r=Ya(r,ge(),d)}}}else throw Ao("WriteRecord should have .snap or .children")}}return r}function xS(t,e,n,r,s){if(!r&&!s){const i=_i(t.visibleWrites,e);if(i!=null)return i;{const o=as(t.visibleWrites,e);if(Tm(o))return n;if(n==null&&!Em(o,ge()))return null;{const a=n||Z.EMPTY_NODE;return Co(o,a)}}}else{const i=as(t.visibleWrites,e);if(!s&&Tm(i))return n;if(!s&&n==null&&!Em(i,ge()))return null;{const o=function(d){return(d.visible||s)&&(!r||!~r.indexOf(d.writeId))&&(mn(d.path,e)||mn(e,d.path))},a=wS(t.allWrites,o,e),l=n||Z.EMPTY_NODE;return Co(a,l)}}}function wV(t,e,n){let r=Z.EMPTY_NODE;const s=_i(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ue,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=as(t.visibleWrites,e);return n.forEachChild(Ue,(o,a)=>{const l=Co(as(i,new Ee(o)),a);r=r.updateImmediateChild(o,l)}),hx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=as(t.visibleWrites,e);return hx(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function xV(t,e,n,r,s){$(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Xe(e,n);if(Em(t.visibleWrites,i))return null;{const o=as(t.visibleWrites,i);return Tm(o)?s.getChild(n):Co(o,s.getChild(n))}}function EV(t,e,n,r){const s=Xe(e,n),i=_i(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=as(t.visibleWrites,s);return Co(o,r.getNode().getImmediateChild(n))}else return null}function TV(t,e){return _i(t.visibleWrites,e)}function IV(t,e,n,r,s,i,o){let a;const l=as(t.visibleWrites,e),d=_i(l,ge());if(d!=null)a=d;else if(n!=null)a=Co(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=m.getNext();for(;y&&h.length<s;)f(y,r)!==0&&h.push(y),y=m.getNext();return h}else return[]}function CV(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function pd(t,e,n,r){return xS(t.writeTree,t.treePath,e,n,r)}function Fy(t,e){return wV(t.writeTree,t.treePath,e)}function fx(t,e,n,r){return xV(t.writeTree,t.treePath,e,n,r)}function md(t,e){return TV(t.writeTree,Xe(t.treePath,e))}function NV(t,e,n,r,s,i){return IV(t.writeTree,t.treePath,e,n,r,s,i)}function Uy(t,e,n){return EV(t.writeTree,t.treePath,e,n)}function ES(t,e){return TS(Xe(t.treePath,e),t.writeTree)}function TS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;$(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),$(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Al(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,kl(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Io(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Al(r,e.snapshotNode,s.oldSnap));else throw Ao("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const IS=new bV;class By{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new di(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Uy(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hi(this.viewCache_),i=NV(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(t){return{filter:t}}function AV(t,e){$(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),$(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function RV(t,e,n,r,s){const i=new SV;let o,a;if(n.type===gn.OVERWRITE){const d=n;d.source.fromUser?o=Im(t,e,d.path,d.snap,r,s,i):($(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!ce(d.path),o=gd(t,e,d.path,d.snap,r,s,a,i))}else if(n.type===gn.MERGE){const d=n;d.source.fromUser?o=DV(t,e,d.path,d.children,r,s,i):($(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=Cm(t,e,d.path,d.children,r,s,a,i))}else if(n.type===gn.ACK_USER_WRITE){const d=n;d.revert?o=MV(t,e,d.path,r,s,i):o=OV(t,e,d.path,d.affectedTree,r,s,i)}else if(n.type===gn.LISTEN_COMPLETE)o=jV(t,e,n.path,r,i);else throw Ao("Unknown operation type: "+n.type);const l=i.getChanges();return PV(e,o,l),{viewCache:o,changes:l}}function PV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=xm(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(mS(xm(e)))}}function CS(t,e,n,r,s,i){const o=e.eventCache;if(md(r,n)!=null)return e;{let a,l;if(ce(n))if($(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=hi(e),h=d instanceof Z?d:Z.EMPTY_NODE,f=Fy(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const d=pd(r,hi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const d=le(n);if(d===".priority"){$(ws(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=fx(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Te(n);let f;if(o.isCompleteForChild(d)){l=e.serverCache.getNode();const m=fx(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(d).updateChild(h,m):f=o.getNode().getImmediateChild(d)}else f=Uy(r,d,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),d,f,h,s,i):a=o.getNode()}}return Qa(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function gd(t,e,n,r,s,i,o,a){const l=e.serverCache;let d;const h=o?t.filter:t.filter.getIndexedFilter();if(ce(n))d=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);d=h.updateFullNode(l.getNode(),y,null)}else{const y=le(n);if(!l.isCompleteForPath(n)&&ws(n)>1)return e;const N=Te(n),A=l.getNode().getImmediateChild(y).updateChild(N,r);y===".priority"?d=h.updatePriority(l.getNode(),A):d=h.updateChild(l.getNode(),y,A,N,IS,null)}const f=_S(e,d,l.isFullyInitialized()||ce(n),h.filtersNodes()),m=new By(s,f,i);return CS(t,f,n,s,m,a)}function Im(t,e,n,r,s,i,o){const a=e.eventCache;let l,d;const h=new By(s,e,i);if(ce(n))d=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Qa(e,d,!0,t.filter.filtersNodes());else{const f=le(n);if(f===".priority")d=t.filter.updatePriority(e.eventCache.getNode(),r),l=Qa(e,d,a.isFullyInitialized(),a.isFiltered());else{const m=Te(n),y=a.getNode().getImmediateChild(f);let N;if(ce(m))N=r;else{const _=h.getCompleteChild(f);_!=null?oS(m)===".priority"&&_.getChild(lS(m)).isEmpty()?N=_:N=_.updateChild(m,r):N=Z.EMPTY_NODE}if(y.equals(N))l=e;else{const _=t.filter.updateChild(a.getNode(),f,N,m,h,o);l=Qa(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function px(t,e){return t.eventCache.isCompleteForChild(e)}function DV(t,e,n,r,s,i,o){let a=e;return r.foreach((l,d)=>{const h=Xe(n,l);px(e,le(h))&&(a=Im(t,a,h,d,s,i,o))}),r.foreach((l,d)=>{const h=Xe(n,l);px(e,le(h))||(a=Im(t,a,h,d,s,i,o))}),a}function mx(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Cm(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,d;ce(n)?d=r:d=new Ae(null).setTree(n,r);const h=e.serverCache.getNode();return d.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const y=e.serverCache.getNode().getImmediateChild(f),N=mx(t,y,m);l=gd(t,l,new Ee(f),N,s,i,o,a)}}),d.children.inorderTraversal((f,m)=>{const y=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!y){const N=e.serverCache.getNode().getImmediateChild(f),_=mx(t,N,m);l=gd(t,l,new Ee(f),_,s,i,o,a)}}),l}function OV(t,e,n,r,s,i,o){if(md(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gd(t,e,n,l.getNode().getChild(n),s,i,a,o);if(ce(n)){let d=new Ae(null);return l.getNode().forEachChild(so,(h,f)=>{d=d.set(new Ee(h),f)}),Cm(t,e,n,d,s,i,a,o)}else return e}else{let d=new Ae(null);return r.foreach((h,f)=>{const m=Xe(n,h);l.isCompleteForPath(m)&&(d=d.set(h,l.getNode().getChild(m)))}),Cm(t,e,n,d,s,i,a,o)}}function jV(t,e,n,r,s){const i=e.serverCache,o=_S(e,i.getNode(),i.isFullyInitialized()||ce(n),i.isFiltered());return CS(t,o,n,r,IS,s)}function MV(t,e,n,r,s,i){let o;if(md(r,n)!=null)return e;{const a=new By(r,e,s),l=e.eventCache.getNode();let d;if(ce(n)||le(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=pd(r,hi(e));else{const f=e.serverCache.getNode();$(f instanceof Z,"serverChildren would be complete if leaf node"),h=Fy(r,f)}h=h,d=t.filter.updateFullNode(l,h,i)}else{const h=le(n);let f=Uy(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?d=t.filter.updateChild(l,h,f,Te(n),a,i):e.eventCache.getNode().hasChild(h)?d=t.filter.updateChild(l,h,Z.EMPTY_NODE,Te(n),a,i):d=l,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pd(r,hi(e)),o.isLeafNode()&&(d=t.filter.updateFullNode(d,o,i)))}return o=e.serverCache.isFullyInitialized()||md(r,ge())!=null,Qa(e,d,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Oy(r.getIndex()),i=nV(r);this.processor_=kV(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),d=i.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),h=new di(l,o.isFullyInitialized(),s.filtersNodes()),f=new di(d,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=wh(f,h),this.eventGenerator_=new cV(this.query_)}get query(){return this.query_}}function VV(t){return t.viewCache_.serverCache.getNode()}function FV(t,e){const n=hi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(le(e)).isEmpty())?n.getChild(e):null}function gx(t){return t.eventRegistrations_.length===0}function UV(t,e){t.eventRegistrations_.push(e)}function yx(t,e,n){const r=[];if(n){$(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function _x(t,e,n,r){e.type===gn.MERGE&&e.source.queryId!==null&&($(hi(t.viewCache_),"We should always have a full cache before handling merges"),$(xm(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=RV(t.processor_,s,e,n,r);return AV(t.processor_,i.viewCache),$(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,NS(t,i.changes,i.viewCache.eventCache.getNode(),null)}function BV(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ue,(i,o)=>{r.push(Io(i,o))}),n.isFullyInitialized()&&r.push(mS(n.getNode())),NS(t,r,n.getNode(),e)}function NS(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return uV(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yd;class $V{constructor(){this.views=new Map}}function zV(t){$(!yd,"__referenceConstructor has already been defined"),yd=t}function WV(){return $(yd,"Reference.ts has not been loaded"),yd}function qV(t){return t.views.size===0}function $y(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return $(i!=null,"SyncTree gave us an op for an invalid query."),_x(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(_x(o,e,n,r));return i}}function HV(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=pd(n,s?r:null),l=!1;a?l=!0:r instanceof Z?(a=Fy(n,r),l=!1):(a=Z.EMPTY_NODE,l=!1);const d=wh(new di(a,l,!1),new di(r,s,!1));return new LV(e,d)}return o}function GV(t,e,n,r,s,i){const o=HV(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),UV(o,n),BV(o,n)}function KV(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=xs(t);if(s==="default")for(const[l,d]of t.views.entries())o=o.concat(yx(d,n,r)),gx(d)&&(t.views.delete(l),d.query._queryParams.loadsAllData()||i.push(d.query));else{const l=t.views.get(s);l&&(o=o.concat(yx(l,n,r)),gx(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!xs(t)&&i.push(new(WV())(e._repo,e._path)),{removed:i,events:o}}function SS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function io(t,e){let n=null;for(const r of t.views.values())n=n||FV(r,e);return n}function bS(t,e){if(e._queryParams.loadsAllData())return xh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function kS(t,e){return bS(t,e)!=null}function xs(t){return xh(t)!=null}function xh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _d;function QV(t){$(!_d,"__referenceConstructor has already been defined"),_d=t}function YV(){return $(_d,"Reference.ts has not been loaded"),_d}let XV=1;class vx{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=CV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function JV(t,e,n,r,s){return pV(t.pendingWriteTree_,e,n,r,s),s?rc(t,new ui(yS(),e,n)):[]}function qi(t,e,n=!1){const r=mV(t.pendingWriteTree_,e);if(gV(t.pendingWriteTree_,e)){let i=new Ae(null);return r.snap!=null?i=i.set(ge(),!0):Ut(r.children,o=>{i=i.set(new Ee(o),!0)}),rc(t,new fd(r.path,i,n))}else return[]}function Eh(t,e,n){return rc(t,new ui(My(),e,n))}function ZV(t,e,n){const r=Ae.fromObject(n);return rc(t,new Dl(My(),e,r))}function e4(t,e){return rc(t,new Pl(My(),e))}function t4(t,e,n){const r=zy(t,n);if(r){const s=Wy(r),i=s.path,o=s.queryId,a=jt(i,e),l=new Pl(Ly(o),a);return qy(t,i,l)}else return[]}function Nm(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||kS(o,e))){const l=KV(o,e,n,r);qV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const d=l.removed;if(a=l.events,!s){const h=d.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(m,y)=>xs(y));if(h&&!f){const m=t.syncPointTree_.subtree(i);if(!m.isEmpty()){const y=s4(m);for(let N=0;N<y.length;++N){const _=y[N],A=_.query,x=DS(t,_);t.listenProvider_.startListening(Xa(A),vd(t,A),x.hashFn,x.onComplete)}}}!f&&d.length>0&&!r&&(h?t.listenProvider_.stopListening(Xa(e),null):d.forEach(m=>{const y=t.queryToTagMap.get(Th(m));t.listenProvider_.stopListening(Xa(m),y)}))}i4(t,d)}return a}function n4(t,e,n,r){const s=zy(t,r);if(s!=null){const i=Wy(s),o=i.path,a=i.queryId,l=jt(o,e),d=new ui(Ly(a),l,n);return qy(t,o,d)}else return[]}function r4(t,e,n,r){const s=zy(t,r);if(s){const i=Wy(s),o=i.path,a=i.queryId,l=jt(o,e),d=Ae.fromObject(n),h=new Dl(Ly(a),l,d);return qy(t,o,h)}else return[]}function wx(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(m,y)=>{const N=jt(m,s);i=i||io(y,N),o=o||xs(y)});let a=t.syncPointTree_.get(s);a?(o=o||xs(a),i=i||io(a,ge())):(a=new $V,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=Z.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,N)=>{const _=io(N,ge());_&&(i=i.updateImmediateChild(y,_))}));const d=kS(a,e);if(!d&&!e._queryParams.loadsAllData()){const m=Th(e);$(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const y=o4();t.queryToTagMap.set(m,y),t.tagToQueryMap.set(y,m)}const h=Vy(t.pendingWriteTree_,s);let f=GV(a,e,n,h,i,l);if(!d&&!o&&!r){const m=bS(a,e);f=f.concat(a4(t,e,m))}return f}function AS(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=jt(o,e),d=io(a,l);if(d)return d});return xS(s,e,i,n,!0)}function rc(t,e){return RS(e,t.syncPointTree_,null,Vy(t.pendingWriteTree_,ge()))}function RS(t,e,n,r){if(ce(t.path))return PS(t,e,n,r);{const s=e.get(ge());n==null&&s!=null&&(n=io(s,ge()));let i=[];const o=le(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const d=n?n.getImmediateChild(o):null,h=ES(r,o);i=i.concat(RS(a,l,d,h))}return s&&(i=i.concat($y(s,t,r,n))),i}}function PS(t,e,n,r){const s=e.get(ge());n==null&&s!=null&&(n=io(s,ge()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,d=ES(r,o),h=t.operationForChild(o);h&&(i=i.concat(PS(h,a,l,d)))}),s&&(i=i.concat($y(s,t,r,n))),i}function DS(t,e){const n=e.query,r=vd(t,n);return{hashFn:()=>(VV(e)||Z.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?t4(t,n._path,r):e4(t,n._path);{const i=tL(s,n);return Nm(t,n,null,i)}}}}function vd(t,e){const n=Th(e);return t.queryToTagMap.get(n)}function Th(t){return t._path.toString()+"$"+t._queryIdentifier}function zy(t,e){return t.tagToQueryMap.get(e)}function Wy(t){const e=t.indexOf("$");return $(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ee(t.substr(0,e))}}function qy(t,e,n){const r=t.syncPointTree_.get(e);$(r,"Missing sync point for query tag that we're tracking");const s=Vy(t.pendingWriteTree_,e);return $y(r,n,s,null)}function s4(t){return t.fold((e,n,r)=>{if(n&&xs(n))return[xh(n)];{let s=[];return n&&(s=SS(n)),Ut(r,(i,o)=>{s=s.concat(o)}),s}})}function Xa(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(YV())(t._repo,t._path):t}function i4(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Th(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function o4(){return XV++}function a4(t,e,n){const r=e._path,s=vd(t,e),i=DS(t,n),o=t.listenProvider_.startListening(Xa(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)$(!xs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((d,h,f)=>{if(!ce(d)&&h&&xs(h))return[xh(h).query];{let m=[];return h&&(m=m.concat(SS(h).map(y=>y.query))),Ut(f,(y,N)=>{m=m.concat(N)}),m}});for(let d=0;d<l.length;++d){const h=l[d];t.listenProvider_.stopListening(Xa(h),vd(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Hy(n)}node(){return this.node_}}class Gy{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Gy(this.syncTree_,n)}node(){return AS(this.syncTree_,this.path_)}}const l4=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xx=function(t,e,n){if(!t||typeof t!="object")return t;if($(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return c4(t[".sv"],e,n);if(typeof t[".sv"]=="object")return u4(t[".sv"],e);$(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},c4=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:$(!1,"Unexpected server value: "+t)}},u4=function(t,e,n){t.hasOwnProperty("increment")||$(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&$(!1,"Unexpected increment value: "+r);const s=e.node();if($(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},d4=function(t,e,n,r){return Ky(e,new Gy(n,t),r)},h4=function(t,e,n){return Ky(t,new Hy(e),n)};function Ky(t,e,n){const r=t.getPriority().val(),s=xx(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=xx(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new nt(a,xt(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new nt(s))),o.forEachChild(Ue,(a,l)=>{const d=Ky(l,e.getImmediateChild(a),n);d!==l&&(i=i.updateImmediateChild(a,d))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yy(t,e){let n=e instanceof Ee?e:new Ee(e),r=t,s=le(n);for(;s!==null;){const i=po(r.node.children,s)||{children:{},childCount:0};r=new Qy(s,r,i),n=Te(n),s=le(n)}return r}function Uo(t){return t.node.value}function OS(t,e){t.node.value=e,Sm(t)}function jS(t){return t.node.childCount>0}function f4(t){return Uo(t)===void 0&&!jS(t)}function Ih(t,e){Ut(t.node.children,(n,r)=>{e(new Qy(n,t,r))})}function MS(t,e,n,r){n&&e(t),Ih(t,s=>{MS(s,e,!0)})}function p4(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function sc(t){return new Ee(t.parent===null?t.name:sc(t.parent)+"/"+t.name)}function Sm(t){t.parent!==null&&m4(t.parent,t.name,t)}function m4(t,e,n){const r=f4(n),s=xr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Sm(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Sm(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4=/[\[\].#$\/\u0000-\u001F\u007F]/,y4=/[\[\].#$\u0000-\u001F\u007F]/,qf=10*1024*1024,LS=function(t){return typeof t=="string"&&t.length!==0&&!g4.test(t)},VS=function(t){return typeof t=="string"&&t.length!==0&&!y4.test(t)},_4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),VS(t)},FS=function(t,e,n){const r=n instanceof Ee?new OL(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+$s(r));if(typeof e=="function")throw new Error(t+"contains a function "+$s(r)+" with contents = "+e.toString());if(FN(e))throw new Error(t+"contains "+e.toString()+" "+$s(r));if(typeof e=="string"&&e.length>qf/3&&Gd(e)>qf)throw new Error(t+"contains a string greater than "+qf+" utf8 bytes "+$s(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ut(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!LS(o)))throw new Error(t+" contains an invalid key ("+o+") "+$s(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);jL(r,o),FS(t,a,r),ML(r)}),s&&i)throw new Error(t+' contains ".value" child '+$s(r)+" in addition to actual children.")}},US=function(t,e,n,r){if(!VS(n))throw new Error(vI(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},v4=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),US(t,e,n)},w4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!LS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!_4(n))throw new Error(vI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function BS(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Ry(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function $S(t,e,n){BS(t,n),zS(t,r=>Ry(r,e))}function vi(t,e,n){BS(t,n),zS(t,r=>mn(r,e)||mn(e,r))}function zS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(E4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function E4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ga&&wt("event: "+n.toString()),tc(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T4="repo_interrupt",I4=25;class C4{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new x4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hd(),this.transactionQueueTree_=new Qy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function N4(t,e,n){if(t.stats_=ky(t.repoInfo_),t.forceRestClient_||iL())t.server_=new dd(t.repoInfo_,(r,s,i,o)=>{Ex(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Tx(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new ar(t.repoInfo_,e,(r,s,i,o)=>{Ex(t,r,s,i,o)},r=>{Tx(t,r)},r=>{b4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=uL(t.repoInfo_,()=>new lV(t.stats_,t.server_)),t.infoData_=new rV,t.infoSyncTree_=new vx({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Eh(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Xy(t,"connected",!1),t.serverSyncTree_=new vx({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const d=o(a,l);vi(t.eventQueue_,r._path,d)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function S4(t){const n=t.infoData_.getNode(new Ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function WS(t){return l4({timestamp:S4(t)})}function Ex(t,e,n,r,s){t.dataUpdateCount++;const i=new Ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Bu(n,d=>xt(d));o=r4(t.serverSyncTree_,i,l,s)}else{const l=xt(n);o=n4(t.serverSyncTree_,i,l,s)}else if(r){const l=Bu(n,d=>xt(d));o=ZV(t.serverSyncTree_,i,l)}else{const l=xt(n);o=Eh(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Zy(t,i)),vi(t.eventQueue_,a,o)}function Tx(t,e){Xy(t,"connected",e),e===!1&&A4(t)}function b4(t,e){Ut(e,(n,r)=>{Xy(t,n,r)})}function Xy(t,e,n){const r=new Ee("/.info/"+e),s=xt(n);t.infoData_.updateSnapshot(r,s);const i=Eh(t.infoSyncTree_,r,s);vi(t.eventQueue_,r,i)}function k4(t){return t.nextWriteId_++}function A4(t){qS(t,"onDisconnectEvents");const e=WS(t),n=hd();wm(t.onDisconnect_,ge(),(s,i)=>{const o=d4(s,i,t.serverSyncTree_,e);gS(n,s,o)});let r=[];wm(n,ge(),(s,i)=>{r=r.concat(Eh(t.serverSyncTree_,s,i));const o=M4(t,s);Zy(t,o)}),t.onDisconnect_=hd(),vi(t.eventQueue_,ge(),r)}function R4(t,e,n){let r;le(e._path)===".info"?r=wx(t.infoSyncTree_,e,n):r=wx(t.serverSyncTree_,e,n),$S(t.eventQueue_,e._path,r)}function P4(t,e,n){let r;le(e._path)===".info"?r=Nm(t.infoSyncTree_,e,n):r=Nm(t.serverSyncTree_,e,n),$S(t.eventQueue_,e._path,r)}function D4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(T4)}function qS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),wt(n,...e)}function HS(t,e,n){return AS(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Jy(t,e=t.transactionQueueTree_){if(e||Ch(t,e),Uo(e)){const n=KS(t,e);$(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&O4(t,sc(e),n)}else jS(e)&&Ih(e,n=>{Jy(t,n)})}function O4(t,e,n){const r=n.map(d=>d.currentWriteId),s=HS(t,e,r);let i=s;const o=s.hash();for(let d=0;d<n.length;d++){const h=n[d];$(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=jt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,d=>{qS(t,"transaction put response",{path:l.toString(),status:d});let h=[];if(d==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(qi(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Ch(t,Yy(t.transactionQueueTree_,e)),Jy(t,t.transactionQueueTree_),vi(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)tc(f[m])}else{if(d==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Kt("transaction at "+l.toString()+" failed: "+d);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=d}Zy(t,e)}},o)}function Zy(t,e){const n=GS(t,e),r=sc(n),s=KS(t,n);return j4(t,s,r),r}function j4(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],d=jt(n,l.path);let h=!1,f;if($(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=I4)h=!0,f="maxretry",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0));else{const m=HS(t,l.path,o);l.currentInputSnapshot=m;const y=e[a].update(m.val());if(y!==void 0){FS("transaction failed: Data returned ",y,l.path);let N=xt(y);typeof y=="object"&&y!=null&&xr(y,".priority")||(N=N.updatePriority(m.getPriority()));const A=l.currentWriteId,x=WS(t),E=h4(N,m,x);l.currentOutputSnapshotRaw=N,l.currentOutputSnapshotResolved=E,l.currentWriteId=k4(t),o.splice(o.indexOf(A),1),s=s.concat(JV(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),s=s.concat(qi(t.serverSyncTree_,A,!0))}else h=!0,f="nodata",s=s.concat(qi(t.serverSyncTree_,l.currentWriteId,!0))}vi(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ch(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)tc(r[a]);Jy(t,t.transactionQueueTree_)}function GS(t,e){let n,r=t.transactionQueueTree_;for(n=le(e);n!==null&&Uo(r)===void 0;)r=Yy(r,n),e=Te(e),n=le(e);return r}function KS(t,e){const n=[];return QS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function QS(t,e,n){const r=Uo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Ih(e,s=>{QS(t,s,n)})}function Ch(t,e){const n=Uo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,OS(e,n.length>0?n:void 0)}Ih(e,r=>{Ch(t,r)})}function M4(t,e){const n=sc(GS(t,e)),r=Yy(t.transactionQueueTree_,e);return p4(r,s=>{Hf(t,s)}),Hf(t,r),MS(r,s=>{Hf(t,s)}),n}function Hf(t,e){const n=Uo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?($(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):($(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(qi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?OS(e,void 0):n.length=i+1,vi(t.eventQueue_,sc(e),s);for(let o=0;o<r.length;o++)tc(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function V4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Kt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ix=function(t,e){const n=F4(t),r=n.namespace;n.domain==="firebase.com"&&yr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||YM();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new XN(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ee(n.pathString)}},F4=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let d=t.indexOf("//");d>=0&&(a=t.substring(0,d-1),t=t.substring(d+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=L4(t.substring(h,f)));const m=V4(t.substring(Math.min(t.length,f)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(d+1),10)):d=e.length;const y=e.slice(0,d);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const N=e.indexOf(".");r=e.substring(0,N).toLowerCase(),n=e.substring(N+1),i=r}"ns"in m&&(i=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ot(this.snapshot.exportVal())}}class B4{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return $(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return ce(this._path)?null:oS(this._path)}get ref(){return new Rs(this._repo,this._path)}get _queryIdentifier(){const e=lx(this._queryParams),n=Sy(e);return n==="{}"?"default":n}get _queryObject(){return lx(this._queryParams)}isEqual(e){if(e=Le(e),!(e instanceof e_))return!1;const n=this._repo===e._repo,r=Ry(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+DL(this._path)}}class Rs extends e_{constructor(e,n){super(e,n,new jy,!1)}get parent(){const e=lS(this._path);return e===null?null:new Rs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wd{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ee(e),r=bm(this.ref,e);return new wd(this._node.getChild(n),r,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new wd(s,bm(this.ref,r),Ue)))}hasChild(e){const n=new Ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cx(t,e){return t=Le(t),t._checkNotDeleted("ref"),e!==void 0?bm(t._root,e):t._root}function bm(t,e){return t=Le(t),le(t._path)===null?v4("child","path",e):US("child","path",e),new Rs(t._repo,Xe(t._path,e))}class t_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new U4("value",this,new wd(e.snapshotNode,new Rs(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new B4(this,e,n):null}matches(e){return e instanceof t_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function z4(t,e,n,r,s){const i=new $4(n,void 0),o=new t_(i);return R4(t._repo,t,o),()=>P4(t._repo,t,o)}function Nx(t,e,n,r){return z4(t,"value",e)}zV(Rs);QV(Rs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W4="FIREBASE_DATABASE_EMULATOR_HOST",km={};let q4=!1;function H4(t,e,n,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=wr(i);t.repoInfo_=new XN(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function G4(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ix(i,s),a=o.repoInfo,l;typeof process<"u"&&Ww&&(l=Ww[W4]),l?(i=`http://${l}?ns=${a.namespace}`,o=Ix(i,s),a=o.repoInfo):o.repoInfo.secure;const d=new aL(t.name,t.options,e);w4("Invalid Firebase Database URL",o),ce(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Q4(a,t,d,new oL(t,n));return new Y4(h,t)}function K4(t,e){const n=km[e];(!n||n[t.key]!==t)&&yr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),D4(t),delete n[t.key]}function Q4(t,e,n,r){let s=km[e.name];s||(s={},km[e.name]=s);let i=s[t.toURLString()];return i&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new C4(t,q4,n,r),s[t.toURLString()]=i,i}class Y4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(N4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rs(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(K4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function X4(t=Qd(),e){const n=zl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Rg("database");r&&J4(n,...r)}return n}function J4(t,e,n,r={}){t=Le(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,i=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&ds(r,i.repoInfo_.emulatorOptions))return;yr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new fu(fu.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:Dg(r.mockUserToken,t.app.options.projectId);o=new fu(a)}wr(e)&&(qd(e),Hd("Database",!0)),H4(i,s,r,o)}/**
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
 */function Z4(t){WM(Ns),hs(new hr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return G4(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),sn(qw,Hw,t),sn(qw,Hw,"esm2020")}ar.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ar.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Z4();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebasestorage.googleapis.com",eF="storageBucket",tF=2*60*1e3,nF=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Hn{constructor(e,n,r=0){super(Gf(e),`Firebase Storage: ${n} (${Gf(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qn||(qn={}));function Gf(t){return"storage/"+t}function rF(){const t="An unknown error occurred, please check the error payload for server response.";return new Gn(qn.UNKNOWN,t)}function sF(){return new Gn(qn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iF(){return new Gn(qn.CANCELED,"User canceled the upload/download.")}function oF(t){return new Gn(qn.INVALID_URL,"Invalid URL '"+t+"'.")}function aF(t){return new Gn(qn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Sx(t){return new Gn(qn.INVALID_ARGUMENT,t)}function XS(){return new Gn(qn.APP_DELETED,"The Firebase app was deleted.")}function lF(t){return new Gn(qn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yn.makeFromUrl(e,n)}catch{return new yn(e,"")}if(r.path==="")return r;throw aF(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",y=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),N={bucket:1,path:3},_=n===YS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,A="([^?#]*)",x=new RegExp(`^https?://${_}/${s}/${A}`,"i"),b=[{regex:a,indices:l,postModify:i},{regex:y,indices:N,postModify:d},{regex:x,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<b.length;D++){const j=b[D],F=j.regex.exec(e);if(F){const k=F[j.indices.bucket];let w=F[j.indices.path];w||(w=""),r=new yn(k,w),j.postModify(r);break}}if(r==null)throw oF(e);return r}}class cF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uF(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let d=!1;function h(...A){d||(d=!0,e.apply(null,A))}function f(A){s=setTimeout(()=>{s=null,t(y,l())},A)}function m(){i&&clearTimeout(i)}function y(A,...x){if(d){m();return}if(A){m(),h.call(null,A,...x);return}if(l()||o){m(),h.call(null,A,...x);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,f(b)}let N=!1;function _(A){N||(N=!0,m(),!d&&(s!==null?(A||(a=2),clearTimeout(s),f(0)):A||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function dF(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hF(t){return t!==void 0}function bx(t,e,n,r){if(r<e)throw Sx(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sx(`Invalid value for '${t}'. Expected ${n} or less.`)}function fF(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var xd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xd||(xd={}));/**
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
 */function pF(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mF{constructor(e,n,r,s,i,o,a,l,d,h,f,m=!0,y=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,_)=>{this.resolve_=N,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new zc(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,d=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===xd.NO_ERROR,l=i.getStatus();if(!a||pF(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===xd.ABORT;r(!1,new zc(!1,null,h));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new zc(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());hF(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=rF();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?XS():iF();o(l)}else{const l=sF();o(l)}};this.canceled_?n(!1,new zc(!1,null,!0)):this.backoffId_=uF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function gF(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yF(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _F(t,e){e&&(t["X-Firebase-GMPID"]=e)}function vF(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wF(t,e,n,r,s,i,o=!0,a=!1){const l=fF(t.urlParams),d=t.url+l,h=Object.assign({},t.headers);return _F(h,e),gF(h,n),yF(h,i),vF(h,r),new mF(d,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function EF(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Ed{constructor(e,n){this._service=e,n instanceof yn?this._location=n:this._location=yn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ed(e,n)}get root(){const e=new yn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return EF(this._location.path)}get storage(){return this._service}get parent(){const e=xF(this._location.path);if(e===null)return null;const n=new yn(this._location.bucket,e);return new Ed(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw lF(e)}}function kx(t,e){const n=e==null?void 0:e[eF];return n==null?null:yn.makeFromBucketSpec(n,t)}function TF(t,e,n,r={}){t.host=`${e}:${n}`;const s=wr(e);s&&(qd(`https://${t.host}/b`),Hd("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Dg(i,t.app.options.projectId))}class IF{constructor(e,n,r,s,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=YS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=tF,this._maxUploadRetryTime=nF,this._requests=new Set,s!=null?this._bucket=yn.makeFromBucketSpec(s,this._host):this._bucket=kx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yn.makeFromBucketSpec(this._url,e):this._bucket=kx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){bx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){bx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ed(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new cF(XS());{const o=wF(e,this._appId,r,s,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ax="@firebase/storage",Rx="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS="storage";function CF(t=Qd(),e){t=Le(t);const r=zl(t,JS).getImmediate({identifier:e}),s=Rg("storage");return s&&NF(r,...s),r}function NF(t,e,n,r={}){TF(t,e,n,r)}function SF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new IF(n,r,s,e,Ns)}function bF(){hs(new hr(JS,SF,"PUBLIC").setMultipleInstances(!0)),sn(Ax,Rx,""),sn(Ax,Rx,"esm2020")}bF();const kF={apiKey:"AIzaSyBXSeU4cfq171-Mq0GWhxViYl3UUyYwQoE",authDomain:"ptros-lesotho-d145d.firebaseapp.com",databaseURL:"https://ptros-lesotho-d145d-default-rtdb.firebaseio.com/",projectId:"ptros-lesotho-d145d",storageBucket:"ptros-lesotho-d145d.firebasestorage.app",messagingSenderId:"355339066230",appId:"1:355339066230:web:fca735feb941dbd8e57857"},Nh=EI(kF),Td=w2(Nh),Ze=bM(Nh);CF(Nh);const Px=X4(Nh);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ol.apply(this,arguments)}var Hr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hr||(Hr={}));const Dx="popstate";function AF(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return Am("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Id(s)}return PF(e,n,null,t)}function je(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function n_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function RF(){return Math.random().toString(36).substr(2,8)}function Ox(t,e){return{usr:t.state,key:t.key,idx:e}}function Am(t,e,n,r){return n===void 0&&(n=null),Ol({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:n,key:e&&e.key||r||RF()})}function Id(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Bo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PF(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Hr.Pop,l=null,d=h();d==null&&(d=0,o.replaceState(Ol({},o.state,{idx:d}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Hr.Pop;let A=h(),x=A==null?null:A-d;d=A,l&&l({action:a,location:_.location,delta:x})}function m(A,x){a=Hr.Push;let E=Am(_.location,A,x);d=h()+1;let b=Ox(E,d),D=_.createHref(E);try{o.pushState(b,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;s.location.assign(D)}i&&l&&l({action:a,location:_.location,delta:1})}function y(A,x){a=Hr.Replace;let E=Am(_.location,A,x);d=h();let b=Ox(E,d),D=_.createHref(E);o.replaceState(b,"",D),i&&l&&l({action:a,location:_.location,delta:0})}function N(A){let x=s.location.origin!=="null"?s.location.origin:s.location.href,E=typeof A=="string"?A:Id(A);return E=E.replace(/ $/,"%20"),je(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let _={get action(){return a},get location(){return t(s,o)},listen(A){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Dx,f),l=A,()=>{s.removeEventListener(Dx,f),l=null}},createHref(A){return e(s,A)},createURL:N,encodeLocation(A){let x=N(A);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:y,go(A){return o.go(A)}};return _}var jx;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(jx||(jx={}));function DF(t,e,n){return n===void 0&&(n="/"),OF(t,e,n)}function OF(t,e,n,r){let s=typeof e=="string"?Bo(e):e,i=No(s.pathname||"/",n);if(i==null)return null;let o=ZS(t);jF(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let d=HF(i);a=WF(o[l],d)}return a}function ZS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let d=ls([r,l.relativePath]),h=n.concat(l);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ZS(i.children,e,h,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:$F(d,i.index),routesMeta:h})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of eb(i.path))s(i,o,l)}),e}function eb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=eb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jF(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zF(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const MF=/^:[\w-]+$/,LF=3,VF=2,FF=1,UF=10,BF=-2,Mx=t=>t==="*";function $F(t,e){let n=t.split("/"),r=n.length;return n.some(Mx)&&(r+=BF),e&&(r+=VF),n.filter(s=>!Mx(s)).reduce((s,i)=>s+(MF.test(i)?LF:i===""?FF:UF),r)}function zF(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function WF(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],d=a===r.length-1,h=i==="/"?e:e.slice(i.length)||"/",f=Rm({path:l.relativePath,caseSensitive:l.caseSensitive,end:d},h),m=l.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:ls([i,f.pathname]),pathnameBase:XF(ls([i,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(i=ls([i,f.pathnameBase]))}return o}function Rm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qF(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((d,h,f)=>{let{paramName:m,isOptional:y}=h;if(m==="*"){let _=a[f]||"";o=i.slice(0,i.length-_.length).replace(/(.)\/+$/,"$1")}const N=a[f];return y&&!N?d[m]=void 0:d[m]=(N||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function qF(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),n_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function HF(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return n_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function No(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const GF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,KF=t=>GF.test(t);function QF(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Bo(t):t,i;if(n)if(KF(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),n_(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=Lx(n.substring(1),"/"):i=Lx(n,e)}else i=e;return{pathname:i,search:JF(r),hash:ZF(s)}}function Lx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Kf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function YF(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function r_(t,e){let n=YF(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function s_(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Bo(t):(s=Ol({},t),je(!s.pathname||!s.pathname.includes("?"),Kf("?","pathname","search",s)),je(!s.pathname||!s.pathname.includes("#"),Kf("#","pathname","hash",s)),je(!s.search||!s.search.includes("#"),Kf("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;s.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=QF(s,a),d=o&&o!=="/"&&o.endsWith("/"),h=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(d||h)&&(l.pathname+="/"),l}const ls=t=>t.join("/").replace(/\/\/+/g,"/"),XF=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),JF=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ZF=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function e6(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tb=["post","put","patch","delete"];new Set(tb);const t6=["get",...tb];new Set(t6);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}const Sh=P.createContext(null),nb=P.createContext(null),Er=P.createContext(null),bh=P.createContext(null),Tr=P.createContext({outlet:null,matches:[],isDataRoute:!1}),rb=P.createContext(null);function n6(t,e){let{relative:n}=e===void 0?{}:e;$o()||je(!1);let{basename:r,navigator:s}=P.useContext(Er),{hash:i,pathname:o,search:a}=Ah(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ls([r,o])),s.createHref({pathname:l,search:a,hash:i})}function $o(){return P.useContext(bh)!=null}function zo(){return $o()||je(!1),P.useContext(bh).location}function sb(t){P.useContext(Er).static||P.useLayoutEffect(t)}function kh(){let{isDataRoute:t}=P.useContext(Tr);return t?g6():r6()}function r6(){$o()||je(!1);let t=P.useContext(Sh),{basename:e,future:n,navigator:r}=P.useContext(Er),{matches:s}=P.useContext(Tr),{pathname:i}=zo(),o=JSON.stringify(r_(s,n.v7_relativeSplatPath)),a=P.useRef(!1);return sb(()=>{a.current=!0}),P.useCallback(function(d,h){if(h===void 0&&(h={}),!a.current)return;if(typeof d=="number"){r.go(d);return}let f=s_(d,JSON.parse(o),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ls([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,i,t])}function s6(){let{matches:t}=P.useContext(Tr),e=t[t.length-1];return e?e.params:{}}function Ah(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=P.useContext(Er),{matches:s}=P.useContext(Tr),{pathname:i}=zo(),o=JSON.stringify(r_(s,r.v7_relativeSplatPath));return P.useMemo(()=>s_(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function i6(t,e){return o6(t,e)}function o6(t,e,n,r){$o()||je(!1);let{navigator:s}=P.useContext(Er),{matches:i}=P.useContext(Tr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let d=zo(),h;if(e){var f;let A=typeof e=="string"?Bo(e):e;l==="/"||(f=A.pathname)!=null&&f.startsWith(l)||je(!1),h=A}else h=d;let m=h.pathname||"/",y=m;if(l!=="/"){let A=l.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let N=DF(t,{pathname:y}),_=d6(N&&N.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:ls([l,s.encodeLocation?s.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?l:ls([l,s.encodeLocation?s.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),i,n,r);return e&&_?P.createElement(bh.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Hr.Pop}},_):_}function a6(){let t=m6(),e=e6(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:s},n):null,null)}const l6=P.createElement(a6,null);class c6 extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?P.createElement(Tr.Provider,{value:this.props.routeContext},P.createElement(rb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function u6(t){let{routeContext:e,match:n,children:r}=t,s=P.useContext(Sh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(Tr.Provider,{value:e},r)}function d6(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||je(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:m,errors:y}=n,N=f.route.loader&&m[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||N){l=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let y,N=!1,_=null,A=null;n&&(y=a&&f.route.id?a[f.route.id]:void 0,_=f.route.errorElement||l6,l&&(d<0&&m===0?(y6("route-fallback"),N=!0,A=null):d===m&&(N=!0,A=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,m+1)),E=()=>{let b;return y?b=_:N?b=A:f.route.Component?b=P.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=h,P.createElement(u6,{match:f,routeContext:{outlet:h,matches:x,isDataRoute:n!=null},children:b})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?P.createElement(c6,{location:n.location,revalidation:n.revalidation,component:_,error:y,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var ib=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ib||{}),ob=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ob||{});function h6(t){let e=P.useContext(Sh);return e||je(!1),e}function f6(t){let e=P.useContext(nb);return e||je(!1),e}function p6(t){let e=P.useContext(Tr);return e||je(!1),e}function ab(t){let e=p6(),n=e.matches[e.matches.length-1];return n.route.id||je(!1),n.route.id}function m6(){var t;let e=P.useContext(rb),n=f6(),r=ab();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function g6(){let{router:t}=h6(ib.UseNavigateStable),e=ab(ob.UseNavigateStable),n=P.useRef(!1);return sb(()=>{n.current=!0}),P.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,jl({fromRouteId:e},i)))},[t,e])}const Vx={};function y6(t,e,n){Vx[t]||(Vx[t]=!0)}function _6(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function v6(t){let{to:e,replace:n,state:r,relative:s}=t;$o()||je(!1);let{future:i,static:o}=P.useContext(Er),{matches:a}=P.useContext(Tr),{pathname:l}=zo(),d=kh(),h=s_(e,r_(a,i.v7_relativeSplatPath),l,s==="path"),f=JSON.stringify(h);return P.useEffect(()=>d(JSON.parse(f),{replace:n,state:r,relative:s}),[d,f,s,n,r]),null}function Nt(t){je(!1)}function w6(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Hr.Pop,navigator:i,static:o=!1,future:a}=t;$o()&&je(!1);let l=e.replace(/^\/*/,"/"),d=P.useMemo(()=>({basename:l,navigator:i,static:o,future:jl({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Bo(r));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:N="default"}=r,_=P.useMemo(()=>{let A=No(h,l);return A==null?null:{location:{pathname:A,search:f,hash:m,state:y,key:N},navigationType:s}},[l,h,f,m,y,N,s]);return _==null?null:P.createElement(Er.Provider,{value:d},P.createElement(bh.Provider,{children:n,value:_}))}function x6(t){let{children:e,location:n}=t;return i6(Pm(e),n)}new Promise(()=>{});function Pm(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,s)=>{if(!P.isValidElement(r))return;let i=[...e,s];if(r.type===P.Fragment){n.push.apply(n,Pm(r.props.children,i));return}r.type!==Nt&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pm(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Cd.apply(this,arguments)}function lb(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function E6(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function T6(t,e){return t.button===0&&(!e||e==="_self")&&!E6(t)}const I6=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],C6=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],N6="6";try{window.__reactRouterVersion=N6}catch{}const S6=P.createContext({isTransitioning:!1}),b6="startTransition",Fx=hk[b6];function k6(t){let{basename:e,children:n,future:r,window:s}=t,i=P.useRef();i.current==null&&(i.current=AF({window:s,v5Compat:!0}));let o=i.current,[a,l]=P.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},h=P.useCallback(f=>{d&&Fx?Fx(()=>l(f)):l(f)},[l,d]);return P.useLayoutEffect(()=>o.listen(h),[o,h]),P.useEffect(()=>_6(r),[r]),P.createElement(w6,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const A6=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R6=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dn=P.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:l,to:d,preventScrollReset:h,viewTransition:f}=e,m=lb(e,I6),{basename:y}=P.useContext(Er),N,_=!1;if(typeof d=="string"&&R6.test(d)&&(N=d,A6))try{let b=new URL(window.location.href),D=d.startsWith("//")?new URL(b.protocol+d):new URL(d),j=No(D.pathname,y);D.origin===b.origin&&j!=null?d=j+D.search+D.hash:_=!0}catch{}let A=n6(d,{relative:s}),x=O6(d,{replace:o,state:a,target:l,preventScrollReset:h,relative:s,viewTransition:f});function E(b){r&&r(b),b.defaultPrevented||x(b)}return P.createElement("a",Cd({},m,{href:N||A,onClick:_||i?r:E,ref:n,target:l}))}),P6=P.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:a,to:l,viewTransition:d,children:h}=e,f=lb(e,C6),m=Ah(l,{relative:f.relative}),y=zo(),N=P.useContext(nb),{navigator:_,basename:A}=P.useContext(Er),x=N!=null&&j6(m)&&d===!0,E=_.encodeLocation?_.encodeLocation(m).pathname:m.pathname,b=y.pathname,D=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;s||(b=b.toLowerCase(),D=D?D.toLowerCase():null,E=E.toLowerCase()),D&&A&&(D=No(D,A)||D);const j=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let F=b===E||!o&&b.startsWith(E)&&b.charAt(j)==="/",k=D!=null&&(D===E||!o&&D.startsWith(E)&&D.charAt(E.length)==="/"),w={isActive:F,isPending:k,isTransitioning:x},C=F?r:void 0,I;typeof i=="function"?I=i(w):I=[i,F?"active":null,k?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let S=typeof a=="function"?a(w):a;return P.createElement(Dn,Cd({},f,{"aria-current":C,className:I,ref:n,style:S,to:l,viewTransition:d}),typeof h=="function"?h(w):h)});var Dm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Dm||(Dm={}));var Ux;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Ux||(Ux={}));function D6(t){let e=P.useContext(Sh);return e||je(!1),e}function O6(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,l=kh(),d=zo(),h=Ah(t,{relative:o});return P.useCallback(f=>{if(T6(f,n)){f.preventDefault();let m=r!==void 0?r:Id(d)===Id(h);l(t,{replace:m,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[d,l,h,r,s,n,t,i,o,a])}function j6(t,e){e===void 0&&(e={});let n=P.useContext(S6);n==null&&je(!1);let{basename:r}=D6(Dm.useViewTransitionState),s=Ah(t,{relative:e.relative});if(!n.isTransitioning)return!1;let i=No(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=No(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Rm(s.pathname,o)!=null||Rm(s.pathname,i)!=null}function M6({children:t}){const[e,n]=P.useState(!1),[r,s]=P.useState(null),i="AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0";return P.useEffect(()=>{if(window.google&&window.google.maps){n(!0),window.mapsReady=!0,window.dispatchEvent(new CustomEvent("mapsReady"));return}console.log("Loading Google Maps with API key...");const o=()=>{console.log("✅ Google Maps loaded successfully"),window.mapsReady=!0,n(!0),s(null),window.dispatchEvent(new CustomEvent("mapsReady"))};window.initMap=o;const a=document.createElement("script");return a.src=`https://maps.googleapis.com/maps/api/js?key=${i}&libraries=places,geometry&callback=initMap`,a.async=!0,a.defer=!0,a.onerror=()=>{console.error("❌ Failed to load Google Maps"),s("Failed to load Google Maps. Check your API key and internet connection.")},document.head.appendChild(a),a.onload=()=>{const l=document.createElement("script");l.src="https://cdn.jsdelivr.net/npm/@googlemaps/markerclusterer@2.5.3/dist/index.min.js",l.async=!0,l.onload=()=>{console.log("✅ MarkerClusterer loaded")},l.onerror=()=>{console.warn("⚠️ Failed to load MarkerClusterer - clustering disabled")},document.head.appendChild(l)},()=>{const l=document.querySelector('script[src*="maps.googleapis.com"]');if(l&&document.head.contains(l))try{document.head.removeChild(l)}catch(d){console.warn("Failed to remove script:",d)}window.initMap&&delete window.initMap,window.mapsReady=!1}},[]),r?u.jsxs("div",{className:"p-4 bg-red-50 border border-red-200 rounded-lg",children:[u.jsx("p",{className:"text-red-700",children:"⚠️ Google Maps Error"}),u.jsx("p",{className:"text-sm text-red-600 mt-1",children:r}),u.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["API Key: ","Present"]})]}):e?u.jsx(u.Fragment,{children:t}):u.jsx("div",{className:"flex items-center justify-center min-h-[200px]",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Initializing Google Maps..."}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"This may take a few seconds"})]})})}function L6(){const[t,e]=P.useState(!1),n=[{path:"/dashboard",icon:"📊",label:"Dashboard"},{path:"/deliveries/create",icon:"➕",label:"Create Delivery"},{path:"/deliveries/active",icon:"📦",label:"Active Deliveries"},{path:"/carriers/pending",icon:"⏳",label:"Pending Carriers"},{path:"/carriers/active",icon:"🏍️",label:"Active Carriers"},{path:"/customers",icon:"👥",label:"Customers"},{path:"/tracking/live",icon:"📍",label:"Live Tracking"},{path:"/analytics",icon:"📈",label:"Analytics"},{path:"/settings",icon:"⚙️",label:"Settings"}];return u.jsxs("aside",{className:`bg-blue-900 text-white ${t?"w-20":"w-64"} transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`,children:[u.jsx("div",{className:"p-6 border-b border-blue-800",children:u.jsxs("div",{className:"flex items-center justify-between",children:[!t&&u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-bold",children:"PTROS"}),u.jsx("p",{className:"text-xs text-blue-300",children:"Coordinator"})]})]}),t&&u.jsx("div",{className:"w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto",children:u.jsx("span",{className:"text-blue-900 font-bold text-xl",children:"P"})}),u.jsx("button",{onClick:()=>e(!t),className:"text-blue-300 hover:text-white",children:t?"→":"←"})]})}),u.jsx("nav",{className:"flex-1 p-4 overflow-y-auto",children:u.jsx("ul",{className:"space-y-2",children:n.map(r=>u.jsx("li",{children:u.jsxs(P6,{to:r.path,className:({isActive:s})=>`flex items-center px-4 py-3 rounded-lg transition-colors ${s?"bg-blue-800 text-white":"text-blue-200 hover:bg-blue-800 hover:text-white"}`,children:[u.jsx("span",{className:"text-xl mr-3",children:r.icon}),!t&&u.jsx("span",{children:r.label})]})},r.path))})}),!t&&u.jsx("div",{className:"p-4 border-t border-blue-800",children:u.jsxs("div",{className:"bg-blue-800 rounded-lg p-4",children:[u.jsx("h3",{className:"font-semibold text-sm mb-2",children:"Quick Stats"}),u.jsxs("div",{className:"text-xs space-y-1",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-blue-300",children:"Active:"}),u.jsx("span",{className:"font-semibold",children:"12"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-blue-300",children:"Today:"}),u.jsx("span",{className:"font-semibold",children:"24"})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-blue-300",children:"Revenue:"}),u.jsx("span",{className:"font-semibold",children:"M2,450"})]})]})]})})]})}function V6({user:t,userProfile:e}){var s,i;const[n,r]=P.useState(!1);return u.jsx("header",{className:"bg-white border-b shadow-sm py-4 px-6 ml-64",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"text",placeholder:"Search deliveries, carriers...",className:"pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"}),u.jsx("span",{className:"absolute left-3 top-2.5",children:"🔍"})]}),u.jsxs("button",{className:"relative p-2 hover:bg-gray-100 rounded-lg",children:[u.jsx("span",{children:"🔔"}),u.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:"3"})]})]}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"text-right hidden md:block",children:[u.jsx("p",{className:"font-medium text-gray-800",children:(e==null?void 0:e.fullName)||t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Coordinator"})]}),u.jsxs("div",{className:"relative",children:[u.jsxs("button",{onClick:()=>r(!n),className:"flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center",children:u.jsx("span",{className:"text-blue-600 font-semibold",children:((s=e==null?void 0:e.fullName)==null?void 0:s[0])||((i=t.email)==null?void 0:i[0])||"C"})}),u.jsx("span",{children:"▼"})]}),n&&u.jsxs("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50",children:[u.jsxs("div",{className:"p-4 border-b",children:[u.jsx("p",{className:"font-medium",children:t.email}),u.jsx("p",{className:"text-sm text-gray-500",children:"Coordinator"})]}),u.jsxs("div",{className:"py-2",children:[u.jsx("a",{href:"/settings",className:"block px-4 py-2 hover:bg-gray-100",children:"⚙️ Settings"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100",children:"📊 Analytics"}),u.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100",children:"🆘 Help"})]}),u.jsx("div",{className:"border-t py-2",children:u.jsx("button",{onClick:()=>Td.signOut(),className:"w-full text-left px-4 py-2 text-red-600 hover:bg-red-50",children:"🚪 Logout"})})]})]})]})]})})}function F6({user:t,userProfile:e}){const n=[{label:"Create Delivery",icon:"➕",path:"/deliveries/create",color:"bg-blue-600 hover:bg-blue-700"},{label:"Approve Carriers",icon:"✅",path:"/carriers/pending",color:"bg-green-600 hover:bg-green-700"},{label:"Live Tracking",icon:"📍",path:"/tracking/live",color:"bg-purple-600 hover:bg-purple-700"},{label:"View Reports",icon:"📊",path:"/analytics",color:"bg-yellow-600 hover:bg-yellow-700"}],r=[{type:"delivery",action:"New delivery created",details:"Tracking #PTR-001 to Maseru",time:"5 min ago"},{type:"carrier",action:"Carrier approved",details:"John Doe approved",time:"15 min ago"},{type:"delivery",action:"Delivery completed",details:"Tracking #PTR-045 delivered",time:"30 min ago"},{type:"customer",action:"New customer registered",details:"Jane Smith signed up",time:"1 hour ago"}];return u.jsxs("div",{children:[u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Coordinator Dashboard"}),u.jsxs("p",{className:"text-gray-600 mt-2",children:["Welcome back, ",(e==null?void 0:e.fullName)||t.email,". Here's what's happening."]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6 mb-8",children:[u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-blue-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl text-blue-600",children:"📦"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Active Deliveries"}),u.jsx("p",{className:"text-3xl font-bold",children:"12"})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-green-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl text-green-600",children:"🏍️"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Active Carriers"}),u.jsx("p",{className:"text-3xl font-bold",children:"8"})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-purple-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl text-purple-600",children:"✅"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Completed Today"}),u.jsx("p",{className:"text-3xl font-bold",children:"24"})]})]})}),u.jsx("div",{className:"bg-white p-6 rounded-xl shadow",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"p-3 bg-yellow-100 rounded-lg mr-4",children:u.jsx("span",{className:"text-2xl text-yellow-600",children:"💰"})}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Revenue Today"}),u.jsx("p",{className:"text-3xl font-bold",children:"M2,450"})]})]})})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 mb-8",children:[u.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Quick Actions"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:n.map((s,i)=>u.jsxs("a",{href:s.path,className:`${s.color} text-white p-4 rounded-lg flex flex-col items-center justify-center text-center transition transform hover:scale-105`,children:[u.jsx("span",{className:"text-3xl mb-2",children:s.icon}),u.jsx("span",{className:"font-medium",children:s.label})]},i))})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Recent Activity"}),u.jsx("div",{className:"space-y-4",children:r.map((s,i)=>u.jsxs("div",{className:"flex items-center p-3 border rounded-lg hover:bg-gray-50",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${s.type==="delivery"?"bg-blue-100":s.type==="carrier"?"bg-green-100":"bg-purple-100"}`,children:u.jsx("span",{className:s.type==="delivery"?"text-blue-600":s.type==="carrier"?"text-green-600":"text-purple-600",children:s.type==="delivery"?"📦":s.type==="carrier"?"🏍️":"👤"})}),u.jsxs("div",{className:"flex-1",children:[u.jsx("p",{className:"font-medium",children:s.action}),u.jsx("p",{className:"text-sm text-gray-500",children:s.details})]}),u.jsx("span",{className:"text-sm text-gray-400",children:s.time})]},i))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"System Alerts"}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"p-4 bg-yellow-50 border border-yellow-200 rounded-lg",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("span",{className:"text-yellow-600 mr-3",children:"⚠️"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium text-yellow-800",children:"3 carriers pending approval"}),u.jsx("p",{className:"text-sm text-yellow-700 mt-1",children:"Review carrier applications in the pending approvals section."}),u.jsx("a",{href:"/carriers/pending",className:"text-sm text-yellow-600 font-medium mt-2 inline-block",children:"Review now →"})]})]})}),u.jsx("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-lg",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("span",{className:"text-blue-600 mr-3",children:"📊"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium text-blue-800",children:"Monthly report ready"}),u.jsx("p",{className:"text-sm text-blue-700 mt-1",children:"View delivery performance and analytics for this month."}),u.jsx("a",{href:"/analytics",className:"text-sm text-blue-600 font-medium mt-2 inline-block",children:"View report →"})]})]})}),u.jsx("div",{className:"p-4 bg-green-50 border border-green-200 rounded-lg",children:u.jsxs("div",{className:"flex items-start",children:[u.jsx("span",{className:"text-green-600 mr-3",children:"✅"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium text-green-800",children:"System is running smoothly"}),u.jsx("p",{className:"text-sm text-green-700 mt-1",children:"All services are operational. No issues detected."})]})]})})]})]})]})]})}let U6={data:""},B6=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||U6},$6=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,z6=/\/\*[^]*?\*\/|  +/g,Bx=/\n+/g,$r=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?$r(o,i):i+"{"+$r(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=$r(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=$r.p?$r.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Qn={},cb=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+cb(t[n]);return e}return t},W6=(t,e,n,r,s)=>{let i=cb(t),o=Qn[i]||(Qn[i]=(l=>{let d=0,h=11;for(;d<l.length;)h=101*h+l.charCodeAt(d++)>>>0;return"go"+h})(i));if(!Qn[o]){let l=i!==t?t:(d=>{let h,f,m=[{}];for(;h=$6.exec(d.replace(z6,""));)h[4]?m.shift():h[3]?(f=h[3].replace(Bx," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(Bx," ").trim();return m[0]})(t);Qn[o]=$r(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Qn.g?Qn.g:null;return n&&(Qn.g=Qn[o]),((l,d,h,f)=>{f?d.data=d.data.replace(f,l):d.data.indexOf(l)===-1&&(d.data=h?l+d.data:d.data+l)})(Qn[o],e,r,a),o},q6=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":$r(a,""):a===!1?"":a}return r+s+(o??"")},"");function Rh(t){let e=this||{},n=t.call?t(e.p):t;return W6(n.unshift?n.raw?q6(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,B6(e.target),e.g,e.o,e.k)}let ub,Om,jm;Rh.bind({g:1});let _r=Rh.bind({k:1});function H6(t,e,n,r){$r.p=e,ub=t,Om=n,jm=r}function Ps(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:Om&&Om()},a),n.o=/ *go\d+/.test(l),a.className=Rh.apply(n,r)+(l?" "+l:"");let d=t;return t[0]&&(d=a.as||t,delete a.as),jm&&d[0]&&jm(a),ub(d,a)}return s}}var G6=t=>typeof t=="function",Nd=(t,e)=>G6(t)?t(e):t,K6=(()=>{let t=0;return()=>(++t).toString()})(),db=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Q6=20,i_="default",hb=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return hb(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},pu=[],fb={toasts:[],pausedAt:void 0,settings:{toastLimit:Q6}},jn={},pb=(t,e=i_)=>{jn[e]=hb(jn[e]||fb,t),pu.forEach(([n,r])=>{n===e&&r(jn[e])})},mb=t=>Object.keys(jn).forEach(e=>pb(t,e)),Y6=t=>Object.keys(jn).find(e=>jn[e].toasts.some(n=>n.id===t)),Ph=(t=i_)=>e=>{pb(e,t)},X6={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J6=(t={},e=i_)=>{let[n,r]=P.useState(jn[e]||fb),s=P.useRef(jn[e]);P.useEffect(()=>(s.current!==jn[e]&&r(jn[e]),pu.push([e,r]),()=>{let o=pu.findIndex(([a])=>a===e);o>-1&&pu.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||X6[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},Z6=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||K6()}),ic=t=>(e,n)=>{let r=Z6(e,t,n);return Ph(r.toasterId||Y6(r.id))({type:2,toast:r}),r.id},ne=(t,e)=>ic("blank")(t,e);ne.error=ic("error");ne.success=ic("success");ne.loading=ic("loading");ne.custom=ic("custom");ne.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Ph(e)(n):mb(n)};ne.dismissAll=t=>ne.dismiss(void 0,t);ne.remove=(t,e)=>{let n={type:4,toastId:t};e?Ph(e)(n):mb(n)};ne.removeAll=t=>ne.remove(void 0,t);ne.promise=(t,e,n)=>{let r=ne.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Nd(e.success,s):void 0;return i?ne.success(i,{id:r,...n,...n==null?void 0:n.success}):ne.dismiss(r),s}).catch(s=>{let i=e.error?Nd(e.error,s):void 0;i?ne.error(i,{id:r,...n,...n==null?void 0:n.error}):ne.dismiss(r)}),t};var e3=1e3,t3=(t,e="default")=>{let{toasts:n,pausedAt:r}=J6(t,e),s=P.useRef(new Map).current,i=P.useCallback((f,m=e3)=>{if(s.has(f))return;let y=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,y)},[]);P.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(y=>{if(y.duration===1/0)return;let N=(y.duration||0)+y.pauseDuration-(f-y.createdAt);if(N<0){y.visible&&ne.dismiss(y.id);return}return setTimeout(()=>ne.dismiss(y.id,e),N)});return()=>{m.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=P.useCallback(Ph(e),[e]),a=P.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=P.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),d=P.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=P.useCallback((f,m)=>{let{reverseOrder:y=!1,gutter:N=8,defaultPosition:_}=m||{},A=n.filter(b=>(b.position||_)===(f.position||_)&&b.height),x=A.findIndex(b=>b.id===f.id),E=A.filter((b,D)=>D<x&&b.visible).length;return A.filter(b=>b.visible).slice(...y?[E+1]:[0,E]).reduce((b,D)=>b+(D.height||0)+N,0)},[n]);return P.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:d,calculateOffset:h}}},n3=_r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,r3=_r`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,s3=_r`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,i3=Ps("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${n3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${r3} 0.15s ease-out forwards;
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
    animation: ${s3} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,o3=_r`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,a3=Ps("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${o3} 1s linear infinite;
`,l3=_r`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,c3=_r`
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
}`,u3=Ps("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${l3} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${c3} 0.2s ease-out forwards;
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
`,d3=Ps("div")`
  position: absolute;
`,h3=Ps("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,f3=_r`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,p3=Ps("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${f3} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,m3=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?P.createElement(p3,null,e):e:n==="blank"?null:P.createElement(h3,null,P.createElement(a3,{...r}),n!=="loading"&&P.createElement(d3,null,n==="error"?P.createElement(i3,{...r}):P.createElement(u3,{...r})))},g3=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,y3=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,_3="0%{opacity:0;} 100%{opacity:1;}",v3="0%{opacity:1;} 100%{opacity:0;}",w3=Ps("div")`
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
`,x3=Ps("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,E3=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=db()?[_3,v3]:[g3(n),y3(n)];return{animation:e?`${_r(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${_r(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},T3=P.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?E3(t.position||e||"top-center",t.visible):{opacity:0},i=P.createElement(m3,{toast:t}),o=P.createElement(x3,{...t.ariaProps},Nd(t.message,t));return P.createElement(w3,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):P.createElement(P.Fragment,null,i,o))});H6(P.createElement);var I3=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=P.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return P.createElement("div",{ref:i,className:e,style:n},s)},C3=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:db()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},N3=Rh`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Wc=16,wi=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:d}=t3(n,i);return P.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Wc,left:Wc,right:Wc,bottom:Wc,pointerEvents:"none",...o},className:a,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(h=>{let f=h.position||e,m=d.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),y=C3(f,m);return P.createElement(I3,{id:h.id,key:h.id,onHeightUpdate:d.updateHeight,className:h.visible?N3:"",style:y},h.type==="custom"?Nd(h.message,h):s?s(h):P.createElement(T3,{toast:h,position:f}))}))};function S3(){const[t,e]=P.useState([]),[n,r]=P.useState(!0);P.useEffect(()=>{s()},[]);const s=async()=>{try{const a=vs(or(Ze,"users"),Ht("role","==","carrier"),Ht("isApproved","==",!1)),l=await od(a),d=[];l.forEach(h=>{var m;const f=h.data();d.push({id:h.id,email:f.email,fullName:f.fullName,phone:f.phone,address:f.address,vehicleType:f.vehicleType,licensePlate:f.licensePlate,createdAt:((m=f.createdAt)==null?void 0:m.toDate())||new Date})}),e(d)}catch(a){console.error("Error fetching carriers:",a),ne.error("Failed to load pending carriers")}finally{r(!1)}},i=async a=>{try{await Eo(Nn(Ze,"users",a),{isApproved:!0,status:"active",approvedAt:se.now(),approvedBy:"coordinator"}),ne.success("Carrier approved successfully!"),s()}catch(l){console.error("Error approving carrier:",l),ne.error("Failed to approve carrier")}},o=async a=>{try{await Eo(Nn(Ze,"users",a),{status:"rejected",rejectedAt:se.now()}),ne.success("Carrier rejected"),s()}catch(l){console.error("Error rejecting carrier:",l),ne.error("Failed to reject carrier")}};return n?u.jsx("div",{className:"flex justify-center items-center h-64",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):u.jsxs("div",{children:[u.jsx(wi,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Pending Carrier Approvals"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Review and approve carrier applications"})]}),t.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🎉"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No pending approvals"}),u.jsx("p",{className:"text-gray-500",children:"All carrier applications have been processed."})]}):u.jsx("div",{className:"bg-white rounded-xl shadow overflow-hidden",children:u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[u.jsx("thead",{className:"bg-gray-50",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Carrier Details"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Contact"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Vehicle"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Applied"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),u.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(a=>u.jsxs("tr",{className:"hover:bg-gray-50",children:[u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{children:[u.jsx("div",{className:"font-medium text-gray-900",children:a.fullName}),u.jsx("div",{className:"text-sm text-gray-500",children:a.email})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsx("div",{className:"text-gray-900",children:a.phone}),u.jsx("div",{className:"text-gray-500",children:a.address})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsx("div",{className:"text-gray-900",children:a.vehicleType||"Not specified"}),u.jsx("div",{className:"text-gray-500",children:a.licensePlate||"No plate"})]})}),u.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:a.createdAt.toLocaleDateString()}),u.jsx("td",{className:"px-6 py-4 text-sm font-medium",children:u.jsxs("div",{className:"flex space-x-3",children:[u.jsx("button",{onClick:()=>i(a.id),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition",children:"Approve"}),u.jsx("button",{onClick:()=>o(a.id),className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition",children:"Reject"}),u.jsx("button",{className:"px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition",children:"View"})]})})]},a.id))})]})})})]})}function b3(){const[t,e]=P.useState([]),[n,r]=P.useState(!0),[s,i]=P.useState("all"),[o,a]=P.useState(null),[l,d]=P.useState({total:0,active:0,inactive:0,pending:0,totalEarnings:0,totalDeliveries:0});P.useEffect(()=>{const _=vs(or(Ze,"users"),Ht("role","==","carrier")),A=ad(_,x=>{const E=[];let b={total:0,active:0,inactive:0,pending:0,totalEarnings:0,totalDeliveries:0};x.forEach(D=>{var k,w,C;const j=D.data(),F={id:D.id,email:j.email||"",fullName:j.fullName||"Unknown Carrier",phone:j.phone||"",whatsapp:j.whatsapp||j.phone||"",address:j.address||"",city:j.city||"",vehicleType:j.vehicleType||"Not specified",licensePlate:j.licensePlate||"Not specified",status:j.status||"pending",isApproved:j.isApproved||!1,earnings:j.earnings||0,completedDeliveries:j.completedDeliveries||0,rating:j.rating||0,createdAt:((k=j.createdAt)==null?void 0:k.toDate())||new Date,lastActive:((w=j.lastActive)==null?void 0:w.toDate())||new Date,currentLocation:j.currentLocation?{lat:j.currentLocation.lat,lng:j.currentLocation.lng,timestamp:((C=j.currentLocation.timestamp)==null?void 0:C.toDate())||new Date}:void 0};E.push(F),b.total++,F.status==="active"&&F.isApproved&&b.active++,F.status==="inactive"&&b.inactive++,F.isApproved||b.pending++,b.totalEarnings+=F.earnings,b.totalDeliveries+=F.completedDeliveries}),E.sort((D,j)=>j.createdAt.getTime()-D.createdAt.getTime()),e(E),d(b),r(!1)},x=>{console.error("Error loading carriers:",x),ne.error("Failed to load carriers"),r(!1)});return()=>A()},[]);const h=t.filter(_=>s==="all"?!0:s==="active"?_.status==="active"&&_.isApproved:s==="inactive"?_.status==="inactive":s==="pending"?!_.isApproved:!0),f=async(_,A)=>{try{await Eo(Nn(Ze,"users",_),{status:A,updatedAt:se.now(),...A==="active"&&{lastActive:se.now()}}),ne.success(`Carrier status updated to ${A}`)}catch(x){console.error("Error updating carrier:",x),ne.error("Failed to update carrier status")}},m=_=>u.jsxs("div",{className:"flex items-center",children:[[...Array(5)].map((A,x)=>u.jsx("span",{className:`text-lg ${x<Math.floor(_)?"text-yellow-400":"text-gray-300"}`,children:"★"},x)),u.jsx("span",{className:"ml-2 text-sm text-gray-600",children:_.toFixed(1)})]}),y=_=>_.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}),N=(_,A)=>{if(!A)return u.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",children:"⏳ Pending"});switch(_){case"active":return u.jsx("span",{className:"px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",children:"✅ Active"});case"inactive":return u.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full",children:"⏸️ Inactive"});case"suspended":return u.jsx("span",{className:"px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full",children:"⚠️ Suspended"});default:return u.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full",children:_})}};return n?u.jsx("div",{className:"flex justify-center items-center h-64",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):u.jsxs("div",{children:[u.jsx(wi,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Carrier Management"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Monitor and manage all delivery carriers"})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-4 mb-8",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Total Carriers"}),u.jsx("div",{className:"text-2xl font-bold",children:l.total})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Active"}),u.jsx("div",{className:"text-2xl font-bold text-green-600",children:l.active})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Pending"}),u.jsx("div",{className:"text-2xl font-bold text-yellow-600",children:l.pending})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Inactive"}),u.jsx("div",{className:"text-2xl font-bold text-gray-600",children:l.inactive})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Total Earnings"}),u.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:["M",l.totalEarnings]})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Total Deliveries"}),u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:l.totalDeliveries})]})]}),u.jsx("div",{className:"bg-white rounded-xl shadow p-6 mb-6",children:u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg ${s==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700"}`,children:"All"}),u.jsx("button",{onClick:()=>i("active"),className:`px-4 py-2 rounded-lg ${s==="active"?"bg-green-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Active"}),u.jsx("button",{onClick:()=>i("pending"),className:`px-4 py-2 rounded-lg ${s==="pending"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Pending Approval"}),u.jsx("button",{onClick:()=>i("inactive"),className:`px-4 py-2 rounded-lg ${s==="inactive"?"bg-gray-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Inactive"}),u.jsx("div",{className:"ml-auto",children:u.jsx(Dn,{to:"/carriers/pending",className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Review Pending Approvals"})})]})}),h.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🏍️"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No carriers found"}),u.jsx("p",{className:"text-gray-500 mb-6",children:s!=="all"?`No carriers match the "${s}" filter`:"No carriers have registered yet"}),u.jsx(Dn,{to:"/carriers/pending",className:"inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Check Pending Registrations"})]}):u.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden",children:[u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[u.jsx("thead",{className:"bg-gray-50",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Carrier Details"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Vehicle & Contact"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Performance"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),u.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:h.map(_=>{var A;return u.jsxs("tr",{className:"hover:bg-gray-50 cursor-pointer",onClick:()=>a(_),children:[u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4",children:u.jsx("span",{className:"text-blue-600 font-bold",children:((A=_.fullName)==null?void 0:A[0])||"C"})}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium text-gray-900",children:_.fullName}),u.jsx("div",{className:"text-sm text-gray-500",children:_.email}),u.jsxs("div",{className:"text-xs text-gray-400",children:["Joined ",y(_.createdAt)]})]})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsx("div",{className:"font-medium text-gray-900",children:_.vehicleType}),u.jsx("div",{className:"text-gray-500",children:_.licensePlate}),u.jsxs("div",{className:"text-gray-500",children:["📱 ",_.phone]}),u.jsxs("div",{className:"text-gray-500",children:["📍 ",_.city]})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-gray-600",children:"Deliveries:"}),u.jsx("span",{className:"font-medium",children:_.completedDeliveries})]}),u.jsxs("div",{className:"flex items-center justify-between mb-1",children:[u.jsx("span",{className:"text-gray-600",children:"Earnings:"}),u.jsxs("span",{className:"font-medium text-green-600",children:["M",_.earnings]})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Rating:"}),m(_.rating)]})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"space-y-2",children:[N(_.status,_.isApproved),_.currentLocation&&u.jsx("div",{className:"text-xs text-gray-500",children:"📍 Live location"})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"flex flex-col space-y-2",children:[u.jsx(Dn,{to:`/carriers/${_.id}`,className:"px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200 text-center",onClick:x=>x.stopPropagation(),children:"View"}),_.isApproved?u.jsxs("div",{className:"flex space-x-1",children:[_.status==="active"&&u.jsx("button",{onClick:x=>{x.stopPropagation(),f(_.id,"inactive")},className:"px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200",children:"Deactivate"}),_.status==="inactive"&&u.jsx("button",{onClick:x=>{x.stopPropagation(),f(_.id,"active")},className:"px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200",children:"Activate"})]}):u.jsx(Dn,{to:"/carriers/pending",className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm hover:bg-yellow-200 text-center",onClick:x=>x.stopPropagation(),children:"Review"})]})})]},_.id)})})]})}),u.jsx("div",{className:"px-6 py-4 border-t border-gray-200",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"text-sm text-gray-500",children:["Showing"," ",u.jsx("span",{className:"font-medium",children:h.length})," ","of ",u.jsx("span",{className:"font-medium",children:t.length})," ","carriers"]}),u.jsxs("div",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleTimeString()]})]})})]}),o&&u.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:u.jsx("div",{className:"bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto",children:u.jsxs("div",{className:"p-6",children:[u.jsxs("div",{className:"flex justify-between items-start mb-6",children:[u.jsxs("div",{children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:o.fullName}),u.jsx("p",{className:"text-gray-600",children:o.email})]}),u.jsx("button",{onClick:()=>a(null),className:"text-gray-400 hover:text-gray-600 text-2xl",children:"✕"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-700 mb-2",children:"Contact Information"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"Phone:"}),u.jsx("span",{className:"font-medium",children:o.phone})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"WhatsApp:"}),u.jsx("span",{className:"font-medium",children:o.whatsapp})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"Address:"}),u.jsx("span",{className:"font-medium",children:o.address})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"City:"}),u.jsx("span",{className:"font-medium",children:o.city})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-700 mb-2",children:"Vehicle Information"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"Type:"}),u.jsx("span",{className:"font-medium",children:o.vehicleType})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-gray-500 w-24",children:"Plate:"}),u.jsx("span",{className:"font-medium",children:o.licensePlate})]})]})]})]}),u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-700 mb-2",children:"Performance"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-500",children:"Completed Deliveries:"}),u.jsx("span",{className:"font-medium",children:o.completedDeliveries})]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-500",children:"Total Earnings:"}),u.jsxs("span",{className:"font-medium text-green-600",children:["M",o.earnings]})]}),u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-gray-500",children:"Rating:"}),m(o.rating)]}),u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-500",children:"Member Since:"}),u.jsx("span",{className:"font-medium",children:y(o.createdAt)})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-700 mb-2",children:"Status & Actions"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("span",{children:"Status:"}),N(o.status,o.isApproved)]}),u.jsxs("div",{className:"flex space-x-2",children:[o.isApproved?u.jsx(u.Fragment,{children:o.status==="active"?u.jsx("button",{onClick:()=>{f(o.id,"inactive"),a(null)},className:"flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Deactivate"}):u.jsx("button",{onClick:()=>{f(o.id,"active"),a(null)},className:"flex-1 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200",children:"Activate"})}):u.jsx(Dn,{to:"/carriers/pending",className:"flex-1 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 text-center",onClick:()=>a(null),children:"Review Approval"}),u.jsx(Dn,{to:`/carriers/${o.id}`,className:"flex-1 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 text-center",onClick:()=>a(null),children:"Full Profile"})]})]})]})]})]}),o.currentLocation&&u.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-blue-600 mr-2",children:"📍"}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-medium text-blue-800",children:"Live Location Available"}),u.jsxs("p",{className:"text-sm text-blue-700",children:["Last updated:"," ",o.currentLocation.timestamp.toLocaleTimeString()]}),u.jsxs("p",{className:"text-xs text-blue-600",children:["Coordinates:"," ",o.currentLocation.lat.toFixed(4),","," ",o.currentLocation.lng.toFixed(4)]})]})]})})]})})})]})}function k3(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Carrier Details"}),u.jsx("p",{className:"text-gray-600",children:"This page will show detailed carrier information."})]})}function $x({label:t,value:e,onChange:n,placeholder:r="Start typing address...",required:s=!1}){const[i,o]=P.useState([]),[a,l]=P.useState(!1),[d,h]=P.useState(!1),[f,m]=P.useState(e),y=P.useRef(null),N=P.useRef(null),_=P.useRef(null);P.useEffect(()=>{window.google&&window.google.maps&&(_.current=new window.google.maps.places.AutocompleteService)},[]),P.useEffect(()=>{m(e)},[e]),P.useEffect(()=>{const D=j=>{N.current&&!N.current.contains(j.target)&&l(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]);const A=async D=>{const j=D.target.value;if(m(j),n(j),j.length>2&&_.current){h(!0);try{_.current.getPlacePredictions({input:j,componentRestrictions:{country:"ls"},types:["address"]},(F,k)=>{k===window.google.maps.places.PlacesServiceStatus.OK&&F?(o(F),l(!0)):o([]),h(!1)})}catch(F){console.error("Error getting suggestions:",F),h(!1)}}else o([]),l(!1)},x=D=>{const j=D.description;m(j),l(!1),n(j)},E=()=>{setTimeout(()=>l(!1),200)},b=()=>{f.length>2&&i.length>0&&l(!0)};return u.jsxs("div",{className:"relative",ref:N,children:[u.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:[t," ",s&&u.jsx("span",{className:"text-red-500",children:"*"})]}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{ref:y,type:"text",value:f,onChange:A,onBlur:E,onFocus:b,placeholder:r,required:s,className:"w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"}),u.jsxs("div",{className:"absolute right-3 top-3 flex items-center space-x-2",children:[d&&u.jsx("div",{className:"w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"}),!d&&f&&u.jsx("button",{type:"button",onClick:()=>{var D;m(""),n(""),o([]),(D=y.current)==null||D.focus()},className:"text-gray-400 hover:text-gray-600",title:"Clear",children:"✕"})]})]}),a&&i.length>0&&u.jsx("div",{className:"absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto",children:i.map(D=>u.jsxs("button",{type:"button",onClick:()=>x(D),className:"w-full text-left px-4 py-3 hover:bg-blue-50 focus:bg-blue-50 focus:outline-none border-b border-gray-100 last:border-b-0",children:[u.jsx("div",{className:"font-medium text-gray-900",children:D.structured_formatting.main_text}),u.jsx("div",{className:"text-sm text-gray-500",children:D.structured_formatting.secondary_text})]},D.place_id))}),!window.google&&u.jsx("p",{className:"mt-1 text-sm text-yellow-600",children:"Google Maps not loaded. Check your API key."})]})}const Qf=30*60*1e3,A3=()=>{const t=P.useRef(null),e=P.useRef(new Map),n=P.useCallback(()=>{var a;return!t.current&&((a=window.google)!=null&&a.maps)&&(t.current=new window.google.maps.Geocoder),t.current},[]),r=P.useCallback(()=>{const a=Date.now();for(const[l,d]of e.current.entries())a-d.timestamp>Qf&&e.current.delete(l)},[]),s=P.useCallback(async(a,l="ls")=>{if(!a.trim())return null;const d=`${a}-${l}`,h=e.current.get(d);return h&&Date.now()-h.timestamp<Qf?h:new Promise(f=>{try{const m=n();if(!m){console.warn("Geocoder not available"),f(null);return}m.geocode({address:a.trim(),componentRestrictions:{country:l}},(y,N)=>{if(N==="OK"&&(y!=null&&y[0])){const _={lat:y[0].geometry.location.lat(),lng:y[0].geometry.location.lng(),address:y[0].formatted_address};e.current.set(d,{..._,timestamp:Date.now()}),f(_)}else console.warn("Geocoding failed:",N),f(null)})}catch(m){console.error("Geocoder error:",m),f(null)}})},[n]),i=P.useCallback(async(a,l)=>{const d=`${a}-${l}-reverse`,h=e.current.get(d);return h&&Date.now()-h.timestamp<Qf?h.address:new Promise(f=>{try{const m=n();if(!m){f(null);return}m.geocode({location:{lat:a,lng:l}},(y,N)=>{if(N==="OK"&&(y!=null&&y[0])){const _=y[0].formatted_address;e.current.set(d,{lat:a,lng:l,address:_,timestamp:Date.now()}),f(_)}else console.warn("Reverse geocoding failed:",N),f(null)})}catch(m){console.error("Reverse geocoder error:",m),f(null)}})},[n]),o=P.useCallback(()=>{e.current.clear()},[]);return{geocodeAddress:s,reverseGeocode:i,clearCache:o,clearExpiredCache:r}};function R3(){const t=kh(),{geocodeAddress:e}=A3(),[n,r]=P.useState({customerId:"",packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",carrierId:"",priority:"standard",paymentMethod:"cash_on_delivery",paymentAmount:"",paymentStatus:"pending",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),[s,i]=P.useState([]),[o,a]=P.useState([]),[l,d]=P.useState(!0),[h,f]=P.useState(!1),[m,y]=P.useState(!1);P.useEffect(()=>{N()},[]);const N=async()=>{try{const I=vs(or(Ze,"users"),Ht("role","==","customer")),S=await od(I),R=[];S.forEach(Se=>{const ee=Se.data();R.push({id:Se.id,email:ee.email,fullName:ee.fullName,phone:ee.phone,address:ee.address,city:ee.city})}),i(R);const T=vs(or(Ze,"users"),Ht("role","==","carrier"),Ht("isApproved","==",!0),Ht("status","==","active")),Y=await od(T),Ne=[];Y.forEach(Se=>{const ee=Se.data();Ne.push({id:Se.id,email:ee.email,fullName:ee.fullName,phone:ee.phone,vehicleType:ee.vehicleType,status:ee.status,isApproved:ee.isApproved})}),a(Ne)}catch(I){console.error("Error loading data:",I),ne.error("Failed to load customers and carriers")}finally{d(!1)}},_=async I=>{const S=await e(I,"ls");return S?{lat:S.lat,lng:S.lng,address:S.address}:null},A=I=>{const{name:S,value:R,type:T}=I.target;if(T==="checkbox"){const Y=I.target.checked;r(Ne=>({...Ne,[S]:Y}))}else r(T==="number"?Y=>({...Y,[S]:R===""?"":Number(R)}):Y=>({...Y,[S]:R}))},x=async I=>{if(r(S=>({...S,pickupAddress:I,pickupCoordinates:null})),I.length>10){const S=await e(I);S&&r(R=>({...R,pickupCoordinates:S}))}},E=async I=>{if(r(S=>({...S,deliveryAddress:I,deliveryCoordinates:null})),I.length>10){const S=await e(I);S&&r(R=>({...R,deliveryCoordinates:S}))}},b=I=>{const S=s.find(R=>R.id===I);S&&r(R=>({...R,customerId:I,pickupContactName:S.fullName,pickupContactPhone:S.phone,pickupAddress:S.address}))},D=()=>{const I="PTR",S=Math.floor(1e5+Math.random()*9e5);return`${I}-${S}`},j=()=>n.customerId?n.packageDescription?!n.pickupAddress||!n.deliveryAddress?(ne.error("Pickup and delivery addresses are required"),!1):!n.deliveryContactName||!n.deliveryContactPhone?(ne.error("Delivery contact information is required"),!1):!0:(ne.error("Package description is required"),!1):(ne.error("Please select a customer"),!1),F=(I,S,R,T)=>{const Ne=(R-I)*Math.PI/180,Se=(T-S)*Math.PI/180,ee=Math.sin(Ne/2)*Math.sin(Ne/2)+Math.cos(I*Math.PI/180)*Math.cos(R*Math.PI/180)*Math.sin(Se/2)*Math.sin(Se/2);return 6371*(2*Math.atan2(Math.sqrt(ee),Math.sqrt(1-ee)))},k=I=>I<10?"Same day":I<50?"1 day":"1-2 days",w=(I,S)=>{const R=I||100,T=S*10,Y=Math.round(R*.15);return Math.max(50,Y+T)},C=async I=>{if(I.preventDefault(),!!j()){f(!0),y(!0);try{let S=n.pickupCoordinates,R=n.deliveryCoordinates;S||(S=await _(n.pickupAddress)),R||(R=await _(n.deliveryAddress)),y(!1),(!S||!R)&&ne.error("Unable to get coordinates for addresses. Delivery will be created without location data.",{duration:5e3});const T=D();let Y=0,Ne="1-2 days",Se=0;S&&R&&(Y=F(S.lat,S.lng,R.lat,R.lng),Ne=k(Y),Se=w(n.packageValue?Number(n.packageValue):0,Y));const ee=s.find(ye=>ye.id===n.customerId),B=n.carrierId?o.find(ye=>ye.id===n.carrierId):null,K={trackingCode:T,status:n.carrierId?"assigned":"pending",priority:n.priority,customerId:n.customerId,customerEmail:(ee==null?void 0:ee.email)||"",customerName:(ee==null?void 0:ee.fullName)||"",customerPhone:(ee==null?void 0:ee.phone)||"",packageDescription:n.packageDescription,packageWeight:n.packageWeight?Number(n.packageWeight):null,packageValue:n.packageValue?Number(n.packageValue):null,packageDimensions:n.packageDimensions,pickupAddress:n.pickupAddress,pickupLocation:S?{lat:S.lat,lng:S.lng,address:S.address,timestamp:se.now()}:null,pickupContactName:n.pickupContactName,pickupContactPhone:n.pickupContactPhone,pickupInstructions:n.pickupInstructions,pickupDateTime:se.fromDate(new Date(`${n.pickupDate}T${n.pickupTime}`)),deliveryAddress:n.deliveryAddress,deliveryLocation:R?{lat:R.lat,lng:R.lng,address:R.address,timestamp:se.now()}:null,deliveryContactName:n.deliveryContactName,deliveryContactPhone:n.deliveryContactPhone,deliveryInstructions:n.deliveryInstructions,deliveryDate:se.fromDate(new Date(n.deliveryDate)),deliveryTimeWindow:n.deliveryTimeWindow,distance:Y>0?Math.round(Y*100)/100:null,estimatedDeliveryTime:Ne,estimatedEarnings:Se,carrierId:n.carrierId||null,carrierEmail:(B==null?void 0:B.email)||null,carrierName:(B==null?void 0:B.fullName)||null,assignedAt:n.carrierId?ma():null,paymentMethod:n.paymentMethod,paymentAmount:n.paymentAmount?Number(n.paymentAmount):Se,paymentStatus:n.paymentStatus,isFragile:n.isFragile,requiresSignature:n.requiresSignature,insuranceRequired:n.insuranceRequired,notes:n.notes,createdAt:ma(),updatedAt:ma(),createdBy:"coordinator",proofOfDelivery:{otp:null,verified:!1,verifiedAt:null,photoUrl:null,signatureUrl:null},currentLocation:S?{lat:S.lat,lng:S.lng,timestamp:se.now(),address:n.pickupAddress,locationType:"pickup_point",status:"waiting_for_pickup"}:null,locationHistory:S?[{lat:S.lat,lng:S.lng,timestamp:se.now(),status:"created_at_pickup",address:n.pickupAddress}]:[],milestones:{created:ma(),assigned:n.carrierId?ma():null,pickedUp:null,inTransit:null,outForDelivery:null,delivered:null}},G=await zM(or(Ze,"deliveries"),K),de=u.jsxs("div",{children:[u.jsx("p",{className:"font-bold",children:"✅ Delivery Created Successfully!"}),u.jsxs("div",{className:"mt-2 space-y-1",children:[u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Tracking Code:"})," ",T]}),Y>0&&u.jsxs("p",{className:"text-sm",children:[u.jsx("span",{className:"font-semibold",children:"Distance:"})," ",Y.toFixed(1)," km"]}),S&&R&&u.jsx("p",{className:"text-sm text-green-600",children:"✓ Location tracking initialized at pickup point"}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Package location is set to pickup address until carrier picks it up."})]})]});ne.success(de,{duration:6e3}),r({customerId:"",packageDescription:"",packageWeight:"",packageValue:"",packageDimensions:"",pickupAddress:"",pickupCoordinates:null,pickupContactName:"",pickupContactPhone:"",pickupInstructions:"",pickupDate:new Date().toISOString().split("T")[0],pickupTime:"09:00",deliveryAddress:"",deliveryCoordinates:null,deliveryContactName:"",deliveryContactPhone:"",deliveryInstructions:"",deliveryDate:new Date().toISOString().split("T")[0],deliveryTimeWindow:"09:00-17:00",carrierId:"",priority:"standard",paymentMethod:"cash_on_delivery",paymentAmount:"",paymentStatus:"pending",isFragile:!1,requiresSignature:!0,insuranceRequired:!1,notes:""}),setTimeout(()=>{t(`/deliveries/${G.id}`)},2e3)}catch(S){console.error("Error creating delivery:",S),ne.error(`Failed to create delivery: ${S.message}`)}finally{f(!1),y(!1)}}};return l?u.jsxs("div",{className:"flex justify-center items-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"}),u.jsx("p",{className:"ml-4 text-gray-600",children:"Loading data..."})]}):u.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-8",children:[u.jsx(wi,{position:"top-right"}),u.jsx("div",{className:"mb-8",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Create New Delivery"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Fill in delivery details. Package location will start at pickup address."})]}),u.jsx("button",{onClick:()=>t("/deliveries"),className:"px-4 py-2 text-sm text-gray-600 hover:text-gray-800",children:"← Back to Deliveries"})]})}),u.jsx("div",{className:"mb-6 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4",children:u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3",children:u.jsx("span",{className:"text-white text-sm",children:"📍"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-blue-800",children:"Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location will be initialized at the pickup address and updated as the carrier moves."})]})]})}),u.jsxs("form",{onSubmit:C,className:"space-y-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"1"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Customer & Package Information"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Customer *"}),u.jsxs("select",{name:"customerId",value:n.customerId,onChange:I=>b(I.target.value),className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0,children:[u.jsx("option",{value:"",children:"Select a customer..."}),s.map(I=>u.jsxs("option",{value:I.id,children:[I.fullName," • ",I.phone," • ",I.city]},I.id))]}),s.length===0&&u.jsx("div",{className:"mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:u.jsx("p",{className:"text-sm text-yellow-700",children:"No customers found. Customers must register through the customer portal first."})})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Package Description *"}),u.jsx("textarea",{name:"packageDescription",value:n.packageDescription,onChange:A,rows:3,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Describe what's being delivered (e.g., Documents, Electronics, Food, etc.)",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Weight (kg)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageWeight",value:n.packageWeight,onChange:A,step:"0.1",min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 2.5"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"kg"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Dimensions (L×W×H cm)"}),u.jsx("input",{type:"text",name:"packageDimensions",value:n.packageDimensions,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 30×20×15"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Declared Value (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"packageValue",value:n.packageValue,onChange:A,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., 500"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Priority Level"}),u.jsxs("select",{name:"priority",value:n.priority,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"standard",children:"Standard (1-2 days)"}),u.jsx("option",{value:"express",children:"Express (Same day)"}),u.jsx("option",{value:"urgent",children:"Urgent (Within hours)"})]})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"2"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Pickup Details (Start Location)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx($x,{label:"Pickup Address *",value:n.pickupAddress,onChange:x,placeholder:"Start typing address (e.g., Maseru Mall, Kingsway, Maseru)...",required:!0}),n.pickupCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",n.pickupCoordinates.lat.toFixed(6),","," ",n.pickupCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Name *"}),u.jsx("input",{type:"text",name:"pickupContactName",value:n.pickupContactName,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Phone *"}),u.jsx("input",{type:"tel",name:"pickupContactPhone",value:n.pickupContactPhone,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Date"}),u.jsx("input",{type:"date",name:"pickupDate",value:n.pickupDate,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Time"}),u.jsx("input",{type:"time",name:"pickupTime",value:n.pickupTime,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Pickup Instructions"}),u.jsx("textarea",{name:"pickupInstructions",value:n.pickupInstructions,onChange:A,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for pickup (e.g., call before arrival, security gate code, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"3"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Delivery Details (Destination)"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{className:"md:col-span-2",children:[u.jsx($x,{label:"Delivery Address *",value:n.deliveryAddress,onChange:E,placeholder:"Start typing address (e.g., Teyateyaneng Main Road, Teyateyaneng)...",required:!0}),n.deliveryCoordinates&&u.jsxs("div",{className:"mt-2 flex items-center text-sm text-green-600",children:[u.jsx("span",{className:"mr-2",children:"✓"}),u.jsxs("span",{children:["Coordinates ready: ",n.deliveryCoordinates.lat.toFixed(6),","," ",n.deliveryCoordinates.lng.toFixed(6)]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Name *"}),u.jsx("input",{type:"text",name:"deliveryContactName",value:n.deliveryContactName,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Recipient Phone *"}),u.jsx("input",{type:"tel",name:"deliveryContactPhone",value:n.deliveryContactPhone,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",required:!0})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Date"}),u.jsx("input",{type:"date",name:"deliveryDate",value:n.deliveryDate,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Time Window"}),u.jsxs("select",{name:"deliveryTimeWindow",value:n.deliveryTimeWindow,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"09:00-17:00",children:"9:00 AM - 5:00 PM"}),u.jsx("option",{value:"08:00-16:00",children:"8:00 AM - 4:00 PM"}),u.jsx("option",{value:"10:00-18:00",children:"10:00 AM - 6:00 PM"}),u.jsx("option",{value:"anytime",children:"Anytime"})]})]}),u.jsxs("div",{className:"md:col-span-2",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Delivery Instructions"}),u.jsx("textarea",{name:"deliveryInstructions",value:n.deliveryInstructions,onChange:A,rows:2,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Special instructions for delivery (e.g., leave at reception, require ID check, etc.)"})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow-lg p-8",children:[u.jsxs("div",{className:"flex items-center mb-6 pb-4 border-b",children:[u.jsx("div",{className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3",children:"4"}),u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Assignment & Requirements"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Carrier Assignment"}),u.jsxs("div",{className:"mb-6",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Assign Carrier (Optional)"}),u.jsxs("select",{name:"carrierId",value:n.carrierId,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"",children:"Auto-assign later (recommended)"}),o.map(I=>u.jsxs("option",{value:I.id,children:[I.fullName," • ",I.vehicleType||"Vehicle"," • ",I.phone]},I.id))]}),o.length===0&&u.jsx("div",{className:"mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg",children:u.jsx("p",{className:"text-sm text-yellow-700",children:"No active carriers available. Approve carriers in the Carrier Management section."})})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Method"}),u.jsxs("select",{name:"paymentMethod",value:n.paymentMethod,onChange:A,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",children:[u.jsx("option",{value:"cash_on_delivery",children:"Cash on Delivery"}),u.jsx("option",{value:"card_prepaid",children:"Card Prepaid"}),u.jsx("option",{value:"mobile_money",children:"Mobile Money"}),u.jsx("option",{value:"bank_transfer",children:"Bank Transfer"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Payment Amount (M)"}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"number",name:"paymentAmount",value:n.paymentAmount,onChange:A,min:"0",className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Enter amount or leave blank for auto-calculation"}),u.jsx("span",{className:"absolute right-3 top-3 text-gray-500",children:"M"})]}),u.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Leave blank to auto-calculate based on distance and package value"})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Special Requirements"}),u.jsxs("div",{className:"space-y-4 mb-6",children:[u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"isFragile",name:"isFragile",checked:n.isFragile,onChange:A,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"isFragile",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Fragile items"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Handle with care"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"requiresSignature",name:"requiresSignature",checked:n.requiresSignature,onChange:A,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"requiresSignature",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Signature required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"Upon delivery"})]})]}),u.jsxs("div",{className:"flex items-center p-3 bg-gray-50 rounded-lg",children:[u.jsx("input",{type:"checkbox",id:"insuranceRequired",name:"insuranceRequired",checked:n.insuranceRequired,onChange:A,className:"h-5 w-5 text-blue-600 rounded focus:ring-blue-500"}),u.jsxs("label",{htmlFor:"insuranceRequired",className:"ml-3 text-gray-700",children:[u.jsx("span",{className:"font-medium",children:"Insurance required"}),u.jsx("span",{className:"block text-sm text-gray-500",children:"For high-value items"})]})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Additional Notes"}),u.jsx("textarea",{name:"notes",value:n.notes,onChange:A,rows:4,className:"w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Any additional information or special requests..."})]})]})]})]}),(n.pickupCoordinates||n.deliveryCoordinates)&&u.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6",children:[u.jsxs("h3",{className:"text-lg font-semibold text-green-800 mb-4 flex items-center",children:[u.jsx("span",{className:"mr-2",children:"✅"}),"Location Tracking Ready"]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[n.pickupCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"📍 Pickup Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:n.pickupAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[n.pickupCoordinates.lat.toFixed(6),", ",n.pickupCoordinates.lng.toFixed(6)]})]})]}),n.deliveryCoordinates&&u.jsxs("div",{className:"bg-white p-4 rounded-lg border border-green-200",children:[u.jsx("div",{className:"font-medium text-green-700 mb-1",children:"🎯 Delivery Location"}),u.jsxs("div",{className:"text-sm text-gray-600",children:[u.jsx("div",{className:"truncate",children:n.deliveryAddress}),u.jsxs("div",{className:"text-xs font-mono mt-1",children:[n.deliveryCoordinates.lat.toFixed(6),", ",n.deliveryCoordinates.lng.toFixed(6)]})]})]})]}),u.jsx("p",{className:"text-sm text-green-700 mt-4",children:"Package location will start at pickup coordinates and update as the carrier moves."})]}),u.jsx("div",{className:"bg-white rounded-xl shadow-lg p-6",children:u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center gap-4",children:[u.jsxs("div",{children:[u.jsxs("p",{className:"text-sm text-gray-600",children:[s.length," customers available • ",o.length," active carriers"]}),n.pickupCoordinates&&n.deliveryCoordinates&&u.jsx("p",{className:"text-sm text-green-600 mt-1",children:"✓ Ready for location-based tracking"})]}),u.jsxs("div",{className:"flex space-x-4",children:[u.jsx("button",{type:"button",onClick:()=>t("/deliveries"),className:"px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition",children:"Cancel"}),u.jsx("button",{type:"submit",disabled:h||s.length===0,className:"px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center shadow-md",children:h?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"}),m?"Getting coordinates...":"Creating Delivery..."]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"mr-2",children:"📦"}),"Create Delivery"]})})]})]})})]}),u.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-4",children:[u.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-blue-600 font-medium mb-2",children:"📍 Location Tracking"}),u.jsx("p",{className:"text-sm text-blue-700",children:"Package location starts at pickup address and updates automatically as the carrier moves."})]}),u.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-green-600 font-medium mb-2",children:"💰 Pricing"}),u.jsx("p",{className:"text-sm text-green-700",children:"Distance-based calculation: M10 per km + 15% of package value (minimum M50)."})]}),u.jsxs("div",{className:"bg-purple-50 border border-purple-200 rounded-xl p-4",children:[u.jsx("div",{className:"text-purple-600 font-medium mb-2",children:"🚚 Carrier Assignment"}),u.jsx("p",{className:"text-sm text-purple-700",children:"Auto-assigns nearest available carrier if not manually assigned. OTP verification included."})]})]})]})}const gb=6048e5,P3=864e5,zx=Symbol.for("constructDateFrom");function Es(t,e){return typeof t=="function"?t(e):t&&typeof t=="object"&&zx in t?t[zx](e):t instanceof Date?new t.constructor(e):new Date(e)}function Sn(t,e){return Es(e||t,t)}let D3={};function Dh(){return D3}function Ml(t,e){var a,l,d,h;const n=Dh(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,s=Sn(t,e==null?void 0:e.in),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function Sd(t,e){return Ml(t,{...e,weekStartsOn:1})}function yb(t,e){const n=Sn(t,e==null?void 0:e.in),r=n.getFullYear(),s=Es(n,0);s.setFullYear(r+1,0,4),s.setHours(0,0,0,0);const i=Sd(s),o=Es(n,0);o.setFullYear(r,0,4),o.setHours(0,0,0,0);const a=Sd(o);return n.getTime()>=i.getTime()?r+1:n.getTime()>=a.getTime()?r:r-1}function Wx(t){const e=Sn(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function O3(t,...e){const n=Es.bind(null,e.find(r=>typeof r=="object"));return e.map(n)}function qx(t,e){const n=Sn(t,e==null?void 0:e.in);return n.setHours(0,0,0,0),n}function j3(t,e,n){const[r,s]=O3(n==null?void 0:n.in,t,e),i=qx(r),o=qx(s),a=+i-Wx(i),l=+o-Wx(o);return Math.round((a-l)/P3)}function M3(t,e){const n=yb(t,e),r=Es(t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),Sd(r)}function L3(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function V3(t){return!(!L3(t)&&typeof t!="number"||isNaN(+Sn(t)))}function F3(t,e){const n=Sn(t,e==null?void 0:e.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}const U3={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},B3=(t,e,n)=>{let r;const s=U3[t];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Yf(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const $3={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},z3={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},W3={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},q3={date:Yf({formats:$3,defaultWidth:"full"}),time:Yf({formats:z3,defaultWidth:"full"}),dateTime:Yf({formats:W3,defaultWidth:"full"})},H3={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},G3=(t,e,n,r)=>H3[t];function wa(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let s;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;s=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;s=t.values[a]||t.values[o]}const i=t.argumentCallback?t.argumentCallback(e):e;return s[i]}}const K3={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Q3={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Y3={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},X3={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},J3={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Z3={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},e5=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},t5={ordinalNumber:e5,era:wa({values:K3,defaultWidth:"wide"}),quarter:wa({values:Q3,defaultWidth:"wide",argumentCallback:t=>t-1}),month:wa({values:Y3,defaultWidth:"wide"}),day:wa({values:X3,defaultWidth:"wide"}),dayPeriod:wa({values:J3,defaultWidth:"wide",formattingValues:Z3,defaultFormattingWidth:"wide"})};function xa(t){return(e,n={})=>{const r=n.width,s=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?r5(a,f=>f.test(o)):n5(a,f=>f.test(o));let d;d=t.valueCallback?t.valueCallback(l):l,d=n.valueCallback?n.valueCallback(d):d;const h=e.slice(o.length);return{value:d,rest:h}}}function n5(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function r5(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function s5(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const s=r[0],i=e.match(t.parsePattern);if(!i)return null;let o=t.valueCallback?t.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(s.length);return{value:o,rest:a}}}const i5=/^(\d+)(th|st|nd|rd)?/i,o5=/\d+/i,a5={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l5={any:[/^b/i,/^(a|c)/i]},c5={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},u5={any:[/1/i,/2/i,/3/i,/4/i]},d5={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h5={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f5={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p5={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},m5={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},g5={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},y5={ordinalNumber:s5({matchPattern:i5,parsePattern:o5,valueCallback:t=>parseInt(t,10)}),era:xa({matchPatterns:a5,defaultMatchWidth:"wide",parsePatterns:l5,defaultParseWidth:"any"}),quarter:xa({matchPatterns:c5,defaultMatchWidth:"wide",parsePatterns:u5,defaultParseWidth:"any",valueCallback:t=>t+1}),month:xa({matchPatterns:d5,defaultMatchWidth:"wide",parsePatterns:h5,defaultParseWidth:"any"}),day:xa({matchPatterns:f5,defaultMatchWidth:"wide",parsePatterns:p5,defaultParseWidth:"any"}),dayPeriod:xa({matchPatterns:m5,defaultMatchWidth:"any",parsePatterns:g5,defaultParseWidth:"any"})},_5={code:"en-US",formatDistance:B3,formatLong:q3,formatRelative:G3,localize:t5,match:y5,options:{weekStartsOn:0,firstWeekContainsDate:1}};function v5(t,e){const n=Sn(t,e==null?void 0:e.in);return j3(n,F3(n))+1}function w5(t,e){const n=Sn(t,e==null?void 0:e.in),r=+Sd(n)-+M3(n);return Math.round(r/gb)+1}function _b(t,e){var h,f,m,y;const n=Sn(t,e==null?void 0:e.in),r=n.getFullYear(),s=Dh(),i=(e==null?void 0:e.firstWeekContainsDate)??((f=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??s.firstWeekContainsDate??((y=(m=s.locale)==null?void 0:m.options)==null?void 0:y.firstWeekContainsDate)??1,o=Es((e==null?void 0:e.in)||t,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const a=Ml(o,e),l=Es((e==null?void 0:e.in)||t,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const d=Ml(l,e);return+n>=+a?r+1:+n>=+d?r:r-1}function x5(t,e){var a,l,d,h;const n=Dh(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,s=_b(t,e),i=Es((e==null?void 0:e.in)||t,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Ml(i,e)}function E5(t,e){const n=Sn(t,e==null?void 0:e.in),r=+Ml(n,e)-+x5(n,e);return Math.round(r/gb)+1}function ve(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const Dr={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return ve(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):ve(n+1,2)},d(t,e){return ve(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return ve(t.getHours()%12||12,e.length)},H(t,e){return ve(t.getHours(),e.length)},m(t,e){return ve(t.getMinutes(),e.length)},s(t,e){return ve(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),s=Math.trunc(r*Math.pow(10,n-3));return ve(s,e.length)}},Ni={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Hx={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),s=r>0?r:1-r;return n.ordinalNumber(s,{unit:"year"})}return Dr.y(t,e)},Y:function(t,e,n,r){const s=_b(t,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return ve(o,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):ve(i,e.length)},R:function(t,e){const n=yb(t);return ve(n,e.length)},u:function(t,e){const n=t.getFullYear();return ve(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ve(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ve(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Dr.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return ve(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const s=E5(t,r);return e==="wo"?n.ordinalNumber(s,{unit:"week"}):ve(s,e.length)},I:function(t,e,n){const r=w5(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):ve(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):Dr.d(t,e)},D:function(t,e,n){const r=v5(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):ve(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ve(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(s,{width:"short",context:"formatting"});case"eeee":default:return n.day(s,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const s=t.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ve(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(s,{width:"narrow",context:"standalone"});case"cccccc":return n.day(s,{width:"short",context:"standalone"});case"cccc":default:return n.day(s,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return ve(s,e.length);case"io":return n.ordinalNumber(s,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const s=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let s;switch(r===12?s=Ni.noon:r===0?s=Ni.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let s;switch(r>=17?s=Ni.evening:r>=12?s=Ni.afternoon:r>=4?s=Ni.morning:s=Ni.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Dr.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):Dr.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):ve(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):ve(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Dr.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Dr.s(t,e)},S:function(t,e){return Dr.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Kx(r);case"XXXX":case"XX":return zs(r);case"XXXXX":case"XXX":default:return zs(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return Kx(r);case"xxxx":case"xx":return zs(r);case"xxxxx":case"xxx":default:return zs(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Gx(r,":");case"OOOO":default:return"GMT"+zs(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Gx(r,":");case"zzzz":default:return"GMT"+zs(r,":")}},t:function(t,e,n){const r=Math.trunc(+t/1e3);return ve(r,e.length)},T:function(t,e,n){return ve(+t,e.length)}};function Gx(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=Math.trunc(r/60),i=r%60;return i===0?n+String(s):n+String(s)+e+ve(i,2)}function Kx(t,e){return t%60===0?(t>0?"-":"+")+ve(Math.abs(t)/60,2):zs(t,e)}function zs(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),s=ve(Math.trunc(r/60),2),i=ve(r%60,2);return n+s+e+i}const Qx=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},vb=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},T5=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],s=n[2];if(!s)return Qx(t,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",Qx(r,e)).replace("{{time}}",vb(s,e))},I5={p:vb,P:T5},C5=/^D+$/,N5=/^Y+$/,S5=["D","DD","YY","YYYY"];function b5(t){return C5.test(t)}function k5(t){return N5.test(t)}function A5(t,e,n){const r=R5(t,e,n);if(console.warn(r),S5.includes(t))throw new RangeError(r)}function R5(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const P5=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,D5=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,O5=/^'([^]*?)'?$/,j5=/''/g,M5=/[a-zA-Z]/;function Ja(t,e,n){var h,f,m,y;const r=Dh(),s=r.locale??_5,i=r.firstWeekContainsDate??((f=(h=r.locale)==null?void 0:h.options)==null?void 0:f.firstWeekContainsDate)??1,o=r.weekStartsOn??((y=(m=r.locale)==null?void 0:m.options)==null?void 0:y.weekStartsOn)??0,a=Sn(t,n==null?void 0:n.in);if(!V3(a))throw new RangeError("Invalid time value");let l=e.match(D5).map(N=>{const _=N[0];if(_==="p"||_==="P"){const A=I5[_];return A(N,s.formatLong)}return N}).join("").match(P5).map(N=>{if(N==="''")return{isToken:!1,value:"'"};const _=N[0];if(_==="'")return{isToken:!1,value:L5(N)};if(Hx[_])return{isToken:!0,value:N};if(_.match(M5))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:N}});s.localize.preprocessor&&(l=s.localize.preprocessor(a,l));const d={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(N=>{if(!N.isToken)return N.value;const _=N.value;(k5(_)||b5(_))&&A5(_,e,String(t));const A=Hx[_[0]];return A(a,_,s.localize,d)}).join("")}function L5(t){const e=t.match(O5);return e?e[1].replace(j5,"'"):t}function V5(){const[t,e]=P.useState([]),[n,r]=P.useState(!0),[s,i]=P.useState("all"),[o,a]=P.useState(""),[l,d]=P.useState({total:0,pending:0,assigned:0,inTransit:0,delivered:0,revenue:0});P.useEffect(()=>{const _=vs(or(Ze,"deliveries"),UM("createdAt","desc")),A=ad(_,x=>{const E=[];let b={total:0,pending:0,assigned:0,inTransit:0,delivered:0,revenue:0};x.forEach(D=>{var k,w,C;const j=D.data(),F={id:D.id,trackingCode:j.trackingCode||`PTR-${D.id.slice(0,6)}`,status:j.status||"pending",customerName:j.customerName||"Unknown",customerPhone:j.customerPhone||"",pickupAddress:j.pickupAddress||"",deliveryAddress:j.deliveryAddress||"",carrierName:j.carrierName,priority:j.priority||"standard",paymentAmount:j.paymentAmount||0,createdAt:((k=j.createdAt)==null?void 0:k.toDate())||new Date,pickupDateTime:(w=j.pickupDateTime)==null?void 0:w.toDate(),deliveryDate:(C=j.deliveryDate)==null?void 0:C.toDate()};E.push(F),b.total++,(F.status==="pending"||F.status==="created")&&b.pending++,F.status==="assigned"&&b.assigned++,F.status==="in_transit"&&b.inTransit++,F.status==="delivered"&&(b.delivered++,b.revenue+=F.paymentAmount)}),e(E),d(b),r(!1)},x=>{console.error("Error loading deliveries:",x),ne.error("Failed to load deliveries"),r(!1)});return()=>A()},[]);const h=t.filter(_=>{if(s!=="all"&&_.status!==s)return!1;if(o){const A=o.toLowerCase();return _.trackingCode.toLowerCase().includes(A)||_.customerName.toLowerCase().includes(A)||_.customerPhone.includes(A)||_.pickupAddress.toLowerCase().includes(A)||_.deliveryAddress.toLowerCase().includes(A)||_.carrierName&&_.carrierName.toLowerCase().includes(A)}return!0}),f=async(_,A)=>{try{await Eo(Nn(Ze,"deliveries",_),{status:A,updatedAt:se.now(),...A==="assigned"&&{assignedAt:se.now()},...A==="picked_up"&&{pickedUpAt:se.now()},...A==="in_transit"&&{inTransitAt:se.now()},...A==="delivered"&&{deliveredAt:se.now()}}),ne.success(`Status updated to ${A.replace("_"," ")}`)}catch(x){console.error("Error updating status:",x),ne.error("Failed to update status")}},m=async _=>{try{const A=vs(or(Ze,"users"),Ht("role","==","carrier"),Ht("isApproved","==",!0),Ht("status","==","active")),x=await od(A);if(x.empty){ne.error("No available carriers");return}const E=x.docs[0];await Eo(Nn(Ze,"deliveries",_),{status:"assigned",carrierId:E.id,carrierName:E.data().fullName,assignedAt:se.now(),updatedAt:se.now()}),ne.success(`Assigned to ${E.data().fullName}`)}catch(A){console.error("Error assigning carrier:",A),ne.error("Failed to assign carrier")}},y=_=>{switch(_){case"pending":case"created":return"bg-yellow-100 text-yellow-800";case"assigned":return"bg-blue-100 text-blue-800";case"picked_up":return"bg-purple-100 text-purple-800";case"in_transit":return"bg-indigo-100 text-indigo-800";case"out_for_delivery":return"bg-orange-100 text-orange-800";case"delivered":return"bg-green-100 text-green-800";case"cancelled":return"bg-red-100 text-red-800";default:return"bg-gray-100 text-gray-800"}},N=_=>{switch(_){case"urgent":return u.jsx("span",{className:"px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full",children:"Urgent"});case"express":return u.jsx("span",{className:"px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full",children:"Express"});default:return u.jsx("span",{className:"px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full",children:"Standard"})}};return n?u.jsx("div",{className:"flex justify-center items-center h-64",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):u.jsxs("div",{children:[u.jsx(wi,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Active Deliveries"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Monitor and manage all deliveries in real-time"})]}),u.jsxs(Dn,{to:"/deliveries/create",className:"mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center",children:[u.jsx("span",{className:"mr-2",children:"+"})," Create New Delivery"]})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-4 mb-8",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Total"}),u.jsx("div",{className:"text-2xl font-bold",children:l.total})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Pending"}),u.jsx("div",{className:"text-2xl font-bold text-yellow-600",children:l.pending})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Assigned"}),u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:l.assigned})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"In Transit"}),u.jsx("div",{className:"text-2xl font-bold text-indigo-600",children:l.inTransit})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Delivered"}),u.jsx("div",{className:"text-2xl font-bold text-green-600",children:l.delivered})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Revenue"}),u.jsxs("div",{className:"text-2xl font-bold text-purple-600",children:["M",l.revenue.toFixed(2)]})]})]}),u.jsx("div",{className:"bg-white rounded-xl shadow p-6 mb-6",children:u.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>i("all"),className:`px-4 py-2 rounded-lg ${s==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700"}`,children:"All"}),u.jsx("button",{onClick:()=>i("pending"),className:`px-4 py-2 rounded-lg ${s==="pending"?"bg-yellow-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Pending"}),u.jsx("button",{onClick:()=>i("assigned"),className:`px-4 py-2 rounded-lg ${s==="assigned"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Assigned"}),u.jsx("button",{onClick:()=>i("in_transit"),className:`px-4 py-2 rounded-lg ${s==="in_transit"?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700"}`,children:"In Transit"}),u.jsx("button",{onClick:()=>i("delivered"),className:`px-4 py-2 rounded-lg ${s==="delivered"?"bg-green-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Delivered"})]}),u.jsxs("div",{className:"relative",children:[u.jsx("input",{type:"text",placeholder:"Search deliveries...",value:o,onChange:_=>a(_.target.value),className:"pl-10 pr-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"}),u.jsx("span",{className:"absolute left-3 top-2.5 text-gray-400",children:"🔍"})]})]})})]}),h.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"📦"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"No deliveries found"}),u.jsx("p",{className:"text-gray-500 mb-6",children:o||s!=="all"?"Try changing your search or filter":"Create your first delivery to get started"}),u.jsx(Dn,{to:"/deliveries/create",className:"inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Create First Delivery"})]}):u.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden",children:[u.jsx("div",{className:"overflow-x-auto",children:u.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[u.jsx("thead",{className:"bg-gray-50",children:u.jsxs("tr",{children:[u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Tracking & Customer"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Route"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Carrier"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Payment"}),u.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Actions"})]})}),u.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:h.map(_=>u.jsxs("tr",{className:"hover:bg-gray-50",children:[u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("span",{className:"text-lg mr-2",children:"📦"}),u.jsxs("div",{children:[u.jsx("div",{className:"font-medium text-gray-900",children:_.trackingCode}),u.jsx("div",{className:"text-sm text-gray-500",children:_.customerName}),u.jsx("div",{className:"text-xs text-gray-400",children:Ja(_.createdAt,"MMM d, h:mm a")})]})]}),N(_.priority)]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsx("div",{className:"font-medium text-gray-900",children:"From:"}),u.jsx("div",{className:"text-gray-500 truncate max-w-xs",children:_.pickupAddress}),u.jsx("div",{className:"font-medium text-gray-900 mt-2",children:"To:"}),u.jsx("div",{className:"text-gray-500 truncate max-w-xs",children:_.deliveryAddress})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-medium ${y(_.status)}`,children:_.status.replace("_"," ").toUpperCase()})}),u.jsx("td",{className:"px-6 py-4",children:u.jsx("div",{className:"text-sm",children:_.carrierName?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"font-medium text-gray-900",children:_.carrierName}),u.jsx("div",{className:"text-gray-500",children:"Assigned"})]}):u.jsx("span",{className:"text-gray-400",children:"Not assigned"})})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"text-sm",children:[u.jsxs("div",{className:"font-medium text-gray-900",children:["M",_.paymentAmount.toFixed(2)]}),u.jsx("div",{className:"text-gray-500",children:"COD"})]})}),u.jsx("td",{className:"px-6 py-4",children:u.jsxs("div",{className:"flex flex-col space-y-2",children:[u.jsxs("div",{className:"flex space-x-2",children:[u.jsx(Dn,{to:`/deliveries/${_.id}`,className:"px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200",children:"View"}),_.status==="pending"&&u.jsx("button",{onClick:()=>m(_.id),className:"px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200",children:"Assign"}),_.status==="assigned"&&u.jsx("button",{onClick:()=>f(_.id,"picked_up"),className:"px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm hover:bg-purple-200",children:"Mark Picked"})]}),u.jsxs("div",{className:"flex space-x-1",children:[_.status==="picked_up"&&u.jsx("button",{onClick:()=>f(_.id,"in_transit"),className:"px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs hover:bg-indigo-200",children:"Start Transit"}),_.status==="in_transit"&&u.jsx("button",{onClick:()=>f(_.id,"delivered"),className:"px-2 py-1 bg-green-100 text-green-700 rounded text-xs hover:bg-green-200",children:"Mark Delivered"})]})]})})]},_.id))})]})}),u.jsx("div",{className:"px-6 py-4 border-t border-gray-200",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"text-sm text-gray-500",children:["Showing"," ",u.jsx("span",{className:"font-medium",children:h.length})," ","of ",u.jsx("span",{className:"font-medium",children:t.length})," ","deliveries"]}),u.jsxs("div",{className:"text-sm text-gray-500",children:["Last updated: ",Ja(new Date,"h:mm:ss a")]})]})})]}),u.jsxs("div",{className:"mt-8 grid grid-cols-1 md:grid-cols-3 gap-6",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-semibold text-lg mb-4",children:"📊 Delivery Insights"}),u.jsxs("ul",{className:"space-y-3 text-sm",children:[u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Avg delivery time:"}),u.jsx("span",{className:"font-medium",children:"2.5 hours"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Success rate:"}),u.jsx("span",{className:"font-medium text-green-600",children:"98.2%"})]}),u.jsxs("li",{className:"flex justify-between",children:[u.jsx("span",{className:"text-gray-600",children:"Today's deliveries:"}),u.jsx("span",{className:"font-medium",children:l.delivered})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-semibold text-lg mb-4",children:"🚨 Urgent Actions"}),u.jsx("div",{className:"space-y-3",children:t.filter(_=>_.status==="pending").slice(0,2).map(_=>u.jsxs("div",{className:"flex items-center justify-between p-3 bg-yellow-50 rounded-lg",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-medium",children:_.trackingCode}),u.jsx("div",{className:"text-sm text-gray-600",children:"Needs assignment"})]}),u.jsx("button",{onClick:()=>m(_.id),className:"px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-sm hover:bg-yellow-200",children:"Assign"})]},_.id))})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h3",{className:"font-semibold text-lg mb-4",children:"📈 Performance"}),u.jsxs("div",{className:"text-center",children:[u.jsxs("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:[t.length>0?Math.round(l.delivered/t.length*100):0,"%"]}),u.jsx("div",{className:"text-sm text-gray-600",children:"Completion Rate"}),u.jsx("div",{className:"mt-4",children:u.jsx("div",{className:"h-2 bg-gray-200 rounded-full overflow-hidden",children:u.jsx("div",{className:"h-full bg-blue-600 rounded-full",style:{width:`${t.length>0?l.delivered/t.length*100:0}%`}})})})]})]})]})]})}function F5(){const{id:t}=s6(),e=kh(),[n,r]=P.useState(null),[s,i]=P.useState(!0);P.useEffect(()=>{t&&o(t)},[t]);const o=async h=>{var f,m,y,N;try{const _=Nn(Ze,"deliveries",h),A=await _h(_);if(A.exists()){const x=A.data();r({id:A.id,trackingCode:x.trackingCode,status:x.status,customerName:x.customerName,customerPhone:x.customerPhone,customerId:x.customerId,pickupAddress:x.pickupAddress,pickupContactName:x.pickupContactName,pickupContactPhone:x.pickupContactPhone,pickupInstructions:x.pickupInstructions,pickupDateTime:(f=x.pickupDateTime)==null?void 0:f.toDate(),deliveryAddress:x.deliveryAddress,deliveryContactName:x.deliveryContactName,deliveryContactPhone:x.deliveryContactPhone,deliveryInstructions:x.deliveryInstructions,deliveryDate:(m=x.deliveryDate)==null?void 0:m.toDate(),carrierName:x.carrierName,carrierId:x.carrierId,packageDescription:x.packageDescription,packageWeight:x.packageWeight,packageDimensions:x.packageDimensions,paymentMethod:x.paymentMethod,paymentAmount:x.paymentAmount,paymentStatus:x.paymentStatus,priority:x.priority,notes:x.notes,createdAt:(y=x.createdAt)==null?void 0:y.toDate(),updatedAt:(N=x.updatedAt)==null?void 0:N.toDate()})}else ne.error("Delivery not found"),e("/deliveries/active")}catch(_){console.error("Error loading delivery:",_),ne.error("Failed to load delivery details")}finally{i(!1)}},a=async h=>{if(n)try{await Eo(Nn(Ze,"deliveries",n.id),{status:h,updatedAt:se.now()}),ne.success(`Status updated to ${h.replace("_"," ")}`),o(n.id)}catch(f){console.error("Error updating status:",f),ne.error("Failed to update status")}};if(s)return u.jsx("div",{className:"flex justify-center items-center h-64",children:u.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})});if(!n)return u.jsxs("div",{className:"text-center py-12",children:[u.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Delivery not found"}),u.jsx("button",{onClick:()=>e("/deliveries/active"),className:"mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg",children:"Back to Deliveries"})]});const l=[{key:"pending",label:"Created"},{key:"assigned",label:"Assigned"},{key:"picked_up",label:"Picked Up"},{key:"in_transit",label:"In Transit"},{key:"delivered",label:"Delivered"}],d=l.findIndex(h=>h.key===n.status);return u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx(wi,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{children:[u.jsx("button",{onClick:()=>e("/deliveries/active"),className:"text-blue-600 hover:text-blue-800 mb-4 inline-flex items-center",children:"← Back to Deliveries"}),u.jsxs("h1",{className:"text-3xl font-bold text-gray-800",children:["Delivery: ",n.trackingCode]}),u.jsxs("p",{className:"text-gray-600 mt-2",children:["Created on"," ",Ja(n.createdAt,"MMMM d, yyyy 'at' h:mm a")]})]}),u.jsxs("div",{className:"flex space-x-3",children:[u.jsx("button",{className:"px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",children:"Print"}),u.jsx("button",{className:"px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",children:"Share"})]})]}),u.jsxs("div",{className:"mb-8 bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"Delivery Status"}),u.jsx("div",{className:"flex items-center justify-between mb-6",children:l.map((h,f)=>u.jsxs("div",{className:"flex flex-col items-center relative",children:[u.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${f<=d?"bg-blue-600 text-white":"bg-gray-200 text-gray-400"}`,children:f+1}),u.jsx("span",{className:"mt-2 text-sm font-medium",children:h.label}),f<l.length-1&&u.jsx("div",{className:`absolute top-5 left-10 w-full h-0.5 ${f<d?"bg-blue-600":"bg-gray-200"}`})]},h.key))}),u.jsxs("div",{className:"flex space-x-3",children:[n.status==="pending"&&u.jsx("button",{onClick:()=>a("assigned"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Assign to Carrier"}),n.status==="assigned"&&u.jsx("button",{onClick:()=>a("picked_up"),className:"px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",children:"Mark as Picked Up"}),n.status==="picked_up"&&u.jsx("button",{onClick:()=>a("in_transit"),className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:"Start Transit"}),n.status==="in_transit"&&u.jsx("button",{onClick:()=>a("delivered"),className:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700",children:"Mark as Delivered"}),u.jsx("span",{className:`px-4 py-2 rounded-full font-medium ${n.status==="pending"?"bg-yellow-100 text-yellow-800":n.status==="assigned"?"bg-blue-100 text-blue-800":n.status==="picked_up"?"bg-purple-100 text-purple-800":n.status==="in_transit"?"bg-indigo-100 text-indigo-800":"bg-green-100 text-green-800"}`,children:n.status.replace("_"," ").toUpperCase()})]})]})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[u.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"📦 Package Details"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Description"}),u.jsx("p",{className:"mt-1 font-medium",children:n.packageDescription})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Weight"}),u.jsx("p",{className:"mt-1 font-medium",children:n.packageWeight?`${n.packageWeight} kg`:"Not specified"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Dimensions"}),u.jsx("p",{className:"mt-1 font-medium",children:n.packageDimensions||"Not specified"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Priority"}),u.jsx("p",{className:"mt-1 font-medium capitalize",children:n.priority})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"📍 Pickup Details"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Address"}),u.jsx("p",{className:"mt-1 font-medium",children:n.pickupAddress})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Contact Name"}),u.jsx("p",{className:"mt-1 font-medium",children:n.pickupContactName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Contact Phone"}),u.jsx("p",{className:"mt-1 font-medium",children:n.pickupContactPhone})]})]}),n.pickupInstructions&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Instructions"}),u.jsx("p",{className:"mt-1 font-medium",children:n.pickupInstructions})]}),n.pickupDateTime&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Scheduled Pickup"}),u.jsx("p",{className:"mt-1 font-medium",children:Ja(n.pickupDateTime,"MMMM d, yyyy 'at' h:mm a")})]})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"🏁 Delivery Details"}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Address"}),u.jsx("p",{className:"mt-1 font-medium",children:n.deliveryAddress})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Recipient Name"}),u.jsx("p",{className:"mt-1 font-medium",children:n.deliveryContactName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Recipient Phone"}),u.jsx("p",{className:"mt-1 font-medium",children:n.deliveryContactPhone})]})]}),n.deliveryInstructions&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Instructions"}),u.jsx("p",{className:"mt-1 font-medium",children:n.deliveryInstructions})]}),n.deliveryDate&&u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Delivery Date"}),u.jsx("p",{className:"mt-1 font-medium",children:Ja(n.deliveryDate,"MMMM d, yyyy")})]})]})]})]}),u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"👤 Customer Information"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Name"}),u.jsx("p",{className:"mt-1 font-medium",children:n.customerName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Phone"}),u.jsx("p",{className:"mt-1 font-medium",children:n.customerPhone})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Customer ID"}),u.jsx("p",{className:"mt-1 font-medium text-sm text-gray-400",children:n.customerId})]}),u.jsx("button",{className:"w-full mt-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200",children:"View Customer Profile"})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"🏍️ Carrier Information"}),n.carrierName?u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Name"}),u.jsx("p",{className:"mt-1 font-medium",children:n.carrierName})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Status"}),u.jsx("p",{className:"mt-1 font-medium text-green-600",children:"Active"})]}),u.jsx("button",{className:"w-full mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200",children:"View Carrier Profile"})]}):u.jsxs("div",{className:"text-center py-4",children:[u.jsx("p",{className:"text-gray-500 mb-4",children:"No carrier assigned yet"}),u.jsx("button",{onClick:()=>a("assigned"),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Assign Carrier"})]})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"💰 Payment Information"}),u.jsxs("div",{className:"space-y-3",children:[u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Amount"}),u.jsxs("p",{className:"mt-1 text-2xl font-bold text-gray-800",children:["M",n.paymentAmount.toFixed(2)]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Method"}),u.jsx("p",{className:"mt-1 font-medium capitalize",children:n.paymentMethod.replace("_"," ")})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-500",children:"Status"}),u.jsx("span",{className:`mt-1 inline-block px-3 py-1 rounded-full text-sm ${n.paymentStatus==="paid"?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:n.paymentStatus.toUpperCase()})]})]})]}),n.notes&&u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"📝 Notes"}),u.jsx("p",{className:"text-gray-700",children:n.notes})]}),u.jsxs("div",{className:"bg-white rounded-xl shadow p-6",children:[u.jsx("h2",{className:"text-xl font-bold mb-4",children:"⚡ Quick Actions"}),u.jsxs("div",{className:"space-y-3",children:[u.jsx("button",{className:"w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",children:"Send Update to Customer"}),u.jsx("button",{className:"w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50",children:"Contact Carrier"}),u.jsx("button",{className:"w-full px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50",children:"Cancel Delivery"})]})]})]})]})]})}function U5(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Delivery Details"}),u.jsx("p",{className:"text-gray-600",children:"This page will show detailed delivery information."})]})}function B5(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Customers"}),u.jsx("p",{className:"text-gray-600",children:"This page will list all customers."})]})}function $5(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Customer Details"}),u.jsx("p",{className:"text-gray-600",children:"This page will show detailed customer information."})]})}function z5(){const[t,e]=P.useState([]),[n,r]=P.useState([]),[s,i]=P.useState({}),[o,a]=P.useState({}),[l,d]=P.useState(!1),[h,f]=P.useState(null),[m,y]=P.useState("all"),N=P.useRef(null),_=P.useRef(null),A=P.useRef(new Map),x=P.useRef(null),E=P.useRef(null),b=P.useRef(null),D={lat:-29.31,lng:27.48};P.useEffect(()=>{const C=()=>{var R;return(R=window.google)!=null&&R.maps?(console.log("✅ Google Maps API is loaded"),d(!0),!0):!1};if(C())return;const I=()=>{C()&&window.removeEventListener("mapsReady",I)};window.addEventListener("mapsReady",I);const S=setTimeout(()=>{var R;(R=window.google)!=null&&R.maps||(window.removeEventListener("mapsReady",I),f("Google Maps failed to load. Please refresh the page."))},15e3);return()=>{window.removeEventListener("mapsReady",I),clearTimeout(S)}},[]),P.useEffect(()=>{const C=vs(or(Ze,"users"),Ht("role","==","carrier"),Ht("isApproved","==",!0)),I=ad(C,ee=>{const B=[];ee.forEach(K=>{var ye;const G=K.data(),de=s[K.id];if(de||G.currentLocation){const Kn=de?{lat:de.lat,lng:de.lng,timestamp:new Date(de.timestamp)}:{lat:G.currentLocation.lat,lng:G.currentLocation.lng,timestamp:((ye=G.currentLocation.timestamp)==null?void 0:ye.toDate())||new Date};B.push({id:K.id,name:G.fullName||"Unknown Carrier",phone:G.phone||"",vehicleType:G.vehicleType||"Vehicle",status:G.status||"active",location:Kn})}}),e(B)},ee=>{console.error("Error loading carriers:",ee)}),S=vs(or(Ze,"deliveries"),Ht("status","in",["assigned","picked_up","in_transit","out_for_delivery"])),R=ad(S,ee=>{const B=[];ee.forEach(K=>{const G=K.data(),de=o[K.id],ye=de?{lat:de.lat,lng:de.lng}:G.currentLocation;B.push({id:K.id,trackingCode:G.trackingCode,status:G.status,pickupAddress:G.pickupAddress,deliveryAddress:G.deliveryAddress,carrierName:G.carrierName,currentLocation:ye})}),r(B)},ee=>{console.error("Error loading deliveries:",ee)}),T=Cx(Px,"tracks"),Y=Nx(T,ee=>{const B=ee.val()||{};i(B)}),Ne=Cx(Px,"deliveryTracks"),Se=Nx(Ne,ee=>{const B=ee.val()||{};a(B)});return()=>{I(),R();try{Y&&Y()}catch{}try{Se&&Se()}catch{}}},[]),P.useEffect(()=>{if(!(!l||!window.google||!N.current)){console.log("🔄 Initializing Google Map...");try{const C={center:D,zoom:12,mapTypeId:window.google.maps.MapTypeId.ROADMAP,zoomControl:!0,mapTypeControl:!1,scaleControl:!0,streetViewControl:!0,rotateControl:!1,fullscreenControl:!0,styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}]},I=new window.google.maps.Map(N.current,C);_.current=I,console.log("✅ Google Map initialized successfully");const S=new window.google.maps.Marker({position:D,map:I,title:"Maseru, Lesotho",label:"📍"}),R=new window.google.maps.InfoWindow({content:'<div class="p-2"><strong>Maseru, Lesotho</strong><br>Default map center</div>'});S.addListener("click",()=>{R.open(I,S)}),A.current=new Map,A.current.set("test-marker",S),f(null)}catch(C){console.error("❌ Error initializing map:",C),f("Failed to initialize map. Please check console for details.")}}},[l]);const j=P.useCallback(()=>{if(!_.current||!window.google||!l)return;const C=[];(m==="all"||m==="carriers")&&t.forEach(T=>{C.push({id:`carrier-${T.id}`,type:"carrier",lat:T.location.lat,lng:T.location.lng,title:`${T.name} - ${T.vehicleType}`,content:`
            <div style="padding: 10px; min-width: 200px; font-family: system-ui;">
              <h3 style="margin: 0 0 5px 0; color: #1E40AF; font-size: 14px; font-weight: 600;">${T.name}</h3>
              <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">${T.vehicleType}</p>
              <p style="margin: 0 0 5px 0; font-size: 12px;">📱 ${T.phone}</p>
              <p style="margin: 0 0 5px 0; font-size: 11px; color: #6B7280;">
                Status: <strong>${T.status}</strong>
              </p>
              <p style="margin: 0; font-size: 11px; color: #6B7280;">
                Updated: ${T.location.timestamp.toLocaleTimeString()}
              </p>
            </div>
          `})}),(m==="all"||m==="deliveries")&&n.forEach(T=>{T.currentLocation&&C.push({id:`delivery-${T.id}`,type:"delivery",lat:T.currentLocation.lat,lng:T.currentLocation.lng,title:`Delivery: ${T.trackingCode}`,content:`
              <div style="padding: 10px; min-width: 200px; font-family: system-ui;">
                <h3 style="margin: 0 0 5px 0; color: #7C3AED; font-size: 14px; font-weight: 600;">${T.trackingCode}</h3>
                <p style="margin: 0 0 5px 0; color: #4B5563; font-size: 12px;">
                  Status: ${T.status.replace("_"," ")}
                </p>
                <p style="margin: 0 0 5px 0; font-size: 11px;">
                  <strong>From:</strong> ${T.pickupAddress.substring(0,40)}...
                </p>
                <p style="margin: 0 0 5px 0; font-size: 11px;">
                  <strong>To:</strong> ${T.deliveryAddress.substring(0,40)}...
                </p>
                ${T.carrierName?`<p style="margin: 0; font-size: 11px; color: #6B7280;">
                      Carrier: ${T.carrierName}
                    </p>`:""}
              </div>
            `})});const I=new Set(A.current.keys()),S=new Set(C.map(T=>T.id));for(const T of I)if(!S.has(T)){const Y=A.current.get(T);Y&&(Y.setMap(null),A.current.delete(T))}const R=[];if(C.forEach(T=>{const Y=A.current.get(T.id),Ne={lat:T.lat,lng:T.lng};if(Y)Y.setPosition(Ne),R.push(Y);else try{const Se=T.type==="carrier"?"#3B82F6":T.type==="delivery"&&T.content.includes("delivered")?"#10B981":T.type==="delivery"&&T.content.includes("in_transit")?"#8B5CF6":"#F59E0B",ee={path:window.google.maps.SymbolPath.CIRCLE,fillColor:Se,fillOpacity:1,strokeColor:"#FFFFFF",strokeWeight:2,scale:T.type==="carrier"?10:8},B=new window.google.maps.Marker({position:Ne,map:null,icon:ee,title:T.title});B.addListener("click",()=>{E.current||(E.current=new window.google.maps.InfoWindow),E.current.setContent(T.content),E.current.open(_.current,B)}),A.current.set(T.id,B),R.push(B)}catch(Se){console.error(`Error creating ${T.type} marker:`,Se)}}),R.length>0)try{b.current&&b.current.clearMarkers(),R.length>5&&window.MarkerClusterer?(b.current=new window.MarkerClusterer({markers:R,map:_.current}),console.log("📍 Marker clustering enabled for",R.length,"markers")):R.forEach(Y=>{Y.setMap(_.current)});const T=new window.google.maps.LatLngBounds;R.forEach(Y=>{T.extend(Y.getPosition())}),T.isEmpty()||_.current.fitBounds(T)}catch(T){console.error("Error managing markers/clustering:",T)}},[t,n,m,l]);P.useEffect(()=>(x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{j()},300),()=>{x.current&&clearTimeout(x.current)}),[t,n,m,l,j]);const F=()=>{_.current&&window.google&&(_.current.setCenter(D),_.current.setZoom(12))},k=(C,I)=>{_.current&&window.google&&(_.current.setCenter({lat:C,lng:I}),_.current.setZoom(15))},w=()=>{const C=document.querySelector('script[src*="maps.googleapis.com"]');C&&C.remove(),d(!1);const I=document.createElement("script");I.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAwX-3N2xv84NUElCJRpKMh7UJpQEQnNH0&libraries=places,geometry",I.async=!0,I.defer=!0,I.onload=()=>{console.log("Google Maps script reloaded"),d(!0)},document.head.appendChild(I)};return l?h?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🗺️"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Map Error"}),u.jsx("p",{className:"text-red-600 mb-4",children:h}),u.jsxs("div",{className:"space-x-4",children:[u.jsx("button",{onClick:w,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Reload Google Maps"}),u.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700",children:"Refresh Page"})]})]}):u.jsxs("div",{children:[u.jsx(wi,{position:"top-right"}),u.jsxs("div",{className:"mb-8",children:[u.jsx("h1",{className:"text-3xl font-bold text-gray-800",children:"Live Tracking Map"}),u.jsx("p",{className:"text-gray-600 mt-2",children:"Real-time tracking of carriers and deliveries"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Active Carriers"}),u.jsx("div",{className:"text-2xl font-bold text-blue-600",children:t.length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Active Deliveries"}),u.jsx("div",{className:"text-2xl font-bold text-purple-600",children:n.length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"In Transit"}),u.jsx("div",{className:"text-2xl font-bold text-orange-600",children:n.filter(C=>C.status==="in_transit").length})]}),u.jsxs("div",{className:"bg-white p-4 rounded-xl shadow",children:[u.jsx("div",{className:"text-sm text-gray-500",children:"Map Status"}),u.jsx("div",{className:"text-2xl font-bold text-green-600",children:"✅ Live"})]})]}),u.jsx("div",{className:"bg-white rounded-xl shadow p-4 mb-6",children:u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:()=>y("all"),className:`px-4 py-2 rounded-lg ${m==="all"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700"}`,children:"Show All"}),u.jsxs("button",{onClick:()=>y("carriers"),className:`px-4 py-2 rounded-lg ${m==="carriers"?"bg-blue-600 text-white":"bg-gray-100 text-gray-700"}`,children:["Carriers Only (",t.length,")"]}),u.jsxs("button",{onClick:()=>y("deliveries"),className:`px-4 py-2 rounded-lg ${m==="deliveries"?"bg-purple-600 text-white":"bg-gray-100 text-gray-700"}`,children:["Deliveries Only (",n.length,")"]})]}),u.jsxs("div",{className:"flex flex-wrap gap-2",children:[u.jsx("button",{onClick:F,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200",children:"Center on Maseru"}),u.jsx("button",{onClick:w,className:"px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200",children:"Reload Map"})]})]})}),u.jsxs("div",{className:"bg-white rounded-xl shadow overflow-hidden mb-8",children:[u.jsx("div",{className:"border-b px-6 py-4 bg-gray-50",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsx("h3",{className:"font-medium text-gray-700",children:"Real-time Tracking View"}),u.jsxs("div",{className:"flex items-center space-x-4",children:[u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-blue-600 mr-2"}),u.jsxs("span",{className:"text-sm",children:["Carriers (",t.length,")"]})]}),u.jsxs("div",{className:"flex items-center",children:[u.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500 mr-2"}),u.jsxs("span",{className:"text-sm",children:["Deliveries (",n.length,")"]})]})]})]})}),u.jsx("div",{ref:N,className:"w-full h-[600px] bg-gray-100",style:{minHeight:"600px"}}),u.jsx("div",{className:"border-t px-6 py-4 bg-gray-50",children:u.jsxs("div",{className:"text-sm text-gray-500",children:["Click on markers for details. Map updates automatically.",u.jsx("button",{onClick:w,className:"ml-2 text-blue-600 hover:text-blue-800 underline",children:"Having issues? Reload map"})]})})]}),u.jsxs("div",{className:"mt-8",children:[u.jsx("h3",{className:"text-xl font-bold mb-4",children:"Active Carriers"}),t.length===0?u.jsxs("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:[u.jsx("div",{className:"text-6xl mb-4",children:"🏍️"}),u.jsx("h4",{className:"text-lg font-semibold text-gray-700 mb-2",children:"No active carriers with location data"}),u.jsx("p",{className:"text-gray-500",children:"Carriers will appear here when they start sharing their location"})]}):u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:t.map(C=>u.jsxs("div",{className:"bg-white rounded-xl shadow p-4 hover:shadow-lg transition",children:[u.jsxs("div",{className:"flex items-start justify-between",children:[u.jsxs("div",{children:[u.jsx("div",{className:"font-bold text-gray-800",children:C.name}),u.jsx("div",{className:"text-sm text-gray-600",children:C.vehicleType}),u.jsxs("div",{className:"text-sm text-gray-500 mt-1",children:["📱 ",C.phone]})]}),u.jsx("button",{onClick:()=>k(C.location.lat,C.location.lng),className:"px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200",children:"Locate on Map"})]}),u.jsxs("div",{className:"mt-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex justify-between",children:[u.jsx("span",{children:"Last updated:"}),u.jsx("span",{children:C.location.timestamp.toLocaleTimeString()})]}),u.jsxs("div",{className:"flex justify-between mt-1",children:[u.jsx("span",{children:"Location:"}),u.jsxs("span",{children:[C.location.lat.toFixed(4),","," ",C.location.lng.toFixed(4)]})]})]})]},C.id))})]})]}):u.jsxs("div",{className:"flex flex-col items-center justify-center h-96",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-700 mb-2",children:"Loading Google Maps..."}),u.jsx("p",{className:"text-gray-500 mb-4",children:"This may take a few moments"}),u.jsx("button",{onClick:w,className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700",children:"Reload Google Maps"})]})}function W5(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Analytics & Reports"}),u.jsx("p",{className:"text-gray-600",children:"This page will show performance metrics and reports."})]})}function q5(){return u.jsxs("div",{className:"p-8",children:[u.jsx("h1",{className:"text-3xl font-bold mb-4",children:"System Settings"}),u.jsx("p",{className:"text-gray-600",children:"This page will manage system configuration."})]})}function H5({user:t}){const[e,n]=P.useState(null),[r,s]=P.useState(!0);return P.useEffect(()=>{(async()=>{if(t){const o=await _h(Nn(Ze,"users",t.uid));o.exists()&&n(o.data())}s(!1)})()},[t]),r?u.jsx("div",{className:"flex items-center justify-center min-h-screen",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-600",children:"Loading dashboard..."})]})}):u.jsxs("div",{className:"flex min-h-screen bg-gray-50",children:[u.jsx(L6,{}),u.jsxs("div",{className:"flex-1 flex flex-col",children:[u.jsx(V6,{user:t,userProfile:e}),u.jsx("main",{className:"flex-1 p-6",children:u.jsxs(x6,{children:[u.jsx(Nt,{path:"/",element:u.jsx(v6,{to:"/dashboard",replace:!0})}),u.jsx(Nt,{path:"/dashboard",element:u.jsx(F6,{user:t,userProfile:e})}),u.jsx(Nt,{path:"/carriers/pending",element:u.jsx(S3,{})}),u.jsx(Nt,{path:"/carriers/active",element:u.jsx(b3,{})}),u.jsx(Nt,{path:"/carriers/:id",element:u.jsx(k3,{})}),u.jsx(Nt,{path:"/deliveries/create",element:u.jsx(R3,{})}),u.jsx(Nt,{path:"/deliveries/active",element:u.jsx(V5,{})}),u.jsx(Nt,{path:"/deliveries/:id",element:u.jsx(F5,{})}),u.jsx(Nt,{path:"/deliveries/history",element:u.jsx(U5,{})}),u.jsx(Nt,{path:"/customers",element:u.jsx(B5,{})}),u.jsx(Nt,{path:"/customers/:id",element:u.jsx($5,{})}),u.jsx(Nt,{path:"/tracking/live",element:u.jsx(z5,{})}),u.jsx(Nt,{path:"/analytics",element:u.jsx(W5,{})}),u.jsx(Nt,{path:"/settings",element:u.jsx(q5,{})})]})})]})]})}const G5="coordinator";function K5(){const[t,e]=P.useState(""),[n,r]=P.useState(""),[s,i]=P.useState(!1),[o,a]=P.useState(""),l=async d=>{d.preventDefault(),i(!0),a("");try{const f=(await oD(Td,t,n)).user,m=await _h(Nn(Ze,"users",f.uid));if(!m.exists())throw new Error("User record not found. Contact administrator.");if(m.data().role!==G5)throw new Error("Access denied. Not a coordinator account.")}catch(h){a(h.message||"Login failed")}finally{i(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900",children:u.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-10 w-96",children:[u.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"PTROS Coordinator Login"}),o&&u.jsx("p",{className:"text-red-600 text-center mb-4",children:o}),u.jsxs("form",{onSubmit:l,className:"space-y-6",children:[u.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:d=>e(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",required:!0,disabled:s}),u.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:d=>r(d.target.value),className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",required:!0,disabled:s}),u.jsx("button",{type:"submit",disabled:s,className:"w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50",children:s?"Signing in...":"Login"})]})]})})}const Yx="coordinator";function Q5(){const[t,e]=P.useState(!0),[n,r]=P.useState(null),[s,i]=P.useState(null);return P.useEffect(()=>{const o=cD(Td,async a=>{var l;if(a){const d=await _h(Nn(Ze,"users",a.uid)),h=d.exists()?(l=d.data())==null?void 0:l.role:null;r(a),i(h)}else r(null),i(null);e(!1)});return()=>o()},[]),u.jsxs(k6,{children:[u.jsxs(M6,{children:[t&&u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:u.jsxs("div",{className:"text-center",children:[u.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),u.jsx("p",{className:"mt-4 text-gray-700",children:"Loading PTROS Coordinator..."})]})}),!t&&!n&&u.jsx(K5,{}),!t&&n&&s!==Yx&&u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-red-50",children:u.jsxs("div",{className:"text-center p-10",children:[u.jsx("h1",{className:"text-4xl font-bold text-red-600 mb-6",children:"Access Denied"}),u.jsxs("p",{className:"text-xl mb-4",children:["This portal is for ",u.jsx("strong",{children:"Coordinators"})," only."]}),u.jsxs("p",{className:"text-lg mb-6",children:["Your role: ",u.jsx("strong",{children:s||"none"})]}),u.jsx("button",{onClick:()=>Td.signOut(),className:"px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700",children:"Logout"})]})}),!t&&n&&s===Yx&&u.jsx(H5,{user:n})]}),u.jsx(wi,{})]})}Xf.createRoot(document.getElementById("root")).render(u.jsx(aE.StrictMode,{children:u.jsx(Q5,{})}));
